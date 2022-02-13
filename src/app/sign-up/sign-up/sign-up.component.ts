

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private _regsvc: RegisterService, private router: Router) {
  }
  countries: any = ['Indian', 'Australian', 'Canadian', 'Brazilan', 'Britain'];
  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    gender:new FormControl('',Validators.required),
    country: new FormControl('', Validators.required)
  }
  )
  

register() {
  if (this.registerForm.invalid) {
    alert("All fields are required")
  }
  else {
    console.log(this.registerForm.value);
    this._regsvc.addUser(this.registerForm.value).subscribe(
      (success: any) => console.log('success'),
      (err: any) => console.log(err)
    );
    alert("Registered Successfully");
    this.router.navigateByUrl('/userList');
  }
}
  
}
