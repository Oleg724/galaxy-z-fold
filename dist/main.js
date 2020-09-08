/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/functions/check-target.js":
/*!**************************************!*\
  !*** ./js/functions/check-target.js ***!
  \**************************************/
/*! exports provided: checkTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTarget", function() { return checkTarget; });
var checkTarget = function checkTarget(elem, id) {
  return elem.classList.contains(id) ? true : false;
};

/***/ }),

/***/ "./js/functions/close-popup.js":
/*!*************************************!*\
  !*** ./js/functions/close-popup.js ***!
  \*************************************/
/*! exports provided: closePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePopup", function() { return closePopup; });
var closePopup = function closePopup() {
  var $popup = document.querySelector('.js-popup');
  $popup.classList.remove('active');
};

/***/ }),

/***/ "./js/functions/input-phone/cut-last-char.js":
/*!***************************************************!*\
  !*** ./js/functions/input-phone/cut-last-char.js ***!
  \***************************************************/
/*! exports provided: cutLastChar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cutLastChar", function() { return cutLastChar; });
var cutLastChar = function cutLastChar(str) {
  return str.split('').slice(0, length - 1).join('');
};

/***/ }),

/***/ "./js/functions/input-phone/mask.js":
/*!******************************************!*\
  !*** ./js/functions/input-phone/mask.js ***!
  \******************************************/
/*! exports provided: mask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return mask; });
/* harmony import */ var _cut_last_char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cut-last-char */ "./js/functions/input-phone/cut-last-char.js");

var mask = function mask(e, elem) {
  var value = e.data;
  var length = elem.value.length;

  if (isNaN(value) || length > 18) {
    elem.value = Object(_cut_last_char__WEBPACK_IMPORTED_MODULE_0__["cutLastChar"])(elem.value);
  }

  switch (length) {
    case 1:
      return elem.value = "+38(".concat(value);

    case 7:
      return elem.value += ") ";

    case 12:
      return elem.value += "-";

    case 15:
      return elem.value += "-";

    case 18:
      return elem.value += '';

    default:
      return elem.value += '';
  }
};

/***/ }),

/***/ "./js/functions/open-popup.js":
/*!************************************!*\
  !*** ./js/functions/open-popup.js ***!
  \************************************/
/*! exports provided: openPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopup", function() { return openPopup; });
/* harmony import */ var _check_target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-target */ "./js/functions/check-target.js");

var openPopup = function openPopup() {
  var $popup = document.querySelector('.js-popup');
  $popup.classList.add('active');
};

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_open_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/open-popup */ "./js/functions/open-popup.js");
/* harmony import */ var _functions_close_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/close-popup */ "./js/functions/close-popup.js");
/* harmony import */ var _functions_check_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/check-target */ "./js/functions/check-target.js");
/* harmony import */ var _functions_input_phone_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/input-phone/mask */ "./js/functions/input-phone/mask.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var $body = document.querySelector('body');
var $closeBtn = document.querySelector('.js-close-btn');
var $telInput = document.querySelector('#tel');
var $form = document.querySelector('#form');
var $popupContent = document.querySelector('.js-popup-content');
var $popupInner = document.querySelector('.js-popup-inner');
var url = '/index.php?route=information/sendinfo/underorder';

var showMessage = function showMessage(text) {
  var $popupInner = document.querySelector('.js-popup-inner');
  $popupInner.style.display = 'none';
  $popupContent.classList.add('send');
  var $message = document.createElement('p');
  $message.id = 'message';
  $message.innerHTML = text;
  $popupContent.appendChild($message);
};

var hideMessage = function hideMessage() {
  var $popupContent = document.querySelector('.registration-popup__content');
  var $message = $popupContent.querySelector('#message');
  $popupContent.removeChild($message);
  $popupContent.classList.remove('send');
  $popupInner.removeAttribute('style');
};

var showRegForm = function showRegForm() {
  var $popupInner = document.querySelector('.js-popup-inner');
  $popupInner.style.display = 'flex';
};

Object(_functions_open_popup__WEBPACK_IMPORTED_MODULE_1__["openPopup"])();
$body.addEventListener('click', function (e) {
  var target = e.target;
  Object(_functions_check_target__WEBPACK_IMPORTED_MODULE_3__["checkTarget"])(target, 'js-btn') ? Object(_functions_open_popup__WEBPACK_IMPORTED_MODULE_1__["openPopup"])() : null;
});
$form.addEventListener('submit', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e) {
    var data, loadJson, _loadJson;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _loadJson = function _loadJson3() {
              _loadJson = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var response, $message;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch(url, {
                          method: 'POST',
                          body: data
                        });

                      case 2:
                        response = _context.sent;

                        if (response.status == 200) {
                          showMessage('Дякуємо за реєстрацію. Очікуйте дзвінок оператора.');
                          $message = $popupContent.querySelector('#message');
                          setTimeout(function () {
                            $popupContent.removeChild($message);
                            $popupContent.classList.remove('send');
                            var $popupInner = document.querySelector('.js-popup-inner');
                            $popupInner.removeAttribute('style');
                            Object(_functions_close_popup__WEBPACK_IMPORTED_MODULE_2__["closePopup"])();
                          }, 3000);
                        } else {
                          showMessage('Вибачте за незручності. Спробуйте ще раз');
                          setTimeout(function () {
                            hideMessage();
                            showRegForm();
                            Object(_functions_close_popup__WEBPACK_IMPORTED_MODULE_2__["closePopup"])();
                          }, 3000);
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return _loadJson.apply(this, arguments);
            };

            loadJson = function _loadJson2() {
              return _loadJson.apply(this, arguments);
            };

            e.preventDefault();
            data = new FormData($form);
            loadJson()["catch"](function () {
              showMessage('Вибачте за незручності. Спробуйте ще раз');
              setTimeout(function () {
                hideMessage();
                showRegForm();
                Object(_functions_close_popup__WEBPACK_IMPORTED_MODULE_2__["closePopup"])();
              }, 3000);
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
$closeBtn.addEventListener('click', function () {
  Object(_functions_close_popup__WEBPACK_IMPORTED_MODULE_2__["closePopup"])();
});
$telInput.addEventListener('input', function (e) {
  Object(_functions_input_phone_mask__WEBPACK_IMPORTED_MODULE_4__["mask"])(e, $telInput);
});

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi @babel/polyfill ./js/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./js/index.js */"./js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map