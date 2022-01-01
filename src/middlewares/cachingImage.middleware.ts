import { Request, Response, NextFunction } from 'express';
import { promises as fs, constants } from 'fs';
import { formatThumbnailURI } from '../utils/formatters';

export async function cachingImage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { fileName, height, width } = req.query;
    const cached = formatThumbnailURI(
      fileName as string,
      height as string,
      width as string,
    );
    await fs.access(cached, constants.F_OK);
    return res.sendFile(cached, { root: './' });
  } catch (error) {
    next();
  }
}
