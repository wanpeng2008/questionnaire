import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {QuestionnaireModel, QuestionnaireState} from "../models/questionnaire-model";

@Component({
  selector: 'questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  @Input() questionnaire: QuestionnaireModel;
  @Output() submitQuestionnaire = new EventEmitter();
  private isPreviewPage:boolean;
  private alert:any = {type:'', msg:''};

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.isPreviewPage = params['type']==='preview';
    })
  }

  onSubmit(){
    if(this.isPreviewPage){
      this.router.navigateByUrl('admin/center');
      return;
    }
    switch (this.questionnaire.state){
      case QuestionnaireState.Created:
        this.submitQuestionnaire.emit(this.questionnaire);
        break;
      case QuestionnaireState.Finished:
        this.alert = {
          type: 'success',
          msg: '提交成功，感谢您的耐心回答'
        };
        break;
      default:
        break;
    }
  }

}
