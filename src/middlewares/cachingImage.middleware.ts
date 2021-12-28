import { Request, Response, NextFunction } from 'express';
import { promises as fs } from 'fs';
import { THUMBNAIL_PATH } from '../constants';

export async function cachingImage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    // fileName should be here from the previous middleware
    const {
      file_name: fileName,
      height,
      width,
    } = { file_name: 'fjord', height: 400, width: 400 } || req.query;

    const thumbnailUrl = `${THUMBNAIL_PATH}/${fileName}_${width}_${height}.jpg`;

    await fs.access(thumbnailUrl);
    return res.send({ msg: `${THUMBNAIL_PATH}/${fileName}` });
  } catch (error) {
    next();
  }
}
