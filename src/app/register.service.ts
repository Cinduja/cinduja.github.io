import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Users } from './Users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from './Content';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<Users[]> {
    console.log('getUser '+this.baseURL + 'Users')
    return this.http.get<Users[]>(this.baseURL + 'Users')
  }
  addUser(user:Users):Observable<Users>{
   return  this.http.post<Users>(this.baseURL + 'Users',user,
    {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    
  }
  AddUpdateContent(pagecontent: Content) {  
    
    return this.http.post(this.baseURL +'Content', pagecontent);  
}  
Getcontent() {  
  
  return this.http.get(this.baseURL +'Content');  
}
 
}
