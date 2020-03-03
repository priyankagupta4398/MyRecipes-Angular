import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeManager } from 'src/service/RecipeManager.service';
import { Logger } from 'src/service/Logger.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './Validators';
import { RecipeService } from 'src/app/recipe-service';

@Component({
    selector: 'app-recipe-form-card',
    templateUrl: './recipe-form-card.component.html',
    styleUrls: ['./recipe-form-card.component.scss']
})

export class RecipeFormCardComponent implements OnInit {
    constructor(private recipeService: RecipeService, private loggerService: Logger) { }
    @Output() backToParent = new EventEmitter<any>();

    form: FormGroup;
    complexityTypes: [{ 'type': 'Easy' }, { 'type': 'Medium' }, { 'type': 'Hard' }
    ];
    recipeId;
    isValid = false;
    instructions;
    ingredients;

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            preparationTime: new FormControl(null, [Validators.required, CustomValidators.validRecipeTime]),
            serves: new FormControl(null, [Validators.required, CustomValidators.validNoOfServes]),
            metaTags: new FormArray([]),
            complexity: new FormControl('', [Validators.required]),
            ytUrl: new FormControl(null, [Validators.required, CustomValidators.validYouTubeUrl]),
            ingredients: new FormArray([]),
            instructions: new FormArray([]),
        });

        this.form.statusChanges.subscribe((status) => {
            this.loggerService.demologger(status);
            if (status === 'VALID') {
                this.isValid = true;
            }
        });
        this.form.patchValue({
            complexity: 'Easy'
        });
    }
    addmetaTags() {
        const control = new FormControl(null, Validators.required);
        (this.form.get('metaTags') as FormArray).push(control);
    }
    addingredients() {
        const control = new FormControl(null, Validators.required);
        (this.form.get('ingredients') as FormArray).push(control);
    }
    addinstructions() {
        const control = new FormControl(null, Validators.required);
        (this.form.get('instructions') as FormArray).push(control);
    }

    addRecipes() {
        this.recipeService.addRecipe(this.form.value).subscribe(responseData => {
        this.loggerService.demologger(responseData[`id`]);
        this.recipeId = responseData[`id`];
        // this.addInstructionsAPICall();
        // this.addIngredientsAPICall();
        });
    }

    addInstructionsAPICall() {
        this.instructions = (this.form.get('instructions') as FormArray);
        this.recipeService.addInstruction(this.instructions, this.recipeId).subscribe(responseData => {
            this.loggerService.demologger(responseData);
        });
    }

    addIngredientsAPICall() {
        this.ingredients = (this.form.get('ingredients') as FormArray);
        this.recipeService.addIngredients(this.ingredients, this.recipeId).subscribe(responseData => {
            this.loggerService.demologger(responseData);
        });
    }
}
