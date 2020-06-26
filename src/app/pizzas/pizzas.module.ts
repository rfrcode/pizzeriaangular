import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzaslistComponent } from './index/pizzaslist/pizzaslist.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { UserModule } from '../user/user.module'



@NgModule({
  declarations: [PizzaslistComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    UserModule
  ]
})
export class PizzasModule { }
