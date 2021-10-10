self["webpackHotUpdate_N_E"]("pages/blogpage",{

/***/ "./Components/card.js":
/*!****************************!*\
  !*** ./Components/card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\Components\\card.js",
    _this = undefined;




var Card = function Card(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "my-5 bg-white border border-gray-200 rounded-lg shadow-md w-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "rounded-t-lg",
        src: props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg",
        alt: props.alt ? props.alt : "dynamic cards",
        width: "5000",
        height: "3000",
        layout: "responsive",
        unoptimized: true,
        quality: "35"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          className: "mb-2 text-2xl font-bold tracking-tight text-gray-900 break-words",
          children: props.heading ? props.heading : "Heading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "mb-3 font-medium text-gray-700 break-words",
          children: props.txt ? props.txt : "\n                      Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Omnis ullam quia repellat eius harum saepe velit aut maxime\n                      tempora ipsum.\n                     "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          onClick: props.click,
          className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white duration-150 bg-blue-700 rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300",
          children: "Read more"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImltZyIsImFsdCIsImhlYWRpbmciLCJ0eHQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3BCLHNCQUNJO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxnRUFBZjtBQUFBLDhCQUVJLDhEQUFDLG1EQUFEO0FBQU8saUJBQVMsRUFBQyxjQUFqQjtBQUFnQyxXQUFHLEVBQUVBLEtBQUssQ0FBQ0MsR0FBTixHQUFZRCxLQUFLLENBQUNDLEdBQWxCLEdBQXdCLHdDQUE3RDtBQUNJLFdBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQUFOLEdBQVlGLEtBQUssQ0FBQ0UsR0FBbEIsR0FBd0IsZUFEakM7QUFFSSxhQUFLLEVBQUMsTUFGVjtBQUdJLGNBQU0sRUFBQyxNQUhYO0FBSUksY0FBTSxFQUFDLFlBSlg7QUFLSSxtQkFBVyxFQUFFLElBTGpCO0FBTUksZUFBTyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBV0k7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQSxnQ0FFSTtBQUFJLG1CQUFTLEVBQUMsa0VBQWQ7QUFBQSxvQkFDS0YsS0FBSyxDQUFDRyxPQUFOLEdBQWdCSCxLQUFLLENBQUNHLE9BQXRCLEdBQWdDO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFNSTtBQUFHLG1CQUFTLEVBQUMsNENBQWI7QUFBQSxvQkFDS0gsS0FBSyxDQUFDSSxHQUFOLEdBQVlKLEtBQUssQ0FBQ0ksR0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBYUk7QUFBRyxpQkFBTyxFQUFFSixLQUFLLENBQUNLLEtBQWxCO0FBQXlCLG1CQUFTLEVBQUMscUxBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlDSCxDQWxDRDs7S0FBTU4sSTtBQW9DTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncGFnZS5hZmVmYmY3YzQwYmU3YjEyZjliYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LXNtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT1cInJvdW5kZWQtdC1sZ1wiIHNyYz17cHJvcHMuaW1nID8gcHJvcHMuaW1nIDogXCIvaXZhbi1iYW5kdXJhLUVXVlhNb0lXbHBBLXVuc3BsYXNoLmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvcHMuYWx0ID8gcHJvcHMuYWx0IDogXCJkeW5hbWljIGNhcmRzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzUwMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PSczMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcclxuICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5PSczNSdcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgYnJlYWstd29yZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhlYWRpbmcgPyBwcm9wcy5oZWFkaW5nIDogXCJIZWFkaW5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIGJyZWFrLXdvcmRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50eHQgPyBwcm9wcy50eHQgOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgICAgICAgICAgICAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBkdXJhdGlvbi0xNTAgYmctYmx1ZS03MDAgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6cmluZy1ibHVlLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==