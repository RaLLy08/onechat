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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/* \n(The MIT License)\nCopyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = process && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/images/check.svg":
/*!******************************!*\
  !*** ./src/images/check.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/check.svg\";\n\n//# sourceURL=webpack:///./src/images/check.svg?");

/***/ }),

/***/ "./src/images/close-button.svg":
/*!*************************************!*\
  !*** ./src/images/close-button.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/close-button.svg\";\n\n//# sourceURL=webpack:///./src/images/close-button.svg?");

/***/ }),

/***/ "./src/images/error.svg":
/*!******************************!*\
  !*** ./src/images/error.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/error.svg\";\n\n//# sourceURL=webpack:///./src/images/error.svg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/logo.png\";\n\n//# sourceURL=webpack:///./src/images/logo.png?");

/***/ }),

/***/ "./src/images/settings.svg":
/*!*********************************!*\
  !*** ./src/images/settings.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/settings.svg\";\n\n//# sourceURL=webpack:///./src/images/settings.svg?");

/***/ }),

/***/ "./src/images/smile.svg":
/*!******************************!*\
  !*** ./src/images/smile.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/smile.svg\";\n\n//# sourceURL=webpack:///./src/images/smile.svg?");

/***/ }),

/***/ "./src/js/Controller.js":
/*!******************************!*\
  !*** ./src/js/Controller.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainChat_onSendClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainChat/onSendClick */ \"./src/js/mainChat/onSendClick.js\");\n/* harmony import */ var _WSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WSocket */ \"./src/js/WSocket.js\");\n/* harmony import */ var _modals_userRename_userRename_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/userRename/userRename.js */ \"./src/js/modals/userRename/userRename.js\");\n/* harmony import */ var _GetIp_getIp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetIp/getIp */ \"./src/js/GetIp/getIp.js\");\n/* harmony import */ var _mainChat_displayMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainChat/displayMessage */ \"./src/js/mainChat/displayMessage.js\");\n/* harmony import */ var _modals_usersDisplay_changeUserState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/usersDisplay/changeUserState */ \"./src/js/modals/usersDisplay/changeUserState.js\");\n/* harmony import */ var _header_onlineValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/onlineValue */ \"./src/js/header/onlineValue.js\");\n/* harmony import */ var _REST__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./REST */ \"./src/js/REST.js\");\n/* harmony import */ var _mainChat_clearAllmessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainChat/clearAllmessages */ \"./src/js/mainChat/clearAllmessages.js\");\n/* harmony import */ var _header_displayUserName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/displayUserName */ \"./src/js/header/displayUserName.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mainChat_EmptyInputSend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mainChat/EmptyInputSend */ \"./src/js/mainChat/EmptyInputSend.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable no-prototype-builtins */\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Controller = function Controller(view) {\n  var _this = this;\n\n  _classCallCheck(this, Controller);\n\n  _defineProperty(this, \"init\", function () {\n    _this.createUniqId();\n\n    Object(_mainChat_clearAllmessages__WEBPACK_IMPORTED_MODULE_8__[\"clearAllMsg\"])();\n\n    _this.sendUser();\n\n    Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"getMessages\"])(_this.onLoadShowAllMessages);\n    Object(_mainChat_onSendClick__WEBPACK_IMPORTED_MODULE_0__[\"onSendClick\"])(_this.checkSpam);\n    Object(_modals_userRename_userRename_js__WEBPACK_IMPORTED_MODULE_2__[\"userRename\"])(_this.renameUser);\n\n    _this.watchDisconectUser();\n\n    _this.getFromWS();\n\n    _this.echoWs();\n  });\n\n  _defineProperty(this, \"setIp\", function (ip) {\n    _this._ip = ip;\n    _this._name = ip;\n\n    _this.init();\n\n    Object(_header_displayUserName__WEBPACK_IMPORTED_MODULE_9__[\"displayUserName\"])(_this._name);\n  });\n\n  _defineProperty(this, \"createUniqId\", function () {\n    if (localStorage.getItem('myid') === null) {\n      var id = uniqid__WEBPACK_IMPORTED_MODULE_10___default()();\n      _this._id = id;\n      localStorage.setItem('myid', id);\n    } else {\n      _this._id = localStorage.getItem('myid');\n    }\n  });\n\n  _defineProperty(this, \"checkSpam\", function (text) {\n    var s = _this._spamBox;\n    s.push(text);\n\n    if (s[1] == s[2] && s[1] == s[3]) {\n      if (s[2] == s[3] && s[0] == s[3]) {\n        Object(_mainChat_EmptyInputSend__WEBPACK_IMPORTED_MODULE_11__[\"emptyInputSend\"])('Don\\'t spam');\n        setTimeout(function () {\n          Object(_mainChat_EmptyInputSend__WEBPACK_IMPORTED_MODULE_11__[\"emptyInputSendClose\"])();\n        }, 3000);\n      } else {\n        _this.sendedText(text);\n      }\n    } else {\n      _this.sendedText(text);\n    }\n\n    if (s.length > 2) {\n      s.splice(0, 1);\n    }\n\n    _this._spamBox = s;\n  });\n\n  _defineProperty(this, \"sendedText\", function (text) {\n    Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"putMessage\"])({\n      text: text,\n      id: _this._id\n    });\n\n    _this.sendToWS({\n      text: text,\n      name: _this._name,\n      time: new Date().getTime(),\n      ip: _this._ip,\n      id: _this._id\n    }); //записал вытащил всех\n\n  });\n\n  _defineProperty(this, \"sendUser\", function () {\n    //только зашел \n    Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"putUser\"])({\n      id: _this._id\n    }, function (name) {\n      //ждет от базы\n      if (name != 0) {\n        _this._name = name;\n        Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"putChangeUserState\"])({\n          state: true,\n          id: _this._id\n        });\n      }\n\n      _this.sendToWS({\n        name: _this._name,\n        ip: _this._ip,\n        id: _this._id,\n        state: true\n      });\n\n      Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"getUsers\"])(_this.onLoadShowUsers);\n    }); //если нету фолс, есть - имя\n  });\n\n  _defineProperty(this, \"sendToWS\", function (data) {\n    try {\n      _this._ws.sendMessage(data);\n    } catch (error) {\n      setTimeout(function () {\n        _this.sendToWS(data);\n      }, 100);\n    }\n  });\n\n  _defineProperty(this, \"getFromWS\", function () {\n    _this._ws.getMessage(function (data) {\n      if (data.hasOwnProperty('text')) {\n        _this.showMessages(data);\n      }\n\n      if (data.hasOwnProperty('state')) {\n        _this.showUserStats(data);\n      }\n\n      if (data.hasOwnProperty('reload')) {\n        _this.pageReload();\n      }\n    });\n  });\n\n  _defineProperty(this, \"showMessages\", function (message) {\n    if (message != 'echo') {\n      if (message.id == _this._id) {\n        Object(_mainChat_displayMessage__WEBPACK_IMPORTED_MODULE_4__[\"displayMessage\"])(message.text, message.name, new Date(message.time).toLocaleTimeString().substr(0, 5), true);\n      } else {\n        Object(_mainChat_displayMessage__WEBPACK_IMPORTED_MODULE_4__[\"displayMessage\"])(message.text, message.name, new Date(message.time).toLocaleTimeString().substr(0, 5), false);\n      }\n    }\n  });\n\n  _defineProperty(this, \"onLoadShowAllMessages\", function (messages) {\n    messages.forEach(function (element) {\n      _this.showMessages(element);\n    });\n  });\n\n  _defineProperty(this, \"showUserStats\", function (user) {\n    if (user.state === true) {\n      if (user.id == _this._id) {\n        Object(_header_displayUserName__WEBPACK_IMPORTED_MODULE_9__[\"displayUserName\"])(user.name);\n      }\n\n      Object(_modals_usersDisplay_changeUserState__WEBPACK_IMPORTED_MODULE_5__[\"changeUserState\"])(user.id, user.name, true);\n    } else {\n      if (new Date().getTime() - user.state < 3600000) {\n        Object(_modals_usersDisplay_changeUserState__WEBPACK_IMPORTED_MODULE_5__[\"changeUserState\"])(user.id, user.name, false, new Date(user.state).toLocaleTimeString().substr(0, 5));\n      }\n    }\n\n    Object(_header_onlineValue__WEBPACK_IMPORTED_MODULE_6__[\"onlineValue\"])();\n  });\n\n  _defineProperty(this, \"onLoadShowUsers\", function (users) {\n    users.forEach(function (element) {\n      _this.showUserStats(element);\n    });\n  });\n\n  _defineProperty(this, \"renameUser\", function (name) {\n    var newUser = {\n      name: name,\n      id: _this._id\n    }; //changeUserState(this._ip, this._name, true);\n\n    Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"putChangeUserName\"])(newUser, function (isrepeatname) {\n      if (isrepeatname !== false) {\n        _this._name = name;\n\n        _this.sendToWS({\n          id: _this._id,\n          name: _this._name,\n          ip: _this._ip,\n          state: true\n        });\n\n        _this.sendToWS({\n          reload: 'reload'\n        });\n\n        document.getElementById('emptyNick').innerHTML = '';\n        document.getElementById('inputName').value = '';\n      } else {\n        document.getElementById('emptyNick').innerHTML = 'This name is already in use';\n      }\n    });\n  });\n\n  _defineProperty(this, \"watchDisconectUser\", function () {\n    window.onbeforeunload = function () {\n      Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"putChangeUserState\"])({\n        state: false,\n        id: _this._id\n      });\n\n      _this.sendToWS({\n        id: _this._id,\n        ip: _this._ip,\n        name: _this._name,\n        state: new Date().getTime()\n      });\n    };\n  });\n\n  _defineProperty(this, \"echoWs\", function () {\n    _this.sendToWS('echo');\n\n    setTimeout(function () {\n      _this.echoWs();\n    }, 30000);\n  });\n\n  _defineProperty(this, \"pageReload\", function () {\n    Object(_REST__WEBPACK_IMPORTED_MODULE_7__[\"getMessages\"])(function (arr) {\n      Object(_mainChat_clearAllmessages__WEBPACK_IMPORTED_MODULE_8__[\"clearAllMsg\"])();\n\n      _this.onLoadShowAllMessages(arr);\n    });\n  });\n\n  this._view = view;\n  this._ws = new _WSocket__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  this._ip = null;\n  this._id = null;\n  this._name = null;\n  this._spamBox = [1, 2, 3];\n  Object(_GetIp_getIp__WEBPACK_IMPORTED_MODULE_3__[\"getIp\"])(this.setIp);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controller);\n\n//# sourceURL=webpack:///./src/js/Controller.js?");

