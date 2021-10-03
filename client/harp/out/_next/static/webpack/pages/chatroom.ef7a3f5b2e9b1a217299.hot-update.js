self["webpackHotUpdate_N_E"]("pages/chatroom",{

/***/ "./Components/chat/chatSender.js":
/*!***************************************!*\
  !*** ./Components/chat/chatSender.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\Components\\chat\\chatSender.js",
    _this = undefined,
    _s = $RefreshSig$();




var ChatSender = function ChatSender(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      state = _useState[0],
      setState = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "fixed bottom-0 left-0 right-0 flex justify-center m-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex justify-center",
        style: {
          width: "36rem"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          placeholder: "Type a message",
          value: props.statechange ? props.statechange : state,
          onChange: props.inputchange ? props.inputchange : function (e) {
            return setState(e.target.value);
          },
          className: "w-full h-10 px-2 my-auto font-medium border-2 border-blue-500 rounded-md outline-none ring-blue-500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "p-3 mx-1 text-white bg-blue-500 rounded-full cursor-pointer",
          onClick: props.click,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            viewBox: "0 0 495.003 495.003",
            className: "w-6 text-white fill-current",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M164.711,456.687c0,2.966,1.647,5.686,4.266,7.072c2.617,1.385,5.799,1.207,8.245-0.468l55.09-37.616\r l-67.6-32.22V456.687z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M492.431,32.443c-1.513-1.395-3.466-2.125-5.44-2.125c-1.19,0-2.377,0.264-3.5,0.816L7.905,264.422\r c-4.861,2.389-7.937,7.353-7.904,12.783c0.033,5.423,3.161,10.353,8.057,12.689l125.342,59.724l250.62-205.99L164.455,364.414\r l156.145,74.4c1.918,0.919,4.012,1.376,6.084,1.376c1.768,0,3.519-0.322,5.186-0.977c3.637-1.438,6.527-4.318,7.97-7.956\r L494.436,41.257C495.66,38.188,494.862,34.679,492.431,32.443z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(ChatSender, "ZG3gaz989oJoshq2aOGUAooQr9E=");

_c = ChatSender;
/* harmony default export */ __webpack_exports__["default"] = (ChatSender);

var _c;

$RefreshReg$(_c, "ChatSender");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jaGF0L2NoYXRTZW5kZXIuanMiXSwibmFtZXMiOlsiQ2hhdFNlbmRlciIsInByb3BzIiwidXNlU3RhdGUiLCJzdGF0ZSIsInNldFN0YXRlIiwid2lkdGgiLCJzdGF0ZWNoYW5nZSIsImlucHV0Y2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0FDLCtDQUFRLENBQUMsRUFBRCxDQURSO0FBQUEsTUFDbkJDLEtBRG1CO0FBQUEsTUFDWkMsUUFEWTs7QUFFMUIsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFHSTtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFxQyxhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFO0FBQVQsU0FBNUM7QUFBQSxnQ0FDSTtBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLHFCQUFXLEVBQUMsZ0JBQS9CO0FBQWdELGVBQUssRUFBRUosS0FBSyxDQUFDSyxXQUFOLEdBQW9CTCxLQUFLLENBQUNLLFdBQTFCLEdBQXdDSCxLQUEvRjtBQUFzRyxrQkFBUSxFQUFFRixLQUFLLENBQUNNLFdBQU4sR0FBb0JOLEtBQUssQ0FBQ00sV0FBMUIsR0FBd0MsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPSixRQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxXQUF4SjtBQUNJLG1CQUFTLEVBQUM7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFDLDZEQUFmO0FBQTZFLGlCQUFPLEVBQUVULEtBQUssQ0FBQ1UsS0FBNUY7QUFBQSxpQ0FDSTtBQUFLLG1CQUFPLEVBQUMscUJBQWI7QUFBbUMscUJBQVMsRUFBQyw2QkFBN0M7QUFBQSxtQ0FDSTtBQUFBLHNDQUNJO0FBQU0saUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFHSTtBQUFNLGlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBLGtCQURKO0FBeUJILENBM0JEOztHQUFNWCxVOztLQUFBQSxVO0FBNkJOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXRyb29tLmVmN2EzZjViMmU5YjFhMjE3Mjk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5jb25zdCBDaGF0U2VuZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBmbGV4IGp1c3RpZnktY2VudGVyIG0tNSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIiBzdHlsZT17eyB3aWR0aDogXCIzNnJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdUeXBlIGEgbWVzc2FnZScgdmFsdWU9e3Byb3BzLnN0YXRlY2hhbmdlID8gcHJvcHMuc3RhdGVjaGFuZ2UgOiBzdGF0ZX0gb25DaGFuZ2U9e3Byb3BzLmlucHV0Y2hhbmdlID8gcHJvcHMuaW5wdXRjaGFuZ2UgOiAoZSkgPT4gc2V0U3RhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLTEwIHB4LTIgbXktYXV0byBmb250LW1lZGl1bSBib3JkZXItMiBib3JkZXItYmx1ZS01MDAgcm91bmRlZC1tZCBvdXRsaW5lLW5vbmUgcmluZy1ibHVlLTUwMCdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIG14LTEgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCA0OTUuMDAzIDQ5NS4wMDNcIiBjbGFzc05hbWU9J3ctNiB0ZXh0LXdoaXRlIGZpbGwtY3VycmVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2NC43MTEsNDU2LjY4N2MwLDIuOTY2LDEuNjQ3LDUuNjg2LDQuMjY2LDcuMDcyYzIuNjE3LDEuMzg1LDUuNzk5LDEuMjA3LDguMjQ1LTAuNDY4bDU1LjA5LTM3LjYxNlxyXG5cdFx0bC02Ny42LTMyLjIyVjQ1Ni42ODd6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDkyLjQzMSwzMi40NDNjLTEuNTEzLTEuMzk1LTMuNDY2LTIuMTI1LTUuNDQtMi4xMjVjLTEuMTksMC0yLjM3NywwLjI2NC0zLjUsMC44MTZMNy45MDUsMjY0LjQyMlxyXG5cdFx0Yy00Ljg2MSwyLjM4OS03LjkzNyw3LjM1My03LjkwNCwxMi43ODNjMC4wMzMsNS40MjMsMy4xNjEsMTAuMzUzLDguMDU3LDEyLjY4OWwxMjUuMzQyLDU5LjcyNGwyNTAuNjItMjA1Ljk5TDE2NC40NTUsMzY0LjQxNFxyXG5cdFx0bDE1Ni4xNDUsNzQuNGMxLjkxOCwwLjkxOSw0LjAxMiwxLjM3Niw2LjA4NCwxLjM3NmMxLjc2OCwwLDMuNTE5LTAuMzIyLDUuMTg2LTAuOTc3YzMuNjM3LTEuNDM4LDYuNTI3LTQuMzE4LDcuOTctNy45NTZcclxuXHRcdEw0OTQuNDM2LDQxLjI1N0M0OTUuNjYsMzguMTg4LDQ5NC44NjIsMzQuNjc5LDQ5Mi40MzEsMzIuNDQzelwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRTZW5kZXJcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==