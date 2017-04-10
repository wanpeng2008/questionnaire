import {QuestionModel} from "./question-model";
export class QuestionnaireModel {
  id?:number;
  title:string;
  starter:string;
  ending:string;
  state:QuestionnaireState;
  questionList:QuestionModel[];
  createDate?:string;
}

export const enum QuestionnaireState {
  Created,
  Published,
  Finished
}
