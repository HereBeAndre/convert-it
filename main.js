import Jimp from 'jimp';

const imageConverter = (filePath, extenstion = 'jpg') => {
  Jimp.read(filePath, (err, data) => {
    if (err) {
      throw err;
    } else {
      const indexOfLastSlash = filePath.lastIndexOf('/');
      const indexOfLastDot = filePath.lastIndexOf('.');
      const newFilename = filePath.substring(indexOfLastSlash, indexOfLastDot);
      data
        .resize(180, 180)
        .background(0xffffffff)
        .quality(60)
        .write(`./converted-images/${newFilename}.${extenstion}`);
    }
  });
};

// Pass relative path of file that you want to convert - convereted images are inside converted-images folder
// imageConverter('./images/google_logo.png');
imageConverter('d3-logo.png');
