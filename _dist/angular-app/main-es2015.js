(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\InProgress\app\main.ts */"0ZzE");


/***/ }),

/***/ "0ZzE":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _global_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/environment */ "ABWx");
/* harmony import */ var crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crossover/crossover-ipc.renderer */ "nbPW");
/* harmony import */ var _main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.module */ "fL4D");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");






if (_global_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
function takeScreenShot(displayInfo) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const maxDimension = Math.max(displayInfo.width, displayInfo.height);
        const thumbSize = { width: maxDimension * window.devicePixelRatio, height: maxDimension * window.devicePixelRatio };
        let options = { types: ['screen'], thumbnailSize: thumbSize };
        var sources = yield crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__["Crossover"].electron.desktopCapturer.getSources(options);
        var image = sources[0].thumbnail.toDataURL();
        document.body.style.background = `url("${image}") top right no-repeat`;
    });
}
//Crossover.subscribe(InitializationChannel.with(ScreenMeta), (e, m: ScreenMeta) => takeScreenShot(m));
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"]).catch(err => console.error(err));


/***/ }),

/***/ "56Nd":
/*!**************************************************************************************!*\
  !*** ./app/shared/components/confirmation-overlay/confirmation-overlay.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfirmationOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationOverlayComponent", function() { return ConfirmationOverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");



function ConfirmationOverlayComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx_r0.confirmQuestion);
} }
class ConfirmationOverlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmationOverlayComponent.ɵfac = function ConfirmationOverlayComponent_Factory(t) { return new (t || ConfirmationOverlayComponent)(); };
ConfirmationOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationOverlayComponent, selectors: [["app-confirmation-overlay"]], inputs: { confirmQuestion: "confirmQuestion", confirmAction: "confirmAction", cancelAction: "cancelAction" }, decls: 4, vars: 1, consts: [["class", "confirm-question", 3, "innerText", 4, "ngIf"], [1, "confirm-actions"], ["uk-icon", "icon: close; ratio: 2.5", 1, "icon-btn", "delete", 3, "click"], ["uk-icon", "icon: check; ratio: 2.5", 1, "icon-btn", "done", 3, "click"], [1, "confirm-question", 3, "innerText"]], template: function ConfirmationOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmationOverlayComponent_h3_0_Template, 1, 1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationOverlayComponent_Template_span_click_2_listener() { return ctx.cancelAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationOverlayComponent_Template_span_click_3_listener() { return ctx.confirmAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.confirmQuestion);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: var(--border-radius);\n  color: white;\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  -webkit-animation: animateshow 0.5s;\n          animation: animateshow 0.5s;\n  flex: 1 0 0%;\n}\n[_nghost-%COMP%]   .confirm-question[_ngcontent-%COMP%] {\n  color: white;\n  width: 70%;\n  margin: auto;\n}\n[_nghost-%COMP%]   .confirm-actions[_ngcontent-%COMP%] {\n  width: 60%;\n  display: flex;\n  justify-content: space-between;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtYXRpb24tb3ZlcmxheS9jb25maXJtYXRpb24tb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsImFwcC9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNDTGM7RURNZCxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtBQURGO0FBSUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFGSjtBQUlFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUFGSiIsImZpbGUiOiJhcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLW92ZXJsYXkvY29uZmlybWF0aW9uLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoYmxhY2ssIDAuNyk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYW5pbWF0aW9uOiBhbmltYXRlc2hvdyAwLjVzO1xyXG4gIGZsZXg6IDEgMCAwJTtcclxuXHJcblxyXG4gIC5jb25maXJtLXF1ZXN0aW9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5jb25maXJtLWFjdGlvbnMge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG59XHJcbiIsIiRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuJGNvbG9yLWluZm86ICMyY2E4ZmY7XHJcbiRmb250LWNvbG9yOiB3aGl0ZTtcclxuJGNhcmQtY29sb3I6IHJnYmEoYmxhY2ssIDAuNik7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-overlay',
                templateUrl: './confirmation-overlay.component.html',
                styleUrls: ['./confirmation-overlay.component.scss']
            }]
    }], function () { return []; }, { confirmQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], confirmAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cancelAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9tog":
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
webpackEmptyAsyncContext.id = "9tog";

/***/ }),

/***/ "ABWx":
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

/***/ "D/pQ":
/*!*****************************************!*\
  !*** ./crossover/crossover.channels.ts ***!
  \*****************************************/
/*! exports provided: ConfigurationChannel, InitializationChannel, DataChannel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationChannel", function() { return ConfigurationChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializationChannel", function() { return InitializationChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataChannel", function() { return DataChannel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _crossover_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossover-framework */ "UaQf");


let ConfigurationChannel = class ConfigurationChannel extends _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] {
};
ConfigurationChannel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["crossoverChannel"]
], ConfigurationChannel);

let InitializationChannel = class InitializationChannel extends _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] {
};
InitializationChannel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["crossoverChannel"]
], InitializationChannel);

let DataChannel = class DataChannel extends _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] {
};
DataChannel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["crossoverChannel"]
], DataChannel);



/***/ }),

/***/ "D8Uu":
/*!************************************!*\
  !*** ./app/root/root.component.ts ***!
  \************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var app_shared_types_uikit_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/types/uikit.types */ "DZdI");
/* harmony import */ var app_shared_custom_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/custom-decorators */ "c27L");
/* harmony import */ var app_models_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/models/models */ "ubaN");
/* harmony import */ var crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crossover/crossover-ipc.renderer */ "nbPW");
/* harmony import */ var crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crossover/crossover.channels */ "D/pQ");
/* harmony import */ var crossover_crossover_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! crossover/crossover.models */ "Drqw");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _note_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./note-actions */ "kCA1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _shared_directives_directives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/directives/directives */ "FmIt");















