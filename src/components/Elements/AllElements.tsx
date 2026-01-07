import styled from 'styled-components';

import React, { useState } from 'react';

import { Element } from './Element';
import { useElements } from './useElements';

export const AllElements: React.FC = () => {
	const {
		elements,
		selectedElementId,
		selectElement,
		removeElement,
		reorderElements,
	} = useElements();
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
			reorderElements(draggedIndex, toIndex);
		}
		setDraggedIndex(null);
	};

	const handleDragEnd = () => {
		setDraggedIndex(null);
	};

	if (elements.length === 0) {
		return (
			<EmptyState>
				<EmptyText>No elements yet. Import images to get started.</EmptyText>
			</EmptyState>
		);
	}

	return (
		<ElementsContainer onDragEnd={handleDragEnd}>
			{elements.map((element, index) => (
				<Element
					key={element.id}
					element={element}
					isSelected={selectedElementId === element.id}
					onClick={() => selectElement(element.id)}
					onDelete={() => removeElement(element.id)}
					onDragStart={handleDragStart(index)}
					onDragOver={handleDragOver()}
					onDrop={handleDrop(index)}
					dragIndex={index}
				/>
			))}
		</ElementsContainer>
	);
};

const ElementsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 16px;
	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;
	height: 100%;
	align-items: center;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		width: 8px;
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

const EmptyState = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const EmptyText = styled.p`
	color: rgba(255, 255, 255, 0.5);
	font-size: 14px;
	margin: 0;
`;
