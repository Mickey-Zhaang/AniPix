import React, { createContext, useCallback, useState } from 'react';

import type { ProjectSettingsContextType } from './deProjectSettings';

const ProjectSettingsContext = createContext<
	ProjectSettingsContextType | undefined
>(undefined);

interface ProjectSettingsProviderProps {
	children: React.ReactNode;
}

export const ProjectSettingsProvider: React.FC<
	ProjectSettingsProviderProps
> = ({ children }) => {
	const [width, setWidthState] = useState<number>(32);
	const [height, setHeightState] = useState<number>(32);
	const [fps, setFpsState] = useState<number>(12);

	const setWidth = useCallback((newWidth: number) => {
		if (newWidth >= 1 && newWidth <= 10000) {
			setWidthState(newWidth);
		}
	}, []);

	const setHeight = useCallback((newHeight: number) => {
		if (newHeight >= 1 && newHeight <= 10000) {
			setHeightState(newHeight);
		}
	}, []);

	const setFps = useCallback((newFps: number) => {
		if (newFps >= 1 && newFps <= 120) {
			setFpsState(newFps);
		}
	}, []);

	const value: ProjectSettingsContextType = {
		width,
		height,
		fps,
		setWidth,
		setHeight,
		setFps,
	};

	return (
		<ProjectSettingsContext.Provider value={value}>
			{children}
		</ProjectSettingsContext.Provider>
	);
};

export { ProjectSettingsContext };
