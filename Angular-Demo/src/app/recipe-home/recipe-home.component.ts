import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Logger } from 'src/service/Logger.service';
// import { RecipeManager } from 'src/service/RecipeManager.service';
import { RecipeModel } from 'src/models/RecipeModel.model';
import { RecipeService } from 'src/app/recipe-service';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit {
  
  RecipeArray:any;
  searchText: '';
  constructor(private loggerService: Logger, private recipeService: RecipeService,) { }

  ngOnInit(): void {
    this.recipeService.getFavouriteRecipe().subscribe(responseData => {
      this.RecipeArray =  responseData
    });
  }
}
