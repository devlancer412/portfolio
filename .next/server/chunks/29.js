"use strict";
exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 3029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _particleBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8351);
/* harmony import */ var _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9774);
/* harmony import */ var _resources_data_afterload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(324);
/* harmony import */ var _preloader_afterloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4246);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const getRadom = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const Layout = props => {
  const rows = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const {
    0: row,
    1: setRow
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(10);
  const {
    0: ready,
    1: setReady
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("NONE");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("NONE");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("title", {
      children: "Smart Dev"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("meta", {
      name: "description",
      content: "Web Developer"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("meta", {
      name: "og:title",
      content: "Full Stack Dev Resume"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("meta", {
      name: "twitter:card",
      content: "Web Developer"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("link", {
      rel: "icon",
      href: "/favicon.ico",
      as: process.env.BACKEND_URL + "/favicon.ico"
    })]
  });

  let screenWidth;
  var link = props.home && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .home */ .LE || props.welcome && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .welcome */ .d$ || props.about && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .about */ .jZ || props.services && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .services */ .uZ || props.resume && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .resume */ .v4 || props.works && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .works */ ._B || props.testimonials && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .testimonials */ .pb || props.contact && _resources_json_navInfo_json__WEBPACK_IMPORTED_MODULE_5__/* .contact */ .PX;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function mount() {
    localStorage.setItem("width", window.innerWidth.toString());
    screenWidth = window.innerWidth;
    setLoading("LOADING"); // window.onkeydown = (e) => {
    //   e.code === 'F12' && e.preventDefault();
    // };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "layout",
    children: [props.home && ready && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_particleBackground__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), header, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "text-[#ababab] bg-[#0c0f15] overflow-y-scroll overflow-x-hidden md:overflow-hidden h-[100vh] ",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("main", {
        className: "border-t-4 border-[#FA6862] font-medium leading-normal text-[#ababab]",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "w-full fill-height table relative",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            show: loading !== "NONE",
            enter: "transform transition duration-[500ms]",
            enterFrom: getRadom(_resources_data_afterload__WEBPACK_IMPORTED_MODULE_6__/* ["default"].enterFrom */ .Z.enterFrom),
            enterTo: "opacity-100 rotate-0 scale-100",
            leave: "transform transition duration-[800ms] duration-[500ms]",
            leaveFrom: "opacity-50 rotate-0",
            leaveTo: getRadom(_resources_data_afterload__WEBPACK_IMPORTED_MODULE_6__/* ["default"].leaveTo */ .Z.leaveTo),
            afterEnter: () => {
              ready === "NONE" && setTimeout(() => setReady("READY"), 1000);
              loading === "UNLOADING" && ready === "PREV" && router.push(link[0]);
              loading === "UNLOADING" && ready === "NEXT" && router.push(link[1]);
            } // beforeLeave={() => setReady(true)}
            ,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_preloader_afterloader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
            show: ready === "READY",
            enter: "transform transition duration-[500ms] delay-[300ms]",
            enterFrom: "opacity-0 scale-[0.7]",
            enterTo: "opacity-100 rotate-0 scale-100",
            leave: "transform transition duration-[500ms]",
            leaveFrom: "opacity-100 rotate-0 scale-100 ",
            leaveTo: "opacity-0 scale-[0.8]",
            beforeEnter: () => {
              loading === "LOADING" && setLoading("NONE");
            },
            afterLeave: () => setLoading("UNLOADING"),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
              className: "table-cell align-middle relative page-about w-[100vw] h-[100vh] pb-[60px] md:pb-0 pt-[50px] md:pt-0 cursor-default",
              children: props.children
            })
          })]
        })
      })
    }), loading !== "NONE" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "w-full absolute bottom-3  z-10 flex justify-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
        className: "bg-black animate-spin text-white bg-opacity-70 p-[20px] rounded-full flex justify-between items-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaSpinner, {})
      })
    }), loading !== "LOADING" && ready === "READY" && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("div", {
      className: "px-[5vw] w-[100vw] absolute bottom-3 text-[#ababab] text-[16px] z-10",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "bg-black animate-pulse hover:animate-none bg-opacity-70 w-full h-[40px] rounded-3xl flex justify-between items-center px-[2vw]",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
          className: "prev-page hover:text-white cursor-pointer",
          onClick: () => link[0] !== null && setReady("PREV"),
          children: "\u2190 Prev Page"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("span", {
          className: "copyright",
          children: ["2018 - ", new Date().getFullYear(), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
            className: "invisible sm:visible pl-2",
            children: "Full-Stack Web Developer, Freelancing"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx("span", {
          className: "next-page hover:text-white cursor-pointer",
          onClick: () => link[1] !== null && setReady("NEXT"),
          children: "Next Page \u2192"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ particleBackground)
});

// EXTERNAL MODULE: external "react-tsparticles"
var external_react_tsparticles_ = __webpack_require__(4753);
var external_react_tsparticles_default = /*#__PURE__*/__webpack_require__.n(external_react_tsparticles_);
;// CONCATENATED MODULE: ./resources/data/particleOption.js
const particleOption_option = {
  autoPlay: true,
  fullScreen: {
    enable: true,
    zIndex: 1
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'bubble'
      }
    },
    modes: {
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.2,
        color: {
          // value: '#FA684225',
          value: '#000000'
        },
        size: 40
      },
      push: {
        default: true,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      slow: {
        factor: 3,
        radius: 200
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      }
    }
  },
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  },
  particles: {
    color: {
      value: 'FFFFFF',
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true
        }
      }
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      decay: 0,
      distance: 2000,
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      speed: 4
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000
      },
      limit: 0,
      value: 4
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.05
      },
      value: 0.5
    },
    shape: {
      options: {
        polygon: {
          sides: 6
        },
        star: {
          sides: 6
        }
      },
      type: 'polygon'
    },
    size: {
      random: {
        enable: true,
        minimumValue: 100
      },
      value: 120
    }
  },
  zLayers: 1
};
/* harmony default export */ const particleOption = (particleOption_option);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/particleBackground.tsx




