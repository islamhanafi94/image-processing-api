import { Request, Response } from 'express';
import { ImageInfo, resizeImage } from '../utils/imageResize';

export const ImageController = {
  async resizeImage(req: Request, res: Response) {
    try {
      const { fileName, height, width } = req.query as ImageInfo;
      const outputURL = await resizeImage({ fileName, height, width });
      return res.sendFile(outputURL, { root: './' });
    } catch (error) {
      return res.status(400).send({
        msg: 'Something went wrong',
        statusCode: 400,
      });
    }
  },
};
