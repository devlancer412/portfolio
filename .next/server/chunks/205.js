"use strict";
exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 1319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Close = () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
  href: "/",
  as: process.env.BACKEND_URL,
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
    className: "page-close hover:animate-pulse hover:text-[#FA6862] transition-all text-[30px] absolute right-[30px] top-[30px] z-[100] duration-300",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTimesCircle, {})
  })
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Close);

/***/ }),

/***/ 7079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ heading_HeaderTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/heading/Title.tsx



const Title = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
    className: "text-white text-[60px] sm:text-[55px] md:text-[68px] mb-[25px] relative z-0 font-black uppercase",
    children: [props.data.first, ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "primary text-[#FA6862]",
      children: props.data.last
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "title-bg animate-pulse text-[#46587c1f] text-[9.875vw] left-[0%] tracking-[10px] leading-[0.7] absolute right-0 top-[50%] -z-[1] -translate-y-[50%]",
      children: props.data.back
    })]
  });
};

/* harmony default export */ const heading_Title = (Title);
;// CONCATENATED MODULE: ./components/heading/TitleText.tsx


const TitleText = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("p", {
    className: "text-[18px] mb-[20px]",
    children: props.data
  });
};

/* harmony default export */ const heading_TitleText = (TitleText);
;// CONCATENATED MODULE: ./components/heading/HeaderTitle.tsx






const HeaderTitle = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(heading_Title, {
      data: props.data
    }), props.data.content.map((one, index) => {
      return /*#__PURE__*/jsx_runtime_.jsx(heading_TitleText, {
        data: one
      }, index);
    })]
  });
};

/* harmony default export */ const heading_HeaderTitle = (HeaderTitle);

/***/ }),

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const HeaderWrapper = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "page-title w-full sm:w-[80%] lg:w-[80.67%]",
    style: {
      marginBottom: props.mb ? props.mb + 'px' : '0px'
    },
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderWrapper);

/***/ })

};
;