import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent }                 from './app.component';
import { CsaComponent }                 from './csa.component';
import { ViewFormComponent }                 from './view-form.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'view',
        component: ViewFormComponent
      },
      {
        path: 'csa',
        component: CsaComponent
      },
    ])
  ],
  declarations: [ AppComponent, CsaComponent, ViewFormComponent, DynamicFormComponent, DynamicFormQuestionComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
