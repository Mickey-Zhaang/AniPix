import styled from 'styled-components';

import { useEffect, useRef, useState } from 'react';

import { PauseIcon, PlayIcon } from '../../assets';
import { useProjectSettings } from '../Elements/useProjectSettings';
import { useFrames } from '../Frames/useFrames';

export const AnimateButton = () => {
	const { frames, selectFrame } = useFrames();
	const { fps } = useProjectSettings();
	const [isPlaying, setIsPlaying] = useState(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const currentFrameIndexRef = useRef<number>(0);

	useEffect(() => {
		if (isPlaying && frames.length > 0) {
			const interval = setInterval(() => {
				const sortedFrames = [...frames].sort((a, b) => a.order - b.order);
				if (sortedFrames.length > 0) {
					const currentFrame = sortedFrames[currentFrameIndexRef.current];
					selectFrame(currentFrame.id);
					currentFrameIndexRef.current =
						(currentFrameIndexRef.current + 1) % sortedFrames.length;
				}
			}, 1000 / fps);

			intervalRef.current = interval;

			return () => {
				if (intervalRef.current) {
					clearInterval(intervalRef.current);
				}
			};
		} else {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		}
	}, [isPlaying, frames, fps, selectFrame]);

	const handleToggle = () => {
		if (frames.length === 0) return;

		if (isPlaying) {
			setIsPlaying(false);
		} else {
			// Reset to first frame when starting
			const sortedFrames = [...frames].sort((a, b) => a.order - b.order);
			if (sortedFrames.length > 0) {
				currentFrameIndexRef.current = 0;
				selectFrame(sortedFrames[0].id);
			}
			setIsPlaying(true);
		}
	};

	return (
		<Button onClick={handleToggle} type="button" disabled={frames.length === 0}>
			{isPlaying ? <PauseIcon /> : <PlayIcon />}
		</Button>
	);
};

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

	&:hover:not(:disabled) {
		background-color: rgba(60, 60, 60, 0.5);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;
