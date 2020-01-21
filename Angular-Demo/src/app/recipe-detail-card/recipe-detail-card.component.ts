import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeManager } from 'src/service/RecipeManager.service';
import { tick } from '@angular/core/testing';
@Component({
  selector: 'app-recipe-detail-card',
  templateUrl: './recipe-detail-card.component.html',
  styleUrls: ['./recipe-detail-card.component.scss']
})
export class RecipeDetailCardComponent implements OnInit {

  @Input() recipe;
  public isFavourite = false;
  public recipeArray = this.recipe;
  constructor(private route: ActivatedRoute, private recipeManger: RecipeManager) { }
  ngOnInit() {
    this.getFavourites();
    const id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.route.paramMap.subscribe(
      data => {
        console.log(data.get('id'));
        this.recipeManger.recipes.forEach(element => {
          if ( parseInt(data.get('id')) === element.id) {
            this.recipe = element;
            console.log('From detail screen == ' + element);
          }
        });
      }
    );
  }

  add_removeFavourite(id: number) {
      this.recipeManger.addToFav(id);
      this.getFavourites();
  }

  getFavourites() {
    this.recipeArray = this.recipeManger.getRecipes();
    console.log(this.recipeArray);
  }
}
