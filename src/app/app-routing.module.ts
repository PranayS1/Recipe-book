import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', 
    loadChildren: () => import('./recipes/recipes.module') 
                          .then(m => m.RecipesModule) // Newer versions support this approach. loadChildren: './recipes/recipes.module#RecipesModule' is older approach.
  },
  { path: 'shopping-list', 
    loadChildren: () => import('./shopping-list/shopping-list.module') 
                          .then(m => m.ShoppingListModule)
  },
  { path: 'auth', 
    loadChildren: () => import('./auth/auth.module') 
                          .then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/recipes'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })], 
    // preloadingStrategy loads lazyLoaded component while the site is ideal and NOT INITIALLY while the site gets loaded. 
    // Its useful for slow net connection or larger site.
  exports: [RouterModule]
})
export class AppRoutingModule { }
