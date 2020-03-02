import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {

  constructor(private http: HttpClient, private router: Router) { }

  addRecipe(value) {
    console.log(value);
    const data = JSON.parse(localStorage.getItem('userData'));
    return this.http.post(
      'http://localhost:3000/groceryOwner/addCustomer/' + data.id, value
    )
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecipedetail(recipeId) {
    return this.http.get(
      'http://35.160.197.175:3006/api/v1/recipe/' + recipeId + '/details',
    ).pipe(
      catchError(this.handleError)
    );
  }
  
  getListOfRecipe() {
    console.log('Get List of api Called');
    return this.http.get(
      'http://35.160.197.175:3006/api/v1/recipe/feeds'
    ).pipe(
      catchError(this.handleError)
    );
  }

  getFavouriteRecipe() {
    const data = JSON.parse(localStorage.getItem('userData'));
    return this.http.get(
      'http://localhost:3000/groceryOwner/showDeletedCustomer/' + data.id
    );
  }

  addToFavourite(recipeId) {
    return this.http.post(
      'http://35.160.197.175:3006/api/v1/recipe/add-to-cooking-list', recipeId
    );
  }
  deleteRecipe(value) {
    console.log(value);
    this.http.post(
      'http://localhost:3000/groceryOwner/updateProfile', value
    )
    .subscribe(responseData => {
      console.log(responseData);
      this.router.navigate(['/groceryOwner/profile']);
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
