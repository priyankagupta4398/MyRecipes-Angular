import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.scss']
})
export class RecipeHomeComponent {

  @Input() RecipeArray;

  constructor() {

  }

}
