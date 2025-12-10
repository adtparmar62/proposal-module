import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2InsuredInfoComponent } from './step2-insured-info.component';

describe('Step2InsuredInfoComponent', () => {
  let component: Step2InsuredInfoComponent;
  let fixture: ComponentFixture<Step2InsuredInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step2InsuredInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2InsuredInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