const _c0 = ["addNoteModalRef"];
const _c1 = ["createFolderModalRef"];
function RootComponent_div_1_ng_container_19_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 69);
} }
function RootComponent_div_1_ng_container_19_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 70);
} }
function RootComponent_div_1_ng_container_19_div_11_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_div_11_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const line_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r10.actions.completeLine(line_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RootComponent_div_1_ng_container_19_div_11_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_div_11_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const line_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r10.actions.inProgressLine(line_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RootComponent_div_1_ng_container_19_div_11_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_div_11_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const line_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r10.actions.cancelLine(line_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RootComponent_div_1_ng_container_19_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RootComponent_div_1_ng_container_19_div_11_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const line_r14 = ctx.$implicit; return line_r14.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_div_11_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const line_r14 = ctx.$implicit; const note_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return note_r9.lines = ctx_r29.lodash.without(note_r9.lines, line_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RootComponent_div_1_ng_container_19_div_11_span_4_Template, 1, 0, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RootComponent_div_1_ng_container_19_div_11_span_5_Template, 1, 0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RootComponent_div_1_ng_container_19_div_11_span_6_Template, 1, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", line_r14.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", line_r14.content)("disabled", line_r14.state == ctx_r13.noteStates.completed || line_r14.state == ctx_r13.noteStates.canceled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", line_r14.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", line_r14.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", line_r14.content);
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
function RootComponent_div_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngInit", function RootComponent_div_1_ng_container_19_Template_div_ngInit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const note_r9 = ctx.$implicit; const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.initNote(_r10, note_r9); })("onConfirm", function RootComponent_div_1_ng_container_19_Template_div_onConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const note_r9 = ctx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.removeNote(note_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RootComponent_div_1_ng_container_19_span_5_Template, 1, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RootComponent_div_1_ng_container_19_span_6_Template, 1, 0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RootComponent_div_1_ng_container_19_div_11_Template, 7, 6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r10.actions.createNewLine(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const note_r9 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.completeNote(note_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_Template_span_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const note_r9 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.markNote(note_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_1_ng_container_19_Template_span_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r10.confirmDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const note_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", note_r9.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", note_r9.state == ctx_r8.noteStates.important);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", note_r9.state == ctx_r8.noteStates.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", note_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", note_r9.lines);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c2, note_r9.state == ctx_r8.noteStates.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, note_r9.state == ctx_r8.noteStates.completed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, note_r9.state == ctx_r8.noteStates.completed));
} }
const _c3 = function (a0, a1) { return { "blur": a0, "minimized": a1 }; };
function RootComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "in progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RootComponent_div_1_ng_container_19_Template, 18, 14, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c3, ctx_r0.modalVisible, ctx_r0.appConfig.minimized));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r0.selectedFolder.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r0.folderStats.notesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r0.folderStats.inProgressNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r0.folderStats.completedNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.selectedFolder.notes);
} }
function RootComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 81);
} }
function RootComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 82);
} }
function RootComponent_li_20_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 87);
} }
function RootComponent_li_20_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 88);
} }
const _c4 = function (a0) { return { "active": a0 }; };
function RootComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_li_20_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const folder_r38 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.selectFolder(folder_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RootComponent_li_20_span_5_Template, 1, 0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RootComponent_li_20_span_6_Template, 1, 0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c4, folder_r38.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", folder_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", folder_r38.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !folder_r38.isDefault && !folder_r38.selected);
} }
function RootComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RootComponent_div_40_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const line_r43 = ctx.$implicit; return line_r43.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_div_40_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const line_r43 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r46.newNote.lines = ctx_r46.lodash.without(ctx_r46.newNote.lines, line_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", line_r43.content);
} }
const _c5 = function (a0) { return { "minimized": a0 }; };
const uikit = window.UIkit;
class RootComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.lodash = lodash__WEBPACK_IMPORTED_MODULE_8__;
        this.console = console;
        this.newNote = {};
        this.appConfig = { minimized: false };
        this.noteStates = app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"];
    }
    get folderStats() {
        return {
            notesCount: this.selectedFolder.notes.length,
            completedNotes: this.selectedFolder.notes.filter(n => n.state == app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].completed).length,
            inProgressNotes: this.selectedFolder.notes.filter(n => n.state == app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].inProgress).length
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_5__["Crossover"].isElectronRunning) {
                this.electronWindow = crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_5__["Crossover"].electron.remote.getCurrentWindow();
                this.appConfig.width = this.electronWindow.getBounds().width;
                // this.electronWindow.on('close', (e) => {
                //   e.preventDefault();
                //   this.saveToDisk();
                //   //setTimeout(() => this.electronWindow.close(), 500);
                // });
                console.log(this.electronWindow.getBounds());
                this.display = yield crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_5__["Crossover"].get(crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_6__["ConfigurationChannel"].with(crossover_crossover_models__WEBPACK_IMPORTED_MODULE_7__["DisplayInfo"]));
                this.folders = yield crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_5__["Crossover"].get(crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_6__["DataChannel"].with(crossover_crossover_models__WEBPACK_IMPORTED_MODULE_7__["GenericData"]), { storeName: 'notes', action: 'get' });
            }
            if (!this.folders) {
                this.folders = [{ name: "General", notes: [], isDefault: true }];
            }
            if (!this.selectedFolder) {
                this.selectFolder(this.folders[0]);
            }
        });
    }
    ngAfterViewInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            uikit.util.on(this.addNotesModal.$el, app_shared_types_uikit_types__WEBPACK_IMPORTED_MODULE_2__["ModalEvents"].show, e => this.modalVisible = true);
            uikit.util.on(this.addNotesModal.$el, app_shared_types_uikit_types__WEBPACK_IMPORTED_MODULE_2__["ModalEvents"].hidden, e => this.modalVisible = false);
            uikit.util.on(this.creteFolderModal.$el, app_shared_types_uikit_types__WEBPACK_IMPORTED_MODULE_2__["ModalEvents"].show, e => this.modalVisible = true);
            uikit.util.on(this.creteFolderModal.$el, app_shared_types_uikit_types__WEBPACK_IMPORTED_MODULE_2__["ModalEvents"].hidden, e => this.modalVisible = false);
            this.addNotesModal.$el.style.right = '46px';
            document.body.style.setProperty('--border-radius', '15px');
            //(<HTMLElement>this.elementRef.nativeElement).style.setProperty('--border-radius', '10px');
        });
    }
    selectFolder(folder) {
        this.folders.forEach(f => f.selected = false);
        folder.selected = true;
        this.selectedFolder = folder;
        this.saveToDisk();
    }
    saveFolder(input) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.folders.push({ name: input.value, notes: [] });
            this.selectFolder(this.folders[this.folders.length - 1]);
            this.creteFolderModal.hide();
            input.value = '';
            this.saveToDisk();
        });
    }
    createNote() {
        if (this.appConfig.minimized) {
            this.toggleView();
        }
        this.newNote = { lines: [{}] };
        this.addNotesModal.show();
    }
    saveNote() {
        this.newNote.date = new Date(Date.now());
        this.selectedFolder.notes.push(this.newNote);
        this.addNotesModal.hide();
    }
    saveToDisk() {
        crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_5__["Crossover"].send(crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_6__["DataChannel"].with(crossover_crossover_models__WEBPACK_IMPORTED_MODULE_7__["GenericData"]), { storeName: 'notes', data: this.folders, action: 'save' });
    }
    completeNote(note) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            note.lines = note.lines.filter(l => !!l.content);
            note.lines.filter(l => l.state != app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].canceled).forEach(l => l.state = app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].completed);
            note.state = app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].completed;
            this.saveToDisk();
        });
    }
    markNote(note) {
        note.state = note.state === app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].important ? app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].neutral : app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"].important;
        this.saveToDisk();
    }
    initNote(noteEl, note) {
        noteEl.allStates = app_models_models__WEBPACK_IMPORTED_MODULE_4__["NoteStates"];
        noteEl.actions = new _note_actions__WEBPACK_IMPORTED_MODULE_9__["NoteActions"](note, () => this.saveToDisk());
    }
    removeNote(note) {
        this.selectedFolder.notes = lodash__WEBPACK_IMPORTED_MODULE_8__["without"](this.selectedFolder.notes, note);
        this.saveToDisk();
    }
    changeWindowSize(value) {
        this.appConfig.width += value;
        this.electronWindow.setBounds({ width: this.appConfig.width, height: this.display.height, x: this.display.width - this.appConfig.width, y: 0 });
    }
    toggleView() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.appConfig.minimized = !this.appConfig.minimized;
            if (this.appConfig.minimized) {
                var centerY = this.display.height / 2 - 150;
                this.electronWindow.setBounds({ width: 50, height: 300, x: this.display.width - 50, y: centerY });
            }
            else {
                this.electronWindow.setBounds({ width: this.appConfig.width, height: this.display.height, x: this.display.width - this.appConfig.width, y: 0 });
            }
        });
    }
}
RootComponent.ɵfac = function RootComponent_Factory(t) { return new (t || RootComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RootComponent, selectors: [["app-root"]], viewQuery: function RootComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.addNotesModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.creteFolderModal = _t.first);
    } }, decls: 67, vars: 14, consts: [[1, "home-root"], ["id", "content-container", "class", "content-container", 3, "ngClass", 4, "ngIf"], [1, "menu-container", 3, "ngClass"], [1, "menu"], [1, "uk-inline"], [1, "btn-new-note", 3, "click"], ["uk-tooltip", "expand", "uk-icon", "icon: expand; ratio: 2", 4, "ngIf"], ["uk-tooltip", "collapse", "uk-icon", "icon: shrink; ratio: 2", 4, "ngIf"], ["uk-tooltip", "new note", 1, "btn-new-note", 3, "click"], ["uk-icon", "icon: plus; ratio: 2"], ["uk-tooltip", "folders", 3, "disabled"], ["uk-icon", "icon: folder; ratio: 2"], ["uk-dropdown", "pos: left"], [1, "uk-nav", "uk-dropdown-nav"], [3, "click"], ["uk-icon", "icon: plus; ratio: 1"], [4, "ngFor", "ngForOf"], [3, "disabled"], ["uk-icon", "icon: settings; ratio: 2"], ["uk-icon", "icon: plus; ratio: 1", 1, "icon-btn", 3, "click"], ["uk-icon", "icon: minus; ratio: 1", 1, "icon-btn", "delete", 3, "click"], ["id", "add-note-modal", 1, "uk-flex-top"], ["addNoteModalRef", ""], [1, "uk-modal-dialog", "uk-margin-auto-vertical", "uk-animation-scale-up"], [1, "add-note"], [1, "uk-modal-header"], [1, "title", 2, "margin", "10px 0 0 0"], ["uk-icon", "icon: comment; ratio: 1.4"], ["type", "text", "placeholder", "title", 1, "uk-input", 2, "font-size", "20px", 3, "ngModel", "ngModelChange"], [1, "uk-modal-body"], ["class", "line", 4, "ngFor", "ngForOf"], ["uk-icon", "icon: plus; ratio: 1.2", 1, "icon-btn", 3, "click"], [1, "uk-modal-footer", "uk-text-right"], ["type", "button", 1, "uk-button", "uk-button-danger", "uk-modal-close", "uk-button-small"], [1, "uk-button", "uk-button-primary", "uk-button-small", 3, "disabled", "click"], ["id", "create-folder-modal", 1, "uk-flex-top"], ["createFolderModalRef", ""], ["uk-icon", "icon: folder; ratio: 1.4"], [2, "display", "flex", "flex-direction", "column"], ["placeholder", "folder name", 1, "uk-input", "uk-form-medium", 3, "keyup"], ["folderInput", ""], ["id", "content-container", 1, "content-container", 3, "ngClass"], [1, "folder-title"], [2, "display", "flex"], ["uk-icon", "icon: folder; ratio: 1.6"], [2, "margin-left", "4px", 3, "innerText"], [2, "font-size", "11px", "display", "flex", "flex-direction", "column", "line-height", "12px"], [3, "innerText"], [2, "margin-left", "4px"], [2, "color", "#2ca8ff"], [2, "color", "limegreen"], [1, "notes-list"], ["confirm-delete", "", 1, "note", "uk-animation-scale-up", 3, "ngClass", "ngInit", "onConfirm"], ["noteEl", ""], [1, "title-container"], [1, "meta"], ["class", "important", "uk-icon", "icon: warning; ratio: 1.3", 4, "ngIf"], ["class", "done", "uk-icon", "icon: check; ratio: 1.3", 4, "ngIf"], [1, "title"], ["uk-icon", "icon: comment; ratio: 1.2"], [2, "margin-left", "10px", 3, "innerText"], [1, "body"], ["class", "line", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "actions"], ["uk-icon", "icon: plus; ratio: 1.1", "uk-tooltip", "add new line", 1, "icon-btn", 3, "click"], ["uk-icon", "icon: check; ratio: 1.1", "uk-tooltip", "mark as completed", 1, "icon-btn", "done", 3, "ngClass", "click"], ["uk-icon", "icon: calendar; ratio: 1.1", "uk-tooltip", "set deadline", 1, "icon-btn", 3, "ngClass"], ["uk-icon", "icon: warning; ratio: 1.1", "uk-tooltip", "mark as important", 1, "icon-btn", 3, "ngClass", "click"], ["uk-icon", "icon: trash; ratio: 1.1", "uk-tooltip", "delete note", 1, "icon-btn", "delete", 3, "click"], ["uk-icon", "icon: warning; ratio: 1.3", 1, "important"], ["uk-icon", "icon: check; ratio: 1.3", 1, "done"], [1, "line", 3, "ngClass"], ["uk-icon", "icon: minus; ratio: 1", 1, "bulet"], ["type", "text", "placeholder", "new line", 1, "uk-input", 3, "ngModel", "disabled", "ngModelChange"], ["uk-icon", "icon: trash; ratio: 1", "uk-tooltip", "delete line", 1, "icon-btn", "delete", 3, "click"], ["uk-icon", "icon: check; ratio: 1.1", "class", "icon-btn done", "uk-tooltip", "complete", 3, "click", 4, "ngIf"], ["uk-icon", "icon: pull; ratio: 1.1", "class", "icon-btn default", "uk-tooltip", "in progress", 3, "click", 4, "ngIf"], ["uk-icon", "icon: ban; ratio: 1.1", "class", "icon-btn default", "uk-tooltip", "cancel", "style", "margin-right: 4px;", 3, "click", 4, "ngIf"], ["uk-icon", "icon: check; ratio: 1.1", "uk-tooltip", "complete", 1, "icon-btn", "done", 3, "click"], ["uk-icon", "icon: pull; ratio: 1.1", "uk-tooltip", "in progress", 1, "icon-btn", "default", 3, "click"], ["uk-icon", "icon: ban; ratio: 1.1", "uk-tooltip", "cancel", 1, "icon-btn", "default", 2, "margin-right", "4px", 3, "click"], ["uk-tooltip", "expand", "uk-icon", "icon: expand; ratio: 2"], ["uk-tooltip", "collapse", "uk-icon", "icon: shrink; ratio: 2"], [3, "ngClass"], ["uk-icon", "icon: folder; ratio: 1"], ["style", "float: right;", "uk-icon", "icon: check; ratio: 1", 4, "ngIf"], ["class", "icon-btn delete", "style", "float: right;", "uk-icon", "icon: trash; ratio: 1", 4, "ngIf"], ["uk-icon", "icon: check; ratio: 1", 2, "float", "right"], ["uk-icon", "icon: trash; ratio: 1", 1, "icon-btn", "delete", 2, "float", "right"], [1, "line"], ["uk-icon", "icon: pencil; ratio: 1.4"], ["type", "text", "placeholder", "new line", 1, "uk-input", 3, "ngModel", "ngModelChange"], ["uk-icon", "icon: trash; ratio: 1.2", 1, "icon-btn", "delete", 3, "click"]], template: function RootComponent_Template(rf, ctx) { if (rf & 1) {
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RootComponent_div_1_Template, 20, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_button_click_5_listener() { return ctx.toggleView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RootComponent_span_6_Template, 1, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RootComponent_span_7_Template, 1, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_button_click_9_listener() { return ctx.createNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_a_click_17_listener() { return ctx.creteFolderModal.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " New Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RootComponent_li_20_Template, 7, 6, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_span_click_28_listener() { return ctx.changeWindowSize(20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_span_click_30_listener() { return ctx.changeWindowSize(-20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RootComponent_Template_input_ngModelChange_38_listener($event) { return ctx.newNote.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, RootComponent_div_40_Template, 4, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_span_click_42_listener() { return ctx.newNote.lines.push({}); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_button_click_46_listener() { return ctx.saveNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " New Folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Type folder name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "input", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function RootComponent_Template_input_keyup_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61); return _r7.canSave = _r7.value && _r7.value.length > 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RootComponent_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61); return ctx.saveFolder(_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedFolder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c5, ctx.appConfig.minimized));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appConfig.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.appConfig.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.appConfig.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.folders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.appConfig.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Width: ", ctx.appConfig.width, "px ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newNote.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.newNote.lines);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.newNote.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r7.canSave);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _shared_directives_directives__WEBPACK_IMPORTED_MODULE_12__["ConfirmDeleteDirective"], _shared_directives_directives__WEBPACK_IMPORTED_MODULE_12__["NgInitDirective"]], styles: ["body[_ngcontent-%COMP%], [_nghost-%COMP%] {\n  --border-radius: 15px;\n}\n\n.home-root[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);\n  overflow: hidden;\n  transition: filter 0.7s ease;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 46px;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  padding: 10px 8px 22px 8px;\n  overflow: hidden;\n  transition: filter 1s;\n}\n\n.content-container.minimized[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.content-container[_ngcontent-%COMP%]   .folder-title[_ngcontent-%COMP%] {\n  color: white;\n  padding: 6.5px 20px;\n  margin: 0 0 20px 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  min-width: 100%;\n  box-sizing: border-box;\n  border-radius: var(--border-radius);\n  display: flex;\n  justify-content: space-between;\n}\n\n.notes-list[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow-y: auto;\n  padding-right: 6px;\n  padding-top: 6px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  min-height: 100px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n  text-rendering: optimizelegibility;\n  border-radius: var(--border-radius);\n  position: relative;\n  overflow: hidden;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note.completed[_ngcontent-%COMP%] {\n  border-bottom: 2px solid limegreen;\n  border-right: 2px solid limegreen;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note.completed[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note.completed[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note.important[_ngcontent-%COMP%] {\n  border-bottom: 2px solid red;\n  border-right: 2px solid red;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note.important[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 6px;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: white;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .important[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 46px;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: 30px;\n  box-sizing: border-box;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.completed[_ngcontent-%COMP%] {\n  border-right: 2px solid limegreen;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.completed[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.completed[_ngcontent-%COMP%]   .uk-icon.bulet[_ngcontent-%COMP%] {\n  color: limegreen;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.canceled[_ngcontent-%COMP%] {\n  border-right: 2px solid lightgrey;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.canceled[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.canceled[_ngcontent-%COMP%]   .uk-icon.bulet[_ngcontent-%COMP%] {\n  color: lightgrey;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.inProgress[_ngcontent-%COMP%] {\n  border-right: 2px solid #2ca8ff;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.inProgress[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line.inProgress[_ngcontent-%COMP%]   .uk-icon.bulet[_ngcontent-%COMP%] {\n  color: #2ca8ff;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:not(.completed):not(.canceled):hover   .uk-icon[_ngcontent-%COMP%]:not(.icon-btn).bulet {\n  color: #2ca8ff;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:not(.completed):not(.canceled):hover   .icon-btn[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: -26px;\n  padding-left: 32px;\n  margin-right: -24px;\n  padding-right: 26px;\n  border-radius: 0;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  background: transparent;\n  border: none;\n  color: white;\n  height: 30px;\n  cursor: pointer;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  cursor: text;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .uk-icon[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .icon-btn.delete[_ngcontent-%COMP%]:hover {\n  color: orangered;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 70%;\n  background-color: #252526;\n  border-radius: 10px;\n  padding: 4px 16px;\n  display: flex;\n  justify-content: space-around;\n  transition: bottom 0.7s ease;\n  position: absolute;\n  bottom: -80px;\n  left: 0;\n  right: 0;\n}\n\n.notes-list[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]:hover   .actions[_ngcontent-%COMP%] {\n  bottom: 10px;\n}\n\n.menu-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(0, 0, 0, 0.6);\n  justify-content: center;\n  height: 100%;\n}\n\n.menu-container.minimized[_ngcontent-%COMP%] {\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  padding: 16px 2px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .uk-dropdown[_ngcontent-%COMP%] {\n  border-radius: var(--border-radius);\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 44px;\n  padding: 8px;\n  border: none;\n  outline: none;\n  background: transparent;\n  cursor: pointer;\n  color: white;\n}\n\n.menu-container[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled):hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #2ca8ff;\n}\n\n.add-note[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .add-note[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 6px;\n}\n\n.add-note[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:hover   .uk-icon[_ngcontent-%COMP%]:not(.delete), .add-note[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:hover   .uk-icon[_ngcontent-%COMP%]:not(.delete) {\n  color: #2ca8ff;\n}\n\n.add-note[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-note[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: -30px;\n  padding-left: 32px;\n  margin-right: -30px;\n  padding-right: 32px;\n  \n  \n  \n  border-radius: var(--border-radius);\n}\n\n.add-note[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .uk-icon[_ngcontent-%COMP%], .add-note[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .uk-icon[_ngcontent-%COMP%] {\n  line-height: 40px;\n}\n\n.uk-modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yb290L3Jvb3QuY29tcG9uZW50LnNjc3MiLCJhcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtGQUFBO0VBRUEsZ0JBQUE7RUFDQSw0QkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFGRjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQzlCUztFRCtCVCxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0NwQ1k7RURxQ1osYUFBQTtFQUNBLDhCQUFBO0FBRko7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQ3REUztFRHVEVCxvQ0N0RFM7RUR1RFQsa0NBQUE7RUFDQSxtQ0MzRFk7RUQ0RFosa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlJO0VBR0Usa0NBQUE7RUFDQSxpQ0FBQTtBQUpOOztBQUtNO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBSFI7O0FBS007RUFDRSxnQkFBQTtBQUhSOztBQU9JO0VBTUUsNEJBQUE7RUFDQSwyQkFBQTtBQVZOOztBQU1NO0VBQ0UsVUFBQTtBQUpSOztBQVVJO0VBQ0UsZUFBQTtBQVJOOztBQVdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBVE47O0FBVU07RUFDRSxTQUFBO0VBRUEsWUMvRks7QURzRmI7O0FBWU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBVlI7O0FBV1E7RUFDRSxVQUFBO0FBVFY7O0FBV1E7RUFDRSxnQkFBQTtBQVRWOztBQWFJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQVhOOztBQWFNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFYUjs7QUFtQlE7RUFDRSxpQ0FBQTtBQWpCVjs7QUFrQlU7O0VBRUUsZ0JBQUE7QUFoQlo7O0FBbUJRO0VBQ0UsaUNBQUE7QUFqQlY7O0FBa0JVOztFQUVFLGdCQUFBO0FBaEJaOztBQW1CUTtFQUNFLCtCQUFBO0FBakJWOztBQWtCVTs7RUFFRSxjQ2hKQztBRGdJYjs7QUFvQlE7RUFDRSxrQkFBQTtBQWxCVjs7QUFxQlU7RUFDRSxjQ3pKQztBRHNJYjs7QUFxQlU7RUFDRSxtQkFBQTtBQW5CWjs7QUF1QlE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUMxS0c7RUQyS0gsWUFBQTtFQUNBLGVBQUE7QUFyQlY7O0FBc0JVO0VBQ0UsWUFBQTtBQXBCWjs7QUF1QlE7RUFDRSxpQkFBQTtBQXJCVjs7QUF3QlU7RUFDRSxnQkFBQTtBQXRCWjs7QUEyQkk7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUF6Qk47O0FBNEJNO0VBQ0UsWUFBQTtBQTFCUjs7QUFnQ0E7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQ0N4Tlc7RUR5TlgsdUJBQUE7RUFDQSxZQUFBO0FBN0JGOztBQThCRTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7QUE1Qko7O0FBK0JFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQTdCSjs7QUErQkk7RUFDRSxtQ0MxT1U7QUQ2TWhCOztBQWdDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBOUJOOztBQStCTTtFQUNFLDBDQUFBO0VBQ0EsY0N0UEs7QUR5TmI7O0FBb0NFOztFQUVFLGFBQUE7RUFDQSxlQUFBO0FBakNKOztBQW1DTTs7RUFDRSxjQ25RSztBRG1PYjs7QUFvQ0k7O0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0NoUlU7QUQrT2hCOztBQW1DSTs7RUFDRSxpQkFBQTtBQWhDTjs7QUFxQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFsQ0YiLCJmaWxlIjoiYXBwL3Jvb3Qvcm9vdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmJvZHksXHJcbjpob3N0IHtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5ob21lLXJvb3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC4yKSAwJSwgcmdiYSgwLDAsMCwwLjUpIDEwMCUpO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgMzcsIDM3LCAwLjUpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuN3MgZWFzZTtcclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDQ2cHg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDEwcHggOHB4IDIycHggOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDFzO1xyXG4gICYubWluaW1pemVkIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC5mb2xkZXItdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNi41cHggMjBweDtcclxuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWNvbG9yO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcbi5ub3Rlcy1saXN0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC5ub3RlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtY29sb3I7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVsZWdpYmlsaXR5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICYuY29tcGxldGVkIHtcclxuICAgICAgLy8gYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaW1lZ3JlZW47XHJcbiAgICAgIC8vIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaW1lZ3JlZW47XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaW1lZ3JlZW47XHJcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpbWVncmVlbjtcclxuICAgICAgLmxpbmV7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZXtcclxuICAgICAgICBjb2xvcjogbGltZWdyZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbXBvcnRhbnQge1xyXG4gICAgICAvLyBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpbWVncmVlbjtcclxuICAgICAgLy8gYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpbWVncmVlbjtcclxuICAgICAgLnRpdGxle1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmVkO1xyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLy9jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6ICRmb250LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWV0YSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgLmltcG9ydGFudCB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZG9uZSB7XHJcbiAgICAgICAgICBjb2xvcjogbGltZWdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJvZHkge1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDQ2cHg7XHJcblxyXG4gICAgICAubGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICAvLyAubGluZS1jb250ZW50e1xyXG4gICAgICAgIC8vICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgLy8gICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgLy8gICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICYuY29tcGxldGVkIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpbWVncmVlbjtcclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgLnVrLWljb24uYnVsZXQge1xyXG4gICAgICAgICAgICBjb2xvcjogbGltZWdyZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbmNlbGVkIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgLnVrLWljb24uYnVsZXQge1xyXG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmluUHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJGNvbG9yLWluZm87XHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIC51ay1pY29uLmJ1bGV0IHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1pbmZvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24tYnRuIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpub3QoLmNvbXBsZXRlZCk6bm90KC5jYW5jZWxlZCk6aG92ZXIge1xyXG4gICAgICAgICAgLnVrLWljb246bm90KC5pY29uLWJ0bikuYnVsZXQge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWluZm87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaWNvbi1idG4ge1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMjRweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3I7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgY3Vyc29yOiB0ZXh0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudWstaWNvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24tYnRuLmRlbGV0ZSB7XHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IG9yYW5nZXJlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogNzAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyNTI2O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggMTZweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjdzIGVhc2U7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAtODBweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtY29udGFpbmVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtY29sb3I7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gICYubWluaW1pemVkIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuICAgIHBhZGRpbmc6IDE2cHggMnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAudWstZHJvcGRvd24ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogNDRweDtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgJjpub3QoOmRpc2FibGVkKTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItaW5mbztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFkZC1ub3RlIHtcclxuICAubGluZSxcclxuICAudGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAudWstaWNvbjpub3QoLmRlbGV0ZSkge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItaW5mbztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTMwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgICAgIC8qIGJvcmRlci10b3A6IG5vbmU7ICovXHJcbiAgICAgIC8qIGJvcmRlci1sZWZ0OiBub25lOyAqL1xyXG4gICAgICAvKiBib3JkZXItcmlnaHQ6IG5vbmU7ICovXHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgfVxyXG4gICAgLnVrLWljb24ge1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51ay1tb2RhbC1oZWFkZXIgaDIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuIiwiJGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4kY29sb3ItaW5mbzogIzJjYThmZjtcclxuJGZvbnQtY29sb3I6IHdoaXRlO1xyXG4kY2FyZC1jb2xvcjogcmdiYShibGFjaywgMC42KTtcclxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(app_shared_custom_decorators__WEBPACK_IMPORTED_MODULE_3__["UIkitComponent"])(uikit.modal)
], RootComponent.prototype, "addNotesModal", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(app_shared_custom_decorators__WEBPACK_IMPORTED_MODULE_3__["UIkitComponent"])(uikit.modal)
], RootComponent.prototype, "creteFolderModal", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{ selector: 'app-root', templateUrl: './root.component.html', styleUrls: ['./root.component.scss'] }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { addNotesModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['addNoteModalRef']
        }], creteFolderModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['createFolderModalRef']
        }] }); })();


