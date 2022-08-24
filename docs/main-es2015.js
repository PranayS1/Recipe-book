(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-md-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template appPlaceholder></ng-template>\r\n<!-- Can be declared anywhere in the template. It will remember and use it wherever required -->\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <img\r\n      src=\"{{ logoURL }}\"\r\n      alt=\"Recipe Book\"\r\n      height=\"300px\"\r\n      width=\"300px\"\r\n      class=\"img img-responsive\"\r\n    />\r\n  </div>\r\n  <div class=\"visible-xs col-xs-12\">\r\n    <br />\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-6 col-md-6\">\r\n    <div *ngIf=\"isLoading\" style=\"text-align: center\">\r\n      <app-loading-spinner></app-loading-spinner>\r\n    </div>\r\n    <form #authForm=\"ngForm\" (ngSubmit)=\"onSubmit(authForm)\" *ngIf=\"!isLoading\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">E-Mail</label>\r\n        <input\r\n          id=\"email\"\r\n          type=\"email\"\r\n          class=\"form-control\"\r\n          ngModel\r\n          name=\"email\"\r\n          required\r\n          email\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input\r\n          id=\"password\"\r\n          type=\"password\"\r\n          class=\"form-control\"\r\n          ngModel\r\n          name=\"password\"\r\n          required\r\n          minlength=\"6\"\r\n        />\r\n      </div>\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-primary\"\r\n        [disabled]=\"!authForm.valid\"\r\n      >\r\n        {{ isLoggedIn ? \"Login\" : \"Sign Up\" }}\r\n      </button>\r\n      |\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSwitchMode()\">\r\n        Switch to {{ !isLoggedIn ? \"Login\" : \"Sign Up\" }}\r\n      </button>\r\n    </form>\r\n    <br />\r\n    <!-- <app-alert [message]=\"error\"  *ngIf=\"error\" (close)=\"onHandleError()\"></app-alert> -->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-xs-12 col-sm-12 col-md-12\">\n  <img\n    src=\"{{ errorImageURL }}\"\n    alt=\"Recipe Book\"\n    height=\"300px\"\n    width=\"300px\"\n    class=\"img img-responsive\"\n  />\n</div>\n<div class=\"col-xs-12 col-sm-12 col-md-12 login-class\">\n  <br />\n  <button class=\"btn btn-primary\" [routerLink]=\"['/']\">Go to Login</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a [routerLink]=\"['/']\" class=\"navbar-brand\">Recipe Book</a>\r\n      <button\r\n        type=\"button\"\r\n        class=\"navbar-toggle\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\"#navbar-collapsed\"\r\n      >\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-collapsed\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated\">\r\n          <a [routerLink]=\"['recipes']\">Recipes</a>\r\n        </li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"isAuthenticated\">\r\n          <a [routerLink]=\"['shopping-list']\">\r\n            <span class=\"glyphicon glyphicon-shopping-cart\"></span>\r\n            Shopping List\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\" appDropdown *ngIf=\"isAuthenticated\">\r\n          <a class=\"dropdown-toggle\" role=\"button\" style=\"cursor: pointer\"\r\n            >Manage <span class=\"caret\"></span\r\n          ></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li>\r\n              <a style=\"cursor: pointer\" (click)=\"onSaveData()\">Save Data</a>\r\n            </li>\r\n            <li>\r\n              <a style=\"cursor: pointer\" (click)=\"onFetchData()\">Fetch Data</a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li routerLinkActive=\"active\" *ngIf=\"!isAuthenticated\">\r\n          <a [routerLink]=\"['login']\">\r\n            <span class=\"glyphicon glyphicon-user\"></span> Authenticate</a\r\n          >\r\n        </li>\r\n        <li *ngIf=\"isAuthenticated\">\r\n          <a style=\"cursor: pointer\" (click)=\"onLogout()\">\r\n            <span class=\"glyphicon glyphicon-log-out\"></span>\r\n            Logout\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"backdrop\" (click)=\"onClose()\"></div>\r\n<div class=\"alert-box\">\r\n    <p>{{ message }}</p>\r\n    <div class=\"alert-box-actions\">\r\n        <button class=\"btn btn-primary\" (click)=\"onClose()\">Close</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");




const routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },
    {
        path: "recipes",
        loadChildren: () => __webpack_require__.e(/*! import() | recipes-recipes-module */ "recipes-recipes-module").then(__webpack_require__.bind(null, /*! ./recipes/recipes.module */ "./src/app/recipes/recipes.module.ts")).then((m) => m.RecipesModule),
    },
    {
        path: "shopping-list",
        loadChildren: () => __webpack_require__.e(/*! import() | shopping-list-shopping-list-module */ "shopping-list-shopping-list-module").then(__webpack_require__.bind(null, /*! ./shopping-list/shopping-list.module */ "./src/app/shopping-list/shopping-list.module.ts")).then((m) => m.ShoppingListModule),
    },
    {
        path: "login",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then((m) => m.AuthModule),
    },
    {
        path: "**",
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        // preloadingStrategy loads lazyLoaded component while the site is ideal and NOT INITIALLY while the site gets loaded.
        // Its useful for slow net connection or larger site.
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");





let AppComponent = class AppComponent {
    constructor(store, platformId) {
        this.store = store;
        this.platformId = platformId;
    }
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AutoLogin"]());
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm2015/router-store.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _recipes_store_recipe_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recipes/store/recipe.effects */ "./src/app/recipes/store/recipe.effects.ts");
/* harmony import */ var _shopping_list_store_shopping_list_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shopping-list/store/shopping-list.effects */ "./src/app/shopping-list/store/shopping-list.effects.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_21__["ErrorComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_16__["appReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_17__["AuthEffects"], _recipes_store_recipe_effects__WEBPACK_IMPORTED_MODULE_19__["RecipeEffects"], _shopping_list_store_shopping_list_effects__WEBPACK_IMPORTED_MODULE_20__["ShoppingListEffects"]]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({ logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production }),
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production })
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptorService"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





let AuthInterceptorService = class AuthInterceptorService {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        return this.store.select("auth").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), // take(1) subscribes only once and that too when the method is called.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((authState) => {
            return authState.user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])((user) => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("auth", user.token),
            });
            return next.handle(modifiedReq);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthInterceptorService);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");




const routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n@media only screen and (min-width: 426px) {\r\n  .img {\r\n    transform: skewX(30deg);\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjZweCkge1xyXG4gIC5pbWcge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgzMGRlZyk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/placeholder/placeholder.directive */ "./src/app/shared/placeholder/placeholder.directive.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");







let AuthComponent = class AuthComponent {
    constructor(componentFactoryResolver, store) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.store = store;
        this.isLoggedIn = true;
        this.isLoading = false;
        this.logoURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].logoURL; // https://images-na.ssl-images-amazon.com/images/I/81mLJFk7p4L.jpg
        this.error = null;
    }
    ngOnInit() {
        this.storeSub = this.store.select("auth").subscribe((authState) => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
            if (this.error) {
                this.showErrorAlert(this.error);
            }
        });
    }
    onSwitchMode() {
        this.isLoggedIn = !this.isLoggedIn;
    }
    onSubmit(form) {
        if (!form.valid) {
            // Ideally this shouldn't be triggered as we've used validation in template before submitting.
            return; //  But if somehow hacker change it using developers tool, we can have this extra layer of validation for security.
        }
        const email = form.value.email;
        const password = form.value.password;
        // let authObs: Observable<AuthResponseData>;
        this.isLoading = true;
        if (this.isLoggedIn) {
            this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginStart"]({
                email: email,
                password: password,
            }));
        }
        else {
            this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SignupStart"]({
                email: email,
                password: password,
            }));
            form.reset();
        }
    }
    onHandleError() {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["ClearError"]());
    }
    ngOnDestroy() {
        if (this.closeSub) {
            this.closeSub.unsubscribe();
        }
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
    showErrorAlert(message) {
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = message;
        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_4__["PlaceholderDirective"], { static: false })
], AuthComponent.prototype, "alertHost", void 0);
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-auth",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")).default]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
        ],
        imports: [
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");




// export interface AuthResponseData {
//   idToken: string;
//   email:	string;
//   refreshToken:	string;
//   expiresIn:	string;
//   localId: string;
//   registerd?: boolean;
// }
let AuthService = class AuthService {
    constructor(
    // private http: HttpClient,
    // private router: Router,
    store) {
        this.store = store;
    }
    // signup(form) {
    //   return this.http.post<AuthResponseData>
    //     ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+ environment.firebaseAPIKey,
    //       {
    //         email: form.email,
    //         password: form.password,
    //         returnSecureToken: true
    //       }
    //     ).pipe(catchError(this.handleError),
    //     tap(resData => {
    //       this.handleAuthentication(
    //         resData.email, 
    //         resData.localId,
    //         resData.idToken,
    //         +resData.expiresIn
    //       )
    //     })
    //   );
    // }
    // login(form) {
    //   return this.http.post<AuthResponseData>
    //   ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+ environment.firebaseAPIKey,
    //     {
    //       email: form.email,
    //       password: form.password,
    //       returnSecureToken: true
    //     }
    //   ).pipe(catchError(this.handleError),
    //     tap(resData => {
    //       this.handleAuthentication(
    //         resData.email, 
    //         resData.localId,
    //         resData.idToken,
    //         +resData.expiresIn
    //       )
    //     })
    //   );
    // }
    // autoLogin() {
    //   const userData: {
    //     email: string,
    //     id: string,
    //     _token: string,
    //     _tokenExpirationDate: string
    //   } = JSON.parse(localStorage.getItem('userData'));
    //   if(!userData) {
    //     return;
    //   }
    //   let expirationDate;
    //   const loadedUser = new User(
    //     userData.email,
    //     userData.id,
    //     userData._token,
    //     expirationDate = new Date(userData._tokenExpirationDate)
    //   );
    //   if(loadedUser.token) {
    //     //  this.user.next(loadedUser);
    //     this.store.dispatch(new AuthActions.AuthenticateSuccess({
    //       email: loadedUser.email,
    //       userId: loadedUser.id,
    //       token: loadedUser.token,
    //       expirationDate: expirationDate
    //     }));
    //      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
    //      this.autoLogout(expirationDuration);
    //   }
    // }
    // logout() {
    //   // this.user.next(null);
    //   // this.store.dispatch(new AuthActions.Logout());
    //   // this.router.navigate(['/auth']);
    //   localStorage.removeItem('userData');
    //   if(this.tokenExpirationTimer) {
    //     clearTimeout(this.tokenExpirationTimer)
    //   }
    //   this.tokenExpirationTimer = null;
    // }
    // autoLogout(expirationDuration: number) {
    //   this.tokenExpirationTimer = setTimeout(() => {
    //     this.logout();
    //   }, expirationDuration);
    // }
    // private handleAuthentication(
    //   email: string, 
    //   userId: string, 
    //   token: string, 
    //   expiresIn: number
    // ) {
    //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    //       const user = new User(email, userId, token, expirationDate);
    //       // this.user.next(user);
    //       this.store.dispatch(new AuthActions.AuthenticateSuccess({
    //         email: email,
    //         userId: userId, 
    //         token: token, 
    //         expirationDate:expirationDate
    //       }))
    //       this.autoLogout(expiresIn * 1000);
    //       localStorage.setItem('userData', JSON.stringify(user));
    // }
    // private handleError(errorRes: HttpErrorResponse) {
    //   let errorMessage = 'An error occured!';
    //       if (!errorRes.error || !errorRes.error.error) {
    //         return throwError(errorMessage);
    //       }
    //       switch(errorRes.error.error.message) {
    //         case 'EMAIL_EXISTS': 
    //           errorMessage = 'Email already exists';
    //           break;
    //         case 'EMAIL_NOT_FOUND':
    //           errorMessage = 'Email does not exist';
    //           break;
    //         case 'INVALID_PASSWORD':
    //           errorMessage = 'Invalid password';
    //           break;
    //       }
    //       return throwError(errorMessage);
    // }
    setLogoutTimer(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
        }, expirationDuration);
    }
    clearLogoutTimer() {
        if (this.tokenExpirationTimer) { // Method is created to be used from store
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    }
};
AuthService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AUTHENTICATE_SUCCESS, AUTHENTICATE_FAIL, AUTO_LOGIN, LOGIN_START, SIGNUP_START, CLEAR_ERROR, LOGOUT, AuthenticateSuccess, Logout, LoginStart, AuthenticateFail, SignupStart, ClearError, AutoLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_SUCCESS", function() { return AUTHENTICATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE_FAIL", function() { return AUTHENTICATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTO_LOGIN", function() { return AUTO_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_START", function() { return LOGIN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_START", function() { return SIGNUP_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERROR", function() { return CLEAR_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateSuccess", function() { return AuthenticateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStart", function() { return LoginStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateFail", function() { return AuthenticateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupStart", function() { return SignupStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearError", function() { return ClearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLogin", function() { return AutoLogin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
const AUTO_LOGIN = '[Auth] Auto Login';
const LOGIN_START = '[Auth] Login Start';
const SIGNUP_START = '[Auth] Signup Start';
const CLEAR_ERROR = '[Auth] Clear Error';
const LOGOUT = '[Auth] Logout';
class AuthenticateSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_SUCCESS;
    }
}
class Logout {
    constructor() {
        this.type = LOGOUT;
    }
}
class LoginStart {
    constructor(payload) {
        this.payload = payload;
        this.type = LOGIN_START;
    }
}
class AuthenticateFail {
    constructor(payload) {
        this.payload = payload;
        this.type = AUTHENTICATE_FAIL;
    }
}
class SignupStart {
    constructor(payload) {
        this.payload = payload;
        this.type = SIGNUP_START;
    }
}
class ClearError {
    constructor() {
        this.type = CLEAR_ERROR;
    }
}
class AutoLogin {
    constructor() {
        this.type = AUTO_LOGIN;
    }
}


/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");











const handleAuthetication = (resData) => {
    const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
    const user = new _user_model__WEBPACK_IMPORTED_MODULE_9__["User"](resData.email, resData.localId, resData.idToken, expirationDate);
    localStorage.setItem("userData", JSON.stringify(user));
    return new _auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticateSuccess"]({
        email: resData.email,
        userId: resData.localId,
        token: resData.idToken,
        expirationDate: expirationDate,
        redirect: true,
    });
};
const handleError = (errorRes) => {
    let errorMessage = "An error occured!";
    if (!errorRes.error || !errorRes.error.error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticateFail"](errorMessage));
    }
    switch (errorRes.error.error.message) {
        case "EMAIL_EXISTS":
            errorMessage = "Email already exists";
            break;
        case "EMAIL_NOT_FOUND":
            errorMessage = "Email does not exist";
            break;
        case "INVALID_PASSWORD":
            errorMessage = "Invalid password";
            break;
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticateFail"](errorMessage));
};
let AuthEffects = class AuthEffects {
    constructor(actions$, http, router, authService) {
        this.actions$ = actions$;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.authSignup = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["SIGNUP_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((signupAction) => {
            return this.http
                .post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
                src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseAPIKey, {
                email: signupAction.payload.email,
                password: signupAction.payload.password,
                returnSecureToken: true,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((resData) => {
                this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => handleAuthetication(resData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorRes) => handleError(errorRes)));
        }));
        this.authLogin = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["LOGIN_START"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((authData) => {
            return this.http
                .post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
                src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseAPIKey, {
                email: authData.payload.email,
                password: authData.payload.password,
                returnSecureToken: true,
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((resData) => {
                this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resData) => {
                return handleAuthetication(resData);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((errorRes) => {
                return handleError(errorRes);
            }));
        }));
        this.authRedirect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["AUTHENTICATE_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((authSuccessAction) => {
            if (authSuccessAction.payload.redirect) {
                this.router.navigate(["/"]);
            }
        }));
        this.autoLogin = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["AUTO_LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            const userData = JSON.parse(localStorage.getItem("userData"));
            if (!userData) {
                return { type: "DUMMY" };
            }
            const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_9__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
            if (loadedUser.token) {
                //  this.user.next(loadedUser);
                const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                    new Date().getTime();
                this.authService.setLogoutTimer(expirationDuration);
                return new _auth_actions__WEBPACK_IMPORTED_MODULE_7__["AuthenticateSuccess"]({
                    email: loadedUser.email,
                    userId: loadedUser.id,
                    token: loadedUser.token,
                    expirationDate: new Date(userData._tokenExpirationDate),
                    redirect: false,
                });
                //  this.autoLogout(expirationDuration);
            }
            return { type: "DUMMY" };
        }));
        this.authLogout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_7__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.authService.clearLogoutTimer();
            localStorage.removeItem("userData");
            this.router.navigate(["/login"]);
        }));
    }
};
AuthEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "authSignup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "authLogin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "authRedirect", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], AuthEffects.prototype, "autoLogin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], AuthEffects.prototype, "authLogout", void 0);
AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], AuthEffects);



