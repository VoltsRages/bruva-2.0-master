import { Injectable, AfterContentChecked } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import {  Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  user: firebase.User;
   
  constructor(private fs:AngularFirestore,private auth: AuthService, private as:AuthService) { }

  addToCart(product: Product,amount:number){
      console.log (product,amount)
      this.auth.getUserState().pipe(switchMap(user => {(user); 
        return this.fs.collection(`Users/${user.uid}/cart`).add({product,amount})}) ).subscribe()
   
    
  }
  getProduct() {

    return this.auth.getUserState().pipe(switchMap(user => {
    return this.fs.collection(`Users`).doc(user.uid).collection("cart").get()
    
        }
    ));
      }
     
      getCart(productId) {
        return this.fs.collection('products').doc(productId).get();
      }
}

