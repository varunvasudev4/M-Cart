import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId:any

  constructor(private router:Router,private ar:ActivatedRoute,private ps:ProductService) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
    this.productId=data['id']

    })
    this.ps.deleteProduct(this.productId).subscribe((item:any)=>{
      alert("Product Deleted Successfully")
      this.router.navigateByUrl('products')
    })
  }

}