const Background = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_tsparticles_default()), {
      id: "tsparticles",
      options: particleOption
    })
  });
};

/* harmony default export */ const particleBackground = (Background);

/***/ }),

/***/ 4246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ afterloader)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./images/devicon/core/next.svg
/* harmony default export */ const next = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/next.b35afc19.svg","height":256,"width":256});
;// CONCATENATED MODULE: ./images/devicon/core/tailwind.svg
/* harmony default export */ const tailwind = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/tailwind.0aeb02a9.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/core/redux.svg
/* harmony default export */ const redux = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/redux.157be986.svg","height":244,"width":256});
;// CONCATENATED MODULE: ./images/devicon/core/jquery.svg
/* harmony default export */ const jquery = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/jquery.2fa9e198.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/1.svg
/* harmony default export */ const _1 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/1.3178fde9.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/2.svg
/* harmony default export */ const _2 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/2.8b620774.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/3.svg
/* harmony default export */ const _3 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/3.e28a4a01.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/4.svg
/* harmony default export */ const _4 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/4.2a47e36e.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/5.svg
/* harmony default export */ const _5 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/5.e3547e54.svg","height":32,"width":34});
;// CONCATENATED MODULE: ./images/devicon/6.svg
/* harmony default export */ const _6 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/6.b10435ab.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/7.svg
/* harmony default export */ const _7 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/7.874821f3.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/8.svg
/* harmony default export */ const _8 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/8.c214315e.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/9.svg
/* harmony default export */ const _9 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/9.11a4e70d.svg","height":32,"width":27});
;// CONCATENATED MODULE: ./images/devicon/10.svg
/* harmony default export */ const _10 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/10.90bb9c8f.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/11.svg
/* harmony default export */ const _11 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/11.9c69485f.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/12.svg
/* harmony default export */ const _12 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/12.8f9b7ab0.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/13.svg
/* harmony default export */ const _13 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/13.bbc5e4a6.svg","height":32,"width":34});
;// CONCATENATED MODULE: ./images/devicon/14.svg
/* harmony default export */ const _14 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/14.b210f442.svg","height":32,"width":27});
;// CONCATENATED MODULE: ./images/devicon/15.svg
/* harmony default export */ const _15 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/15.c9137aaa.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/16.svg
/* harmony default export */ const _16 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/16.45389235.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/17.svg
/* harmony default export */ const _17 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/17.ed89d493.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/18.svg
/* harmony default export */ const _18 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/18.9e0d6460.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/19.svg
/* harmony default export */ const _19 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/19.a937b9fa.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/20.svg
/* harmony default export */ const _20 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/20.37b28a8a.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/21.svg
/* harmony default export */ const _21 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/21.169669da.svg","height":32,"width":34});
;// CONCATENATED MODULE: ./images/devicon/22.svg
/* harmony default export */ const _22 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/22.54945c9e.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/23.svg
/* harmony default export */ const _23 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/23.dc2ebd6d.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/24.svg
/* harmony default export */ const _24 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/24.59180a68.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/25.svg
/* harmony default export */ const _25 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/25.c45cac5a.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/26.svg
/* harmony default export */ const _26 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/26.73473b31.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/27.svg
/* harmony default export */ const _27 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/27.831a652b.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/28.svg
/* harmony default export */ const _28 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/28.524920f2.svg","height":32,"width":27});
;// CONCATENATED MODULE: ./images/devicon/29.svg
/* harmony default export */ const _29 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/29.29a90508.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./images/devicon/30.svg
/* harmony default export */ const _30 = ({"src":"https://anotherplanet-io.github.io/Next-React-Components//_next/static/media/30.bfa682bc.svg","height":32,"width":34});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./helpers/loderItem.tsx


