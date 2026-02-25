import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form1 } from './form1/form1';
import { Form2 } from './form2/form2';
import { Form3 } from './form3/form3';
import { ReactiveFormsModule, FormsModule as FormsModule_1 } from '@angular/forms';



@NgModule({
  declarations: [
    Form1,
    Form2,
    Form3
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule_1
  ],
  exports: [
    Form1,
    Form2,
    Form3
  ]
})
export class FormsModule { }
