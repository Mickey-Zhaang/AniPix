import styled from 'styled-components';

import React, { useRef } from 'react';

import { ImportIcon } from '../../assets';
import type { Element } from '../Elements/deElement';
import { useElements } from '../Elements/useElements';
import { ToolButton } from '../shared/styled';

export const ImportButton = () => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { elements, addElement } = useElements();

	const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (!files || files.length === 0) return;

		Array.from(files).forEach(file => {
			if (file.type.startsWith('image/')) {
				const imageUrl = URL.createObjectURL(file);
				const newElement: Element = {
					id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
					imageUrl,
					order: elements.length,
					metadata: {
						fileName: file.name,
						fileSize: file.size,
						fileType: file.type,
					},
				};
				addElement(newElement);
			}
		});

		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	const onImportButtonPressed = () => {
		fileInputRef.current?.click();
	};

	return (
		<>
			<HiddenInput
				ref={fileInputRef}
				type="file"
				accept="image/*"
				multiple
				onChange={handleFileSelect}
			/>
			<ToolButton onClick={onImportButtonPressed} type="button">
				<ImportIcon />
			</ToolButton>
		</>
	);
};

const HiddenInput = styled.input`
	display: none;
`;