const LoaderItem = [/*#__PURE__*/jsx_runtime_.jsx(fa_.FaLaravel, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaBootstrap, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaAmazon, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaAppleAlt, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaCss3Alt, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaDocker, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaDrupal, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGit, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGitAlt, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGithub, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGitlab, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaHtml5, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaJava, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaJs, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaPhp, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaPython, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaRedhat, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaSass, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaSwift, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaSymfony, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaUbuntu, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaWordpress, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaYarn, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaAtom, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaBehance, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaBitbucket, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaConfluence, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaEmber, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaErlang, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGitkraken, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaLess, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaMeteor, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaSketch, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaSlack, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaSourcetree, {}), /*#__PURE__*/jsx_runtime_.jsx(fa_.FaYarn, {})]; //import core svg images




 //import other images
































const otherImages = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30];

const getItem = index => {
  let shuffled = LoaderItem.map(a => ({
    sort: Math.random(),
    value: a
  })).sort((a, b) => a.sort - b.sort).map(a => a.value);
  return shuffled[index];
}; // const cwidth = ((80 * window.innerWidth) / 1600).toFixed(0);
// console.log(cwidth);


const getCoreItem = width => {
  var cwidth = (80 * width / 1600).toFixed(0);
  return /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
    src: next,
    width: parseInt(cwidth),
    height: parseInt(cwidth)
  });
}; // const getCoreItem = () => <NextSvg width={100} height={100} fill={'red'} />;


const getAroundItem = (type, width) => {
  var cwidth = (90 * width / 1600).toFixed(0);
  var reduxWidth = (70 * width / 1600).toFixed(0);

  switch (type) {
    case 'REACT':
      return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaReact, {});

    case 'TAILWIND':
      return /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: tailwind,
        width: parseInt(cwidth),
        height: parseInt(cwidth)
      });

    case 'REDUX':
      return /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        src: redux,
        width: parseInt(reduxWidth),
        height: parseInt(reduxWidth)
      });

    case 'JQUERY':
      return /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
        priority: true,
        src: jquery,
        width: parseInt(cwidth),
        height: parseInt(cwidth)
      });

    case 'NODEJS':
      return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaNodeJs, {});

    case 'ANGULAR':
      return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaAngular, {});

    case 'VUE':
      return /*#__PURE__*/jsx_runtime_.jsx(fa_.FaVuejs, {});
  }
};

const getOddItem = index => {
  // console.log(otherImages);
  let shuffled = otherImages.map(a => ({
    sort: Math.random(),
    value: a
  })).sort((a, b) => a.sort - b.sort).map(a => a.value);
  return /*#__PURE__*/_jsx(Image, {
    src: shuffled[index],
    width: 80,
    height: 80
  });
};


;// CONCATENATED MODULE: ./components/preloader/Item.tsx



const Item = props => {
  const tempWidth = localStorage.getItem('width');
  const width = tempWidth ? parseInt(tempWidth) : 1600;

  if (props.type === 'NORMAL') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "history-hex opacity-[0.1] text-[4.375vw] h-[5.39375vw] w-[9.375vw] relative bg-[#293342] my-[2.70625vw] before:bottom-[100%] before:border-b-[2.70625vw] before:border-b-[#293342] before:border-w-0 after:top-[100%] after:border-t-[2.70625vw] after:border-t-[#293342] after:border-w-0 after:w-0 flex justify-center items-center before:border-x-[4.6875vw] after:border-x-[4.6875vw]",
      children: getItem(props.index)
    });
  }

  if (props.type === 'CENTER') {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "history-hex opacity-80 text-[4.375vw] h-[5.39375vw] w-[9.375vw] relative bg-[#293342] my-[2.70625vw] before:bottom-[100%] before:border-b-[2.70625vw] before:border-b-[#293342] before:border-w-0 after:top-[100%] after:border-t-[2.70625vw] after:border-t-[#293342] after:border-w-0 after:w-0 flex justify-center items-center before:border-x-[4.6875vw] after:border-x-[4.6875vw]",
      children: getCoreItem(width)
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "history-hex opacity-30 text-red-400 text-[4.375vw] h-[5.39375vw] w-[9.375vw] relative bg-[#293342] my-[2.70625vw] before:bottom-[100%] before:border-b-[2.70625vw] before:border-b-[#293342] before:border-w-0 after:top-[100%] after:border-t-[2.70625vw] after:border-t-[#293342] after:border-w-0 after:w-0 flex justify-center items-center before:border-x-[4.6875vw] after:border-x-[4.6875vw]",
      children: getAroundItem(props.type, width)
    })
  });
};

