import chalk from 'chalk';

import { YarnRunner } from './Yarn';
import { NpmRunner } from './Npm';

export * from './Abstract';

export {
  YarnRunner,
  NpmRunner
}

export enum Runner {
  YARN,
  NPM,
}

export class RunnerFactory {
  public static create(runner: Runner) {
    switch (runner) {
      case Runner.NPM:
        return new NpmRunner();

      case Runner.YARN:
        return new YarnRunner();

      default:
        return console.info(chalk.yellow(`[WARN] Unsupported runner: ${ runner }`));
    }
  }
}