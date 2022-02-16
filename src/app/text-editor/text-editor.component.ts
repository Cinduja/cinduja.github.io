import { Component, OnInit ,ViewChild } from '@angular/core';
import { Content } from '../Content';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';    
{RegisterService}

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  name = 'ng2-ckeditor';    
  ckeConfig: any;    
   mycontent?: string;    
  log?: string   
  @ViewChild('PageContent') PageContent: any;    
  res: any;    
     
  constructor(private contentservice:RegisterService,private router: Router) { }    
  contentdata=new Content();    
    
  ngOnInit() {    
    this.Getcontent()    
    this.ckeConfig = {    
      allowedContent: false,    
      extraPlugins: 'divarea',    
      forcePasteAsPlainText: true    
    };    
  }    
  onSubmit()    
  {    
    debugger;    
    debugger;    
    this.contentservice.AddUpdateContent(this.contentdata).subscribe((data : any) => {    
      debugger;    
      alert("Data saved Successfully");    
      this.router.navigate(['/content']);    
    
    })    
  }    
  Getcontent()    
  {    
    this.contentservice.Getcontent().subscribe((data:any)=>{    
      this.res=data;    
      console.log(this.res);    
    })    
  }    
}    