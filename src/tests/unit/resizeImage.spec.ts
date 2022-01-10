import { resizeImage } from '../../utils/imageResize';

describe('ResizeImage', () => {
  describe('ResizeImage function', () => {
    it('Should return the url for resized image after resizing ', async () => {
      const validImageName = 'fjord';
      const width = '100';
      const height = '100';
      const expectedURL = `src/images/thumbnail/${validImageName}_${width}_${height}.jpg`;
      const outputURL = await resizeImage({
        fileName: validImageName,
        width: '100',
        height: '100',
      });

      expect(outputURL).toEqual(expectedURL);
    });
  });
});
