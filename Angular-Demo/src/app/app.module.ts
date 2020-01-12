import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecipeHomeComponent} from './recipe-home/recipe-home.component'
import { RecipeFormCardComponent } from './recipe-form-card/recipe-form-card.component'
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { HighlightDirective } from './highlight.directive';
// import { Routing } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeHomeComponent,
    RecipeFormCardComponent,
    RecipeCardComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
