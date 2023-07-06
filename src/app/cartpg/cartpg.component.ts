import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';

@Component({
  selector: 'app-cartpg',
  templateUrl: './cartpg.component.html',
  styleUrls: ['./cartpg.component.scss']
})
export class CartpgComponent implements OnInit{
  cartproduct: product[] = [];
  fakeArray:number[] | undefined;
  itemcount!: number | 0;
  totalval!:number|0;
  totalval1!:number|0;
  ngOnInit(): void {
    
    this.cartproduct = JSON.parse(localStorage.getItem('localCart')!);
    this.itemcount=this.cartproduct.length
   this.fakeArray   = new Array(this.itemcount);
    var nam=this.cartproduct[0].pname
    let tempo;
    let hold=0;
    //console.warn(JSON.parse(cartproduct.charAt(1)))
    for(let i=0;i<this.itemcount;i++){
      
      tempo=this.cartproduct[i].pprice*this.cartproduct[i].ordquant!;
      hold=hold+tempo

    }
    console.warn(hold)
    this.totalval=hold
  }

}
