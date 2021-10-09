self["webpackHotUpdate_N_E"]("pages/_app",{

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
  value: ""
};
var redux = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "redux",
  initialState: initial,
  reducers: {
    linker: function linker(state, action) {
      state.value = action.payload;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvcmVkdXguanMiXSwibmFtZXMiOlsiaW5pdGlhbCIsInZhbHVlIiwicmVkdXgiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImxpbmtlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxPQUFPLEdBQUc7QUFDWkMsT0FBSyxFQUFFO0FBREssQ0FBaEI7QUFJTyxJQUFNQyxLQUFLLEdBQUdDLDZEQUFXLENBQUM7QUFDN0JDLE1BQUksRUFBRSxPQUR1QjtBQUU3QkMsY0FBWSxFQUFFTCxPQUZlO0FBRzdCTSxVQUFRLEVBQUU7QUFDTkMsVUFBTSxFQUFFLGdCQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDdkJELFdBQUssQ0FBQ1AsS0FBTixHQUFjUSxNQUFNLENBQUNDLE9BQXJCO0FBQ0g7QUFISztBQUhtQixDQUFELENBQXpCO0lBVVFILE0sR0FBV0wsS0FBSyxDQUFDUyxPLENBQWpCSixNOztBQUVmLCtEQUFlTCxLQUFLLENBQUNVLE9BQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYzU3Njc0ODA4Njk5MzZmNDlhODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWwgPSB7XHJcbiAgICB2YWx1ZTogXCJcIlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdXggPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInJlZHV4XCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IGluaXRpYWwsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGxpbmtlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudmFsdWUgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IGxpbmtlciB9ID0gcmVkdXguYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdXgucmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=