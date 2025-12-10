import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step4AccountDetailsComponent } from './step4-account-details.component';

describe('Step4AccountDetailsComponent', () => {
  let component: Step4AccountDetailsComponent;
  let fixture: ComponentFixture<Step4AccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step4AccountDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step4AccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
