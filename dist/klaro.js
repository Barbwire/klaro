(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["klaro"] = factory();
	else
		root["klaro"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/core-js/internals/a-function.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-function.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/add-to-unscopables.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/internals/add-to-unscopables.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../node_modules/core-js/internals/advance-string-index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/advance-string-index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "../node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-instance.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/an-instance.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-for-each.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "../node_modules/core-js/internals/array-from.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/array-from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-iteration.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/array-iteration.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-has-species-support.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-is-strict.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-is-strict.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-uses-to-length.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-species-create.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/array-species-create.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/collection-strong.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/collection-strong.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "../node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/collection.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/collection.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "../node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../node_modules/core-js/internals/an-instance.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../node_modules/core-js/internals/create-iterator-constructor.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-iterator-constructor.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-iterator.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-well-known-symbol.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/define-well-known-symbol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "../node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/internals/dom-iterables.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/dom-iterables.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "../node_modules/core-js/internals/freezing.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/freezing.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind-context.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-iterator-method.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/get-iterator-method.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/core-js/internals/has.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/has.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/html.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/html.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../node_modules/core-js/internals/inherit-if-required.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/inherit-if-required.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../node_modules/core-js/internals/internal-metadata.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/internal-metadata.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "../node_modules/core-js/internals/freezing.js");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-array-iterator-method.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-array.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/is-array.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/internals/is-regexp.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-regexp.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "../node_modules/core-js/internals/iterate.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/iterate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js/internals/get-iterator-method.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../node_modules/core-js/internals/call-with-safe-iteration-closing.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "../node_modules/core-js/internals/iterators-core.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/iterators-core.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../node_modules/core-js/internals/iterators.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/iterators.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/native-symbol.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/native-symbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "../node_modules/core-js/internals/native-weak-map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/native-weak-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../node_modules/core-js/internals/number-parse-int.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/number-parse-int.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "../node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "../node_modules/core-js/internals/object-assign.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/object-assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "../node_modules/core-js/internals/object-create.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/object-create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-properties.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../node_modules/core-js/internals/object-to-string.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/object-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/internals/path.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/path.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "../node_modules/core-js/internals/redefine-all.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/redefine-all.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "../node_modules/core-js/internals/redefine.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/redefine.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-exec-abstract.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "../node_modules/core-js/internals/regexp-exec.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "../node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "../node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-flags.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-flags.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "../node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/set-global.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/set-global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/set-species.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/set-species.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/set-to-string-tag.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/set-to-string-tag.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js/internals/species-constructor.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/species-constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/internals/string-multibyte.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/string-multibyte.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "../node_modules/core-js/internals/string-trim.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/string-trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-integer.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol-wrapped.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol-wrapped.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../node_modules/core-js/internals/whitespaces.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/whitespaces.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.concat.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.concat.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.filter.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.filter.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.for-each.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.from.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "../node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.is-array.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");

// `Array.isArray` method
// https://tc39.github.io/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.iterator.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.join.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.join.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.map.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.slice.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.slice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.date.to-string.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.date.to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.function.name.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.map.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/modules/es.map.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "../node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "../node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.github.io/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.assign.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "../node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.create.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.create.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.define-properties.js":
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.define-properties.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js/internals/object-define-properties.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.define-property.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.get-prototype-of.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.get-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../node_modules/core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "../node_modules/core-js/modules/es.object.keys.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.set-prototype-of.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.to-string.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "../node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.parse-int.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es.parse-int.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "../node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.regexp.constructor.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es.regexp.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../node_modules/core-js/internals/inherit-if-required.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js").f;
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../node_modules/core-js/internals/is-regexp.js");
var getFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var setInternalState = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js").set;
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var FORCED = DESCRIPTORS && isForced('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y || fails(function () {
  re2[MATCH] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
})));

// `RegExp` constructor
// https://tc39.github.io/ecma262/#sec-regexp-constructor
if (FORCED) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = this instanceof RegExpWrapper;
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var sticky;

    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
      return pattern;
    }

    if (CORRECT_NEW) {
      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
    } else if (pattern instanceof RegExpWrapper) {
      if (flagsAreUndefined) flags = getFlags.call(pattern);
      pattern = pattern.source;
    }

    if (UNSUPPORTED_Y) {
      sticky = !!flags && flags.indexOf('y') > -1;
      if (sticky) flags = flags.replace(/y/g, '');
    }

    var result = inheritIfRequired(
      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
      thisIsRegExp ? this : RegExpPrototype,
      RegExpWrapper
    );

    if (UNSUPPORTED_Y && sticky) setInternalState(result, { sticky: sticky });

    return result;
  };
  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };
  var keys = getOwnPropertyNames(NativeRegExp);
  var index = 0;
  while (keys.length > index) proxy(keys[index++]);
  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.github.io/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "../node_modules/core-js/modules/es.regexp.exec.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "../node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.set.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/modules/es.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "../node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "../node_modules/core-js/internals/collection-strong.js");

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.iterator.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "../node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.match.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.replace.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.split.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "../node_modules/core-js/modules/es.symbol.description.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es.symbol.description.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.symbol.iterator.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es.symbol.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "../node_modules/core-js/modules/es.symbol.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/modules/es.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "../node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "../node_modules/core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "../node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "../node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "../node_modules/core-js/modules/web.timers.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/web.timers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ }),

/***/ "../node_modules/current-executing-script/dist/currentExecutingScript.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/current-executing-script/dist/currentExecutingScript.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * currentExecutingScript
 * Get the currently executing script, regardless of its source/trigger/synchronicity. Similar to HTML5's `document.currentScript` but arguably much more useful!
 * Copyright (c) 2015 James M. Greene
 * Licensed MIT
 * https://github.com/JamesMGreene/currentExecutingScript
 * v0.1.3
 */
(function(root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(
  // Current context/scope
  this || window,

  // Factory function to return the export
  function() {

var scriptReadyRegex = /^(interactive|loaded|complete)$/;

// This page's URL (minus query string and fragment identifer hash, if any)
var fullPageUrl = !!window.location ? window.location.href : null;
var pageUrl = fullPageUrl ? fullPageUrl.replace(/#.*$/, "").replace(/\?.*$/, "") || null : null;

// Live NodeList collection
var scripts = document.getElementsByTagName("script");

// Check if the browser supports the `readyState` property on `script` elements
var supportsScriptReadyState = "readyState" in (scripts[0] || document.createElement("script"));

// Lousy browser detection for [not] Opera
var isNotOpera = !window.opera || window.opera.toString() !== "[object Opera]";

// Detect if `document.currentScript` is supported
var hasNativeCurrentScriptAccessor = "currentScript" in document;

var originalStackDepthConfig;
// Detect if the V8 Error Stack Trace API is supported
if ("stackTraceLimit" in Error && Error.stackTraceLimit !== Infinity) {
  originalStackDepthConfig = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
}


// In some browsers (e.g. Chrome), you can get the current stack from an Error
// object instance without needing to throw it. Avoiding an unnecessary
// use of `throw` saves time and performance.
var hasStackBeforeThrowing = false,
    hasStackAfterThrowing = false;
(function() {
  try {
    var err = new Error();
    hasStackBeforeThrowing = typeof err.stack === "string" && !!err.stack;
    throw err;
  }
  catch (thrownErr) {
    hasStackAfterThrowing = typeof thrownErr.stack === "string" && !!thrownErr.stack;
  }
})();


// Normalize whitespace within a string
function normalizeWhitespace(str) {
  return str ? str.replace(/^\s+$|\s+$/g, "").replace(/\s\s+/g, " ") : "";
}

// Get script object based on the `src` URL
function getScriptFromUrl(url, eligibleScripts) {
  var i,
      script = null;

  eligibleScripts = eligibleScripts || scripts;

  if (typeof url === "string" && url) {
    for (i = eligibleScripts.length; i--; ) {
      if (eligibleScripts[i].src === url) {
        // NOTE: Could check if the same script URL is used by more than one `script` element
        // here... but let's not. That would yield less useful results in "loose" detection. ;)
        script = eligibleScripts[i];
        break;
      }
    }
  }
  return script;
}

// Get script object based on the caller function's source code body (text)
function getInlineScriptFromCallerSource(callerFnSource, eligibleScripts) {
  var i, inlineScriptText,
      script = null,
      callerSourceText = normalizeWhitespace(callerFnSource);

  eligibleScripts = eligibleScripts || scripts;

  if (callerFnSource && callerSourceText) {
    for (i = eligibleScripts.length; i--; ) {
      // Only look at inline scripts
      if (!eligibleScripts[i].hasAttribute("src")) {
        inlineScriptText = normalizeWhitespace(eligibleScripts[i].text);
        if (inlineScriptText.indexOf(callerSourceText) !== -1) {
          // If more than one match is found, don't return any
          if (script) {
            script = null;
            break;
          }
          script = eligibleScripts[i];
        }
      }
    }
  }

  return script;
}

// If there is only a single inline script on the page, return it; otherwise `null`
function getSoleInlineScript(eligibleScripts) {
  var i, len,
      script = null;
  eligibleScripts = eligibleScripts || scripts;
  for (i = 0, len = eligibleScripts.length; i < len; i++) {
    if (!eligibleScripts[i].hasAttribute("src")) {
      if (script) {
        script = null;
        break;
      }
      script = eligibleScripts[i];
    }
  }
  return script;
}

// Get the currently executing script URL from an Error stack trace
function getScriptUrlFromStack(stack, skipStackDepth) {
  var matches, remainingStack,
      url = null,
      ignoreMessage = typeof skipStackDepth === "number";
  skipStackDepth = ignoreMessage ? Math.round(skipStackDepth) : 0;
  if (typeof stack === "string" && stack) {
    if (ignoreMessage) {
      matches = stack.match(/(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
    }
    else {
      matches = stack.match(/^(?:|[^:@]*@|.+\)@(?=data:text\/javascript|blob|http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);

      if (!(matches && matches[1])) {
        matches = stack.match(/\)@(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
      }
    }

    if (matches && matches[1]) {
      if (skipStackDepth > 0) {
        remainingStack = stack.slice(stack.indexOf(matches[0]) + matches[0].length);
        url = getScriptUrlFromStack(remainingStack, (skipStackDepth - 1));
      }
      else {
        url = matches[1];
      }
    }

    // TODO: Handle more edge cases!
    // Fixes #1
    // See https://github.com/JamesMGreene/currentExecutingScript/issues/1

    // ???

  }
  return url;
}


// Get the farthest currently executing (i.e. yes, EXECUTING) `script` DOM
// element for the caller function, regardless of whether it is that `script`
// DOM element is currently being evaluated for the first time. The farthest
// currently executing `script` DOM element would typically be considered the
// originator of the current execution stack.
function _farthestExecutingScript() {
  /*jshint noarg:false */

  // TODO: Implement!
  // Fixes #3
  // See https://github.com/JamesMGreene/currentExecutingScript/issues/3
  return null;

/*
  // Yes, this IS possible, i.e. if a script removes other scripts (or itself)
  if (scripts.length === 0) {
    return null;
  }

  // Guaranteed accurate in IE 6-10.
  // Not accurate/supported in any other browsers.
  if (isNotOpera && supportsScriptReadyState) {
    for (var i = scripts.length; i--; ) {
      if (scripts[i].readyState === "interactive") {
        return scripts[i];
      }
    }
  }

  var stack,
      e = new Error();
  if (hasStackBeforeThrowing) {
    stack = e.stack;
  }
  if (!stack && hasStackAfterThrowing) {
    try {
      throw e;
    }
    catch (err) {
      // NOTE: Cannot use `err.sourceURL` or `err.fileName` as they will always be THIS script
      stack = err.stack;
    }
  }
  if (stack) {
    var url = getScriptUrlFromStack(stack, skipStackDepth);
    var script = getScriptFromUrl(url, scripts );
    if (!script && pageUrl && url === pageUrl) {
      // Try to find the correct inline script by searching through
      // inline scripts' text content for the caller function's source
      // code to be present. If the caller function's source code is
      // not available, see if there is only one inline script element
      // in the DOM and return that (even though it may be wrong)

      // TODO: Implement!
      // Fixes #4 in part
      // See https://github.com/JamesMGreene/currentExecutingScript/issues/4

      var callerFn = _farthestExecutingScript.caller || null,
          callerFnStack = [],
          callerFnSource = null;

      while (callerFn) {
        callerFnStack.push(callerFn);
        callerFn = callerFn.caller || null;
      }
      callerFn = callerFnStack.slice(-1)[0];
      callerFnSource = callerFn ? ("" + callerFn) : null;


      if (callerFnSource) {
        script = getInlineScriptFromCallerSource(callerFnSource);
      }
      else {
        // NOTE: This is a loose assumption that could be inaccurate!
        //
        // Inaccuracies:
        //  - If the inline script that initiated the call was also removed from the DOM.
        //  - If the call was initiated by an element's inline event handler,
        //    e.g. `<a onclick="(function() { alert(currentExecutingScript()); }()">click</a>`
        script = getSoleInlineScript();
      }
    }
    return script;
  }

  // NOTE: This is a loose assumption that could be inaccurate!
  //
  // Inaccuracies:
  //  - If a script is created dynamically and appended to some position
  //    other than the very end of the document.
  //  - If multiple scripts are created dynamically and all appended to the
  //    same position within the document (and do not have their `async` attributes
  //    set to `false`, at least in browsers that support async script evaluation.
  //    other than the very end of the document.
  //  - If any scripts are added with the `async` attribute set to `true` in a browser
  //    that supports it.
  //  - May get confused by `script` elements within `svg` elements
  return scripts[scripts.length - 1] || null;
*/
}


// Get the originating currently executing (i.e. yes, EXECUTING) `script` DOM
// element or attribute node (e.g. `onclick`) for the caller function,
// regardless of whether it is that `script` DOM element is currently being
// evaluated for the first time. The originating currently executing `script`
// DOM element [or attribute node] is the originator of the current execution stack.
function _originatingExecutingScript() {
  // TODO: Implement!
  // Fixes #2
  // See https://github.com/JamesMGreene/currentExecutingScript/issues/2
  return null;
}

// Get the nearest currently executing (i.e. yes, EXECUTING) `script` DOM
// element for the caller function, regardless of whether it is that `script`
// DOM element is currently being evaluated for the first time.
function _nearestExecutingScript() {
  /*jshint noarg:false */

  // Yes, this IS possible, i.e. if a script removes other scripts (or itself)
  if (scripts.length === 0) {
    return null;
  }

  var i, e, stack, url, script,
      eligibleScripts = [],
      skipStackDepth = _nearestExecutingScript.skipStackDepth || 1,

      // TODO: Implement!
      // Fixes #4 in part
      // See https://github.com/JamesMGreene/currentExecutingScript/issues/4
      callerFnSource = null;  //("" + (_nearestExecutingScript.caller || "")) || null;

  // This part will only help in IE 6-10.
  for (i = 0; i < scripts.length; i++) {
    if (isNotOpera && supportsScriptReadyState) {
      if (scriptReadyRegex.test(scripts[i].readyState)) {
        eligibleScripts.push(scripts[i]);
      }
    }
    else {
      eligibleScripts.push(scripts[i]);
    }
  }

  e = new Error();
  if (hasStackBeforeThrowing) {
    stack = e.stack;
  }
  if (!stack && hasStackAfterThrowing) {
    try {
      throw e;
    }
    catch (err) {
      // NOTE: Cannot use `err.sourceURL` or `err.fileName` as they will always be THIS script
      stack = err.stack;
    }
  }

  if (stack) {
    url = getScriptUrlFromStack(stack, skipStackDepth);
    script = getScriptFromUrl(url, eligibleScripts);

    if (!script && pageUrl && url === pageUrl) {
      // Try to find the correct inline script by searching through
      // inline scripts' text content for the caller function's source
      // code to be present.
      if (callerFnSource) {
        script = getInlineScriptFromCallerSource(callerFnSource, eligibleScripts);
      }
      // If the caller function's source code is not available, see if
      // there is only one inline script element in the DOM and return
      // that (even though it may be wrong)...
      else {
        // NOTE: This is a loose assumption that could be inaccurate!
        //
        // Inaccuracies:
        //  - If the inline script that initiated the call was also removed from the DOM.
        //  - If the call was initiated by an element's inline event handler,
        //    e.g. `<a onclick="(function() { alert(currentExecutingScript()); }()">click</a>`
        script = getSoleInlineScript(eligibleScripts);
      }
    }
  }

  //
  // Welcome to the Island of Inaccurate Assumptions!
  // NOTE: ALL of the following are loose assumptions that could be inaccurate!
  //

  if (!script) {
    // Inaccuracies:
    //  - If the inline script that initiated the call was also removed from the DOM.
    //  - If the call was initiated by an element's inline event handler,
    //    e.g. `<a onclick="(function() { alert(currentExecutingScript()); }()">click</a>`
    if (eligibleScripts.length === 1) {
      script = eligibleScripts[0];
    }
  }

  if (!script) {
    // Inaccuracies:
    //  - If script currently being synchronously evaluated by the parser is the
    //    originator of this call stack but NOT the source script of the caller/invocation
    //    e.g.
    //    ```html
    //    <script id="a">
    //    function getCurrentScriptCallerFn() {
    //      return currentExecutingScript.near();
    //    }
    //    </script>
    //    <script id="b">
    //    // Should get `script[id="a"]` but will get `script[id="b"]` instead
    //    getCurrentScriptCallerFn();
    //    </script>
    if (hasNativeCurrentScriptAccessor) {
      script = document.currentScript;
    }
  }

  if (!script) {
    // Inaccuracies:
    //  - If script currently being synchronously evaluated by the parser is the
    //    originator of this call stack but NOT the source script of the caller/invocation
    //    e.g.
    //    ```html
    //    <script id="a">
    //    function getCurrentScriptCallerFn() {
    //      return currentExecutingScript.near();
    //    }
    //    </script>
    //    <script id="b">
    //    // Should get `script[id="a"]` but will get `script[id="b"]` instead
    //    getCurrentScriptCallerFn();
    //    </script>
    if (isNotOpera && supportsScriptReadyState) {
      for (i = eligibleScripts.length; i--; ) {
        if (eligibleScripts[i].readyState === "interactive") {
          script = eligibleScripts[i];
          break;
        }
      }
    }
  }

  if (!script) {
    // Inaccuracies:
    //  - If a script is created dynamically and appended to some position
    //    other than the very end of the document.
    //  - If multiple scripts are created dynamically and all appended to the
    //    same position within the document (and do not have their `async` attributes
    //    set to `false`, at least in browsers that support async script evaluation.
    //    other than the very end of the document.
    //  - If any scripts are added with the `async` attribute set to `true` in a browser
    //    that supports it.
    //  - May get confused by `script` elements within `svg` elements
    //  - If script currently being synchronously evaluated by the parser is the
    //    originator of this call stack but NOT the source script of the caller/invocation
    //    e.g.
    //    ```html
    //    <script id="a">
    //    function getCurrentScriptCallerFn() {
    //      return currentExecutingScript.near();
    //    }
    //    </script>
    //    <script id="b">
    //    // Should get `script[id="a"]` but will get `script[id="b"]` instead
    //    getCurrentScriptCallerFn();
    //    </script>
    //    ```
    script = eligibleScripts[eligibleScripts.length - 1] || null;
  }

  return script;
}

// Default stack depth to skip over when analyzing call stack frames
_nearestExecutingScript.skipStackDepth = 1;



    //
    // Export the API
    //
    var currentExecutingScript    = _nearestExecutingScript;      // default
    currentExecutingScript.near   = _nearestExecutingScript;
    currentExecutingScript.far    = _farthestExecutingScript;
    currentExecutingScript.origin = _originatingExecutingScript;


    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return currentExecutingScript;
  })
);


/***/ }),

/***/ "../node_modules/preact/compat/dist/compat.module.js":
/*!***********************************************************!*\
  !*** ../node_modules/preact/compat/dist/compat.module.js ***!
  \***********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary, createElement, createContext, createRef, Fragment, Component, default, version, Children, render, hydrate, unmountComponentAtNode, createPortal, createFactory, cloneElement, isValidElement, findDOMNode, PureComponent, memo, forwardRef, unstable_batchedUpdates, Suspense, SuspenseList, lazy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memo", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forwardRef", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspense", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspenseList", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return O; });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ "../node_modules/preact/hooks/dist/hooks.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useErrorBoundary"]; });

/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return preact__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

function E(n,t){for(var e in t)n[e]=t[e];return n}function w(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}var C=function(n){var t,e;function r(t){var e;return(e=n.call(this,t)||this).isPureReactComponent=!0,e}return e=n,(t=r).prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e,r.prototype.shouldComponentUpdate=function(n,t){return w(this.props,n)||w(this.state,t)},r}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);function _(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:w(this.props,n)}function r(t){return this.shouldComponentUpdate=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(n,E({},t))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(n.displayName||n.name)+")",r.t=!0,r}var A=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;function S(n){function t(t){var e=E({},t);return delete e.ref,n(e,t.ref)}return t.prototype.isReactComponent=!0,t.t=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.type&&n.type.t&&n.ref&&(n.props.ref=n.ref,n.ref=null),A&&A(n)};var k=function(n,t){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).map(t):null},F={map:k,forEach:k,count:function(n){return n?Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n).length:0},only:function(n){if(1!==(n=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n)).length)throw new Error("Children.only() expects only one child.");return n[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"]},N=preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e;function R(n){return n&&((n=E({},n)).__c=null,n.__k=n.__k&&n.__k.map(R)),n}function M(n){this.__u=0,this.__b=null}function U(n){var t=n.__.__c;return t&&t.o&&t.o(n)}function O(n){var t,e,r;function o(o){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(e,o)}return o.displayName="Lazy",o.t=!0,o}function j(){this.u=null,this.i=null}preact__WEBPACK_IMPORTED_MODULE_1__["options"].__e=function(n,t,e){if(n.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.l)return r.l(n,t.__c);N(n,t,e)},(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).l=function(n,t){var e=this,r=U(e.__v),o=!1,u=function(){o||(o=!0,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c()};var i=function(){--e.__u||(e.__v.__k[0]=e.state.o,e.setState({o:e.__b=null}))};e.__u++||e.setState({o:e.__b=e.__v.__k[0]}),n.then(u,u)},M.prototype.render=function(n,t){return this.__b&&(this.__v.__k[0]=R(this.__b),this.__b=null),[Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(preact__WEBPACK_IMPORTED_MODULE_1__["Component"],null,t.o?null:n.children),t.o&&n.fallback]};var z=function(n,t,e){if(++e[1]===e[0]&&n.i.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.i.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};(j.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__["Component"]).o=function(n){var t=this,e=U(t.__v),r=t.i.get(n);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),z(t,n,r)):o()};e?e(u):u()}},j.prototype.render=function(n){this.u=null,this.i=new Map;var t=Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.i.set(t[e],this.u=[1,0,this.u]);return n.children},j.prototype.componentDidUpdate=j.prototype.componentDidMount=function(){var n=this;n.i.forEach(function(t,e){z(n,e,t)})};var L=function(){function n(){}var t=n.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(n){return n.children},n}();function P(n){var t=this,e=n.container,r=Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(L,{context:t.context},n.vnode);return t.s&&t.s!==e&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v),t.p=!1),n.vnode?t.p?(e.__k=t.__k,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e),t.__k=e.__k):(t.h=document.createTextNode(""),Object(preact__WEBPACK_IMPORTED_MODULE_1__["hydrate"])("",e),e.appendChild(t.h),t.p=!0,t.s=e,Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(r,e,t.h),t.__k=this.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),Object(preact__WEBPACK_IMPORTED_MODULE_1__["_unmount"])(t.v)},null}function W(n,t){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["createElement"])(P,{vnode:n,container:t})}var D=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;preact__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.isReactComponent={};var T="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function V(n,t,e){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Z(n,t,e)}function Z(n,t,e){return Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(n,t),"function"==typeof e&&e(),n?n.__c:null}var H=preact__WEBPACK_IMPORTED_MODULE_1__["options"].event;function I(n,t){n["UNSAFE_"+t]&&!n[t]&&Object.defineProperty(n,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(n){this["UNSAFE_"+t]=n}})}preact__WEBPACK_IMPORTED_MODULE_1__["options"].event=function(n){return H&&(n=H(n)),n.persist=function(){},n.nativeEvent=n};var $={configurable:!0,get:function(){return this.class}},q=preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode;preact__WEBPACK_IMPORTED_MODULE_1__["options"].vnode=function(n){n.$$typeof=T;var t=n.type,e=n.props;if("function"!=typeof t){var r,o,u;for(u in e.defaultValue&&(e.value||0===e.value||(e.value=e.defaultValue),delete e.defaultValue),Array.isArray(e.value)&&e.multiple&&"select"===t&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["toChildArray"])(e.children).forEach(function(n){-1!=e.value.indexOf(n.props.value)&&(n.props.selected=!0)}),delete e.value),e)if(r=D.test(u))break;if(r)for(u in o=n.props={},e)o[D.test(u)?u.replace(/([A-Z0-9])/,"-$1").toLowerCase():u]=e[u]}(e.class||e.className)&&($.enumerable="className"in e,e.className&&(e.class=e.className),Object.defineProperty(e,"className",$)),function(t){var e=n.type,r=n.props;if(r&&"string"==typeof e){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(I(t.prototype,"componentWillMount"),I(t.prototype,"componentWillReceiveProps"),I(t.prototype,"componentWillUpdate"),t.m=!0),q&&q(n)};var B="16.8.0";function G(n){return preact__WEBPACK_IMPORTED_MODULE_1__["createElement"].bind(null,n)}function J(n){return!!n&&n.$$typeof===T}function K(n){return J(n)?preact__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(null,arguments):n}function Q(n){return!!n.__k&&(Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(null,n),!0)}function X(n){return n&&(n.base||1===n.nodeType&&n)||null}var Y=function(n,t){return n(t)};/* harmony default export */ __webpack_exports__["default"] = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useState"],useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useReducer"],useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useEffect"],useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"],useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useRef"],useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"],useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useMemo"],useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useCallback"],useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useContext"],useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"],version:"16.8.0",Children:F,render:V,hydrate:V,unmountComponentAtNode:Q,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__["createElement"],createContext:preact__WEBPACK_IMPORTED_MODULE_1__["createContext"],createFactory:G,cloneElement:K,createRef:preact__WEBPACK_IMPORTED_MODULE_1__["createRef"],Fragment:preact__WEBPACK_IMPORTED_MODULE_1__["Fragment"],isValidElement:J,findDOMNode:X,Component:preact__WEBPACK_IMPORTED_MODULE_1__["Component"],PureComponent:C,memo:_,forwardRef:S,unstable_batchedUpdates:Y,Suspense:M,SuspenseList:j,lazy:O});
//# sourceMappingURL=compat.module.js.map


/***/ }),

/***/ "../node_modules/preact/dist/preact.module.js":
/*!****************************************************!*\
  !*** ../node_modules/preact/dist/preact.module.js ***!
  \****************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,t,i,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var t,i=arguments,o={};for(t in l)"key"!==t&&"ref"!==t&&(o[t]=l[t]);if(arguments.length>3)for(u=[u],t=3;t<arguments.length;t++)u.push(i[t]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===o[t]&&(o[t]=n.defaultProps[t]);return v(n,o,l&&l.key,l&&l.ref)}function v(l,u,t,i){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function y(n){return n.children}function d(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(k)}function k(){var n,l,t,i,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(t=void 0,i=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(t=[],i=T(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,t,null==r?m(o):r),$(t,o),i!=r&&w(o)))}function _(n,l,u,t,i,o,r,c,s){var h,v,p,y,d,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(y=T(n,u,p=p||f,t,i,o,r,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(v,u.__c||y,u)),null!=y){if(null==w&&(w=y),null!=u.__d)y=u.__d,u.__d=null;else if(o==p||y!=c||null==y.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(y);else{for(d=c,v=0;(d=d.nextSibling)&&v<_;v+=2)if(d==y)break n;n.insertBefore(y,c)}"option"==l.type&&(n.value="")}c=y.nextSibling,"function"==typeof l.type&&(l.__d=y)}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var t=0;t<n.length;t++)b(n[t],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,t,i){var o;for(o in u)o in l||P(n,o,null,u[o],t);for(o in l)i&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],t)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function P(n,l,u,t,i){var o,r,f,e,c;if(i?"className"===l&&(l="class"):"class"===l&&(l="className"),"key"===l||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof t&&(o.cssText="",t=null),t)for(r in t)u&&r in u||C(o,r,"");if(u)for(f in u)t&&u[f]===t[f]||C(o,f,u[f])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(t||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&!i&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function T(l,u,t,i,o,r,f,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new d(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=i,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,P.getDerivedStateFromProps(k,h.__s))),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=t.__e,u.__k=t.__k,h.__h.length&&f.push(h),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w)})}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==y&&null==a.key?a.props.children:a),null!=h.getChildContext&&(i=s(s({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,t,i,o,r,f,e,c),h.base=u.__e,h.__h.length&&f.push(h),g&&(h.__E=h.__=null),h.__e=null}else u.__e=j(t.__e,u,t,i,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,t)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,t,i,o,r,c){var s,a,h,v,p,y=u.props,d=l.props;if(i="svg"===l.type||i,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),y!==d&&n.data!=d&&(n.data=d);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(y=u.props||f).dangerouslySetInnerHTML,v=d.dangerouslySetInnerHTML,!c){if(y===f)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""))}x(n,d,y,i,c),l.__k=l.props.children,v||_(n,l,u,t,"foreignObject"!==l.type&&i,o,r,f,c),c||("value"in d&&void 0!==d.value&&d.value!==n.value&&(n.value=null==d.value?"":d.value),"checked"in d&&void 0!==d.checked&&d.checked!==n.checked&&(n.checked=d.checked))}return n}function z(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function A(l,u,t){var i,o,r;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||z(i,null,u)),t||"function"==typeof l.type||(t=null!=(o=l.__e)),l.__e=l.__d=null,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(r=0;r<i.length;r++)i[r]&&A(i[r],u,t);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,t){var i,r,c;n.__&&n.__(l,u),r=(i=t===o)?null:t&&t.__k||u.__k,l=h(y,null,[l]),c=[],T(u,(i?u:t||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,t&&!i?[t]:r?null:e.slice.call(u.childNodes),c,t||f,i),$(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:"__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var t,i=this;return this.getChildContext||(t=[],this.getChildContext=function(){return l[u.__c]=i,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&t.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){t.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){t.splice(t.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,t;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(t=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(t=!0,u.componentDidCatch(n)),t)return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},d.prototype.render=y,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "../node_modules/preact/hooks/dist/hooks.module.js":
/*!*********************************************************!*\
  !*** ../node_modules/preact/hooks/dist/hooks.module.js ***!
  \*********************************************************/
/*! exports provided: useState, useReducer, useEffect, useLayoutEffect, useRef, useImperativeHandle, useMemo, useCallback, useContext, useDebugValue, useErrorBoundary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useImperativeHandle", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useContext", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebugValue", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useErrorBoundary", function() { return F; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "../node_modules/preact/dist/preact.module.js");
var t,u,r,i=[],o=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,f=preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,c=preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,e=preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;function a(t){preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(u);var r=u.__H||(u.__H={t:[],u:[]});return t>=r.t.length&&r.t.push({}),r.t[t]}function v(n){return m(E,n)}function m(n,r,i){var o=a(t++);return o.__c||(o.__c=u,o.i=[i?i(r):E(void 0,r),function(t){var u=n(o.i[0],t);o.i[0]!==u&&(o.i[0]=u,o.__c.setState({}))}]),o.i}function p(n,r){var i=a(t++);x(i.o,r)&&(i.i=n,i.o=r,u.__H.u.push(i))}function l(n,r){var i=a(t++);x(i.o,r)&&(i.i=n,i.o=r,u.__h.push(i))}function d(n){return y(function(){return{current:n}},[])}function s(n,t,u){l(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function y(n,u){var r=a(t++);return x(r.o,u)?(r.o=u,r.v=n,r.i=n()):r.i}function T(n,t){return y(function(){return n},t)}function w(n){var r=u.context[n.__c];if(!r)return n.__;var i=a(t++);return null==i.i&&(i.i=!0,r.sub(u)),r.props.value}function A(t,u){preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(u?u(t):t)}function F(n){var r=a(t++),i=v();return r.i=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.i&&r.i(n),i[1](n)}),[i[0],function(){i[1](void 0)}]}function _(){i.some(function(n){n.__P&&(n.__H.u.forEach(g),n.__H.u.forEach(q),n.__H.u=[])}),i=[]}function g(n){n.m&&n.m()}function q(n){var t=n.i();"function"==typeof t&&(n.m=t)}function x(n,t){return!n||t.some(function(t,u){return t!==n[u]})}function E(n,t){return"function"==typeof t?t(n):t}preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r=function(n){o&&o(n),t=0,(u=n.__c).__H&&(u.__H.u.forEach(g),u.__H.u.forEach(q),u.__H.u=[])},preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed=function(t){f&&f(t);var u=t.__c;if(u){var o=u.__H;o&&o.u.length&&(1!==i.push(u)&&r===preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);"undefined"!=typeof window&&(t=requestAnimationFrame(u))})(_))}},preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c=function(n,t){t.some(function(n){n.__h.forEach(g),n.__h=n.__h.filter(function(n){return!n.i||q(n)})}),c&&c(n,t)},preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount=function(n){e&&e(n);var t=n.__c;if(t){var u=t.__H;u&&u.t.forEach(function(n){return n.m&&n.m()})}};
//# sourceMappingURL=hooks.module.js.map


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./components/app-item.js":
/*!********************************!*\
  !*** ./components/app-item.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppItem; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AppItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AppItem, _React$Component);

  function AppItem() {
    _classCallCheck(this, AppItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AppItem).apply(this, arguments));
  }

  _createClass(AppItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          onToggle = _this$props.onToggle,
          name = _this$props.name,
          title = _this$props.title,
          description = _this$props.description,
          t = _this$props.t;
      var required = this.props.required || false;
      var optOut = this.props.optOut || false;
      var purposes = this.props.purposes || [];

      var onChange = function onChange(e) {
        onToggle(e.target.checked);
      };

      var id = "app-item-".concat(name);
      var purposesText = purposes.map(function (purpose) {
        return t(['purposes', purpose]);
      }).join(", ");
      var optOutText = optOut ? react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("span", {
        className: "cm-opt-out",
        title: t(['app', 'optOut', 'description'])
      }, t(['app', 'optOut', 'title'])) : '';
      var requiredText = required ? react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("span", {
        className: "cm-required",
        title: t(['app', 'required', 'description'])
      }, t(['app', 'required', 'title'])) : '';
      var purposesContent;
      if (purposes.length > 0) purposesContent = react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("p", {
        className: "purposes"
      }, t(['app', purposes.length > 1 ? 'purposes' : 'purpose']), ": ", purposesText);
      return react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("input", {
        id: id,
        className: "cm-app-input" + (required ? " required" : ""),
        "aria-describedby": "".concat(id, "-description"),
        disabled: required,
        checked: checked || required,
        type: "checkbox",
        onChange: onChange
      }), react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("label", _extends({
        htmlFor: id,
        className: "cm-app-label"
      }, required ? {
        tabIndex: "0"
      } : {}), react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("span", {
        className: "cm-app-title"
      }, title), requiredText, optOutText, react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("span", {
        className: "switch"
      }, react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("div", {
        className: "slider round active"
      }))), react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("div", {
        id: "".concat(id, "-description")
      }, react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("p", {
        className: "cm-app-description"
      }, description || t([name, 'description']))));
    }
  }]);

  return AppItem;
}(react__WEBPACK_IMPORTED_MODULE_15__["default"].Component);



/***/ }),

/***/ "./components/app.js":
/*!***************************!*\
  !*** ./components/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _consent_notice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./consent-notice */ "./components/consent-notice.js");












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      show: props.show > 0 || !props.manager.confirmed
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // props.show is a number that is incremented (so that we can detect
      // repeated calls to the "show" function)
      if (prevProps.show === this.props.show) return;
      var showState = this.props.show > 0 || !this.props.manager.confirmed;
      if (showState !== this.state.show) this.setState({
        show: showState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          config = _this$props.config,
          t = _this$props.t,
          manager = _this$props.manager,
          stylePrefix = _this$props.stylePrefix;
      var show = this.state.show;

      var hide = function hide() {
        _this2.setState({
          show: false
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: stylePrefix
      }, react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_consent_notice__WEBPACK_IMPORTED_MODULE_12__["default"], {
        t: t,
        show: show,
        hide: hide,
        config: config,
        manager: manager
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11__["default"].Component);



/***/ }),

/***/ "./components/apps.js":
/*!****************************!*\
  !*** ./components/apps.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Apps; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _app_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-item */ "./components/app-item.js");
















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Apps =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Apps, _React$Component);

  function Apps(props) {
    var _this;

    _classCallCheck(this, Apps);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Apps).call(this, props));
    props.manager.watch(_assertThisInitialized(_this));
    _this.state = {
      consents: props.manager.consents
    };
    return _this;
  }

  _createClass(Apps, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.manager.unwatch(this);
    }
  }, {
    key: "update",
    value: function update(obj, type, data) {
      if (obj === this.props.manager && type === 'consents') this.setState({
        consents: data
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          config = _this$props.config,
          t = _this$props.t,
          manager = _this$props.manager;
      var consents = this.state.consents;
      var apps = config.apps;

      var toggle = function toggle(apps, value) {
        apps.map(function (app) {
          if (!app.required) {
            manager.updateConsent(app.name, value);
          }
        });
      };

      var toggleAll = function toggleAll(value) {
        toggle(apps, value);
      };

      var appItems = apps.map(function (app) {
        var toggleApp = function toggleApp(value) {
          toggle([app], value);
        };

        var checked = consents[app.name];
        return react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("li", {
          key: app.name,
          className: "cm-app"
        }, react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement(_app_item__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
          checked: checked || app.required,
          onToggle: toggleApp,
          t: t
        }, app)));
      });
      var togglableApps = apps.filter(function (app) {
        return !app.required;
      });
      var allDisabled = togglableApps.filter(function (app) {
        return consents[app.name];
      }).length === 0;
      return react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("ul", {
        className: "cm-apps"
      }, appItems, togglableApps.length > 1 && react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement("li", {
        className: "cm-app cm-toggle-all"
      }, react__WEBPACK_IMPORTED_MODULE_15__["default"].createElement(_app_item__WEBPACK_IMPORTED_MODULE_16__["default"], {
        name: "disableAll",
        title: t(['app', 'disableAll', 'title']),
        description: t(['app', 'disableAll', 'description']),
        checked: !allDisabled,
        onToggle: toggleAll,
        t: t
      })));
    }
  }]);

  return Apps;
}(react__WEBPACK_IMPORTED_MODULE_15__["default"].Component);



/***/ }),

/***/ "./components/consent-modal.js":
/*!*************************************!*\
  !*** ./components/consent-modal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsentModal; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons */ "./components/icons.js");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apps */ "./components/apps.js");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.js");












function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var ConsentModal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConsentModal, _React$Component);

  function ConsentModal(props) {
    var _this;

    _classCallCheck(this, ConsentModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsentModal).call(this, props));
    var manager = props.manager;
    manager.restoreSavedConsents();
    return _this;
  }

  _createClass(ConsentModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hide = _this$props.hide,
          confirming = _this$props.confirming,
          saveAndHide = _this$props.saveAndHide,
          acceptAndHide = _this$props.acceptAndHide,
          declineAndHide = _this$props.declineAndHide,
          config = _this$props.config,
          manager = _this$props.manager,
          t = _this$props.t;
      var lang = config.lang || Object(utils_i18n__WEBPACK_IMPORTED_MODULE_14__["language"])();
      var closeLink;

      if (!config.mustConsent) {
        closeLink = react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("button", {
          title: t(['close']),
          className: "hide",
          type: "button",
          onClick: hide
        }, react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_icons__WEBPACK_IMPORTED_MODULE_12__["Close"], {
          t: t
        }));
      }

      var declineButton;
      if (!config.hideDeclineAll && !manager.confirmed) declineButton = react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("button", {
        disabled: confirming,
        className: "cm-btn cm-btn-decline cm-btn-right cm-btn-sm cm-btn-danger cn-decline",
        type: "button",
        onClick: declineAndHide
      }, t(['decline']));
      var acceptAllButton;
      var acceptButton = react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("button", {
        disabled: confirming,
        className: "cm-btn cm-btn-success cm-btn-info cm-btn-accept",
        type: "button",
        onClick: saveAndHide
      }, t([manager.confirmed ? 'save' : 'acceptSelected']));

      if (config.acceptAll && !manager.confirmed) {
        acceptAllButton = react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("button", {
          disabled: confirming,
          className: "cm-btn cm-btn-success cm-btn-accept-all",
          type: "button",
          onClick: acceptAndHide
        }, t(['acceptAll']));
      }

      var ppUrl = config.privacyPolicy && config.privacyPolicy[lang] || config.privacyPolicy["default"] || config.privacyPolicy;
      var ppLink = react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("a", {
        onClick: hide,
        href: ppUrl
      }, t(['consentModal', 'privacyPolicy', 'name']));
      return react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: "cookie-modal"
      }, react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: "cm-bg",
        onClick: hide
      }), react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: "cm-modal"
      }, react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: "cm-header"
      }, closeLink, react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("h1", {
        className: "title"
      }, t(['consentModal', 'title'])), react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("p", null, t(['consentModal', 'description']), " \xA0")), react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: "cm-body"
      }, react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement(_apps__WEBPACK_IMPORTED_MODULE_13__["default"], {
        t: t,
        config: config,
        manager: manager
      })), react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: "cm-footer"
      }, react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("div", {
        className: "cm-footer-buttons"
      }, declineButton, acceptAllButton), react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("p", {
        className: "cm-powered-by"
      }, t(['consentModal', 'privacyPolicy', 'text'], {
        privacyPolicy: ppLink
      }), " | ", react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("a", {
        target: "_blank",
        href: config.poweredBy || 'https://klaro.kiprotect.com',
        rel: "noopener noreferrer"
      }, t(['poweredBy']))))));
    }
  }]);

  return ConsentModal;
}(react__WEBPACK_IMPORTED_MODULE_11__["default"].Component);



/***/ }),

/***/ "./components/consent-notice.js":
/*!**************************************!*\
  !*** ./components/consent-notice.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsentNotice; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "../node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "../node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.timers */ "../node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _consent_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./consent-modal */ "./components/consent-modal.js");
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/config */ "./utils/config.js");















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ConsentNotice =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConsentNotice, _React$Component);

  function ConsentNotice(props) {
    var _this;

    _classCallCheck(this, ConsentNotice);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConsentNotice).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "executeButtonClicked", function (setChangedAll, changedAllValue) {
      var modal = _this.state.modal;
      if (setChangedAll) _this.props.manager.changeAll(changedAllValue);
      var confirmed = _this.props.manager.confirmed;

      var saveAndHide = function saveAndHide() {
        _this.setState({
          confirming: false
        });

        _this.props.manager.saveAndApplyConsents();

        _this.props.hide();
      };

      if (setChangedAll && !confirmed && (modal || _this.props.config.mustConsent)) {
        _this.setState({
          confirming: true
        });

        setTimeout(saveAndHide, 1000);
      } else saveAndHide();
    });

    _defineProperty(_assertThisInitialized(_this), "saveAndHide", function () {
      _this.executeButtonClicked(false, false);
    });

    _defineProperty(_assertThisInitialized(_this), "acceptAndHide", function () {
      _this.executeButtonClicked(true, true);
    });

    _defineProperty(_assertThisInitialized(_this), "declineAndHide", function () {
      _this.executeButtonClicked(true, false);
    });

    _this.state = {
      modal: false,
      confirming: false
    };
    return _this;
  }

  _createClass(ConsentNotice, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          config = _this$props.config,
          show = _this$props.show,
          manager = _this$props.manager,
          t = _this$props.t,
          hide = _this$props.hide;
      var _this$state = this.state,
          modal = _this$state.modal,
          confirming = _this$state.confirming;
      var purposes = Object(utils_config__WEBPACK_IMPORTED_MODULE_16__["getPurposes"])(config);
      var purposesText = purposes.map(function (purpose) {
        return t(['purposes', purpose]);
      }).join(", ");
      var changesText;

      var showModal = function showModal(e) {
        e.preventDefault();

        _this2.setState({
          modal: true
        });
      };

      var hideModal = function hideModal() {
        if (manager.confirmed) _this2.props.hide();else _this2.setState({
          modal: false
        });
      };

      if (manager.changed) changesText = react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("p", {
        className: "cn-changes"
      }, t(['consentNotice', 'changeDescription']));
      if (!show) return react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("div", null);
      var declineButton = config.hideDeclineAll ? '' : react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("button", {
        className: "cm-btn cm-btn-sm cm-btn-danger cn-decline",
        type: "button",
        onClick: this.declineAndHide
      }, t(['decline']));
      var acceptButton = config.acceptAll ? react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("button", {
        className: "cm-btn cm-btn-sm cm-btn-success",
        type: "button",
        onClick: this.acceptAndHide
      }, t(['acceptAll'])) : react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("button", {
        className: "cm-btn cm-btn-sm cm-btn-success",
        type: "button",
        onClick: this.saveAndHide
      }, t(['ok']));
      var noticeIsVisible = !config.mustConsent && !manager.confirmed && !config.noNotice;
      if (modal || manager.confirmed || !manager.confirmed && config.mustConsent) return react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement(_consent_modal__WEBPACK_IMPORTED_MODULE_15__["default"], {
        t: t,
        confirming: confirming,
        config: config,
        hide: hideModal,
        declineAndHide: this.declineAndHide,
        saveAndHide: this.saveAndHide,
        acceptAndHide: this.acceptAndHide,
        manager: manager
      });
      return react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("div", {
        className: "cookie-modal"
      }, react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("div", {
        className: "cm-bg"
      }), react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("div", {
        className: "cookie-notice ".concat(!noticeIsVisible ? 'cookie-notice-hidden' : '')
      }, react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("div", {
        className: "cn-header"
      }, react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("h1", {
        className: "title"
      }, t(['consentNotice', 'title']))), react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("div", {
        className: "cn-body"
      }, react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("p", null, t(['consentNotice', 'description']), " \xA0"), changesText, react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("p", {
        className: "cn-ok"
      }, acceptButton, declineButton, react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("a", {
        className: "cm-link cm-learn-more",
        href: "#",
        onClick: showModal
      }, t(['consentNotice', 'learnMore']), "...")))));
    }
  }]);

  return ConsentNotice;
}(react__WEBPACK_IMPORTED_MODULE_14__["default"].Component);



/***/ }),

/***/ "./components/icons.js":
/*!*****************************!*\
  !*** ./components/icons.js ***!
  \*****************************/
/*! exports provided: Close */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return Close; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");

var Close = function Close(_ref) {
  var t = _ref.t;
  return react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("svg", {
    role: "img",
    "aria-label": t(['close']),
    width: "12",
    height: "12",
    viewPort: "0 0 12 12",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("title", null, t(['close'])), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("line", {
    x1: "1",
    y1: "11",
    x2: "11",
    y2: "1",
    strokeWidth: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("line", {
    x1: "1",
    y1: "1",
    x2: "11",
    y2: "11",
    strokeWidth: "1"
  }));
};

/***/ }),

/***/ "./consent-manager.js":
/*!****************************!*\
  !*** ./consent-manager.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConsentManager; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "../node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.set */ "../node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! utils/cookies */ "./utils/cookies.js");
/* harmony import */ var stores__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! stores */ "./stores.js");

























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ConsentManager =
/*#__PURE__*/
function () {
  function ConsentManager(config) {
    _classCallCheck(this, ConsentManager);

    this.config = config; // the configuration

    this.store = new stores__WEBPACK_IMPORTED_MODULE_25__["default"][this.storageMethod](this); // we fall back to the cookie-based store if the store is undefined

    if (this.store === undefined) this.store = stores__WEBPACK_IMPORTED_MODULE_25__["default"]['cookie'];
    this.consents = this.defaultConsents; // the consent states of the configured apps

    this.confirmed = false; // true if the user actively confirmed his/her consent

    this.changed = false; // true if the app config changed compared to the cookie

    this.states = {}; // keep track of the change (enabled, disabled) of individual apps

    this.executedOnce = {}; //keep track of which apps have been executed at least once

    this.watchers = new Set([]);
    this.loadConsents();
    this.applyConsents();
    this.savedConsents = _objectSpread({}, this.consents);
  }

  _createClass(ConsentManager, [{
    key: "watch",
    value: function watch(watcher) {
      if (!this.watchers.has(watcher)) this.watchers.add(watcher);
    }
  }, {
    key: "unwatch",
    value: function unwatch(watcher) {
      if (this.watchers.has(watcher)) this.watchers["delete"](watcher);
    }
  }, {
    key: "notify",
    value: function notify(name, data) {
      var _this = this;

      this.watchers.forEach(function (watcher) {
        watcher.update(_this, name, data);
      });
    }
  }, {
    key: "getApp",
    value: function getApp(name) {
      var matchingApps = this.config.apps.filter(function (app) {
        return app.name === name;
      });
      if (matchingApps.length > 0) return matchingApps[0];
      return undefined;
    }
  }, {
    key: "getDefaultConsent",
    value: function getDefaultConsent(app) {
      var consent = app["default"];
      if (consent === undefined) consent = this.config["default"];
      if (consent === undefined) consent = false;
      return consent;
    }
  }, {
    key: "changeAll",
    //don't decline required apps
    value: function changeAll(value) {
      var _this2 = this;

      this.config.apps.map(function (app) {
        if (app.required || _this2.config.required || value) {
          _this2.updateConsent(app.name, true);
        } else {
          _this2.updateConsent(app.name, false);
        }
      });
    }
  }, {
    key: "updateConsent",
    value: function updateConsent(name, value) {
      this.consents[name] = value;
      this.notify('consents', this.consents);
    }
  }, {
    key: "restoreSavedConsents",
    value: function restoreSavedConsents() {
      this.consents = _objectSpread({}, this.savedConsents);
      this.notify('consents', this.consents);
    }
  }, {
    key: "resetConsent",
    value: function resetConsent() {
      this.consents = this.defaultConsents;
      this.confirmed = false;
      this.applyConsents();
      this.store["delete"]();
      this.notify('consents', this.consents);
    }
  }, {
    key: "getConsent",
    value: function getConsent(name) {
      return this.consents[name] || false;
    }
  }, {
    key: "_checkConsents",
    value: function _checkConsents() {
      var complete = true;
      var apps = new Set(this.config.apps.map(function (app) {
        return app.name;
      }));
      var consents = new Set(Object.keys(this.consents));

      for (var _i = 0, _Object$keys = Object.keys(this.consents); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (!apps.has(key)) {
          delete this.consents[key];
        }
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.config.apps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var app = _step.value;

          if (!consents.has(app.name)) {
            this.consents[app.name] = this.getDefaultConsent(app);
            complete = false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.confirmed = complete;
      if (!complete) this.changed = true;
    }
  }, {
    key: "loadConsents",
    value: function loadConsents() {
      var consentData = this.store.get();

      if (consentData !== null) {
        this.consents = JSON.parse(decodeURIComponent(consentData));

        this._checkConsents();

        this.notify('consents', this.consents);
      }

      return this.consents;
    }
  }, {
    key: "saveAndApplyConsents",
    value: function saveAndApplyConsents() {
      this.saveConsents();
      this.applyConsents();
    }
  }, {
    key: "saveConsents",
    value: function saveConsents() {
      var v = encodeURIComponent(JSON.stringify(this.consents));
      this.store.set(v);
      this.confirmed = true;
      this.changed = false;
      this.savedConsents = _objectSpread({}, this.consents);
    }
  }, {
    key: "applyConsents",
    value: function applyConsents() {
      for (var i = 0; i < this.config.apps.length; i++) {
        var app = this.config.apps[i];
        var state = this.states[app.name];
        var optOut = app.optOut !== undefined ? app.optOut : this.config.optOut || false;
        var required = app.required !== undefined ? app.required : this.config.required || false; //opt out and required apps are always treated as confirmed

        var confirmed = this.confirmed || optOut || required;
        var consent = this.getConsent(app.name) && confirmed;
        if (state === consent) continue;
        this.updateAppElements(app, consent);
        this.updateAppCookies(app, consent);
        if (app.callback !== undefined) app.callback(consent, app);
        this.states[app.name] = consent;
      }
    }
  }, {
    key: "updateAppElements",
    value: function updateAppElements(app, consent) {
      // we make sure we execute this app only once if the option is set
      if (consent) {
        if (app.onlyOnce && this.executedOnce[app.name]) return;
        this.executedOnce[app.name] = true;
      }

      var elements = document.querySelectorAll("[data-name='" + app.name + "']");

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var parent = element.parentElement;
        var dataset = element.dataset;
        var type = dataset.type;
        var attrs = ['href', 'src']; //if no consent was given we disable this tracker
        //we remove and add it again to trigger a re-execution

        if (element.tagName === 'SCRIPT') {
          // we create a new script instead of updating the node in
          // place, as the script won't start correctly otherwise
          var newElement = document.createElement('script');

          for (var _i2 = 0, _Object$keys2 = Object.keys(dataset); _i2 < _Object$keys2.length; _i2++) {
            var key = _Object$keys2[_i2];
            newElement.dataset[key] = dataset[key];
          }

          newElement.type = 'text/plain';
          newElement.innerText = element.innerText;
          newElement.text = element.text;
          newElement["class"] = element["class"];
          newElement.style.cssText = element.style;
          newElement.id = element.id;
          newElement.name = element.name;
          newElement.defer = element.defer;
          newElement.async = element.async;

          if (consent) {
            newElement.type = type;
            if (dataset.src !== undefined) newElement.src = dataset.src;
          } //we remove the original element and insert a new one


          parent.insertBefore(newElement, element);
          parent.removeChild(element);
        } else {
          // all other elements (images etc.) are modified in place...
          if (consent) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = attrs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var attr = _step2.value;
                var attrValue = dataset[attr];
                if (attrValue === undefined) continue;
                if (dataset['original' + attr] === undefined) dataset['original' + attr] = element[attr];
                element[attr] = attrValue;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                  _iterator2["return"]();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            if (dataset.title !== undefined) element.title = dataset.title;
            if (dataset.originalDisplay !== undefined) element.style.display = dataset.originalDisplay;
          } else {
            if (dataset.title !== undefined) element.removeAttribute('title');

            if (dataset.hide === "true") {
              if (dataset.originalDisplay === undefined) dataset.originalDisplay = element.style.display;
              element.style.display = 'none';
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = attrs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _attr = _step3.value;
                var _attrValue = dataset[_attr];
                if (_attrValue === undefined) continue;
                if (dataset['original' + _attr] !== undefined) element[_attr] = dataset['original' + _attr];
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
        }
      }
    }
  }, {
    key: "updateAppCookies",
    value: function updateAppCookies(app, consent) {
      if (consent) return;

      function escapeRegexStr(str) {
        return str.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
      }

      if (app.cookies !== undefined && app.cookies.length > 0) {
        var cookies = Object(utils_cookies__WEBPACK_IMPORTED_MODULE_24__["getCookies"])();

        for (var i = 0; i < app.cookies.length; i++) {
          var cookiePattern = app.cookies[i];
          var cookiePath = void 0,
              cookieDomain = void 0;

          if (cookiePattern instanceof Array) {
            var _cookiePattern = cookiePattern;

            var _cookiePattern2 = _slicedToArray(_cookiePattern, 3);

            cookiePattern = _cookiePattern2[0];
            cookiePath = _cookiePattern2[1];
            cookieDomain = _cookiePattern2[2];
          }

          if (!(cookiePattern instanceof RegExp)) {
            cookiePattern = new RegExp('^' + escapeRegexStr(cookiePattern) + '$');
          }

          for (var j = 0; j < cookies.length; j++) {
            var cookie = cookies[j];
            var match = cookiePattern.exec(cookie.name);

            if (match !== null) {
              // eslint-disable-next-line no-console
              console.debug("Deleting cookie:", cookie.name, "Matched pattern:", cookiePattern, "Path:", cookiePath, "Domain:", cookieDomain);
              Object(utils_cookies__WEBPACK_IMPORTED_MODULE_24__["deleteCookie"])(cookie.name, cookiePath, cookieDomain);
            }
          }
        }
      }
    }
  }, {
    key: "storageMethod",
    get: function get() {
      return this.config.storageMethod || 'cookie';
    }
  }, {
    key: "cookieName",
    get: function get() {
      return this.config.cookieName || 'klaro';
    }
  }, {
    key: "cookieDomain",
    get: function get() {
      return this.config.cookieDomain || undefined;
    }
  }, {
    key: "cookieExpiresAfterDays",
    get: function get() {
      return this.config.cookieExpiresAfterDays || 120;
    }
  }, {
    key: "defaultConsents",
    get: function get() {
      var consents = {};

      for (var i = 0; i < this.config.apps.length; i++) {
        var app = this.config.apps[i];
        consents[app.name] = this.getDefaultConsent(app);
      }

      return consents;
    }
  }]);

  return ConsentManager;
}();



/***/ }),

/***/ "./klaro.js":
/*!******************!*\
  !*** ./klaro.js ***!
  \******************/
/*! exports provided: renderKlaro, initialize, getManager, show, version, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderKlaro", function() { return renderKlaro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getManager", function() { return getManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.map */ "../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var components_app_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/app.js */ "./components/app.js");
/* harmony import */ var consent_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! consent-manager */ "./consent-manager.js");
/* harmony import */ var translations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! translations */ "./translations/index.js");
/* harmony import */ var utils_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/maps */ "./utils/maps.js");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "language", function() { return utils_i18n__WEBPACK_IMPORTED_MODULE_11__["language"]; });

/* harmony import */ var current_executing_script__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! current-executing-script */ "../node_modules/current-executing-script/dist/currentExecutingScript.js");
/* harmony import */ var current_executing_script__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(current_executing_script__WEBPACK_IMPORTED_MODULE_12__);







/* globals module, require, VERSION */
// import 'scss/klaro.scss';
// When webpack's hot loading is enabled, enable Preact's support for the
// React Dev Tools browser extension.
if (false) {}








var script = document.currentScript || current_executing_script__WEBPACK_IMPORTED_MODULE_12___default()();
var originalOnLoad = window.onload;
var convertedTranslations = Object(utils_maps__WEBPACK_IMPORTED_MODULE_10__["convertToMap"])(translations__WEBPACK_IMPORTED_MODULE_9__["default"]);
var configName = script.dataset.config || "klaroConfig";
var noAutoLoad = script.dataset.noAutoLoad === "true";
var stylePrefix = script.dataset.stylePrefix || "klaro";
var config = window[configName];
var managers = {};
window.onload = initialize;

if (false) {}

function getElementID(config) {
  return config.elementID || 'klaro';
}

function getElement(config) {
  var id = getElementID(config);
  var element = document.getElementById(id);

  if (element === null) {
    element = document.createElement('div');
    element.id = id;
    document.body.appendChild(element);
  }

  return element;
}

function getTranslations(config) {
  var trans = new Map([]);
  Object(utils_maps__WEBPACK_IMPORTED_MODULE_10__["update"])(trans, convertedTranslations);
  Object(utils_maps__WEBPACK_IMPORTED_MODULE_10__["update"])(trans, Object(utils_maps__WEBPACK_IMPORTED_MODULE_10__["convertToMap"])(config.translations || {}));
  return trans;
}

var cnt = 1;
function renderKlaro(config, show) {
  if (config === undefined) return; // we are using a count here so that we're able to repeatedly open the modal...

  var showCnt = 0;
  if (show) showCnt = cnt++;
  var element = getElement(config);
  var trans = getTranslations(config);
  var manager = getManager(config);
  var lang = config.lang || Object(utils_i18n__WEBPACK_IMPORTED_MODULE_11__["language"])();

  var tt = function tt() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return utils_i18n__WEBPACK_IMPORTED_MODULE_11__["t"].apply(void 0, [trans, lang].concat(args));
  };

  var app = Object(react__WEBPACK_IMPORTED_MODULE_6__["render"])(react__WEBPACK_IMPORTED_MODULE_6__["default"].createElement(components_app_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    t: tt,
    stylePrefix: stylePrefix,
    manager: manager,
    config: config,
    show: showCnt
  }), element);
  return app;
}
function initialize(e) {
  if (!noAutoLoad) renderKlaro(config);

  if (originalOnLoad !== null) {
    originalOnLoad(e);
  }
}
function getManager(conf) {
  conf = conf || config;
  var name = getElementID(conf);
  if (managers[name] === undefined) managers[name] = new consent_manager__WEBPACK_IMPORTED_MODULE_8__["default"](conf);
  return managers[name];
}
function show(conf) {
  conf = conf || config;
  renderKlaro(conf, true);
  return false;
}
function version() {
  return "development";
}


/***/ }),

/***/ "./stores.js":
/*!*******************!*\
  !*** ./stores.js ***!
  \*******************/
/*! exports provided: CookieStore, LocalStorageStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieStore", function() { return CookieStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageStore", function() { return LocalStorageStore; });
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "../node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/cookies */ "./utils/cookies.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CookieStore =
/*#__PURE__*/
function () {
  function CookieStore(manager) {
    _classCallCheck(this, CookieStore);

    this.cookieName = manager.cookieName;
    this.cookieDomain = manager.cookieDomain;
    this.cookieExpiresAfterDays = manager.cookieExpiresAfterDays;
  }

  _createClass(CookieStore, [{
    key: "get",
    value: function get() {
      var cookie = Object(utils_cookies__WEBPACK_IMPORTED_MODULE_1__["getCookie"])(this.cookieName);
      return cookie ? cookie.value : null;
    }
  }, {
    key: "set",
    value: function set(value) {
      return Object(utils_cookies__WEBPACK_IMPORTED_MODULE_1__["setCookie"])(this.cookieName, value, this.cookieExpiresAfterDays, this.cookieDomain);
    }
  }, {
    key: "delete",
    value: function _delete() {
      return Object(utils_cookies__WEBPACK_IMPORTED_MODULE_1__["deleteCookie"])(this.cookieName);
    }
  }]);

  return CookieStore;
}();
var LocalStorageStore =
/*#__PURE__*/
function () {
  function LocalStorageStore(manager) {
    _classCallCheck(this, LocalStorageStore);

    this.key = manager.cookieName;
  }

  _createClass(LocalStorageStore, [{
    key: "get",
    value: function get() {
      return localStorage.getItem(this.key);
    }
  }, {
    key: "set",
    value: function set(value) {
      return localStorage.setItem(this.key, value);
    }
  }, {
    key: "delete",
    value: function _delete() {
      return localStorage.removeItem(this.key);
    }
  }]);

  return LocalStorageStore;
}();
var stores = {
  'cookie': CookieStore,
  'localStorage': LocalStorageStore
};
/* harmony default export */ __webpack_exports__["default"] = (stores);

/***/ }),

/***/ "./translations/ca.yml":
/*!*****************************!*\
  !*** ./translations/ca.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informació que recopilem","description":"Aquí podeu veure i personalitzar la informació que recopilem sobre vós.\n","privacyPolicy":{"name":"política de privadesa","text":"Per a més informació, consulteu la nostra {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.","description":"Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.\n","learnMore":"Saber-ne més"},"ok":"Accepta","save":"Desa","decline":"Rebutja","close":"Tanca","app":{"disableAll":{"title":"Habilita/deshabilita totes les aplicacions","description":"Useu aquest botó per a habilitar o deshabilitar totes les aplicacions."},"optOut":{"title":"(opt-out)","description":"Aquesta aplicació es carrega per defecte, però podeu desactivar-la"},"required":{"title":"(necessària)","description":"Aquesta aplicació es necessita sempre"},"purposes":"Finalitats","purpose":"Finalitat"},"poweredBy":"Funciona amb Klaro!"}

/***/ }),

/***/ "./translations/de.yml":
/*!*****************************!*\
  !*** ./translations/de.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Datenschutzeinstellungen","description":"Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.\n","privacyPolicy":{"name":"Datenschutzerklärung","text":"{privacyPolicy}\n"}},"consentNotice":{"title":"Datenschutzeinstellungen","changeDescription":"Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Auswahl.","description":"Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.\n","learnMore":"Mehr erfahren"},"ok":"OK","save":"Speichern","decline":"Nur essentielle Cookies akzeptieren","close":"Schließen","acceptSelected":"Auswahl speichern","acceptAll":"Allen zustimmen","app":{"disableAll":{"title":"Alle Anwendungen aktivieren/deaktivieren","description":"Nutzen Sie diesen Schalter um alle Apps zu aktivieren/deaktivieren."},"optOut":{"title":"(Opt-Out)","description":"Diese Anwendung wird standardmäßig geladen (Sie können diese aber deaktivieren)"},"required":{"title":"(immer notwendig)","description":"Diese Anwendung wird immer benötigt"},"purposes":"Zwecke","purpose":"Zweck"},"poweredBy":"Realisiert mit Klaro!"}

/***/ }),

/***/ "./translations/el.yml":
/*!*****************************!*\
  !*** ./translations/el.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Πληροφορίες που συλλέγουμε","description":"Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα\n","privacyPolicy":{"name":"Πολιτική Απορρήτου","text":"Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας","description":"Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.\n","learnMore":"Περισσότερα"},"ok":"OK","save":"Αποθήκευση","decline":"Απόρριπτω","close":"Κλείσιμο","app":{"disableAll":{"title":"Για όλες τις εφαρμογές","description":"Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές"},"optOut":{"title":"(μη απαιτούμενο)","description":"Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί"},"required":{"title":"(απαιτούμενο)","description":"Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό"},"purposes":"Σκοποί","purpose":"Σκοπός"},"poweredBy":"Υποστηρίζεται από το Klaro!"}

/***/ }),

/***/ "./translations/en.yml":
/*!*****************************!*\
  !*** ./translations/en.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Information that we collect","description":"Here you can see and customize the information that we collect about you.\n","privacyPolicy":{"name":"privacy policy","text":"To learn more, please read our {privacyPolicy}.\n"}},"consentNotice":{"title":"Information that we collect","changeDescription":"There were changes since your last visit, please update your consent.","description":"We collect and process your personal information for the following purposes: {purposes}.\n","learnMore":"Customize"},"ok":"Accept","save":"Save","decline":"Decline","close":"Close","acceptAll":"Accept all","acceptSelected":"Accept selected","app":{"disableAll":{"title":"Toggle all apps","description":"Use this switch to enable/disable all apps."},"optOut":{"title":"(opt-out)","description":"This app is loaded by default (but you can opt out)"},"required":{"title":"(always required)","description":"This application is always required"},"purposes":"Purposes","purpose":"Purpose"},"poweredBy":"Powered by Klaro!"}

/***/ }),

/***/ "./translations/es.yml":
/*!*****************************!*\
  !*** ./translations/es.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Información que recopilamos","description":"Aquí puede ver y personalizar la información que recopilamos sobre usted.\n","privacyPolicy":{"name":"política de privacidad","text":"Para más información consulte nuestra {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Ha habido cambios desde su última visita, por favor, actualice su consentimiento.","description":"Recopilamos y procesamos su información personal con los siguientes fines: {purposes}.\n","learnMore":"Más información"},"ok":"Aceptar","save":"Guardar","decline":"Rechazar","close":"Cerrar","app":{"disableAll":{"title":"Habilitar/deshabilitar todas las aplicaciones","description":"Use este botón para habilitar o deshabilitar todas las aplicaciones."},"optOut":{"title":"(opt-out)","description":"Esta aplicación se carga de forma predeterminada (pero puede desactivarla)"},"required":{"title":"(necesaria)","description":"Esta aplicación se necesita siempre"},"purposes":"Fines","purpose":"Fin"},"poweredBy":"Powered by Klaro!"}

/***/ }),

/***/ "./translations/fi.yml":
/*!*****************************!*\
  !*** ./translations/fi.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Keräämämme tiedot","description":"Voit tarkastella ja muokata sinusta keräämiämme tietoja.\n","privacyPolicy":{"name":"tietosuojasivultamme","text":"Voit lukea lisätietoja {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.","description":"Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.\n","learnMore":"Lue lisää"},"ok":"Hyväksy","save":"Tallenna","decline":"Hylkää","close":"Sulje","app":{"disableAll":{"title":"Valitse kaikki","description":"Aktivoi kaikki päälle/pois."},"optOut":{"title":"(ladataan oletuksena)","description":"Ladataan oletuksena (mutta voit ottaa sen pois päältä)"},"required":{"title":"(vaaditaan)","description":"Sivusto vaatii tämän aina"},"purposes":"Käyttötarkoitukset","purpose":"Käyttötarkoitus"},"poweredBy":"Palvelun tarjoaa Klaro!"}

/***/ }),

/***/ "./translations/fr.yml":
/*!*****************************!*\
  !*** ./translations/fr.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Les informations que nous collectons","description":"Ici, vous pouvez voir et personnaliser les informations que nous collectons sur vous.\n","privacyPolicy":{"name":"politique de confidentialité","text":"Pour en savoir plus, merci de lire notre {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Des modifications ont eu lieu depuis votre dernière visite, merci de mettre à jour votre consentement.","description":"Nous collectons et traitons vos informations personnelles dans le but suivant : {purposes}.\n","learnMore":"En savoir plus"},"ok":"OK","save":"Sauvegarder","decline":"Refuser","close":"Fermer","app":{"disableAll":{"title":"Changer toutes les options","description":"Utiliser ce bouton pour activer/désactiver toutes les options"},"optOut":{"title":"(opt-out)","description":"Cette application est chargée par défaut (mais vous pouvez la désactiver)"},"required":{"title":"(toujours requis)","description":"Cette application est toujours requise"},"purposes":"Utilisations","purpose":"Utilisation"},"poweredBy":"Propulsé par Klaro!"}

/***/ }),

/***/ "./translations/hr.yml":
/*!*****************************!*\
  !*** ./translations/hr.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informacije koje prikupljamo","description":"Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.\n","privacyPolicy":{"name":"pravila privatnosti","text":"Za više informacije pročitajte naša {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.","description":"Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.\n","learnMore":"Saznajte više"},"ok":"U redu","save":"Spremi","decline":"Odbij","close":"Zatvori","app":{"disableAll":{"title":"Izmeijeni sve","description":"Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom."},"optOut":{"title":"(onemogućite)","description":"Ova aplikacija je učitana automatski (ali je možete onemogućiti)"},"required":{"title":"(obavezna)","description":"Ova aplikacija je uvijek obavezna."},"purposes":"Svrhe","purpose":"Svrha"},"poweredBy":"Pokreće Klaro!"}

/***/ }),

/***/ "./translations/hu.yml":
/*!*****************************!*\
  !*** ./translations/hu.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Információk, amiket gyűjtünk","description":"Itt láthatod és testreszabhatod az rólad gyűjtött információkat.\n","privacyPolicy":{"name":"adatvédelmi irányelveinket","text":"További információért kérjük, olvassd el az {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Az utolsó látogatás óta változások történtek, kérjük, frissítsd a hozzájárulásodat.","description":"Az személyes adataidat összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.\n","learnMore":"Tudj meg többet"},"ok":"Elfogad","save":"Save","decline":"Mentés","close":"Elvet","app":{"disableAll":{"title":"Összes app átkapcsolása","description":"Használd ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához."},"optOut":{"title":"(leiratkozás)","description":"Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)"},"required":{"title":"(mindig kötelező)","description":"Ez az alkalmazás mindig kötelező"},"purposes":"Célok","purpose":"Cél"},"poweredBy":"Powered by Klaro!"}

/***/ }),

/***/ "./translations/index.js":
/*!*******************************!*\
  !*** ./translations/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ca_yml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ca.yml */ "./translations/ca.yml");
/* harmony import */ var _ca_yml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ca_yml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _de_yml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./de.yml */ "./translations/de.yml");
/* harmony import */ var _de_yml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_de_yml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _el_yml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./el.yml */ "./translations/el.yml");
/* harmony import */ var _el_yml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_el_yml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _en_yml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en.yml */ "./translations/en.yml");
/* harmony import */ var _en_yml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_en_yml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _es_yml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./es.yml */ "./translations/es.yml");
/* harmony import */ var _es_yml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_es_yml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fi_yml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fi.yml */ "./translations/fi.yml");
/* harmony import */ var _fi_yml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fi_yml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fr_yml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fr.yml */ "./translations/fr.yml");
/* harmony import */ var _fr_yml__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fr_yml__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hu_yml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hu.yml */ "./translations/hu.yml");
/* harmony import */ var _hu_yml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_hu_yml__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _hr_yml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hr.yml */ "./translations/hr.yml");
/* harmony import */ var _hr_yml__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_hr_yml__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _it_yml__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./it.yml */ "./translations/it.yml");
/* harmony import */ var _it_yml__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_it_yml__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nl_yml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nl.yml */ "./translations/nl.yml");
/* harmony import */ var _nl_yml__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nl_yml__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _no_yml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./no.yml */ "./translations/no.yml");
/* harmony import */ var _no_yml__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_no_yml__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ro_yml__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ro.yml */ "./translations/ro.yml");
/* harmony import */ var _ro_yml__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ro_yml__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sr_yml__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sr.yml */ "./translations/sr.yml");
/* harmony import */ var _sr_yml__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sr_yml__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sr_cyrl_yml__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sr_cyrl.yml */ "./translations/sr_cyrl.yml");
/* harmony import */ var _sr_cyrl_yml__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sr_cyrl_yml__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sv_yml__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sv.yml */ "./translations/sv.yml");
/* harmony import */ var _sv_yml__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sv_yml__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _tr_yml__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tr.yml */ "./translations/tr.yml");
/* harmony import */ var _tr_yml__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_tr_yml__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _pl_yml__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pl.yml */ "./translations/pl.yml");
/* harmony import */ var _pl_yml__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_pl_yml__WEBPACK_IMPORTED_MODULE_17__);
// To create a new translation, add a YAML file with the required entries and
// link it here using the appropriate language code.


















/* harmony default export */ __webpack_exports__["default"] = ({
  ca: _ca_yml__WEBPACK_IMPORTED_MODULE_0___default.a,
  de: _de_yml__WEBPACK_IMPORTED_MODULE_1___default.a,
  el: _el_yml__WEBPACK_IMPORTED_MODULE_2___default.a,
  en: _en_yml__WEBPACK_IMPORTED_MODULE_3___default.a,
  es: _es_yml__WEBPACK_IMPORTED_MODULE_4___default.a,
  fi: _fi_yml__WEBPACK_IMPORTED_MODULE_5___default.a,
  fr: _fr_yml__WEBPACK_IMPORTED_MODULE_6___default.a,
  hu: _hu_yml__WEBPACK_IMPORTED_MODULE_7___default.a,
  hr: _hr_yml__WEBPACK_IMPORTED_MODULE_8___default.a,
  it: _it_yml__WEBPACK_IMPORTED_MODULE_9___default.a,
  nl: _nl_yml__WEBPACK_IMPORTED_MODULE_10___default.a,
  no: _no_yml__WEBPACK_IMPORTED_MODULE_11___default.a,
  ro: _ro_yml__WEBPACK_IMPORTED_MODULE_12___default.a,
  sr: _sr_yml__WEBPACK_IMPORTED_MODULE_13___default.a,
  sr_cyrl: _sr_cyrl_yml__WEBPACK_IMPORTED_MODULE_14___default.a,
  sv: _sv_yml__WEBPACK_IMPORTED_MODULE_15___default.a,
  tr: _tr_yml__WEBPACK_IMPORTED_MODULE_16___default.a,
  pl: _pl_yml__WEBPACK_IMPORTED_MODULE_17___default.a
});

/***/ }),

/***/ "./translations/it.yml":
/*!*****************************!*\
  !*** ./translations/it.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informazioni che raccogliamo","description":"Qui puoi vedere e scegliere le informazioni che raccogliamo su di te.\n","privacyPolicy":{"name":"policy privacy","text":"Per saperne di più, leggi la nostra {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Ci sono stati cambiamenti dalla tua ultima visita, aggiorna il tuo consenso.","description":"Raccogliamo ed elaboriamo le vostre informazioni personali per i seguenti scopi: {purposes}.\n","learnMore":"Scopri di più"},"ok":"OK","save":"Salva","decline":"Rifiuta","close":"Chiudi","app":{"disableAll":{"title":"Cambia per tutte le app","description":"Usa questo interruttore per abilitare/disabilitare tutte le app."},"optOut":{"title":"(opt-out)","description":"Quest'applicazione è caricata di default (ma puoi disattivarla)"},"required":{"title":"(sempre richiesto)","description":"Quest'applicazione è sempre richiesta"},"purposes":"Scopi","purpose":"Scopo"},"poweredBy":"Realizzato da Klaro!"}

/***/ }),

/***/ "./translations/nl.yml":
/*!*****************************!*\
  !*** ./translations/nl.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informatie die we verzamelen","description":"Hier kunt u de informatie bekijken en aanpassen die we over u verzamelen.\n","privacyPolicy":{"name":"privacybeleid","text":"Lees ons privacybeleid voor meer informatie {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Er waren wijzigingen sinds uw laatste bezoek, werk uw voorkeuren bij.","description":"Wij verzamelen en verwerken uw persoonlijke gegevens voor de volgende doeleinden: {purposes}.\n","learnMore":"Lees meer"},"ok":"OK","save":"Opslaan","decline":"Afwijzen","close":"Sluiten","app":{"disableAll":{"title":"Alle opties in/uit schakelen","description":"Gebruik deze schakeloptie om alle apps in/uit te schakelen."},"optOut":{"title":"(afmelden)","description":"Deze app is standaard geladen (maar je kunt je afmelden)"},"required":{"title":"(altijd verplicht)","description":"Deze applicatie is altijd vereist"},"purposes":"Doeleinden","purpose":"Doeleinde"},"poweredBy":"Aangedreven door Klaro!"}

/***/ }),

/***/ "./translations/no.yml":
/*!*****************************!*\
  !*** ./translations/no.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informasjon vi samler inn","description":"Her kan du se og velge hvilken informasjon vi samler inn om deg.\n","privacyPolicy":{"name":"personvernerklæring","text":"For å lære mer, vennligst les vår {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.","description":"Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.\n","learnMore":"Lær mer"},"ok":"OK","save":"Opslaan","decline":"Avslå","app":{"disableAll":{"title":"Bytt alle apper","description":"Bruk denne for å skru av/på alle apper."},"optOut":{"title":"(opt-out)","description":"Denne appen er lastet som standard (men du kan skru det av)"},"required":{"title":"(alltid påkrevd)","description":"Denne applikasjonen er alltid påkrevd"},"purposes":"Årsaker","purpose":"Årsak"},"poweredBy":"Laget med Klaro!"}

/***/ }),

/***/ "./translations/pl.yml":
/*!*****************************!*\
  !*** ./translations/pl.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informacje, które zbieramy","description":"Tutaj możesz zobaczyć i dostosować informacje, które zbieramy o Tobie.\n","privacyPolicy":{"name":"polityka prywatności","text":"Aby dowiedzieć się więcej, przeczytaj naszą {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Nastąpiły zmiany od Twojej ostatniej wizyty, zaktualizuj swoją zgodę.","description":"Zbieramy i przetwarzamy dane osobowe w następujących celach: {purposes}.\n","learnMore":"Dowiedz się więcej"},"ok":"OK","save":"Zapisz","decline":"Rezygnacja","close":"Zamknij","app":{"disableAll":{"title":"Przełącz dla wszystkich aplikacji","description":"Użyj przełącznika, aby włączyć/wyłączyć wszystkie aplikacje."},"optOut":{"title":"(rezygnacja)","description":"Ta aplikacja jest domyślnie ładowana (ale możesz zrezygnować)"},"required":{"title":"(zawsze wymagane)","description":"Ta alikacja jest zawsze wymagana"},"purposes":"Cele","purpose":"Cel"},"poweredBy":"Napędzany przez Klaro!"}

/***/ }),

/***/ "./translations/ro.yml":
/*!*****************************!*\
  !*** ./translations/ro.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informațiile pe care le colectăm","description":"Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.\n","privacyPolicy":{"name":"politica privacy","text":"Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.","description":"Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.\n","learnMore":"Află mai multe"},"ok":"OK","save":"Salvează","decline":"Renunță","app":{"disableAll":{"title":"Comutați între toate aplicațiile","description":"Utilizați acest switch pentru a activa/dezactiva toate aplicațiile."},"optOut":{"title":"(opt-out)","description":"Această aplicație este încărcată în mod implicit (dar puteți renunța)"},"required":{"title":"(întotdeauna necesar)","description":"Această aplicație este întotdeauna necesară"},"purposes":"Scopuri","purpose":"Scop"},"poweredBy":"Realizat de Klaro!"}

/***/ }),

/***/ "./translations/sr.yml":
/*!*****************************!*\
  !*** ./translations/sr.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Informacije koje prikupljamo","description":"Ovde možete videti i podesiti informacije koje prikupljamo o Vama.\n","privacyPolicy":{"name":"politiku privatnosti","text":"Za više informacije pročitajte našu {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.","description":"Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.\n","learnMore":"Saznajte više"},"ok":"U redu","save":"Sačuvaj","decline":"Odbij","close":"Zatvori","app":{"disableAll":{"title":"Izmeni sve","description":"Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom."},"optOut":{"title":"(onesposobite)","description":"Ova aplikacija je učitana automatski (ali je možete onesposobiti)"},"required":{"title":"(neophodna)","description":"Ova aplikacija je uvek neophodna."},"purposes":"Svrhe","purpose":"Svrha"},"poweredBy":"Pokreće Klaro!"}

/***/ }),

/***/ "./translations/sr_cyrl.yml":
/*!**********************************!*\
  !*** ./translations/sr_cyrl.yml ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Информације које прикупљамо","description":"Овде можете видет и подесити информације које прикупљамо о Вама.\n","privacyPolicy":{"name":"политику приватности","text":"За више информација прочитајте нашу {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.","description":"Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n","learnMore":"Сазнајте више"},"ok":"У реду","save":"Сачувај","decline":"Одбиј","close":"Затвори","app":{"disableAll":{"title":"Измени све","description":"Користите овај прекидач да омогућите/онеспособите све апликације одједном."},"optOut":{"title":"(онеспособите)","description":"Ова апликација је учитана аутоматски (али је можете онеспособити)"},"required":{"title":"(неопходна)","description":"Ова апликација је увек неопходна."},"purposes":"Сврхе","purpose":"Сврха"},"poweredBy":"Покреће Кларо!"}

/***/ }),

/***/ "./translations/sv.yml":
/*!*****************************!*\
  !*** ./translations/sv.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Information som vi samlar","description":"Här kan du se och anpassa vilken information vi samlar om dig.\n","privacyPolicy":{"name":"Integritetspolicy","text":"För att veta mer, läs vår {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.","description":"Vi samlar och bearbetar din personliga data i följande syften: {purposes}.\n","learnMore":"Läs mer"},"ok":"OK","save":"Spara","decline":"Avböj","close":"Stäng","app":{"disableAll":{"title":"Ändra för alla appar","description":"Använd detta reglage för att aktivera/avaktivera samtliga appar."},"optOut":{"title":"(Avaktivera)","description":"Den här appen laddas som standardinställning (men du kan avaktivera den)"},"required":{"title":"(Krävs alltid)","description":"Den här applikationen krävs alltid"},"purposes":"Syften","purpose":"Syfte"},"poweredBy":"Körs på Klaro!"}

/***/ }),

/***/ "./translations/tr.yml":
/*!*****************************!*\
  !*** ./translations/tr.yml ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"consentModal":{"title":"Sakladığımız bilgiler","description":"Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.\n","privacyPolicy":{"name":"Gizlilik Politikası","text":"Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun.\n"}},"consentNotice":{"changeDescription":"Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.","description":"Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.\n","learnMore":"Daha fazla bilgi"},"ok":"Tamam","save":"Kaydet","decline":"Reddet","close":"Kapat","app":{"disableAll":{"title":"Tüm uygulamaları aç/kapat","description":"Toplu açma/kapama için bu düğmeyi kullanabilirsin."},"optOut":{"title":"(isteğe bağlı)","description":"Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)"},"required":{"title":"(her zaman gerekli)","description":"Bu uygulama her zaman gerekli"},"purposes":"Amaçlar","purpose":"Amaç"},"poweredBy":"Klaro tarafından geliştirildi!"}

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! exports provided: getPurposes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurposes", function() { return getPurposes; });
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.set */ "../node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);






function getPurposes(config) {
  var purposes = new Set([]);

  for (var i = 0; i < config.apps.length; i++) {
    var appPurposes = config.apps[i].purposes || [];

    for (var j = 0; j < appPurposes.length; j++) {
      purposes.add(appPurposes[j]);
    }
  }

  return Array.from(purposes);
}

/***/ }),

/***/ "./utils/cookies.js":
/*!**************************!*\
  !*** ./utils/cookies.js ***!
  \**************************/
/*! exports provided: getCookies, getCookie, setCookie, deleteCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookies", function() { return getCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);






function getCookies() {
  var cookieStrings = document.cookie.split(";");
  var cookies = [];
  var regex = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$');

  for (var i = 0; i < cookieStrings.length; i++) {
    var cookieStr = cookieStrings[i];
    var match = regex.exec(cookieStr);
    if (match === null) continue;
    cookies.push({
      name: match[1],
      value: match[2]
    });
  }

  return cookies;
}
function getCookie(name) {
  var cookies = getCookies();

  for (var i = 0; i < cookies.length; i++) {
    if (cookies[i].name === name) return cookies[i];
  }

  return null;
} //https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript

function setCookie(name, value, days, domain) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  if (domain !== undefined) {
    expires += '; domain=' + domain;
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function deleteCookie(name, path, domain) {
  var str = name + '=; Max-Age=-99999999;'; // try to delete the cookie without any path and domain

  document.cookie = str;
  str += ' path=' + (path || '/') + ';'; // try to delete the cookie with path

  document.cookie = str;

  if (domain !== undefined) {
    str += ' domain=' + domain + ';'; // try to delete the cookie with domain and path

    document.cookie = str;
  }
}

/***/ }),

/***/ "./utils/i18n.js":
/*!***********************!*\
  !*** ./utils/i18n.js ***!
  \***********************/
/*! exports provided: language, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "../node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.join */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "../node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.map */ "../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "../node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.match */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);




















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var format = function format(str) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var t = _typeof(rest[0]);

  var args;
  if (rest.length === 0) args = {};else args = t === "string" || t === "number" ? Array.prototype.slice.call(rest) : rest[0];
  var splits = [];
  var s = str.toString();

  while (s.length > 0) {
    var m = s.match(/\{(?!\{)([\w\d]+)\}(?!\})/);

    if (m !== null) {
      var left = s.substr(0, m.index);
      s = s.substr(m.index + m[0].length);
      var n = parseInt(m[1]);
      splits.push(left); // eslint-disable-next-line eqeqeq

      if (n != n) {
        // not a number
        splits.push(args[m[1]]);
      } else {
        // a numbered argument
        splits.push(args[n]);
      }
    } else {
      splits.push(s);
      s = "";
    }
  }

  return splits;
};

function language() {
  var lang = ((typeof window.language === "string" ? window.language : null) || document.documentElement.lang || 'en').toLowerCase();
  var regex = new RegExp('^([\\w]+)-([\\w]+)$');
  var result = regex.exec(lang);

  if (result === null) {
    return lang;
  }

  return result[1];
}

function hget(d, key, defaultValue) {
  var kl = key;
  if (!Array.isArray(kl)) kl = [kl];
  var cv = d;

  for (var i = 0; i < kl.length; i++) {
    if (cv === undefined) return defaultValue;
    if (cv instanceof Map) cv = cv.get(kl[i]);else cv = cv[kl[i]];
  }

  if (cv === undefined) return defaultValue;
  return cv;
}

function t(trans, lang, key) {
  var kl = key;
  if (!Array.isArray(kl)) kl = [kl];
  var value = hget(trans, [lang].concat(_toConsumableArray(kl)));

  if (value === undefined) {
    return "[missing translation: ".concat(lang, "/").concat(kl.join("/"), "]");
  }

  for (var _len2 = arguments.length, params = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    params[_key2 - 3] = arguments[_key2];
  }

  if (params.length > 0) return format.apply(void 0, [value].concat(params));
  return value;
}

/***/ }),

/***/ "./utils/maps.js":
/*!***********************!*\
  !*** ./utils/maps.js ***!
  \***********************/
/*! exports provided: convertToMap, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToMap", function() { return convertToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.map */ "../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);









function convertToMap(d) {
  var dm = new Map([]);

  for (var _i = 0, _Object$keys = Object.keys(d); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    var value = d[key];
    if (!(typeof key === 'string')) continue;

    if (typeof value === 'string') {
      dm.set(key, value);
    } else {
      dm.set(key, convertToMap(value));
    }
  }

  return dm;
}
function update(d, ed, overwrite, clone) {
  var assign = function assign(d, key, value) {
    if (value instanceof Map) {
      var map = new Map([]); //we deep-clone the map

      update(map, value, true, false);
      d.set(key, map);
    } else d.set(key, value);
  };

  if (!(ed instanceof Map) || !(d instanceof Map)) throw new Error("Parameters are not maps!");
  if (overwrite === undefined) overwrite = true;
  if (clone === undefined) clone = false;
  if (clone) d = new d.constructor(d);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = ed.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      var value = ed.get(key);
      var dvalue = d.get(key);

      if (!d.has(key)) {
        assign(d, key, value);
      } else if (value instanceof Map && dvalue instanceof Map) {
        d.set(key, update(dvalue, value, overwrite, clone));
      } else {
        if (!overwrite) continue;
        assign(d, key, value);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return d;
}

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./klaro.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\www\klaro\src/klaro.js */"./klaro.js");


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbGFyby93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8va2xhcm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZyZWV6aW5nLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jdXJyZW50LWV4ZWN1dGluZy1zY3JpcHQvZGlzdC9jdXJyZW50RXhlY3V0aW5nU2NyaXB0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9hcHAtaXRlbS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL2NvbXBvbmVudHMvYXBwLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9hcHBzLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9jb25zZW50LW1vZGFsLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9jb25zZW50LW5vdGljZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL2NvbXBvbmVudHMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi9jb25zZW50LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi9rbGFyby5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3N0b3Jlcy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9jYS55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvZGUueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2VsLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9lbi55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvZXMueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2ZpLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9mci55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvaHIueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2h1LnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9pdC55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvbmwueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL25vLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9wbC55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvcm8ueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL3NyLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9zcl9jeXJsLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9zdi55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvdHIueW1sIiwid2VicGFjazovL2tsYXJvLy4vdXRpbHMvY29uZmlnLmpzIiwid2VicGFjazovL2tsYXJvLy4vdXRpbHMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3V0aWxzL2kxOG4uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi91dGlscy9tYXBzLmpzIl0sIm5hbWVzIjpbIkFwcEl0ZW0iLCJwcm9wcyIsImNoZWNrZWQiLCJvblRvZ2dsZSIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidCIsInJlcXVpcmVkIiwib3B0T3V0IiwicHVycG9zZXMiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsInB1cnBvc2VzVGV4dCIsIm1hcCIsInB1cnBvc2UiLCJqb2luIiwib3B0T3V0VGV4dCIsInJlcXVpcmVkVGV4dCIsInB1cnBvc2VzQ29udGVudCIsImxlbmd0aCIsInRhYkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJBcHAiLCJzdGF0ZSIsInNob3ciLCJtYW5hZ2VyIiwiY29uZmlybWVkIiwicHJldlByb3BzIiwic2hvd1N0YXRlIiwic2V0U3RhdGUiLCJjb25maWciLCJzdHlsZVByZWZpeCIsImhpZGUiLCJBcHBzIiwid2F0Y2giLCJjb25zZW50cyIsInVud2F0Y2giLCJvYmoiLCJ0eXBlIiwiZGF0YSIsImFwcHMiLCJ0b2dnbGUiLCJ2YWx1ZSIsImFwcCIsInVwZGF0ZUNvbnNlbnQiLCJ0b2dnbGVBbGwiLCJhcHBJdGVtcyIsInRvZ2dsZUFwcCIsInRvZ2dsYWJsZUFwcHMiLCJmaWx0ZXIiLCJhbGxEaXNhYmxlZCIsIkNvbnNlbnRNb2RhbCIsInJlc3RvcmVTYXZlZENvbnNlbnRzIiwiY29uZmlybWluZyIsInNhdmVBbmRIaWRlIiwiYWNjZXB0QW5kSGlkZSIsImRlY2xpbmVBbmRIaWRlIiwibGFuZyIsImxhbmd1YWdlIiwiY2xvc2VMaW5rIiwibXVzdENvbnNlbnQiLCJkZWNsaW5lQnV0dG9uIiwiaGlkZURlY2xpbmVBbGwiLCJhY2NlcHRBbGxCdXR0b24iLCJhY2NlcHRCdXR0b24iLCJhY2NlcHRBbGwiLCJwcFVybCIsInByaXZhY3lQb2xpY3kiLCJwcExpbmsiLCJwb3dlcmVkQnkiLCJDb25zZW50Tm90aWNlIiwic2V0Q2hhbmdlZEFsbCIsImNoYW5nZWRBbGxWYWx1ZSIsIm1vZGFsIiwiY2hhbmdlQWxsIiwic2F2ZUFuZEFwcGx5Q29uc2VudHMiLCJzZXRUaW1lb3V0IiwiZXhlY3V0ZUJ1dHRvbkNsaWNrZWQiLCJnZXRQdXJwb3NlcyIsImNoYW5nZXNUZXh0Iiwic2hvd01vZGFsIiwicHJldmVudERlZmF1bHQiLCJoaWRlTW9kYWwiLCJjaGFuZ2VkIiwibm90aWNlSXNWaXNpYmxlIiwibm9Ob3RpY2UiLCJDbG9zZSIsIkNvbnNlbnRNYW5hZ2VyIiwic3RvcmUiLCJzdG9yZXMiLCJzdG9yYWdlTWV0aG9kIiwidW5kZWZpbmVkIiwiZGVmYXVsdENvbnNlbnRzIiwic3RhdGVzIiwiZXhlY3V0ZWRPbmNlIiwid2F0Y2hlcnMiLCJTZXQiLCJsb2FkQ29uc2VudHMiLCJhcHBseUNvbnNlbnRzIiwic2F2ZWRDb25zZW50cyIsIndhdGNoZXIiLCJoYXMiLCJhZGQiLCJmb3JFYWNoIiwidXBkYXRlIiwibWF0Y2hpbmdBcHBzIiwiY29uc2VudCIsIm5vdGlmeSIsImNvbXBsZXRlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImdldERlZmF1bHRDb25zZW50IiwiY29uc2VudERhdGEiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfY2hlY2tDb25zZW50cyIsInNhdmVDb25zZW50cyIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnkiLCJzZXQiLCJpIiwiZ2V0Q29uc2VudCIsInVwZGF0ZUFwcEVsZW1lbnRzIiwidXBkYXRlQXBwQ29va2llcyIsImNhbGxiYWNrIiwib25seU9uY2UiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZGF0YXNldCIsImF0dHJzIiwidGFnTmFtZSIsIm5ld0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwidGV4dCIsInN0eWxlIiwiY3NzVGV4dCIsImRlZmVyIiwiYXN5bmMiLCJzcmMiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImF0dHIiLCJhdHRyVmFsdWUiLCJvcmlnaW5hbERpc3BsYXkiLCJkaXNwbGF5IiwicmVtb3ZlQXR0cmlidXRlIiwiZXNjYXBlUmVnZXhTdHIiLCJzdHIiLCJyZXBsYWNlIiwiY29va2llcyIsImdldENvb2tpZXMiLCJjb29raWVQYXR0ZXJuIiwiY29va2llUGF0aCIsImNvb2tpZURvbWFpbiIsIkFycmF5IiwiUmVnRXhwIiwiaiIsImNvb2tpZSIsIm1hdGNoIiwiZXhlYyIsImNvbnNvbGUiLCJkZWJ1ZyIsImRlbGV0ZUNvb2tpZSIsImNvb2tpZU5hbWUiLCJjb29raWVFeHBpcmVzQWZ0ZXJEYXlzIiwibW9kdWxlIiwicmVxdWlyZSIsInNjcmlwdCIsImN1cnJlbnRTY3JpcHQiLCJjdXJyZW50RXhlY3V0aW5nU2NyaXB0Iiwib3JpZ2luYWxPbkxvYWQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjb252ZXJ0ZWRUcmFuc2xhdGlvbnMiLCJjb252ZXJ0VG9NYXAiLCJ0cmFuc2xhdGlvbnMiLCJjb25maWdOYW1lIiwibm9BdXRvTG9hZCIsIm1hbmFnZXJzIiwiaW5pdGlhbGl6ZSIsImdldEVsZW1lbnRJRCIsImVsZW1lbnRJRCIsImdldEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdldFRyYW5zbGF0aW9ucyIsInRyYW5zIiwiTWFwIiwiY250IiwicmVuZGVyS2xhcm8iLCJzaG93Q250IiwiZ2V0TWFuYWdlciIsInR0IiwiYXJncyIsInJlbmRlciIsImNvbmYiLCJ2ZXJzaW9uIiwiVkVSU0lPTiIsIkNvb2tpZVN0b3JlIiwiZ2V0Q29va2llIiwic2V0Q29va2llIiwiTG9jYWxTdG9yYWdlU3RvcmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJjYSIsImRlIiwiZWwiLCJlbiIsImVzIiwiZmkiLCJmciIsImh1IiwiaHIiLCJpdCIsIm5sIiwibm8iLCJybyIsInNyIiwic3JfY3lybCIsInN2IiwidHIiLCJwbCIsImFwcFB1cnBvc2VzIiwiZnJvbSIsImNvb2tpZVN0cmluZ3MiLCJzcGxpdCIsInJlZ2V4IiwiY29va2llU3RyIiwicHVzaCIsImRheXMiLCJkb21haW4iLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwicGF0aCIsImZvcm1hdCIsInJlc3QiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJzcGxpdHMiLCJzIiwidG9TdHJpbmciLCJtIiwibGVmdCIsInN1YnN0ciIsImluZGV4IiwibiIsInBhcnNlSW50IiwiZG9jdW1lbnRFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJyZXN1bHQiLCJoZ2V0IiwiZCIsImRlZmF1bHRWYWx1ZSIsImtsIiwiaXNBcnJheSIsImN2IiwicGFyYW1zIiwiZG0iLCJlZCIsIm92ZXJ3cml0ZSIsImNsb25lIiwiYXNzaWduIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsImR2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQ0FBaUMsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQ0FBaUMsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQ0FBaUMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxLQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1ZSxnQkFBZ0IseUJBQXlCLFNBQVMsZ0JBQWdCLHFEQUFxRCx1REFBdUQsU0FBUyxrQkFBa0IsUUFBUSxjQUFjLE1BQU0seURBQXlELDhJQUE4SSx3Q0FBd0MsR0FBRyxDQUFDLGdEQUFDLEVBQUUsZ0JBQWdCLGNBQWMsZ0NBQWdDLG9GQUFvRixjQUFjLG9DQUFvQyw0REFBQyxPQUFPLEtBQUssa0dBQWtHLE1BQU0sOENBQUMsT0FBTyxjQUFjLGNBQWMsVUFBVSxJQUFJLCtCQUErQix3R0FBd0csOENBQUMsbUJBQW1CLGlFQUFpRSxvQkFBb0IsU0FBUywyREFBQyxnQkFBZ0IsSUFBSSxrQ0FBa0MsU0FBUywyREFBQyxhQUFhLGtCQUFrQixVQUFVLDJEQUFDLHVFQUF1RSxZQUFZLFNBQVMsbURBQUMsQ0FBQyxHQUFHLDhDQUFDLEtBQUssY0FBYyxrQkFBa0IsMkNBQTJDLGNBQWMseUJBQXlCLGNBQWMsZUFBZSxzQkFBc0IsY0FBYyxVQUFVLGNBQWMsK0JBQStCLGVBQWUsYUFBYSxJQUFJLFlBQVksY0FBYyxPQUFPLDREQUFDLE1BQU0scUNBQXFDLGFBQWEsd0JBQXdCLDhDQUFDLHFCQUFxQix3QkFBd0IsT0FBTyx1Q0FBdUMsU0FBUyxrQkFBa0IsZ0RBQUMsa0JBQWtCLHdDQUF3QyxzQkFBc0IsK0RBQStELG9CQUFvQixpQkFBaUIsNkNBQTZDLGFBQWEsSUFBSSxxQkFBcUIscUJBQXFCLGNBQWMsa0NBQWtDLDhEQUE4RCw0REFBQyxDQUFDLGdEQUFDLDZDQUE2QyxzQkFBc0IseUdBQXlHLEVBQUUsRUFBRSxLQUFLLFdBQVcsV0FBVyxtQkFBbUIsYUFBYSxpQkFBaUIsZ0RBQUMsZ0JBQWdCLG1DQUFtQywwQkFBMEIsaUJBQWlCLDhDQUE4QyxZQUFZLGdDQUFnQywyQkFBMkIsTUFBTSwyREFBQyxhQUFhLG1EQUFtRCxtQkFBbUIsSUFBSSxzQ0FBc0Msa0JBQWtCLHlFQUF5RSxXQUFXLDBCQUEwQixTQUFTLEdBQUcsaUJBQWlCLGNBQWMsa0JBQWtCLG9DQUFvQywwQkFBMEIsc0JBQXNCLGtCQUFrQixHQUFHLEdBQUcsY0FBYywyQkFBMkIsNERBQUMsSUFBSSxrQkFBa0IsVUFBVSwyREFBMkQsdURBQUMsdUNBQXVDLHFEQUFDLG9EQUFvRCxzREFBQyx1Q0FBdUMscURBQUMsdUVBQXVFLHVEQUFDLCtDQUErQyxxQ0FBcUMsdURBQUMsTUFBTSxNQUFNLGdCQUFnQixPQUFPLDREQUFDLElBQUksb0JBQW9CLEVBQUUsd01BQXdNLGdEQUFDLCtCQUErQixpRkFBaUYsa0JBQWtCLG9CQUFvQixhQUFhLDZCQUE2QixnQkFBZ0Isa0JBQWtCLE9BQU8scURBQUMsNkNBQTZDLE1BQU0sOENBQUMsT0FBTyxnQkFBZ0Isa0RBQWtELCtCQUErQix5QkFBeUIsaUJBQWlCLHFCQUFxQixFQUFFLDhDQUFDLG1CQUFtQix5Q0FBeUMsa0JBQWtCLE9BQU8sK0JBQStCLG1CQUFtQixHQUFHLDhDQUFDLE9BQU8sOENBQUMsbUJBQW1CLGFBQWEsdUJBQXVCLHlCQUF5QixVQUFVLG1KQUFtSiwyREFBQyxpQ0FBaUMsMERBQTBELHlDQUF5QywwQkFBMEIsbUVBQW1FLDZJQUE2SSx1QkFBdUIsMEJBQTBCLFNBQVMsc0dBQXNHLHVQQUF1UCwyQkFBMkIsa0RBQWtELGtMQUFrTCxlQUFlLGNBQWMsT0FBTyxvREFBQyxjQUFjLGNBQWMsMEJBQTBCLGNBQWMsWUFBWSxtREFBQyx5QkFBeUIsY0FBYyxnQkFBZ0IscURBQUMsYUFBYSxjQUFjLDRDQUE0QyxvQkFBb0IsYUFBMkIsZ0VBQUMsU0FBUyxxREFBQyxZQUFZLHVEQUFDLFdBQVcsc0RBQUMsaUJBQWlCLDREQUFDLFFBQVEsbURBQUMscUJBQXFCLGdFQUFDLFNBQVMsb0RBQUMsYUFBYSx3REFBQyxZQUFZLHVEQUFDLGVBQWUsMERBQUMsc0dBQXNHLG9EQUFDLGVBQWUsb0RBQUMsMENBQTBDLGdEQUFDLFVBQVUsK0NBQUMsMENBQTBDLGdEQUFDLGdHQUFnRyxFQUF5UztBQUNqZ087Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXNCLHNFQUFzRSxnQkFBZ0IseUJBQXlCLFNBQVMsY0FBYyxtQkFBbUIsb0JBQW9CLGtCQUFrQix1QkFBdUIsNkNBQTZDLG9DQUFvQyxtQkFBbUIsaUJBQWlCLHNJQUFzSSxnQ0FBZ0Msb0JBQW9CLE9BQU8saUdBQWlHLDZCQUE2QixhQUFhLFNBQVMsY0FBYyxrQkFBa0IsZ0JBQWdCLDRCQUE0QixnQkFBZ0IsMERBQTBELFVBQVUsZUFBZSxvREFBb0QsMENBQTBDLGNBQWMsUUFBUSxnQ0FBZ0MsOEJBQThCLGVBQWUsd0NBQXdDLHVCQUF1QixNQUFNLGFBQWEsY0FBYyw4RkFBOEYsYUFBYSxrQkFBa0IseUJBQXlCLDJCQUEyQixFQUFFLFVBQVUsNEVBQTRFLGdGQUFnRiw4QkFBOEIsMkNBQTJDLHNFQUFzRSxZQUFZLHNGQUFzRixhQUFhLElBQUksS0FBSyw0Q0FBNEMsWUFBWSxNQUFNLE9BQU8sMEhBQTBILGlEQUFpRCx3Q0FBd0MsZ0RBQWdELEtBQUssWUFBWSx1QkFBdUIscUJBQXFCLG9CQUFvQiwrQkFBK0Isc0RBQXNELGFBQWEsNERBQTRELElBQUkscUJBQXFCLFFBQVEsSUFBSSwwQkFBMEIsYUFBYSxXQUFXLDBCQUEwQixrQkFBa0IsbUVBQW1FLHFDQUFxQyxXQUFXLGdCQUFnQix1SUFBdUksU0FBUyxzQkFBc0IsTUFBTSxzQ0FBc0MsbUdBQW1HLGtCQUFrQiwwRkFBMEYsc0JBQXNCLGNBQWMsMEZBQTBGLGdFQUFnRSxLQUFLLCtFQUErRSw0Q0FBNEMsc0pBQXNKLCtaQUErWixjQUFjLHFDQUFxQyw4QkFBOEIsaUNBQWlDLHNDQUFzQyxnQkFBZ0IsSUFBSSwyQkFBMkIseVBBQXlQLHNJQUFzSSw2TkFBNk4sS0FBSyxnTUFBZ00saUdBQWlHLGVBQWUsOEJBQThCLFFBQVEsZ0hBQWdILDRCQUE0QixFQUFFLGlOQUFpTiwyTEFBMkwsa0NBQWtDLG1CQUFtQixTQUFTLGFBQWEsYUFBYSxnQkFBZ0IscUNBQXFDLElBQUksb0NBQW9DLFVBQVUsRUFBRSxTQUFTLGdCQUFnQixFQUFFLDRCQUE0QixrQ0FBa0MsZ0RBQWdELFdBQVcsNEVBQTRFLGNBQWMsTUFBTSxZQUFZLG1EQUFtRCx3R0FBd0csOEVBQThFLGVBQWUsb0hBQW9ILGlCQUFpQixLQUFLLHNCQUFzQixrREFBa0Qsa0VBQWtFLGdRQUFnUSxTQUFTLGtCQUFrQixJQUFJLHNDQUFzQyxTQUFTLFlBQVksa0JBQWtCLFVBQVUsc0tBQXNLLDhCQUE4Qix5QkFBeUIsU0FBUyxXQUFXLGtCQUFrQixtQkFBbUIsV0FBVyxzQkFBc0IsY0FBYyxrQkFBa0IsNkJBQTZCLGtCQUFrQixVQUFVLDBMQUEwTCxnQkFBZ0IsU0FBUyxnQkFBZ0IsZUFBZSw4R0FBOEcsY0FBYyxRQUFRLElBQUksMkNBQTJDLHFCQUFxQixzQkFBc0IsYUFBYSxtRUFBbUUsb0JBQW9CLHdDQUF3QyxzQ0FBc0MsdUJBQXVCLEVBQUUsc0JBQXNCLFVBQVUsNkJBQTZCLGtDQUFrQyx1Q0FBdUMsZUFBZSxrQ0FBa0MsR0FBRyxrQkFBa0IsWUFBWSxPQUFPLHlCQUF5QiwwTUFBME0sU0FBUyxJQUFJLFNBQVMsZUFBZSx1Q0FBdUMsb0NBQW9DLE1BQU0sOENBQThDLDhIQUE4SCxxQ0FBcUMsb0RBQW9ELDBIQUFrVTtBQUM1N1I7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQyxpQkFBaUIsOENBQUMsT0FBTyw4Q0FBQyxVQUFVLDhDQUFDLE9BQU8sOENBQUMsU0FBUyxjQUFjLDhDQUFDLE1BQU0sOENBQUMsUUFBUSxxQkFBcUIsVUFBVSxFQUFFLGlDQUFpQyxTQUFTLGNBQWMsY0FBYyxrQkFBa0IsYUFBYSwyREFBMkQsa0JBQWtCLHVDQUF1QyxHQUFHLE9BQU8sZ0JBQWdCLGFBQWEsd0NBQXdDLGdCQUFnQixhQUFhLHNDQUFzQyxjQUFjLG9CQUFvQixPQUFPLFdBQVcsS0FBSyxrQkFBa0IsYUFBYSwrQ0FBK0Msd0JBQXdCLGdCQUFnQixhQUFhLDBDQUEwQyxnQkFBZ0Isb0JBQW9CLFNBQVMsSUFBSSxjQUFjLHVCQUF1QixrQkFBa0IsYUFBYSxrREFBa0QsZ0JBQWdCLDhDQUFDLGdCQUFnQiw4Q0FBQyx5QkFBeUIsY0FBYyxtQkFBbUIsbUVBQW1FLG9CQUFvQixtQkFBbUIsYUFBYSxFQUFFLGFBQWEsbUJBQW1CLDBEQUEwRCxPQUFPLGNBQWMsV0FBVyxjQUFjLFlBQVksOEJBQThCLGdCQUFnQiwrQkFBK0IsZ0JBQWdCLEVBQUUsZ0JBQWdCLGtDQUFrQyw4Q0FBQyxpQkFBaUIsOEVBQThFLENBQUMsOENBQUMsb0JBQW9CLFFBQVEsWUFBWSxNQUFNLFlBQVksbUNBQW1DLDhDQUFDLDRCQUE0Qiw4Q0FBQyxxQ0FBcUMsbUJBQW1CLHNEQUFzRCxxQkFBcUIseURBQXlELE9BQU8sQ0FBQyw4Q0FBQyxtQkFBbUIsbUJBQW1CLGdEQUFnRCxpQkFBaUIsRUFBRSxZQUFZLENBQUMsOENBQUMscUJBQXFCLFFBQVEsWUFBWSxNQUFNLFlBQVksMkJBQTJCLGtCQUFrQixJQUEwTTtBQUNudEU7Ozs7Ozs7Ozs7OztBQ0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7NkJBRVQ7QUFBQSx3QkFDcUQsS0FBS0MsS0FEMUQ7QUFBQSxVQUNHQyxPQURILGVBQ0dBLE9BREg7QUFBQSxVQUNZQyxRQURaLGVBQ1lBLFFBRFo7QUFBQSxVQUNzQkMsSUFEdEIsZUFDc0JBLElBRHRCO0FBQUEsVUFDNEJDLEtBRDVCLGVBQzRCQSxLQUQ1QjtBQUFBLFVBQ21DQyxXQURuQyxlQUNtQ0EsV0FEbkM7QUFBQSxVQUNnREMsQ0FEaEQsZUFDZ0RBLENBRGhEO0FBRUosVUFBTUMsUUFBUSxHQUFHLEtBQUtQLEtBQUwsQ0FBV08sUUFBWCxJQUF1QixLQUF4QztBQUNBLFVBQU1DLE1BQU0sR0FBRyxLQUFLUixLQUFMLENBQVdRLE1BQVgsSUFBcUIsS0FBcEM7QUFDQSxVQUFNQyxRQUFRLEdBQUcsS0FBS1QsS0FBTCxDQUFXUyxRQUFYLElBQXVCLEVBQXhDOztBQUNBLFVBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUNwQlQsZ0JBQVEsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVNYLE9BQVYsQ0FBUjtBQUNILE9BRkQ7O0FBR0EsVUFBTVksRUFBRSxzQkFBZVYsSUFBZixDQUFSO0FBQ0EsVUFBTVcsWUFBWSxHQUFHTCxRQUFRLENBQUNNLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsZUFBYVYsQ0FBQyxDQUFDLENBQUMsVUFBRCxFQUFhVSxPQUFiLENBQUQsQ0FBZDtBQUFBLE9BQWIsRUFBb0RDLElBQXBELENBQXlELElBQXpELENBQXJCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHVixNQUFNLEdBQUc7QUFBTSxpQkFBUyxFQUFDLFlBQWhCO0FBQTZCLGFBQUssRUFBRUYsQ0FBQyxDQUFDLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsYUFBbEIsQ0FBRDtBQUFyQyxTQUEwRUEsQ0FBQyxDQUFDLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsT0FBbEIsQ0FBRCxDQUEzRSxDQUFILEdBQXFILEVBQTlJO0FBQ0EsVUFBTWEsWUFBWSxHQUFHWixRQUFRLEdBQUc7QUFBTSxpQkFBUyxFQUFDLGFBQWhCO0FBQThCLGFBQUssRUFBRUQsQ0FBQyxDQUFDLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsYUFBcEIsQ0FBRDtBQUF0QyxTQUE2RUEsQ0FBQyxDQUFDLENBQUMsS0FBRCxFQUFRLFVBQVIsRUFBb0IsT0FBcEIsQ0FBRCxDQUE5RSxDQUFILEdBQTBILEVBQXZKO0FBRUEsVUFBSWMsZUFBSjtBQUNBLFVBQUlYLFFBQVEsQ0FBQ1ksTUFBVCxHQUFrQixDQUF0QixFQUNJRCxlQUFlLEdBQUc7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FBeUJkLENBQUMsQ0FBQyxDQUFDLEtBQUQsRUFBUUcsUUFBUSxDQUFDWSxNQUFULEdBQWtCLENBQWxCLEdBQXNCLFVBQXRCLEdBQW1DLFNBQTNDLENBQUQsQ0FBMUIsUUFBcUZQLFlBQXJGLENBQWxCO0FBRUosYUFBTywwRUFDSDtBQUFPLFVBQUUsRUFBRUQsRUFBWDtBQUFlLGlCQUFTLEVBQUUsa0JBQWdCTixRQUFRLEdBQUcsV0FBSCxHQUFpQixFQUF6QyxDQUExQjtBQUF3RSxzQ0FBcUJNLEVBQXJCLGlCQUF4RTtBQUErRyxnQkFBUSxFQUFFTixRQUF6SDtBQUFtSSxlQUFPLEVBQUVOLE9BQU8sSUFBSU0sUUFBdko7QUFBaUssWUFBSSxFQUFDLFVBQXRLO0FBQWlMLGdCQUFRLEVBQUVHO0FBQTNMLFFBREcsRUFFSDtBQUFPLGVBQU8sRUFBRUcsRUFBaEI7QUFBb0IsaUJBQVMsRUFBQztBQUE5QixTQUFrRE4sUUFBUSxHQUFHO0FBQUNlLGdCQUFRLEVBQUU7QUFBWCxPQUFILEdBQXFCLEVBQS9FLEdBQ0k7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQWdDbEIsS0FBaEMsQ0FESixFQUNrRGUsWUFEbEQsRUFDZ0VELFVBRGhFLEVBRUk7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFNBQ0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFESixDQUZKLENBRkcsRUFRSDtBQUFLLFVBQUUsWUFBS0wsRUFBTDtBQUFQLFNBQ0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FBbUNSLFdBQVcsSUFBSUMsQ0FBQyxDQUFDLENBQUNILElBQUQsRUFBTyxhQUFQLENBQUQsQ0FBbkQsQ0FESixDQVJHLENBQVA7QUFZSDs7OztFQS9CZ0NvQiw4Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRjNDO0FBQ0E7O0lBRXFCQyxHOzs7OztBQUVqQixlQUFZekIsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDZFQUFNQSxLQUFOO0FBQ0EsVUFBSzBCLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUUzQixLQUFLLENBQUMyQixJQUFOLEdBQWEsQ0FBYixJQUFrQixDQUFDM0IsS0FBSyxDQUFDNEIsT0FBTixDQUFjQztBQUQ5QixLQUFiO0FBRmM7QUFLakI7Ozs7dUNBRWtCQyxTLEVBQVU7QUFDekI7QUFDQTtBQUNBLFVBQUlBLFNBQVMsQ0FBQ0gsSUFBVixLQUFtQixLQUFLM0IsS0FBTCxDQUFXMkIsSUFBbEMsRUFDSTtBQUNKLFVBQU1JLFNBQVMsR0FBRyxLQUFLL0IsS0FBTCxDQUFXMkIsSUFBWCxHQUFrQixDQUFsQixJQUF1QixDQUFDLEtBQUszQixLQUFMLENBQVc0QixPQUFYLENBQW1CQyxTQUE3RDtBQUNBLFVBQUlFLFNBQVMsS0FBSyxLQUFLTCxLQUFMLENBQVdDLElBQTdCLEVBQ0ksS0FBS0ssUUFBTCxDQUFjO0FBQUNMLFlBQUksRUFBRUk7QUFBUCxPQUFkO0FBQ1A7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUNxQyxLQUFLL0IsS0FEMUM7QUFBQSxVQUNFaUMsTUFERixlQUNFQSxNQURGO0FBQUEsVUFDVTNCLENBRFYsZUFDVUEsQ0FEVjtBQUFBLFVBQ2FzQixPQURiLGVBQ2FBLE9BRGI7QUFBQSxVQUNzQk0sV0FEdEIsZUFDc0JBLFdBRHRCO0FBQUEsVUFFRVAsSUFGRixHQUVVLEtBQUtELEtBRmYsQ0FFRUMsSUFGRjs7QUFJTCxVQUFNUSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2YsY0FBSSxDQUFDSCxRQUFMLENBQWM7QUFBQ0wsY0FBSSxFQUFFO0FBQVAsU0FBZDtBQUNILE9BRkQ7O0FBR0EsYUFDSTtBQUFLLGlCQUFTLEVBQUVPO0FBQWhCLFNBQ0ksNkRBQUMsd0RBQUQ7QUFBZSxTQUFDLEVBQUU1QixDQUFsQjtBQUFxQixZQUFJLEVBQUVxQixJQUEzQjtBQUFpQyxZQUFJLEVBQUVRLElBQXZDO0FBQTZDLGNBQU0sRUFBRUYsTUFBckQ7QUFBNkQsZUFBTyxFQUFFTDtBQUF0RSxRQURKLENBREo7QUFLSDs7OztFQS9CNEJMLDhDQUFLLENBQUNDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2QztBQUNBOztJQUVxQlksSTs7Ozs7QUFFakIsZ0JBQVlwQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEVBQU1BLEtBQU47QUFDQUEsU0FBSyxDQUFDNEIsT0FBTixDQUFjUyxLQUFkO0FBQ0EsVUFBS1gsS0FBTCxHQUFhO0FBQ1RZLGNBQVEsRUFBR3RDLEtBQUssQ0FBQzRCLE9BQU4sQ0FBY1U7QUFEaEIsS0FBYjtBQUhjO0FBTWpCOzs7OzJDQUVxQjtBQUNsQixXQUFLdEMsS0FBTCxDQUFXNEIsT0FBWCxDQUFtQlcsT0FBbkIsQ0FBMkIsSUFBM0I7QUFDSDs7OzJCQUVNQyxHLEVBQUtDLEksRUFBTUMsSSxFQUFLO0FBQ25CLFVBQUlGLEdBQUcsS0FBSyxLQUFLeEMsS0FBTCxDQUFXNEIsT0FBbkIsSUFBOEJhLElBQUksS0FBSyxVQUEzQyxFQUNJLEtBQUtULFFBQUwsQ0FBYztBQUFDTSxnQkFBUSxFQUFHSTtBQUFaLE9BQWQ7QUFDUDs7OzZCQUVPO0FBQUEsd0JBQ3lCLEtBQUsxQyxLQUQ5QjtBQUFBLFVBQ0dpQyxNQURILGVBQ0dBLE1BREg7QUFBQSxVQUNXM0IsQ0FEWCxlQUNXQSxDQURYO0FBQUEsVUFDY3NCLE9BRGQsZUFDY0EsT0FEZDtBQUFBLFVBRUdVLFFBRkgsR0FFZSxLQUFLWixLQUZwQixDQUVHWSxRQUZIO0FBQUEsVUFHR0ssSUFISCxHQUdXVixNQUhYLENBR0dVLElBSEg7O0FBS0osVUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0QsSUFBRCxFQUFPRSxLQUFQLEVBQWlCO0FBQzVCRixZQUFJLENBQUM1QixHQUFMLENBQVMsVUFBQytCLEdBQUQsRUFBTztBQUNaLGNBQUssQ0FBQ0EsR0FBRyxDQUFDdkMsUUFBVixFQUFvQjtBQUNoQnFCLG1CQUFPLENBQUNtQixhQUFSLENBQXNCRCxHQUFHLENBQUMzQyxJQUExQixFQUFnQzBDLEtBQWhDO0FBQ0g7QUFDSixTQUpEO0FBS0gsT0FORDs7QUFRQSxVQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxLQUFELEVBQVc7QUFDekJELGNBQU0sQ0FBQ0QsSUFBRCxFQUFPRSxLQUFQLENBQU47QUFDSCxPQUZEOztBQUlBLFVBQU1JLFFBQVEsR0FBR04sSUFBSSxDQUFDNUIsR0FBTCxDQUFTLFVBQUMrQixHQUFELEVBQVM7QUFDL0IsWUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0wsS0FBRCxFQUFXO0FBQ3pCRCxnQkFBTSxDQUFDLENBQUNFLEdBQUQsQ0FBRCxFQUFRRCxLQUFSLENBQU47QUFDSCxTQUZEOztBQUdBLFlBQU01QyxPQUFPLEdBQUdxQyxRQUFRLENBQUNRLEdBQUcsQ0FBQzNDLElBQUwsQ0FBeEI7QUFDQSxlQUFPO0FBQUksYUFBRyxFQUFFMkMsR0FBRyxDQUFDM0MsSUFBYjtBQUFtQixtQkFBUyxFQUFDO0FBQTdCLFdBQ0gsNkRBQUMsa0RBQUQ7QUFDSSxpQkFBTyxFQUFFRixPQUFPLElBQUk2QyxHQUFHLENBQUN2QyxRQUQ1QjtBQUVJLGtCQUFRLEVBQUUyQyxTQUZkO0FBR0ksV0FBQyxFQUFFNUM7QUFIUCxXQUlRd0MsR0FKUixFQURHLENBQVA7QUFRSCxPQWJnQixDQUFqQjtBQWVBLFVBQU1LLGFBQWEsR0FBR1IsSUFBSSxDQUFDUyxNQUFMLENBQVksVUFBQU4sR0FBRztBQUFBLGVBQUksQ0FBQ0EsR0FBRyxDQUFDdkMsUUFBVDtBQUFBLE9BQWYsQ0FBdEI7QUFFQSxVQUFNOEMsV0FBVyxHQUFHRixhQUFhLENBQUNDLE1BQWQsQ0FDaEIsVUFBQU4sR0FBRztBQUFBLGVBQUlSLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDM0MsSUFBTCxDQUFaO0FBQUEsT0FEYSxFQUVsQmtCLE1BRmtCLEtBRVAsQ0FGYjtBQUlBLGFBQU87QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRjRCLFFBREUsRUFFRkUsYUFBYSxDQUFDOUIsTUFBZCxHQUF1QixDQUF2QixJQUNHO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0ksNkRBQUMsa0RBQUQ7QUFDSSxZQUFJLEVBQUMsWUFEVDtBQUVJLGFBQUssRUFBRWYsQ0FBQyxDQUFDLENBQUMsS0FBRCxFQUFPLFlBQVAsRUFBb0IsT0FBcEIsQ0FBRCxDQUZaO0FBR0ksbUJBQVcsRUFBRUEsQ0FBQyxDQUFDLENBQUMsS0FBRCxFQUFRLFlBQVIsRUFBc0IsYUFBdEIsQ0FBRCxDQUhsQjtBQUlJLGVBQU8sRUFBRSxDQUFDK0MsV0FKZDtBQUtJLGdCQUFRLEVBQUVMLFNBTGQ7QUFNSSxTQUFDLEVBQUUxQztBQU5QLFFBREosQ0FIRCxDQUFQO0FBZ0JIOzs7O0VBekU2QmlCLDhDQUFLLENBQUNDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QztBQUNBO0FBQ0E7QUFDQTs7SUFFcUI4QixZOzs7OztBQUVqQix3QkFBWXRELEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCxzRkFBTUEsS0FBTjtBQURjLFFBRVA0QixPQUZPLEdBRUk1QixLQUZKLENBRVA0QixPQUZPO0FBR2RBLFdBQU8sQ0FBQzJCLG9CQUFSO0FBSGM7QUFJakI7Ozs7NkJBRU87QUFBQSx3QkFDdUYsS0FBS3ZELEtBRDVGO0FBQUEsVUFDR21DLElBREgsZUFDR0EsSUFESDtBQUFBLFVBQ1NxQixVQURULGVBQ1NBLFVBRFQ7QUFBQSxVQUNxQkMsV0FEckIsZUFDcUJBLFdBRHJCO0FBQUEsVUFDa0NDLGFBRGxDLGVBQ2tDQSxhQURsQztBQUFBLFVBQ2lEQyxjQURqRCxlQUNpREEsY0FEakQ7QUFBQSxVQUNpRTFCLE1BRGpFLGVBQ2lFQSxNQURqRTtBQUFBLFVBQ3lFTCxPQUR6RSxlQUN5RUEsT0FEekU7QUFBQSxVQUNrRnRCLENBRGxGLGVBQ2tGQSxDQURsRjtBQUVKLFVBQU1zRCxJQUFJLEdBQUczQixNQUFNLENBQUMyQixJQUFQLElBQWVDLDREQUFRLEVBQXBDO0FBRUEsVUFBSUMsU0FBSjs7QUFDQSxVQUFJLENBQUM3QixNQUFNLENBQUM4QixXQUFaLEVBQXlCO0FBQ3JCRCxpQkFBUyxHQUFHO0FBQ1IsZUFBSyxFQUFFeEQsQ0FBQyxDQUFDLENBQUMsT0FBRCxDQUFELENBREE7QUFFUixtQkFBUyxFQUFDLE1BRkY7QUFHUixjQUFJLEVBQUMsUUFIRztBQUlSLGlCQUFPLEVBQUU2QjtBQUpELFdBTVIsNkRBQUMsNkNBQUQ7QUFBTyxXQUFDLEVBQUU3QjtBQUFWLFVBTlEsQ0FBWjtBQVFIOztBQUNELFVBQUkwRCxhQUFKO0FBRUEsVUFBSSxDQUFDL0IsTUFBTSxDQUFDZ0MsY0FBUixJQUEwQixDQUFFckMsT0FBTyxDQUFDQyxTQUF4QyxFQUNJbUMsYUFBYSxHQUFHO0FBQVEsZ0JBQVEsRUFBRVIsVUFBbEI7QUFBOEIsaUJBQVMsRUFBQyx1RUFBeEM7QUFBZ0gsWUFBSSxFQUFDLFFBQXJIO0FBQThILGVBQU8sRUFBRUc7QUFBdkksU0FBd0pyRCxDQUFDLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBekosQ0FBaEI7QUFDSixVQUFJNEQsZUFBSjtBQUNBLFVBQU1DLFlBQVksR0FDZDtBQUFRLGdCQUFRLEVBQUVYLFVBQWxCO0FBQThCLGlCQUFTLEVBQUMsaURBQXhDO0FBQTBGLFlBQUksRUFBQyxRQUEvRjtBQUF3RyxlQUFPLEVBQUVDO0FBQWpILFNBQStIbkQsQ0FBQyxDQUFDLENBQUNzQixPQUFPLENBQUNDLFNBQVIsR0FBb0IsTUFBcEIsR0FBNkIsZ0JBQTlCLENBQUQsQ0FBaEksQ0FESjs7QUFFQSxVQUFJSSxNQUFNLENBQUNtQyxTQUFQLElBQW9CLENBQUN4QyxPQUFPLENBQUNDLFNBQWpDLEVBQTRDO0FBQ3hDcUMsdUJBQWUsR0FBRztBQUFRLGtCQUFRLEVBQUVWLFVBQWxCO0FBQThCLG1CQUFTLEVBQUMseUNBQXhDO0FBQWtGLGNBQUksRUFBQyxRQUF2RjtBQUFnRyxpQkFBTyxFQUFFRTtBQUF6RyxXQUF5SHBELENBQUMsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUExSCxDQUFsQjtBQUNIOztBQUVELFVBQU0rRCxLQUFLLEdBQUlwQyxNQUFNLENBQUNxQyxhQUFQLElBQXdCckMsTUFBTSxDQUFDcUMsYUFBUCxDQUFxQlYsSUFBckIsQ0FBekIsSUFDVjNCLE1BQU0sQ0FBQ3FDLGFBQVAsV0FEVSxJQUVWckMsTUFBTSxDQUFDcUMsYUFGWDtBQUlBLFVBQU1DLE1BQU0sR0FBRztBQUFHLGVBQU8sRUFBRXBDLElBQVo7QUFBa0IsWUFBSSxFQUFFa0M7QUFBeEIsU0FBZ0MvRCxDQUFDLENBQUMsQ0FBQyxjQUFELEVBQWdCLGVBQWhCLEVBQWdDLE1BQWhDLENBQUQsQ0FBakMsQ0FBZjtBQUNBLGFBQU87QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSDtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUF1QixlQUFPLEVBQUU2QjtBQUFoQyxRQURHLEVBRUg7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLMkIsU0FETCxFQUVJO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQXVCeEQsQ0FBQyxDQUFDLENBQUMsY0FBRCxFQUFpQixPQUFqQixDQUFELENBQXhCLENBRkosRUFHSSx3RUFDS0EsQ0FBQyxDQUFDLENBQUMsY0FBRCxFQUFnQixhQUFoQixDQUFELENBRE4sVUFISixDQURKLEVBUUk7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSSw2REFBQyw4Q0FBRDtBQUFNLFNBQUMsRUFBRUEsQ0FBVDtBQUFZLGNBQU0sRUFBRTJCLE1BQXBCO0FBQTRCLGVBQU8sRUFBRUw7QUFBckMsUUFESixDQVJKLEVBV0k7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNLb0MsYUFETCxFQUVLRSxlQUZMLENBREosRUFLSTtBQUFHLGlCQUFTLEVBQUM7QUFBYixTQUE4QjVELENBQUMsQ0FBQyxDQUFDLGNBQUQsRUFBZ0IsZUFBaEIsRUFBZ0MsTUFBaEMsQ0FBRCxFQUEwQztBQUFDZ0UscUJBQWEsRUFBR0M7QUFBakIsT0FBMUMsQ0FBL0IsU0FBc0c7QUFBRyxjQUFNLEVBQUMsUUFBVjtBQUFtQixZQUFJLEVBQUV0QyxNQUFNLENBQUN1QyxTQUFQLElBQW9CLDZCQUE3QztBQUE0RSxXQUFHLEVBQUM7QUFBaEYsU0FBdUdsRSxDQUFDLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBeEcsQ0FBdEcsQ0FMSixDQVhKLENBRkcsQ0FBUDtBQXNCSDs7OztFQTdEcUNpQiw4Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGhEO0FBQ0E7QUFDQTs7SUFFcUJpRCxhOzs7OztBQUVqQix5QkFBWXpFLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCx1RkFBTUEsS0FBTjs7QUFEYywyRUFRSyxVQUFDMEUsYUFBRCxFQUFnQkMsZUFBaEIsRUFBb0M7QUFBQSxVQUNoREMsS0FEZ0QsR0FDdkMsTUFBS2xELEtBRGtDLENBQ2hEa0QsS0FEZ0Q7QUFFdkQsVUFBSUYsYUFBSixFQUNJLE1BQUsxRSxLQUFMLENBQVc0QixPQUFYLENBQW1CaUQsU0FBbkIsQ0FBNkJGLGVBQTdCO0FBQ0osVUFBTTlDLFNBQVMsR0FBRyxNQUFLN0IsS0FBTCxDQUFXNEIsT0FBWCxDQUFtQkMsU0FBckM7O0FBQ0EsVUFBTTRCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsY0FBS3pCLFFBQUwsQ0FBYztBQUFDd0Isb0JBQVUsRUFBRTtBQUFiLFNBQWQ7O0FBQ0EsY0FBS3hELEtBQUwsQ0FBVzRCLE9BQVgsQ0FBbUJrRCxvQkFBbkI7O0FBQ0EsY0FBSzlFLEtBQUwsQ0FBV21DLElBQVg7QUFDSCxPQUpEOztBQUtBLFVBQUl1QyxhQUFhLElBQUksQ0FBQzdDLFNBQWxCLEtBQWdDK0MsS0FBSyxJQUFJLE1BQUs1RSxLQUFMLENBQVdpQyxNQUFYLENBQWtCOEIsV0FBM0QsQ0FBSixFQUE0RTtBQUN4RSxjQUFLL0IsUUFBTCxDQUFjO0FBQUN3QixvQkFBVSxFQUFFO0FBQWIsU0FBZDs7QUFDQXVCLGtCQUFVLENBQUN0QixXQUFELEVBQWMsSUFBZCxDQUFWO0FBQ0gsT0FIRCxNQUtJQSxXQUFXO0FBQ2xCLEtBeEJpQjs7QUFBQSxrRUEwQkosWUFBTTtBQUNoQixZQUFLdUIsb0JBQUwsQ0FBMEIsS0FBMUIsRUFBaUMsS0FBakM7QUFDSCxLQTVCaUI7O0FBQUEsb0VBOEJGLFlBQU07QUFDbEIsWUFBS0Esb0JBQUwsQ0FBMEIsSUFBMUIsRUFBZ0MsSUFBaEM7QUFDSCxLQWhDaUI7O0FBQUEscUVBa0NELFlBQU07QUFDbkIsWUFBS0Esb0JBQUwsQ0FBMEIsSUFBMUIsRUFBZ0MsS0FBaEM7QUFDSCxLQXBDaUI7O0FBRWQsVUFBS3RELEtBQUwsR0FBYTtBQUNUa0QsV0FBSyxFQUFFLEtBREU7QUFFVHBCLGdCQUFVLEVBQUU7QUFGSCxLQUFiO0FBRmM7QUFNakI7Ozs7NkJBZ0NPO0FBQUE7O0FBQUEsd0JBQ3FDLEtBQUt4RCxLQUQxQztBQUFBLFVBQ0dpQyxNQURILGVBQ0dBLE1BREg7QUFBQSxVQUNXTixJQURYLGVBQ1dBLElBRFg7QUFBQSxVQUNpQkMsT0FEakIsZUFDaUJBLE9BRGpCO0FBQUEsVUFDMEJ0QixDQUQxQixlQUMwQkEsQ0FEMUI7QUFBQSxVQUM2QjZCLElBRDdCLGVBQzZCQSxJQUQ3QjtBQUFBLHdCQUUwQixLQUFLVCxLQUYvQjtBQUFBLFVBRUlrRCxLQUZKLGVBRUlBLEtBRko7QUFBQSxVQUVXcEIsVUFGWCxlQUVXQSxVQUZYO0FBSUosVUFBTS9DLFFBQVEsR0FBR3dFLGlFQUFXLENBQUNoRCxNQUFELENBQTVCO0FBQ0EsVUFBTW5CLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQ0MsT0FBRDtBQUFBLGVBQWFWLENBQUMsQ0FBQyxDQUFDLFVBQUQsRUFBYVUsT0FBYixDQUFELENBQWQ7QUFBQSxPQUFiLEVBQW9EQyxJQUFwRCxDQUF5RCxJQUF6RCxDQUFyQjtBQUVBLFVBQUlpRSxXQUFKOztBQUVBLFVBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN4RSxDQUFELEVBQU87QUFDckJBLFNBQUMsQ0FBQ3lFLGNBQUY7O0FBQ0EsY0FBSSxDQUFDcEQsUUFBTCxDQUFjO0FBQUM0QyxlQUFLLEVBQUU7QUFBUixTQUFkO0FBQ0gsT0FIRDs7QUFLQSxVQUFNUyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLFlBQUl6RCxPQUFPLENBQUNDLFNBQVosRUFDSSxNQUFJLENBQUM3QixLQUFMLENBQVdtQyxJQUFYLEdBREosS0FHSSxNQUFJLENBQUNILFFBQUwsQ0FBYztBQUFDNEMsZUFBSyxFQUFFO0FBQVIsU0FBZDtBQUNQLE9BTEQ7O0FBT0EsVUFBSWhELE9BQU8sQ0FBQzBELE9BQVosRUFDSUosV0FBVyxHQUFHO0FBQUcsaUJBQVMsRUFBQztBQUFiLFNBQTJCNUUsQ0FBQyxDQUFDLENBQUMsZUFBRCxFQUFrQixtQkFBbEIsQ0FBRCxDQUE1QixDQUFkO0FBRUosVUFBSSxDQUFDcUIsSUFBTCxFQUNJLE9BQU8seUVBQVA7QUFFSixVQUFNcUMsYUFBYSxHQUFHL0IsTUFBTSxDQUFDZ0MsY0FBUCxHQUNsQixFQURrQixHQUdsQjtBQUFRLGlCQUFTLEVBQUMsMkNBQWxCO0FBQThELFlBQUksRUFBQyxRQUFuRTtBQUE0RSxlQUFPLEVBQUUsS0FBS047QUFBMUYsU0FBMkdyRCxDQUFDLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBNUcsQ0FISjtBQUtBLFVBQU02RCxZQUFZLEdBQUdsQyxNQUFNLENBQUNtQyxTQUFQLEdBQ2pCO0FBQVEsaUJBQVMsRUFBQyxpQ0FBbEI7QUFBb0QsWUFBSSxFQUFDLFFBQXpEO0FBQWtFLGVBQU8sRUFBRSxLQUFLVjtBQUFoRixTQUFnR3BELENBQUMsQ0FBQyxDQUFDLFdBQUQsQ0FBRCxDQUFqRyxDQURpQixHQUdqQjtBQUFRLGlCQUFTLEVBQUMsaUNBQWxCO0FBQW9ELFlBQUksRUFBQyxRQUF6RDtBQUFrRSxlQUFPLEVBQUUsS0FBS21EO0FBQWhGLFNBQThGbkQsQ0FBQyxDQUFDLENBQUMsSUFBRCxDQUFELENBQS9GLENBSEo7QUFLQSxVQUFNaUYsZUFBZSxHQUNqQixDQUFDdEQsTUFBTSxDQUFDOEIsV0FBUixJQUF1QixDQUFDbkMsT0FBTyxDQUFDQyxTQUFoQyxJQUE2QyxDQUFDSSxNQUFNLENBQUN1RCxRQUR6RDtBQUdBLFVBQUlaLEtBQUssSUFBSWhELE9BQU8sQ0FBQ0MsU0FBakIsSUFBK0IsQ0FBQ0QsT0FBTyxDQUFDQyxTQUFULElBQXNCSSxNQUFNLENBQUM4QixXQUFoRSxFQUNJLE9BQU8sNkRBQUMsdURBQUQ7QUFBYyxTQUFDLEVBQUV6RCxDQUFqQjtBQUFvQixrQkFBVSxFQUFFa0QsVUFBaEM7QUFBNEMsY0FBTSxFQUFFdkIsTUFBcEQ7QUFBNEQsWUFBSSxFQUFFb0QsU0FBbEU7QUFBNkUsc0JBQWMsRUFBRSxLQUFLMUIsY0FBbEc7QUFBa0gsbUJBQVcsRUFBRSxLQUFLRixXQUFwSTtBQUFpSixxQkFBYSxFQUFFLEtBQUtDLGFBQXJLO0FBQW9MLGVBQU8sRUFBRTlCO0FBQTdMLFFBQVA7QUFDSixhQUFPO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ1A7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFETyxFQUVQO0FBQUssaUJBQVMsMEJBQW1CLENBQUMyRCxlQUFELEdBQW1CLHNCQUFuQixHQUE0QyxFQUEvRDtBQUFkLFNBQ1E7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDSTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUF1QmpGLENBQUMsQ0FBQyxDQUFDLGVBQUQsRUFBa0IsT0FBbEIsQ0FBRCxDQUF4QixDQURKLENBRFIsRUFJSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNRLHdFQUNLQSxDQUFDLENBQUMsQ0FBQyxlQUFELEVBQWlCLGFBQWpCLENBQUQsQ0FETixVQURSLEVBSUs0RSxXQUpMLEVBS0k7QUFBRyxpQkFBUyxFQUFDO0FBQWIsU0FDS2YsWUFETCxFQUVLSCxhQUZMLEVBR0k7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQXFDLFlBQUksRUFBQyxHQUExQztBQUE4QyxlQUFPLEVBQUVtQjtBQUF2RCxTQUFtRTdFLENBQUMsQ0FBQyxDQUFDLGVBQUQsRUFBa0IsV0FBbEIsQ0FBRCxDQUFwRSxRQUhKLENBTEosQ0FKSixDQUZPLENBQVA7QUFrQkg7Ozs7RUFwR3NDaUIsOENBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7QUNKakQ7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNaUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBUztBQUFBLE1BQVBuRixDQUFPLFFBQVBBLENBQU87QUFDMUIsU0FBTztBQUFLLFFBQUksRUFBQyxLQUFWO0FBQWdCLGtCQUFZQSxDQUFDLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBN0I7QUFBMEMsU0FBSyxFQUFDLElBQWhEO0FBQXFELFVBQU0sRUFBQyxJQUE1RDtBQUFpRSxZQUFRLEVBQUMsV0FBMUU7QUFBc0YsV0FBTyxFQUFDLEtBQTlGO0FBQ0gsU0FBSyxFQUFDO0FBREgsS0FFSCwyRUFBUUEsQ0FBQyxDQUFDLENBQUMsT0FBRCxDQUFELENBQVQsQ0FGRyxFQUdIO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxNQUFFLEVBQUMsSUFBaEI7QUFDSSxNQUFFLEVBQUMsSUFEUDtBQUNZLE1BQUUsRUFBQyxHQURmO0FBRUksZUFBVyxFQUFDO0FBRmhCLElBSEcsRUFNSDtBQUFNLE1BQUUsRUFBQyxHQUFUO0FBQWEsTUFBRSxFQUFDLEdBQWhCO0FBQ0ksTUFBRSxFQUFDLElBRFA7QUFDWSxNQUFFLEVBQUMsSUFEZjtBQUVJLGVBQVcsRUFBQztBQUZoQixJQU5HLENBQVA7QUFVSCxDQVhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUDtBQUNBOztJQUVxQm9GLGM7OztBQUVqQiwwQkFBWXpELE1BQVosRUFBbUI7QUFBQTs7QUFDZixTQUFLQSxNQUFMLEdBQWNBLE1BQWQsQ0FEZSxDQUNNOztBQUVyQixTQUFLMEQsS0FBTCxHQUFhLElBQUlDLCtDQUFNLENBQUMsS0FBS0MsYUFBTixDQUFWLENBQStCLElBQS9CLENBQWIsQ0FIZSxDQUtmOztBQUNBLFFBQUksS0FBS0YsS0FBTCxLQUFlRyxTQUFuQixFQUNJLEtBQUtILEtBQUwsR0FBYUMsK0NBQU0sQ0FBQyxRQUFELENBQW5CO0FBRUosU0FBS3RELFFBQUwsR0FBZ0IsS0FBS3lELGVBQXJCLENBVGUsQ0FTc0I7O0FBQ3JDLFNBQUtsRSxTQUFMLEdBQWlCLEtBQWpCLENBVmUsQ0FVUTs7QUFDdkIsU0FBS3lELE9BQUwsR0FBZSxLQUFmLENBWGUsQ0FXTTs7QUFDckIsU0FBS1UsTUFBTCxHQUFjLEVBQWQsQ0FaZSxDQVlFOztBQUNqQixTQUFLQyxZQUFMLEdBQW9CLEVBQXBCLENBYmUsQ0FhUTs7QUFDdkIsU0FBS0MsUUFBTCxHQUFnQixJQUFJQyxHQUFKLENBQVEsRUFBUixDQUFoQjtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsYUFBTCxxQkFBeUIsS0FBS2hFLFFBQTlCO0FBQ0g7Ozs7MEJBa0JLaUUsTyxFQUFRO0FBQ1YsVUFBSSxDQUFDLEtBQUtMLFFBQUwsQ0FBY00sR0FBZCxDQUFrQkQsT0FBbEIsQ0FBTCxFQUNJLEtBQUtMLFFBQUwsQ0FBY08sR0FBZCxDQUFrQkYsT0FBbEI7QUFDUDs7OzRCQUVPQSxPLEVBQVE7QUFDWixVQUFJLEtBQUtMLFFBQUwsQ0FBY00sR0FBZCxDQUFrQkQsT0FBbEIsQ0FBSixFQUNJLEtBQUtMLFFBQUwsV0FBcUJLLE9BQXJCO0FBQ1A7OzsyQkFFTXBHLEksRUFBTXVDLEksRUFBSztBQUFBOztBQUNkLFdBQUt3RCxRQUFMLENBQWNRLE9BQWQsQ0FBc0IsVUFBQ0gsT0FBRCxFQUFhO0FBQy9CQSxlQUFPLENBQUNJLE1BQVIsQ0FBZSxLQUFmLEVBQXFCeEcsSUFBckIsRUFBMkJ1QyxJQUEzQjtBQUNILE9BRkQ7QUFHSDs7OzJCQUVNdkMsSSxFQUFLO0FBQ1IsVUFBTXlHLFlBQVksR0FBRyxLQUFLM0UsTUFBTCxDQUFZVSxJQUFaLENBQWlCUyxNQUFqQixDQUF3QixVQUFBTixHQUFHO0FBQUEsZUFBRUEsR0FBRyxDQUFDM0MsSUFBSixLQUFhQSxJQUFmO0FBQUEsT0FBM0IsQ0FBckI7QUFDQSxVQUFJeUcsWUFBWSxDQUFDdkYsTUFBYixHQUFzQixDQUExQixFQUNJLE9BQU91RixZQUFZLENBQUMsQ0FBRCxDQUFuQjtBQUNKLGFBQU9kLFNBQVA7QUFDSDs7O3NDQUVpQmhELEcsRUFBSTtBQUNsQixVQUFJK0QsT0FBTyxHQUFHL0QsR0FBRyxXQUFqQjtBQUNBLFVBQUkrRCxPQUFPLEtBQUtmLFNBQWhCLEVBQ0llLE9BQU8sR0FBRyxLQUFLNUUsTUFBTCxXQUFWO0FBQ0osVUFBSTRFLE9BQU8sS0FBS2YsU0FBaEIsRUFDSWUsT0FBTyxHQUFHLEtBQVY7QUFDSixhQUFPQSxPQUFQO0FBQ0g7OztBQVdEOzhCQUNVaEUsSyxFQUFNO0FBQUE7O0FBQ1osV0FBS1osTUFBTCxDQUFZVSxJQUFaLENBQWlCNUIsR0FBakIsQ0FBcUIsVUFBQytCLEdBQUQsRUFBUztBQUMxQixZQUFHQSxHQUFHLENBQUN2QyxRQUFKLElBQWdCLE1BQUksQ0FBQzBCLE1BQUwsQ0FBWTFCLFFBQTVCLElBQXdDc0MsS0FBM0MsRUFBa0Q7QUFDOUMsZ0JBQUksQ0FBQ0UsYUFBTCxDQUFtQkQsR0FBRyxDQUFDM0MsSUFBdkIsRUFBNkIsSUFBN0I7QUFDSCxTQUZELE1BRU87QUFDSCxnQkFBSSxDQUFDNEMsYUFBTCxDQUFtQkQsR0FBRyxDQUFDM0MsSUFBdkIsRUFBNkIsS0FBN0I7QUFDSDtBQUNKLE9BTkQ7QUFPSDs7O2tDQUVhQSxJLEVBQU0wQyxLLEVBQU07QUFDdEIsV0FBS1AsUUFBTCxDQUFjbkMsSUFBZCxJQUFzQjBDLEtBQXRCO0FBQ0EsV0FBS2lFLE1BQUwsQ0FBWSxVQUFaLEVBQXdCLEtBQUt4RSxRQUE3QjtBQUNIOzs7MkNBRXFCO0FBQ2xCLFdBQUtBLFFBQUwscUJBQW9CLEtBQUtnRSxhQUF6QjtBQUNBLFdBQUtRLE1BQUwsQ0FBWSxVQUFaLEVBQXdCLEtBQUt4RSxRQUE3QjtBQUNIOzs7bUNBRWE7QUFDVixXQUFLQSxRQUFMLEdBQWdCLEtBQUt5RCxlQUFyQjtBQUNBLFdBQUtsRSxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsV0FBS3dFLGFBQUw7QUFDQSxXQUFLVixLQUFMO0FBQ0EsV0FBS21CLE1BQUwsQ0FBWSxVQUFaLEVBQXdCLEtBQUt4RSxRQUE3QjtBQUNIOzs7K0JBRVVuQyxJLEVBQUs7QUFDWixhQUFPLEtBQUttQyxRQUFMLENBQWNuQyxJQUFkLEtBQXVCLEtBQTlCO0FBQ0g7OztxQ0FFZTtBQUNaLFVBQUk0RyxRQUFRLEdBQUcsSUFBZjtBQUNBLFVBQU1wRSxJQUFJLEdBQUcsSUFBSXdELEdBQUosQ0FBUSxLQUFLbEUsTUFBTCxDQUFZVSxJQUFaLENBQWlCNUIsR0FBakIsQ0FBcUIsVUFBQytCLEdBQUQsRUFBTztBQUFDLGVBQU9BLEdBQUcsQ0FBQzNDLElBQVg7QUFBZ0IsT0FBN0MsQ0FBUixDQUFiO0FBQ0EsVUFBTW1DLFFBQVEsR0FBRyxJQUFJNkQsR0FBSixDQUFRYSxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLM0UsUUFBakIsQ0FBUixDQUFqQjs7QUFDQSxzQ0FBaUIwRSxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLM0UsUUFBakIsQ0FBakIsa0NBQTRDO0FBQXhDLFlBQU00RSxHQUFHLG1CQUFUOztBQUNBLFlBQUksQ0FBQ3ZFLElBQUksQ0FBQzZELEdBQUwsQ0FBU1UsR0FBVCxDQUFMLEVBQW1CO0FBQ2YsaUJBQU8sS0FBSzVFLFFBQUwsQ0FBYzRFLEdBQWQsQ0FBUDtBQUNIO0FBQ0o7O0FBUlc7QUFBQTtBQUFBOztBQUFBO0FBU1osNkJBQWlCLEtBQUtqRixNQUFMLENBQVlVLElBQTdCLDhIQUFrQztBQUFBLGNBQXhCRyxHQUF3Qjs7QUFDOUIsY0FBSSxDQUFDUixRQUFRLENBQUNrRSxHQUFULENBQWExRCxHQUFHLENBQUMzQyxJQUFqQixDQUFMLEVBQTRCO0FBQ3hCLGlCQUFLbUMsUUFBTCxDQUFjUSxHQUFHLENBQUMzQyxJQUFsQixJQUEwQixLQUFLZ0gsaUJBQUwsQ0FBdUJyRSxHQUF2QixDQUExQjtBQUNBaUUsb0JBQVEsR0FBRyxLQUFYO0FBQ0g7QUFDSjtBQWRXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZVosV0FBS2xGLFNBQUwsR0FBaUJrRixRQUFqQjtBQUNBLFVBQUksQ0FBQ0EsUUFBTCxFQUNJLEtBQUt6QixPQUFMLEdBQWUsSUFBZjtBQUNQOzs7bUNBRWE7QUFDVixVQUFNOEIsV0FBVyxHQUFHLEtBQUt6QixLQUFMLENBQVcwQixHQUFYLEVBQXBCOztBQUNBLFVBQUlELFdBQVcsS0FBSyxJQUFwQixFQUF5QjtBQUNyQixhQUFLOUUsUUFBTCxHQUFnQmdGLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxrQkFBa0IsQ0FBQ0osV0FBRCxDQUE3QixDQUFoQjs7QUFDQSxhQUFLSyxjQUFMOztBQUNBLGFBQUtYLE1BQUwsQ0FBWSxVQUFaLEVBQXdCLEtBQUt4RSxRQUE3QjtBQUNIOztBQUNELGFBQU8sS0FBS0EsUUFBWjtBQUNIOzs7MkNBRXFCO0FBQ2xCLFdBQUtvRixZQUFMO0FBQ0EsV0FBS3JCLGFBQUw7QUFDSDs7O21DQUVhO0FBQ1YsVUFBTXNCLENBQUMsR0FBR0Msa0JBQWtCLENBQUNOLElBQUksQ0FBQ08sU0FBTCxDQUFlLEtBQUt2RixRQUFwQixDQUFELENBQTVCO0FBQ0EsV0FBS3FELEtBQUwsQ0FBV21DLEdBQVgsQ0FBZUgsQ0FBZjtBQUNBLFdBQUs5RixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS3lELE9BQUwsR0FBZSxLQUFmO0FBQ0EsV0FBS2dCLGFBQUwscUJBQXlCLEtBQUtoRSxRQUE5QjtBQUNIOzs7b0NBRWM7QUFDWCxXQUFJLElBQUl5RixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBSzlGLE1BQUwsQ0FBWVUsSUFBWixDQUFpQnRCLE1BQS9CLEVBQXNDMEcsQ0FBQyxFQUF2QyxFQUEwQztBQUN0QyxZQUFNakYsR0FBRyxHQUFHLEtBQUtiLE1BQUwsQ0FBWVUsSUFBWixDQUFpQm9GLENBQWpCLENBQVo7QUFDQSxZQUFNckcsS0FBSyxHQUFHLEtBQUtzRSxNQUFMLENBQVlsRCxHQUFHLENBQUMzQyxJQUFoQixDQUFkO0FBQ0EsWUFBTUssTUFBTSxHQUFJc0MsR0FBRyxDQUFDdEMsTUFBSixLQUFlc0YsU0FBZixHQUEyQmhELEdBQUcsQ0FBQ3RDLE1BQS9CLEdBQXlDLEtBQUt5QixNQUFMLENBQVl6QixNQUFaLElBQXNCLEtBQS9FO0FBQ0EsWUFBTUQsUUFBUSxHQUFJdUMsR0FBRyxDQUFDdkMsUUFBSixLQUFpQnVGLFNBQWpCLEdBQTZCaEQsR0FBRyxDQUFDdkMsUUFBakMsR0FBNkMsS0FBSzBCLE1BQUwsQ0FBWTFCLFFBQVosSUFBd0IsS0FBdkYsQ0FKc0MsQ0FLdEM7O0FBQ0EsWUFBTXNCLFNBQVMsR0FBRyxLQUFLQSxTQUFMLElBQWtCckIsTUFBbEIsSUFBNEJELFFBQTlDO0FBQ0EsWUFBTXNHLE9BQU8sR0FBRyxLQUFLbUIsVUFBTCxDQUFnQmxGLEdBQUcsQ0FBQzNDLElBQXBCLEtBQTZCMEIsU0FBN0M7QUFDQSxZQUFJSCxLQUFLLEtBQUttRixPQUFkLEVBQ0k7QUFDSixhQUFLb0IsaUJBQUwsQ0FBdUJuRixHQUF2QixFQUE0QitELE9BQTVCO0FBQ0EsYUFBS3FCLGdCQUFMLENBQXNCcEYsR0FBdEIsRUFBMkIrRCxPQUEzQjtBQUNBLFlBQUkvRCxHQUFHLENBQUNxRixRQUFKLEtBQWlCckMsU0FBckIsRUFDSWhELEdBQUcsQ0FBQ3FGLFFBQUosQ0FBYXRCLE9BQWIsRUFBc0IvRCxHQUF0QjtBQUNKLGFBQUtrRCxNQUFMLENBQVlsRCxHQUFHLENBQUMzQyxJQUFoQixJQUF3QjBHLE9BQXhCO0FBQ0g7QUFDSjs7O3NDQUVpQi9ELEcsRUFBSytELE8sRUFBUTtBQUUzQjtBQUNBLFVBQUlBLE9BQUosRUFBWTtBQUNSLFlBQUkvRCxHQUFHLENBQUNzRixRQUFKLElBQWdCLEtBQUtuQyxZQUFMLENBQWtCbkQsR0FBRyxDQUFDM0MsSUFBdEIsQ0FBcEIsRUFDSTtBQUNKLGFBQUs4RixZQUFMLENBQWtCbkQsR0FBRyxDQUFDM0MsSUFBdEIsSUFBOEIsSUFBOUI7QUFDSDs7QUFFRCxVQUFNa0ksUUFBUSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUFlekYsR0FBRyxDQUFDM0MsSUFBbkIsR0FBd0IsSUFBbEQsQ0FBakI7O0FBQ0EsV0FBSSxJQUFJNEgsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDTSxRQUFRLENBQUNoSCxNQUF2QixFQUE4QjBHLENBQUMsRUFBL0IsRUFBa0M7QUFDOUIsWUFBTVMsT0FBTyxHQUFHSCxRQUFRLENBQUNOLENBQUQsQ0FBeEI7QUFFQSxZQUFNVSxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsYUFBdkI7QUFIOEIsWUFJdkJDLE9BSnVCLEdBSVpILE9BSlksQ0FJdkJHLE9BSnVCO0FBQUEsWUFLdkJsRyxJQUx1QixHQUtma0csT0FMZSxDQUt2QmxHLElBTHVCO0FBTTlCLFlBQU1tRyxLQUFLLEdBQUcsQ0FBQyxNQUFELEVBQVMsS0FBVCxDQUFkLENBTjhCLENBUTlCO0FBQ0E7O0FBRUEsWUFBSUosT0FBTyxDQUFDSyxPQUFSLEtBQW9CLFFBQXhCLEVBQWlDO0FBQzdCO0FBQ0E7QUFDQSxjQUFNQyxVQUFVLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixRQUF2QixDQUFuQjs7QUFDQSw0Q0FBaUIvQixNQUFNLENBQUNDLElBQVAsQ0FBWTBCLE9BQVosQ0FBakIscUNBQXNDO0FBQWxDLGdCQUFNekIsR0FBRyxxQkFBVDtBQUNBNEIsc0JBQVUsQ0FBQ0gsT0FBWCxDQUFtQnpCLEdBQW5CLElBQTBCeUIsT0FBTyxDQUFDekIsR0FBRCxDQUFqQztBQUNIOztBQUNENEIsb0JBQVUsQ0FBQ3JHLElBQVgsR0FBa0IsWUFBbEI7QUFDQXFHLG9CQUFVLENBQUNFLFNBQVgsR0FBdUJSLE9BQU8sQ0FBQ1EsU0FBL0I7QUFDQUYsb0JBQVUsQ0FBQ0csSUFBWCxHQUFrQlQsT0FBTyxDQUFDUyxJQUExQjtBQUNBSCxvQkFBVSxTQUFWLEdBQW1CTixPQUFPLFNBQTFCO0FBQ0FNLG9CQUFVLENBQUNJLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCWCxPQUFPLENBQUNVLEtBQW5DO0FBQ0FKLG9CQUFVLENBQUNqSSxFQUFYLEdBQWdCMkgsT0FBTyxDQUFDM0gsRUFBeEI7QUFDQWlJLG9CQUFVLENBQUMzSSxJQUFYLEdBQWtCcUksT0FBTyxDQUFDckksSUFBMUI7QUFDQTJJLG9CQUFVLENBQUNNLEtBQVgsR0FBbUJaLE9BQU8sQ0FBQ1ksS0FBM0I7QUFDQU4sb0JBQVUsQ0FBQ08sS0FBWCxHQUFtQmIsT0FBTyxDQUFDYSxLQUEzQjs7QUFFQSxjQUFJeEMsT0FBSixFQUFZO0FBQ1JpQyxzQkFBVSxDQUFDckcsSUFBWCxHQUFrQkEsSUFBbEI7QUFDQSxnQkFBSWtHLE9BQU8sQ0FBQ1csR0FBUixLQUFnQnhELFNBQXBCLEVBQ0lnRCxVQUFVLENBQUNRLEdBQVgsR0FBaUJYLE9BQU8sQ0FBQ1csR0FBekI7QUFDUCxXQXJCNEIsQ0FzQjdCOzs7QUFDQWIsZ0JBQU0sQ0FBQ2MsWUFBUCxDQUFvQlQsVUFBcEIsRUFBZ0NOLE9BQWhDO0FBQ0FDLGdCQUFNLENBQUNlLFdBQVAsQ0FBbUJoQixPQUFuQjtBQUNILFNBekJELE1BeUJPO0FBQ0g7QUFDQSxjQUFJM0IsT0FBSixFQUFZO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ1Isb0NBQWtCK0IsS0FBbEIsbUlBQXdCO0FBQUEsb0JBQWRhLElBQWM7QUFDcEIsb0JBQU1DLFNBQVMsR0FBR2YsT0FBTyxDQUFDYyxJQUFELENBQXpCO0FBQ0Esb0JBQUlDLFNBQVMsS0FBSzVELFNBQWxCLEVBQ0k7QUFDSixvQkFBSTZDLE9BQU8sQ0FBQyxhQUFXYyxJQUFaLENBQVAsS0FBNkIzRCxTQUFqQyxFQUNJNkMsT0FBTyxDQUFDLGFBQVdjLElBQVosQ0FBUCxHQUEyQmpCLE9BQU8sQ0FBQ2lCLElBQUQsQ0FBbEM7QUFDSmpCLHVCQUFPLENBQUNpQixJQUFELENBQVAsR0FBZ0JDLFNBQWhCO0FBQ0g7QUFSTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVNSLGdCQUFJZixPQUFPLENBQUN2SSxLQUFSLEtBQWtCMEYsU0FBdEIsRUFDSTBDLE9BQU8sQ0FBQ3BJLEtBQVIsR0FBZ0J1SSxPQUFPLENBQUN2SSxLQUF4QjtBQUNKLGdCQUFJdUksT0FBTyxDQUFDZ0IsZUFBUixLQUE0QjdELFNBQWhDLEVBQ0kwQyxPQUFPLENBQUNVLEtBQVIsQ0FBY1UsT0FBZCxHQUF3QmpCLE9BQU8sQ0FBQ2dCLGVBQWhDO0FBQ1AsV0FiRCxNQWNJO0FBQ0EsZ0JBQUloQixPQUFPLENBQUN2SSxLQUFSLEtBQWtCMEYsU0FBdEIsRUFDSTBDLE9BQU8sQ0FBQ3FCLGVBQVIsQ0FBd0IsT0FBeEI7O0FBQ0osZ0JBQUlsQixPQUFPLENBQUN4RyxJQUFSLEtBQWlCLE1BQXJCLEVBQTRCO0FBQ3hCLGtCQUFJd0csT0FBTyxDQUFDZ0IsZUFBUixLQUE0QjdELFNBQWhDLEVBQ0k2QyxPQUFPLENBQUNnQixlQUFSLEdBQTBCbkIsT0FBTyxDQUFDVSxLQUFSLENBQWNVLE9BQXhDO0FBQ0pwQixxQkFBTyxDQUFDVSxLQUFSLENBQWNVLE9BQWQsR0FBd0IsTUFBeEI7QUFDSDs7QUFQRDtBQUFBO0FBQUE7O0FBQUE7QUFRQSxvQ0FBa0JoQixLQUFsQixtSUFBd0I7QUFBQSxvQkFBZGEsS0FBYztBQUNwQixvQkFBTUMsVUFBUyxHQUFHZixPQUFPLENBQUNjLEtBQUQsQ0FBekI7QUFDQSxvQkFBSUMsVUFBUyxLQUFLNUQsU0FBbEIsRUFDSTtBQUNKLG9CQUFJNkMsT0FBTyxDQUFDLGFBQVdjLEtBQVosQ0FBUCxLQUE2QjNELFNBQWpDLEVBQ0kwQyxPQUFPLENBQUNpQixLQUFELENBQVAsR0FBZ0JkLE9BQU8sQ0FBQyxhQUFXYyxLQUFaLENBQXZCO0FBQ1A7QUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUg7QUFDSjtBQUNKO0FBRUo7OztxQ0FFZ0IzRyxHLEVBQUsrRCxPLEVBQVE7QUFFMUIsVUFBSUEsT0FBSixFQUNJOztBQUVKLGVBQVNpRCxjQUFULENBQXdCQyxHQUF4QixFQUE2QjtBQUN6QixlQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWSx1QkFBWixFQUFxQyxNQUFyQyxDQUFQO0FBQ0g7O0FBRUQsVUFBSWxILEdBQUcsQ0FBQ21ILE9BQUosS0FBZ0JuRSxTQUFoQixJQUE2QmhELEdBQUcsQ0FBQ21ILE9BQUosQ0FBWTVJLE1BQVosR0FBcUIsQ0FBdEQsRUFBd0Q7QUFDcEQsWUFBTTRJLE9BQU8sR0FBR0MsaUVBQVUsRUFBMUI7O0FBQ0EsYUFBSSxJQUFJbkMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDakYsR0FBRyxDQUFDbUgsT0FBSixDQUFZNUksTUFBMUIsRUFBaUMwRyxDQUFDLEVBQWxDLEVBQXFDO0FBQ2pDLGNBQUlvQyxhQUFhLEdBQUdySCxHQUFHLENBQUNtSCxPQUFKLENBQVlsQyxDQUFaLENBQXBCO0FBQ0EsY0FBSXFDLFVBQVUsU0FBZDtBQUFBLGNBQWdCQyxZQUFZLFNBQTVCOztBQUNBLGNBQUlGLGFBQWEsWUFBWUcsS0FBN0IsRUFBbUM7QUFBQSxpQ0FDYUgsYUFEYjs7QUFBQTs7QUFDOUJBLHlCQUQ4QjtBQUNmQyxzQkFEZTtBQUNIQyx3QkFERztBQUVsQzs7QUFDRCxjQUFJLEVBQUVGLGFBQWEsWUFBWUksTUFBM0IsQ0FBSixFQUF1QztBQUNuQ0oseUJBQWEsR0FBRyxJQUFJSSxNQUFKLENBQVcsTUFBSVQsY0FBYyxDQUFDSyxhQUFELENBQWxCLEdBQWtDLEdBQTdDLENBQWhCO0FBQ0g7O0FBQ0QsZUFBSSxJQUFJSyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNQLE9BQU8sQ0FBQzVJLE1BQXRCLEVBQTZCbUosQ0FBQyxFQUE5QixFQUFpQztBQUM3QixnQkFBTUMsTUFBTSxHQUFHUixPQUFPLENBQUNPLENBQUQsQ0FBdEI7QUFDQSxnQkFBTUUsS0FBSyxHQUFHUCxhQUFhLENBQUNRLElBQWQsQ0FBbUJGLE1BQU0sQ0FBQ3RLLElBQTFCLENBQWQ7O0FBQ0EsZ0JBQUl1SyxLQUFLLEtBQUssSUFBZCxFQUFtQjtBQUNmO0FBQ0FFLHFCQUFPLENBQUNDLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQ0osTUFBTSxDQUFDdEssSUFBekMsRUFDSSxrQkFESixFQUN3QmdLLGFBRHhCLEVBRUksT0FGSixFQUVhQyxVQUZiLEVBR0ksU0FISixFQUdlQyxZQUhmO0FBSUFTLGlGQUFZLENBQUNMLE1BQU0sQ0FBQ3RLLElBQVIsRUFBY2lLLFVBQWQsRUFBMEJDLFlBQTFCLENBQVo7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUVKOzs7d0JBOVFrQjtBQUNmLGFBQU8sS0FBS3BJLE1BQUwsQ0FBWTRELGFBQVosSUFBNkIsUUFBcEM7QUFDSDs7O3dCQUVlO0FBQ1osYUFBTyxLQUFLNUQsTUFBTCxDQUFZOEksVUFBWixJQUEwQixPQUFqQztBQUNIOzs7d0JBRWlCO0FBQ2QsYUFBTyxLQUFLOUksTUFBTCxDQUFZb0ksWUFBWixJQUE0QnZFLFNBQW5DO0FBQ0g7Ozt3QkFFMkI7QUFDeEIsYUFBTyxLQUFLN0QsTUFBTCxDQUFZK0ksc0JBQVosSUFBc0MsR0FBN0M7QUFDSDs7O3dCQWtDb0I7QUFDakIsVUFBTTFJLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxXQUFJLElBQUl5RixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBSzlGLE1BQUwsQ0FBWVUsSUFBWixDQUFpQnRCLE1BQS9CLEVBQXNDMEcsQ0FBQyxFQUF2QyxFQUEwQztBQUN0QyxZQUFNakYsR0FBRyxHQUFHLEtBQUtiLE1BQUwsQ0FBWVUsSUFBWixDQUFpQm9GLENBQWpCLENBQVo7QUFDQXpGLGdCQUFRLENBQUNRLEdBQUcsQ0FBQzNDLElBQUwsQ0FBUixHQUFxQixLQUFLZ0gsaUJBQUwsQ0FBdUJyRSxHQUF2QixDQUFyQjtBQUNIOztBQUNELGFBQU9SLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkw7QUFFQTtBQUVBO0FBQ0E7QUFDQSxJQUFHMkksS0FBSCxFQUFlQyxFQUFBO0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLE1BQU0sR0FBRzdDLFFBQVEsQ0FBQzhDLGFBQVQsSUFBMEJDLGdFQUFzQixFQUEvRDtBQUNBLElBQU1DLGNBQWMsR0FBR0MsTUFBTSxDQUFDQyxNQUE5QjtBQUNBLElBQU1DLHFCQUFxQixHQUFHQyxnRUFBWSxDQUFDQyxvREFBRCxDQUExQztBQUNBLElBQU1DLFVBQVUsR0FBR1QsTUFBTSxDQUFDeEMsT0FBUCxDQUFlMUcsTUFBZixJQUF5QixhQUE1QztBQUNBLElBQU00SixVQUFVLEdBQUdWLE1BQU0sQ0FBQ3hDLE9BQVAsQ0FBZWtELFVBQWYsS0FBOEIsTUFBakQ7QUFDQSxJQUFNM0osV0FBVyxHQUFHaUosTUFBTSxDQUFDeEMsT0FBUCxDQUFlekcsV0FBZixJQUE4QixPQUFsRDtBQUNBLElBQU1ELE1BQU0sR0FBR3NKLE1BQU0sQ0FBQ0ssVUFBRCxDQUFyQjtBQUNBLElBQU1FLFFBQVEsR0FBRyxFQUFqQjtBQUVBUCxNQUFNLENBQUNDLE1BQVAsR0FBZ0JPLFVBQWhCOztBQUVBLElBQUlkLEtBQUosRUFBZ0IsRUFJZjs7QUFFRCxTQUFTZSxZQUFULENBQXNCL0osTUFBdEIsRUFBNkI7QUFDekIsU0FBT0EsTUFBTSxDQUFDZ0ssU0FBUCxJQUFvQixPQUEzQjtBQUNIOztBQUVELFNBQVNDLFVBQVQsQ0FBb0JqSyxNQUFwQixFQUEyQjtBQUN2QixNQUFNcEIsRUFBRSxHQUFHbUwsWUFBWSxDQUFDL0osTUFBRCxDQUF2QjtBQUNBLE1BQUl1RyxPQUFPLEdBQUdGLFFBQVEsQ0FBQzZELGNBQVQsQ0FBd0J0TCxFQUF4QixDQUFkOztBQUNBLE1BQUkySCxPQUFPLEtBQUssSUFBaEIsRUFBcUI7QUFDakJBLFdBQU8sR0FBR0YsUUFBUSxDQUFDUyxhQUFULENBQXVCLEtBQXZCLENBQVY7QUFDQVAsV0FBTyxDQUFDM0gsRUFBUixHQUFhQSxFQUFiO0FBQ0F5SCxZQUFRLENBQUM4RCxJQUFULENBQWNDLFdBQWQsQ0FBMEI3RCxPQUExQjtBQUNIOztBQUNELFNBQU9BLE9BQVA7QUFDSDs7QUFFRCxTQUFTOEQsZUFBVCxDQUF5QnJLLE1BQXpCLEVBQWdDO0FBQzVCLE1BQU1zSyxLQUFLLEdBQUcsSUFBSUMsR0FBSixDQUFRLEVBQVIsQ0FBZDtBQUNBN0YsNERBQU0sQ0FBQzRGLEtBQUQsRUFBUWQscUJBQVIsQ0FBTjtBQUNBOUUsNERBQU0sQ0FBQzRGLEtBQUQsRUFBUWIsZ0VBQVksQ0FBQ3pKLE1BQU0sQ0FBQzBKLFlBQVAsSUFBdUIsRUFBeEIsQ0FBcEIsQ0FBTjtBQUNBLFNBQU9ZLEtBQVA7QUFDSDs7QUFFRCxJQUFJRSxHQUFHLEdBQUcsQ0FBVjtBQUVPLFNBQVNDLFdBQVQsQ0FBcUJ6SyxNQUFyQixFQUE2Qk4sSUFBN0IsRUFBa0M7QUFDckMsTUFBSU0sTUFBTSxLQUFLNkQsU0FBZixFQUNJLE9BRmlDLENBR3JDOztBQUNBLE1BQUk2RyxPQUFPLEdBQUcsQ0FBZDtBQUNBLE1BQUloTCxJQUFKLEVBQ0lnTCxPQUFPLEdBQUdGLEdBQUcsRUFBYjtBQUNKLE1BQU1qRSxPQUFPLEdBQUcwRCxVQUFVLENBQUNqSyxNQUFELENBQTFCO0FBQ0EsTUFBTXNLLEtBQUssR0FBR0QsZUFBZSxDQUFDckssTUFBRCxDQUE3QjtBQUNBLE1BQU1MLE9BQU8sR0FBR2dMLFVBQVUsQ0FBQzNLLE1BQUQsQ0FBMUI7QUFDQSxNQUFNMkIsSUFBSSxHQUFHM0IsTUFBTSxDQUFDMkIsSUFBUCxJQUFlQyw0REFBUSxFQUFwQzs7QUFDQSxNQUFNZ0osRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBYTtBQUFBLHNDQUFUQyxJQUFTO0FBQVRBLFVBQVM7QUFBQTs7QUFBQyxXQUFPeE0sNkNBQUMsTUFBRCxVQUFFaU0sS0FBRixFQUFTM0ksSUFBVCxTQUFrQmtKLElBQWxCLEVBQVA7QUFBK0IsR0FBeEQ7O0FBQ0EsTUFBTWhLLEdBQUcsR0FBR2lLLG9EQUFNLENBQUMsNERBQUMseURBQUQ7QUFBSyxLQUFDLEVBQUVGLEVBQVI7QUFDZixlQUFXLEVBQUUzSyxXQURFO0FBRWYsV0FBTyxFQUFFTixPQUZNO0FBR2YsVUFBTSxFQUFFSyxNQUhPO0FBSWYsUUFBSSxFQUFFMEs7QUFKUyxJQUFELEVBSUtuRSxPQUpMLENBQWxCO0FBS0EsU0FBTzFGLEdBQVA7QUFDSDtBQUVNLFNBQVNpSixVQUFULENBQW9CcEwsQ0FBcEIsRUFBc0I7QUFDekIsTUFBSSxDQUFDa0wsVUFBTCxFQUNJYSxXQUFXLENBQUN6SyxNQUFELENBQVg7O0FBQ0osTUFBSXFKLGNBQWMsS0FBSyxJQUF2QixFQUE0QjtBQUN4QkEsa0JBQWMsQ0FBQzNLLENBQUQsQ0FBZDtBQUNIO0FBQ0o7QUFFTSxTQUFTaU0sVUFBVCxDQUFvQkksSUFBcEIsRUFBeUI7QUFDNUJBLE1BQUksR0FBR0EsSUFBSSxJQUFJL0ssTUFBZjtBQUNBLE1BQU05QixJQUFJLEdBQUc2TCxZQUFZLENBQUNnQixJQUFELENBQXpCO0FBQ0EsTUFBSWxCLFFBQVEsQ0FBQzNMLElBQUQsQ0FBUixLQUFtQjJGLFNBQXZCLEVBQ0lnRyxRQUFRLENBQUMzTCxJQUFELENBQVIsR0FBaUIsSUFBSXVGLHVEQUFKLENBQW1Cc0gsSUFBbkIsQ0FBakI7QUFDSixTQUFPbEIsUUFBUSxDQUFDM0wsSUFBRCxDQUFmO0FBQ0g7QUFFTSxTQUFTd0IsSUFBVCxDQUFjcUwsSUFBZCxFQUFtQjtBQUN0QkEsTUFBSSxHQUFHQSxJQUFJLElBQUkvSyxNQUFmO0FBQ0F5SyxhQUFXLENBQUNNLElBQUQsRUFBTyxJQUFQLENBQVg7QUFDQSxTQUFPLEtBQVA7QUFDSDtBQUVNLFNBQVNDLE9BQVQsR0FBa0I7QUFDckIsU0FBT0MsYUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0Q7QUFFTyxJQUFNQyxXQUFiO0FBQUE7QUFBQTtBQUNJLHVCQUFZdkwsT0FBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLbUosVUFBTCxHQUFrQm5KLE9BQU8sQ0FBQ21KLFVBQTFCO0FBQ0EsU0FBS1YsWUFBTCxHQUFvQnpJLE9BQU8sQ0FBQ3lJLFlBQTVCO0FBQ0EsU0FBS1csc0JBQUwsR0FBOEJwSixPQUFPLENBQUNvSixzQkFBdEM7QUFDSDs7QUFMTDtBQUFBO0FBQUEsMEJBT1U7QUFDRixVQUFNUCxNQUFNLEdBQUcyQywrREFBUyxDQUFDLEtBQUtyQyxVQUFOLENBQXhCO0FBQ0EsYUFBT04sTUFBTSxHQUNQQSxNQUFNLENBQUM1SCxLQURBLEdBRVAsSUFGTjtBQUdIO0FBWkw7QUFBQTtBQUFBLHdCQWNRQSxLQWRSLEVBY2U7QUFDUCxhQUFPd0ssK0RBQVMsQ0FBQyxLQUFLdEMsVUFBTixFQUFrQmxJLEtBQWxCLEVBQXlCLEtBQUttSSxzQkFBOUIsRUFBc0QsS0FBS1gsWUFBM0QsQ0FBaEI7QUFDSDtBQWhCTDtBQUFBO0FBQUEsOEJBa0JhO0FBQ0wsYUFBT1Msa0VBQVksQ0FBQyxLQUFLQyxVQUFOLENBQW5CO0FBQ0g7QUFwQkw7O0FBQUE7QUFBQTtBQXVCTyxJQUFNdUMsaUJBQWI7QUFBQTtBQUFBO0FBQ0ksNkJBQVkxTCxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLFNBQUtzRixHQUFMLEdBQVd0RixPQUFPLENBQUNtSixVQUFuQjtBQUNIOztBQUhMO0FBQUE7QUFBQSwwQkFLVTtBQUNGLGFBQU93QyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsS0FBS3RHLEdBQTFCLENBQVA7QUFDSDtBQVBMO0FBQUE7QUFBQSx3QkFTUXJFLEtBVFIsRUFTZTtBQUNQLGFBQU8wSyxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsS0FBS3ZHLEdBQTFCLEVBQStCckUsS0FBL0IsQ0FBUDtBQUNIO0FBWEw7QUFBQTtBQUFBLDhCQWFhO0FBQ0wsYUFBTzBLLFlBQVksQ0FBQ0csVUFBYixDQUF3QixLQUFLeEcsR0FBN0IsQ0FBUDtBQUNIO0FBZkw7O0FBQUE7QUFBQTtBQWtCQSxJQUFNdEIsTUFBTSxHQUFHO0FBQ1gsWUFBVXVILFdBREM7QUFFWCxrQkFBZ0JHO0FBRkwsQ0FBZjtBQUtlMUgscUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoREEsa0JBQWtCLGdCQUFnQiw4SUFBOEksa0ZBQWtGLGNBQWMsTUFBTSxrQkFBa0IsK01BQStNLFNBQVMsZ0NBQWdDLHlFQUF5RSxjQUFjLDRJQUE0SSxXQUFXLHVHQUF1RyxhQUFhLDZFQUE2RSwrQ0FBK0MsbUM7Ozs7Ozs7Ozs7O0FDQTkvQixrQkFBa0IsZ0JBQWdCLDJOQUEyTix1Q0FBdUMsY0FBYyxLQUFLLGtCQUFrQiwrVUFBK1UsNEtBQTRLLGNBQWMsdUlBQXVJLFdBQVcsb0hBQW9ILGFBQWEsZ0ZBQWdGLHVDQUF1QyxxQzs7Ozs7Ozs7Ozs7QUNBNXRDLGtCQUFrQixnQkFBZ0IsNkpBQTZKLHlGQUF5RixjQUFjLE1BQU0sa0JBQWtCLGlPQUFpTyxTQUFTLCtCQUErQiwrRUFBK0UsY0FBYywySUFBMkksV0FBVyx5R0FBeUcsYUFBYSxnR0FBZ0csd0NBQXdDLDJDOzs7Ozs7Ozs7OztBQ0F4akMsa0JBQWtCLGdCQUFnQixtSkFBbUosZ0VBQWdFLGNBQWMsTUFBTSxrQkFBa0IsK05BQStOLFNBQVMsNkJBQTZCLG9JQUFvSSxjQUFjLHNGQUFzRixXQUFXLHdGQUF3RixhQUFhLGdGQUFnRiwyQ0FBMkMsaUM7Ozs7Ozs7Ozs7O0FDQW4vQixrQkFBa0IsZ0JBQWdCLG1KQUFtSiwrRUFBK0UsY0FBYyxNQUFNLGtCQUFrQixtTUFBbU0sU0FBUyxtQ0FBbUMsOEVBQThFLGNBQWMsNklBQTZJLFdBQVcsK0dBQStHLGFBQWEsMEVBQTBFLG9DQUFvQyxpQzs7Ozs7Ozs7Ozs7QUNBdi9CLGtCQUFrQixnQkFBZ0Isd0hBQXdILDhEQUE4RCxjQUFjLE1BQU0sa0JBQWtCLG9MQUFvTCxTQUFTLDZCQUE2Qiw0RUFBNEUsY0FBYyxxRUFBcUUsV0FBVyx1R0FBdUcsYUFBYSxnRUFBZ0UsNkRBQTZELHVDOzs7Ozs7Ozs7OztBQ0FuM0Isa0JBQWtCLGdCQUFnQix3S0FBd0ssd0ZBQXdGLGNBQWMsTUFBTSxrQkFBa0IsNk5BQTZOLFNBQVMsa0NBQWtDLDRFQUE0RSxjQUFjLG1IQUFtSCxXQUFXLDhHQUE4RyxhQUFhLG1GQUFtRixtREFBbUQsbUM7Ozs7Ozs7Ozs7O0FDQXppQyxrQkFBa0IsZ0JBQWdCLCtJQUErSSwwRUFBMEUsY0FBYyxNQUFNLGtCQUFrQixxTkFBcU4sU0FBUyxpQ0FBaUMsMEVBQTBFLGNBQWMsa0hBQWtILFdBQVcseUdBQXlHLGFBQWEsd0VBQXdFLHNDQUFzQyw4Qjs7Ozs7Ozs7Ozs7QUNBejlCLGtCQUFrQixnQkFBZ0IsMklBQTJJLHlGQUF5RixjQUFjLE1BQU0sa0JBQWtCLGtNQUFrTSxTQUFTLG1DQUFtQyx3RUFBd0UsY0FBYywrSEFBK0gsV0FBVyxrSEFBa0gsYUFBYSw2RUFBNkUsb0NBQW9DLGlDOzs7Ozs7Ozs7Ozs7QUNBMStCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlO0FBQ1grSCxJQUFFLEVBQUZBLDhDQURXO0FBRVhDLElBQUUsRUFBRkEsOENBRlc7QUFHWEMsSUFBRSxFQUFGQSw4Q0FIVztBQUlYQyxJQUFFLEVBQUZBLDhDQUpXO0FBS1hDLElBQUUsRUFBRkEsOENBTFc7QUFNWEMsSUFBRSxFQUFGQSw4Q0FOVztBQU9YQyxJQUFFLEVBQUZBLDhDQVBXO0FBUVhDLElBQUUsRUFBRkEsOENBUlc7QUFTWEMsSUFBRSxFQUFGQSw4Q0FUVztBQVVYQyxJQUFFLEVBQUZBLDhDQVZXO0FBV1hDLElBQUUsRUFBRkEsK0NBWFc7QUFZWEMsSUFBRSxFQUFGQSwrQ0FaVztBQWFYQyxJQUFFLEVBQUZBLCtDQWJXO0FBY1hDLElBQUUsRUFBRkEsK0NBZFc7QUFlWEMsU0FBTyxFQUFQQSxvREFmVztBQWdCWEMsSUFBRSxFQUFGQSwrQ0FoQlc7QUFpQlhDLElBQUUsRUFBRkEsK0NBakJXO0FBa0JYQyxJQUFFLEVBQUZBLCtDQUFFQTtBQWxCUyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDdEJBLGtCQUFrQixnQkFBZ0IsZ0pBQWdKLHFFQUFxRSxjQUFjLE1BQU0sa0JBQWtCLG9NQUFvTSxTQUFTLGlDQUFpQyxzRUFBc0UsY0FBYyxtSEFBbUgsV0FBVyxvR0FBb0csYUFBYSxtRkFBbUYsc0NBQXNDLG9DOzs7Ozs7Ozs7OztBQ0F2OEIsa0JBQWtCLGdCQUFnQixvSkFBb0osNEVBQTRFLGNBQWMsTUFBTSxrQkFBa0IsOExBQThMLFNBQVMsNkJBQTZCLDBFQUEwRSxjQUFjLG1IQUFtSCxXQUFXLDhGQUE4RixhQUFhLCtFQUErRSwrQ0FBK0MsdUM7Ozs7Ozs7Ozs7O0FDQTM4QixrQkFBa0IsZ0JBQWdCLHdJQUF3SSx3RUFBd0UsY0FBYyxNQUFNLGtCQUFrQixzTUFBc00sU0FBUywyQkFBMkIscURBQXFELGNBQWMsa0ZBQWtGLFdBQVcsZ0dBQWdHLGFBQWEsaUZBQWlGLHdDQUF3QyxnQzs7Ozs7Ozs7Ozs7QUNBeDRCLGtCQUFrQixnQkFBZ0IsK0lBQStJLG1GQUFtRixjQUFjLE1BQU0sa0JBQWtCLHlLQUF5SyxTQUFTLHNDQUFzQywyRUFBMkUsY0FBYyx5SEFBeUgsV0FBVyxxR0FBcUcsYUFBYSw2RUFBNkUsbUNBQW1DLHNDOzs7Ozs7Ozs7OztBQ0FqOEIsa0JBQWtCLGdCQUFnQiw0SkFBNEosK0VBQStFLGNBQWMsTUFBTSxrQkFBa0Isa01BQWtNLFNBQVMsa0NBQWtDLHdEQUF3RCxjQUFjLCtIQUErSCxXQUFXLDBHQUEwRyxhQUFhLDRGQUE0Rix1Q0FBdUMsa0M7Ozs7Ozs7Ozs7O0FDQTErQixrQkFBa0IsZ0JBQWdCLDZJQUE2SSwyRUFBMkUsY0FBYyxNQUFNLGtCQUFrQiw0TEFBNEwsU0FBUyxpQ0FBaUMsMkVBQTJFLGNBQWMsZ0hBQWdILFdBQVcsMkdBQTJHLGFBQWEsd0VBQXdFLHNDQUFzQyw4Qjs7Ozs7Ozs7Ozs7QUNBaDhCLGtCQUFrQixnQkFBZ0IsMElBQTBJLDJFQUEyRSxjQUFjLE1BQU0sa0JBQWtCLDBMQUEwTCxTQUFTLGlDQUFpQywyRUFBMkUsY0FBYyxnSEFBZ0gsV0FBVywyR0FBMkcsYUFBYSx3RUFBd0Usc0NBQXNDLDhCOzs7Ozs7Ozs7OztBQ0EzN0Isa0JBQWtCLGdCQUFnQixzSUFBc0ksOERBQThELGNBQWMsTUFBTSxrQkFBa0IsNkxBQTZMLFNBQVMsMkJBQTJCLG1FQUFtRSxjQUFjLGdIQUFnSCxXQUFXLGdIQUFnSCxhQUFhLDRFQUE0RSx1Q0FBdUMsOEI7Ozs7Ozs7Ozs7O0FDQXo2QixrQkFBa0IsZ0JBQWdCLGdKQUFnSiwrREFBK0QsY0FBYyx1QkFBdUIsa0JBQWtCLHFMQUFxTCxTQUFTLG9DQUFvQyx3RUFBd0UsY0FBYyx1R0FBdUcsV0FBVyxxR0FBcUcsYUFBYSw0RUFBNEUsdUNBQXVDLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoN0IsU0FBUzNKLFdBQVQsQ0FBcUJoRCxNQUFyQixFQUE0QjtBQUMvQixNQUFNeEIsUUFBUSxHQUFHLElBQUkwRixHQUFKLENBQVEsRUFBUixDQUFqQjs7QUFDQSxPQUFJLElBQUk0QixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUM5RixNQUFNLENBQUNVLElBQVAsQ0FBWXRCLE1BQTFCLEVBQWlDMEcsQ0FBQyxFQUFsQyxFQUFxQztBQUNqQyxRQUFNOEcsV0FBVyxHQUFHNU0sTUFBTSxDQUFDVSxJQUFQLENBQVlvRixDQUFaLEVBQWV0SCxRQUFmLElBQTJCLEVBQS9DOztBQUNBLFNBQUksSUFBSStKLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3FFLFdBQVcsQ0FBQ3hOLE1BQTFCLEVBQWlDbUosQ0FBQyxFQUFsQztBQUNJL0osY0FBUSxDQUFDZ0csR0FBVCxDQUFhb0ksV0FBVyxDQUFDckUsQ0FBRCxDQUF4QjtBQURKO0FBRUg7O0FBQ0QsU0FBT0YsS0FBSyxDQUFDd0UsSUFBTixDQUFXck8sUUFBWCxDQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTSxTQUFTeUosVUFBVCxHQUFxQjtBQUN4QixNQUFNNkUsYUFBYSxHQUFHekcsUUFBUSxDQUFDbUMsTUFBVCxDQUFnQnVFLEtBQWhCLENBQXNCLEdBQXRCLENBQXRCO0FBQ0EsTUFBTS9FLE9BQU8sR0FBRyxFQUFoQjtBQUNBLE1BQU1nRixLQUFLLEdBQUcsSUFBSTFFLE1BQUosQ0FBVyw2QkFBWCxDQUFkOztBQUNBLE9BQUksSUFBSXhDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ2dILGFBQWEsQ0FBQzFOLE1BQTVCLEVBQW1DMEcsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQyxRQUFNbUgsU0FBUyxHQUFHSCxhQUFhLENBQUNoSCxDQUFELENBQS9CO0FBQ0EsUUFBTTJDLEtBQUssR0FBR3VFLEtBQUssQ0FBQ3RFLElBQU4sQ0FBV3VFLFNBQVgsQ0FBZDtBQUNBLFFBQUl4RSxLQUFLLEtBQUssSUFBZCxFQUNJO0FBQ0pULFdBQU8sQ0FBQ2tGLElBQVIsQ0FBYTtBQUNUaFAsVUFBSSxFQUFFdUssS0FBSyxDQUFDLENBQUQsQ0FERjtBQUVUN0gsV0FBSyxFQUFFNkgsS0FBSyxDQUFDLENBQUQ7QUFGSCxLQUFiO0FBSUg7O0FBQ0QsU0FBT1QsT0FBUDtBQUNIO0FBRU0sU0FBU21ELFNBQVQsQ0FBbUJqTixJQUFuQixFQUF5QjtBQUM1QixNQUFNOEosT0FBTyxHQUFHQyxVQUFVLEVBQTFCOztBQUNBLE9BQUksSUFBSW5DLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ2tDLE9BQU8sQ0FBQzVJLE1BQXRCLEVBQTZCMEcsQ0FBQyxFQUE5QixFQUFpQztBQUM3QixRQUFJa0MsT0FBTyxDQUFDbEMsQ0FBRCxDQUFQLENBQVc1SCxJQUFYLEtBQW9CQSxJQUF4QixFQUNJLE9BQU84SixPQUFPLENBQUNsQyxDQUFELENBQWQ7QUFDUDs7QUFDRCxTQUFPLElBQVA7QUFDSCxDLENBR0Q7O0FBQ08sU0FBU3NGLFNBQVQsQ0FBbUJsTixJQUFuQixFQUF5QjBDLEtBQXpCLEVBQWdDdU0sSUFBaEMsRUFBc0NDLE1BQXRDLEVBQThDO0FBQ2pELE1BQUlDLE9BQU8sR0FBRyxFQUFkOztBQUNBLE1BQUlGLElBQUosRUFBVTtBQUNOLFFBQU1HLElBQUksR0FBRyxJQUFJQyxJQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxPQUFMLENBQWFGLElBQUksQ0FBQ0csT0FBTCxLQUFrQk4sSUFBSSxHQUFDLEVBQUwsR0FBUSxFQUFSLEdBQVcsRUFBWCxHQUFjLElBQTdDO0FBQ0FFLFdBQU8sR0FBRyxlQUFlQyxJQUFJLENBQUNJLFdBQUwsRUFBekI7QUFDSDs7QUFDRCxNQUFJTixNQUFNLEtBQUt2SixTQUFmLEVBQTBCO0FBQ3RCd0osV0FBTyxJQUFJLGNBQWNELE1BQXpCO0FBQ0g7O0FBQ0QvRyxVQUFRLENBQUNtQyxNQUFULEdBQWtCdEssSUFBSSxHQUFHLEdBQVAsSUFBYzBDLEtBQUssSUFBSSxFQUF2QixJQUE4QnlNLE9BQTlCLEdBQXdDLFVBQTFEO0FBQ0g7QUFFTSxTQUFTeEUsWUFBVCxDQUFzQjNLLElBQXRCLEVBQTRCeVAsSUFBNUIsRUFBa0NQLE1BQWxDLEVBQTBDO0FBQzdDLE1BQUl0RixHQUFHLEdBQUc1SixJQUFJLEdBQUMsdUJBQWYsQ0FENkMsQ0FFN0M7O0FBQ0FtSSxVQUFRLENBQUNtQyxNQUFULEdBQWtCVixHQUFsQjtBQUNBQSxLQUFHLElBQUksWUFBVTZGLElBQUksSUFBSSxHQUFsQixJQUF1QixHQUE5QixDQUo2QyxDQUs3Qzs7QUFDQXRILFVBQVEsQ0FBQ21DLE1BQVQsR0FBa0JWLEdBQWxCOztBQUNBLE1BQUlzRixNQUFNLEtBQUt2SixTQUFmLEVBQTBCO0FBQ3RCaUUsT0FBRyxJQUFJLGFBQVdzRixNQUFYLEdBQWtCLEdBQXpCLENBRHNCLENBRXRCOztBQUNBL0csWUFBUSxDQUFDbUMsTUFBVCxHQUFrQlYsR0FBbEI7QUFDSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERELElBQU04RixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDOUYsR0FBRCxFQUFrQjtBQUFBLG9DQUFUK0YsSUFBUztBQUFUQSxRQUFTO0FBQUE7O0FBQzdCLE1BQU14UCxDQUFDLFdBQVV3UCxJQUFJLENBQUMsQ0FBRCxDQUFkLENBQVA7O0FBQ0EsTUFBSWhELElBQUo7QUFDQSxNQUFJZ0QsSUFBSSxDQUFDek8sTUFBTCxLQUFnQixDQUFwQixFQUNJeUwsSUFBSSxHQUFHLEVBQVAsQ0FESixLQUdJQSxJQUFJLEdBQUl4TSxDQUFDLEtBQUssUUFBTixJQUFrQkEsQ0FBQyxLQUFLLFFBQXpCLEdBQ0hnSyxLQUFLLENBQUN5RixTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJILElBQTNCLENBREcsR0FFREEsSUFBSSxDQUFDLENBQUQsQ0FGVjtBQUlKLE1BQU1JLE1BQU0sR0FBRyxFQUFmO0FBRUEsTUFBSUMsQ0FBQyxHQUFHcEcsR0FBRyxDQUFDcUcsUUFBSixFQUFSOztBQUNBLFNBQU1ELENBQUMsQ0FBQzlPLE1BQUYsR0FBVyxDQUFqQixFQUFtQjtBQUNmLFFBQU1nUCxDQUFDLEdBQUdGLENBQUMsQ0FBQ3pGLEtBQUYsQ0FBUSwyQkFBUixDQUFWOztBQUNBLFFBQUkyRixDQUFDLEtBQUssSUFBVixFQUFlO0FBQ1gsVUFBTUMsSUFBSSxHQUFHSCxDQUFDLENBQUNJLE1BQUYsQ0FBUyxDQUFULEVBQVlGLENBQUMsQ0FBQ0csS0FBZCxDQUFiO0FBQ0FMLE9BQUMsR0FBR0EsQ0FBQyxDQUFDSSxNQUFGLENBQVNGLENBQUMsQ0FBQ0csS0FBRixHQUFRSCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtoUCxNQUF0QixDQUFKO0FBQ0EsVUFBTW9QLENBQUMsR0FBR0MsUUFBUSxDQUFDTCxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQWxCO0FBQ0FILFlBQU0sQ0FBQ2YsSUFBUCxDQUFZbUIsSUFBWixFQUpXLENBS1g7O0FBQ0EsVUFBSUcsQ0FBQyxJQUFJQSxDQUFULEVBQVc7QUFBRTtBQUNUUCxjQUFNLENBQUNmLElBQVAsQ0FBWXJDLElBQUksQ0FBQ3VELENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBaEI7QUFDSCxPQUZELE1BRU87QUFBRTtBQUNMSCxjQUFNLENBQUNmLElBQVAsQ0FBWXJDLElBQUksQ0FBQzJELENBQUQsQ0FBaEI7QUFDSDtBQUNKLEtBWEQsTUFXTztBQUNIUCxZQUFNLENBQUNmLElBQVAsQ0FBWWdCLENBQVo7QUFDQUEsT0FBQyxHQUFHLEVBQUo7QUFDSDtBQUNKOztBQUNELFNBQU9ELE1BQVA7QUFDSCxDQWhDRDs7QUFrQ08sU0FBU3JNLFFBQVQsR0FBbUI7QUFDdEIsTUFBTUQsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPMkgsTUFBTSxDQUFDMUgsUUFBZCxLQUEyQixRQUEzQixHQUFzQzBILE1BQU0sQ0FBQzFILFFBQTdDLEdBQXdELElBQXpELEtBQWtFeUUsUUFBUSxDQUFDcUksZUFBVCxDQUF5Qi9NLElBQTNGLElBQW1HLElBQXBHLEVBQTBHZ04sV0FBMUcsRUFBYjtBQUNBLE1BQU0zQixLQUFLLEdBQUcsSUFBSTFFLE1BQUosQ0FBVyxxQkFBWCxDQUFkO0FBQ0EsTUFBTXNHLE1BQU0sR0FBRzVCLEtBQUssQ0FBQ3RFLElBQU4sQ0FBVy9HLElBQVgsQ0FBZjs7QUFDQSxNQUFJaU4sTUFBTSxLQUFLLElBQWYsRUFBb0I7QUFDaEIsV0FBT2pOLElBQVA7QUFDSDs7QUFDRCxTQUFPaU4sTUFBTSxDQUFDLENBQUQsQ0FBYjtBQUNIOztBQUVELFNBQVNDLElBQVQsQ0FBY0MsQ0FBZCxFQUFpQjdKLEdBQWpCLEVBQXNCOEosWUFBdEIsRUFBbUM7QUFDL0IsTUFBSUMsRUFBRSxHQUFHL0osR0FBVDtBQUNBLE1BQUksQ0FBQ29ELEtBQUssQ0FBQzRHLE9BQU4sQ0FBY0QsRUFBZCxDQUFMLEVBQ0lBLEVBQUUsR0FBRyxDQUFDQSxFQUFELENBQUw7QUFDSixNQUFJRSxFQUFFLEdBQUdKLENBQVQ7O0FBQ0EsT0FBSSxJQUFJaEosQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDa0osRUFBRSxDQUFDNVAsTUFBakIsRUFBd0IwRyxDQUFDLEVBQXpCLEVBQTRCO0FBQ3hCLFFBQUlvSixFQUFFLEtBQUtyTCxTQUFYLEVBQ0ksT0FBT2tMLFlBQVA7QUFDSixRQUFJRyxFQUFFLFlBQVkzRSxHQUFsQixFQUNJMkUsRUFBRSxHQUFHQSxFQUFFLENBQUM5SixHQUFILENBQU80SixFQUFFLENBQUNsSixDQUFELENBQVQsQ0FBTCxDQURKLEtBR0lvSixFQUFFLEdBQUdBLEVBQUUsQ0FBQ0YsRUFBRSxDQUFDbEosQ0FBRCxDQUFILENBQVA7QUFDUDs7QUFDRCxNQUFJb0osRUFBRSxLQUFLckwsU0FBWCxFQUNJLE9BQU9rTCxZQUFQO0FBQ0osU0FBT0csRUFBUDtBQUNIOztBQUVNLFNBQVM3USxDQUFULENBQVdpTSxLQUFYLEVBQWtCM0ksSUFBbEIsRUFBd0JzRCxHQUF4QixFQUF1QztBQUMxQyxNQUFJK0osRUFBRSxHQUFHL0osR0FBVDtBQUNBLE1BQUksQ0FBQ29ELEtBQUssQ0FBQzRHLE9BQU4sQ0FBY0QsRUFBZCxDQUFMLEVBQ0lBLEVBQUUsR0FBRyxDQUFDQSxFQUFELENBQUw7QUFDSixNQUFNcE8sS0FBSyxHQUFHaU8sSUFBSSxDQUFDdkUsS0FBRCxHQUFTM0ksSUFBVCw0QkFBa0JxTixFQUFsQixHQUFsQjs7QUFDQSxNQUFJcE8sS0FBSyxLQUFLaUQsU0FBZCxFQUF3QjtBQUNwQiwyQ0FBZ0NsQyxJQUFoQyxjQUF3Q3FOLEVBQUUsQ0FBQ2hRLElBQUgsQ0FBUSxHQUFSLENBQXhDO0FBQ0g7O0FBUHlDLHFDQUFQbVEsTUFBTztBQUFQQSxVQUFPO0FBQUE7O0FBUTFDLE1BQUlBLE1BQU0sQ0FBQy9QLE1BQVAsR0FBZ0IsQ0FBcEIsRUFDSSxPQUFPd08sTUFBTSxNQUFOLFVBQU9oTixLQUFQLFNBQWlCdU8sTUFBakIsRUFBUDtBQUNKLFNBQU92TyxLQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVNLFNBQVM2SSxZQUFULENBQXNCcUYsQ0FBdEIsRUFBd0I7QUFDM0IsTUFBTU0sRUFBRSxHQUFHLElBQUk3RSxHQUFKLENBQVEsRUFBUixDQUFYOztBQUNBLGtDQUFpQnhGLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOEosQ0FBWixDQUFqQixrQ0FBZ0M7QUFBNUIsUUFBTTdKLEdBQUcsbUJBQVQ7QUFDQSxRQUFNckUsS0FBSyxHQUFHa08sQ0FBQyxDQUFDN0osR0FBRCxDQUFmO0FBQ0EsUUFBSSxFQUFFLE9BQU9BLEdBQVAsS0FBZ0IsUUFBbEIsQ0FBSixFQUNJOztBQUNKLFFBQUksT0FBT3JFLEtBQVAsS0FBa0IsUUFBdEIsRUFBK0I7QUFDM0J3TyxRQUFFLENBQUN2SixHQUFILENBQU9aLEdBQVAsRUFBWXJFLEtBQVo7QUFDSCxLQUZELE1BR0k7QUFDQXdPLFFBQUUsQ0FBQ3ZKLEdBQUgsQ0FBT1osR0FBUCxFQUFZd0UsWUFBWSxDQUFDN0ksS0FBRCxDQUF4QjtBQUNIO0FBQ0o7O0FBQ0QsU0FBT3dPLEVBQVA7QUFDSDtBQUVNLFNBQVMxSyxNQUFULENBQWdCb0ssQ0FBaEIsRUFBbUJPLEVBQW5CLEVBQXVCQyxTQUF2QixFQUFrQ0MsS0FBbEMsRUFBd0M7QUFFM0MsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ1YsQ0FBRCxFQUFJN0osR0FBSixFQUFTckUsS0FBVCxFQUFtQjtBQUM5QixRQUFJQSxLQUFLLFlBQVkySixHQUFyQixFQUF5QjtBQUNyQixVQUFNekwsR0FBRyxHQUFHLElBQUl5TCxHQUFKLENBQVEsRUFBUixDQUFaLENBRHFCLENBRXJCOztBQUNBN0YsWUFBTSxDQUFDNUYsR0FBRCxFQUFNOEIsS0FBTixFQUFhLElBQWIsRUFBbUIsS0FBbkIsQ0FBTjtBQUNBa08sT0FBQyxDQUFDakosR0FBRixDQUFNWixHQUFOLEVBQVduRyxHQUFYO0FBQ0gsS0FMRCxNQU1JZ1EsQ0FBQyxDQUFDakosR0FBRixDQUFNWixHQUFOLEVBQVdyRSxLQUFYO0FBQ1AsR0FSRDs7QUFVQSxNQUFJLEVBQUV5TyxFQUFFLFlBQVk5RSxHQUFoQixLQUF3QixFQUFFdUUsQ0FBQyxZQUFZdkUsR0FBZixDQUE1QixFQUNJLE1BQU0sSUFBSWtGLEtBQUosQ0FBVSwwQkFBVixDQUFOO0FBQ0osTUFBSUgsU0FBUyxLQUFLekwsU0FBbEIsRUFDSXlMLFNBQVMsR0FBRyxJQUFaO0FBQ0osTUFBSUMsS0FBSyxLQUFLMUwsU0FBZCxFQUNJMEwsS0FBSyxHQUFHLEtBQVI7QUFDSixNQUFJQSxLQUFKLEVBQ0lULENBQUMsR0FBRyxJQUFJQSxDQUFDLENBQUNZLFdBQU4sQ0FBa0JaLENBQWxCLENBQUo7QUFuQnVDO0FBQUE7QUFBQTs7QUFBQTtBQW9CM0MseUJBQWlCTyxFQUFFLENBQUNySyxJQUFILEVBQWpCLDhIQUEyQjtBQUFBLFVBQWpCQyxHQUFpQjtBQUN2QixVQUFNckUsS0FBSyxHQUFHeU8sRUFBRSxDQUFDakssR0FBSCxDQUFPSCxHQUFQLENBQWQ7QUFDQSxVQUFNMEssTUFBTSxHQUFHYixDQUFDLENBQUMxSixHQUFGLENBQU1ILEdBQU4sQ0FBZjs7QUFDQSxVQUFJLENBQUM2SixDQUFDLENBQUN2SyxHQUFGLENBQU1VLEdBQU4sQ0FBTCxFQUFnQjtBQUNadUssY0FBTSxDQUFDVixDQUFELEVBQUk3SixHQUFKLEVBQVNyRSxLQUFULENBQU47QUFDSCxPQUZELE1BR0ssSUFBSUEsS0FBSyxZQUFZMkosR0FBakIsSUFBd0JvRixNQUFNLFlBQVlwRixHQUE5QyxFQUFrRDtBQUNuRHVFLFNBQUMsQ0FBQ2pKLEdBQUYsQ0FBTVosR0FBTixFQUFXUCxNQUFNLENBQUNpTCxNQUFELEVBQVMvTyxLQUFULEVBQWdCME8sU0FBaEIsRUFBMkJDLEtBQTNCLENBQWpCO0FBQ0gsT0FGSSxNQUdBO0FBQ0QsWUFBSSxDQUFDRCxTQUFMLEVBQ0k7QUFDSkUsY0FBTSxDQUFDVixDQUFELEVBQUk3SixHQUFKLEVBQVNyRSxLQUFULENBQU47QUFDSDtBQUNKO0FBbEMwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1DM0MsU0FBT2tPLENBQVA7QUFDSCxDIiwiZmlsZSI6ImtsYXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2xhcm9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2xhcm9cIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpICYmIGl0ICE9PSBudWxsKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKGl0KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmlmIChBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSB7XG4gIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoQXJyYXlQcm90b3R5cGUsIFVOU0NPUEFCTEVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHZhbHVlOiBjcmVhdGUobnVsbClcbiAgfSk7XG59XG5cbi8vIGFkZCBhIGtleSB0byBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvdHlwZVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xuXG4vLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0ICcgKyAobmFtZSA/IG5hbWUgKyAnICcgOiAnJykgKyAnaW52b2NhdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICghU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEgpID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dCwgdmFsdWU7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xuXG52YXIgcHVzaCA9IFtdLnB1c2g7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBmb3JFYWNoLCBtYXAsIGZpbHRlciwgc29tZSwgZXZlcnksIGZpbmQsIGZpbmRJbmRleCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0LCBzcGVjaWZpY0NyZWF0ZSkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBjcmVhdGUgPSBzcGVjaWZpY0NyZWF0ZSB8fCBhcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgdmFyIHRhcmdldCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbHVlLCByZXN1bHQ7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWx1ZSA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzdWx0ID0gYm91bmRGdW5jdGlvbih2YWx1ZSwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgdGFyZ2V0W2luZGV4XSA9IHJlc3VsdDsgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCkgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWx1ZTsgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHB1c2guY2FsbCh0YXJnZXQsIHZhbHVlKTsgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiB0YXJnZXQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiAgZm9yRWFjaDogY3JlYXRlTWV0aG9kKDApLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbiAgbWFwOiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuICBmaWx0ZXI6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNvbWVcbiAgc29tZTogY3JlYXRlTWV0aG9kKDMpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmV2ZXJ5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmV2ZXJ5XG4gIGV2ZXJ5OiBjcmVhdGVNZXRob2QoNCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4gIGZpbmQ6IGNyZWF0ZU1ldGhvZCg1KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZEluZGV4XG4gIGZpbmRJbmRleDogY3JlYXRlTWV0aG9kKDYpXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBjYWNoZSA9IHt9O1xuXG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIChpdCkgeyB0aHJvdyBpdDsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIG9wdGlvbnMpIHtcbiAgaWYgKGhhcyhjYWNoZSwgTUVUSE9EX05BTUUpKSByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgdmFyIEFDQ0VTU09SUyA9IGhhcyhvcHRpb25zLCAnQUNDRVNTT1JTJykgPyBvcHRpb25zLkFDQ0VTU09SUyA6IGZhbHNlO1xuICB2YXIgYXJndW1lbnQwID0gaGFzKG9wdGlvbnMsIDApID8gb3B0aW9uc1swXSA6IHRocm93ZXI7XG4gIHZhciBhcmd1bWVudDEgPSBoYXMob3B0aW9ucywgMSkgPyBvcHRpb25zWzFdIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV0gPSAhIW1ldGhvZCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIGlmIChBQ0NFU1NPUlMgJiYgIURFU0NSSVBUT1JTKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgTyA9IHsgbGVuZ3RoOiAtMSB9O1xuXG4gICAgaWYgKEFDQ0VTU09SUykgZGVmaW5lUHJvcGVydHkoTywgMSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IHRocm93ZXIgfSk7XG4gICAgZWxzZSBPWzFdID0gMTtcblxuICAgIG1ldGhvZC5jYWxsKE8sIGFyZ3VtZW50MCwgYXJndW1lbnQxKTtcbiAgfSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB2YXIgcmV0dXJuTWV0aG9kID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXR1cm5NZXRob2QgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0dXJuTWV0aG9kLmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YScpLmZhc3RLZXk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGludGVybmFsU3RhdGVHZXR0ZXJGb3IgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbiAodGhhdCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoYXQsIHtcbiAgICAgICAgdHlwZTogQ09OU1RSVUNUT1JfTkFNRSxcbiAgICAgICAgaW5kZXg6IGNyZWF0ZShudWxsKSxcbiAgICAgICAgZmlyc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgbGFzdDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplOiAwXG4gICAgICB9KTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMpIHRoYXQuc2l6ZSA9IDA7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgdGhhdCwgSVNfTUFQKTtcbiAgICB9KTtcblxuICAgIHZhciBnZXRJbnRlcm5hbFN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihDT05TVFJVQ1RPUl9OQU1FKTtcblxuICAgIHZhciBkZWZpbmUgPSBmdW5jdGlvbiAodGhhdCwga2V5LCB2YWx1ZSkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICB2YXIgcHJldmlvdXMsIGluZGV4O1xuICAgICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgZW50cnkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmxhc3QgPSBlbnRyeSA9IHtcbiAgICAgICAgICBpbmRleDogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIHByZXZpb3VzOiBwcmV2aW91cyA9IHN0YXRlLmxhc3QsXG4gICAgICAgICAgbmV4dDogdW5kZWZpbmVkLFxuICAgICAgICAgIHJlbW92ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGlmICghc3RhdGUuZmlyc3QpIHN0YXRlLmZpcnN0ID0gZW50cnk7XG4gICAgICAgIGlmIChwcmV2aW91cykgcHJldmlvdXMubmV4dCA9IGVudHJ5O1xuICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUrKztcbiAgICAgICAgZWxzZSB0aGF0LnNpemUrKztcbiAgICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSBzdGF0ZS5pbmRleFtpbmRleF0gPSBlbnRyeTtcbiAgICAgIH0gcmV0dXJuIHRoYXQ7XG4gICAgfTtcblxuICAgIHZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAvLyBmYXN0IGNhc2VcbiAgICAgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgICAgIHZhciBlbnRyeTtcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gc3RhdGUuaW5kZXhbaW5kZXhdO1xuICAgICAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gICAgICBmb3IgKGVudHJ5ID0gc3RhdGUuZmlyc3Q7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm5leHQpIHtcbiAgICAgICAgaWYgKGVudHJ5LmtleSA9PSBrZXkpIHJldHVybiBlbnRyeTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgICAgdmFyIGRhdGEgPSBzdGF0ZS5pbmRleDtcbiAgICAgICAgdmFyIGVudHJ5ID0gc3RhdGUuZmlyc3Q7XG4gICAgICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wcmV2aW91cykgZW50cnkucHJldmlvdXMgPSBlbnRyeS5wcmV2aW91cy5uZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmluZGV4XTtcbiAgICAgICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZmlyc3QgPSBzdGF0ZS5sYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUgPSAwO1xuICAgICAgICBlbHNlIHRoYXQuc2l6ZSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubmV4dDtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5pbmRleFtlbnRyeS5pbmRleF07XG4gICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubmV4dCA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucHJldmlvdXMgPSBwcmV2O1xuICAgICAgICAgIGlmIChzdGF0ZS5maXJzdCA9PSBlbnRyeSkgc3RhdGUuZmlyc3QgPSBuZXh0O1xuICAgICAgICAgIGlmIChzdGF0ZS5sYXN0ID09IGVudHJ5KSBzdGF0ZS5sYXN0ID0gcHJldjtcbiAgICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUtLTtcbiAgICAgICAgICBlbHNlIHRoYXQuc2l6ZS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMyk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uZXh0IDogc3RhdGUuZmlyc3QpIHtcbiAgICAgICAgICBib3VuZEZ1bmN0aW9uKGVudHJ5LnZhbHVlLCBlbnRyeS5rZXksIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yZW1vdmVkKSBlbnRyeSA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBJU19NQVAgPyB7XG4gICAgICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnZhbHVlO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmUodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gOiB7XG4gICAgICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgICAgIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBkZWZpbmUodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCkge1xuICAgIHZhciBJVEVSQVRPUl9OQU1FID0gQ09OU1RSVUNUT1JfTkFNRSArICcgSXRlcmF0b3InO1xuICAgIHZhciBnZXRJbnRlcm5hbENvbGxlY3Rpb25TdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgdmFyIGdldEludGVybmFsSXRlcmF0b3JTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoSVRFUkFUT1JfTkFNRSk7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgIGRlZmluZUl0ZXJhdG9yKEMsIENPTlNUUlVDVE9SX05BTUUsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgICAgIHR5cGU6IElURVJBVE9SX05BTUUsXG4gICAgICAgIHRhcmdldDogaXRlcmF0ZWQsXG4gICAgICAgIHN0YXRlOiBnZXRJbnRlcm5hbENvbGxlY3Rpb25TdGF0ZShpdGVyYXRlZCksXG4gICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgIGxhc3Q6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxJdGVyYXRvclN0YXRlKHRoaXMpO1xuICAgICAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICAgICAgdmFyIGVudHJ5ID0gc3RhdGUubGFzdDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnJlbW92ZWQpIGVudHJ5ID0gZW50cnkucHJldmlvdXM7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCFzdGF0ZS50YXJnZXQgfHwgIShzdGF0ZS5sYXN0ID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm5leHQgOiBzdGF0ZS5zdGF0ZS5maXJzdCkpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBlbnRyeS5rZXksIGRvbmU6IGZhbHNlIH07XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHsgdmFsdWU6IGVudHJ5LnZhbHVlLCBkb25lOiBmYWxzZSB9O1xuICAgICAgcmV0dXJuIHsgdmFsdWU6IFtlbnRyeS5rZXksIGVudHJ5LnZhbHVlXSwgZG9uZTogZmFsc2UgfTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJywgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoQ09OU1RSVUNUT1JfTkFNRSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FLCB3cmFwcGVyLCBjb21tb24pIHtcbiAgdmFyIElTX01BUCA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignTWFwJykgIT09IC0xO1xuICB2YXIgSVNfV0VBSyA9IENPTlNUUlVDVE9SX05BTUUuaW5kZXhPZignV2VhaycpICE9PSAtMTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIE5hdGl2ZUNvbnN0cnVjdG9yID0gZ2xvYmFsW0NPTlNUUlVDVE9SX05BTUVdO1xuICB2YXIgTmF0aXZlUHJvdG90eXBlID0gTmF0aXZlQ29uc3RydWN0b3IgJiYgTmF0aXZlQ29uc3RydWN0b3IucHJvdG90eXBlO1xuICB2YXIgQ29uc3RydWN0b3IgPSBOYXRpdmVDb25zdHJ1Y3RvcjtcbiAgdmFyIGV4cG9ydGVkID0ge307XG5cbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgICB2YXIgbmF0aXZlTWV0aG9kID0gTmF0aXZlUHJvdG90eXBlW0tFWV07XG4gICAgcmVkZWZpbmUoTmF0aXZlUHJvdG90eXBlLCBLRVksXG4gICAgICBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgICAgbmF0aXZlTWV0aG9kLmNhbGwodGhpcywgdmFsdWUgPT09IDAgPyAwIDogdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gOiBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gZmFsc2UgOiBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gdW5kZWZpbmVkIDogbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG4gICAgICB9IDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gIGlmIChpc0ZvcmNlZChDT05TVFJVQ1RPUl9OQU1FLCB0eXBlb2YgTmF0aXZlQ29uc3RydWN0b3IgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgTmF0aXZlUHJvdG90eXBlLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDb25zdHJ1Y3RvciA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICBJbnRlcm5hbE1ldGFkYXRhTW9kdWxlLlJFUVVJUkVEID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0ZvcmNlZChDT05TVFJVQ1RPUl9OQU1FLCB0cnVlKSkge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgdmFyIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBpbnN0YW5jZS5oYXMoMSk7IH0pO1xuICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7IG5ldyBOYXRpdmVDb25zdHJ1Y3RvcihpdGVyYWJsZSk7IH0pO1xuICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgIHZhciBCVUdHWV9aRVJPID0gIUlTX1dFQUsgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVjggfiBDaHJvbWl1bSA0Mi0gZmFpbHMgb25seSB3aXRoIDUrIGVsZW1lbnRzXG4gICAgICB2YXIgJGluc3RhbmNlID0gbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCk7XG4gICAgICB2YXIgaW5kZXggPSA1O1xuICAgICAgd2hpbGUgKGluZGV4LS0pICRpbnN0YW5jZVtBRERFUl0oaW5kZXgsIGluZGV4KTtcbiAgICAgIHJldHVybiAhJGluc3RhbmNlLmhhcygtMCk7XG4gICAgfSk7XG5cbiAgICBpZiAoIUFDQ0VQVF9JVEVSQUJMRVMpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gd3JhcHBlcihmdW5jdGlvbiAoZHVtbXksIGl0ZXJhYmxlKSB7XG4gICAgICAgIGFuSW5zdGFuY2UoZHVtbXksIENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlQ29uc3RydWN0b3IoKSwgZHVtbXksIENvbnN0cnVjdG9yKTtcbiAgICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHRoYXQsIElTX01BUCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBOYXRpdmVQcm90b3R5cGU7XG4gICAgICBOYXRpdmVQcm90b3R5cGUuY29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBpZiAoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTykge1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG5cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcblxuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYgKElTX1dFQUsgJiYgTmF0aXZlUHJvdG90eXBlLmNsZWFyKSBkZWxldGUgTmF0aXZlUHJvdG90eXBlLmNsZWFyO1xuICB9XG5cbiAgZXhwb3J0ZWRbQ09OU1RSVUNUT1JfTkFNRV0gPSBDb25zdHJ1Y3RvcjtcbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBDb25zdHJ1Y3RvciAhPSBOYXRpdmVDb25zdHJ1Y3RvciB9LCBleHBvcnRlZCk7XG5cbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUpO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHlLZXkgPSB0b1ByaW1pdGl2ZShrZXkpO1xuICBpZiAocHJvcGVydHlLZXkgaW4gb2JqZWN0KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwgcHJvcGVydHlLZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtwcm9wZXJ0eUtleV0gPSB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3RvcicpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJyk7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgICB9XG4gIH1cblxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5hdGl2ZUl0ZXJhdG9yLmNhbGwodGhpcyk7IH07XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yKTtcbiAgfVxuICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLXdyYXBwZWQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICB2YXIgU3ltYm9sID0gcGF0aC5TeW1ib2wgfHwgKHBhdGguU3ltYm9sID0ge30pO1xuICBpZiAoIWhhcyhTeW1ib2wsIE5BTUUpKSBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsIE5BTUUsIHtcbiAgICB2YWx1ZTogd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKE5BTUUpXG4gIH0pO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxuLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4vLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMsIHNoYW0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhKFxuICAgICAgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgJiZcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDAgJiZcbiAgICAgICFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgICkpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSwge1xuICAgICAgUkVQTEFDRV9LRUVQU18kMDogUkVQTEFDRV9LRUVQU18kMCxcbiAgICAgIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFOiBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgIH0pO1xuICAgIHZhciBzdHJpbmdNZXRob2QgPSBtZXRob2RzWzBdO1xuICAgIHZhciByZWdleE1ldGhvZCA9IG1ldGhvZHNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmluZ01ldGhvZCk7XG4gICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cblxuICBpZiAoc2hhbSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xuIiwidmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCk7XG4gICAgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gbWFrZXMgc3ViY2xhc3Npbmcgd29yayBjb3JyZWN0IGZvciB3cmFwcGVkIGJ1aWx0LWluc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHRoaXMsIGR1bW15LCBXcmFwcGVyKSB7XG4gIHZhciBOZXdUYXJnZXQsIE5ld1RhcmdldFByb3RvdHlwZTtcbiAgaWYgKFxuICAgIC8vIGl0IGNhbiB3b3JrIG9ubHkgd2l0aCBuYXRpdmUgYHNldFByb3RvdHlwZU9mYFxuICAgIHNldFByb3RvdHlwZU9mICYmXG4gICAgLy8gd2UgaGF2ZW4ndCBjb21wbGV0ZWx5IGNvcnJlY3QgcHJlLUVTNiB3YXkgZm9yIGdldHRpbmcgYG5ldy50YXJnZXRgLCBzbyB1c2UgdGhpc1xuICAgIHR5cGVvZiAoTmV3VGFyZ2V0ID0gZHVtbXkuY29uc3RydWN0b3IpID09ICdmdW5jdGlvbicgJiZcbiAgICBOZXdUYXJnZXQgIT09IFdyYXBwZXIgJiZcbiAgICBpc09iamVjdChOZXdUYXJnZXRQcm90b3R5cGUgPSBOZXdUYXJnZXQucHJvdG90eXBlKSAmJlxuICAgIE5ld1RhcmdldFByb3RvdHlwZSAhPT0gV3JhcHBlci5wcm90b3R5cGVcbiAgKSBzZXRQcm90b3R5cGVPZigkdGhpcywgTmV3VGFyZ2V0UHJvdG90eXBlKTtcbiAgcmV0dXJuICR0aGlzO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGAzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICh0eXBlb2Ygc3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwidmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIEZSRUVaSU5HID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZyZWV6aW5nJyk7XG5cbnZhciBNRVRBREFUQSA9IHVpZCgnbWV0YScpO1xudmFyIGlkID0gMDtcblxudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBzZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBkZWZpbmVQcm9wZXJ0eShpdCwgTUVUQURBVEEsIHsgdmFsdWU6IHtcbiAgICBvYmplY3RJRDogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgd2Vha0RhdGE6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBhIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEFEQVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhZGF0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQURBVEFdLm9iamVjdElEO1xufTtcblxudmFyIGdldFdlYWtEYXRhID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEFEQVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhZGF0YShpdCk7XG4gIC8vIHJldHVybiB0aGUgc3RvcmUgb2Ygd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQURBVEFdLndlYWtEYXRhO1xufTtcblxuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaSU5HICYmIG1ldGEuUkVRVUlSRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBREFUQSkpIHNldE1ldGFkYXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgUkVRVUlSRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrRGF0YTogZ2V0V2Vha0RhdGEsXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuaGlkZGVuS2V5c1tNRVRBREFUQV0gPSB0cnVlO1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gbmV3IFdlYWtNYXAoKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY2xhc3NvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG5cbi8vIGBJc1JlZ0V4cGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc3JlZ2V4cFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY2xhc3NvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbnZhciBpdGVyYXRlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGZuLCB0aGF0LCBBU19FTlRSSUVTLCBJU19JVEVSQVRPUikge1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoZm4sIHRoYXQsIEFTX0VOVFJJRVMgPyAyIDogMSk7XG4gIHZhciBpdGVyYXRvciwgaXRlckZuLCBpbmRleCwgbGVuZ3RoLCByZXN1bHQsIG5leHQsIHN0ZXA7XG5cbiAgaWYgKElTX0lURVJBVE9SKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYWJsZTtcbiAgfSBlbHNlIHtcbiAgICBpdGVyRm4gPSBnZXRJdGVyYXRvck1ldGhvZChpdGVyYWJsZSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKCdUYXJnZXQgaXMgbm90IGl0ZXJhYmxlJyk7XG4gICAgLy8gb3B0aW1pc2F0aW9uIGZvciBhcnJheSBpdGVyYXRvcnNcbiAgICBpZiAoaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJGbikpIHtcbiAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICByZXN1bHQgPSBBU19FTlRSSUVTXG4gICAgICAgICAgPyBib3VuZEZ1bmN0aW9uKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKVxuICAgICAgICAgIDogYm91bmRGdW5jdGlvbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTtcbiAgfVxuXG4gIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHJlc3VsdCA9IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIGJvdW5kRnVuY3Rpb24sIHN0ZXAudmFsdWUsIEFTX0VOVFJJRVMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcblxuaXRlcmF0ZS5zdG9wID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICByZXR1cm4gbmV3IFJlc3VsdCh0cnVlLCByZXN1bHQpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbmlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5pZiAoIUlTX1BVUkUgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgcmV0dXJuICFTdHJpbmcoU3ltYm9sKCkpO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoaW5zcGVjdFNvdXJjZShXZWFrTWFwKSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcblxudmFyIG5hdGl2ZUFzc2lnbiA9IE9iamVjdC5hc3NpZ247XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbm1vZHVsZS5leHBvcnRzID0gIW5hdGl2ZUFzc2lnbiB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHNob3VsZCBoYXZlIGNvcnJlY3Qgb3JkZXIgb2Ygb3BlcmF0aW9ucyAoRWRnZSBidWcpXG4gIGlmIChERVNDUklQVE9SUyAmJiBuYXRpdmVBc3NpZ24oeyBiOiAxIH0sIG5hdGl2ZUFzc2lnbihkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRoaXMsICdiJywge1xuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSksIHsgYjogMiB9KSkuYiAhPT0gMSkgcmV0dXJuIHRydWU7XG4gIC8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICB2YXIgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW3N5bWJvbF0gPSA3O1xuICBhbHBoYWJldC5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2hyKSB7IEJbY2hyXSA9IGNocjsgfSk7XG4gIHJldHVybiBuYXRpdmVBc3NpZ24oe30sIEEpW3N5bWJvbF0gIT0gNyB8fCBvYmplY3RLZXlzKG5hdGl2ZUFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IGFscGhhYmV0O1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG4gIHdoaWxlIChhcmd1bWVudHNMZW5ndGggPiBpbmRleCkge1xuICAgIHZhciBTID0gSW5kZXhlZE9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gb2JqZWN0S2V5cyhTKS5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKFMpKSA6IG9iamVjdEtleXMoUyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBqID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBqKSB7XG4gICAgICBrZXkgPSBrZXlzW2orK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiBuYXRpdmVBc3NpZ247XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgKi9cbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IGFjdGl2ZVhEb2N1bWVudCA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcblxudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhpdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJ1xuICAgID8gZ2V0V2luZG93TmFtZXMoaXQpXG4gICAgOiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChpdCkpO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQ7XG4gICAgc2V0dGVyLmNhbGwodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIuY2FsbChPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgb3B0aW9ucyk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSkuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2V4cEV4ZWMuY2FsbChSLCBTKTtcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWdleHBGbGFncyA9IHJlcXVpcmUoJy4vcmVnZXhwLWZsYWdzJyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4vcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLztcbiAgdmFyIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxLmxhc3RJbmRleCAhPT0gMCB8fCByZTIubGFzdEluZGV4ICE9PSAwO1xufSkoKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1kgfHwgc3RpY2t5SGVscGVycy5CUk9LRU5fQ0FSRVQ7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEIHx8IFVOU1VQUE9SVEVEX1k7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuICAgIHZhciBzdGlja3kgPSBVTlNVUFBPUlRFRF9ZICYmIHJlLnN0aWNreTtcbiAgICB2YXIgZmxhZ3MgPSByZWdleHBGbGFncy5jYWxsKHJlKTtcbiAgICB2YXIgc291cmNlID0gcmUuc291cmNlO1xuICAgIHZhciBjaGFyc0FkZGVkID0gMDtcbiAgICB2YXIgc3RyQ29weSA9IHN0cjtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGZsYWdzID0gZmxhZ3MucmVwbGFjZSgneScsICcnKTtcbiAgICAgIGlmIChmbGFncy5pbmRleE9mKCdnJykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzICs9ICdnJztcbiAgICAgIH1cblxuICAgICAgc3RyQ29weSA9IFN0cmluZyhzdHIpLnNsaWNlKHJlLmxhc3RJbmRleCk7XG4gICAgICAvLyBTdXBwb3J0IGFuY2hvcmVkIHN0aWNreSBiZWhhdmlvci5cbiAgICAgIGlmIChyZS5sYXN0SW5kZXggPiAwICYmICghcmUubXVsdGlsaW5lIHx8IHJlLm11bHRpbGluZSAmJiBzdHJbcmUubGFzdEluZGV4IC0gMV0gIT09ICdcXG4nKSkge1xuICAgICAgICBzb3VyY2UgPSAnKD86ICcgKyBzb3VyY2UgKyAnKSc7XG4gICAgICAgIHN0ckNvcHkgPSAnICcgKyBzdHJDb3B5O1xuICAgICAgICBjaGFyc0FkZGVkKys7XG4gICAgICB9XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgc3RyIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeKD86JyArIHNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgIH1cblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZS5sYXN0SW5kZXg7XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChzdGlja3kgPyByZUNvcHkgOiByZSwgc3RyQ29weSk7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbWF0Y2guaW5wdXQgPSBtYXRjaC5pbnB1dC5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2guaW5kZXggPSByZS5sYXN0SW5kZXg7XG4gICAgICAgIHJlLmxhc3RJbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICB9IGVsc2UgcmUubGFzdEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmUubGFzdEluZGV4ID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS5mbGFnc2AgZ2V0dGVyIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLnByb3RvdHlwZS5mbGFnc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LmRvdEFsbCkgcmVzdWx0ICs9ICdzJztcbiAgaWYgKHRoYXQudW5pY29kZSkgcmVzdWx0ICs9ICd1JztcbiAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9mYWlscycpO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvcixcbi8vIHNvIHdlIHVzZSBhbiBpbnRlcm1lZGlhdGUgZnVuY3Rpb24uXG5mdW5jdGlvbiBSRShzLCBmKSB7XG4gIHJldHVybiBSZWdFeHAocywgZik7XG59XG5cbmV4cG9ydHMuVU5TVVBQT1JURURfWSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbiAgdmFyIHJlID0gUkUoJ2EnLCAneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnYWJjZCcpICE9IG51bGw7XG59KTtcblxuZXhwb3J0cy5CUk9LRU5fQ0FSRVQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc3MzY4N1xuICB2YXIgcmUgPSBSRSgnXnInLCAnZ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ3N0cicpICE9IG51bGw7XG59KTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy42LjQnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgU3BlY2llc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXNwZWNpZXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgZGVmYXVsdENvbnN0cnVjdG9yKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IGRlZmF1bHRDb25zdHJ1Y3RvciA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IGNvZGVQb2ludEF0LCBhdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmNvZGVwb2ludGF0XG4gIGNvZGVBdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuYXRgIG1ldGhvZFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG4gIGNoYXJBdDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9pbnRlZ2VyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNOYU4oYXJndW1lbnQgPSArYXJndW1lbnQpID8gMCA6IChhcmd1bWVudCA+IDAgPyBmbG9vciA6IGNlaWwpKGFyZ3VtZW50KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIFBSRUZFUlJFRF9TVFJJTkcpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGlucHV0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFQUkVGRVJSRURfU1RSSU5HICYmIHR5cGVvZiAoZm4gPSBpbnB1dC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG4iLCJ2YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgIVN5bWJvbC5zaGFtXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG5leHBvcnRzLmYgPSB3ZWxsS25vd25TeW1ib2w7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBpZiAoTkFUSVZFX1NZTUJPTCAmJiBoYXMoU3ltYm9sLCBuYW1lKSkgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gU3ltYm9sW25hbWVdO1xuICAgIGVsc2UgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG4vLyBFZGdlIDE0LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IFtdLmZvckVhY2ggIT0gZm9yRWFjaCB9LCB7XG4gIGZvckVhY2g6IGZvckVhY2hcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG4vLyBgQXJyYXkuaXNBcnJheWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5pc2FycmF5XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlIH0sIHtcbiAgaXNBcnJheTogaXNBcnJheVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgQVJSQVlfSVRFUkFUT1IgPSAnQXJyYXkgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoQVJSQVlfSVRFUkFUT1IpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmVudHJpZXNcbi8vIGBBcnJheS5wcm90b3R5cGUua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnZhbHVlc1xuLy8gYEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEBpdGVyYXRvclxuLy8gYENyZWF0ZUFycmF5SXRlcmF0b3JgIGludGVybmFsIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciB0YXJnZXQgPSBzdGF0ZS50YXJnZXQ7XG4gIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXgrKztcbiAgaWYgKCF0YXJnZXQgfHwgaW5kZXggPj0gdGFyZ2V0Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogaW5kZXgsIGRvbmU6IGZhbHNlIH07XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogdGFyZ2V0W2luZGV4XSwgZG9uZTogZmFsc2UgfTtcbiAgcmV0dXJuIHsgdmFsdWU6IFtpbmRleCwgdGFyZ2V0W2luZGV4XV0sIGRvbmU6IGZhbHNlIH07XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRldW5tYXBwZWRhcmd1bWVudHNvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IFtdLmpvaW47XG5cbnZhciBFUzNfU1RSSU5HUyA9IEluZGV4ZWRPYmplY3QgIT0gT2JqZWN0O1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdqb2luJywgJywnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5qb2luYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5qb2luXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBFUzNfU1RSSU5HUyB8fCAhU1RSSUNUX01FVEhPRCB9LCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUpvaW4uY2FsbCh0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgbWFwOiBmdW5jdGlvbiBtYXAoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJG1hcCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ3NsaWNlJywgeyBBQ0NFU1NPUlM6IHRydWUsIDA6IDAsIDE6IDIgfSk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgbmF0aXZlU2xpY2UgPSBbXS5zbGljZTtcbnZhciBtYXggPSBNYXRoLm1heDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc2xpY2Vcbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlLmNhbGwoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG52YXIgRGF0ZVByb3RvdHlwZSA9IERhdGUucHJvdG90eXBlO1xudmFyIElOVkFMSURfREFURSA9ICdJbnZhbGlkIERhdGUnO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgbmF0aXZlRGF0ZVRvU3RyaW5nID0gRGF0ZVByb3RvdHlwZVtUT19TVFJJTkddO1xudmFyIGdldFRpbWUgPSBEYXRlUHJvdG90eXBlLmdldFRpbWU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKG5ldyBEYXRlKE5hTikgKyAnJyAhPSBJTlZBTElEX0RBVEUpIHtcbiAgcmVkZWZpbmUoRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSBnZXRUaW1lLmNhbGwodGhpcyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyBuYXRpdmVEYXRlVG9TdHJpbmcuY2FsbCh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbicpO1xudmFyIGNvbGxlY3Rpb25TdHJvbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gYE1hcGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW1hcC1vYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxlY3Rpb24oJ01hcCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwgY29sbGVjdGlvblN0cm9uZyk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBPYmplY3QuYXNzaWduICE9PSBhc3NpZ24gfSwge1xuICBhc3NpZ246IGFzc2lnblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBjcmVhdGU6IGNyZWF0ZVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0aWVzOiBkZWZpbmVQcm9wZXJ0aWVzXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKDEpOyB9KTtcbnZhciBGT1JDRUQgPSAhREVTQ1JJUFRPUlMgfHwgRkFJTFNfT05fUFJJTUlUSVZFUztcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VELCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0luZGV4ZWRPYmplY3QoaXQpLCBrZXkpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gICAgdmFyIGtleXMgPSBvd25LZXlzKE8pO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBrZXksIGRlc2NyaXB0b3I7XG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywga2V5ID0ga2V5c1tpbmRleCsrXSk7XG4gICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUdldFByb3RvdHlwZU9mKDEpOyB9KTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2ZcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX1BSSU1JVElWRVMsIHNoYW06ICFDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgfSwge1xuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gbmF0aXZlR2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRkFJTFNfT05fUFJJTUlUSVZFUyB9LCB7XG4gIGtleXM6IGZ1bmN0aW9uIGtleXMoaXQpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyh0b09iamVjdChpdCkpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIHNldFByb3RvdHlwZU9mOiBzZXRQcm90b3R5cGVPZlxufSk7XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZycpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoIVRPX1NUUklOR19UQUdfU1VQUE9SVCkge1xuICByZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCB0b1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcbnZhciBnZXRGbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJykuc2V0O1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xudmFyIE5hdGl2ZVJlZ0V4cCA9IGdsb2JhbC5SZWdFeHA7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gTmF0aXZlUmVnRXhwLnByb3RvdHlwZTtcbnZhciByZTEgPSAvYS9nO1xudmFyIHJlMiA9IC9hL2c7XG5cbi8vIFwibmV3XCIgc2hvdWxkIGNyZWF0ZSBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnXG52YXIgQ09SUkVDVF9ORVcgPSBuZXcgTmF0aXZlUmVnRXhwKHJlMSkgIT09IHJlMTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1k7XG5cbnZhciBGT1JDRUQgPSBERVNDUklQVE9SUyAmJiBpc0ZvcmNlZCgnUmVnRXhwJywgKCFDT1JSRUNUX05FVyB8fCBVTlNVUFBPUlRFRF9ZIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmUyW01BVENIXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gTmF0aXZlUmVnRXhwKHJlMSkgIT0gcmUxIHx8IE5hdGl2ZVJlZ0V4cChyZTIpID09IHJlMiB8fCBOYXRpdmVSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSk7XG5cbi8vIGBSZWdFeHBgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAtY29uc3RydWN0b3JcbmlmIChGT1JDRUQpIHtcbiAgdmFyIFJlZ0V4cFdyYXBwZXIgPSBmdW5jdGlvbiBSZWdFeHAocGF0dGVybiwgZmxhZ3MpIHtcbiAgICB2YXIgdGhpc0lzUmVnRXhwID0gdGhpcyBpbnN0YW5jZW9mIFJlZ0V4cFdyYXBwZXI7XG4gICAgdmFyIHBhdHRlcm5Jc1JlZ0V4cCA9IGlzUmVnRXhwKHBhdHRlcm4pO1xuICAgIHZhciBmbGFnc0FyZVVuZGVmaW5lZCA9IGZsYWdzID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIHN0aWNreTtcblxuICAgIGlmICghdGhpc0lzUmVnRXhwICYmIHBhdHRlcm5Jc1JlZ0V4cCAmJiBwYXR0ZXJuLmNvbnN0cnVjdG9yID09PSBSZWdFeHBXcmFwcGVyICYmIGZsYWdzQXJlVW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcGF0dGVybjtcbiAgICB9XG5cbiAgICBpZiAoQ09SUkVDVF9ORVcpIHtcbiAgICAgIGlmIChwYXR0ZXJuSXNSZWdFeHAgJiYgIWZsYWdzQXJlVW5kZWZpbmVkKSBwYXR0ZXJuID0gcGF0dGVybi5zb3VyY2U7XG4gICAgfSBlbHNlIGlmIChwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwV3JhcHBlcikge1xuICAgICAgaWYgKGZsYWdzQXJlVW5kZWZpbmVkKSBmbGFncyA9IGdldEZsYWdzLmNhbGwocGF0dGVybik7XG4gICAgICBwYXR0ZXJuID0gcGF0dGVybi5zb3VyY2U7XG4gICAgfVxuXG4gICAgaWYgKFVOU1VQUE9SVEVEX1kpIHtcbiAgICAgIHN0aWNreSA9ICEhZmxhZ3MgJiYgZmxhZ3MuaW5kZXhPZigneScpID4gLTE7XG4gICAgICBpZiAoc3RpY2t5KSBmbGFncyA9IGZsYWdzLnJlcGxhY2UoL3kvZywgJycpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBpbmhlcml0SWZSZXF1aXJlZChcbiAgICAgIENPUlJFQ1RfTkVXID8gbmV3IE5hdGl2ZVJlZ0V4cChwYXR0ZXJuLCBmbGFncykgOiBOYXRpdmVSZWdFeHAocGF0dGVybiwgZmxhZ3MpLFxuICAgICAgdGhpc0lzUmVnRXhwID8gdGhpcyA6IFJlZ0V4cFByb3RvdHlwZSxcbiAgICAgIFJlZ0V4cFdyYXBwZXJcbiAgICApO1xuXG4gICAgaWYgKFVOU1VQUE9SVEVEX1kgJiYgc3RpY2t5KSBzZXRJbnRlcm5hbFN0YXRlKHJlc3VsdCwgeyBzdGlja3k6IHN0aWNreSB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHZhciBwcm94eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBrZXkgaW4gUmVnRXhwV3JhcHBlciB8fCBkZWZpbmVQcm9wZXJ0eShSZWdFeHBXcmFwcGVyLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gTmF0aXZlUmVnRXhwW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChpdCkgeyBOYXRpdmVSZWdFeHBba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH07XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVSZWdFeHApO1xuICB2YXIgaW5kZXggPSAwO1xuICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkgcHJveHkoa2V5c1tpbmRleCsrXSk7XG4gIFJlZ0V4cFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFJlZ0V4cFdyYXBwZXI7XG4gIFJlZ0V4cFdyYXBwZXIucHJvdG90eXBlID0gUmVnRXhwUHJvdG90eXBlO1xuICByZWRlZmluZShnbG9iYWwsICdSZWdFeHAnLCBSZWdFeHBXcmFwcGVyKTtcbn1cblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC1AQHNwZWNpZXNcbnNldFNwZWNpZXMoJ1JlZ0V4cCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xuXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG5cbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IFJlZ0V4cC5wcm90b3R5cGU7XG52YXIgbmF0aXZlVG9TdHJpbmcgPSBSZWdFeHBQcm90b3R5cGVbVE9fU1RSSU5HXTtcblxudmFyIE5PVF9HRU5FUklDID0gZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlVG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxudmFyIElOQ09SUkVDVF9OQU1FID0gbmF0aXZlVG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkc7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChOT1RfR0VORVJJQyB8fCBJTkNPUlJFQ1RfTkFNRSkge1xuICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHAgPSBTdHJpbmcoUi5zb3VyY2UpO1xuICAgIHZhciByZiA9IFIuZmxhZ3M7XG4gICAgdmFyIGYgPSBTdHJpbmcocmYgPT09IHVuZGVmaW5lZCAmJiBSIGluc3RhbmNlb2YgUmVnRXhwICYmICEoJ2ZsYWdzJyBpbiBSZWdFeHBQcm90b3R5cGUpID8gZmxhZ3MuY2FsbChSKSA6IHJmKTtcbiAgICByZXR1cm4gJy8nICsgcCArICcvJyArIGY7XG4gIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvbGxlY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbicpO1xudmFyIGNvbGxlY3Rpb25TdHJvbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gYFNldGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXNldC1vYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxlY3Rpb24oJ1NldCcsIGZ1bmN0aW9uIChpbml0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBpbml0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwgY29sbGVjdGlvblN0cm9uZyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiBTdHJpbmcoaXRlcmF0ZWQpLFxuICAgIGluZGV4OiAwXG4gIH0pO1xuLy8gYCVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICBmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBtYXRjaGVyID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICByZXR1cm4gbWF0Y2hlciAhPT0gdW5kZWZpbmVkID8gbWF0Y2hlci5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQG1hdGNoXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIHJlZ0V4cEV4ZWMocngsIFMpO1xuXG4gICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgd2hpbGUgKChyZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIEFbbl0gPSBtYXRjaFN0cjtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgbisrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICB9XG4gIF07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmJ2BdfFxcZFxcZD98PFtePl0qPikvZztcbnZhciBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRCA9IC9cXCQoWyQmJ2BdfFxcZFxcZD8pL2c7XG5cbnZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xufTtcblxuLy8gQEByZXBsYWNlIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChSRVBMQUNFLCBuYXRpdmVSZXBsYWNlLCBtYXliZUNhbGxOYXRpdmUsIHJlYXNvbikge1xuICB2YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSByZWFzb24uUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU7XG4gIHZhciBSRVBMQUNFX0tFRVBTXyQwID0gcmVhc29uLlJFUExBQ0VfS0VFUFNfJDA7XG4gIHZhciBVTlNBRkVfU1VCU1RJVFVURSA9IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID8gJyQnIDogJyQwJztcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICghUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgJiYgUkVQTEFDRV9LRUVQU18kMCkgfHxcbiAgICAgICAgKHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdzdHJpbmcnICYmIHJlcGxhY2VWYWx1ZS5pbmRleE9mKFVOU0FGRV9TVUJTVElUVVRFKSA9PT0gLTEpXG4gICAgICApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVSZXBsYWNlLCByZWdleHAsIHRoaXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuXG4gICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG5cbiAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcblxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuXG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgIHZhciBuZXh0U291cmNlUG9zaXRpb24gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gbWF4KG1pbih0b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgZXF1aXZhbGVudCB0b1xuICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgLy8gdGhlIHNsaWNlIHBvbHlmaWxsIHdoZW4gc2xpY2luZyBuYXRpdmUgYXJyYXlzKSBcImRvZXNuJ3Qgd29ya1wiIGluIHNhZmFyaSA5IGFuZFxuICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICB2YXIgbmFtZWRDYXB0dXJlcyA9IHJlc3VsdC5ncm91cHM7XG4gICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkgcmVwbGFjZXJBcmdzLnB1c2gobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcGxhY2VtZW50ID0gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIFMsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgYWNjdW11bGF0ZWRSZXN1bHQgKz0gUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24sIHBvc2l0aW9uKSArIHJlcGxhY2VtZW50O1xuICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICB9XG4gIF07XG5cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gIGZ1bmN0aW9uIGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBzdHIsIHBvc2l0aW9uLCBjYXB0dXJlcywgbmFtZWRDYXB0dXJlcywgcmVwbGFjZW1lbnQpIHtcbiAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgdmFyIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MU19OT19OQU1FRDtcbiAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVSZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgIHZhciBmID0gZmxvb3IobiAvIDEwKTtcbiAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgIH0pO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNhbGxSZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBhcnJheVB1c2ggPSBbXS5wdXNoO1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIE1BWF9VSU5UMzIgPSAweEZGRkZGRkZGO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ3gnLCAneScpIC0+IC94L3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxudmFyIFNVUFBPUlRTX1kgPSAhZmFpbHMoZnVuY3Rpb24gKCkgeyByZXR1cm4gIVJlZ0V4cChNQVhfVUlOVDMyLCAneScpOyB9KTtcblxuLy8gQEBzcGxpdCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKFNQTElULCBuYXRpdmVTcGxpdCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHZhciBpbnRlcm5hbFNwbGl0O1xuICBpZiAoXG4gICAgJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnLnNwbGl0KC8oPzopLywgLTEpLmxlbmd0aCAhPSA0IHx8XG4gICAgJ2FiJy5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCAhPSAyIHx8XG4gICAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPSA0IHx8XG4gICAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAgICcnLnNwbGl0KC8uPy8pLmxlbmd0aFxuICApIHtcbiAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIFtzdHJpbmddO1xuICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgIGlmICghaXNSZWdFeHAoc2VwYXJhdG9yKSkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltKTtcbiAgICAgIH1cbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgd2hpbGUgKG1hdGNoID0gcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgbGFzdEluZGV4ID0gc2VwYXJhdG9yQ29weS5sYXN0SW5kZXg7XG4gICAgICAgIGlmIChsYXN0SW5kZXggPiBsYXN0TGFzdEluZGV4KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgaWYgKG1hdGNoLmxlbmd0aCA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmcubGVuZ3RoKSBhcnJheVB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXQubGVuZ3RoID49IGxpbSkgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlcGFyYXRvckNvcHkubGFzdEluZGV4ID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXgrKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dC5sZW5ndGggPiBsaW0gPyBvdXRwdXQuc2xpY2UoMCwgbGltKSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnLnNwbGl0KHVuZGVmaW5lZCwgMCkubGVuZ3RoKSB7XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IG5hdGl2ZVNwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfSBlbHNlIGludGVybmFsU3BsaXQgPSBuYXRpdmVTcGxpdDtcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnNwbGl0XG4gICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNwbGl0dGVyID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBpbnRlcm5hbFNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAc3BsaXRcbiAgICAvL1xuICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAvLyB0aGUgJ3knIGZsYWcuXG4gICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcblxuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIFMgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgdmFyIHogPSBjYWxsUmVnRXhwRXhlYyhzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSBtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFNVUFBPUlRTX1kgPyAwIDogcSkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBBLnB1c2goUy5zbGljZShwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBBLnB1c2goeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQS5wdXNoKFMuc2xpY2UocCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSwgIVNVUFBPUlRTX1kpO1xuIiwiLy8gYFN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25gIGdldHRlclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvblxuJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG5cbnZhciBOYXRpdmVTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xuXG5pZiAoREVTQ1JJUFRPUlMgJiYgdHlwZW9mIE5hdGl2ZVN5bWJvbCA9PSAnZnVuY3Rpb24nICYmICghKCdkZXNjcmlwdGlvbicgaW4gTmF0aXZlU3ltYm9sLnByb3RvdHlwZSkgfHxcbiAgLy8gU2FmYXJpIDEyIGJ1Z1xuICBOYXRpdmVTeW1ib2woKS5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkXG4pKSB7XG4gIHZhciBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUgPSB7fTtcbiAgLy8gd3JhcCBTeW1ib2wgY29uc3RydWN0b3IgZm9yIGNvcnJlY3Qgd29yayB3aXRoIHVuZGVmaW5lZCBkZXNjcmlwdGlvblxuICB2YXIgU3ltYm9sV3JhcHBlciA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciByZXN1bHQgPSB0aGlzIGluc3RhbmNlb2YgU3ltYm9sV3JhcHBlclxuICAgICAgPyBuZXcgTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKVxuICAgICAgLy8gaW4gRWRnZSAxMywgU3RyaW5nKFN5bWJvbCh1bmRlZmluZWQpKSA9PT0gJ1N5bWJvbCh1bmRlZmluZWQpJ1xuICAgICAgOiBkZXNjcmlwdGlvbiA9PT0gdW5kZWZpbmVkID8gTmF0aXZlU3ltYm9sKCkgOiBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pO1xuICAgIGlmIChkZXNjcmlwdGlvbiA9PT0gJycpIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZVtyZXN1bHRdID0gdHJ1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKFN5bWJvbFdyYXBwZXIsIE5hdGl2ZVN5bWJvbCk7XG4gIHZhciBzeW1ib2xQcm90b3R5cGUgPSBTeW1ib2xXcmFwcGVyLnByb3RvdHlwZSA9IE5hdGl2ZVN5bWJvbC5wcm90b3R5cGU7XG4gIHN5bWJvbFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN5bWJvbFdyYXBwZXI7XG5cbiAgdmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgbmF0aXZlID0gU3RyaW5nKE5hdGl2ZVN5bWJvbCgndGVzdCcpKSA9PSAnU3ltYm9sKHRlc3QpJztcbiAgdmFyIHJlZ2V4cCA9IC9eU3ltYm9sXFwoKC4qKVxcKVteKV0rJC87XG4gIGRlZmluZVByb3BlcnR5KHN5bWJvbFByb3RvdHlwZSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgdmFyIHN5bWJvbCA9IGlzT2JqZWN0KHRoaXMpID8gdGhpcy52YWx1ZU9mKCkgOiB0aGlzO1xuICAgICAgdmFyIHN0cmluZyA9IHN5bWJvbFRvU3RyaW5nLmNhbGwoc3ltYm9sKTtcbiAgICAgIGlmIChoYXMoRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlLCBzeW1ib2wpKSByZXR1cm4gJyc7XG4gICAgICB2YXIgZGVzYyA9IG5hdGl2ZSA/IHN0cmluZy5zbGljZSg3LCAtMSkgOiBzdHJpbmcucmVwbGFjZShyZWdleHAsICckMScpO1xuICAgICAgcmV0dXJuIGRlc2MgPT09ICcnID8gdW5kZWZpbmVkIDogZGVzYztcbiAgICB9XG4gIH0pO1xuXG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogdHJ1ZSB9LCB7XG4gICAgU3ltYm9sOiBTeW1ib2xXcmFwcGVyXG4gIH0pO1xufVxuIiwidmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuLy8gYFN5bWJvbC5pdGVyYXRvcmAgd2VsbC1rbm93biBzeW1ib2xcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5pdGVyYXRvclxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBuYXRpdmVPYmplY3RDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLWV4dGVybmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG5cbnZhciBISURERU4gPSBzaGFyZWRLZXkoJ2hpZGRlbicpO1xudmFyIFNZTUJPTCA9ICdTeW1ib2wnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNZTUJPTCk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJHN0cmluZ2lmeSA9IGdldEJ1aWx0SW4oJ0pTT04nLCAnc3RyaW5naWZ5Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZjtcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmY7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvdHlwZVN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzdHJpbmctdG8tc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXRvLXN0cmluZy1yZWdpc3RyeScpO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgVVNFX1NFVFRFUiA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RDcmVhdGUobmF0aXZlRGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgdmFyIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCBQKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpIGRlbGV0ZSBPYmplY3RQcm90b3R5cGVbUF07XG4gIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciAmJiBPICE9PSBPYmplY3RQcm90b3R5cGUpIHtcbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGUsIFAsIE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IpO1xuICB9XG59IDogbmF0aXZlRGVmaW5lUHJvcGVydHk7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZywgZGVzY3JpcHRpb24pIHtcbiAgdmFyIHN5bWJvbCA9IEFsbFN5bWJvbHNbdGFnXSA9IG5hdGl2ZU9iamVjdENyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzZXRJbnRlcm5hbFN0YXRlKHN5bWJvbCwge1xuICAgIHR5cGU6IFNZTUJPTCxcbiAgICB0YWc6IHRhZyxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgfSk7XG4gIGlmICghREVTQ1JJUFRPUlMpIHN5bWJvbC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICByZXR1cm4gc3ltYm9sO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChpdCkgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgaWYgKE8gPT09IE9iamVjdFByb3RvdHlwZSkgJGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFAsIEF0dHJpYnV0ZXMpO1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFBdHRyaWJ1dGVzLmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKE8sIEhJRERFTikpIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIEhJRERFTiwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHt9KSk7XG4gICAgICBPW0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoTywgSElEREVOKSAmJiBPW0hJRERFTl1ba2V5XSkgT1tISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSBuYXRpdmVPYmplY3RDcmVhdGUoQXR0cmlidXRlcywgeyBlbnVtZXJhYmxlOiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2NyaXB0b3IoTywga2V5LCBBdHRyaWJ1dGVzKTtcbiAgfSByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywga2V5LCBBdHRyaWJ1dGVzKTtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BlcnRpZXMgPSB0b0luZGV4ZWRPYmplY3QoUHJvcGVydGllcyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhwcm9wZXJ0aWVzKS5jb25jYXQoJGdldE93blByb3BlcnR5U3ltYm9scyhwcm9wZXJ0aWVzKSk7XG4gICRmb3JFYWNoKGtleXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIURFU0NSSVBUT1JTIHx8ICRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHByb3BlcnRpZXMsIGtleSkpICRkZWZpbmVQcm9wZXJ0eShPLCBrZXksIHByb3BlcnRpZXNba2V5XSk7XG4gIH0pO1xuICByZXR1cm4gTztcbn07XG5cbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IG5hdGl2ZU9iamVjdENyZWF0ZShPKSA6ICRkZWZpbmVQcm9wZXJ0aWVzKG5hdGl2ZU9iamVjdENyZWF0ZShPKSwgUHJvcGVydGllcyk7XG59O1xuXG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgUCA9IHRvUHJpbWl0aXZlKFYsIHRydWUpO1xuICB2YXIgZW51bWVyYWJsZSA9IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGhpcywgUCk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIFApICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIGVudW1lcmFibGUgfHwgIWhhcyh0aGlzLCBQKSB8fCAhaGFzKEFsbFN5bWJvbHMsIFApIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtQXSA/IGVudW1lcmFibGUgOiB0cnVlO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICB2YXIgaXQgPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90b3R5cGUgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBkZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpO1xuICBpZiAoZGVzY3JpcHRvciAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSB7XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZGVzY3JpcHRvcjtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoaGlkZGVuS2V5cywga2V5KSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhPKSB7XG4gIHZhciBJU19PQkpFQ1RfUFJPVE9UWVBFID0gTyA9PT0gT2JqZWN0UHJvdG90eXBlO1xuICB2YXIgbmFtZXMgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKElTX09CSkVDVF9QUk9UT1RZUEUgPyBPYmplY3RQcm90b3R5cGVTeW1ib2xzIDogdG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSAmJiAoIUlTX09CSkVDVF9QUk9UT1RZUEUgfHwgaGFzKE9iamVjdFByb3RvdHlwZSwga2V5KSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIGBTeW1ib2xgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wtY29uc3RydWN0b3JcbmlmICghTkFUSVZFX1NZTUJPTCkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAhYXJndW1lbnRzLmxlbmd0aCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IFN0cmluZyhhcmd1bWVudHNbMF0pO1xuICAgIHZhciB0YWcgPSB1aWQoZGVzY3JpcHRpb24pO1xuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90b3R5cGUpIHNldHRlci5jYWxsKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzY3JpcHRvcih0aGlzLCB0YWcsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIFVTRV9TRVRURVIpIHNldFN5bWJvbERlc2NyaXB0b3IoT2JqZWN0UHJvdG90eXBlLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6IHNldHRlciB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcsIGRlc2NyaXB0aW9uKTtcbiAgfTtcblxuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnRhZztcbiAgfSk7XG5cbiAgcmVkZWZpbmUoJFN5bWJvbCwgJ3dpdGhvdXRTZXR0ZXInLCBmdW5jdGlvbiAoZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gd3JhcCh1aWQoZGVzY3JpcHRpb24pLCBkZXNjcmlwdGlvbik7XG4gIH0pO1xuXG4gIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIGRlZmluZVByb3BlcnR5TW9kdWxlLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2VsbEtub3duU3ltYm9sKG5hbWUpLCBuYW1lKTtcbiAgfTtcblxuICBpZiAoREVTQ1JJUFRPUlMpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1TeW1ib2wtZGVzY3JpcHRpb25cbiAgICBuYXRpdmVEZWZpbmVQcm9wZXJ0eSgkU3ltYm9sW1BST1RPVFlQRV0sICdkZXNjcmlwdGlvbicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLmRlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghSVNfUFVSRSkge1xuICAgICAgcmVkZWZpbmUoT2JqZWN0UHJvdG90eXBlLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHsgdW5zYWZlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxufVxuXG4kKHsgZ2xvYmFsOiB0cnVlLCB3cmFwOiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIFN5bWJvbDogJFN5bWJvbFxufSk7XG5cbiRmb3JFYWNoKG9iamVjdEtleXMoV2VsbEtub3duU3ltYm9sc1N0b3JlKSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVmaW5lV2VsbEtub3duU3ltYm9sKG5hbWUpO1xufSk7XG5cbiQoeyB0YXJnZXQ6IFNZTUJPTCwgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBTeW1ib2wuZm9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLmZvclxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoa2V5KTtcbiAgICBpZiAoaGFzKFN0cmluZ1RvU3ltYm9sUmVnaXN0cnksIHN0cmluZykpIHJldHVybiBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5W3N0cmluZ107XG4gICAgdmFyIHN5bWJvbCA9ICRTeW1ib2woc3RyaW5nKTtcbiAgICBTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5W3N0cmluZ10gPSBzeW1ib2w7XG4gICAgU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1ib2xdID0gc3RyaW5nO1xuICAgIHJldHVybiBzeW1ib2w7XG4gIH0sXG4gIC8vIGBTeW1ib2wua2V5Rm9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLmtleWZvclxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCcpO1xuICAgIGlmIChoYXMoU3ltYm9sVG9TdHJpbmdSZWdpc3RyeSwgc3ltKSkgcmV0dXJuIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltXTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IGZhbHNlOyB9XG59KTtcblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIC8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXG59KTtcblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlzeW1ib2xzXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IGZhaWxzKGZ1bmN0aW9uICgpIHsgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYoMSk7IH0pIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmYodG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cbi8vIGBKU09OLnN0cmluZ2lmeWAgbWV0aG9kIGJlaGF2aW9yIHdpdGggc3ltYm9sc1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtanNvbi5zdHJpbmdpZnlcbmlmICgkc3RyaW5naWZ5KSB7XG4gIHZhciBGT1JDRURfSlNPTl9TVFJJTkdJRlkgPSAhTkFUSVZFX1NZTUJPTCB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN5bWJvbCA9ICRTeW1ib2woKTtcbiAgICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAgIHJldHVybiAkc3RyaW5naWZ5KFtzeW1ib2xdKSAhPSAnW251bGxdJ1xuICAgICAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gICAgICB8fCAkc3RyaW5naWZ5KHsgYTogc3ltYm9sIH0pICE9ICd7fSdcbiAgICAgIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gICAgICB8fCAkc3RyaW5naWZ5KE9iamVjdChzeW1ib2wpKSAhPSAne30nO1xuICB9KTtcblxuICAkKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEX0pTT05fU1RSSU5HSUZZIH0sIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCwgcmVwbGFjZXIsIHNwYWNlKSB7XG4gICAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgICB2YXIgaW5kZXggPSAxO1xuICAgICAgdmFyICRyZXBsYWNlcjtcbiAgICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaW5kZXgpIGFyZ3MucHVzaChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgICAgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICB9O1xuICAgICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgICAgcmV0dXJuICRzdHJpbmdpZnkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvcHJpbWl0aXZlXG5pZiAoISRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xufVxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11gIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9zdHJpbmd0YWdcbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsIFNZTUJPTCk7XG5cbmhpZGRlbktleXNbSElEREVOXSA9IHRydWU7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufVxuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIEFycmF5SXRlcmF0b3JNZXRob2RzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9yTWV0aG9kcy52YWx1ZXM7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gQXJyYXlWYWx1ZXMpIHRyeSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gPSBBcnJheVZhbHVlcztcbiAgICB9XG4gICAgaWYgKCFDb2xsZWN0aW9uUHJvdG90eXBlW1RPX1NUUklOR19UQUddKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgQ09MTEVDVElPTl9OQU1FKTtcbiAgICB9XG4gICAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSBmb3IgKHZhciBNRVRIT0RfTkFNRSBpbiBBcnJheUl0ZXJhdG9yTWV0aG9kcykge1xuICAgICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtNRVRIT0RfTkFNRV0gIT09IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSkgdHJ5IHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIE1FVEhPRF9OQU1FLCBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgQ29sbGVjdGlvblByb3RvdHlwZVtNRVRIT0RfTkFNRV0gPSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIE1TSUUgPSAvTVNJRSAuXFwuLy50ZXN0KHVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAoc2NoZWR1bGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaGFuZGxlciwgdGltZW91dCAvKiAsIC4uLmFyZ3VtZW50cyAqLykge1xuICAgIHZhciBib3VuZEFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgICB2YXIgYXJncyA9IGJvdW5kQXJncyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2NoZWR1bGVyKGJvdW5kQXJncyA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgKHR5cGVvZiBoYW5kbGVyID09ICdmdW5jdGlvbicgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcikpLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gOiBoYW5kbGVyLCB0aW1lb3V0KTtcbiAgfTtcbn07XG5cbi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IE1TSUUgfSwge1xuICAvLyBgc2V0VGltZW91dGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiAgc2V0VGltZW91dDogd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIC8vIGBzZXRJbnRlcnZhbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuIiwiLyohXG4gKiBjdXJyZW50RXhlY3V0aW5nU2NyaXB0XG4gKiBHZXQgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgc2NyaXB0LCByZWdhcmRsZXNzIG9mIGl0cyBzb3VyY2UvdHJpZ2dlci9zeW5jaHJvbmljaXR5LiBTaW1pbGFyIHRvIEhUTUw1J3MgYGRvY3VtZW50LmN1cnJlbnRTY3JpcHRgIGJ1dCBhcmd1YWJseSBtdWNoIG1vcmUgdXNlZnVsIVxuICogQ29weXJpZ2h0IChjKSAyMDE1IEphbWVzIE0uIEdyZWVuZVxuICogTGljZW5zZWQgTUlUXG4gKiBodHRwczovL2dpdGh1Yi5jb20vSmFtZXNNR3JlZW5lL2N1cnJlbnRFeGVjdXRpbmdTY3JpcHRcbiAqIHYwLjEuM1xuICovXG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBgbW9kdWxlLmV4cG9ydHNgLFxuICAgIC8vIGxpa2UgTm9kZS5qcy4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUyFcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKGByb290YCBpcyBgd2luZG93YClcbiAgICByb290LmN1cnJlbnRFeGVjdXRpbmdTY3JpcHQgPSBmYWN0b3J5KCk7XG4gIH1cbn0oXG4gIC8vIEN1cnJlbnQgY29udGV4dC9zY29wZVxuICB0aGlzIHx8IHdpbmRvdyxcblxuICAvLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIHJldHVybiB0aGUgZXhwb3J0XG4gIGZ1bmN0aW9uKCkge1xuXG52YXIgc2NyaXB0UmVhZHlSZWdleCA9IC9eKGludGVyYWN0aXZlfGxvYWRlZHxjb21wbGV0ZSkkLztcblxuLy8gVGhpcyBwYWdlJ3MgVVJMIChtaW51cyBxdWVyeSBzdHJpbmcgYW5kIGZyYWdtZW50IGlkZW50aWZlciBoYXNoLCBpZiBhbnkpXG52YXIgZnVsbFBhZ2VVcmwgPSAhIXdpbmRvdy5sb2NhdGlvbiA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmIDogbnVsbDtcbnZhciBwYWdlVXJsID0gZnVsbFBhZ2VVcmwgPyBmdWxsUGFnZVVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikgfHwgbnVsbCA6IG51bGw7XG5cbi8vIExpdmUgTm9kZUxpc3QgY29sbGVjdGlvblxudmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblxuLy8gQ2hlY2sgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGByZWFkeVN0YXRlYCBwcm9wZXJ0eSBvbiBgc2NyaXB0YCBlbGVtZW50c1xudmFyIHN1cHBvcnRzU2NyaXB0UmVhZHlTdGF0ZSA9IFwicmVhZHlTdGF0ZVwiIGluIChzY3JpcHRzWzBdIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpO1xuXG4vLyBMb3VzeSBicm93c2VyIGRldGVjdGlvbiBmb3IgW25vdF0gT3BlcmFcbnZhciBpc05vdE9wZXJhID0gIXdpbmRvdy5vcGVyYSB8fCB3aW5kb3cub3BlcmEudG9TdHJpbmcoKSAhPT0gXCJbb2JqZWN0IE9wZXJhXVwiO1xuXG4vLyBEZXRlY3QgaWYgYGRvY3VtZW50LmN1cnJlbnRTY3JpcHRgIGlzIHN1cHBvcnRlZFxudmFyIGhhc05hdGl2ZUN1cnJlbnRTY3JpcHRBY2Nlc3NvciA9IFwiY3VycmVudFNjcmlwdFwiIGluIGRvY3VtZW50O1xuXG52YXIgb3JpZ2luYWxTdGFja0RlcHRoQ29uZmlnO1xuLy8gRGV0ZWN0IGlmIHRoZSBWOCBFcnJvciBTdGFjayBUcmFjZSBBUEkgaXMgc3VwcG9ydGVkXG5pZiAoXCJzdGFja1RyYWNlTGltaXRcIiBpbiBFcnJvciAmJiBFcnJvci5zdGFja1RyYWNlTGltaXQgIT09IEluZmluaXR5KSB7XG4gIG9yaWdpbmFsU3RhY2tEZXB0aENvbmZpZyA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdDtcbiAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gSW5maW5pdHk7XG59XG5cblxuLy8gSW4gc29tZSBicm93c2VycyAoZS5nLiBDaHJvbWUpLCB5b3UgY2FuIGdldCB0aGUgY3VycmVudCBzdGFjayBmcm9tIGFuIEVycm9yXG4vLyBvYmplY3QgaW5zdGFuY2Ugd2l0aG91dCBuZWVkaW5nIHRvIHRocm93IGl0LiBBdm9pZGluZyBhbiB1bm5lY2Vzc2FyeVxuLy8gdXNlIG9mIGB0aHJvd2Agc2F2ZXMgdGltZSBhbmQgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3RhY2tCZWZvcmVUaHJvd2luZyA9IGZhbHNlLFxuICAgIGhhc1N0YWNrQWZ0ZXJUaHJvd2luZyA9IGZhbHNlO1xuKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcbiAgICBoYXNTdGFja0JlZm9yZVRocm93aW5nID0gdHlwZW9mIGVyci5zdGFjayA9PT0gXCJzdHJpbmdcIiAmJiAhIWVyci5zdGFjaztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgY2F0Y2ggKHRocm93bkVycikge1xuICAgIGhhc1N0YWNrQWZ0ZXJUaHJvd2luZyA9IHR5cGVvZiB0aHJvd25FcnIuc3RhY2sgPT09IFwic3RyaW5nXCIgJiYgISF0aHJvd25FcnIuc3RhY2s7XG4gIH1cbn0pKCk7XG5cblxuLy8gTm9ybWFsaXplIHdoaXRlc3BhY2Ugd2l0aGluIGEgc3RyaW5nXG5mdW5jdGlvbiBub3JtYWxpemVXaGl0ZXNwYWNlKHN0cikge1xuICByZXR1cm4gc3RyID8gc3RyLnJlcGxhY2UoL15cXHMrJHxcXHMrJC9nLCBcIlwiKS5yZXBsYWNlKC9cXHNcXHMrL2csIFwiIFwiKSA6IFwiXCI7XG59XG5cbi8vIEdldCBzY3JpcHQgb2JqZWN0IGJhc2VkIG9uIHRoZSBgc3JjYCBVUkxcbmZ1bmN0aW9uIGdldFNjcmlwdEZyb21VcmwodXJsLCBlbGlnaWJsZVNjcmlwdHMpIHtcbiAgdmFyIGksXG4gICAgICBzY3JpcHQgPSBudWxsO1xuXG4gIGVsaWdpYmxlU2NyaXB0cyA9IGVsaWdpYmxlU2NyaXB0cyB8fCBzY3JpcHRzO1xuXG4gIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiICYmIHVybCkge1xuICAgIGZvciAoaSA9IGVsaWdpYmxlU2NyaXB0cy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICBpZiAoZWxpZ2libGVTY3JpcHRzW2ldLnNyYyA9PT0gdXJsKSB7XG4gICAgICAgIC8vIE5PVEU6IENvdWxkIGNoZWNrIGlmIHRoZSBzYW1lIHNjcmlwdCBVUkwgaXMgdXNlZCBieSBtb3JlIHRoYW4gb25lIGBzY3JpcHRgIGVsZW1lbnRcbiAgICAgICAgLy8gaGVyZS4uLiBidXQgbGV0J3Mgbm90LiBUaGF0IHdvdWxkIHlpZWxkIGxlc3MgdXNlZnVsIHJlc3VsdHMgaW4gXCJsb29zZVwiIGRldGVjdGlvbi4gOylcbiAgICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuLy8gR2V0IHNjcmlwdCBvYmplY3QgYmFzZWQgb24gdGhlIGNhbGxlciBmdW5jdGlvbidzIHNvdXJjZSBjb2RlIGJvZHkgKHRleHQpXG5mdW5jdGlvbiBnZXRJbmxpbmVTY3JpcHRGcm9tQ2FsbGVyU291cmNlKGNhbGxlckZuU291cmNlLCBlbGlnaWJsZVNjcmlwdHMpIHtcbiAgdmFyIGksIGlubGluZVNjcmlwdFRleHQsXG4gICAgICBzY3JpcHQgPSBudWxsLFxuICAgICAgY2FsbGVyU291cmNlVGV4dCA9IG5vcm1hbGl6ZVdoaXRlc3BhY2UoY2FsbGVyRm5Tb3VyY2UpO1xuXG4gIGVsaWdpYmxlU2NyaXB0cyA9IGVsaWdpYmxlU2NyaXB0cyB8fCBzY3JpcHRzO1xuXG4gIGlmIChjYWxsZXJGblNvdXJjZSAmJiBjYWxsZXJTb3VyY2VUZXh0KSB7XG4gICAgZm9yIChpID0gZWxpZ2libGVTY3JpcHRzLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgIC8vIE9ubHkgbG9vayBhdCBpbmxpbmUgc2NyaXB0c1xuICAgICAgaWYgKCFlbGlnaWJsZVNjcmlwdHNbaV0uaGFzQXR0cmlidXRlKFwic3JjXCIpKSB7XG4gICAgICAgIGlubGluZVNjcmlwdFRleHQgPSBub3JtYWxpemVXaGl0ZXNwYWNlKGVsaWdpYmxlU2NyaXB0c1tpXS50ZXh0KTtcbiAgICAgICAgaWYgKGlubGluZVNjcmlwdFRleHQuaW5kZXhPZihjYWxsZXJTb3VyY2VUZXh0KSAhPT0gLTEpIHtcbiAgICAgICAgICAvLyBJZiBtb3JlIHRoYW4gb25lIG1hdGNoIGlzIGZvdW5kLCBkb24ndCByZXR1cm4gYW55XG4gICAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzY3JpcHQgPSBlbGlnaWJsZVNjcmlwdHNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2NyaXB0O1xufVxuXG4vLyBJZiB0aGVyZSBpcyBvbmx5IGEgc2luZ2xlIGlubGluZSBzY3JpcHQgb24gdGhlIHBhZ2UsIHJldHVybiBpdDsgb3RoZXJ3aXNlIGBudWxsYFxuZnVuY3Rpb24gZ2V0U29sZUlubGluZVNjcmlwdChlbGlnaWJsZVNjcmlwdHMpIHtcbiAgdmFyIGksIGxlbixcbiAgICAgIHNjcmlwdCA9IG51bGw7XG4gIGVsaWdpYmxlU2NyaXB0cyA9IGVsaWdpYmxlU2NyaXB0cyB8fCBzY3JpcHRzO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBlbGlnaWJsZVNjcmlwdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIWVsaWdpYmxlU2NyaXB0c1tpXS5oYXNBdHRyaWJ1dGUoXCJzcmNcIikpIHtcbiAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzY3JpcHQgPSBlbGlnaWJsZVNjcmlwdHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiBzY3JpcHQ7XG59XG5cbi8vIEdldCB0aGUgY3VycmVudGx5IGV4ZWN1dGluZyBzY3JpcHQgVVJMIGZyb20gYW4gRXJyb3Igc3RhY2sgdHJhY2VcbmZ1bmN0aW9uIGdldFNjcmlwdFVybEZyb21TdGFjayhzdGFjaywgc2tpcFN0YWNrRGVwdGgpIHtcbiAgdmFyIG1hdGNoZXMsIHJlbWFpbmluZ1N0YWNrLFxuICAgICAgdXJsID0gbnVsbCxcbiAgICAgIGlnbm9yZU1lc3NhZ2UgPSB0eXBlb2Ygc2tpcFN0YWNrRGVwdGggPT09IFwibnVtYmVyXCI7XG4gIHNraXBTdGFja0RlcHRoID0gaWdub3JlTWVzc2FnZSA/IE1hdGgucm91bmQoc2tpcFN0YWNrRGVwdGgpIDogMDtcbiAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIiAmJiBzdGFjaykge1xuICAgIGlmIChpZ25vcmVNZXNzYWdlKSB7XG4gICAgICBtYXRjaGVzID0gc3RhY2subWF0Y2goLyhkYXRhOnRleHRcXC9qYXZhc2NyaXB0KD86O1teLF0rKT8sLis/fCg/OnxibG9iOikoPzpodHRwW3NdP3xmaWxlKTpcXC9cXC9bXFwvXT8uKz9cXC9bXjpcXCldKj8pKD86OlxcZCspKD86OlxcZCspPy8pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1hdGNoZXMgPSBzdGFjay5tYXRjaCgvXig/OnxbXjpAXSpAfC4rXFwpQCg/PWRhdGE6dGV4dFxcL2phdmFzY3JpcHR8YmxvYnxodHRwW3NdP3xmaWxlKXwuKz9cXHMrKD86IGF0IHxAKSg/OlteOlxcKF0rICkqW1xcKF0/KShkYXRhOnRleHRcXC9qYXZhc2NyaXB0KD86O1teLF0rKT8sLis/fCg/OnxibG9iOikoPzpodHRwW3NdP3xmaWxlKTpcXC9cXC9bXFwvXT8uKz9cXC9bXjpcXCldKj8pKD86OlxcZCspKD86OlxcZCspPy8pO1xuXG4gICAgICBpZiAoIShtYXRjaGVzICYmIG1hdGNoZXNbMV0pKSB7XG4gICAgICAgIG1hdGNoZXMgPSBzdGFjay5tYXRjaCgvXFwpQChkYXRhOnRleHRcXC9qYXZhc2NyaXB0KD86O1teLF0rKT8sLis/fCg/OnxibG9iOikoPzpodHRwW3NdP3xmaWxlKTpcXC9cXC9bXFwvXT8uKz9cXC9bXjpcXCldKj8pKD86OlxcZCspKD86OlxcZCspPy8pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHtcbiAgICAgIGlmIChza2lwU3RhY2tEZXB0aCA+IDApIHtcbiAgICAgICAgcmVtYWluaW5nU3RhY2sgPSBzdGFjay5zbGljZShzdGFjay5pbmRleE9mKG1hdGNoZXNbMF0pICsgbWF0Y2hlc1swXS5sZW5ndGgpO1xuICAgICAgICB1cmwgPSBnZXRTY3JpcHRVcmxGcm9tU3RhY2socmVtYWluaW5nU3RhY2ssIChza2lwU3RhY2tEZXB0aCAtIDEpKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB1cmwgPSBtYXRjaGVzWzFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRPRE86IEhhbmRsZSBtb3JlIGVkZ2UgY2FzZXMhXG4gICAgLy8gRml4ZXMgIzFcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0L2lzc3Vlcy8xXG5cbiAgICAvLyA/Pz9cblxuICB9XG4gIHJldHVybiB1cmw7XG59XG5cblxuLy8gR2V0IHRoZSBmYXJ0aGVzdCBjdXJyZW50bHkgZXhlY3V0aW5nIChpLmUuIHllcywgRVhFQ1VUSU5HKSBgc2NyaXB0YCBET01cbi8vIGVsZW1lbnQgZm9yIHRoZSBjYWxsZXIgZnVuY3Rpb24sIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBpdCBpcyB0aGF0IGBzY3JpcHRgXG4vLyBET00gZWxlbWVudCBpcyBjdXJyZW50bHkgYmVpbmcgZXZhbHVhdGVkIGZvciB0aGUgZmlyc3QgdGltZS4gVGhlIGZhcnRoZXN0XG4vLyBjdXJyZW50bHkgZXhlY3V0aW5nIGBzY3JpcHRgIERPTSBlbGVtZW50IHdvdWxkIHR5cGljYWxseSBiZSBjb25zaWRlcmVkIHRoZVxuLy8gb3JpZ2luYXRvciBvZiB0aGUgY3VycmVudCBleGVjdXRpb24gc3RhY2suXG5mdW5jdGlvbiBfZmFydGhlc3RFeGVjdXRpbmdTY3JpcHQoKSB7XG4gIC8qanNoaW50IG5vYXJnOmZhbHNlICovXG5cbiAgLy8gVE9ETzogSW1wbGVtZW50IVxuICAvLyBGaXhlcyAjM1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0L2lzc3Vlcy8zXG4gIHJldHVybiBudWxsO1xuXG4vKlxuICAvLyBZZXMsIHRoaXMgSVMgcG9zc2libGUsIGkuZS4gaWYgYSBzY3JpcHQgcmVtb3ZlcyBvdGhlciBzY3JpcHRzIChvciBpdHNlbGYpXG4gIGlmIChzY3JpcHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gR3VhcmFudGVlZCBhY2N1cmF0ZSBpbiBJRSA2LTEwLlxuICAvLyBOb3QgYWNjdXJhdGUvc3VwcG9ydGVkIGluIGFueSBvdGhlciBicm93c2Vycy5cbiAgaWYgKGlzTm90T3BlcmEgJiYgc3VwcG9ydHNTY3JpcHRSZWFkeVN0YXRlKSB7XG4gICAgZm9yICh2YXIgaSA9IHNjcmlwdHMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgaWYgKHNjcmlwdHNbaV0ucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiKSB7XG4gICAgICAgIHJldHVybiBzY3JpcHRzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBzdGFjayxcbiAgICAgIGUgPSBuZXcgRXJyb3IoKTtcbiAgaWYgKGhhc1N0YWNrQmVmb3JlVGhyb3dpbmcpIHtcbiAgICBzdGFjayA9IGUuc3RhY2s7XG4gIH1cbiAgaWYgKCFzdGFjayAmJiBoYXNTdGFja0FmdGVyVGhyb3dpbmcpIHtcbiAgICB0cnkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgLy8gTk9URTogQ2Fubm90IHVzZSBgZXJyLnNvdXJjZVVSTGAgb3IgYGVyci5maWxlTmFtZWAgYXMgdGhleSB3aWxsIGFsd2F5cyBiZSBUSElTIHNjcmlwdFxuICAgICAgc3RhY2sgPSBlcnIuc3RhY2s7XG4gICAgfVxuICB9XG4gIGlmIChzdGFjaykge1xuICAgIHZhciB1cmwgPSBnZXRTY3JpcHRVcmxGcm9tU3RhY2soc3RhY2ssIHNraXBTdGFja0RlcHRoKTtcbiAgICB2YXIgc2NyaXB0ID0gZ2V0U2NyaXB0RnJvbVVybCh1cmwsIHNjcmlwdHMgKTtcbiAgICBpZiAoIXNjcmlwdCAmJiBwYWdlVXJsICYmIHVybCA9PT0gcGFnZVVybCkge1xuICAgICAgLy8gVHJ5IHRvIGZpbmQgdGhlIGNvcnJlY3QgaW5saW5lIHNjcmlwdCBieSBzZWFyY2hpbmcgdGhyb3VnaFxuICAgICAgLy8gaW5saW5lIHNjcmlwdHMnIHRleHQgY29udGVudCBmb3IgdGhlIGNhbGxlciBmdW5jdGlvbidzIHNvdXJjZVxuICAgICAgLy8gY29kZSB0byBiZSBwcmVzZW50LiBJZiB0aGUgY2FsbGVyIGZ1bmN0aW9uJ3Mgc291cmNlIGNvZGUgaXNcbiAgICAgIC8vIG5vdCBhdmFpbGFibGUsIHNlZSBpZiB0aGVyZSBpcyBvbmx5IG9uZSBpbmxpbmUgc2NyaXB0IGVsZW1lbnRcbiAgICAgIC8vIGluIHRoZSBET00gYW5kIHJldHVybiB0aGF0IChldmVuIHRob3VnaCBpdCBtYXkgYmUgd3JvbmcpXG5cbiAgICAgIC8vIFRPRE86IEltcGxlbWVudCFcbiAgICAgIC8vIEZpeGVzICM0IGluIHBhcnRcbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vSmFtZXNNR3JlZW5lL2N1cnJlbnRFeGVjdXRpbmdTY3JpcHQvaXNzdWVzLzRcblxuICAgICAgdmFyIGNhbGxlckZuID0gX2ZhcnRoZXN0RXhlY3V0aW5nU2NyaXB0LmNhbGxlciB8fCBudWxsLFxuICAgICAgICAgIGNhbGxlckZuU3RhY2sgPSBbXSxcbiAgICAgICAgICBjYWxsZXJGblNvdXJjZSA9IG51bGw7XG5cbiAgICAgIHdoaWxlIChjYWxsZXJGbikge1xuICAgICAgICBjYWxsZXJGblN0YWNrLnB1c2goY2FsbGVyRm4pO1xuICAgICAgICBjYWxsZXJGbiA9IGNhbGxlckZuLmNhbGxlciB8fCBudWxsO1xuICAgICAgfVxuICAgICAgY2FsbGVyRm4gPSBjYWxsZXJGblN0YWNrLnNsaWNlKC0xKVswXTtcbiAgICAgIGNhbGxlckZuU291cmNlID0gY2FsbGVyRm4gPyAoXCJcIiArIGNhbGxlckZuKSA6IG51bGw7XG5cblxuICAgICAgaWYgKGNhbGxlckZuU291cmNlKSB7XG4gICAgICAgIHNjcmlwdCA9IGdldElubGluZVNjcmlwdEZyb21DYWxsZXJTb3VyY2UoY2FsbGVyRm5Tb3VyY2UpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYSBsb29zZSBhc3N1bXB0aW9uIHRoYXQgY291bGQgYmUgaW5hY2N1cmF0ZSFcbiAgICAgICAgLy9cbiAgICAgICAgLy8gSW5hY2N1cmFjaWVzOlxuICAgICAgICAvLyAgLSBJZiB0aGUgaW5saW5lIHNjcmlwdCB0aGF0IGluaXRpYXRlZCB0aGUgY2FsbCB3YXMgYWxzbyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAgICAgLy8gIC0gSWYgdGhlIGNhbGwgd2FzIGluaXRpYXRlZCBieSBhbiBlbGVtZW50J3MgaW5saW5lIGV2ZW50IGhhbmRsZXIsXG4gICAgICAgIC8vICAgIGUuZy4gYDxhIG9uY2xpY2s9XCIoZnVuY3Rpb24oKSB7IGFsZXJ0KGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQoKSk7IH0oKVwiPmNsaWNrPC9hPmBcbiAgICAgICAgc2NyaXB0ID0gZ2V0U29sZUlubGluZVNjcmlwdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NyaXB0O1xuICB9XG5cbiAgLy8gTk9URTogVGhpcyBpcyBhIGxvb3NlIGFzc3VtcHRpb24gdGhhdCBjb3VsZCBiZSBpbmFjY3VyYXRlIVxuICAvL1xuICAvLyBJbmFjY3VyYWNpZXM6XG4gIC8vICAtIElmIGEgc2NyaXB0IGlzIGNyZWF0ZWQgZHluYW1pY2FsbHkgYW5kIGFwcGVuZGVkIHRvIHNvbWUgcG9zaXRpb25cbiAgLy8gICAgb3RoZXIgdGhhbiB0aGUgdmVyeSBlbmQgb2YgdGhlIGRvY3VtZW50LlxuICAvLyAgLSBJZiBtdWx0aXBsZSBzY3JpcHRzIGFyZSBjcmVhdGVkIGR5bmFtaWNhbGx5IGFuZCBhbGwgYXBwZW5kZWQgdG8gdGhlXG4gIC8vICAgIHNhbWUgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudCAoYW5kIGRvIG5vdCBoYXZlIHRoZWlyIGBhc3luY2AgYXR0cmlidXRlc1xuICAvLyAgICBzZXQgdG8gYGZhbHNlYCwgYXQgbGVhc3QgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGFzeW5jIHNjcmlwdCBldmFsdWF0aW9uLlxuICAvLyAgICBvdGhlciB0aGFuIHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZG9jdW1lbnQuXG4gIC8vICAtIElmIGFueSBzY3JpcHRzIGFyZSBhZGRlZCB3aXRoIHRoZSBgYXN5bmNgIGF0dHJpYnV0ZSBzZXQgdG8gYHRydWVgIGluIGEgYnJvd3NlclxuICAvLyAgICB0aGF0IHN1cHBvcnRzIGl0LlxuICAvLyAgLSBNYXkgZ2V0IGNvbmZ1c2VkIGJ5IGBzY3JpcHRgIGVsZW1lbnRzIHdpdGhpbiBgc3ZnYCBlbGVtZW50c1xuICByZXR1cm4gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4qL1xufVxuXG5cbi8vIEdldCB0aGUgb3JpZ2luYXRpbmcgY3VycmVudGx5IGV4ZWN1dGluZyAoaS5lLiB5ZXMsIEVYRUNVVElORykgYHNjcmlwdGAgRE9NXG4vLyBlbGVtZW50IG9yIGF0dHJpYnV0ZSBub2RlIChlLmcuIGBvbmNsaWNrYCkgZm9yIHRoZSBjYWxsZXIgZnVuY3Rpb24sXG4vLyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgaXQgaXMgdGhhdCBgc2NyaXB0YCBET00gZWxlbWVudCBpcyBjdXJyZW50bHkgYmVpbmdcbi8vIGV2YWx1YXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoZSBvcmlnaW5hdGluZyBjdXJyZW50bHkgZXhlY3V0aW5nIGBzY3JpcHRgXG4vLyBET00gZWxlbWVudCBbb3IgYXR0cmlidXRlIG5vZGVdIGlzIHRoZSBvcmlnaW5hdG9yIG9mIHRoZSBjdXJyZW50IGV4ZWN1dGlvbiBzdGFjay5cbmZ1bmN0aW9uIF9vcmlnaW5hdGluZ0V4ZWN1dGluZ1NjcmlwdCgpIHtcbiAgLy8gVE9ETzogSW1wbGVtZW50IVxuICAvLyBGaXhlcyAjMlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0L2lzc3Vlcy8yXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBHZXQgdGhlIG5lYXJlc3QgY3VycmVudGx5IGV4ZWN1dGluZyAoaS5lLiB5ZXMsIEVYRUNVVElORykgYHNjcmlwdGAgRE9NXG4vLyBlbGVtZW50IGZvciB0aGUgY2FsbGVyIGZ1bmN0aW9uLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgaXQgaXMgdGhhdCBgc2NyaXB0YFxuLy8gRE9NIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIGV2YWx1YXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG5mdW5jdGlvbiBfbmVhcmVzdEV4ZWN1dGluZ1NjcmlwdCgpIHtcbiAgLypqc2hpbnQgbm9hcmc6ZmFsc2UgKi9cblxuICAvLyBZZXMsIHRoaXMgSVMgcG9zc2libGUsIGkuZS4gaWYgYSBzY3JpcHQgcmVtb3ZlcyBvdGhlciBzY3JpcHRzIChvciBpdHNlbGYpXG4gIGlmIChzY3JpcHRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGksIGUsIHN0YWNrLCB1cmwsIHNjcmlwdCxcbiAgICAgIGVsaWdpYmxlU2NyaXB0cyA9IFtdLFxuICAgICAgc2tpcFN0YWNrRGVwdGggPSBfbmVhcmVzdEV4ZWN1dGluZ1NjcmlwdC5za2lwU3RhY2tEZXB0aCB8fCAxLFxuXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQhXG4gICAgICAvLyBGaXhlcyAjNCBpbiBwYXJ0XG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0L2lzc3Vlcy80XG4gICAgICBjYWxsZXJGblNvdXJjZSA9IG51bGw7ICAvLyhcIlwiICsgKF9uZWFyZXN0RXhlY3V0aW5nU2NyaXB0LmNhbGxlciB8fCBcIlwiKSkgfHwgbnVsbDtcblxuICAvLyBUaGlzIHBhcnQgd2lsbCBvbmx5IGhlbHAgaW4gSUUgNi0xMC5cbiAgZm9yIChpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNOb3RPcGVyYSAmJiBzdXBwb3J0c1NjcmlwdFJlYWR5U3RhdGUpIHtcbiAgICAgIGlmIChzY3JpcHRSZWFkeVJlZ2V4LnRlc3Qoc2NyaXB0c1tpXS5yZWFkeVN0YXRlKSkge1xuICAgICAgICBlbGlnaWJsZVNjcmlwdHMucHVzaChzY3JpcHRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBlbGlnaWJsZVNjcmlwdHMucHVzaChzY3JpcHRzW2ldKTtcbiAgICB9XG4gIH1cblxuICBlID0gbmV3IEVycm9yKCk7XG4gIGlmIChoYXNTdGFja0JlZm9yZVRocm93aW5nKSB7XG4gICAgc3RhY2sgPSBlLnN0YWNrO1xuICB9XG4gIGlmICghc3RhY2sgJiYgaGFzU3RhY2tBZnRlclRocm93aW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIE5PVEU6IENhbm5vdCB1c2UgYGVyci5zb3VyY2VVUkxgIG9yIGBlcnIuZmlsZU5hbWVgIGFzIHRoZXkgd2lsbCBhbHdheXMgYmUgVEhJUyBzY3JpcHRcbiAgICAgIHN0YWNrID0gZXJyLnN0YWNrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFjaykge1xuICAgIHVybCA9IGdldFNjcmlwdFVybEZyb21TdGFjayhzdGFjaywgc2tpcFN0YWNrRGVwdGgpO1xuICAgIHNjcmlwdCA9IGdldFNjcmlwdEZyb21VcmwodXJsLCBlbGlnaWJsZVNjcmlwdHMpO1xuXG4gICAgaWYgKCFzY3JpcHQgJiYgcGFnZVVybCAmJiB1cmwgPT09IHBhZ2VVcmwpIHtcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3JyZWN0IGlubGluZSBzY3JpcHQgYnkgc2VhcmNoaW5nIHRocm91Z2hcbiAgICAgIC8vIGlubGluZSBzY3JpcHRzJyB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBjYWxsZXIgZnVuY3Rpb24ncyBzb3VyY2VcbiAgICAgIC8vIGNvZGUgdG8gYmUgcHJlc2VudC5cbiAgICAgIGlmIChjYWxsZXJGblNvdXJjZSkge1xuICAgICAgICBzY3JpcHQgPSBnZXRJbmxpbmVTY3JpcHRGcm9tQ2FsbGVyU291cmNlKGNhbGxlckZuU291cmNlLCBlbGlnaWJsZVNjcmlwdHMpO1xuICAgICAgfVxuICAgICAgLy8gSWYgdGhlIGNhbGxlciBmdW5jdGlvbidzIHNvdXJjZSBjb2RlIGlzIG5vdCBhdmFpbGFibGUsIHNlZSBpZlxuICAgICAgLy8gdGhlcmUgaXMgb25seSBvbmUgaW5saW5lIHNjcmlwdCBlbGVtZW50IGluIHRoZSBET00gYW5kIHJldHVyblxuICAgICAgLy8gdGhhdCAoZXZlbiB0aG91Z2ggaXQgbWF5IGJlIHdyb25nKS4uLlxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYSBsb29zZSBhc3N1bXB0aW9uIHRoYXQgY291bGQgYmUgaW5hY2N1cmF0ZSFcbiAgICAgICAgLy9cbiAgICAgICAgLy8gSW5hY2N1cmFjaWVzOlxuICAgICAgICAvLyAgLSBJZiB0aGUgaW5saW5lIHNjcmlwdCB0aGF0IGluaXRpYXRlZCB0aGUgY2FsbCB3YXMgYWxzbyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAgICAgLy8gIC0gSWYgdGhlIGNhbGwgd2FzIGluaXRpYXRlZCBieSBhbiBlbGVtZW50J3MgaW5saW5lIGV2ZW50IGhhbmRsZXIsXG4gICAgICAgIC8vICAgIGUuZy4gYDxhIG9uY2xpY2s9XCIoZnVuY3Rpb24oKSB7IGFsZXJ0KGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQoKSk7IH0oKVwiPmNsaWNrPC9hPmBcbiAgICAgICAgc2NyaXB0ID0gZ2V0U29sZUlubGluZVNjcmlwdChlbGlnaWJsZVNjcmlwdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIFdlbGNvbWUgdG8gdGhlIElzbGFuZCBvZiBJbmFjY3VyYXRlIEFzc3VtcHRpb25zIVxuICAvLyBOT1RFOiBBTEwgb2YgdGhlIGZvbGxvd2luZyBhcmUgbG9vc2UgYXNzdW1wdGlvbnMgdGhhdCBjb3VsZCBiZSBpbmFjY3VyYXRlIVxuICAvL1xuXG4gIGlmICghc2NyaXB0KSB7XG4gICAgLy8gSW5hY2N1cmFjaWVzOlxuICAgIC8vICAtIElmIHRoZSBpbmxpbmUgc2NyaXB0IHRoYXQgaW5pdGlhdGVkIHRoZSBjYWxsIHdhcyBhbHNvIHJlbW92ZWQgZnJvbSB0aGUgRE9NLlxuICAgIC8vICAtIElmIHRoZSBjYWxsIHdhcyBpbml0aWF0ZWQgYnkgYW4gZWxlbWVudCdzIGlubGluZSBldmVudCBoYW5kbGVyLFxuICAgIC8vICAgIGUuZy4gYDxhIG9uY2xpY2s9XCIoZnVuY3Rpb24oKSB7IGFsZXJ0KGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQoKSk7IH0oKVwiPmNsaWNrPC9hPmBcbiAgICBpZiAoZWxpZ2libGVTY3JpcHRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzWzBdO1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2NyaXB0KSB7XG4gICAgLy8gSW5hY2N1cmFjaWVzOlxuICAgIC8vICAtIElmIHNjcmlwdCBjdXJyZW50bHkgYmVpbmcgc3luY2hyb25vdXNseSBldmFsdWF0ZWQgYnkgdGhlIHBhcnNlciBpcyB0aGVcbiAgICAvLyAgICBvcmlnaW5hdG9yIG9mIHRoaXMgY2FsbCBzdGFjayBidXQgTk9UIHRoZSBzb3VyY2Ugc2NyaXB0IG9mIHRoZSBjYWxsZXIvaW52b2NhdGlvblxuICAgIC8vICAgIGUuZy5cbiAgICAvLyAgICBgYGBodG1sXG4gICAgLy8gICAgPHNjcmlwdCBpZD1cImFcIj5cbiAgICAvLyAgICBmdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0Q2FsbGVyRm4oKSB7XG4gICAgLy8gICAgICByZXR1cm4gY3VycmVudEV4ZWN1dGluZ1NjcmlwdC5uZWFyKCk7XG4gICAgLy8gICAgfVxuICAgIC8vICAgIDwvc2NyaXB0PlxuICAgIC8vICAgIDxzY3JpcHQgaWQ9XCJiXCI+XG4gICAgLy8gICAgLy8gU2hvdWxkIGdldCBgc2NyaXB0W2lkPVwiYVwiXWAgYnV0IHdpbGwgZ2V0IGBzY3JpcHRbaWQ9XCJiXCJdYCBpbnN0ZWFkXG4gICAgLy8gICAgZ2V0Q3VycmVudFNjcmlwdENhbGxlckZuKCk7XG4gICAgLy8gICAgPC9zY3JpcHQ+XG4gICAgaWYgKGhhc05hdGl2ZUN1cnJlbnRTY3JpcHRBY2Nlc3Nvcikge1xuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdDtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNjcmlwdCkge1xuICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAvLyAgLSBJZiBzY3JpcHQgY3VycmVudGx5IGJlaW5nIHN5bmNocm9ub3VzbHkgZXZhbHVhdGVkIGJ5IHRoZSBwYXJzZXIgaXMgdGhlXG4gICAgLy8gICAgb3JpZ2luYXRvciBvZiB0aGlzIGNhbGwgc3RhY2sgYnV0IE5PVCB0aGUgc291cmNlIHNjcmlwdCBvZiB0aGUgY2FsbGVyL2ludm9jYXRpb25cbiAgICAvLyAgICBlLmcuXG4gICAgLy8gICAgYGBgaHRtbFxuICAgIC8vICAgIDxzY3JpcHQgaWQ9XCJhXCI+XG4gICAgLy8gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdENhbGxlckZuKCkge1xuICAgIC8vICAgICAgcmV0dXJuIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQubmVhcigpO1xuICAgIC8vICAgIH1cbiAgICAvLyAgICA8L3NjcmlwdD5cbiAgICAvLyAgICA8c2NyaXB0IGlkPVwiYlwiPlxuICAgIC8vICAgIC8vIFNob3VsZCBnZXQgYHNjcmlwdFtpZD1cImFcIl1gIGJ1dCB3aWxsIGdldCBgc2NyaXB0W2lkPVwiYlwiXWAgaW5zdGVhZFxuICAgIC8vICAgIGdldEN1cnJlbnRTY3JpcHRDYWxsZXJGbigpO1xuICAgIC8vICAgIDwvc2NyaXB0PlxuICAgIGlmIChpc05vdE9wZXJhICYmIHN1cHBvcnRzU2NyaXB0UmVhZHlTdGF0ZSkge1xuICAgICAgZm9yIChpID0gZWxpZ2libGVTY3JpcHRzLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgICAgaWYgKGVsaWdpYmxlU2NyaXB0c1tpXS5yZWFkeVN0YXRlID09PSBcImludGVyYWN0aXZlXCIpIHtcbiAgICAgICAgICBzY3JpcHQgPSBlbGlnaWJsZVNjcmlwdHNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXNjcmlwdCkge1xuICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAvLyAgLSBJZiBhIHNjcmlwdCBpcyBjcmVhdGVkIGR5bmFtaWNhbGx5IGFuZCBhcHBlbmRlZCB0byBzb21lIHBvc2l0aW9uXG4gICAgLy8gICAgb3RoZXIgdGhhbiB0aGUgdmVyeSBlbmQgb2YgdGhlIGRvY3VtZW50LlxuICAgIC8vICAtIElmIG11bHRpcGxlIHNjcmlwdHMgYXJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgYW5kIGFsbCBhcHBlbmRlZCB0byB0aGVcbiAgICAvLyAgICBzYW1lIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQgKGFuZCBkbyBub3QgaGF2ZSB0aGVpciBgYXN5bmNgIGF0dHJpYnV0ZXNcbiAgICAvLyAgICBzZXQgdG8gYGZhbHNlYCwgYXQgbGVhc3QgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGFzeW5jIHNjcmlwdCBldmFsdWF0aW9uLlxuICAgIC8vICAgIG90aGVyIHRoYW4gdGhlIHZlcnkgZW5kIG9mIHRoZSBkb2N1bWVudC5cbiAgICAvLyAgLSBJZiBhbnkgc2NyaXB0cyBhcmUgYWRkZWQgd2l0aCB0aGUgYGFzeW5jYCBhdHRyaWJ1dGUgc2V0IHRvIGB0cnVlYCBpbiBhIGJyb3dzZXJcbiAgICAvLyAgICB0aGF0IHN1cHBvcnRzIGl0LlxuICAgIC8vICAtIE1heSBnZXQgY29uZnVzZWQgYnkgYHNjcmlwdGAgZWxlbWVudHMgd2l0aGluIGBzdmdgIGVsZW1lbnRzXG4gICAgLy8gIC0gSWYgc2NyaXB0IGN1cnJlbnRseSBiZWluZyBzeW5jaHJvbm91c2x5IGV2YWx1YXRlZCBieSB0aGUgcGFyc2VyIGlzIHRoZVxuICAgIC8vICAgIG9yaWdpbmF0b3Igb2YgdGhpcyBjYWxsIHN0YWNrIGJ1dCBOT1QgdGhlIHNvdXJjZSBzY3JpcHQgb2YgdGhlIGNhbGxlci9pbnZvY2F0aW9uXG4gICAgLy8gICAgZS5nLlxuICAgIC8vICAgIGBgYGh0bWxcbiAgICAvLyAgICA8c2NyaXB0IGlkPVwiYVwiPlxuICAgIC8vICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRDYWxsZXJGbigpIHtcbiAgICAvLyAgICAgIHJldHVybiBjdXJyZW50RXhlY3V0aW5nU2NyaXB0Lm5lYXIoKTtcbiAgICAvLyAgICB9XG4gICAgLy8gICAgPC9zY3JpcHQ+XG4gICAgLy8gICAgPHNjcmlwdCBpZD1cImJcIj5cbiAgICAvLyAgICAvLyBTaG91bGQgZ2V0IGBzY3JpcHRbaWQ9XCJhXCJdYCBidXQgd2lsbCBnZXQgYHNjcmlwdFtpZD1cImJcIl1gIGluc3RlYWRcbiAgICAvLyAgICBnZXRDdXJyZW50U2NyaXB0Q2FsbGVyRm4oKTtcbiAgICAvLyAgICA8L3NjcmlwdD5cbiAgICAvLyAgICBgYGBcbiAgICBzY3JpcHQgPSBlbGlnaWJsZVNjcmlwdHNbZWxpZ2libGVTY3JpcHRzLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gIH1cblxuICByZXR1cm4gc2NyaXB0O1xufVxuXG4vLyBEZWZhdWx0IHN0YWNrIGRlcHRoIHRvIHNraXAgb3ZlciB3aGVuIGFuYWx5emluZyBjYWxsIHN0YWNrIGZyYW1lc1xuX25lYXJlc3RFeGVjdXRpbmdTY3JpcHQuc2tpcFN0YWNrRGVwdGggPSAxO1xuXG5cblxuICAgIC8vXG4gICAgLy8gRXhwb3J0IHRoZSBBUElcbiAgICAvL1xuICAgIHZhciBjdXJyZW50RXhlY3V0aW5nU2NyaXB0ICAgID0gX25lYXJlc3RFeGVjdXRpbmdTY3JpcHQ7ICAgICAgLy8gZGVmYXVsdFxuICAgIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQubmVhciAgID0gX25lYXJlc3RFeGVjdXRpbmdTY3JpcHQ7XG4gICAgY3VycmVudEV4ZWN1dGluZ1NjcmlwdC5mYXIgICAgPSBfZmFydGhlc3RFeGVjdXRpbmdTY3JpcHQ7XG4gICAgY3VycmVudEV4ZWN1dGluZ1NjcmlwdC5vcmlnaW4gPSBfb3JpZ2luYXRpbmdFeGVjdXRpbmdTY3JpcHQ7XG5cblxuICAgIC8vIEp1c3QgcmV0dXJuIGEgdmFsdWUgdG8gZGVmaW5lIHRoZSBtb2R1bGUgZXhwb3J0LlxuICAgIC8vIFRoaXMgZXhhbXBsZSByZXR1cm5zIGFuIG9iamVjdCwgYnV0IHRoZSBtb2R1bGVcbiAgICAvLyBjYW4gcmV0dXJuIGEgZnVuY3Rpb24gYXMgdGhlIGV4cG9ydGVkIHZhbHVlLlxuICAgIHJldHVybiBjdXJyZW50RXhlY3V0aW5nU2NyaXB0O1xuICB9KVxuKTtcbiIsImltcG9ydHt1c2VTdGF0ZSBhcyBuLHVzZVJlZHVjZXIgYXMgdCx1c2VFZmZlY3QgYXMgZSx1c2VMYXlvdXRFZmZlY3QgYXMgcix1c2VSZWYgYXMgbyx1c2VJbXBlcmF0aXZlSGFuZGxlIGFzIHUsdXNlTWVtbyBhcyBpLHVzZUNhbGxiYWNrIGFzIGYsdXNlQ29udGV4dCBhcyBjLHVzZURlYnVnVmFsdWUgYXMgYX1mcm9tXCJwcmVhY3QvaG9va3NcIjtleHBvcnQqZnJvbVwicHJlYWN0L2hvb2tzXCI7aW1wb3J0e0NvbXBvbmVudCBhcyBsLGNyZWF0ZUVsZW1lbnQgYXMgcyxvcHRpb25zIGFzIGgsdG9DaGlsZEFycmF5IGFzIHYsaHlkcmF0ZSBhcyBwLHJlbmRlciBhcyBkLF91bm1vdW50IGFzIG0sY2xvbmVFbGVtZW50IGFzIHksY3JlYXRlUmVmIGFzIGIsY3JlYXRlQ29udGV4dCBhcyBnLEZyYWdtZW50IGFzIHh9ZnJvbVwicHJlYWN0XCI7ZXhwb3J0e2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGV4dCxjcmVhdGVSZWYsRnJhZ21lbnQsQ29tcG9uZW50fWZyb21cInByZWFjdFwiO2Z1bmN0aW9uIEUobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gdyhuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX12YXIgQz1mdW5jdGlvbihuKXt2YXIgdCxlO2Z1bmN0aW9uIHIodCl7dmFyIGU7cmV0dXJuKGU9bi5jYWxsKHRoaXMsdCl8fHRoaXMpLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLGV9cmV0dXJuIGU9biwodD1yKS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSksdC5wcm90b3R5cGUuY29uc3RydWN0b3I9dCx0Ll9fcHJvdG9fXz1lLHIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiB3KHRoaXMucHJvcHMsbil8fHcodGhpcy5zdGF0ZSx0KX0scn0obCk7ZnVuY3Rpb24gXyhuLHQpe2Z1bmN0aW9uIGUobil7dmFyIGU9dGhpcy5wcm9wcy5yZWYscj1lPT1uLnJlZjtyZXR1cm4hciYmZSYmKGUuY2FsbD9lKG51bGwpOmUuY3VycmVudD1udWxsKSx0PyF0KHRoaXMucHJvcHMsbil8fCFyOncodGhpcy5wcm9wcyxuKX1mdW5jdGlvbiByKHQpe3JldHVybiB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1lLHMobixFKHt9LHQpKX1yZXR1cm4gci5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCxyLmRpc3BsYXlOYW1lPVwiTWVtbyhcIisobi5kaXNwbGF5TmFtZXx8bi5uYW1lKStcIilcIixyLnQ9ITAscn12YXIgQT1oLnZub2RlO2Z1bmN0aW9uIFMobil7ZnVuY3Rpb24gdCh0KXt2YXIgZT1FKHt9LHQpO3JldHVybiBkZWxldGUgZS5yZWYsbihlLHQucmVmKX1yZXR1cm4gdC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD0hMCx0LnQ9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH1oLnZub2RlPWZ1bmN0aW9uKG4pe24udHlwZSYmbi50eXBlLnQmJm4ucmVmJiYobi5wcm9wcy5yZWY9bi5yZWYsbi5yZWY9bnVsbCksQSYmQShuKX07dmFyIGs9ZnVuY3Rpb24obix0KXtyZXR1cm4gbj92KG4pLm1hcCh0KTpudWxsfSxGPXttYXA6ayxmb3JFYWNoOmssY291bnQ6ZnVuY3Rpb24obil7cmV0dXJuIG4/dihuKS5sZW5ndGg6MH0sb25seTpmdW5jdGlvbihuKXtpZigxIT09KG49dihuKSkubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIkNoaWxkcmVuLm9ubHkoKSBleHBlY3RzIG9ubHkgb25lIGNoaWxkLlwiKTtyZXR1cm4gblswXX0sdG9BcnJheTp2fSxOPWguX19lO2Z1bmN0aW9uIFIobil7cmV0dXJuIG4mJigobj1FKHt9LG4pKS5fX2M9bnVsbCxuLl9faz1uLl9fayYmbi5fX2subWFwKFIpKSxufWZ1bmN0aW9uIE0obil7dGhpcy5fX3U9MCx0aGlzLl9fYj1udWxsfWZ1bmN0aW9uIFUobil7dmFyIHQ9bi5fXy5fX2M7cmV0dXJuIHQmJnQubyYmdC5vKG4pfWZ1bmN0aW9uIE8obil7dmFyIHQsZSxyO2Z1bmN0aW9uIG8obyl7aWYodHx8KHQ9bigpKS50aGVuKGZ1bmN0aW9uKG4pe2U9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXtyPW59KSxyKXRocm93IHI7aWYoIWUpdGhyb3cgdDtyZXR1cm4gcyhlLG8pfXJldHVybiBvLmRpc3BsYXlOYW1lPVwiTGF6eVwiLG8udD0hMCxvfWZ1bmN0aW9uIGooKXt0aGlzLnU9bnVsbCx0aGlzLmk9bnVsbH1oLl9fZT1mdW5jdGlvbihuLHQsZSl7aWYobi50aGVuKWZvcih2YXIgcixvPXQ7bz1vLl9fOylpZigocj1vLl9fYykmJnIubClyZXR1cm4gci5sKG4sdC5fX2MpO04obix0LGUpfSwoTS5wcm90b3R5cGU9bmV3IGwpLmw9ZnVuY3Rpb24obix0KXt2YXIgZT10aGlzLHI9VShlLl9fdiksbz0hMSx1PWZ1bmN0aW9uKCl7b3x8KG89ITAscj9yKGkpOmkoKSl9O3QuX19jPXQuY29tcG9uZW50V2lsbFVubW91bnQsdC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3UoKSx0Ll9fYyYmdC5fX2MoKX07dmFyIGk9ZnVuY3Rpb24oKXstLWUuX191fHwoZS5fX3YuX19rWzBdPWUuc3RhdGUubyxlLnNldFN0YXRlKHtvOmUuX19iPW51bGx9KSl9O2UuX191Kyt8fGUuc2V0U3RhdGUoe286ZS5fX2I9ZS5fX3YuX19rWzBdfSksbi50aGVuKHUsdSl9LE0ucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuLHQpe3JldHVybiB0aGlzLl9fYiYmKHRoaXMuX192Ll9fa1swXT1SKHRoaXMuX19iKSx0aGlzLl9fYj1udWxsKSxbcyhsLG51bGwsdC5vP251bGw6bi5jaGlsZHJlbiksdC5vJiZuLmZhbGxiYWNrXX07dmFyIHo9ZnVuY3Rpb24obix0LGUpe2lmKCsrZVsxXT09PWVbMF0mJm4uaS5kZWxldGUodCksbi5wcm9wcy5yZXZlYWxPcmRlciYmKFwidFwiIT09bi5wcm9wcy5yZXZlYWxPcmRlclswXXx8IW4uaS5zaXplKSlmb3IoZT1uLnU7ZTspe2Zvcig7ZS5sZW5ndGg+MzspZS5wb3AoKSgpO2lmKGVbMV08ZVswXSlicmVhaztuLnU9ZT1lWzJdfX07KGoucHJvdG90eXBlPW5ldyBsKS5vPWZ1bmN0aW9uKG4pe3ZhciB0PXRoaXMsZT1VKHQuX192KSxyPXQuaS5nZXQobik7cmV0dXJuIHJbMF0rKyxmdW5jdGlvbihvKXt2YXIgdT1mdW5jdGlvbigpe3QucHJvcHMucmV2ZWFsT3JkZXI/KHIucHVzaChvKSx6KHQsbixyKSk6bygpfTtlP2UodSk6dSgpfX0sai5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKG4pe3RoaXMudT1udWxsLHRoaXMuaT1uZXcgTWFwO3ZhciB0PXYobi5jaGlsZHJlbik7bi5yZXZlYWxPcmRlciYmXCJiXCI9PT1uLnJldmVhbE9yZGVyWzBdJiZ0LnJldmVyc2UoKTtmb3IodmFyIGU9dC5sZW5ndGg7ZS0tOyl0aGlzLmkuc2V0KHRbZV0sdGhpcy51PVsxLDAsdGhpcy51XSk7cmV0dXJuIG4uY2hpbGRyZW59LGoucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZT1qLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudD1mdW5jdGlvbigpe3ZhciBuPXRoaXM7bi5pLmZvckVhY2goZnVuY3Rpb24odCxlKXt6KG4sZSx0KX0pfTt2YXIgTD1mdW5jdGlvbigpe2Z1bmN0aW9uIG4oKXt9dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIHQuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvcHMuY29udGV4dH0sdC5yZW5kZXI9ZnVuY3Rpb24obil7cmV0dXJuIG4uY2hpbGRyZW59LG59KCk7ZnVuY3Rpb24gUChuKXt2YXIgdD10aGlzLGU9bi5jb250YWluZXIscj1zKEwse2NvbnRleHQ6dC5jb250ZXh0fSxuLnZub2RlKTtyZXR1cm4gdC5zJiZ0LnMhPT1lJiYodC5oLnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LmgpLG0odC52KSx0LnA9ITEpLG4udm5vZGU/dC5wPyhlLl9faz10Ll9fayxkKHIsZSksdC5fX2s9ZS5fX2spOih0Lmg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikscChcIlwiLGUpLGUuYXBwZW5kQ2hpbGQodC5oKSx0LnA9ITAsdC5zPWUsZChyLGUsdC5oKSx0Ll9faz10aGlzLmguX19rKTp0LnAmJih0LmgucGFyZW50Tm9kZSYmdC5zLnJlbW92ZUNoaWxkKHQuaCksbSh0LnYpKSx0LnY9cix0LmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dC5oLnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LmgpLG0odC52KX0sbnVsbH1mdW5jdGlvbiBXKG4sdCl7cmV0dXJuIHMoUCx7dm5vZGU6bixjb250YWluZXI6dH0pfXZhciBEPS9eKD86YWNjZW50fGFsaWdubWVudHxhcmFiaWN8YmFzZWxpbmV8Y2FwfGNsaXB8Y29sb3J8ZmlsbHxmbG9vZHxmb250fGdseXBofGhvcml6fG1hcmtlcnxvdmVybGluZXxwYWludHxzdG9wfHN0cmlrZXRocm91Z2h8c3Ryb2tlfHRleHR8dW5kZXJsaW5lfHVuaWNvZGV8dW5pdHN8dnx2ZWN0b3J8dmVydHx3b3JkfHdyaXRpbmd8eClbQS1aXS87bC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTt2YXIgVD1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yJiZTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKXx8NjAxMDM7ZnVuY3Rpb24gVihuLHQsZSl7aWYobnVsbD09dC5fX2spZm9yKDt0LmZpcnN0Q2hpbGQ7KXQucmVtb3ZlQ2hpbGQodC5maXJzdENoaWxkKTtyZXR1cm4gWihuLHQsZSl9ZnVuY3Rpb24gWihuLHQsZSl7cmV0dXJuIGQobix0KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCksbj9uLl9fYzpudWxsfXZhciBIPWguZXZlbnQ7ZnVuY3Rpb24gSShuLHQpe25bXCJVTlNBRkVfXCIrdF0mJiFuW3RdJiZPYmplY3QuZGVmaW5lUHJvcGVydHkobix0LHtjb25maWd1cmFibGU6ITEsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrdF19LHNldDpmdW5jdGlvbihuKXt0aGlzW1wiVU5TQUZFX1wiK3RdPW59fSl9aC5ldmVudD1mdW5jdGlvbihuKXtyZXR1cm4gSCYmKG49SChuKSksbi5wZXJzaXN0PWZ1bmN0aW9uKCl7fSxuLm5hdGl2ZUV2ZW50PW59O3ZhciAkPXtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2xhc3N9fSxxPWgudm5vZGU7aC52bm9kZT1mdW5jdGlvbihuKXtuLiQkdHlwZW9mPVQ7dmFyIHQ9bi50eXBlLGU9bi5wcm9wcztpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXt2YXIgcixvLHU7Zm9yKHUgaW4gZS5kZWZhdWx0VmFsdWUmJihlLnZhbHVlfHwwPT09ZS52YWx1ZXx8KGUudmFsdWU9ZS5kZWZhdWx0VmFsdWUpLGRlbGV0ZSBlLmRlZmF1bHRWYWx1ZSksQXJyYXkuaXNBcnJheShlLnZhbHVlKSYmZS5tdWx0aXBsZSYmXCJzZWxlY3RcIj09PXQmJih2KGUuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24obil7LTEhPWUudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKSYmKG4ucHJvcHMuc2VsZWN0ZWQ9ITApfSksZGVsZXRlIGUudmFsdWUpLGUpaWYocj1ELnRlc3QodSkpYnJlYWs7aWYocilmb3IodSBpbiBvPW4ucHJvcHM9e30sZSlvW0QudGVzdCh1KT91LnJlcGxhY2UoLyhbQS1aMC05XSkvLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCk6dV09ZVt1XX0oZS5jbGFzc3x8ZS5jbGFzc05hbWUpJiYoJC5lbnVtZXJhYmxlPVwiY2xhc3NOYW1lXCJpbiBlLGUuY2xhc3NOYW1lJiYoZS5jbGFzcz1lLmNsYXNzTmFtZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJjbGFzc05hbWVcIiwkKSksZnVuY3Rpb24odCl7dmFyIGU9bi50eXBlLHI9bi5wcm9wcztpZihyJiZcInN0cmluZ1wiPT10eXBlb2YgZSl7dmFyIG89e307Zm9yKHZhciB1IGluIHIpL15vbihBbml8VHJhfFRvdSkvLnRlc3QodSkmJihyW3UudG9Mb3dlckNhc2UoKV09clt1XSxkZWxldGUgclt1XSksb1t1LnRvTG93ZXJDYXNlKCldPXU7aWYoby5vbmRvdWJsZWNsaWNrJiYoci5vbmRibGNsaWNrPXJbby5vbmRvdWJsZWNsaWNrXSxkZWxldGUgcltvLm9uZG91YmxlY2xpY2tdKSxvLm9uYmVmb3JlaW5wdXQmJihyLm9uYmVmb3JlaW5wdXQ9cltvLm9uYmVmb3JlaW5wdXRdLGRlbGV0ZSByW28ub25iZWZvcmVpbnB1dF0pLG8ub25jaGFuZ2UmJihcInRleHRhcmVhXCI9PT1lfHxcImlucHV0XCI9PT1lLnRvTG93ZXJDYXNlKCkmJiEvXmZpbHxjaGV8cmEvaS50ZXN0KHIudHlwZSkpKXt2YXIgaT1vLm9uaW5wdXR8fFwib25pbnB1dFwiO3JbaV18fChyW2ldPXJbby5vbmNoYW5nZV0sZGVsZXRlIHJbby5vbmNoYW5nZV0pfX19KCksXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmIXQubSYmdC5wcm90b3R5cGUmJihJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbE1vdW50XCIpLEkodC5wcm90b3R5cGUsXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIpLEkodC5wcm90b3R5cGUsXCJjb21wb25lbnRXaWxsVXBkYXRlXCIpLHQubT0hMCkscSYmcShuKX07dmFyIEI9XCIxNi44LjBcIjtmdW5jdGlvbiBHKG4pe3JldHVybiBzLmJpbmQobnVsbCxuKX1mdW5jdGlvbiBKKG4pe3JldHVybiEhbiYmbi4kJHR5cGVvZj09PVR9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gSihuKT95LmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIFEobil7cmV0dXJuISFuLl9fayYmKGQobnVsbCxuKSwhMCl9ZnVuY3Rpb24gWChuKXtyZXR1cm4gbiYmKG4uYmFzZXx8MT09PW4ubm9kZVR5cGUmJm4pfHxudWxsfXZhciBZPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9O2V4cG9ydCBkZWZhdWx0e3VzZVN0YXRlOm4sdXNlUmVkdWNlcjp0LHVzZUVmZmVjdDplLHVzZUxheW91dEVmZmVjdDpyLHVzZVJlZjpvLHVzZUltcGVyYXRpdmVIYW5kbGU6dSx1c2VNZW1vOmksdXNlQ2FsbGJhY2s6Zix1c2VDb250ZXh0OmMsdXNlRGVidWdWYWx1ZTphLHZlcnNpb246XCIxNi44LjBcIixDaGlsZHJlbjpGLHJlbmRlcjpWLGh5ZHJhdGU6Vix1bm1vdW50Q29tcG9uZW50QXROb2RlOlEsY3JlYXRlUG9ydGFsOlcsY3JlYXRlRWxlbWVudDpzLGNyZWF0ZUNvbnRleHQ6ZyxjcmVhdGVGYWN0b3J5OkcsY2xvbmVFbGVtZW50OkssY3JlYXRlUmVmOmIsRnJhZ21lbnQ6eCxpc1ZhbGlkRWxlbWVudDpKLGZpbmRET01Ob2RlOlgsQ29tcG9uZW50OmwsUHVyZUNvbXBvbmVudDpDLG1lbW86Xyxmb3J3YXJkUmVmOlMsdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6WSxTdXNwZW5zZTpNLFN1c3BlbnNlTGlzdDpqLGxhenk6T307ZXhwb3J0e0IgYXMgdmVyc2lvbixGIGFzIENoaWxkcmVuLFYgYXMgcmVuZGVyLFogYXMgaHlkcmF0ZSxRIGFzIHVubW91bnRDb21wb25lbnRBdE5vZGUsVyBhcyBjcmVhdGVQb3J0YWwsRyBhcyBjcmVhdGVGYWN0b3J5LEsgYXMgY2xvbmVFbGVtZW50LEogYXMgaXNWYWxpZEVsZW1lbnQsWCBhcyBmaW5kRE9NTm9kZSxDIGFzIFB1cmVDb21wb25lbnQsXyBhcyBtZW1vLFMgYXMgZm9yd2FyZFJlZixZIGFzIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLE0gYXMgU3VzcGVuc2UsaiBhcyBTdXNwZW5zZUxpc3QsTyBhcyBsYXp5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbXBhdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgbixsLHUsdCxpLG8scixmPXt9LGU9W10sYz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZC9pO2Z1bmN0aW9uIHMobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gYShuKXt2YXIgbD1uLnBhcmVudE5vZGU7bCYmbC5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBoKG4sbCx1KXt2YXIgdCxpPWFyZ3VtZW50cyxvPXt9O2Zvcih0IGluIGwpXCJrZXlcIiE9PXQmJlwicmVmXCIhPT10JiYob1t0XT1sW3RdKTtpZihhcmd1bWVudHMubGVuZ3RoPjMpZm9yKHU9W3VdLHQ9Mzt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXUucHVzaChpW3RdKTtpZihudWxsIT11JiYoby5jaGlsZHJlbj11KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZudWxsIT1uLmRlZmF1bHRQcm9wcylmb3IodCBpbiBuLmRlZmF1bHRQcm9wcyl2b2lkIDA9PT1vW3RdJiYob1t0XT1uLmRlZmF1bHRQcm9wc1t0XSk7cmV0dXJuIHYobixvLGwmJmwua2V5LGwmJmwucmVmKX1mdW5jdGlvbiB2KGwsdSx0LGkpe3ZhciBvPXt0eXBlOmwscHJvcHM6dSxrZXk6dCxyZWY6aSxfX2s6bnVsbCxfXzpudWxsLF9fYjowLF9fZTpudWxsLF9fZDpudWxsLF9fYzpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMH07cmV0dXJuIG4udm5vZGUmJm4udm5vZGUobyksb31mdW5jdGlvbiBwKCl7cmV0dXJue319ZnVuY3Rpb24geShuKXtyZXR1cm4gbi5jaGlsZHJlbn1mdW5jdGlvbiBkKG4sbCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD1sfWZ1bmN0aW9uIG0obixsKXtpZihudWxsPT1sKXJldHVybiBuLl9fP20obi5fXyxuLl9fLl9fay5pbmRleE9mKG4pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/bShuKTpudWxsfWZ1bmN0aW9uIHcobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiB3KG4pfX1mdW5jdGlvbiBnKGwpeyghbC5fX2QmJihsLl9fZD0hMCkmJjE9PT11LnB1c2gobCl8fGkhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKChpPW4uZGVib3VuY2VSZW5kZXJpbmcpfHx0KShrKX1mdW5jdGlvbiBrKCl7dmFyIG4sbCx0LGksbyxyLGY7Zm9yKHUuc29ydChmdW5jdGlvbihuLGwpe3JldHVybiBsLl9fdi5fX2Itbi5fX3YuX19ifSk7bj11LnBvcCgpOyluLl9fZCYmKHQ9dm9pZCAwLGk9dm9pZCAwLHI9KG89KGw9bikuX192KS5fX2UsKGY9bC5fX1ApJiYodD1bXSxpPVQoZixvLHMoe30sbyksbC5fX24sdm9pZCAwIT09Zi5vd25lclNWR0VsZW1lbnQsbnVsbCx0LG51bGw9PXI/bShvKTpyKSwkKHQsbyksaSE9ciYmdyhvKSkpfWZ1bmN0aW9uIF8obixsLHUsdCxpLG8scixjLHMpe3ZhciBoLHYscCx5LGQsdyxnLGs9dSYmdS5fX2t8fGUsXz1rLmxlbmd0aDtpZihjPT1mJiYoYz1udWxsIT1vP29bMF06Xz9tKHUsMCk6bnVsbCksaD0wLGwuX19rPWIobC5fX2ssZnVuY3Rpb24odSl7aWYobnVsbCE9dSl7aWYodS5fXz1sLHUuX19iPWwuX19iKzEsbnVsbD09PShwPWtbaF0pfHxwJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSlrW2hdPXZvaWQgMDtlbHNlIGZvcih2PTA7djxfO3YrKyl7aWYoKHA9a1t2XSkmJnUua2V5PT1wLmtleSYmdS50eXBlPT09cC50eXBlKXtrW3ZdPXZvaWQgMDticmVha31wPW51bGx9aWYoeT1UKG4sdSxwPXB8fGYsdCxpLG8scixjLHMpLCh2PXUucmVmKSYmcC5yZWYhPXYmJihnfHwoZz1bXSkscC5yZWYmJmcucHVzaChwLnJlZixudWxsLHUpLGcucHVzaCh2LHUuX19jfHx5LHUpKSxudWxsIT15KXtpZihudWxsPT13JiYodz15KSxudWxsIT11Ll9fZCl5PXUuX19kLHUuX19kPW51bGw7ZWxzZSBpZihvPT1wfHx5IT1jfHxudWxsPT15LnBhcmVudE5vZGUpe246aWYobnVsbD09Y3x8Yy5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHkpO2Vsc2V7Zm9yKGQ9Yyx2PTA7KGQ9ZC5uZXh0U2libGluZykmJnY8Xzt2Kz0yKWlmKGQ9PXkpYnJlYWsgbjtuLmluc2VydEJlZm9yZSh5LGMpfVwib3B0aW9uXCI9PWwudHlwZSYmKG4udmFsdWU9XCJcIil9Yz15Lm5leHRTaWJsaW5nLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwudHlwZSYmKGwuX19kPXkpfX1yZXR1cm4gaCsrLHV9KSxsLl9fZT13LG51bGwhPW8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGwudHlwZSlmb3IoaD1vLmxlbmd0aDtoLS07KW51bGwhPW9baF0mJmEob1toXSk7Zm9yKGg9XztoLS07KW51bGwhPWtbaF0mJkEoa1toXSxrW2hdKTtpZihnKWZvcihoPTA7aDxnLmxlbmd0aDtoKyspeihnW2hdLGdbKytoXSxnWysraF0pfWZ1bmN0aW9uIGIobixsLHUpe2lmKG51bGw9PXUmJih1PVtdKSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG4pbCYmdS5wdXNoKGwobnVsbCkpO2Vsc2UgaWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIHQ9MDt0PG4ubGVuZ3RoO3QrKyliKG5bdF0sbCx1KTtlbHNlIHUucHVzaChsP2woXCJzdHJpbmdcIj09dHlwZW9mIG58fFwibnVtYmVyXCI9PXR5cGVvZiBuP3YobnVsbCxuLG51bGwsbnVsbCk6bnVsbCE9bi5fX2V8fG51bGwhPW4uX19jP3Yobi50eXBlLG4ucHJvcHMsbi5rZXksbnVsbCk6bik6bik7cmV0dXJuIHV9ZnVuY3Rpb24geChuLGwsdSx0LGkpe3ZhciBvO2ZvcihvIGluIHUpbyBpbiBsfHxQKG4sbyxudWxsLHVbb10sdCk7Zm9yKG8gaW4gbClpJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcInZhbHVlXCI9PT1vfHxcImNoZWNrZWRcIj09PW98fHVbb109PT1sW29dfHxQKG4sbyxsW29dLHVbb10sdCl9ZnVuY3Rpb24gQyhuLGwsdSl7XCItXCI9PT1sWzBdP24uc2V0UHJvcGVydHkobCx1KTpuW2xdPVwibnVtYmVyXCI9PXR5cGVvZiB1JiYhMT09PWMudGVzdChsKT91K1wicHhcIjpudWxsPT11P1wiXCI6dX1mdW5jdGlvbiBQKG4sbCx1LHQsaSl7dmFyIG8scixmLGUsYztpZihpP1wiY2xhc3NOYW1lXCI9PT1sJiYobD1cImNsYXNzXCIpOlwiY2xhc3NcIj09PWwmJihsPVwiY2xhc3NOYW1lXCIpLFwia2V5XCI9PT1sfHxcImNoaWxkcmVuXCI9PT1sKTtlbHNlIGlmKFwic3R5bGVcIj09PWwpaWYobz1uLnN0eWxlLFwic3RyaW5nXCI9PXR5cGVvZiB1KW8uY3NzVGV4dD11O2Vsc2V7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQmJihvLmNzc1RleHQ9XCJcIix0PW51bGwpLHQpZm9yKHIgaW4gdCl1JiZyIGluIHV8fEMobyxyLFwiXCIpO2lmKHUpZm9yKGYgaW4gdSl0JiZ1W2ZdPT09dFtmXXx8QyhvLGYsdVtmXSl9ZWxzZVwib1wiPT09bFswXSYmXCJuXCI9PT1sWzFdPyhlPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksYz1sLnRvTG93ZXJDYXNlKCksbD0oYyBpbiBuP2M6bCkuc2xpY2UoMiksdT8odHx8bi5hZGRFdmVudExpc3RlbmVyKGwsTixlKSwobi5sfHwobi5sPXt9KSlbbF09dSk6bi5yZW1vdmVFdmVudExpc3RlbmVyKGwsTixlKSk6XCJsaXN0XCIhPT1sJiZcInRhZ05hbWVcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0eXBlXCIhPT1sJiYhaSYmbCBpbiBuP25bbF09bnVsbD09dT9cIlwiOnU6XCJmdW5jdGlvblwiIT10eXBlb2YgdSYmXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCYmKGwhPT0obD1sLnJlcGxhY2UoL154bGluazo/LyxcIlwiKSk/bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsbC50b0xvd2VyQ2FzZSgpKTpuLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSx1KTpudWxsPT11fHwhMT09PXU/bi5yZW1vdmVBdHRyaWJ1dGUobCk6bi5zZXRBdHRyaWJ1dGUobCx1KSl9ZnVuY3Rpb24gTihsKXt0aGlzLmxbbC50eXBlXShuLmV2ZW50P24uZXZlbnQobCk6bCl9ZnVuY3Rpb24gVChsLHUsdCxpLG8scixmLGUsYyl7dmFyIGEsaCx2LHAsbSx3LGcsayx4LEMsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsoYT1uLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYoaz11LnByb3BzLHg9KGE9UC5jb250ZXh0VHlwZSkmJmlbYS5fX2NdLEM9YT94P3gucHJvcHMudmFsdWU6YS5fXzppLHQuX19jP2c9KGg9dS5fX2M9dC5fX2MpLl9fPWguX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPWg9bmV3IFAoayxDKToodS5fX2M9aD1uZXcgZChrLEMpLGguY29uc3RydWN0b3I9UCxoLnJlbmRlcj1EKSx4JiZ4LnN1YihoKSxoLnByb3BzPWssaC5zdGF0ZXx8KGguc3RhdGU9e30pLGguY29udGV4dD1DLGguX19uPWksdj1oLl9fZD0hMCxoLl9faD1bXSksbnVsbD09aC5fX3MmJihoLl9fcz1oLnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKGguX19zPT1oLnN0YXRlJiYoaC5fX3M9cyh7fSxoLl9fcykpLHMoaC5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoayxoLl9fcykpKSxwPWgucHJvcHMsbT1oLnN0YXRlLHYpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmayE9PXAmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGssQyksIWguX19lJiZudWxsIT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT1oLnNob3VsZENvbXBvbmVudFVwZGF0ZShrLGguX19zLEMpKXtmb3IoaC5wcm9wcz1rLGguc3RhdGU9aC5fX3MsaC5fX2Q9ITEsaC5fX3Y9dSx1Ll9fZT10Ll9fZSx1Ll9faz10Ll9fayxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxhPTA7YTx1Ll9fay5sZW5ndGg7YSsrKXUuX19rW2FdJiYodS5fX2tbYV0uX189dSk7YnJlYWsgbn1udWxsIT1oLmNvbXBvbmVudFdpbGxVcGRhdGUmJmguY29tcG9uZW50V2lsbFVwZGF0ZShrLGguX19zLEMpLG51bGwhPWguY29tcG9uZW50RGlkVXBkYXRlJiZoLl9faC5wdXNoKGZ1bmN0aW9uKCl7aC5jb21wb25lbnREaWRVcGRhdGUocCxtLHcpfSl9aC5jb250ZXh0PUMsaC5wcm9wcz1rLGguc3RhdGU9aC5fX3MsKGE9bi5fX3IpJiZhKHUpLGguX19kPSExLGguX192PXUsaC5fX1A9bCxhPWgucmVuZGVyKGgucHJvcHMsaC5zdGF0ZSxoLmNvbnRleHQpLHUuX19rPWIobnVsbCE9YSYmYS50eXBlPT15JiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEpLG51bGwhPWguZ2V0Q2hpbGRDb250ZXh0JiYoaT1zKHMoe30saSksaC5nZXRDaGlsZENvbnRleHQoKSkpLHZ8fG51bGw9PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fCh3PWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocCxtKSksXyhsLHUsdCxpLG8scixmLGUsYyksaC5iYXNlPXUuX19lLGguX19oLmxlbmd0aCYmZi5wdXNoKGgpLGcmJihoLl9fRT1oLl9fPW51bGwpLGguX19lPW51bGx9ZWxzZSB1Ll9fZT1qKHQuX19lLHUsdCxpLG8scixmLGMpOyhhPW4uZGlmZmVkKSYmYSh1KX1jYXRjaChsKXtuLl9fZShsLHUsdCl9cmV0dXJuIHUuX19lfWZ1bmN0aW9uICQobCx1KXtuLl9fYyYmbi5fX2ModSxsKSxsLnNvbWUoZnVuY3Rpb24odSl7dHJ5e2w9dS5fX2gsdS5fX2g9W10sbC5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKGwpe24uX19lKGwsdS5fX3YpfX0pfWZ1bmN0aW9uIGoobixsLHUsdCxpLG8scixjKXt2YXIgcyxhLGgsdixwLHk9dS5wcm9wcyxkPWwucHJvcHM7aWYoaT1cInN2Z1wiPT09bC50eXBlfHxpLG51bGw9PW4mJm51bGwhPW8pZm9yKHM9MDtzPG8ubGVuZ3RoO3MrKylpZihudWxsIT0oYT1vW3NdKSYmKG51bGw9PT1sLnR5cGU/Mz09PWEubm9kZVR5cGU6YS5sb2NhbE5hbWU9PT1sLnR5cGUpKXtuPWEsb1tzXT1udWxsO2JyZWFrfWlmKG51bGw9PW4pe2lmKG51bGw9PT1sLnR5cGUpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpO249aT9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLGwudHlwZSk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChsLnR5cGUpLG89bnVsbH1pZihudWxsPT09bC50eXBlKW51bGwhPW8mJihvW28uaW5kZXhPZihuKV09bnVsbCkseSE9PWQmJm4uZGF0YSE9ZCYmKG4uZGF0YT1kKTtlbHNlIGlmKGwhPT11KXtpZihudWxsIT1vJiYobz1lLnNsaWNlLmNhbGwobi5jaGlsZE5vZGVzKSksaD0oeT11LnByb3BzfHxmKS5kYW5nZXJvdXNseVNldElubmVySFRNTCx2PWQuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKHk9PT1mKWZvcih5PXt9LHA9MDtwPG4uYXR0cmlidXRlcy5sZW5ndGg7cCsrKXlbbi5hdHRyaWJ1dGVzW3BdLm5hbWVdPW4uYXR0cmlidXRlc1twXS52YWx1ZTsodnx8aCkmJih2JiZoJiZ2Ll9faHRtbD09aC5fX2h0bWx8fChuLmlubmVySFRNTD12JiZ2Ll9faHRtbHx8XCJcIikpfXgobixkLHksaSxjKSxsLl9faz1sLnByb3BzLmNoaWxkcmVuLHZ8fF8obixsLHUsdCxcImZvcmVpZ25PYmplY3RcIiE9PWwudHlwZSYmaSxvLHIsZixjKSxjfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09ZC52YWx1ZSYmZC52YWx1ZSE9PW4udmFsdWUmJihuLnZhbHVlPW51bGw9PWQudmFsdWU/XCJcIjpkLnZhbHVlKSxcImNoZWNrZWRcImluIGQmJnZvaWQgMCE9PWQuY2hlY2tlZCYmZC5jaGVja2VkIT09bi5jaGVja2VkJiYobi5jaGVja2VkPWQuY2hlY2tlZCkpfXJldHVybiBufWZ1bmN0aW9uIHoobCx1LHQpe3RyeXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsP2wodSk6bC5jdXJyZW50PXV9Y2F0Y2gobCl7bi5fX2UobCx0KX19ZnVuY3Rpb24gQShsLHUsdCl7dmFyIGksbyxyO2lmKG4udW5tb3VudCYmbi51bm1vdW50KGwpLChpPWwucmVmKSYmKGkuY3VycmVudCYmaS5jdXJyZW50IT09bC5fX2V8fHooaSxudWxsLHUpKSx0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGV8fCh0PW51bGwhPShvPWwuX19lKSksbC5fX2U9bC5fX2Q9bnVsbCxudWxsIT0oaT1sLl9fYykpe2lmKGkuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2kuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChsKXtuLl9fZShsLHUpfWkuYmFzZT1pLl9fUD1udWxsfWlmKGk9bC5fX2spZm9yKHI9MDtyPGkubGVuZ3RoO3IrKylpW3JdJiZBKGlbcl0sdSx0KTtudWxsIT1vJiZhKG8pfWZ1bmN0aW9uIEQobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gRShsLHUsdCl7dmFyIGkscixjO24uX18mJm4uX18obCx1KSxyPShpPXQ9PT1vKT9udWxsOnQmJnQuX19rfHx1Ll9fayxsPWgoeSxudWxsLFtsXSksYz1bXSxUKHUsKGk/dTp0fHx1KS5fX2s9bCxyfHxmLGYsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsdCYmIWk/W3RdOnI/bnVsbDplLnNsaWNlLmNhbGwodS5jaGlsZE5vZGVzKSxjLHR8fGYsaSksJChjLGwpfWZ1bmN0aW9uIEgobixsKXtFKG4sbCxvKX1mdW5jdGlvbiBJKG4sbCl7cmV0dXJuIGw9cyhzKHt9LG4ucHJvcHMpLGwpLGFyZ3VtZW50cy5sZW5ndGg+MiYmKGwuY2hpbGRyZW49ZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKSksdihuLnR5cGUsbCxsLmtleXx8bi5rZXksbC5yZWZ8fG4ucmVmKX1mdW5jdGlvbiBMKG4pe3ZhciBsPXt9LHU9e19fYzpcIl9fY0NcIityKyssX186bixDb25zdW1lcjpmdW5jdGlvbihuLGwpe3JldHVybiBuLmNoaWxkcmVuKGwpfSxQcm92aWRlcjpmdW5jdGlvbihuKXt2YXIgdCxpPXRoaXM7cmV0dXJuIHRoaXMuZ2V0Q2hpbGRDb250ZXh0fHwodD1bXSx0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBsW3UuX19jXT1pLGx9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKGwpe24udmFsdWUhPT1sLnZhbHVlJiZ0LnNvbWUoZnVuY3Rpb24obil7bi5jb250ZXh0PWwudmFsdWUsZyhuKX0pfSx0aGlzLnN1Yj1mdW5jdGlvbihuKXt0LnB1c2gobik7dmFyIGw9bi5jb21wb25lbnRXaWxsVW5tb3VudDtuLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dC5zcGxpY2UodC5pbmRleE9mKG4pLDEpLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuQ29uc3VtZXIuY29udGV4dFR5cGU9dSx1fW49e19fZTpmdW5jdGlvbihuLGwpe2Zvcih2YXIgdSx0O2w9bC5fXzspaWYoKHU9bC5fX2MpJiYhdS5fXyl0cnl7aWYodS5jb25zdHJ1Y3RvciYmbnVsbCE9dS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJih0PSEwLHUuc2V0U3RhdGUodS5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpKSxudWxsIT11LmNvbXBvbmVudERpZENhdGNoJiYodD0hMCx1LmNvbXBvbmVudERpZENhdGNoKG4pKSx0KXJldHVybiBnKHUuX19FPXUpfWNhdGNoKGwpe249bH10aHJvdyBufX0sbD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmdm9pZCAwPT09bi5jb25zdHJ1Y3Rvcn0sZC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PXRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1zKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4odSx0aGlzLnByb3BzKSksbiYmcyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYodGhpcy5fX2U9ITEsbCYmdGhpcy5fX2gucHVzaChsKSxnKHRoaXMpKX0sZC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLGcodGhpcykpfSxkLnByb3RvdHlwZS5yZW5kZXI9eSx1PVtdLHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsbz1mLHI9MDtleHBvcnR7RSBhcyByZW5kZXIsSCBhcyBoeWRyYXRlLGggYXMgY3JlYXRlRWxlbWVudCxoLHkgYXMgRnJhZ21lbnQscCBhcyBjcmVhdGVSZWYsbCBhcyBpc1ZhbGlkRWxlbWVudCxkIGFzIENvbXBvbmVudCxJIGFzIGNsb25lRWxlbWVudCxMIGFzIGNyZWF0ZUNvbnRleHQsYiBhcyB0b0NoaWxkQXJyYXksQSBhcyBfdW5tb3VudCxuIGFzIG9wdGlvbnN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlYWN0Lm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQsdSxyLGk9W10sbz1uLl9fcixmPW4uZGlmZmVkLGM9bi5fX2MsZT1uLnVubW91bnQ7ZnVuY3Rpb24gYSh0KXtuLl9faCYmbi5fX2godSk7dmFyIHI9dS5fX0h8fCh1Ll9fSD17dDpbXSx1OltdfSk7cmV0dXJuIHQ+PXIudC5sZW5ndGgmJnIudC5wdXNoKHt9KSxyLnRbdF19ZnVuY3Rpb24gdihuKXtyZXR1cm4gbShFLG4pfWZ1bmN0aW9uIG0obixyLGkpe3ZhciBvPWEodCsrKTtyZXR1cm4gby5fX2N8fChvLl9fYz11LG8uaT1baT9pKHIpOkUodm9pZCAwLHIpLGZ1bmN0aW9uKHQpe3ZhciB1PW4oby5pWzBdLHQpO28uaVswXSE9PXUmJihvLmlbMF09dSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0pLG8uaX1mdW5jdGlvbiBwKG4scil7dmFyIGk9YSh0KyspO3goaS5vLHIpJiYoaS5pPW4saS5vPXIsdS5fX0gudS5wdXNoKGkpKX1mdW5jdGlvbiBsKG4scil7dmFyIGk9YSh0KyspO3goaS5vLHIpJiYoaS5pPW4saS5vPXIsdS5fX2gucHVzaChpKSl9ZnVuY3Rpb24gZChuKXtyZXR1cm4geShmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om59fSxbXSl9ZnVuY3Rpb24gcyhuLHQsdSl7bChmdW5jdGlvbigpe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0KCkpOm4mJihuLmN1cnJlbnQ9dCgpKX0sbnVsbD09dT91OnUuY29uY2F0KG4pKX1mdW5jdGlvbiB5KG4sdSl7dmFyIHI9YSh0KyspO3JldHVybiB4KHIubyx1KT8oci5vPXUsci52PW4sci5pPW4oKSk6ci5pfWZ1bmN0aW9uIFQobix0KXtyZXR1cm4geShmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiB3KG4pe3ZhciByPXUuY29udGV4dFtuLl9fY107aWYoIXIpcmV0dXJuIG4uX187dmFyIGk9YSh0KyspO3JldHVybiBudWxsPT1pLmkmJihpLmk9ITAsci5zdWIodSkpLHIucHJvcHMudmFsdWV9ZnVuY3Rpb24gQSh0LHUpe24udXNlRGVidWdWYWx1ZSYmbi51c2VEZWJ1Z1ZhbHVlKHU/dSh0KTp0KX1mdW5jdGlvbiBGKG4pe3ZhciByPWEodCsrKSxpPXYoKTtyZXR1cm4gci5pPW4sdS5jb21wb25lbnREaWRDYXRjaHx8KHUuY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24obil7ci5pJiZyLmkobiksaVsxXShuKX0pLFtpWzBdLGZ1bmN0aW9uKCl7aVsxXSh2b2lkIDApfV19ZnVuY3Rpb24gXygpe2kuc29tZShmdW5jdGlvbihuKXtuLl9fUCYmKG4uX19ILnUuZm9yRWFjaChnKSxuLl9fSC51LmZvckVhY2gocSksbi5fX0gudT1bXSl9KSxpPVtdfWZ1bmN0aW9uIGcobil7bi5tJiZuLm0oKX1mdW5jdGlvbiBxKG4pe3ZhciB0PW4uaSgpO1wiZnVuY3Rpb25cIj09dHlwZW9mIHQmJihuLm09dCl9ZnVuY3Rpb24geChuLHQpe3JldHVybiFufHx0LnNvbWUoZnVuY3Rpb24odCx1KXtyZXR1cm4gdCE9PW5bdV19KX1mdW5jdGlvbiBFKG4sdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90KG4pOnR9bi5fX3I9ZnVuY3Rpb24obil7byYmbyhuKSx0PTAsKHU9bi5fX2MpLl9fSCYmKHUuX19ILnUuZm9yRWFjaChnKSx1Ll9fSC51LmZvckVhY2gocSksdS5fX0gudT1bXSl9LG4uZGlmZmVkPWZ1bmN0aW9uKHQpe2YmJmYodCk7dmFyIHU9dC5fX2M7aWYodSl7dmFyIG89dS5fX0g7byYmby51Lmxlbmd0aCYmKDEhPT1pLnB1c2godSkmJnI9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChyPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24obil7dmFyIHQsdT1mdW5jdGlvbigpe2NsZWFyVGltZW91dChyKSxjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSxyPXNldFRpbWVvdXQodSwxMDApO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9KShfKSl9fSxuLl9fYz1mdW5jdGlvbihuLHQpe3Quc29tZShmdW5jdGlvbihuKXtuLl9faC5mb3JFYWNoKGcpLG4uX19oPW4uX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5pfHxxKG4pfSl9KSxjJiZjKG4sdCl9LG4udW5tb3VudD1mdW5jdGlvbihuKXtlJiZlKG4pO3ZhciB0PW4uX19jO2lmKHQpe3ZhciB1PXQuX19IO3UmJnUudC5mb3JFYWNoKGZ1bmN0aW9uKG4pe3JldHVybiBuLm0mJm4ubSgpfSl9fTtleHBvcnR7diBhcyB1c2VTdGF0ZSxtIGFzIHVzZVJlZHVjZXIscCBhcyB1c2VFZmZlY3QsbCBhcyB1c2VMYXlvdXRFZmZlY3QsZCBhcyB1c2VSZWYscyBhcyB1c2VJbXBlcmF0aXZlSGFuZGxlLHkgYXMgdXNlTWVtbyxUIGFzIHVzZUNhbGxiYWNrLHcgYXMgdXNlQ29udGV4dCxBIGFzIHVzZURlYnVnVmFsdWUsRiBhcyB1c2VFcnJvckJvdW5kYXJ5fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvb2tzLm1vZHVsZS5qcy5tYXBcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjaGVja2VkLCBvblRvZ2dsZSwgbmFtZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0fSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCByZXF1aXJlZCA9IHRoaXMucHJvcHMucmVxdWlyZWQgfHwgZmFsc2VcclxuICAgICAgICBjb25zdCBvcHRPdXQgPSB0aGlzLnByb3BzLm9wdE91dCB8fCBmYWxzZVxyXG4gICAgICAgIGNvbnN0IHB1cnBvc2VzID0gdGhpcy5wcm9wcy5wdXJwb3NlcyB8fCBbXVxyXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgb25Ub2dnbGUoZS50YXJnZXQuY2hlY2tlZClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSBgYXBwLWl0ZW0tJHtuYW1lfWBcclxuICAgICAgICBjb25zdCBwdXJwb3Nlc1RleHQgPSBwdXJwb3Nlcy5tYXAoKHB1cnBvc2UpID0+IHQoWydwdXJwb3NlcycsIHB1cnBvc2VdKSkuam9pbihcIiwgXCIpXHJcbiAgICAgICAgY29uc3Qgb3B0T3V0VGV4dCA9IG9wdE91dCA/IDxzcGFuIGNsYXNzTmFtZT1cImNtLW9wdC1vdXRcIiB0aXRsZT17dChbJ2FwcCcsICdvcHRPdXQnLCAnZGVzY3JpcHRpb24nXSl9Pnt0KFsnYXBwJywgJ29wdE91dCcsICd0aXRsZSddKX08L3NwYW4+IDogJydcclxuICAgICAgICBjb25zdCByZXF1aXJlZFRleHQgPSByZXF1aXJlZCA/IDxzcGFuIGNsYXNzTmFtZT1cImNtLXJlcXVpcmVkXCIgdGl0bGU9e3QoWydhcHAnLCAncmVxdWlyZWQnLCAnZGVzY3JpcHRpb24nXSl9Pnt0KFsnYXBwJywgJ3JlcXVpcmVkJywgJ3RpdGxlJ10pfTwvc3Bhbj4gOiAnJ1xyXG5cclxuICAgICAgICBsZXQgcHVycG9zZXNDb250ZW50XHJcbiAgICAgICAgaWYgKHB1cnBvc2VzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHB1cnBvc2VzQ29udGVudCA9IDxwIGNsYXNzTmFtZT1cInB1cnBvc2VzXCI+e3QoWydhcHAnLCBwdXJwb3Nlcy5sZW5ndGggPiAxID8gJ3B1cnBvc2VzJyA6ICdwdXJwb3NlJ10pfToge3B1cnBvc2VzVGV4dH08L3A+XHJcblxyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9e2lkfSBjbGFzc05hbWU9e1wiY20tYXBwLWlucHV0XCIrKHJlcXVpcmVkID8gXCIgcmVxdWlyZWRcIiA6IFwiXCIpfSBhcmlhLWRlc2NyaWJlZGJ5PXtgJHtpZH0tZGVzY3JpcHRpb25gfSBkaXNhYmxlZD17cmVxdWlyZWR9IGNoZWNrZWQ9e2NoZWNrZWQgfHwgcmVxdWlyZWR9IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfSBjbGFzc05hbWU9XCJjbS1hcHAtbGFiZWxcIiB7Li4uKHJlcXVpcmVkID8ge3RhYkluZGV4OiBcIjBcIn0gOiB7fSl9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY20tYXBwLXRpdGxlXCI+e3RpdGxlfTwvc3Bhbj57cmVxdWlyZWRUZXh0fXtvcHRPdXRUZXh0fVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXIgcm91bmQgYWN0aXZlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e2Ake2lkfS1kZXNjcmlwdGlvbmB9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY20tYXBwLWRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9uIHx8IHQoW25hbWUsICdkZXNjcmlwdGlvbiddKX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb25zZW50Tm90aWNlIGZyb20gJy4vY29uc2VudC1ub3RpY2UnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93OiBwcm9wcy5zaG93ID4gMCB8fCAhcHJvcHMubWFuYWdlci5jb25maXJtZWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcyl7XHJcbiAgICAgICAgLy8gcHJvcHMuc2hvdyBpcyBhIG51bWJlciB0aGF0IGlzIGluY3JlbWVudGVkIChzbyB0aGF0IHdlIGNhbiBkZXRlY3RcclxuICAgICAgICAvLyByZXBlYXRlZCBjYWxscyB0byB0aGUgXCJzaG93XCIgZnVuY3Rpb24pXHJcbiAgICAgICAgaWYgKHByZXZQcm9wcy5zaG93ID09PSB0aGlzLnByb3BzLnNob3cpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIGNvbnN0IHNob3dTdGF0ZSA9IHRoaXMucHJvcHMuc2hvdyA+IDAgfHwgIXRoaXMucHJvcHMubWFuYWdlci5jb25maXJtZWRcclxuICAgICAgICBpZiAoc2hvd1N0YXRlICE9PSB0aGlzLnN0YXRlLnNob3cpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6IHNob3dTdGF0ZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtjb25maWcsIHQsIG1hbmFnZXIsIHN0eWxlUHJlZml4fSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7c2hvd30gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6IGZhbHNlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlUHJlZml4fT5cclxuICAgICAgICAgICAgICAgIDxDb25zZW50Tm90aWNlIHQ9e3R9IHNob3c9e3Nob3d9IGhpZGU9e2hpZGV9IGNvbmZpZz17Y29uZmlnfSBtYW5hZ2VyPXttYW5hZ2VyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwSXRlbSBmcm9tICcuL2FwcC1pdGVtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHByb3BzLm1hbmFnZXIud2F0Y2godGhpcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBjb25zZW50cyA6IHByb3BzLm1hbmFnZXIuY29uc2VudHNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICB0aGlzLnByb3BzLm1hbmFnZXIudW53YXRjaCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShvYmosIHR5cGUsIGRhdGEpe1xyXG4gICAgICAgIGlmIChvYmogPT09IHRoaXMucHJvcHMubWFuYWdlciAmJiB0eXBlID09PSAnY29uc2VudHMnKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25zZW50cyA6IGRhdGF9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjb25maWcsIHQsIG1hbmFnZXJ9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHtjb25zZW50c30gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgY29uc3Qge2FwcHN9ID0gY29uZmlnXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZSA9IChhcHBzLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBhcHBzLm1hcCgoYXBwKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgICghYXBwLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlci51cGRhdGVDb25zZW50KGFwcC5uYW1lLCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUFsbCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICB0b2dnbGUoYXBwcywgdmFsdWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhcHBJdGVtcyA9IGFwcHMubWFwKChhcHApID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9nZ2xlQXBwID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGUoW2FwcF0sIHZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBjb25zZW50c1thcHAubmFtZV1cclxuICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e2FwcC5uYW1lfSBjbGFzc05hbWU9XCJjbS1hcHBcIj5cclxuICAgICAgICAgICAgICAgIDxBcHBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZCB8fCBhcHAucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RvZ2dsZUFwcH1cclxuICAgICAgICAgICAgICAgICAgICB0PXt0fVxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5hcHB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsYWJsZUFwcHMgPSBhcHBzLmZpbHRlcihhcHAgPT4gIWFwcC5yZXF1aXJlZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbERpc2FibGVkID0gdG9nZ2xhYmxlQXBwcy5maWx0ZXIoXHJcbiAgICAgICAgICAgIGFwcCA9PiBjb25zZW50c1thcHAubmFtZV1cclxuICAgICAgICApLmxlbmd0aCA9PT0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJjbS1hcHBzXCI+XHJcbiAgICAgICAgICAgIHthcHBJdGVtc31cclxuICAgICAgICAgICAge3RvZ2dsYWJsZUFwcHMubGVuZ3RoID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY20tYXBwIGNtLXRvZ2dsZS1hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzYWJsZUFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0KFsnYXBwJywnZGlzYWJsZUFsbCcsJ3RpdGxlJ10pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dChbJ2FwcCcsICdkaXNhYmxlQWxsJywgJ2Rlc2NyaXB0aW9uJ10pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXshYWxsRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXt0b2dnbGVBbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Nsb3NlfSBmcm9tICcuL2ljb25zJ1xyXG5pbXBvcnQgQXBwcyBmcm9tICcuL2FwcHMnXHJcbmltcG9ydCB7bGFuZ3VhZ2V9IGZyb20gJ3V0aWxzL2kxOG4nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZW50TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICBjb25zdCB7bWFuYWdlcn0gPSBwcm9wc1xyXG4gICAgICAgIG1hbmFnZXIucmVzdG9yZVNhdmVkQ29uc2VudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtoaWRlLCBjb25maXJtaW5nLCBzYXZlQW5kSGlkZSwgYWNjZXB0QW5kSGlkZSwgZGVjbGluZUFuZEhpZGUsIGNvbmZpZywgbWFuYWdlciwgdH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgbGFuZyA9IGNvbmZpZy5sYW5nIHx8IGxhbmd1YWdlKClcclxuXHJcbiAgICAgICAgbGV0IGNsb3NlTGlua1xyXG4gICAgICAgIGlmICghY29uZmlnLm11c3RDb25zZW50KSB7XHJcbiAgICAgICAgICAgIGNsb3NlTGluayA9IDxidXR0b25cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0KFsnY2xvc2UnXSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGlkZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlIHQ9e3R9IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGVjbGluZUJ1dHRvblxyXG5cclxuICAgICAgICBpZiAoIWNvbmZpZy5oaWRlRGVjbGluZUFsbCAmJiAhIG1hbmFnZXIuY29uZmlybWVkKVxyXG4gICAgICAgICAgICBkZWNsaW5lQnV0dG9uID0gPGJ1dHRvbiBkaXNhYmxlZD17Y29uZmlybWluZ30gY2xhc3NOYW1lPVwiY20tYnRuIGNtLWJ0bi1kZWNsaW5lIGNtLWJ0bi1yaWdodCBjbS1idG4tc20gY20tYnRuLWRhbmdlciBjbi1kZWNsaW5lXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2RlY2xpbmVBbmRIaWRlfT57dChbJ2RlY2xpbmUnXSl9PC9idXR0b24+XHJcbiAgICAgICAgbGV0IGFjY2VwdEFsbEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9XHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2NvbmZpcm1pbmd9IGNsYXNzTmFtZT1cImNtLWJ0biBjbS1idG4tc3VjY2VzcyBjbS1idG4taW5mbyBjbS1idG4tYWNjZXB0XCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3NhdmVBbmRIaWRlfT57dChbbWFuYWdlci5jb25maXJtZWQgPyAnc2F2ZScgOiAnYWNjZXB0U2VsZWN0ZWQnXSl9PC9idXR0b24+XHJcbiAgICAgICAgaWYgKGNvbmZpZy5hY2NlcHRBbGwgJiYgIW1hbmFnZXIuY29uZmlybWVkKSB7XHJcbiAgICAgICAgICAgIGFjY2VwdEFsbEJ1dHRvbiA9IDxidXR0b24gZGlzYWJsZWQ9e2NvbmZpcm1pbmd9IGNsYXNzTmFtZT1cImNtLWJ0biBjbS1idG4tc3VjY2VzcyBjbS1idG4tYWNjZXB0LWFsbFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXthY2NlcHRBbmRIaWRlfT57dChbJ2FjY2VwdEFsbCddKX08L2J1dHRvbj5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBwVXJsID0gKGNvbmZpZy5wcml2YWN5UG9saWN5ICYmIGNvbmZpZy5wcml2YWN5UG9saWN5W2xhbmddKSB8fFxyXG4gICAgICAgICAgICBjb25maWcucHJpdmFjeVBvbGljeS5kZWZhdWx0IHx8XHJcbiAgICAgICAgICAgIGNvbmZpZy5wcml2YWN5UG9saWN5XHJcblxyXG4gICAgICAgIGNvbnN0IHBwTGluayA9IDxhIG9uQ2xpY2s9e2hpZGV9IGhyZWY9e3BwVXJsfT57dChbJ2NvbnNlbnRNb2RhbCcsJ3ByaXZhY3lQb2xpY3knLCduYW1lJ10pfTwvYT5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb29raWUtbW9kYWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1iZ1wiIG9uQ2xpY2s9e2hpZGV9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1tb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2xvc2VMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KFsnY29uc2VudE1vZGFsJywgJ3RpdGxlJ10pfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0KFsnY29uc2VudE1vZGFsJywnZGVzY3JpcHRpb24nXSl9ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwcHMgdD17dH0gY29uZmlnPXtjb25maWd9IG1hbmFnZXI9e21hbmFnZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY20tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1mb290ZXItYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2FjY2VwdEFsbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjbS1wb3dlcmVkLWJ5XCI+e3QoWydjb25zZW50TW9kYWwnLCdwcml2YWN5UG9saWN5JywndGV4dCddLCB7cHJpdmFjeVBvbGljeSA6IHBwTGlua30pfSB8IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2NvbmZpZy5wb3dlcmVkQnkgfHwgJ2h0dHBzOi8va2xhcm8ua2lwcm90ZWN0LmNvbSd9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj57dChbJ3Bvd2VyZWRCeSddKX08L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnNlbnRNb2RhbCBmcm9tICcuL2NvbnNlbnQtbW9kYWwnXHJcbmltcG9ydCB7Z2V0UHVycG9zZXN9IGZyb20gJ3V0aWxzL2NvbmZpZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNlbnROb3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtb2RhbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1pbmc6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGVCdXR0b25DbGlja2VkID0gKHNldENoYW5nZWRBbGwsIGNoYW5nZWRBbGxWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHttb2RhbH0gPSB0aGlzLnN0YXRlXHJcbiAgICAgICAgaWYgKHNldENoYW5nZWRBbGwpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWFuYWdlci5jaGFuZ2VBbGwoY2hhbmdlZEFsbFZhbHVlKVxyXG4gICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHRoaXMucHJvcHMubWFuYWdlci5jb25maXJtZWRcclxuICAgICAgICBjb25zdCBzYXZlQW5kSGlkZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29uZmlybWluZzogZmFsc2V9KVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1hbmFnZXIuc2F2ZUFuZEFwcGx5Q29uc2VudHMoKVxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpZGUoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0Q2hhbmdlZEFsbCAmJiAhY29uZmlybWVkICYmIChtb2RhbCB8fCB0aGlzLnByb3BzLmNvbmZpZy5tdXN0Q29uc2VudCkpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25maXJtaW5nOiB0cnVlfSlcclxuICAgICAgICAgICAgc2V0VGltZW91dChzYXZlQW5kSGlkZSwgMTAwMClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzYXZlQW5kSGlkZSgpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFuZEhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlQnV0dG9uQ2xpY2tlZChmYWxzZSwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgYWNjZXB0QW5kSGlkZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVCdXR0b25DbGlja2VkKHRydWUsIHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGluZUFuZEhpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5leGVjdXRlQnV0dG9uQ2xpY2tlZCh0cnVlLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y29uZmlnLCBzaG93LCBtYW5hZ2VyLCB0LCBoaWRlfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IG1vZGFsLCBjb25maXJtaW5nIH0gPSB0aGlzLnN0YXRlXHJcblxyXG4gICAgICAgIGNvbnN0IHB1cnBvc2VzID0gZ2V0UHVycG9zZXMoY29uZmlnKVxyXG4gICAgICAgIGNvbnN0IHB1cnBvc2VzVGV4dCA9IHB1cnBvc2VzLm1hcCgocHVycG9zZSkgPT4gdChbJ3B1cnBvc2VzJywgcHVycG9zZV0pKS5qb2luKFwiLCBcIilcclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZXNUZXh0XHJcblxyXG4gICAgICAgIGNvbnN0IHNob3dNb2RhbCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttb2RhbDogdHJ1ZX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYW5hZ2VyLmNvbmZpcm1lZClcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZSgpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWFuYWdlci5jaGFuZ2VkKVxyXG4gICAgICAgICAgICBjaGFuZ2VzVGV4dCA9IDxwIGNsYXNzTmFtZT1cImNuLWNoYW5nZXNcIj57dChbJ2NvbnNlbnROb3RpY2UnLCAnY2hhbmdlRGVzY3JpcHRpb24nXSl9PC9wPlxyXG5cclxuICAgICAgICBpZiAoIXNob3cpXHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IC8+XHJcblxyXG4gICAgICAgIGNvbnN0IGRlY2xpbmVCdXR0b24gPSBjb25maWcuaGlkZURlY2xpbmVBbGwgP1xyXG4gICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY20tYnRuIGNtLWJ0bi1zbSBjbS1idG4tZGFuZ2VyIGNuLWRlY2xpbmVcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5kZWNsaW5lQW5kSGlkZX0+e3QoWydkZWNsaW5lJ10pfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICBjb25zdCBhY2NlcHRCdXR0b24gPSBjb25maWcuYWNjZXB0QWxsID9cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbS1idG4gY20tYnRuLXNtIGNtLWJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYWNjZXB0QW5kSGlkZX0+e3QoWydhY2NlcHRBbGwnXSl9PC9idXR0b24+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbS1idG4gY20tYnRuLXNtIGNtLWJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2F2ZUFuZEhpZGV9Pnt0KFsnb2snXSl9PC9idXR0b24+XHJcblxyXG4gICAgICAgIGNvbnN0IG5vdGljZUlzVmlzaWJsZSA9XHJcbiAgICAgICAgICAgICFjb25maWcubXVzdENvbnNlbnQgJiYgIW1hbmFnZXIuY29uZmlybWVkICYmICFjb25maWcubm9Ob3RpY2VcclxuXHJcbiAgICAgICAgaWYgKG1vZGFsIHx8IG1hbmFnZXIuY29uZmlybWVkIHx8ICghbWFuYWdlci5jb25maXJtZWQgJiYgY29uZmlnLm11c3RDb25zZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIDxDb25zZW50TW9kYWwgdD17dH0gY29uZmlybWluZz17Y29uZmlybWluZ30gY29uZmlnPXtjb25maWd9IGhpZGU9e2hpZGVNb2RhbH0gZGVjbGluZUFuZEhpZGU9e3RoaXMuZGVjbGluZUFuZEhpZGV9IHNhdmVBbmRIaWRlPXt0aGlzLnNhdmVBbmRIaWRlfSBhY2NlcHRBbmRIaWRlPXt0aGlzLmFjY2VwdEFuZEhpZGV9IG1hbmFnZXI9e21hbmFnZXJ9IC8+XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29va2llLW1vZGFsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1iZ1wiLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvb2tpZS1ub3RpY2UgJHshbm90aWNlSXNWaXNpYmxlID8gJ2Nvb2tpZS1ub3RpY2UtaGlkZGVuJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dChbJ2NvbnNlbnROb3RpY2UnLCAndGl0bGUnXSl9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNuLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoWydjb25zZW50Tm90aWNlJywnZGVzY3JpcHRpb24nXSl9ICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIHtjaGFuZ2VzVGV4dH1cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNuLW9rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjY2VwdEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbS1saW5rIGNtLWxlYXJuLW1vcmVcIiBocmVmPVwiI1wiIG9uQ2xpY2s9e3Nob3dNb2RhbH0+e3QoWydjb25zZW50Tm90aWNlJywgJ2xlYXJuTW9yZSddKX0uLi48L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PjwvZGl2PlxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZSA9ICh7dH0pID0+IHtcclxuICAgIHJldHVybiA8c3ZnIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPXt0KFsnY2xvc2UnXSl9IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdQb3J0PVwiMCAwIDEyIDEyXCIgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgIDx0aXRsZT57dChbJ2Nsb3NlJ10pfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmUgeDE9XCIxXCIgeTE9XCIxMVwiXHJcbiAgICAgICAgICAgIHgyPVwiMTFcIiB5Mj1cIjFcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIi8+XHJcbiAgICAgICAgPGxpbmUgeDE9XCIxXCIgeTE9XCIxXCJcclxuICAgICAgICAgICAgeDI9XCIxMVwiIHkyPVwiMTFcIlxyXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIi8+XHJcbiAgICA8L3N2Zz5cclxufVxyXG4iLCJpbXBvcnQge2dldENvb2tpZXMsIGRlbGV0ZUNvb2tpZX0gZnJvbSAndXRpbHMvY29va2llcydcclxuaW1wb3J0IHN0b3JlcyBmcm9tICdzdG9yZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZW50TWFuYWdlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKXtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyAvLyB0aGUgY29uZmlndXJhdGlvblxyXG5cclxuICAgICAgICB0aGlzLnN0b3JlID0gbmV3IHN0b3Jlc1t0aGlzLnN0b3JhZ2VNZXRob2RdKHRoaXMpXHJcblxyXG4gICAgICAgIC8vIHdlIGZhbGwgYmFjayB0byB0aGUgY29va2llLWJhc2VkIHN0b3JlIGlmIHRoZSBzdG9yZSBpcyB1bmRlZmluZWRcclxuICAgICAgICBpZiAodGhpcy5zdG9yZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlID0gc3RvcmVzWydjb29raWUnXVxyXG5cclxuICAgICAgICB0aGlzLmNvbnNlbnRzID0gdGhpcy5kZWZhdWx0Q29uc2VudHMgLy8gdGhlIGNvbnNlbnQgc3RhdGVzIG9mIHRoZSBjb25maWd1cmVkIGFwcHNcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IGZhbHNlIC8vIHRydWUgaWYgdGhlIHVzZXIgYWN0aXZlbHkgY29uZmlybWVkIGhpcy9oZXIgY29uc2VudFxyXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlIC8vIHRydWUgaWYgdGhlIGFwcCBjb25maWcgY2hhbmdlZCBjb21wYXJlZCB0byB0aGUgY29va2llXHJcbiAgICAgICAgdGhpcy5zdGF0ZXMgPSB7fSAvLyBrZWVwIHRyYWNrIG9mIHRoZSBjaGFuZ2UgKGVuYWJsZWQsIGRpc2FibGVkKSBvZiBpbmRpdmlkdWFsIGFwcHNcclxuICAgICAgICB0aGlzLmV4ZWN1dGVkT25jZSA9IHt9IC8va2VlcCB0cmFjayBvZiB3aGljaCBhcHBzIGhhdmUgYmVlbiBleGVjdXRlZCBhdCBsZWFzdCBvbmNlXHJcbiAgICAgICAgdGhpcy53YXRjaGVycyA9IG5ldyBTZXQoW10pXHJcbiAgICAgICAgdGhpcy5sb2FkQ29uc2VudHMoKVxyXG4gICAgICAgIHRoaXMuYXBwbHlDb25zZW50cygpXHJcbiAgICAgICAgdGhpcy5zYXZlZENvbnNlbnRzID0gey4uLnRoaXMuY29uc2VudHN9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0b3JhZ2VNZXRob2QoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuc3RvcmFnZU1ldGhvZCB8fCAnY29va2llJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb29raWVOYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvb2tpZU5hbWUgfHwgJ2tsYXJvJ1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb29raWVEb21haW4oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29va2llRG9tYWluIHx8IHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb29raWVFeHBpcmVzQWZ0ZXJEYXlzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmNvb2tpZUV4cGlyZXNBZnRlckRheXMgfHwgMTIwXHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2god2F0Y2hlcil7XHJcbiAgICAgICAgaWYgKCF0aGlzLndhdGNoZXJzLmhhcyh3YXRjaGVyKSlcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVycy5hZGQod2F0Y2hlcilcclxuICAgIH1cclxuXHJcbiAgICB1bndhdGNoKHdhdGNoZXIpe1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXJzLmhhcyh3YXRjaGVyKSlcclxuICAgICAgICAgICAgdGhpcy53YXRjaGVycy5kZWxldGUod2F0Y2hlcilcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkobmFtZSwgZGF0YSl7XHJcbiAgICAgICAgdGhpcy53YXRjaGVycy5mb3JFYWNoKCh3YXRjaGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIudXBkYXRlKHRoaXMsIG5hbWUsIGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRBcHAobmFtZSl7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdBcHBzID0gdGhpcy5jb25maWcuYXBwcy5maWx0ZXIoYXBwPT5hcHAubmFtZSA9PT0gbmFtZSlcclxuICAgICAgICBpZiAobWF0Y2hpbmdBcHBzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGluZ0FwcHNbMF1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdENvbnNlbnQoYXBwKXtcclxuICAgICAgICBsZXQgY29uc2VudCA9IGFwcC5kZWZhdWx0XHJcbiAgICAgICAgaWYgKGNvbnNlbnQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY29uc2VudCA9IHRoaXMuY29uZmlnLmRlZmF1bHRcclxuICAgICAgICBpZiAoY29uc2VudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjb25zZW50ID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gY29uc2VudFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZWZhdWx0Q29uc2VudHMoKXtcclxuICAgICAgICBjb25zdCBjb25zZW50cyA9IHt9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLmNvbmZpZy5hcHBzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSB0aGlzLmNvbmZpZy5hcHBzW2ldXHJcbiAgICAgICAgICAgIGNvbnNlbnRzW2FwcC5uYW1lXSA9IHRoaXMuZ2V0RGVmYXVsdENvbnNlbnQoYXBwKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29uc2VudHNcclxuICAgIH1cclxuXHJcbiAgICAvL2Rvbid0IGRlY2xpbmUgcmVxdWlyZWQgYXBwc1xyXG4gICAgY2hhbmdlQWxsKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmNvbmZpZy5hcHBzLm1hcCgoYXBwKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGFwcC5yZXF1aXJlZCB8fCB0aGlzLmNvbmZpZy5yZXF1aXJlZCB8fCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb25zZW50KGFwcC5uYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb25zZW50KGFwcC5uYW1lLCBmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29uc2VudChuYW1lLCB2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5jb25zZW50c1tuYW1lXSA9IHZhbHVlXHJcbiAgICAgICAgdGhpcy5ub3RpZnkoJ2NvbnNlbnRzJywgdGhpcy5jb25zZW50cylcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlU2F2ZWRDb25zZW50cygpe1xyXG4gICAgICAgIHRoaXMuY29uc2VudHMgPSB7Li4udGhpcy5zYXZlZENvbnNlbnRzfVxyXG4gICAgICAgIHRoaXMubm90aWZ5KCdjb25zZW50cycsIHRoaXMuY29uc2VudHMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDb25zZW50KCl7XHJcbiAgICAgICAgdGhpcy5jb25zZW50cyA9IHRoaXMuZGVmYXVsdENvbnNlbnRzXHJcbiAgICAgICAgdGhpcy5jb25maXJtZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuYXBwbHlDb25zZW50cygpXHJcbiAgICAgICAgdGhpcy5zdG9yZS5kZWxldGUoKVxyXG4gICAgICAgIHRoaXMubm90aWZ5KCdjb25zZW50cycsIHRoaXMuY29uc2VudHMpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uc2VudChuYW1lKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zZW50c1tuYW1lXSB8fCBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIF9jaGVja0NvbnNlbnRzKCl7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlID0gdHJ1ZVxyXG4gICAgICAgIGNvbnN0IGFwcHMgPSBuZXcgU2V0KHRoaXMuY29uZmlnLmFwcHMubWFwKChhcHApPT57cmV0dXJuIGFwcC5uYW1lfSkpXHJcbiAgICAgICAgY29uc3QgY29uc2VudHMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKHRoaXMuY29uc2VudHMpKVxyXG4gICAgICAgIGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5jb25zZW50cykpe1xyXG4gICAgICAgICAgICBpZiAoIWFwcHMuaGFzKGtleSkpe1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29uc2VudHNba2V5XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihjb25zdCBhcHAgb2YgdGhpcy5jb25maWcuYXBwcyl7XHJcbiAgICAgICAgICAgIGlmICghY29uc2VudHMuaGFzKGFwcC5uYW1lKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnNlbnRzW2FwcC5uYW1lXSA9IHRoaXMuZ2V0RGVmYXVsdENvbnNlbnQoYXBwKVxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlybWVkID0gY29tcGxldGVcclxuICAgICAgICBpZiAoIWNvbXBsZXRlKVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENvbnNlbnRzKCl7XHJcbiAgICAgICAgY29uc3QgY29uc2VudERhdGEgPSB0aGlzLnN0b3JlLmdldCgpO1xyXG4gICAgICAgIGlmIChjb25zZW50RGF0YSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc2VudHMgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChjb25zZW50RGF0YSkpXHJcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrQ29uc2VudHMoKVxyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSgnY29uc2VudHMnLCB0aGlzLmNvbnNlbnRzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zZW50c1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVBbmRBcHBseUNvbnNlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5zYXZlQ29uc2VudHMoKVxyXG4gICAgICAgIHRoaXMuYXBwbHlDb25zZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUNvbnNlbnRzKCl7XHJcbiAgICAgICAgY29uc3QgdiA9IGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeSh0aGlzLmNvbnNlbnRzKSlcclxuICAgICAgICB0aGlzLnN0b3JlLnNldCh2KTtcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IHRydWVcclxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuc2F2ZWRDb25zZW50cyA9IHsuLi50aGlzLmNvbnNlbnRzfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5Q29uc2VudHMoKXtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuY29uZmlnLmFwcHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29uZmlnLmFwcHNbaV1cclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlc1thcHAubmFtZV1cclxuICAgICAgICAgICAgY29uc3Qgb3B0T3V0ID0gKGFwcC5vcHRPdXQgIT09IHVuZGVmaW5lZCA/IGFwcC5vcHRPdXQgOiAodGhpcy5jb25maWcub3B0T3V0IHx8IGZhbHNlKSlcclxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZWQgPSAoYXBwLnJlcXVpcmVkICE9PSB1bmRlZmluZWQgPyBhcHAucmVxdWlyZWQgOiAodGhpcy5jb25maWcucmVxdWlyZWQgfHwgZmFsc2UpKVxyXG4gICAgICAgICAgICAvL29wdCBvdXQgYW5kIHJlcXVpcmVkIGFwcHMgYXJlIGFsd2F5cyB0cmVhdGVkIGFzIGNvbmZpcm1lZFxyXG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB0aGlzLmNvbmZpcm1lZCB8fCBvcHRPdXQgfHwgcmVxdWlyZWRcclxuICAgICAgICAgICAgY29uc3QgY29uc2VudCA9IHRoaXMuZ2V0Q29uc2VudChhcHAubmFtZSkgJiYgY29uZmlybWVkXHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gY29uc2VudClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXBwRWxlbWVudHMoYXBwLCBjb25zZW50KVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFwcENvb2tpZXMoYXBwLCBjb25zZW50KVxyXG4gICAgICAgICAgICBpZiAoYXBwLmNhbGxiYWNrICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbGJhY2soY29uc2VudCwgYXBwKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlc1thcHAubmFtZV0gPSBjb25zZW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFwcEVsZW1lbnRzKGFwcCwgY29uc2VudCl7XHJcblxyXG4gICAgICAgIC8vIHdlIG1ha2Ugc3VyZSB3ZSBleGVjdXRlIHRoaXMgYXBwIG9ubHkgb25jZSBpZiB0aGUgb3B0aW9uIGlzIHNldFxyXG4gICAgICAgIGlmIChjb25zZW50KXtcclxuICAgICAgICAgICAgaWYgKGFwcC5vbmx5T25jZSAmJiB0aGlzLmV4ZWN1dGVkT25jZVthcHAubmFtZV0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlZE9uY2VbYXBwLm5hbWVdID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbmFtZT0nXCIrYXBwLm5hbWUrXCInXVwiKVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8ZWxlbWVudHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IHtkYXRhc2V0fSA9IGVsZW1lbnRcclxuICAgICAgICAgICAgY29uc3Qge3R5cGV9ID0gZGF0YXNldFxyXG4gICAgICAgICAgICBjb25zdCBhdHRycyA9IFsnaHJlZicsICdzcmMnXVxyXG5cclxuICAgICAgICAgICAgLy9pZiBubyBjb25zZW50IHdhcyBnaXZlbiB3ZSBkaXNhYmxlIHRoaXMgdHJhY2tlclxyXG4gICAgICAgICAgICAvL3dlIHJlbW92ZSBhbmQgYWRkIGl0IGFnYWluIHRvIHRyaWdnZXIgYSByZS1leGVjdXRpb25cclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdTQ1JJUFQnKXtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGNyZWF0ZSBhIG5ldyBzY3JpcHQgaW5zdGVhZCBvZiB1cGRhdGluZyB0aGUgbm9kZSBpblxyXG4gICAgICAgICAgICAgICAgLy8gcGxhY2UsIGFzIHRoZSBzY3JpcHQgd29uJ3Qgc3RhcnQgY29ycmVjdGx5IG90aGVyd2lzZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGFzZXQpKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmRhdGFzZXRba2V5XSA9IGRhdGFzZXRba2V5XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC50eXBlID0gJ3RleHQvcGxhaW4nXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmlubmVyVGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0XHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnRleHQgPSBlbGVtZW50LnRleHRcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuY2xhc3MgPSBlbGVtZW50LmNsYXNzXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0eWxlLmNzc1RleHQgPSBlbGVtZW50LnN0eWxlXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmlkID0gZWxlbWVudC5pZFxyXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5uYW1lID0gZWxlbWVudC5uYW1lXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmRlZmVyID0gZWxlbWVudC5kZWZlclxyXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5hc3luYyA9IGVsZW1lbnQuYXN5bmNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29uc2VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC50eXBlID0gdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhc2V0LnNyYyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNyYyA9IGRhdGFzZXQuc3JjXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3dlIHJlbW92ZSB0aGUgb3JpZ2luYWwgZWxlbWVudCBhbmQgaW5zZXJ0IGEgbmV3IG9uZVxyXG4gICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShuZXdFbGVtZW50LCBlbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGwgb3RoZXIgZWxlbWVudHMgKGltYWdlcyBldGMuKSBhcmUgbW9kaWZpZWQgaW4gcGxhY2UuLi5cclxuICAgICAgICAgICAgICAgIGlmIChjb25zZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgYXR0ciBvZiBhdHRycyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGRhdGFzZXRbYXR0cl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXRbJ29yaWdpbmFsJythdHRyXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldFsnb3JpZ2luYWwnK2F0dHJdID0gZWxlbWVudFthdHRyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJdID0gYXR0clZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhc2V0LnRpdGxlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudGl0bGUgPSBkYXRhc2V0LnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQub3JpZ2luYWxEaXNwbGF5ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRhdGFzZXQub3JpZ2luYWxEaXNwbGF5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhc2V0LnRpdGxlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQuaGlkZSA9PT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldC5vcmlnaW5hbERpc3BsYXkgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXQub3JpZ2luYWxEaXNwbGF5ID0gZWxlbWVudC5zdHlsZS5kaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgYXR0ciBvZiBhdHRycyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IGRhdGFzZXRbYXR0cl1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJWYWx1ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXRbJ29yaWdpbmFsJythdHRyXSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFthdHRyXSA9IGRhdGFzZXRbJ29yaWdpbmFsJythdHRyXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQXBwQ29va2llcyhhcHAsIGNvbnNlbnQpe1xyXG5cclxuICAgICAgICBpZiAoY29uc2VudClcclxuICAgICAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGVzY2FwZVJlZ2V4U3RyKHN0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1stW1xcXS97fSgpKis/LlxcXFxeJHxdL2csIFwiXFxcXCQmXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFwcC5jb29raWVzICE9PSB1bmRlZmluZWQgJiYgYXBwLmNvb2tpZXMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBnZXRDb29raWVzKClcclxuICAgICAgICAgICAgZm9yKGxldCBpPTA7aTxhcHAuY29va2llcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjb29raWVQYXR0ZXJuID0gYXBwLmNvb2tpZXNbaV1cclxuICAgICAgICAgICAgICAgIGxldCBjb29raWVQYXRoLCBjb29raWVEb21haW5cclxuICAgICAgICAgICAgICAgIGlmIChjb29raWVQYXR0ZXJuIGluc3RhbmNlb2YgQXJyYXkpe1xyXG4gICAgICAgICAgICAgICAgICAgIFtjb29raWVQYXR0ZXJuLCBjb29raWVQYXRoLCBjb29raWVEb21haW5dID0gY29va2llUGF0dGVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCEoY29va2llUGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZVBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeJytlc2NhcGVSZWdleFN0cihjb29raWVQYXR0ZXJuKSsnJCcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPGNvb2tpZXMubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29va2llID0gY29va2llc1tqXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY29va2llUGF0dGVybi5leGVjKGNvb2tpZS5uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJEZWxldGluZyBjb29raWU6XCIsIGNvb2tpZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXRjaGVkIHBhdHRlcm46XCIsIGNvb2tpZVBhdHRlcm4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBhdGg6XCIsIGNvb2tpZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvbWFpbjpcIiwgY29va2llRG9tYWluKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVDb29raWUoY29va2llLm5hbWUsIGNvb2tpZVBhdGgsIGNvb2tpZURvbWFpbilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKiBnbG9iYWxzIG1vZHVsZSwgcmVxdWlyZSwgVkVSU0lPTiAqL1xyXG5cclxuLy8gaW1wb3J0ICdzY3NzL2tsYXJvLnNjc3MnO1xyXG5cclxuLy8gV2hlbiB3ZWJwYWNrJ3MgaG90IGxvYWRpbmcgaXMgZW5hYmxlZCwgZW5hYmxlIFByZWFjdCdzIHN1cHBvcnQgZm9yIHRoZVxyXG4vLyBSZWFjdCBEZXYgVG9vbHMgYnJvd3NlciBleHRlbnNpb24uXHJcbmlmKG1vZHVsZS5ob3QpIHJlcXVpcmUoJ3ByZWFjdC9kZWJ1ZycpXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcHAgZnJvbSAnY29tcG9uZW50cy9hcHAuanMnXHJcbmltcG9ydCBDb25zZW50TWFuYWdlciBmcm9tICdjb25zZW50LW1hbmFnZXInXHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAndHJhbnNsYXRpb25zJ1xyXG5pbXBvcnQge2NvbnZlcnRUb01hcCwgdXBkYXRlfSBmcm9tICd1dGlscy9tYXBzJ1xyXG5pbXBvcnQge3QsIGxhbmd1YWdlfSBmcm9tICd1dGlscy9pMThuJ1xyXG5pbXBvcnQgY3VycmVudEV4ZWN1dGluZ1NjcmlwdCBmcm9tICdjdXJyZW50LWV4ZWN1dGluZy1zY3JpcHQnO1xyXG5cclxuY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdCB8fCBjdXJyZW50RXhlY3V0aW5nU2NyaXB0KCk7XHJcbmNvbnN0IG9yaWdpbmFsT25Mb2FkID0gd2luZG93Lm9ubG9hZFxyXG5jb25zdCBjb252ZXJ0ZWRUcmFuc2xhdGlvbnMgPSBjb252ZXJ0VG9NYXAodHJhbnNsYXRpb25zKVxyXG5jb25zdCBjb25maWdOYW1lID0gc2NyaXB0LmRhdGFzZXQuY29uZmlnIHx8IFwia2xhcm9Db25maWdcIlxyXG5jb25zdCBub0F1dG9Mb2FkID0gc2NyaXB0LmRhdGFzZXQubm9BdXRvTG9hZCA9PT0gXCJ0cnVlXCJcclxuY29uc3Qgc3R5bGVQcmVmaXggPSBzY3JpcHQuZGF0YXNldC5zdHlsZVByZWZpeCB8fCBcImtsYXJvXCJcclxuY29uc3QgY29uZmlnID0gd2luZG93W2NvbmZpZ05hbWVdXHJcbmNvbnN0IG1hbmFnZXJzID0ge31cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBpbml0aWFsaXplXHJcblxyXG5pZiAobW9kdWxlLmhvdCkge1xyXG4gICAgaWYgKCFub0F1dG9Mb2FkKVxyXG4gICAgICAgIHJlbmRlcktsYXJvKGNvbmZpZylcclxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudElEKGNvbmZpZyl7XHJcbiAgICByZXR1cm4gY29uZmlnLmVsZW1lbnRJRCB8fCAna2xhcm8nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnQoY29uZmlnKXtcclxuICAgIGNvbnN0IGlkID0gZ2V0RWxlbWVudElEKGNvbmZpZylcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCl7XHJcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGlkXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb25zKGNvbmZpZyl7XHJcbiAgICBjb25zdCB0cmFucyA9IG5ldyBNYXAoW10pXHJcbiAgICB1cGRhdGUodHJhbnMsIGNvbnZlcnRlZFRyYW5zbGF0aW9ucylcclxuICAgIHVwZGF0ZSh0cmFucywgY29udmVydFRvTWFwKGNvbmZpZy50cmFuc2xhdGlvbnMgfHwge30pKVxyXG4gICAgcmV0dXJuIHRyYW5zXHJcbn1cclxuXHJcbmxldCBjbnQgPSAxXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyS2xhcm8oY29uZmlnLCBzaG93KXtcclxuICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm5cclxuICAgIC8vIHdlIGFyZSB1c2luZyBhIGNvdW50IGhlcmUgc28gdGhhdCB3ZSdyZSBhYmxlIHRvIHJlcGVhdGVkbHkgb3BlbiB0aGUgbW9kYWwuLi5cclxuICAgIGxldCBzaG93Q250ID0gMFxyXG4gICAgaWYgKHNob3cpXHJcbiAgICAgICAgc2hvd0NudCA9IGNudCsrXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudChjb25maWcpXHJcbiAgICBjb25zdCB0cmFucyA9IGdldFRyYW5zbGF0aW9ucyhjb25maWcpXHJcbiAgICBjb25zdCBtYW5hZ2VyID0gZ2V0TWFuYWdlcihjb25maWcpXHJcbiAgICBjb25zdCBsYW5nID0gY29uZmlnLmxhbmcgfHwgbGFuZ3VhZ2UoKVxyXG4gICAgY29uc3QgdHQgPSAoLi4uYXJncykgPT4ge3JldHVybiB0KHRyYW5zLCBsYW5nLCAuLi5hcmdzKX1cclxuICAgIGNvbnN0IGFwcCA9IHJlbmRlcig8QXBwIHQ9e3R0fVxyXG4gICAgICAgIHN0eWxlUHJlZml4PXtzdHlsZVByZWZpeH1cclxuICAgICAgICBtYW5hZ2VyPXttYW5hZ2VyfVxyXG4gICAgICAgIGNvbmZpZz17Y29uZmlnfVxyXG4gICAgICAgIHNob3c9e3Nob3dDbnR9IC8+LCBlbGVtZW50KVxyXG4gICAgcmV0dXJuIGFwcFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShlKXtcclxuICAgIGlmICghbm9BdXRvTG9hZClcclxuICAgICAgICByZW5kZXJLbGFybyhjb25maWcpXHJcbiAgICBpZiAob3JpZ2luYWxPbkxvYWQgIT09IG51bGwpe1xyXG4gICAgICAgIG9yaWdpbmFsT25Mb2FkKGUpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYW5hZ2VyKGNvbmYpe1xyXG4gICAgY29uZiA9IGNvbmYgfHwgY29uZmlnXHJcbiAgICBjb25zdCBuYW1lID0gZ2V0RWxlbWVudElEKGNvbmYpXHJcbiAgICBpZiAobWFuYWdlcnNbbmFtZV0gPT09IHVuZGVmaW5lZClcclxuICAgICAgICBtYW5hZ2Vyc1tuYW1lXSA9IG5ldyBDb25zZW50TWFuYWdlcihjb25mKVxyXG4gICAgcmV0dXJuIG1hbmFnZXJzW25hbWVdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93KGNvbmYpe1xyXG4gICAgY29uZiA9IGNvbmYgfHwgY29uZmlnXHJcbiAgICByZW5kZXJLbGFybyhjb25mLCB0cnVlKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJzaW9uKCl7XHJcbiAgICByZXR1cm4gVkVSU0lPTlxyXG59XHJcblxyXG5leHBvcnQge2xhbmd1YWdlfVxyXG4iLCJpbXBvcnQge2dldENvb2tpZSwgc2V0Q29va2llLCBkZWxldGVDb29raWV9IGZyb20gJ3V0aWxzL2Nvb2tpZXMnXHJcblxyXG5leHBvcnQgY2xhc3MgQ29va2llU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IobWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMuY29va2llTmFtZSA9IG1hbmFnZXIuY29va2llTmFtZVxyXG4gICAgICAgIHRoaXMuY29va2llRG9tYWluID0gbWFuYWdlci5jb29raWVEb21haW5cclxuICAgICAgICB0aGlzLmNvb2tpZUV4cGlyZXNBZnRlckRheXMgPSBtYW5hZ2VyLmNvb2tpZUV4cGlyZXNBZnRlckRheXNcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llID0gZ2V0Q29va2llKHRoaXMuY29va2llTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVxyXG4gICAgICAgICAgICA/IGNvb2tpZS52YWx1ZVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldENvb2tpZSh0aGlzLmNvb2tpZU5hbWUsIHZhbHVlLCB0aGlzLmNvb2tpZUV4cGlyZXNBZnRlckRheXMsIHRoaXMuY29va2llRG9tYWluKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlQ29va2llKHRoaXMuY29va2llTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2VTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBtYW5hZ2VyLmNvb2tpZU5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCB2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMua2V5KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3RvcmVzID0ge1xyXG4gICAgJ2Nvb2tpZSc6IENvb2tpZVN0b3JlLFxyXG4gICAgJ2xvY2FsU3RvcmFnZSc6IExvY2FsU3RvcmFnZVN0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3Jlc1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hY2nDsyBxdWUgcmVjb3BpbGVtXCIsXCJkZXNjcmlwdGlvblwiOlwiQXF1w60gcG9kZXUgdmV1cmUgaSBwZXJzb25hbGl0emFyIGxhIGluZm9ybWFjacOzIHF1ZSByZWNvcGlsZW0gc29icmUgdsOzcy5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwb2zDrXRpY2EgZGUgcHJpdmFkZXNhXCIsXCJ0ZXh0XCI6XCJQZXIgYSBtw6lzIGluZm9ybWFjacOzLCBjb25zdWx0ZXUgbGEgbm9zdHJhIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJIaSBoYSBoYWd1dCBjYW52aXMgZGVzIGRlIGxhIHZvc3RyYSBkYXJyZXJhIHZpc2l0YS4gQWN0dWFsaXR6ZXUgZWwgdm9zdHJlIGNvbnNlbnRpbWVudC5cIixcImRlc2NyaXB0aW9uXCI6XCJSZWNvcGlsZW0gaSBwcm9jZXNzZW0gbGEgdm9zdHJhIGluZm9ybWFjacOzIHBlcnNvbmFsIGFtYiBsZXMgc2Vnw7xlbnRzIGZpbmFsaXRhdHM6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIlNhYmVyLW5lIG3DqXNcIn0sXCJva1wiOlwiQWNjZXB0YVwiLFwic2F2ZVwiOlwiRGVzYVwiLFwiZGVjbGluZVwiOlwiUmVidXRqYVwiLFwiY2xvc2VcIjpcIlRhbmNhXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkhhYmlsaXRhL2Rlc2hhYmlsaXRhIHRvdGVzIGxlcyBhcGxpY2FjaW9uc1wiLFwiZGVzY3JpcHRpb25cIjpcIlVzZXUgYXF1ZXN0IGJvdMOzIHBlciBhIGhhYmlsaXRhciBvIGRlc2hhYmlsaXRhciB0b3RlcyBsZXMgYXBsaWNhY2lvbnMuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvcHQtb3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIkFxdWVzdGEgYXBsaWNhY2nDsyBlcyBjYXJyZWdhIHBlciBkZWZlY3RlLCBwZXLDsiBwb2RldSBkZXNhY3RpdmFyLWxhXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKG5lY2Vzc8OgcmlhKVwiLFwiZGVzY3JpcHRpb25cIjpcIkFxdWVzdGEgYXBsaWNhY2nDsyBlcyBuZWNlc3NpdGEgc2VtcHJlXCJ9LFwicHVycG9zZXNcIjpcIkZpbmFsaXRhdHNcIixcInB1cnBvc2VcIjpcIkZpbmFsaXRhdFwifSxcInBvd2VyZWRCeVwiOlwiRnVuY2lvbmEgYW1iIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkRhdGVuc2NodXR6ZWluc3RlbGx1bmdlblwiLFwiZGVzY3JpcHRpb25cIjpcIldpciBudXR6ZW4gQ29va2llcyBhdWYgdW5zZXJlciBXZWJzaXRlLiBFaW5pZ2Ugdm9uIGlobmVuIHNpbmQgZXNzZW56aWVsbCwgd8OkaHJlbmQgYW5kZXJlIHVucyBoZWxmZW4sIGRpZXNlIFdlYnNpdGUgdW5kIElocmUgRXJmYWhydW5nIHp1IHZlcmJlc3Nlcm4uXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwiRGF0ZW5zY2h1dHplcmtsw6RydW5nXCIsXCJ0ZXh0XCI6XCJ7cHJpdmFjeVBvbGljeX1cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcInRpdGxlXCI6XCJEYXRlbnNjaHV0emVpbnN0ZWxsdW5nZW5cIixcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJFcyBnYWIgw4RuZGVydW5nZW4gc2VpdCBJaHJlbSBsZXR6dGVuIEJlc3VjaCwgYml0dGUgYWt0dWFsaXNpZXJlbiBTaWUgSWhyZSBBdXN3YWhsLlwiLFwiZGVzY3JpcHRpb25cIjpcIldpciBudXR6ZW4gQ29va2llcyBhdWYgdW5zZXJlciBXZWJzaXRlLiBFaW5pZ2Ugdm9uIGlobmVuIHNpbmQgZXNzZW56aWVsbCwgd8OkaHJlbmQgYW5kZXJlIHVucyBoZWxmZW4sIGRpZXNlIFdlYnNpdGUgdW5kIElocmUgRXJmYWhydW5nIHp1IHZlcmJlc3Nlcm4uXFxuXCIsXCJsZWFybk1vcmVcIjpcIk1laHIgZXJmYWhyZW5cIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIlNwZWljaGVyblwiLFwiZGVjbGluZVwiOlwiTnVyIGVzc2VudGllbGxlIENvb2tpZXMgYWt6ZXB0aWVyZW5cIixcImNsb3NlXCI6XCJTY2hsaWXDn2VuXCIsXCJhY2NlcHRTZWxlY3RlZFwiOlwiQXVzd2FobCBzcGVpY2hlcm5cIixcImFjY2VwdEFsbFwiOlwiQWxsZW4genVzdGltbWVuXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkFsbGUgQW53ZW5kdW5nZW4gYWt0aXZpZXJlbi9kZWFrdGl2aWVyZW5cIixcImRlc2NyaXB0aW9uXCI6XCJOdXR6ZW4gU2llIGRpZXNlbiBTY2hhbHRlciB1bSBhbGxlIEFwcHMgenUgYWt0aXZpZXJlbi9kZWFrdGl2aWVyZW4uXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihPcHQtT3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIkRpZXNlIEFud2VuZHVuZyB3aXJkIHN0YW5kYXJkbcOkw59pZyBnZWxhZGVuIChTaWUga8O2bm5lbiBkaWVzZSBhYmVyIGRlYWt0aXZpZXJlbilcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoaW1tZXIgbm90d2VuZGlnKVwiLFwiZGVzY3JpcHRpb25cIjpcIkRpZXNlIEFud2VuZHVuZyB3aXJkIGltbWVyIGJlbsO2dGlndFwifSxcInB1cnBvc2VzXCI6XCJad2Vja2VcIixcInB1cnBvc2VcIjpcIlp3ZWNrXCJ9LFwicG93ZXJlZEJ5XCI6XCJSZWFsaXNpZXJ0IG1pdCBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCLOoM67zrfPgc6/z4bOv8+Bzq/Otc+CIM+Azr/PhSDPg8+FzrvOu86tzrPOv8+FzrzOtVwiLFwiZGVzY3JpcHRpb25cIjpcIs6VzrTPjiDOvM+Azr/Pgc61zq/PgiDOvc6xIM60zrXOuc+CIM66zrHOuSDOvc6xIM+Bz4XOuM68zq/Pg861zrnPgiDPhM65z4Igz4DOu863z4HOv8+Gzr/Pgc6vzrXPgiDPgM6/z4Ugz4PPhc67zrvOrc6zzr/Phc68zrUgz4PPh861z4TOuc66zqwgzrzOtSDOtc+Dzq3Ovc6xXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwizqDOv867zrnPhM65zrrOriDOkc+Azr/Pgc+Bzq7PhM6/z4VcIixcInRleHRcIjpcIs6TzrnOsSDPgM61z4HOuc+Dz4PPjM+EzrXPgc61z4Igz4DOu863z4HOv8+Gzr/Pgc6vzrXPgiwgz4DOsc+BzrHOus6xzrvPjiDOtM65zrHOss6sz4PPhM61IM+EzrfOvSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwizqDPgc6xzrPOvM6xz4TOv8+Azr/Ouc6uzrjOt866zrHOvSDOsc67zrvOsc6zzq3PgiDOvM61z4TOrCDPhM63zr0gz4TOtc67zrXPhc+EzrHOr86xIM+DzrHPgiDOtc+Azq/Pg866zrXPiM63IM+AzrHPgc6xzrrOsc67zr/Pjc68zrUgzrHOvc6xzr3Otc+Oz4PPhM61IM+EzrfOvSDPg8+FzrPOus6xz4TOrM64zrXPg863IM+DzrHPglwiLFwiZGVzY3JpcHRpb25cIjpcIs6jz4XOs866zrXOvc+Ez4HPjs69zr/Phc68zrUgzrrOsc65IM61z4DOtc6+zrXPgc6zzrHOts+MzrzOsc+Dz4TOtSDPhM6xIM+Az4HOv8+Dz4nPgM65zrrOrCDOtM61zrTOv868zq3Ovc6xIM+DzrHPgiDOs865zrEgz4TOv8+Fz4Igz4DOsc+BzrHOus6sz4TPiSDOu8+MzrPOv8+Fz4I6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIs6gzrXPgc65z4PPg8+Mz4TOtc+BzrFcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIs6Rz4DOv864zq7Ous61z4XPg863XCIsXCJkZWNsaW5lXCI6XCLOkc+Az4zPgc+BzrnPgM+Ez4lcIixcImNsb3NlXCI6XCLOms67zrXOr8+DzrnOvM6/XCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIs6TzrnOsSDPjM67zrXPgiDPhM65z4IgzrXPhs6xz4HOvM6/zrPOrc+CXCIsXCJkZXNjcmlwdGlvblwiOlwizqfPgc63z4POuc68zr/PgM6/zq/Ot8+DzrUgzrHPhc+Ez4wgz4TOv869IM60zrnOsc66z4zPgM+EzrcgzrPOuc6xIM69zrEgzrXOvc61z4HOs86/z4DOv865zq7Pg861zrnPgi/Osc+AzrXOvc61z4HOs86/z4DOv865zq7Pg861zrnPgiDPjM67zrXPgiDPhM65z4IgzrXPhs6xz4HOvM6/zrPOrc+CXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIijOvM63IM6xz4DOsc65z4TOv8+NzrzOtc69zr8pXCIsXCJkZXNjcmlwdGlvblwiOlwizpXOr869zrHOuSDPgM+Bzr/Ous6xzrjOv8+BzrnPg868zq3Ovc6/IM69zrEgz4bOv8+Bz4TPjs69zrXPhM6xzrksIM6szrvOu86xIM68z4DOv8+BzrXOryDOvc6xIM+AzrHPgc6xzrvOt8+GzrjOtc6vXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKM6xz4DOsc65z4TOv8+NzrzOtc69zr8pXCIsXCJkZXNjcmlwdGlvblwiOlwizpTOtc69IM6zzq/Ovc61z4TOsc65IM69zrEgzrvOtc65z4TOv8+Fz4HOs86uz4POtc65IM+Dz4nPg8+EzqwgzrcgzrXPhs6xz4HOvM6/zrPOriDPh8+Jz4HOr8+CIM6xz4XPhM+MXCJ9LFwicHVycG9zZXNcIjpcIs6jzrrOv8+Azr/Or1wiLFwicHVycG9zZVwiOlwizqPOus6/z4DPjM+CXCJ9LFwicG93ZXJlZEJ5XCI6XCLOpc+Azr/Pg8+EzrfPgc6vzrbOtc+EzrHOuSDOsc+Az4wgz4TOvyBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hdGlvbiB0aGF0IHdlIGNvbGxlY3RcIixcImRlc2NyaXB0aW9uXCI6XCJIZXJlIHlvdSBjYW4gc2VlIGFuZCBjdXN0b21pemUgdGhlIGluZm9ybWF0aW9uIHRoYXQgd2UgY29sbGVjdCBhYm91dCB5b3UuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicHJpdmFjeSBwb2xpY3lcIixcInRleHRcIjpcIlRvIGxlYXJuIG1vcmUsIHBsZWFzZSByZWFkIG91ciB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYXRpb24gdGhhdCB3ZSBjb2xsZWN0XCIsXCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiVGhlcmUgd2VyZSBjaGFuZ2VzIHNpbmNlIHlvdXIgbGFzdCB2aXNpdCwgcGxlYXNlIHVwZGF0ZSB5b3VyIGNvbnNlbnQuXCIsXCJkZXNjcmlwdGlvblwiOlwiV2UgY29sbGVjdCBhbmQgcHJvY2VzcyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZvciB0aGUgZm9sbG93aW5nIHB1cnBvc2VzOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJDdXN0b21pemVcIn0sXCJva1wiOlwiQWNjZXB0XCIsXCJzYXZlXCI6XCJTYXZlXCIsXCJkZWNsaW5lXCI6XCJEZWNsaW5lXCIsXCJjbG9zZVwiOlwiQ2xvc2VcIixcImFjY2VwdEFsbFwiOlwiQWNjZXB0IGFsbFwiLFwiYWNjZXB0U2VsZWN0ZWRcIjpcIkFjY2VwdCBzZWxlY3RlZFwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJUb2dnbGUgYWxsIGFwcHNcIixcImRlc2NyaXB0aW9uXCI6XCJVc2UgdGhpcyBzd2l0Y2ggdG8gZW5hYmxlL2Rpc2FibGUgYWxsIGFwcHMuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvcHQtb3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIlRoaXMgYXBwIGlzIGxvYWRlZCBieSBkZWZhdWx0IChidXQgeW91IGNhbiBvcHQgb3V0KVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihhbHdheXMgcmVxdWlyZWQpXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhpcyBhcHBsaWNhdGlvbiBpcyBhbHdheXMgcmVxdWlyZWRcIn0sXCJwdXJwb3Nlc1wiOlwiUHVycG9zZXNcIixcInB1cnBvc2VcIjpcIlB1cnBvc2VcIn0sXCJwb3dlcmVkQnlcIjpcIlBvd2VyZWQgYnkgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYWNpw7NuIHF1ZSByZWNvcGlsYW1vc1wiLFwiZGVzY3JpcHRpb25cIjpcIkFxdcOtIHB1ZWRlIHZlciB5IHBlcnNvbmFsaXphciBsYSBpbmZvcm1hY2nDs24gcXVlIHJlY29waWxhbW9zIHNvYnJlIHVzdGVkLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbMOtdGljYSBkZSBwcml2YWNpZGFkXCIsXCJ0ZXh0XCI6XCJQYXJhIG3DoXMgaW5mb3JtYWNpw7NuIGNvbnN1bHRlIG51ZXN0cmEge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkhhIGhhYmlkbyBjYW1iaW9zIGRlc2RlIHN1IMO6bHRpbWEgdmlzaXRhLCBwb3IgZmF2b3IsIGFjdHVhbGljZSBzdSBjb25zZW50aW1pZW50by5cIixcImRlc2NyaXB0aW9uXCI6XCJSZWNvcGlsYW1vcyB5IHByb2Nlc2Ftb3Mgc3UgaW5mb3JtYWNpw7NuIHBlcnNvbmFsIGNvbiBsb3Mgc2lndWllbnRlcyBmaW5lczoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiTcOhcyBpbmZvcm1hY2nDs25cIn0sXCJva1wiOlwiQWNlcHRhclwiLFwic2F2ZVwiOlwiR3VhcmRhclwiLFwiZGVjbGluZVwiOlwiUmVjaGF6YXJcIixcImNsb3NlXCI6XCJDZXJyYXJcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiSGFiaWxpdGFyL2Rlc2hhYmlsaXRhciB0b2RhcyBsYXMgYXBsaWNhY2lvbmVzXCIsXCJkZXNjcmlwdGlvblwiOlwiVXNlIGVzdGUgYm90w7NuIHBhcmEgaGFiaWxpdGFyIG8gZGVzaGFiaWxpdGFyIHRvZGFzIGxhcyBhcGxpY2FjaW9uZXMuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvcHQtb3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIkVzdGEgYXBsaWNhY2nDs24gc2UgY2FyZ2EgZGUgZm9ybWEgcHJlZGV0ZXJtaW5hZGEgKHBlcm8gcHVlZGUgZGVzYWN0aXZhcmxhKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihuZWNlc2FyaWEpXCIsXCJkZXNjcmlwdGlvblwiOlwiRXN0YSBhcGxpY2FjacOzbiBzZSBuZWNlc2l0YSBzaWVtcHJlXCJ9LFwicHVycG9zZXNcIjpcIkZpbmVzXCIsXCJwdXJwb3NlXCI6XCJGaW5cIn0sXCJwb3dlcmVkQnlcIjpcIlBvd2VyZWQgYnkgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiS2Vyw6TDpG3DpG1tZSB0aWVkb3RcIixcImRlc2NyaXB0aW9uXCI6XCJWb2l0IHRhcmthc3RlbGxhIGphIG11b2thdGEgc2ludXN0YSBrZXLDpMOkbWnDpG1tZSB0aWV0b2phLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInRpZXRvc3VvamFzaXZ1bHRhbW1lXCIsXCJ0ZXh0XCI6XCJWb2l0IGx1a2VhIGxpc8OkdGlldG9qYSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiT2xlbW1lIHRlaG5lZXQgbXV1dG9rc2lhIGVodG9paGluIHZpaW1lIHZpZXJhaWx1c2kgasOkbGtlZW4sIHRhcmtpc3RhIGVoZG90LlwiLFwiZGVzY3JpcHRpb25cIjpcIktlcsOkw6RtbWUgamEga8Okc2l0dGVsZW1tZSBoZW5raWzDtnRpZXRvamEgc2V1cmFhdmlpbiB0YXJrb2l0dWtzaWluOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJMdWUgbGlzw6TDpFwifSxcIm9rXCI6XCJIeXbDpGtzeVwiLFwic2F2ZVwiOlwiVGFsbGVubmFcIixcImRlY2xpbmVcIjpcIkh5bGvDpMOkXCIsXCJjbG9zZVwiOlwiU3VsamVcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiVmFsaXRzZSBrYWlra2lcIixcImRlc2NyaXB0aW9uXCI6XCJBa3Rpdm9pIGthaWtraSBww6TDpGxsZS9wb2lzLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIobGFkYXRhYW4gb2xldHVrc2VuYSlcIixcImRlc2NyaXB0aW9uXCI6XCJMYWRhdGFhbiBvbGV0dWtzZW5hIChtdXR0YSB2b2l0IG90dGFhIHNlbiBwb2lzIHDDpMOkbHTDpClcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIodmFhZGl0YWFuKVwiLFwiZGVzY3JpcHRpb25cIjpcIlNpdnVzdG8gdmFhdGlpIHTDpG3DpG4gYWluYVwifSxcInB1cnBvc2VzXCI6XCJLw6R5dHTDtnRhcmtvaXR1a3NldFwiLFwicHVycG9zZVwiOlwiS8OkeXR0w7Z0YXJrb2l0dXNcIn0sXCJwb3dlcmVkQnlcIjpcIlBhbHZlbHVuIHRhcmpvYWEgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiTGVzIGluZm9ybWF0aW9ucyBxdWUgbm91cyBjb2xsZWN0b25zXCIsXCJkZXNjcmlwdGlvblwiOlwiSWNpLCB2b3VzIHBvdXZleiB2b2lyIGV0IHBlcnNvbm5hbGlzZXIgbGVzIGluZm9ybWF0aW9ucyBxdWUgbm91cyBjb2xsZWN0b25zIHN1ciB2b3VzLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbGl0aXF1ZSBkZSBjb25maWRlbnRpYWxpdMOpXCIsXCJ0ZXh0XCI6XCJQb3VyIGVuIHNhdm9pciBwbHVzLCBtZXJjaSBkZSBsaXJlIG5vdHJlIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJEZXMgbW9kaWZpY2F0aW9ucyBvbnQgZXUgbGlldSBkZXB1aXMgdm90cmUgZGVybmnDqHJlIHZpc2l0ZSwgbWVyY2kgZGUgbWV0dHJlIMOgIGpvdXIgdm90cmUgY29uc2VudGVtZW50LlwiLFwiZGVzY3JpcHRpb25cIjpcIk5vdXMgY29sbGVjdG9ucyBldCB0cmFpdG9ucyB2b3MgaW5mb3JtYXRpb25zIHBlcnNvbm5lbGxlcyBkYW5zIGxlIGJ1dCBzdWl2YW50IDoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiRW4gc2F2b2lyIHBsdXNcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIlNhdXZlZ2FyZGVyXCIsXCJkZWNsaW5lXCI6XCJSZWZ1c2VyXCIsXCJjbG9zZVwiOlwiRmVybWVyXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkNoYW5nZXIgdG91dGVzIGxlcyBvcHRpb25zXCIsXCJkZXNjcmlwdGlvblwiOlwiVXRpbGlzZXIgY2UgYm91dG9uIHBvdXIgYWN0aXZlci9kw6lzYWN0aXZlciB0b3V0ZXMgbGVzIG9wdGlvbnNcIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiQ2V0dGUgYXBwbGljYXRpb24gZXN0IGNoYXJnw6llIHBhciBkw6lmYXV0IChtYWlzIHZvdXMgcG91dmV6IGxhIGTDqXNhY3RpdmVyKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIih0b3Vqb3VycyByZXF1aXMpXCIsXCJkZXNjcmlwdGlvblwiOlwiQ2V0dGUgYXBwbGljYXRpb24gZXN0IHRvdWpvdXJzIHJlcXVpc2VcIn0sXCJwdXJwb3Nlc1wiOlwiVXRpbGlzYXRpb25zXCIsXCJwdXJwb3NlXCI6XCJVdGlsaXNhdGlvblwifSxcInBvd2VyZWRCeVwiOlwiUHJvcHVsc8OpIHBhciBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hY2lqZSBrb2plIHByaWt1cGxqYW1vXCIsXCJkZXNjcmlwdGlvblwiOlwiT3ZkamUgbW/FvmV0ZSB2aWRqZXRpIGkgcG9kZXNpdGkgaW5mb3JtYWNpamUga29qZSBwcmlrdXBsamFtbyBvIFZhbWEuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicHJhdmlsYSBwcml2YXRub3N0aVwiLFwidGV4dFwiOlwiWmEgdmnFoWUgaW5mb3JtYWNpamUgcHJvxI1pdGFqdGUgbmHFoWEge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkRvxaFsbyBqZSBkbyBwcm9tamVuYSBvZCBWYcWhZSBwb3NsamVkbmplZyBwb3NqZcSHaXZhbmphIHdlYiBzdHJhbmljZSwgbW9saW1vIFZhcyBkYSBhxb51cmlyYXRlIHN2b2phIG9kb2JyZW5qYS5cIixcImRlc2NyaXB0aW9uXCI6XCJNaSBwcmlrdXBsamFtbyBpIHByb2Nlc2lyYW1vIFZhxaFlIG9zb2JuZSBwb2RhdGtlIHJhZGkgc2xpamVkZcSHZWc6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIlNhem5hanRlIHZpxaFlXCJ9LFwib2tcIjpcIlUgcmVkdVwiLFwic2F2ZVwiOlwiU3ByZW1pXCIsXCJkZWNsaW5lXCI6XCJPZGJpalwiLFwiY2xvc2VcIjpcIlphdHZvcmlcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiSXptZWlqZW5pIHN2ZVwiLFwiZGVzY3JpcHRpb25cIjpcIktvcmlzdGl0ZSBvdmFqIHByZWtpZGHEjSBkYSBvbW9ndcSHaXRlL29uZW1vZ3XEh2l0ZSBzdmUgYXBsaWthY2lqZSBvZGplZG5vbS5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9uZW1vZ3XEh2l0ZSlcIixcImRlc2NyaXB0aW9uXCI6XCJPdmEgYXBsaWthY2lqYSBqZSB1xI1pdGFuYSBhdXRvbWF0c2tpIChhbGkgamUgbW/FvmV0ZSBvbmVtb2d1xIdpdGkpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKG9iYXZlem5hKVwiLFwiZGVzY3JpcHRpb25cIjpcIk92YSBhcGxpa2FjaWphIGplIHV2aWplayBvYmF2ZXpuYS5cIn0sXCJwdXJwb3Nlc1wiOlwiU3ZyaGVcIixcInB1cnBvc2VcIjpcIlN2cmhhXCJ9LFwicG93ZXJlZEJ5XCI6XCJQb2tyZcSHZSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm3DoWNpw7NrLCBhbWlrZXQgZ3nFsWp0w7xua1wiLFwiZGVzY3JpcHRpb25cIjpcIkl0dCBsw6F0aGF0b2Qgw6lzIHRlc3RyZXN6YWJoYXRvZCBheiByw7NsYWQgZ3nFsWp0w7Z0dCBpbmZvcm3DoWNpw7NrYXQuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwiYWRhdHbDqWRlbG1pIGlyw6FueWVsdmVpbmtldFwiLFwidGV4dFwiOlwiVG92w6FiYmkgaW5mb3Jtw6FjacOzw6lydCBrw6lyasO8aywgb2x2YXNzZCBlbCBheiB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiQXogdXRvbHPDsyBsw6F0b2dhdMOhcyDDs3RhIHbDoWx0b3rDoXNvayB0w7ZydMOpbnRlaywga8OpcmrDvGssIGZyaXNzw610c2QgYSBob3p6w6Fqw6FydWzDoXNvZGF0LlwiLFwiZGVzY3JpcHRpb25cIjpcIkF6IHN6ZW3DqWx5ZXMgYWRhdGFpZGF0IMO2c3N6ZWd5xbFqdGrDvGsgw6lzIGZlbGRvbGdvenp1ayBheiBhbMOhYmJpIGPDqWxva3JhOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJUdWRqIG1lZyB0w7ZiYmV0XCJ9LFwib2tcIjpcIkVsZm9nYWRcIixcInNhdmVcIjpcIlNhdmVcIixcImRlY2xpbmVcIjpcIk1lbnTDqXNcIixcImNsb3NlXCI6XCJFbHZldFwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCLDlnNzemVzIGFwcCDDoXRrYXBjc29sw6FzYVwiLFwiZGVzY3JpcHRpb25cIjpcIkhhc3puw6FsZCBlenQgYSBrYXBjc29sw7N0IGF6IMO2c3N6ZXMgYWxrYWxtYXrDoXMgZW5nZWTDqWx5ZXrDqXPDqWhlei9sZXRpbHTDoXPDoWhvei5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKGxlaXJhdGtvesOhcylcIixcImRlc2NyaXB0aW9uXCI6XCJFeiBheiBhbGthbG1hesOhcyBhbGFww6lydGVsbWV6w6lzIHN6ZXJpbnQgYmV0w7ZsdMO2dHQgKGRlIGtpIGxlaGV0IGthcGNzb2xuaSlcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIobWluZGlnIGvDtnRlbGV6xZEpXCIsXCJkZXNjcmlwdGlvblwiOlwiRXogYXogYWxrYWxtYXrDoXMgbWluZGlnIGvDtnRlbGV6xZFcIn0sXCJwdXJwb3Nlc1wiOlwiQ8OpbG9rXCIsXCJwdXJwb3NlXCI6XCJDw6lsXCJ9LFwicG93ZXJlZEJ5XCI6XCJQb3dlcmVkIGJ5IEtsYXJvIVwifSIsIi8vIFRvIGNyZWF0ZSBhIG5ldyB0cmFuc2xhdGlvbiwgYWRkIGEgWUFNTCBmaWxlIHdpdGggdGhlIHJlcXVpcmVkIGVudHJpZXMgYW5kXHJcbi8vIGxpbmsgaXQgaGVyZSB1c2luZyB0aGUgYXBwcm9wcmlhdGUgbGFuZ3VhZ2UgY29kZS5cclxuXHJcbmltcG9ydCBjYSBmcm9tICcuL2NhLnltbCdcclxuaW1wb3J0IGRlIGZyb20gJy4vZGUueW1sJ1xyXG5pbXBvcnQgZWwgZnJvbSAnLi9lbC55bWwnXHJcbmltcG9ydCBlbiBmcm9tICcuL2VuLnltbCdcclxuaW1wb3J0IGVzIGZyb20gJy4vZXMueW1sJ1xyXG5pbXBvcnQgZmkgZnJvbSAnLi9maS55bWwnXHJcbmltcG9ydCBmciBmcm9tICcuL2ZyLnltbCdcclxuaW1wb3J0IGh1IGZyb20gJy4vaHUueW1sJ1xyXG5pbXBvcnQgaHIgZnJvbSAnLi9oci55bWwnXHJcbmltcG9ydCBpdCBmcm9tICcuL2l0LnltbCdcclxuaW1wb3J0IG5sIGZyb20gJy4vbmwueW1sJ1xyXG5pbXBvcnQgbm8gZnJvbSAnLi9uby55bWwnXHJcbmltcG9ydCBybyBmcm9tICcuL3JvLnltbCdcclxuaW1wb3J0IHNyIGZyb20gJy4vc3IueW1sJ1xyXG5pbXBvcnQgc3JfY3lybCBmcm9tICcuL3NyX2N5cmwueW1sJ1xyXG5pbXBvcnQgc3YgZnJvbSAnLi9zdi55bWwnXHJcbmltcG9ydCB0ciBmcm9tICcuL3RyLnltbCdcclxuaW1wb3J0IHBsIGZyb20gJy4vcGwueW1sJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgY2EsXHJcbiAgICBkZSxcclxuICAgIGVsLFxyXG4gICAgZW4sXHJcbiAgICBlcyxcclxuICAgIGZpLFxyXG4gICAgZnIsXHJcbiAgICBodSxcclxuICAgIGhyLFxyXG4gICAgaXQsXHJcbiAgICBubCxcclxuICAgIG5vLFxyXG4gICAgcm8sXHJcbiAgICBzcixcclxuICAgIHNyX2N5cmwsXHJcbiAgICBzdixcclxuICAgIHRyLFxyXG4gICAgcGwsXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYXppb25pIGNoZSByYWNjb2dsaWFtb1wiLFwiZGVzY3JpcHRpb25cIjpcIlF1aSBwdW9pIHZlZGVyZSBlIHNjZWdsaWVyZSBsZSBpbmZvcm1hemlvbmkgY2hlIHJhY2NvZ2xpYW1vIHN1IGRpIHRlLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbGljeSBwcml2YWN5XCIsXCJ0ZXh0XCI6XCJQZXIgc2FwZXJuZSBkaSBwacO5LCBsZWdnaSBsYSBub3N0cmEge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkNpIHNvbm8gc3RhdGkgY2FtYmlhbWVudGkgZGFsbGEgdHVhIHVsdGltYSB2aXNpdGEsIGFnZ2lvcm5hIGlsIHR1byBjb25zZW5zby5cIixcImRlc2NyaXB0aW9uXCI6XCJSYWNjb2dsaWFtbyBlZCBlbGFib3JpYW1vIGxlIHZvc3RyZSBpbmZvcm1hemlvbmkgcGVyc29uYWxpIHBlciBpIHNlZ3VlbnRpIHNjb3BpOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJTY29wcmkgZGkgcGnDuVwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiU2FsdmFcIixcImRlY2xpbmVcIjpcIlJpZml1dGFcIixcImNsb3NlXCI6XCJDaGl1ZGlcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiQ2FtYmlhIHBlciB0dXR0ZSBsZSBhcHBcIixcImRlc2NyaXB0aW9uXCI6XCJVc2EgcXVlc3RvIGludGVycnV0dG9yZSBwZXIgYWJpbGl0YXJlL2Rpc2FiaWxpdGFyZSB0dXR0ZSBsZSBhcHAuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvcHQtb3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIlF1ZXN0J2FwcGxpY2F6aW9uZSDDqCBjYXJpY2F0YSBkaSBkZWZhdWx0IChtYSBwdW9pIGRpc2F0dGl2YXJsYSlcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoc2VtcHJlIHJpY2hpZXN0bylcIixcImRlc2NyaXB0aW9uXCI6XCJRdWVzdCdhcHBsaWNhemlvbmUgw6ggc2VtcHJlIHJpY2hpZXN0YVwifSxcInB1cnBvc2VzXCI6XCJTY29waVwiLFwicHVycG9zZVwiOlwiU2NvcG9cIn0sXCJwb3dlcmVkQnlcIjpcIlJlYWxpenphdG8gZGEgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYXRpZSBkaWUgd2UgdmVyemFtZWxlblwiLFwiZGVzY3JpcHRpb25cIjpcIkhpZXIga3VudCB1IGRlIGluZm9ybWF0aWUgYmVraWprZW4gZW4gYWFucGFzc2VuIGRpZSB3ZSBvdmVyIHUgdmVyemFtZWxlbi5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwcml2YWN5YmVsZWlkXCIsXCJ0ZXh0XCI6XCJMZWVzIG9ucyBwcml2YWN5YmVsZWlkIHZvb3IgbWVlciBpbmZvcm1hdGllIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJFciB3YXJlbiB3aWp6aWdpbmdlbiBzaW5kcyB1dyBsYWF0c3RlIGJlem9laywgd2VyayB1dyB2b29ya2V1cmVuIGJpai5cIixcImRlc2NyaXB0aW9uXCI6XCJXaWogdmVyemFtZWxlbiBlbiB2ZXJ3ZXJrZW4gdXcgcGVyc29vbmxpamtlIGdlZ2V2ZW5zIHZvb3IgZGUgdm9sZ2VuZGUgZG9lbGVpbmRlbjoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiTGVlcyBtZWVyXCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCJPcHNsYWFuXCIsXCJkZWNsaW5lXCI6XCJBZndpanplblwiLFwiY2xvc2VcIjpcIlNsdWl0ZW5cIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiQWxsZSBvcHRpZXMgaW4vdWl0IHNjaGFrZWxlblwiLFwiZGVzY3JpcHRpb25cIjpcIkdlYnJ1aWsgZGV6ZSBzY2hha2Vsb3B0aWUgb20gYWxsZSBhcHBzIGluL3VpdCB0ZSBzY2hha2VsZW4uXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihhZm1lbGRlbilcIixcImRlc2NyaXB0aW9uXCI6XCJEZXplIGFwcCBpcyBzdGFuZGFhcmQgZ2VsYWRlbiAobWFhciBqZSBrdW50IGplIGFmbWVsZGVuKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihhbHRpamQgdmVycGxpY2h0KVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlemUgYXBwbGljYXRpZSBpcyBhbHRpamQgdmVyZWlzdFwifSxcInB1cnBvc2VzXCI6XCJEb2VsZWluZGVuXCIsXCJwdXJwb3NlXCI6XCJEb2VsZWluZGVcIn0sXCJwb3dlcmVkQnlcIjpcIkFhbmdlZHJldmVuIGRvb3IgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYXNqb24gdmkgc2FtbGVyIGlublwiLFwiZGVzY3JpcHRpb25cIjpcIkhlciBrYW4gZHUgc2Ugb2cgdmVsZ2UgaHZpbGtlbiBpbmZvcm1hc2pvbiB2aSBzYW1sZXIgaW5uIG9tIGRlZy5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwZXJzb252ZXJuZXJrbMOmcmluZ1wiLFwidGV4dFwiOlwiRm9yIMOlIGzDpnJlIG1lciwgdmVubmxpZ3N0IGxlcyB2w6VyIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJEZXQgaGFyIHNramVkZCBlbmRyaW5nZXIgc2lkZW4gZGl0dCBzaXN0ZSBiZXPDuGssIHZlbm5saWdzdCBvcHBkYXRlciBkaXR0IHNhbXR5a2tlLlwiLFwiZGVzY3JpcHRpb25cIjpcIlZpIHNhbWxlciBpbm4gb2cgcHJvc2Vzc2VyZXIgZGluIHBlcnNvbmxpZ2UgaW5mb3JtYXNqb24gYXYgZsO4bGdlbmRlIMOlcnNha2VyOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJMw6ZyIG1lclwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiT3BzbGFhblwiLFwiZGVjbGluZVwiOlwiQXZzbMOlXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkJ5dHQgYWxsZSBhcHBlclwiLFwiZGVzY3JpcHRpb25cIjpcIkJydWsgZGVubmUgZm9yIMOlIHNrcnUgYXYvcMOlIGFsbGUgYXBwZXIuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvcHQtb3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlbm5lIGFwcGVuIGVyIGxhc3RldCBzb20gc3RhbmRhcmQgKG1lbiBkdSBrYW4gc2tydSBkZXQgYXYpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKGFsbHRpZCBww6VrcmV2ZClcIixcImRlc2NyaXB0aW9uXCI6XCJEZW5uZSBhcHBsaWthc2pvbmVuIGVyIGFsbHRpZCBww6VrcmV2ZFwifSxcInB1cnBvc2VzXCI6XCLDhXJzYWtlclwiLFwicHVycG9zZVwiOlwiw4Vyc2FrXCJ9LFwicG93ZXJlZEJ5XCI6XCJMYWdldCBtZWQgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYWNqZSwga3TDs3JlIHpiaWVyYW15XCIsXCJkZXNjcmlwdGlvblwiOlwiVHV0YWogbW/FvGVzeiB6b2JhY3p5xIcgaSBkb3N0b3Nvd2HEhyBpbmZvcm1hY2plLCBrdMOzcmUgemJpZXJhbXkgbyBUb2JpZS5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwb2xpdHlrYSBwcnl3YXRub8WbY2lcIixcInRleHRcIjpcIkFieSBkb3dpZWR6aWXEhyBzacSZIHdpxJljZWosIHByemVjenl0YWogbmFzesSFIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJOYXN0xIVwacWCeSB6bWlhbnkgb2QgVHdvamVqIG9zdGF0bmllaiB3aXp5dHksIHpha3R1YWxpenVqIHN3b2rEhSB6Z29kxJkuXCIsXCJkZXNjcmlwdGlvblwiOlwiWmJpZXJhbXkgaSBwcnpldHdhcnphbXkgZGFuZSBvc29ib3dlIHcgbmFzdMSZcHVqxIVjeWNoIGNlbGFjaDoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiRG93aWVkeiBzacSZIHdpxJljZWpcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIlphcGlzelwiLFwiZGVjbGluZVwiOlwiUmV6eWduYWNqYVwiLFwiY2xvc2VcIjpcIlphbWtuaWpcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiUHJ6ZcWCxIVjeiBkbGEgd3N6eXN0a2ljaCBhcGxpa2FjamlcIixcImRlc2NyaXB0aW9uXCI6XCJVxbx5aiBwcnplxYLEhWN6bmlrYSwgYWJ5IHfFgsSFY3p5xIcvd3nFgsSFY3p5xIcgd3N6eXN0a2llIGFwbGlrYWNqZS5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKHJlenlnbmFjamEpXCIsXCJkZXNjcmlwdGlvblwiOlwiVGEgYXBsaWthY2phIGplc3QgZG9tecWbbG5pZSDFgmFkb3dhbmEgKGFsZSBtb8W8ZXN6IHpyZXp5Z25vd2HEhylcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoemF3c3plIHd5bWFnYW5lKVwiLFwiZGVzY3JpcHRpb25cIjpcIlRhIGFsaWthY2phIGplc3QgemF3c3plIHd5bWFnYW5hXCJ9LFwicHVycG9zZXNcIjpcIkNlbGVcIixcInB1cnBvc2VcIjpcIkNlbFwifSxcInBvd2VyZWRCeVwiOlwiTmFwxJlkemFueSBwcnpleiBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hyJtpaWxlIHBlIGNhcmUgbGUgY29sZWN0xINtXCIsXCJkZXNjcmlwdGlvblwiOlwiQWljaSBwdXRlyJtpIHZlZGVhIMiZaSBwZXJzb25hbGl6YSBpbmZvcm1hyJtpaWxlIHBlIGNhcmUgbGUgY29sZWN0xINtIGRlc3ByZSBkdnMuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicG9saXRpY2EgcHJpdmFjeVwiLFwidGV4dFwiOlwiUGVudHJ1IGEgYWZsYSBtYWkgbXVsdGUsIHbEgyBydWfEg20gc8SDIGNpdGnIm2kge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkF1IGV4aXN0YXQgbW9kaWZpY8SDcmkgZGUgbGEgdWx0aW1hIHZpeml0xIMsIHbEgyBydWfEg20gc8SDIGFjdHVhbGl6YcibaSBjb25zaW3Im8SDbcOibnR1bC5cIixcImRlc2NyaXB0aW9uXCI6XCJDb2xlY3TEg20gyJlpIHByb2Nlc8SDbSBpbmZvcm1hyJtpaWxlIGR2cy4gcGVyc29uYWxlIMOubiB1cm3Eg3RvYXJlbGUgc2NvcHVyaToge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiQWZsxIMgbWFpIG11bHRlXCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCJTYWx2ZWF6xINcIixcImRlY2xpbmVcIjpcIlJlbnVuyJvEg1wiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJDb211dGHIm2kgw65udHJlIHRvYXRlIGFwbGljYcibaWlsZVwiLFwiZGVzY3JpcHRpb25cIjpcIlV0aWxpemHIm2kgYWNlc3Qgc3dpdGNoIHBlbnRydSBhIGFjdGl2YS9kZXphY3RpdmEgdG9hdGUgYXBsaWNhyJtpaWxlLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob3B0LW91dClcIixcImRlc2NyaXB0aW9uXCI6XCJBY2Vhc3TEgyBhcGxpY2HIm2llIGVzdGUgw65uY8SDcmNhdMSDIMOubiBtb2QgaW1wbGljaXQgKGRhciBwdXRlyJtpIHJlbnVuyJthKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIijDrm50b3RkZWF1bmEgbmVjZXNhcilcIixcImRlc2NyaXB0aW9uXCI6XCJBY2Vhc3TEgyBhcGxpY2HIm2llIGVzdGUgw65udG90ZGVhdW5hIG5lY2VzYXLEg1wifSxcInB1cnBvc2VzXCI6XCJTY29wdXJpXCIsXCJwdXJwb3NlXCI6XCJTY29wXCJ9LFwicG93ZXJlZEJ5XCI6XCJSZWFsaXphdCBkZSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hY2lqZSBrb2plIHByaWt1cGxqYW1vXCIsXCJkZXNjcmlwdGlvblwiOlwiT3ZkZSBtb8W+ZXRlIHZpZGV0aSBpIHBvZGVzaXRpIGluZm9ybWFjaWplIGtvamUgcHJpa3VwbGphbW8gbyBWYW1hLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbGl0aWt1IHByaXZhdG5vc3RpXCIsXCJ0ZXh0XCI6XCJaYSB2acWhZSBpbmZvcm1hY2lqZSBwcm/EjWl0YWp0ZSBuYcWhdSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiRG/FoWxvIGplIGRvIHByb21lbmEgb2QgVmHFoWUgcG9zbGVkbmplIHBvc2V0ZSwgbW9saW1vIFZhcyBkYSBhxb51cmlyYXRlIHN2b2phIG9kb2JyZW5qYS5cIixcImRlc2NyaXB0aW9uXCI6XCJNaSBwcmlrdXBsamFtbyBpIHByb2Nlc2lyYW1vIFZhxaFlIGxpxI1uZSBwb2RhdGtlIHJhZGkgc2xlZGXEh2VnOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJTYXpuYWp0ZSB2acWhZVwifSxcIm9rXCI6XCJVIHJlZHVcIixcInNhdmVcIjpcIlNhxI11dmFqXCIsXCJkZWNsaW5lXCI6XCJPZGJpalwiLFwiY2xvc2VcIjpcIlphdHZvcmlcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiSXptZW5pIHN2ZVwiLFwiZGVzY3JpcHRpb25cIjpcIktvcmlzdGl0ZSBvdmFqIHByZWtpZGHEjSBkYSBvbW9ndcSHaXRlL29uZXNwb3NvYml0ZSBzdmUgYXBsaWthY2lqZSBvZGplZG5vbS5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9uZXNwb3NvYml0ZSlcIixcImRlc2NyaXB0aW9uXCI6XCJPdmEgYXBsaWthY2lqYSBqZSB1xI1pdGFuYSBhdXRvbWF0c2tpIChhbGkgamUgbW/FvmV0ZSBvbmVzcG9zb2JpdGkpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKG5lb3Bob2RuYSlcIixcImRlc2NyaXB0aW9uXCI6XCJPdmEgYXBsaWthY2lqYSBqZSB1dmVrIG5lb3Bob2RuYS5cIn0sXCJwdXJwb3Nlc1wiOlwiU3ZyaGVcIixcInB1cnBvc2VcIjpcIlN2cmhhXCJ9LFwicG93ZXJlZEJ5XCI6XCJQb2tyZcSHZSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCLQmNC90YTQvtGA0LzQsNGG0LjRmNC1INC60L7RmNC1INC/0YDQuNC60YPQv9GZ0LDQvNC+XCIsXCJkZXNjcmlwdGlvblwiOlwi0J7QstC00LUg0LzQvtC20LXRgtC1INCy0LjQtNC10YIg0Lgg0L/QvtC00LXRgdC40YLQuCDQuNC90YTQvtGA0LzQsNGG0LjRmNC1INC60L7RmNC1INC/0YDQuNC60YPQv9GZ0LDQvNC+INC+INCS0LDQvNCwLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcItC/0L7Qu9C40YLQuNC60YMg0L/RgNC40LLQsNGC0L3QvtGB0YLQuFwiLFwidGV4dFwiOlwi0JfQsCDQstC40YjQtSDQuNC90YTQvtGA0LzQsNGG0LjRmNCwINC/0YDQvtGH0LjRgtCw0ZjRgtC1INC90LDRiNGDIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCLQlNC+0YjQu9C+INGY0LUg0LTQviDQv9GA0L7QvNC10L3QsCDQvtC0INCS0LDRiNC1INC/0L7RgdC70LXQtNC90ZjQtSDQv9C+0YHQtdGC0LUsINC80L7Qu9C40LzQviDQktCw0YEg0LTQsCDQsNC20YPRgNC40YDQsNGC0LUg0YHQstC+0ZjQsCDQvtC00L7QsdGA0LXRmtCwLlwiLFwiZGVzY3JpcHRpb25cIjpcItCc0Lgg0L/RgNC40LrRg9C/0ZnQsNC80L4g0Lgg0L/RgNC+0YbQtdGB0LjRgNCw0LzQviDQktCw0YjQtSDQu9C40YfQvdC1INC/0L7QtNCw0YLQutC1INGA0LDQtNC4INGB0LvQtdC00LXRm9C10LM6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcItCh0LDQt9C90LDRmNGC0LUg0LLQuNGI0LVcIn0sXCJva1wiOlwi0KMg0YDQtdC00YNcIixcInNhdmVcIjpcItCh0LDRh9GD0LLQsNGYXCIsXCJkZWNsaW5lXCI6XCLQntC00LHQuNGYXCIsXCJjbG9zZVwiOlwi0JfQsNGC0LLQvtGA0LhcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwi0JjQt9C80LXQvdC4INGB0LLQtVwiLFwiZGVzY3JpcHRpb25cIjpcItCa0L7RgNC40YHRgtC40YLQtSDQvtCy0LDRmCDQv9GA0LXQutC40LTQsNGHINC00LAg0L7QvNC+0LPRg9Gb0LjRgtC1L9C+0L3QtdGB0L/QvtGB0L7QsdC40YLQtSDRgdCy0LUg0LDQv9C70LjQutCw0YbQuNGY0LUg0L7QtNGY0LXQtNC90L7QvC5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKNC+0L3QtdGB0L/QvtGB0L7QsdC40YLQtSlcIixcImRlc2NyaXB0aW9uXCI6XCLQntCy0LAg0LDQv9C70LjQutCw0YbQuNGY0LAg0ZjQtSDRg9GH0LjRgtCw0L3QsCDQsNGD0YLQvtC80LDRgtGB0LrQuCAo0LDQu9C4INGY0LUg0LzQvtC20LXRgtC1INC+0L3QtdGB0L/QvtGB0L7QsdC40YLQuClcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIo0L3QtdC+0L/RhdC+0LTQvdCwKVwiLFwiZGVzY3JpcHRpb25cIjpcItCe0LLQsCDQsNC/0LvQuNC60LDRhtC40ZjQsCDRmNC1INGD0LLQtdC6INC90LXQvtC/0YXQvtC00L3QsC5cIn0sXCJwdXJwb3Nlc1wiOlwi0KHQstGA0YXQtVwiLFwicHVycG9zZVwiOlwi0KHQstGA0YXQsFwifSxcInBvd2VyZWRCeVwiOlwi0J/QvtC60YDQtdGb0LUg0JrQu9Cw0YDQviFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hdGlvbiBzb20gdmkgc2FtbGFyXCIsXCJkZXNjcmlwdGlvblwiOlwiSMOkciBrYW4gZHUgc2Ugb2NoIGFucGFzc2Egdmlsa2VuIGluZm9ybWF0aW9uIHZpIHNhbWxhciBvbSBkaWcuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwiSW50ZWdyaXRldHNwb2xpY3lcIixcInRleHRcIjpcIkbDtnIgYXR0IHZldGEgbWVyLCBsw6RzIHbDpXIge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkRldCBoYXIgc2tldHQgZsO2csOkbmRyaW5nYXIgc2VkYW4gZGl0dCBzZW5hc3RlIGJlc8O2aywgdmFyIGdvZCB1cHBkYXRlcmEgZGl0dCBtZWRnaXZhbmRlLlwiLFwiZGVzY3JpcHRpb25cIjpcIlZpIHNhbWxhciBvY2ggYmVhcmJldGFyIGRpbiBwZXJzb25saWdhIGRhdGEgaSBmw7ZsamFuZGUgc3lmdGVuOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJMw6RzIG1lclwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiU3BhcmFcIixcImRlY2xpbmVcIjpcIkF2YsO2alwiLFwiY2xvc2VcIjpcIlN0w6RuZ1wiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCLDhG5kcmEgZsO2ciBhbGxhIGFwcGFyXCIsXCJkZXNjcmlwdGlvblwiOlwiQW52w6RuZCBkZXR0YSByZWdsYWdlIGbDtnIgYXR0IGFrdGl2ZXJhL2F2YWt0aXZlcmEgc2FtdGxpZ2EgYXBwYXIuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihBdmFrdGl2ZXJhKVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlbiBow6RyIGFwcGVuIGxhZGRhcyBzb20gc3RhbmRhcmRpbnN0w6RsbG5pbmcgKG1lbiBkdSBrYW4gYXZha3RpdmVyYSBkZW4pXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKEtyw6R2cyBhbGx0aWQpXCIsXCJkZXNjcmlwdGlvblwiOlwiRGVuIGjDpHIgYXBwbGlrYXRpb25lbiBrcsOkdnMgYWxsdGlkXCJ9LFwicHVycG9zZXNcIjpcIlN5ZnRlblwiLFwicHVycG9zZVwiOlwiU3lmdGVcIn0sXCJwb3dlcmVkQnlcIjpcIkvDtnJzIHDDpSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJTYWtsYWTEscSfxLFtxLF6IGJpbGdpbGVyXCIsXCJkZXNjcmlwdGlvblwiOlwiSGFra8SxbsSxemRhIHRvcGxhZMSxxJ/EsW3EsXogYmlsZ2lsZXJpIGJ1cmFkYSBnw7ZyZWJpbGlyIHZlIMO2emVsbGXFn3RpcmViaWxpcnNpbml6LlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcIkdpemxpbGlrIFBvbGl0aWthc8SxXCIsXCJ0ZXh0XCI6XCJEYWhhIGZhemxhc8SxIGnDp2luIGzDvHRmZW4ge3ByaXZhY3lQb2xpY3l9IHNheWZhbcSxesSxIG9rdXl1bi5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJTb24geml5YXJldGluaXpkZW4gYnUgeWFuYSBkZcSfacWfaWtsaWtsZXIgb2xkdSwgbMO8dGZlbiBzZcOnaW1pbml6aSBnw7xuY2VsbGV5aW4uXCIsXCJkZXNjcmlwdGlvblwiOlwiS2nFn2lzZWwgYmlsZ2lsZXJpbml6aSBhxZ9hxJ/EsWRha2kgYW1hw6dsYXJsYSBzYWtsxLF5b3IgdmUgacWfbGl5b3J1ejoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiRGFoYSBmYXpsYSBiaWxnaVwifSxcIm9rXCI6XCJUYW1hbVwiLFwic2F2ZVwiOlwiS2F5ZGV0XCIsXCJkZWNsaW5lXCI6XCJSZWRkZXRcIixcImNsb3NlXCI6XCJLYXBhdFwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJUw7xtIHV5Z3VsYW1hbGFyxLEgYcOnL2thcGF0XCIsXCJkZXNjcmlwdGlvblwiOlwiVG9wbHUgYcOnbWEva2FwYW1hIGnDp2luIGJ1IGTDvMSfbWV5aSBrdWxsYW5hYmlsaXJzaW4uXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihpc3RlxJ9lIGJhxJ9sxLEpXCIsXCJkZXNjcmlwdGlvblwiOlwiQnUgdXlndWxhbWEgdmFyc2F5xLFsYW5kYSB5w7xrbGVuZGkgKGFuY2FrIGlwdGFsIGVkZWJpbGlyc2luKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihoZXIgemFtYW4gZ2VyZWtsaSlcIixcImRlc2NyaXB0aW9uXCI6XCJCdSB1eWd1bGFtYSBoZXIgemFtYW4gZ2VyZWtsaVwifSxcInB1cnBvc2VzXCI6XCJBbWHDp2xhclwiLFwicHVycG9zZVwiOlwiQW1hw6dcIn0sXCJwb3dlcmVkQnlcIjpcIktsYXJvIHRhcmFmxLFuZGFuIGdlbGnFn3RpcmlsZGkhXCJ9IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFB1cnBvc2VzKGNvbmZpZyl7XHJcbiAgICBjb25zdCBwdXJwb3NlcyA9IG5ldyBTZXQoW10pXHJcbiAgICBmb3IobGV0IGk9MDtpPGNvbmZpZy5hcHBzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGNvbnN0IGFwcFB1cnBvc2VzID0gY29uZmlnLmFwcHNbaV0ucHVycG9zZXMgfHwgW11cclxuICAgICAgICBmb3IobGV0IGo9MDtqPGFwcFB1cnBvc2VzLmxlbmd0aDtqKyspXHJcbiAgICAgICAgICAgIHB1cnBvc2VzLmFkZChhcHBQdXJwb3Nlc1tqXSlcclxuICAgIH1cclxuICAgIHJldHVybiBBcnJheS5mcm9tKHB1cnBvc2VzKVxyXG59XHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llcygpe1xyXG4gICAgY29uc3QgY29va2llU3RyaW5ncyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIilcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBbXVxyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeXFxcXHMqKFtePV0rKVxcXFxzKj1cXFxccyooLio/KSQnKVxyXG4gICAgZm9yKGxldCBpPTA7aTxjb29raWVTdHJpbmdzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVN0ciA9IGNvb2tpZVN0cmluZ3NbaV1cclxuICAgICAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoY29va2llU3RyKVxyXG4gICAgICAgIGlmIChtYXRjaCA9PT0gbnVsbClcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICBjb29raWVzLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBtYXRjaFsxXSxcclxuICAgICAgICAgICAgdmFsdWU6IG1hdGNoWzJdLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29va2llc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUpIHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBnZXRDb29raWVzKClcclxuICAgIGZvcihsZXQgaT0wO2k8Y29va2llcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBpZiAoY29va2llc1tpXS5uYW1lID09PSBuYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gY29va2llc1tpXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuXHJcbi8vaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTQ1NzMyMjMvc2V0LWNvb2tpZS1hbmQtZ2V0LWNvb2tpZS13aXRoLWphdmFzY3JpcHRcclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cywgZG9tYWluKSB7XHJcbiAgICBsZXQgZXhwaXJlcyA9IFwiXCJcclxuICAgIGlmIChkYXlzKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyoyNCo2MCo2MCoxMDAwKSlcclxuICAgICAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKClcclxuICAgIH1cclxuICAgIGlmIChkb21haW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGV4cGlyZXMgKz0gJzsgZG9tYWluPScgKyBkb21haW5cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSAgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29va2llKG5hbWUsIHBhdGgsIGRvbWFpbikge1xyXG4gICAgbGV0IHN0ciA9IG5hbWUrJz07IE1heC1BZ2U9LTk5OTk5OTk5OydcclxuICAgIC8vIHRyeSB0byBkZWxldGUgdGhlIGNvb2tpZSB3aXRob3V0IGFueSBwYXRoIGFuZCBkb21haW5cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHN0clxyXG4gICAgc3RyICs9ICcgcGF0aD0nKyhwYXRoIHx8ICcvJykrJzsnXHJcbiAgICAvLyB0cnkgdG8gZGVsZXRlIHRoZSBjb29raWUgd2l0aCBwYXRoXHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBzdHJcclxuICAgIGlmIChkb21haW4gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0ciArPSAnIGRvbWFpbj0nK2RvbWFpbisnOydcclxuICAgICAgICAvLyB0cnkgdG8gZGVsZXRlIHRoZSBjb29raWUgd2l0aCBkb21haW4gYW5kIHBhdGhcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBzdHJcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBmb3JtYXQgPSAoc3RyLCAuLi5yZXN0KSA9PiB7XHJcbiAgICBjb25zdCB0ID0gdHlwZW9mIHJlc3RbMF07XHJcbiAgICBsZXQgYXJnc1xyXG4gICAgaWYgKHJlc3QubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIGFyZ3MgPSB7fVxyXG4gICAgZWxzZVxyXG4gICAgICAgIGFyZ3MgPSAodCA9PT0gXCJzdHJpbmdcIiB8fCB0ID09PSBcIm51bWJlclwiKSA/XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJlc3QpXHJcbiAgICAgICAgICAgIDogcmVzdFswXTtcclxuXHJcbiAgICBjb25zdCBzcGxpdHMgPSBbXVxyXG5cclxuICAgIGxldCBzID0gc3RyLnRvU3RyaW5nKClcclxuICAgIHdoaWxlKHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgY29uc3QgbSA9IHMubWF0Y2goL1xceyg/IVxceykoW1xcd1xcZF0rKVxcfSg/IVxcfSkvKVxyXG4gICAgICAgIGlmIChtICE9PSBudWxsKXtcclxuICAgICAgICAgICAgY29uc3QgbGVmdCA9IHMuc3Vic3RyKDAsIG0uaW5kZXgpXHJcbiAgICAgICAgICAgIHMgPSBzLnN1YnN0cihtLmluZGV4K21bMF0ubGVuZ3RoKVxyXG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQobVsxXSlcclxuICAgICAgICAgICAgc3BsaXRzLnB1c2gobGVmdClcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxyXG4gICAgICAgICAgICBpZiAobiAhPSBuKXsgLy8gbm90IGEgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICBzcGxpdHMucHVzaChhcmdzW21bMV1dKVxyXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBhIG51bWJlcmVkIGFyZ3VtZW50XHJcbiAgICAgICAgICAgICAgICBzcGxpdHMucHVzaChhcmdzW25dKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3BsaXRzLnB1c2gocylcclxuICAgICAgICAgICAgcyA9IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3BsaXRzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYW5ndWFnZSgpe1xyXG4gICAgY29uc3QgbGFuZyA9ICgodHlwZW9mIHdpbmRvdy5sYW5ndWFnZSA9PT0gXCJzdHJpbmdcIiA/IHdpbmRvdy5sYW5ndWFnZSA6IG51bGwpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nIHx8ICdlbicpLnRvTG93ZXJDYXNlKClcclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXihbXFxcXHddKyktKFtcXFxcd10rKSQnKVxyXG4gICAgY29uc3QgcmVzdWx0ID0gcmVnZXguZXhlYyhsYW5nKVxyXG4gICAgaWYgKHJlc3VsdCA9PT0gbnVsbCl7XHJcbiAgICAgICAgcmV0dXJuIGxhbmdcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRbMV1cclxufVxyXG5cclxuZnVuY3Rpb24gaGdldChkLCBrZXksIGRlZmF1bHRWYWx1ZSl7XHJcbiAgICBsZXQga2wgPSBrZXlcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShrbCkpXHJcbiAgICAgICAga2wgPSBba2xdXHJcbiAgICBsZXQgY3YgPSBkXHJcbiAgICBmb3IobGV0IGk9MDtpPGtsLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGlmIChjdiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgaWYgKGN2IGluc3RhbmNlb2YgTWFwKVxyXG4gICAgICAgICAgICBjdiA9IGN2LmdldChrbFtpXSlcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGN2ID0gY3Zba2xbaV1dXHJcbiAgICB9XHJcbiAgICBpZiAoY3YgPT09IHVuZGVmaW5lZClcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgICByZXR1cm4gY3ZcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHQodHJhbnMsIGxhbmcsIGtleSwgLi4ucGFyYW1zKXtcclxuICAgIGxldCBrbCA9IGtleVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtsKSlcclxuICAgICAgICBrbCA9IFtrbF1cclxuICAgIGNvbnN0IHZhbHVlID0gaGdldCh0cmFucywgW2xhbmcsIC4uLmtsXSlcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm4gYFttaXNzaW5nIHRyYW5zbGF0aW9uOiAke2xhbmd9LyR7a2wuam9pbihcIi9cIil9XWA7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA+IDApXHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdCh2YWx1ZSwgLi4ucGFyYW1zKVxyXG4gICAgcmV0dXJuIHZhbHVlXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb01hcChkKXtcclxuICAgIGNvbnN0IGRtID0gbmV3IE1hcChbXSlcclxuICAgIGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZCkpe1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZFtrZXldXHJcbiAgICAgICAgaWYgKCEodHlwZW9mKGtleSkgPT09ICdzdHJpbmcnKSlcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICBkbS5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZG0uc2V0KGtleSwgY29udmVydFRvTWFwKHZhbHVlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZG1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShkLCBlZCwgb3ZlcndyaXRlLCBjbG9uZSl7XHJcblxyXG4gICAgY29uc3QgYXNzaWduID0gKGQsIGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXApe1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKFtdKVxyXG4gICAgICAgICAgICAvL3dlIGRlZXAtY2xvbmUgdGhlIG1hcFxyXG4gICAgICAgICAgICB1cGRhdGUobWFwLCB2YWx1ZSwgdHJ1ZSwgZmFsc2UpXHJcbiAgICAgICAgICAgIGQuc2V0KGtleSwgbWFwKVxyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBkLnNldChrZXksIHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghKGVkIGluc3RhbmNlb2YgTWFwKSB8fCAhKGQgaW5zdGFuY2VvZiBNYXApKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlcnMgYXJlIG5vdCBtYXBzIVwiKVxyXG4gICAgaWYgKG92ZXJ3cml0ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIG92ZXJ3cml0ZSA9IHRydWVcclxuICAgIGlmIChjbG9uZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGNsb25lID0gZmFsc2VcclxuICAgIGlmIChjbG9uZSlcclxuICAgICAgICBkID0gbmV3IGQuY29uc3RydWN0b3IoZClcclxuICAgIGZvcihjb25zdCBrZXkgb2YgZWQua2V5cygpKXtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGVkLmdldChrZXkpXHJcbiAgICAgICAgY29uc3QgZHZhbHVlID0gZC5nZXQoa2V5KVxyXG4gICAgICAgIGlmICghZC5oYXMoa2V5KSl7XHJcbiAgICAgICAgICAgIGFzc2lnbihkLCBrZXksIHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hcCAmJiBkdmFsdWUgaW5zdGFuY2VvZiBNYXApe1xyXG4gICAgICAgICAgICBkLnNldChrZXksIHVwZGF0ZShkdmFsdWUsIHZhbHVlLCBvdmVyd3JpdGUsIGNsb25lKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghb3ZlcndyaXRlKVxyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgYXNzaWduKGQsIGtleSwgdmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9