import styled from 'styled-components';

import React from 'react';

import { AllElements } from './AllElements';
import { ProjectSettingsProvider } from './ProjectSettingsContext';
import { ProjectSettingsPanel } from './ProjectSettingsPanel';

interface ElementsSectionProps {
	children?: React.ReactNode;
}

export const ElementsSection: React.FC<ElementsSectionProps> = ({
	children,
}) => {
	return (
		<ProjectSettingsProvider>
			<ElementsContainer>
				<AllElements />
				<ProjectSettingsPanel />
				{children}
			</ElementsContainer>
		</ProjectSettingsProvider>
	);
};

const ElementsContainer = styled.div`
	position: fixed;
	right: 0;
	top: 0;
	height: 100vh;
	width: 15%;
	min-width: 90px;
	max-width: 270px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background: black;
	padding: 8px;
	align-items: center;
`;
