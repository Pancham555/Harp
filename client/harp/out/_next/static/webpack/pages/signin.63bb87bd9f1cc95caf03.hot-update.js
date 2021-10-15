self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Harp_2_0_server2_0_client_harp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var _Components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/footer */ "./Components/footer.js");
/* harmony import */ var _Components_forms_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/forms/input */ "./Components/forms/input.js");
/* harmony import */ var _Components_forms_passwordInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/forms/passwordInput */ "./Components/forms/passwordInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\pages\\signin.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Harp_2_0_server2_0_client_harp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var SignIn = function SignIn() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    emailOrUsername: "",
    password: ""
  }),
      userData = _useState[0],
      setuserData = _useState[1];

  var sendUserData = function sendUserData() {
    axios__WEBPACK_IMPORTED_MODULE_10___default().post('/register/signin', {
      emailOrUsername: userData.emailOrUsername,
      password: userData.password
    }, {
      withCredentials: true
    }).then(function (res) {
      alert(res.data);
    })["catch"](function (err) {
      return alert(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_11__.motion.div, {
      initial: {
        paddingTop: "4rem",
        opacity: 0
      },
      animate: {
        paddingTop: "0rem",
        opacity: 1
      },
      transition: {
        duration: 0.75
      },
      className: "flex justify-center ",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-wrap w-full p-4 mx-3 my-16 bg-white rounded-lg shadow-2xl justify-evenly md:justify-between md:mx-0 md:w-10/12 dark:bg-gray-700 dark:text-white",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col justify-center w-auto m-0 md:w-1/2 md:m-auto",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mx-auto w-80",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
              width: "1000000",
              height: "1000000",
              src: "/\u2014Pngtree\u2014hand drawn online education online_4986515.png",
              layout: "intrinsic",
              quality: "100",
              alt: "",
              priority: true,
              unoptimized: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "m-3 font-medium text-center",
            children: ["Didn\"t have an account ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/signup",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "font-black",
                children: "Sign Up"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 128
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 98
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col items-center justify-center w-full my-5 md:w-1/2 ",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mt-5 text-2xl font-black",
            children: "Sign In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col items-center justify-center w-9/12",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_forms_input__WEBPACK_IMPORTED_MODULE_8__.default, {
              icon: "/mail.png",
              val: userData.emailOrUsername,
              change: function change(e) {
                return setuserData(_objectSpread(_objectSpread({}, userData), {}, {
                  emailOrUsername: e.target.value
                }));
              },
              type: "email",
              placeholder: "Your username or email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_forms_passwordInput__WEBPACK_IMPORTED_MODULE_9__.default, {
              icon: "/padlock.png",
              val: userData.password,
              change: function change(e) {
                return setuserData(_objectSpread(_objectSpread({}, userData), {}, {
                  password: e.target.value
                }));
              },
              placeholder: "Your Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "px-10 py-3 my-4 text-xl text-white bg-blue-500 rounded-md cursor-pointer",
              onClick: sendUserData,
              children: "Log In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_footer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(SignIn, "E7sfctqq+cI2K0fJaL8Pf5PD89M=");

_c = SignIn;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

var _c;

$RefreshReg$(_c, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIlNpZ25JbiIsInVzZVN0YXRlIiwiZW1haWxPclVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyRGF0YSIsInNldHVzZXJEYXRhIiwic2VuZFVzZXJEYXRhIiwiYXhpb3MiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwiYWxlcnQiLCJkYXRhIiwiZXJyIiwicGFkZGluZ1RvcCIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLCtDQUFRLENBQUM7QUFDckNDLG1CQUFlLEVBQUUsRUFEb0I7QUFFckNDLFlBQVEsRUFBRTtBQUYyQixHQUFELENBRHZCO0FBQUEsTUFDVkMsUUFEVTtBQUFBLE1BQ0FDLFdBREE7O0FBT2pCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJDLHNEQUFBLENBQVcsa0JBQVgsRUFBK0I7QUFDM0JMLHFCQUFlLEVBQUVFLFFBQVEsQ0FBQ0YsZUFEQztBQUUzQkMsY0FBUSxFQUFFQyxRQUFRLENBQUNEO0FBRlEsS0FBL0IsRUFJRztBQUNDSyxxQkFBZSxFQUFFO0FBRGxCLEtBSkgsRUFNR0MsSUFOSCxDQU1RLFVBQUNDLEdBQUQsRUFBUztBQUNiQyxXQUFLLENBQUNELEdBQUcsQ0FBQ0UsSUFBTCxDQUFMO0FBQ0gsS0FSRCxXQVFTLFVBQUNDLEdBQUQ7QUFBQSxhQUFTRixLQUFLLENBQUNFLEdBQUQsQ0FBZDtBQUFBLEtBUlQ7QUFTSCxHQVZEOztBQVdBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4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QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSixlQTRDSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNKO0FBQUEsa0JBREo7QUFnREgsQ0FsRUQ7O0dBQU1OLE07O0tBQUFBLE07QUFvRU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjYzYmI4N2JkOWYxY2M5NWNhZjAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL0NvbXBvbmVudHMvZm9ybXMvaW5wdXQnO1xyXG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tICcuLi9Db21wb25lbnRzL2Zvcm1zL3Bhc3N3b3JkSW5wdXQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBTaWduSW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldHVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbE9yVXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbmRVc2VyRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KCcvcmVnaXN0ZXIvc2lnbmluJywge1xyXG4gICAgICAgICAgICBlbWFpbE9yVXNlcm5hbWU6IHVzZXJEYXRhLmVtYWlsT3JVc2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXJEYXRhLnBhc3N3b3JkLFxyXG5cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBhbGVydChyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TaWduIGluPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIG1pbmltdW0tc2NhbGU9MS4wLHRhcmdldC1kZW5zaXR5ZHBpPWRldmljZS1kcGksIHVzZXItc2NhbGFibGU9bm9cIiAvPlxyXG5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHBhZGRpbmdUb3A6IFwiNHJlbVwiLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHBhZGRpbmdUb3A6IFwiMHJlbVwiLCBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjc1IH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIHAtNCBteC0zIG15LTE2IGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LTJ4bCBqdXN0aWZ5LWV2ZW5seSBtZDpqdXN0aWZ5LWJldHdlZW4gbWQ6bXgtMCBtZDp3LTEwLzEyIGRhcms6YmctZ3JheS03MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB3LWF1dG8gbS0wIG1kOnctMS8yIG1kOm0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtYXV0byB3LTgwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAwMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwMDAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy/igJRQbmd0cmVl4oCUaGFuZCBkcmF3biBvbmxpbmUgZWR1Y2F0aW9uIG9ubGluZV80OTg2NTE1LnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ludHJpbnNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5PScxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMyBmb250LW1lZGl1bSB0ZXh0LWNlbnRlclwiPkRpZG4mcXVvdDt0IGhhdmUgYW4gYWNjb3VudCA8TGluayBocmVmPScvc2lnbnVwJyBwYXNzSHJlZj48YSBjbGFzc05hbWU9J2ZvbnQtYmxhY2snPlNpZ24gVXA8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBteS01IG1kOnctMS8yIFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHRleHQtMnhsIGZvbnQtYmxhY2tcIj5TaWduIEluPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctOS8xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IGljb249Jy9tYWlsLnBuZycgdmFsPXt1c2VyRGF0YS5lbWFpbE9yVXNlcm5hbWV9IGNoYW5nZT17KGUpID0+IHNldHVzZXJEYXRhKHsgLi4udXNlckRhdGEsIGVtYWlsT3JVc2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9IHR5cGU9J2VtYWlsJyBwbGFjZWhvbGRlcj0nWW91ciB1c2VybmFtZSBvciBlbWFpbCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGljb249Jy9wYWRsb2NrLnBuZycgdmFsPXt1c2VyRGF0YS5wYXNzd29yZH0gY2hhbmdlPXsoZSkgPT4gc2V0dXNlckRhdGEoeyAuLi51c2VyRGF0YSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfSBwbGFjZWhvbGRlcj0nWW91ciBQYXNzd29yZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMTAgcHktMyBteS00IHRleHQteGwgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17c2VuZFVzZXJEYXRhfT5Mb2cgSW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=