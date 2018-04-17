webpackJsonp(["main"],{

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"renovate_software","version":"1.0.0","license":"Renovate Software","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"npm run lint && ng test --single-run","lint":"ng lint","e2e":"ng e2e","watch":"ng test --browsers ChromeHeadless --reporters spec --sourcemaps=false","build:prod":"ng build --target production --build-optimizer --vendor-chunk --stats-json","build:travisci":"ng build --target production --build-optimizer --vendor-chunk --deploy-url /angular-ngrx-material-starter/ --base-href /angular-ngrx-material-starter","clean":"rm -rf ./dist/","server":"cd dist && http-server","prod":"npm run clean && npm run build:prod && npm run server","ci":"npm run clean && npm run prettier:ci && ng lint && ng test --browser ChromeTravisCi --single-run --reporters spec --environment prod && ng e2e && npm run build:travisci","release":"standard-version && git push --follow-tags origin master && npm publish","prettier":"prettier --single-quote --parser typescript --write \"./src/**/*.ts\" && prettier --single-quote --parser scss --write \"./src/**/*.scss\"","prettier:ci":"prettier --single-quote --parser typescript --list-different \"./src/**/*.ts\" && prettier --single-quote --parser scss --list-different \"./src/**/*.scss\"","analyze":"npm run clean && npm run build:prod && webpack-bundle-analyzer ./dist/stats.json"},"private":true,"dependencies":{"@angular/animations":"^5.1.0","@angular/cdk":"^5.0.0","@angular/common":"^5.1.0","@angular/compiler":"^5.1.0","@angular/core":"^5.1.0","@angular/forms":"^5.1.0","@angular/http":"^5.1.0","@angular/material":"^5.0.0","@angular/platform-browser":"^5.1.0","@angular/platform-browser-dynamic":"^5.1.0","@angular/router":"^5.1.0","@ngrx/effects":"^5.0.1","@ngrx/store":"^5.0.0","bootstrap":"^4.0.0","core-js":"^2.4.1","font-awesome":"^4.7.0","rxjs":"^5.5.0","uuid":"^3.1.0","web-animations-js":"^2.2.5","zone.js":"0.8.12"},"devDependencies":{"@angular/cli":"1.7.4","@angular/compiler-cli":"^5.1.0","@types/jasmine":"2.8.3","@types/node":"~9.4.0","codelyzer":"~4.1.0","enhanced-resolve":"3.4.1","jasmine-core":"~2.99.1","jasmine-spec-reporter":"~4.2.1","karma":"~2.0.0","karma-chrome-launcher":"~2.2.0","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^1.3.0","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","karma-phantomjs-launcher":"^1.0.4","karma-spec-reporter":"0.0.31","prettier":"^1.7.4","protractor":"~5.3.0","standard-version":"^4.2.0","ts-node":"~4.1.0","tslint":"~5.9.1","typescript":"~2.4.0","webpack-bundle-analyzer":"^2.9.0"}}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/examples/examples.module": [
		"./src/app/examples/examples.module.ts",
		"examples.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("./src/app/settings/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_2__settings__["b" /* SettingsComponent */],
        data: {
            title: 'Settings'
        }
    },
    {
        path: 'examples',
        loadChildren: 'app/examples/examples.module#ExamplesModule'
    },
    {
        path: '**',
        redirectTo: 'about'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            // useHash supports github.io demo page, remove in your app
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n  <mat-sidenav #sidenav mode=\"push\">\n    <div class=\"branding\">\n      <img [src]=\"logo\" />\n      <span>Angular Starter</span>\n    </div>\n    <mat-nav-list>\n      <a mat-list-item *ngFor=\"let item of navigationSideMenu\" (click)=\"sidenav.close()\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\n        {{item.label}}\n      </a>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <div class=\"wrapper\">\n\n    <div class=\"toolbar\">\n\n      <mat-toolbar color=\"primary\">\n\n        <button mat-icon-button class=\"d-md-none\" (click)=\"sidenav.open()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n\n        <span routerLink=\"\" class=\"branding spacer d-inline d-sm-none text-center\">\n          <img [src]=\"logo\" />\n        </span>\n        <span routerLink=\"\" class=\"branding spacer d-none d-sm-inline d-md-none text-center\">\n          <img [src]=\"logo\" /> {{company}}\n        </span>\n        <span routerLink=\"\" class=\"branding spacer d-none d-md-inline\">\n          <img [src]=\"logo\" /> {{company}}\n        </span>\n\n        <span class=\"d-none d-md-inline\">\n          <button mat-button class=\"nav-button\" *ngFor=\"let item of navigation\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\n            {{item.label}}\n          </button>\n        </span>\n\n        <button *ngIf=\"!isAuthenticated\" mat-button class=\"sign-in-button\" (click)=\"onLoginClick()\">\n          Sign in\n        </button>\n\n        <button *ngIf=\"isAuthenticated\" mat-icon-button [matMenuTriggerFor]=\"toolbarUserMenu\">\n          <mat-icon>person</mat-icon>\n        </button>\n\n        <mat-menu #toolbarUserMenu=\"matMenu\">\n          <button mat-menu-item (click)=\"onLogoutClick()\">\n            <mat-icon>power_settings_new</mat-icon>\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n\n        <button mat-icon-button routerLink=\"settings\" class=\"d-none d-sm-inline\">\n          <mat-icon>settings</mat-icon>\n        </button>\n\n        <a matTooltip=\"Project Github Repository\" matdTooltipPosition=\"before\" mat-icon-button class=\"link\" href=\"https://github.com/tomastrajan/angular-ngrx-material-starter\"\n          target=\"_blank\">\n          <i class=\"fa fa-github fa-2x\"></i>\n        </a>\n\n      </mat-toolbar>\n    </div>\n\n    <div class=\"content\" [@routerTransition]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\n      <router-outlet #o=\"outlet\"></router-outlet>\n    </div>\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 links\">\n          <a href=\"https://www.github.com/tomastrajan\" target=\"_blank\">\n            <i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"></i>\n            <span>Github</span>\n          </a>\n          <a href=\"https://www.medium.com/@tomastrajan\" target=\"_blank\">\n            <i class=\"fa fa-medium fa-2x\" aria-hidden=\"true\"></i>\n            <span>Medium</span>\n          </a>\n          <a href=\"https://www.twitter.com/tomastrajan\" target=\"_blank\">\n            <i class=\"fa fa-twitter fa-2x\" aria-hidden=\"true\"></i>\n            <span>Twitter</span>\n          </a>\n          <a href=\"https://www.youtube.com/channel/UC7XgRHIVoqnh3U5Vmly9ofQ\" target=\"_blank\">\n            <i class=\"fa fa-youtube fa-2x\" aria-hidden=\"true\"></i>\n            <span>Youtube</span>\n          </a>\n          <a href=\"https://www.instagram.com/tomastrajan\" target=\"_blank\">\n            <i class=\"fa fa-instagram fa-2x\" aria-hidden=\"true\"></i>\n            <span>Instagram</span>\n          </a>\n          <a href=\"https://www.slides.com/tomastrajan\" target=\"_blank\">\n            <i class=\"fa fa-desktop fa-2x\" aria-hidden=\"true\"></i>\n            <span>Slides</span>\n          </a>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 signature\">\n          Copyright &#169; {{year}} - Renovate Software\n          <br class=\"d-block d-sm-none\">\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\nmat-sidenav-container {\n  height: 100%; }\n\nmat-sidenav-container .wrapper {\n    z-index: -2;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: relative;\n    overflow-y: auto; }\n\nmat-sidenav-container .wrapper .toolbar {\n      position: fixed;\n      width: 100%;\n      z-index: 1;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto; }\n\nmat-sidenav-container .wrapper .toolbar .nav-button {\n        margin: 0 10px 0 0; }\n\nmat-sidenav-container .wrapper .toolbar .branding {\n        cursor: pointer; }\n\nmat-sidenav-container .wrapper .toolbar .sign-in-button {\n        line-height: 35px;\n        margin-right: 10px; }\n\nmat-sidenav-container .wrapper .toolbar .spacer {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 1 auto;\n                flex: 1 1 auto; }\n\n@media (max-width: 992px) {\n        mat-sidenav-container .wrapper .toolbar .nav-button {\n          min-width: 0;\n          padding: 0 10px; }\n        mat-sidenav-container .wrapper .toolbar .sign-in-button {\n          min-width: 0;\n          padding: 0 10px;\n          margin: 0 5px 0 0; } }\n\nmat-sidenav-container .wrapper .content {\n      padding-top: 64px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      position: relative; }\n\nmat-sidenav-container .wrapper .footer {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      padding: 0 15px;\n      text-align: center;\n      z-index: 1; }\n\nmat-sidenav-container .wrapper .footer .row {\n        padding: 10px 0; }\n\nmat-sidenav-container .wrapper .footer .row .links a {\n          -webkit-transition: padding 0.5s;\n          transition: padding 0.5s;\n          display: inline-block;\n          padding: 20px 5px; }\n\nmat-sidenav-container .wrapper .footer .row .links a:hover {\n            text-decoration: none; }\n\nmat-sidenav-container .wrapper .footer .row .links a span {\n            display: inline-block;\n            width: 70px;\n            padding: 0 0 0 5px;\n            overflow: hidden;\n            text-align: left;\n            white-space: nowrap;\n            -webkit-transition: width 0.5s;\n            transition: width 0.5s; }\n\n@media (max-width: 768px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px; }\n            mat-sidenav-container .wrapper .footer .row .links a span {\n              width: 0;\n              padding: 0; } }\n\n@media (max-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px 3px; } }\n\n@media (min-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .signature {\n            position: relative; }\n            mat-sidenav-container .wrapper .footer .row .signature a {\n              position: absolute;\n              right: 15px; } }\n\nmat-sidenav {\n  width: 250px; }\n\nmat-sidenav .branding {\n    height: 64px;\n    padding: 8px 10px;\n    font-size: 20px;\n    font-weight: 500; }\n\nmat-sidenav .branding img {\n      margin: 0 10px 0 0; }\n\nmat-sidenav .branding span {\n      position: relative;\n      top: 3px; }\n\nmat-sidenav .mat-nav-list {\n    padding-top: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings__ = __webpack_require__("./src/app/settings/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppComponent = (function () {
    function AppComponent(overlayContainer, store, router, titleService) {
        this.overlayContainer = overlayContainer;
        this.store = store;
        this.router = router;
        this.titleService = titleService;
        this.unsubscribe$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.isProd = __WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].production;
        this.envName = __WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].envName;
        this.company = __WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].company;
        this.version = __WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].versions.app;
        this.year = new Date().getFullYear();
        this.logo = __webpack_require__("./src/assets/logo.png");
        this.navigation = [
            { link: 'home', label: 'Home' },
            { link: 'tutorials', label: 'Tutorials' },
            { link: 'examples', label: 'Interview Q/A' },
            { link: 'portfolio', label: 'Portfolio' }
        ];
        this.navigationSideMenu = this.navigation.concat([
            { link: 'settings', label: 'Settings' }
        ]);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store
            .select(__WEBPACK_IMPORTED_MODULE_10__settings__["d" /* selectorSettings */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_takeUntil__["a" /* takeUntil */])(this.unsubscribe$))
            .subscribe(function (settings) {
            var theme = settings.theme, autoNightMode = settings.autoNightMode;
            var hours = new Date().getHours();
            var effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
                ? __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* NIGHT_MODE_THEME */]
                : theme).toLowerCase();
            _this.componentCssClass = effectiveTheme;
            var classList = _this.overlayContainer.getContainerElement().classList;
            var toRemove = Array.from(classList).filter(function (item) {
                return item.includes('-theme');
            });
            classList.remove.apply(classList, toRemove);
            classList.add(effectiveTheme);
        });
        this.store
            .select(__WEBPACK_IMPORTED_MODULE_8__app_core__["g" /* selectorAuth */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_takeUntil__["a" /* takeUntil */])(this.unsubscribe$))
            .subscribe(function (auth) { return (_this.isAuthenticated = auth.isAuthenticated); });
        this.router.events
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_takeUntil__["a" /* takeUntil */])(this.unsubscribe$), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_filter__["a" /* filter */])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivationEnd */]; }))
            .subscribe(function (event) {
            var lastChild = event.snapshot;
            while (lastChild.children.length) {
                lastChild = lastChild.children[0];
            }
            var title = lastChild.data.title;
            _this.titleService.setTitle(title ? title + " - " + __WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].appName : __WEBPACK_IMPORTED_MODULE_9__env_environment__["a" /* environment */].appName);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    AppComponent.prototype.onLoginClick = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__app_core__["b" /* ActionAuthLogin */]());
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__app_core__["c" /* ActionAuthLogout */]());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["y" /* HostBinding */])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "componentCssClass", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'anms-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_8__app_core__["f" /* routerTransition */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["d" /* OverlayContainer */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["c" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* Title */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./src/app/settings/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static__ = __webpack_require__("./src/app/static/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            imports: [
                // angular
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                // core & shared
                __WEBPACK_IMPORTED_MODULE_4__app_core__["d" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_shared__["a" /* SharedModule */],
                // features
                __WEBPACK_IMPORTED_MODULE_6__static__["a" /* StaticModule */],
                __WEBPACK_IMPORTED_MODULE_5__settings__["c" /* SettingsModule */],
                // app
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/animations/router.transition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANIMATE_ON_ROUTE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var ANIMATE_ON_ROUTE_ENTER = 'route-enter-staggered';
var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('* <=> *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter > *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0, position: 'fixed' }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter .' + ANIMATE_ON_ROUTE_ENTER, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ opacity: 0 }), {
            optional: true
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* sequence */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':leave > *', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(0%)', opacity: 1 }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(-3%)', opacity: 0 })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ position: 'fixed' })
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter > *', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({
                    transform: 'translateY(-3%)',
                    opacity: 0,
                    position: 'static'
                }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(0%)', opacity: 1 }))
            ], { optional: true })
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* query */])(':enter .' + ANIMATE_ON_ROUTE_ENTER, Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* stagger */])(100, [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(15%)', opacity: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* style */])({ transform: 'translateY(0%)', opacity: 1 }))
        ]), { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/core/auth/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_local_storage_service__ = __webpack_require__("./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_reducer__ = __webpack_require__("./src/app/core/auth/auth.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthEffects = (function () {
    function AuthEffects(actions$, localStorageService) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
    }
    AuthEffects.prototype.login = function () {
        var _this = this;
        return this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__auth_reducer__["d" /* AuthActionTypes */].LOGIN)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (action) {
            return _this.localStorageService.setItem(__WEBPACK_IMPORTED_MODULE_5__auth_reducer__["a" /* AUTH_KEY */], { isAuthenticated: true });
        }));
    };
    AuthEffects.prototype.logout = function () {
        var _this = this;
        return this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__auth_reducer__["d" /* AuthActionTypes */].LOGOUT)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (action) {
            return _this.localStorageService.setItem(__WEBPACK_IMPORTED_MODULE_5__auth_reducer__["a" /* AUTH_KEY */], { isAuthenticated: false });
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], AuthEffects.prototype, "login", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], AuthEffects.prototype, "logout", null);
    AuthEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__local_storage_local_storage_service__["a" /* LocalStorageService */]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionAuthLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ActionAuthLogout; });
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return selectorAuth; });
/* harmony export (immutable) */ __webpack_exports__["e"] = authReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var AUTH_KEY = 'AUTH';
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login";
    AuthActionTypes["LOGOUT"] = "[Auth] Logout";
})(AuthActionTypes || (AuthActionTypes = {}));
var ActionAuthLogin = (function () {
    function ActionAuthLogin() {
        this.type = AuthActionTypes.LOGIN;
    }
    return ActionAuthLogin;
}());

