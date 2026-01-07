import { useEffect, useRef, useState } from 'react';

import { useElements } from '../Elements/useElements';
import { useProjectSettings } from '../Elements/useProjectSettings';
import { extractFramesFromImage } from './extractFrames';
import { useFrames } from './useFrames';

export const useFrameExtraction = () => {
	const { selectedElementId, elements } = useElements();
	const { width, height } = useProjectSettings();
	const { addFrames, clearFrames } = useFrames();
	const [isExtracting, setIsExtracting] = useState(false);
	const lastExtractionRef = useRef<{
		elementId: string;
		width: number;
		height: number;
	} | null>(null);

	useEffect(() => {
		if (!selectedElementId) {
			clearFrames();
			lastExtractionRef.current = null;
			return;
		}

		const selectedElement = elements.find(
			element => element.id === selectedElementId
		);

		if (!selectedElement) {
			clearFrames();
			lastExtractionRef.current = null;
			return;
		}

		// Don't re-extract if same element and same settings
		if (
			lastExtractionRef.current &&
			lastExtractionRef.current.elementId === selectedElementId &&
			lastExtractionRef.current.width === width &&
			lastExtractionRef.current.height === height
		) {
			return;
		}

		// Extract frames
		setIsExtracting(true);
		extractFramesFromImage(
			selectedElement.imageUrl,
			width,
			height,
			selectedElementId
		)
			.then(extractedFrames => {
				addFrames(extractedFrames);
				setIsExtracting(false);
				lastExtractionRef.current = {
					elementId: selectedElementId,
					width,
					height,
				};
			})
			.catch(error => {
				console.error('Failed to extract frames:', error);
				setIsExtracting(false);
			});
	}, [selectedElementId, width, height, elements, addFrames, clearFrames]);

	return { isExtracting };
};

