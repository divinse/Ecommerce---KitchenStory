import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  populateproducts:undefined|product[]
  fullproduct:undefined|product[]

  
  constructor(private product:ProductService){}
  
  ngOnInit(): void {
    this.product.popoulateproducts().subscribe((data)=>{
      
      this.populateproducts=data
      
    });
    this.product.fullproducts().subscribe((data)=>{
      this.fullproduct=data
    });
  }
 
}
