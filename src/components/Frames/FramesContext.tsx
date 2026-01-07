import React, { createContext, useCallback, useState } from 'react';

import type { Frame, FramesContextType } from './deFrame';

const FramesContext = createContext<FramesContextType | undefined>(undefined);

interface FramesProviderProps {
	children: React.ReactNode;
}

export const FramesProvider: React.FC<FramesProviderProps> = ({ children }) => {
	const [frames, setFrames] = useState<Frame[]>([]);
	const [selectedFrameId, setSelectedFrameId] = useState<string | null>(null);
	const [sourceElementId, setSourceElementId] = useState<string | null>(null);

	const addFrames = useCallback((newFrames: Frame[]) => {
		setFrames(newFrames.sort((a, b) => a.order - b.order));
		if (newFrames.length > 0) {
			setSourceElementId(newFrames[0].sourceElementId);
		}
	}, []);

	const removeFrame = useCallback((id: string) => {
		setFrames(prev => {
			const frameToRemove = prev.find(frame => frame.id === id);
			if (frameToRemove && frameToRemove.imageUrl.startsWith('data:')) {
				// Data URLs don't need cleanup, but we could revoke if using blob URLs
			}
			const newFrames = prev.filter(frame => frame.id !== id);
			if (selectedFrameId === id) {
				setSelectedFrameId(null);
			}
			return newFrames;
		});
	}, [selectedFrameId]);

	const reorderFrames = useCallback((fromIndex: number, toIndex: number) => {
		setFrames(prev => {
			const newFrames = [...prev];
			const [movedFrame] = newFrames.splice(fromIndex, 1);
			newFrames.splice(toIndex, 0, movedFrame);
			return newFrames.map((frame, index) => ({
				...frame,
				order: index,
			}));
		});
	}, []);

	const selectFrame = useCallback((id: string) => {
		setSelectedFrameId(id);
	}, []);

	const clearFrames = useCallback(() => {
		setFrames([]);
		setSelectedFrameId(null);
		setSourceElementId(null);
	}, []);

	const value: FramesContextType = {
		frames,
		selectedFrameId,
		sourceElementId,
		addFrames,
		removeFrame,
		reorderFrames,
		selectFrame,
		clearFrames,
	};

	return (
		<FramesContext.Provider value={value}>{children}</FramesContext.Provider>
	);
};

export { FramesContext };