/***/ }),

/***/ "./src/js/GetIp/getIp.js":
/*!*******************************!*\
  !*** ./src/js/GetIp/getIp.js ***!
  \*******************************/
/*! exports provided: getIp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIp\", function() { return getIp; });\nvar getIp = function getIp(cb) {\n  // \n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', '/getip', true); //https://api.ipify.org?format=json\n\n  xhr.onload = function () {\n    var data = JSON.parse(xhr.responseText);\n    cb && cb(data.ip);\n  };\n\n  xhr.send();\n};\n\n//# sourceURL=webpack:///./src/js/GetIp/getIp.js?");

/***/ }),

/***/ "./src/js/Model.js":
/*!*************************!*\
  !*** ./src/js/Model.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Model = function Model() {\n  _classCallCheck(this, Model);\n\n  this._users = [];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Model);\n\n//# sourceURL=webpack:///./src/js/Model.js?");

/***/ }),

/***/ "./src/js/REST.js":
/*!************************!*\
  !*** ./src/js/REST.js ***!
  \************************/
/*! exports provided: putMessage, putUser, putChangeUserState, putChangeUserName, getMessages, getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putMessage\", function() { return putMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putUser\", function() { return putUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putChangeUserState\", function() { return putChangeUserState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"putChangeUserName\", function() { return putChangeUserName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMessages\", function() { return getMessages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\nvar putMessage = function putMessage(data, cb) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('PUT', '/putmessage', true);\n  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n\n  xhr.onload = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var _data = xhr.response;\n      cb && cb(JSON.parse(_data));\n    }\n  };\n\n  xhr.send(JSON.stringify(data));\n};\nvar putUser = function putUser(data, cb) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('PUT', '/putuser', true);\n  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n\n  xhr.onload = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var _data2 = xhr.response;\n      cb && cb(JSON.parse(_data2));\n    }\n  };\n\n  xhr.send(JSON.stringify(data));\n};\nvar putChangeUserState = function putChangeUserState(data, cb) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('PUT', '/putchangeuserstate', true);\n  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n\n  xhr.onload = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var _data3 = xhr.response;\n      cb && cb(JSON.parse(_data3));\n    }\n  };\n\n  xhr.send(JSON.stringify(data));\n};\nvar putChangeUserName = function putChangeUserName(data, cb) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('PUT', '/putchangeusername', true);\n  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n\n  xhr.onload = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var _data4 = xhr.response;\n      cb && cb(JSON.parse(_data4));\n    }\n  };\n\n  xhr.send(JSON.stringify(data));\n};\nvar getMessages = function getMessages(cb) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', '/getmessages', true);\n  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n\n  xhr.onload = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var data = xhr.response;\n      cb && cb(JSON.parse(data));\n    }\n  };\n\n  xhr.send();\n};\nvar getUsers = function getUsers(cb) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', '/getusers');\n  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');\n\n  xhr.onload = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var data = xhr.response;\n      cb && cb(JSON.parse(data));\n    }\n  };\n\n  xhr.send();\n};\n\n//# sourceURL=webpack:///./src/js/REST.js?");

/***/ }),

