import { Component } from '@angular/core';
import { App } from '../app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactingpage',
  imports: [CommonModule],
  templateUrl: './interactingpage.html',
  styleUrl: './interactingpage.scss'
})
export class Interactingpage {
  constructor(public appRef: App) {}

  toggleSidebar() {
    this.appRef.toggleMenu();
  }
}
