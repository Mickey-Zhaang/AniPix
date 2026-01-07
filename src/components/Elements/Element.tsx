import styled from 'styled-components';

import React, { useState } from 'react';

import { DeleteButtonBase } from '../shared/styled';
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

	const fileName = element.metadata?.fileName || `Element ${element.order + 1}`;

	return (
		<ElementWrapper>
			<FileNameLabel>{fileName}</FileNameLabel>
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
				<ElementImage
					src={element.imageUrl}
					alt={`Element ${element.order + 1}`}
				/>
				{isHovered && (
					<DeleteButton
						onClick={handleDelete}
						type="button"
						aria-label="Delete element"
						$size={20}
						$top={6}
						$right={4}
						$fontSize={18}>
						×
					</DeleteButton>
				)}
			</ElementContainer>
		</ElementWrapper>
	);
};

const ElementWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
`;

const FileNameLabel = styled.div`
	color: rgba(255, 255, 255, 0.5);
	font-size: 11px;
	margin-bottom: 3px;
	padding: 0 2px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
`;

const ElementContainer = styled.div<{
	$isSelected: boolean;
	$isHovered: boolean;
}>`
	position: relative;
	min-width: 120px;
	width: 170px;
	height: 80px;
	border-radius: 8px;
	cursor: grab;
	transition: all 0.28s ease;
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

const DeleteButton = DeleteButtonBase;