/* harmony default export */ const preloader_Item = (Item);
// EXTERNAL MODULE: ./resources/data/afterload.js
var afterload = __webpack_require__(324);
;// CONCATENATED MODULE: ./components/preloader/afterloader.tsx



const rows = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const getRadom = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const opacityClass = index => {
  let names = ['opacity-100', 'opacity-90', 'opacity-80', 'opacity-70', 'opacity-60', 'opacity-50', 'opacity-40', 'opacity-30', 'opacity-20', 'opacity-10', 'opacity-50'];
  return names[index];
};

const FantasyLoader = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-full h-full top-0 left-0 absolute table",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full flex flex-wrap",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: getRadom(afterload/* default.colors */.Z.colors),
        children: rows.slice(0, 10).map((row, rindex) => {
          const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex gap-[1vw] -mt-[1.9vw] first:-mt-[7.5vw] even:-ml-[5.15vw]",
            children: cols.map((col, cindex) => {
              if (rindex === 2 && cindex === 4) {
                return /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  type: "REACT"
                }, cindex);
              }

              if (rindex === 2 && cindex === 5) {
                return /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  type: "TAILWIND"
                }, cindex);
              }

              if (rindex === 3 && cindex === 4) {
                return /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  type: "REDUX"
                }, cindex);
              }

              if (rindex === 3 && cindex === 5) {
                return /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  type: "CENTER"
                }, cindex);
              }

              if (rindex === 3 && cindex === 6) {
                return /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  type: "NODEJS"
                }, cindex);
              }

              if (rindex === 4 && cindex === 5) {
                return /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  type: "JQUERY"
                }, cindex);
              }

              if (rindex === 4 && cindex === 4) {
                return /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  type: "ANGULAR"
                }, cindex);
              }

              return /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: opacityClass(rindex),
                children: /*#__PURE__*/jsx_runtime_.jsx(preloader_Item, {
                  index: cindex,
                  type: "NORMAL"
                })
              }, cindex);
            })
          }, rindex);
        })
      })
    })
  });
};

/* harmony default export */ const afterloader = (FantasyLoader);

/***/ }),

/***/ 324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const colors = ['overflow-hidden -ml-[1vw] text-[#df4646cc]', 'overflow-hidden -ml-[1vw] text-[#8066d1cc]', 'overflow-hidden -ml-[1vw] text-[#d166c9cc]', 'overflow-hidden -ml-[1vw] text-[#66c7d1cc]', 'overflow-hidden -ml-[1vw] text-[#d16692cc]', 'overflow-hidden -ml-[1vw] text-[#a3d1669e]', 'overflow-hidden -ml-[1vw] text-[#d97647d1]', 'overflow-hidden -ml-[1vw] text-[#c18bcbd1]', 'overflow-hidden -ml-[1vw] text-[#ffffffc9]'];
const enterFrom = ['opacity-0 scale-100 rotate-[-10deg]', 'opacity-0 scale-100 rotate-[-20deg]', 'opacity-0 scale-100 rotate-[-40deg]', 'opacity-0 scale-100 rotate-[-60deg]', 'opacity-0 scale-100 rotate-[0deg]', 'opacity-0 scale-100 rotate-[10deg]', 'opacity-0 scale-100 rotate-[20deg]'];
const leaveTo = ['opacity-0 scale-150 rotate-[-5deg]', 'opacity-0 scale-150 rotate-[-5deg]', 'opacity-0 scale-150 rotate-[-10deg]', 'opacity-0 scale-150 rotate-[5deg]', 'opacity-0 scale-150 rotate-[10deg]', 'opacity-0 scale-150 rotate-[0deg]'];
const option = {
  colors,
  enterFrom,
  leaveTo
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (option);

/***/ }),

/***/ 9774:
/***/ ((module) => {

module.exports = JSON.parse('{"LE":[null,"welcome"],"d$":["/","about"],"jZ":["welcome","services"],"uZ":["about","resume"],"v4":["services","works"],"_B":["resume","testimonials"],"pb":["works","contact"],"PX":["testimonials","/"]}');

/***/ })

};
;