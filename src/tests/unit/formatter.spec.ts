import { FULL_IMAGES_PATH, THUMBNAIL_PATH } from '../../constants';
import { formatImageURI, formatThumbnailURI } from '../../utils/formatters';

describe('Formatters', () => {
  describe('formatImageURI function', () => {
    it('Should return the right image url for a given image name ', () => {
      const imageName = 'abcd';
      const result = formatImageURI(imageName);

      expect(result).toEqual(`${FULL_IMAGES_PATH}/${imageName}.jpg`);
    });
  });

  describe('formatThumbnailURI function', () => {
    it('Should return the right thumbnail url for a given image params ', () => {
      const height = '100';
      const width = '100';
      const imageName = 'abcd';

      const result = formatThumbnailURI(imageName, height, width);
      expect(result).toEqual(
        `${THUMBNAIL_PATH}/${imageName}_${width}_${height}.jpg`,
      );
    });
  });
});