/***/ "./src/js/View.js":
/*!************************!*\
  !*** ./src/js/View.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header */ \"./src/js/header/header.js\");\n/* harmony import */ var _modals_modalSetting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/modalSetting */ \"./src/js/modals/modalSetting.js\");\n/* harmony import */ var _modals_modalUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modalUsers */ \"./src/js/modals/modalUsers.js\");\n/* harmony import */ var _mainChat_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainChat/main */ \"./src/js/mainChat/main.js\");\n/* harmony import */ var _modals_openClosing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/openClosing */ \"./src/js/modals/openClosing.js\");\n/* harmony import */ var _modals_displayIp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/displayIp */ \"./src/js/modals/displayIp.js\");\n/* harmony import */ var _GetIp_getIp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GetIp/getIp */ \"./src/js/GetIp/getIp.js\");\n/* harmony import */ var _mainChat_smiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainChat/smiles */ \"./src/js/mainChat/smiles.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n //import {changeUserState} from './modals/OnOffsettings/changeUserState';\n//import {displayOnlineUsers} from './modals/viewOnline';\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View() {\n    _classCallCheck(this, View);\n\n    this._root = document.getElementById('root');\n    this.init();\n  }\n\n  _createClass(View, [{\n    key: \"init\",\n    value: function init() {\n      var wrapper = document.createElement('div');\n      wrapper.className = 'wrapper';\n      wrapper.id = 'wrapper';\n      var wrapper__modals = document.createElement('div');\n      wrapper__modals.id = 'modalBack';\n      wrapper__modals.className = 'wrapper__modals';\n      var wrapper__header = document.createElement('div');\n      wrapper__header.className = 'wrapper__header';\n      var wrapper__main = document.createElement('div');\n      wrapper__main.className = 'wrapper__main';\n      wrapper.append(wrapper__modals);\n      wrapper.append(wrapper__header);\n      wrapper.append(wrapper__main);\n      wrapper__modals.append(Object(_modals_modalUsers__WEBPACK_IMPORTED_MODULE_2__[\"modalUsers\"])());\n      wrapper__modals.append(Object(_modals_modalSetting__WEBPACK_IMPORTED_MODULE_1__[\"modalSetting\"])());\n      wrapper__header.append(Object(_header_header__WEBPACK_IMPORTED_MODULE_0__[\"header\"])());\n      wrapper__main.append(Object(_mainChat_main__WEBPACK_IMPORTED_MODULE_3__[\"mainChat\"])());\n\n      this._root.append(wrapper);\n\n      Object(_mainChat_smiles__WEBPACK_IMPORTED_MODULE_7__[\"smilesAdd\"])();\n      Object(_mainChat_smiles__WEBPACK_IMPORTED_MODULE_7__[\"smilesButton\"])();\n      Object(_modals_openClosing__WEBPACK_IMPORTED_MODULE_4__[\"openCloseModals\"])();\n      Object(_GetIp_getIp__WEBPACK_IMPORTED_MODULE_6__[\"getIp\"])(_modals_displayIp__WEBPACK_IMPORTED_MODULE_5__[\"displayIp\"]);\n    }\n  }]);\n\n  return View;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n//# sourceURL=webpack:///./src/js/View.js?");

/***/ }),

/***/ "./src/js/WSocket.js":
/*!***************************!*\
  !*** ./src/js/WSocket.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller */ \"./src/js/Controller.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar WSocket = function WSocket() {\n  var _this = this;\n\n  _classCallCheck(this, WSocket);\n\n  _defineProperty(this, \"onOpen\", function () {\n    console.log('...OPENING WS CONNECTION');\n  });\n\n  _defineProperty(this, \"getMessage\", function (callback) {\n    _this._wsocket.onmessage = function (message) {\n      callback(JSON.parse(message.data));\n    };\n  });\n\n  _defineProperty(this, \"onClose\", function () {\n    console.log('...CLOSING OPENING WS CONNECTION'); // new Controller().userDisconected();\n  });\n\n  _defineProperty(this, \"sendMessage\", function (data) {\n    _this._wsocket.send(JSON.stringify(data));\n  });\n\n  this._host = location.origin.replace(/^http/, 'ws');\n  this._wsocket = new WebSocket(this._host); //this._wsocket = new WebSocket('ws://one-chat.eu-4.evennode.com/');\n\n  this._wsocket.onopen = this.onOpen.bind(this);\n  this._wsocket.onclose = this.onClose.bind(this);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WSocket);\n\n//# sourceURL=webpack:///./src/js/WSocket.js?");

/***/ }),

/***/ "./src/js/header/displayUserName.js":
/*!******************************************!*\
  !*** ./src/js/header/displayUserName.js ***!
  \******************************************/
