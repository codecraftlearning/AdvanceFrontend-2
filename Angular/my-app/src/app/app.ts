import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Input } from "./shared/input/input";
import { FormsModule } from './modules/forms/forms-module';

@Component({
  selector: 'ap-root',
  standalone: true,
  imports: [CommonModule, Input, FormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {
  protected readonly title = signal('my-app');
}



