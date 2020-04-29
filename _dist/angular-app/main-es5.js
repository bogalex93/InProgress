function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./app/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./app/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function app$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./app/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./app/global/environment.ts":
  /*!***********************************!*\
    !*** ./app/global/environment.ts ***!
    \***********************************/

  /*! exports provided: environment */

  /***/
  function appGlobalEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./app/main-routing.module.ts":
  /*!************************************!*\
    !*** ./app/main-routing.module.ts ***!
    \************************************/

  /*! exports provided: MainRoutingModule */

  /***/
  function appMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function () {
      return MainRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var MainRoutingModule = function MainRoutingModule() {
      _classCallCheck(this, MainRoutingModule);
    };

    MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MainRoutingModule
    });
    MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MainRoutingModule_Factory(t) {
        return new (t || MainRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./app/main.module.ts":
  /*!****************************!*\
    !*** ./app/main.module.ts ***!
    \****************************/

  /*! exports provided: MainModule */

  /***/
  function appMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainModule", function () {
      return MainModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main-routing.module */
    "./app/main-routing.module.ts");
    /* harmony import */


    var _root_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./root/root.component */
    "./app/root/root.component.ts");

    var MainModule = function MainModule() {
      _classCallCheck(this, MainModule);
    };

    MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MainModule,
      bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]]
    });
    MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MainModule_Factory(t) {
        return new (t || MainModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MainModule, {
        declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"]],
          providers: [],
          bootstrap: [_root_root_component__WEBPACK_IMPORTED_MODULE_3__["RootComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./app/main.ts":
  /*!*********************!*\
    !*** ./app/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function appMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./global/environment */
    "./app/global/environment.ts");
    /* harmony import */


    var crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! crossover/crossover-ipc.renderer */
    "./crossover/crossover-ipc.renderer.ts");
    /* harmony import */


    var crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! crossover/crossover.channels */
    "./crossover/crossover.channels.ts");
    /* harmony import */


    var _main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main.module */
    "./app/main.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_global_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    function takeScreenShot(screenMeta) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var maxDimension, thumbSize, options, sources, image;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                maxDimension = Math.max(screenMeta.width, screenMeta.height);
                thumbSize = {
                  width: maxDimension * window.devicePixelRatio,
                  height: maxDimension * window.devicePixelRatio
                };
                options = {
                  types: ['screen'],
                  thumbnailSize: thumbSize
                };
                _context.next = 5;
                return crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__["CrossoverRenderer"].electron.desktopCapturer.getSources(options);

              case 5:
                sources = _context.sent;
                image = sources[0].thumbnail.toDataURL();
                document.body.style.background = "url(\"".concat(image, "\") top right no-repeat");
                document.body.style.backgroundAttachment = "fixed";

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }

    crossover_crossover_ipc_renderer__WEBPACK_IMPORTED_MODULE_3__["CrossoverRenderer"].subscribe(crossover_crossover_channels__WEBPACK_IMPORTED_MODULE_4__["InitializationEvents"], function (e, m) {
      return takeScreenShot(m);
    });

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["platformBrowser"]().bootstrapModule(_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  "./app/root/root.component.ts":
  /*!************************************!*\
    !*** ./app/root/root.component.ts ***!
    \************************************/

  /*! exports provided: RootComponent */

  /***/
  function appRootRootComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootComponent", function () {
      return RootComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RootComponent = /*#__PURE__*/function () {
      function RootComponent() {
        _classCallCheck(this, RootComponent);

        this.title = "it works";
      }

      _createClass(RootComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return RootComponent;
    }();

    RootComponent.ɵfac = function RootComponent_Factory(t) {
      return new (t || RootComponent)();
    };

    RootComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RootComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 2,
      consts: [[3, "innerText"]],
      template: function RootComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.screenMeta);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcm9vdC9yb290LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RootComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './root.component.html',
          styleUrls: ['./root.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./crossover/crossover-ipc.renderer.ts":
  /*!*********************************************!*\
    !*** ./crossover/crossover-ipc.renderer.ts ***!
    \*********************************************/

  /*! exports provided: CrossoverRenderer */

  /***/
  function crossoverCrossoverIpcRendererTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrossoverRenderer", function () {
      return CrossoverRenderer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var electron = window.require('electron');

    var CrossoverRenderer = /*#__PURE__*/function () {
      function CrossoverRenderer() {
        _classCallCheck(this, CrossoverRenderer);
      }

      _createClass(CrossoverRenderer, null, [{
        key: "send",
        value: function send(channel, model) {
          var channelName = new channel().constructor.name;
          electron.ipcRenderer.send(channelName, model);
        }
      }, {
        key: "subscribe",
        value: function subscribe(channel, listener) {
          var channelName = new channel().constructor.name;
          electron.ipcRenderer.on(channelName, listener);
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe(channel, listener) {
          var channelName = new channel().constructor.name;
          electron.ipcRenderer.removeListener(channelName, listener);
        }
      }, {
        key: "get",
        value: function get(channel, model) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var channelName, result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    channelName = new channel().constructor.name;
                    _context3.next = 3;
                    return electron.ipcRenderer.invoke(channelName, model);

                  case 3:
                    result = _context3.sent;
                    return _context3.abrupt("return", result);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }]);

      return CrossoverRenderer;
    }();

    CrossoverRenderer.electron = electron;
    /***/
  },

  /***/
  "./crossover/crossover.channels.ts":
  /*!*****************************************!*\
    !*** ./crossover/crossover.channels.ts ***!
    \*****************************************/

  /*! exports provided: CrossoverChannel, WindowEvents, InitializationEvents */

  /***/
  function crossoverCrossoverChannelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrossoverChannel", function () {
      return CrossoverChannel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WindowEvents", function () {
      return WindowEvents;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitializationEvents", function () {
      return InitializationEvents;
    });

    var CrossoverChannel = function CrossoverChannel() {
      _classCallCheck(this, CrossoverChannel);
    };

    var WindowEvents = /*#__PURE__*/function (_CrossoverChannel) {
      _inherits(WindowEvents, _CrossoverChannel);

      var _super = _createSuper(WindowEvents);

      function WindowEvents() {
        _classCallCheck(this, WindowEvents);

        return _super.apply(this, arguments);
      }

      return WindowEvents;
    }(CrossoverChannel);

    var InitializationEvents = /*#__PURE__*/function (_CrossoverChannel2) {
      _inherits(InitializationEvents, _CrossoverChannel2);

      var _super2 = _createSuper(InitializationEvents);

      function InitializationEvents() {
        _classCallCheck(this, InitializationEvents);

        return _super2.apply(this, arguments);
      }

      return InitializationEvents;
    }(CrossoverChannel);
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./app/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Projects\InProgress\app\main.ts */
    "./app/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map