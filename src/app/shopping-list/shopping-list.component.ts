import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';
import { tap, map, take, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('add', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Observable<{ ingredients: Ingredient[] }>;
  // private subscription: Subscription;
  beforeChange: number;
  afterChange: number;
  isNew = true;

  constructor(
    // private slService:ShoppingListService,
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList'); // This code is beig used for using store approach
    
    // this.beforeChange = JSON.stringify(this.beforeChange)  
    
    this.ingredients
      .subscribe(data => {
        this.afterChange = data.ingredients.length;
        if(this.beforeChange !== this.afterChange) {
          this.isNew = true;
          this.beforeChange = this.afterChange;
        } else {
          this.isNew = false;
        }
    });

    this.ingredients.pipe(
      take(1),
      map(recipesState => {
          return recipesState;
      })
    ).subscribe(data => {
      this.beforeChange =  data.ingredients.length;
      this.isNew = true;
    }) 

    // Below code was used while using service

    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged
    //   .subscribe((ingredient: Ingredient[]) => {
    //     this.ingredients = ingredient;
    //   })
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
