import { BANNER } from '../lib/ui';
import { AbstractAction } from './abstract';
import { platform, release } from 'os';
import osName = require('os-name');
import chalk from 'chalk';

export class InfoAction extends AbstractAction {
  public async handle() {
    displayBanner();
    await displaySystemInformation();
    await displayTechtonInformation();
  }
}

const displayBanner = () => {
  console.info(chalk.red(BANNER));
};

const displaySystemInformation = async () => {
  console.info(chalk.green('[System Information]'));
  console.info('OS Version     :', chalk.blue(osName(platform(), release())));
  console.info('NodeJS Version :', chalk.blue(process.version));
};

const displayTechtonInformation = async () => {
  console.info(chalk.green('[Techton Information]'));

  // this is where we print out dependencies from techton
};
