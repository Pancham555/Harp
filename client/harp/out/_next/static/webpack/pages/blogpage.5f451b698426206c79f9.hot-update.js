self["webpackHotUpdate_N_E"]("pages/blogpage",{

/***/ "./redux/redux.js":
/*!************************!*\
  !*** ./redux/redux.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redux": function() { return /* binding */ redux; },
/* harmony export */   "linker": function() { return /* binding */ linker; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var initial = {
  value: "abra ka dabra"
};
var redux = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "redux",
  initialState: initial,
  reducers: {
    linker: function linker(state, action) {
      state.value = "Hello ji";
    }
  }
});
var linker = redux.actions.linker;

/* harmony default export */ __webpack_exports__["default"] = (redux.reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdXguanMiXSwibmFtZXMiOlsiaW5pdGlhbCIsInZhbHVlIiwicmVkdXgiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImxpbmtlciIsInN0YXRlIiwiYWN0aW9uIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNaQyxPQUFLLEVBQUU7QUFESyxDQUFoQjtBQUlPLElBQU1DLEtBQUssR0FBR0MsNkRBQVcsQ0FBQztBQUM3QkMsTUFBSSxFQUFFLE9BRHVCO0FBRTdCQyxjQUFZLEVBQUVMLE9BRmU7QUFHN0JNLFVBQVEsRUFBRTtBQUNOQyxVQUFNLEVBQUUsZ0JBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN2QkQsV0FBSyxDQUFDUCxLQUFOLEdBQWMsVUFBZDtBQUNIO0FBSEs7QUFIbUIsQ0FBRCxDQUF6QjtJQVVRTSxNLEdBQVdMLEtBQUssQ0FBQ1EsTyxDQUFqQkgsTTs7QUFFZiwrREFBZUwsS0FBSyxDQUFDUyxPQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncGFnZS41ZjQ1MWI2OTg0MjYyMDZjNzlmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbCA9IHtcclxuICAgIHZhbHVlOiBcImFicmEga2EgZGFicmFcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdXggPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInJlZHV4XCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWwsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGxpbmtlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudmFsdWUgPSBcIkhlbGxvIGppXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBsaW5rZXIgfSA9IHJlZHV4LmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4LnJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9