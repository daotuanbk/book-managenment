module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/admin-layout/Header/Header.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/admin-layout/Header/Header.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css__ = __webpack_require__("antd/lib/button/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__ = __webpack_require__("antd/lib/dropdown/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__ = __webpack_require__("antd/lib/dropdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_avatar_style_css__ = __webpack_require__("antd/lib/avatar/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_avatar_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_avatar_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar__ = __webpack_require__("antd/lib/avatar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_menu_style_css__ = __webpack_require__("antd/lib/menu/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_menu_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_menu_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_menu__ = __webpack_require__("antd/lib/menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Header_css__ = __webpack_require__("./components/admin-layout/Header/Header.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_next_link__);










var _jsxFileName = "/Users/Kael/Desktop/project-1/components/admin-layout/Header/Header.tsx";




var Header = function Header(props) {
  var menu = __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a, {
    className: "user-menu",
    selectedKeys: [],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "user",
    className: "user-menu-item-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), " Profile"))), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "setting",
    className: "user-menu-item-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), " Settings"))), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "close-circle",
    className: "user-menu-item-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), " Report"))), props.roles.indexOf('Administrator') !== -1 ? __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "laptop",
    className: "user-menu-item-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), " Admin"))) : __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "/lent-history/".concat(props._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "book",
    className: "user-menu-item-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), " Lent History"))), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    onClick: props.logOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "logout",
    className: "user-menu-item-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), " Log Out")));
  return __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("img", {
    src: "/static/images/logo.png",
    width: "64px",
    style: {
      marginLeft: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  })), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("div", {
    className: "header-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, props._id ? __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default.a, {
    overlay: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("span", {
    className: "avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar___default.a, {
    className: "avatar-image",
    style: {
      backgroundColor: '#87d068'
    },
    icon: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("span", {
    className: "avatar-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, props.userEmail))) : __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "\u0110\u0103ng nh\u1EADp"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/book-managenment/Container.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/book-managenment/Container.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container_css__ = __webpack_require__("./components/book-managenment/Container.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Container_css__);
var _jsxFileName = "/Users/Kael/Desktop/project-1/components/book-managenment/Container.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Container =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, this.props.children);
    }
  }]);

  return Container;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "./configs/default.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultConfig = {
  app: {
    defaultPageSize: 10,
    maxPageSize: 50,
    pageSizeOptions: [10, 20, 50]
  },
  auth: {
    expiresIn: 60 * 60,
    secret: 'Ba2THViaoHd8Nn7tNNoRfWxrbi4u1oDefkQtdk01FzqY11Pr8dlM7fkkQnZJWKP',
    googleOauth: {},
    facebookOauth: {}
  },
  database: {
    mongoConnectionString: 'mongodb://admin:bigbang123@ds227045.mlab.com:27045/project1',
    mongoConnectionToken: 'mongoConnectionToken'
  },
  nextjs: {
    apiUrl: 'http://localhost:3000/api',
    hostUrl: 'http://localhost:3000/',
    cookieDomain: 'localhost',
    corsOrigin: /.*\.localhost:3000$/
  }
};
/* harmony default export */ __webpack_exports__["a"] = (defaultConfig);

/***/ }),

/***/ "./configs/development.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
  swagger: {
    title: 'Project I (Development)'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ "./configs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_config__ = __webpack_require__("./configs/default.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_users_config__ = __webpack_require__("./configs/modules/users.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__development_config__ = __webpack_require__("./configs/development.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__production_config__ = __webpack_require__("./configs/production.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);





var environmentConfig =  false ? productionConfig : __WEBPACK_IMPORTED_MODULE_2__development_config__["a" /* default */];

var config = __WEBPACK_IMPORTED_MODULE_4_lodash__["merge"]({}, __WEBPACK_IMPORTED_MODULE_0__default_config__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__modules_users_config__["a" /* default */], environmentConfig);

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ "./configs/modules/users.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var usersModuleConfig = {
  usersModuleConfig: {
    usernameRegex: /^[a-zA-Z0-9]{6,30}$/,
    passwordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  }
};
/* harmony default export */ __webpack_exports__["a"] = (usersModuleConfig);

/***/ }),

/***/ "./configs/production.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
  swagger: {
    title: 'Project I(Production)'
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = (config);

/***/ }),

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination_style_css__ = __webpack_require__("antd/lib/pagination/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_pagination_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination__ = __webpack_require__("antd/lib/pagination");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_row_style_css__ = __webpack_require__("antd/lib/row/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_row_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_row_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_row__ = __webpack_require__("antd/lib/row");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_col_style_css__ = __webpack_require__("antd/lib/col/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_col_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_col_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_col__ = __webpack_require__("antd/lib/col");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_tag_style_css__ = __webpack_require__("antd/lib/tag/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_tag_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_tag_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_tag__ = __webpack_require__("antd/lib/tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_button_style_css__ = __webpack_require__("antd/lib/button/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_card_style_css__ = __webpack_require__("antd/lib/card/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_card_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_antd_lib_card_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_lib_card__ = __webpack_require__("antd/lib/card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_antd_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_book_managenment_Container__ = __webpack_require__("./components/book-managenment/Container.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rematch_withRematch__ = __webpack_require__("./rematch/withRematch.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rematch_store__ = __webpack_require__("./rematch/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_layout_Header_Header__ = __webpack_require__("./components/admin-layout/Header/Header.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_js_cookie__ = __webpack_require__("js-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__configs__ = __webpack_require__("./configs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_next_router__);













var _jsxFileName = "/Users/Kael/Desktop/project-1/pages/index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Meta = __WEBPACK_IMPORTED_MODULE_12_antd_lib_card___default.a.Meta;

var LandingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LandingPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "logOut", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.profileReducer.logOut(); // Clear Cookie


        __WEBPACK_IMPORTED_MODULE_18_js_cookie__["remove"]('token', {
          domain: __WEBPACK_IMPORTED_MODULE_19__configs__["a" /* default */].nextjs.cookieDomain
        }); // Redirect

        __WEBPACK_IMPORTED_MODULE_20_next_router___default.a.push('/login');
      }
    }), _temp));
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var renderBooks = this.props.bookPageState.data.map(function (value, index) {
        return __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_antd_lib_col___default.a, {
          span: 6,
          key: index,
          style: {
            padding: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_antd_lib_card___default.a, {
          hoverable: true,
          style: {
            width: '100%'
          },
          cover: __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("div", {
            style: {
              background: "url(".concat(value.coverUrl, ")"),
              backgroundSize: 'cover',
              width: '100%',
              height: '300px',
              backgroundPosition: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }),
          actions: [__WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("a", {
            href: "/book/".concat(value._id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_antd_lib_button___default.a, {
            icon: "folder-add",
            type: "danger",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, "Thu\xEA ngay")))],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](Meta, {
          title: value.title,
          description: __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, value.description.length > 70 ? value.description.slice(0, 70) : value.description, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          })), __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, "C\xF2n ", __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          }, value.quantity), " s\u1EA3n ph\u1EA9m", __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          })), __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }, "\u0110\u01A1n gi\xE1: ", __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }, value.borrowPrice), " \u0111"), __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }), __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            }
          }), value.status === 'active' ? __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_antd_lib_tag___default.a, {
            color: "green",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, "C\xF2n h\xE0ng") : __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_antd_lib_tag___default.a, {
            color: "red",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, "H\u1EBFt h\xE0ng")),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }))));
      });
      return __WEBPACK_IMPORTED_MODULE_13_react__["createElement"]("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_17__components_admin_layout_Header_Header__["a" /* default */], {
        userEmail: this.props.profileState.email,
        logOut: this.logOut,
        _id: this.props.profileState._id,
        roles: this.props.profileState.roles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__components_book_managenment_Container__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, renderBooks), __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd_lib_row___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_13_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd_lib_pagination___default.a, {
        pageSize: 12,
        total: this.props.bookPageState.data.total,
        onChange: function onChange(page, pageSize) {
          return _this2.props.bookPageReducer.fetchDataEffect({
            search: '',
            pageNumber: page,
            pageSize: pageSize,
            sortBy: _this2.props.bookPageState.sortBy,
            asc: _this2.props.bookPageState.asc
          });
        },
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (props.req) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return props.store.dispatch.booksPageModel.fetchActiveDataEffect({
                  search: '',
                  pageNumber: 1,
                  pageSize: 12,
                  sortBy: 'title',
                  asc: true
                });

              case 3:
                _context.next = 6;
                break;

              case 5:
                props.store.dispatch.booksPageModel.fetchDataSuccess({
                  result: props.query.booksData
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return LandingPage;
}(__WEBPACK_IMPORTED_MODULE_13_react__["Component"]);

var mapState = function mapState(rootState) {
  return {
    profileState: rootState.profileModel,
    bookPageState: rootState.booksPageModel
  };
};

var mapDispatch = function mapDispatch(rootReducer) {
  return {
    profileReducer: rootReducer.profileModel,
    bookPageReducer: rootReducer.booksPageModel
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_15__rematch_withRematch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_16__rematch_store__["a" /* initStore */], mapState, mapDispatch)(LandingPage));

/***/ }),

