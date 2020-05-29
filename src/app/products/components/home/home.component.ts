import { Component, OnInit } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private gs: ProductsService) { }


  ngOnInit(): void {
    this.gs.getAllProducts().subscribe(data => this.products = data);
  }

  addToCart(index) {
    console.log('added', this.products[index]);
  }




}

