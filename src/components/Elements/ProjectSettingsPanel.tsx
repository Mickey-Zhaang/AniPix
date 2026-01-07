import styled from 'styled-components';

import React from 'react';

import { useProjectSettings } from './useProjectSettings';

interface NumberInputWithSpinnerProps {
	id: string;
	label: string;
	value: number;
	min: number;
	max: number;
	onChange: (value: number) => void;
}

const NumberInputWithSpinner: React.FC<NumberInputWithSpinnerProps> = ({
	id,
	label,
	value,
	min,
	max,
	onChange,
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const numValue = parseInt(e.target.value, 10);
		if (!isNaN(numValue)) {
			onChange(numValue);
		}
	};

	const handleIncrement = () => {
		onChange(Math.min(value + 1, max));
	};

	const handleDecrement = () => {
		onChange(Math.max(value - 1, min));
	};

	return (
		<SettingGroup>
			<Label htmlFor={id}>{label}</Label>
			<NumberInputWrapper>
				<NumberInput
					id={id}
					type="number"
					min={min}
					max={max}
					value={value}
					onChange={handleChange}
				/>
				<SpinnerButtons>
					<SpinnerButton type="button" onClick={handleIncrement}>
						▲
					</SpinnerButton>
					<SpinnerButton type="button" onClick={handleDecrement}>
						▼
					</SpinnerButton>
				</SpinnerButtons>
			</NumberInputWrapper>
		</SettingGroup>
	);
};

export const ProjectSettingsPanel: React.FC = () => {
	const { width, height, fps, setWidth, setHeight, setFps } =
		useProjectSettings();

	const handleFpsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseFloat(e.target.value);
		if (!isNaN(value)) {
			setFps(value);
		}
	};

	return (
		<SettingsContainer>
			<NumberInputWithSpinner
				id="width"
				label="Width"
				value={width}
				min={1}
				max={10000}
				onChange={setWidth}
			/>
			<NumberInputWithSpinner
				id="height"
				label="Height"
				value={height}
				min={1}
				max={10000}
				onChange={setHeight}
			/>
			<SettingGroup>
				<Label htmlFor="fps">FPS: {fps}</Label>
				<FpsSlider
					id="fps"
					type="range"
					min="1"
					max="120"
					step="1"
					value={fps}
					onChange={handleFpsChange}
				/>
			</SettingGroup>
		</SettingsContainer>
	);
};

const SettingsContainer = styled.div`
	width: 100%;
	padding: 20px 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	background: rgba(0, 0, 0, 0.3);
`;

const SettingGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: 100%;
`;

const Label = styled.label`
	display: flex;
	color: rgba(255, 255, 255, 0.7);
	font-size: 12px;
	font-weight: 500;
`;

const NumberInputWrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
`;

const NumberInput = styled.input`
	width: 100%;
	padding: 6px 28px 6px 6px;
	background: rgba(255, 255, 255, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 4px;
	color: white;
	font-size: 14px;
	outline: none;
	transition: border-color 0.2s ease;

	&:focus {
		border-color: rgba(0, 0, 0, 0.4);
	}

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
		display: none;
	}

	&[type='number'] {
		-moz-appearance: textfield;
	}
`;

const SpinnerButtons = styled.div`
	position: absolute;
	right: 2px;
	display: flex;
	flex-direction: column;
	height: calc(100% - 4px);
	width: 20px;
	gap: 1px;
`;

const SpinnerButton = styled.button`
	flex: 1;
	background: rgba(255, 255, 255, 0.1);
	border: none;
	border-radius: 2px;
	color: rgba(255, 255, 255, 0.8);
	font-size: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
	padding: 0;
	line-height: 1;

	&:hover {
		background: rgba(255, 255, 255, 0.2);
		color: rgba(255, 255, 255, 1);
	}

	&:active {
		background: rgba(255, 255, 255, 0.3);
	}

	&:first-child {
		border-radius: 2px 2px 0 0;
	}

	&:last-child {
		border-radius: 0 0 2px 2px;
	}
`;

const FpsSlider = styled.input`
	width: 100%;
	height: 4px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 2px;
	outline: none;
	-webkit-appearance: none;
	appearance: none;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 14px;
		height: 14px;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 50%;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	&::-webkit-slider-thumb:hover {
		background: rgba(255, 255, 255, 1);
	}

	&::-moz-range-thumb {
		width: 14px;
		height: 14px;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 50%;
		cursor: pointer;
		border: none;
		transition: background 0.2s ease;
	}

	&::-webkit-slider-thumb:hover,
	&::-moz-range-thumb:hover {
		background: rgba(255, 255, 255, 1);
	}
`;
