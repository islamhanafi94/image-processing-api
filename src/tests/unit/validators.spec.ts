import { validateImageName, validateImageSize } from '../../utils/validators';

describe('Validators', () => {
  describe('validateImageName function', () => {
    it('Should Throw no errors for using valid file name ', async () => {
      const validImageName = 'fjord';
      await validateImageName(validImageName);
    });
  });

  describe('validateImageSize function', () => {
    it('Should Throw error when using negative size value', () => {
      const height = 100;
      const width = -123;
      expect(() => {
        validateImageSize(height, width);
      }).toThrow(new Error());
    });
  });
});
