import * as test from "tape"
import { generateInput, generateSelect } from "../../lib/questions/questions"

test("generateInput:when Input value is undefined", function(assert: test.Test) {
  // Arrange
  const expected = {
    type: "input",
    name: "name",
    message: "name :",
    default: "name"
  }

  // Act
  const actual = generateInput(expected.name)(undefined)("name")

  // Assert
  assert.deepEqual(actual, expected, "should return an input question")
  assert.end()
})

test("generateInput:when Input value is defined", function(assert: test.Test) {
  // Arrange
  const expected = undefined
  const input = {
    name: "name",
    value: "name"
  }

  // Act
  const result = generateInput(input.name)(input.value)("default")

  // Assert
  assert.equal(result, expected, "should return undefined")
  assert.end()
})

test("generateSelect", function(assert: test.Test) {
  // Arrange
  const choices: string[] = ["choiceA", "choiceB", "choiceC"]

  const expected = {
    type: "list",
    name: "name",
    message: "message",
    choices
  }

  // Act
  const result = generateSelect("name")("message")(choices)

  // Assert
  assert.deepEqual(result, expected, "should return a select question")
  assert.end()
})
