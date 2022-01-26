import Jimp from 'jimp';
import { Command } from 'commander/esm.mjs';

const program = new Command();

const imageConverter = async (pathname, extenstion) => {
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
      console.log('File converted successfully');
    } catch (err) {
      console.log('Something went wrong');
    }
  });
};

program
  .command('convert')
  .description('Convert input image file into desired image file - default is JPG')
  .alias('c')
  .argument('<filePathname>', 'Relative path to file')
  .argument('[extension]', 'Desired extension different than jpg', 'jpg')
  .action((filePathname, extension) => imageConverter(filePathname, extension));

// Following line actually runs the program
program.parse(process.argv);
