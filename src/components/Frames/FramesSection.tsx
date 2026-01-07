import styled from 'styled-components';

import React from 'react';

import { AllFrames } from './AllFrames';
import { useFrameExtraction } from './useFrameExtraction';

const FrameExtractionWrapper: React.FC = () => {
	useFrameExtraction();
	return <AllFrames />;
};

export const FramesSection: React.FC = () => {
	return (
		<FramesContainer>
			<FrameExtractionWrapper />
		</FramesContainer>
	);
};

const FramesContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 5%;
	right: 15%;
	height: 25vh;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background: rgba(0, 0, 0, 0.8);
	border-top: 1px solid rgba(255, 255, 255, 0.1);
`;
