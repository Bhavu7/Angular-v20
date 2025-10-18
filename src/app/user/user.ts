import { ActivatedRoute } from '@angular/router';
import { routes } from './../app.routes';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // name : null|string = "";
  // constructor(private route:ActivatedRoute){

  // }
  // ngOnInit(){
  //   this.route.params.subscribe((params) => {
  //     // console.log(params);
  //     this.name = params['name'];
  //   })
  // }

  // @Input() user:string='';
  // @Input() city:string='';
  @Output() getUsers = new EventEmitter();
  users = ['Bhavu', 'Dev', 'Harsh', 'Amit', 'Sujit', 'Het'];

  // ngOnInit() {
  //   this.getUsers.emit(this.users);
  // }

    viewUsers() {
    this.getUsers.emit(this.users);
  }
}
