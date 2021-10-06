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
      setCarousel = _useState[1];

  var getCarouselData = function getCarouselData() {
    axios__WEBPACK_IMPORTED_MODULE_7___default().get('/carousel').then(function (res) {
      setCarousel(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  }; // const cardArr = [
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
        lineNumber: 116,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
                lineNumber: 127,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
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
                  lineNumber: 141,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-lg font-medium",
                  children: data.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 29
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
            lineNumber: 154,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJjYXJvdXNlbCIsInNldENhcm91c2VsIiwiZ2V0Q2Fyb3VzZWxEYXRhIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsImhlaWdodCIsInpJbmRleCIsImltZyIsImhlYWRpbmciLCJ0ZXh0IiwiY2FyZEFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUNnRTs7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsK0NBQVEsQ0FBQyxFQUFELENBRHpCO0FBQUEsTUFDUkMsUUFEUTtBQUFBLE1BQ0VDLFdBREY7O0FBRWYsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzFCQyxvREFBQSxDQUFVLFdBQVYsRUFBdUJDLElBQXZCLENBQTRCLFVBQUFDLEdBQUcsRUFBSTtBQUMvQkosaUJBQVcsQ0FBQ0ksR0FBRyxDQUFDQyxJQUFMLENBQVg7QUFDSCxLQUZELFdBRVMsVUFBQUMsR0FBRztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxLQUZaO0FBR0gsR0FKRCxDQUZlLENBT2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFHLEVBQUVWLElBQUksQ0FBQ1c7QUFGeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLFdBQVVOLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUtILE9BTkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKLGVBOENJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Q0o7QUFBQSxrQkFESjtBQWtESCxDQXhKRDs7R0FBTWIsSTs7S0FBQUEsSTtBQTBKTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjdlOTc5NmM3ZTBjNDVhNmRiZTQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vQ29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9Db21wb25lbnRzL2NhcmRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5jb25zdCBCbG9nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2Nhcm91c2VsLCBzZXRDYXJvdXNlbF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IGdldENhcm91c2VsRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoJy9jYXJvdXNlbCcpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc2V0Q2Fyb3VzZWwocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcbiAgICAvLyBjb25zdCBjYXJkQXJyID0gW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcImh0dHBzOi8vbW1zb2x1dGlvbnMuYml6L3dwLWNvbnRlbnQvZ2FsbGVyeS9oaS10ZWNoL0hpJTIwLSUyMFRlY2glMjAzLmpwZ1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgLy8gICAgICAgICB0ZW1wb3JhIGlwc3VtLlxyXG4gICAgLy8gICAgICAgICBgXHJcblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiaHR0cHM6Ly93d3cubnMtYnVzaW5lc3NodWIuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy8xMS8yMDE5LzA4LzQ4NjI5NjA5NjU3X2U1MThlY2ZkNjlfay5qcGdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgIC8vICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgIC8vICAgICAgICAgYFxyXG5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcIi9mdXR1cmlzdGljLTM4NDB4MjE2MC1mdXR1cmUtd29ybGQtNGstMjAzMTkuanBnXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIE9tbmlzIHVsbGFtIHF1aWEgcmVwZWxsYXQgZWl1cyBoYXJ1bSBzYWVwZSB2ZWxpdCBhdXQgbWF4aW1lXHJcbiAgICAvLyAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCJodHRwczovL2dldHdhbGxwYXBlcnMuY29tL3dhbGxwYXBlci9mdWxsLzIvNS9kLzExMTEwMzgtYmVzdC10ZWNoaWUtd2FsbHBhcGVyLTE5MjB4MTIwMC1mb3ItY29tcHV0ZXIuanBnXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIE9tbmlzIHVsbGFtIHF1aWEgcmVwZWxsYXQgZWl1cyBoYXJ1bSBzYWVwZSB2ZWxpdCBhdXQgbWF4aW1lXHJcbiAgICAvLyAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCJodHRwczovL21lZGlhMC5naXBoeS5jb20vbWVkaWEvMWFJWDk1SlBKZGRGbS9naXBoeS5naWY/Y2lkPTc5MGI3NjExMTE3NTRkY2Q3Y2FiNjRmZDJhZDMwMTdmMzNkNTRiNGJkZWNhNWU2ZSZyaWQ9Z2lwaHkuZ2lmJmN0PWdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgIC8vICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgIC8vICAgICAgICAgYFxyXG5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcImh0dHBzOi8vZ2lmaW1hZ2UubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA2L3RlY2gtZ2lmLTEuZ2lmXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIE9tbmlzIHVsbGFtIHF1aWEgcmVwZWxsYXQgZWl1cyBoYXJ1bSBzYWVwZSB2ZWxpdCBhdXQgbWF4aW1lXHJcbiAgICAvLyAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gXVxyXG4gICAgLy8gY29uc3QgY2Fyb3VzZWwgPSBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiL2RhbmllbC1rb3JwYWktOEdEQ3pXcmNFM00tdW5zcGxhc2guanBnXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBDdXBpZGl0YXRlIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBpdXN0byBudW1xdWFtIHZvbHVwdGF0dW0gYW1ldFxyXG4gICAgLy8gICAgICAgICBsYWJvcmlvc2FtIHVuZGUgbWF4aW1lLiBTdXNjaXBpdCBkb2xvcmUgbmVzY2l1bnQgcmVpY2llbmRpcyxcclxuICAgIC8vICAgICAgICAgdm9sdXB0YXRlcyBvcHRpbyB2ZW5pYW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcIi90aGlzaXNlbmdpbmVlcmluZy1yYWVuZy1zYlZ1NXppdFp0MC11bnNwbGFzaC5qcGdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIEN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgdmVyaXRhdGlzIGl1c3RvIG51bXF1YW0gdm9sdXB0YXR1bSBhbWV0XHJcbiAgICAvLyAgICAgICAgIGxhYm9yaW9zYW0gdW5kZSBtYXhpbWUuIFN1c2NpcGl0IGRvbG9yZSBuZXNjaXVudCByZWljaWVuZGlzLFxyXG4gICAgLy8gICAgICAgICB2b2x1cHRhdGVzIG9wdGlvIHZlbmlhbS5cclxuICAgIC8vICAgICAgICAgYFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiL2dlb3JnaWUtY29iYnMtbXVPSGJyRkdFUVktdW5zcGxhc2guanBnXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBDdXBpZGl0YXRlIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBpdXN0byBudW1xdWFtIHZvbHVwdGF0dW0gYW1ldFxyXG4gICAgLy8gICAgICAgICBsYWJvcmlvc2FtIHVuZGUgbWF4aW1lLiBTdXNjaXBpdCBkb2xvcmUgbmVzY2l1bnQgcmVpY2llbmRpcyxcclxuICAgIC8vICAgICAgICAgdm9sdXB0YXRlcyBvcHRpbyB2ZW5pYW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgaW5maW5pdGVMb29wIGF1dG9QbGF5PXt0cnVlfSBpbnRlcnZhbD17NDAwMH1cclxuICAgICAgICAgICAgICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX0gc2hvd1N0YXR1cz17ZmFsc2V9IHN3aXBlU2Nyb2xsVG9sZXJhbmNlPXsyMH1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uVGltZT17NDAwfSBlbXVsYXRlVG91Y2g9e3RydWV9IHNob3dBcnJvd3M9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2Fyb3VzZWwubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2B3LWZ1bGwgdGV4dC1sZWZ0ICR7c3R5bGVzLmdyYWJiaW5nfWB9IHN0eWxlPXt7IGhlaWdodDogXCI3MnZoXCIsIHpJbmRleDogXCItMVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcj0nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nNjAwMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9JzEwMDAwMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD0naW50cmluc2ljJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5PScxMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcm91c2VsIGNhcmQgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTMwIGZsZXgganVzdGlmeS1jZW50ZXIgbXgtYXV0byBteS0yNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0zMCB3LWF1dG8gaC1hdXRvIHAtNSBteC0xMCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1tZCBtZDp3LTcvMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIHRleHQtM3hsIGZvbnQtbWVkaXVtXCI+e2RhdGEuaGVhZGluZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG15LTgganVzdGlmeS1ldmVubHlcIj5cclxuICAgICAgICAgICAgICAgIHtjYXJkQXJyLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltZz17ZGF0YS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BjYXJkICR7aW5kZXh9YH0gaGVhZD17ZGF0YS5oZWFkaW5nfSB0eHQ9e2RhdGEudGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=