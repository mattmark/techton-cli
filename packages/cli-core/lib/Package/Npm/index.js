"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Runners_1 = require("../../Runners");
const Abstract_1 = require("../Abstract");
class NpmPackageManager extends Abstract_1.AbstractPackageManager {
    constructor() {
        super(Runners_1.RunnerFactory.create(Runners_1.Runner.NPM));
    }
    get name() {
        return 'NPM'; // TODO[mattmark] abstract this to enum
    }
    get cli() {
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
exports.NpmPackageManager = NpmPackageManager;
//# sourceMappingURL=index.js.map