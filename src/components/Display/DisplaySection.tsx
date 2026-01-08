import styled from 'styled-components';

import React from 'react';

import { useProjectSettings } from '../Elements/useProjectSettings';
import { useFrames } from '../Frames/useFrames';
import { EmptyState, EmptyText } from '../shared/styled';

export const DisplaySection: React.FC = () => {
	const { frames, selectedFrameId } = useFrames();
	const { width, height } = useProjectSettings();
	const selectedFrame = frames.find(frame => frame.id === selectedFrameId);

	if (!selectedFrame) {
		return (
			<DisplayContainer>
				<EmptyState>
					<EmptyTextLarge>No frame selected</EmptyTextLarge>
				</EmptyState>
			</DisplayContainer>
		);
	}

	// Calculate safe scale factor to ensure frame is visible and larger
	// Minimum display size of 200px, or scale up by 4x if already larger
	const minDisplaySize = 200;
	const scaleFactor = Math.max(minDisplaySize / Math.min(width, height), 4);
	const scaledWidth = width * scaleFactor;
	const scaledHeight = height * scaleFactor;

	return (
		<DisplayContainer>
			<DisplayImage
				src={selectedFrame.imageUrl}
				alt={`Frame ${selectedFrame.order + 1}`}
				$width={scaledWidth}
				$height={scaledHeight}
			/>
		</DisplayContainer>
	);
};

const DisplayContainer = styled.div`
	position: fixed;
	top: 0;
	left: max(60px, min(5%, 85px));
	right: max(140px, min(15%, 270px));
	bottom: 25vh;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const DisplayImage = styled.img<{ $width: number; $height: number }>`
	width: ${({ $width }) => $width}px;
	height: ${({ $height }) => $height}px;
	max-width: 90%;
	max-height: 90%;
	object-fit: contain;
	border-radius: 10px;
	border: 2px solid rgba(255, 255, 255, 0.2);
	background: transparent;
	image-rendering: pixelated;
`;

const EmptyTextLarge = styled(EmptyText)`
	font-size: 18px;
`;
