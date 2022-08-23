import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private ps:ProductService) { }

  ngOnInit(): void {
  }

  search(event:any){
   this.ps.search.next(event.target.value)
  }

}
