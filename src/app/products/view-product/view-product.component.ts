import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  product:any


  constructor(private ar:ActivatedRoute,private ps:ProductService) { 

  }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
     this.ps.viewProduct(data['id']).subscribe((item)=>
     this.product=item)
    })
  }



}
