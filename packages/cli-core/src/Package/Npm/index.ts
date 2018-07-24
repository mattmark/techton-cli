import { Runner, RunnerFactory, NpmRunner } from '../../Runners';
import { AbstractPackageManager } from '../Abstract';
import { PackageManagerCommands } from '../Manager';

export class NpmPackageManager extends AbstractPackageManager {
    constructor() {
        super(RunnerFactory.create(Runner.NPM) as NpmRunner);
    }

    public get name() {
        return 'NPM' // TODO[mattmark] abstract this to enum
    }

    get cli(): PackageManagerCommands {
        return {
            install: 'install',
            add: 'install',
            update: 'update',
            remove: 'uninstall',
            saveFlag: '--save',
            saveDevFlag: '--save-dev',
        };
    }
}
