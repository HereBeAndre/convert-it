import Jimp from 'jimp';
import { chalkLogger } from './chalkLogger.js';

export const imageConverter = async (pathname, extenstion /* default is jpg */) => {
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
      chalkLogger('File converted successfully', 'greenBright');
    } catch (err) {
      chalkLogger("Couldn't convert the file", 'redBright');
      console.log(err);
    }
  });
};
