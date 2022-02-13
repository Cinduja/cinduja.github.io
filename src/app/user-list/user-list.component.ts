import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

import { Users } from '../Users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:Users[]=[];
  constructor(private registersvc:RegisterService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.registersvc.getUser()
      .subscribe(data => {
        console.log(data)
        this.users=data;
      })      
 
  }
}


