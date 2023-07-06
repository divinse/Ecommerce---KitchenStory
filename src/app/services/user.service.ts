import { Injectable } from '@angular/core';
import { login } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }
  userSignup(user:login){
    this.http.post("http://localhost:3000/users",user,{observe:'response'}).subscribe((res)=>{
console.error(res)
if(res){
  localStorage.setItem('user',JSON.stringify(res.body))
  this.router.navigate(['/']);
}

    });

  }

  userlogin(data:login){
    this.http.get<login>(`http://localhost:3000/users?name=${data.name}&pass=${data.pass}`,{observe:'response'})
    .subscribe((res1)=>{
      console.error("yes")
      if(res1&&res1.body){
        localStorage.setItem('user',JSON.stringify(res1.body))
        this.router.navigate(['/']);
      }
    })
  }
}



