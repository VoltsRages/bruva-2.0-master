import { Injectable, AfterContentChecked } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import {  Observable } from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FavoritesService {
  user: firebase.User;
   
  constructor(private fs:AngularFirestore,private auth: AuthService, private as:AuthService) { }

  addToFavorites(product: Product,amount:number){
      console.log (product,amount)
      this.auth.getUserState().pipe(switchMap(user => {(user); 
        return this.fs.collection(`Users/${user.uid}/favorites`).add({product,amount})}) ).subscribe()
   
    
  }
  getProduct() {

    return this.auth.getUserState().pipe(switchMap(user => {
    return this.fs.collection(`Users`).doc(user.uid).collection("favorites").get()
    
        }
    ));
      }
     
      getFavorites(productId) {
        return this.fs.collection('products').doc(productId).get();
      }
      // delete(id){
      //   return this.auth.getUserState().pipe(switchMap(user => {

      //   return this.fs.doc(`Users/${user.uid}/cart/${id}`).delete()
      //   }));
      // }

      // save(id, amount){
      //   return this.auth.getUserState().pipe(switchMap(user => {

      //     return this.fs.doc(`Users/${user.uid}/cart/${id}`).update({
      //       amount
      //     })
      //     }));
      // }
}

