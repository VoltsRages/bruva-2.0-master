import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './services/products.service';


@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  providers: [ProductsService],
  declarations: ProductsRoutingModule.components
})
export class ProductsModule { }
