import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-funnel',
  imports: [],
  templateUrl: './funnel.html',
  styleUrl: './funnel.scss'
})
export class Funnel {
constructor(private route: Router ) {}
  back(){
    this.route.navigate(['step-progress']);
  }
}
