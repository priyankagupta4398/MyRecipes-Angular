import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Logger } from 'src/service/Logger.service';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient, private router: Router,  private loggerService: Logger) { }

  addRecipe(value) {
    this.loggerService.demologger('Add recipe api Called');
    return this.http.post(
      'http://localhost:3000/groceryOwner/addCustomer/', value
    )
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecipedetail(recipeId) {
    this.loggerService.demologger('get recipe  detail api Called');
    return this.http.get(
      'http://35.160.197.175:3006/api/v1/recipe/' + recipeId + '/details',
    ).pipe(
      catchError(this.handleError)
    );
  }
  
  getListOfRecipe() {
    this.loggerService.demologger('Get List of api Called');
    return this.http.get(
      'http://35.160.197.175:3006/api/v1/recipe/feeds'
    ).pipe(
      catchError(this.handleError)
    );
  }

  getFavouriteRecipe() {
    this.loggerService.demologger('Get List of FAvourite API  Called');
    return this.http.get(
      'http://35.160.197.175:3006/api/v1/recipe/cooking-list'
    ).pipe(
      catchError(this.handleError)
    );
  }

  addToFavourite(id: number) {
    this.loggerService.demologger('Add to FAvourite API  Called');
    let data = {
      recipeId: id,
    }
    return this.http.post('http://35.160.197.175:3006/api/v1/recipe/add-to-cooking-list', data).pipe(
      catchError(this.handleError)
    );
  }

  removeFromFavourite(recipeId) {
    this.loggerService.demologger('remove from FAvourite API  Called');
    let data = {
      recipeId: recipeId,
    }
    return this.http.post('http://35.160.197.175:3006/api/v1/recipe/rm-from-cooking-list', data).pipe(
      catchError(this.handleError)
    );
  }

  deleteRecipe(value) {
    this.http.post(
      'http://localhost:3000/groceryOwner/updateProfile', value
    )
    .subscribe(responseData => {
      this.loggerService.demologger(responseData);
    });
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes) {
      return throwError(errorMessage);
    }
    switch (errorRes.status) {
      case 500:
        errorMessage = 'Please Fill The Required Fields!!';
        break;
      case 400:
        errorMessage = 'Email id Already exixts!!';
        break;
    }
    return throwError(errorMessage);
  }
}
