import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private router:Router){

  }

  navigateToProfile(name:string){
    // this.router.navigate(['profile'],{queryParams:{name:'Bhavesh Bhoi'}});
    // this.router.navigate(['profile'],{queryParams:{name:name}});
    this.router.navigate(['profile'],{queryParams:{name}});
  }
}
