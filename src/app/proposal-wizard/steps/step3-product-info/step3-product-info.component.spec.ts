import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step3ProductInfoComponent } from './step3-product-info.component';

describe('Step3ProductInfoComponent', () => {
  let component: Step3ProductInfoComponent;
  let fixture: ComponentFixture<Step3ProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Step3ProductInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Step3ProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
