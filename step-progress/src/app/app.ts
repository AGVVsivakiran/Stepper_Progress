import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { SideMenu } from "./side-menu/side-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, SideMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('step-progress');
  
}
