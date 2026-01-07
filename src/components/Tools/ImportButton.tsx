import styled from 'styled-components';

import { ImportIcon } from '../../assets';

export const ImportButton = () => {
	const onImportButtonPressed = () => {
		console.log('Importing!');
	};

	return (
		<Button onClick={onImportButtonPressed} type="button">
			<ImportIcon />
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
