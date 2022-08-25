import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product:any
  quatity:any=1
  pid:any

  constructor(private ar:ActivatedRoute,private ps:ProductService,private router:Router) { 

  }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
     this.pid=data['id']
    })
     this.ps.viewProduct(this.pid).subscribe((item)=>{
     this.product=item
    })
  }

  goCart(){
    this.router.navigateByUrl('products/cart/'+this.pid+"/"+this.quatity)
  }



}