var ActionAuthLogout = (function () {
    function ActionAuthLogout() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return ActionAuthLogout;
}());

var initialState = {
    isAuthenticated: false
};
var selectorAuth = function (state) { return state.auth; };
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return __assign({}, state, { isAuthenticated: true });
        case AuthActionTypes.LOGOUT:
            return __assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export metaReducers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__meta_reducers_debug_reducer__ = __webpack_require__("./src/app/core/meta-reducers/debug.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meta_reducers_init_state_from_local_storage_reducer__ = __webpack_require__("./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__local_storage_local_storage_service__ = __webpack_require__("./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_reducer__ = __webpack_require__("./src/app/core/auth/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_effects__ = __webpack_require__("./src/app/core/auth/auth.effects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var metaReducers = [__WEBPACK_IMPORTED_MODULE_7__meta_reducers_init_state_from_local_storage_reducer__["a" /* initStateFromLocalStorage */]];
if (!__WEBPACK_IMPORTED_MODULE_5__env_environment__["a" /* environment */].production) {
    metaReducers.unshift(__WEBPACK_IMPORTED_MODULE_6__meta_reducers_debug_reducer__["a" /* debug */]);
}
var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                // angular
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                // ngrx
                __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["e" /* StoreModule */].forRoot({
                    auth: __WEBPACK_IMPORTED_MODULE_9__auth_auth_reducer__["e" /* authReducer */]
                }, { metaReducers: metaReducers }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_10__auth_auth_effects__["a" /* AuthEffects */]])
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_8__local_storage_local_storage_service__["a" /* LocalStorageService */]]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__local_storage_local_storage_service__ = __webpack_require__("./src/app/core/local-storage/local-storage.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__local_storage_local_storage_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_router_transition__ = __webpack_require__("./src/app/core/animations/router.transition.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__animations_router_transition__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__animations_router_transition__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_reducer__ = __webpack_require__("./src/app/core/auth/auth.reducer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_auth_reducer__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_auth_reducer__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_auth_reducer__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__core_module__["a"]; });






/***/ }),

/***/ "./src/app/core/local-storage/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var APP_PREFIX = 'ANMS-';
var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem("" + APP_PREFIX + key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem("" + APP_PREFIX + key));
    };
    LocalStorageService.loadInitialState = function () {
        return Object.keys(localStorage).reduce(function (state, storageKey) {
            if (storageKey.includes(APP_PREFIX)) {
                state = state || {};
                var stateKey_1 = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.');
                var currentStateRef_1 = state;
                stateKey_1.forEach(function (key, index) {
                    if (index === stateKey_1.length - 1) {
                        currentStateRef_1[key] = JSON.parse(localStorage.getItem(storageKey));
                        return;
                    }
                    currentStateRef_1[key] = currentStateRef_1[key] || {};
                    currentStateRef_1 = currentStateRef_1[key];
                });
            }
            return state;
        }, undefined);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/core/meta-reducers/debug.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debug;
function debug(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        console.log("[DEBUG] action: " + action.type, {
            payload: action.payload,
            oldState: state,
            newState: newState
        });
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initStateFromLocalStorage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__local_storage_local_storage_service__ = __webpack_require__("./src/app/core/local-storage/local-storage.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        if ([__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* INIT */].toString(), __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["g" /* UPDATE */].toString()].includes(action.type)) {
            return __assign({}, newState, __WEBPACK_IMPORTED_MODULE_1__local_storage_local_storage_service__["a" /* LocalStorageService */].loadInitialState());
        }
        return newState;
    };
}