/*! exports provided: displayUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayUserName\", function() { return displayUserName; });\nvar displayUserName = function displayUserName(name) {\n  var headerOptions = document.getElementById('options');\n  var options__users = document.getElementById('userList');\n  var optionsUserName = document.createElement('div');\n  optionsUserName.className = 'options__userName';\n  optionsUserName.innerHTML = name;\n  headerOptions.insertBefore(optionsUserName, options__users);\n\n  if (headerOptions.children.length > 3) {\n    headerOptions.replaceChild(headerOptions.childNodes[1], headerOptions.childNodes[0]);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/header/displayUserName.js?");

/***/ }),

/***/ "./src/js/header/header.js":
/*!*********************************!*\
  !*** ./src/js/header/header.js ***!
  \*********************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"header\", function() { return header; });\n/* harmony import */ var _images_settings_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/settings.svg */ \"./src/images/settings.svg\");\n/* harmony import */ var _images_settings_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_settings_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar header = function header() {\n  var header__container = document.createElement('div');\n  header__container.classList.add('header__container', 'header');\n  var header__logo = document.createElement('div');\n  var logo_text = document.createElement('h1');\n  var logo__img = document.createElement('img');\n  logo_text.className = 'logo__text';\n  logo_text.innerHTML = 'Chat';\n  logo__img.className = 'logo__img';\n  logo__img.src = './images/logo.png';\n  header__logo.append(logo__img);\n  header__logo.append(logo_text);\n  header__logo.className = 'header__logo';\n  var header__options = document.createElement('div');\n  header__options.classList.add('header__options', 'options');\n  header__options.id = 'options';\n  var options__users = document.createElement('div');\n  options__users.classList.add('options__users', 'users');\n  options__users.id = 'userList';\n  header__options.append(options__users);\n  var users__online = document.createElement('p');\n  users__online.className = 'users__online';\n  users__online.innerHTML = 'online: 0';\n  users__online.id = 'online';\n  options__users.append(users__online);\n  var options__setting = document.createElement('div');\n  options__setting.id = 'settings';\n  options__setting.classList.add('options__setting', 'settings');\n  header__options.append(options__setting);\n  var settings__img = document.createElement('img');\n  settings__img.className = 'settings__img';\n  settings__img.src = './images/settings.svg';\n  settings__img.alt = 'settenigs';\n  options__setting.append(settings__img);\n  header__container.append(header__logo);\n  header__container.append(header__options);\n  return header__container;\n};\n\n//# sourceURL=webpack:///./src/js/header/header.js?");

/***/ }),

/***/ "./src/js/header/onlineValue.js":
/*!**************************************!*\
  !*** ./src/js/header/onlineValue.js ***!
  \**************************************/
/*! exports provided: onlineValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onlineValue\", function() { return onlineValue; });\nvar onlineValue = function onlineValue() {\n  var onlineUsers = document.getElementById('online');\n  onlineUsers.innerHTML = \"online: \".concat(document.getElementsByClassName('item--online').length);\n};\n\n//# sourceURL=webpack:///./src/js/header/onlineValue.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.less */ \"./src/style.less\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ \"./src/js/View.js\");\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model */ \"./src/js/Model.js\");\n/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller */ \"./src/js/Controller.js\");\ndocument.addEventListener('DOMContentLoaded', init);\n\n\n\n\n\nvar init = function init() {\n  var view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var model = new _Model__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  new _Controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"](model, view);\n};\n\ninit();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/mainChat/EmptyInputSend.js":
/*!*******************************************!*\
  !*** ./src/js/mainChat/EmptyInputSend.js ***!
  \*******************************************/
/*! exports provided: emptyInputSend, emptyInputSendClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emptyInputSend\", function() { return emptyInputSend; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emptyInputSendClose\", function() { return emptyInputSendClose; });\nvar emptyInputSend = function emptyInputSend(text) {\n  var emptyModal = document.getElementById('emptyModal');\n  var emptyModalError = document.getElementById('emptyModalError');\n  emptyModal.style.display = 'flex';\n  emptyModalError.innerHTML = text;\n};\nvar emptyInputSendClose = function emptyInputSendClose() {\n  var emptyModal = document.getElementById('emptyModal');\n  emptyModal.style.display = 'none';\n};\n\n//# sourceURL=webpack:///./src/js/mainChat/EmptyInputSend.js?");

/***/ }),

/***/ "./src/js/mainChat/clearAllmessages.js":
/*!*********************************************!*\
  !*** ./src/js/mainChat/clearAllmessages.js ***!
  \*********************************************/
/*! exports provided: clearAllMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAllMsg\", function() { return clearAllMsg; });\nvar clearAllMsg = function clearAllMsg() {\n  var main = document.getElementById('div');\n  var msgWrapper = document.getElementById('messageArea');\n  var cleanWrapper = document.createElement('div');\n  cleanWrapper.className = 'div__message-area message-area';\n  cleanWrapper.id = 'messageArea';\n  main.replaceChild(cleanWrapper, msgWrapper);\n};\n\n//# sourceURL=webpack:///./src/js/mainChat/clearAllmessages.js?");

/***/ }),

/***/ "./src/js/mainChat/displayMessage.js":
/*!*******************************************!*\
  !*** ./src/js/mainChat/displayMessage.js ***!
  \*******************************************/
/*! exports provided: displayMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayMessage\", function() { return displayMessage; });\nvar displayMessage = function displayMessage(text, name, time) {\n  var isyour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  // isyour = false for clients\n  var classArea = 'message-area__messages message-area__messages--another messages';\n  var classWrapper = 'messages__wrapper messagess messages__wrapper--another';\n  var classTime = 'text__time text__time--another';\n  var classAuthor = 'messagess__author messagess__author--another';\n  var classTextWrapper = 'messagess__text messagess__text--another';\n\n  if (isyour) {\n    classArea = 'message-area__messages message-area__messages--yours messages';\n    classWrapper = 'messages__wrapper messagess';\n    classTime = 'text__time';\n    classAuthor = 'messagess__author';\n    classTextWrapper = 'messagess__text';\n  }\n\n  var messagesArea = document.getElementById('messageArea');\n  var messageArea = document.createElement('div');\n  messageArea.className = classArea;\n  var messageWrapper = document.createElement('div');\n  messageWrapper.className = classWrapper;\n  var messageAutor = document.createElement('div');\n  messageAutor.className = classAuthor;\n  messageAutor.innerHTML = name;\n  var textTimeWrapper = document.createElement('div');\n  textTimeWrapper.className = classTextWrapper;\n  var messageText = document.createElement('div');\n  messageText.className = 'text__content';\n  messageText.innerHTML = text;\n  var messageTime = document.createElement('div');\n  messageTime.className = classTime;\n  messageTime.innerHTML = time;\n  messagesArea.append(messageArea);\n  messageArea.append(messageWrapper);\n  messageWrapper.append(messageAutor);\n  messageWrapper.append(textTimeWrapper);\n\n  if (!isyour) {\n    messageAutor.style.justifyContent = 'flex-start';\n    textTimeWrapper.append(messageTime);\n    textTimeWrapper.append(messageText);\n    messageTime.style.marginLeft = '0';\n    messageTime.style.marginRight = '10px';\n  } else {\n    textTimeWrapper.append(messageText);\n    textTimeWrapper.append(messageTime);\n  }\n\n  messagesArea.scrollTop = messagesArea.scrollHeight;\n};\n\n//# sourceURL=webpack:///./src/js/mainChat/displayMessage.js?");

/***/ }),