/***/ }),

/***/ "DZdI":
/*!*****************************************!*\
  !*** ./app/shared/types/uikit.types.ts ***!
  \*****************************************/
/*! exports provided: ModalEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEvents", function() { return ModalEvents; });
var ModalEvents;
(function (ModalEvents) {
    ModalEvents["show"] = "show";
    ModalEvents["beforeshow"] = "beforeshow";
    ModalEvents["hidden"] = "hidden";
})(ModalEvents || (ModalEvents = {}));


/***/ }),

/***/ "Drqw":
/*!***************************************!*\
  !*** ./crossover/crossover.models.ts ***!
  \***************************************/
/*! exports provided: DisplayInfo, AppConfig, GenericData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayInfo", function() { return DisplayInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericData", function() { return GenericData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _crossover_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossover-framework */ "UaQf");


let DisplayInfo = class DisplayInfo extends _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverModel"] {
};
DisplayInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["crossoverModel"]
], DisplayInfo);

let AppConfig = class AppConfig extends _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverModel"] {
};
AppConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["crossoverModel"]
], AppConfig);

let GenericData = class GenericData extends _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverModel"] {
};
GenericData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["crossoverModel"]
], GenericData);



/***/ }),

/***/ "FmIt":
/*!*********************************************!*\
  !*** ./app/shared/directives/directives.ts ***!
  \*********************************************/
