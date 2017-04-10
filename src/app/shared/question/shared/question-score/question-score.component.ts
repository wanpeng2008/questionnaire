import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {QuestionComponent} from "../../question.component";
import {QuestionModel} from "../../../models/question-model";

@Component({
  selector: 'question-score',
  templateUrl: './question-score.component.html',
  styleUrls: ['./question-score.component.css']
})
export class QuestionScoreComponent extends QuestionComponent {

  @Input()
  question:QuestionModel;

  @Input()
  editable:boolean;

  @Output()
  deleteQuestionRequest:EventEmitter<any> = new EventEmitter();

  constructor() { super() }

  ngOnInit() {
  }

}
