import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  user: firebase.User
 
  fs: AngularFirestore
  
  orders: any [] = []
  constructor( private cs:CartService) { }

  ngOnInit(): void {
   
    this.cs.getProduct().subscribe(querySnapshot => {
      //console.log(querySnapshot.data())
     querySnapshot.forEach(doc => {
           this.orders.push(doc.data())
         })})
        
         

  }
  delete(index){
    this.cs.delete(this.orders[index].id)
  }
 save(index){
   this.cs.save(this.orders[index].id, this.orders[index].amount)
 }
}
