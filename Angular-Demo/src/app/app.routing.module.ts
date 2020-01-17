import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';

import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { RecipeFormCardComponent } from './recipe-form-card/recipe-form-card.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';


const routes: Routes = [
  {
    path: '',
    component: RecipeHomeComponent,
  },
    {
      path: 'allRecipe',
      component: RecipeCardComponent,
    },
    {
      path: 'addRecipe',
      component: RecipeFormCardComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



