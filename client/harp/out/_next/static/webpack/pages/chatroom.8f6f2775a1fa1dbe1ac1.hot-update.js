self["webpackHotUpdate_N_E"]("pages/chatroom",{

/***/ "./pages/chatroom.js":
/*!***************************!*\
  !*** ./pages/chatroom.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_chat_chatCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/chat/chatCard */ "./Components/chat/chatCard.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_chat_chatSender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/chat/chatSender */ "./Components/chat/chatSender.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\pages\\chatroom.js",
    _this = undefined,
    _s = $RefreshSig$();








var Feedback = function Feedback() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      chat = _useState[0],
      showChat = _useState[1];

  var getData = function getData() {
    axios__WEBPACK_IMPORTED_MODULE_6___default().get('/chatserver').then(function (res) {
      showChat(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Chat room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "my-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatCard__WEBPACK_IMPORTED_MODULE_3__.default, {
        chatman: "Unknown",
        chat: "Hello there, this is a chat room,bring your friends here and chat :)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), chat.map(function (data, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatCard__WEBPACK_IMPORTED_MODULE_3__.default, {
            chat: data.anonymous
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 28
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatSender__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Feedback, "9OFxHRj8mEFlCigpIub3fy/zxBE=");

_c = Feedback;
/* harmony default export */ __webpack_exports__["default"] = (Feedback);

var _c;

$RefreshReg$(_c, "Feedback");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHJvb20uanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImNoYXQiLCJzaG93Q2hhdCIsImdldERhdGEiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIm1hcCIsImluZGV4IiwiYW5vbnltb3VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLCtDQUFRLENBQUMsRUFBRCxDQURkO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLFFBRE07O0FBRW5CLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDbEJDLG9EQUFBLENBQVUsYUFBVixFQUF5QkMsSUFBekIsQ0FBOEIsVUFBQUMsR0FBRyxFQUFJO0FBQ2pDSixjQUFRLENBQUNJLEdBQUcsQ0FBQ0MsSUFBTCxDQUFSO0FBQ0gsS0FGRCxXQUVTLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsS0FGWjtBQUdILEdBSkQ7O0FBS0FHLGtEQUFTLENBQUMsWUFBTSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFLSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0ksOERBQUMsOERBQUQ7QUFBVSxlQUFPLEVBQUMsU0FBbEI7QUFBNEIsWUFBSSxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLVixJQUFJLENBQUNXLEdBQUwsQ0FBUyxVQUFDTCxJQUFELEVBQU9NLEtBQVAsRUFBaUI7QUFDdkIsNEJBQU87QUFBQSxpQ0FDSCw4REFBQyw4REFBRDtBQUFVLGdCQUFJLEVBQUVOLElBQUksQ0FBQ087QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLFdBQVVELEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUdILE9BSkEsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQWFJLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBLGtCQURKO0FBaUJILENBM0JEOztHQUFNZCxROztLQUFBQSxRO0FBNkJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXRyb29tLjhmNmYyNzc1YTFmYTFkYmUxYWMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBDaGF0Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL2NoYXQvY2hhdENhcmQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBDaGF0U2VuZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvY2hhdC9jaGF0U2VuZGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NoYXQsIHNob3dDaGF0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoJy9jaGF0c2VydmVyJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzaG93Q2hhdChyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNoYXQgcm9vbTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNSc+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdG1hbj1cIlVua25vd25cIiBjaGF0PVwiSGVsbG8gdGhlcmUsIHRoaXMgaXMgYSBjaGF0IHJvb20sYnJpbmcgeW91ciBmcmllbmRzIGhlcmUgYW5kIGNoYXQgOilcIiAvPlxyXG4gICAgICAgICAgICAgICAge2NoYXQubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdD17ZGF0YS5hbm9ueW1vdXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0U2VuZGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlZWRiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==