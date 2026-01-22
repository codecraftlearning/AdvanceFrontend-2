import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  public id: string = 'fullName_id';
  public label: string = 'Full Name';
  public type: string = 'password';
  public name: string = 'fullName';
  public placeholder: string = 'your name';
  public value: string = 'current Value';
}
