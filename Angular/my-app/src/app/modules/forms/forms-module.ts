import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form1 } from './form1/form1';
import { CustomInput } from '../../shared/input/input';
import { Form2 } from './form2/form2';
import { Form3 } from './form3/form3';



@NgModule({
  declarations: [
    Form1,
    Form2,
    Form3
  ],
  imports: [
    CommonModule,
    CustomInput
  ],
  exports: [
    Form1,
    Form2,
    Form3
  ]
})
export class FormsModule { }
