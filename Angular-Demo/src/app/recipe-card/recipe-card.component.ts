import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Logger } from 'src/service/Logger.service';
import { RecipeManager } from 'src/service/RecipeManager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnChanges {

  constructor(private loggerService: Logger, private recipeManager: RecipeManager, private route: Router) {

   }
  RecipeArray = this.recipeManager.recipes;

  ngOnInit() {

    this.loggerService.demologger('List  Page Calledddd');
    console.log(this.RecipeArray);
  }

  ngOnChanges() {
    this.loggerService.demologger('List Page Change Called');
  }


  openDetial(id: number) {
    this.loggerService.demologger('Clicked id: ' + id);
    this.route.navigate(['/allRecipe', id]);
  }

}
