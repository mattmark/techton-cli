import { AbstractAction } from '../Action/action.abstract';
import { BANNER } from '@techton/cli-ui'
import chalk from 'chalk';

export class InfoAction extends AbstractAction {
  public async handle() {
    displayBanner();
  }
}

const displayBanner = () => {
  console.info(chalk.red(BANNER));
};