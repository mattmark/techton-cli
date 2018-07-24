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
var PackageManager;
(function (PackageManager) {
    PackageManager["NPM"] = "npm";
    PackageManager["YARN"] = "yarn";
})(PackageManager = exports.PackageManager || (exports.PackageManager = {}));
class PackageManagerFactory {
    static create() {
        // TODO[mattmark] can I abstract to shared space for runner and package management
    }
    static find() {
        return __awaiter(this, void 0, void 0, function* () {
            // return NpmPackageManager or YarnPackageManagerarn based on presence of lock
        });
    }
}
exports.PackageManagerFactory = PackageManagerFactory;
//# sourceMappingURL=index.js.map