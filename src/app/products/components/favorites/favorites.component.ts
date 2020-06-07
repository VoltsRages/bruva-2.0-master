import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit {

 

  
  favorites: any [] = []
  constructor( private fs:FavoritesService) { }

  ngOnInit(): void {
   
    this.fs.getProduct().subscribe(querySnapshot => {
      //console.log(querySnapshot.data())
      querySnapshot.forEach(doc => {
        this.favorites.push({...doc.data(), id: doc.id})
      })})
        
         

  }
  delete(id) {
    this.fs.delete(id).subscribe(() => {
      this.favorites = this.favorites.filter((favorite) => favorite.id !== id);
    });
}

save(index) { 

}
}
