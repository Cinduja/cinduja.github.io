import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule } from '@angular/router';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { CKEditorModule } from 'ng2-ckeditor'; 

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserListComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,RouterModule,CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
