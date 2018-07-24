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
const fs_1 = require("fs");
class FileSystemReader {
    constructor(directory) {
        this.directory = directory;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs_1.readdir(this.directory, (error, filenames) => {
                    if (!!error) {
                        reject(error);
                    }
                    else {
                        resolve(filenames);
                    }
                });
            });
        });
    }
    read(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs_1.readFile(`${this.directory}/${name}`, (error, data) => {
                    if (!!error) {
                        reject(error);
                    }
                    else {
                        resolve(data.toString());
                    }
                });
            });
        });
    }
}
exports.FileSystemReader = FileSystemReader;
//# sourceMappingURL=index.js.map