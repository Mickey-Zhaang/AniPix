import styled from 'styled-components';

// Shared Tool Button - used by DownloadButton, ImportButton, AnimateButton
export const ToolButton = styled.button`
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

	&:hover:not(:disabled) {
		background-color: rgba(60, 60, 60, 0.5);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

// Shared Empty State Container
export const EmptyState = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

// Shared Empty Text
export const EmptyText = styled.p`
	color: rgba(255, 255, 255, 0.5);
	font-size: 14px;
	margin: 0;
`;

// Shared Delete Button (base styles, can be extended)
export const DeleteButtonBase = styled.button<{
	$size?: number;
	$top?: number;
	$right?: number;
	$fontSize?: number;
}>`
	position: absolute;
	top: ${({ $top = 4 }) => $top}px;
	right: ${({ $right = 4 }) => $right}px;
	width: ${({ $size = 20 }) => $size}px;
	height: ${({ $size = 20 }) => $size}px;
	border-radius: 50%;
	border: none;
	background: rgba(255, 0, 0, 0.8);
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ $fontSize = 18 }) => $fontSize}px;
	font-weight: bold;
	line-height: 1;
	transition: background 0.2s ease;
	z-index: 10;

	&:hover {
		background: rgba(255, 0, 0, 1);
	}
`;

