export class QuestionModel {
  title:string;
  type:QuestionType;
  options?:any[];
  answer:any;
}
export const enum QuestionType {
  Text,
  SingleSelect,
  MultiSelect,
  Score
}
