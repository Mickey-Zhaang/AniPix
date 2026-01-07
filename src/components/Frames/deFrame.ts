export interface Frame {
	id: string;
	imageUrl: string;
	order: number;
	sourceElementId: string;
	tileX: number;
	tileY: number;
	metadata?: {
		[key: string]: unknown;
	};
}

export interface FramesContextType {
	frames: Frame[];
	selectedFrameId: string | null;
	sourceElementId: string | null;
	addFrames: (frames: Frame[]) => void;
	removeFrame: (id: string) => void;
	reorderFrames: (fromIndex: number, toIndex: number) => void;
	selectFrame: (id: string) => void;
	clearFrames: () => void;
}

