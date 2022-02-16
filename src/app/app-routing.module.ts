import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { UserListComponent } from './user-list/user-list.component';
{PagecontentComponent}


const routes: Routes = [
  
  {path:'',component: SignUpComponent},
  { path: 'register', component: SignUpComponent },
  {path:'userList', component:UserListComponent},
  {path:'texteditor',component:TextEditorComponent},
  {path:'content',component:PagecontentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
