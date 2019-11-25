import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-recipe-form-card',
    templateUrl: './recipe-form-card.component.html',
    styleUrls: ['./recipe-form-card.component.scss']
})

export class RecipeFormCardComponent implements OnInit {

    @Output() backToParent = new EventEmitter<any>();

    Recipes = [{
        name: String,
        chef: String,
        image: String,
        type: String
    }];
    // addedRecipes = [];

    constructor() {
    }

    ngOnInit() {
    }

    addRecipes() {
        // this.addedRecipes = this.Recipes;
        console.log(this.Recipes);
        this.backToParent.emit({addedRecipes : this.Recipes});
    }

}
