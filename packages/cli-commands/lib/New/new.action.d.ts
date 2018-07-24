import { AbstractAction } from "../Action";
import { Input } from "../Command";
export declare class NewAction extends AbstractAction {
    handle(inputs: Input[], options: Input[]): Promise<void>;
}
