import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-proposal-wizard',
  templateUrl: './proposal-wizard.component.html',
  styleUrls: ['./proposal-wizard.component.scss']
})
export class ProposalWizardComponent implements OnInit {
  wizardForm!: FormGroup;
  step = 0; // 0..3


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.wizardForm = this.fb.group({
      proposalInfo: this.fb.group({
        agentCode: ['0000000', Validators.required],
        proposerInfo: ['sdsf', Validators.required],
        agentName: ['root'],
        proposalId: [''],
        effectiveDate: ['2025-12-04', Validators.required]
      }),
      proposerInfo: this.fb.group({
        proposerName: ['sdsf', Validators.required],
        proposerInfoList: this.fb.array([])
      }),
      insuredInfo: this.fb.group({
        insuredList: this.fb.array([])
      }),
      productInfo: this.fb.group({
        products: this.fb.array([])
      }),
      accountDetails: this.fb.group({
        accountValue: [''],
        interestRate: ['6.25']
      })
    });

    // add one insured row by default
    this.addInsured();
  }

  // Insured management
  get insuredList(): FormArray {
    return this.wizardForm.get('insuredInfo.insuredList') as FormArray;
  }

  get properInfoList(): FormArray {
    return this.wizardForm.get('proposerInfo.proposerInfoList') as FormArray;
  }

  // Getter methods for form groups
  get proposalInfoGroup(): FormGroup {
    return this.wizardForm.get('proposalInfo') as FormGroup;
  }

  get insuredInfoGroup(): FormGroup {
    return this.wizardForm.get('insuredInfo') as FormGroup;
  }

  get productInfoGroup(): FormGroup {
    return this.wizardForm.get('productInfo') as FormGroup;
  }

  get accountDetailsGroup(): FormGroup {
    return this.wizardForm.get('accountDetails') as FormGroup;
  }

  addInsured() {
    const g = this.fb.group({
      name: ['', Validators.required],
      birthday: [''],
      insuredAge: [''],
      gender: ['']
    });
    this.insuredList.push(g);
  }


  removeInsured(i: number) {
    this.insuredList.removeAt(i);
  }

  deleteApplicant(i: number) {
    this.properInfoList.removeAt(i);
  }

  // Navigation
  next() {
    if (this.step < 3) this.step++;
  }
  prev() {
    if (this.step > 0) this.step--;
  }


  goTo(index: number) {
    this.step = Math.max(0, Math.min(3, index));
  }

  finish() {
    if (this.wizardForm.valid) {
      // replace with real submit
      console.log('Final payload', this.wizardForm.value);
      alert('Form submitted — check console for payload');
    } else {
      alert('Please validate the form before finishing.');
    }
  }

}
