import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.scss'
})
export class Switch {
constructor(private route:Router){}
  back(){
    this.route.navigate(['step-progress']);
  }
}
