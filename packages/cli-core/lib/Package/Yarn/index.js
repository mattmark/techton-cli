"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Runners_1 = require("../../Runners");
const Abstract_1 = require("../Abstract");
class YarnPackageManager extends Abstract_1.AbstractPackageManager {
    constructor() {
        super(Runners_1.RunnerFactory.create(Runners_1.Runner.YARN));
    }
    get name() {
        return 'YARN'; // TODO[mattmark] abstract this to enum
    }
    get cli() {
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
exports.YarnPackageManager = YarnPackageManager;
//# sourceMappingURL=index.js.map