/*! exports provided: ConfirmDeleteDirective, NgInitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteDirective", function() { return ConfirmDeleteDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgInitDirective", function() { return NgInitDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _components_confirmation_overlay_confirmation_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/confirmation-overlay/confirmation-overlay.component */ "56Nd");



class ConfirmDeleteDirective {
    constructor(elRef, componentFactoryResolver, viewContainerRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.onConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nativeElement = elRef.nativeElement;
        this.nativeElement["confirmDelete"] = () => this.confirmDelete();
    }
    confirmDelete() {
        this.nativeElement.style.filter = 'blur(2px)';
        this.nativeElement.parentElement.style.position = 'relative';
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_components_confirmation_overlay_confirmation_overlay_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationOverlayComponent"]);
        const componentRef = this.viewContainerRef.createComponent(componentFactory);
        componentRef.instance.confirmAction = () => this.handleAction(true);
        componentRef.instance.cancelAction = () => this.handleAction(false);
        this.confirmationOverlay = componentRef;
        var confirmationElement = componentRef.location.nativeElement;
        confirmationElement.style.left = this.nativeElement.offsetLeft - 1 + 'px';
        confirmationElement.style.top = this.nativeElement.offsetTop - 1 + 'px';
        confirmationElement.style.width = this.nativeElement.clientWidth + 2 + 'px';
        confirmationElement.style.height = this.nativeElement.clientHeight + 2 + 'px';
    }
    handleAction(confirm) {
        this.viewContainerRef.remove();
        this.nativeElement.style.filter = '';
        this.nativeElement.parentElement.style.position = 'relative';
        if (confirm && this.onConfirm.observers.length) {
            this.onConfirm.emit();
        }
        if (!confirm && this.onCancel.observers.length) {
            this.onCancel.emit();
        }
    }
}
ConfirmDeleteDirective.ɵfac = function ConfirmDeleteDirective_Factory(t) { return new (t || ConfirmDeleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ConfirmDeleteDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ConfirmDeleteDirective, selectors: [["", "confirm-delete", ""]], outputs: { onConfirm: "onConfirm", onCancel: "onCancel" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDeleteDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[confirm-delete]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { onConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
class NgInitDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.initEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.initEvent.emit(this.elRef.nativeElement);
    }
}
NgInitDirective.ɵfac = function NgInitDirective_Factory(t) { return new (t || NgInitDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NgInitDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgInitDirective, selectors: [["", "ngInit", ""]], outputs: { initEvent: "ngInit" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgInitDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngInit]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { initEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['ngInit']
        }] }); })();


