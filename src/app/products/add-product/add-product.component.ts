import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router) { }

  addProductForm = this.fb.group({
      id: [],
      productName: [""],
      categoryId: [""],
      Description: [""],
      price: [],
      isAvailable:[""],
      image:[""],
      rating:[""],
      review: [""],
      vendorName: [""],
      warranty: [""]
  })

  ngOnInit(): void {
  }

  addProduct(){
    let newProduct ={
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      Description: this.addProductForm.value.Description,
      price: this.addProductForm.value.price,
      isAvailable:this.addProductForm.value.isAvailable,
      image:this.addProductForm.value.image,
      rating:this.addProductForm.value.rating,
      review: this.addProductForm.value.review,
      vendorName: this.addProductForm.value.vendorName,
      warranty: this.addProductForm.value.warranty
    }
    this.ps.addProduct(newProduct).subscribe((data)=>{
      alert("New Product added successfully")
      this.router.navigateByUrl("")

    })
  }

}
