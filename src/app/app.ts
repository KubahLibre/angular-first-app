import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  template: `
    <h1>Hello, {{ title() }}</h1>

    
  `,
})
export class App {
  protected readonly title = signal('first-app');
}
