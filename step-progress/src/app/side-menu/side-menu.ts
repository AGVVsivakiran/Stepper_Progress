import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss'
})
export class SideMenu {
constructor(private router: Router) {}
  logout(){
    this.router.navigate(['/login']);
  }
}
