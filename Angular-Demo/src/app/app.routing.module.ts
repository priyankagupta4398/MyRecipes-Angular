import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeFormCardComponent } from './recipe-form-card/recipe-form-card.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { RecipeDetailCardComponent } from './recipe-detail-card/recipe-detail-card.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/service/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: RecipeHomeComponent,
  },
    {
      path: 'allRecipe',
      component: RecipeCardComponent,
      children: [
        {
          path: ':id', component: RecipeDetailCardComponent
        }
      ]
    },
    {
      path: 'addRecipe',
      // canActivate: [AuthGuard],
      component: RecipeFormCardComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



