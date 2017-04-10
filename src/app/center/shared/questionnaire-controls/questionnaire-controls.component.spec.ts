import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireControlsComponent } from './questionnaire-controls.component';

describe('QuestionnaireControlsComponent', () => {
  let component: QuestionnaireControlsComponent;
  let fixture: ComponentFixture<QuestionnaireControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
