import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientslistComponent } from './index/ingredientslist/ingredientslist.component';


@NgModule({
  declarations: [IngredientslistComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
