import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step1-proposal-info',
  templateUrl: './step1-proposal-info.component.html',
  styleUrls: ['./step1-proposal-info.component.scss']
})
export class Step1ProposalInfoComponent {

  @Input()
  group!: FormGroup;
  @Output() deleteApplicant = new EventEmitter<number>();

  get proposerArray(): FormArray {
    return this.group.get('proposerInfoList') as FormArray;
  }
}
