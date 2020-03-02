import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tick } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from 'src/app/recipe-service';
import { Logger } from 'src/service/Logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail-card',
  templateUrl: './recipe-detail-card.component.html',
  styleUrls: ['./recipe-detail-card.component.scss']
})
export class RecipeDetailCardComponent implements OnInit {
  recipe = {  };
  recipeId: {};
  id;

  public isFavourite = false;
  constructor(private recipeService: RecipeService,private loggerService: Logger, private route: ActivatedRoute, private http: HttpClient, private router: Router,) { }

  ngOnInit() { 
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(
      data => {
        this.recipeService.getRecipedetail(data.get('id')).subscribe(responseData => {
          this.loggerService.demologger(responseData);
          this.recipe = responseData;
          this.recipeId = data.get('id')
        });
      }
    );    
  }

  add_removeFavourite(recipeId, inCookingList) {
    
     if (inCookingList) {
      this.recipeService.removeFromFavourite(recipeId).subscribe(responseData => {
        this.loggerService.demologger(responseData)
        this.router.navigate([`/allRecipe/${this.id}`]);
      });  
     } else {
      this.recipeService.addToFavourite(recipeId).subscribe(responseData => {
        this.loggerService.demologger(responseData)
        this.router.navigate([`/allRecipe`]);
      });  
    }
  }   
}
