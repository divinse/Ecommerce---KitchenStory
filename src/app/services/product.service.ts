import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { product } from '../data-type';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
cartdata=new EventEmitter<product[]|[]>();
  constructor(private http:HttpClient) { }
  addProduct(data:product){
    console.log(data.pname)
   return this.http.post("http://localhost:3000/products",data);
  }
  productdisplay(){
    return this.http.get<product[]>("http://localhost:3000/products");
  }
  deleteProduct(id:number){
    console.error(id)
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`,product)

  }
  popoulateproducts(){
    return this.http.get<product[]>("http://localhost:3000/products?_limit=4");
  }
  fullproducts(){
    return this.http.get<product[]>("http://localhost:3000/products");
  }
  serchh(query:string){
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`)
  }
  
  localaddtocart(data:product){
    console.error("Cart service")

    let cartdata=[];
    let localcart=localStorage.getItem('localCart')
    if(!localcart){
      localStorage.setItem('localCart',JSON.stringify([data]))}else{
        cartdata=JSON.parse(localcart)
        cartdata.push(data)
        localStorage.setItem('localCart',JSON.stringify(cartdata))
      }
      this.cartdata.emit(cartdata)
  
  }

}
