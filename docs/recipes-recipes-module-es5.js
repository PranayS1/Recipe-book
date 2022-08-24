function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-recipes-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipeDetailRecipeDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"card col-xs-12\" style=\"width: 100%\">\r\n        <img [src]=\"recipe.imagePath\" alt=\"{{ recipe.name }}\" class=\"card-img-top img-responsive\" style=\"height: 100%; width: 100%\">\r\n\r\n        <div class=\"card-body\">\r\n            <h1 class=\"card-title\">{{ recipe.name }}\r\n                <div class=\"btn-group pull-right\" appDropdown>\r\n\r\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">\r\n                        Manage Recipe <span class=\"caret\"></span>\r\n                    </button>\r\n\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a (click)=\"onAddToShoppingList()\" style=\"cursor: pointer;\">To Shopping list</a></li>\r\n                        <li><a style=\"cursor: pointer;\" (click)=\"onEditRecipe()\">Edit Recipe</a></li>\r\n                        <li><a style=\"cursor: pointer;\" (click)=\"onDeleteRecipe()\">Delete Recipe</a></li>\r\n                    </ul>\r\n\r\n                </div>\r\n            </h1>\r\n\r\n            <div class=\"card-text\">\r\n                {{ recipe.description }}\r\n            </div>\r\n        </div>\r\n\r\n        <br>\r\n\r\n        <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\" *ngFor=\"let ingredient of recipe.ingredients\">\r\n                <p>{{ingredient.name}}<span class=\"w3-badge w3-green w3-right w3-margin-right w3-large\">{{ingredient.amount}}</span></p>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipeEditRecipeEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Name</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"name\"\r\n              formControlName=\"name\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"imagePath\">Image URL</label>\r\n            <input\r\n              type=\"text\"\r\n              id=\"imagePath\"\r\n              class=\"form-control\"\r\n              formControlName=\"imagePath\"\r\n              #imagePath\r\n            />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <img [src]=\"imagePath.value\" class=\"img-responsive\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <textarea\r\n              type=\"text\"\r\n              id=\"description\"\r\n              class=\"form-control\"\r\n              rows=\"6\"\r\n              formControlName=\"description\"\r\n            ></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">Add some ingredients for this delicacy</div>\r\n        <div class=\"col-xs-12\" formArrayName=\"ingredients\">\r\n          <div\r\n            class=\"row\"\r\n            *ngFor=\"let ingredientCtrl of controls; let i = index\"\r\n            [formGroupName]=\"i\"\r\n            style=\"margin-top: 10px\"\r\n            [@add]\r\n          >\r\n            <div class=\"col-xs-8\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                formControlName=\"amount\"\r\n              />\r\n            </div>\r\n            <div class=\"col-xs-2\">\r\n              <button\r\n                class=\"btn btn-danger\"\r\n                type=\"button\"\r\n                (click)=\"onDeleteIngredient(i)\"\r\n              >\r\n                X\r\n              </button>\r\n            </div>\r\n          </div>\r\n          <br />\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-success\"\r\n                (click)=\"onAddIngredient()\"\r\n              >\r\n                Add ingredients\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div><hr /></div>\r\n      <div class=\"row\" style=\"padding: 0 0 15px 0\">\r\n        <div class=\"col-xs-12\">\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-success\"\r\n            [disabled]=\"!recipeForm.valid\"\r\n          >\r\n            Save\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"onCancel()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipeListRecipeItemRecipeItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a\r\n  style=\"cursor: pointer\"\r\n  [routerLink]=\"[index]\"\r\n  routerLinkActive=\"active\"\r\n  class=\"list-group-item clearfix\"\r\n  id=\"recipe-{{ index }}\"\r\n>\r\n  <div class=\"card\">\r\n    <div class=\"card-body col-xs-12\" style=\"padding: 0\">\r\n      <div class=\"pull-left col-xs-8\" style=\"padding: 0\">\r\n        <h4 class=\"card-title list-group-item-heading\">\r\n          {{ recipe.name }}\r\n        </h4>\r\n        <p class=\"card-text list-group-item-text\">\r\n          {{ recipe.description }}\r\n        </p>\r\n      </div>\r\n      <div\r\n        class=\"pull-right col-xs-4\"\r\n        style=\"padding: 0; width: auto; height: auto\"\r\n      >\r\n        <img\r\n          [src]=\"recipe.imagePath\"\r\n          alt=\"{{ recipe.name }}\"\r\n          class=\"img-responsive\"\r\n          style=\"max-height: 50px\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</a>\r\n<div style=\"padding-bottom: 5px\"></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipeListRecipeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <button class=\"btn btn-success\" (click)=\"onNewRecipe()\">New Recipe</button>\r\n    </div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <app-recipe-item\r\n        *ngFor='let recipeEl of recipes; let i = index'\r\n        [recipe]=\"recipeEl\"\r\n        [index]=\"i\"></app-recipe-item>\r\n        <div *ngIf=\"recipes.length !== 0\">\r\n            <hr id=\"forSmallDevices\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipeStartRecipeStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Please fetch or select a Recipe to start!</h3>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesRecipesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-md-5\">\r\n    <app-recipe-list></app-recipe-list>\r\n  </div>\r\n  <div class=\"col-md-7\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, store) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.store = store;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, router) {
          var _this = this;

          return this.store.select("auth").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (authState) {
            return authState.user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            var isAuth = !!user;

            if (isAuth) {
              return true;
            }

            return _this.router.createUrlTree(["/login"]);
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/recipes/recipe-detail/recipe-detail.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/recipes/recipe-detail/recipe-detail.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipeDetailRecipeDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRFQUE0RTtBQUNoRiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: RecipeDetailComponent */

  /***/
  function srcAppRecipesRecipeDetailRecipeDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function () {
      return RecipeDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../store/recipe.actions */
    "./src/app/recipes/store/recipe.actions.ts");
    /* harmony import */


    var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shopping-list/store/shopping-list.actions */
    "./src/app/shopping-list/store/shopping-list.actions.ts");

    var RecipeDetailComponent = /*#__PURE__*/function () {
      function RecipeDetailComponent( // private recipeService: RecipeService,
      router, route, store) {
        _classCallCheck(this, RecipeDetailComponent);

        this.router = router;
        this.route = route;
        this.store = store;
      }

      _createClass(RecipeDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
            return +params["id"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            _this2.id = id;
            return _this2.store.select("recipe");
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (recipeState) {
            return recipeState.recipes.find(function (recipe, index) {
              return index === _this2.id;
            });
          })).subscribe(function (recipe) {
            if (recipe === undefined) _this2.router.navigate([""]);
            _this2.recipe = recipe;
          }, function (err) {
            return console.log("err12", err);
          }); // this.route.params.subscribe((params: Params) => {
          //   this.id = +params['id'];
          //   this.recipe = this.recipeService.getRecipe(this.id);
          // });
        }
      }, {
        key: "onAddToShoppingList",
        value: function onAddToShoppingList() {
          // this.recipeService.AddIngredientToShoppingList(this.recipe.ingredients);
          this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_6__["AddIngredients"](this.recipe.ingredients));
        }
      }, {
        key: "onEditRecipe",
        value: function onEditRecipe() {
          this.router.navigate(["edit"], {
            relativeTo: this.route
          }); // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); // this can also be used instead of above incase of complex routes
        }
      }, {
        key: "onDeleteRecipe",
        value: function onDeleteRecipe() {
          // this.recipeService.deleteRecipe(this.id);
          this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteRecipe"](this.id));
          this.router.navigate(["/recipes"], {
            relativeTo: this.route
          });
        }
      }]);

      return RecipeDetailComponent;
    }();

    RecipeDetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-recipe-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-detail.component.css */
      "./src/app/recipes/recipe-detail/recipe-detail.component.css"))["default"]]
    })], RecipeDetailComponent);
    /***/
  },

  /***/
  "./src/app/recipes/recipe-edit/recipe-edit.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/recipes/recipe-edit/recipe-edit.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipeEditRecipeEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "input.ng-invalid.ng-touched,\r\ntextarea.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n\r\nbutton {\r\n    margin-right: 5px;  /* Wasnt there in vid */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtZWRpdC9yZWNpcGUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQixHQUFHLHVCQUF1QjtBQUMvQyIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWVkaXQvcmVjaXBlLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4OyAgLyogV2FzbnQgdGhlcmUgaW4gdmlkICovXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/recipes/recipe-edit/recipe-edit.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/recipes/recipe-edit/recipe-edit.component.ts ***!
    \**************************************************************/

  /*! exports provided: RecipeEditComponent */

  /***/
  function srcAppRecipesRecipeEditRecipeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeEditComponent", function () {
      return RecipeEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../store/recipe.actions */
    "./src/app/recipes/store/recipe.actions.ts");

    var RecipeEditComponent = /*#__PURE__*/function () {
      function RecipeEditComponent(route, router, store) {
        _classCallCheck(this, RecipeEditComponent);

        this.route = route;
        this.router = router;
        this.store = store;
        this.editMode = false;
      }

      _createClass(RecipeEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.params.subscribe(function (params) {
            _this3.id = +params["id"];
            _this3.editMode = params["id"] != null;

            _this3.initForm();
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.editMode) {
            // this.recipeService.updateRecipe(this.id, this.recipeForm.value);
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateRecipe"]({
              index: this.id,
              newRecipe: this.recipeForm.value
            }));
          } else {
            // this.recipeService.addRecipe(this.recipeForm.value);
            this.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_7__["AddRecipe"](this.recipeForm.value));
          }

          this.onCancel();
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.router.navigate(["../"], {
            relativeTo: this.route
          });
        }
      }, {
        key: "onAddIngredient",
        value: function onAddIngredient() {
          this.recipeForm.get("ingredients").push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }, {
        key: "onDeleteIngredient",
        value: function onDeleteIngredient(index) {
          this.recipeForm.get("ingredients").removeAt(index);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.storeSub) {
            this.storeSub.unsubscribe();
          }
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var _this4 = this;

          var recipeName = "";
          var recipeImagePath = "";
          var recipeDescription = "";
          var recipeIngredients = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);

          if (this.editMode) {
            // const recipe = this.recipeService.getRecipe(this.id);
            this.storeSub = this.store.select("recipe").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (recipeState) {
              return recipeState.recipes.find(function (recipe, index) {
                return index === _this4.id;
              });
            })).subscribe(function (recipe) {
              recipeName = recipe.name;
              recipeImagePath = recipe.imagePath;
              recipeDescription = recipe.description;

              if (recipe["ingredients"]) {
                var _iterator = _createForOfIteratorHelper(recipe.ingredients),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var ingredient = _step.value;
                    recipeIngredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
                      amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](ingredient.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[1-9]+[0-9]*$/)])
                    }));
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            });
          }

          this.recipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeImagePath, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](recipeDescription, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            ingredients: recipeIngredients
          });
        }
      }, {
        key: "controls",
        get: function get() {
          // a getter!
          return this.recipeForm.get("ingredients").controls;
        }
      }]);

      return RecipeEditComponent;
    }();

    RecipeEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    RecipeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-recipe-edit",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-edit/recipe-edit.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])("add", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 1,
        transform: "translateX(0)"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        opacity: 0,
        transform: "translateX(-100px)"
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("* => void", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
        transform: "translateX(100px)",
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-edit.component.css */
      "./src/app/recipes/recipe-edit/recipe-edit.component.css"))["default"]]
    })], RecipeEditComponent);
    /***/
  },

  /***/
  "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipeListRecipeItemRecipeItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.list-group-item {\r\n  border-radius: 4px;\r\n  padding: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtaXRlbS9yZWNpcGUtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEVBQTRFO0FBQzlFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWl0ZW0vcmVjaXBlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts ***!
    \**************************************************************************/

  /*! exports provided: RecipeItemComponent */

  /***/
  function srcAppRecipesRecipeListRecipeItemRecipeItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function () {
      return RecipeItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecipeItemComponent = /*#__PURE__*/function () {
      function RecipeItemComponent() {
        _classCallCheck(this, RecipeItemComponent);
      }

      _createClass(RecipeItemComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.getElementById("recipe-0").click();
        }
      }]);

      return RecipeItemComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RecipeItemComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RecipeItemComponent.prototype, "index", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-recipe-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-item.component.css */
      "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.css"))["default"]]
    })], RecipeItemComponent);
    /***/
  },

  /***/
  "./src/app/recipes/recipe-list/recipe-list.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/recipes/recipe-list/recipe-list.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipeListRecipeListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media only screen and (max-width: 991px) {\r\n    #forSmallDevices{\r\n        display: block; \r\n    }  /* show it on smaller screen */\r\n  }\r\n  @media only screen and (min-width: 992px) {\r\n    #forSmallDevices{ \r\n        display: none; \r\n    }   /* hide it on larger screens */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCLEdBQUcsOEJBQThCO0VBQ25DO0VBQ0E7SUFDRTtRQUNJLGFBQWE7SUFDakIsSUFBSSw4QkFBOEI7RUFDcEMiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1saXN0L3JlY2lwZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAjZm9yU21hbGxEZXZpY2Vze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIH0gIC8qIHNob3cgaXQgb24gc21hbGxlciBzY3JlZW4gKi9cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgI2ZvclNtYWxsRGV2aWNlc3sgXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICB9ICAgLyogaGlkZSBpdCBvbiBsYXJnZXIgc2NyZWVucyAqL1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/recipes/recipe-list/recipe-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: RecipeListComponent */

  /***/
  function srcAppRecipesRecipeListRecipeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function () {
      return RecipeListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RecipeListComponent = /*#__PURE__*/function () {
      function RecipeListComponent( // private recipeService: RecipeService,
      router, route, store) {
        _classCallCheck(this, RecipeListComponent);

        this.router = router;
        this.route = route;
        this.store = store;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(RecipeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.subscription = this.store.select('recipe').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (recipesState) {
            return recipesState.recipes;
          })).subscribe(function (recipes) {
            _this5.recipes = recipes;
          }); // this.subscription = this.recipeService.recipesChanged
          //   .subscribe((recipes: Recipe[]) => {
          //     this.recipes = recipes;
          //   })
          // this.recipes = this.recipeService.getRecipes();
        }
      }, {
        key: "onNewRecipe",
        value: function onNewRecipe() {
          this.router.navigate(['new'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return RecipeListComponent;
    }();

    RecipeListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
      }];
    };

    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recipe-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-list.component.css */
      "./src/app/recipes/recipe-list/recipe-list.component.css"))["default"]]
    })], RecipeListComponent);
    /***/
  },

  /***/
  "./src/app/recipes/recipe-start/recipe-start.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/recipes/recipe-start/recipe-start.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipeStartRecipeStartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLXN0YXJ0L3JlY2lwZS1zdGFydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/recipes/recipe-start/recipe-start.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/recipes/recipe-start/recipe-start.component.ts ***!
    \****************************************************************/

  /*! exports provided: RecipeStartComponent */

  /***/
  function srcAppRecipesRecipeStartRecipeStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeStartComponent", function () {
      return RecipeStartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RecipeStartComponent = /*#__PURE__*/function () {
      function RecipeStartComponent() {
        _classCallCheck(this, RecipeStartComponent);
      }

      _createClass(RecipeStartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipeStartComponent;
    }();

    RecipeStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-recipe-start",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipe-start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-start/recipe-start.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipe-start.component.css */
      "./src/app/recipes/recipe-start/recipe-start.component.css"))["default"]]
    })], RecipeStartComponent);
    /***/
  },

  /***/
  "./src/app/recipes/recipe.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/recipes/recipe.service.ts ***!
    \*******************************************/

  /*! exports provided: RecipeService */

  /***/
  function srcAppRecipesRecipeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeService", function () {
      return RecipeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shopping-list/store/shopping-list.actions */
    "./src/app/shopping-list/store/shopping-list.actions.ts");

    var RecipeService = /*#__PURE__*/function () {
      function RecipeService(store) {
        _classCallCheck(this, RecipeService);

        this.store = store;
        this.recipesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // private recipes: Recipe[] = [
        //   new Recipe(
        //     'Sandwich', 
        //     'This is a test!', 
        //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        //     [
        //       new Ingredient("Bread", 1),
        //       new Ingredient("Potato", 7)
        //     ]
        //   ),
        //   new Recipe(
        //     'Big fat burger', 
        //     'This is another test!', 
        //     'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        //     [
        //       new Ingredient("French fries", 1),
        //       new Ingredient("Buns", 5)
        //     ]
        //   )
        // ];

        this.recipes = [];
      }

      _createClass(RecipeService, [{
        key: "setRecipes",
        value: function setRecipes(recipes) {
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          return this.recipes.slice();
        }
      }, {
        key: "getRecipe",
        value: function getRecipe(index) {
          return this.recipes[index];
        }
      }, {
        key: "AddIngredientToShoppingList",
        value: function AddIngredientToShoppingList(ingredients) {
          // this.slService.addIngredients(ingredients);
          this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["AddIngredients"](ingredients));
        }
      }, {
        key: "addRecipe",
        value: function addRecipe(recipe) {
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
        }
      }, {
        key: "updateRecipe",
        value: function updateRecipe(index, newRecipe) {
          this.recipes[index] = newRecipe;
          this.recipesChanged.next(this.recipes.slice());
        }
      }, {
        key: "deleteRecipe",
        value: function deleteRecipe(index) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
        }
      }]);

      return RecipeService;
    }();

    RecipeService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RecipeService);
    /***/
  },

  /***/
  "./src/app/recipes/recipes-resolver.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/recipes/recipes-resolver.service.ts ***!
    \*****************************************************/

  /*! exports provided: RecipesResolverService */

  /***/
  function srcAppRecipesRecipesResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesResolverService", function () {
      return RecipesResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/recipe.actions */
    "./src/app/recipes/store/recipe.actions.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RecipesResolverService = /*#__PURE__*/function () {
      function RecipesResolverService(store, actions$) {
        _classCallCheck(this, RecipesResolverService);

        this.store = store;
        this.actions$ = actions$;
      }

      _createClass(RecipesResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this6 = this;

          // return this.dataStorageService.fetchRecipes();
          return this.store.select('recipe').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (recipesState) {
            return recipesState.recipes;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (recipes) {
            if (recipes.length === 0) {
              _this6.store.dispatch(new _store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["FetchRecipes"]());

              return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_store_recipe_actions__WEBPACK_IMPORTED_MODULE_5__["SET_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(recipes);
            }
          }));
        }
      }]);

      return RecipesResolverService;
    }();

    RecipesResolverService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }, {
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
      }];
    };

    RecipesResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RecipesResolverService);
    /***/
  },

  /***/
  "./src/app/recipes/recipes-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/recipes/recipes-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: RecipesRoutingModule */

  /***/
  function srcAppRecipesRecipesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesRoutingModule", function () {
      return RecipesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _recipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recipes.component */
    "./src/app/recipes/recipes.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipe-start/recipe-start.component */
    "./src/app/recipes/recipe-start/recipe-start.component.ts");
    /* harmony import */


    var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipe-edit/recipe-edit.component */
    "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
    /* harmony import */


    var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./recipe-detail/recipe-detail.component */
    "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
    /* harmony import */


    var _recipes_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./recipes-resolver.service */
    "./src/app/recipes/recipes-resolver.service.ts");

    var routes = [{
      path: '',
      component: _recipes_component__WEBPACK_IMPORTED_MODULE_3__["RecipesComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      children: [{
        path: '',
        component: _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_5__["RecipeStartComponent"]
      }, {
        path: 'new',
        component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__["RecipeEditComponent"]
      }, {
        path: ':id',
        component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"],
        resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_8__["RecipesResolverService"]]
      }, {
        path: ':id/edit',
        component: _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_6__["RecipeEditComponent"],
        resolve: [_recipes_resolver_service__WEBPACK_IMPORTED_MODULE_8__["RecipesResolverService"]]
      }]
    }];

    var RecipesRoutingModule = function RecipesRoutingModule() {
      _classCallCheck(this, RecipesRoutingModule);
    };

    RecipesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RecipesRoutingModule);
    /***/
  },

  /***/
  "./src/app/recipes/recipes.component.css":
  /*!***********************************************!*\
    !*** ./src/app/recipes/recipes.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesRecipesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/recipes/recipes.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/recipes/recipes.component.ts ***!
    \**********************************************/

  /*! exports provided: RecipesComponent */

  /***/
  function srcAppRecipesRecipesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesComponent", function () {
      return RecipesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recipe.service */
    "./src/app/recipes/recipe.service.ts");

    var RecipesComponent = /*#__PURE__*/function () {
      function RecipesComponent(recipeService) {
        _classCallCheck(this, RecipesComponent);

        this.recipeService = recipeService;
      }

      _createClass(RecipesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecipesComponent;
    }();

    RecipesComponent.ctorParameters = function () {
      return [{
        type: _recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]
      }];
    };

    RecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recipes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipes.component.css */
      "./src/app/recipes/recipes.component.css"))["default"]]
    })], RecipesComponent);
    /***/
  },

  /***/
  "./src/app/recipes/recipes.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/recipes/recipes.module.ts ***!
    \*******************************************/

  /*! exports provided: RecipesModule */

  /***/
  function srcAppRecipesRecipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesModule", function () {
      return RecipesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./recipes-routing.module */
    "./src/app/recipes/recipes-routing.module.ts");
    /* harmony import */


    var _recipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recipes.component */
    "./src/app/recipes/recipes.component.ts");
    /* harmony import */


    var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipe-list/recipe-list.component */
    "./src/app/recipes/recipe-list/recipe-list.component.ts");
    /* harmony import */


    var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./recipe-detail/recipe-detail.component */
    "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
    /* harmony import */


    var _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./recipe-list/recipe-item/recipe-item.component */
    "./src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
    /* harmony import */


    var _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./recipe-start/recipe-start.component */
    "./src/app/recipes/recipe-start/recipe-start.component.ts");
    /* harmony import */


    var _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recipe-edit/recipe-edit.component */
    "./src/app/recipes/recipe-edit/recipe-edit.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var RecipesModule = function RecipesModule() {
      _classCallCheck(this, RecipesModule);
    };

    RecipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_recipes_component__WEBPACK_IMPORTED_MODULE_5__["RecipesComponent"], _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_6__["RecipeListComponent"], _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"], _recipe_list_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_8__["RecipeItemComponent"], _recipe_start_recipe_start_component__WEBPACK_IMPORTED_MODULE_9__["RecipeStartComponent"], _recipe_edit_recipe_edit_component__WEBPACK_IMPORTED_MODULE_10__["RecipeEditComponent"]],
      imports: [_recipes_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecipesRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"]]
    })], RecipesModule);
    /***/
  }
}]);
//# sourceMappingURL=recipes-recipes-module-es5.js.map