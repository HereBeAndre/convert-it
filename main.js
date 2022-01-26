import { Command } from 'commander/esm.mjs';
import { imageConverter } from './utils/imageConverter.js';

const program = new Command();

program
  .command('convert')
  .description('Convert input image file into desired image file - default is JPG')
  .alias('c')
  .argument('<filePathname>', 'Relative path to file')
  .argument('[extension]', 'Desired extension different than jpg', 'jpg')
  .action((filePathname, extension) => imageConverter(filePathname, extension));

// Following line actually runs the program
program.parse(process.argv);
