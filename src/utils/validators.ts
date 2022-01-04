import { constants, promises as fs } from 'fs';
import { formatImageURI } from './formatters';

export const validateImageName = async (imageName: string): Promise<void> => {
  try {
    await fs.access(formatImageURI(imageName), constants.F_OK);
  } catch (error) {
    throw new Error();
  }
};

export const validateImageSize = (height: number, width: number): void => {
  const isValidSize = height && width && height > 0 && width > 0;
  if (!isValidSize) throw new Error();
};
