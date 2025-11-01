import { Component, signal } from '@angular/core';
import { RouterOutlet,Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { SideMenu } from "./side-menu/side-menu";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, SideMenu, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('step-progress');
  sidemenu:boolean=true;
    constructor(private router: Router){
      this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.sidemenu = !(event.url === '/login' || event.url === '/register');
      });
    }
    toggleMenu() {
      this.sidemenu = !this.sidemenu;
    }
}