/***/ "./rematch/models/profile/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rematch_core__ = __webpack_require__("@rematch/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rematch_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rematch_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__("jwt-decode");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var profileModel = Object(__WEBPACK_IMPORTED_MODULE_0__rematch_core__["createModel"])({
  state: {
    _id: '',
    email: '',
    profileImgUrl: '',
    fullName: '',
    dob: undefined,
    phoneNumber: '',
    i18n: '',
    permissions: [],
    roles: [],
    token: '',
    isLoggedIn: false,
    currentLanguage: 'vi'
  },
  reducers: {
    'loginPageModel/loginSuccess': function loginPageModelLoginSuccess(state, payload) {
      var tokenData = __WEBPACK_IMPORTED_MODULE_1_jwt_decode__(payload.token);
      return _objectSpread({}, state, tokenData, {
        token: payload.token,
        isLoggedIn: true
      });
    },
    logOut: function logOut(state) {
      return _objectSpread({}, state, {
        _id: '',
        email: '',
        profileImgUrl: '',
        fullName: '',
        dob: undefined,
        phoneNumber: '',
        i18n: '',
        permissions: [],
        roles: [],
        token: '',
        isLoggedIn: false
      });
    },
    onChangeLanguage: function onChangeLanguage(state) {
      if (state.currentLanguage === 'vi') {
        return _objectSpread({}, state, {
          currentLanguage: 'en'
        });
      } else if (state.currentLanguage === 'en') {
        return _objectSpread({}, state, {
          currentLanguage: 'vi'
        });
      }
    }
  },
  effects: {}
});
/* harmony default export */ __webpack_exports__["a"] = (profileModel);

/***/ }),

/***/ "./rematch/models/ui/books-page/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css__ = __webpack_require__("antd/lib/message/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core__ = __webpack_require__("@rematch/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rematch_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_proxies__ = __webpack_require__("./service-proxies/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configs_default_config__ = __webpack_require__("./configs/default.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var booksPageModel = Object(__WEBPACK_IMPORTED_MODULE_3__rematch_core__["createModel"])({
  state: {
    data: [],
    isBusy: false,
    errorMessage: '',
    searchInput: '',
    pageNumber: 1,
    pageSize: 10,
    sortBy: 'title',
    asc: true,
    total: 0,
    fileList: [],
    modalVisible: false,
    indexPageSize: 12,
    dateOfAppointment: __WEBPACK_IMPORTED_MODULE_6_moment___default()(new Date(), 'DD/MM/YYYY')
  },
  reducers: {
    starting: function starting(state) {
      return _objectSpread({}, state, {
        isBusy: true
      });
    },
    errorHappen: function errorHappen(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    onChangeSearchValue: function onChangeSearchValue(state, payload) {
      return _objectSpread({}, state, {
        searchInput: payload.searchValue
      });
    },
    fetchDataSuccess: function fetchDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      });
    },
    onChangeFileList: function onChangeFileList(state, payload) {
      return _objectSpread({}, state, {
        fileList: [payload.file]
      });
    },
    createNewBookSuccess: function createNewBookSuccess(state) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: ''
      });
    },
    updateBookSuccess: function updateBookSuccess(state, payload) {
      return _objectSpread({}, state, {
        data: state.data.map(function (value, _index) {
          if (value._id === payload.result._id) {
            return payload.result;
          } else {
            return value;
          }
        }),
        isBusy: false,
        errorMessage: ''
      });
    },
    getBookByIdSuccess: function getBookByIdSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: '',
        data: [payload.data]
      });
    },
    onOpenModal: function onOpenModal(state) {
      return _objectSpread({}, state, {
        modalVisible: true
      });
    },
    onCancelModal: function onCancelModal(state) {
      return _objectSpread({}, state, {
        modalVisible: false
      });
    },
    onConfirmModalSuccess: function onConfirmModalSuccess(state) {
      __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.success('Mượn sách thành công');

      return _objectSpread({}, state, {
        modalVisible: false,
        data: state.data.map(function (value, index) {
          if (index === 0) {
            return _objectSpread({}, value, {
              quantity: value.quantity - 1
            });
          }
        })
      });
    },
    handlePaginationChange: function handlePaginationChange(state, payload) {
      return _objectSpread({}, state, {
        pageNumber: payload.current,
        pageSize: payload.pageSize
      });
    },
    handleDatePickerChange: function handleDatePickerChange(state, payload) {
      return _objectSpread({}, state, {
        dateOfAppointment: payload.date
      });
    }
  },
  effects: {
    fetchDataEffect: function () {
      var _fetchDataEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(payload, _rootState) {
        var bookService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                bookService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["b" /* getBooksService */])();
                _context.next = 5;
                return bookService.findBook(payload.search, payload.pageNumber, payload.pageSize, payload.sortBy, payload.asc);

              case 5:
                result = _context.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function fetchDataEffect(_x, _x2) {
        return _fetchDataEffect.apply(this, arguments);
      };
    }(),
    fetchActiveDataEffect: function () {
      var _fetchActiveDataEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(payload, _rootState) {
        var bookService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                bookService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["b" /* getBooksService */])();
                _context2.next = 5;
                return bookService.findActiveBook(payload.search, payload.pageNumber, payload.pageSize, payload.sortBy, payload.asc);

              case 5:
                result = _context2.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      return function fetchActiveDataEffect(_x3, _x4) {
        return _fetchActiveDataEffect.apply(this, arguments);
      };
    }(),
    searchChangeEffect: function () {
      var _searchChangeEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(payload, rootState) {
        var bookService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                bookService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["b" /* getBooksService */])();
                _context3.next = 5;
                return bookService.findBook(payload.searchValue, rootState.booksPageModel.pageNumber, rootState.booksPageModel.pageSize, rootState.booksPageModel.sortBy, rootState.booksPageModel.asc);

              case 5:
                result = _context3.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context3.t0.message, 3);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      return function searchChangeEffect(_x5, _x6) {
        return _searchChangeEffect.apply(this, arguments);
      };
    }(),
    createNewBookEffect: function () {
      var _createNewBookEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(payload, rootState) {
        var bookService, newBook, formData;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.starting();
                bookService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["b" /* getBooksService */])();
                _context4.next = 5;
                return bookService.create(_objectSpread({}, payload, {
                  coverUrl: 'none'
                }));

              case 5:
                newBook = _context4.sent;
                formData = new FormData();
                rootState.booksPageModel.fileList.forEach(function (file) {
                  formData.set('image', file);
                });
                _context4.next = 10;
                return fetch("".concat(__WEBPACK_IMPORTED_MODULE_5__configs_default_config__["a" /* default */].nextjs.apiUrl, "/images/upload/book/").concat(newBook._id), {
                  method: 'POST',
                  headers: {
                    'authorization': rootState.profileModel.token
                  },
                  body: formData
                });

              case 10:
                _context4.next = 12;
                return bookService.update({
                  _id: newBook._id,
                  coverUrl: rootState.booksPageModel.fileList.length === 0 ? 'none' : "/static/images/book/image-".concat(newBook._id, ".").concat(rootState.booksPageModel.fileList[0].type.slice(6, 10))
                });

              case 12:
                this.createNewBookSuccess();

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.success('Create New Book Successful', 3);

                _context4.next = 19;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context4.t0.message, 3);

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16]]);
      }));

      return function createNewBookEffect(_x7, _x8) {
        return _createNewBookEffect.apply(this, arguments);
      };
    }(),
    updateBookEffect: function () {
      var _updateBookEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(payload, _rootState) {
        var bookService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.starting();
                bookService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["b" /* getBooksService */])();
                _context5.next = 5;
                return bookService.update(payload);

              case 5:
                result = _context5.sent;
                this.updateBookSuccess({
                  result: result
                });

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.success('Update Book Successful', 3);

                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context5.t0.message, 3);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));

      return function updateBookEffect(_x9, _x10) {
        return _updateBookEffect.apply(this, arguments);
      };
    }(),
    getBookByIdEffect: function () {
      var _getBookByIdEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(payload, _rootState) {
        var bookService, data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.starting();
                bookService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["b" /* getBooksService */])();
                _context6.next = 5;
                return bookService.findBookById(payload._id);

              case 5:
                data = _context6.sent;
                this.getBookByIdSuccess({
                  data: data
                });
                _context6.next = 12;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context6.t0.message, 3);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));

      return function getBookByIdEffect(_x11, _x12) {
        return _getBookByIdEffect.apply(this, arguments);
      };
    }(),
    onConfirmModal: function () {
      var _onConfirmModal = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(payload, _rootState) {
        var borrowPrice, lentService, data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                this.starting();

                if (!(__WEBPACK_IMPORTED_MODULE_6_moment___default()(payload.dateOfAppointment).toString() === __WEBPACK_IMPORTED_MODULE_6_moment___default()(payload.dateBorrow).toString())) {
                  _context7.next = 6;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error('Vui lòng chọn ngày hợp lệ');

                _context7.next = 16;
                break;

              case 6:
                borrowPrice = payload.borrowPrice * payload.dateOfAppointment.diff(payload.dateBorrow, 'days');

                if (!(borrowPrice && (borrowPrice < 0 || __WEBPACK_IMPORTED_MODULE_6_moment___default()(Date.now()).format('YYYY MM DD') === __WEBPACK_IMPORTED_MODULE_6_moment___default()(payload.dateOfAppointment).format('YYYY MM DD')))) {
                  _context7.next = 11;
                  break;
                }

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error('Vui lòng chọn ngày hợp lệ');

                _context7.next = 16;
                break;

              case 11:
                lentService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["c" /* getLentService */])();
                _context7.next = 14;
                return lentService.create({
                  bookId: String(payload.bookId),
                  userId: String(payload.userId),
                  dateBorrow: payload.dateBorrow,
                  dateOfAppointment: payload.dateOfAppointment,
                  borrowPrice: borrowPrice,
                  status: payload.status
                });

              case 14:
                data = _context7.sent;
                this.onConfirmModalSuccess({
                  data: data
                });

              case 16:
                _context7.next = 21;
                break;

              case 18:
                _context7.prev = 18;
                _context7.t0 = _context7["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error('Vui lòng chọn ngày hợp lệ');

              case 21:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 18]]);
      }));

      return function onConfirmModal(_x13, _x14) {
        return _onConfirmModal.apply(this, arguments);
      };
    }()
  }
});
/* harmony default export */ __webpack_exports__["a"] = (booksPageModel);

