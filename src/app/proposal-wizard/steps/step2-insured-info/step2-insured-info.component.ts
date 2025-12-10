import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-step2-insured-info',
  templateUrl: './step2-insured-info.component.html',
  styleUrls: ['./step2-insured-info.component.scss']
})
export class Step2InsuredInfoComponent {


  @Input()
  group!: FormGroup; // insuredInfo
  @Output() addInsured = new EventEmitter<void>();
  @Output() removeInsured = new EventEmitter<number>();


  get insuredArray(): FormArray {
    return this.group.get('insuredList') as FormArray;
  }

}
