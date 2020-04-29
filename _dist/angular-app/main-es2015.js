(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./app/$$_lazy_route_resource lazy namespace object ***!
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
webpackEmptyAsyncContext.id = "./app/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/global/environment.ts":
/*!***********************************!*\
  !*** ./app/global/environment.ts ***!
  \***********************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "./app/main-routing.module.ts":
/*!************************************!*\
  !*** ./app/main-routing.module.ts ***!
  \************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/main.module.ts":
/*!****************************!*\
  !*** ./app/main.module.ts ***!
  \****************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "./app/main-routing.module.ts");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/root.component */ "./app/root/root.component.ts");





class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainModule, bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]] });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]
                ],
                providers: [],
                bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./app/main.ts":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/environment */ "./app/global/environment.ts");
/* harmony import */ var crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crossover/crossover-ipc.renderer */ "./crossover/crossover-ipc.renderer.ts");
/* harmony import */ var crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crossover/crossover.channels */ "./crossover/crossover.channels.ts");
/* harmony import */ var _main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.module */ "./app/main.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







if (_global_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
function takeScreenShot(screenMeta) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const maxDimension = Math.max(screenMeta.width, screenMeta.height);
        const thumbSize = {
            width: maxDimension * window.devicePixelRatio,
            height: maxDimension * window.devicePixelRatio
        };
        let options = { types: ['screen'], thumbnailSize: thumbSize };
        var sources = yield crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__["CrossoverRenderer"].electron.desktopCapturer.getSources(options);
        var image = sources[0].thumbnail.toDataURL();
        document.body.style.background = `url("${image}") top right no-repeat`;
        document.body.style.backgroundAttachment = "fixed";
    });
}
crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__["CrossoverRenderer"].subscribe(crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_4__["InitializationEvents"], (e, m) => takeScreenShot(m));
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./app/root/root.component.ts":
/*!************************************!*\
  !*** ./app/root/root.component.ts ***!
  \************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class RootComponent {
    constructor() {
        this.title = "it works";
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[3, "innerText"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.screenMeta);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './root.component.html',
                styleUrls: ['./root.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./crossover/crossover-ipc.renderer.ts":
/*!*********************************************!*\
  !*** ./crossover/crossover-ipc.renderer.ts ***!
  \*********************************************/
/*! exports provided: CrossoverRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossoverRenderer", function() { return CrossoverRenderer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const electron = window.require('electron');
class CrossoverRenderer {
    static send(channel, model) {
        var channelName = new channel().constructor.name;
        electron.ipcRenderer.send(channelName, model);
    }
    static subscribe(channel, listener) {
        var channelName = new channel().constructor.name;
        electron.ipcRenderer.on(channelName, listener);
    }
    static unsubscribe(channel, listener) {
        var channelName = new channel().constructor.name;
        electron.ipcRenderer.removeListener(channelName, listener);
    }
    static get(channel, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var channelName = new channel().constructor.name;
            var result = yield electron.ipcRenderer.invoke(channelName, model);
            return result;
        });
    }
}
CrossoverRenderer.electron = electron;


/***/ }),

/***/ "./crossover/crossover.channels.ts":
/*!*****************************************!*\
  !*** ./crossover/crossover.channels.ts ***!
  \*****************************************/
/*! exports provided: CrossoverChannel, WindowEvents, InitializationEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossoverChannel", function() { return CrossoverChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowEvents", function() { return WindowEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializationEvents", function() { return InitializationEvents; });
class CrossoverChannel {
}
class WindowEvents extends CrossoverChannel {
}
class InitializationEvents extends CrossoverChannel {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\InProgress\app\main.ts */"./app/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map