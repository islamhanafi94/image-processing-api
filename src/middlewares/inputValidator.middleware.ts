import { Request, Response, NextFunction } from 'express';
import { validateImageName, validateImageSize } from '../utils/validators';

export async function inputValidator(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { fileName, height, width } = req.query;

  try {
    await validateImageName(fileName);
    validateImageSize(Number(height), Number(width));
    next();
  } catch (error) {
    return res.status(400).send({
      msg: 'Invalid Arguments',
      statusCode: 400,
    });
  }
}