/***/ "./src/js/mainChat/main.js":
/*!*********************************!*\
  !*** ./src/js/mainChat/main.js ***!
  \*********************************/
/*! exports provided: mainChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mainChat\", function() { return mainChat; });\n/* harmony import */ var _images_smile_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/smile.svg */ \"./src/images/smile.svg\");\n/* harmony import */ var _images_smile_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_smile_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_error_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/error.svg */ \"./src/images/error.svg\");\n/* harmony import */ var _images_error_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_error_svg__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar mainChat = function mainChat() {\n  var main = document.createElement('div');\n  main.className = 'main';\n  var main__div = document.createElement('div');\n  main__div.classList.add('main__div', 'div');\n  main__div.name = 'div';\n  main__div.id = 'div';\n  main.append(main__div);\n  var div__messageArea = document.createElement('div');\n  div__messageArea.classList.add('div__message-area', 'message-area');\n  div__messageArea.id = 'messageArea';\n  main__div.append(div__messageArea);\n  var div__inputArea = document.createElement('div');\n  div__inputArea.classList.add('div__input-area', 'message');\n  main__div.append(div__inputArea);\n  var emptyModal = document.createElement('div');\n  emptyModal.classList.add('emptyModal');\n  emptyModal.id = 'emptyModal';\n  div__inputArea.append(emptyModal);\n  var emptyModal__error = document.createElement('div');\n  emptyModal__error.className = 'emptyModal__error';\n  emptyModal__error.id = 'emptyModalError';\n  emptyModal.append(emptyModal__error);\n  var emptyModal__img = document.createElement('img');\n  emptyModal__img.className = 'emptyModal__img';\n  emptyModal__img.src = './images/error.svg';\n  emptyModal.append(emptyModal__img);\n  var message__input = document.createElement('div');\n  message__input.classList.add('message__input', 'input');\n  div__inputArea.append(message__input);\n  var input__area = document.createElement('textarea');\n  input__area.className = 'input__area';\n  input__area.id = 'input';\n  input__area.placeholder = 'Enter your message:';\n  input__area.wrap = 'hard';\n  input__area.maxLength = '400';\n  message__input.append(input__area);\n  var message__dropUp = document.createElement('div');\n  message__dropUp.classList.add('message__dropUp', 'dropUp');\n  div__inputArea.append(message__dropUp);\n  var dropUp__grid = document.createElement('div');\n  dropUp__grid.classList.add('dropUp__grid', 'grid');\n  dropUp__grid.id = 'dropUp__gridId';\n  message__dropUp.append(dropUp__grid);\n  var img1 = document.createElement('div');\n  img1.className = 'grid__item';\n  img1.id = 'smile1';\n  img1.innerHTML = '😂';\n  img1.value = '😂';\n  dropUp__grid.append(img1);\n  var img2 = document.createElement('div');\n  img2.className = 'grid__item';\n  img2.id = 'smile2';\n  img2.innerHTML = '❤️';\n  img2.value = '❤️';\n  dropUp__grid.append(img2);\n  var img3 = document.createElement('div');\n  img3.className = 'grid__item';\n  img3.id = 'smile3';\n  img3.innerHTML = '😘';\n  img3.value = '😘';\n  dropUp__grid.append(img3);\n  var img4 = document.createElement('div');\n  img4.className = 'grid__item';\n  img4.id = 'smile4';\n  img4.innerHTML = '😭';\n  img4.value = '😭';\n  dropUp__grid.append(img4);\n  var img5 = document.createElement('div');\n  img5.className = 'grid__item';\n  img5.id = 'smile5';\n  img5.innerHTML = '😁';\n  img5.value = '😁';\n  dropUp__grid.append(img5);\n  var img6 = document.createElement('div');\n  img6.className = 'grid__item';\n  img6.id = 'smile6';\n  img6.innerHTML = '👍';\n  img6.value = '👍';\n  dropUp__grid.append(img6);\n  var img7 = document.createElement('div');\n  img7.className = 'grid__item';\n  img7.id = 'smile7';\n  img7.innerHTML = '🥰';\n  img7.value = '🥰';\n  dropUp__grid.append(img7);\n  var img8 = document.createElement('div');\n  img8.className = 'grid__item';\n  img8.id = 'smile8';\n  img8.innerHTML = '🤬';\n  img8.value = '🤬';\n  dropUp__grid.append(img8);\n  var img9 = document.createElement('div');\n  img9.className = 'grid__item';\n  img9.id = 'smile9';\n  img9.innerHTML = '💩';\n  img9.value = '💩';\n  dropUp__grid.append(img9);\n  var dropUp__smiles = document.createElement('div');\n  dropUp__smiles.classList.add('dropUp__smiles', 'smiles');\n  dropUp__smiles.id = 'dropUp__smilesId';\n  message__dropUp.append(dropUp__smiles);\n  var smiles__img = document.createElement('img');\n  smiles__img.className = 'smiles__img';\n  smiles__img.src = '../images/smile.svg';\n  dropUp__smiles.append(smiles__img);\n  var message__sendBtn = document.createElement('button');\n  message__sendBtn.className = 'message__send-btn';\n  message__sendBtn.innerHTML = 'Send';\n  message__sendBtn.id = 'send';\n  div__inputArea.append(message__sendBtn);\n  return main;\n};\n\n//# sourceURL=webpack:///./src/js/mainChat/main.js?");

