import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [Login,Signup],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-demo');
}
