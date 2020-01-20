import { Injectable } from '@angular/core';
import { RecipeModel } from 'src/models/RecipeModel.model';
import { Logger } from './Logger.service';

@Injectable()

export class RecipeManager {

  recipes = Array<RecipeModel>();

  constructor(private loggerService: Logger) {

    const desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry';

    let newRecipe1 = new RecipeModel();
    newRecipe1 = {
        id: 1,
        name: 'Pancake',
        chef: 'Priyanka',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-413x516.jpg',
        type: 'Veg',
        isFavourite: true,
        description: desc

    };

    let newRecipe2 = new RecipeModel();
    newRecipe2 = {
        id: 2,
        name: 'Burger',
        chef: 'Megha',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/08/girl-holding-a-juicy-beef-burger-413x275.jpg',
        type: 'Non-Veg',
        isFavourite: true,
        description: desc

    };

    let newRecipe3 = new RecipeModel();
    newRecipe3 = {
        id: 3,
        name: 'Coffee',
        chef: 'Khyati',
        image: 'https://www.foodiesfeed.com/wp-content/uploads/2019/01/dreamy-flatwhite-coffee-with-perfect-latte-art-2-413x620.jpg',
        type: 'Veg',
        isFavourite: true,
        description: desc

    };

    this.recipes.push(newRecipe1);
    this.recipes.push(newRecipe2);

    this.recipes.push(newRecipe3);



   }

  addNewRecipe(recipeModel: RecipeModel) {
    if (this.recipes.length !== 0) {
      recipeModel.id = this.recipes.length + 1;
      this.recipes.push(recipeModel);
    } else {
      recipeModel.id = 1;
      this.recipes.push(recipeModel);
    }
  }

  addToFav(id: number) {

    this.recipes.forEach(element => {
      if (element.id === id) {
        if (element.isFavourite !== true) {
          element.isFavourite = true;
          this.loggerService.demologger('Added to Fav --id : ' + id );
        } else {
          element.isFavourite = false;
          this.loggerService.demologger('Removed from Fav --id : ' + id );
        }
      }
    });
  }

  // revomeFav(id: number) {
  //   this.recipes.forEach(element => {
  //     if (element.id === id) {
  //       element.isFavourite = false;
  //       this.loggerService.demologger('Revoved from Fav --id : ' + id );

  //     }
  //   });
  // }

}
