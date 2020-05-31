import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { withLatestFrom, switchMap, map } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducer';
import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Injectable()
export class ShoppingListEffects  {

  @Effect()
  fetchShoppingList = this.actions$.pipe(
    ofType(ShoppingListActions.FETCH_SHOPPING_LIST),
    switchMap(() => {
      return this.http.get<Ingredient[]>(
        'https://ng-course-recipe-book-3cf2c.firebaseio.com/shopping-list.json'
      );
    }),
    map(shoppingList => {
      return new ShoppingListActions.SetShoppingList(shoppingList);
    })
  )

  @Effect({ dispatch: false })
  storeShoppingList = this.actions$.pipe(
    ofType(ShoppingListActions.STORE_SHOPPING_LIST),
    withLatestFrom(this.store.select('shoppingList')),
    switchMap(([actionData, shoppingListState]) => {
      return this.http.put(
        'https://ng-course-recipe-book-3cf2c.firebaseio.com/shopping-list.json',
        shoppingListState.ingredients
      )
    })
  )

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private slService: ShoppingListService
  ) {}

}
