import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product [] = []
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getProduct().subscribe(querySnapshot => {
      //console.log(querySnapshot.data())
     querySnapshot.forEach(doc => {
           this.products.push(doc.data())
         })})
  }

}
