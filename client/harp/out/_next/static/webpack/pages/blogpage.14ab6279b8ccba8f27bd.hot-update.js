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
    className: "w-auto h-auto m-5 cursor-pointer select-none md:w-96",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full h-64",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg",
        alt: props.alt ? props.alt : "dynamic cards",
        width: "1000",
        height: "660",
        layout: "responsive",
        unoptimized: true,
        quality: "40",
        className: "w-full h-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-2 font-medium",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "my-2 text-2xl",
        children: props.heading ? props.heading : "Heading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "",
        children: props.txt ? props.txt : "\n                     Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                     Omnis ullam quia repellat eius harum saepe velit aut maxime\n                     tempora ipsum.\n                    "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImltZyIsImFsdCIsImhlYWRpbmciLCJ0eHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUNwQixzQkFDSTtBQUFLLGFBQVMsRUFBQyxzREFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw2QkFDSSw4REFBQyxtREFBRDtBQUFPLFdBQUcsRUFBRUEsS0FBSyxDQUFDQyxHQUFOLEdBQVlELEtBQUssQ0FBQ0MsR0FBbEIsR0FBd0Isd0NBQXBDO0FBQThFLFdBQUcsRUFBRUQsS0FBSyxDQUFDRSxHQUFOLEdBQVlGLEtBQUssQ0FBQ0UsR0FBbEIsR0FBd0IsZUFBM0c7QUFDSSxhQUFLLEVBQUMsTUFEVjtBQUVJLGNBQU0sRUFBQyxLQUZYO0FBR0ksY0FBTSxFQUFDLFlBSFg7QUFJSSxtQkFBVyxFQUFFLElBSmpCO0FBS0ksZUFBTyxFQUFDLElBTFo7QUFNSSxpQkFBUyxFQUFDO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVdJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxrQkFBZ0NGLEtBQUssQ0FBQ0csT0FBTixHQUFnQkgsS0FBSyxDQUFDRyxPQUF0QixHQUFnQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFBLGtCQUNLSCxLQUFLLENBQUNJLEdBQU4sR0FBWUosS0FBSyxDQUFDSSxHQUFsQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdCSCxDQXpCRDs7S0FBTUwsSTtBQTJCTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncGFnZS4xNGFiNjI3OWI4Y2NiYThmMjdiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBoLWF1dG8gbS01IGN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lIG1kOnctOTZcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvcHMuaW1nID8gcHJvcHMuaW1nIDogXCIvaXZhbi1iYW5kdXJhLUVXVlhNb0lXbHBBLXVuc3BsYXNoLmpwZ1wifSBhbHQ9e3Byb3BzLmFsdCA/IHByb3BzLmFsdCA6IFwiZHluYW1pYyBjYXJkc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nNjYwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcclxuICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5PSc0MCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0yIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgdGV4dC0yeGxcIj57cHJvcHMuaGVhZGluZyA/IHByb3BzLmhlYWRpbmcgOiBcIkhlYWRpbmdcIn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnR4dCA/IHByb3BzLnR4dCA6IGBcclxuICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgICAgICAgICAgICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=