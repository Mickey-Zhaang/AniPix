export interface ProjectSettings {
	width: number;
	height: number;
	fps: number;
}

export interface ProjectSettingsContextType {
	width: number;
	height: number;
	fps: number;
	setWidth: (width: number) => void;
	setHeight: (height: number) => void;
	setFps: (fps: number) => void;
}