/***/ }),

/***/ "NNSZ":
/*!************************************!*\
  !*** ./app/main-routing.module.ts ***!
  \************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");




const routes = [];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "UaQf":
/*!******************************************!*\
  !*** ./crossover/crossover-framework.ts ***!
  \******************************************/
/*! exports provided: crossoverModel, crossoverChannel, CrossoverChannel, CrossoverModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossoverModel", function() { return crossoverModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossoverChannel", function() { return crossoverChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossoverChannel", function() { return CrossoverChannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossoverModel", function() { return CrossoverModel; });
function crossoverModel(typeDef) {
    typeDef.internal_type_name = typeDef.name;
}
function crossoverChannel(typeDef) {
    typeDef.channelName = typeDef.name;
    console.log(typeDef);
    typeDef.with = mt => withType(typeDef, mt);
}
function withType(typeDef, modelTypeDef) {
    var crossOverChannel = new typeDef();
    console.log(crossOverChannel);
    crossOverChannel.channelName = typeDef.name;
    crossOverChannel.eventName = `${crossOverChannel.channelName}-${modelTypeDef.internal_type_name}`;
    return crossOverChannel;
}
class CrossoverChannel {
}
class CrossoverModel {
}


/***/ }),

/***/ "c27L":
/*!*****************************************!*\
  !*** ./app/shared/custom-decorators.ts ***!
  \*****************************************/
