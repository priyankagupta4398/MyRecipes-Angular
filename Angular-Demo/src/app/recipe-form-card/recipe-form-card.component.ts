import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeManager } from 'src/service/RecipeManager.service';
import { Logger } from 'src/service/Logger.service';
import { RecipeModel } from 'src/models/RecipeModel.model';

@Component({
    selector: 'app-recipe-form-card',
    templateUrl: './recipe-form-card.component.html',
    styleUrls: ['./recipe-form-card.component.scss']
})

export class RecipeFormCardComponent implements OnInit {
    constructor(private loggerService: Logger, private recipeManager: RecipeManager) { }
    @Output() backToParent = new EventEmitter<any>();

    name = '';
    chef = '';
    description = '';
    image = '';
    type = '';

    ngOnInit() {
    }

    addRecipes() {
        let newRecipe = new RecipeModel();
        newRecipe = {
            name: this.name,
            chef: this.chef,
            image: this.image,
            type: this.type

        };
        this.recipeManager.addNewRecipe(newRecipe);
    }

}
