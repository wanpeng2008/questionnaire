import {Component, OnInit, Input} from '@angular/core';
import {QuestionnaireModel} from "../../../shared/models/questionnaire-model";

@Component({
  selector: 'app-questionnaire-detail',
  templateUrl: './questionnaire-detail.component.html',
  styleUrls: ['./questionnaire-detail.component.css']
})
export class QuestionnaireDetailComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel;
  constructor() { }

  ngOnInit() {
  }

}
