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
const Configuration_1 = require("../Configuration");
describe("TechtonConfigurationLoader", () => {
    it('should call reader.read when load and return expected', () => __awaiter(this, void 0, void 0, function* () {
        // Arrange
        const mock = jest.fn();
        const expected = {
            language: 'ts',
            collection: '@techton/schematics',
        };
        const reader = mock.mockImplementation(() => Object.create({ read: jest.fn(() => Promise.resolve(JSON.stringify(expected))) }))();
        // Act
        const loader = new Configuration_1.TechtonConfigurationLoader(reader);
        const configuration = yield loader.load();
        // Assert
        expect(reader.read).toHaveBeenCalledWith('.ttcli.json');
        expect(configuration).toEqual(expected);
    }));
});
//# sourceMappingURL=index.test.js.map