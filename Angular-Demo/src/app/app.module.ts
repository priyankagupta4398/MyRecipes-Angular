import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { RecipeHomeComponent} from './recipe-home/recipe-home.component';
import { RecipeFormCardComponent } from './recipe-form-card/recipe-form-card.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { HighlightDirective } from './highlight.directive';
import { Logger } from 'src/service/Logger.service';
import { RecipeManager } from 'src/service/RecipeManager.service';

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
  ],
  providers: [Logger, RecipeManager],
  bootstrap: [AppComponent]
})

export class AppModule { }
