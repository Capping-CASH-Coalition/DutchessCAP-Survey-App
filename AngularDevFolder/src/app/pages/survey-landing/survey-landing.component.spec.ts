import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyLandingComponent } from './survey-landing.component';

describe('SurveyLandingComponent', () => {
  let component: SurveyLandingComponent;
  let fixture: ComponentFixture<SurveyLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
