import styled from 'styled-components';

import React from 'react';

import { useElements } from '../Elements/useElements';

export const DisplaySection: React.FC = () => {
	const { elements, selectedElementId } = useElements();
	const selectedElement = elements.find(
		element => element.id === selectedElementId
	);

	if (!selectedElement) {
		return (
			<DisplayContainer>
				<EmptyState>
					<EmptyText>No element selected</EmptyText>
				</EmptyState>
			</DisplayContainer>
		);
	}

	return (
		<DisplayContainer>
			<DisplayImage
				src={selectedElement.imageUrl}
				alt={`Element ${selectedElement.order + 1}`}
			/>
		</DisplayContainer>
	);
};

const DisplayContainer = styled.div`
	position: fixed;
	top: 0;
	left: 5%;
	right: 5%;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const DisplayImage = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	background: transparent;
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
	font-size: 18px;
	margin: 0;
`;