/***/ }),

/***/ "./rematch/models/ui/lent-page/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message_style_css__ = __webpack_require__("antd/lib/message/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_message_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_message_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core__ = __webpack_require__("@rematch/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rematch_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_proxies__ = __webpack_require__("./service-proxies/index.ts");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var lentPageModel = Object(__WEBPACK_IMPORTED_MODULE_3__rematch_core__["createModel"])({
  state: {
    data: [],
    isBusy: false,
    errorMessage: '',
    searchInput: '',
    pageNumber: 1,
    pageSize: 10,
    sortBy: 'dateBorrow',
    asc: true,
    total: 0
  },
  reducers: {
    starting: function starting(state) {
      return _objectSpread({}, state, {
        isBusy: true
      });
    },
    errorHappen: function errorHappen(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    fetchDataSuccess: function fetchDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      });
    },
    updateBookSuccess: function updateBookSuccess(state) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: ''
      });
    },
    getBookByIdSuccess: function getBookByIdSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: '',
        data: [payload.data]
      });
    },
    handlePaginationChange: function handlePaginationChange(state, payload) {
      return _objectSpread({}, state, {
        pageNumber: payload.current,
        pageSize: payload.pageSize
      });
    },
    updateLentSuccess: function updateLentSuccess(state, payload) {
      return _objectSpread({}, state, {
        data: state.data.map(function (value, _index) {
          if (value._id === payload.result._id) {
            return payload.result;
          } else {
            return value;
          }
        }),
        isBusy: false,
        errorMessage: ''
      });
    }
  },
  effects: {
    fetchDataEffect: function () {
      var _fetchDataEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee(payload, _rootState) {
        var LentService, result;
        return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                LentService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["c" /* getLentService */])();
                _context.next = 5;
                return LentService.findLent(payload.search, payload.pageNumber, payload.pageSize, payload.sortBy, payload.asc);

              case 5:
                result = _context.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function fetchDataEffect(_x, _x2) {
        return _fetchDataEffect.apply(this, arguments);
      };
    }(),
    updateLentEffect: function () {
      var _updateLentEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee2(payload, _rootState) {
        var LentService, result;
        return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                LentService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["c" /* getLentService */])();
                _context2.next = 5;
                return LentService.update(payload);

              case 5:
                result = _context2.sent;
                this.updateLentSuccess({
                  result: result
                });

                __WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default.a.success('Update Lent Successful', 3);

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);

                __WEBPACK_IMPORTED_MODULE_1_antd_lib_message___default.a.error(_context2.t0.message, 3);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      return function updateLentEffect(_x3, _x4) {
        return _updateLentEffect.apply(this, arguments);
      };
    }(),
    getLentByUserIdEffect: function () {
      var _getLentByUserIdEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.mark(function _callee3(payload, _rootState) {
        var LentService, result;
        return __WEBPACK_IMPORTED_MODULE_2__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                LentService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["c" /* getLentService */])();
                _context3.next = 5;
                return LentService.findLentByUserId(payload.userId, payload.pageNumber, payload.pageSize, payload.sortBy, payload.asc);

              case 5:
                result = _context3.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      return function getLentByUserIdEffect(_x5, _x6) {
        return _getLentByUserIdEffect.apply(this, arguments);
      };
    }()
  }
});
/* harmony default export */ __webpack_exports__["a"] = (lentPageModel);

/***/ }),

/***/ "./rematch/models/ui/login-page/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rematch_core__ = __webpack_require__("@rematch/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rematch_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rematch_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs__ = __webpack_require__("qs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_proxies__ = __webpack_require__("./service-proxies/index.ts");


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var loginPageModel = Object(__WEBPACK_IMPORTED_MODULE_1__rematch_core__["createModel"])({
  state: {
    email: '',
    password: '',
    remember: false,
    isBusy: false,
    errorMessage: ''
  },
  reducers: {
    loginInfoChange: function loginInfoChange(state, payload) {
      return _objectSpread({}, state, payload);
    },
    starting: function starting(state) {
      return _objectSpread({}, state, {
        isBusy: true
      });
    },
    errorHappen: function errorHappen(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    loginSuccess: function loginSuccess(state, _payload) {
      return _objectSpread({}, state);
    }
  },
  effects: {
    login: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(payload, _rootState) {
        var authService, result, callbackUrl;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                authService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["a" /* getAuthService */])();
                _context.next = 5;
                return authService.loginLocal(payload);

              case 5:
                result = _context.sent;
                this.loginSuccess({
                  token: result.token
                });
                callbackUrl = __WEBPACK_IMPORTED_MODULE_3_qs__["parse"](window.location.search, {
                  ignoreQueryPrefix: true
                }).callbackUrl;

                if (callbackUrl) {
                  __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push(callbackUrl);
                } else {
                  __WEBPACK_IMPORTED_MODULE_2_next_router___default.a.push('/');
                }

                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);
                this.errorHappen({
                  errorMessage: _context.t0.message
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      return function login(_x, _x2) {
        return _login.apply(this, arguments);
      };
    }()
  }
});
/* harmony default export */ __webpack_exports__["a"] = (loginPageModel);

/***/ }),

