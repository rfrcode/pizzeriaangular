import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientslistComponent } from './index/ingredientslist/ingredientslist.component'

const routes: Routes = [
  {
    path: '',
    component: IngredientslistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
