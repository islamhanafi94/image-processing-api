import express from 'express';
import sharp from 'sharp';
import { cachingImage } from './middlewares/cachingImage.middleware';
import { FULL_IMAGES_PATH, THUMBNAIL_PATH } from './constants';

const app = express();

const PORT = process.env.PORT || 1234;

app.use(express.static('public'));

app.get(
  '/api/images',
  [cachingImage],
  async (req: express.Request, res: express.Response) => {
    //TODO: Input validation
    const {
      file_name: fileName,
      height,
      width,
    } = { file_name: 'fjord', height: 400, width: 400 } || req.query;

    // const thumbnailUrl = `${THUMBNAIL_PATH}/${fileName}_${width}_${height}.jpg`;

    try {
      await sharp(`${FULL_IMAGES_PATH}/${fileName}.jpg`)
        .resize(Number(width), Number(height))
        .toFile(`${THUMBNAIL_PATH}/${fileName}_${width}_${height}.jpg`);
      return res.send({
        msg: 'Hello123',
      });
    } catch (error) {
      console.log(error);
    }
  },
);

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

// async function resizeImage(fileName: string, width: number, height: number) {
//   await sharp(`${FULL_IMAGES_PATH}/${fileName}`)
//     .resize(Number(width), Number(height))
//     .toFile(`${THUMBNAIL_PATH}/${fileName}_${width}_${height}.jpg`);
// }

// https://classroom.udacity.com/nanodegrees/nd0067-fwd-t3/parts/cd0292/modules/c0ad589b-67b3-4791-931f-9b0fa8ac0ed3/lessons/2f12797b-bdf9-42eb-a3cd-30499d7dcd78/concepts/e22507b1-7947-4fce-88e4-6b80301c3aa8
