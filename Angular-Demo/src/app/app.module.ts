import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecipeHomeComponent} from './recipe-home/recipe-home.component';
import { RecipeFormCardComponent } from './recipe-form-card/recipe-form-card.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { HighlightDirective } from './highlight.directive';
import { Logger } from 'src/service/Logger.service';
import { RecipeManager } from 'src/service/RecipeManager.service';
import { AppRoutingModule } from './app.routing.module';
import { RecipeDetailCardComponent } from './recipe-detail-card/recipe-detail-card.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/service/auth.service';
import { AuthGuard } from 'src/service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeHomeComponent,
    RecipeFormCardComponent,
    RecipeCardComponent,
    HighlightDirective,
    RecipeDetailCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule
    // Routing
  ],
  providers: [Logger, RecipeManager, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
