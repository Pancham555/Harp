self["webpackHotUpdate_N_E"]("pages/index",{

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
  return (
    /*#__PURE__*/
    // <div className="w-auto h-auto m-5 cursor-pointer select-none md:w-96">
    //     <div className="w-full h-64">
    //         <Image src={props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg"} alt={props.alt ? props.alt : "dynamic cards"}
    //             width='1000'
    //             height='660'
    //             layout='responsive'
    //             unoptimized={true}
    //             quality='40'
    //             className='w-full h-full'
    //         />
    //     </div>
    //     <div className="mx-2 font-medium">
    //         <div className="my-2 text-2xl">{props.heading ? props.heading : "Heading"}</div>
    //         <div className="">
    //             {props.txt ? props.txt : `
    //              Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //              Omnis ullam quia repellat eius harum saepe velit aut maxime
    //              tempora ipsum.
    //             `}
    //         </div>
    //     </div>
    // </div>
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-lg mx-auto",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "max-w-sm m-5 bg-white border border-gray-200 rounded-lg shadow-md",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "rounded-t-lg",
          src: props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg",
          alt: props.alt ? props.alt : "dynamic cards",
          layout: "intrinsic"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-5",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
            className: "mb-2 text-2xl font-bold tracking-tight text-gray-900",
            children: props.heading ? props.heading : "Heading"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mb-3 font-normal text-gray-700",
            children: props.txt ? props.txt : "\n                      Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                      Omnis ullam quia repellat eius harum saepe velit aut maxime\n                      tempora ipsum.\n                     "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: props.click,
            className: "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300",
            children: "Read more"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, _this)
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImltZyIsImFsdCIsImhlYWRpbmciLCJ0eHQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3BCO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLG1FQUFmO0FBQUEsZ0NBRUksOERBQUMsbURBQUQ7QUFBTyxtQkFBUyxFQUFDLGNBQWpCO0FBQWdDLGFBQUcsRUFBRUEsS0FBSyxDQUFDQyxHQUFOLEdBQVlELEtBQUssQ0FBQ0MsR0FBbEIsR0FBd0Isd0NBQTdEO0FBQ0ksYUFBRyxFQUFFRCxLQUFLLENBQUNFLEdBQU4sR0FBWUYsS0FBSyxDQUFDRSxHQUFsQixHQUF3QixlQURqQztBQUVJLGdCQUFNLEVBQUM7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBT0k7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FFSTtBQUFJLHFCQUFTLEVBQUMsc0RBQWQ7QUFBQSxzQkFDS0YsS0FBSyxDQUFDRyxPQUFOLEdBQWdCSCxLQUFLLENBQUNHLE9BQXRCLEdBQWdDO0FBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFNSTtBQUFHLHFCQUFTLEVBQUMsZ0NBQWI7QUFBQSxzQkFDS0gsS0FBSyxDQUFDSSxHQUFOLEdBQVlKLEtBQUssQ0FBQ0ksR0FBbEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5KLGVBYUk7QUFBRyxtQkFBTyxFQUFFSixLQUFLLENBQUNLLEtBQWxCO0FBQXlCLHFCQUFTLEVBQUMseUpBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkJKO0FBbURILENBcEREOztLQUFNTixJO0FBc0ROLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZjYTg5M2IxZGM0Y2U4Y2I4Mjc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtYXV0byBtLTUgY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmUgbWQ6dy05NlwiPlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTY0XCI+XHJcbiAgICAgICAgLy8gICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9wcy5pbWcgPyBwcm9wcy5pbWcgOiBcIi9pdmFuLWJhbmR1cmEtRVdWWE1vSVdscEEtdW5zcGxhc2guanBnXCJ9IGFsdD17cHJvcHMuYWx0ID8gcHJvcHMuYWx0IDogXCJkeW5hbWljIGNhcmRzXCJ9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgd2lkdGg9JzEwMDAnXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaGVpZ2h0PSc2NjAnXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGF5b3V0PSdyZXNwb25zaXZlJ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHVub3B0aW1pemVkPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHF1YWxpdHk9JzQwJ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCdcclxuICAgICAgICAvLyAgICAgICAgIC8+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTIgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiB0ZXh0LTJ4bFwiPntwcm9wcy5oZWFkaW5nID8gcHJvcHMuaGVhZGluZyA6IFwiSGVhZGluZ1wifTwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICB7cHJvcHMudHh0ID8gcHJvcHMudHh0IDogYFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICB0ZW1wb3JhIGlwc3VtLlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gbS01IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwicm91bmRlZC10LWxnXCIgc3JjPXtwcm9wcy5pbWcgPyBwcm9wcy5pbWcgOiBcIi9pdmFuLWJhbmR1cmEtRVdWWE1vSVdscEEtdW5zcGxhc2guanBnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9wcy5hbHQgPyBwcm9wcy5hbHQgOiBcImR5bmFtaWMgY2FyZHNcIn1cclxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ludHJpbnNpYydcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmhlYWRpbmcgPyBwcm9wcy5oZWFkaW5nIDogXCJIZWFkaW5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50eHQgPyBwcm9wcy50eHQgOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgICAgICAgICAgICAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpyaW5nLWJsdWUtMzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iXSwic291cmNlUm9vdCI6IiJ9