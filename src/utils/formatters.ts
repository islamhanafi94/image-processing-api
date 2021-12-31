import { FULL_IMAGES_PATH, THUMBNAIL_PATH } from '../constants';

const formatImageURI = (imageName: string) => {
  return `${FULL_IMAGES_PATH}/${imageName}.jpg`;
};

const formatThumbnailURI = (
  imageName: string,
  height: string,
  width: string,
) => {
  return `${THUMBNAIL_PATH}/${imageName}_${width}_${height}.jpg`;
};

export { formatImageURI, formatThumbnailURI };
