import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile.component';

@Component({
  selector: 'app-root',
  // imports: [Login, Signup, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-demo');

  // // calling another function from function
  // btnClick(event: MouseEvent) {
  //   // alert('Button clicked!');
  //   console.log('Button Clicked By User.',event.type);
  //   console.log('Button Clicked By User.',(event.target as Element).className);

  //   // this.otherFunc();
  // }

  // // otherFunc() {
  // //   alert('Other function called!');
  // // }

  // // define types
  // // var_name:datatype=value
  // name: String = "Bhavesh Bhoi"

  // // Assign Multiple Data Types
  // age: String | number = 21

  // // String & Boolean
  // other: String | Boolean | number = true

  // // For All Datatypes - any

  // updateName() {
  //   this.name = "Bhavu"
  //   // this.name = 21 // error

  //   // Assign Multiple Data Types
  //   this.age = 22
  //   this.age = "Bhavu"

  //   // Boolean
  //   this.other = true
  //   this.other = false
  //   this.other = "Bhavu"
  //   this.other = 21

  //   console.log(this.name);
  //   console.log(this.age);
  //   console.log(this.other);
  //   this.updateVar();
  // }

  // updateVar() {
  //   let a = 20;
  //   let b:number | Boolean = 10;

  //   console.log(a);
  //   console.log(b);

  //   this.sum(7, 3);
  // }

  // sum(a:number, b:number) {
  //   console.log(a + b);
  // }

  // name = "";
  // dispName = "";
  // email = "";
  // getName(event: Event) {
  //   // this.name = "Bhavesh Bhoi"
  //   // const name = (event.target as HTMLInputElement).value;

  //   this.name = (event.target as HTMLInputElement).value;
  //   // console.log(name);
  //   // this.name = name;
  // }

  // showName(){
  //   this.dispName = this.name;
  // }

  // setName(){
  //   this.name = "Bhavesh Bhoi";
  // }

  // getEmail(val: string){
  //   console.log(val);
  //   this.email = val;
  // }

  // setEmail(){
  //   this.email = "bhavubhoi@swiftlist.io";
  // }

  display = true;
  toggle = true;

  hideBox(){
    this.display = false;
  }

  showBox(){
    this.display = true;
  }

  toggleBox(){
    this.display = !this.display;
  }

  toggleBoxes(){
    this.toggle = !this.toggle;
  }
}
