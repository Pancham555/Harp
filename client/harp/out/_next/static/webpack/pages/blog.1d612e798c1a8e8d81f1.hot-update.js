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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      blogs = _useState2[0],
      setBlogs = _useState2[1];

  var getCarouselData = function getCarouselData() {
    axios__WEBPACK_IMPORTED_MODULE_7___default().get('/carousel').then(function (res) {
      setCarousel(res.data);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  var getBlogData = function getBlogData() {
    axios__WEBPACK_IMPORTED_MODULE_7___default().get('/carousel').then(function (res) {
      setBlogs(res.data);
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
        lineNumber: 122,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
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
                lineNumber: 133,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
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
                  lineNumber: 147,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-lg font-medium",
                  children: data.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
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
            lineNumber: 160,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Blog, "+GYVqtyM7UNkxzpPYMws4NkWf5o=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6WyJCbG9nIiwidXNlU3RhdGUiLCJjYXJvdXNlbCIsInNldENhcm91c2VsIiwiYmxvZ3MiLCJzZXRCbG9ncyIsImdldENhcm91c2VsRGF0YSIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZ2V0QmxvZ0RhdGEiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsImhlaWdodCIsInpJbmRleCIsImltZyIsImhlYWRpbmciLCJ0ZXh0IiwiY2FyZEFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUNnRTs7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsK0NBQVEsQ0FBQyxFQUFELENBRHpCO0FBQUEsTUFDUkMsUUFEUTtBQUFBLE1BQ0VDLFdBREY7O0FBQUEsbUJBRVdGLCtDQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBLE1BRVJHLEtBRlE7QUFBQSxNQUVEQyxRQUZDOztBQUdmLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUMxQkMsb0RBQUEsQ0FBVSxXQUFWLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxHQUFHLEVBQUk7QUFDL0JOLGlCQUFXLENBQUNNLEdBQUcsQ0FBQ0MsSUFBTCxDQUFYO0FBQ0gsS0FGRCxXQUVTLFVBQUFDLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFKO0FBQUEsS0FGWjtBQUdILEdBSkQ7O0FBS0EsTUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QlAsb0RBQUEsQ0FBVSxXQUFWLEVBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxHQUFHLEVBQUk7QUFDL0JKLGNBQVEs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QTtBQUFBLHFCQWRHO0FBQUEsYUFBVU4sS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBdUJILFNBeEJBO0FBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSixlQXFDSTtBQUFLLGVBQVMsRUFBQyxvQ0FBZjtBQUFBLGdCQUNLTyxPQUFPLENBQUNSLEdBQVIsQ0FBWSxVQUFDTCxJQUFELEVBQU9NLEtBQVAsRUFBaUI7QUFDMUIsNEJBQU87QUFBQSxpQ0FDSCw4REFBQyxxREFBRCxDQUNJO0FBREo7QUFFSSxlQUFHLGlCQUFVQSxLQUFWLENBRlA7QUFFMEIsZ0JBQUksRUFBRU4sSUFBSSxDQUFDVyxPQUZyQztBQUU4QyxlQUFHLEVBQUVYLElBQUksQ0FBQ1k7QUFGeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLFdBQVVOLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUtILE9BTkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKLGVBOENJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Q0o7QUFBQSxrQkFESjtBQWtESCxDQTlKRDs7R0FBTWhCLEk7O0tBQUFBLEk7QUFnS04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy4xZDYxMmU3OThjMWE4ZThkODFmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuY29uc3QgQmxvZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjYXJvdXNlbCwgc2V0Q2Fyb3VzZWxdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbYmxvZ3MsIHNldEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgZ2V0Q2Fyb3VzZWxEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2Nhcm91c2VsJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRDYXJvdXNlbChyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIGNvbnN0IGdldEJsb2dEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2Nhcm91c2VsJykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRCbG9ncyhyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IGNhcmRBcnIgPSBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiaHR0cHM6Ly9tbXNvbHV0aW9ucy5iaXovd3AtY29udGVudC9nYWxsZXJ5L2hpLXRlY2gvSGklMjAtJTIwVGVjaCUyMDMuanBnXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgLy8gICAgICAgICB0ZXh0OiBgXHJcbiAgICAvLyAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIE9tbmlzIHVsbGFtIHF1aWEgcmVwZWxsYXQgZWl1cyBoYXJ1bSBzYWVwZSB2ZWxpdCBhdXQgbWF4aW1lXHJcbiAgICAvLyAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAvLyAgICAgICAgIGBcclxuXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCJodHRwczovL3d3dy5ucy1idXNpbmVzc2h1Yi5jb20vd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzExLzIwMTkvMDgvNDg2Mjk2MDk2NTdfZTUxOGVjZmQ2OV9rLmpwZ1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgLy8gICAgICAgICB0ZW1wb3JhIGlwc3VtLlxyXG4gICAgLy8gICAgICAgICBgXHJcblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiL2Z1dHVyaXN0aWMtMzg0MHgyMTYwLWZ1dHVyZS13b3JsZC00ay0yMDMxOS5qcGdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgIC8vICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgIC8vICAgICAgICAgYFxyXG5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcImh0dHBzOi8vZ2V0d2FsbHBhcGVycy5jb20vd2FsbHBhcGVyL2Z1bGwvMi81L2QvMTExMTAzOC1iZXN0LXRlY2hpZS13YWxscGFwZXItMTkyMHgxMjAwLWZvci1jb21wdXRlci5qcGdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgIC8vICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgIC8vICAgICAgICAgYFxyXG5cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgaW1nOiBcImh0dHBzOi8vbWVkaWEwLmdpcGh5LmNvbS9tZWRpYS8xYUlYOTVKUEpkZEZtL2dpcGh5LmdpZj9jaWQ9NzkwYjc2MTExMTc1NGRjZDdjYWI2NGZkMmFkMzAxN2YzM2Q1NGI0YmRlY2E1ZTZlJnJpZD1naXBoeS5naWYmY3Q9Z1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgLy8gICAgICAgICBPbW5pcyB1bGxhbSBxdWlhIHJlcGVsbGF0IGVpdXMgaGFydW0gc2FlcGUgdmVsaXQgYXV0IG1heGltZVxyXG4gICAgLy8gICAgICAgICB0ZW1wb3JhIGlwc3VtLlxyXG4gICAgLy8gICAgICAgICBgXHJcblxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiaHR0cHM6Ly9naWZpbWFnZS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDYvdGVjaC1naWYtMS5naWZcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgT21uaXMgdWxsYW0gcXVpYSByZXBlbGxhdCBlaXVzIGhhcnVtIHNhZXBlIHZlbGl0IGF1dCBtYXhpbWVcclxuICAgIC8vICAgICAgICAgdGVtcG9yYSBpcHN1bS5cclxuICAgIC8vICAgICAgICAgYFxyXG5cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyBdXHJcbiAgICAvLyBjb25zdCBjYXJvdXNlbCA9IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCIvZGFuaWVsLWtvcnBhaS04R0RDeldyY0UzTS11bnNwbGFzaC5qcGdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIEN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgdmVyaXRhdGlzIGl1c3RvIG51bXF1YW0gdm9sdXB0YXR1bSBhbWV0XHJcbiAgICAvLyAgICAgICAgIGxhYm9yaW9zYW0gdW5kZSBtYXhpbWUuIFN1c2NpcGl0IGRvbG9yZSBuZXNjaXVudCByZWljaWVuZGlzLFxyXG4gICAgLy8gICAgICAgICB2b2x1cHRhdGVzIG9wdGlvIHZlbmlhbS5cclxuICAgIC8vICAgICAgICAgYFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBpbWc6IFwiL3RoaXNpc2VuZ2luZWVyaW5nLXJhZW5nLXNiVnU1eml0WnQwLXVuc3BsYXNoLmpwZ1wiLFxyXG4gICAgLy8gICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgIC8vICAgICAgICAgdGV4dDogYFxyXG4gICAgLy8gICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgIC8vICAgICAgICAgQ3VwaWRpdGF0ZSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgaXVzdG8gbnVtcXVhbSB2b2x1cHRhdHVtIGFtZXRcclxuICAgIC8vICAgICAgICAgbGFib3Jpb3NhbSB1bmRlIG1heGltZS4gU3VzY2lwaXQgZG9sb3JlIG5lc2NpdW50IHJlaWNpZW5kaXMsXHJcbiAgICAvLyAgICAgICAgIHZvbHVwdGF0ZXMgb3B0aW8gdmVuaWFtLlxyXG4gICAgLy8gICAgICAgICBgXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGltZzogXCIvZ2VvcmdpZS1jb2Jicy1tdU9IYnJGR0VRWS11bnNwbGFzaC5qcGdcIixcclxuICAgIC8vICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAvLyAgICAgICAgIHRleHQ6IGBcclxuICAgIC8vICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAvLyAgICAgICAgIEN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgdmVyaXRhdGlzIGl1c3RvIG51bXF1YW0gdm9sdXB0YXR1bSBhbWV0XHJcbiAgICAvLyAgICAgICAgIGxhYm9yaW9zYW0gdW5kZSBtYXhpbWUuIFN1c2NpcGl0IGRvbG9yZSBuZXNjaXVudCByZWljaWVuZGlzLFxyXG4gICAgLy8gICAgICAgICB2b2x1cHRhdGVzIG9wdGlvIHZlbmlhbS5cclxuICAgIC8vICAgICAgICAgYFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTBcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBpbmZpbml0ZUxvb3AgYXV0b1BsYXk9e3RydWV9IGludGVydmFsPXs0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfSBzaG93U3RhdHVzPXtmYWxzZX0gc3dpcGVTY3JvbGxUb2xlcmFuY2U9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25UaW1lPXs0MDB9IGVtdWxhdGVUb3VjaD17dHJ1ZX0gc2hvd0Fycm93cz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJvdXNlbC5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17YHctZnVsbCB0ZXh0LWxlZnQgJHtzdHlsZXMuZ3JhYmJpbmd9YH0gc3R5bGU9e3sgaGVpZ2h0OiBcIjcydmhcIiwgekluZGV4OiBcIi0xXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc2MDAwMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwMDAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdpbnRyaW5zaWMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9JzEwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgY2Fyb3VzZWwgY2FyZCAke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIHotMzAgZmxleCBqdXN0aWZ5LWNlbnRlciBteC1hdXRvIG15LTI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTMwIHctYXV0byBoLWF1dG8gcC01IG14LTEwIG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLW1kIG1kOnctNy8xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgdGV4dC0zeGwgZm9udC1tZWRpdW1cIj57ZGF0YS5oZWFkaW5nfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgbXktOCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICAgICAge2NhcmRBcnIubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW1nPXtkYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcmQgJHtpbmRleH1gfSBoZWFkPXtkYXRhLmhlYWRpbmd9IHR4dD17ZGF0YS50ZXh0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==