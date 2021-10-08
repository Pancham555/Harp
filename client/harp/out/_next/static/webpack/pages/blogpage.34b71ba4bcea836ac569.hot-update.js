self["webpackHotUpdate_N_E"]("pages/blogpage",{

/***/ "./pages/blogpage.js":
/*!***************************!*\
  !*** ./pages/blogpage.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/footer */ "./Components/footer.js");
/* harmony import */ var _Components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/card */ "./Components/card.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\pages\\blogpage.js",
    _this = undefined,
    _s = $RefreshSig$();



 // requires a loader










var BlogPage = function BlogPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var getBlogData = function getBlogData() {
    axios__WEBPACK_IMPORTED_MODULE_7___default().get('/blogs').then(function (res) {
      setBlogs(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  var carousel = [{
    img: "/daniel-korpai-8GDCzWrcE3M-unsplash.jpg",
    heading: "Heading",
    text: "\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n            Cupiditate dignissimos veritatis iusto numquam voluptatum amet\n            laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,\n            voluptates optio veniam.\n            "
  }, {
    img: "/thisisengineering-raeng-sbVu5zitZt0-unsplash.jpg",
    heading: "Heading",
    text: "\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n            Cupiditate dignissimos veritatis iusto numquam voluptatum amet\n            laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,\n            voluptates optio veniam.\n            "
  }, {
    img: "/georgie-cobbs-muOHbrFGEQY-unsplash.jpg",
    heading: "Heading",
    text: "\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n            Cupiditate dignissimos veritatis iusto numquam voluptatum amet\n            laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,\n            voluptates optio veniam.\n            "
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    getBlogData();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "z-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__.Carousel, {
        infiniteLoop: true,
        autoPlay: true,
        interval: 4000,
        showThumbs: false,
        showStatus: false,
        swipeScrollTolerance: 20,
        transitionTime: 400,
        emulateTouch: true,
        showArrows: false,
        children: carousel.map(function (data, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full text-left ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().grabbing)),
            style: {
              height: "72vh",
              zIndex: "-1"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-full h-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_9___default()), {
                loader: "",
                width: "600000",
                height: "1000000",
                src: data.img,
                layout: "intrinsic",
                quality: "80",
                alt: "carousel card ".concat(index),
                priority: true,
                unoptimized: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "absolute top-0 left-0 right-0 z-30 flex justify-center mx-auto my-24",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "z-30 w-auto h-auto p-5 mx-10 overflow-hidden bg-white rounded-md md:w-7/12",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "my-2 text-3xl font-medium",
                  children: data.heading
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-lg font-medium",
                  children: data.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-wrap my-8 justify-evenly",
      children: blogs.map(function (data, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            return router.push('/blog');
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_card__WEBPACK_IMPORTED_MODULE_6__.default, {
            img: data.img,
            alt: "card ".concat(index),
            heading: data.heading,
            txt: data.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(BlogPage, "jTMbCJiq4wcUeXjJEqZ88bq9QdQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter];
});

_c = BlogPage;
/* harmony default export */ __webpack_exports__["default"] = (BlogPage);

var _c;

$RefreshReg$(_c, "BlogPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3BhZ2UuanMiXSwibmFtZXMiOlsiQmxvZ1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImJsb2dzIiwic2V0QmxvZ3MiLCJnZXRCbG9nRGF0YSIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY2Fyb3VzZWwiLCJpbWciLCJoZWFkaW5nIiwidGV4dCIsInVzZUVmZmVjdCIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwiaGVpZ2h0IiwiekluZGV4IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ2dFOztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyx1REFBUyxFQUF4Qjs7QUFEbUIsa0JBRU9DLCtDQUFRLENBQUMsRUFBRCxDQUZmO0FBQUEsTUFFWkMsS0FGWTtBQUFBLE1BRUxDLFFBRks7O0FBSW5CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLG9EQUFBLENBQVUsUUFBVixFQUFvQkMsSUFBcEIsQ0FBeUIsVUFBQUMsR0FBRyxFQUFJO0FBQzVCSixjQUFRLENBQUNJLEdBQUcsQ0FBQ0MsSUFBTCxDQUFSO0FBQ0gsS0FGRCxXQUVTLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsS0FGWjtBQUdILEdBSkQ7O0FBTUEsTUFBTUcsUUFBUSxHQUFHLENBQ2I7QUFDSUMsT0FBRyxFQUFFLHlDQURUO0FBRUlDLFdBQU8sRUFBRSxTQUZiO0FBR0lDLFFBQUk7QUFIUixHQURhLEVBV2I7QUFDSUYsT0FBRyxFQUFFLG1EQURUO0FBRUlDLFdBQU8s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SUFBSSxDQUFDTSxPQUZ4QztBQUVpRCxlQUFHLEVBQUVOLElBQUksQ0FBQ087QUFGM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLFdBQVVHLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUtILE9BTkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKLGVBOENJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Q0o7QUFBQSxrQkFESjtBQWtESCxDQWpHRDs7R0FBTXBCLFE7VUFDYUUsbUQ7OztLQURiRixRO0FBbUdOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dwYWdlLjM0YjcxYmE0YmNlYTgzNmFjNTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9Db21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5jb25zdCBCbG9nUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGdldEJsb2dEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2Jsb2dzJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRCbG9ncyhyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXJvdXNlbCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogXCIvZGFuaWVsLWtvcnBhaS04R0RDeldyY0UzTS11bnNwbGFzaC5qcGdcIixcclxuICAgICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIEN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgdmVyaXRhdGlzIGl1c3RvIG51bXF1YW0gdm9sdXB0YXR1bSBhbWV0XHJcbiAgICAgICAgICAgIGxhYm9yaW9zYW0gdW5kZSBtYXhpbWUuIFN1c2NpcGl0IGRvbG9yZSBuZXNjaXVudCByZWljaWVuZGlzLFxyXG4gICAgICAgICAgICB2b2x1cHRhdGVzIG9wdGlvIHZlbmlhbS5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6IFwiL3RoaXNpc2VuZ2luZWVyaW5nLXJhZW5nLXNiVnU1eml0WnQwLXVuc3BsYXNoLmpwZ1wiLFxyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgQ3VwaWRpdGF0ZSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgaXVzdG8gbnVtcXVhbSB2b2x1cHRhdHVtIGFtZXRcclxuICAgICAgICAgICAgbGFib3Jpb3NhbSB1bmRlIG1heGltZS4gU3VzY2lwaXQgZG9sb3JlIG5lc2NpdW50IHJlaWNpZW5kaXMsXHJcbiAgICAgICAgICAgIHZvbHVwdGF0ZXMgb3B0aW8gdmVuaWFtLlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogXCIvZ2VvcmdpZS1jb2Jicy1tdU9IYnJGR0VRWS11bnNwbGFzaC5qcGdcIixcclxuICAgICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIEN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgdmVyaXRhdGlzIGl1c3RvIG51bXF1YW0gdm9sdXB0YXR1bSBhbWV0XHJcbiAgICAgICAgICAgIGxhYm9yaW9zYW0gdW5kZSBtYXhpbWUuIFN1c2NpcGl0IGRvbG9yZSBuZXNjaXVudCByZWljaWVuZGlzLFxyXG4gICAgICAgICAgICB2b2x1cHRhdGVzIG9wdGlvIHZlbmlhbS5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldEJsb2dEYXRhKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj48L21ldGE+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMFwiPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGluZmluaXRlTG9vcCBhdXRvUGxheT17dHJ1ZX0gaW50ZXJ2YWw9ezQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9IHNob3dTdGF0dXM9e2ZhbHNlfSBzd2lwZVNjcm9sbFRvbGVyYW5jZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblRpbWU9ezQwMH0gZW11bGF0ZVRvdWNoPXt0cnVlfSBzaG93QXJyb3dzPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Nhcm91c2VsLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgdy1mdWxsIHRleHQtbGVmdCAke3N0eWxlcy5ncmFiYmluZ31gfSBzdHlsZT17eyBoZWlnaHQ6IFwiNzJ2aFwiLCB6SW5kZXg6IFwiLTFcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzYwMDAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAwMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ludHJpbnNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT0nODAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcm91c2VsIGNhcmQgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTMwIGZsZXgganVzdGlmeS1jZW50ZXIgbXgtYXV0byBteS0yNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0zMCB3LWF1dG8gaC1hdXRvIHAtNSBteC0xMCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1tZCBtZDp3LTcvMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIHRleHQtM3hsIGZvbnQtbWVkaXVtXCI+e2RhdGEuaGVhZGluZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG15LTgganVzdGlmeS1ldmVubHlcIj5cclxuICAgICAgICAgICAgICAgIHtibG9ncy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9ibG9nJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtkYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcmQgJHtpbmRleH1gfSBoZWFkaW5nPXtkYXRhLmhlYWRpbmd9IHR4dD17ZGF0YS50ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=