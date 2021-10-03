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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHJvb20uanMiXSwibmFtZXMiOlsiRmVlZGJhY2siLCJ1c2VTdGF0ZSIsImNoYXQiLCJzaG93Q2hhdCIsInRleHQiLCJzZXRUZXh0IiwiZ2V0RGF0YSIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2VuZERhdGEiLCJ1c2VFZmZlY3QiLCJtYXAiLCJpbmRleCIsImFub255bW91cyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUNNQywrQ0FBUSxDQUFDLEVBQUQsQ0FEZDtBQUFBLE1BQ1pDLElBRFk7QUFBQSxNQUNOQyxRQURNOztBQUFBLG1CQUVLRiwrQ0FBUSxDQUFDLEVBQUQsQ0FGYjtBQUFBLE1BRVpHLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUduQixNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCQyxvREFBQSxDQUFVLGFBQVYsRUFBeUJDLElBQXpCLENBQThCLFVBQUFDLEdBQUcsRUFBSTtBQUNqQ04sY0FBUSxDQUFDTSxHQUFHLENBQUNDLElBQUwsQ0FBUjtBQUNILEtBRkQsV0FFUyxVQUFBQyxHQUFHO0FBQUEsYUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBSjtBQUFBLEtBRlo7QUFHSCxHQUpEOztBQUtBLE1BQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkJQLHFEQUFBLENBQVcsYUFBWCxFQUEwQjtBQUN0QkwsVUFBSSxFQUFFRTtBQURnQixLQUExQjtBQUdILEdBSkQ7O0FBS0FXLGtEQUFTLENBQUMsWUFBTTtBQUNaVCxXQUFPO0FBQ1YsR0FGUSxFQUVOLENBQUNKLElBQUQsQ0FGTSxDQUFUO0FBR0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDhCQUNJLDhEQUFDLDhEQUFEO0FBQVUsZUFBTyxFQUFDLFNBQWxCO0FBQTRCLFlBQUksRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFFS0EsSUFBSSxDQUFDYyxHQUFMLENBQVMsVUFBQ04sSUFBRCxFQUFPTyxLQUFQLEVBQWlCO0FBQ3ZCLDRCQUFPO0FBQUEsaUNBQ0gsOERBQUMsOERBQUQ7QUFBVSxnQkFBSSxFQUFFUCxJQUFJLENBQUNRO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxXQUFVRCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFHSCxPQUpBLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFhSSw4REFBQyxnRUFBRDtBQUFZLGlCQUFXLEVBQUViLElBQXpCO0FBQStCLGlCQUFXLEVBQUUscUJBQUNlLENBQUQ7QUFBQSxlQUFPZCxPQUFPLENBQUNjLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQSxrQkFESjtBQWlCSCxDQWpDRDs7R0FBTXJCLFE7O0tBQUFBLFE7QUFtQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdHJvb20uN2EzMjJlN2YwYzlkOTQ5ODUzMjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IENoYXRDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvY2hhdC9jaGF0Q2FyZCdcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9Db21wb25lbnRzL05hdmJhcidcclxuaW1wb3J0IENoYXRTZW5kZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9jaGF0L2NoYXRTZW5kZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuY29uc3QgRmVlZGJhY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY2hhdCwgc2hvd0NoYXRdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoJy9jaGF0c2VydmVyJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzaG93Q2hhdChyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmREYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9jaGF0c2VydmVyJywge1xyXG4gICAgICAgICAgICBjaGF0OiB0ZXh0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0RGF0YSgpXHJcbiAgICB9LCBbY2hhdF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNoYXQgcm9vbTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNSc+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdG1hbj1cIlVua25vd25cIiBjaGF0PVwiSGVsbG8gdGhlcmUsIHRoaXMgaXMgYSBjaGF0IHJvb20sYnJpbmcgeW91ciBmcmllbmRzIGhlcmUgYW5kIGNoYXQgOilcIiAvPlxyXG4gICAgICAgICAgICAgICAge2NoYXQubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hhdENhcmQgY2hhdD17ZGF0YS5hbm9ueW1vdXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxDaGF0U2VuZGVyIHN0YXRlY2hhbmdlPXt0ZXh0fSBpbnB1dGNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkYmFjayJdLCJzb3VyY2VSb290IjoiIn0=