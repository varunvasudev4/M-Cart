import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/site-layout/header/header.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private ps:ProductService) { }

  pid:any
  product:any
  quatity:any
  cart:any={}
  sum:any
  cartArr:any=[]


  ngOnInit(): void {

    this.ar.params.subscribe((data:any)=>{
      this.pid=data['id']
      this.quatity=data['quatity']
     })
    this.ps.viewProduct(this.pid).subscribe((item)=>{
      this.product=item 
      this.getCartData()
      this.saveCartData() 
      this.toarr()    
      this.totalprice()
    })

    
  }

  saveCartData(){
    this.product['quatity']=Number(this.quatity)
    this.getCartData()
    if(this.product.id in this.cart){
      this.cart[this.product.id]['quatity']+=Number(this.quatity)
    }else if(this.quatity>0){
      this.cart[this.product.id]=(this.product)
    }
     if(this.cart){
      localStorage.setItem('cart',JSON.stringify(this.cart))
     }
  }

  getCartData(){
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart') || "")
    }
  }

  toarr(){
    for(let item in this.cart){
      this.cartArr.push(this.cart[item])
    }
    //console.log(this.cartArr);
  }

  delete(id:any){
    //console.log(id);
    delete this.cart[id]
    window.localStorage.clear();
    this.saveCartData() 
    this.getCartData()
    this.cartArr=[]
    this.toarr()    
    
  }

  totalprice(){
    this.sum=0
    for(let i of this.cartArr){
      this.sum+=i.price*i.quatity
    }

  } 
}
