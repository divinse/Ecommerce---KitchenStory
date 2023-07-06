import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { login, passwordupdate } from '../data-type';
import { Data, Router } from '@angular/router'
import { LocationStrategy } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isLoginError = new EventEmitter<boolean>(false
  )

  constructor(private http: HttpClient, private router: Router) {
  }

  adminLogin(data: any) {
    this.http.get(`http://localhost:3000/admin?name=${data.name}&pass=${data.pass}`,
      { observe: 'response' }).subscribe((result:any) => {
        console.warn(result)
        if (result && result.body && result.body.length) {
          localStorage.setItem('admin',data.name)
          this.router.navigate(['admin-home'])
        } else {
          this.isLoginError.emit(true)
        }

      })
  }


  changepassserv(data:passwordupdate){
    


    console.warn(data)
    return this.http.patch(`http://localhost:3000/admin/1`,data)
    
  }
  

}