/***/ }),

/***/ "./src/app/settings/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_module__ = __webpack_require__("./src/app/settings/settings.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__settings_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_reducer__ = __webpack_require__("./src/app/settings/settings.reducer.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_reducer__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_reducer__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_effects__ = __webpack_require__("./src/app/settings/settings.effects.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("./src/app/settings/settings/settings.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a"]; });






/***/ }),

/***/ "./src/app/settings/settings.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_reducer__ = __webpack_require__("./src/app/settings/settings.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsEffects = (function () {
    function SettingsEffects(actions$, localStorageService) {
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
    }
    SettingsEffects.prototype.persistSettings = function () {
        var _this = this;
        return this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_5__settings_reducer__["f" /* SettingsActionTypes */].PERSIST)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_tap__["a" /* tap */])(function (action) {
            return _this.localStorageService.setItem(__WEBPACK_IMPORTED_MODULE_5__settings_reducer__["e" /* SETTINGS_KEY */], action.payload.settings);
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], SettingsEffects.prototype, "persistSettings", null);
    SettingsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_4__app_core__["e" /* LocalStorageService */]])
    ], SettingsEffects);
    return SettingsEffects;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_reducer__ = __webpack_require__("./src/app/settings/settings.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_effects__ = __webpack_require__("./src/app/settings/settings.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_component__ = __webpack_require__("./src/app/settings/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["e" /* StoreModule */].forFeature('settings', __WEBPACK_IMPORTED_MODULE_4__settings_reducer__["h" /* settingsReducer */]),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_5__settings_effects__["a" /* SettingsEffects */]])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__settings_settings_component__["a" /* SettingsComponent */]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SETTINGS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SettingsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionSettingsChangeTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSettingsChangeAutoNightMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ActionSettingsPersist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NIGHT_MODE_THEME; });
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return selectorSettings; });
/* harmony export (immutable) */ __webpack_exports__["h"] = settingsReducer;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var SETTINGS_KEY = 'SETTINGS';
var SettingsActionTypes;
(function (SettingsActionTypes) {
    SettingsActionTypes["CHANGE_THEME"] = "[Settings] Change Theme";
    SettingsActionTypes["CHANGE_AUTO_NIGHT_AUTO_MODE"] = "[Settings] Change Auto Night Mode";
    SettingsActionTypes["PERSIST"] = "[Settings] Persist";
})(SettingsActionTypes || (SettingsActionTypes = {}));
var ActionSettingsChangeTheme = (function () {
    function ActionSettingsChangeTheme(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_THEME;
    }
    return ActionSettingsChangeTheme;
}());

