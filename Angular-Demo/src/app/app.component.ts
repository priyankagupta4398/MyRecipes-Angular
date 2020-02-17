import { Component, Input } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Logger } from 'src/service/Logger.service';
import { RecipeManager } from 'src/service/RecipeManager.service';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loggerService: Logger, private recipeManager: RecipeManager) {}
  title = 'Angular-Demo';

  recipes = this.recipeManager.recipes;


}
