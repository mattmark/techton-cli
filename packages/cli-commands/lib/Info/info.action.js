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
const action_abstract_1 = require("../Action/action.abstract");
const cli_ui_1 = require("@techton/cli-ui");
const chalk_1 = require("chalk");
class InfoAction extends action_abstract_1.AbstractAction {
    handle() {
        return __awaiter(this, void 0, void 0, function* () {
            displayBanner();
        });
    }
}
exports.InfoAction = InfoAction;
const displayBanner = () => {
    console.info(chalk_1.default.red(cli_ui_1.BANNER));
};
//# sourceMappingURL=info.action.js.map