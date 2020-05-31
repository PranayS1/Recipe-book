import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  // ingredientsChanged= new Subject<Ingredient[]>();
  // startedEditing = new Subject<number>();

  // private ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10)
  // ];

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  // getIngredients() {
  //   return this.ingredients.slice();
  // }

  // updateIngredient(index: number, newIngredient: Ingredient) {
  //   this.ingredients[index] = newIngredient;
  //   this.ingredientsChanged.next(this.getIngredients());
  // }

  // deleteIngredient(index: number) {
  //   this.ingredients.splice(index, 1);
  //   this.ingredientsChanged.next(this.getIngredients());
  // }

  // getIngredient(index: number) {
  //   return this.ingredients[index];
  // }

  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChanged.next(this.ingredients.slice())
  // }

  // addIngredients(ingredients: Ingredient[]) {
  //   this.ingredients.push(...ingredients);
  //   this.ingredientsChanged.next(this.ingredients.slice());
//   }

}
