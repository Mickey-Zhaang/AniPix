import { useContext } from 'react';

import { ElementsContext } from './ElementsContext';
import type { ElementsContextType } from './deElement';

export const useElements = (): ElementsContextType => {
	const context = useContext(ElementsContext);
	if (context === undefined) {
		throw new Error('useElements must be used within an ElementsProvider');
	}
	return context;
};
