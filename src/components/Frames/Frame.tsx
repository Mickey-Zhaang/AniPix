import styled from 'styled-components';

import React, { useState } from 'react';

import { DeleteButtonBase } from '../shared/styled';
import type { Frame as FrameType } from './deFrame';

interface FrameProps {
	frame: FrameType;
	isSelected: boolean;
	onClick: () => void;
	onDelete: () => void;
	onDragStart: (e: React.DragEvent) => void;
	onDragOver: (e: React.DragEvent) => void;
	onDrop: (e: React.DragEvent) => void;
	dragIndex: number;
	width: number;
	height: number;
}

export const Frame: React.FC<FrameProps> = ({
	frame,
	isSelected,
	onClick,
	onDelete,
	onDragStart,
	onDragOver,
	onDrop,
	dragIndex,
	width,
	height,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation();
		onDelete();
	};

	// Calculate safe scale factor to ensure frames are visible
	// Minimum display size of 80px, or scale up by 2x if already larger
	const minDisplaySize = 80;
	const scaleFactor = Math.max(minDisplaySize / Math.min(width, height), 2);
	const scaledWidth = width * scaleFactor;
	const scaledHeight = height * scaleFactor;

	return (
		<FrameContainer
			draggable
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={onDrop}
			onClick={onClick}
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
			$isSelected={isSelected}
			$isHovered={isHovered}
			$width={scaledWidth}
			$height={scaledHeight}
			data-index={dragIndex}>
			<FrameImage src={frame.imageUrl} alt={`Frame ${frame.order + 1}`} />
			{isHovered && (
				<DeleteButton
					onClick={handleDelete}
					type="button"
					aria-label="Delete frame"
					$size={14}
					$top={2}
					$right={2}
					$fontSize={10}>
					×
				</DeleteButton>
			)}
		</FrameContainer>
	);
};

const FrameContainer = styled.div<{
	$isSelected: boolean;
	$isHovered: boolean;
	$width: number;
	$height: number;
}>`
	position: relative;
	width: ${({ $width }) => $width}px;
	height: ${({ $height }) => $height}px;
	flex-shrink: 0;
	border-radius: 8px;
	overflow: hidden;
	cursor: grab;
	transition: all 0.2s ease;
	border: 2px solid
		${({ $isSelected }) =>
			$isSelected ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
	background: rgba(40, 40, 40, 0.8);

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
	}

	&:active {
		cursor: grabbing;
	}

	&.dragging {
		opacity: 0.5;
	}
`;

const FrameImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	pointer-events: none;
`;

const DeleteButton = DeleteButtonBase;
