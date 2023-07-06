import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: String="default"
  sercresult:undefined|product[];
  username:string="";
  cartitem:number=0;

  constructor(private router:Router,private product:ProductService) {
    
  }
  ngOnInit(): void {
  this.router.events.subscribe((valu:any)=>{
  
    if(valu.url){
      if(localStorage.getItem('admin')&&valu.url.includes('admin')){
        
        this.menuType='admin'
      }else if(localStorage.getItem('user')){
        let userstor=localStorage.getItem('user');
        let userdt=userstor&&JSON.parse(userstor);
        this.username=userdt.name;
        this.menuType="user";

      }else{
        this.menuType='default'
      }
    }
  })
  
  let cartDt = localStorage.getItem('localCart');
  if(cartDt){
    this.cartitem=JSON.parse(cartDt).length
  }
  this.product.cartdata.subscribe((items)=>{
    this.cartitem=items.length
  })
  }
  logut(){
    localStorage.removeItem('user')
    this.router.navigateByUrl("/")
  }

  logout(){
    localStorage.removeItem('admin')
    this.router.navigateByUrl("/")
  }
  findcomp(query:KeyboardEvent){
    if(query){
      const eke=query.target as HTMLInputElement
      this.product.serchh(eke.value).subscribe((result)=>{
        console.warn(result)
        this.sercresult=result
      })
      
    }
  }


  subserch(val:string){
    this.router.navigate([`search/${val}`])

  }

  hideserch(){
    this.sercresult=undefined;
  }

  redirectToDetail(id:number){
    this.router.navigate([`/details/`+id])
  }

}
