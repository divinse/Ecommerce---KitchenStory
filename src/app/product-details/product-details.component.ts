import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productdata:undefined|product
  productquan:number=1;
constructor(private activeRoute:ActivatedRoute,private produ:ProductService){}

  ngOnInit(): void {
    let productid=this.activeRoute.snapshot.paramMap.get("productid")
    productid && this.produ.getProduct(productid).subscribe((res)=>{
      this.productdata=res
    })
  }
  handleQuantity(val:string){
    if(this.productquan<20&&val==='plus'){
      this.productquan+=1;
    }
    if(this.productquan>1&&val==='min'){
      this.productquan-=1;
    }
  }

addtocart(){
  if(this.productdata){

        this.productdata.ordquant=this.productquan
        console.warn(this.productdata);
        if(localStorage.getItem('user')){
          this.produ.localaddtocart(this.productdata)
        }else{
          
        }
        
  }
}
}
