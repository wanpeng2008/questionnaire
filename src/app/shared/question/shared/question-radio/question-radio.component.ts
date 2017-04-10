import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {QuestionComponent} from "../../question.component";
import {QuestionModel} from "../../../models/question-model";

@Component({
  selector: 'question-radio',
  templateUrl: './question-radio.component.html',
  styleUrls: ['./question-radio.component.css']
})
export class QuestionRadioComponent extends QuestionComponent {

  @Input()
  question:QuestionModel;

  @Input()
  editable:boolean;

  @Output()
  deleteQuestionRequest:EventEmitter<any> = new EventEmitter();

  constructor() { super()}

  private key: number;

  ngOnInit() {
    this.copyQuestion();
    let options = this.question.options;
    this.key = options[options.length-1].key;
  }

  onDeleteOption(index:number) {
    if(this.question.options.length <= 1) {
      return;
    }

    this.question.options.splice(index, 1);
  }

  onAddOption() {
    this.question.options.push({key: ++this.key, value:'' });
  }
}