/***/ }),

/***/ "./src/app/auth/store/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");



const initialState = {
    user: null,
    authError: null,
    loading: false
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AUTHENTICATE_SUCCESS"]:
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_1__["User"](action.payload.email, action.payload.userId, action.payload.token, action.payload.expirationDate);
            return Object.assign({}, state, { authError: null, user: user, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["LOGOUT"]:
            return Object.assign({}, state, { user: null });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["LOGIN_START"]:
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["SIGNUP_START"]:
            return Object.assign({}, state, { authError: null, loading: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["AUTHENTICATE_FAIL"]:
            return Object.assign({}, state, { user: null, authError: action.payload, loading: false });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_2__["CLEAR_ERROR"]:
            return Object.assign({}, state, { authError: null });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\r\n  width: 50%;\r\n  margin: auto;\r\n}\r\n\r\n.login-class {\r\n  text-align: center;\r\n  margin: 15px 0;\r\n}\r\n\r\n@media only screen and (max-width: 426px) {\r\n  .img {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 426px) and (max-width: 768px) {\r\n  .img {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubG9naW4tY2xhc3Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNnB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW1nIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



let ErrorComponent = class ErrorComponent {
    constructor() {
        this.errorImageURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].errorImageURL;
    }
    ngOnInit() { }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-error",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recipes/store/recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");
/* harmony import */ var _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");








let HeaderComponent = class HeaderComponent {
    constructor(
    // private dataStorageService:DataStorageService,
    store, router) {
        this.store = store;
        this.router = router;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.userSub = this.store
            .select("auth")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((authState) => authState.user))
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
            this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__["StoreRecipes"]());
        }
        else if (this.router.url === "/shopping-list") {
            this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_7__["StoreShoppingList"]());
        }
    }
    // onFetchData() {
    //   this.store.dispatch(new RecipesActions.FetchRecipes());
    // }
    onFetchData() {
        if (this.router.url === "/recipes") {
            this.store.dispatch(new _recipes_store_recipe_actions__WEBPACK_IMPORTED_MODULE_6__["FetchRecipes"]());
        }
        else if (this.router.url === "/shopping-list") {
            this.store.dispatch(new _shopping_list_store_shopping_list_actions__WEBPACK_IMPORTED_MODULE_7__["FetchShoppingList"]());
        }
    }
    onLogout() {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]());
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/recipes/store/recipe.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.actions.ts ***!
  \*************************************************/
/*! exports provided: SET_RECIPES, FETCH_RECIPES, ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE, STORE_RECIPES, SetRecipes, FetchRecipes, AddRecipe, UpdateRecipe, DeleteRecipe, StoreRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RECIPES", function() { return SET_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RECIPES", function() { return FETCH_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_RECIPE", function() { return ADD_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_RECIPE", function() { return UPDATE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_RECIPE", function() { return DELETE_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_RECIPES", function() { return STORE_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRecipes", function() { return SetRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchRecipes", function() { return FetchRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecipe", function() { return AddRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRecipe", function() { return UpdateRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRecipe", function() { return DeleteRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRecipes", function() { return StoreRecipes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const SET_RECIPES = '[Recipes] Set Recipes';
const FETCH_RECIPES = '[Recipes] Fetch Recipes';
const ADD_RECIPE = '[Recipes] Add Recipe';
const UPDATE_RECIPE = '[Recipes] Update Recipe';
const DELETE_RECIPE = '[Recipes] Delete Recipe';
const STORE_RECIPES = '[Recipes] Store Recipes';
class SetRecipes {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_RECIPES;
    }
}
class FetchRecipes {
    constructor() {
        this.type = FETCH_RECIPES;
    }
}
class AddRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_RECIPE;
    }
}
class UpdateRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_RECIPE;
    }
}
class DeleteRecipe {
    constructor(payload) {
        this.payload = payload;
        this.type = DELETE_RECIPE;
    }
}
class StoreRecipes {
    constructor() {
        this.type = STORE_RECIPES;
    }
}


/***/ }),

