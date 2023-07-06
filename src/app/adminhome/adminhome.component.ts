import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit{

  productdisplay:undefined|product[]
  statusmsg:undefined|string
  constructor(private product:ProductService){
    
  }
  ngOnInit(): void {
    this.loadpage();
  }

  loadpage(){
    this.product.productdisplay().subscribe((result)=>{
      console.warn(result)
      this.productdisplay=result;
     
    })
  }
  deleteProduct(id:number){
    console.warn("id ",id)
    this.product.deleteProduct(id).subscribe((datast)=>{
      if(datast){
        this.statusmsg="Product Deleted"
        this.loadpage();
      }
    })
    setTimeout(()=>{
      this.statusmsg=undefined
    },3000);

  }


}
