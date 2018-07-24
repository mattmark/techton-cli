import { Runner, RunnerFactory, YarnRunner } from '../../Runners';
import { AbstractPackageManager } from '../Abstract';
import { PackageManagerCommands } from '../Manager';

export class YarnPackageManager extends AbstractPackageManager {
    constructor() {
        super(RunnerFactory.create(Runner.YARN) as YarnRunner);
    }

    public get name() {
        return 'YARN' // TODO[mattmark] abstract this to enum
    }

  get cli(): PackageManagerCommands {
    return {
      install: 'install',
      add: 'add',
      update: 'upgrade',
      remove: 'remove',
      saveFlag: '',
      saveDevFlag: '-D',
    };
  }
}
