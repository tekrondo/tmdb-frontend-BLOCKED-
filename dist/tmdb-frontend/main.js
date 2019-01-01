(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/error-page.component.ts":
/*!*********************************************!*\
  !*** ./src/app/404/error-page.component.ts ***!
  \*********************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "<h1 style=\"margin: 25% auto !important\">THIS PAGE HASN'T BEEN CREATED YET, HOLD ON, YOU MAY HAVE GRAND KIDS BEFORE IT MAY BE ADDED</h1>"
        })
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
/* harmony import */ var _single_movie_single_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-movie/single-movie.component */ "./src/app/single-movie/single-movie.component.ts");
/* harmony import */ var _404_error_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/error-page.component */ "./src/app/404/error-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movies'
    },
    {
        path: 'movies',
        component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"]
    },
    {
        path: 'movie/:id',
        pathMatch: 'full',
        component: _single_movie_single_movie_component__WEBPACK_IMPORTED_MODULE_5__["SingleMovieComponent"]
    },
    {
        path: '**',
        component: _404_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            exports: [
                // modules
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // components
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
                _single_movie_single_movie_component__WEBPACK_IMPORTED_MODULE_5__["SingleMovieComponent"],
                _404_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]
            ],
            declarations: [
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
                _single_movie_single_movie_component__WEBPACK_IMPORTED_MODULE_5__["SingleMovieComponent"],
                _404_error_page_component__WEBPACK_IMPORTED_MODULE_6__["ErrorPageComponent"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark{\n  background-color: black !important;\n  color: aliceblue !important;\n}\n\n.nav-item > a {\n  color: azure !important;\n}\n\n#Home{\n  color: azure !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWRhcmt7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcbn1cblxuLm5hdi1pdGVtID4gYSB7XG4gIGNvbG9yOiBhenVyZSAhaW1wb3J0YW50O1xufVxuXG4jSG9tZXtcbiAgY29sb3I6IGF6dXJlICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\">  \n  <a class=\"navbar-brand\" href=\"/movies\" id=\"Home\">Home</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">  \n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">     \n    <ul class=\"navbar-nav mr-4\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-value=\"about\" routerLink=\"/about\">About</a>        \n      </li>  \n      <li class=\"nav-item\">\n        <a class=\"nav-link \" data-value=\"portfolio\" routerLink=\"/portfolio\">Portfolio</a>    \n      </li>\n      <li class=\"nav-item\"> \n        <a class=\"nav-link \" data-value=\"blog\" routerLink=\"/blog\">Blog</a>         \n      </li>   \n      <li class=\"nav-item\">  \n        <a class=\"nav-link \" data-value=\"team\" routerLink=\"/team\">Team</a>       \n      </li>  \n      <li class=\"nav-item\"> \n        <a class=\"nav-link \" data-value=\"contact\" routerLink=\"/contact\">Contact</a>       \n      </li> \n    </ul> \n  </div>\n</nav>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Movies Reel';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[ng\\:cloak],\n[ng-cloak],\n[data-ng-cloak],\n[x-ng-cloak],\n.ng-cloak,\n.x-ng-cloak {\n  display: none !important;\n}\n\n.blog{\n  margin: 4em 0;\n  position: relative; \n }\n\n.blog h1{\n  color:#F97300;\n  margin: 2em; \n }\n\n.blog .card{\n  box-shadow: 0 0 20px #ccc;\n }\n\n.blog .card img{\n  width: 100%;\n  height: 100%;\n }\n\n.blog .card-title{\n  color:#F97300;\n }\n\n.card-title:hover{\n  cursor: pointer;\n }\n\n.blog .card-body{\n  padding: 1em;\n }\n\n.card{\n  margin-bottom: 8%;\n }\n\np .card-text{\n  overflow: hidden;\n }\n\n.CustomCardText{\n  max-width: 100%;\n}\n\n.loader2{\n  margin: 50% auto;\n}\n\n/* .imgHeight{\n   height: 540px !important;\n } */\n\nh4.card-title{\n   font-weight: 300 !important;\n }\n\n.card-img:hover{\n   border: 2px;\n   border-color: #F97300;\n   cursor: pointer;\n }\n\n#loader{\n  margin: 25% auto;\n}\n\n#fullImage{\n  background-attachment: fixed;\n  background-size: cover;\n  background-position: center;\n  width: 100% !important;\n}\n\n.top-left{\n  color: aliceblue;  \n  position: absolute;\n  top: 8px;\n  left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSx5QkFBeUI7Q0FDMUI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25COztBQUNEO0VBQ0MsY0FBYztFQUNkLFlBQVk7RUFDWjs7QUFDRDtFQUNDLDBCQUEwQjtFQUMxQjs7QUFDRDtFQUNDLFlBQVk7RUFDWixhQUFhO0VBQ2I7O0FBQ0Q7RUFDQyxjQUFjO0VBQ2Q7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEI7O0FBQ0Q7RUFDQyxhQUFhO0VBQ2I7O0FBRUQ7RUFDQyxrQkFBa0I7RUFDbEI7O0FBRUQ7RUFDQyxpQkFBaUI7RUFDakI7O0FBRUY7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUE7O0tBRUk7O0FBRUo7R0FDRSw0QkFBNEI7RUFDN0I7O0FBRUQ7R0FDRSxZQUFZO0dBQ1osc0JBQXNCO0dBQ3RCLGdCQUFnQjtFQUNqQjs7QUFFRjtFQUNFLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuZ1xcOmNsb2FrXSxcbltuZy1jbG9ha10sXG5bZGF0YS1uZy1jbG9ha10sXG5beC1uZy1jbG9ha10sXG4ubmctY2xvYWssXG4ueC1uZy1jbG9hayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJsb2d7XG4gIG1hcmdpbjogNGVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gfVxuIC5ibG9nIGgxe1xuICBjb2xvcjojRjk3MzAwO1xuICBtYXJnaW46IDJlbTsgXG4gfVxuIC5ibG9nIC5jYXJke1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xuIH1cbiAuYmxvZyAuY2FyZCBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gfVxuIC5ibG9nIC5jYXJkLXRpdGxle1xuICBjb2xvcjojRjk3MzAwO1xuIH1cblxuLmNhcmQtdGl0bGU6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gLmJsb2cgLmNhcmQtYm9keXtcbiAgcGFkZGluZzogMWVtO1xuIH1cblxuIC5jYXJke1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbiB9XG5cbiBwIC5jYXJkLXRleHR7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gfVxuXG4uQ3VzdG9tQ2FyZFRleHR7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmxvYWRlcjJ7XG4gIG1hcmdpbjogNTAlIGF1dG87XG59XG5cbiAvKiAuaW1nSGVpZ2h0e1xuICAgaGVpZ2h0OiA1NDBweCAhaW1wb3J0YW50O1xuIH0gKi9cblxuIGg0LmNhcmQtdGl0bGV7XG4gICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gfVxuXG4gLmNhcmQtaW1nOmhvdmVye1xuICAgYm9yZGVyOiAycHg7XG4gICBib3JkZXItY29sb3I6ICNGOTczMDA7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gfVxuXG4jbG9hZGVye1xuICBtYXJnaW46IDI1JSBhdXRvO1xufVxuXG4jZnVsbEltYWdle1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50b3AtbGVmdHtcbiAgY29sb3I6IGFsaWNlYmx1ZTsgIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"d-flex justify-content-center fixed-top navbar-brand \" style=\"margin-top: 2.5px\">\n          <input (keyup.enter)=\"searchMovie(movieName)\" type=\"text\" placeholder=\"What's the word?\" [(ngModel)]=\"movieName\">\n          <button (click)=\"searchMovie(movieName)\" class=\"btn btn-primary\"> Find the Movie!</button>\n      </div>\n    \n\n\n    <div class=\"blog\">\n      <div class=\"container\">\n        <div *ngIf=\"moviesResultsState\" class=\"row\">\n\n            <div *ngIf=\"noMovies\" id=\"loader\">\n                <div class=\"container\">\n                  <div class=\"row\">\n                    <div class=\"col align-self-center\">\n                      <img src=\"../../assets/lg.azure-round-loader.gif\">\n                    </div>\n                  </div>\n                </div>\n              </div> \n\n          <div *ngFor=\"let movie of moviesResults.results\" \n          class=\"col-lg-4 col-md-6 col-sm-12\">\n            <a routerLink=\"/movie/{{movie.id}}\">\n              <div class=\"card\">\n              <div class=\"card-img\">\n                <img src=\"https://image.tmdb.org/t/p/w300/{{ movie.poster_path }}\" class=\"img-fluid\">\n              </div>\n              <div class=\"card-body\">\n                  <h4 class=\"card-title\">{{ movie.title }}</h4>\n                <p class=\"card-text d-inline-block text-truncate CustomCardText\">\n                  {{ movie.overview }}\n                </p>\n              </div>\n              <div class=\"card-footer\">\n                <p class=\"card-text\">{{ movie.release_date }}</p>\n              </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    \n    </div>\n    \n    <!-- <video *ngIf=\"movieState\" autoplay muted loop id=\"myVideo\">\n      <source src=\"rain.mp4\" type=\"video/mp4\">\n      Your browser does not support HTML5 video.\n    </video> -->\n    \n  \n    \n        <!-- <input [(ngModel)]=\"moviePage\" type=\"number\">\n        {{ moviesResults.page }}\n        <button (click)=more(moviePage) class=\"btn btn-success\">More! </button>\n        {{ moviesResults.total_pages }} -->\n    \n    "

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(moviesService) {
        this.moviesService = moviesService;
        this.similarMovieResults = [];
        this.moviesResults = {};
        this.moviesResultsState = false;
        this.movieState = false;
        this.oneMovie = {};
        this.noMovies = true;
    }
    MoviesComponent.prototype.getPopularMovies = function () {
        var _this = this;
        this.moviesResultsState = true;
        this.moviesResults = {};
        this.moviesService.getPopular(1)
            .subscribe(function (movies) {
            // this.newPage = movies.page
            _this.noMovies = false;
            _this.moviesResults = movies;
            console.log(movies);
        });
    };
    MoviesComponent.prototype.searchMovie = function (x) {
        var _this = this;
        this.noMovies = true;
        console.log(x, "THIS IS THE MOVIE");
        this.moviesResults = {};
        this.moviesResultsState = true;
        this.movieState = false;
        this.moviesService.findMovie(x)
            .subscribe(function (movies) {
            if (movies.total_results == 0) {
                console.log('No Movies found');
            }
            _this.noMovies = false;
            _this.moviesResults = movies;
            console.log(movies);
        });
        this.movieName = '';
    };
    MoviesComponent.prototype.more = function (moviePage) {
        var _this = this;
        console.log(moviePage);
        // this.moviesService.getPopular()
        this.moviesService.getPopular(moviePage)
            .subscribe(function (movies) {
            _this.moviesResults = movies;
            console.log(movies, "Moveis on page " + moviePage);
        });
    };
    // onActivate(e, scrollContainer) {
    //   scrollContainer .scrollable._elementRef.nativeElement.scrollTop = 0
    // }
    // singleMovie(movieID) {
    //   this.moviesService.setMovieId(movieID)
    //   this.moviesResults = {};
    //   this.moviesResultsState = false
    //   this.movieState = true;
    //   this.moviesService.getOneMovie(movieID)
    //   .subscribe((movie) => {
    //     this.moviesResults = {};
    //     this.oneMovie = movie;
    //     console.log(movie);
    //   });
    //   this.moviesService.getSimilar(movieID)
    //   .subscribe((movies) => {
    //     this.similarMovieResults = movies
    //     console.log(movies, "Similar movies");
    //   });
    // }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getPopularMovies();
    };
    MoviesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesService = /** @class */ (function () {
    // url = 'https://tmdb-api-ang.herokuapp.com';
    function MoviesService(http) {
        this.http = http;
        this.url = 'http://localhost:5555';
    }
    // Get popular movies on TMDB
    // getPopular(): Observable<any>{
    //   return this.http.get<any>(`${this.url}/movies/popular`);
    // }
    MoviesService.prototype.sendMovieId = function () {
        console.log('I Got the sent ID');
    };
    MoviesService.prototype.getPopular = function (req) {
        console.log(req, "from service");
        var backendString = this.url + "/movies/popular";
        if (!req && typeof (req) == undefined) {
            return this.http.get(backendString);
        }
        else {
            return this.http.get(backendString + '?page=' + req);
        }
    };
    // Search for movies based on search term
    MoviesService.prototype.findMovie = function (movieName) {
        return this.http.get(this.url + "/movies/search/" + movieName);
    };
    // Get full details of one movie
    MoviesService.prototype.getOneMovie = function (movieId) {
        return this.http.get(this.url + "/movies/movie/" + movieId);
    };
    // Get similar movies based on the id of another movie.
    MoviesService.prototype.getSimilar = function (movieId) {
        return this.http.get(this.url + "/movies/movie/similar/" + movieId);
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/single-movie/single-movie.component.css":
/*!*********************************************************!*\
  !*** ./src/app/single-movie/single-movie.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1tb3ZpZS9zaW5nbGUtbW92aWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/single-movie/single-movie.component.html":
/*!**********************************************************!*\
  !*** ./src/app/single-movie/single-movie.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!noMovies\">\n  <img id=\"fullImage\" src='https://image.tmdb.org/t/p/w780/{{ movie?.backdrop_path }}' style=\"width: 100% !important; position: relative;\">\n  <div class=\"top-left\">\n    <p><strong>Title: </strong>{{ movie?.original_title }}</p>\n    <strong>Genre</strong><span *ngFor=\"let genre of movie?.genres\">\n            {{ genre.name }} |\n    </span>\n    <p><strong>Overview: </strong>{{ movie?.overview }}</p>\n    <span><strong>Runtime: </strong>{{ movie?.runtime }} Minutes</span> | <span><strong>Release date: </strong>{{ movie?.release_date | json }}</span>\n    <p><strong>Budget: </strong>{{ movie?.budget | currency: 'USD' }}</p>\n    <p><strong>Revenue: </strong>{{ movie?.revenue | currency: 'USD' }}</p>\n    <p><strong>Tagline: </strong>{{ movie?.tagline }}</p>\n    <p><strong>movie Popularity: </strong>{{ movie?.popularity }}</p>\n    <p><strong>Release date: </strong>{{ movie?.release_date }}</p>\n    <strong>Production companies</strong><span *ngFor=\"let company of movie?.production_companies\">\n        {{ company.name }} |\n    </span>\n  </div>\n</div>\n\n\n<!-- \n<div class=\"container marginTinz\" #scrollContainer *ngIf=\"!noMovies\">\n    <div class=\"row justify-content\">\n      <div class=\"col-md-6 col-sm-12\" >\n          <img src='https://image.tmdb.org/t/p/w780/{{ movie?.backdrop_path }}'/>\n      </div>\n      <div class=\"col-md-6 col-sm-12 desc\">\n        <p><strong>Title: </strong>{{ movie?.original_title }}</p>\n        <strong>Genre</strong><span *ngFor=\"let genre of movie?.genres\">\n                {{ genre.name }} |\n        </span>\n        <p><strong>Overview: </strong>{{ movie?.overview }}</p>\n        <span><strong>Runtime: </strong>{{ movie?.runtime }} Minutes</span> | <span><strong>Release date: </strong>{{ movie?.release_date | json }}</span>\n        <p><strong>Budget: </strong>{{ movie?.budget | currency: 'USD' }}</p>\n        <p><strong>Revenue: </strong>{{ movie?.revenue | currency: 'USD' }}</p>\n        <p><strong>Tagline: </strong>{{ movie?.tagline }}</p>\n        <p><strong>movie Popularity: </strong>{{ movie?.popularity }}</p>\n        <p><strong>Release date: </strong>{{ movie?.release_date }}</p>\n        <strong>Production companies</strong><span *ngFor=\"let company of movie?.production_companies\">\n            {{ company.name }} |\n        </span>\n      </div>\n    </div>\n</div> -->\n\n\n<div *ngIf=\"noMovies\" id=\"loader\" class=\"loader2\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col align-self-center\">\n          <img src=\"../../assets/lg.azure-round-loader.gif\">\n        </div>\n      </div>\n    </div>\n  </div> \n\n\n<div class=\"blog\" >\n    <div class=\"container\">\n      <div *ngIf=\"!noMovies\" class=\"row\">\n        <div *ngFor=\"let movie of similarMovies\"\n        class=\"col-lg-3 col-md-4 col-sm-12\">\n        <a routerLink=\"/movie/{{movie.id}}\">\n          <div class=\"card\">\n           <div class=\"card-img\">\n            <img src=\"https://image.tmdb.org/t/p/w300/{{ movie.poster_path }}\" class=\"img-fluid\">\n           </div>\n           <div class=\"card-body\">\n              <h4 class=\"card-title\">{{ movie.title }}</h4>\n            <p class=\"card-text d-inline-block text-truncate\" style=\"max-width: 200px;\">\n              {{ movie.overview }}\n            </p>\n           </div>\n           <div class=\"card-footer\">\n            <p class=\"card-text\">{{ movie.release_date }}</p>\n            <i style='content:\"\\e005\";'></i>\n           </div>\n          </div>\n          </a>\n         </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/single-movie/single-movie.component.ts":
/*!********************************************************!*\
  !*** ./src/app/single-movie/single-movie.component.ts ***!
  \********************************************************/
/*! exports provided: SingleMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleMovieComponent", function() { return SingleMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/services/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleMovieComponent = /** @class */ (function () {
    function SingleMovieComponent(moviesService, route, router) {
        var _this = this;
        this.moviesService = moviesService;
        this.route = route;
        this.router = router;
        this.noMovies = true;
        this.movie = {};
        this.similarMovies = [];
        // This section is to handle the loading of a single movie from the similar movies displayed
        // The way the component is initially designed, it loads the single movie from the main display
        // on Init, but does not load the single movie while in the single Movie component display
        // These event handlers take the routes and parse it to get the movie Id and then call the 
        // getSingleMovie function.
        // This is a hack and a more suitable way would be researched to solve for this.
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                var routerUrl = event.url;
                var movieId = parseInt(routerUrl.substr(routerUrl.lastIndexOf('/') + 1), 10);
                _this.noMovies = true;
                _this.getSingleMovie(movieId);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.noMovies = false;
                window.scrollTo(0, 0);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                console.log(event.error);
            }
        });
    }
    SingleMovieComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params.id;
        this.getSingleMovie(parseInt(id, 10));
        console.log(id, "ngOnInit");
        //   this.router.events.subscribe((evt) => {
        //     if (!(evt instanceof NavigationEnd)) {
        //         return;
        //     }
        //     window.scrollTo(0, 0)
        // });
    };
    SingleMovieComponent.prototype.getSingleMovie = function (movieId) {
        var _this = this;
        this.movie = '';
        this.moviesService.getOneMovie(movieId)
            .subscribe(function (movie) {
            _this.noMovies = false;
            _this.movie = movie;
        });
        this.moviesService.getSimilar(movieId)
            .subscribe(function (movies) {
            // console.log('SIMILAR______________________', movies)
            _this.similarMovies = movies.results;
            console.log(_this.similarMovies, "************************************************");
        });
    };
    SingleMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-movie',
            template: __webpack_require__(/*! ./single-movie.component.html */ "./src/app/single-movie/single-movie.component.html"),
            styles: [__webpack_require__(/*! ./single-movie.component.css */ "./src/app/single-movie/single-movie.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SingleMovieComponent);
    return SingleMovieComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andela/webApps/tmdb-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map