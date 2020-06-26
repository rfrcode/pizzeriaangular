import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuardService } from './user/user-guard.service'


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pizzas/pizzas.module').then(m => m.PizzasModule),
    pathMatch: 'full'
  },
  {
    path: 'ingredients',
    loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule),
    canActivate: [UserGuardService],
    data: {role: 'admin'}
  },
  {
    path: 'pizzas',
    loadChildren: () => import('./pizzas/pizzas.module').then(m => m.PizzasModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule),
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