var ActionSettingsChangeAutoNightMode = (function () {
    function ActionSettingsChangeAutoNightMode(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;
    }
    return ActionSettingsChangeAutoNightMode;
}());

var ActionSettingsPersist = (function () {
    function ActionSettingsPersist(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.PERSIST;
    }
    return ActionSettingsPersist;
}());

var NIGHT_MODE_THEME = 'BLACK-THEME';
var initialState = {
    theme: 'DEFAULT-THEME',
    autoNightMode: false
};
var selectorSettings = function (state) {
    return (state.settings || { theme: '' });
};
function settingsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SettingsActionTypes.CHANGE_THEME:
            return __assign({}, state, { theme: action.payload.theme });
        case SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
            return __assign({}, state, { autoNightMode: action.payload.autoNightMode });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/settings/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\"><h1>Settings</h1></div>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-6 icon-form-field\">\n      <mat-icon color=\"accent\">color_lens</mat-icon>\n      <mat-form-field>\n        <mat-select placeholder=\"Color theme\" name=\"theme\"\n                    [ngModel]=\"settings?.theme\" (change)=\"onThemeSelect($event)\">\n          <mat-option *ngFor=\"let t of themes\" [value]=\"t.value\">\n            {{t.label}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-6 icon-form-field\">\n      <mat-icon color=\"accent\">lightbulb_outline</mat-icon>\n      <mat-form-field>\n        <mat-select placeholder=\"Auto night mode (from 21:00 to 7:00)\"\n                    name=\"auto-night-mode\"\n                    [ngModel]=\"settings?.autoNightMode?.toString()\"\n                    (change)=\"onAutoNightModeSelect($event)\">\n          <mat-option value=\"false\">Off</mat-option>\n          <mat-option value=\"true\">On</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\nh1 {\n  margin: 0 0 20px 0;\n  text-transform: uppercase; }\n\n.icon-form-field {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nmat-icon {\n  margin: 0 10px 0 0; }\n\nmat-form-field {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto; }\n"

/***/ }),

/***/ "./src/app/settings/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_takeUntil__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_reducer__ = __webpack_require__("./src/app/settings/settings.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = (function () {
    function SettingsComponent(store) {
        var _this = this;
        this.store = store;
        this.unsubscribe$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.themes = [
            { value: 'DEFAULT-THEME', label: 'Blue' },
            { value: 'LIGHT-THEME', label: 'Light' },
            { value: 'BLACK-THEME', label: 'Dark' }
        ];
        store
            .select(__WEBPACK_IMPORTED_MODULE_4__settings_reducer__["g" /* selectorSettings */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_takeUntil__["a" /* takeUntil */])(this.unsubscribe$))
            .subscribe(function (settings) { return (_this.settings = settings); });
    }
    SettingsComponent.prototype.ngOnInit = function () { };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    SettingsComponent.prototype.onThemeSelect = function (_a) {
        var theme = _a.value;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__settings_reducer__["b" /* ActionSettingsChangeTheme */]({ theme: theme }));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__settings_reducer__["c" /* ActionSettingsPersist */]({ settings: this.settings }));
    };
    SettingsComponent.prototype.onAutoNightModeSelect = function (_a) {
        var autoNightMode = _a.value;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__settings_reducer__["a" /* ActionSettingsChangeAutoNightMode */]({
            autoNightMode: autoNightMode === 'true'
        }));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__settings_reducer__["c" /* ActionSettingsPersist */]({ settings: this.settings }));
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'anms-settings',
            template: __webpack_require__("./src/app/settings/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"color\" [disabled]=\"disabled\" (click)=\"onClick()\">\n  <mat-icon *ngIf=\"icon\">{{icon}}</mat-icon>\n  <span *ngIf=\"label\">{{label}}</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.scss":
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigInputActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigInputActionComponent = (function () {
    function BigInputActionComponent() {
        this.disabled = false;
        this.icon = '';
        this.label = '';
        this.color = '';
        this.action = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hasFocus = false;
    }
    BigInputActionComponent.prototype.onClick = function () {
        this.action.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "action", void 0);
    BigInputActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'anms-big-input-action',
            template: __webpack_require__("./src/app/shared/big-input/big-input-action.component.html"),
            styles: [__webpack_require__("./src/app/shared/big-input/big-input-action.component.scss")]
        })
    ], BigInputActionComponent);
    return BigInputActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"big-input\" [ngClass]=\"{ 'has-focus': hasFocus }\">\n  <input (focus)=\"hasFocus = true\" (blur)=\"hasFocus = false\"\n         [value]=\"value\"\n         [placeholder]=\"placeholder\"\n         [disabled]=\"disabled\" />\n  <ng-content></ng-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.scss":
