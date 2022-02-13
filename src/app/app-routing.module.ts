import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  
  {path:'',component: SignUpComponent},
  { path: 'register', component: SignUpComponent },
  {path:'userList', component:UserListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
