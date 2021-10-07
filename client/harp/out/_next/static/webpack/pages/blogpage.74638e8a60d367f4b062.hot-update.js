self["webpackHotUpdate_N_E"]("pages/blogpage",{

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
    style: {
      WebkitTapHighlightColor: "transparent"
    },
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
      className: "fixed top-0 left-0 right-0 z-50 flex justify-center mx-auto overflow-hidden font-medium shadow-2xl select-none",
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
        className: "w-full h-screen",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex justify-center w-full px-5 py-16 bg-white",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex justify-between w-full h-full",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              placeholder: "Enter your search term",
              className: "w-full h-10 px-2 border-2 border-blue-500 rounded-md outline-none ring-blue-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inline px-5 py-3 mx-2 text-white bg-blue-500 rounded-md cursor-pointer",
              children: "Search"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
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
            lineNumber: 33,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
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
              lineNumber: 39,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "relative hidden mx-5 my-auto text-xl font-medium md:flex justify-evenly",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/blogpage",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "px-3 mx-2 cursor-pointer",
                children: "Blogs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/feedback",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "px-3 mx-2 cursor-pointer",
                children: "Feedback"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/about",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "px-3 mx-2 cursor-pointer",
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
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
                  alt: "User image",
                  unoptimized: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "inline-block mx-5 my-auto text-2xl font-black cursor-pointer md:hidden",
            onClick: function onClick() {
              return setOpener(!opener);
            },
            children: "\u2630"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_slidebar__WEBPACK_IMPORTED_MODULE_4__.default, {
        width: opener,
        click: function click() {
          return setOpener(!opener);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwib3BlbmVyIiwic2V0T3BlbmVyIiwic2VhcmNoQmFyIiwic2V0U2VhcmNoQmFyIiwiV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3IiLCJ3aWR0aCIsImhlaWdodCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNTQywrQ0FBUSxDQUFDLEtBQUQsQ0FEakI7QUFBQSxNQUNWQyxLQURVO0FBQUEsTUFDSEMsUUFERzs7QUFBQSxtQkFFV0YsK0NBQVEsQ0FBQyxLQUFELENBRm5CO0FBQUEsTUFFVkcsTUFGVTtBQUFBLE1BRUZDLFNBRkU7O0FBQUEsbUJBR2lCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FIekI7QUFBQSxNQUdWSyxTQUhVO0FBQUEsTUFHQ0MsWUFIRDs7QUFJakIsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBMkQsU0FBSyxFQUFFO0FBQUVDLDZCQUF1QixFQUFFO0FBQTNCLEtBQWxFO0FBQUEsNEJBQ0ksOERBQUMscURBQUQ7QUFDSSxhQUFPLEVBQUU7QUFBRUMsYUFBSyxFQUFFLENBQVQ7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BRGI7QUFFSSxhQUFPLEVBQUVKLFNBQVMsR0FBRztBQUFFRyxhQUFLLEVBQUUsTUFBVDtBQUFpQkMsY0FBTSxFQUFFO0FBQXpCLE9BQUgsR0FBdUM7QUFBRUQsYUFBSyxFQUFFLENBQVQ7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BRjdEO0FBR0ksZ0JBQVUsRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUhoQjtBQUlJLGVBQVMsRUFBQyxnSEFKZDtBQUFBLDhCQUtJO0FBQUssaUJB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WjtBQU1JLHFCQUFHLEVBQUMsWUFOUjtBQU9JLDZCQUFXLEVBQUU7QUFQakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiSixlQXFDSTtBQUNJLHFCQUFTLEVBQUMsd0VBRGQ7QUFDdUYsbUJBQU8sRUFBRTtBQUFBLHFCQUFNRyxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsYUFEaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQW9ESSw4REFBQyw4Q0FBRDtBQUFVLGFBQUssRUFBRUEsTUFBakI7QUFBeUIsYUFBSyxFQUFFO0FBQUEsaUJBQU1DLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJFSCxDQS9FRDs7R0FBTUosTTs7S0FBQUEsTTtBQWlGTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncGFnZS43NDYzOGU4YTYwZDM2N2Y0YjA2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBTbGlkZWJhciBmcm9tICcuL3NsaWRlYmFyJ1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW29wZW5lciwgc2V0T3BlbmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3NlYXJjaEJhciwgc2V0U2VhcmNoQmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RpY2t5IHRvcC0wIGxlZnQtMCByaWdodC0wIHotNDAgYmctd2hpdGUnIHN0eWxlPXt7IFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiBcInRyYW5zcGFyZW50XCIgfX0+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3NlYXJjaEJhciA/IHsgd2lkdGg6IFwiYXV0b1wiLCBoZWlnaHQ6IFwiYXV0b1wiIH0gOiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJ0d2VlblwiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgbXgtYXV0byBvdmVyZmxvdy1oaWRkZW4gZm9udC1tZWRpdW0gc2hhZG93LTJ4bCBzZWxlY3Qtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbS01IHRleHQtM3hsIGZvbnQtYmxhY2sgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2hCYXIoZmFsc2UpfT4mbGFycjs8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBweC01IHB5LTE2IGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgc2VhcmNoIHRlcm0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgaC0xMCBweC0yIGJvcmRlci0yIGJvcmRlci1ibHVlLTUwMCByb3VuZGVkLW1kIG91dGxpbmUtbm9uZSByaW5nLWJsdWUtNTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lIHB4LTUgcHktMyBteC0yIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiPlNlYXJjaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd6LTQwIGJnLXdoaXRlIHNoYWRvdy0yeGwgc2VsZWN0LW5vbmUgJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtMyBweS0zIG1kOnB5LTNcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBteS1hdXRvIHRleHQtMnhsIGZvbnQtbWVkaXVtIGN1cnNvci1wb2ludGVyXCI+SGFycDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIG15LWF1dG8gbWQ6anVzdGlmeS1ldmVubHknPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNSBoLTUgbXgtNSBteS1hdXRvIGN1cnNvci1wb2ludGVyIG1kOm14LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoQmFyKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL21hZ25pZnlpbmctZ2xhc3Mtc2VhcmNoLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdpbnRyaW5zaWMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT0nMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoaWRkZW4gbXgtNSBteS1hdXRvIHRleHQteGwgZm9udC1tZWRpdW0gbWQ6ZmxleCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2Jsb2dwYWdlJyBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTMgbXgtMiBjdXJzb3ItcG9pbnRlclwiPkJsb2dzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvZmVlZGJhY2snIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMyBteC0yIGN1cnNvci1wb2ludGVyXCI+RmVlZGJhY2s8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hYm91dCcgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zIG14LTIgY3Vyc29yLXBvaW50ZXJcIj5BYm91dDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2ZpbGUnIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy04IGgtOCBteC0yIG15LWF1dG8gY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZSghc3RhdGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9wcm9maWxlLXVzZXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD0naW50cmluc2ljJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT0nMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVXNlciBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBteC01IG15LWF1dG8gdGV4dC0yeGwgZm9udC1ibGFjayBjdXJzb3ItcG9pbnRlciBtZDpoaWRkZW5cIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuZXIoIW9wZW5lcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKYsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZWJhciB3aWR0aD17b3BlbmVyfSBjbGljaz17KCkgPT4gc2V0T3BlbmVyKCFvcGVuZXIpfSAvPlxyXG4gICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==