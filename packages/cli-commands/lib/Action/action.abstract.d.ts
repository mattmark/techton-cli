import { Input } from '../Command/command.interface';
export declare abstract class AbstractAction {
    abstract handle(inputs?: Input[], options?: Input[]): Promise<void>;
}
