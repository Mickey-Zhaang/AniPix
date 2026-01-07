import { DownloadIcon } from '../../assets';
import { ToolButton } from '../shared/styled';

export const DownloadButton = () => {
	const onDownloadButtonPressed = () => {
		console.log('Downloading!');
	};

	return (
		<ToolButton onClick={onDownloadButtonPressed} type="button">
			<DownloadIcon />
		</ToolButton>
	);
};