/***/ (function(module, exports) {

module.exports = ".big-input {\n  width: 100%;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 10px 10px 20px; }\n  .big-input input {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    border: 0;\n    font-size: 20px;\n    min-width: 100px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BigInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BigInputComponent = (function () {
    function BigInputComponent() {
        this.value = '';
        this.disabled = false;
        this.hasFocus = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], BigInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "disabled", void 0);
    BigInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'anms-big-input',
            template: __webpack_require__("./src/app/shared/big-input/big-input.component.html"),
            styles: [__webpack_require__("./src/app/shared/big-input/big-input.component.scss")]
        })
    ], BigInputComponent);
    return BigInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__big_input_big_input_component__ = __webpack_require__("./src/app/shared/big-input/big-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__big_input_big_input_action_component__ = __webpack_require__("./src/app/shared/big-input/big-input-action.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_tooltip__["a" /* MatTooltipModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_17__big_input_big_input_component__["a" /* BigInputComponent */], __WEBPACK_IMPORTED_MODULE_18__big_input_big_input_action_component__["a" /* BigInputActionComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_17__big_input_big_input_component__["a" /* BigInputComponent */],
                __WEBPACK_IMPORTED_MODULE_18__big_input_big_input_action_component__["a" /* BigInputActionComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/static/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\n  <!-- <div class=\"gradient\">\n    <div class=\"container\"> -->\n  <div>\n    <div>\n\n      <!-- ABOUT -->\n      <div class=\"text-center p-3 pt-0\">\n        <h2>ABOUT US</h2>\n        <!-- <p class=\"mx-auto text-center\" style=\"max-width: 800px;\">\n          Renovate Software is a popular company for software development, providing web tutorials on various technology.\n        </p> -->\n        <p class=\"mx-auto text-center\" style=\"max-width: 800px;\">\n          We are a website design and development company with experienced web designers and web developers who think our of box to\n          create awesome responsive websites.\n        </p>\n        <p class=\"mx-auto text-center\" style=\"max-width: 800px;\">\n          We also provides tutorials and interview questions of latest technology like java tutorial, android, java frameworks, javascript,\n          typescript, core java, sql, python, c language etc. for beginners and professionals.\n        </p><br>\n        <h3>Key features of our company</h3><br>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <i class=\"fa fa-desktop fa-4x\"></i>\n            <br><br> Responsive <br><br>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>\n          </div>\n          <div class=\"col-sm-3\">\n            <i class=\"fa fa-heart fa-4x\"></i>\n            <br><br> Passion <br><br>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>\n          </div>\n          <div class=\"col-sm-3\">\n            <i class=\"fa fa-diamond fa-4x\"></i>\n            <br><br> Design <br><br>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>\n          </div>\n          <div class=\"col-sm-3\">\n            <i class=\"fa fa-cog fa-4x\"></i>\n            <br><br> Support <br><br>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>\n          </div>\n        </div>\n      </div>\n\n      <!-- SERVICES -->\n      <div class=\"container text-center p-3\">\n        <h2 class=\"text-center\">SOFTWARE SERVICES</h2>\n        <p class=\"mx-auto text-center\" style=\"max-width: 800px;\">The focus is on a development model fostered at the core for startups and rapid growth companies adopting best practices\n          - SCRUM, AGILE, LEAN enabling us to deliver a robust and potent result.</p>\n        <div class=\"row align-items-end mt-4\">\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Website Design</mat-card-title>\n              <mat-card-subtitle>\n                We create responsive websites with modern designs and features for businesses and organizations that are professionally developed,\n                optimized for the best desktop and mobile experiences.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Web Development</mat-card-title>\n              <mat-card-subtitle>\n                Are you looking for a cross-platform responsive web app, with a secure back-end and a robust structure? Reach out to us.\n                We use the latest of the technologies to ensure that we are always future ready.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Mobile App Development</mat-card-title>\n              <mat-card-subtitle>\n                We are serving the highly customized and optimal mobile app development for any kind of mobile platforms. Services are available\n                for both native & hybrid mobile app development.\n                <br>\n                <br>\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <!-- <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>REST API</mat-card-title>\n              <mat-card-subtitle>\n                One way data flow powered by RxJS Observables\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Hybrid Apps</mat-card-title>\n              <mat-card-subtitle>\n                Reactive programming with async collections using Observables.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Bootstrap</mat-card-title>\n              <mat-card-subtitle>\n                Responsive layout from battle tested, world most famous UI library\n              </mat-card-subtitle>\n            </mat-card>\n          </div> -->\n        </div>\n      </div>\n\n      <!-- TUTORIALS -->\n      <div class=\"container text-center p-3\">\n        <h2>OUR POPULAR TUTORIALS</h2>\n        <div class=\"row align-items-end\">\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>JAVA</mat-card-title>\n              <mat-card-subtitle>\n                Modern powerful framework\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>NODE.JS</mat-card-title>\n              <mat-card-subtitle>\n                Are you looking for a cross-platform responsive web app, with a secure back-end and a robust structure? Reach out to us.\n                We use the latest of the technologies to ensure that we are always future ready.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>PYTHON</mat-card-title>\n              <mat-card-subtitle>\n                We firmly believe that your app is more of a tête-à-tête between your idea and your customers. We’ll make sure it’s an indelible\n                one, be it Android or iOS.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>ANGULAR</mat-card-title>\n              <mat-card-subtitle>\n                One way data flow powered by RxJS Observables\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>MACHINE LEARNING</mat-card-title>\n              <mat-card-subtitle>\n                Reactive programming with async collections using Observables.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>ELASTIC SERACH</mat-card-title>\n              <mat-card-subtitle>\n                Responsive layout from battle tested, world most famous UI library\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n\n      <!-- OUR POPULAR APPS -->\n      <!-- <div class=\"container text-center p-3\">\n        <h2>OUR POPULAR APPS</h2>\n        <div class=\"row align-items-end\">\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Web Design</mat-card-title>\n              <mat-card-subtitle>\n                Modern powerful framework\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Web Development</mat-card-title>\n              <mat-card-subtitle>\n                Are you looking for a cross-platform responsive web app, with a secure back-end and a robust structure? Reach out to us.\n                We use the latest of the technologies to ensure that we are always future ready.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Android Apps</mat-card-title>\n              <mat-card-subtitle>\n                We firmly believe that your app is more of a tête-à-tête between your idea and your customers. We’ll make sure it’s an indelible\n                one, be it Android or iOS.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>REST API</mat-card-title>\n              <mat-card-subtitle>\n                One way data flow powered by RxJS Observables\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>RxJS</mat-card-title>\n              <mat-card-subtitle>\n                Reactive programming with async collections using Observables.\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n          <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n            <mat-card>\n              <mat-card-title>Bootstrap</mat-card-title>\n              <mat-card-subtitle>\n                Responsive layout from battle tested, world most famous UI library\n              </mat-card-subtitle>\n            </mat-card>\n          </div>\n        </div>\n      </div> -->\n\n      <!-- CONTACT US -->\n      <div class=\"text-center p-3\">\n        <h2>CONTACT US</h2>\n        <div class=\"mt-3\">\n          <mat-icon>mail</mat-icon>\n          <p>renovatesoftware@gmail.com</p>\n        </div>\n        <div>\n          <mat-icon>phone</mat-icon>\n          <p>9936900290</p>\n        </div>\n        <div>\n          <mat-icon>room</mat-icon>\n          <p>CR Park, New Delhi, India</p>\n        </div>\n      </div>\n\n      <!-- LET’S GET TALKING -->\n      <div class=\"text-center p-3\">\n        <h2>LET’S GET TALKING</h2>\n        <p>Want to know more? Drop us a note and we will be happy to help.</p>\n        <div class=\"container form-container\">\n          <mat-form-field>\n            <input matInput placeholder=\"Name\">\n            <mat-icon matSuffix class=\"mr-1\" style=\"margin-bottom: -50px;\">person</mat-icon>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Email\">\n            <mat-icon matSuffix class=\"mr-1\">mail</mat-icon>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Phone\">\n            <mat-icon matSuffix class=\"mr-1\">phone</mat-icon>\n          </mat-form-field>\n          <mat-form-field>\n            <textarea matInput rows=\"4\" placeholder=\"Message\"></textarea>\n            <mat-icon matSuffix class=\"mr-1\">message</mat-icon>\n          </mat-form-field>\n          <div class=\"mt-2\">\n            <button mat-raised-button color=\"accent\">SEND MESSAGE</button>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class=\"actions\">\n        <a [ngClass]=\"animateOnRouteEnter\" mat-raised-button color=\"primary\" routerLink=\"../features\">\n          Check Features\n        </a>\n        <a mat-raised-button color=\"accent\" routerLink=\"../examples\" [ngClass]=\"animateOnRouteEnter\">\n          Check Examples\n        </a>\n        <a mat-raised-button routerLink=\"../settings\" [ngClass]=\"animateOnRouteEnter\">\n          Change Theme\n        </a>\n        <span [ngClass]=\"animateOnRouteEnter\">or</span>\n        <a mat-raised-button [ngClass]=\"animateOnRouteEnter\" target=\"_blank\" href=\"https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1\">\n          <i class=\"fa fa-medium\"></i> Check Blog Post\n        </a>\n      </div> -->\n      <!-- <div class=\"get-started\" [ngClass]=\"animateOnRouteEnter\">\n        <h2>Getting started</h2>\n        <code>git clone\n          https://github.com/tomastrajan/angular-ngrx-material-starter.git\n          new-project</code>\n        <br>\n        <code>cd new-project</code>\n        <br>\n        <code>npm install</code>\n        <br>\n        <code>npm start</code>\n      </div> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/static/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".background {\n  padding: 50px 0;\n  position: relative; }\n  .background h1 {\n    text-align: center;\n    font-size: 3em;\n    text-transform: uppercase; }\n  .background .actions {\n    text-align: center;\n    margin: 50px;\n    z-index: 1; }\n  .background .actions span {\n      display: inline-block;\n      font-weight: bold;\n      padding: 10px; }\n  .background .actions a {\n      margin: 0 0 10px 0; }\n  .background .get-started {\n    width: 700px;\n    margin: 50px auto 0 auto;\n    padding-bottom: 50px;\n    font-size: 0.9em;\n    letter-spacing: 0.01px;\n    overflow-wrap: break-word;\n    z-index: 1; }\n  .background::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-size: cover;\n    opacity: 0.7;\n    content: '';\n    z-index: 0; }\n  .background .gradient::before {\n    position: absolute;\n    top: 60%;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: '';\n    z-index: 0; }\n  .background .container {\n    position: relative; }\n  @media (max-width: 768px) {\n  .background .get-started {\n    width: auto; } }\n  @media (max-width: 576px) {\n  .background {\n    padding: 40px 0; }\n    .background h1 {\n      line-height: 1em; }\n    .background .actions {\n      margin: 40px 0 0 0; }\n      .background .actions span {\n        padding: 0 0 10px 0; }\n      .background .actions a {\n        width: 100%; }\n    .background .get-started {\n      width: auto;\n      margin: 40px auto 0 auto;\n      padding-bottom: 40px; } }\n  mat-card {\n  margin: 0 0 20px 0; }\n  mat-card mat-card-title {\n    position: relative; }\n  mat-card mat-card-subtitle {\n    min-height: 60px;\n    text-align: justify; }\n  @media (max-width: 576px) {\n    mat-card mat-card-subtitle {\n      min-height: auto; } }\n  mat-card a i {\n    position: relative;\n    top: -1px;\n    left: -3px; }\n  .form-container {\n  max-width: 700px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .form-container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/static/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
        this.animateOnRouteEnter = __WEBPACK_IMPORTED_MODULE_1__app_core__["a" /* ANIMATE_ON_ROUTE_ENTER */];
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'anms-about',
            template: __webpack_require__("./src/app/static/about/about.component.html"),
            styles: [__webpack_require__("./src/app/static/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/static/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"main-heading\">Features</h1>\n    </div>\n  </div>\n  <div class=\"row align-items-end\">\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title><code>{{versions.angular}}</code>Angular</mat-card-title>\n        <mat-card-subtitle>\n          Modern powerful framework\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://angular.io/docs/ts/latest/\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n          <a mat-button href=\"https://github.com/angular/angular\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\"></i> Github\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title><code>{{versions.material}}</code>Angular Material</mat-card-title>\n        <mat-card-subtitle>\n          Material design component library\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://material.angular.io/\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n          <a mat-button href=\"https://github.com/angular/material2/\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\"></i> Github\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title><code>{{versions.angularCli}}</code>Angular Cli</mat-card-title>\n        <mat-card-subtitle>\n          Responsive layout from battle tested, world most famous UI library\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://github.com/angular/angular-cli/wiki/generate\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n          <a mat-button href=\"https://github.com/angular/angular-cli\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\"></i> Github\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title><code>{{versions.ngrx}}</code>ngRx</mat-card-title>\n        <mat-card-subtitle>\n          One way data flow powered by RxJS Observables\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\"></i> Github\n          </a>\n          <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\n            <i class=\"fa fa-code fa-lg\"></i> Testing\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title><code>{{versions.rxjs}}</code>RxJS</mat-card-title>\n        <mat-card-subtitle>\n          Reactive programming with async collections using Observables.\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"http://reactivex.io/rxjs/\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n          <a mat-button href=\"https://github.com/ReactiveX/RxJS\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\"></i> Github\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title><code>{{versions.bootstrap}}</code>Bootstrap</mat-card-title>\n        <mat-card-subtitle>\n          Responsive layout from battle tested, world most famous UI library\n        </mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://v4-alpha.getbootstrap.com/layout/grid/\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n          <a mat-button href=\"https://github.com/twbs/bootstrap\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\"></i> Github\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title><code>{{versions.typescript}}</code> Typescript</mat-card-title>\n        <mat-card-subtitle>Superior developer experience, code completion, refactoring and less bugs</mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://github.com/Microsoft/TypeScript\" target=\"_blank\">\n            <i class=\"fa fa-github fa-lg\"></i> Github\n          </a>\n          <a mat-button href=\"https://www.typescriptlang.org/docs/home.html\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title>Themes</mat-card-title>\n        <mat-card-subtitle>Flexible theming support for provided and custom components</mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://material.angular.io/guide/theming\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n          <a mat-button href=\"https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1\" target=\"_blank\">\n            <i class=\"fa fa-medium fa-lg\"></i> Blog\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div  class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n      <mat-card>\n        <mat-card-title>Lazy loading</mat-card-title>\n        <mat-card-subtitle>Faster startup time with lazy loaded feature modules</mat-card-subtitle>\n        <mat-card-actions>\n          <a mat-button href=\"https://angular.io/docs/ts/latest/guide/router.html#!#lazy-loading-route-config\" target=\"_blank\">\n            <i class=\"fa fa-book fa-lg\"></i> Docs\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/static/features/features.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\n.main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0; }\n\nmat-card {\n  margin: 0 0 20px 0; }\n\nmat-card mat-card-title {\n    position: relative; }\n\nmat-card mat-card-title code {\n      position: absolute;\n      top: 11px;\n      right: 0;\n      float: right;\n      font-size: 10px; }\n\nmat-card mat-card-subtitle {\n    min-height: 60px; }\n\n@media (max-width: 576px) {\n    mat-card mat-card-subtitle {\n      min-height: auto; } }\n\nmat-card a i {\n    position: relative;\n    top: -1px;\n    left: -3px; }\n"

/***/ }),

/***/ "./src/app/static/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeaturesComponent = (function () {
    function FeaturesComponent() {
        this.animateOnRouteEnter = __WEBPACK_IMPORTED_MODULE_2__app_core__["a" /* ANIMATE_ON_ROUTE_ENTER */];
        this.versions = __WEBPACK_IMPORTED_MODULE_1__env_environment__["a" /* environment */].versions;
    }
    FeaturesComponent.prototype.ngOnInit = function () { };
    FeaturesComponent.prototype.openLink = function (link) {
        window.open(link, '_blank');
    };
    FeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'anms-features',
            template: __webpack_require__("./src/app/static/features/features.component.html"),
            styles: [__webpack_require__("./src/app/static/features/features.component.scss")]
        })
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/static/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_routing_module__ = __webpack_require__("./src/app/static/static-routing.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_module__ = __webpack_require__("./src/app/static/static.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__static_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/static/about/about.component.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "./src/app/static/static-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("./src/app/static/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_features_component__ = __webpack_require__("./src/app/static/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tutorials_tutorials_component__ = __webpack_require__("./src/app/static/tutorials/tutorials.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */], data: { title: 'About' } },
    {
        path: 'features',
        component: __WEBPACK_IMPORTED_MODULE_3__features_features_component__["a" /* FeaturesComponent */],
        data: { title: 'Features' }
    },
    {
        path: 'tutorials',
        component: __WEBPACK_IMPORTED_MODULE_4__tutorials_tutorials_component__["a" /* TutorialsComponent */],
        data: { title: 'Tutorials' }
    }
];
var StaticRoutingModule = (function () {
    function StaticRoutingModule() {
    }
    StaticRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], StaticRoutingModule);
    return StaticRoutingModule;
}());



