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







let screenMeta;
if (_global_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
function takeScreenShot() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const maxDimension = Math.max(screenMeta.width, screenMeta.height);
        const thumbSize = { width: maxDimension * window.devicePixelRatio, height: maxDimension * window.devicePixelRatio };
        let options = { types: ['screen'], thumbnailSize: thumbSize };
        var sources = yield crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__["Crossover"].electron.desktopCapturer.getSources(options);
        var image = sources[0].thumbnail.toDataURL();
        document.body.style.background = `url("${image}") top right no-repeat`;
    });
}
crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__["Crossover"].subscribe(crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_4__["InitializationChannel"], (e, m) => { screenMeta = m; takeScreenShot(); });
//window.onblur = e=> document.body.style.background =  "transparent"; 
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"]).catch(err => console.error(err));


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
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-root"]], decls: 25, vars: 0, consts: [[1, "container"], [1, "note"], [1, "title-container"], [1, "title"], [1, "date"], [1, "body"], [1, "note", "success"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Note title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "18/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Note title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "18/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Note title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "18/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 22px;\n  overflow-y: auto;\n}\n\n.note[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n  color: white;\n  background-color: rgba(37, 37, 37, 0.7);\n  text-rendering: optimizelegibility;\n  text-shadow: 0 0 3px rgba(37, 37, 37, 0.8);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 10px;\n}\n\n.note[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 15px;\n}\n\n.note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  line-height: 22px;\n  font-size: 14px;\n  color: #007acc;\n  font-weight: 600;\n}\n\n.note[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb290L0Q6XFxQcm9qZWN0c1xcSW5Qcm9ncmVzcy9hcHBcXHJvb3RcXHJvb3QuY29tcG9uZW50LnNjc3MiLCJhcHAvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esd0VBQUE7RUFJQSxtQkFBQTtBQ0ZKOztBRERJO0VBQ0ksZ0JBQUE7QUNHUjs7QURDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0NSOztBREFRO0VBQ0ksU0FBQTtBQ0VaOztBREFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRVo7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSIiwiZmlsZSI6ImFwcC9yb290L3Jvb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwOyAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgICAgXHJcbiAgICBwYWRkaW5nOiAyMnB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLm5vdGV7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgY29sb3I6ICB3aGl0ZTsgLy8gcmdiKDM3LCAzNywgMzcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjcpOyAgIFxyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgM3B4IHJnYmEoMzcsIDM3LCAzNywgLjgpOyAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgICY6bm90KDpmaXJzdC1jaGlsZCl7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLnRpdGxlLWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhdGV7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA3YWNjO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLnN1Y2Nlc3N7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgcGFkZGluZzogMjJweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm5vdGUge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC43KTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplbGVnaWJpbGl0eTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggcmdiYSgzNywgMzcsIDM3LCAwLjgpO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ubm90ZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubm90ZSAudGl0bGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm5vdGUgLnRpdGxlLWNvbnRhaW5lciAudGl0bGUge1xuICBtYXJnaW46IDA7XG59XG4ubm90ZSAudGl0bGUtY29udGFpbmVyIC5kYXRlIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDdhY2M7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubm90ZSAuZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn0iXX0= */"] });
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
/*! exports provided: Crossover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crossover", function() { return Crossover; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crossover_channels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossover.channels */ "./crossover/crossover.channels.ts");


const electron = window.require('electron');
class Crossover {
    static send(channel, model) {
        let eventName = channel instanceof _crossover_channels__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : new channel().constructor.name;
        electron.ipcRenderer.send(eventName, model);
    }
    static subscribe(channel, listener) {
        let eventName = channel instanceof _crossover_channels__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : new channel().constructor.name;
        electron.ipcRenderer.on(eventName, listener);
    }
    static unsubscribe(channel, listener) {
        let eventName = channel instanceof _crossover_channels__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : new channel().constructor.name;
        electron.ipcRenderer.removeListener(eventName, listener);
    }
    static get(channel, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let eventName = channel instanceof _crossover_channels__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : new channel().constructor.name;
            var result = yield electron.ipcRenderer.invoke(eventName, model);
            return result;
        });
    }
}
Crossover.electron = electron;


/***/ }),

/***/ "./crossover/crossover.channels.ts":
/*!*****************************************!*\
  !*** ./crossover/crossover.channels.ts ***!
  \*****************************************/
/*! exports provided: CrossoverChannel, InitializationChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossoverChannel", function() { return CrossoverChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializationChannel", function() { return InitializationChannel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _crossover_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossover.framework */ "./crossover/crossover.framework.ts");


class CrossoverChannel {
}
let InitializationChannel = class InitializationChannel extends CrossoverChannel {
};
InitializationChannel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["crossoverChannel"]
], InitializationChannel);



/***/ }),

/***/ "./crossover/crossover.framework.ts":
/*!******************************************!*\
  !*** ./crossover/crossover.framework.ts ***!
  \******************************************/
/*! exports provided: crossoverChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossoverChannel", function() { return crossoverChannel; });
function crossoverChannel(target) {
    target.channelName = target.name;
    target.withType = mt => withType(target, mt);
}
function withType(typeDef, modelType) {
    var crossOverChannel = new typeDef();
    crossOverChannel.channelName = typeDef.name;
    let modelTypeName = new modelType().constructor.name;
    crossOverChannel.eventName = `${crossOverChannel.channelName}-${modelTypeName}`;
    return crossOverChannel;
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