/***/ "./rematch/models/ui/roles-page/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css__ = __webpack_require__("antd/lib/message/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core__ = __webpack_require__("@rematch/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rematch_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_proxies__ = __webpack_require__("./service-proxies/index.ts");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var rolesPageModel = Object(__WEBPACK_IMPORTED_MODULE_3__rematch_core__["createModel"])({
  state: {
    addRoleModalVisible: false,
    isBusy: false,
    data: [],
    total: 0,
    search: "",
    permissions: [],
    pageSize: 10,
    pageNumber: 1,
    sortBy: "name",
    asc: true,
    currentRole: {},
    errorMessage: ""
  },
  reducers: {
    openAddRoleModal: function openAddRoleModal(state, payload) {
      return _objectSpread({}, state, {
        addRoleModalVisible: true,
        currentRole: payload.currentRole
      });
    },
    closeAddRoleModal: function closeAddRoleModal(state) {
      return _objectSpread({}, state, {
        addRoleModalVisible: false,
        currentRole: {},
        errorMessage: ''
      });
    },
    roleInfoChange: function roleInfoChange(state, payload) {
      return _objectSpread({}, state, {
        currentRole: _objectSpread({}, state.currentRole, payload)
      });
    },
    searchChangeReducer: function searchChangeReducer(state, payload) {
      return _objectSpread({}, state, {
        search: payload.searchValue
      });
    },
    filterChangeReducer: function filterChangeReducer(state, payload) {
      return _objectSpread({}, state, {
        permissions: payload.permissions
      });
    },
    fetchDataReducer: function fetchDataReducer(state, payload) {
      return _objectSpread({}, state, payload);
    },
    errorHappen: function errorHappen(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    starting: function starting(state) {
      return _objectSpread({}, state, {
        isBusy: true
      });
    },
    fetchDataSuccess: function fetchDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      });
    },
    createNewRoleSuccess: function createNewRoleSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        addRoleModalVisible: false,
        total: state.total + 1,
        data: [payload.roleInfo].concat(_toConsumableArray(state.data)),
        currentRole: {},
        errorMessage: ""
      });
    },
    updateRoleSuccess: function updateRoleSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        addRoleModalVisible: false,
        data: state.data.map(function (item) {
          if (item._id === state.currentRole._id) {
            return _objectSpread({}, state.currentRole, payload.roleInfo);
          } else {
            return item;
          }
        })
      });
    },
    activateRoleSuccess: function activateRoleSuccess(state, payload) {
      var activatedRole = state.data.filter(function (item) {
        return item._id === payload.roleId;
      })[0];
      activatedRole.isActive = true;
      return _objectSpread({}, state, {
        isBusy: false,
        data: state.data.map(function (item) {
          if (item._id === payload.roleId) {
            return activatedRole;
          } else {
            return item;
          }
        })
      });
    },
    deactivateRoleSuccess: function deactivateRoleSuccess(state, payload) {
      var deactivatedRole = state.data.filter(function (item) {
        return item._id === payload.roleId;
      })[0];
      deactivatedRole.isActive = false;
      return _objectSpread({}, state, {
        isBusy: false,
        data: state.data.map(function (item) {
          if (item._id === payload.roleId) {
            return deactivatedRole;
          } else {
            return item;
          }
        })
      });
    }
  },
  effects: {
    fetchDataEffect: function () {
      var _fetchDataEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(payload, _rootState) {
        var rolesService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context.next = 5;
                return rolesService.findRoles(payload.search, payload.permissions, undefined, payload.pageNumber, payload.pageSize, payload.sortBy, payload.asc);

              case 5:
                result = _context.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.errorHappen(_context.t0.message);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context.t0.message, 3);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function fetchDataEffect(_x, _x2) {
        return _fetchDataEffect.apply(this, arguments);
      };
    }(),
    searchChangeEffect: function () {
      var _searchChangeEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(payload, rootState) {
        var rolesService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context2.next = 5;
                return rolesService.findRoles(payload.searchValue, rootState.rolesPageModel.permissions, undefined, rootState.rolesPageModel.pageNumber, rootState.rolesPageModel.pageSize, rootState.rolesPageModel.sortBy, rootState.rolesPageModel.asc);

              case 5:
                result = _context2.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                this.errorHappen(_context2.t0.message);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context2.t0.message, 3);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      return function searchChangeEffect(_x3, _x4) {
        return _searchChangeEffect.apply(this, arguments);
      };
    }(),
    filterChangeEffect: function () {
      var _filterChangeEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(payload, rootState) {
        var rolesService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context3.next = 5;
                return rolesService.findRoles(rootState.rolesPageModel.search, payload.permissions, undefined, rootState.rolesPageModel.pageNumber, rootState.rolesPageModel.pageSize, rootState.rolesPageModel.sortBy, rootState.rolesPageModel.asc);

              case 5:
                result = _context3.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.errorHappen(_context3.t0.message);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context3.t0.message, 3);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      return function filterChangeEffect(_x5, _x6) {
        return _filterChangeEffect.apply(this, arguments);
      };
    }(),
    createNewRole: function () {
      var _createNewRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(payload, _rootState) {
        var rolesService, newRole;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.starting();
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context4.next = 5;
                return rolesService.createRole(_objectSpread({}, payload.roleInfo, {
                  isActive: false
                }));

              case 5:
                newRole = _context4.sent;
                this.createNewRoleSuccess({
                  roleInfo: newRole
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context4.t0.message, 3);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      return function createNewRole(_x7, _x8) {
        return _createNewRole.apply(this, arguments);
      };
    }(),
    updateRole: function () {
      var _updateRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(payload, _rootState) {
        var rolesService;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.starting();
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context5.next = 5;
                return rolesService.updateRole(_objectSpread({}, payload.roleInfo));

              case 5:
                this.updateRoleSuccess({
                  roleInfo: payload.roleInfo
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context5.t0.message, 3);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      return function updateRole(_x9, _x10) {
        return _updateRole.apply(this, arguments);
      };
    }(),
    activateRole: function () {
      var _activateRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(payload, _rootState) {
        var rolesService;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.starting();
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context6.next = 5;
                return rolesService.activateRole(payload.roleId);

              case 5:
                this.activateRoleSuccess(payload);
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context6.t0.message, 3);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      return function activateRole(_x11, _x12) {
        return _activateRole.apply(this, arguments);
      };
    }(),
    deactivateRole: function () {
      var _deactivateRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(payload, _rootState) {
        var rolesService;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                this.starting();
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context7.next = 5;
                return rolesService.deactivateRole(payload.roleId);

              case 5:
                this.deactivateRoleSuccess(payload);
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context7.t0.message, 3);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      return function deactivateRole(_x13, _x14) {
        return _deactivateRole.apply(this, arguments);
      };
    }()
  }
});
/* harmony default export */ __webpack_exports__["a"] = (rolesPageModel);

/***/ }),

