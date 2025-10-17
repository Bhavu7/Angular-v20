import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile.component';
import { User } from './user/user';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: 'profile',
    component: Profile,
    data:{
      name:'Bhavu Bhoi'
    }
  },
  {
    path: 'user/:id/:name/:age/:email',
    component: User
  },
  {
    path: '**',
    component: PageNotFound
  }
];
