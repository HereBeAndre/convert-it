import chalk from 'chalk';

export const chalkLogger = (message, color) => console.log(chalk[color].bold(message));
