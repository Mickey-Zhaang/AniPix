import type { Frame } from './deFrame';

export const extractFramesFromImage = async (
	imageUrl: string,
	tileWidth: number,
	tileHeight: number,
	sourceElementId: string
): Promise<Frame[]> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = 'anonymous';

		img.onload = () => {
			const frames: Frame[] = [];
			const imageWidth = img.width;
			const imageHeight = img.height;

			const tilesX = Math.floor(imageWidth / tileWidth);
			const tilesY = Math.floor(imageHeight / tileHeight);

			for (let y = 0; y < tilesY; y++) {
				for (let x = 0; x < tilesX; x++) {
					const canvas = document.createElement('canvas');
					canvas.width = tileWidth;
					canvas.height = tileHeight;
					const ctx = canvas.getContext('2d');

					if (!ctx) {
						reject(new Error('Failed to get canvas context'));
						return;
					}

					const sourceX = x * tileWidth;
					const sourceY = y * tileHeight;

					ctx.drawImage(
						img,
						sourceX,
						sourceY,
						tileWidth,
						tileHeight,
						0,
						0,
						tileWidth,
						tileHeight
					);

					const dataUrl = canvas.toDataURL('image/png');
					const order = y * tilesX + x;

					const frame: Frame = {
						id: `${sourceElementId}-${x}-${y}-${Date.now()}`,
						imageUrl: dataUrl,
						order,
						sourceElementId,
						tileX: x,
						tileY: y,
					};

					frames.push(frame);
				}
			}

			resolve(frames);
		};

		img.onerror = () => {
			reject(new Error('Failed to load image'));
		};

		img.src = imageUrl;
	});
};

