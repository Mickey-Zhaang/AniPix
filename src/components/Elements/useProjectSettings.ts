import { useContext } from 'react';

import { ProjectSettingsContext } from './ProjectSettingsContext';
import type { ProjectSettingsContextType } from './deProjectSettings';

export const useProjectSettings = (): ProjectSettingsContextType => {
	const context = useContext(ProjectSettingsContext);
	if (context === undefined) {
		throw new Error(
			'useProjectSettings must be used within a ProjectSettingsProvider'
		);
	}
	return context;
};
