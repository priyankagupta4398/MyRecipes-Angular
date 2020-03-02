import { Component, OnInit, OnChanges } from '@angular/core';
import { Logger } from 'src/service/Logger.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/app/recipe-service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnChanges {

  loadRecipe: any;
  RecipeArray = [];
  constructor(private recipeService: RecipeService, private loggerService: Logger, private route: Router, private http: HttpClient) { }

  ngOnInit() {
    this.recipeService.getListOfRecipe().subscribe(responseData => {
      this.loadRecipe = responseData;
      this.tranceForm(this.loadRecipe);
    });
  }
  tranceForm(Data) {
    for (const key in Data) {
      if (Data.hasOwnProperty(key)) {
        this.RecipeArray.push({ ...Data[key], id: key });
      }
    }
    return;
  }

  ngOnChanges() {
    this.loggerService.demologger('List Page Change Called');
  }

  openDetial(id: number) {
    this.route.navigate(['/allRecipe', id]);
  }
}