/***/ "./src/app/recipes/store/recipe.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.effects.ts ***!
  \*************************************************/
/*! exports provided: RecipeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEffects", function() { return RecipeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");







let RecipeEffects = class RecipeEffects {
    constructor(actions$, http, store) {
        this.actions$ = actions$;
        this.http = http;
        this.store = store;
        this.fetchRecipes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_6__["FETCH_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            return this.http.get('https://ng-course-recipe-book-3cf2c.firebaseio.com/recipes.json');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recipes => {
            return recipes.map(recipe => {
                return Object.assign({}, recipe, { ingredients: recipe.ingredients ? recipe.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(recipes => {
            return new _recipe_actions__WEBPACK_IMPORTED_MODULE_6__["SetRecipes"](recipes);
        }));
        this.storeRecipes = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_recipe_actions__WEBPACK_IMPORTED_MODULE_6__["STORE_RECIPES"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.store.select('recipe')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(([actionData, recipesState]) => {
            return this.http.put('https://ng-course-recipe-book-3cf2c.firebaseio.com/recipes.json', recipesState.recipes);
        }));
    }
};
RecipeEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], RecipeEffects.prototype, "fetchRecipes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], RecipeEffects.prototype, "storeRecipes", void 0);
RecipeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], RecipeEffects);



/***/ }),

/***/ "./src/app/recipes/store/recipe.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/recipes/store/recipe.reducer.ts ***!
  \*************************************************/
/*! exports provided: recipeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recipeReducer", function() { return recipeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _recipe_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe.actions */ "./src/app/recipes/store/recipe.actions.ts");


