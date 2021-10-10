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
    className: "max-w-lg mx-auto",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow-md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "rounded-t-lg",
        src: props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg",
        alt: props.alt ? props.alt : "dynamic cards",
        width: "5000",
        height: "3000",
        layout: "responsive"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "p-5",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          className: "mb-2 text-2xl font-bold tracking-tight text-gray-900",
          children: props.heading ? props.heading : "Heading"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: "mb-3 font-normal text-gray-700",
          children: props.txt ? props.txt : "\n                      Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Omnis ullam quia repellat eius harum saepe velit aut maxime\n                      tempora ipsum.\n                     "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          onClick: props.click,
          className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300",
          children: "Read more"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImltZyIsImFsdCIsImhlYWRpbmciLCJ0eHQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3BCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsbUVBQWY7QUFBQSw4QkFFSSw4REFBQyxtREFBRDtBQUFPLGlCQUFTLEVBQUMsY0FBakI7QUFBZ0MsV0FBRyxFQUFFQSxLQUFLLENBQUNDLEdBQU4sR0FBWUQsS0FBSyxDQUFDQyxHQUFsQixHQUF3Qix3Q0FBN0Q7QUFDSSxXQUFHLEVBQUVELEtBQUssQ0FBQ0UsR0FBTixHQUFZRixLQUFLLENBQUNFLEdBQWxCLEdBQXdCLGVBRGpDO0FBRUksYUFBSyxFQUFDLE1BRlY7QUFHSSxjQUFNLEVBQUMsTUFIWDtBQUlJLGNBQU0sRUFBQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQVNJO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBRUk7QUFBSSxtQkFBUyxFQUFDLHNEQUFkO0FBQUEsb0JBQ0tGLEtBQUssQ0FBQ0csT0FBTixHQUFnQkgsS0FBSyxDQUFDRyxPQUF0QixHQUFnQztBQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBTUk7QUFBRyxtQkFBUyxFQUFDLGdDQUFiO0FBQUEsb0JBQ0tILEtBQUssQ0FBQ0ksR0FBTixHQUFZSixLQUFLLENBQUNJLEdBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSixlQWFJO0FBQUcsaUJBQU8sRUFBRUosS0FBSyxDQUFDSyxLQUFsQjtBQUF5QixtQkFBUyxFQUFDLHlKQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErQkgsQ0FoQ0Q7O0tBQU1OLEk7QUFrQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3BhZ2UuMGI4YjY4YzljMGRkNTlmZGE3ZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmNvbnN0IENhcmQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gbS01IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwicm91bmRlZC10LWxnXCIgc3JjPXtwcm9wcy5pbWcgPyBwcm9wcy5pbWcgOiBcIi9pdmFuLWJhbmR1cmEtRVdWWE1vSVdscEEtdW5zcGxhc2guanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9wcy5hbHQgPyBwcm9wcy5hbHQgOiBcImR5bmFtaWMgY2FyZHNcIn1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD0nNTAwMCdcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzMwMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaGVhZGluZyA/IHByb3BzLmhlYWRpbmcgOiBcIkhlYWRpbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnR4dCA/IHByb3BzLnR4dCA6IGBcclxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17cHJvcHMuY2xpY2t9IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctYmx1ZS0zMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=