import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {
countries :any= ['Indian','Australian','Canadian','Brazilan','Britain'];
     
  registerForm=new FormGroup({
    
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    mobileNumber:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required)
    }
  )
  register()
  {
    if (this.registerForm.invalid) 
    {
      alert("All fields are required")
    }
    else
    {
    alert("Registered Successfully");
    }
  }
  saveGender: boolean = true;
  saveGender1:boolean=false;

  public onGenderMaleChanged(value:boolean){  
      this.saveGender = value;
      this.saveGender1=!value;
    }
    public onGenderFemaleChanged(value:boolean){  
      this.saveGender = !value;
      this.saveGender1 = value;
    }
 

}
