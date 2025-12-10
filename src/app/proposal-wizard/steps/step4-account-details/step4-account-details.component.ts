import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step4-account-details',
  templateUrl: './step4-account-details.component.html',
  styleUrls: ['./step4-account-details.component.scss']
})
export class Step4AccountDetailsComponent {


  @Input()
  group!: FormGroup;

}
