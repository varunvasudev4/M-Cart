import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private ps:ProductService,private router:Router) { }

  cartQuatity:any=0
  cart:any

  ngOnInit(): void {
    this.quatity()
  }

  quatity(){
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart') || "")
    }
    this.cartQuatity = Object.keys(this.cart).length
  }

  search(event:any){
   this.ps.search.next(event.target.value)
  }

  goCart(){
    this.router.navigateByUrl('products/cart/'+1+"/"+0)
  }

}
