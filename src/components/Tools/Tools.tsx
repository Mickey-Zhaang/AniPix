import styled from 'styled-components';

import React from 'react';

interface ToolsProps {
	children?: React.ReactNode;
}

export const Tools: React.FC<ToolsProps> = ({ children }) => {
	return (
		<ToolsContainer>
			{React.Children.map(children, (child, index) => (
				<ToolItem key={index}>{child}</ToolItem>
			))}
		</ToolsContainer>
	);
};

const ToolsContainer = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	height: 100vh;
	width: 5%;
	min-width: 60px;
	max-width: 85px;
	display: flex;
	flex-direction: column;
	background: black;
	padding: 8px;
	align-items: center;
	overflow: hidden;
	border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const ToolItem = styled.div`
	width: 85%;
	aspect-ratio: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	svg,
	img {
		width: 24px;
		height: 24px;
	}
`;
