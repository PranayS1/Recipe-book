function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shopping-list-shopping-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingListShoppingEditShoppingEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <form #shoppingEditForm=\"ngForm\" (ngSubmit)=\"onSubmit(shoppingEditForm)\" class=\"form-group\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5 form-group\">\r\n                    <label for=\"name\" class=\"form\">Name</label>\r\n                    <input \r\n                    type=\"text\" \r\n                    id=\"name\" \r\n                    class=\"form-control\"\r\n                    name=\"name\"\r\n                    ngModel\r\n                    required>\r\n                </div>\r\n                <div class=\"col-sm-2 form-group\">\r\n                    <label for=\"amount\">Amount</label>\r\n                    <input \r\n                    type=\"number\" \r\n                    id=\"amount\" \r\n                    class=\"form-control\"\r\n                    name=\"amount\"\r\n                    ngModel\r\n                    required\r\n                    pattern=\"^[1-9]+[0-9]*$\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                    <button \r\n                        class=\"btn btn-success\" \r\n                        type=\"submit\" \r\n                        [disabled]=\"!shoppingEditForm.valid\"\r\n                        >{{ editMode ? 'Update' : 'Add'}}</button>\r\n                    <button \r\n                        class=\"btn btn-danger\" \r\n                        type=\"button\" \r\n                        (click)=\"onDelete()\"\r\n                        *ngIf=\"editMode\">Delete</button>\r\n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onClear()\">Clear</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShoppingListShoppingListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xs-10\">\r\n        <app-shopping-edit></app-shopping-edit>\r\n        <hr>\r\n        <ul class=\"list-group\">\r\n            <a \r\n                class=\"list-group-item\" \r\n                style=\"cursor: pointer;\"\r\n                *ngFor=\"let ingredient of (ingredients | async).ingredients; let i = index\"\r\n                (click)=\"onEditItem(i)\"\r\n                [@add] [@.disabled]=\"!isNew\"\r\n                >\r\n                {{ingredient.name}} ({{ingredient.amount}})\r\n            </a>\r\n        </ul>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/shared/ingredient.model.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/ingredient.model.ts ***!
    \********************************************/

  /*! exports provided: Ingredient */

  /***/
  function srcAppSharedIngredientModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ingredient", function () {
      return Ingredient;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Ingredient = function Ingredient(name, amount) {
      _classCallCheck(this, Ingredient);

      this.name = name;
      this.amount = amount;
    };
    /***/

  },

  /***/
  "./src/app/shopping-list/shopping-edit/shopping-edit.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingListShoppingEditShoppingEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\r\n    margin-right: 5px;  /* Wasnt there in vid */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcHBpbmctbGlzdC9zaG9wcGluZy1lZGl0L3Nob3BwaW5nLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQixHQUFHLHVCQUF1QjtBQUMvQyIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7ICAvKiBXYXNudCB0aGVyZSBpbiB2aWQgKi9cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
    \************************************************************************/

  /*! exports provided: ShoppingEditComponent */

  /***/
  function srcAppShoppingListShoppingEditShoppingEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function () {
      return ShoppingEditComponent;
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


    var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../store/shopping-list.actions */
    "./src/app/shopping-list/store/shopping-list.actions.ts");
    /* harmony import */


    var src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/ingredient.model */
    "./src/app/shared/ingredient.model.ts");

    var ShoppingEditComponent = /*#__PURE__*/function () {
      function ShoppingEditComponent(store) {
        _classCallCheck(this, ShoppingEditComponent);

        this.store = store;
        this.editMode = false;
      }

      _createClass(ShoppingEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.store.select('shoppingList').subscribe(function (stateData) {
            if (stateData.editedIngredientIndex > -1) {
              _this.editMode = true;
              _this.editedItem = stateData.editedIngredient;

              _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
              });
            } else {
              _this.editMode = false;
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var value = form.value;
          var newIngredient = new src_app_shared_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"](value.name, value.amount);

          if (this.editMode) {
            // this.slService.updateIngredient(this.editedItemIndex, newIngredient);
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateIngredient"](newIngredient));
          } else {
            this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__["AddIngredient"](newIngredient)); // this.slService.addIngredient(newIngredient);
          }

          this.editMode = false;
          form.reset();
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.slForm.reset();
          this.editMode = false;
          this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__["StopEdit"]());
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          // this.slService.deleteIngredient(this.editedItemIndex);
          this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteIngredient"]());
          this.onClear();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
          this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_3__["StopEdit"]());
        }
      }]);

      return ShoppingEditComponent;
    }();

    ShoppingEditComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shoppingEditForm', {
      "static": false
    })], ShoppingEditComponent.prototype, "slForm", void 0);
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-edit/shopping-edit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-edit.component.css */
      "./src/app/shopping-list/shopping-edit/shopping-edit.component.css"))["default"]]
    })], ShoppingEditComponent);
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shopping-list/shopping-list-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ShoppingListRoutingModule */

  /***/
  function srcAppShoppingListShoppingListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListRoutingModule", function () {
      return ShoppingListRoutingModule;
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


    var _shopping_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shopping-list.component */
    "./src/app/shopping-list/shopping-list.component.ts");

    var routes = [{
      path: '',
      component: _shopping_list_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingListComponent"]
    }];

    var ShoppingListRoutingModule = function ShoppingListRoutingModule() {
      _classCallCheck(this, ShoppingListRoutingModule);
    };

    ShoppingListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShoppingListRoutingModule);
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShoppingListShoppingListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ShoppingListComponent */

  /***/
  function srcAppShoppingListShoppingListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function () {
      return ShoppingListComponent;
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


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./store/shopping-list.actions */
    "./src/app/shopping-list/store/shopping-list.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ShoppingListComponent = /*#__PURE__*/function () {
      function ShoppingListComponent( // private slService:ShoppingListService,
      store) {
        _classCallCheck(this, ShoppingListComponent);

        this.store = store;
        this.isNew = true;
      }

      _createClass(ShoppingListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.ingredients = this.store.select('shoppingList'); // This code is beig used for using store approach
          // this.beforeChange = JSON.stringify(this.beforeChange)  

          this.ingredients.subscribe(function (data) {
            _this2.afterChange = data.ingredients.length;

            if (_this2.beforeChange !== _this2.afterChange) {
              _this2.isNew = true;
              _this2.beforeChange = _this2.afterChange;
            } else {
              _this2.isNew = false;
            }
          });
          this.ingredients.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (recipesState) {
            return recipesState;
          })).subscribe(function (data) {
            _this2.beforeChange = data.ingredients.length;
            _this2.isNew = true;
          }); // Below code was used while using service
          // this.ingredients = this.slService.getIngredients();
          // this.subscription = this.slService.ingredientsChanged
          //   .subscribe((ingredient: Ingredient[]) => {
          //     this.ingredients = ingredient;
          //   })
        }
      }, {
        key: "onEditItem",
        value: function onEditItem(index) {
          // this.slService.startedEditing.next(index);
          this.store.dispatch(new _store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_4__["StartEdit"](index));
        }
      }]);

      return ShoppingListComponent;
    }();

    ShoppingListComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shopping-list/shopping-list.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('add', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        opacity: 1,
        transform: 'translateX(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        opacity: 0,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(100px)',
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-list.component.css */
      "./src/app/shopping-list/shopping-list.component.css"))["default"]]
    })], ShoppingListComponent);
    /***/
  },

  /***/
  "./src/app/shopping-list/shopping-list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shopping-list/shopping-list.module.ts ***!
    \*******************************************************/

  /*! exports provided: ShoppingListModule */

  /***/
  function srcAppShoppingListShoppingListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingListModule", function () {
      return ShoppingListModule;
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


    var _shopping_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shopping-list-routing.module */
    "./src/app/shopping-list/shopping-list-routing.module.ts");
    /* harmony import */


    var _shopping_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shopping-list.component */
    "./src/app/shopping-list/shopping-list.component.ts");
    /* harmony import */


    var _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shopping-edit/shopping-edit.component */
    "./src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ShoppingListModule = function ShoppingListModule() {
      _classCallCheck(this, ShoppingListModule);
    };

    ShoppingListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_shopping_list_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingListComponent"], _shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingEditComponent"]],
      imports: [_shopping_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["ShoppingListRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
    })], ShoppingListModule);
    /***/
  }
}]);
//# sourceMappingURL=shopping-list-shopping-list-module-es5.js.map