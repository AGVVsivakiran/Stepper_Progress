import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-switch',
  imports: [CommonModule],
  templateUrl: './switch.html',
  styleUrl: './switch.scss'
})
export class Switch {
constructor(private route:Router){}
  back(){
    this.route.navigate(['step-progress']);
  }
  selected:string = '1'; //selecting tabs
  screen = 1;  //basic selecting screen
  limitedscreen:number = 1; //limited screen

  //selecting tabs
  select(box: string){
    this.selected = box;
    console.log(this.selected = box);
  }

  //basic selecting screen
  backscr(){
this.screen--;
console.log(this.screen);
  }
  fdscr(){
this.screen++;
console.log(this.screen);
  }

  //limited screen
  backlim(){
    if(this.limitedscreen > 1){
      this.limitedscreen--;
    }
  }
  fdrlim(){
    if(this.limitedscreen < 5){
      this.limitedscreen++;
    }    
  }

  limitsubmit(){
    alert("Form Submitted Successfully");
  }
}
