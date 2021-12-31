import { Router } from 'express';
import { ImageController } from '../controllers/image.controller';
import { cachingImage } from '../middlewares/cachingImage.middleware';
import { inputValidator } from '../middlewares/inputValidator.middleware';

const imageRouter = Router();

imageRouter.get(
  '/api/images',
  [inputValidator, cachingImage],
  ImageController.resizeImage,
);

export { imageRouter };
