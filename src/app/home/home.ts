import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // constructor(private router:Router){

  // }

  // navigateToProfile(name:string){
  //   // this.router.navigate(['profile'],{queryParams:{name:'Bhavesh Bhoi'}});
  //   // this.router.navigate(['profile'],{queryParams:{name:name}});
  //   this.router.navigate(['profile'],{queryParams:{name}});
  // }

  users = [
    {
      id:1,
      name:'User1',
      age: 21,
      email: 'user@test.com'
    },
    {
      id:2,
      name:'User2',
      age: 21,
      email: 'user@test.com'
    },
    {
      id:3,
      name:'User3',
      age: 21,
      email: 'user@test.com'
    },
    {
      id:4,
      name:'User4',
      age: 21,
      email: 'user@test.com'
    },
    {
      id:5,
      name:'User5',
      age: 21,
      email: 'user@test.com'
    }
  ]
}
