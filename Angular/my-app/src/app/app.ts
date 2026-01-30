import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomInput } from "./shared/input/input";
import { FormsModule } from './modules/forms/forms-module';

@Component({
  selector: 'ap-root',
  standalone: true,
  imports: [CommonModule, CustomInput, FormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {
  protected readonly title = signal('my-app');

  public _fullName: string = '';
  public _address: string = '';
  public _age: number = 0;
  public _password: string = '';

  public set fullName(value: string | number) {
    this._fullName = ''+value;
  }
  public set address(value: string | number) {
    this._address = ''+value;
  }
  public set age(value: string | number) {
    this._age = parseInt(''+value);
  }
  public set password(value: string | number) {
    this._password = ''+value;
  }


  public printData(): void {
    console.log(`${this._fullName}, ${this._age}, ${this._address}, ${this._password}`);
  }
}



