import { AbstractAction } from "../Action";
import { Input } from "../Command";


export class NewAction extends AbstractAction {
  public async handle(inputs: Input[], options: Input[]) {
    // generate questions for missing inputs (not contained in `.ttconfig.json`)
    // prompt user for missing information
    // combine answers with initial input
    // generate application files from provided data
    // if NOT user option of skip-install
    // then install deps
    console.log(inputs, options);
  }
}