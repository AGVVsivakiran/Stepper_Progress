import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';   
import { Interactingpage } from '../../interactingpage/interactingpage';

@Component({
  selector: 'app-switch',
  imports: [CommonModule,Interactingpage],
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
  boxclose = false; //for closing box
  popup:number | null = null; //for popup box
  escapeclose = false; //for escape key close

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

  //for closing box
  popupchanges(boxNumber?: number) {
    if (boxNumber) {
      // when clicking box-1 or box-2 buttons
      this.popup = boxNumber;
      console.log('Popup box number:', this.popup);
      this.boxclose = false;  // close popup
    } else {
      // toggle popup open/close when clicking main button or close icon
      this.boxclose = !this.boxclose;
    }
  }

  //escape btn
  escapebtn(){
    this.escapeclose = !this.escapeclose;
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.escapeclose = false;
      }
    });
    document.body.style.overflow = 'hidden';
  }
}
