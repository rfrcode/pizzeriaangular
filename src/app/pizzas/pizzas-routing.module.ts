import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaslistComponent } from './index/pizzaslist/pizzaslist.component'
import { AddComponent } from './add/add.component'
import { EditComponent } from './edit/edit.component'
import { UserGuardService } from '../user/user-guard.service';

const routes: Routes = [
  {
    path: '',
    component: PizzaslistComponent
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [UserGuardService],
    data: { role: 'admin' }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [UserGuardService],
    data: { role: 'admin' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
