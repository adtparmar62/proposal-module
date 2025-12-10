import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalWizardComponent } from './proposal-wizard.component';

describe('ProposalWizardComponent', () => {
  let component: ProposalWizardComponent;
  let fixture: ComponentFixture<ProposalWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
