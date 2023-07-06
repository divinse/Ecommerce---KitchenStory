import { Component, OnInit } from '@angular/core';
import { login } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit{
  showlogin:boolean=true;
  constructor(private user:UserService){}
  ngOnInit(): void {
  }
  signup(data:login){
   
    this.user.userSignup(data)


  }
  login(data:login){
   console.warn(data)
   this.user.userlogin(data)

  
  }

  openlogin(){
    console.error("opemlog")
    this.showlogin=true
  }


  opnsignup(){
    console.error("sign")
    this.showlogin=false
  }

}
