import { Question, Answers } from 'inquirer';
export declare const generateInput: (name: string) => (value: any) => (defaultAnwser: string) => Question<Answers> | undefined;
export declare const generateSelect: (name: string) => (message: string) => (choices: string[]) => Question<Answers>;
