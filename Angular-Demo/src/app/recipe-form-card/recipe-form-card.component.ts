import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeManager } from 'src/service/RecipeManager.service';
import { Logger } from 'src/service/Logger.service';
import { RecipeModel } from 'src/models/RecipeModel.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from './Validators';

@Component({
    selector: 'app-recipe-form-card',
    templateUrl: './recipe-form-card.component.html',
    styleUrls: ['./recipe-form-card.component.scss']
})

export class RecipeFormCardComponent implements OnInit {
    constructor(private loggerService: Logger, private recipeManager: RecipeManager, private route: Router) { }
    @Output() backToParent = new EventEmitter<any>();

    form: FormGroup;
    complexcityTypes: [{ 'type': 'Easy' }, { 'type': 'Medium' }, { 'type': 'Hard' }
    ];
    isValid = false;

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            preparationTime: new FormControl(null, [Validators.required, CustomValidators.validRecipeTime]),
            serves: new FormControl(null, [Validators.required, CustomValidators.validNoOfServes]),
            metaTags: new FormArray([]),
            complexcity: new FormControl('', [Validators.required]),
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
            complexcity: 'Easy'
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
        this.loggerService.demologger(this.form);
    }
}
