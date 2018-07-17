import * as tape from "tape"
import { generateInput, generateSelect } from "../../lib/questions/questions"

tape("generateInput", function(t: tape.Test) {
  t.plan(1)
  t.ok(generateInput, "should pass")
})

tape("generateSelect", function(t: tape.Test) {
  t.plan(1)
  t.ok(generateSelect, "should pass")
})
