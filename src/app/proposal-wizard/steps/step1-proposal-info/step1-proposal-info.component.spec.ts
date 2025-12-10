import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1ProposalInfoComponent } from './step1-proposal-info.component';

describe('Step1ProposalInfoComponent', () => {
  let component: Step1ProposalInfoComponent;
  let fixture: ComponentFixture<Step1ProposalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step1ProposalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1ProposalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
