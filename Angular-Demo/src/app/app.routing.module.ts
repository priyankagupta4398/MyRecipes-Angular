import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-routing'
})
export class Routing implements OnInit, OnChanges {

  @Input() Route;

//   const appRoutes : Route = [
//     {path: '/', component: RecipeHomeComponent },
//     {path : '/add-new', component : RecipeFormCardComponent}, 
//     {path : '/all-recipe', component : RecipeCardComponent }
// ]


  constructor() {

  }

  ngOnInit() {
     console.log();
  }

  ngOnChanges() {
    console.log();
  }

}
