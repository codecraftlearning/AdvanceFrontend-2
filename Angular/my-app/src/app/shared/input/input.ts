import { CommonModule } from '@angular/common';
import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

type CustomInputType = 'text' | 'number' | 'password';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class CustomInput implements OnChanges, OnInit, DoCheck{
  @Input()
  public id: string = '';

  @Input()
  public label: string = '';
  
  @Input()
  public type: CustomInputType = 'text';
  
  @Input()
  public name: string = '';
  
  @Input()
  public placeholder: string = '';
  
  @Input()
  public value: string | number = '';

  @Output()
  public inputEvent: EventEmitter<string | number> = new EventEmitter();

  constructor() {

  }

  public ngOnChanges(changes: SimpleChanges): void {
    
  }

  public ngOnInit(): void {
    
  }

  public ngDoCheck(): void {
    
  }

  public updateValue(): void {
    this.inputEvent.emit(this.value);
  }
}
