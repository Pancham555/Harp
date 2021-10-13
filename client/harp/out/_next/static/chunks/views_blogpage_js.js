(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["views_blogpage_js"],{

/***/ "./Components/card.js":
/*!****************************!*\
  !*** ./Components/card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\Components\\card.js",
    _this = undefined;




var Card = function Card(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "w-auto h-auto m-5 cursor-pointer select-none md:w-96",
    onClick: props.click,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "w-full h-64",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: props.img ? props.img : "/ivan-bandura-EWVXMoIWlpA-unsplash.jpg",
        alt: props.alt ? props.alt : "dynamic cards",
        width: "1000",
        height: "660",
        layout: "responsive",
        unoptimized: true,
        quality: "40",
        className: "w-full h-full"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mx-2 font-medium",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "my-2 text-2xl break-words break-all",
        children: props.heading ? props.heading : "Heading"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "break-words break-all",
        children: props.txt ? props.txt : "\n                     Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                     Omnis ullam quia repellat eius harum saepe velit aut maxime\n                     tempora ipsum.\n                    "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, _this);
};

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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


/***/ }),

/***/ "./redux/redux.js":
/*!************************!*\
  !*** ./redux/redux.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "redux": function() { return /* binding */ redux; },
/* harmony export */   "linker": function() { return /* binding */ linker; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var initial = {
  value: ""
};
var redux = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "redux",
  initialState: initial,
  reducers: {
    linker: function linker(state, action) {
      state.value = action.payload;
    }
  }
});
var linker = redux.actions.linker;

/* harmony default export */ __webpack_exports__["default"] = (redux.reducer);

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


/***/ }),

/***/ "./views/blogpage.js":
/*!***************************!*\
  !*** ./views/blogpage.js ***!
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
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/card */ "./Components/card.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Harp 2.0\\server2.0\\client\\harp\\views\\blogpage.js",
    _this = undefined,
    _s = $RefreshSig$();