/*! exports provided: UIkitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIkitComponent", function() { return UIkitComponent; });
function UIkitComponent(uikitConstructor, options) {
    return function (target, key) {
        var newVal;
        Object.defineProperty(target, key, {
            get: () => newVal,
            set: (value) => newVal = options ? uikitConstructor(value.nativeElement, options) : uikitConstructor(value.nativeElement)
        });
    };
}


/***/ }),

/***/ "fL4D":
/*!****************************!*\
  !*** ./app/main.module.ts ***!
  \****************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-routing.module */ "NNSZ");
/* harmony import */ var _root_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root/root.component */ "D8Uu");
/* harmony import */ var _shared_directives_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/directives/directives */ "FmIt");
/* harmony import */ var _shared_components_confirmation_overlay_confirmation_overlay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/confirmation-overlay/confirmation-overlay.component */ "56Nd");








class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MainModule, bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_4__["RootComponent"]] });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_4__["RootComponent"],
        _shared_directives_directives__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteDirective"],
        _shared_directives_directives__WEBPACK_IMPORTED_MODULE_5__["NgInitDirective"],
        _shared_components_confirmation_overlay_confirmation_overlay_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationOverlayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _root_root_component__WEBPACK_IMPORTED_MODULE_4__["RootComponent"],
                    _shared_directives_directives__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteDirective"],
                    _shared_directives_directives__WEBPACK_IMPORTED_MODULE_5__["NgInitDirective"],
                    _shared_components_confirmation_overlay_confirmation_overlay_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationOverlayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_3__["MainRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_4__["RootComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "kCA1":
/*!**********************************!*\
  !*** ./app/root/note-actions.ts ***!
  \**********************************/
/*! exports provided: NoteActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteActions", function() { return NoteActions; });
/* harmony import */ var app_models_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/models/models */ "ubaN");

