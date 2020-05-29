import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';






@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule,
    FontAwesomeModule,

    
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
