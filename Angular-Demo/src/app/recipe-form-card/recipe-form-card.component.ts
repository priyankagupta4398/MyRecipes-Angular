import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-form-card',
    templateUrl:'./recipe-form-card.component.html',
    styleUrls: ['./recipe-form-card.component.scss']
})

export class RecipeFormCardComponent implements OnInit { 
  
    recipeName : string
    chefName : string
    type:string
    describtion:string
    imageUrl : string

    addRecipe(){
            console.log(this.imageUrl)
    }
    constructor() {
  
    }
  
    ngOnInit() {
  
  
  
    }
  
  }
  