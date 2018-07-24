import { Question, Answers } from 'inquirer';

export const generateInput = (name: string): (value: any) => (defaultAnwser: string) => Question<Answers> | undefined => {
  return (value: string) => {
    if (value === undefined) {
      return (defaultAnswer: string): Question<Answers> => ({
        type: 'input',
        name,
        message: `${ name } :`,
        default: defaultAnswer,
      });
    }

    return () => undefined;
  };
};

export const generateSelect = (name: string): (message: string) => (choices: string[]) => Question<Answers> => {
  return (message: string) => {
    return (choices: string[]) => ({
        type: 'list',
        name,
        message,
        choices,
    });
  };
};