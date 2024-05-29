import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  shown = false;
  Show_MEGA_MENU() {
    this.shown = !this.shown;
  }
}
