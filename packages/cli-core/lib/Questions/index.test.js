"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe("Sanity", () => {
    it('should pass', () => __awaiter(this, void 0, void 0, function* () {
        // Arrange
        const expected = true;
        // Act
        const result = true;
        // Assert
        expect(result).toEqual(expected);
    }));
});
// import { generateInput, generateSelect } from "../../src/Questions"
// test("generateInput:when Input value is undefined", function(assert: test.Test) {
//   // Arrange
//   const expected = {
//     type: "input",
//     name: "name",
//     message: "name :",
//     default: "name"
//   }
//   // Act
//   const actual = generateInput(expected.name)(undefined)("name")
//   // Assert
//   assert.deepEqual(actual, expected, "should return an input question")
//   assert.end()
// })
// test("generateInput:when Input value is defined", function(assert: test.Test) {
//   // Arrange
//   const expected = undefined
//   const input = {
//     name: "name",
//     value: "name"
//   }
//   // Act
//   const result = generateInput(input.name)(input.value)("default")
//   // Assert
//   assert.equal(result, expected, "should return undefined")
//   assert.end()
// })
// test("generateSelect", function(assert: test.Test) {
//   // Arrange
//   const choices: string[] = ["choiceA", "choiceB", "choiceC"]
//   const expected = {
//     type: "list",
//     name: "name",
//     message: "message",
//     choices
//   }
//   // Act
//   const result = generateSelect("name")("message")(choices)
//   // Assert
//   assert.deepEqual(result, expected, "should return a select question")
//   assert.end()
// })
//# sourceMappingURL=index.test.js.map