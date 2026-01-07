import styled from 'styled-components';

import React, { useState } from 'react';

import { useProjectSettings } from '../Elements/useProjectSettings';
import { EmptyState, EmptyText } from '../shared/styled';
import { Frame } from './Frame';
import { useFrames } from './useFrames';

export const AllFrames: React.FC = () => {
	const { frames, selectedFrameId, selectFrame, removeFrame, reorderFrames } =
		useFrames();
	const { width, height } = useProjectSettings();
	const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

	const handleDragStart = (index: number) => (e: React.DragEvent) => {
		setDraggedIndex(index);
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', index.toString());
	};

	const handleDragOver = () => (e: React.DragEvent) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'move';
	};

	const handleDrop = (toIndex: number) => (e: React.DragEvent) => {
		e.preventDefault();
		if (draggedIndex !== null && draggedIndex !== toIndex) {
			reorderFrames(draggedIndex, toIndex);
		}
		setDraggedIndex(null);
	};

	const handleDragEnd = () => {
		setDraggedIndex(null);
	};

	if (frames.length === 0) {
		return (
			<EmptyState>
				<EmptyText>No frames. Select an element to extract frames.</EmptyText>
			</EmptyState>
		);
	}

	return (
		<FramesContainer onDragEnd={handleDragEnd}>
			{frames.map((frame, index) => (
				<Frame
					key={frame.id}
					frame={frame}
					isSelected={selectedFrameId === frame.id}
					onClick={() => selectFrame(frame.id)}
					onDelete={() => removeFrame(frame.id)}
					onDragStart={handleDragStart(index)}
					onDragOver={handleDragOver()}
					onDrop={handleDrop(index)}
					dragIndex={index}
					width={width}
					height={height}
				/>
			))}
		</FramesContainer>
	);
};

const FramesContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 48px;
	padding: 16px;
	overflow-x: auto;
	overflow-y: hidden;
	width: 100%;
	height: 100%;
	min-width: 0;
	align-items: center;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		height: 8px;
	}

	&::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 4px;

		&:hover {
			background: rgba(255, 255, 255, 0.5);
		}
	}
`;

