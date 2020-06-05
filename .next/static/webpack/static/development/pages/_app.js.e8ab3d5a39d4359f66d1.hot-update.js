webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/index.es.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/polaris/styles.css */ \"./node_modules/@shopify/polaris/styles.css\");\n/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\");\nvar _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ \"./node_modules/@shopify/polaris/locales/en.json\", 1);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY;\n\nvar MyApp = /*#__PURE__*/function (_App) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyApp, _App);\n\n  var _super = _createSuper(MyApp);\n\n  function MyApp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MyApp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MyApp, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          Component = _this$props.Component,\n          pageProps = _this$props.pageProps;\n      var config = {\n        apiKey: \"f5e7eb0fea93993aab4df42de07f922a\",\n        shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_12___default.a.get('shopOrigin'),\n        forceRedirect: true\n      };\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(\"title\", null, \"Sample App\"), __jsx(\"meta\", {\n        charSet: \"utf-8\"\n      })), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__[\"Provider\"], {\n        config: config\n      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__[\"AppProvider\"], {\n        i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_11__\n      }, __jsx(Component, pageProps))));\n    }\n  }]);\n\n  return MyApp;\n}(next_app__WEBPACK_IMPORTED_MODULE_5___default.a);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIlNIT1BJRllfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uZmlnIiwiYXBpS2V5IiwiQVBJX0tFWSIsInNob3BPcmlnaW4iLCJDb29raWVzIiwiZ2V0IiwiZm9yY2VSZWRpcmVjdCIsInRyYW5zbGF0aW9ucyIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRVFBLGUsR0FBb0JDLE9BQU8sQ0FBQ0MsRyxDQUE1QkYsZTs7SUFDRkcsSzs7Ozs7Ozs7Ozs7Ozs2QkFDSztBQUFBLHdCQUMwQixLQUFLQyxLQUQvQjtBQUFBLFVBQ0NDLFNBREQsZUFDQ0EsU0FERDtBQUFBLFVBQ1lDLFNBRFosZUFDWUEsU0FEWjtBQUVQLFVBQU1DLE1BQU0sR0FBRztBQUNiQyxjQUFNLEVBQUVDLGtDQURLO0FBRWJDLGtCQUFVLEVBQUVDLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBRkM7QUFHYkMscUJBQWEsRUFBRTtBQUhGLE9BQWY7QUFLQSxhQUNFLG1FQUNFLE1BQUMsZ0RBQUQsUUFDRSxrQ0FERixFQUVFO0FBQU0sZUFBTyxFQUFDO0FBQWQsUUFGRixDQURGLEVBS0UsTUFBQyxrRUFBRDtBQUFVLGNBQU0sRUFBRU47QUFBbEIsU0FDRSxNQUFDLDREQUFEO0FBQWEsWUFBSSxFQUFFTyw4REFBWUE7QUFBL0IsU0FDRSxNQUFDLFNBQUQsRUFBZVIsU0FBZixDQURGLENBREYsQ0FMRixDQURGO0FBYUQ7Ozs7RUFyQmlCUywrQzs7QUF3QkxaLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUHJvdmlkZXIgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgJ0BzaG9waWZ5L3BvbGFyaXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMvbG9jYWxlcy9lbi5qc29uJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IHsgU0hPUElGWV9BUElfS0VZIH0gPSBwcm9jZXNzLmVudjtcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXBpS2V5OiBBUElfS0VZLFxuICAgICAgc2hvcE9yaWdpbjogQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSxcbiAgICAgIGZvcmNlUmVkaXJlY3Q6IHRydWUsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlNhbXBsZSBBcHA8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFByb3ZpZGVyIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgICAgICA8QXBwUHJvdmlkZXIgaTE4bj17dHJhbnNsYXRpb25zfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0FwcFByb3ZpZGVyPlxuICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ })

})