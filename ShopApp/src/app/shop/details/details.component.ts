import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Details } from 'src/app/model/details.model';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {



  constructor(public details:Details,private cart: Cart) { }

  ngOnInit() {
  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
  }
  
  
}
