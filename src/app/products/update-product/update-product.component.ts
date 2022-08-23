import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router,private ar:ActivatedRoute) { }

  product:any
  pid:any

  

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
     this.pid = data['id'] 
    })
    this.ps.viewProduct(this.pid).subscribe((item)=>{
      this.product=item})
    }

  updateProduct(data:any){
    let upProduct ={
      id: this.product.id,
      productName: this.product.productName,
      categoryId: this.product.categoryId,
      Description: this.product.Description,
      price: this.product.value.price,
      isAvailable:this.product.isAvailable,
      image:this.product.image,
      rating:this.product.rating,
      review: this.product.review,
      vendorName: this.product.vendorName,
      warranty: this.product.warranty
    }
    this.ps.updateProduct(upProduct).subscribe((data)=>{
      alert("Product updated successfully")
      this.router.navigateByUrl("")

    })
  }

}
