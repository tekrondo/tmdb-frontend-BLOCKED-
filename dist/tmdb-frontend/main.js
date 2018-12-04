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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "[ng\\:cloak],\n[ng-cloak],\n[data-ng-cloak],\n[x-ng-cloak],\n.ng-cloak,\n.x-ng-cloak {\n  display: none !important;\n}\n\n.blog{\n  margin: 4em 0;\n  position: relative; \n }\n\n.blog h1{\n  color:#F97300;\n  margin: 2em; \n }\n\n.blog .card{\n  box-shadow: 0 0 20px #ccc;\n }\n\n.blog .card img{\n  width: 100%;\n  height: 100%;\n }\n\n.blog .card-title{\n  color:#F97300;\n   \n }\n\n.blog .card-body{\n  padding: 1em;\n }\n\n.card{\n  margin-bottom: 8%;\n }\n\np .card-text{\n  overflow: hidden;\n }\n\n.imgHeight{\n   height: 540px !important;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkI7O0FBQ0Q7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaOztBQUNEO0VBQ0MsMEJBQTBCO0VBQzFCOztBQUNEO0VBQ0MsWUFBWTtFQUNaLGFBQWE7RUFDYjs7QUFDRDtFQUNDLGNBQWM7O0VBRWQ7O0FBQ0Q7RUFDQyxhQUFhO0VBQ2I7O0FBQ0Q7RUFDQyxrQkFBa0I7RUFDbEI7O0FBRUQ7RUFDQyxpQkFBaUI7RUFDakI7O0FBRUQ7R0FDRSx5QkFBeUI7RUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuZ1xcOmNsb2FrXSxcbltuZy1jbG9ha10sXG5bZGF0YS1uZy1jbG9ha10sXG5beC1uZy1jbG9ha10sXG4ubmctY2xvYWssXG4ueC1uZy1jbG9hayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJsb2d7XG4gIG1hcmdpbjogNGVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gfVxuIC5ibG9nIGgxe1xuICBjb2xvcjojRjk3MzAwO1xuICBtYXJnaW46IDJlbTsgXG4gfVxuIC5ibG9nIC5jYXJke1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xuIH1cbiAuYmxvZyAuY2FyZCBpbWd7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gfVxuIC5ibG9nIC5jYXJkLXRpdGxle1xuICBjb2xvcjojRjk3MzAwO1xuICAgXG4gfVxuIC5ibG9nIC5jYXJkLWJvZHl7XG4gIHBhZGRpbmc6IDFlbTtcbiB9XG4gLmNhcmR7XG4gIG1hcmdpbi1ib3R0b206IDglO1xuIH1cblxuIHAgLmNhcmQtdGV4dHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiB9XG5cbiAuaW1nSGVpZ2h0e1xuICAgaGVpZ2h0OiA1NDBweCAhaW1wb3J0YW50O1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"d-flex justify-content-center fixed-top navbar-brand \" style=\"margin-top: 2.5px\">\n      <input type=\"text\" placeholder=\"What's the word?\" [(ngModel)]=\"movieName\">\n      <button (click)=\"searchMovie(movieName)\" class=\"btn btn-primary\"> Find the Movie!</button>\n  </div>\n\n  <!-- <input [(ngModel)]=\"moviePage\" type=\"number\">\n  {{ moviesResults.page }}\n  <button (click)=more(moviePage) class=\"btn btn-success\">More! </button>\n  {{ moviesResults.total_pages }} -->\n<div class=\"blog\">\n  <div class=\"container\">\n    <div *ngIf=\"moviesResultsState\" class=\"row\">\n      <div *ngFor=\"let movie of moviesResults.results\" \n      (click)=\"singleMovie(movie.id)\"\n      class=\"col-md-6 col-lg-4 col-sm-12\">\n        <div class=\"card\">\n         <div class=\"card-img\">\n          <img src=\"http://image.tmdb.org/t/p/w300/{{ movie.poster_path }}\" class=\"img-fluid\">\n         </div>\n         <div class=\"card-body\">\n            <h4 class=\"card-title\">{{ movie.title }}</h4>\n          <p class=\"card-text d-inline-block text-truncate\" style=\"max-width: 320px;\">\n            {{ movie.overview }}\n          </p>\n         </div>\n         <div class=\"card-footer\">\n          <p class=\"card-text\">{{ movie.release_date }}</p>\n         </div>\n        </div>\n       </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n    <!-- <div *ngIf=\"moviesResultsState\"\n        class=\"row marginTinz\">\n        <div \n          *ngFor=\"let movie of moviesResults.results\" \n          (click)=\"singleMovie(movie.id)\"\n          class=\"col-lg-3 col-md-4 col-sm-6\">\n          <img class=\"imgClass\" src='http://image.tmdb.org/t/p/w300/{{ movie.poster_path }}'/>\n          <div class=\"fixed_Height\">          \n            <p><strong>Title:</strong> {{ movie.title }}</p>\n            <p><strong>Total Votes:</strong> {{ movie.vote_count }}</p>\n            <p><strong>Vote average:</strong> {{ movie.vote_average }}</p>\n            <p><strong>Movie Popularity:</strong> {{ movie.popularity }}</p>\n            <p><strong>Overview:</strong> {{ movie.overview }}</p>\n            <p><strong>Release date:</strong> {{ movie.release_date }}</p>\n          </div>\n\n        </div>\n      </div> -->\n  \n  <div class=\"container marginTinz\" #scrollContainer>\n    <!-- <div>\n        <button class=\"btn btn-primary float-right\" (click)=\"goBack($event)\">Back</button>\n    </div> -->\n      <div *ngIf=\"movieState\" class=\"row justify-content\">\n        <div class=\"col\" >\n            <img src='http://image.tmdb.org/t/p/w780/{{ oneMovie.backdrop_path }}'/>\n        </div>\n        <div class=\"col-md-2\">\n          <p><strong>Title: </strong>{{ oneMovie.original_title }}</p>\n          <strong>Genre</strong><span *ngFor=\"let genre of oneMovie.genres\">\n                  {{ genre.name }} |\n          </span>\n          <p><strong>Overview: </strong>{{ oneMovie.overview }}</p>\n          <span><strong>Runtime: </strong>{{ oneMovie.runtime }} Minutes</span> | <span><strong>Release date: </strong>{{ oneMovie.release_date | json }}</span>\n          <p><strong>Budget: </strong>{{ oneMovie.budget | currency: 'USD' }}</p>\n          <p><strong>Revenue: </strong>{{ oneMovie.revenue | currency: 'USD' }}</p>\n          <p><strong>Tagline: </strong>{{ oneMovie.tagline }}</p>\n          <p><strong>Movie Popularity: </strong>{{ oneMovie.popularity }}</p>\n          <p><strong>Release date: </strong>{{ oneMovie.release_date }}</p>\n          <strong>Production companies</strong><span *ngFor=\"let company of oneMovie.production_companies\">\n              {{ company.name }} |\n          </span>\n        </div>\n      </div>\n  </div>\n\n  \n\n</div>\n  <div \n  *ngIf=\"movieState\" class=\"row\">\n        <div *ngFor=\"let movie of similarMovieResults.results\" (click)=\"singleMovie(movie.id)\"\n        class=\"col-lg-3 col-md-4 col-sm-6\">\n          <img src='http://image.tmdb.org/t/p/w300/{{ movie.poster_path }}'/>\n          <div>\n            <p *ngIf=\"movie.title\"><strong>Title:</strong> {{ movie.title }}</p>\n            <p *ngIf=\"movie.vote_count\"><strong>Total Votes:</strong> {{ movie.vote_count }}</p>\n            <p *ngIf=\"movie.vote_average\"><strong>Vote average:</strong> {{ movie.vote_average }}</p>\n            <p *ngIf=\"movie.popularity\"><strong>Movie Popularity:</strong> {{ movie.popularity }}</p>\n            <p *ngIf=\"movie.overview\"><strong>Overview:</strong> {{ movie.overview }}</p>\n            <p *ngIf=\"movie.release_date\"><strong>Release date:</strong> {{ movie.release_date }}</p>\n          </div>\n      </div>\n  </div>\n"

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
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(moviesService, location) {
        this.moviesService = moviesService;
        this.location = location;
        this.title = 'tmdb-frontend';
        this.similarMovieResults = [];
        // goBack(e) {
        //   event.preventDefault();
        //   this.location.back();
        //   console.log("Went back One page");
        // }
        // similar = this.similarMovieResults.results;
        this.moviesResults = {};
        this.moviesResultsState = false;
        this.movieState = false;
        this.oneMovie = {};
    }
    AppComponent.prototype.getPopularMovies = function () {
        var _this = this;
        this.moviesResultsState = true;
        this.moviesResults = {};
        this.moviesService.getPopular(1)
            .subscribe(function (movies) {
            // this.newPage = movies.page
            _this.moviesResults = movies;
            console.log(movies);
        });
    };
    AppComponent.prototype.searchMovie = function (x) {
        var _this = this;
        console.log(x, "THIS IS THE MOVIE");
        this.moviesResults = {};
        this.moviesResultsState = true;
        this.movieState = false;
        this.moviesService.findMovie(x)
            .subscribe(function (movies) {
            _this.moviesResults = movies;
            console.log(movies);
        });
        // this.movieName = '';
    };
    // more(moviePage: number){
    //   console.log(moviePage)
    //   // this.moviesService.getPopular()
    //   this.moviesService.getPopular(moviePage)
    //   .subscribe((movies) =>{
    //     this.moviesResults = movies;
    //     console.log(movies, "Moveis on page " + moviePage);
    //   });
    // }
    // onActivate(e, scrollContainer) {
    //   scrollContainer .scrollable._elementRef.nativeElement.scrollTop = 0
    // }
    AppComponent.prototype.singleMovie = function (movieID) {
        var _this = this;
        this.moviesResults = {};
        this.moviesResultsState = false;
        this.movieState = true;
        this.moviesService.getOneMovie(movieID)
            .subscribe(function (movie) {
            _this.moviesResults = {};
            _this.oneMovie = movie;
            console.log(movie);
        });
        this.moviesService.getSimilar(movieID)
            .subscribe(function (movies) {
            _this.similarMovieResults = movies;
            console.log(movies, "Similar movies");
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getPopularMovies();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies.service */ "./src/app/movies.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            providers: [_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movies.service.ts":
/*!***********************************!*\
  !*** ./src/app/movies.service.ts ***!
  \***********************************/
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
    function MoviesService(http) {
        this.http = http;
        // url = 'http://localhost:5555';
        this.url = 'https://tmdb-api-ang.herokuapp.com';
    }
    // Get popular movies on TMDB
    // getPopular(): Observable<any>{
    //   return this.http.get<any>(`${this.url}/movies/popular`);
    // }
    MoviesService.prototype.getPopular = function (req) {
        console.log(req, "from service");
        var backendString = this.url + "/movies/popular";
        if (!req) {
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