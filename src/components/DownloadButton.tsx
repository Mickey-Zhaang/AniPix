import styled from 'styled-components';

import { DownloadIcon } from '../assets';

export const DownloadButton = () => {
	const onDownloadButtonPressed = () => {
		console.log('Downloading!');
	};

	return (
		<Button onClick={onDownloadButtonPressed} type="button">
			<DownloadIcon />
		</Button>
	);
};

const Button = styled.button`
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 15%;
	cursor: pointer;
	padding: 0;
	background-color: transparent;
	color: rgba(255, 255, 255, 0.6);
	overflow: hidden;
	transition: background-color 0.28s ease-in;

	&:hover {
		background-color: rgba(60, 60, 60, 0.5);
	}
`;
