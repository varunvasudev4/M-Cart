import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private ps: ProductService, private router: Router, private ar: ActivatedRoute) { }

  product: any
  pid: any

  formvalue!: FormGroup


  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data['id']
    })
    this.ps.viewProduct(this.pid).subscribe((item) => {
      this.product = item
      this.editProductData(this.product)
    })

    this.formvalue= this.fb.group({
      id: [],
      productName: [""],
      categoryId: [""],
      Description: [""],
      price: [],
      isAvailable: [],
      image: [""],
      rating: [""],
      review: [""],
      vendorName: [""],
      warranty: [""]
    })
  }

  editProductData(product:any){
    this.formvalue.controls['id'].setValue(product.id)
    this.formvalue.controls['productName'].setValue(product.productName)
    this.formvalue.controls['categoryId'].setValue(product.categoryId)
    this.formvalue.controls['Description'].setValue(product.Description)
    this.formvalue.controls['price'].setValue(product.price)
    this.formvalue.controls['isAvailable'].setValue(product.isAvailable)
    this.formvalue.controls['image'].setValue(product.image)
    this.formvalue.controls['rating'].setValue(product.rating)
    this.formvalue.controls['review'].setValue(product.review)
    this.formvalue.controls['vendorName'].setValue(product.vendorName)
    this.formvalue.controls['warranty'].setValue(product.warranty)
  }

  updateProduct() {
    let upProduct = {
      id: this.formvalue.value.id,
      productName: this.formvalue.value.productName,
      categoryId: this.formvalue.value.categoryId,
      Description: this.formvalue.value.Description,
      price: this.formvalue.value.price,
      isAvailable: this.formvalue.value.isAvailable=='false'?false:true,
      image: this.formvalue.value.image,
      rating: this.formvalue.value.rating,
      review: this.formvalue.value.review,
      vendorName: this.formvalue.value.vendorName,
      warranty: this.formvalue.value.warranty
    }
    this.ps.updateProduct(upProduct,upProduct.id).subscribe((data) => {
      alert("Product updated successfully")
      this.router.navigateByUrl("products/view-product/"+this.formvalue.value.id)

    })
  }

}
