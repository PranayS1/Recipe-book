import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import * as fromApp from "../store/app.reducer";
import * as AuthActions from "../auth/store/auth.actions";
import * as RecipesActions from "../recipes/store/recipe.actions";
import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    // private dataStorageService:DataStorageService,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSub = this.store
      .select("auth")
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user; // Its equivalent to !user ? false : true;
      });
  }

  // onSaveData() {
  //   // this.dataStorageService.storeRecipe();
  //   this.store.dispatch(new RecipesActions.StoreRecipes());
  // }

  onSaveData() {
    // this.dataStorageService.storeRecipe();
    if (this.router.url.includes("/recipes")) {
      this.store.dispatch(new RecipesActions.StoreRecipes());
    } else if (this.router.url === "/shopping-list") {
      this.store.dispatch(new ShoppingListActions.StoreShoppingList());
    }
  }

  // onFetchData() {
  //   this.store.dispatch(new RecipesActions.FetchRecipes());
  // }

  onFetchData() {
    if (this.router.url === "/recipes") {
      this.store.dispatch(new RecipesActions.FetchRecipes());
    } else if (this.router.url === "/shopping-list") {
      this.store.dispatch(new ShoppingListActions.FetchShoppingList());
    }
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
