import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireOutlineComponent } from './questionnaire-outline.component';

describe('QuestionnaireOutlineComponent', () => {
  let component: QuestionnaireOutlineComponent;
  let fixture: ComponentFixture<QuestionnaireOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
