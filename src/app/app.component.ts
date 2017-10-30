import { Component }       from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/csa">Csa</a>
    <a routerLink="/view">View</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}
