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
    axios__WEBPACK_IMPORTED_MODULE_10___default().post('http://localhost:5000/register/signin', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIlNpZ25JbiIsInVzZVN0YXRlIiwiZW1haWxPclVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1c2VyRGF0YSIsInNldHVzZXJEYXRhIiwic2VuZFVzZXJEYXRhIiwiYXhpb3MiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzIiwiYWxlcnQiLCJkYXRhIiwiZXJyIiwicGFkZGluZ1RvcCIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLCtDQUFRLENBQUM7QUFDckNDLG1CQUFlLEVBQUUsRUFEb0I7QUFFckNDLFlBQVEsRUFBRTtBQUYyQixHQUFELENBRHZCO0FBQUEsTUFDVkMsUUFEVTtBQUFBLE1BQ0FDLFdBREE7O0FBT2pCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJDLHNEQUFBLENBQVcsdUNBQVgsRUFBb0Q7QUFDaERMLHFCQUFlLEVBQUVFLFFBQVEsQ0FBQ0YsZUFEc0I7QUFFaERDLGNBQVEsRUFBRUMsUUFBUSxDQUFDRDtBQUY2QixLQUFwRCxFQUlHO0FBQ0NLLHFCQUFlLEVBQUU7QUFEbEIsS0FKSCxFQU1HQyxJQU5ILENBTVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JDLFdBQUssQ0FBQ0QsR0FBRyxDQUFDRSxJQUFMLENBQUw7QUFDSCxLQVJELFdBUVMsVUFBQ0MsR0FBRDtBQUFBLGFBQVNGLEtBQUssQ0FBQ0UsR0FBRCxDQUFkO0FBQUEsS0FSVDtBQVNILEdBVkQ7O0FBV0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFB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QTtBQUFBO0FBTko7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBKLGVBNENJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE1Q0o7QUFBQSxrQkFESjtBQWdESCxDQWxFRDs7R0FBTU4sTTs7S0FBQUEsTTtBQW9FTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uYzcyNTZmNDFiMTJiYWM3MWRhMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9Db21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9mb3Jtcy9pbnB1dCc7XHJcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gJy4uL0NvbXBvbmVudHMvZm9ybXMvcGFzc3dvcmRJbnB1dCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0dXNlckRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsT3JVc2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc3Qgc2VuZFVzZXJEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9yZWdpc3Rlci9zaWduaW4nLCB7XHJcbiAgICAgICAgICAgIGVtYWlsT3JVc2VybmFtZTogdXNlckRhdGEuZW1haWxPclVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlckRhdGEucGFzc3dvcmQsXHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVycikpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlNpZ24gaW48L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgbWluaW11bS1zY2FsZT0xLjAsdGFyZ2V0LWRlbnNpdHlkcGk9ZGV2aWNlLWRwaSwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XHJcblxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgcGFkZGluZ1RvcDogXCI0cmVtXCIsIG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgcGFkZGluZ1RvcDogXCIwcmVtXCIsIG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNzUgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgcC00IG14LTMgbXktMTYgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctMnhsIGp1c3RpZnktZXZlbmx5IG1kOmp1c3RpZnktYmV0d2VlbiBtZDpteC0wIG1kOnctMTAvMTIgZGFyazpiZy1ncmF5LTcwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHctYXV0byBtLTAgbWQ6dy0xLzIgbWQ6bS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIHctODAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMDAwMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAwMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL+KAlFBuZ3RyZWXigJRoYW5kIGRyYXduIG9ubGluZSBlZHVjYXRpb24gb25saW5lXzQ5ODY1MTUucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD0naW50cmluc2ljJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9JzEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVub3B0aW1pemVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0zIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyXCI+RGlkbiZxdW90O3QgaGF2ZSBhbiBhY2NvdW50IDxMaW5rIGhyZWY9Jy9zaWdudXAnIHBhc3NIcmVmPjxhIGNsYXNzTmFtZT0nZm9udC1ibGFjayc+U2lnbiBVcDwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG15LTUgbWQ6dy0xLzIgXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC0yeGwgZm9udC1ibGFja1wiPlNpZ24gSW48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy05LzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgaWNvbj0nL21haWwucG5nJyB2YWw9e3VzZXJEYXRhLmVtYWlsT3JVc2VybmFtZX0gY2hhbmdlPXsoZSkgPT4gc2V0dXNlckRhdGEoeyAuLi51c2VyRGF0YSwgZW1haWxPclVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX0gdHlwZT0nZW1haWwnIHBsYWNlaG9sZGVyPSdZb3VyIHVzZXJuYW1lIG9yIGVtYWlsJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXQgaWNvbj0nL3BhZGxvY2sucG5nJyB2YWw9e3VzZXJEYXRhLnBhc3N3b3JkfSBjaGFuZ2U9eyhlKSA9PiBzZXR1c2VyRGF0YSh7IC4uLnVzZXJEYXRhLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IHBsYWNlaG9sZGVyPSdZb3VyIFBhc3N3b3JkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xMCBweS0zIG15LTQgdGV4dC14bCB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQgY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXtzZW5kVXNlckRhdGF9PkxvZyBJbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==