/***/ "./rematch/models/ui/users-page/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css__ = __webpack_require__("antd/lib/message/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_message_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message__ = __webpack_require__("antd/lib/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core__ = __webpack_require__("@rematch/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rematch_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rematch_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_proxies__ = __webpack_require__("./service-proxies/index.ts");




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var usersPageModel = Object(__WEBPACK_IMPORTED_MODULE_3__rematch_core__["createModel"])({
  state: {
    addUserModalVisible: false,
    isBusy: false,
    data: [],
    total: 0,
    search: "",
    filter: '',
    pageSize: 10,
    pageNumber: 1,
    sortBy: "email",
    asc: true,
    currentUser: {},
    errorMessage: "",
    roleList: []
  },
  reducers: {
    openAddUserModal: function openAddUserModal(state, payload) {
      return _objectSpread({}, state, {
        addUserModalVisible: true,
        currentUser: payload.currentUser
      });
    },
    closeAddUserModal: function closeAddUserModal(state) {
      return _objectSpread({}, state, {
        addUserModalVisible: false,
        currentUser: {},
        errorMessage: ''
      });
    },
    userInfoChange: function userInfoChange(state, payload) {
      return _objectSpread({}, state, {
        currentUser: _objectSpread({}, state.currentUser, payload)
      });
    },
    searchChangeReducer: function searchChangeReducer(state, payload) {
      return _objectSpread({}, state, {
        search: payload.searchValue
      });
    },
    filterChangeReducer: function filterChangeReducer(state, payload) {
      return _objectSpread({}, state, {
        filter: payload.filterValue
      });
    },
    fetchDataReducer: function fetchDataReducer(state, payload) {
      return _objectSpread({}, state, payload);
    },
    errorHappen: function errorHappen(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    starting: function starting(state) {
      return _objectSpread({}, state, {
        isBusy: true
      });
    },
    fetchDataSuccess: function fetchDataSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      });
    },
    createNewUserSuccess: function createNewUserSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        addUserModalVisible: false,
        total: state.total + 1,
        data: [payload.userInfo].concat(_toConsumableArray(state.data)),
        currentUser: {},
        errorMessage: ""
      });
    },
    updateUserSuccess: function updateUserSuccess(state, payload) {
      return _objectSpread({}, state, {
        isBusy: false,
        addUserModalVisible: false,
        data: state.data.map(function (item) {
          if (item._id === state.currentUser._id) {
            return _objectSpread({}, state.currentUser, payload.userInfo);
          } else {
            return item;
          }
        })
      });
    },
    activateUserSuccess: function activateUserSuccess(state, payload) {
      var activatedUser = state.data.filter(function (item) {
        return item._id === payload.userId;
      })[0];
      activatedUser.isActive = true;
      return _objectSpread({}, state, {
        isBusy: false,
        data: state.data.map(function (item) {
          if (item._id === payload.userId) {
            return activatedUser;
          } else {
            return item;
          }
        })
      });
    },
    deactivateuserSuccess: function deactivateuserSuccess(state, payload) {
      var deactivatedUser = state.data.filter(function (item) {
        return item._id === payload.userId;
      })[0];
      deactivatedUser.isActive = false;
      return _objectSpread({}, state, {
        isBusy: false,
        data: state.data.map(function (item) {
          if (item._id === payload.userId) {
            return deactivatedUser;
          } else {
            return item;
          }
        })
      });
    },
    fetchRoleListSuccess: function fetchRoleListSuccess(state, payload) {
      return _objectSpread({}, state, {
        roleList: payload.roleList
      });
    }
  },
  effects: {
    fetchDataEffect: function () {
      var _fetchDataEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(payload, _rootState) {
        var usersService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                usersService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["e" /* getUsersService */])();
                _context.next = 5;
                return usersService.findUsers(payload.search, payload.filter, undefined, undefined, payload.pageNumber, payload.pageSize, payload.sortBy, payload.asc);

              case 5:
                result = _context.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.errorHappen(_context.t0.message);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context.t0.message, 3);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function fetchDataEffect(_x, _x2) {
        return _fetchDataEffect.apply(this, arguments);
      };
    }(),
    searchChangeEffect: function () {
      var _searchChangeEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(payload, rootState) {
        var usersService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                usersService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["e" /* getUsersService */])();
                _context2.next = 5;
                return usersService.findUsers(payload.searchValue, rootState.usersPageModel.filter, undefined, undefined, rootState.usersPageModel.pageNumber, rootState.usersPageModel.pageSize, rootState.usersPageModel.sortBy, rootState.usersPageModel.asc);

              case 5:
                result = _context2.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                this.errorHappen(_context2.t0.message);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context2.t0.message, 3);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));

      return function searchChangeEffect(_x3, _x4) {
        return _searchChangeEffect.apply(this, arguments);
      };
    }(),
    filterChangeEffect: function () {
      var _filterChangeEffect = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(payload, rootState) {
        var usersService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                usersService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["e" /* getUsersService */])();
                _context3.next = 5;
                return usersService.findUsers(rootState.usersPageModel.search, payload.filterValue, undefined, undefined, rootState.usersPageModel.pageNumber, rootState.usersPageModel.pageSize, rootState.usersPageModel.sortBy, rootState.usersPageModel.asc);

              case 5:
                result = _context3.sent;
                this.fetchDataSuccess({
                  result: result
                });
                _context3.next = 13;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.errorHappen(_context3.t0.message);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context3.t0.message, 3);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));

      return function filterChangeEffect(_x5, _x6) {
        return _filterChangeEffect.apply(this, arguments);
      };
    }(),
    createNewUser: function () {
      var _createNewUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(payload, _rootState) {
        var usersService, newuser;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.starting();
                usersService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["e" /* getUsersService */])();
                _context4.next = 5;
                return usersService.createUser(_objectSpread({}, payload.userInfo, {
                  isActive: false
                }));

              case 5:
                newuser = _context4.sent;
                this.createNewUserSuccess({
                  userInfo: newuser
                });
                _context4.next = 12;
                break;

              case 9:
                _context4.prev = 9;
                _context4.t0 = _context4["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context4.t0.message, 3);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 9]]);
      }));

      return function createNewUser(_x7, _x8) {
        return _createNewUser.apply(this, arguments);
      };
    }(),
    updateUser: function () {
      var _updateUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(payload, _rootState) {
        var usersService;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.starting();
                usersService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["e" /* getUsersService */])();
                _context5.next = 5;
                return usersService.updateUser(_objectSpread({}, payload.userInfo));

              case 5:
                this.updateUserSuccess({
                  userInfo: payload.userInfo
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context5.t0.message, 3);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      return function updateUser(_x9, _x10) {
        return _updateUser.apply(this, arguments);
      };
    }(),
    activateUser: function () {
      var _activateUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(payload, _rootState) {
        var usersService;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.starting();
                usersService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["e" /* getUsersService */])();
                _context6.next = 5;
                return usersService.activateUser(payload.userId);

              case 5:
                this.activateUserSuccess(payload);
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context6.t0.message, 3);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));

      return function activateUser(_x11, _x12) {
        return _activateUser.apply(this, arguments);
      };
    }(),
    deactivateUser: function () {
      var _deactivateUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(payload, _rootState) {
        var usersService;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                this.starting();
                usersService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["e" /* getUsersService */])();
                _context7.next = 5;
                return usersService.deactivateUser(payload.userId);

              case 5:
                this.deactivateUserSuccess(payload);
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);

                __WEBPACK_IMPORTED_MODULE_2_antd_lib_message___default.a.error(_context7.t0.message, 3);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 8]]);
      }));

      return function deactivateUser(_x13, _x14) {
        return _deactivateUser.apply(this, arguments);
      };
    }(),
    fetchRoleList: function () {
      var _fetchRoleList = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8() {
        var rolesService, roleList;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_4__service_proxies__["d" /* getRolesService */])();
                _context8.next = 4;
                return rolesService.getAllRoles();

              case 4:
                roleList = _context8.sent;
                this.fetchRoleListSuccess({
                  roleList: roleList.data
                });
                _context8.next = 11;
                break;

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](0);
                console.log(_context8.t0);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 8]]);
      }));

      return function fetchRoleList() {
        return _fetchRoleList.apply(this, arguments);
      };
    }()
  }
});
/* harmony default export */ __webpack_exports__["a"] = (usersPageModel);

/***/ }),

/***/ "./rematch/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rematch_core__ = __webpack_require__("@rematch/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rematch_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__rematch_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_ui_roles_page_model__ = __webpack_require__("./rematch/models/ui/roles-page/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_ui_users_page_model__ = __webpack_require__("./rematch/models/ui/users-page/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ui_login_page_model__ = __webpack_require__("./rematch/models/ui/login-page/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_ui_books_page_model__ = __webpack_require__("./rematch/models/ui/books-page/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_profile_model__ = __webpack_require__("./rematch/models/profile/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_ui_lent_page_model__ = __webpack_require__("./rematch/models/ui/lent-page/model.ts");







var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(__WEBPACK_IMPORTED_MODULE_0__rematch_core__["init"])({
    models: {
      profileModel: __WEBPACK_IMPORTED_MODULE_5__models_profile_model__["a" /* default */],
      loginPageModel: __WEBPACK_IMPORTED_MODULE_3__models_ui_login_page_model__["a" /* default */],
      rolesPageModel: __WEBPACK_IMPORTED_MODULE_1__models_ui_roles_page_model__["a" /* default */],
      usersPageModel: __WEBPACK_IMPORTED_MODULE_2__models_ui_users_page_model__["a" /* default */],
      booksPageModel: __WEBPACK_IMPORTED_MODULE_4__models_ui_books_page_model__["a" /* default */],
      lentPageModel: __WEBPACK_IMPORTED_MODULE_6__models_ui_lent_page_model__["a" /* default */]
    },
    redux: {
      initialState: initialState
    }
  });
};
/* unused harmony default export */ var _unused_webpack_default_export = (initStore);

/***/ }),

/***/ "./rematch/withRematch.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }



var __NEXT_REMATCH_STORE__ = '__NEXT_REMATCH_STORE__'; // https://github.com/iliakan/detect-node

var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var getOrCreateStore = function getOrCreateStore(initStore, initialState) {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState);
  } // Memoize store in global variable if client


  if (!window[__NEXT_REMATCH_STORE__]) {
    window[__NEXT_REMATCH_STORE__] = initStore(initialState);
  }

  return window[__NEXT_REMATCH_STORE__];
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    // First argument is initStore, the rest are redux connect arguments and get passed
    var initStore = args[0],
        connectArgs = args.slice(1);

    var ComponentWithRematch = function ComponentWithRematch() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState; // Connect page to redux with connect arguments

      var ConnectedComponent = __WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"].apply(null, connectArgs)(Component); // Wrap with redux Provider with store
      // Create connected page with initialProps

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], {
        store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState)
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ConnectedComponent, initialProps));
    };

    ComponentWithRematch.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var isServer, store, initialProps;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isServer = checkServer();
                store = getOrCreateStore(initStore, {
                  profileModel: props.query.profile
                }); // Run page getInitialProps with store and isServer

                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(_objectSpread({}, props, {
                  isServer: isServer,
                  store: store
                }));

              case 5:
                _context.t0 = _context.sent;
                _context.next = 9;
                break;

              case 8:
                _context.t0 = {};

              case 9:
                initialProps = _context.t0;
                return _context.abrupt("return", {
                  store: store,
                  initialState: store.getState(),
                  initialProps: initialProps
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return ComponentWithRematch;
  };
});

/***/ }),

/***/ "./service-proxies/auth-service-proxy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }

var Exception =
/*#__PURE__*/
function (_Error) {
  _inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    _classCallCheck(this, Exception);

    _this = _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "isSwaggerException", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    _this.message = message;
    _this.status = status;
    _this.response = response;
    _this.headers = headers;
    _this.result = result;
    return _this;
  }

  _createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new Exception(message, status, response, headers, null);
  }
}

function processResponse(_x) {
  return _processResponse.apply(this, arguments);
}

function _processResponse() {
  _processResponse = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(response) {
    var status, _headers;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            status = response.status;
            _headers = {};

            if (response.headers && response.headers.forEach) {
              response.headers.forEach(function (v, k) {
                return _headers[k] = v;
              });
            }

            if (!(status === 200 || status === 201)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              var result = null;
              var resultData = responseText === '' ? null : JSON.parse(responseText);
              result = resultData;
              return result;
            }));

          case 7:
            if (!(status === 400)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context4.next = 17;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 17:
            return _context4.abrupt("return", Promise.resolve(null));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _processResponse.apply(this, arguments);
}

