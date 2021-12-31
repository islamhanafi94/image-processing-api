import { Request, Response, NextFunction } from 'express';
import { promises as fs, constants } from 'fs';
import { THUMBNAIL_PATH } from '../constants';
import { formatThumbnailURI } from '../utils/formatters';

export async function cachingImage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { fileName, height, width } = req.query;
    await fs.access(
      formatThumbnailURI(fileName as string, height as string, width as string),
      constants.F_OK,
    );
    return res.render('image', { imageURL: `${THUMBNAIL_PATH}/${fileName}` });

    return res.status(200).send({ msg: `${THUMBNAIL_PATH}/${fileName}` });
  } catch (error) {
    next();
  }
}
