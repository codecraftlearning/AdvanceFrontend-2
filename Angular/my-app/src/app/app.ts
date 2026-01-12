import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ap-root',
  imports: [RouterOutlet, UpperCasePipe, CommonModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('my-app');
  myName: string = 'bhavishya';
  myTeacher: string = 'ankit';

  fruits: string[] = ['apple', 'bannana', 'kiwi', 'pineapple', 'mango']

  constructor() {


}
  ngOnInit(): void {
    let ele = document.getElementById("id01");
    if (!!ele) {
      ele.innerText = this.myName.toUpperCase();
    }
  }
}



