"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_abstract_1 = require("../Command/command.abstract");
class InfoCommand extends command_abstract_1.AbstractCommand {
    load(program) {
        program
            .command('info')
            .alias('i')
            .description('Display Techton CLI details')
            .action(() => __awaiter(this, void 0, void 0, function* () {
            yield this.action.handle();
        }));
    }
}
exports.InfoCommand = InfoCommand;
//# sourceMappingURL=info.command.js.map