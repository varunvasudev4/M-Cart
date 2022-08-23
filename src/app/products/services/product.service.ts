import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search = new BehaviorSubject("")

  constructor(private http:HttpClient) { }



  //api view all products
  viewAllProducts(){
    return this.http.get("http://localhost:3000/products")
  }
  viewProduct(productId:any){
    return this.http.get("http://localhost:3000/products/"+productId)
  }

  addProduct(productData:any){
    return this.http.post("http://localhost:3000/products/",productData)
  }

  //delete single product
  deleteProduct(productId:any){
    return this.http.delete("http://localhost:3000/products/"+productId)
  }

  updateProduct(productData:any){
    return this.http.patch("http://localhost:3000/products/",productData)
  }
}
