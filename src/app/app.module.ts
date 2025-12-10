import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProposalWizardComponent } from './proposal-wizard/proposal-wizard/proposal-wizard.component';
import { Step1ProposalInfoComponent } from './proposal-wizard/steps/step1-proposal-info/step1-proposal-info.component';
import { Step2InsuredInfoComponent } from './proposal-wizard/steps/step2-insured-info/step2-insured-info.component';
import { Step3ProductInfoComponent } from './proposal-wizard/steps/step3-product-info/step3-product-info.component';
import { Step4AccountDetailsComponent } from './proposal-wizard/steps/step4-account-details/step4-account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProposalWizardComponent,
    Step1ProposalInfoComponent,
    Step2InsuredInfoComponent,
    Step3ProductInfoComponent,
    Step4AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
