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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@rematch/core");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./configs/index.ts + 4 modules
var configs = __webpack_require__(8);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(0);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external__isomorphic_fetch_ = __webpack_require__(6);
var external__isomorphic_fetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_fetch_);

// CONCATENATED MODULE: ./service-proxies/users-service-proxy.ts


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
  regenerator__default.a.mark(function _callee8(response) {
    var status, _headers;

    return regenerator__default.a.wrap(function _callee8$(_context8) {
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

var users_service_proxy_UsersServiceProxy = function UsersServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var token = arguments.length > 1 ? arguments[1] : undefined;
  return {
    findUsers: function () {
      var _findUsers = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(search, role, isActive, emailConfirmed, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return regenerator__default.a.wrap(function _callee$(_context) {
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
                return _context.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
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
      regenerator__default.a.mark(function _callee2(userId) {
        var url, options;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
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
                return _context2.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
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
      regenerator__default.a.mark(function _callee3(createUserInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
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
                return _context3.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
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
      regenerator__default.a.mark(function _callee4(userId) {
        var url, options;
        return regenerator__default.a.wrap(function _callee4$(_context4) {
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
                return _context4.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
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
      regenerator__default.a.mark(function _callee5(updateUserInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee5$(_context5) {
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
                return _context5.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
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
      regenerator__default.a.mark(function _callee6(userId) {
        var url, options;
        return regenerator__default.a.wrap(function _callee6$(_context6) {
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
                return _context6.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
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
      regenerator__default.a.mark(function _callee7(userId) {
        var url, options;
        return regenerator__default.a.wrap(function _callee7$(_context7) {
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
                return _context7.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
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

/* harmony default export */ var users_service_proxy = (users_service_proxy_UsersServiceProxy);
// CONCATENATED MODULE: ./service-proxies/roles-service-proxy.ts


function roles_service_proxy__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function roles_service_proxy__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { roles_service_proxy__typeof = function _typeof(obj) { return typeof obj; }; } else { roles_service_proxy__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return roles_service_proxy__typeof(obj); }

function roles_service_proxy__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function roles_service_proxy__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function roles_service_proxy__createClass(Constructor, protoProps, staticProps) { if (protoProps) roles_service_proxy__defineProperties(Constructor.prototype, protoProps); if (staticProps) roles_service_proxy__defineProperties(Constructor, staticProps); return Constructor; }

function roles_service_proxy__possibleConstructorReturn(self, call) { if (call && (roles_service_proxy__typeof(call) === "object" || typeof call === "function")) { return call; } return roles_service_proxy__assertThisInitialized(self); }

function roles_service_proxy__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function roles_service_proxy__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function roles_service_proxy__gPO(o) { roles_service_proxy__gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return roles_service_proxy__gPO(o); }

function roles_service_proxy__sPO(o, p) { roles_service_proxy__sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return roles_service_proxy__sPO(o, p); }

function roles_service_proxy__construct(Parent, args, Class) { roles_service_proxy__construct = (typeof Reflect === "undefined" ? "undefined" : roles_service_proxy__typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return roles_service_proxy__sPO(new Constructor(), Class.prototype); }; return roles_service_proxy__construct(Parent, args, Class); }

function roles_service_proxy__wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; roles_service_proxy__wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return roles_service_proxy__sPO(Wrapper, roles_service_proxy__sPO(function Super() { return roles_service_proxy__construct(Class, arguments, roles_service_proxy__gPO(this).constructor); }, Class)); }; return roles_service_proxy__wrapNativeSuper(Class); }



var roles_service_proxy_Exception =
/*#__PURE__*/
function (_Error) {
  roles_service_proxy__inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    roles_service_proxy__classCallCheck(this, Exception);

    _this = roles_service_proxy__possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(roles_service_proxy__assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(roles_service_proxy__assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(roles_service_proxy__assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(roles_service_proxy__assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(roles_service_proxy__assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(roles_service_proxy__assertThisInitialized(_this), "isSwaggerException", {
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

  roles_service_proxy__createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(roles_service_proxy__wrapNativeSuper(Error));

function roles_service_proxy_throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new roles_service_proxy_Exception(message, status, response, headers, null);
  }
}

function roles_service_proxy_processResponse(_x) {
  return roles_service_proxy__processResponse.apply(this, arguments);
}

function roles_service_proxy__processResponse() {
  roles_service_proxy__processResponse = roles_service_proxy__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee7(response) {
    var status, _headers;

    return regenerator__default.a.wrap(function _callee7$(_context7) {
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
              return roles_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context7.next = 15;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return roles_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context7.next = 17;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return roles_service_proxy_throwException(responseText, status, responseText, _headers);
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
  return roles_service_proxy__processResponse.apply(this, arguments);
}

var roles_service_proxy_RolesServiceProxy = function RolesServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var token = arguments.length > 1 ? arguments[1] : undefined;
  return {
    findRoles: function () {
      var _findRoles = roles_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(search, permissions, isActive, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return regenerator__default.a.wrap(function _callee$(_context) {
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
                return _context.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return roles_service_proxy_processResponse(response);
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
      var _createRole = roles_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(createRoleInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
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
                return _context2.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return roles_service_proxy_processResponse(response);
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
      var _updateRole = roles_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(updateRoleInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
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
                return _context3.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return roles_service_proxy_processResponse(response);
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
      var _activateRole = roles_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4(roleId) {
        var url, options;
        return regenerator__default.a.wrap(function _callee4$(_context4) {
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
                return _context4.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return roles_service_proxy_processResponse(response);
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
      var _deactivateRole = roles_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee5(roleId) {
        var url, options;
        return regenerator__default.a.wrap(function _callee5$(_context5) {
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
                return _context5.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return roles_service_proxy_processResponse(response);
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
      var _getAllRoles = roles_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee6() {
        var url, options;
        return regenerator__default.a.wrap(function _callee6$(_context6) {
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
                return _context6.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return roles_service_proxy_processResponse(response);
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

/* harmony default export */ var roles_service_proxy = (roles_service_proxy_RolesServiceProxy);
// CONCATENATED MODULE: ./service-proxies/auth-service-proxy.ts


function auth_service_proxy__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function auth_service_proxy__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { auth_service_proxy__typeof = function _typeof(obj) { return typeof obj; }; } else { auth_service_proxy__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return auth_service_proxy__typeof(obj); }

function auth_service_proxy__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function auth_service_proxy__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function auth_service_proxy__createClass(Constructor, protoProps, staticProps) { if (protoProps) auth_service_proxy__defineProperties(Constructor.prototype, protoProps); if (staticProps) auth_service_proxy__defineProperties(Constructor, staticProps); return Constructor; }

function auth_service_proxy__possibleConstructorReturn(self, call) { if (call && (auth_service_proxy__typeof(call) === "object" || typeof call === "function")) { return call; } return auth_service_proxy__assertThisInitialized(self); }

function auth_service_proxy__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function auth_service_proxy__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function auth_service_proxy__gPO(o) { auth_service_proxy__gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return auth_service_proxy__gPO(o); }

function auth_service_proxy__sPO(o, p) { auth_service_proxy__sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return auth_service_proxy__sPO(o, p); }

function auth_service_proxy__construct(Parent, args, Class) { auth_service_proxy__construct = (typeof Reflect === "undefined" ? "undefined" : auth_service_proxy__typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return auth_service_proxy__sPO(new Constructor(), Class.prototype); }; return auth_service_proxy__construct(Parent, args, Class); }

function auth_service_proxy__wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; auth_service_proxy__wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return auth_service_proxy__sPO(Wrapper, auth_service_proxy__sPO(function Super() { return auth_service_proxy__construct(Class, arguments, auth_service_proxy__gPO(this).constructor); }, Class)); }; return auth_service_proxy__wrapNativeSuper(Class); }

var auth_service_proxy_Exception =
/*#__PURE__*/
function (_Error) {
  auth_service_proxy__inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    auth_service_proxy__classCallCheck(this, Exception);

    _this = auth_service_proxy__possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(auth_service_proxy__assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(auth_service_proxy__assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(auth_service_proxy__assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(auth_service_proxy__assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(auth_service_proxy__assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(auth_service_proxy__assertThisInitialized(_this), "isSwaggerException", {
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

  auth_service_proxy__createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(auth_service_proxy__wrapNativeSuper(Error));

function auth_service_proxy_throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new auth_service_proxy_Exception(message, status, response, headers, null);
  }
}

function auth_service_proxy_processResponse(_x) {
  return auth_service_proxy__processResponse.apply(this, arguments);
}

function auth_service_proxy__processResponse() {
  auth_service_proxy__processResponse = auth_service_proxy__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee4(response) {
    var status, _headers;

    return regenerator__default.a.wrap(function _callee4$(_context4) {
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
              return auth_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return auth_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context4.next = 17;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return auth_service_proxy_throwException(responseText, status, responseText, _headers);
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
  return auth_service_proxy__processResponse.apply(this, arguments);
}

var auth_service_proxy_AuthServiceProxy = function AuthServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var token = arguments.length > 1 ? arguments[1] : undefined;
  return {
    checkEmailExist: function () {
      var _checkEmailExist = auth_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(email) {
        var url, options;
        return regenerator__default.a.wrap(function _callee$(_context) {
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
                  return auth_service_proxy_processResponse(response);
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
      var _loginLocal = auth_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(loginInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
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
                  return auth_service_proxy_processResponse(response);
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
      var _register = auth_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(registerInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
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
                  return auth_service_proxy_processResponse(response);
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

/* harmony default export */ var auth_service_proxy = (auth_service_proxy_AuthServiceProxy);
// CONCATENATED MODULE: ./service-proxies/upload-images-service-proxy.ts


function upload_images_service_proxy__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function upload_images_service_proxy__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { upload_images_service_proxy__typeof = function _typeof(obj) { return typeof obj; }; } else { upload_images_service_proxy__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return upload_images_service_proxy__typeof(obj); }

function upload_images_service_proxy__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function upload_images_service_proxy__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function upload_images_service_proxy__createClass(Constructor, protoProps, staticProps) { if (protoProps) upload_images_service_proxy__defineProperties(Constructor.prototype, protoProps); if (staticProps) upload_images_service_proxy__defineProperties(Constructor, staticProps); return Constructor; }

function upload_images_service_proxy__possibleConstructorReturn(self, call) { if (call && (upload_images_service_proxy__typeof(call) === "object" || typeof call === "function")) { return call; } return upload_images_service_proxy__assertThisInitialized(self); }

function upload_images_service_proxy__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function upload_images_service_proxy__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function upload_images_service_proxy__gPO(o) { upload_images_service_proxy__gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return upload_images_service_proxy__gPO(o); }

function upload_images_service_proxy__sPO(o, p) { upload_images_service_proxy__sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return upload_images_service_proxy__sPO(o, p); }

function upload_images_service_proxy__construct(Parent, args, Class) { upload_images_service_proxy__construct = (typeof Reflect === "undefined" ? "undefined" : upload_images_service_proxy__typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return upload_images_service_proxy__sPO(new Constructor(), Class.prototype); }; return upload_images_service_proxy__construct(Parent, args, Class); }

function upload_images_service_proxy__wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; upload_images_service_proxy__wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return upload_images_service_proxy__sPO(Wrapper, upload_images_service_proxy__sPO(function Super() { return upload_images_service_proxy__construct(Class, arguments, upload_images_service_proxy__gPO(this).constructor); }, Class)); }; return upload_images_service_proxy__wrapNativeSuper(Class); }

var upload_images_service_proxy_Exception =
/*#__PURE__*/
function (_Error) {
  upload_images_service_proxy__inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    upload_images_service_proxy__classCallCheck(this, Exception);

    _this = upload_images_service_proxy__possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(upload_images_service_proxy__assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(upload_images_service_proxy__assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(upload_images_service_proxy__assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(upload_images_service_proxy__assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(upload_images_service_proxy__assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(upload_images_service_proxy__assertThisInitialized(_this), "isSwaggerException", {
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

  upload_images_service_proxy__createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(upload_images_service_proxy__wrapNativeSuper(Error));

function upload_images_service_proxy_throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new upload_images_service_proxy_Exception(message, status, response, headers, null);
  }
}

function upload_images_service_proxy_processResponse(_x) {
  return upload_images_service_proxy__processResponse.apply(this, arguments);
}

function upload_images_service_proxy__processResponse() {
  upload_images_service_proxy__processResponse = upload_images_service_proxy__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee4(response) {
    var status, _headers;

    return regenerator__default.a.wrap(function _callee4$(_context4) {
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
              return upload_images_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context4.next = 15;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return upload_images_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context4.next = 17;
              break;
            }

            return _context4.abrupt("return", response.text().then(function (responseText) {
              return upload_images_service_proxy_throwException(responseText, status, responseText, _headers);
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
  return upload_images_service_proxy__processResponse.apply(this, arguments);
}

var upload_images_service_proxy_UploadImagesServiceProxy = function UploadImagesServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return {
    get: function () {
      var _get = upload_images_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(title) {
        var url, options;
        return regenerator__default.a.wrap(function _callee$(_context) {
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
                  return upload_images_service_proxy_processResponse(response);
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
      var _upload = upload_images_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(title, file, id) {
        var formData, url, options;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
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
                  return upload_images_service_proxy_processResponse(response);
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
      var _delete2 = upload_images_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(title, id) {
        var url, options;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
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
                  return upload_images_service_proxy_processResponse(response);
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

/* harmony default export */ var upload_images_service_proxy = (upload_images_service_proxy_UploadImagesServiceProxy);
// CONCATENATED MODULE: ./service-proxies/books-service-proxy.ts


function books_service_proxy__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function books_service_proxy__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { books_service_proxy__typeof = function _typeof(obj) { return typeof obj; }; } else { books_service_proxy__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return books_service_proxy__typeof(obj); }

function books_service_proxy__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function books_service_proxy__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function books_service_proxy__createClass(Constructor, protoProps, staticProps) { if (protoProps) books_service_proxy__defineProperties(Constructor.prototype, protoProps); if (staticProps) books_service_proxy__defineProperties(Constructor, staticProps); return Constructor; }

function books_service_proxy__possibleConstructorReturn(self, call) { if (call && (books_service_proxy__typeof(call) === "object" || typeof call === "function")) { return call; } return books_service_proxy__assertThisInitialized(self); }

function books_service_proxy__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function books_service_proxy__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function books_service_proxy__gPO(o) { books_service_proxy__gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return books_service_proxy__gPO(o); }

function books_service_proxy__sPO(o, p) { books_service_proxy__sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return books_service_proxy__sPO(o, p); }

function books_service_proxy__construct(Parent, args, Class) { books_service_proxy__construct = (typeof Reflect === "undefined" ? "undefined" : books_service_proxy__typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return books_service_proxy__sPO(new Constructor(), Class.prototype); }; return books_service_proxy__construct(Parent, args, Class); }

function books_service_proxy__wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; books_service_proxy__wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return books_service_proxy__sPO(Wrapper, books_service_proxy__sPO(function Super() { return books_service_proxy__construct(Class, arguments, books_service_proxy__gPO(this).constructor); }, Class)); }; return books_service_proxy__wrapNativeSuper(Class); }



var books_service_proxy_Exception =
/*#__PURE__*/
function (_Error) {
  books_service_proxy__inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    books_service_proxy__classCallCheck(this, Exception);

    _this = books_service_proxy__possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(books_service_proxy__assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(books_service_proxy__assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(books_service_proxy__assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(books_service_proxy__assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(books_service_proxy__assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(books_service_proxy__assertThisInitialized(_this), "isSwaggerException", {
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

  books_service_proxy__createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(books_service_proxy__wrapNativeSuper(Error));

function books_service_proxy_throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new books_service_proxy_Exception(message, status, response, headers, null);
  }
}

function books_service_proxy_processResponse(_x) {
  return books_service_proxy__processResponse.apply(this, arguments);
}

function books_service_proxy__processResponse() {
  books_service_proxy__processResponse = books_service_proxy__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee7(response) {
    var status, _headers;

    return regenerator__default.a.wrap(function _callee7$(_context7) {
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
              return books_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context7.next = 15;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return books_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context7.next = 17;
              break;
            }

            return _context7.abrupt("return", response.text().then(function (responseText) {
              return books_service_proxy_throwException(responseText, status, responseText, _headers);
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
  return books_service_proxy__processResponse.apply(this, arguments);
}

var books_service_proxy_BooksServiceProxy = function BooksServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return {
    findBookById: function () {
      var _findBookById = books_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(bookId) {
        var url, options;
        return regenerator__default.a.wrap(function _callee$(_context) {
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
                return _context.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return books_service_proxy_processResponse(response);
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
      var _findBook = books_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(searchInput, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
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
                return _context2.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return books_service_proxy_processResponse(response);
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
      var _findActiveBook = books_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(searchInput, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
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
                return _context3.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return books_service_proxy_processResponse(response);
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
      var _create = books_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4(createBookInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee4$(_context4) {
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
                return _context4.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return books_service_proxy_processResponse(response);
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
      var _update = books_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee5(updateBlogInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee5$(_context5) {
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
                return _context5.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return books_service_proxy_processResponse(response);
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
      var _delete2 = books_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee6(_id) {
        var url, options;
        return regenerator__default.a.wrap(function _callee6$(_context6) {
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
                return _context6.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return books_service_proxy_processResponse(response);
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

/* harmony default export */ var books_service_proxy = (books_service_proxy_BooksServiceProxy);
// CONCATENATED MODULE: ./service-proxies/lent-service-proxy.ts


function lent_service_proxy__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function lent_service_proxy__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { lent_service_proxy__typeof = function _typeof(obj) { return typeof obj; }; } else { lent_service_proxy__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return lent_service_proxy__typeof(obj); }

function lent_service_proxy__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function lent_service_proxy__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function lent_service_proxy__createClass(Constructor, protoProps, staticProps) { if (protoProps) lent_service_proxy__defineProperties(Constructor.prototype, protoProps); if (staticProps) lent_service_proxy__defineProperties(Constructor, staticProps); return Constructor; }

function lent_service_proxy__possibleConstructorReturn(self, call) { if (call && (lent_service_proxy__typeof(call) === "object" || typeof call === "function")) { return call; } return lent_service_proxy__assertThisInitialized(self); }

function lent_service_proxy__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function lent_service_proxy__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function lent_service_proxy__gPO(o) { lent_service_proxy__gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; }; return lent_service_proxy__gPO(o); }

function lent_service_proxy__sPO(o, p) { lent_service_proxy__sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; }; return lent_service_proxy__sPO(o, p); }

function lent_service_proxy__construct(Parent, args, Class) { lent_service_proxy__construct = (typeof Reflect === "undefined" ? "undefined" : lent_service_proxy__typeof(Reflect)) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return lent_service_proxy__sPO(new Constructor(), Class.prototype); }; return lent_service_proxy__construct(Parent, args, Class); }

function lent_service_proxy__wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; lent_service_proxy__wrapNativeSuper = function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return lent_service_proxy__sPO(Wrapper, lent_service_proxy__sPO(function Super() { return lent_service_proxy__construct(Class, arguments, lent_service_proxy__gPO(this).constructor); }, Class)); }; return lent_service_proxy__wrapNativeSuper(Class); }



var lent_service_proxy_Exception =
/*#__PURE__*/
function (_Error) {
  lent_service_proxy__inherits(Exception, _Error);

  function Exception(message, status, response, headers, result) {
    var _this;

    lent_service_proxy__classCallCheck(this, Exception);

    _this = lent_service_proxy__possibleConstructorReturn(this, (Exception.__proto__ || Object.getPrototypeOf(Exception)).call(this));
    Object.defineProperty(lent_service_proxy__assertThisInitialized(_this), "message", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(lent_service_proxy__assertThisInitialized(_this), "status", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(lent_service_proxy__assertThisInitialized(_this), "response", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(lent_service_proxy__assertThisInitialized(_this), "headers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(lent_service_proxy__assertThisInitialized(_this), "result", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(lent_service_proxy__assertThisInitialized(_this), "isSwaggerException", {
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

  lent_service_proxy__createClass(Exception, null, [{
    key: "isSwaggerException",
    value: function isSwaggerException(obj) {
      return obj.isSwaggerException === true;
    }
  }]);

  return Exception;
}(lent_service_proxy__wrapNativeSuper(Error));

function lent_service_proxy_throwException(message, status, response, headers, result) {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new lent_service_proxy_Exception(message, status, response, headers, null);
  }
}

function lent_service_proxy_processResponse(_x) {
  return lent_service_proxy__processResponse.apply(this, arguments);
}

function lent_service_proxy__processResponse() {
  lent_service_proxy__processResponse = lent_service_proxy__asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee6(response) {
    var status, _headers;

    return regenerator__default.a.wrap(function _callee6$(_context6) {
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
              return lent_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 11:
            if (!(status === 404)) {
              _context6.next = 15;
              break;
            }

            return _context6.abrupt("return", response.text().then(function (responseText) {
              return lent_service_proxy_throwException(responseText, status, responseText, _headers);
            }));

          case 15:
            if (!(status !== 200 && status !== 204)) {
              _context6.next = 17;
              break;
            }

            return _context6.abrupt("return", response.text().then(function (responseText) {
              return lent_service_proxy_throwException(responseText, status, responseText, _headers);
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
  return lent_service_proxy__processResponse.apply(this, arguments);
}

var lent_service_proxy_LentServiceProxy = function LentServiceProxy() {
  var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return {
    findLentByUserId: function () {
      var _findLentByUserId = lent_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(userId, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return regenerator__default.a.wrap(function _callee$(_context) {
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
                return _context.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return lent_service_proxy_processResponse(response);
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
      var _findLent = lent_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(searchInput, pageNumber, pageSize, sortBy, asc) {
        var url, options;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
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
                return _context2.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return lent_service_proxy_processResponse(response);
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
      var _create = lent_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(createBookInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
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
                return _context3.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return lent_service_proxy_processResponse(response);
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
      var _update = lent_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4(updateLentInput) {
        var url, options;
        return regenerator__default.a.wrap(function _callee4$(_context4) {
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
                return _context4.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return lent_service_proxy_processResponse(response);
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
      var _delete2 = lent_service_proxy__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee5(_id) {
        var url, options;
        return regenerator__default.a.wrap(function _callee5$(_context5) {
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
                return _context5.abrupt("return", external__isomorphic_fetch__default()(url, options).then(function (response) {
                  return lent_service_proxy_processResponse(response);
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

/* harmony default export */ var lent_service_proxy = (lent_service_proxy_LentServiceProxy);
// CONCATENATED MODULE: ./service-proxies/index.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return service_proxies_getUsersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return service_proxies_getRolesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return service_proxies_getAuthService; });
/* unused harmony export getUploadImagesService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return service_proxies_getBooksService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return service_proxies_getLentService; });








var service_proxies_getUsersService = function getUsersService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return users_service_proxy(configs["a" /* default */].nextjs.apiUrl, token);
};

var service_proxies_getRolesService = function getRolesService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return roles_service_proxy(configs["a" /* default */].nextjs.apiUrl, token);
};

var service_proxies_getAuthService = function getAuthService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return auth_service_proxy(configs["a" /* default */].nextjs.apiUrl, token);
};

var service_proxies_getUploadImagesService = function getUploadImagesService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return upload_images_service_proxy(configs["a" /* default */].nextjs.apiUrl, token);
};

var service_proxies_getBooksService = function getBooksService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return books_service_proxy(configs["a" /* default */].nextjs.apiUrl, token);
};

var service_proxies_getLentService = function getLentService() {
  var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return lent_service_proxy(configs["a" /* default */].nextjs.apiUrl, token);
};



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style/css");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./configs/production/default.config.ts
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
    apiUrl: 'http://project1-hust.herokuapp.com/api',
    hostUrl: 'http://project1-hust.herokuapp.com/',
    cookieDomain: 'project1-hust.herokuapp.com',
    corsOrigin: /.*\.project1-hust.herokuapp.com$/
  }
};
/* harmony default export */ var default_config = (defaultConfig);
// CONCATENATED MODULE: ./configs/modules/users.config.ts
var usersModuleConfig = {
  usersModuleConfig: {
    usernameRegex: /^[a-zA-Z0-9]{6,30}$/,
    passwordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  }
};
/* harmony default export */ var users_config = (usersModuleConfig);
// CONCATENATED MODULE: ./configs/development.config.ts
var config = {
  swagger: {
    title: 'Project I (Development)'
  }
};
/* harmony default export */ var development_config = (config);
// CONCATENATED MODULE: ./configs/production.config.ts
var production_config_config = {
  swagger: {
    title: 'Project I(Production)'
  }
};
/* harmony default export */ var production_config = (production_config_config);
// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__(23);
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./configs/index.ts





var environmentConfig =  true ? production_config : developmentConfig;

var configs_config = external__lodash_["merge"]({}, default_config, users_config, environmentConfig);

/* harmony default export */ var configs = __webpack_exports__["a"] = (configs_config);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style/css");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style/css");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(21);
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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@rematch/core"
var core_ = __webpack_require__(1);
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(0);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "antd/lib/message/style/css"
var css_ = __webpack_require__(4);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(5);
var message__default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./service-proxies/index.ts + 6 modules
var service_proxies = __webpack_require__(3);

// CONCATENATED MODULE: ./rematch/models/ui/roles-page/model.ts




function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var rolesPageModel = Object(core_["createModel"])({
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
      regenerator__default.a.mark(function _callee(payload, _rootState) {
        var rolesService, result;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                rolesService = Object(service_proxies["d" /* getRolesService */])();
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

                message__default.a.error(_context.t0.message, 3);

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
      regenerator__default.a.mark(function _callee2(payload, rootState) {
        var rolesService, result;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                rolesService = Object(service_proxies["d" /* getRolesService */])();
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

                message__default.a.error(_context2.t0.message, 3);

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
      regenerator__default.a.mark(function _callee3(payload, rootState) {
        var rolesService, result;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                rolesService = Object(service_proxies["d" /* getRolesService */])();
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

                message__default.a.error(_context3.t0.message, 3);

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
      regenerator__default.a.mark(function _callee4(payload, _rootState) {
        var rolesService, newRole;
        return regenerator__default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.starting();
                rolesService = Object(service_proxies["d" /* getRolesService */])();
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

                message__default.a.error(_context4.t0.message, 3);

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
      regenerator__default.a.mark(function _callee5(payload, _rootState) {
        var rolesService;
        return regenerator__default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.starting();
                rolesService = Object(service_proxies["d" /* getRolesService */])();
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

                message__default.a.error(_context5.t0.message, 3);

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
      regenerator__default.a.mark(function _callee6(payload, _rootState) {
        var rolesService;
        return regenerator__default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.starting();
                rolesService = Object(service_proxies["d" /* getRolesService */])();
                _context6.next = 5;
                return rolesService.activateRole(payload.roleId);

              case 5:
                this.activateRoleSuccess(payload);
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);

                message__default.a.error(_context6.t0.message, 3);

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
      regenerator__default.a.mark(function _callee7(payload, _rootState) {
        var rolesService;
        return regenerator__default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                this.starting();
                rolesService = Object(service_proxies["d" /* getRolesService */])();
                _context7.next = 5;
                return rolesService.deactivateRole(payload.roleId);

              case 5:
                this.deactivateRoleSuccess(payload);
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);

                message__default.a.error(_context7.t0.message, 3);

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
/* harmony default export */ var model = (rolesPageModel);
// CONCATENATED MODULE: ./rematch/models/ui/users-page/model.ts




function model__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function model__toConsumableArray(arr) { return model__arrayWithoutHoles(arr) || model__iterableToArray(arr) || model__nonIterableSpread(); }

function model__nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function model__iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function model__arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function model__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { model__defineProperty(target, key, source[key]); }); } return target; }

function model__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var usersPageModel = Object(core_["createModel"])({
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
      return model__objectSpread({}, state, {
        addUserModalVisible: true,
        currentUser: payload.currentUser
      });
    },
    closeAddUserModal: function closeAddUserModal(state) {
      return model__objectSpread({}, state, {
        addUserModalVisible: false,
        currentUser: {},
        errorMessage: ''
      });
    },
    userInfoChange: function userInfoChange(state, payload) {
      return model__objectSpread({}, state, {
        currentUser: model__objectSpread({}, state.currentUser, payload)
      });
    },
    searchChangeReducer: function searchChangeReducer(state, payload) {
      return model__objectSpread({}, state, {
        search: payload.searchValue
      });
    },
    filterChangeReducer: function filterChangeReducer(state, payload) {
      return model__objectSpread({}, state, {
        filter: payload.filterValue
      });
    },
    fetchDataReducer: function fetchDataReducer(state, payload) {
      return model__objectSpread({}, state, payload);
    },
    errorHappen: function errorHappen(state, payload) {
      return model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    starting: function starting(state) {
      return model__objectSpread({}, state, {
        isBusy: true
      });
    },
    fetchDataSuccess: function fetchDataSuccess(state, payload) {
      return model__objectSpread({}, state, {
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      });
    },
    createNewUserSuccess: function createNewUserSuccess(state, payload) {
      return model__objectSpread({}, state, {
        isBusy: false,
        addUserModalVisible: false,
        total: state.total + 1,
        data: [payload.userInfo].concat(model__toConsumableArray(state.data)),
        currentUser: {},
        errorMessage: ""
      });
    },
    updateUserSuccess: function updateUserSuccess(state, payload) {
      return model__objectSpread({}, state, {
        isBusy: false,
        addUserModalVisible: false,
        data: state.data.map(function (item) {
          if (item._id === state.currentUser._id) {
            return model__objectSpread({}, state.currentUser, payload.userInfo);
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
      return model__objectSpread({}, state, {
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
      return model__objectSpread({}, state, {
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
      return model__objectSpread({}, state, {
        roleList: payload.roleList
      });
    }
  },
  effects: {
    fetchDataEffect: function () {
      var _fetchDataEffect = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(payload, _rootState) {
        var usersService, result;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                usersService = Object(service_proxies["e" /* getUsersService */])();
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

                message__default.a.error(_context.t0.message, 3);

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
      var _searchChangeEffect = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(payload, rootState) {
        var usersService, result;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                usersService = Object(service_proxies["e" /* getUsersService */])();
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

                message__default.a.error(_context2.t0.message, 3);

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
      var _filterChangeEffect = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(payload, rootState) {
        var usersService, result;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                usersService = Object(service_proxies["e" /* getUsersService */])();
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

                message__default.a.error(_context3.t0.message, 3);

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
      var _createNewUser = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4(payload, _rootState) {
        var usersService, newuser;
        return regenerator__default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.starting();
                usersService = Object(service_proxies["e" /* getUsersService */])();
                _context4.next = 5;
                return usersService.createUser(model__objectSpread({}, payload.userInfo, {
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

                message__default.a.error(_context4.t0.message, 3);

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
      var _updateUser = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee5(payload, _rootState) {
        var usersService;
        return regenerator__default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.starting();
                usersService = Object(service_proxies["e" /* getUsersService */])();
                _context5.next = 5;
                return usersService.updateUser(model__objectSpread({}, payload.userInfo));

              case 5:
                this.updateUserSuccess({
                  userInfo: payload.userInfo
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);

                message__default.a.error(_context5.t0.message, 3);

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
      var _activateUser = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee6(payload, _rootState) {
        var usersService;
        return regenerator__default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.starting();
                usersService = Object(service_proxies["e" /* getUsersService */])();
                _context6.next = 5;
                return usersService.activateUser(payload.userId);

              case 5:
                this.activateUserSuccess(payload);
                _context6.next = 11;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);

                message__default.a.error(_context6.t0.message, 3);

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
      var _deactivateUser = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee7(payload, _rootState) {
        var usersService;
        return regenerator__default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                this.starting();
                usersService = Object(service_proxies["e" /* getUsersService */])();
                _context7.next = 5;
                return usersService.deactivateUser(payload.userId);

              case 5:
                this.deactivateUserSuccess(payload);
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](0);

                message__default.a.error(_context7.t0.message, 3);

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
      var _fetchRoleList = model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee8() {
        var rolesService, roleList;
        return regenerator__default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                rolesService = Object(service_proxies["d" /* getRolesService */])();
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
/* harmony default export */ var users_page_model = (usersPageModel);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "qs"
var external__qs_ = __webpack_require__(24);
var external__qs__default = /*#__PURE__*/__webpack_require__.n(external__qs_);

// CONCATENATED MODULE: ./rematch/models/ui/login-page/model.ts


function login_page_model__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function login_page_model__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { login_page_model__defineProperty(target, key, source[key]); }); } return target; }

function login_page_model__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var loginPageModel = Object(core_["createModel"])({
  state: {
    email: '',
    password: '',
    remember: false,
    isBusy: false,
    errorMessage: ''
  },
  reducers: {
    loginInfoChange: function loginInfoChange(state, payload) {
      return login_page_model__objectSpread({}, state, payload);
    },
    starting: function starting(state) {
      return login_page_model__objectSpread({}, state, {
        isBusy: true
      });
    },
    errorHappen: function errorHappen(state, payload) {
      return login_page_model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    loginSuccess: function loginSuccess(state, _payload) {
      return login_page_model__objectSpread({}, state);
    }
  },
  effects: {
    login: function () {
      var _login = login_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(payload, _rootState) {
        var authService, result, callbackUrl;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                authService = Object(service_proxies["a" /* getAuthService */])();
                _context.next = 5;
                return authService.loginLocal(payload);

              case 5:
                result = _context.sent;
                this.loginSuccess({
                  token: result.token
                });
                callbackUrl = external__qs_["parse"](window.location.search, {
                  ignoreQueryPrefix: true
                }).callbackUrl;

                if (callbackUrl) {
                  router__default.a.push(callbackUrl);
                } else {
                  router__default.a.push('/');
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
/* harmony default export */ var login_page_model = (loginPageModel);
// EXTERNAL MODULE: ./configs/default.config.ts
var default_config = __webpack_require__(19);

// EXTERNAL MODULE: external "moment"
var external__moment_ = __webpack_require__(13);
var external__moment__default = /*#__PURE__*/__webpack_require__.n(external__moment_);

// CONCATENATED MODULE: ./rematch/models/ui/books-page/model.ts




function books_page_model__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function books_page_model__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { books_page_model__defineProperty(target, key, source[key]); }); } return target; }

function books_page_model__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var booksPageModel = Object(core_["createModel"])({
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
    dateOfAppointment: external__moment__default()(new Date(), 'DD/MM/YYYY')
  },
  reducers: {
    starting: function starting(state) {
      return books_page_model__objectSpread({}, state, {
        isBusy: true
      });
    },
    errorHappen: function errorHappen(state, payload) {
      return books_page_model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    onChangeSearchValue: function onChangeSearchValue(state, payload) {
      return books_page_model__objectSpread({}, state, {
        searchInput: payload.searchValue
      });
    },
    fetchDataSuccess: function fetchDataSuccess(state, payload) {
      return books_page_model__objectSpread({}, state, {
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      });
    },
    onChangeFileList: function onChangeFileList(state, payload) {
      return books_page_model__objectSpread({}, state, {
        fileList: [payload.file]
      });
    },
    createNewBookSuccess: function createNewBookSuccess(state) {
      return books_page_model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: ''
      });
    },
    updateBookSuccess: function updateBookSuccess(state, payload) {
      return books_page_model__objectSpread({}, state, {
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
      return books_page_model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: '',
        data: [payload.data]
      });
    },
    onOpenModal: function onOpenModal(state) {
      return books_page_model__objectSpread({}, state, {
        modalVisible: true
      });
    },
    onCancelModal: function onCancelModal(state) {
      return books_page_model__objectSpread({}, state, {
        modalVisible: false
      });
    },
    onConfirmModalSuccess: function onConfirmModalSuccess(state) {
      message__default.a.success('Mượn sách thành công');

      return books_page_model__objectSpread({}, state, {
        modalVisible: false,
        data: state.data.map(function (value, index) {
          if (index === 0) {
            return books_page_model__objectSpread({}, value, {
              quantity: value.quantity - 1
            });
          }
        })
      });
    },
    handlePaginationChange: function handlePaginationChange(state, payload) {
      return books_page_model__objectSpread({}, state, {
        pageNumber: payload.current,
        pageSize: payload.pageSize
      });
    },
    handleDatePickerChange: function handleDatePickerChange(state, payload) {
      return books_page_model__objectSpread({}, state, {
        dateOfAppointment: payload.date
      });
    }
  },
  effects: {
    fetchDataEffect: function () {
      var _fetchDataEffect = books_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(payload, _rootState) {
        var bookService, result;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                bookService = Object(service_proxies["b" /* getBooksService */])();
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
      var _fetchActiveDataEffect = books_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(payload, _rootState) {
        var bookService, result;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                bookService = Object(service_proxies["b" /* getBooksService */])();
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
      var _searchChangeEffect = books_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(payload, rootState) {
        var bookService, result;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                bookService = Object(service_proxies["b" /* getBooksService */])();
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

                message__default.a.error(_context3.t0.message, 3);

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
      var _createNewBookEffect = books_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee4(payload, rootState) {
        var bookService, newBook, formData;
        return regenerator__default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.starting();
                bookService = Object(service_proxies["b" /* getBooksService */])();
                _context4.next = 5;
                return bookService.create(books_page_model__objectSpread({}, payload, {
                  coverUrl: 'none'
                }));

              case 5:
                newBook = _context4.sent;
                formData = new FormData();
                rootState.booksPageModel.fileList.forEach(function (file) {
                  formData.set('image', file);
                });
                _context4.next = 10;
                return fetch("".concat(default_config["a" /* default */].nextjs.apiUrl, "/images/upload/book/").concat(newBook._id), {
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

                message__default.a.success('Create New Book Successful', 3);

                _context4.next = 19;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);

                message__default.a.error(_context4.t0.message, 3);

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
      var _updateBookEffect = books_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee5(payload, _rootState) {
        var bookService, result;
        return regenerator__default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.starting();
                bookService = Object(service_proxies["b" /* getBooksService */])();
                _context5.next = 5;
                return bookService.update(payload);

              case 5:
                result = _context5.sent;
                this.updateBookSuccess({
                  result: result
                });

                message__default.a.success('Update Book Successful', 3);

                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);

                message__default.a.error(_context5.t0.message, 3);

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
      var _getBookByIdEffect = books_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee6(payload, _rootState) {
        var bookService, data;
        return regenerator__default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.starting();
                bookService = Object(service_proxies["b" /* getBooksService */])();
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

                message__default.a.error(_context6.t0.message, 3);

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
      var _onConfirmModal = books_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee7(payload, _rootState) {
        var borrowPrice, lentService, data;
        return regenerator__default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                this.starting();

                if (!(external__moment__default()(payload.dateOfAppointment).toString() === external__moment__default()(payload.dateBorrow).toString())) {
                  _context7.next = 6;
                  break;
                }

                message__default.a.error('Vui lòng chọn ngày hợp lệ');

                _context7.next = 16;
                break;

              case 6:
                borrowPrice = payload.borrowPrice * payload.dateOfAppointment.diff(payload.dateBorrow, 'days');

                if (!(borrowPrice && (borrowPrice < 0 || external__moment__default()(Date.now()).format('YYYY MM DD') === external__moment__default()(payload.dateOfAppointment).format('YYYY MM DD')))) {
                  _context7.next = 11;
                  break;
                }

                message__default.a.error('Vui lòng chọn ngày hợp lệ');

                _context7.next = 16;
                break;

              case 11:
                lentService = Object(service_proxies["c" /* getLentService */])();
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

                message__default.a.error('Vui lòng chọn ngày hợp lệ');

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
/* harmony default export */ var books_page_model = (booksPageModel);
// EXTERNAL MODULE: external "jwt-decode"
var external__jwt_decode_ = __webpack_require__(25);
var external__jwt_decode__default = /*#__PURE__*/__webpack_require__.n(external__jwt_decode_);

// CONCATENATED MODULE: ./rematch/models/profile/model.ts
function profile_model__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { profile_model__defineProperty(target, key, source[key]); }); } return target; }

function profile_model__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var profileModel = Object(core_["createModel"])({
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
      var tokenData = external__jwt_decode_(payload.token);
      return profile_model__objectSpread({}, state, tokenData, {
        token: payload.token,
        isLoggedIn: true
      });
    },
    logOut: function logOut(state) {
      return profile_model__objectSpread({}, state, {
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
        return profile_model__objectSpread({}, state, {
          currentLanguage: 'en'
        });
      } else if (state.currentLanguage === 'en') {
        return profile_model__objectSpread({}, state, {
          currentLanguage: 'vi'
        });
      }
    }
  },
  effects: {}
});
/* harmony default export */ var profile_model = (profileModel);
// CONCATENATED MODULE: ./rematch/models/ui/lent-page/model.ts




function lent_page_model__asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function lent_page_model__objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { lent_page_model__defineProperty(target, key, source[key]); }); } return target; }

function lent_page_model__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var lentPageModel = Object(core_["createModel"])({
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
      return lent_page_model__objectSpread({}, state, {
        isBusy: true
      });
    },
    errorHappen: function errorHappen(state, payload) {
      return lent_page_model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: payload.errorMessage
      });
    },
    fetchDataSuccess: function fetchDataSuccess(state, payload) {
      return lent_page_model__objectSpread({}, state, {
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      });
    },
    updateBookSuccess: function updateBookSuccess(state) {
      return lent_page_model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: ''
      });
    },
    getBookByIdSuccess: function getBookByIdSuccess(state, payload) {
      return lent_page_model__objectSpread({}, state, {
        isBusy: false,
        errorMessage: '',
        data: [payload.data]
      });
    },
    handlePaginationChange: function handlePaginationChange(state, payload) {
      return lent_page_model__objectSpread({}, state, {
        pageNumber: payload.current,
        pageSize: payload.pageSize
      });
    },
    updateLentSuccess: function updateLentSuccess(state, payload) {
      return lent_page_model__objectSpread({}, state, {
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
      var _fetchDataEffect = lent_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(payload, _rootState) {
        var LentService, result;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.starting();
                LentService = Object(service_proxies["c" /* getLentService */])();
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
      var _updateLentEffect = lent_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee2(payload, _rootState) {
        var LentService, result;
        return regenerator__default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.starting();
                LentService = Object(service_proxies["c" /* getLentService */])();
                _context2.next = 5;
                return LentService.update(payload);

              case 5:
                result = _context2.sent;
                this.updateLentSuccess({
                  result: result
                });

                message__default.a.success('Update Lent Successful', 3);

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);

                message__default.a.error(_context2.t0.message, 3);

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
      var _getLentByUserIdEffect = lent_page_model__asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee3(payload, _rootState) {
        var LentService, result;
        return regenerator__default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.starting();
                LentService = Object(service_proxies["c" /* getLentService */])();
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
/* harmony default export */ var lent_page_model = (lentPageModel);
// CONCATENATED MODULE: ./rematch/store.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return store_initStore; });







var store_initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(core_["init"])({
    models: {
      profileModel: profile_model,
      loginPageModel: login_page_model,
      rolesPageModel: model,
      usersPageModel: users_page_model,
      booksPageModel: books_page_model,
      lentPageModel: lent_page_model
    },
    redux: {
      initialState: initialState
    }
  });
};
/* harmony default export */ var store = __webpack_exports__["a"] = (store_initStore);

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_avatar_style_css__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_avatar_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_avatar_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_menu_style_css__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_menu_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_menu_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_menu__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_icon_style_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Header_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Header_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_next_link__);














var Header = function Header(props) {
  var menu = __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a, {
    className: "user-menu",
    selectedKeys: []
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: ""
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "user",
    className: "user-menu-item-icon"
  }), " Profile"))), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: ""
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "setting",
    className: "user-menu-item-icon"
  }), " Settings"))), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: ""
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "close-circle",
    className: "user-menu-item-icon"
  }), " Report"))), props.roles.indexOf('Administrator') !== -1 ? __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "/dashboard"
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "laptop",
    className: "user-menu-item-icon"
  }), " Admin"))) : __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("div", null), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "/lent-history/".concat(props._id)
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "book",
    className: "user-menu-item-icon"
  }), " Lent History"))), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Divider, null), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_antd_lib_menu___default.a.Item, null, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    onClick: props.logOut
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon___default.a, {
    type: "logout",
    className: "user-menu-item-icon"
  }), " Log Out")));
  return __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("div", {
    className: "header"
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("a", {
    href: "/"
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("img", {
    src: "/static/images/logo.png",
    width: "64px",
    style: {
      marginLeft: '20px'
    }
  })), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("div", {
    className: "header-right"
  }, props._id ? __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default.a, {
    overlay: menu
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("span", {
    className: "avatar"
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_antd_lib_avatar___default.a, {
    className: "avatar-image",
    style: {
      backgroundColor: '#87d068'
    },
    icon: "user"
  }), __WEBPACK_IMPORTED_MODULE_10_react__["createElement"]("span", {
    className: "avatar-name"
  }, props.userEmail))) : __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_next_link___default.a, {
    href: "/login"
  }, __WEBPACK_IMPORTED_MODULE_10_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
    type: "primary"
  }, "\u0110\u0103ng nh\u1EADp"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style/css");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar/style/css");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style/css");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style/css");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/layout/style/css"
var css_ = __webpack_require__(38);
var css__default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(39);
var layout__default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(2);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "antd/lib/menu/style/css"
var style_css_ = __webpack_require__(15);
var style_css__default = /*#__PURE__*/__webpack_require__.n(style_css_);

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(16);
var menu__default = /*#__PURE__*/__webpack_require__.n(menu_);

// EXTERNAL MODULE: external "antd/lib/icon/style/css"
var icon_style_css_ = __webpack_require__(9);
var icon_style_css__default = /*#__PURE__*/__webpack_require__.n(icon_style_css_);

// EXTERNAL MODULE: external "antd/lib/icon"
var icon_ = __webpack_require__(10);
var icon__default = /*#__PURE__*/__webpack_require__.n(icon_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(14);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/admin-layout/Sidebar/Sidebar.css
var Sidebar_Sidebar = __webpack_require__(40);
var Sidebar_default = /*#__PURE__*/__webpack_require__.n(Sidebar_Sidebar);

// CONCATENATED MODULE: ./nextjs/constants/sidebar-items.constant.ts
var sidebarItems = [{
  key: 'authentication',
  title: 'Authentication',
  permissions: [],
  icon: 'user',
  items: [{
    key: '/dashboard/users',
    path: '/dashboard/users',
    title: 'Users',
    permissions: []
  }, {
    key: '/dashboard/roles',
    path: '/dashboard/roles',
    title: 'Roles',
    permissions: []
  }]
}, {
  key: 'website',
  title: 'Website',
  permissions: [],
  icon: 'book',
  items: [{
    key: '/dashboard/book/managenment',
    path: '/dashboard/book/managenment',
    title: 'Books Managenment',
    permissions: []
  }, {
    key: '/dashboard/lent/managenment',
    path: '/dashboard/lent/managenment',
    title: 'Lents Managenment',
    permissions: []
  }]
}];
/* harmony default export */ var sidebar_items_constant = (sidebarItems);
// CONCATENATED MODULE: ./components/admin-layout/Sidebar/Sidebar.tsx





function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Sidebar_Sidebar_Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "renderSubmenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(submenu) {
        return external__react_["createElement"](menu__default.a.SubMenu, {
          key: submenu.key,
          title: external__react_["createElement"]("span", null, external__react_["createElement"](icon__default.a, {
            type: submenu.icon
          }), external__react_["createElement"]("span", null, submenu.title)),
          className: "submenu"
        }, submenu.items.map(function (item) {
          return _this.renderMenuItem(item);
        }));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderMenuItem", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(menuitem) {
        return external__react_["createElement"](menu__default.a.Item, {
          key: "".concat(menuitem.key),
          className: "submenu-item"
        }, external__react_["createElement"](link__default.a, {
          href: menuitem.path
        }, external__react_["createElement"]("span", null, menuitem.title)));
      }
    }), _temp));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react_["createElement"]("div", {
        className: "sidebar-menu"
      }, external__react_["createElement"](menu__default.a, {
        key: "Menu",
        theme: "dark",
        mode: "inline",
        openKeys: sidebar_items_constant.map(function (item) {
          return item.key;
        }),
        selectedKeys: [],
        style: {
          padding: '16px 0',
          width: '100%'
        }
      }, sidebar_items_constant.map(function (submenu) {
        return _this2.renderSubmenu(submenu);
      })));
    }
  }]);

  return Sidebar;
}(external__react_["Component"]);

/* harmony default export */ var admin_layout_Sidebar_Sidebar = (Sidebar_Sidebar_Sidebar);
// EXTERNAL MODULE: ./components/admin-layout/Header/Header.tsx
var Header = __webpack_require__(26);

// EXTERNAL MODULE: ./components/admin-layout/Footer/Footer.css
var Footer_Footer = __webpack_require__(41);
var Footer_default = /*#__PURE__*/__webpack_require__.n(Footer_Footer);

// CONCATENATED MODULE: ./components/admin-layout/Footer/Footer.tsx



var Footer_Footer_Footer = function Footer(_props) {
  return external__react_["createElement"]("div", {
    className: "footer"
  }, "Project I - HUST");
};

/* harmony default export */ var admin_layout_Footer_Footer = (Footer_Footer_Footer);
// EXTERNAL MODULE: ./components/admin-layout/AdminLayout.css
var admin_layout_AdminLayout = __webpack_require__(42);
var AdminLayout_default = /*#__PURE__*/__webpack_require__.n(admin_layout_AdminLayout);

// EXTERNAL MODULE: external "js-cookie"
var external__js_cookie_ = __webpack_require__(32);
var external__js_cookie__default = /*#__PURE__*/__webpack_require__.n(external__js_cookie_);

// EXTERNAL MODULE: ./configs/index.ts + 4 modules
var configs = __webpack_require__(8);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(7);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/admin-layout/index.tsx



function admin_layout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { admin_layout__typeof = function _typeof(obj) { return typeof obj; }; } else { admin_layout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return admin_layout__typeof(obj); }

function admin_layout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function admin_layout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function admin_layout__createClass(Constructor, protoProps, staticProps) { if (protoProps) admin_layout__defineProperties(Constructor.prototype, protoProps); if (staticProps) admin_layout__defineProperties(Constructor, staticProps); return Constructor; }

function admin_layout__possibleConstructorReturn(self, call) { if (call && (admin_layout__typeof(call) === "object" || typeof call === "function")) { return call; } return admin_layout__assertThisInitialized(self); }

function admin_layout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function admin_layout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var components_admin_layout_AdminLayout =
/*#__PURE__*/
function (_React$Component) {
  admin_layout__inherits(AdminLayout, _React$Component);

  function AdminLayout() {
    var _ref;

    var _temp, _this;

    admin_layout__classCallCheck(this, AdminLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return admin_layout__possibleConstructorReturn(_this, (_temp = _this = admin_layout__possibleConstructorReturn(this, (_ref = AdminLayout.__proto__ || Object.getPrototypeOf(AdminLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(admin_layout__assertThisInitialized(_this), "logOut", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.profileReducer.logOut(); // Clear Cookie


        external__js_cookie_["remove"]('token', {
          domain: configs["a" /* default */].nextjs.cookieDomain
        }); // Redirect

        router__default.a.push('/login');
      }
    }), _temp));
  }

  admin_layout__createClass(AdminLayout, [{
    key: "render",
    value: function render() {
      return external__react_["createElement"]("div", {
        className: "admin-layout"
      }, external__react_["createElement"](layout__default.a, null, external__react_["createElement"](layout__default.a.Sider, {
        trigger: null,
        collapsible: true,
        breakpoint: "lg",
        width: 288,
        className: "sider"
      }, external__react_["createElement"](admin_layout_Sidebar_Sidebar, this.props)), external__react_["createElement"](layout__default.a, null, external__react_["createElement"](layout__default.a.Header, {
        style: {
          padding: 0
        }
      }, external__react_["createElement"](Header["a" /* default */], {
        userEmail: this.props.profileState.email,
        logOut: this.logOut,
        _id: this.props.profileState._id,
        roles: this.props.profileState.roles
      })), external__react_["createElement"](layout__default.a.Content, null, this.props.children), external__react_["createElement"](layout__default.a.Footer, {
        style: {
          padding: 0
        }
      }, external__react_["createElement"](admin_layout_Footer_Footer, null)))));
    }
  }]);

  return AdminLayout;
}(external__react_["Component"]);

/* harmony default export */ var admin_layout = __webpack_exports__["a"] = (components_admin_layout_AdminLayout);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style/css");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 40 */
/***/ (function(module, exports) {



/***/ }),
/* 41 */
/***/ (function(module, exports) {



/***/ }),
/* 42 */
/***/ (function(module, exports) {



/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style/css");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table/style/css");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip/style/css");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style/css");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox/style/css");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tree/style/css");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tree");

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activeTag; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tag_style_css__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_tag_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_tag_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_tag__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon_style_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);






var defaultTag = function defaultTag(isDefault) {
  return !isDefault ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a, {
    color: "magenta"
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a, {
    type: "close"
  })) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a, {
    color: "green"
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_icon___default.a, {
    type: "check"
  }));
};

var activeTag = function activeTag(isActive) {
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_tag___default.a, {
    color: isActive ? 'green' : 'red'
  }, isActive ? 'Active' : 'In-Active');
};



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPermissions; });
var UserPermissions = {
  USERS_VIEW: 'Users.View',
  USERS_CREATE: 'Users.Create',
  USERS_EDIT: 'Users.Edit',
  USERS_CHANGEPERMISSIONS: 'Users.ChangePermissions',
  ROLES_VIEW: 'Roles.View',
  ROLES_CREATE: 'Roles.Create',
  ROLES_EDIT: 'Roles.Edit',
  ROLES_DELETE: 'Roles.Delete',
  BOOK_MANAGENMENT: 'Book.Managenment'
};

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_modal_style_css__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_modal_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_modal_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_modal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_tree_style_css__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_tree_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_tree_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_tree__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_checkbox_style_css__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_checkbox_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_checkbox_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_checkbox__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_table_style_css__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_table_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_table_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_table__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_icon_style_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_row_style_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_antd_lib_row_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_antd_lib_row_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_lib_row__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_antd_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_antd_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_antd_lib_tree_select_style_css__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_antd_lib_tree_select_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_antd_lib_tree_select_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_antd_lib_tree_select__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_antd_lib_tree_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_antd_lib_tree_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_antd_lib_col_style_css__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_antd_lib_col_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_antd_lib_col_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_antd_lib_col__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_antd_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_antd_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_antd_lib_input_style_css__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_antd_lib_input_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_antd_lib_input_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_antd_lib_input__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_antd_lib_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_antd_lib_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_antd_lib_tooltip_style_css__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_antd_lib_tooltip_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_antd_lib_tooltip_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_antd_lib_tooltip__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_antd_lib_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_antd_lib_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_antd_lib_button_style_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_antd_lib_button__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_moment__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_commons_Tags__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__rematch_withRematch__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__rematch_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_admin_layout__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__nextjs_constants_user_permissions_constant__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__static_css_admin_roles_css__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__static_css_admin_roles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__static_css_admin_roles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__service_proxies__ = __webpack_require__(3);
























function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var RolesPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RolesPage, _React$Component);

  function RolesPage() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, RolesPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = RolesPage.__proto__ || Object.getPrototypeOf(RolesPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "onCreateRoleFormSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        if (!_this.props.currentRole.name || !_this.props.currentRole.permissions || _this.props.currentRole.permissions.length === 0) {
          _this.props.errorHappen({
            errorMessage: "Please Fill In 'Role Name' And Select 'Permissions'."
          });
        } else {
          _this.props.currentRole._id ? _this.props.updateRole({
            roleInfo: _this.props.currentRole
          }) : _this.props.createNewRole({
            roleInfo: _this.props.currentRole
          });
        }
      }
    }), _temp));
  }

  _createClass(RolesPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var actionButtons = function actionButtons(record) {
        return __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
          className: "action-buttons"
        }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_20_antd_lib_tooltip___default.a, {
          title: "Edit Role"
        }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_22_antd_lib_button___default.a, {
          type: "primary",
          icon: "edit",
          className: "button",
          onClick: function onClick(_event) {
            return _this2.props.openAddRoleModal({
              currentRole: record
            });
          },
          style: {
            marginRight: '12px'
          }
        })), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_20_antd_lib_tooltip___default.a, {
          title: record.isActive ? 'Deactivate Role' : 'Activate Role'
        }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_22_antd_lib_button___default.a, {
          type: "primary",
          icon: _this2.props.currentRole.isActive ? 'lock' : 'unlock',
          className: "button",
          onClick: function onClick() {
            return record.isActive ? _this2.props.deactivateRole({
              roleId: record._id
            }) : _this2.props.activateRole({
              roleId: record._id
            });
          },
          style: {
            marginRight: '12px'
          }
        })));
      };

      var columns = [{
        title: 'Role Name',
        dataIndex: 'name',
        key: 'name',
        sorter: true
      }, {
        title: 'Default',
        dataIndex: 'isDefault',
        key: 'isDefault',
        className: 'isDefault',
        render: function render(_value, record, _index) {
          return Object(__WEBPACK_IMPORTED_MODULE_25__components_commons_Tags__["b" /* defaultTag */])(record.isDefault);
        }
      }, {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: function render(value, _record, _index) {
          return value ? __WEBPACK_IMPORTED_MODULE_24_moment___default()(value).format('YYYY-MM-DD') : '';
        }
      }, {
        title: 'Last Modified At',
        dataIndex: 'lastModifiedAt',
        key: 'lastModifiedAt',
        sorter: true,
        render: function render(value, _record, _index) {
          return value ? __WEBPACK_IMPORTED_MODULE_24_moment___default()(value).format('YYYY-MM-DD') : '';
        }
      }, {
        title: 'Active Status',
        dataIndex: 'isActive',
        key: 'isActive',
        sorter: true,
        render: function render(_value, record, _index) {
          return Object(__WEBPACK_IMPORTED_MODULE_25__components_commons_Tags__["a" /* activeTag */])(record.isActive);
        }
      }, {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: function render(_value, record, _index) {
          return actionButtons(record);
        }
      }]; // Generate Permissions Tree for Filter

      var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_29__nextjs_constants_user_permissions_constant__["a" /* UserPermissions */]);
      var allPermissions = keys.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_29__nextjs_constants_user_permissions_constant__["a" /* UserPermissions */][item];
      });
      var typesOfPermissions = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = allPermissions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _item2 = _step.value;

          var typeOfPermissions = _item2.split('.')[0];

          if (typesOfPermissions.indexOf(typeOfPermissions) === -1) {
            typesOfPermissions.push(typeOfPermissions);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var data = [];

      var _loop = function _loop(_item) {
        data.push({
          key: _item,
          title: "".concat(_item, " Management"),
          value: allPermissions.filter(function (element) {
            return element.indexOf(_item) === 0;
          }).join(', '),
          children: allPermissions.filter(function (element) {
            return element.indexOf(_item) === 0;
          }).map(function (element2) {
            return {
              title: "".concat(element2.replace('.', ' ')),
              value: element2,
              key: element2
            };
          })
        });
      };

      for (var _i = 0; _i < typesOfPermissions.length; _i++) {
        var _item = typesOfPermissions[_i];

        _loop(_item);
      }

      return __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_28__components_admin_layout__["a" /* default */], {
        profileState: this.props.profileState,
        profileReducer: this.props.profileReducer
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "roles-page"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "roles-filter"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_antd_lib_row___default.a, {
        type: "flex",
        gutter: 24
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_16_antd_lib_col___default.a, {
        lg: 12,
        md: 24,
        xs: 24
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "search"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_18_antd_lib_input___default.a.Search, {
        className: "search-input",
        style: {
          width: '100%'
        },
        placeholder: "Search By Role Name ...",
        defaultValue: this.props.search,
        onChange: function onChange(e) {
          _this2.props.searchChangeReducer({
            searchValue: e.target.value.toLowerCase()
          });

          _this2.props.searchChangeEffect({
            searchValue: e.target.value.toLowerCase()
          });
        }
      }))), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_16_antd_lib_col___default.a, {
        lg: 12,
        md: 24,
        xs: 24
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "filter"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14_antd_lib_tree_select___default.a, {
        treeData: data,
        placeholder: "Filter By Permissions",
        style: {
          width: '96%'
        },
        treeCheckable: true,
        showCheckedStrategy: __WEBPACK_IMPORTED_MODULE_14_antd_lib_tree_select___default.a.SHOW_PARENT,
        allowClear: true,
        defaultValue: this.props.filter,
        onChange: function onChange(value, _label) {
          if (value.length === 1) {
            _this2.props.filterChangeReducer({
              filterValue: value[0].split(', ')
            });

            _this2.props.filterChangeEffect({
              filterValue: value[0].split(', ')
            });
          } else if (value.length === 2) {
            var permissions = _toConsumableArray(value[0].split(', ')).concat(_toConsumableArray(value[1].split(', ')));

            _this2.props.filterChangeReducer({
              filterValue: permissions
            });

            _this2.props.filterChangeEffect({
              filterValue: permissions
            });
          } else {
            _this2.props.filterChangeReducer({
              filterValue: value
            });

            _this2.props.filterChangeEffect({
              filterValue: value
            });
          }
        }
      })))), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_antd_lib_row___default.a, {
        type: "flex"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_16_antd_lib_col___default.a, {
        span: 24,
        className: "button-flex"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "add"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_22_antd_lib_button___default.a, {
        type: "primary",
        onClick: function onClick() {
          return _this2.props.openAddRoleModal({
            currentRole: {}
          });
        }
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_antd_lib_icon___default.a, {
        type: "plus"
      }), " Create A New Role")), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "refresh"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_22_antd_lib_button___default.a, {
        type: "primary",
        onClick: function onClick() {
          _this2.props.fetchDataReducer({
            search: _this2.props.search,
            permissions: _this2.props.permissions,
            pageNumber: _this2.props.pageNumber,
            pageSize: _this2.props.pageSize,
            sortBy: _this2.props.sortBy,
            asc: _this2.props.asc
          });

          _this2.props.fetchDataEffect({
            search: _this2.props.search,
            permissions: _this2.props.permissions,
            pageNumber: _this2.props.pageNumber,
            pageSize: _this2.props.pageSize,
            sortBy: _this2.props.sortBy,
            asc: _this2.props.asc
          });
        }
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_antd_lib_icon___default.a, {
        type: "sync"
      }), " Refresh"))))), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "roles-table"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_antd_lib_table___default.a, {
        size: "middle",
        loading: this.props.isBusy,
        rowKey: function rowKey(record) {
          return record._id;
        },
        columns: columns,
        dataSource: this.props.data,
        onChange: function onChange(pagination, _filters, sorter) {
          _this2.props.fetchDataReducer({
            search: _this2.props.search,
            pageNumber: pagination.current,
            pageSize: pagination.pageSize,
            sortBy: sorter.field ? sorter.field : _this2.props.sortBy,
            asc: sorter.order ? sorter.order === 'ascend' ? true : false : _this2.props.asc
          });

          _this2.props.fetchDataEffect({
            search: _this2.props.search,
            pageNumber: pagination.current,
            pageSize: pagination.pageSize,
            sortBy: sorter.field ? sorter.field : _this2.props.sortBy,
            asc: sorter.order ? sorter.order === 'ascend' ? true : false : _this2.props.asc
          });
        },
        pagination: {
          total: this.props.total,
          showSizeChanger: true,
          pageSize: this.props.pageSize,
          current: this.props.pageNumber,
          pageSizeOptions: [10, 20, 50].map(function (item) {
            return String(item);
          })
        }
      })), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_antd_lib_modal___default.a, {
        className: "role-modal",
        title: "Create/Edit Role",
        okText: "Save",
        cancelText: "Cancel",
        onOk: this.onCreateRoleFormSubmit,
        onCancel: this.props.closeAddRoleModal,
        visible: this.props.addRoleModalVisible
      }, this.props.errorMessage && __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        style: {
          height: '21px',
          lineHeight: '21px',
          color: '#f5222d',
          textAlign: 'center'
        }
      }, this.props.errorMessage), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "input-role-name"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        style: {
          padding: '12px 0'
        }
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("span", {
        style: {
          color: 'red'
        }
      }, "*"), " Role Name:"), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        style: {
          margin: '0 24px'
        }
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_18_antd_lib_input___default.a, {
        placeholder: "Role Name",
        value: this.props.currentRole.name,
        onChange: function onChange(e) {
          return _this2.props.roleInfoChange({
            name: e.target.value
          });
        }
      }), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_antd_lib_checkbox___default.a, {
        checked: this.props.currentRole.isDefault,
        onChange: function onChange(e) {
          return _this2.props.roleInfoChange({
            isDefault: e.target.checked
          });
        },
        style: {
          padding: '24px 0'
        }
      }, "Set As Default"))), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        className: "select-permissions"
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        style: {
          padding: '12px 0'
        }
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("span", {
        style: {
          color: 'red'
        }
      }, "*"), " Role Permissions:"), __WEBPACK_IMPORTED_MODULE_23_react__["createElement"]("div", {
        style: {
          margin: '0 24px'
        }
      }, __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd_lib_tree___default.a, {
        checkable: true,
        multiple: true,
        checkedKeys: this.props.currentRole.permissions,
        onCheck: function onCheck(checkedKeys, _e) {
          return _this2.props.roleInfoChange({
            permissions: checkedKeys
          });
        }
      }, data.map(function (item, _index) {
        return __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd_lib_tree___default.a.TreeNode, {
          title: item.title,
          key: item.key
        }, item.children.map(function (child) {
          return __WEBPACK_IMPORTED_MODULE_23_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_antd_lib_tree___default.a.TreeNode, {
            title: child.title,
            key: child.value
          });
        }));
      })))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(props) {
        var rolesPageState, rolesService, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rolesPageState = props.store.getState().rolesPageModel;
                rolesService = Object(__WEBPACK_IMPORTED_MODULE_31__service_proxies__["d" /* getRolesService */])();
                _context.next = 4;
                return rolesService.findRoles(rolesPageState.search, rolesPageState.permissions, undefined, rolesPageState.pageNumber, rolesPageState.pageSize, rolesPageState.sortBy, rolesPageState.asc);

              case 4:
                result = _context.sent;
                props.store.dispatch.rolesPageModel.fetchDataSuccess({
                  result: result
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

  return RolesPage;
}(__WEBPACK_IMPORTED_MODULE_23_react__["Component"]);

var mapState = function mapState(rootState) {
  return _objectSpread({}, rootState.rolesPageModel, {
    profileState: rootState.profileModel
  });
};

var mapDispatch = function mapDispatch(rootReducer) {
  return _objectSpread({}, rootReducer.rolesPageModel, {
    profileReducer: rootReducer.profileModel
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_26__rematch_withRematch__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_27__rematch_store__["b" /* initStore */], mapState, mapDispatch)(RolesPage));

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tree-select/style/css");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tree-select");

/***/ }),
/* 94 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);