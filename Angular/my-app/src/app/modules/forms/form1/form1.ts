import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

type LoginForm = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-form1',
  standalone: false,
  templateUrl: './form1.html',
  styleUrl: './form1.scss',
})
export class Form1 {
  //Template form example

  user: LoginForm = {
    email: '',
    password: '',
  };

  public onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      console.log(loginForm.value);
    } else {
      loginForm.form.markAllAsTouched()
    }
  }
}