class NoteActions {
    constructor(note, onAction) {
        this.note = note;
        this.onAction = onAction;
    }
    completeLine(line) {
        line.state = app_models_models__WEBPACK_IMPORTED_MODULE_0__["NoteStates"].completed;
        this.onAction();
    }
    cancelLine(line) {
        line.state = app_models_models__WEBPACK_IMPORTED_MODULE_0__["NoteStates"].canceled;
        this.onAction();
    }
    inProgressLine(line) {
        line.state = app_models_models__WEBPACK_IMPORTED_MODULE_0__["NoteStates"].inProgress;
        this.onAction();
    }
    createNewLine() {
        this.note.lines.push({});
        this.note.state = app_models_models__WEBPACK_IMPORTED_MODULE_0__["NoteStates"].neutral;
        this.onAction();
    }
    ;
}


/***/ }),

/***/ "nbPW":
/*!*********************************************!*\
  !*** ./crossover/crossover-ipc.renderer.ts ***!
  \*********************************************/
/*! exports provided: Crossover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crossover", function() { return Crossover; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _crossover_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossover-framework */ "UaQf");


const electron = window.require ? window.require('electron') : undefined;
const electronNotPrezent = e => console.error('electron not available');
class Crossover {
    static send(channel, model) {
        let eventName = channel instanceof _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : channel.channelName;
        Crossover.electron.ipcRenderer.send(eventName, model);
    }
    static subscribe(channel, listener) {
        let eventName = channel instanceof _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : channel.channelName;
        Crossover.electron.ipcRenderer.on(eventName, listener);
    }
    static unsubscribe(channel, listener) {
        let eventName = channel instanceof _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : channel.channelName;
        Crossover.electron.ipcRenderer.removeListener(eventName, listener);
    }
    static get(channel, model) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let eventName = channel instanceof _crossover_framework__WEBPACK_IMPORTED_MODULE_1__["CrossoverChannel"] ? channel.eventName : channel.channelName;
            var result = yield Crossover.electron.ipcRenderer.invoke(eventName, model);
            return result;
        });
    }
}
Crossover.electron = electron || { ipcRenderer: { send: electronNotPrezent, on: electronNotPrezent, removeListener: electronNotPrezent, invoke: electronNotPrezent } };
Crossover.isElectronRunning = !!electron;


/***/ }),

/***/ "ubaN":
/*!******************************!*\
  !*** ./app/models/models.ts ***!
  \******************************/
/*! exports provided: Folder, Note, NoteStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteStates", function() { return NoteStates; });
class Folder {
}
class Note {
}
var NoteStates;
(function (NoteStates) {
    NoteStates["completed"] = "completed";
    NoteStates["inProgress"] = "inProgress";
    NoteStates["canceled"] = "canceled";
    NoteStates["important"] = "important";
    NoteStates["neutral"] = "neutral";
})(NoteStates || (NoteStates = {}));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map