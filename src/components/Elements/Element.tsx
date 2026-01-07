import styled from 'styled-components';

import React, { useState } from 'react';

import type { Element as ElementType } from './deElement';

interface ElementProps {
	element: ElementType;
	isSelected: boolean;
	onClick: () => void;
	onDelete: () => void;
	onDragStart: (e: React.DragEvent) => void;
	onDragOver: (e: React.DragEvent) => void;
	onDrop: (e: React.DragEvent) => void;
	dragIndex: number;
}

export const Element: React.FC<ElementProps> = ({
	element,
	isSelected,
	onClick,
	onDelete,
	onDragStart,
	onDragOver,
	onDrop,
	dragIndex,
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleDelete = (e: React.MouseEvent) => {
		e.stopPropagation();
		onDelete();
	};

	return (
		<>
			<ElementContainer
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
				data-index={dragIndex}>
				<ElementImage src={element.imageUrl} alt={`Element ${element.order + 1}`} />
				{isHovered && (
					<DeleteButton
						onClick={handleDelete}
						type="button"
						aria-label="Delete element">
						×
					</DeleteButton>
				)}
			</ElementContainer>
		</>
	);
};

const ElementContainer = styled.div<{
	$isSelected: boolean;
	$isHovered: boolean;
}>`
	position: relative;
	min-width: 120px;
	width: 120px;
	height: 90px;
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

const ElementImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	pointer-events: none;
`;

const DeleteButton = styled.button`
	position: absolute;
	top: 4px;
	right: 4px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	border: none;
	background: rgba(255, 0, 0, 0.8);
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	font-weight: bold;
	line-height: 1;
	transition: background 0.2s ease;
	z-index: 10;

	&:hover {
		background: rgba(255, 0, 0, 1);
	}
`;

