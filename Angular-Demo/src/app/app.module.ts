import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecipeFormCardComponent } from './recipe-form-card/recipe-form-card.component'
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    RecipeFormCardComponent,
    RecipeCardComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
