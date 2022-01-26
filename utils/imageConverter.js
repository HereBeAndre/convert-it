import Jimp from 'jimp';
import { chalkLogger } from './chalkLogger.js';

export const imageConverter = async (pathname, extenstion) => {
  await Jimp.read(pathname, (err, data) => {
    try {
      const indexOfLastSlash = pathname.lastIndexOf('/');
      const indexOfLastDot = pathname.lastIndexOf('.');
      const newFilename = pathname.substring(indexOfLastSlash, indexOfLastDot);
      data
        .resize(180, 180)
        .background(0xffffffff)
        .quality(60)
        .write(`./converted-images/${newFilename}.${extenstion}`);
      chalkLogger('File converted successfully', 'bgGreenBright');
    } catch (err) {
      chalkLogger("Couldn't convert the file", 'bgRedBright');
      console.log(err);
    }
  });
};
