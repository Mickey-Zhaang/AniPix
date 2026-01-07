export interface Element {
	id: string;
	imageUrl: string;
	order: number;
	metadata?: {
		fileName?: string;
		fileSize?: number;
		fileType?: string;
		[key: string]: unknown;
	};
}

export interface ElementsContextType {
	elements: Element[];
	selectedElementId: string | null;
	addElement: (element: Element) => void;
	removeElement: (id: string) => void;
	reorderElements: (fromIndex: number, toIndex: number) => void;
	selectElement: (id: string) => void;
}
