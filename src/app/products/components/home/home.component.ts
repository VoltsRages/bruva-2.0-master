import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  add: number= -1

  constructor(private gs: ProductsService,private cs:CartService) { }


  ngOnInit(): void {
    this.gs.getAllProducts().subscribe(data => this.products = data);
  }

  addToCart(index:number) {
this.add = +index  }

buy(amount:number){
 let selectedProduct = this.products[this.add]
 console.log(amount)
   this.cs.addToCart(selectedProduct,amount)
 }



}

