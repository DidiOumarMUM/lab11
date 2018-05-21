import { Component, OnInit , Input ,Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  
  <div> <button (click)="Increase()"> + </button> </div>
  <div> {{countervalue}}  </div>
  <div><button (click)="decrease()"> - </button> </div>
  <input #b (keyup)="3"/> {{b.value}} 
  
  `,
  styles: [`div {display: inline-block; margin : 3px ;}`]
})
export class CounterComponent implements OnInit {
   @Input('counter') countervalue : number =0 ;
   @Output() CounterChange: EventEmitter<number>= new EventEmitter<number>();
  constructor() {
   }
 
   updateParent(): void {

		this.CounterChange.emit(this.countervalue); 
  } 
  
  ngOnInit() {
    this.updateParent() ;
  }
  Increase() {
    this.countervalue++ ;
    this.updateParent() ;
  }

  decrease() {
    this.countervalue-- ;
    this.updateParent() ;
  }
}
