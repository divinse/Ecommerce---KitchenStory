import { Component, OnInit } from '@angular/core';
import { login, passwordupdate } from '../data-type';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-chang-password',
  templateUrl: './admin-chang-password.component.html',
  styleUrls: ['./admin-chang-password.component.scss']
})
export class AdminChangPasswordComponent implements OnInit  {
  passstatus:string|undefined
  constructor(private adminserv:AdminService,private route:ActivatedRoute){}
  ngOnInit(): void {
    
  }

  changepass(data:passwordupdate){
    console.warn(data)
    
    if(data.pass!=data.repass){
      this.passstatus="Password dosenot match"
      setTimeout(() => {
        this.passstatus=undefined;
      }, 3000);



    }else{
      data.name=localStorage.getItem('admin')||"";
      
      this.adminserv.changepassserv(data).subscribe((re)=>{
        if(re){
          this.passstatus="Password updated"
        }

        setTimeout(() => {
          this.passstatus=undefined;
        }, 3000);

      });
    }

  }



}
