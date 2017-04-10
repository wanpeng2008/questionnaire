import {Component, OnInit, Input} from '@angular/core';
import {QuestionnaireModel} from "../../../shared/models/questionnaire-model";

@Component({
  selector: 'questionnaire-outline',
  templateUrl: './questionnaire-outline.component.html',
  styleUrls: ['./questionnaire-outline.component.css']
})
export class QuestionnaireOutlineComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel;
  constructor() { }

  ngOnInit() {
  }

}
