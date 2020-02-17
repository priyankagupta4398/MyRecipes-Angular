import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Logger } from 'src/service/Logger.service';
import { RecipeManager } from 'src/service/RecipeManager.service';
import { RecipeModel } from 'src/models/RecipeModel.model';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent implements OnInit {

  searchText: '';

  constructor(private loggerService: Logger, private recipeManger: RecipeManager) { }

  RecipeArray = Array<RecipeModel>();

  ngOnInit(): void {
    this.recipeManger.recipes.forEach(element => {
      if (element.isFavourite) {
        this.RecipeArray.push(element);
      }
    });
    this.loggerService.demologger('Recipe Home Page Called');

  }

}
