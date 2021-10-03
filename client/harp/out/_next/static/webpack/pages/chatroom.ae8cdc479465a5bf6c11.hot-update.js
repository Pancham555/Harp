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

  var sendData = function sendData() {
    axios__WEBPACK_IMPORTED_MODULE_6___default().post('/chatserver', {
      chat: text
    }).then(function (data) {
      return console.log(data.data);
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
        lineNumber: 26,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "my-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatCard__WEBPACK_IMPORTED_MODULE_3__.default, {
        chatman: "Unknown",
        chat: "Hello there, this is a chat room,bring your friends here and chat :)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this), chat.map(function (data, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatCard__WEBPACK_IMPORTED_MODULE_3__.default, {
            chat: data.anonymous
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 28
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_chat_chatSender__WEBPACK_IMPORTED_MODULE_5__.default, {
      statechange: text,
      inputchange: function inputchange(e) {
        return setText(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHJvb20uanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImNoYXQiLCJzaG93Q2hhdCIsInRleHQiLCJzZXRUZXh0IiwiZ2V0RGF0YSIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2VuZERhdGEiLCJ1c2VFZmZlY3QiLCJtYXAiLCJpbmRleCIsImFub255bW91cyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ1pDLElBRFk7QUFBQSxNQUNOQyxRQURNOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRVpHLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUduQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCQyxvREFBQSxDQUFVLGFBQVYsRUFBeUJDLElBQXpCLENBQThCLFVBQUFDLEdBQUcsRUFBSTtBQUNqQ04sY0FBUSxDQUFDTSxHQUFHLENBQUNDLElBQUwsQ0FBUjtBQUNILEtBRkQsV0FFUyxVQUFBQyxHQUFHO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLEtBRlo7QUFHSCxHQUpEOztBQUtBLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkJQLHFEQUFBLENBQVcsYUFBWCxFQUEwQjtBQUN0QkwsVUFBSSxFQUFFRTtBQURnQixLQUExQixFQUVHSSxJQUZILENBRVEsVUFBQUUsSUFBSTtBQUFBLGFBQUlFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNBLElBQWpCLENBQUo7QUFBQSxLQUZaLFdBRThDLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsS0FGakQ7QUFHSCxHQUpEOztBQUtBSSxrREFBUyxDQUFDLFlBQU07QUFDWlQsV0FBTztBQUNWLEdBRlEsRUFFTixDQUFDSixJQUFELENBRk0sQ0FBVDtBQUdBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQUtJO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDSSw4REFBQyw4REFBRDtBQUFVLGVBQU8sRUFBQyxTQUFsQjtBQUE0QixZQUFJLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBRUtBLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUNOLElBQUQsRUFBT08sS0FBUCxFQUFpQjtBQUN2Qiw0QkFBTztBQUFBLGlDQUNILDhEQUFDLDhEQUFEO0FBQVUsZ0JBQUksRUFBRVAsSUFBSSxDQUFDUTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsV0FBVUQsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBR0gsT0FKQSxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBYUksOERBQUMsZ0VBQUQ7QUFBWSxpQkFBVyxFQUFFYixJQUF6QjtBQUErQixpQkFBVyxFQUFFLHFCQUFDZSxDQUFEO0FBQUEsZUFBT2QsT0FBTyxDQUFDYyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJKO0FBQUEsa0JBREo7QUFpQkgsQ0FqQ0Q7O0dBQU1yQixROztLQUFBQSxRO0FBbUNOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYXRyb29tLmFlOGNkYzQ3OTQ2NWE1YmY2YzExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBDaGF0Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL2NoYXQvY2hhdENhcmQnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZiYXInXHJcbmltcG9ydCBDaGF0U2VuZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvY2hhdC9jaGF0U2VuZGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NoYXQsIHNob3dDaGF0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvY2hhdHNlcnZlcicpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc2hvd0NoYXQocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KCcvY2hhdHNlcnZlcicsIHtcclxuICAgICAgICAgICAgY2hhdDogdGV4dFxyXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhLmRhdGEpKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICB9LCBbY2hhdF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNoYXQgcm9vbTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNSc+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdG1hbj1cIlVua25vd25cIiBjaGF0PVwiSGVsbG8gdGhlcmUsIHRoaXMgaXMgYSBjaGF0IHJvb20sYnJpbmcgeW91ciBmcmllbmRzIGhlcmUgYW5kIGNoYXQgOilcIiAvPlxyXG4gICAgICAgICAgICAgICAge2NoYXQubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdD17ZGF0YS5hbm9ueW1vdXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0U2VuZGVyIHN0YXRlY2hhbmdlPXt0ZXh0fSBpbnB1dGNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFjayJdLCJzb3VyY2VSb290IjoiIn0=