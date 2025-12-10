import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step3-product-info',
  templateUrl: './step3-product-info.component.html',
  styleUrls: ['./step3-product-info.component.scss']
})
export class Step3ProductInfoComponent {


  @Input()
  group!: FormGroup; // productInfo

}
