import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

serchres:undefined|product[];

  constructor(private activateRoute:ActivatedRoute,private product:ProductService){

  }
  ngOnInit(): void {
    let query= this.activateRoute.snapshot.paramMap.get('query')
    console.log(query)

    query && this.product.serchh(query).subscribe((res)=>{
      this.serchres=res;
    })

  }

}
