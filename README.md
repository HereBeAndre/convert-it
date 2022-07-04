# convert.it

## Table of Contents

- [convert.it](#convertit)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Technologies Used](#technologies-used)
  - [Libraries](#libraries)
  - [Install](#install)
  - [Available Scripts and Usage](#available-scripts-and-usage)
    - [`node main.js --help`](#node-mainjs---help)
    - [`node main.js convert <filePathname>`](#node-mainjs-convert-filepathname)
    - [`node main.js convert help`](#node-mainjs-convert-help)
    - [`npm test`](#npm-test)
  - [License](#license)

## General Information

> A tool to convert an image file into an icon in JPG format.

## Technologies Used

> - **node** - version 16.11.1 (https://nodejs.org/it/)

## Libraries

> - **Commander** - (https://www.npmjs.com/package/commander)
> - **Jimp** - (https://www.npmjs.com/package/jimp)
> - **Chalk** - (https://www.npmjs.com/package/chalk)

## Install

The complete list of dependencies is included in `./package-lock.json`.\
Run `npm install` to install all dependencies.

## Available Scripts and Usage

In the project directory, you can run:

### `node main.js --help`

Displays all available information and options to run the program.

### `node main.js convert <filePathname>`

Runs the program.
The relative path from the image file to convert to the repository's root must be provided.
If the operation is successful, the converted image file can be found in converted-images directory.
By default, the image is converted into JGP format.

In case a different format is wanted, it's possible to specify its extenstion as second CLI argument:
`node main.js convert <filePathname> <extension>`

The `convert` command is also aliased to be used as `c`: `node main.js c <filePathname>`

### `node main.js convert help`

Displays all available information and options with regards to `convert` command.

### `npm test`

Launches the test runner in the interactive watch mode.\

## License

This project is licensed under the terms of the MIT license.
