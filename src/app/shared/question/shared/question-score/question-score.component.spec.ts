import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionScoreComponent } from './question-score.component';

describe('QuestionScoreComponent', () => {
  let component: QuestionScoreComponent;
  let fixture: ComponentFixture<QuestionScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