/***/ }),

/***/ "./src/app/static/static.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_routing_module__ = __webpack_require__("./src/app/static/static-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("./src/app/static/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__features_features_component__ = __webpack_require__("./src/app/static/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tutorials_tutorials_component__ = __webpack_require__("./src/app/static/tutorials/tutorials.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var StaticModule = (function () {
    function StaticModule() {
    }
    StaticModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__app_shared__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__static_routing_module__["a" /* StaticRoutingModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */], __WEBPACK_IMPORTED_MODULE_4__features_features_component__["a" /* FeaturesComponent */], __WEBPACK_IMPORTED_MODULE_5__tutorials_tutorials_component__["a" /* TutorialsComponent */]]
        })
    ], StaticModule);
    return StaticModule;
}());



/***/ }),

/***/ "./src/app/static/tutorials/tutorials.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h1 class=\"main-heading\">Tutorials</h1>\n    </div>\n  </div>\n\n  <!-- Node.js Technology -->\n  <div>\n    <h2>Web Development</h2><hr>\n    <div class=\"row align-items-end\">\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.angular}}</code>HTML</mat-card-title>\n          <mat-card-subtitle>\n            Modern powerful framework\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://angular.io/docs/ts/latest/\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/angular\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.material}}</code>CSS</mat-card-title>\n          <mat-card-subtitle>\n            Material design component library\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://material.angular.io/\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/material2/\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.angularCli}}</code>Javascript</mat-card-title>\n          <mat-card-subtitle>\n            Responsive layout from battle tested, world most famous UI library\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/angular/angular-cli/wiki/generate\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/angular-cli\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.ngrx}}</code>Typescript</mat-card-title>\n          <mat-card-subtitle>\n            One way data flow powered by RxJS Observables\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n            <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\n              <i class=\"fa fa-code fa-lg\"></i> Testing\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.ngrx}}</code>Angular 2/4/5</mat-card-title>\n          <mat-card-subtitle>\n            One way data flow powered by RxJS Observables\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n            <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\n              <i class=\"fa fa-code fa-lg\"></i> Testing\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- Node.js Technology -->\n  <div>\n    <h2>Node.js Technology</h2><hr>\n    <div class=\"row align-items-end\">\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.angular}}</code>Learn Node.js</mat-card-title>\n          <mat-card-subtitle>\n            Modern powerful framework\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://angular.io/docs/ts/latest/\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/angular\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.material}}</code>Express</mat-card-title>\n          <mat-card-subtitle>\n            Material design component library\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://material.angular.io/\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/material2/\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.angularCli}}</code>Socket.io</mat-card-title>\n          <mat-card-subtitle>\n            Responsive layout from battle tested, world most famous UI library\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/angular/angular-cli/wiki/generate\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/angular-cli\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.ngrx}}</code>Mongodb</mat-card-title>\n          <mat-card-subtitle>\n            One way data flow powered by RxJS Observables\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n            <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\n              <i class=\"fa fa-code fa-lg\"></i> Testing\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n  <!-- Java Technology -->\n  <div>\n    <h2>Java Technology</h2><hr>\n    <div class=\"row align-items-end\">\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.angular}}</code>Learn Java</mat-card-title>\n          <mat-card-subtitle>\n            Modern powerful framework\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://angular.io/docs/ts/latest/\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/angular\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.material}}</code>Servlet</mat-card-title>\n          <mat-card-subtitle>\n            Material design component library\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://material.angular.io/\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/material2/\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.angularCli}}</code>JSP</mat-card-title>\n          <mat-card-subtitle>\n            Responsive layout from battle tested, world most famous UI library\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/angular/angular-cli/wiki/generate\" target=\"_blank\">\n              <i class=\"fa fa-book fa-lg\"></i> Docs\n            </a>\n            <a mat-button href=\"https://github.com/angular/angular-cli\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.ngrx}}</code>Struts</mat-card-title>\n          <mat-card-subtitle>\n            One way data flow powered by RxJS Observables\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n            <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\n              <i class=\"fa fa-code fa-lg\"></i> Testing\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.ngrx}}</code>Spring</mat-card-title>\n          <mat-card-subtitle>\n            One way data flow powered by RxJS Observables\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n            <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\n              <i class=\"fa fa-code fa-lg\"></i> Testing\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n      <div class=\"col-md-6 col-lg-4\" [ngClass]=\"animateOnRouteEnter\">\n        <mat-card>\n          <mat-card-title>\n            <code>{{versions.ngrx}}</code>Hibernate</mat-card-title>\n          <mat-card-subtitle>\n            One way data flow powered by RxJS Observables\n          </mat-card-subtitle>\n          <mat-card-actions>\n            <a mat-button href=\"https://github.com/ngrx/platform\" target=\"_blank\">\n              <i class=\"fa fa-github fa-lg\"></i> Github\n            </a>\n            <a mat-button href=\"https://github.com/ngrx/effects/blob/master/docs/testing.md\" target=\"_blank\">\n              <i class=\"fa fa-code fa-lg\"></i> Testing\n            </a>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/static/tutorials/tutorials.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\n.main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0; }\n\nmat-card {\n  margin: 0 0 20px 0; }\n\nmat-card mat-card-title {\n    position: relative; }\n\nmat-card mat-card-title code {\n      position: absolute;\n      top: 11px;\n      right: 0;\n      float: right;\n      font-size: 10px; }\n\nmat-card mat-card-subtitle {\n    min-height: 60px; }\n\n@media (max-width: 576px) {\n    mat-card mat-card-subtitle {\n      min-height: auto; } }\n\nmat-card a i {\n    position: relative;\n    top: -1px;\n    left: -3px; }\n"