/***/ }),

/***/ "./src/js/mainChat/onSendClick.js":
/*!****************************************!*\
  !*** ./src/js/mainChat/onSendClick.js ***!
  \****************************************/
/*! exports provided: onSendClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onSendClick\", function() { return onSendClick; });\n/* harmony import */ var _EmptyInputSend_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyInputSend.js */ \"./src/js/mainChat/EmptyInputSend.js\");\n\n\nvar onSendClick = function onSendClick(cb) {\n  var send = document.getElementById('send');\n  var input = document.getElementById('input');\n  var smilesArea = document.getElementById('dropUp__gridId');\n\n  send.onclick = function () {\n    if (input.value.replace(/\\s/g, '') !== '') {\n      cb(input.value);\n      input.value = '';\n    } else {\n      Object(_EmptyInputSend_js__WEBPACK_IMPORTED_MODULE_0__[\"emptyInputSend\"])('Cannot be empty');\n      setTimeout(function () {\n        Object(_EmptyInputSend_js__WEBPACK_IMPORTED_MODULE_0__[\"emptyInputSendClose\"])();\n      }, 4000);\n    }\n\n    smilesArea.classList.remove('showSmilesArea');\n  };\n\n  input.onkeydown = function (e) {\n    if (e.key === 'Enter' && input.value.replace(/\\s/g, '') !== '') {\n      e.preventDefault();\n      send.click();\n      input.value = '';\n    } else if (e.key === 'Enter' && input.value.replace(/\\s/g, '') === '') {\n      e.preventDefault();\n      Object(_EmptyInputSend_js__WEBPACK_IMPORTED_MODULE_0__[\"emptyInputSend\"])('Cannot be empty');\n      setTimeout(function () {\n        Object(_EmptyInputSend_js__WEBPACK_IMPORTED_MODULE_0__[\"emptyInputSendClose\"])();\n      }, 4000);\n    }\n\n    smilesArea.classList.remove('showSmilesArea');\n  };\n};\n\n//# sourceURL=webpack:///./src/js/mainChat/onSendClick.js?");

/***/ }),

/***/ "./src/js/mainChat/smiles.js":
/*!***********************************!*\
  !*** ./src/js/mainChat/smiles.js ***!
  \***********************************/
/*! exports provided: smilesAdd, smilesButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smilesAdd\", function() { return smilesAdd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smilesButton\", function() { return smilesButton; });\nvar smilesAdd = function smilesAdd() {\n  var smile1 = document.getElementById('smile1');\n  var smile2 = document.getElementById('smile2');\n  var smile3 = document.getElementById('smile3');\n  var smile4 = document.getElementById('smile4');\n  var smile5 = document.getElementById('smile5');\n  var smile6 = document.getElementById('smile6');\n  var smile7 = document.getElementById('smile7');\n  var smile8 = document.getElementById('smile8');\n  var smile9 = document.getElementById('smile9');\n  var textarea = document.getElementById('input');\n\n  smile1.onclick = function () {\n    textarea.value += smile1.value;\n  };\n\n  smile2.onclick = function () {\n    textarea.value += smile2.value;\n  };\n\n  smile3.onclick = function () {\n    textarea.value += smile3.value;\n  };\n\n  smile4.onclick = function () {\n    textarea.value += smile4.value;\n  };\n\n  smile5.onclick = function () {\n    textarea.value += smile5.value;\n  };\n\n  smile6.onclick = function () {\n    textarea.value += smile6.value;\n  };\n\n  smile7.onclick = function () {\n    textarea.value += smile7.value;\n  };\n\n  smile8.onclick = function () {\n    textarea.value += smile8.value;\n  };\n\n  smile9.onclick = function () {\n    textarea.value += smile9.value;\n  };\n};\nvar smilesButton = function smilesButton() {\n  var smileButton = document.getElementById('dropUp__smilesId');\n  var smilesArea = document.getElementById('dropUp__gridId');\n  var messageAreaClose = document.getElementsByClassName('header')[0];\n  var input = document.getElementById('input');\n\n  smileButton.onclick = function () {\n    smilesArea.classList.toggle('showSmilesArea');\n  };\n\n  messageAreaClose.onclick = function () {\n    smilesArea.classList.remove('showSmilesArea');\n  };\n\n  input.onclick = function () {\n    smilesArea.classList.remove('showSmilesArea');\n  };\n};\n\n//# sourceURL=webpack:///./src/js/mainChat/smiles.js?");

/***/ }),

/***/ "./src/js/modals/displayIp.js":
/*!************************************!*\
  !*** ./src/js/modals/displayIp.js ***!
  \************************************/
/*! exports provided: displayIp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayIp\", function() { return displayIp; });\nvar displayIp = function displayIp(ip) {\n  var ipfield = document.getElementById('myip');\n  ipfield.innerHTML = ip;\n};\n\n//# sourceURL=webpack:///./src/js/modals/displayIp.js?");

/***/ }),

/***/ "./src/js/modals/modalSetting.js":
/*!***************************************!*\
  !*** ./src/js/modals/modalSetting.js ***!
  \***************************************/
