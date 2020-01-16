import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/models/RecipeModel.model';

@Injectable()

export class RecipeManager {

    recipes = Array<RecipeModel>();

  constructor() { }

  addNewRecipe(recipeModel: RecipeModel) {

    this.recipes.push(recipeModel);


  }

}
