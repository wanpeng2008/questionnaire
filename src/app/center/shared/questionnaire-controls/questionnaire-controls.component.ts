import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {QuestionnaireModel} from "../../../shared/models/questionnaire-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionnaire-controls',
  templateUrl: './questionnaire-controls.component.html',
  styleUrls: ['./questionnaire-controls.component.css']
})
export class QuestionnaireControlsComponent implements OnInit {
  @Input() questionnaire:QuestionnaireModel;
  @Output() deleteQuestionnaire: EventEmitter<any> = new EventEmitter();
  @Output() publishQuestionnaire: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPreview(){
    this.router.navigateByUrl('published/'+this.questionnaire.id+'?type=preview');
  }

  onPublish(){
    this.publishQuestionnaire.emit();
  }

}
