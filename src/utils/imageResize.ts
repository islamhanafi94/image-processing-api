import sharp from 'sharp';
import { formatImageURI, formatThumbnailURI } from './formatters';

export async function resizeImage(imageInfo: ImageInfo) {
  const outputURL = formatThumbnailURI(
    imageInfo.fileName,
    imageInfo.width,
    imageInfo.height,
  );

  await sharp(formatImageURI(imageInfo.fileName))
    .resize(Number(imageInfo.width), Number(imageInfo.height))
    .toFile(outputURL);

  return outputURL;
}

export type ImageInfo = {
  fileName: string;
  height: string;
  width: string;
};
