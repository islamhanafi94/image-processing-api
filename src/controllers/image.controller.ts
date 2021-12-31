import { Request, Response } from 'express';
import sharp from 'sharp';
import { formatImageURI, formatThumbnailURI } from '../utils/formatters';

export const ImageController = {
  async resizeImage(req: Request, res: Response) {
    const { fileName, height, width } = req.query;
    const outputURL = formatThumbnailURI(
      fileName as string,
      height as string,
      width as string,
    );
    try {
      await sharp(formatImageURI(fileName as string))
        .resize(Number(width), Number(height))
        .toFile(outputURL);

      return res.render('index', { title: 'Hey', message: 'Hello there!' });

      return res.status(200).send({
        imageURL: outputURL,
        msg: 'success',
      });
    } catch (error) {
      return res.status(400).send({
        msg: 'Something went wrong',
        statusCode: 400,
      });
    }
  },
};
