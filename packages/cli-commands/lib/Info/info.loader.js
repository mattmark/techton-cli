"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info_command_1 = require("./info.command");
const info_action_1 = require("./info.action");
function infoLoader(program) {
    new info_command_1.InfoCommand(new info_action_1.InfoAction()).load(program);
}
exports.default = infoLoader;
//# sourceMappingURL=info.loader.js.map