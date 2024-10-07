import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('hoverAnimation', [
      state('default', style({
        transform: 'translateY(0)'
      })),
      state('hover', style({
        transform: 'translateY(-20px)'
      })),
      transition('default <=> hover', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {

  getRouterLink(item: string): string {
    return '/'+ item.toLowerCase();
  }
  title = 'ANIMARUM';

  hoverStates: { [key: string]: string } = {};
  menuItems = ['Home', 'About', 'Services', 'Contact'];

  onMouseEnter(item: string) {
    this.hoverStates[item] = 'hover';
  }

  onMouseLeave(item: string) {
    this.hoverStates[item] = 'default';
  }
}