/*! exports provided: modalSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalSetting\", function() { return modalSetting; });\n/* harmony import */ var _images_close_button_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/close-button.svg */ \"./src/images/close-button.svg\");\n/* harmony import */ var _images_close_button_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_close_button_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nvar modalSetting = function modalSetting() {\n  var modals__setting = document.createElement('div');\n  modals__setting.classList.add('modals__setting', 'setting');\n  modals__setting.id = 'modalSetting';\n  var setting__closeBtn = document.createElement('div');\n  var setting__titleNick = document.createElement('div');\n  var setting__input = document.createElement('div');\n  var setting__btn = document.createElement('div');\n  var setting__ip = document.createElement('div');\n  setting__closeBtn.classList.add('setting__closeBtn', 'closeBtn');\n  var closeBtn__img = document.createElement('img');\n  closeBtn__img.className = 'closeBtn__img';\n  closeBtn__img.id = 'CloseBtn';\n  closeBtn__img.src = './images/close-button.svg';\n  closeBtn__img.alt = 'close button';\n  setting__closeBtn.append(closeBtn__img);\n  setting__titleNick.classList.add('setting__titleNick', 'titleNick');\n  var nickName = document.createElement('p');\n  nickName.innerHTML = 'Nickname:';\n  setting__titleNick.append(nickName);\n  setting__input.classList.add('setting__input', 'input');\n  var input__nickname = document.createElement('input');\n  input__nickname.className = 'input__nickname';\n  input__nickname.id = 'inputName';\n  input__nickname.placeholder = 'Enter your nickname';\n  input__nickname.maxLength = 10;\n  setting__input.append(input__nickname);\n  var setting__emptyInput = document.createElement('div');\n  setting__emptyInput.className = 'setting__emptyInput';\n  setting__emptyInput.id = 'emptyNick';\n  setting__btn.classList.add('setting__btn', 'acceptBtn');\n  var acceptBtn__nickname = document.createElement('button');\n  acceptBtn__nickname.className = 'acceptBtn__nickname';\n  acceptBtn__nickname.id = 'acceptName';\n  acceptBtn__nickname.innerHTML = 'Rename';\n  setting__btn.append(acceptBtn__nickname);\n  setting__ip.classList.add('setting__ip', 'ip');\n  var ip__area = document.createElement('p');\n  ip__area.className = 'ip__area';\n  ip__area.id = 'myip';\n  ip__area.innerHTML = 'loading...';\n  setting__ip.append(ip__area);\n  modals__setting.append(setting__closeBtn);\n  modals__setting.append(setting__titleNick);\n  modals__setting.append(setting__input);\n  modals__setting.append(setting__emptyInput);\n  modals__setting.append(setting__btn);\n  modals__setting.append(setting__ip);\n  return modals__setting;\n};\n\n//# sourceURL=webpack:///./src/js/modals/modalSetting.js?");

/***/ }),

/***/ "./src/js/modals/modalUsers.js":
/*!*************************************!*\
  !*** ./src/js/modals/modalUsers.js ***!
  \*************************************/
/*! exports provided: modalUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modalUsers\", function() { return modalUsers; });\n/* harmony import */ var _images_close_button_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/close-button.svg */ \"./src/images/close-button.svg\");\n/* harmony import */ var _images_close_button_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_close_button_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nvar modalUsers = function modalUsers() {\n  var modals__usersList = document.createElement('div');\n  modals__usersList.classList.add('modals__usersList', 'usersList');\n  modals__usersList.id = 'modalUsers';\n  var usersList__closeBtn = document.createElement('div');\n  usersList__closeBtn.classList.add('usersList__closeBtn', 'closeBtn');\n  usersList__closeBtn.id = 'CloseBtn1';\n  modals__usersList.append(usersList__closeBtn);\n  var closeBtn__img = document.createElement('img');\n  closeBtn__img.classList.add('closeBtn__img');\n  closeBtn__img.src = './images/close-button.svg';\n  usersList__closeBtn.append(closeBtn__img);\n  var usersList__title = document.createElement('div');\n  usersList__title.classList.add('usersList__title', 'title');\n  modals__usersList.append(usersList__title);\n  var title__users = document.createElement('div');\n  title__users.className = 'title__users';\n  title__users.innerHTML = 'Users list:';\n  usersList__title.append(title__users);\n  var usersList__view = document.createElement('div');\n  usersList__view.classList.add('usersList__view', 'view');\n  usersList__view.id = 'viewUsers';\n  modals__usersList.append(usersList__view);\n  return modals__usersList;\n};\n\n//# sourceURL=webpack:///./src/js/modals/modalUsers.js?");

/***/ }),

/***/ "./src/js/modals/openClosing.js":
/*!**************************************!*\
  !*** ./src/js/modals/openClosing.js ***!
  \**************************************/
/*! exports provided: openCloseModals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openCloseModals\", function() { return openCloseModals; });\nvar openCloseModals = function openCloseModals() {\n  var settings1 = document.getElementById('settings');\n  var onlineUsers = document.getElementById('userList');\n  var modalSettings = document.getElementById('modalSetting');\n  var wrapperModals = document.getElementById('modalBack');\n  var closeSettingsBtn = document.getElementById('CloseBtn');\n  var modalUsersList = document.getElementById('modalUsers');\n  var closeUsersBtn = document.getElementById('CloseBtn1');\n  var emptyNickNameModal = document.getElementById('emptyNick');\n\n  settings1.onclick = function () {\n    wrapperModals.classList.toggle('showModalWindows');\n    modalSettings.classList.toggle('showModalWindows');\n  };\n\n  closeSettingsBtn.onclick = function () {\n    modalSettings.classList.toggle('showModalWindows');\n    wrapperModals.classList.toggle('showModalWindows');\n    emptyNickNameModal.innerHTML = '';\n  };\n\n  onlineUsers.onclick = function () {\n    wrapperModals.classList.toggle('showModalWindows');\n    modalUsersList.classList.toggle('showModalWindows');\n  };\n\n  closeUsersBtn.onclick = function () {\n    wrapperModals.classList.toggle('showModalWindows');\n    modalUsersList.classList.toggle('showModalWindows');\n  };\n\n  wrapperModals.onclick = function () {\n    wrapperModals.classList.remove('showModalWindows');\n    modalSettings.classList.remove('showModalWindows');\n    modalUsersList.classList.remove('showModalWindows');\n    emptyNickNameModal.innerHTML = '';\n  };\n\n  modalSettings.onclick = function (e) {\n    e.stopPropagation();\n  };\n\n  modalUsersList.onclick = function (e) {\n    e.stopPropagation();\n  };\n};\n\n//# sourceURL=webpack:///./src/js/modals/openClosing.js?");

/***/ }),

/***/ "./src/js/modals/userRename/userRename.js":
/*!************************************************!*\
  !*** ./src/js/modals/userRename/userRename.js ***!
  \************************************************/
/*! exports provided: userRename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRename\", function() { return userRename; });\nvar userRename = function userRename(cb) {\n  var acceptNickName = document.getElementById('acceptName');\n  var inputName = document.getElementById('inputName');\n  var emptyNickNameModal = document.getElementById('emptyNick');\n\n  acceptNickName.onclick = function () {\n    if (inputName.value.replace(/\\s/g, '') !== '') {\n      cb(inputName.value); //inputName.value = '';\n    } else {\n      emptyNickNameModal.innerHTML = 'Enter your nickname please';\n    }\n  };\n\n  inputName.onkeyup = function (e) {\n    if (e.key === 'Enter') {\n      acceptNickName.click();\n    }\n  };\n};\n\n//# sourceURL=webpack:///./src/js/modals/userRename/userRename.js?");

/***/ }),

