self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/footer */ "./Components/footer.js");
/* harmony import */ var _Components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/card */ "./Components/card.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\pages\\blog.js",
    _this = undefined,
    _s = $RefreshSig$();



 // requires a loader









var Blog = function Blog() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      carousel = _useState[0],
      setCarousel = _useState[1]; // const cardArr = [
  //     {
  //         img: "https://mmsolutions.biz/wp-content/gallery/hi-tech/Hi%20-%20Tech%203.jpg",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Omnis ullam quia repellat eius harum saepe velit aut maxime
  //         tempora ipsum.
  //         `
  //     },
  //     {
  //         img: "https://www.ns-businesshub.com/wp-content/uploads/sites/11/2019/08/48629609657_e518ecfd69_k.jpg",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Omnis ullam quia repellat eius harum saepe velit aut maxime
  //         tempora ipsum.
  //         `
  //     },
  //     {
  //         img: "/futuristic-3840x2160-future-world-4k-20319.jpg",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Omnis ullam quia repellat eius harum saepe velit aut maxime
  //         tempora ipsum.
  //         `
  //     },
  //     {
  //         img: "https://getwallpapers.com/wallpaper/full/2/5/d/1111038-best-techie-wallpaper-1920x1200-for-computer.jpg",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Omnis ullam quia repellat eius harum saepe velit aut maxime
  //         tempora ipsum.
  //         `
  //     },
  //     {
  //         img: "https://media0.giphy.com/media/1aIX95JPJddFm/giphy.gif?cid=790b761111754dcd7cab64fd2ad3017f33d54b4bdeca5e6e&rid=giphy.gif&ct=g",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Omnis ullam quia repellat eius harum saepe velit aut maxime
  //         tempora ipsum.
  //         `
  //     },
  //     {
  //         img: "https://gifimage.net/wp-content/uploads/2018/06/tech-gif-1.gif",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //         Omnis ullam quia repellat eius harum saepe velit aut maxime
  //         tempora ipsum.
  //         `
  //     }
  // ]
  // const carousel = [
  //     {
  //         img: "/daniel-korpai-8GDCzWrcE3M-unsplash.jpg",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //         Cupiditate dignissimos veritatis iusto numquam voluptatum amet
  //         laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,
  //         voluptates optio veniam.
  //         `
  //     },
  //     {
  //         img: "/thisisengineering-raeng-sbVu5zitZt0-unsplash.jpg",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //         Cupiditate dignissimos veritatis iusto numquam voluptatum amet
  //         laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,
  //         voluptates optio veniam.
  //         `
  //     },
  //     {
  //         img: "/georgie-cobbs-muOHbrFGEQY-unsplash.jpg",
  //         heading: "Heading",
  //         text: `
  //         Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //         Cupiditate dignissimos veritatis iusto numquam voluptatum amet
  //         laboriosam unde maxime. Suscipit dolore nesciunt reiciendis,
  //         voluptates optio veniam.
  //         `
  //     }
  // ]


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
            className: "w-full text-left ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().grabbing)),
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
                quality: "100",
                alt: "carousel card ".concat(index),
                priority: true,
                unoptimized: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
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
                  lineNumber: 136,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-lg font-medium",
                  children: data.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-wrap my-8 justify-evenly",
      children: cardArr.map(function (data, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_card__WEBPACK_IMPORTED_MODULE_6__.default // img={data.img}
          , {
            alt: "card ".concat(index),
            head: data.heading,
            txt: data.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Blog, "Vxt2Hyda5uJVYpZMTNtDPsVw5P8=");

_c = Blog;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

var _c;

$RefreshReg$(_c, "Blog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJjYXJvdXNlbCIsInNldENhcm91c2VsIiwibWFwIiwiZGF0YSIsImluZGV4Iiwic3R5bGVzIiwiaGVpZ2h0IiwiekluZGV4IiwiaW1nIiwiaGVhZGluZyIsInRleHQiLCJjYXJkQXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ2dFOztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQywrQ0FBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNSQyxRQURRO0FBQUEsTUFDRUMsV0FERixpQkFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFB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LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9Db21wb25lbnRzL05hdmJhclwiO1xyXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiOyAvLyByZXF1aXJlcyBhIGxvYWRlclxyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnRzL2Zvb3RlcidcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NvbXBvbmVudHMvY2FyZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmNvbnN0IEJsb2cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgLy8gY29uc3QgY2FyZEFyciA9IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCJodHRwczovL21tc29sdXRpb25zLmJpei93cC1jb250ZW50L2dhbGxlcnkvaGktdGVjaC9IaSUyMC0lMjBUZWNoJTIwMy5qcGdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgIC8vICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgIC8vICAgICAgICAgYFxyXG5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcImh0dHBzOi8vd3d3Lm5zLWJ1c2luZXNzaHViLmNvbS93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvMTEvMjAxOS8wOC80ODYyOTYwOTY1N19lNTE4ZWNmZDY5X2suanBnXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIE9tbmlzIHVsbGFtIHF1aWEgcmVwZWxsYXQgZWl1cyBoYXJ1bSBzYWVwZSB2ZWxpdCBhdXQgbWF4aW1lXHJcbiAgICAvLyAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCIvZnV0dXJpc3RpYy0zODQweDIxNjAtZnV0dXJlLXdvcmxkLTRrLTIwMzE5LmpwZ1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgLy8gICAgICAgICB0ZW1wb3JhIGlwc3VtLlxyXG4gICAgLy8gICAgICAgICBgXHJcblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiaHR0cHM6Ly9nZXR3YWxscGFwZXJzLmNvbS93YWxscGFwZXIvZnVsbC8yLzUvZC8xMTExMDM4LWJlc3QtdGVjaGllLXdhbGxwYXBlci0xOTIweDEyMDAtZm9yLWNvbXB1dGVyLmpwZ1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgLy8gICAgICAgICB0ZW1wb3JhIGlwc3VtLlxyXG4gICAgLy8gICAgICAgICBgXHJcblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiaHR0cHM6Ly9tZWRpYTAuZ2lwaHkuY29tL21lZGlhLzFhSVg5NUpQSmRkRm0vZ2lwaHkuZ2lmP2NpZD03OTBiNzYxMTExNzU0ZGNkN2NhYjY0ZmQyYWQzMDE3ZjMzZDU0YjRiZGVjYTVlNmUmcmlkPWdpcGh5LmdpZiZjdD1nXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIE9tbmlzIHVsbGFtIHF1aWEgcmVwZWxsYXQgZWl1cyBoYXJ1bSBzYWVwZSB2ZWxpdCBhdXQgbWF4aW1lXHJcbiAgICAvLyAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCJodHRwczovL2dpZmltYWdlLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNi90ZWNoLWdpZi0xLmdpZlwiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgLy8gICAgICAgICB0ZW1wb3JhIGlwc3VtLlxyXG4gICAgLy8gICAgICAgICBgXHJcblxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIF1cclxuICAgIC8vIGNvbnN0IGNhcm91c2VsID0gW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcIi9kYW5pZWwta29ycGFpLThHREN6V3JjRTNNLXVuc3BsYXNoLmpwZ1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgQ3VwaWRpdGF0ZSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgaXVzdG8gbnVtcXVhbSB2b2x1cHRhdHVtIGFtZXRcclxuICAgIC8vICAgICAgICAgbGFib3Jpb3NhbSB1bmRlIG1heGltZS4gU3VzY2lwaXQgZG9sb3JlIG5lc2NpdW50IHJlaWNpZW5kaXMsXHJcbiAgICAvLyAgICAgICAgIHZvbHVwdGF0ZXMgb3B0aW8gdmVuaWFtLlxyXG4gICAgLy8gICAgICAgICBgXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCIvdGhpc2lzZW5naW5lZXJpbmctcmFlbmctc2JWdTV6aXRadDAtdW5zcGxhc2guanBnXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBDdXBpZGl0YXRlIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBpdXN0byBudW1xdWFtIHZvbHVwdGF0dW0gYW1ldFxyXG4gICAgLy8gICAgICAgICBsYWJvcmlvc2FtIHVuZGUgbWF4aW1lLiBTdXNjaXBpdCBkb2xvcmUgbmVzY2l1bnQgcmVpY2llbmRpcyxcclxuICAgIC8vICAgICAgICAgdm9sdXB0YXRlcyBvcHRpbyB2ZW5pYW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcIi9nZW9yZ2llLWNvYmJzLW11T0hickZHRVFZLXVuc3BsYXNoLmpwZ1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgQ3VwaWRpdGF0ZSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgaXVzdG8gbnVtcXVhbSB2b2x1cHRhdHVtIGFtZXRcclxuICAgIC8vICAgICAgICAgbGFib3Jpb3NhbSB1bmRlIG1heGltZS4gU3VzY2lwaXQgZG9sb3JlIG5lc2NpdW50IHJlaWNpZW5kaXMsXHJcbiAgICAvLyAgICAgICAgIHZvbHVwdGF0ZXMgb3B0aW8gdmVuaWFtLlxyXG4gICAgLy8gICAgICAgICBgXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj48L21ldGE+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMFwiPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGluZmluaXRlTG9vcCBhdXRvUGxheT17dHJ1ZX0gaW50ZXJ2YWw9ezQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9IHNob3dTdGF0dXM9e2ZhbHNlfSBzd2lwZVNjcm9sbFRvbGVyYW5jZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblRpbWU9ezQwMH0gZW11bGF0ZVRvdWNoPXt0cnVlfSBzaG93QXJyb3dzPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Nhcm91c2VsLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgdy1mdWxsIHRleHQtbGVmdCAke3N0eWxlcy5ncmFiYmluZ31gfSBzdHlsZT17eyBoZWlnaHQ6IFwiNzJ2aFwiLCB6SW5kZXg6IFwiLTFcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzYwMDAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAwMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ludHJpbnNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT0nMTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BjYXJvdXNlbCBjYXJkICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVub3B0aW1pemVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei0zMCBmbGV4IGp1c3RpZnktY2VudGVyIG14LWF1dG8gbXktMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMzAgdy1hdXRvIGgtYXV0byBwLTUgbXgtMTAgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbWQgbWQ6dy03LzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiB0ZXh0LTN4bCBmb250LW1lZGl1bVwiPntkYXRhLmhlYWRpbmd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBteS04IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgICB7Y2FyZEFyci5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWc9e2RhdGEuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgY2FyZCAke2luZGV4fWB9IGhlYWQ9e2RhdGEuaGVhZGluZ30gdHh0PXtkYXRhLnRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9