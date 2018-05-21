import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 11 ';
   isvalid : boolean = false ;
  person : string[]  = ['didi' , 'ahmed' , 'ismaiil' , 'moustapha'] ;
  countervalue : number =0 ;
 setCounterValue(val : number)
 {
      this.countervalue=val ;
 }
 
}
