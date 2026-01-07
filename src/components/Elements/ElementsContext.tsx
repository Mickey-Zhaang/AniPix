import React, { createContext, useCallback, useState } from 'react';

import type { Element, ElementsContextType } from './deElement';

const ElementsContext = createContext<ElementsContextType | undefined>(
	undefined
);

interface ElementsProviderProps {
	children: React.ReactNode;
}

export const ElementsProvider: React.FC<ElementsProviderProps> = ({
	children,
}) => {
	const [elements, setElements] = useState<Element[]>([]);
	const [selectedElementId, setSelectedElementId] = useState<string | null>(
		null
	);

	const addElement = useCallback((element: Element) => {
		setElements(prev => [...prev, element].sort((a, b) => a.order - b.order));
	}, []);

	const removeElement = useCallback(
		(id: string) => {
			setElements(prev => {
				const elementToRemove = prev.find(element => element.id === id);
				if (elementToRemove && elementToRemove.imageUrl.startsWith('blob:')) {
					URL.revokeObjectURL(elementToRemove.imageUrl);
				}
				const newElements = prev.filter(element => element.id !== id);
				if (selectedElementId === id) {
					setSelectedElementId(null);
				}
				return newElements;
			});
		},
		[selectedElementId]
	);

	const reorderElements = useCallback((fromIndex: number, toIndex: number) => {
		setElements(prev => {
			const newElements = [...prev];
			const [movedElement] = newElements.splice(fromIndex, 1);
			newElements.splice(toIndex, 0, movedElement);
			return newElements.map((element, index) => ({
				...element,
				order: index,
			}));
		});
	}, []);

	const selectElement = useCallback((id: string) => {
		setSelectedElementId(id);
	}, []);

	const value: ElementsContextType = {
		elements,
		selectedElementId,
		addElement,
		removeElement,
		reorderElements,
		selectElement,
	};

	return (
		<ElementsContext.Provider value={value}>
			{children}
		</ElementsContext.Provider>
	);
};

export { ElementsContext };
