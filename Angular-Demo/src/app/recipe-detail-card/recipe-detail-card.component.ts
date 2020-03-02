import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/app/recipe-service';

@Component({
  selector: 'app-recipe-detail-card',
  templateUrl: './recipe-detail-card.component.html',
  styleUrls: ['./recipe-detail-card.component.scss']
})
export class RecipeDetailCardComponent implements OnInit {
  recipe = {};
  public isFavourite = false;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipedetail(id).subscribe(responseData => {
      console.log(responseData);
      this.recipe = responseData;
    });
  }

  add_removeFavourite(recipeId) {
   this.recipeService.addToFavourite(recipeId).subscribe(responseData => {
      console.log(responseData)
    });  
  }
}
