import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { AuthService } from 'src/app/auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs:AngularFirestore, private as:AuthService) { }

  addToCart(data: Product){
    return this.fs.collection(`Users/${this.as.newUser}/cart`).add(data)
  }
}
