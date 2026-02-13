import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomInput } from './shared/input/input';
import { FormsModule } from './modules/forms/forms-module';
import { FormsModule as FormsModule_1 } from '@angular/forms';

@Component({
  selector: 'ap-root',
  standalone: true,
  imports: [CommonModule, CustomInput, FormsModule, FormsModule_1],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('my-app');

  private _selection: number = 0;
  public set selection(value: string | number) {
    value = value ?? 0;
    this._selection = parseInt(value + '');
  }
  public get selection(): number {
    return this._selection;
  }

  public names: string[] = ['ankit', 'bhavishya'];


  public ngOnInit(): void {
    this.initCustomerList();
  }

  public initCustomerList(): void {
    const list = document.getElementById('customerList');
    if (!list) {
      return;
    }

    this.names.forEach(name => {
      const litItem = document.createElement('li');
      litItem.innerText = name;
      list.appendChild(litItem);
    })
  }

  public selectCustomer(value: number | string): void {
    this.selection = value;

    const span = document.getElementById('customerName');
    let selectedName = '';
    if (this.selection === 1) {
      selectedName = this.names[0];
    } else if (this.selection === 2) {
      selectedName = this.names[1];
    } else {
      selectedName = 'Customer not defined';
    }

    if (!!span) {
      span.innerText = selectedName;
    }
  }
  
  public selectCustomer2(value: number | string ): void {
    this.selection = value;

    const span = document.getElementById('customerName');
    let selectedName = '';

    switch(this.selection) {
      case 1: selectedName = this.names[0]; break;
      case 2: selectedName = this.names[1]; break;
      default: selectedName = 'Customer not defined';
    }

    if (!!span) {
      span.innerText = selectedName;
    }
  }
}

/*

  Directives In angular
    1). In-buit directives
              ->   IF-Else
              ->   Switch
              ->   For Loop
*/
