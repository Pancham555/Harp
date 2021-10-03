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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      text = _useState2[0],
      setText = _useState2[1];

  var getData = function getData() {
    axios__WEBPACK_IMPORTED_MODULE_6___default().get('/chatserver').then(function (res) {
      showChat(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getData();
  }, [chat]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Chat room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "my-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatCard__WEBPACK_IMPORTED_MODULE_3__.default, {
        chatman: "Unknown",
        chat: "Hello there, this is a chat room,bring your friends here and chat :)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), chat.map(function (data, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatCard__WEBPACK_IMPORTED_MODULE_3__.default, {
            chat: data.anonymous
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 28
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatSender__WEBPACK_IMPORTED_MODULE_5__.default, {
      statechange: text,
      inputchange: function inputchange(e) {
        return setText(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Feedback, "Qou/R3TkAoTGyMnbmlAyEfoI7Do=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHJvb20uanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImNoYXQiLCJzaG93Q2hhdCIsInRleHQiLCJzZXRUZXh0IiwiZ2V0RGF0YSIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibWFwIiwiaW5kZXgiLCJhbm9ueW1vdXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsK0NBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNaQyxJQURZO0FBQUEsTUFDTkMsUUFETTs7QUFBQSxtQkFFS0YsK0NBQVEsQ0FBQyxFQUFELENBRmI7QUFBQSxNQUVaRyxJQUZZO0FBQUEsTUFFTkMsT0FGTTs7QUFHbkIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMsb0RBQUEsQ0FBVSxhQUFWLEVBQXlCQyxJQUF6QixDQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDakNOLGNBQVEsQ0FBQ00sR0FBRyxDQUFDQyxJQUFMLENBQVI7QUFDSCxLQUZELFdBRVMsVUFBQUMsR0FBRztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxLQUZaO0FBR0gsR0FKRDs7QUFNQUcsa0RBQVMsQ0FBQyxZQUFNO0FBQ1pSLFdBQU87QUFDVixHQUZRLEVBRU4sQ0FBQ0osSUFBRCxDQUZNLENBQVQ7QUFHQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFLSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0ksOERBQUMsOERBQUQ7QUFBVSxlQUFPLEVBQUMsU0FBbEI7QUFBNEIsWUFBSSxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUVLQSxJQUFJLENBQUNhLEdBQUwsQ0FBUyxVQUFDTCxJQUFELEVBQU9NLEtBQVAsRUFBaUI7QUFDdkIsNEJBQU87QUFBQSxpQ0FDSCw4REFBQyw4REFBRDtBQUFVLGdCQUFJLEVBQUVOLElBQUksQ0FBQ087QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLFdBQVVELEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUdILE9BSkEsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQWFJLDhEQUFDLGdFQUFEO0FBQVksaUJBQVcsRUFBRVosSUFBekI7QUFBK0IsaUJBQVcsRUFBRSxxQkFBQ2MsQ0FBRDtBQUFBLGVBQU9iLE9BQU8sQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZDtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiSjtBQUFBLGtCQURKO0FBaUJILENBN0JEOztHQUFNcEIsUTs7S0FBQUEsUTtBQStCTiwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGF0cm9vbS4xYjM4Yjc0MGM0YWUxYzE1MGVjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgQ2hhdENhcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9jaGF0L2NoYXRDYXJkJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2YmFyJ1xyXG5pbXBvcnQgQ2hhdFNlbmRlciBmcm9tICcuLi9Db21wb25lbnRzL2NoYXQvY2hhdFNlbmRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5jb25zdCBGZWVkYmFjayA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjaGF0LCBzaG93Q2hhdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2NoYXRzZXJ2ZXInKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHNob3dDaGF0KHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICB9LCBbY2hhdF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNoYXQgcm9vbTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNSc+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdG1hbj1cIlVua25vd25cIiBjaGF0PVwiSGVsbG8gdGhlcmUsIHRoaXMgaXMgYSBjaGF0IHJvb20sYnJpbmcgeW91ciBmcmllbmRzIGhlcmUgYW5kIGNoYXQgOilcIiAvPlxyXG4gICAgICAgICAgICAgICAge2NoYXQubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdD17ZGF0YS5hbm9ueW1vdXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0U2VuZGVyIHN0YXRlY2hhbmdlPXt0ZXh0fSBpbnB1dGNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFjayJdLCJzb3VyY2VSb290IjoiIn0=