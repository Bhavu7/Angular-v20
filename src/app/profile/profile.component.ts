import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class Profile{

  username:string|null = '';

  constructor(private route:ActivatedRoute){}
  ngOnInit():void{
    this.username = this.route.snapshot.paramMap.get('name');
    console.log(this.username);
  }
}
