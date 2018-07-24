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
const Action_1 = require("../Action");
class NewAction extends Action_1.AbstractAction {
    handle(inputs, options) {
        return __awaiter(this, void 0, void 0, function* () {
            // generate questions for missing inputs (not contained in `.ttconfig.json`)
            // prompt user for missing information
            // combine answers with initial input
            // generate application files from provided data
            // if NOT user option of skip-install
            // then install deps
            console.log(inputs, options);
        });
    }
}
exports.NewAction = NewAction;
//# sourceMappingURL=new.action.js.map