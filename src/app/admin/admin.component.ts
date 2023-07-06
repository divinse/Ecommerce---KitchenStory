import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

import { login } from '../data-type';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
authError:string=''

  constructor(private admin: AdminService) { }

  ngOnInit(): void { }
  login(data: login): void {
    this.admin.adminLogin(data)
    this.admin.isLoginError.subscribe((isError) => {
      console.warn(isError
      )
      if (isError) {
        this.authError="Inavlid Credentials"
      }
    })
  }

}