var AuthServiceProxy = function AuthServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var token = arguments.length > 1 ? arguments[1] : undefined;
  return {
    checkEmailExist: function () {
      var _checkEmailExist = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(email) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = baseUrl + '/auth/checkEmailExist/';

                if (!(email === undefined || email === null)) {
                  _context.next = 5;
                  break;
                }

                throw new Error('The parameter \'email\' must be defined and cannot be null.');

              case 5:
                url += encodeURIComponent('' + email) + '&';

              case 6:
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context.abrupt("return", fetch(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function checkEmailExist(_x2) {
        return _checkEmailExist.apply(this, arguments);
      };
    }(),
    loginLocal: function () {
      var _loginLocal = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(loginInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = baseUrl + '/auth/login/local';
                options = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  },
                  body: JSON.stringify(loginInput)
                };
                return _context2.abrupt("return", fetch(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function loginLocal(_x3) {
        return _loginLocal.apply(this, arguments);
      };
    }(),
    register: function () {
      var _register = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(registerInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = baseUrl + '/auth/register';
                options = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  },
                  body: JSON.stringify(registerInput)
                };
                return _context3.abrupt("return", fetch(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function register(_x4) {
        return _register.apply(this, arguments);
      };
    }()
  };
};

/* harmony default export */ __webpack_exports__["a"] = (AuthServiceProxy);

/***/ }),

/***/ "./service-proxies/books-service-proxy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }



var Exception =
/*#__PURE__*/
function (_Error) {
  _inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    _classCallCheck(this, Exception);

    _this = _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "isSwaggerException", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    _this.message = message;
    _this.status = status;
    _this.response = response;
    _this.headers = headers;
    _this.result = result;
    return _this;
  }

  _createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new Exception(message, status, response, headers, null);
  }
}

function processResponse(_x) {
  return _processResponse.apply(this, arguments);
}

function _processResponse() {
  _processResponse = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(response) {
    var status, _headers;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            status = response.status;
            _headers = {};

            if (response.headers && response.headers.forEach) {
              response.headers.forEach(function (v, k) {
                return _headers[k] = v;
              });
            }

            if (!(status === 200 || status === 201)) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              var result = null;
              var resultData = responseText === '' ? null : JSON.parse(responseText);
              result = resultData;
              return result;
            }));

          case 7:
            if (!(status === 400)) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context7.next = 15;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context7.next = 17;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 17:
            return _context7.abrupt("return", Promise.resolve(null));

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _processResponse.apply(this, arguments);
}

var BooksServiceProxy = function BooksServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return {
    findBookById: function () {
      var _findBookById = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(bookId) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = baseUrl + '/book/find-by-id/';

                if (bookId !== undefined) {
                  url += encodeURIComponent('' + bookId);
                }

                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function findBookById(_x2) {
        return _findBookById.apply(this, arguments);
      };
    }(),
    findBook: function () {
      var _findBook = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(searchInput, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = baseUrl + '/book/find?';

                if (searchInput !== undefined) {
                  url += 'searchInput=' + encodeURIComponent('' + searchInput) + '&';
                }

                if (pageNumber !== undefined) {
                  url += 'pageNumber=' + encodeURIComponent('' + pageNumber) + '&';
                }

                if (pageSize !== undefined) {
                  url += 'pageSize=' + encodeURIComponent('' + pageSize) + '&';
                }

                if (!(sortBy === undefined || sortBy === null)) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('The parameter \'sortBy\' must be defined and cannot be null.');

              case 8:
                url += 'sortBy=' + encodeURIComponent('' + sortBy) + '&';

              case 9:
                if (!(asc === undefined || asc === null)) {
                  _context2.next = 13;
                  break;
                }

                throw new Error('The parameter \'asc\' must be defined and cannot be null.');

              case 13:
                url += 'asc=' + encodeURIComponent('' + asc) + '&';

              case 14:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context2.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function findBook(_x3, _x4, _x5, _x6, _x7) {
        return _findBook.apply(this, arguments);
      };
    }(),
    findActiveBook: function () {
      var _findActiveBook = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(searchInput, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = baseUrl + '/book/find-active-book?';

                if (searchInput !== undefined) {
                  url += 'searchInput=' + encodeURIComponent('' + searchInput) + '&';
                }

                if (pageNumber !== undefined) {
                  url += 'pageNumber=' + encodeURIComponent('' + pageNumber) + '&';
                }

                if (pageSize !== undefined) {
                  url += 'pageSize=' + encodeURIComponent('' + pageSize) + '&';
                }

                if (!(sortBy === undefined || sortBy === null)) {
                  _context3.next = 8;
                  break;
                }

                throw new Error('The parameter \'sortBy\' must be defined and cannot be null.');

              case 8:
                url += 'sortBy=' + encodeURIComponent('' + sortBy) + '&';

              case 9:
                if (!(asc === undefined || asc === null)) {
                  _context3.next = 13;
                  break;
                }

                throw new Error('The parameter \'asc\' must be defined and cannot be null.');

              case 13:
                url += 'asc=' + encodeURIComponent('' + asc) + '&';

              case 14:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function findActiveBook(_x8, _x9, _x10, _x11, _x12) {
        return _findActiveBook.apply(this, arguments);
      };
    }(),
    create: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(createBookInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = baseUrl + '/book/create';
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(createBookInput)
                };
                return _context4.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function create(_x13) {
        return _create.apply(this, arguments);
      };
    }(),
    update: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(updateBlogInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = baseUrl + '/book/update';
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(updateBlogInput)
                };
                return _context5.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function update(_x14) {
        return _update.apply(this, arguments);
      };
    }(),
    delete: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(_id) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = baseUrl + '/book/delete';
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'DELETE',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context6.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function _delete(_x15) {
        return _delete2.apply(this, arguments);
      };
    }()
  };
};

/* harmony default export */ __webpack_exports__["a"] = (BooksServiceProxy);

/***/ }),

/***/ "./service-proxies/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getUsersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRolesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAuthService; });
/* unused harmony export getUploadImagesService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBooksService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs__ = __webpack_require__("./configs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service_proxy__ = __webpack_require__("./service-proxies/users-service-proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roles_service_proxy__ = __webpack_require__("./service-proxies/roles-service-proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service_proxy__ = __webpack_require__("./service-proxies/auth-service-proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_images_service_proxy__ = __webpack_require__("./service-proxies/upload-images-service-proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__books_service_proxy__ = __webpack_require__("./service-proxies/books-service-proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lent_service_proxy__ = __webpack_require__("./service-proxies/lent-service-proxy.ts");








var getUsersService = function getUsersService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object(__WEBPACK_IMPORTED_MODULE_1__users_service_proxy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs__["a" /* default */].nextjs.apiUrl, token);
};

var getRolesService = function getRolesService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object(__WEBPACK_IMPORTED_MODULE_2__roles_service_proxy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs__["a" /* default */].nextjs.apiUrl, token);
};

var getAuthService = function getAuthService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object(__WEBPACK_IMPORTED_MODULE_3__auth_service_proxy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs__["a" /* default */].nextjs.apiUrl, token);
};

var getUploadImagesService = function getUploadImagesService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object(__WEBPACK_IMPORTED_MODULE_4__upload_images_service_proxy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs__["a" /* default */].nextjs.apiUrl, token);
};

var getBooksService = function getBooksService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object(__WEBPACK_IMPORTED_MODULE_5__books_service_proxy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs__["a" /* default */].nextjs.apiUrl, token);
};

var getLentService = function getLentService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object(__WEBPACK_IMPORTED_MODULE_6__lent_service_proxy__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__configs__["a" /* default */].nextjs.apiUrl, token);
};



/***/ }),

/***/ "./service-proxies/lent-service-proxy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }



var Exception =
/*#__PURE__*/
function (_Error) {
  _inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    _classCallCheck(this, Exception);

    _this = _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "isSwaggerException", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    _this.message = message;
    _this.status = status;
    _this.response = response;
    _this.headers = headers;
    _this.result = result;
    return _this;
  }

  _createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new Exception(message, status, response, headers, null);
  }
}

function processResponse(_x) {
  return _processResponse.apply(this, arguments);
}

function _processResponse() {
  _processResponse = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(response) {
    var status, _headers;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            status = response.status;
            _headers = {};

            if (response.headers && response.headers.forEach) {
              response.headers.forEach(function (v, k) {
                return _headers[k] = v;
              });
            }

            if (!(status === 200 || status === 201)) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", response.text().then(function (responseText) {
              var result = null;
              var resultData = responseText === '' ? null : JSON.parse(responseText);
              result = resultData;
              return result;
            }));

          case 7:
            if (!(status === 400)) {
              _context6.next = 11;
              break;
            }

            return _context6.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context6.next = 15;
              break;
            }

            return _context6.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context6.next = 17;
              break;
            }

            return _context6.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 17:
            return _context6.abrupt("return", Promise.resolve(null));

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _processResponse.apply(this, arguments);
}

