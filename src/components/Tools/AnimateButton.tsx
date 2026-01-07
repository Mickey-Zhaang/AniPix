import { useEffect, useMemo, useRef, useState } from 'react';

import { PauseIcon, PlayIcon } from '../../assets';
import { useProjectSettings } from '../Elements/useProjectSettings';
import { useFrames } from '../Frames/useFrames';
import { ToolButton } from '../shared/styled';

export const AnimateButton = () => {
	const { frames, selectFrame } = useFrames();
	const { fps } = useProjectSettings();
	const [isPlaying, setIsPlaying] = useState(false);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const currentFrameIndexRef = useRef<number>(0);

	// Memoize sorted frames to avoid recalculating on every interval tick
	const sortedFrames = useMemo(
		() => [...frames].sort((a, b) => a.order - b.order),
		[frames]
	);

	useEffect(() => {
		if (isPlaying && sortedFrames.length > 0) {
			const interval = setInterval(() => {
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
	}, [isPlaying, sortedFrames, fps, selectFrame]);

	const handleToggle = () => {
		if (sortedFrames.length === 0) return;

		if (isPlaying) {
			setIsPlaying(false);
		} else {
			// Reset to first frame when starting
			if (sortedFrames.length > 0) {
				currentFrameIndexRef.current = 0;
				selectFrame(sortedFrames[0].id);
			}
			setIsPlaying(true);
		}
	};

	return (
		<ToolButton
			onClick={handleToggle}
			type="button"
			disabled={sortedFrames.length === 0}>
			{isPlaying ? <PauseIcon /> : <PlayIcon />}
		</ToolButton>
	);
};
