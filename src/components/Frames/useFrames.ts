import { useContext } from 'react';

import { FramesContext } from './FramesContext';
import type { FramesContextType } from './deFrame';

export const useFrames = (): FramesContextType => {
	const context = useContext(FramesContext);
	if (context === undefined) {
		throw new Error('useFrames must be used within a FramesProvider');
	}
	return context;
};

