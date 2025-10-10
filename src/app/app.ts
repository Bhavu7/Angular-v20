import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-demo');

  // calling another function from function
  btnClick() {
    alert('Button clicked!');
    this.otherFunc();
  }

  otherFunc() {
    alert('Other function called!');
  }

  // define types
  // var_name:datatype=value
  name: String = "Bhavesh Bhoi"

  // Assign Multiple Data Types
  age: String | number = 21

  // String & Boolean
  other: String | Boolean | number = true

  // For All Datatypes - any

  updateName() {
    this.name = "Bhavu"
    // this.name = 21 // error

    // Assign Multiple Data Types
    this.age = 22
    this.age = "Bhavu"

    // Boolean
    this.other = true
    this.other = false
    this.other = "Bhavu"
    this.other = 21

    console.log(this.name);
    console.log(this.age);
    console.log(this.other);
    this.updateVar();
  }

  updateVar() {
    let a = 20;
    let b:number | Boolean = 10;

    console.log(a);
    console.log(b);

    this.sum(7, 3);
  }

  sum(a:number, b:number) {
    console.log(a + b);
  }
}
