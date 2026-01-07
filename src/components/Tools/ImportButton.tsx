import styled from 'styled-components';

import React, { useRef } from 'react';

import { ImportIcon } from '../../assets';
import type { Element } from '../Elements/deElement';
import { useElements } from '../Elements/useElements';

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
			<Button onClick={onImportButtonPressed} type="button">
				<ImportIcon />
			</Button>
		</>
	);
};

const HiddenInput = styled.input`
	display: none;
`;

const Button = styled.button`
	width: 100%;
	height: 100%;
	border: none;
	border-radius: 15%;
	cursor: pointer;
	padding: 0;
	background-color: transparent;
	color: rgba(255, 255, 255, 0.6);
	overflow: hidden;
	transition: background-color 0.28s ease-in;

	&:hover {
		background-color: rgba(60, 60, 60, 0.5);
	}
`;
