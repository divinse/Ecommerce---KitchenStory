import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit {
addproductstatus : string | undefined
  constructor(private product:ProductService){}

  ngOnInit(): void {
  }
  submit(data:product){
    console.warn(data)
   this.product.addProduct(data).subscribe((result)=>{
    if(result){
      this.addproductstatus="data entery completed succesfully"
    }else{
      this.addproductstatus="data entry failed"
    }
    setTimeout(()=>this.addproductstatus=undefined,3000)
   })
  }

}
