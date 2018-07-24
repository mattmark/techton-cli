"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const Yarn_1 = require("./Yarn");
exports.YarnRunner = Yarn_1.YarnRunner;
const Npm_1 = require("./Npm");
exports.NpmRunner = Npm_1.NpmRunner;
__export(require("./Abstract"));
var Runner;
(function (Runner) {
    Runner[Runner["YARN"] = 0] = "YARN";
    Runner[Runner["NPM"] = 1] = "NPM";
})(Runner = exports.Runner || (exports.Runner = {}));
class RunnerFactory {
    static create(runner) {
        switch (runner) {
            case Runner.NPM:
                return new Npm_1.NpmRunner();
            case Runner.YARN:
                return new Yarn_1.YarnRunner();
            default:
                return console.info(chalk_1.default.yellow(`[WARN] Unsupported runner: ${runner}`));
        }
    }
}
exports.RunnerFactory = RunnerFactory;
//# sourceMappingURL=index.js.map