import chalk from 'chalk';

export const chalkLogger = (message, bgColor) => console.log(chalk.white[bgColor].bold(message));
