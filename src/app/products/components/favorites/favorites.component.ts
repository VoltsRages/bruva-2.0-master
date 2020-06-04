import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {
  user: firebase.User
 
  fs: AngularFirestore
  
  favorites: any [] = []
  constructor( private cs:FavoritesService) { }

  ngOnInit(): void {
   
    this.cs.getProduct().subscribe(querySnapshot => {
      //console.log(querySnapshot.data())
     querySnapshot.forEach(doc => {
           this.favorites.push(doc.data())
         })})
        
         

  }
//   delete(index){
//     this.cs.delete(this.orders[index].id)
//   }
//  save(index){
//    this.cs.save(this.orders[index].id, this.orders[index].amount)
//  }
}
