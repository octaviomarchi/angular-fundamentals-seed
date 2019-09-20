import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a
          routerLink="/"
          routeLinkActive="active">
          <!--[routerLinkActiveOptions]="{ exact: true }"-->
          Home
        </a>
        <a
          routerLink="/oops"
          routeLinkActive="active">
          404
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
