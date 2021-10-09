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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/redux */ "./redux/redux.js");
/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navbar */ "./Components/Navbar.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/footer */ "./Components/footer.js");
/* harmony import */ var _Components_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/card */ "./Components/card.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\pages\\blogpage.js",
    _this = undefined,
    _s = $RefreshSig$();





 // requires a loader










var BlogPage = function BlogPage() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var getBlogData = function getBlogData() {
    axios__WEBPACK_IMPORTED_MODULE_9___default().get('http://localhost:5000/blogs').then(function (res) {
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "z-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_6__.Carousel, {
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
            className: "w-full text-left ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default().grabbing)),
            style: {
              height: "72vh",
              zIndex: "-1"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-full h-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_11___default()), {
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
                lineNumber: 76,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
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
                  lineNumber: 90,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-lg font-medium",
                  children: data.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-wrap my-8 justify-evenly",
      children: blogs.map(function (data, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: function onClick() {
            dispatch((0,_redux_redux__WEBPACK_IMPORTED_MODULE_3__.reducer)(data.link));
            router.push('/blog');
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_card__WEBPACK_IMPORTED_MODULE_8__.default, {
            img: data.img,
            alt: "card ".concat(index),
            heading: data.heading,
            txt: data.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_footer__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(BlogPage, "JxzSjhaIQBuPT+jlhcdTCYDNKQQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3BhZ2UuanMiXSwibmFtZXMiOlsiQmxvZ1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwiZ2V0QmxvZ0RhdGEiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNhcm91c2VsIiwiaW1nIiwiaGVhZGluZyIsInRleHQiLCJ1c2VFZmZlY3QiLCJtYXAiLCJpbmRleCIsInN0eWxlcyIsImhlaWdodCIsInpJbmRleCIsInJlZHVjZXIiLCJsaW5rIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBQ2dFOztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyx1REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRm1CLGtCQUdPQywrQ0FBUSxDQUFDLEVBQUQsQ0FIZjtBQUFBLE1BR1pDLEtBSFk7QUFBQSxNQUdMQyxRQUhLOztBQUtuQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCQyxvREFBQSxDQUFVLDZCQUFWLEVBQXlDQyxJQUF6QyxDQUE4QyxVQUFBQyxHQUFHLEVBQUk7QUFDakRKLGNBQVEsQ0FBQ0ksR0FBRyxDQUFDQyxJQUFMLENBQVI7QUFDSCxLQUZELFdBRVMsVUFBQUMsR0FBRztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQUo7QUFBQSxLQUZaO0FBR0gsR0FKRDs7QUFNQSxNQUFNRyxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxPQUFHLEVB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Q0ExQixrQkFBTSxDQUFDMkIsSUFBUCxDQUFZLE9BQVo7QUFDSCxXQUhNO0FBQUEsaUNBSUgsOERBQUMscURBQUQ7QUFDSSxlQUFHLEVBQUVoQixJQUFJLENBQUNLLEdBRGQ7QUFFSSxlQUFHLGlCQUFVSyxLQUFWLENBRlA7QUFFMEIsbUJBQU8sRUFBRVYsSUFBSSxDQUFDTSxPQUZ4QztBQUVpRCxlQUFHLEVBQUVOLElBQUksQ0FBQ087QUFGM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpHLFdBQVVHLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQVFILE9BVEE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckNKLGVBaURJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqREo7QUFBQSxrQkFESjtBQXFESCxDQXJHRDs7R0FBTXRCLFE7VUFDYUUsbUQsRUFDRUUsb0Q7OztLQUZmSixRO0FBdUdOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dwYWdlLmYzNWE2ZjNiOGI2NzM1OWVmZDE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi4vcmVkdXgvcmVkdXgnXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL0NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7IC8vIHJlcXVpcmVzIGEgbG9hZGVyXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vQ29tcG9uZW50cy9jYXJkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IEJsb2dQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBnZXRCbG9nRGF0YSA9ICgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9ibG9ncycpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc2V0QmxvZ3MocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2Fyb3VzZWwgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6IFwiL2RhbmllbC1rb3JwYWktOEdEQ3pXcmNFM00tdW5zcGxhc2guanBnXCIsXHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICBDdXBpZGl0YXRlIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBpdXN0byBudW1xdWFtIHZvbHVwdGF0dW0gYW1ldFxyXG4gICAgICAgICAgICBsYWJvcmlvc2FtIHVuZGUgbWF4aW1lLiBTdXNjaXBpdCBkb2xvcmUgbmVzY2l1bnQgcmVpY2llbmRpcyxcclxuICAgICAgICAgICAgdm9sdXB0YXRlcyBvcHRpbyB2ZW5pYW0uXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiBcIi90aGlzaXNlbmdpbmVlcmluZy1yYWVuZy1zYlZ1NXppdFp0MC11bnNwbGFzaC5qcGdcIixcclxuICAgICAgICAgICAgaGVhZGluZzogXCJIZWFkaW5nXCIsXHJcbiAgICAgICAgICAgIHRleHQ6IGBcclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgIEN1cGlkaXRhdGUgZGlnbmlzc2ltb3MgdmVyaXRhdGlzIGl1c3RvIG51bXF1YW0gdm9sdXB0YXR1bSBhbWV0XHJcbiAgICAgICAgICAgIGxhYm9yaW9zYW0gdW5kZSBtYXhpbWUuIFN1c2NpcGl0IGRvbG9yZSBuZXNjaXVudCByZWljaWVuZGlzLFxyXG4gICAgICAgICAgICB2b2x1cHRhdGVzIG9wdGlvIHZlbmlhbS5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWc6IFwiL2dlb3JnaWUtY29iYnMtbXVPSGJyRkdFUVktdW5zcGxhc2guanBnXCIsXHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICBDdXBpZGl0YXRlIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBpdXN0byBudW1xdWFtIHZvbHVwdGF0dW0gYW1ldFxyXG4gICAgICAgICAgICBsYWJvcmlvc2FtIHVuZGUgbWF4aW1lLiBTdXNjaXBpdCBkb2xvcmUgbmVzY2l1bnQgcmVpY2llbmRpcyxcclxuICAgICAgICAgICAgdm9sdXB0YXRlcyBvcHRpbyB2ZW5pYW0uXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRCbG9nRGF0YSgpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2c8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+PC9tZXRhPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTBcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBpbmZpbml0ZUxvb3AgYXV0b1BsYXk9e3RydWV9IGludGVydmFsPXs0MDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfSBzaG93U3RhdHVzPXtmYWxzZX0gc3dpcGVTY3JvbGxUb2xlcmFuY2U9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25UaW1lPXs0MDB9IGVtdWxhdGVUb3VjaD17dHJ1ZX0gc2hvd0Fycm93cz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJvdXNlbC5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17YHctZnVsbCB0ZXh0LWxlZnQgJHtzdHlsZXMuZ3JhYmJpbmd9YH0gc3R5bGU9e3sgaGVpZ2h0OiBcIjcydmhcIiwgekluZGV4OiBcIi0xXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPScnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc2MDAwMDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD0nMTAwMDAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PSdpbnRyaW5zaWMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHk9JzgwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BjYXJvdXNlbCBjYXJkICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVub3B0aW1pemVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgei0zMCBmbGV4IGp1c3RpZnktY2VudGVyIG14LWF1dG8gbXktMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMzAgdy1hdXRvIGgtYXV0byBwLTUgbXgtMTAgb3ZlcmZsb3ctaGlkZGVuIGJnLXdoaXRlIHJvdW5kZWQtbWQgbWQ6dy03LzEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiB0ZXh0LTN4bCBmb250LW1lZGl1bVwiPntkYXRhLmhlYWRpbmd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEudGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBteS04IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgICB7YmxvZ3MubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVkdWNlcihkYXRhLmxpbmspKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Jsb2cnKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZz17ZGF0YS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BjYXJkICR7aW5kZXh9YH0gaGVhZGluZz17ZGF0YS5oZWFkaW5nfSB0eHQ9e2RhdGEudGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9