const initialState = {
    recipes: []
};
function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["SET_RECIPES"]:
            return Object.assign({}, state, { recipes: [...action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_RECIPE"]:
            return Object.assign({}, state, { recipes: [...state.recipes, action.payload] });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_RECIPE"]:
            const updatedRecipe = Object.assign({}, state.recipes[action.payload.index], action.payload.newRecipe);
            const updatedRecipes = [...state.recipes];
            updatedRecipes[action.payload.index] = updatedRecipe;
            return Object.assign({}, state, { recipes: updatedRecipes });
        case _recipe_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_RECIPE"]:
            return Object.assign({}, state, { recipes: state.recipes.filter((recipe, index) => {
                    return index !== action.payload;
                }) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/shared/alert/alert.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/alert/alert.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vW;\r\n    height: 100vh;\r\n    background: rgba(0, 0, 0, 0.75);\r\n    z-index: 50;\r\n}\r\n\r\n.alert-box {\r\n    position: fixed;\r\n    top: 30vh;\r\n    left: 20vw;\r\n    width: 60vw;\r\n    padding: 16px;\r\n    z-index: 100;\r\n    background: white;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\r\n}\r\n\r\n.alert-box-actions {\r\n    text-align: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtJQUNiLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDB2VztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gICAgei1pbmRleDogNTA7XHJcbn1cclxuXHJcbi5hbGVydC1ib3gge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMjB2dztcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbn1cclxuXHJcbi5hbGVydC1ib3gtYWN0aW9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertComponent = class AlertComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClose() {
        this.close.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlertComponent.prototype, "close", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.css */ "./src/app/shared/alert/alert.component.css")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    // @HostListener('mouseenter') mouseOver(eventData: Event) { // eventData: Event is not necessary in this case. 
    //                                                           //In case you want to listen to click event or so, you can use this
    //   this.isOpen = !this.isOpen;
    // }
    // @HostListener('mouseleave') mouseLeave() { 
    //   this.isOpen = !this.isOpen;
    // }
    constructor(elRef) {
        this.elRef = elRef;
        this.isOpen = false;
    }
    toggleOpen(event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
};
DropdownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lds-ellipsis {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n  }\r\n  .lds-ellipsis div {\r\n    position: absolute;\r\n    top: 33px;\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 50%;\r\n    background: royalblue;\r\n    -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n            animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n  }\r\n  .lds-ellipsis div:nth-child(1) {\r\n    left: 8px;\r\n    -webkit-animation: lds-ellipsis1 0.6s infinite;\r\n            animation: lds-ellipsis1 0.6s infinite;\r\n  }\r\n  .lds-ellipsis div:nth-child(2) {\r\n    left: 8px;\r\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n            animation: lds-ellipsis2 0.6s infinite;\r\n  }\r\n  .lds-ellipsis div:nth-child(3) {\r\n    left: 32px;\r\n    -webkit-animation: lds-ellipsis2 0.6s infinite;\r\n            animation: lds-ellipsis2 0.6s infinite;\r\n  }\r\n  .lds-ellipsis div:nth-child(4) {\r\n    left: 56px;\r\n    -webkit-animation: lds-ellipsis3 0.6s infinite;\r\n            animation: lds-ellipsis3 0.6s infinite;\r\n  }\r\n  @-webkit-keyframes lds-ellipsis1 {\r\n    0% {\r\n      transform: scale(0);\r\n    }\r\n    100% {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n  @keyframes lds-ellipsis1 {\r\n    0% {\r\n      transform: scale(0);\r\n    }\r\n    100% {\r\n      transform: scale(1);\r\n    }\r\n  }\r\n  @-webkit-keyframes lds-ellipsis3 {\r\n    0% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0);\r\n    }\r\n  }\r\n  @keyframes lds-ellipsis3 {\r\n    0% {\r\n      transform: scale(1);\r\n    }\r\n    100% {\r\n      transform: scale(0);\r\n    }\r\n  }\r\n  @-webkit-keyframes lds-ellipsis2 {\r\n    0% {\r\n      transform: translate(0, 0);\r\n    }\r\n    100% {\r\n      transform: translate(24px, 0);\r\n    }\r\n  }\r\n  @keyframes lds-ellipsis2 {\r\n    0% {\r\n      transform: translate(0, 0);\r\n    }\r\n    100% {\r\n      transform: translate(24px, 0);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsMkRBQW1EO1lBQW5ELG1EQUFtRDtFQUNyRDtFQUNBO0lBQ0UsU0FBUztJQUNULDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFLFNBQVM7SUFDVCw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4QztFQUNBO0lBQ0UsVUFBVTtJQUNWLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEM7RUFDQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtFQVBBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtFQUNGO0VBQ0E7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7RUFQQTtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxtQkFBbUI7SUFDckI7RUFDRjtFQUNBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7SUFDQTtNQUNFLDZCQUE2QjtJQUMvQjtFQUNGO0VBUEE7SUFDRTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsNkJBQTZCO0lBQy9CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1lbGxpcHNpcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICB9XHJcbiAgLmxkcy1lbGxpcHNpcyBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzM3B4O1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbiAgfVxyXG4gIC5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBhbmltYXRpb246IGxkcy1lbGxpcHNpczEgMC42cyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gIH1cclxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogMzJweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG4gIH1cclxuICAubGRzLWVsbGlwc2lzIGRpdjpudGgtY2hpbGQoNCkge1xyXG4gICAgbGVmdDogNTZweDtcclxuICAgIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMyAwLjZzIGluZmluaXRlO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMyIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoadingSpinnerComponent = class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading-spinner',
        template: `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loading-spinner.component.css */ "./src/app/shared/loading-spinner/loading-spinner.component.css")).default]
    })
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/shared/placeholder/placeholder.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/placeholder/placeholder.directive.ts ***!
  \*************************************************************/
/*! exports provided: PlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderDirective", function() { return PlaceholderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlaceholderDirective = class PlaceholderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    get viewContainerRefGetter() {
        return this.viewContainerRef;
    }
};
PlaceholderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
PlaceholderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appPlaceholder]'
    })
], PlaceholderDirective);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placeholder/placeholder.directive */ "./src/app/shared/placeholder/placeholder.directive.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/shared/alert/alert.component.ts");







let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"],
            _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"],
            _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_5__["PlaceholderDirective"],
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]
        ],
        imports: [],
        exports: [
            _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"],
            _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"],
            _placeholder_placeholder_directive__WEBPACK_IMPORTED_MODULE_5__["PlaceholderDirective"],
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        entryComponents: [
            _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shopping-list/shopping-list.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shopping-list/shopping-list.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListService", function() { return ShoppingListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let ShoppingListService = class ShoppingListService {
    // ingredientsChanged= new Subject<Ingredient[]>();
    // startedEditing = new Subject<number>();
    // private ingredients: Ingredient[] = [
    //   new Ingredient('Apples', 5),
    //   new Ingredient('Tomatoes', 10)
    // ];
    constructor(store) {
        this.store = store;
    }
};
ShoppingListService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ShoppingListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ShoppingListService);



/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.actions.ts ***!
  \**************************************************************/
/*! exports provided: ADD_INGREDIENT, ADD_INGREDIENTS, UPDATE_INGREDIENT, DELETE_INGREDIENT, START_EDIT, STOP_EDIT, FETCH_SHOPPING_LIST, STORE_SHOPPING_LIST, SET_SHOPPING_LIST, AddIngredient, AddIngredients, UpdateIngredient, DeleteIngredient, StartEdit, StopEdit, FetchShoppingList, StoreShoppingList, SetShoppingList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENT", function() { return ADD_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_INGREDIENTS", function() { return ADD_INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_INGREDIENT", function() { return UPDATE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_INGREDIENT", function() { return DELETE_INGREDIENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_EDIT", function() { return START_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOP_EDIT", function() { return STOP_EDIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SHOPPING_LIST", function() { return FETCH_SHOPPING_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_SHOPPING_LIST", function() { return STORE_SHOPPING_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SHOPPING_LIST", function() { return SET_SHOPPING_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredient", function() { return AddIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddIngredients", function() { return AddIngredients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateIngredient", function() { return UpdateIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteIngredient", function() { return DeleteIngredient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartEdit", function() { return StartEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopEdit", function() { return StopEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchShoppingList", function() { return FetchShoppingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreShoppingList", function() { return StoreShoppingList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetShoppingList", function() { return SetShoppingList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
const START_EDIT = '[Shopping List] Start Edit';
const STOP_EDIT = '[Shopping List] Stop Edit';
const FETCH_SHOPPING_LIST = '[Shopping List] Fetch Shopping List';
const STORE_SHOPPING_LIST = '[Shopping List] Store Shopping List';
const SET_SHOPPING_LIST = '[Shopping List] Set Shopping List';
class AddIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENT;
    }
}
class AddIngredients {
    constructor(payload) {
        this.payload = payload;
        this.type = ADD_INGREDIENTS;
    }
}
class UpdateIngredient {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_INGREDIENT;
    }
}
class DeleteIngredient {
    constructor() {
        this.type = DELETE_INGREDIENT;
    }
}
class StartEdit {
    constructor(payload) {
        this.payload = payload;
        this.type = START_EDIT;
    }
}
class StopEdit {
    constructor() {
        this.type = STOP_EDIT;
    }
}
class FetchShoppingList {
    constructor() {
        this.type = FETCH_SHOPPING_LIST;
    }
}
class StoreShoppingList {
    constructor() {
        this.type = STORE_SHOPPING_LIST;
    }
}
class SetShoppingList {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_SHOPPING_LIST;
    }
}


/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.effects.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.effects.ts ***!
  \**************************************************************/
/*! exports provided: ShoppingListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListEffects", function() { return ShoppingListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shopping_list_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");
/* harmony import */ var _shopping_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shopping-list.service */ "./src/app/shopping-list/shopping-list.service.ts");








let ShoppingListEffects = class ShoppingListEffects {
    constructor(actions$, http, store, slService) {
        this.actions$ = actions$;
        this.http = http;
        this.store = store;
        this.slService = slService;
        this.fetchShoppingList = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_shopping_list_actions__WEBPACK_IMPORTED_MODULE_6__["FETCH_SHOPPING_LIST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => {
            return this.http.get('https://ng-course-recipe-book-3cf2c.firebaseio.com/shopping-list.json');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(shoppingList => {
            return new _shopping_list_actions__WEBPACK_IMPORTED_MODULE_6__["SetShoppingList"](shoppingList);
        }));
        this.storeShoppingList = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_shopping_list_actions__WEBPACK_IMPORTED_MODULE_6__["STORE_SHOPPING_LIST"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store.select('shoppingList')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(([actionData, shoppingListState]) => {
            return this.http.put('https://ng-course-recipe-book-3cf2c.firebaseio.com/shopping-list.json', shoppingListState.ingredients);
        }));
    }
};
ShoppingListEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _shopping_list_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingListService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])()
], ShoppingListEffects.prototype, "fetchShoppingList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false })
], ShoppingListEffects.prototype, "storeShoppingList", void 0);
ShoppingListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ShoppingListEffects);



/***/ }),

/***/ "./src/app/shopping-list/store/shopping-list.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/shopping-list/store/shopping-list.reducer.ts ***!
  \**************************************************************/
/*! exports provided: shoppingListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shoppingListReducer", function() { return shoppingListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-list.actions */ "./src/app/shopping-list/store/shopping-list.actions.ts");


const initialState = {
    ingredients: [],
    // ingredients: [
    //     new Ingredient('Apples', 5),
    //     new Ingredient('Tomatoes', 10)
    //   ],
    editedIngredient: null,
    editedIngredientIndex: -1
};
function shoppingListReducer(state = initialState, action) {
    switch (action.type) {
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENT"]:
            return Object.assign({}, state, { ingredients: [...state.ingredients, action.payload] });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_INGREDIENTS"]:
            return Object.assign({}, state, { ingredients: [...state.ingredients, ...action.payload] });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_INGREDIENT"]:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = Object.assign({}, ingredient, action.payload);
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
            return Object.assign({}, state, { ingredients: updatedIngredients, editedIngredientIndex: -1, editedIngredient: null });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_INGREDIENT"]:
            return Object.assign({}, state, { ingredients: state.ingredients.filter((ig, igIndex) => {
                    return igIndex !== state.editedIngredientIndex;
                }) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["START_EDIT"]:
            return Object.assign({}, state, { editedIngredientIndex: action.payload, editedIngredient: Object.assign({}, state.ingredients[action.payload]) });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["STOP_EDIT"]:
            return Object.assign({}, state, { editedIngredient: null, editedIngredientIndex: -1 });
        case _shopping_list_actions__WEBPACK_IMPORTED_MODULE_1__["SET_SHOPPING_LIST"]:
            return Object.assign({}, state, { ingredients: [...action.payload] });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shopping-list/store/shopping-list.reducer */ "./src/app/shopping-list/store/shopping-list.reducer.ts");
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../recipes/store/recipe.reducer */ "./src/app/recipes/store/recipe.reducer.ts");




const appReducer = {
    shoppingList: _shopping_list_store_shopping_list_reducer__WEBPACK_IMPORTED_MODULE_1__["shoppingListReducer"],
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"],
    recipe: _recipes_store_recipe_reducer__WEBPACK_IMPORTED_MODULE_3__["recipeReducer"]
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseAPIKey: "AIzaSyCJLSrjMlLyPl8IHKsZnSzNrl-lwX7tkqA",
    logoURL: "../assets/logo.jpg",
    errorImageURL: "../assets/error.jpg",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Recipe-book\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map