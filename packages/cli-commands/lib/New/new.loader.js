"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const new_command_1 = require("./new.command");
const new_action_1 = require("./new.action");
function newLoader(program) {
    new new_command_1.NewCommand(new new_action_1.NewAction()).load(program);
}
exports.default = newLoader;
//# sourceMappingURL=new.loader.js.map