var LentServiceProxy = function LentServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return {
    findLentByUserId: function () {
      var _findLentByUserId = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(userId, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = baseUrl + '/lent/find-by-user-id?';

                if (userId !== undefined) {
                  url += 'userId=' + encodeURIComponent('' + userId) + '&';
                }

                if (pageNumber !== undefined) {
                  url += 'pageNumber=' + encodeURIComponent('' + pageNumber) + '&';
                }

                if (pageSize !== undefined) {
                  url += 'pageSize=' + encodeURIComponent('' + pageSize) + '&';
                }

                if (!(sortBy === undefined || sortBy === null)) {
                  _context.next = 8;
                  break;
                }

                throw new Error('The parameter \'sortBy\' must be defined and cannot be null.');

              case 8:
                url += 'sortBy=' + encodeURIComponent('' + sortBy) + '&';

              case 9:
                if (!(asc === undefined || asc === null)) {
                  _context.next = 13;
                  break;
                }

                throw new Error('The parameter \'asc\' must be defined and cannot be null.');

              case 13:
                url += 'asc=' + encodeURIComponent('' + asc) + '&';

              case 14:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function findLentByUserId(_x2, _x3, _x4, _x5, _x6) {
        return _findLentByUserId.apply(this, arguments);
      };
    }(),
    findLent: function () {
      var _findLent = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(searchInput, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = baseUrl + '/lent/find?';

                if (searchInput !== undefined) {
                  url += 'searchInput=' + encodeURIComponent('' + searchInput) + '&';
                }

                if (pageNumber !== undefined) {
                  url += 'pageNumber=' + encodeURIComponent('' + pageNumber) + '&';
                }

                if (pageSize !== undefined) {
                  url += 'pageSize=' + encodeURIComponent('' + pageSize) + '&';
                }

                if (!(sortBy === undefined || sortBy === null)) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('The parameter \'sortBy\' must be defined and cannot be null.');

              case 8:
                url += 'sortBy=' + encodeURIComponent('' + sortBy) + '&';

              case 9:
                if (!(asc === undefined || asc === null)) {
                  _context2.next = 13;
                  break;
                }

                throw new Error('The parameter \'asc\' must be defined and cannot be null.');

              case 13:
                url += 'asc=' + encodeURIComponent('' + asc) + '&';

              case 14:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context2.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function findLent(_x7, _x8, _x9, _x10, _x11) {
        return _findLent.apply(this, arguments);
      };
    }(),
    create: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(createBookInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = baseUrl + '/lent/create';
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(createBookInput)
                };
                return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function create(_x12) {
        return _create.apply(this, arguments);
      };
    }(),
    update: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(updateLentInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = baseUrl + '/lent/update';
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(updateLentInput)
                };
                return _context4.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function update(_x13) {
        return _update.apply(this, arguments);
      };
    }(),
    delete: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(_id) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = baseUrl + '/lent/delete';
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'DELETE',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context5.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function _delete(_x14) {
        return _delete2.apply(this, arguments);
      };
    }()
  };
};

/* harmony default export */ __webpack_exports__["a"] = (LentServiceProxy);

/***/ }),

/***/ "./service-proxies/roles-service-proxy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }



var Exception =
/*#__PURE__*/
function (_Error) {
  _inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    _classCallCheck(this, Exception);

    _this = _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "isSwaggerException", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    _this.message = message;
    _this.status = status;
    _this.response = response;
    _this.headers = headers;
    _this.result = result;
    return _this;
  }

  _createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new Exception(message, status, response, headers, null);
  }
}

function processResponse(_x) {
  return _processResponse.apply(this, arguments);
}

function _processResponse() {
  _processResponse = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(response) {
    var status, _headers;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            status = response.status;
            _headers = {};

            if (response.headers && response.headers.forEach) {
              response.headers.forEach(function (v, k) {
                return _headers[k] = v;
              });
            }

            if (!(status === 200 || status === 201)) {
              _context7.next = 7;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              var result = null;
              var resultData = responseText === '' ? null : JSON.parse(responseText);
              result = resultData;
              return result;
            }));

          case 7:
            if (!(status === 400)) {
              _context7.next = 11;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context7.next = 15;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context7.next = 17;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 17:
            return _context7.abrupt("return", Promise.resolve(null));

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _processResponse.apply(this, arguments);
}

var RolesServiceProxy = function RolesServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var token = arguments.length > 1 ? arguments[1] : undefined;
  return {
    findRoles: function () {
      var _findRoles = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(search, permissions, isActive, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = baseUrl + '/roles/findRoles?';

                if (search !== undefined) {
                  url += 'search=' + encodeURIComponent('' + search) + '&';
                }

                if (permissions !== undefined) {
                  permissions.forEach(function (item) {
                    url += "permissions=" + encodeURIComponent("" + item) + "&";
                  });
                }

                if (isActive !== undefined) {
                  url += 'isActive=' + encodeURIComponent('' + isActive) + '&';
                }

                if (pageNumber !== undefined) {
                  url += 'pageNumber=' + encodeURIComponent('' + pageNumber) + '&';
                }

                if (pageSize !== undefined) {
                  url += 'pageSize=' + encodeURIComponent('' + pageSize) + '&';
                }

                if (!(sortBy === undefined || sortBy === null)) {
                  _context.next = 10;
                  break;
                }

                throw new Error('The parameter \'sortBy\' must be defined and cannot be null.');

              case 10:
                url += 'sortBy=' + encodeURIComponent('' + sortBy) + '&';

              case 11:
                if (!(asc === undefined || asc === null)) {
                  _context.next = 15;
                  break;
                }

                throw new Error('The parameter \'asc\' must be defined and cannot be null.');

              case 15:
                url += 'asc=' + encodeURIComponent('' + asc) + '&';

              case 16:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function findRoles(_x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _findRoles.apply(this, arguments);
      };
    }(),
    createRole: function () {
      var _createRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(createRoleInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = baseUrl + '/roles/createRole';
                options = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  },
                  body: JSON.stringify(createRoleInput)
                };
                return _context2.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function createRole(_x9) {
        return _createRole.apply(this, arguments);
      };
    }(),
    updateRole: function () {
      var _updateRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(updateRoleInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = baseUrl + '/roles/updateRole';
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  },
                  body: JSON.stringify(updateRoleInput)
                };
                return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function updateRole(_x10) {
        return _updateRole.apply(this, arguments);
      };
    }(),
    activateRole: function () {
      var _activateRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(roleId) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = baseUrl + '/roles/activateRole/';

                if (!(roleId === undefined || roleId === null)) {
                  _context4.next = 5;
                  break;
                }

                throw new Error('The parameter \'roleId\' must be defined and cannot be null.');

              case 5:
                url += encodeURIComponent('' + roleId) + '&';

              case 6:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context4.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function activateRole(_x11) {
        return _activateRole.apply(this, arguments);
      };
    }(),
    deactivateRole: function () {
      var _deactivateRole = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(roleId) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = baseUrl + '/roles/deactivateRole/';

                if (!(roleId === undefined || roleId === null)) {
                  _context5.next = 5;
                  break;
                }

                throw new Error('The parameter \'roleId\' must be defined and cannot be null.');

              case 5:
                url += encodeURIComponent('' + roleId) + '&';

              case 6:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context5.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function deactivateRole(_x12) {
        return _deactivateRole.apply(this, arguments);
      };
    }(),
    getAllRoles: function () {
      var _getAllRoles = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6() {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = baseUrl + '/roles/getAllRoles';
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context6.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getAllRoles() {
        return _getAllRoles.apply(this, arguments);
      };
    }()
  };
};

/* harmony default export */ __webpack_exports__["a"] = (RolesServiceProxy);

/***/ }),

/***/ "./service-proxies/upload-images-service-proxy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }

var Exception =
/*#__PURE__*/
function (_Error) {
  _inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    _classCallCheck(this, Exception);

    _this = _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "isSwaggerException", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    _this.message = message;
    _this.status = status;
    _this.response = response;
    _this.headers = headers;
    _this.result = result;
    return _this;
  }

  _createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new Exception(message, status, response, headers, null);
  }
}

function processResponse(_x) {
  return _processResponse.apply(this, arguments);
}

