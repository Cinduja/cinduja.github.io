import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
{Router}

@Component({
  selector: 'app-pagecontent',
  templateUrl: './pagecontent.component.html',
  styleUrls: ['./pagecontent.component.css']
})
export class PagecontentComponent implements OnInit {

  res: any;  
  terms: any;  
  cont: any;  
  
  constructor(private contentservice:RegisterService,private router: Router) { }  
  
  ngOnInit() {  
   this.Getcontent()  
  }  
  Getcontent()  
  {  
    this.contentservice.Getcontent().subscribe((data:any)=>{  
      this.res=data;  
      
      console.log(this.res);  
    })  
  }  
   
}