/***/ }),

/***/ "./src/app/static/tutorials/tutorials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialsComponent = (function () {
    function TutorialsComponent() {
        this.animateOnRouteEnter = __WEBPACK_IMPORTED_MODULE_2__app_core__["a" /* ANIMATE_ON_ROUTE_ENTER */];
        this.versions = __WEBPACK_IMPORTED_MODULE_1__env_environment__["a" /* environment */].versions;
    }
    TutorialsComponent.prototype.ngOnInit = function () {
    };
    TutorialsComponent.prototype.openLink = function (link) {
        window.open(link, '_blank');
    };
    TutorialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'anms-tutorials',
            template: __webpack_require__("./src/app/static/tutorials/tutorials.component.html"),
            styles: [__webpack_require__("./src/app/static/tutorials/tutorials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialsComponent);
    return TutorialsComponent;
}());



/***/ }),

/***/ "./src/assets/logo.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo.85f5341875f5f33f06a1.png";

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var packageJson = __webpack_require__("./package.json");
var environment = {
    appName: 'Renovate Software',
    company: 'Renovate Software',
    envName: 'DEV',
    production: false,
    versions: {
        app: packageJson.version,
        angular: packageJson.dependencies['@angular/core'],
        ngrx: packageJson.dependencies['@ngrx/store'],
        material: packageJson.dependencies['@angular/material'],
        bootstrap: packageJson.dependencies.bootstrap,
        rxjs: packageJson.dependencies.rxjs,
        angularCli: packageJson.devDependencies['@angular/cli'],
        typescript: packageJson.devDependencies['typescript']
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map