var BlogPageView = function BlogPageView() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

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

  var carouselArr = [{
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "z-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {
        infiniteLoop: true,
        autoPlay: true,
        interval: 4000,
        showThumbs: false,
        showStatus: false,
        swipeScrollTolerance: 20,
        transitionTime: 400,
        emulateTouch: true,
        showArrows: false,
        children: carouselArr.map(function (data, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "w-full text-left ".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().grabbing)),
            style: {
              height: "72vh",
              zIndex: "-1"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-full h-full",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                loader: "",
                width: "600000",
                height: "1000000",
                src: data.img,
                layout: "intrinsic",
                quality: "50",
                alt: "carousel card ".concat(index),
                priority: true,
                unoptimized: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
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
                  lineNumber: 82,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "text-lg font-medium",
                  children: data.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 29
            }, _this)]
          }, index, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 32
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-wrap my-8 justify-evenly",
      children: blogs.map(function (data, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_card__WEBPACK_IMPORTED_MODULE_6__.default, {
            img: data.img,
            alt: "card ".concat(index),
            heading: data.heading,
            txt: data.text,
            click: function click() {
              dispatch((0,_redux_redux__WEBPACK_IMPORTED_MODULE_3__.linker)(data.link));
              router.push('/blog');
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(BlogPageView, "JxzSjhaIQBuPT+jlhcdTCYDNKQQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});

_c = BlogPageView;
/* harmony default export */ __webpack_exports__["default"] = (BlogPageView);

var _c;

$RefreshReg$(_c, "BlogPageView");

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


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Home.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Home.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Home.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Home.module.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Home.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Home.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Home.module.css":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./styles/Home.module.css ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Home_grabbing__2aCth {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.Home_grabbing__2aCth:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n", "",{"version":3,"sources":["webpack://styles/Home.module.css"],"names":[],"mappings":"AAAA;EACE,oBAAY;EAAZ,YAAY;AACd;;AAEA;EACE,wBAAgB;EAAhB,gBAAgB;AAClB","sourcesContent":[".grabbing {\n  cursor: grab;\n}\n\n.grabbing:active {\n  cursor: grabbing;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"grabbing": "Home_grabbing__2aCth"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1eC9yZWR1eC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvYmxvZ3BhZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/ZTdkMCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJDYXJkIiwicHJvcHMiLCJjbGljayIsImltZyIsImFsdCIsImhlYWRpbmciLCJ0eHQiLCJpbml0aWFsIiwidmFsdWUiLCJyZWR1eCIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwibGlua2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJCbG9nUGFnZVZpZXciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJibG9ncyIsInNldEJsb2dzIiwiZ2V0QmxvZ0RhdGEiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImNhcm91c2VsQXJyIiwidGV4dCIsInVzZUVmZmVjdCIsIm1hcCIsImluZGV4Iiwic3R5bGVzIiwiaGVpZ2h0IiwiekluZGV4IiwibGluayIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUNwQixzQkFDSTtBQUFLLGFBQVMsRUFBQyxzREFBZjtBQUFzRSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsS0FBckY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsNkJBQ0ksOERBQUMsbURBQUQ7QUFBTyxXQUFHLEVBQUVELEtBQUssQ0FBQ0UsR0FB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ZkosWTtBQW9HTiwrREFBZUEsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQSxVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLG1hQUE2TTs7QUFFL087O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2QseUJBQXlCLFVBQVU7QUFDbkMsa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQSxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLG1hQUE2TTtBQUNuTjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLG1hQUE2TTs7QUFFdk87O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7QUMzREE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxpSEFBc0Q7QUFDaEc7QUFDQTtBQUNBLGlFQUFpRSx5QkFBeUIsaUJBQWlCLEdBQUcsa0NBQWtDLDZCQUE2QixxQkFBcUIsR0FBRyxTQUFTLHVGQUF1RixXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxxQ0FBcUMsaUJBQWlCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLHFCQUFxQjtBQUMxZDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy9jaHVua3Mvdmlld3NfYmxvZ3BhZ2VfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGgtYXV0byBtLTUgY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmUgbWQ6dy05NlwiIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvcHMuaW1nID8gcHJvcHMuaW1nIDogXCIvaXZhbi1iYW5kdXJhLUVXVlhNb0lXbHBBLXVuc3BsYXNoLmpwZ1wifSBhbHQ9e3Byb3BzLmFsdCA/IHByb3BzLmFsdCA6IFwiZHluYW1pYyBjYXJkc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0nNjYwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD0ncmVzcG9uc2l2ZSdcclxuICAgICAgICAgICAgICAgICAgICB1bm9wdGltaXplZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5PSc0MCdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0yIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTIgdGV4dC0yeGwgYnJlYWstd29yZHMgYnJlYWstYWxsXCI+e3Byb3BzLmhlYWRpbmcgPyBwcm9wcy5oZWFkaW5nIDogXCJIZWFkaW5nXCJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrLXdvcmRzIGJyZWFrLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50eHQgPyBwcm9wcy50eHQgOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgIE9tbmlzIHVsbGFtIHF1aWEgcmVwZWxsYXQgZWl1cyBoYXJ1bSBzYWVwZSB2ZWxpdCBhdXQgbWF4aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgIHRlbXBvcmEgaXBzdW0uXHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCBpbml0aWFsID0ge1xyXG4gICAgdmFsdWU6IFwiXCJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHV4ID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJyZWR1eFwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBsaW5rZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBsaW5rZXIgfSA9IHJlZHV4LmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHV4LnJlZHVjZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbGlua2VyIH0gZnJvbSAnLi4vcmVkdXgvcmVkdXgnO1xyXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9Db21wb25lbnRzL2NhcmRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmNvbnN0IEJsb2dQYWdlVmlldyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IFtibG9ncywgc2V0QmxvZ3NdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0QmxvZ0RhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYmxvZ3MnKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHNldEJsb2dzKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcm91c2VsQXJyID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiBcIi9kYW5pZWwta29ycGFpLThHREN6V3JjRTNNLXVuc3BsYXNoLmpwZ1wiLFxyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgQ3VwaWRpdGF0ZSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgaXVzdG8gbnVtcXVhbSB2b2x1cHRhdHVtIGFtZXRcclxuICAgICAgICAgICAgbGFib3Jpb3NhbSB1bmRlIG1heGltZS4gU3VzY2lwaXQgZG9sb3JlIG5lc2NpdW50IHJlaWNpZW5kaXMsXHJcbiAgICAgICAgICAgIHZvbHVwdGF0ZXMgb3B0aW8gdmVuaWFtLlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltZzogXCIvdGhpc2lzZW5naW5lZXJpbmctcmFlbmctc2JWdTV6aXRadDAtdW5zcGxhc2guanBnXCIsXHJcbiAgICAgICAgICAgIGhlYWRpbmc6IFwiSGVhZGluZ1wiLFxyXG4gICAgICAgICAgICB0ZXh0OiBgXHJcbiAgICAgICAgICAgIExvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICBDdXBpZGl0YXRlIGRpZ25pc3NpbW9zIHZlcml0YXRpcyBpdXN0byBudW1xdWFtIHZvbHVwdGF0dW0gYW1ldFxyXG4gICAgICAgICAgICBsYWJvcmlvc2FtIHVuZGUgbWF4aW1lLiBTdXNjaXBpdCBkb2xvcmUgbmVzY2l1bnQgcmVpY2llbmRpcyxcclxuICAgICAgICAgICAgdm9sdXB0YXRlcyBvcHRpbyB2ZW5pYW0uXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1nOiBcIi9nZW9yZ2llLWNvYmJzLW11T0hickZHRVFZLXVuc3BsYXNoLmpwZ1wiLFxyXG4gICAgICAgICAgICBoZWFkaW5nOiBcIkhlYWRpbmdcIixcclxuICAgICAgICAgICAgdGV4dDogYFxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgQ3VwaWRpdGF0ZSBkaWduaXNzaW1vcyB2ZXJpdGF0aXMgaXVzdG8gbnVtcXVhbSB2b2x1cHRhdHVtIGFtZXRcclxuICAgICAgICAgICAgbGFib3Jpb3NhbSB1bmRlIG1heGltZS4gU3VzY2lwaXQgZG9sb3JlIG5lc2NpdW50IHJlaWNpZW5kaXMsXHJcbiAgICAgICAgICAgIHZvbHVwdGF0ZXMgb3B0aW8gdmVuaWFtLlxyXG4gICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0QmxvZ0RhdGEoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMFwiPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIGluZmluaXRlTG9vcCBhdXRvUGxheT17dHJ1ZX0gaW50ZXJ2YWw9ezQwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9IHNob3dTdGF0dXM9e2ZhbHNlfSBzd2lwZVNjcm9sbFRvbGVyYW5jZT17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblRpbWU9ezQwMH0gZW11bGF0ZVRvdWNoPXt0cnVlfSBzaG93QXJyb3dzPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Nhcm91c2VsQXJyLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgdy1mdWxsIHRleHQtbGVmdCAke3N0eWxlcy5ncmFiYmluZ31gfSBzdHlsZT17eyBoZWlnaHQ6IFwiNzJ2aFwiLCB6SW5kZXg6IFwiLTFcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9JydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzYwMDAwMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PScxMDAwMDAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGEuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9J2ludHJpbnNpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eT0nNTAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcm91c2VsIGNhcmQgJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgcmlnaHQtMCB6LTMwIGZsZXgganVzdGlmeS1jZW50ZXIgbXgtYXV0byBteS0yNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0zMCB3LWF1dG8gaC1hdXRvIHAtNSBteC0xMCBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1tZCBtZDp3LTcvMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yIHRleHQtM3hsIGZvbnQtbWVkaXVtXCI+e2RhdGEuaGVhZGluZ308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBteS04IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgICB7YmxvZ3MubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtkYXRhLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGNhcmQgJHtpbmRleH1gfSBoZWFkaW5nPXtkYXRhLmhlYWRpbmd9IHR4dD17ZGF0YS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChsaW5rZXIoZGF0YS5saW5rKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9ibG9nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlVmlldztcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL0hvbWUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9Ib21lLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL0hvbWUubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSG9tZV9ncmFiYmluZ19fMmFDdGgge1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5Ib21lX2dyYWJiaW5nX18yYUN0aDphY3RpdmUge1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbiAgY3Vyc29yOiBncmFiYmluZztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQkFBWTtFQUFaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdyYWJiaW5nIHtcXG4gIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmdyYWJiaW5nOmFjdGl2ZSB7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJncmFiYmluZ1wiOiBcIkhvbWVfZ3JhYmJpbmdfXzJhQ3RoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==