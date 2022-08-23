import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList:any
  filterCategory:any
  searchKey:any=""

  constructor(private ps:ProductService) { 
    
  }

  ngOnInit(): void {
    this.ps.viewAllProducts().subscribe(data=>{
      this.productList=data
    })
    this.ps.search.subscribe((value:any)=>{
      this.searchKey = value
    })
    //this.filter('')
  }

  filter(category:any){
    this.filterCategory = this.productList.filter((item:any)=>{
      if(item.categoryId == category || category==''){
        console.log(item);
        return item
      } 
    })
  }
}
