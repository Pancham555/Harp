self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./Components/Navbar.js":
/*!******************************!*\
  !*** ./Components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _slidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slidebar */ "./Components/slidebar.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\Components\\Navbar.js",
    _this = undefined,
    _s = $RefreshSig$();







var Navbar = function Navbar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      state = _useState[0],
      setState = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      opener = _useState2[0],
      setOpener = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      searchBar = _useState3[0],
      setSearchBar = _useState3[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "sticky top-0 left-0 right-0 z-40 bg-white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
      initial: {
        width: 0,
        height: 0
      },
      animate: searchBar ? {
        width: "auto",
        height: "auto"
      } : {
        width: 0,
        height: 0
      },
      transition: {
        type: "tween"
      },
      className: "fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center mx-auto overflow-hidden font-medium bg-white shadow-2xl select-none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "absolute top-0 left-0 m-5 text-3xl font-black cursor-pointer",
        onClick: function onClick() {
          return setSearchBar(false);
        },
        children: "\u2190"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col justify-center w-full h-auto px-5 py-2",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-between w-full mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            type: "text",
            placeholder: "Enter your search term",
            className: "w-full h-10 px-2 my-auto border-2 border-blue-500 rounded-md outline-none ring-blue-500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "px-5 py-3 mx-2 text-white bg-blue-500 rounded-md cursor-pointer",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "z-40 bg-white shadow-2xl select-none ",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-between px-3 py-3 md:py-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "px-4 my-auto text-2xl font-medium cursor-pointer",
            children: "Harp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-between my-auto md:justify-evenly",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-5 h-5 mx-5 my-auto cursor-pointer md:mx-0",
            onClick: function onClick() {
              return setSearchBar(true);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              width: "100",
              height: "100",
              src: "/magnifying-glass-search.png",
              layout: "intrinsic",
              quality: "100",
              alt: "search",
              unoptimized: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative hidden mx-5 my-auto text-xl font-medium md:flex justify-evenly",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/blog",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "px-3 mx-2 cursor-pointer",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/feedback",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "px-3 mx-2 cursor-pointer",
                children: "Feedback"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/about",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "px-3 mx-2 cursor-pointer",
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/profile",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "relative w-8 h-8 mx-2 my-auto cursor-pointer",
                onClick: function onClick() {
                  return setState(!state);
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                  width: "1000",
                  height: "1000",
                  src: "/profile-user.png",
                  layout: "intrinsic",
                  quality: "100",
                  alt: "User image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inline-block mx-5 my-auto text-2xl font-black cursor-pointer md:hidden",
            onClick: function onClick() {
              return setOpener(!opener);
            },
            children: "\u2630"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_slidebar__WEBPACK_IMPORTED_MODULE_4__.default, {
        width: opener,
        click: function click() {
          return setOpener(!opener);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, _this);
};

_s(Navbar, "9/cnzhGBzF460YL/xaGQ9bA/k+8=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwib3BlbmVyIiwic2V0T3BlbmVyIiwic2VhcmNoQmFyIiwic2V0U2VhcmNoQmFyIiwid2lkdGgiLCJoZWlnaHQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDU0MsK0NBQVEsQ0FBQyxLQUFELENBRGpCO0FBQUEsTUFDVkMsS0FEVTtBQUFBLE1BQ0hDLFFBREc7O0FBQUEsbUJBRVdGLCtDQUFRLENBQUMsS0FBRCxDQUZuQjtBQUFBLE1BRVZHLE1BRlU7QUFBQSxNQUVGQyxTQUZFOztBQUFBLG1CQUdpQkosK0NBQVEsQ0FBQyxLQUFELENBSHpCO0FBQUEsTUFHVkssU0FIVTtBQUFBLE1BR0NDLFlBSEQ7O0FBSWpCLHNCQUNJO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUEsNEJBQ0ksOERBQUMscURBQUQ7QUFDSSxhQUFPLEVBQUU7QUFBRUMsYUFBSyxFQUFFLENBQVQ7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BRGI7QUFFSSxhQUFPLEVBQUVILFNBQVMsR0FBRztBQUFFRSxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBTSxFQUFFO0FBQXpCLE9BQUgsR0FBdUM7QUFBRUQsYUFBSyxFQUFFLENBQVQ7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BRjdEO0FBR0ksZ0JBQVUsRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUhoQjtBQUlJLGVBQVMsRUFBQyxrSUFKZDtBQUFBLDhCQUtJO0FBQUssaUJBQVMsRUFBQyw4REFBZjtBQUE4RSxlQUFPLEVBQUU7QUFBQSxpQkFBTUgsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxTQUF2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ZUFvQ0k7QUFDSSxxQkFBUyxFQUFDLHdFQURkO0FBQ3VGLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUcsU0FBUyxDQUFDLENBQUNELE1BQUYsQ0FBZjtBQUFBLGFBRGhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFtREksOERBQUMsOENBQUQ7QUFBVSxhQUFLLEVBQUVBLE1BQWpCO0FBQXlCLGFBQUssRUFBRTtBQUFBLGlCQUFNQyxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQW5ESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3RUgsQ0E1RUQ7O0dBQU1KLE07O0tBQUFBLE07QUE4RU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuYzZlMDMxM2NmMjM0YjM2NTBhYzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgU2xpZGViYXIgZnJvbSAnLi9zbGlkZWJhcidcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtvcGVuZXIsIHNldE9wZW5lcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzZWFyY2hCYXIsIHNldFNlYXJjaEJhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0aWNreSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTQwIGJnLXdoaXRlJz5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgd2lkdGg6IDAsIGhlaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17c2VhcmNoQmFyID8geyB3aWR0aDogXCJhdXRvXCIsIGhlaWdodDogXCJhdXRvXCIgfSA6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInR3ZWVuXCIgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHotNTAgZmxleCBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG92ZXJmbG93LWhpZGRlbiBmb250LW1lZGl1bSBiZy13aGl0ZSBzaGFkb3ctMnhsIHNlbGVjdC1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBtLTUgdGV4dC0zeGwgZm9udC1ibGFjayBjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaEJhcihmYWxzZSl9PiZsYXJyOzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gcHgtNSBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBzZWFyY2ggdGVybSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIGgtMTAgcHgtMiBteS1hdXRvIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSByaW5nLWJsdWUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTUgcHktMyBteC0yIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiPlNlYXJjaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3otNDAgYmctd2hpdGUgc2hhZG93LTJ4bCBzZWxlY3Qtbm9uZSAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0zIHB5LTMgbWQ6cHktM1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IG15LWF1dG8gdGV4dC0yeGwgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXJcIj5IYXJwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gbXktYXV0byBtZDpqdXN0aWZ5LWV2ZW5seSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01IGgtNSBteC01IG15LWF1dG8gY3Vyc29yLXBvaW50ZXIgbWQ6bXgtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hCYXIodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvbWFnbmlmeWluZy1nbGFzcy1zZWFyY2gucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ludHJpbnNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5PScxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGhpZGRlbiBteC01IG15LWF1dG8gdGV4dC14bCBmb250LW1lZGl1bSBtZDpmbGV4IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvYmxvZycgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIG14LTIgY3Vyc29yLXBvaW50ZXJcIj5CbG9nPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZmVlZGJhY2snIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBteC0yIGN1cnNvci1wb2ludGVyXCI+RmVlZGJhY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIG14LTIgY3Vyc29yLXBvaW50ZXJcIj5BYm91dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2ZpbGUnIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy04IGgtOCBteC0yIG15LWF1dG8gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSghc3RhdGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9wcm9maWxlLXVzZXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD0naW50cmluc2ljJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT0nMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlciBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbXgtNSBteS1hdXRvIHRleHQtMnhsIGZvbnQtYmxhY2sgY3Vyc29yLXBvaW50ZXIgbWQ6aGlkZGVuXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbmVyKCFvcGVuZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDimLBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGViYXIgd2lkdGg9e29wZW5lcn0gY2xpY2s9eygpID0+IHNldE9wZW5lcighb3BlbmVyKX0gLz5cclxuICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=