/***/ "./src/js/modals/usersDisplay/changeOffline.js":
/*!*****************************************************!*\
  !*** ./src/js/modals/usersDisplay/changeOffline.js ***!
  \*****************************************************/
/*! exports provided: changeOffline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeOffline\", function() { return changeOffline; });\nvar changeOffline = function changeOffline(ip, date) {\n  var userArea = document.getElementById(\"\".concat(ip));\n  var leftTimeArea = document.createElement('p');\n  userArea.classList.remove('view__item', 'item', 'item--online');\n  userArea.classList.add('view__item', 'item', 'item--offline');\n  userArea.childNodes[1].remove();\n  leftTimeArea.innerHTML = \"\".concat(date);\n  userArea.append(leftTimeArea);\n};\n\n//# sourceURL=webpack:///./src/js/modals/usersDisplay/changeOffline.js?");

/***/ }),

/***/ "./src/js/modals/usersDisplay/changeOnline.js":
/*!****************************************************!*\
  !*** ./src/js/modals/usersDisplay/changeOnline.js ***!
  \****************************************************/
/*! exports provided: changeOnline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeOnline\", function() { return changeOnline; });\n/* harmony import */ var _images_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/check.svg */ \"./src/images/check.svg\");\n/* harmony import */ var _images_check_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_check_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nvar changeOnline = function changeOnline(ip, name) {\n  var userArea = document.getElementById(\"\".concat(ip));\n  var img = document.createElement('img');\n  userArea.classList.remove('view__item', 'item', 'item--offline');\n  userArea.classList.add('view__item', 'item', 'item--online');\n  userArea.childNodes[1].remove();\n  img.src = '../../../images/check.svg';\n  img.className = 'item--online__img';\n  userArea.append(img);\n  userArea.childNodes[0].innerHTML = name;\n};\n\n//# sourceURL=webpack:///./src/js/modals/usersDisplay/changeOnline.js?");

/***/ }),

/***/ "./src/js/modals/usersDisplay/changeUserState.js":
/*!*******************************************************!*\
  !*** ./src/js/modals/usersDisplay/changeUserState.js ***!
  \*******************************************************/
/*! exports provided: changeUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeUserState\", function() { return changeUserState; });\n/* harmony import */ var _changeOffline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeOffline */ \"./src/js/modals/usersDisplay/changeOffline.js\");\n/* harmony import */ var _changeOnline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeOnline */ \"./src/js/modals/usersDisplay/changeOnline.js\");\n/* harmony import */ var _displayUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayUser */ \"./src/js/modals/usersDisplay/displayUser.js\");\n/* harmony import */ var _displayOffuser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayOffuser */ \"./src/js/modals/usersDisplay/displayOffuser.js\");\n\n\n\n\nvar changeUserState = function changeUserState(ip, name, state, time) {\n  var inTable = document.getElementById(ip);\n\n  if (inTable) {\n    if (state === true) {\n      Object(_changeOnline__WEBPACK_IMPORTED_MODULE_1__[\"changeOnline\"])(ip, name);\n    } else {\n      Object(_changeOffline__WEBPACK_IMPORTED_MODULE_0__[\"changeOffline\"])(ip, time);\n    }\n  } else {\n    if (state === true) {\n      Object(_displayUser__WEBPACK_IMPORTED_MODULE_2__[\"displayUser\"])(ip, name);\n    } else {\n      Object(_displayOffuser__WEBPACK_IMPORTED_MODULE_3__[\"displayOffUser\"])(ip, name, time);\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/js/modals/usersDisplay/changeUserState.js?");

/***/ }),

/***/ "./src/js/modals/usersDisplay/displayOffuser.js":
/*!******************************************************!*\
  !*** ./src/js/modals/usersDisplay/displayOffuser.js ***!
  \******************************************************/
/*! exports provided: displayOffUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayOffUser\", function() { return displayOffUser; });\nvar displayOffUser = function displayOffUser(ip, name, date) {\n  var userOnlineView = document.getElementById('viewUsers');\n  var view__item = document.createElement('div');\n  view__item.classList.add('view__item', 'item', 'item--offline');\n  view__item.id = ip;\n  var userNick = document.createElement('p');\n  userNick.className = 'item__nameUser';\n  userNick.innerHTML = name;\n  var leftTimeArea = document.createElement('p');\n  leftTimeArea.innerHTML = \"\".concat(date);\n  userOnlineView.append(view__item);\n  view__item.append(userNick);\n  view__item.append(leftTimeArea);\n};\n\n//# sourceURL=webpack:///./src/js/modals/usersDisplay/displayOffuser.js?");

/***/ }),

/***/ "./src/js/modals/usersDisplay/displayUser.js":
/*!***************************************************!*\
  !*** ./src/js/modals/usersDisplay/displayUser.js ***!
  \***************************************************/
/*! exports provided: displayUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayUser\", function() { return displayUser; });\n/* harmony import */ var _images_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/check.svg */ \"./src/images/check.svg\");\n/* harmony import */ var _images_check_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_check_svg__WEBPACK_IMPORTED_MODULE_0__);\n\nvar displayUser = function displayUser(ip, name) {\n  var userOnlineView = document.getElementById('viewUsers');\n  var view__item = document.createElement('div');\n  view__item.classList.add('view__item', 'item', 'item--online');\n  view__item.id = ip;\n  var userNick = document.createElement('p');\n  userNick.className = 'item__nameUser';\n  userNick.innerHTML = name;\n  var itemOnline__img = document.createElement('img');\n  itemOnline__img.className = 'item--online__img';\n  itemOnline__img.src = '../../../images/check.svg';\n  userOnlineView.append(view__item);\n  view__item.append(userNick);\n  view__item.append(itemOnline__img);\n};\n\n//# sourceURL=webpack:///./src/js/modals/usersDisplay/displayUser.js?");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.less?");

/***/ })

/******/ });