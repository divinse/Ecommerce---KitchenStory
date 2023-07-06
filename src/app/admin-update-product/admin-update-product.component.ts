import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.scss']
})
export class AdminUpdateProductComponent implements OnInit {
  updateproductstatus:string|undefined
  productdata:undefined|product

  constructor(private route:ActivatedRoute,private service:ProductService,private rr:Router){}
  ngOnInit(): void {
    
    let productid=this.route.snapshot.paramMap.get("id")
   
    productid && this.service.getProduct(productid).subscribe((data)=>{
      console.warn(data)
      this.productdata=data
    });

  }



  submit(data:product){
    if(this.productdata){
      data.id=this.productdata.id
    }
    this.service.updateProduct(data).subscribe((res)=>{
      if(res){
  this.updateproductstatus="Product updated"
      }
    });
    setTimeout(()=>{
      this.updateproductstatus=undefined
      this.rr.navigateByUrl("/admin-home")
    },3000)
    
  }
  

}