function _processResponse() {
  _processResponse = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(response) {
    var status, _headers;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            status = response.status;
            _headers = {};

            if (response.headers && response.headers.forEach) {
              response.headers.forEach(function (v, k) {
                return _headers[k] = v;
              });
            }

            if (!(status === 200 || status === 201)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              var result = null;
              var resultData = responseText === '' ? null : JSON.parse(responseText);
              result = resultData;
              return result;
            }));

          case 7:
            if (!(status === 400)) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context4.next = 17;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 17:
            return _context4.abrupt("return", Promise.resolve(null));

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _processResponse.apply(this, arguments);
}

var UploadImagesServiceProxy = function UploadImagesServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return {
    get: function () {
      var _get = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(title) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = baseUrl + '/images/get/';

                if (title !== undefined) {
                  url += encodeURIComponent('' + title);
                }

                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context.abrupt("return", fetch(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function get(_x2) {
        return _get.apply(this, arguments);
      };
    }(),
    upload: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(title, file, id) {
        var formData, url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                formData = new FormData();
                formData.set('image', file);
                url = baseUrl + '/images/upload/';

                if (title !== undefined) {
                  url += encodeURIComponent('' + title) + '/';
                }

                if (id !== undefined) {
                  url += encodeURIComponent('' + id);
                }

                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: formData
                };
                return _context2.abrupt("return", fetch(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function upload(_x3, _x4, _x5) {
        return _upload.apply(this, arguments);
      };
    }(),
    delete: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(title, id) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = baseUrl + '/images/delete/';

                if (title !== undefined) {
                  url += encodeURIComponent('' + title) + '/';
                }

                if (id !== undefined) {
                  url += encodeURIComponent('' + id);
                }

                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'DELETE',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                return _context3.abrupt("return", fetch(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _delete(_x6, _x7) {
        return _delete2.apply(this, arguments);
      };
    }()
  };
};

/* harmony default export */ __webpack_exports__["a"] = (UploadImagesServiceProxy);

/***/ }),

/***/ "./service-proxies/users-service-proxy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _gPO(o) { _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return _gPO(o); }

function _sPO(o, p) { _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return _sPO(o, p); }

function _construct(Parent, args, Class) { _construct = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); }; return _construct(Parent, args, Class); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }; return _wrapNativeSuper(Class); }



var Exception =
/*#__PURE__*/
function (_Error) {
  _inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    _classCallCheck(this, Exception);

    _this = _possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(_assertThisInitialized(_this), "isSwaggerException", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    });
    _this.message = message;
    _this.status = status;
    _this.response = response;
    _this.headers = headers;
    _this.result = result;
    return _this;
  }

  _createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(_wrapNativeSuper(Error));

function throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new Exception(message, status, response, headers, null);
  }
}

function processResponse(_x) {
  return _processResponse.apply(this, arguments);
}

function _processResponse() {
  _processResponse = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8(response) {
    var status, _headers;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            status = response.status;
            _headers = {};

            if (response.headers && response.headers.forEach) {
              response.headers.forEach(function (v, k) {
                return _headers[k] = v;
              });
            }

            if (!(status === 200 || status === 201)) {
              _context8.next = 7;
              break;
            }

            return _context8.abrupt("return", response.text().then(function (responseText) {
              var result = null;
              var resultData = responseText === '' ? null : JSON.parse(responseText);
              result = resultData;
              return result;
            }));

          case 7:
            if (!(status === 400)) {
              _context8.next = 11;
              break;
            }

            return _context8.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context8.next = 15;
              break;
            }

            return _context8.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context8.next = 17;
              break;
            }

            return _context8.abrupt("return", response.text().then(function (responseText) {
              return throwException(responseText, status, responseText, _headers);
            }));

          case 17:
            return _context8.abrupt("return", Promise.resolve(null));

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _processResponse.apply(this, arguments);
}

var UsersServiceProxy = function UsersServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var token = arguments.length > 1 ? arguments[1] : undefined;
  return {
    findUsers: function () {
      var _findUsers = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(search, role, isActive, emailConfirmed, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = baseUrl + '/users/findUsers?';

                if (search !== undefined) {
                  url += 'search=' + encodeURIComponent('' + search) + '&';
                }

                if (role !== undefined) {
                  url += 'role=' + encodeURIComponent('' + role) + '&';
                }

                if (isActive !== undefined) {
                  url += 'isActive=' + encodeURIComponent('' + isActive) + '&';
                }

                if (emailConfirmed !== undefined) {
                  url += 'emailConfirmed=' + encodeURIComponent('' + emailConfirmed) + '&';
                }

                if (pageNumber !== undefined) {
                  url += 'pageNumber=' + encodeURIComponent('' + pageNumber) + '&';
                }

                if (pageSize !== undefined) {
                  url += 'pageSize=' + encodeURIComponent('' + pageSize) + '&';
                }

                if (!(sortBy === undefined || sortBy === null)) {
                  _context.next = 11;
                  break;
                }

                throw new Error('The parameter \'sortBy\' must be defined and cannot be null.');

              case 11:
                url += 'sortBy=' + encodeURIComponent('' + sortBy) + '&';

              case 12:
                if (!(asc === undefined || asc === null)) {
                  _context.next = 16;
                  break;
                }

                throw new Error('The parameter \'asc\' must be defined and cannot be null.');

              case 16:
                url += 'asc=' + encodeURIComponent('' + asc) + '&';

              case 17:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function findUsers(_x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
        return _findUsers.apply(this, arguments);
      };
    }(),
    findUserById: function () {
      var _findUserById = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(userId) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = baseUrl + '/users/findUserById/';

                if (!(userId === undefined || userId === null)) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('The parameter \'userId\' must be defined and cannot be null.');

              case 5:
                url += encodeURIComponent('' + userId) + '&';

              case 6:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context2.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function findUserById(_x10) {
        return _findUserById.apply(this, arguments);
      };
    }(),
    createUser: function () {
      var _createUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(createUserInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = baseUrl + '/users/createUser';
                options = {
                  method: 'POST',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  },
                  body: JSON.stringify(createUserInput)
                };
                return _context3.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function createUser(_x11) {
        return _createUser.apply(this, arguments);
      };
    }(),
    verifyEmail: function () {
      var _verifyEmail = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(userId) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = baseUrl + '/users/verifyEmail/';

                if (!(userId === undefined || userId === null)) {
                  _context4.next = 5;
                  break;
                }

                throw new Error('The parameter \'userId\' must be defined and cannot be null.');

              case 5:
                url += encodeURIComponent('' + userId) + '&';

              case 6:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'GET',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context4.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function verifyEmail(_x12) {
        return _verifyEmail.apply(this, arguments);
      };
    }(),
    updateUser: function () {
      var _updateUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(updateUserInput) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                url = baseUrl + '/users/updateUser';
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  },
                  body: JSON.stringify(updateUserInput)
                };
                return _context5.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function updateUser(_x13) {
        return _updateUser.apply(this, arguments);
      };
    }(),
    activateUser: function () {
      var _activateUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6(userId) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                url = baseUrl + '/users/activateUser/';

                if (!(userId === undefined || userId === null)) {
                  _context6.next = 5;
                  break;
                }

                throw new Error('The parameter \'userId\' must be defined and cannot be null.');

              case 5:
                url += encodeURIComponent('' + userId) + '&';

              case 6:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context6.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function activateUser(_x14) {
        return _activateUser.apply(this, arguments);
      };
    }(),
    deactivateUser: function () {
      var _deactivateUser = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7(userId) {
        var url, options;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                url = baseUrl + '/users/deactivateUser/';

                if (!(userId === undefined || userId === null)) {
                  _context7.next = 5;
                  break;
                }

                throw new Error('The parameter \'userId\' must be defined and cannot be null.');

              case 5:
                url += encodeURIComponent('' + userId) + '&';

              case 6:
                url = url.replace(/[?&]$/, '');
                options = {
                  method: 'PUT',
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                    'authorization': token ? token : ''
                  }
                };
                return _context7.abrupt("return", __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default()(url, options).then(function (response) {
                  return processResponse(response);
                }));

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function deactivateUser(_x15) {
        return _deactivateUser.apply(this, arguments);
      };
    }()
  };
};

/* harmony default export */ __webpack_exports__["a"] = (UsersServiceProxy);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@rematch/core":
/***/ (function(module, exports) {

module.exports = require("@rematch/core");

/***/ }),

/***/ "antd/lib/avatar":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/avatar/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style/css");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),

/***/ "antd/lib/card":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/card/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/card/style/css");

/***/ }),

/***/ "antd/lib/col":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),

/***/ "antd/lib/dropdown":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/dropdown/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style/css");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),

/***/ "antd/lib/menu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style/css");

/***/ }),

/***/ "antd/lib/message":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/message/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style/css");

/***/ }),

/***/ "antd/lib/pagination":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ "antd/lib/pagination/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination/style/css");

/***/ }),

/***/ "antd/lib/row":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),

/***/ "antd/lib/tag":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "antd/lib/tag/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style/css");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "js-cookie":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "qs":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map