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

/***/ "../node_modules/css-loader/dist/cjs.js?sourceMap!../node_modules/sass-loader/dist/cjs.js?sourceMap!./scss/klaro.scss":
/*!****************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js?sourceMap!../node_modules/sass-loader/dist/cjs.js?sourceMap!./scss/klaro.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".klaro .cookie-modal, .klaro .cookie-notice {\n  /* The switch - the box around the slider */\n  font-size: 14px; }\n  .klaro .cookie-modal .switch, .klaro .cookie-notice .switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 30px; }\n  .klaro .cookie-modal .cm-app-input:checked + .cm-app-label .slider, .klaro .cookie-notice .cm-app-input:checked + .cm-app-label .slider {\n    background-color: #0885BA; }\n  .klaro .cookie-modal .cm-app-input.required:checked + .cm-app-label .slider, .klaro .cookie-notice .cm-app-input.required:checked + .cm-app-label .slider {\n    opacity: 0.8;\n    background-color: #006A4E;\n    cursor: not-allowed; }\n  .klaro .cookie-modal .slider, .klaro .cookie-notice .slider {\n    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 5px 5px 10px 0 rgba(0, 0, 0, 0.19); }\n  .klaro .cookie-modal .cm-app-input, .klaro .cookie-notice .cm-app-input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    width: 50px;\n    height: 30px; }\n  .klaro .cookie-modal .cm-app-label, .klaro .cookie-notice .cm-app-label {\n    /* The slider */\n    /* Rounded sliders */ }\n    .klaro .cookie-modal .cm-app-label .slider, .klaro .cookie-notice .cm-app-label .slider {\n      position: absolute;\n      cursor: pointer;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: #ccc;\n      -webkit-transition: .4s;\n      transition: .4s;\n      width: 50px;\n      display: inline-block; }\n    .klaro .cookie-modal .cm-app-label .slider:before, .klaro .cookie-notice .cm-app-label .slider:before {\n      position: absolute;\n      content: \"\";\n      height: 20px;\n      width: 20px;\n      left: 5px;\n      bottom: 5px;\n      background-color: white;\n      -webkit-transition: .4s;\n      transition: .4s; }\n    .klaro .cookie-modal .cm-app-label .slider.round, .klaro .cookie-notice .cm-app-label .slider.round {\n      border-radius: 30px; }\n    .klaro .cookie-modal .cm-app-label .slider.round:before, .klaro .cookie-notice .cm-app-label .slider.round:before {\n      border-radius: 50%; }\n    .klaro .cookie-modal .cm-app-label input:focus + .slider, .klaro .cookie-notice .cm-app-label input:focus + .slider {\n      box-shadow: 0 0 1px #0885BA; }\n    .klaro .cookie-modal .cm-app-label input:checked + .slider:before, .klaro .cookie-notice .cm-app-label input:checked + .slider:before {\n      -webkit-transform: translateX(20px);\n      -ms-transform: translateX(20px);\n      transform: translateX(20px); }\n  .klaro .cookie-modal .cm-app-input:focus + .cm-app-label .slider, .klaro .cookie-notice .cm-app-input:focus + .cm-app-label .slider {\n    box-shadow: 0 4px 6px 0 rgba(125, 125, 125, 0.2), 5px 5px 10px 0 rgba(125, 125, 125, 0.19); }\n  .klaro .cookie-modal .cm-app-input:checked + .cm-app-label .slider:before, .klaro .cookie-notice .cm-app-input:checked + .cm-app-label .slider:before {\n    -webkit-transform: translateX(20px);\n    -ms-transform: translateX(20px);\n    transform: translateX(20px); }\n  .klaro .cookie-modal .slider, .klaro .cookie-notice .slider {\n    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 5px 5px 10px 0 rgba(0, 0, 0, 0.19); }\n  .klaro .cookie-modal a, .klaro .cookie-notice a {\n    color: #00AA3E;\n    text-decoration: none; }\n  .klaro .cookie-modal p, .klaro .cookie-modal strong, .klaro .cookie-modal h1, .klaro .cookie-modal h2, .klaro .cookie-modal ul, .klaro .cookie-modal li, .klaro .cookie-notice p, .klaro .cookie-notice strong, .klaro .cookie-notice h1, .klaro .cookie-notice h2, .klaro .cookie-notice ul, .klaro .cookie-notice li {\n    font-family: inherit;\n    color: #eee; }\n  .klaro .cookie-modal p, .klaro .cookie-modal h1, .klaro .cookie-modal h2, .klaro .cookie-modal ul, .klaro .cookie-modal li, .klaro .cookie-notice p, .klaro .cookie-notice h1, .klaro .cookie-notice h2, .klaro .cookie-notice ul, .klaro .cookie-notice li {\n    display: block;\n    text-align: left;\n    margin: 0;\n    padding: 0;\n    margin-top: 0.7em; }\n  .klaro .cookie-modal .cm-link, .klaro .cookie-notice .cm-link {\n    padding-left: 4px;\n    vertical-align: middle; }\n  .klaro .cookie-modal .cm-btn, .klaro .cookie-notice .cm-btn {\n    background: #555;\n    color: #eee;\n    border-radius: 6px;\n    padding: 6px 10px;\n    margin-right: 0.5em;\n    border: 0; }\n    .klaro .cookie-modal .cm-btn:disabled, .klaro .cookie-notice .cm-btn:disabled {\n      opacity: 0.5; }\n    .klaro .cookie-modal .cm-btn.cm-btn-sm, .klaro .cookie-notice .cm-btn.cm-btn-sm {\n      padding: 0.4em;\n      font-size: 1em; }\n    .klaro .cookie-modal .cm-btn.cm-btn-close, .klaro .cookie-notice .cm-btn.cm-btn-close {\n      background: #eee;\n      color: #000; }\n    .klaro .cookie-modal .cm-btn.cm-btn-success, .klaro .cookie-notice .cm-btn.cm-btn-success {\n      background: #00AA3E; }\n    .klaro .cookie-modal .cm-btn.cm-btn-info, .klaro .cookie-notice .cm-btn.cm-btn-info {\n      background: #0885BA; }\n    .klaro .cookie-modal .cm-btn.cm-btn-right, .klaro .cookie-notice .cm-btn.cm-btn-right {\n      float: right;\n      margin-left: 0.5em;\n      margin-right: 0; }\n\n.klaro .cookie-modal {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow: hidden;\n  left: 0;\n  top: 0;\n  z-index: 1000; }\n  .klaro .cookie-modal .cm-bg {\n    background: rgba(0, 0, 0, 0.5);\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0; }\n  .klaro .cookie-modal .cm-modal,\n  .klaro .cookie-modal .cookie-notice {\n    z-index: 1001;\n    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 5px 5px 10px 0 rgba(0, 0, 0, 0.19);\n    width: 100%;\n    max-height: 98%;\n    top: 50%;\n    transform: translateY(-50%);\n    position: fixed;\n    overflow: auto;\n    background: #333;\n    color: #eee; }\n    @media (min-width: 1024px) {\n      .klaro .cookie-modal .cm-modal,\n      .klaro .cookie-modal .cookie-notice {\n        border-radius: 4px;\n        position: relative;\n        margin: 0 auto;\n        max-width: 500px;\n        height: auto;\n        width: auto; } }\n    .klaro .cookie-modal .cm-modal .hide,\n    .klaro .cookie-modal .cookie-notice .hide {\n      border: none;\n      background: none;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      z-index: 1; }\n      .klaro .cookie-modal .cm-modal .hide svg,\n      .klaro .cookie-modal .cookie-notice .hide svg {\n        stroke: #eee; }\n    .klaro .cookie-modal .cm-modal .cm-footer,\n    .klaro .cookie-modal .cookie-notice .cm-footer {\n      padding: 1em;\n      border-top: 1px solid #555; }\n      .klaro .cookie-modal .cm-modal .cm-footer-buttons::before, .klaro .cookie-modal .cm-modal .cm-footer-buttons::after,\n      .klaro .cookie-modal .cookie-notice .cm-footer-buttons::before,\n      .klaro .cookie-modal .cookie-notice .cm-footer-buttons::after {\n        content: \" \";\n        display: table; }\n      .klaro .cookie-modal .cm-modal .cm-footer-buttons::after,\n      .klaro .cookie-modal .cookie-notice .cm-footer-buttons::after {\n        clear: both; }\n      .klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by,\n      .klaro .cookie-modal .cookie-notice .cm-footer .cm-powered-by {\n        font-size: 0.8em;\n        padding-top: 4px;\n        text-align: center; }\n        .klaro .cookie-modal .cm-modal .cm-footer .cm-powered-by a,\n        .klaro .cookie-modal .cookie-notice .cm-footer .cm-powered-by a {\n          color: #999; }\n    .klaro .cookie-modal .cm-modal .cm-header,\n    .klaro .cookie-modal .cm-modal .cn-header,\n    .klaro .cookie-modal .cookie-notice .cm-header,\n    .klaro .cookie-modal .cookie-notice .cn-header {\n      padding: 1em;\n      padding-right: 24px;\n      border-bottom: 1px solid #555; }\n      .klaro .cookie-modal .cm-modal .cm-header h1,\n      .klaro .cookie-modal .cm-modal .cn-header h1,\n      .klaro .cookie-modal .cookie-notice .cm-header h1,\n      .klaro .cookie-modal .cookie-notice .cn-header h1 {\n        margin: 0;\n        font-size: 2em;\n        display: block; }\n        .klaro .cookie-modal .cm-modal .cm-header h1.title,\n        .klaro .cookie-modal .cm-modal .cn-header h1.title,\n        .klaro .cookie-modal .cookie-notice .cm-header h1.title,\n        .klaro .cookie-modal .cookie-notice .cn-header h1.title {\n          padding-right: 20px; }\n    .klaro .cookie-modal .cm-modal .cm-body,\n    .klaro .cookie-modal .cookie-notice .cm-body {\n      padding: 1em; }\n      .klaro .cookie-modal .cm-modal .cm-body ul,\n      .klaro .cookie-modal .cookie-notice .cm-body ul {\n        display: block; }\n      .klaro .cookie-modal .cm-modal .cm-body span,\n      .klaro .cookie-modal .cookie-notice .cm-body span {\n        display: inline-block;\n        width: auto; }\n      .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps,\n      .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps {\n        padding: 0;\n        margin: 0; }\n        .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app,\n        .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app {\n          position: relative;\n          line-height: 20px;\n          vertical-align: middle;\n          padding-left: 60px;\n          min-height: 40px; }\n          .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app:first-child,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app:first-child {\n            margin-top: 0; }\n          .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app .switch,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app .switch {\n            position: absolute;\n            left: 0; }\n          .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app p,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app p {\n            margin-top: 0; }\n          .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app p.purposes,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app p.purposes {\n            font-size: 0.8em;\n            color: #999; }\n          .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app.cm-toggle-all,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app.cm-toggle-all {\n            border-top: 1px solid #555;\n            padding-top: 1em; }\n          .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app span.cm-app-title,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app span.cm-app-title {\n            font-weight: 600; }\n          .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app span.cm-opt-out, .klaro .cookie-modal .cm-modal .cm-body ul.cm-apps li.cm-app span.cm-required,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app span.cm-opt-out,\n          .klaro .cookie-modal .cookie-notice .cm-body ul.cm-apps li.cm-app span.cm-required {\n            padding-left: 0.2em;\n            font-size: 0.8em;\n            color: #999; }\n\n.klaro .cookie-notice {\n  background: #333;\n  z-index: 999;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  right: 0; }\n  @media (min-width: 990px) {\n    .klaro .cookie-notice {\n      box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 5px 5px 10px 0 rgba(0, 0, 0, 0.19);\n      border-radius: 4px;\n      position: fixed;\n      bottom: 20px;\n      right: 20px;\n      max-width: 300px; } }\n  @media (max-width: 989px) {\n    .klaro .cookie-notice {\n      border: none;\n      border-radius: 0; } }\n  .klaro .cookie-notice .cn-body {\n    margin-bottom: 0;\n    margin-right: 0;\n    bottom: 0;\n    padding: 1em;\n    padding-top: 0; }\n    .klaro .cookie-notice .cn-body p {\n      margin-bottom: 0.5em; }\n    .klaro .cookie-notice .cn-body p.cn-changes {\n      text-decoration: underline; }\n    .klaro .cookie-notice .cn-body .cn-learn-more {\n      display: inline-block; }\n    .klaro .cookie-notice .cn-body p.cn-ok {\n      padding-top: 0.5em;\n      margin: 0;\n      display: flex;\n      flex-direction: column; }\n      .klaro .cookie-notice .cn-body p.cn-ok button {\n        margin-bottom: 1rem; }\n\n.klaro .cookie-notice-hidden {\n  display: none !important; }\n", "",{"version":3,"sources":["C:/www/klaro/src/scss/klaro.scss","C:/www/klaro/src/scss/switch.scss"],"names":[],"mappings":"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","file":"klaro.scss","sourcesContent":["$box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2), 5px 5px 10px 0 rgba(0, 0, 0, 0.19);\r\n$border-radius: 4px;\r\n$border-dark: 1px solid #555;\r\n$font-color-dark: #eee;\r\n$font-color-dark-deemphasized: #999;\r\n$bg-dark: #333;\r\n$red2: #B24E14;\r\n$red1: #BA1E04;\r\n$yellow1: #F8C200;\r\n$yellow2: #D4D026;\r\n$blue3: #005091;\r\n$blue2: #003F8A;\r\n$blue1: #0885BA;\r\n$blue4: #9AC3D4;\r\n$green1: #00AA3E;\r\n$green2: #006A4E;\r\n$green3: #01440C;\r\n\r\n.klaro {\r\n\r\n    .cookie-modal, .cookie-notice {\r\n\r\n        @import 'switch.scss';\r\n\r\n        font-size: 14px;\r\n\r\n        .slider {\r\n            box-shadow: $box-shadow;\r\n        }\r\n\r\n        a {\r\n            color: $green1;\r\n            text-decoration: none;\r\n        }\r\n\r\n        p, strong, h1, h2, ul, li {\r\n            font-family: inherit;\r\n            color: $font-color-dark;\r\n        }\r\n\r\n        p, h1, h2, ul, li {\r\n            display: block;\r\n            text-align: left;\r\n            margin: 0;\r\n            padding: 0;\r\n            margin-top: 0.7em;\r\n        }\r\n\r\n        .cm-link {\r\n            padding-left: 4px;\r\n            vertical-align: middle;\r\n        }\r\n\r\n        .cm-btn {\r\n            background: #555;\r\n            color: $font-color-dark;\r\n            border-radius: 6px;\r\n            padding: 6px 10px;\r\n            margin-right: 0.5em;\r\n            border: 0;\r\n\r\n            &:disabled {\r\n                opacity: 0.5;\r\n            }\r\n\r\n            &.cm-btn-sm {\r\n                padding: 0.4em;\r\n                font-size: 1em;\r\n            }\r\n\r\n            &.cm-btn-close {\r\n                background: #eee;\r\n                color: #000;\r\n            }\r\n\r\n            &.cm-btn-success {\r\n                background: $green1;\r\n            }\r\n\r\n            &.cm-btn-info {\r\n                background: $blue1;\r\n            }\r\n\r\n            &.cm-btn-right {\r\n                float: right;\r\n                margin-left: 0.5em;\r\n                margin-right: 0;\r\n            }\r\n        }\r\n    }\r\n\r\n    .cookie-modal {\r\n\r\n        width: 100%;\r\n        height: 100%;\r\n        position: fixed;\r\n        overflow: hidden;\r\n        left: 0;\r\n        top: 0;\r\n        z-index: 1000;\r\n\r\n        .cm-bg {\r\n            background: rgba(0,0,0,0.5);\r\n            height: 100%;\r\n            width: 100%;\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n        }\r\n\r\n        .cm-modal,\r\n        .cookie-notice {\r\n            z-index: 1001;\r\n            box-shadow: $box-shadow;\r\n\r\n            @media(min-width: 1024px){\r\n                border-radius: $border-radius;\r\n                position: relative;\r\n                margin: 0 auto;\r\n                max-width: 500px;\r\n                height: auto;\r\n                width: auto;\r\n            }\r\n\r\n            width: 100%;\r\n            max-height: 98%;\r\n\r\n            top: 50%;\r\n            transform: translateY(-50%);\r\n\r\n            position: fixed;\r\n            overflow: auto;\r\n            background: $bg-dark;\r\n            color: $font-color-dark;\r\n\r\n            .hide   {\r\n                border: none;\r\n                background: none;\r\n                svg {\r\n                    stroke: $font-color-dark;\r\n                }\r\n                position: absolute;\r\n                top: 20px;\r\n                right: 20px;\r\n                // Avoid getting overlapped by the heading, if external CSS sets:\r\n                // h1 { position: relative }\r\n                // See: https://github.com/KIProtect/klaro/issues/135\r\n                z-index: 1;\r\n            }\r\n\r\n            .cm-footer {\r\n                padding: 1em;\r\n                border-top: $border-dark;\r\n\r\n                &-buttons {\r\n                    &::before,\r\n                    &::after {\r\n                        content: \" \";\r\n                        display: table;\r\n                    }\r\n\r\n                    &::after {\r\n                        clear: both;\r\n                    }\r\n                }\r\n\r\n                .cm-powered-by {\r\n                    font-size: 0.8em;\r\n                    padding-top: 4px;\r\n                    text-align: center;\r\n\r\n                    a {\r\n                        color: $font-color-dark-deemphasized;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .cm-header,\r\n            .cn-header {\r\n                padding: 1em;\r\n                padding-right: 24px;\r\n                border-bottom: $border-dark;\r\n                h1 {\r\n                    margin: 0;\r\n                    font-size: 2em;\r\n                    display: block;\r\n                    &.title {\r\n                        padding-right: 20px;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .cm-body {\r\n                padding: 1em;\r\n                ul {\r\n                    display: block;\r\n                }\r\n                span {\r\n                    display: inline-block;\r\n                    width: auto;\r\n                }\r\n                ul.cm-apps {\r\n                    padding :0;\r\n                    margin: 0;\r\n                    li.cm-app {\r\n                        &:first-child{\r\n                            margin-top: 0;\r\n                        }\r\n                        position: relative;\r\n                        line-height: 20px;\r\n                        vertical-align: middle;\r\n                        padding-left: 60px;\r\n                        min-height: 40px;\r\n                        .switch {\r\n                            position: absolute;\r\n                            left: 0;\r\n                        }\r\n                        p {\r\n                            margin-top: 0;\r\n                        }\r\n\r\n                        p.purposes {\r\n                            font-size: 0.8em;\r\n                            color: $font-color-dark-deemphasized;\r\n                        }\r\n\r\n                        &.cm-toggle-all {\r\n                            border-top: $border-dark;\r\n                            padding-top: 1em;\r\n                        }\r\n\r\n                        span.cm-app-title {\r\n                            font-weight: 600;\r\n                        }\r\n\r\n                        span.cm-opt-out, span.cm-required {\r\n                            padding-left: 0.2em;\r\n                            font-size: 0.8em;\r\n                            color: $font-color-dark-deemphasized;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .cookie-notice {\r\n\r\n        background: $bg-dark;\r\n        z-index: 999;\r\n\r\n        position: fixed;\r\n        width: 100%;\r\n        bottom: 0;\r\n        right: 0;\r\n\r\n        @media(min-width: 990px){\r\n            box-shadow: $box-shadow;\r\n            border-radius: $border-radius;\r\n            position: fixed;\r\n            bottom: 20px;\r\n            right: 20px;\r\n            max-width: 300px;\r\n        }\r\n\r\n        @media(max-width: 989px){\r\n            border: none;\r\n            border-radius: 0;\r\n        }\r\n\r\n        .cn-body {\r\n            margin-bottom:0;\r\n            margin-right: 0;\r\n            bottom: 0;\r\n\r\n            padding: 1em;\r\n            padding-top: 0;\r\n\r\n            p {\r\n                margin-bottom: 0.5em;\r\n            }\r\n\r\n            p.cn-changes {\r\n                text-decoration: underline;\r\n            }\r\n\r\n            .cn-learn-more {\r\n                display: inline-block;\r\n\r\n            }\r\n\r\n            p.cn-ok {\r\n                padding-top: 0.5em;\r\n                margin: 0;\r\n                display: flex;\r\n                flex-direction: column;\r\n\r\n                button {\r\n                    margin-bottom: 1rem;\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    .cookie-notice-hidden {\r\n        display: none !important;\r\n    }\r\n}\r\n","/* The switch - the box around the slider */\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 50px;\r\n    height: 30px;\r\n}\r\n\r\n.cm-app-input:checked + .cm-app-label .slider {\r\n    background-color: $blue1;\r\n}\r\n\r\n.cm-app-input.required:checked + .cm-app-label .slider {\r\n    opacity: 0.8;\r\n    background-color: $green2;\r\n    cursor: not-allowed;\r\n}\r\n\r\n.slider {\r\n    box-shadow: $box-shadow;\r\n}\r\n\r\n.cm-app-input {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0;\r\n    width: 50px;\r\n    height: 30px;\r\n}\r\n\r\n.cm-app-label {\r\n    /* The slider */\r\n    .slider {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: #ccc;\r\n        -webkit-transition: .4s;\r\n        transition: .4s;\r\n        width: 50px;\r\n        display: inline-block;\r\n    }\r\n\r\n    .slider:before {\r\n        position: absolute;\r\n        content: \"\";\r\n        height: 20px;\r\n        width: 20px;\r\n        left: 5px;\r\n        bottom: 5px;\r\n        background-color: white;\r\n        -webkit-transition: .4s;\r\n        transition: .4s;\r\n    }\r\n\r\n    /* Rounded sliders */\r\n    .slider.round {\r\n        border-radius: 30px;\r\n    }\r\n\r\n    .slider.round:before {\r\n        border-radius: 50%;\r\n    }\r\n\r\n    input:focus + .slider {\r\n        box-shadow: 0 0 1px $blue1;\r\n    }\r\n\r\n    input:checked + .slider:before {\r\n        -webkit-transform: translateX(20px);\r\n        -ms-transform: translateX(20px);\r\n        transform: translateX(20px);\r\n    }\r\n}\r\n\r\n.cm-app-input:focus + .cm-app-label .slider {\r\n    box-shadow: 0 4px 6px 0 rgba(125, 125, 125, 0.2), 5px 5px 10px 0 rgba(125, 125, 125, 0.19);\r\n}\r\n\r\n.cm-app-input:checked + .cm-app-label .slider:before {\r\n    -webkit-transform: translateX(20px);\r\n    -ms-transform: translateX(20px);\r\n    transform: translateX(20px);\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

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

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
      }, description || t([name, 'description'])), purposesContent));
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
      }, acceptAllButton, acceptButton, declineButton), react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("p", {
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
      }, declineButton, acceptButton, react__WEBPACK_IMPORTED_MODULE_14__["default"].createElement("a", {
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
/* harmony import */ var scss_klaro_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scss/klaro.scss */ "./scss/klaro.scss");
/* harmony import */ var scss_klaro_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scss_klaro_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var components_app_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/app.js */ "./components/app.js");
/* harmony import */ var consent_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! consent-manager */ "./consent-manager.js");
/* harmony import */ var translations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! translations */ "./translations/index.js");
/* harmony import */ var utils_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/maps */ "./utils/maps.js");
/* harmony import */ var utils_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/i18n */ "./utils/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "language", function() { return utils_i18n__WEBPACK_IMPORTED_MODULE_12__["language"]; });

/* harmony import */ var current_executing_script__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! current-executing-script */ "../node_modules/current-executing-script/dist/currentExecutingScript.js");
/* harmony import */ var current_executing_script__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(current_executing_script__WEBPACK_IMPORTED_MODULE_13__);







/* globals module, require, VERSION */
 // When webpack's hot loading is enabled, enable Preact's support for the
// React Dev Tools browser extension.

if (false) {}








var script = document.currentScript || current_executing_script__WEBPACK_IMPORTED_MODULE_13___default()();
var originalOnLoad = window.onload;
var convertedTranslations = Object(utils_maps__WEBPACK_IMPORTED_MODULE_11__["convertToMap"])(translations__WEBPACK_IMPORTED_MODULE_10__["default"]);
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
  Object(utils_maps__WEBPACK_IMPORTED_MODULE_11__["update"])(trans, convertedTranslations);
  Object(utils_maps__WEBPACK_IMPORTED_MODULE_11__["update"])(trans, Object(utils_maps__WEBPACK_IMPORTED_MODULE_11__["convertToMap"])(config.translations || {}));
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
  var lang = config.lang || Object(utils_i18n__WEBPACK_IMPORTED_MODULE_12__["language"])();

  var tt = function tt() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return utils_i18n__WEBPACK_IMPORTED_MODULE_12__["t"].apply(void 0, [trans, lang].concat(args));
  };

  var app = Object(react__WEBPACK_IMPORTED_MODULE_7__["render"])(react__WEBPACK_IMPORTED_MODULE_7__["default"].createElement(components_app_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  if (managers[name] === undefined) managers[name] = new consent_manager__WEBPACK_IMPORTED_MODULE_9__["default"](conf);
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

/***/ "./scss/klaro.scss":
/*!*************************!*\
  !*** ./scss/klaro.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js?sourceMap!../../node_modules/sass-loader/dist/cjs.js?sourceMap!./klaro.scss */ "../node_modules/css-loader/dist/cjs.js?sourceMap!../node_modules/sass-loader/dist/cjs.js?sourceMap!./scss/klaro.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbGFyby93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8va2xhcm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZyZWV6aW5nLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwid2VicGFjazovL2tsYXJvLy4vc2Nzcy9rbGFyby5zY3NzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2N1cnJlbnQtZXhlY3V0aW5nLXNjcmlwdC9kaXN0L2N1cnJlbnRFeGVjdXRpbmdTY3JpcHQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL3ByZWFjdC9jb21wYXQvZGlzdC9jb21wYXQubW9kdWxlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvaG9va3MvZGlzdC9ob29rcy5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9hcHAtaXRlbS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL2NvbXBvbmVudHMvYXBwLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9hcHBzLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9jb25zZW50LW1vZGFsLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9jb25zZW50LW5vdGljZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL2NvbXBvbmVudHMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi9jb25zZW50LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi9rbGFyby5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3Njc3Mva2xhcm8uc2Nzcz8xNTA3Iiwid2VicGFjazovL2tsYXJvLy4vc3RvcmVzLmpzIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2NhLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9kZS55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvZWwueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2VuLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9lcy55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvZmkueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2ZyLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9oci55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvaHUueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2l0LnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9ubC55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvbm8ueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL3BsLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9yby55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvc3IueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL3NyX2N5cmwueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL3N2LnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy90ci55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi91dGlscy9jb25maWcuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi91dGlscy9jb29raWVzLmpzIiwid2VicGFjazovL2tsYXJvLy4vdXRpbHMvaTE4bi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3V0aWxzL21hcHMuanMiXSwibmFtZXMiOlsiQXBwSXRlbSIsInByb3BzIiwiY2hlY2tlZCIsIm9uVG9nZ2xlIiwibmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0IiwicmVxdWlyZWQiLCJvcHRPdXQiLCJwdXJwb3NlcyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImlkIiwicHVycG9zZXNUZXh0IiwibWFwIiwicHVycG9zZSIsImpvaW4iLCJvcHRPdXRUZXh0IiwicmVxdWlyZWRUZXh0IiwicHVycG9zZXNDb250ZW50IiwibGVuZ3RoIiwidGFiSW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkFwcCIsInN0YXRlIiwic2hvdyIsIm1hbmFnZXIiLCJjb25maXJtZWQiLCJwcmV2UHJvcHMiLCJzaG93U3RhdGUiLCJzZXRTdGF0ZSIsImNvbmZpZyIsInN0eWxlUHJlZml4IiwiaGlkZSIsIkFwcHMiLCJ3YXRjaCIsImNvbnNlbnRzIiwidW53YXRjaCIsIm9iaiIsInR5cGUiLCJkYXRhIiwiYXBwcyIsInRvZ2dsZSIsInZhbHVlIiwiYXBwIiwidXBkYXRlQ29uc2VudCIsInRvZ2dsZUFsbCIsImFwcEl0ZW1zIiwidG9nZ2xlQXBwIiwidG9nZ2xhYmxlQXBwcyIsImZpbHRlciIsImFsbERpc2FibGVkIiwiQ29uc2VudE1vZGFsIiwicmVzdG9yZVNhdmVkQ29uc2VudHMiLCJjb25maXJtaW5nIiwic2F2ZUFuZEhpZGUiLCJhY2NlcHRBbmRIaWRlIiwiZGVjbGluZUFuZEhpZGUiLCJsYW5nIiwibGFuZ3VhZ2UiLCJjbG9zZUxpbmsiLCJtdXN0Q29uc2VudCIsImRlY2xpbmVCdXR0b24iLCJoaWRlRGVjbGluZUFsbCIsImFjY2VwdEFsbEJ1dHRvbiIsImFjY2VwdEJ1dHRvbiIsImFjY2VwdEFsbCIsInBwVXJsIiwicHJpdmFjeVBvbGljeSIsInBwTGluayIsInBvd2VyZWRCeSIsIkNvbnNlbnROb3RpY2UiLCJzZXRDaGFuZ2VkQWxsIiwiY2hhbmdlZEFsbFZhbHVlIiwibW9kYWwiLCJjaGFuZ2VBbGwiLCJzYXZlQW5kQXBwbHlDb25zZW50cyIsInNldFRpbWVvdXQiLCJleGVjdXRlQnV0dG9uQ2xpY2tlZCIsImdldFB1cnBvc2VzIiwiY2hhbmdlc1RleHQiLCJzaG93TW9kYWwiLCJwcmV2ZW50RGVmYXVsdCIsImhpZGVNb2RhbCIsImNoYW5nZWQiLCJub3RpY2VJc1Zpc2libGUiLCJub05vdGljZSIsIkNsb3NlIiwiQ29uc2VudE1hbmFnZXIiLCJzdG9yZSIsInN0b3JlcyIsInN0b3JhZ2VNZXRob2QiLCJ1bmRlZmluZWQiLCJkZWZhdWx0Q29uc2VudHMiLCJzdGF0ZXMiLCJleGVjdXRlZE9uY2UiLCJ3YXRjaGVycyIsIlNldCIsImxvYWRDb25zZW50cyIsImFwcGx5Q29uc2VudHMiLCJzYXZlZENvbnNlbnRzIiwid2F0Y2hlciIsImhhcyIsImFkZCIsImZvckVhY2giLCJ1cGRhdGUiLCJtYXRjaGluZ0FwcHMiLCJjb25zZW50Iiwibm90aWZ5IiwiY29tcGxldGUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiZ2V0RGVmYXVsdENvbnNlbnQiLCJjb25zZW50RGF0YSIsImdldCIsIkpTT04iLCJwYXJzZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl9jaGVja0NvbnNlbnRzIiwic2F2ZUNvbnNlbnRzIiwidiIsImVuY29kZVVSSUNvbXBvbmVudCIsInN0cmluZ2lmeSIsInNldCIsImkiLCJnZXRDb25zZW50IiwidXBkYXRlQXBwRWxlbWVudHMiLCJ1cGRhdGVBcHBDb29raWVzIiwiY2FsbGJhY2siLCJvbmx5T25jZSIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbWVudCIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJkYXRhc2V0IiwiYXR0cnMiLCJ0YWdOYW1lIiwibmV3RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJ0ZXh0Iiwic3R5bGUiLCJjc3NUZXh0IiwiZGVmZXIiLCJhc3luYyIsInNyYyIsImluc2VydEJlZm9yZSIsInJlbW92ZUNoaWxkIiwiYXR0ciIsImF0dHJWYWx1ZSIsIm9yaWdpbmFsRGlzcGxheSIsImRpc3BsYXkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJlc2NhcGVSZWdleFN0ciIsInN0ciIsInJlcGxhY2UiLCJjb29raWVzIiwiZ2V0Q29va2llcyIsImNvb2tpZVBhdHRlcm4iLCJjb29raWVQYXRoIiwiY29va2llRG9tYWluIiwiQXJyYXkiLCJSZWdFeHAiLCJqIiwiY29va2llIiwibWF0Y2giLCJleGVjIiwiY29uc29sZSIsImRlYnVnIiwiZGVsZXRlQ29va2llIiwiY29va2llTmFtZSIsImNvb2tpZUV4cGlyZXNBZnRlckRheXMiLCJtb2R1bGUiLCJyZXF1aXJlIiwic2NyaXB0IiwiY3VycmVudFNjcmlwdCIsImN1cnJlbnRFeGVjdXRpbmdTY3JpcHQiLCJvcmlnaW5hbE9uTG9hZCIsIndpbmRvdyIsIm9ubG9hZCIsImNvbnZlcnRlZFRyYW5zbGF0aW9ucyIsImNvbnZlcnRUb01hcCIsInRyYW5zbGF0aW9ucyIsImNvbmZpZ05hbWUiLCJub0F1dG9Mb2FkIiwibWFuYWdlcnMiLCJpbml0aWFsaXplIiwiZ2V0RWxlbWVudElEIiwiZWxlbWVudElEIiwiZ2V0RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwiZ2V0VHJhbnNsYXRpb25zIiwidHJhbnMiLCJNYXAiLCJjbnQiLCJyZW5kZXJLbGFybyIsInNob3dDbnQiLCJnZXRNYW5hZ2VyIiwidHQiLCJhcmdzIiwicmVuZGVyIiwiY29uZiIsInZlcnNpb24iLCJWRVJTSU9OIiwiQ29va2llU3RvcmUiLCJnZXRDb29raWUiLCJzZXRDb29raWUiLCJMb2NhbFN0b3JhZ2VTdG9yZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwicmVtb3ZlSXRlbSIsImNhIiwiZGUiLCJlbCIsImVuIiwiZXMiLCJmaSIsImZyIiwiaHUiLCJociIsIml0IiwibmwiLCJubyIsInJvIiwic3IiLCJzcl9jeXJsIiwic3YiLCJ0ciIsInBsIiwiYXBwUHVycG9zZXMiLCJmcm9tIiwiY29va2llU3RyaW5ncyIsInNwbGl0IiwicmVnZXgiLCJjb29raWVTdHIiLCJwdXNoIiwiZGF5cyIsImRvbWFpbiIsImV4cGlyZXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJwYXRoIiwiZm9ybWF0IiwicmVzdCIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsInNwbGl0cyIsInMiLCJ0b1N0cmluZyIsIm0iLCJsZWZ0Iiwic3Vic3RyIiwiaW5kZXgiLCJuIiwicGFyc2VJbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsInJlc3VsdCIsImhnZXQiLCJkIiwiZGVmYXVsdFZhbHVlIiwia2wiLCJpc0FycmF5IiwiY3YiLCJwYXJhbXMiLCJkbSIsImVkIiwib3ZlcndyaXRlIiwiY2xvbmUiLCJhc3NpZ24iLCJFcnJvciIsImNvbnN0cnVjdG9yIiwiZHZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDSkEsZUFBZSxtQkFBTyxDQUFDLDhFQUF3Qjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNOQSxzQkFBc0IsbUJBQU8sQ0FBQyw4RkFBZ0M7QUFDOUQsYUFBYSxtQkFBTyxDQUFDLHNGQUE0QjtBQUNqRCwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQ0FBaUMsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQ0FBaUMsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQ0FBaUMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUFBOztBQUFBO0FBb0IzQyx5QkFBaUJPLEVBQUUsQ0FBQ3JLLElBQUgsRUFBakIsOEhBQTJCO0FBQUEsVUFBakJDLEdBQWlCO0FBQ3ZCLFVBQU1yRSxLQUFLLEdBQUd5TyxFQUFFLENBQUNqSyxHQUFILENBQU9ILEdBQVAsQ0FBZDtBQUNBLFVBQU0wSyxNQUFNLEdBQUdiLENBQUMsQ0FBQzFKLEdBQUYsQ0FBTUgsR0FBTixDQUFmOztBQUNBLFVBQUksQ0FBQzZKLENBQUMsQ0FBQ3ZLLEdBQUYsQ0FBTVUsR0FBTixDQUFMLEVBQWdCO0FBQ1p1SyxjQUFNLENBQUNWLENBQUQsRUFBSTdKLEdBQUosRUFBU3JFLEtBQVQsQ0FBTjtBQUNILE9BRkQsTUFHSyxJQUFJQSxLQUFLLFlBQVkySixHQUFqQixJQUF3Qm9GLE1BQU0sWUFBWXBGLEdBQTlDLEVBQWtEO0FBQ25EdUUsU0FBQyxDQUFDakosR0FBRixDQUFNWixHQUFOLEVBQVdQLE1BQU0sQ0FBQ2lMLE1BQUQsRUFBUy9PLEtBQVQsRUFBZ0IwTyxTQUFoQixFQUEyQkMsS0FBM0IsQ0FBakI7QUFDSCxPQUZJLE1BR0E7QUFDRCxZQUFJLENBQUNELFNBQUwsRUFDSTtBQUNKRSxjQUFNLENBQUNWLENBQUQsRUFBSTdKLEdBQUosRUFBU3JFLEtBQVQsQ0FBTjtBQUNIO0FBQ0o7QUFsQzBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBbUMzQyxTQUFPa08sQ0FBUDtBQUNILEMiLCJmaWxlIjoia2xhcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrbGFyb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrbGFyb1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgJiYgaXQgIT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoaXQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2hhckF0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUnKS5jaGFyQXQ7XG5cbi8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChTLCBpbmRleCwgdW5pY29kZSkge1xuICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGNoYXJBdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgJyArIChuYW1lID8gbmFtZSArICcgJyA6ICcnKSArICdpbnZvY2F0aW9uJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gKCFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCkgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0LCB2YWx1ZTtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gIGlmIChpdGVyYXRvck1ldGhvZCAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvck1ldGhvZC5jYWxsKE8pO1xuICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgIHJlc3VsdCA9IG5ldyBDKCk7XG4gICAgZm9yICg7IShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNilcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuICAvLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc3XG4gIHJldHVybiBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gYXJyYXkuY29uc3RydWN0b3IgPSB7fTtcbiAgICBjb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGZvbzogMSB9O1xuICAgIH07XG4gICAgcmV0dXJuIGFycmF5W01FVEhPRF9OQU1FXShCb29sZWFuKS5mb28gIT09IDE7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGNhY2hlID0ge307XG5cbnZhciB0aHJvd2VyID0gZnVuY3Rpb24gKGl0KSB7IHRocm93IGl0OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgb3B0aW9ucykge1xuICBpZiAoaGFzKGNhY2hlLCBNRVRIT0RfTkFNRSkpIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV07XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICB2YXIgQUNDRVNTT1JTID0gaGFzKG9wdGlvbnMsICdBQ0NFU1NPUlMnKSA/IG9wdGlvbnMuQUNDRVNTT1JTIDogZmFsc2U7XG4gIHZhciBhcmd1bWVudDAgPSBoYXMob3B0aW9ucywgMCkgPyBvcHRpb25zWzBdIDogdGhyb3dlcjtcbiAgdmFyIGFyZ3VtZW50MSA9IGhhcyhvcHRpb25zLCAxKSA/IG9wdGlvbnNbMV0gOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXSA9ICEhbWV0aG9kICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKEFDQ0VTU09SUyAmJiAhREVTQ1JJUFRPUlMpIHJldHVybiB0cnVlO1xuICAgIHZhciBPID0geyBsZW5ndGg6IC0xIH07XG5cbiAgICBpZiAoQUNDRVNTT1JTKSBkZWZpbmVQcm9wZXJ0eShPLCAxLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogdGhyb3dlciB9KTtcbiAgICBlbHNlIE9bMV0gPSAxO1xuXG4gICAgbWV0aG9kLmNhbGwoTywgYXJndW1lbnQwLCBhcmd1bWVudDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHZhciByZXR1cm5NZXRob2QgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXR1cm5NZXRob2QuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciBjYWxsZWQgPSAwO1xuICB2YXIgaXRlcmF0b3JXaXRoUmV0dXJuID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7IGRvbmU6ICEhY2FsbGVkKysgfTtcbiAgICB9LFxuICAgICdyZXR1cm4nOiBmdW5jdGlvbiAoKSB7XG4gICAgICBTQUZFX0NMT1NJTkcgPSB0cnVlO1xuICAgIH1cbiAgfTtcbiAgaXRlcmF0b3JXaXRoUmV0dXJuW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShpdGVyYXRvcldpdGhSZXR1cm4sIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIFNLSVBfQ0xPU0lORykge1xuICBpZiAoIVNLSVBfQ0xPU0lORyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBJVEVSQVRJT05fU1VQUE9SVCA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICBvYmplY3RbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7IGRvbmU6IElURVJBVElPTl9TVVBQT1JUID0gdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgZXhlYyhvYmplY3QpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBJVEVSQVRJT05fU1VQUE9SVDtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZS1hbGwnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhJykuZmFzdEtleTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgaW50ZXJuYWxTdGF0ZUdldHRlckZvciA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBDT05TVFJVQ1RPUl9OQU1FKTtcbiAgICAgIHNldEludGVybmFsU3RhdGUodGhhdCwge1xuICAgICAgICB0eXBlOiBDT05TVFJVQ1RPUl9OQU1FLFxuICAgICAgICBpbmRleDogY3JlYXRlKG51bGwpLFxuICAgICAgICBmaXJzdDogdW5kZWZpbmVkLFxuICAgICAgICBsYXN0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH0pO1xuICAgICAgaWYgKCFERVNDUklQVE9SUykgdGhhdC5zaXplID0gMDtcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB0aGF0LCBJU19NQVApO1xuICAgIH0pO1xuXG4gICAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuXG4gICAgdmFyIGRlZmluZSA9IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgIHZhciBwcmV2aW91cywgaW5kZXg7XG4gICAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUubGFzdCA9IGVudHJ5ID0ge1xuICAgICAgICAgIGluZGV4OiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzID0gc3RhdGUubGFzdCxcbiAgICAgICAgICBuZXh0OiB1bmRlZmluZWQsXG4gICAgICAgICAgcmVtb3ZlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFzdGF0ZS5maXJzdCkgc3RhdGUuZmlyc3QgPSBlbnRyeTtcbiAgICAgICAgaWYgKHByZXZpb3VzKSBwcmV2aW91cy5uZXh0ID0gZW50cnk7XG4gICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZSsrO1xuICAgICAgICBlbHNlIHRoYXQuc2l6ZSsrO1xuICAgICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHN0YXRlLmluZGV4W2luZGV4XSA9IGVudHJ5O1xuICAgICAgfSByZXR1cm4gdGhhdDtcbiAgICB9O1xuXG4gICAgdmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgIC8vIGZhc3QgY2FzZVxuICAgICAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICAgICAgdmFyIGVudHJ5O1xuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiBzdGF0ZS5pbmRleFtpbmRleF07XG4gICAgICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgICAgIGZvciAoZW50cnkgPSBzdGF0ZS5maXJzdDsgZW50cnk7IGVudHJ5ID0gZW50cnkubmV4dCkge1xuICAgICAgICBpZiAoZW50cnkua2V5ID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgICB2YXIgZGF0YSA9IHN0YXRlLmluZGV4O1xuICAgICAgICB2YXIgZW50cnkgPSBzdGF0ZS5maXJzdDtcbiAgICAgICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnByZXZpb3VzKSBlbnRyeS5wcmV2aW91cyA9IGVudHJ5LnByZXZpb3VzLm5leHQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaW5kZXhdO1xuICAgICAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5maXJzdCA9IHN0YXRlLmxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZSA9IDA7XG4gICAgICAgIGVsc2UgdGhhdC5zaXplID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGF0KTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uZXh0O1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucHJldmlvdXM7XG4gICAgICAgICAgZGVsZXRlIHN0YXRlLmluZGV4W2VudHJ5LmluZGV4XTtcbiAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wcmV2aW91cyA9IHByZXY7XG4gICAgICAgICAgaWYgKHN0YXRlLmZpcnN0ID09IGVudHJ5KSBzdGF0ZS5maXJzdCA9IG5leHQ7XG4gICAgICAgICAgaWYgKHN0YXRlLmxhc3QgPT0gZW50cnkpIHN0YXRlLmxhc3QgPSBwcmV2O1xuICAgICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZS0tO1xuICAgICAgICAgIGVsc2UgdGhhdC5zaXplLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICAgICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm5leHQgOiBzdGF0ZS5maXJzdCkge1xuICAgICAgICAgIGJvdW5kRnVuY3Rpb24oZW50cnkudmFsdWUsIGVudHJ5LmtleSwgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnJlbW92ZWQpIGVudHJ5ID0gZW50cnkucHJldmlvdXM7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIElTX01BUCA/IHtcbiAgICAgIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudmFsdWU7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSA6IHtcbiAgICAgIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eShDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQywgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQKSB7XG4gICAgdmFyIElURVJBVE9SX05BTUUgPSBDT05TVFJVQ1RPUl9OQU1FICsgJyBJdGVyYXRvcic7XG4gICAgdmFyIGdldEludGVybmFsQ29sbGVjdGlvblN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihDT05TVFJVQ1RPUl9OQU1FKTtcbiAgICB2YXIgZ2V0SW50ZXJuYWxJdGVyYXRvclN0YXRlID0gaW50ZXJuYWxTdGF0ZUdldHRlckZvcihJVEVSQVRPUl9OQU1FKTtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgZGVmaW5lSXRlcmF0b3IoQywgQ09OU1RSVUNUT1JfTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgICAgdHlwZTogSVRFUkFUT1JfTkFNRSxcbiAgICAgICAgdGFyZ2V0OiBpdGVyYXRlZCxcbiAgICAgICAgc3RhdGU6IGdldEludGVybmFsQ29sbGVjdGlvblN0YXRlKGl0ZXJhdGVkKSxcbiAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgbGFzdDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUodGhpcyk7XG4gICAgICB2YXIga2luZCA9IHN0YXRlLmtpbmQ7XG4gICAgICB2YXIgZW50cnkgPSBzdGF0ZS5sYXN0O1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucmVtb3ZlZCkgZW50cnkgPSBlbnRyeS5wcmV2aW91cztcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXN0YXRlLnRhcmdldCB8fCAhKHN0YXRlLmxhc3QgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubmV4dCA6IHN0YXRlLnN0YXRlLmZpcnN0KSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICBzdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHsgdmFsdWU6IGVudHJ5LmtleSwgZG9uZTogZmFsc2UgfTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogZW50cnkudmFsdWUsIGRvbmU6IGZhbHNlIH07XG4gICAgICByZXR1cm4geyB2YWx1ZTogW2VudHJ5LmtleSwgZW50cnkudmFsdWVdLCBkb25lOiBmYWxzZSB9O1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhDT05TVFJVQ1RPUl9OQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIEludGVybmFsTWV0YWRhdGFNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtbWV0YWRhdGEnKTtcbnZhciBpdGVyYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdGUnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUsIHdyYXBwZXIsIGNvbW1vbikge1xuICB2YXIgSVNfTUFQID0gQ09OU1RSVUNUT1JfTkFNRS5pbmRleE9mKCdNYXAnKSAhPT0gLTE7XG4gIHZhciBJU19XRUFLID0gQ09OU1RSVUNUT1JfTkFNRS5pbmRleE9mKCdXZWFrJykgIT09IC0xO1xuICB2YXIgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnO1xuICB2YXIgTmF0aXZlQ29uc3RydWN0b3IgPSBnbG9iYWxbQ09OU1RSVUNUT1JfTkFNRV07XG4gIHZhciBOYXRpdmVQcm90b3R5cGUgPSBOYXRpdmVDb25zdHJ1Y3RvciAmJiBOYXRpdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHZhciBDb25zdHJ1Y3RvciA9IE5hdGl2ZUNvbnN0cnVjdG9yO1xuICB2YXIgZXhwb3J0ZWQgPSB7fTtcblxuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciBuYXRpdmVNZXRob2QgPSBOYXRpdmVQcm90b3R5cGVbS0VZXTtcbiAgICByZWRlZmluZShOYXRpdmVQcm90b3R5cGUsIEtFWSxcbiAgICAgIEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgICBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSA6IEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyBmYWxzZSA6IG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyB1bmRlZmluZWQgOiBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChrZXkpID8gZmFsc2UgOiBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBuYXRpdmVNZXRob2QuY2FsbCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgaWYgKGlzRm9yY2VkKENPTlNUUlVDVE9SX05BTUUsIHR5cGVvZiBOYXRpdmVDb25zdHJ1Y3RvciAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBOYXRpdmVQcm90b3R5cGUuZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIENvbnN0cnVjdG9yID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpO1xuICAgIEludGVybmFsTWV0YWRhdGFNb2R1bGUuUkVRVUlSRUQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzRm9yY2VkKENPTlNUUlVDVE9SX05BTUUsIHRydWUpKSB7XG4gICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgIHZhciBIQVNOVF9DSEFJTklORyA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9IGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHsgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGl0ZXJhYmxlKTsgfSk7XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcblxuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQ29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uIChkdW1teSwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZShkdW1teSwgQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLCBkdW1teSwgQ29uc3RydWN0b3IpO1xuICAgICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgdGhhdCwgSVNfTUFQKTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE5hdGl2ZVByb3RvdHlwZTtcbiAgICAgIE5hdGl2ZVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cblxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuXG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBOYXRpdmVQcm90b3R5cGUuY2xlYXIpIGRlbGV0ZSBOYXRpdmVQcm90b3R5cGUuY2xlYXI7XG4gIH1cblxuICBleHBvcnRlZFtDT05TVFJVQ1RPUl9OQU1FXSA9IENvbnN0cnVjdG9yO1xuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IENvbnN0cnVjdG9yICE9IE5hdGl2ZUNvbnN0cnVjdG9yIH0sIGV4cG9ydGVkKTtcblxuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXModGFyZ2V0LCBrZXkpKSBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gIH1cbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBGKCkgeyAvKiBlbXB0eSAqLyB9XG4gIEYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gbnVsbDtcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKTtcblxudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcbiAgICBzd2l0Y2ggKEtJTkQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG4gIH07XG5cbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcbiAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlSXRlcmF0b3IgPSBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG4gICAgfHwgREVGQVVMVCAmJiBJdGVyYWJsZVByb3RvdHlwZVtERUZBVUxUXTtcbiAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcbiAgdmFyIGFueU5hdGl2ZUl0ZXJhdG9yID0gTkFNRSA9PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcbiAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRkFVTFQgPT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG4gICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmF0aXZlSXRlcmF0b3IuY2FsbCh0aGlzKTsgfTtcbiAgfVxuXG4gIC8vIGRlZmluZSBpdGVyYXRvclxuICBpZiAoKCFJU19QVVJFIHx8IEZPUkNFRCkgJiYgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdICE9PSBkZWZhdWx0SXRlcmF0b3IpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IpO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcbiAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgcmVkZWZpbmUoSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHZhciBTeW1ib2wgPSBwYXRoLlN5bWJvbCB8fCAocGF0aC5TeW1ib2wgPSB7fSk7XG4gIGlmICghaGFzKFN5bWJvbCwgTkFNRSkpIGRlZmluZVByb3BlcnR5KFN5bWJvbCwgTkFNRSwge1xuICAgIHZhbHVlOiB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYoTkFNRSlcbiAgfSk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnM7XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgdmVyc2lvbiA9IG1hdGNoWzBdICsgbWF0Y2hbMV07XG59IGVsc2UgaWYgKHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9IG1hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbiAmJiArdmVyc2lvbjtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLm5vVGFyZ2V0R2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYycpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxudmFyIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gI3JlcGxhY2UgbmVlZHMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbmFtZWQgZ3JvdXBzLlxuICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICB2YXIgcmUgPSAvLi87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHJlc3VsdC5ncm91cHMgPSB7IGE6ICc3JyB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIHJldHVybiAnJy5yZXBsYWNlKHJlLCAnJDxhPicpICE9PSAnNyc7XG59KTtcblxuLy8gSUUgPD0gMTEgcmVwbGFjZXMgJDAgd2l0aCB0aGUgd2hvbGUgbWF0Y2gsIGFzIGlmIGl0IHdhcyAkJlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjAyNDY2Ni9nZXR0aW5nLWllLXRvLXJlcGxhY2UtYS1yZWdleC13aXRoLXRoZS1saXRlcmFsLXN0cmluZy0wXG52YXIgUkVQTEFDRV9LRUVQU18kMCA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnYScucmVwbGFjZSgvLi8sICckMCcpID09PSAnJDAnO1xufSkoKTtcblxudmFyIFJFUExBQ0UgPSB3ZWxsS25vd25TeW1ib2woJ3JlcGxhY2UnKTtcbi8vIFNhZmFyaSA8PSAxMy4wLjMoPykgc3Vic3RpdHV0ZXMgbnRoIGNhcHR1cmUgd2hlcmUgbj5tIHdpdGggYW4gZW1wdHkgc3RyaW5nXG52YXIgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAoLy4vW1JFUExBQ0VdKSB7XG4gICAgcmV0dXJuIC8uL1tSRVBMQUNFXSgnYScsICckMCcpID09PSAnJztcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciByZSA9IC8oPzopLztcbiAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgdmFyIHJlc3VsdCA9ICdhYicuc3BsaXQocmUpO1xuICByZXR1cm4gcmVzdWx0Lmxlbmd0aCAhPT0gMiB8fCByZXN1bHRbMF0gIT09ICdhJyB8fCByZXN1bHRbMV0gIT09ICdiJztcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYywgc2hhbSkge1xuICB2YXIgU1lNQk9MID0gd2VsbEtub3duU3ltYm9sKEtFWSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19TWU1CT0wgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN0cmluZyBtZXRob2RzIGNhbGwgc3ltYm9sLW5hbWVkIFJlZ0VwIG1ldGhvZHNcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSk7XG5cbiAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIFN5bWJvbC1uYW1lZCBSZWdFeHAgbWV0aG9kcyBjYWxsIC5leGVjXG4gICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICB2YXIgcmUgPSAvYS87XG5cbiAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAvLyBXZSBjYW4ndCB1c2UgcmVhbCByZWdleCBoZXJlIHNpbmNlIGl0IGNhdXNlcyBkZW9wdGltaXphdGlvblxuICAgICAgLy8gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gaW4gVjhcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMDZcbiAgICAgIHJlID0ge307XG4gICAgICAvLyBSZWdFeHBbQEBzcGxpdF0gZG9lc24ndCBjYWxsIHRoZSByZWdleCdzIGV4ZWMgbWV0aG9kLCBidXQgZmlyc3QgY3JlYXRlc1xuICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgIHJlLmNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICByZS5mbGFncyA9ICcnO1xuICAgICAgcmVbU1lNQk9MXSA9IC8uL1tTWU1CT0xdO1xuICAgIH1cblxuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcblxuICAgIHJlW1NZTUJPTF0oJycpO1xuICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgfSk7XG5cbiAgaWYgKFxuICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgKEtFWSA9PT0gJ3JlcGxhY2UnICYmICEoXG4gICAgICBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyAmJlxuICAgICAgUkVQTEFDRV9LRUVQU18kMCAmJlxuICAgICAgIVJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFXG4gICAgKSkgfHxcbiAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICkge1xuICAgIHZhciBuYXRpdmVSZWdFeHBNZXRob2QgPSAvLi9bU1lNQk9MXTtcbiAgICB2YXIgbWV0aG9kcyA9IGV4ZWMoU1lNQk9MLCAnJ1tLRVldLCBmdW5jdGlvbiAobmF0aXZlTWV0aG9kLCByZWdleHAsIHN0ciwgYXJnMiwgZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gcmVnZXhwRXhlYykge1xuICAgICAgICBpZiAoREVMRUdBVEVTX1RPX1NZTUJPTCAmJiAhZm9yY2VTdHJpbmdNZXRob2QpIHtcbiAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgLy8gV2UgYXZvaWQgaXQgYnkgZGlyZWN0bHkgY2FsbGluZyB0aGUgbmF0aXZlIEBAbWV0aG9kIG1ldGhvZC5cbiAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZU1ldGhvZC5jYWxsKHN0ciwgcmVnZXhwLCBhcmcyKSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICB9LCB7XG4gICAgICBSRVBMQUNFX0tFRVBTXyQwOiBSRVBMQUNFX0tFRVBTXyQwLFxuICAgICAgUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkU6IFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFXG4gICAgfSk7XG4gICAgdmFyIHN0cmluZ01ldGhvZCA9IG1ldGhvZHNbMF07XG4gICAgdmFyIHJlZ2V4TWV0aG9kID0gbWV0aG9kc1sxXTtcblxuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyaW5nTWV0aG9kKTtcbiAgICByZWRlZmluZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzaGFtKSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoUmVnRXhwLnByb3RvdHlwZVtTWU1CT0xdLCAnc2hhbScsIHRydWUpO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnRvU3RyaW5nO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgRlJFRVpJTkcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnJlZXppbmcnKTtcblxudmFyIE1FVEFEQVRBID0gdWlkKCdtZXRhJyk7XG52YXIgaWQgPSAwO1xuXG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxudmFyIHNldE1ldGFkYXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIGRlZmluZVByb3BlcnR5KGl0LCBNRVRBREFUQSwgeyB2YWx1ZToge1xuICAgIG9iamVjdElEOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3ZWFrRGF0YToge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG5cbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIGEgcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQURBVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGFkYXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBREFUQV0ub2JqZWN0SUQ7XG59O1xuXG52YXIgZ2V0V2Vha0RhdGEgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQURBVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGFkYXRhKGl0KTtcbiAgLy8gcmV0dXJuIHRoZSBzdG9yZSBvZiB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBREFUQV0ud2Vha0RhdGE7XG59O1xuXG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpJTkcgJiYgbWV0YS5SRVFVSVJFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEFEQVRBKSkgc2V0TWV0YWRhdGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBSRVFVSVJFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWtEYXRhOiBnZXRXZWFrRGF0YSxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5oaWRkZW5LZXlzW01FVEFEQVRBXSA9IHRydWU7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b3R5cGVbSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcblxuLy8gYElzUmVnRXhwYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcmVnZXhwXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjbGFzc29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG5cbnZhciBSZXN1bHQgPSBmdW5jdGlvbiAoc3RvcHBlZCwgcmVzdWx0KSB7XG4gIHRoaXMuc3RvcHBlZCA9IHN0b3BwZWQ7XG4gIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xufTtcblxudmFyIGl0ZXJhdGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZm4sIHRoYXQsIEFTX0VOVFJJRVMsIElTX0lURVJBVE9SKSB7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChmbiwgdGhhdCwgQVNfRU5UUklFUyA/IDIgOiAxKTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IEFTX0VOVFJJRVNcbiAgICAgICAgICA/IGJvdW5kRnVuY3Rpb24oYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pXG4gICAgICAgICAgOiBib3VuZEZ1bmN0aW9uKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgICAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG4gICAgfVxuICAgIGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpO1xuICB9XG5cbiAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gIHdoaWxlICghKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lKSB7XG4gICAgcmVzdWx0ID0gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgYm91bmRGdW5jdGlvbiwgc3RlcC52YWx1ZSwgQVNfRU5UUklFUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT0gJ29iamVjdCcgJiYgcmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgfSByZXR1cm4gbmV3IFJlc3VsdChmYWxzZSk7XG59O1xuXG5pdGVyYXRlLnN0b3AgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIHJlc3VsdCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBmYWxzZTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxuaWYgKEl0ZXJhdG9yUHJvdG90eXBlID09IHVuZGVmaW5lZCkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbmlmICghSVNfUFVSRSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICByZXR1cm4gIVN0cmluZyhTeW1ib2woKSk7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG52YXIgbmF0aXZlQXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxubW9kdWxlLmV4cG9ydHMgPSAhbmF0aXZlQXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmIG5hdGl2ZUFzc2lnbih7IGI6IDEgfSwgbmF0aXZlQXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAqL1xuICAgIGFjdGl2ZVhEb2N1bWVudCA9IGRvY3VtZW50LmRvbWFpbiAmJiBuZXcgQWN0aXZlWE9iamVjdCgnaHRtbGZpbGUnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogaWdub3JlICovIH1cbiAgTnVsbFByb3RvT2JqZWN0ID0gYWN0aXZlWERvY3VtZW50ID8gTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWChhY3RpdmVYRG9jdW1lbnQpIDogTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lKCk7XG4gIHZhciBsZW5ndGggPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkgZGVsZXRlIE51bGxQcm90b09iamVjdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2xlbmd0aF1dO1xuICByZXR1cm4gTnVsbFByb3RvT2JqZWN0KCk7XG59O1xuXG5oaWRkZW5LZXlzW0lFX1BST1RPXSA9IHRydWU7XG5cbi8vIGBPYmplY3QuY3JlYXRlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZURlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nXG4gICAgPyBnZXRXaW5kb3dOYW1lcyhpdClcbiAgICA6IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KGl0KSk7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldDtcbiAgICBzZXR0ZXIuY2FsbCh0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlci5jYWxsKE8sIHByb3RvKTtcbiAgICBlbHNlIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgcmV0dXJuIE87XG4gIH07XG59KCkgOiB1bmRlZmluZWQpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyB7fS50b1N0cmluZyA6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9jbGFzc29mLXJhdycpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWSB8fCBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWTtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IHJlZ2V4cEZsYWdzLmNhbGwocmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKCd5JywgJycpO1xuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gU3RyaW5nKHN0cikuc2xpY2UocmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIHN0cltyZS5sYXN0SW5kZXggLSAxXSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL2ZhaWxzJyk7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yLFxuLy8gc28gd2UgdXNlIGFuIGludGVybWVkaWF0ZSBmdW5jdGlvbi5cbmZ1bmN0aW9uIFJFKHMsIGYpIHtcbiAgcmV0dXJuIFJlZ0V4cChzLCBmKTtcbn1cblxuZXhwb3J0cy5VTlNVUFBPUlRFRF9ZID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvclxuICB2YXIgcmUgPSBSRSgnYScsICd5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdhYmNkJykgIT0gbnVsbDtcbn0pO1xuXG5leHBvcnRzLkJST0tFTl9DQVJFVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzczNjg3XG4gIHZhciByZSA9IFJFKCdecicsICdneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnc3RyJykgIT0gbnVsbDtcbn0pO1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT05TVFJVQ1RPUl9OQU1FKSB7XG4gIHZhciBDb25zdHJ1Y3RvciA9IGdldEJ1aWx0SW4oQ09OU1RSVUNUT1JfTkFNRSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmIENvbnN0cnVjdG9yICYmICFDb25zdHJ1Y3RvcltTUEVDSUVTXSkge1xuICAgIGRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBTUEVDSUVTLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgICB9KTtcbiAgfVxufTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjYuNCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBTcGVjaWVzQ29uc3RydWN0b3JgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgY29kZVBvaW50QXQsIGF0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgcG9zKSB7XG4gICAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIHZhciBwb3NpdGlvbiA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBmaXJzdCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbik7XG4gICAgcmV0dXJuIGZpcnN0IDwgMHhEODAwIHx8IGZpcnN0ID4gMHhEQkZGIHx8IHBvc2l0aW9uICsgMSA9PT0gc2l6ZVxuICAgICAgfHwgKHNlY29uZCA9IFMuY2hhckNvZGVBdChwb3NpdGlvbiArIDEpKSA8IDB4REMwMCB8fCBzZWNvbmQgPiAweERGRkZcbiAgICAgICAgPyBDT05WRVJUX1RPX1NUUklORyA/IFMuY2hhckF0KHBvc2l0aW9uKSA6IGZpcnN0XG4gICAgICAgIDogQ09OVkVSVF9UT19TVFJJTkcgPyBTLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIDIpIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXIoYXJndW1lbnQpLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsInZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAmJiAhU3ltYm9sLnNoYW1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbmV4cG9ydHMuZiA9IHdlbGxLbm93blN5bWJvbDtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhcyhTeW1ib2wsIG5hbWUpKSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgZWxzZSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFID0gd2VsbEtub3duU3ltYm9sKCdpc0NvbmNhdFNwcmVhZGFibGUnKTtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjtcbnZhciBNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJztcblxuLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4vLyBkZW9wdGltaXphdGlvbiBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3OVxudmFyIElTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgPSBWOF9WRVJTSU9OID49IDUxIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuICBhcnJheVtJU19DT05DQVRfU1BSRUFEQUJMRV0gPSBmYWxzZTtcbiAgcmV0dXJuIGFycmF5LmNvbmNhdCgpWzBdICE9PSBhcnJheTtcbn0pO1xuXG52YXIgU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnY29uY2F0Jyk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFTUEVDSUVTX1NVUFBPUlQ7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuY29uY2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgY29uY2F0OiBmdW5jdGlvbiBjb25jYXQoYXJnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gdG9MZW5ndGgoRS5sZW5ndGgpO1xuICAgICAgICBpZiAobiArIGxlbiA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobiA+PSBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRmaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZmlsdGVyO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbi8vIGBBcnJheS5pc0FycmF5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmlzYXJyYXlcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUgfSwge1xuICBpc0FycmF5OiBpc0FycmF5XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlbWFwcGVkYXJndW1lbnRzb2JqZWN0XG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVKb2luID0gW10uam9pbjtcblxudmFyIEVTM19TVFJJTkdTID0gSW5kZXhlZE9iamVjdCAhPSBPYmplY3Q7XG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmpvaW5cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEVTM19TVFJJTkdTIHx8ICFTVFJJQ1RfTUVUSE9EIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbi5jYWxsKHRvSW5kZXhlZE9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRtYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykubWFwO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcbi8vIEZGNDktIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ3NsaWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnc2xpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcbnZhciBuYXRpdmVTbGljZSA9IFtdLnNsaWNlO1xudmFyIG1heCA9IE1hdGgubWF4O1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zbGljZVxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgc2xpY2U6IGZ1bmN0aW9uIHNsaWNlKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBrID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW5ndGgpO1xuICAgIHZhciBmaW4gPSB0b0Fic29sdXRlSW5kZXgoZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQsIGxlbmd0aCk7XG4gICAgLy8gaW5saW5lIGBBcnJheVNwZWNpZXNDcmVhdGVgIGZvciB1c2FnZSBuYXRpdmUgYEFycmF5I3NsaWNlYCB3aGVyZSBpdCdzIHBvc3NpYmxlXG4gICAgdmFyIENvbnN0cnVjdG9yLCByZXN1bHQsIG47XG4gICAgaWYgKGlzQXJyYXkoTykpIHtcbiAgICAgIENvbnN0cnVjdG9yID0gTy5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIENvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBpc0FycmF5KENvbnN0cnVjdG9yLnByb3RvdHlwZSkpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmIChpc09iamVjdChDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSBDb25zdHJ1Y3RvcltTUEVDSUVTXTtcbiAgICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBudWxsKSBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlU2xpY2UuY2FsbChPLCBrLCBmaW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgPSBuZXcgKENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQgPyBBcnJheSA6IENvbnN0cnVjdG9yKShtYXgoZmluIC0gaywgMCkpO1xuICAgIGZvciAobiA9IDA7IGsgPCBmaW47IGsrKywgbisrKSBpZiAoayBpbiBPKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIG4sIE9ba10pO1xuICAgIHJlc3VsdC5sZW5ndGggPSBuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBuYXRpdmVEYXRlVG9TdHJpbmcgPSBEYXRlUHJvdG90eXBlW1RPX1NUUklOR107XG52YXIgZ2V0VGltZSA9IERhdGVQcm90b3R5cGUuZ2V0VGltZTtcblxuLy8gYERhdGUucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAobmV3IERhdGUoTmFOKSArICcnICE9IElOVkFMSURfREFURSkge1xuICByZWRlZmluZShEYXRlUHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciB2YWx1ZSA9IGdldFRpbWUuY2FsbCh0aGlzKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IG5hdGl2ZURhdGVUb1N0cmluZy5jYWxsKHRoaXMpIDogSU5WQUxJRF9EQVRFO1xuICB9KTtcbn1cbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZyA9IEZ1bmN0aW9uUHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyBGdW5jdGlvbiBpbnN0YW5jZXMgYC5uYW1lYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24taW5zdGFuY2VzLW5hbWVcbmlmIChERVNDUklQVE9SUyAmJiAhKE5BTUUgaW4gRnVuY3Rpb25Qcm90b3R5cGUpKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcuY2FsbCh0aGlzKS5tYXRjaChuYW1lUkUpWzFdO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb2xsZWN0aW9uJyk7XG52YXIgY29sbGVjdGlvblN0cm9uZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyBgTWFwYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbWFwLW9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gY29sbGVjdGlvbignTWFwJywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGluaXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCBjb2xsZWN0aW9uU3Ryb25nKTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE9iamVjdC5hc3NpZ24gIT09IGFzc2lnbiB9LCB7XG4gIGFzc2lnbjogYXNzaWduXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGNyZWF0ZTogY3JlYXRlXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnR5OiBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZS5mXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoMSk7IH0pO1xudmFyIEZPUkNFRCA9ICFERVNDUklQVE9SUyB8fCBGQUlMU19PTl9QUklNSVRJVkVTO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSW5kZXhlZE9iamVjdChpdCksIGtleSk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3QpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICAgIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgICB2YXIga2V5cyA9IG93bktleXMoTyk7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGtleSwgZGVzY3JpcHRvcjtcbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiBpbmRleCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBrZXkgPSBrZXlzW2luZGV4KytdKTtcbiAgICAgIGlmIChkZXNjcmlwdG9yICE9PSB1bmRlZmluZWQpIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0UHJvdG90eXBlT2YoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRkFJTFNfT05fUFJJTUlUSVZFUywgc2hhbTogIUNPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiB9LCB7XG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiBuYXRpdmVHZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVLZXlzKDEpOyB9KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXNldC1wcm90b3R5cGUtb2YnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2ZcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgc2V0UHJvdG90eXBlT2Y6IHNldFByb3RvdHlwZU9mXG59KTtcbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nJyk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbmlmICghVE9fU1RSSU5HX1RBR19TVVBQT1JUKSB7XG4gIHJlZGVmaW5lKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIHRvU3RyaW5nLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKS5mO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xudmFyIGdldEZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHNldEludGVybmFsU3RhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKS5zZXQ7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgTUFUQ0ggPSB3ZWxsS25vd25TeW1ib2woJ21hdGNoJyk7XG52YXIgTmF0aXZlUmVnRXhwID0gZ2xvYmFsLlJlZ0V4cDtcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBOYXRpdmVSZWdFeHAucHJvdG90eXBlO1xudmFyIHJlMSA9IC9hL2c7XG52YXIgcmUyID0gL2EvZztcblxuLy8gXCJuZXdcIiBzaG91bGQgY3JlYXRlIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdcbnZhciBDT1JSRUNUX05FVyA9IG5ldyBOYXRpdmVSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWTtcblxudmFyIEZPUkNFRCA9IERFU0NSSVBUT1JTICYmIGlzRm9yY2VkKCdSZWdFeHAnLCAoIUNPUlJFQ1RfTkVXIHx8IFVOU1VQUE9SVEVEX1kgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZTJbTUFUQ0hdID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiBOYXRpdmVSZWdFeHAocmUxKSAhPSByZTEgfHwgTmF0aXZlUmVnRXhwKHJlMikgPT0gcmUyIHx8IE5hdGl2ZVJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKTtcblxuLy8gYFJlZ0V4cGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC1jb25zdHJ1Y3RvclxuaWYgKEZPUkNFRCkge1xuICB2YXIgUmVnRXhwV3JhcHBlciA9IGZ1bmN0aW9uIFJlZ0V4cChwYXR0ZXJuLCBmbGFncykge1xuICAgIHZhciB0aGlzSXNSZWdFeHAgPSB0aGlzIGluc3RhbmNlb2YgUmVnRXhwV3JhcHBlcjtcbiAgICB2YXIgcGF0dGVybklzUmVnRXhwID0gaXNSZWdFeHAocGF0dGVybik7XG4gICAgdmFyIGZsYWdzQXJlVW5kZWZpbmVkID0gZmxhZ3MgPT09IHVuZGVmaW5lZDtcbiAgICB2YXIgc3RpY2t5O1xuXG4gICAgaWYgKCF0aGlzSXNSZWdFeHAgJiYgcGF0dGVybklzUmVnRXhwICYmIHBhdHRlcm4uY29uc3RydWN0b3IgPT09IFJlZ0V4cFdyYXBwZXIgJiYgZmxhZ3NBcmVVbmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuO1xuICAgIH1cblxuICAgIGlmIChDT1JSRUNUX05FVykge1xuICAgICAgaWYgKHBhdHRlcm5Jc1JlZ0V4cCAmJiAhZmxhZ3NBcmVVbmRlZmluZWQpIHBhdHRlcm4gPSBwYXR0ZXJuLnNvdXJjZTtcbiAgICB9IGVsc2UgaWYgKHBhdHRlcm4gaW5zdGFuY2VvZiBSZWdFeHBXcmFwcGVyKSB7XG4gICAgICBpZiAoZmxhZ3NBcmVVbmRlZmluZWQpIGZsYWdzID0gZ2V0RmxhZ3MuY2FsbChwYXR0ZXJuKTtcbiAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnNvdXJjZTtcbiAgICB9XG5cbiAgICBpZiAoVU5TVVBQT1JURURfWSkge1xuICAgICAgc3RpY2t5ID0gISFmbGFncyAmJiBmbGFncy5pbmRleE9mKCd5JykgPiAtMTtcbiAgICAgIGlmIChzdGlja3kpIGZsYWdzID0gZmxhZ3MucmVwbGFjZSgveS9nLCAnJyk7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IGluaGVyaXRJZlJlcXVpcmVkKFxuICAgICAgQ09SUkVDVF9ORVcgPyBuZXcgTmF0aXZlUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSA6IE5hdGl2ZVJlZ0V4cChwYXR0ZXJuLCBmbGFncyksXG4gICAgICB0aGlzSXNSZWdFeHAgPyB0aGlzIDogUmVnRXhwUHJvdG90eXBlLFxuICAgICAgUmVnRXhwV3JhcHBlclxuICAgICk7XG5cbiAgICBpZiAoVU5TVVBQT1JURURfWSAmJiBzdGlja3kpIHNldEludGVybmFsU3RhdGUocmVzdWx0LCB7IHN0aWNreTogc3RpY2t5IH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgdmFyIHByb3h5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGtleSBpbiBSZWdFeHBXcmFwcGVyIHx8IGRlZmluZVByb3BlcnR5KFJlZ0V4cFdyYXBwZXIsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBOYXRpdmVSZWdFeHBba2V5XTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKGl0KSB7IE5hdGl2ZVJlZ0V4cFtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfTtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZVJlZ0V4cCk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSBwcm94eShrZXlzW2luZGV4KytdKTtcbiAgUmVnRXhwUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUmVnRXhwV3JhcHBlcjtcbiAgUmVnRXhwV3JhcHBlci5wcm90b3R5cGUgPSBSZWdFeHBQcm90b3R5cGU7XG4gIHJlZGVmaW5lKGdsb2JhbCwgJ1JlZ0V4cCcsIFJlZ0V4cFdyYXBwZXIpO1xufVxuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXQtcmVnZXhwLUBAc3BlY2llc1xuc2V0U3BlY2llcygnUmVnRXhwJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBleGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbiQoeyB0YXJnZXQ6ICdSZWdFeHAnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAvLi8uZXhlYyAhPT0gZXhlYyB9LCB7XG4gIGV4ZWM6IGV4ZWNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBmbGFncyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZmxhZ3MnKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuYXRpdmVUb1N0cmluZyA9IFJlZ0V4cFByb3RvdHlwZVtUT19TVFJJTkddO1xuXG52YXIgTk9UX0dFTkVSSUMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG52YXIgSU5DT1JSRUNUX05BTUUgPSBuYXRpdmVUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKE5PVF9HRU5FUklDIHx8IElOQ09SUkVDVF9OQU1FKSB7XG4gIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICB2YXIgcCA9IFN0cmluZyhSLnNvdXJjZSk7XG4gICAgdmFyIHJmID0gUi5mbGFncztcbiAgICB2YXIgZiA9IFN0cmluZyhyZiA9PT0gdW5kZWZpbmVkICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgJiYgISgnZmxhZ3MnIGluIFJlZ0V4cFByb3RvdHlwZSkgPyBmbGFncy5jYWxsKFIpIDogcmYpO1xuICAgIHJldHVybiAnLycgKyBwICsgJy8nICsgZjtcbiAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb2xsZWN0aW9uJyk7XG52YXIgY29sbGVjdGlvblN0cm9uZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyBgU2V0YCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc2V0LW9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gY29sbGVjdGlvbignU2V0JywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpIHsgcmV0dXJuIGluaXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCBjb2xsZWN0aW9uU3Ryb25nKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBTVFJJTkdfSVRFUkFUT1IgPSAnU3RyaW5nIEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNUUklOR19JVEVSQVRPUik7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUtQEBpdGVyYXRvclxuZGVmaW5lSXRlcmF0b3IoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IFNUUklOR19JVEVSQVRPUixcbiAgICBzdHJpbmc6IFN0cmluZyhpdGVyYXRlZCksXG4gICAgaW5kZXg6IDBcbiAgfSk7XG4vLyBgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVzdHJpbmdpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxufSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHN0cmluZyA9IHN0YXRlLnN0cmluZztcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXg7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IHN0cmluZy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSBjaGFyQXQoc3RyaW5nLCBpbmRleCk7XG4gIHN0YXRlLmluZGV4ICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQG1hdGNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoTUFUQ0gsIG5hdGl2ZU1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5tYXRjaGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIG1hdGNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgIHJldHVybiBtYXRjaGVyICE9PSB1bmRlZmluZWQgPyBtYXRjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICBmdW5jdGlvbiAocmVnZXhwKSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1hdGNoLCByZWdleHAsIHRoaXMpO1xuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gcmVnRXhwRXhlYyhyeCwgUyk7XG5cbiAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHZhciBuID0gMDtcbiAgICAgIHZhciByZXN1bHQ7XG4gICAgICB3aGlsZSAoKHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpKSAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICBpZiAobWF0Y2hTdHIgPT09ICcnKSByeC5sYXN0SW5kZXggPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICBuKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSwgcmVhc29uKSB7XG4gIHZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IHJlYXNvbi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTtcbiAgdmFyIFJFUExBQ0VfS0VFUFNfJDAgPSByZWFzb24uUkVQTEFDRV9LRUVQU18kMDtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVwbGFjZXIuY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSAmJiBSRVBMQUNFX0tFRVBTXyQwKSB8fFxuICAgICAgICAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZVJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1yZWdleHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY2FsbFJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIGFycmF5UHVzaCA9IFtdLnB1c2g7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG5cbi8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG52YXIgU1VQUE9SVFNfWSA9ICFmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAhUmVnRXhwKE1BWF9VSU5UMzIsICd5Jyk7IH0pO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCAyLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQ7XG4gIGlmIChcbiAgICAnYWJiYycuc3BsaXQoLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9IDQgfHxcbiAgICAnYWInLnNwbGl0KC8oPzphYikqLykubGVuZ3RoICE9IDIgfHxcbiAgICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9IDQgfHxcbiAgICAnLicuc3BsaXQoLygpKCkvKS5sZW5ndGggPiAxIHx8XG4gICAgJycuc3BsaXQoLy4/LykubGVuZ3RoXG4gICkge1xuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gW3N0cmluZ107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW0pO1xuICAgICAgfVxuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICB3aGlsZSAobWF0Y2ggPSByZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleDtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZy5sZW5ndGgpIGFycmF5UHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dC5sZW5ndGggPj0gbGltKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weS5sYXN0SW5kZXggPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nLmxlbmd0aCkge1xuICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgfSBlbHNlIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4KSk7XG4gICAgICByZXR1cm4gb3V0cHV0Lmxlbmd0aCA+IGxpbSA/IG91dHB1dC5zbGljZSgwLCBsaW0pIDogb3V0cHV0O1xuICAgIH07XG4gIC8vIENoYWtyYSwgVjhcbiAgfSBlbHNlIGlmICgnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGgpIHtcbiAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogbmF0aXZlU3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9O1xuICB9IGVsc2UgaW50ZXJuYWxTcGxpdCA9IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgIHJldHVybiBzcGxpdHRlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAocmVnZXhwLCBsaW1pdCkge1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSBuYXRpdmVTcGxpdCk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICB2YXIgdW5pY29kZU1hdGNoaW5nID0gcngudW5pY29kZTtcbiAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4LnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgdmFyIHAgPSAwO1xuICAgICAgdmFyIHEgPSAwO1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIHdoaWxlIChxIDwgUy5sZW5ndGgpIHtcbiAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICB2YXIgeiA9IGNhbGxSZWdFeHBFeGVjKHNwbGl0dGVyLCBTVVBQT1JUU19ZID8gUyA6IFMuc2xpY2UocSkpO1xuICAgICAgICB2YXIgZTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHogPT09IG51bGwgfHxcbiAgICAgICAgICAoZSA9IG1pbih0b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgKSB7XG4gICAgICAgICAgcSA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCBxLCB1bmljb2RlTWF0Y2hpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCAhU1VQUE9SVFNfWSk7XG4iLCIvLyBgU3ltYm9sLnByb3RvdHlwZS5kZXNjcmlwdGlvbmAgZ2V0dGVyXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uXG4ndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcblxudmFyIE5hdGl2ZVN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG5cbmlmIChERVNDUklQVE9SUyAmJiB0eXBlb2YgTmF0aXZlU3ltYm9sID09ICdmdW5jdGlvbicgJiYgKCEoJ2Rlc2NyaXB0aW9uJyBpbiBOYXRpdmVTeW1ib2wucHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMgaW5zdGFuY2VvZiBTeW1ib2xXcmFwcGVyXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoU3ltYm9sV3JhcHBlciwgTmF0aXZlU3ltYm9sKTtcbiAgdmFyIHN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlU3ltYm9sLnByb3RvdHlwZTtcbiAgc3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBuYXRpdmUgPSBTdHJpbmcoTmF0aXZlU3ltYm9sKCd0ZXN0JykpID09ICdTeW1ib2wodGVzdCknO1xuICB2YXIgcmVnZXhwID0gL15TeW1ib2xcXCgoLiopXFwpW14pXSskLztcbiAgZGVmaW5lUHJvcGVydHkoc3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gaXNPYmplY3QodGhpcykgPyB0aGlzLnZhbHVlT2YoKSA6IHRoaXM7XG4gICAgICB2YXIgc3RyaW5nID0gc3ltYm9sVG9TdHJpbmcuY2FsbChzeW1ib2wpO1xuICAgICAgaWYgKGhhcyhFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBkZXNjID0gbmF0aXZlID8gc3RyaW5nLnNsaWNlKDcsIC0xKSA6IHN0cmluZy5yZXBsYWNlKHJlZ2V4cCwgJyQxJyk7XG4gICAgICByZXR1cm4gZGVzYyA9PT0gJycgPyB1bmRlZmluZWQgOiBkZXNjO1xuICAgIH1cbiAgfSk7XG5cbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG4iLCJ2YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbCcpO1xuXG4vLyBgU3ltYm9sLml0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLml0ZXJhdG9yXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIG5hdGl2ZU9iamVjdENyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLXdyYXBwZWQnKTtcbnZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcblxudmFyIEhJRERFTiA9IHNoYXJlZEtleSgnaGlkZGVuJyk7XG52YXIgU1lNQk9MID0gJ1N5bWJvbCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1lNQk9MKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkc3RyaW5naWZ5ID0gZ2V0QnVpbHRJbignSlNPTicsICdzdHJpbmdpZnknKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N0cmluZy10by1zeW1ib2wtcmVnaXN0cnknKTtcbnZhciBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtdG8tc3RyaW5nLXJlZ2lzdHJ5Jyk7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBVU0VfU0VUVEVSID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdENyZWF0ZShuYXRpdmVEZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoTywgUCwgQXR0cmlidXRlcykge1xuICB2YXIgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIFApO1xuICBpZiAoT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcikgZGVsZXRlIE9iamVjdFByb3RvdHlwZVtQXTtcbiAgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yICYmIE8gIT09IE9iamVjdFByb3RvdHlwZSkge1xuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KE9iamVjdFByb3RvdHlwZSwgUCwgT2JqZWN0UHJvdG90eXBlRGVzY3JpcHRvcik7XG4gIH1cbn0gOiBuYXRpdmVEZWZpbmVQcm9wZXJ0eTtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnLCBkZXNjcmlwdGlvbikge1xuICB2YXIgc3ltYm9sID0gQWxsU3ltYm9sc1t0YWddID0gbmF0aXZlT2JqZWN0Q3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHNldEludGVybmFsU3RhdGUoc3ltYm9sLCB7XG4gICAgdHlwZTogU1lNQk9MLFxuICAgIHRhZzogdGFnLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICB9KTtcbiAgaWYgKCFERVNDUklQVE9SUykgc3ltYm9sLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIHJldHVybiBzeW1ib2w7XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGl0KSBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBpZiAoTyA9PT0gT2JqZWN0UHJvdG90eXBlKSAkZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgUCwgQXR0cmlidXRlcyk7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUF0dHJpYnV0ZXMuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoTywgSElEREVOKSkgbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgSElEREVOLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwge30pKTtcbiAgICAgIE9bSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhPLCBISURERU4pICYmIE9bSElEREVOXVtrZXldKSBPW0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgQXR0cmlidXRlcyA9IG5hdGl2ZU9iamVjdENyZWF0ZShBdHRyaWJ1dGVzLCB7IGVudW1lcmFibGU6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzY3JpcHRvcihPLCBrZXksIEF0dHJpYnV0ZXMpO1xuICB9IHJldHVybiBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBrZXksIEF0dHJpYnV0ZXMpO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIgcHJvcGVydGllcyA9IHRvSW5kZXhlZE9iamVjdChQcm9wZXJ0aWVzKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKHByb3BlcnRpZXMpLmNvbmNhdCgkZ2V0T3duUHJvcGVydHlTeW1ib2xzKHByb3BlcnRpZXMpKTtcbiAgJGZvckVhY2goa2V5cywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghREVTQ1JJUFRPUlMgfHwgJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocHJvcGVydGllcywga2V5KSkgJGRlZmluZVByb3BlcnR5KE8sIGtleSwgcHJvcGVydGllc1trZXldKTtcbiAgfSk7XG4gIHJldHVybiBPO1xufTtcblxudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gbmF0aXZlT2JqZWN0Q3JlYXRlKE8pIDogJGRlZmluZVByb3BlcnRpZXMobmF0aXZlT2JqZWN0Q3JlYXRlKE8pLCBQcm9wZXJ0aWVzKTtcbn07XG5cbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBQID0gdG9QcmltaXRpdmUoViwgdHJ1ZSk7XG4gIHZhciBlbnVtZXJhYmxlID0gbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0aGlzLCBQKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywgUCkgJiYgIWhhcyhPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQKSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gZW51bWVyYWJsZSB8fCAhaGFzKHRoaXMsIFApIHx8ICFoYXMoQWxsU3ltYm9scywgUCkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW1BdID8gZW51bWVyYWJsZSA6IHRydWU7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIHZhciBpdCA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvdHlwZSAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIGRlc2NyaXB0b3IgPSBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG4gIGlmIChkZXNjcmlwdG9yICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIHtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBkZXNjcmlwdG9yO1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KE8pKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICAkZm9yRWFjaChuYW1lcywgZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhoaWRkZW5LZXlzLCBrZXkpKSByZXN1bHQucHVzaChrZXkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pIHtcbiAgdmFyIElTX09CSkVDVF9QUk9UT1RZUEUgPSBPID09PSBPYmplY3RQcm90b3R5cGU7XG4gIHZhciBuYW1lcyA9IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoSVNfT0JKRUNUX1BST1RPVFlQRSA/IE9iamVjdFByb3RvdHlwZVN5bWJvbHMgOiB0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICghSVNfT0JKRUNUX1BST1RPVFlQRSB8fCBoYXMoT2JqZWN0UHJvdG90eXBlLCBrZXkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gYFN5bWJvbGAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC1jb25zdHJ1Y3RvclxuaWYgKCFOQVRJVkVfU1lNQk9MKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHZhciBkZXNjcmlwdGlvbiA9ICFhcmd1bWVudHMubGVuZ3RoIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbik7XG4gICAgdmFyIHNldHRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvdHlwZSkgc2V0dGVyLmNhbGwoT2JqZWN0UHJvdG90eXBlU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjcmlwdG9yKHRoaXMsIHRhZywgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgVVNFX1NFVFRFUikgc2V0U3ltYm9sRGVzY3JpcHRvcihPYmplY3RQcm90b3R5cGUsIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogc2V0dGVyIH0pO1xuICAgIHJldHVybiB3cmFwKHRhZywgZGVzY3JpcHRpb24pO1xuICB9O1xuXG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykudGFnO1xuICB9KTtcblxuICByZWRlZmluZSgkU3ltYm9sLCAnd2l0aG91dFNldHRlcicsIGZ1bmN0aW9uIChkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiB3cmFwKHVpZChkZXNjcmlwdGlvbiksIGRlc2NyaXB0aW9uKTtcbiAgfSk7XG5cbiAgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWwuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3ZWxsS25vd25TeW1ib2wobmFtZSksIG5hbWUpO1xuICB9O1xuXG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLVN5bWJvbC1kZXNjcmlwdGlvblxuICAgIG5hdGl2ZURlZmluZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgJ2Rlc2NyaXB0aW9uJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGdldEludGVybmFsU3RhdGUodGhpcykuZGVzY3JpcHRpb247XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFJU19QVVJFKSB7XG4gICAgICByZWRlZmluZShPYmplY3RQcm90b3R5cGUsICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgeyB1bnNhZmU6IHRydWUgfSk7XG4gICAgfVxuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wsIHNoYW06ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgU3ltYm9sOiAkU3ltYm9sXG59KTtcblxuJGZvckVhY2gob2JqZWN0S2V5cyhXZWxsS25vd25TeW1ib2xzU3RvcmUpLCBmdW5jdGlvbiAobmFtZSkge1xuICBkZWZpbmVXZWxsS25vd25TeW1ib2wobmFtZSk7XG59KTtcblxuJCh7IHRhcmdldDogU1lNQk9MLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYFN5bWJvbC5mb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuZm9yXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhrZXkpO1xuICAgIGlmIChoYXMoU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSwgc3RyaW5nKSkgcmV0dXJuIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXTtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbChzdHJpbmcpO1xuICAgIFN0cmluZ1RvU3ltYm9sUmVnaXN0cnlbc3RyaW5nXSA9IHN5bWJvbDtcbiAgICBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bWJvbF0gPSBzdHJpbmc7XG4gICAgcmV0dXJuIHN5bWJvbDtcbiAgfSxcbiAgLy8gYFN5bWJvbC5rZXlGb3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wua2V5Zm9yXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sJyk7XG4gICAgaWYgKGhhcyhTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5LCBzeW0pKSByZXR1cm4gU3ltYm9sVG9TdHJpbmdSZWdpc3RyeVtzeW1dO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgVVNFX1NFVFRFUiA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gZmFsc2U7IH1cbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Jcbn0pO1xuXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCB9LCB7XG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eXN5bWJvbHNcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gQ2hyb21lIDM4IGFuZCAzOSBgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc2AgZmFpbHMgb24gcHJpbWl0aXZlc1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzQ0M1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogZmFpbHMoZnVuY3Rpb24gKCkgeyBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZigxKTsgfSkgfSwge1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICAgIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gYEpTT04uc3RyaW5naWZ5YCBtZXRob2QgYmVoYXZpb3Igd2l0aCBzeW1ib2xzXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1qc29uLnN0cmluZ2lmeVxuaWYgKCRzdHJpbmdpZnkpIHtcbiAgdmFyIEZPUkNFRF9KU09OX1NUUklOR0lGWSA9ICFOQVRJVkVfU1lNQk9MIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3ltYm9sID0gJFN5bWJvbCgpO1xuICAgIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gICAgcmV0dXJuICRzdHJpbmdpZnkoW3N5bWJvbF0pICE9ICdbbnVsbF0nXG4gICAgICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgICAgIHx8ICRzdHJpbmdpZnkoeyBhOiBzeW1ib2wgfSkgIT0gJ3t9J1xuICAgICAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgICAgIHx8ICRzdHJpbmdpZnkoT2JqZWN0KHN5bWJvbCkpICE9ICd7fSc7XG4gIH0pO1xuXG4gICQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRURfSlNPTl9TVFJJTkdJRlkgfSwge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICAgIHZhciBpbmRleCA9IDE7XG4gICAgICB2YXIgJHJlcGxhY2VyO1xuICAgICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpbmRleCkgYXJncy5wdXNoKGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICAkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG4gICAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgICByZXR1cm4gJHN0cmluZ2lmeS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0pIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG59XG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3N0cmluZ3RhZ1xuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgU1lNQk9MKTtcblxuaGlkZGVuS2V5c1tISURERU5dID0gdHJ1ZTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgQXJyYXlJdGVyYXRvck1ldGhvZHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEFycmF5SXRlcmF0b3JNZXRob2RzLnZhbHVlcztcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICAgIH1cbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgTUVUSE9EX05BTUUsIEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSA9IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG52YXIgTVNJRSA9IC9NU0lFIC5cXC4vLnRlc3QodXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICAgIHZhciBhcmdzID0gYm91bmRBcmdzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBzY2hlZHVsZXIoYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAodHlwZW9mIGhhbmRsZXIgPT0gJ2Z1bmN0aW9uJyA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKSkuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSA6IGhhbmRsZXIsIHRpbWVvdXQpO1xuICB9O1xufTtcblxuLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogTVNJRSB9LCB7XG4gIC8vIGBzZXRUaW1lb3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuICBzZXRUaW1lb3V0OiB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgLy8gYHNldEludGVydmFsYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIua2xhcm8gLmNvb2tpZS1tb2RhbCwgLmtsYXJvIC5jb29raWUtbm90aWNlIHtcXG4gIC8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuICBmb250LXNpemU6IDE0cHg7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5zd2l0Y2gsIC5rbGFybyAuY29va2llLW5vdGljZSAuc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1hcHAtaW5wdXQ6Y2hlY2tlZCArIC5jbS1hcHAtbGFiZWwgLnNsaWRlciwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1hcHAtaW5wdXQ6Y2hlY2tlZCArIC5jbS1hcHAtbGFiZWwgLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODg1QkE7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1hcHAtaW5wdXQucmVxdWlyZWQ6Y2hlY2tlZCArIC5jbS1hcHAtbGFiZWwgLnNsaWRlciwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1hcHAtaW5wdXQucmVxdWlyZWQ6Y2hlY2tlZCArIC5jbS1hcHAtbGFiZWwgLnNsaWRlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNkE0RTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLmtsYXJvIC5jb29raWUtbW9kYWwgLnNsaWRlciwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDVweCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1hcHAtaW5wdXQsIC5rbGFybyAuY29va2llLW5vdGljZSAuY20tYXBwLWlucHV0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1hcHAtbGFiZWwsIC5rbGFybyAuY29va2llLW5vdGljZSAuY20tYXBwLWxhYmVsIHtcXG4gICAgLyogVGhlIHNsaWRlciAqL1xcbiAgICAvKiBSb3VuZGVkIHNsaWRlcnMgKi8gfVxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tYXBwLWxhYmVsIC5zbGlkZXIsIC5rbGFybyAuY29va2llLW5vdGljZSAuY20tYXBwLWxhYmVsIC5zbGlkZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzO1xcbiAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tYXBwLWxhYmVsIC5zbGlkZXI6YmVmb3JlLCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgLmNtLWFwcC1sYWJlbCAuc2xpZGVyOmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICB3aWR0aDogMjBweDtcXG4gICAgICBsZWZ0OiA1cHg7XFxuICAgICAgYm90dG9tOiA1cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgICAgdHJhbnNpdGlvbjogLjRzOyB9XFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1hcHAtbGFiZWwgLnNsaWRlci5yb3VuZCwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1hcHAtbGFiZWwgLnNsaWRlci5yb3VuZCB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDsgfVxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tYXBwLWxhYmVsIC5zbGlkZXIucm91bmQ6YmVmb3JlLCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgLmNtLWFwcC1sYWJlbCAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1hcHAtbGFiZWwgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyLCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgLmNtLWFwcC1sYWJlbCBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzA4ODVCQTsgfVxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tYXBwLWxhYmVsIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1hcHAtbGFiZWwgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgfVxcbiAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLWFwcC1pbnB1dDpmb2N1cyArIC5jbS1hcHAtbGFiZWwgLnNsaWRlciwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1hcHAtaW5wdXQ6Zm9jdXMgKyAuY20tYXBwLWxhYmVsIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDEyNSwgMTI1LCAxMjUsIDAuMiksIDVweCA1cHggMTBweCAwIHJnYmEoMTI1LCAxMjUsIDEyNSwgMC4xOSk7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1hcHAtaW5wdXQ6Y2hlY2tlZCArIC5jbS1hcHAtbGFiZWwgLnNsaWRlcjpiZWZvcmUsIC5rbGFybyAuY29va2llLW5vdGljZSAuY20tYXBwLWlucHV0OmNoZWNrZWQgKyAuY20tYXBwLWxhYmVsIC5zbGlkZXI6YmVmb3JlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgfVxcbiAgLmtsYXJvIC5jb29raWUtbW9kYWwgLnNsaWRlciwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDVweCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIGEsIC5rbGFybyAuY29va2llLW5vdGljZSBhIHtcXG4gICAgY29sb3I6ICMwMEFBM0U7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcbiAgLmtsYXJvIC5jb29raWUtbW9kYWwgcCwgLmtsYXJvIC5jb29raWUtbW9kYWwgc3Ryb25nLCAua2xhcm8gLmNvb2tpZS1tb2RhbCBoMSwgLmtsYXJvIC5jb29raWUtbW9kYWwgaDIsIC5rbGFybyAuY29va2llLW1vZGFsIHVsLCAua2xhcm8gLmNvb2tpZS1tb2RhbCBsaSwgLmtsYXJvIC5jb29raWUtbm90aWNlIHAsIC5rbGFybyAuY29va2llLW5vdGljZSBzdHJvbmcsIC5rbGFybyAuY29va2llLW5vdGljZSBoMSwgLmtsYXJvIC5jb29raWUtbm90aWNlIGgyLCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgdWwsIC5rbGFybyAuY29va2llLW5vdGljZSBsaSB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBjb2xvcjogI2VlZTsgfVxcbiAgLmtsYXJvIC5jb29raWUtbW9kYWwgcCwgLmtsYXJvIC5jb29raWUtbW9kYWwgaDEsIC5rbGFybyAuY29va2llLW1vZGFsIGgyLCAua2xhcm8gLmNvb2tpZS1tb2RhbCB1bCwgLmtsYXJvIC5jb29raWUtbW9kYWwgbGksIC5rbGFybyAuY29va2llLW5vdGljZSBwLCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgaDEsIC5rbGFybyAuY29va2llLW5vdGljZSBoMiwgLmtsYXJvIC5jb29raWUtbm90aWNlIHVsLCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgbGkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAwLjdlbTsgfVxcbiAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLWxpbmssIC5rbGFybyAuY29va2llLW5vdGljZSAuY20tbGluayB7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XFxuICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tYnRuLCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgLmNtLWJ0biB7XFxuICAgIGJhY2tncm91bmQ6ICM1NTU7XFxuICAgIGNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbiAgICBib3JkZXI6IDA7IH1cXG4gICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLWJ0bjpkaXNhYmxlZCwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1idG46ZGlzYWJsZWQge1xcbiAgICAgIG9wYWNpdHk6IDAuNTsgfVxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tYnRuLmNtLWJ0bi1zbSwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1idG4uY20tYnRuLXNtIHtcXG4gICAgICBwYWRkaW5nOiAwLjRlbTtcXG4gICAgICBmb250LXNpemU6IDFlbTsgfVxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tYnRuLmNtLWJ0bi1jbG9zZSwgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbS1idG4uY20tYnRuLWNsb3NlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICAgIGNvbG9yOiAjMDAwOyB9XFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1idG4uY20tYnRuLXN1Y2Nlc3MsIC5rbGFybyAuY29va2llLW5vdGljZSAuY20tYnRuLmNtLWJ0bi1zdWNjZXNzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDBBQTNFOyB9XFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1idG4uY20tYnRuLWluZm8sIC5rbGFybyAuY29va2llLW5vdGljZSAuY20tYnRuLmNtLWJ0bi1pbmZvIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMDg4NUJBOyB9XFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1idG4uY20tYnRuLXJpZ2h0LCAua2xhcm8gLmNvb2tpZS1ub3RpY2UgLmNtLWJ0bi5jbS1idG4tcmlnaHQge1xcbiAgICAgIGZsb2F0OiByaWdodDtcXG4gICAgICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLmtsYXJvIC5jb29raWUtbW9kYWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1iZyB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7IH1cXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1tb2RhbCxcXG4gIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIHtcXG4gICAgei1pbmRleDogMTAwMTtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCA1cHggNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogOTglO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgICBjb2xvcjogI2VlZTsgfVxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLW1vZGFsLFxcbiAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIHdpZHRoOiBhdXRvOyB9IH1cXG4gICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLW1vZGFsIC5oaWRlLFxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuaGlkZSB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMjBweDtcXG4gICAgICByaWdodDogMjBweDtcXG4gICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLW1vZGFsIC5oaWRlIHN2ZyxcXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuaGlkZSBzdmcge1xcbiAgICAgICAgc3Ryb2tlOiAjZWVlOyB9XFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1tb2RhbCAuY20tZm9vdGVyLFxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY20tZm9vdGVyIHtcXG4gICAgICBwYWRkaW5nOiAxZW07XFxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1NTU7IH1cXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWZvb3Rlci1idXR0b25zOjpiZWZvcmUsIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1tb2RhbCAuY20tZm9vdGVyLWJ1dHRvbnM6OmFmdGVyLFxcbiAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1mb290ZXItYnV0dG9uczo6YmVmb3JlLFxcbiAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1mb290ZXItYnV0dG9uczo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICAgICAgZGlzcGxheTogdGFibGU7IH1cXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWZvb3Rlci1idXR0b25zOjphZnRlcixcXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY20tZm9vdGVyLWJ1dHRvbnM6OmFmdGVyIHtcXG4gICAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLW1vZGFsIC5jbS1mb290ZXIgLmNtLXBvd2VyZWQtYnksXFxuICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNtLWZvb3RlciAuY20tcG93ZXJlZC1ieSB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLW1vZGFsIC5jbS1mb290ZXIgLmNtLXBvd2VyZWQtYnkgYSxcXG4gICAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1mb290ZXIgLmNtLXBvd2VyZWQtYnkgYSB7XFxuICAgICAgICAgIGNvbG9yOiAjOTk5OyB9XFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1tb2RhbCAuY20taGVhZGVyLFxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNuLWhlYWRlcixcXG4gICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNtLWhlYWRlcixcXG4gICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNuLWhlYWRlciB7XFxuICAgICAgcGFkZGluZzogMWVtO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NTU7IH1cXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWhlYWRlciBoMSxcXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNuLWhlYWRlciBoMSxcXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY20taGVhZGVyIGgxLFxcbiAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbi1oZWFkZXIgaDEge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLW1vZGFsIC5jbS1oZWFkZXIgaDEudGl0bGUsXFxuICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNuLWhlYWRlciBoMS50aXRsZSxcXG4gICAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1oZWFkZXIgaDEudGl0bGUsXFxuICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY24taGVhZGVyIGgxLnRpdGxlIHtcXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDsgfVxcbiAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHksXFxuICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1ib2R5IHtcXG4gICAgICBwYWRkaW5nOiAxZW07IH1cXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgdWwsXFxuICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNtLWJvZHkgdWwge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgc3BhbixcXG4gICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY20tYm9keSBzcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHdpZHRoOiBhdXRvOyB9XFxuICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNtLW1vZGFsIC5jbS1ib2R5IHVsLmNtLWFwcHMsXFxuICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNtLWJvZHkgdWwuY20tYXBwcyB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbWFyZ2luOiAwOyB9XFxuICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAsXFxuICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY20tYm9keSB1bC5jbS1hcHBzIGxpLmNtLWFwcCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgICAgICAgbWluLWhlaWdodDogNDBweDsgfVxcbiAgICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHA6Zmlyc3QtY2hpbGQsXFxuICAgICAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1ib2R5IHVsLmNtLWFwcHMgbGkuY20tYXBwOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICAgICAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1tb2RhbCAuY20tYm9keSB1bC5jbS1hcHBzIGxpLmNtLWFwcCAuc3dpdGNoLFxcbiAgICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY20tYm9keSB1bC5jbS1hcHBzIGxpLmNtLWFwcCAuc3dpdGNoIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgbGVmdDogMDsgfVxcbiAgICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAgcCxcXG4gICAgICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAgcCB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAgcC5wdXJwb3NlcyxcXG4gICAgICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAgcC5wdXJwb3NlcyB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICAgICAgICBjb2xvcjogIzk5OTsgfVxcbiAgICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAuY20tdG9nZ2xlLWFsbCxcXG4gICAgICAgICAgLmtsYXJvIC5jb29raWUtbW9kYWwgLmNvb2tpZS1ub3RpY2UgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAuY20tdG9nZ2xlLWFsbCB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM1NTU7XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTsgfVxcbiAgICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY20tbW9kYWwgLmNtLWJvZHkgdWwuY20tYXBwcyBsaS5jbS1hcHAgc3Bhbi5jbS1hcHAtdGl0bGUsXFxuICAgICAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1ib2R5IHVsLmNtLWFwcHMgbGkuY20tYXBwIHNwYW4uY20tYXBwLXRpdGxlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAgICAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1tb2RhbCAuY20tYm9keSB1bC5jbS1hcHBzIGxpLmNtLWFwcCBzcGFuLmNtLW9wdC1vdXQsIC5rbGFybyAuY29va2llLW1vZGFsIC5jbS1tb2RhbCAuY20tYm9keSB1bC5jbS1hcHBzIGxpLmNtLWFwcCBzcGFuLmNtLXJlcXVpcmVkLFxcbiAgICAgICAgICAua2xhcm8gLmNvb2tpZS1tb2RhbCAuY29va2llLW5vdGljZSAuY20tYm9keSB1bC5jbS1hcHBzIGxpLmNtLWFwcCBzcGFuLmNtLW9wdC1vdXQsXFxuICAgICAgICAgIC5rbGFybyAuY29va2llLW1vZGFsIC5jb29raWUtbm90aWNlIC5jbS1ib2R5IHVsLmNtLWFwcHMgbGkuY20tYXBwIHNwYW4uY20tcmVxdWlyZWQge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4yZW07XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICAgICAgICBjb2xvcjogIzk5OTsgfVxcblxcbi5rbGFybyAuY29va2llLW5vdGljZSB7XFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcbiAgei1pbmRleDogOTk5O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KSB7XFxuICAgIC5rbGFybyAuY29va2llLW5vdGljZSB7XFxuICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCA1cHggNXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgYm90dG9tOiAyMHB4O1xcbiAgICAgIHJpZ2h0OiAyMHB4O1xcbiAgICAgIG1heC13aWR0aDogMzAwcHg7IH0gfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk4OXB4KSB7XFxuICAgIC5rbGFybyAuY29va2llLW5vdGljZSB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH0gfVxcbiAgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbi1ib2R5IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDA7IH1cXG4gICAgLmtsYXJvIC5jb29raWUtbm90aWNlIC5jbi1ib2R5IHAge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtOyB9XFxuICAgIC5rbGFybyAuY29va2llLW5vdGljZSAuY24tYm9keSBwLmNuLWNoYW5nZXMge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAgIC5rbGFybyAuY29va2llLW5vdGljZSAuY24tYm9keSAuY24tbGVhcm4tbW9yZSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgIC5rbGFybyAuY29va2llLW5vdGljZSAuY24tYm9keSBwLmNuLW9rIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgIC5rbGFybyAuY29va2llLW5vdGljZSAuY24tYm9keSBwLmNuLW9rIGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuXFxuLmtsYXJvIC5jb29raWUtbm90aWNlLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi93d3cva2xhcm8vc3JjL3Njc3Mva2xhcm8uc2Nzc1wiLFwiQzovd3d3L2tsYXJvL3NyYy9zY3NzL3N3aXRjaC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWtCQTtFQ2xCQSwyQ0FBQTtFRHdCUSxlQUFlLEVBQUE7RUFOdkI7SUNoQkksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWSxFQUFBO0VEYWhCO0lDVEkseUJER1csRUFBQTtFQU1mO0lDTEksWUFBWTtJQUNaLHlCRENZO0lDQVosbUJBQW1CLEVBQUE7RURHdkI7SUNDSSw4RURuQjJFLEVBQUE7RUFrQi9FO0lDS0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZLEVBQUE7RURWaEI7SUNjSSxlQUFBO0lBMkJBLG9CQUFBLEVBQXFCO0lEekN6QjtNQ2dCUSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZC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a0I7VUFDbEIsZ0JBQWdCLEVBQUE7VUFsTXhDOztZQTRMNEIsYUFBYSxFQUFBO1VBNUx6Qzs7WUFvTTRCLGtCQUFrQjtZQUNsQixPQUFPLEVBQUE7VUFyTW5DOztZQXdNNEIsYUFBYSxFQUFBO1VBeE16Qzs7WUE0TTRCLGdCQUFnQjtZQUNoQixXQTNOTyxFQUFBO1VBY25DOztZQWlONEIsMEJBak9BO1lBa09BLGdCQUFnQixFQUFBO1VBbE41Qzs7WUFzTjRCLGdCQUFnQixFQUFBO1VBdE41Qzs7O1lBME40QixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLFdBMU9PLEVBQUE7O0FBY25DO0VBc09RLGdCQW5QTTtFQW9QTixZQUFZO0VBRVosZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUSxFQUFBO0VBRVI7SUE5T1I7TUErT1ksOEVBalFtRTtNQWtRbkUsa0JBalFPO01Ba1FQLGVBQWU7TUFDZixZQUFZO01BQ1osV0FBVztNQUNYLGdCQUFnQixFQUFBLEVBeUN2QjtFQXRDRztJQXZQUjtNQXdQWSxZQUFZO01BQ1osZ0JBQWdCLEVBQUEsRUFvQ3ZCO0VBN1JMO0lBNlBZLGdCQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFFVCxZQUFZO0lBQ1osY0FBYyxFQUFBO0lBbFExQjtNQXFRZ0Isb0JBQW9CLEVBQUE7SUFyUXBDO01BeVFnQiwwQkFBMEIsRUFBQTtJQXpRMUM7TUE2UWdCLHFCQUFxQixFQUFBO0lBN1FyQztNQWtSZ0Isa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxhQUFhO01BQ2Isc0JBQXNCLEVBQUE7TUFyUnRDO1FBd1JvQixtQkFBbUIsRUFBQTs7QUF4UnZDO0VBZ1NRLHdCQUF3QixFQUFBXCIsXCJmaWxlXCI6XCJrbGFyby5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDVweCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XFxyXFxuJGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4kYm9yZGVyLWRhcms6IDFweCBzb2xpZCAjNTU1O1xcclxcbiRmb250LWNvbG9yLWRhcms6ICNlZWU7XFxyXFxuJGZvbnQtY29sb3ItZGFyay1kZWVtcGhhc2l6ZWQ6ICM5OTk7XFxyXFxuJGJnLWRhcms6ICMzMzM7XFxyXFxuJHJlZDI6ICNCMjRFMTQ7XFxyXFxuJHJlZDE6ICNCQTFFMDQ7XFxyXFxuJHllbGxvdzE6ICNGOEMyMDA7XFxyXFxuJHllbGxvdzI6ICNENEQwMjY7XFxyXFxuJGJsdWUzOiAjMDA1MDkxO1xcclxcbiRibHVlMjogIzAwM0Y4QTtcXHJcXG4kYmx1ZTE6ICMwODg1QkE7XFxyXFxuJGJsdWU0OiAjOUFDM0Q0O1xcclxcbiRncmVlbjE6ICMwMEFBM0U7XFxyXFxuJGdyZWVuMjogIzAwNkE0RTtcXHJcXG4kZ3JlZW4zOiAjMDE0NDBDO1xcclxcblxcclxcbi5rbGFybyB7XFxyXFxuXFxyXFxuICAgIC5jb29raWUtbW9kYWwsIC5jb29raWUtbm90aWNlIHtcXHJcXG5cXHJcXG4gICAgICAgIEBpbXBvcnQgJ3N3aXRjaC5zY3NzJztcXHJcXG5cXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHJcXG4gICAgICAgIC5zbGlkZXIge1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICRncmVlbjE7XFxyXFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgcCwgc3Ryb25nLCBoMSwgaDIsIHVsLCBsaSB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICRmb250LWNvbG9yLWRhcms7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBwLCBoMSwgaDIsIHVsLCBsaSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjdlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5jbS1saW5rIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmNtLWJ0biB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItZGFyaztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpkaXNhYmxlZCB7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgJi5jbS1idG4tc20ge1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYuY20tYnRuLWNsb3NlIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICYuY20tYnRuLXN1Y2Nlc3Mge1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZ3JlZW4xO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmNtLWJ0bi1pbmZvIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsdWUxO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAmLmNtLWJ0bi1yaWdodCB7XFxyXFxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb29raWUtbW9kYWwge1xcclxcblxcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxuICAgICAgICAuY20tYmcge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmNtLW1vZGFsLFxcclxcbiAgICAgICAgLmNvb2tpZS1ub3RpY2Uge1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDE7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDk4JTtcXHJcXG5cXHJcXG4gICAgICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRiZy1kYXJrO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkZm9udC1jb2xvci1kYXJrO1xcclxcblxcclxcbiAgICAgICAgICAgIC5oaWRlICAge1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIHN2ZyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICRmb250LWNvbG9yLWRhcms7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDIwcHg7XFxyXFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICAvLyBBdm9pZCBnZXR0aW5nIG92ZXJsYXBwZWQgYnkgdGhlIGhlYWRpbmcsIGlmIGV4dGVybmFsIENTUyBzZXRzOlxcclxcbiAgICAgICAgICAgICAgICAvLyBoMSB7IHBvc2l0aW9uOiByZWxhdGl2ZSB9XFxyXFxuICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL0tJUHJvdGVjdC9rbGFyby9pc3N1ZXMvMTM1XFxyXFxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5jbS1mb290ZXIge1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6ICRib3JkZXItZGFyaztcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgJi1idXR0b25zIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSxcXHJcXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmNtLXBvd2VyZWQtYnkge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItZGFyay1kZWVtcGhhc2l6ZWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmNtLWhlYWRlcixcXHJcXG4gICAgICAgICAgICAuY24taGVhZGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAkYm9yZGVyLWRhcms7XFxyXFxuICAgICAgICAgICAgICAgIGgxIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgICAgICAgICAmLnRpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5jbS1ib2R5IHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgICAgICAgICB1bCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIHVsLmNtLWFwcHMge1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA6MDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxpLmNtLWFwcCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgLnN3aXRjaCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgcCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucHVycG9zZXMge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItZGFyay1kZWVtcGhhc2l6ZWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICYuY20tdG9nZ2xlLWFsbCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6ICRib3JkZXItZGFyaztcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbS1hcHAtdGl0bGUge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNtLW9wdC1vdXQsIHNwYW4uY20tcmVxdWlyZWQge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGZvbnQtY29sb3ItZGFyay1kZWVtcGhhc2l6ZWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb29raWUtbm90aWNlIHtcXHJcXG5cXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICRiZy1kYXJrO1xcclxcbiAgICAgICAgei1pbmRleDogOTk5O1xcclxcblxcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYShtaW4td2lkdGg6IDk5MHB4KXtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA5ODlweCl7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuY24tYm9keSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgICAgICBib3R0b206IDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xcclxcblxcclxcbiAgICAgICAgICAgIHAge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgcC5jbi1jaGFuZ2VzIHtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5jbi1sZWFybi1tb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBwLmNuLW9rIHtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuNWVtO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jb29raWUtbm90aWNlLWhpZGRlbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIvKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcclxcbi5zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNtLWFwcC1pbnB1dDpjaGVja2VkICsgLmNtLWFwcC1sYWJlbCAuc2xpZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWUxO1xcclxcbn1cXHJcXG5cXHJcXG4uY20tYXBwLWlucHV0LnJlcXVpcmVkOmNoZWNrZWQgKyAuY20tYXBwLWxhYmVsIC5zbGlkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjI7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcXHJcXG59XFxyXFxuXFxyXFxuLmNtLWFwcC1pbnB1dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY20tYXBwLWxhYmVsIHtcXHJcXG4gICAgLyogVGhlIHNsaWRlciAqL1xcclxcbiAgICAuc2xpZGVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICBsZWZ0OiA1cHg7XFxyXFxuICAgICAgICBib3R0b206IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogUm91bmRlZCBzbGlkZXJzICovXFxyXFxuICAgIC5zbGlkZXIucm91bmQge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxcHggJGJsdWUxO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNtLWFwcC1pbnB1dDpmb2N1cyArIC5jbS1hcHAtbGFiZWwgLnNsaWRlciB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAwIHJnYmEoMTI1LCAxMjUsIDEyNSwgMC4yKSwgNXB4IDVweCAxMHB4IDAgcmdiYSgxMjUsIDEyNSwgMTI1LCAwLjE5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtLWFwcC1pbnB1dDpjaGVja2VkICsgLmNtLWFwcC1sYWJlbCAuc2xpZGVyOmJlZm9yZSB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XFxyXFxufVxcclxcblwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qIVxuICogY3VycmVudEV4ZWN1dGluZ1NjcmlwdFxuICogR2V0IHRoZSBjdXJyZW50bHkgZXhlY3V0aW5nIHNjcmlwdCwgcmVnYXJkbGVzcyBvZiBpdHMgc291cmNlL3RyaWdnZXIvc3luY2hyb25pY2l0eS4gU2ltaWxhciB0byBIVE1MNSdzIGBkb2N1bWVudC5jdXJyZW50U2NyaXB0YCBidXQgYXJndWFibHkgbXVjaCBtb3JlIHVzZWZ1bCFcbiAqIENvcHlyaWdodCAoYykgMjAxNSBKYW1lcyBNLiBHcmVlbmVcbiAqIExpY2Vuc2VkIE1JVFxuICogaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0XG4gKiB2MC4xLjNcbiAqL1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAvLyBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgYG1vZHVsZS5leHBvcnRzYCxcbiAgICAvLyBsaWtlIE5vZGUuanMuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMhXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChgcm9vdGAgaXMgYHdpbmRvd2ApXG4gICAgcm9vdC5jdXJyZW50RXhlY3V0aW5nU2NyaXB0ID0gZmFjdG9yeSgpO1xuICB9XG59KFxuICAvLyBDdXJyZW50IGNvbnRleHQvc2NvcGVcbiAgdGhpcyB8fCB3aW5kb3csXG5cbiAgLy8gRmFjdG9yeSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIGV4cG9ydFxuICBmdW5jdGlvbigpIHtcblxudmFyIHNjcmlwdFJlYWR5UmVnZXggPSAvXihpbnRlcmFjdGl2ZXxsb2FkZWR8Y29tcGxldGUpJC87XG5cbi8vIFRoaXMgcGFnZSdzIFVSTCAobWludXMgcXVlcnkgc3RyaW5nIGFuZCBmcmFnbWVudCBpZGVudGlmZXIgaGFzaCwgaWYgYW55KVxudmFyIGZ1bGxQYWdlVXJsID0gISF3aW5kb3cubG9jYXRpb24gPyB3aW5kb3cubG9jYXRpb24uaHJlZiA6IG51bGw7XG52YXIgcGFnZVVybCA9IGZ1bGxQYWdlVXJsID8gZnVsbFBhZ2VVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpIHx8IG51bGwgOiBudWxsO1xuXG4vLyBMaXZlIE5vZGVMaXN0IGNvbGxlY3Rpb25cbnZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cbi8vIENoZWNrIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBgcmVhZHlTdGF0ZWAgcHJvcGVydHkgb24gYHNjcmlwdGAgZWxlbWVudHNcbnZhciBzdXBwb3J0c1NjcmlwdFJlYWR5U3RhdGUgPSBcInJlYWR5U3RhdGVcIiBpbiAoc2NyaXB0c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKTtcblxuLy8gTG91c3kgYnJvd3NlciBkZXRlY3Rpb24gZm9yIFtub3RdIE9wZXJhXG52YXIgaXNOb3RPcGVyYSA9ICF3aW5kb3cub3BlcmEgfHwgd2luZG93Lm9wZXJhLnRvU3RyaW5nKCkgIT09IFwiW29iamVjdCBPcGVyYV1cIjtcblxuLy8gRGV0ZWN0IGlmIGBkb2N1bWVudC5jdXJyZW50U2NyaXB0YCBpcyBzdXBwb3J0ZWRcbnZhciBoYXNOYXRpdmVDdXJyZW50U2NyaXB0QWNjZXNzb3IgPSBcImN1cnJlbnRTY3JpcHRcIiBpbiBkb2N1bWVudDtcblxudmFyIG9yaWdpbmFsU3RhY2tEZXB0aENvbmZpZztcbi8vIERldGVjdCBpZiB0aGUgVjggRXJyb3IgU3RhY2sgVHJhY2UgQVBJIGlzIHN1cHBvcnRlZFxuaWYgKFwic3RhY2tUcmFjZUxpbWl0XCIgaW4gRXJyb3IgJiYgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICE9PSBJbmZpbml0eSkge1xuICBvcmlnaW5hbFN0YWNrRGVwdGhDb25maWcgPSBFcnJvci5zdGFja1RyYWNlTGltaXQ7XG4gIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IEluZmluaXR5O1xufVxuXG5cbi8vIEluIHNvbWUgYnJvd3NlcnMgKGUuZy4gQ2hyb21lKSwgeW91IGNhbiBnZXQgdGhlIGN1cnJlbnQgc3RhY2sgZnJvbSBhbiBFcnJvclxuLy8gb2JqZWN0IGluc3RhbmNlIHdpdGhvdXQgbmVlZGluZyB0byB0aHJvdyBpdC4gQXZvaWRpbmcgYW4gdW5uZWNlc3Nhcnlcbi8vIHVzZSBvZiBgdGhyb3dgIHNhdmVzIHRpbWUgYW5kIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N0YWNrQmVmb3JlVGhyb3dpbmcgPSBmYWxzZSxcbiAgICBoYXNTdGFja0FmdGVyVGhyb3dpbmcgPSBmYWxzZTtcbihmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG4gICAgaGFzU3RhY2tCZWZvcmVUaHJvd2luZyA9IHR5cGVvZiBlcnIuc3RhY2sgPT09IFwic3RyaW5nXCIgJiYgISFlcnIuc3RhY2s7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIGNhdGNoICh0aHJvd25FcnIpIHtcbiAgICBoYXNTdGFja0FmdGVyVGhyb3dpbmcgPSB0eXBlb2YgdGhyb3duRXJyLnN0YWNrID09PSBcInN0cmluZ1wiICYmICEhdGhyb3duRXJyLnN0YWNrO1xuICB9XG59KSgpO1xuXG5cbi8vIE5vcm1hbGl6ZSB3aGl0ZXNwYWNlIHdpdGhpbiBhIHN0cmluZ1xuZnVuY3Rpb24gbm9ybWFsaXplV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ciA/IHN0ci5yZXBsYWNlKC9eXFxzKyR8XFxzKyQvZywgXCJcIikucmVwbGFjZSgvXFxzXFxzKy9nLCBcIiBcIikgOiBcIlwiO1xufVxuXG4vLyBHZXQgc2NyaXB0IG9iamVjdCBiYXNlZCBvbiB0aGUgYHNyY2AgVVJMXG5mdW5jdGlvbiBnZXRTY3JpcHRGcm9tVXJsKHVybCwgZWxpZ2libGVTY3JpcHRzKSB7XG4gIHZhciBpLFxuICAgICAgc2NyaXB0ID0gbnVsbDtcblxuICBlbGlnaWJsZVNjcmlwdHMgPSBlbGlnaWJsZVNjcmlwdHMgfHwgc2NyaXB0cztcblxuICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIiAmJiB1cmwpIHtcbiAgICBmb3IgKGkgPSBlbGlnaWJsZVNjcmlwdHMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgaWYgKGVsaWdpYmxlU2NyaXB0c1tpXS5zcmMgPT09IHVybCkge1xuICAgICAgICAvLyBOT1RFOiBDb3VsZCBjaGVjayBpZiB0aGUgc2FtZSBzY3JpcHQgVVJMIGlzIHVzZWQgYnkgbW9yZSB0aGFuIG9uZSBgc2NyaXB0YCBlbGVtZW50XG4gICAgICAgIC8vIGhlcmUuLi4gYnV0IGxldCdzIG5vdC4gVGhhdCB3b3VsZCB5aWVsZCBsZXNzIHVzZWZ1bCByZXN1bHRzIGluIFwibG9vc2VcIiBkZXRlY3Rpb24uIDspXG4gICAgICAgIHNjcmlwdCA9IGVsaWdpYmxlU2NyaXB0c1tpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzY3JpcHQ7XG59XG5cbi8vIEdldCBzY3JpcHQgb2JqZWN0IGJhc2VkIG9uIHRoZSBjYWxsZXIgZnVuY3Rpb24ncyBzb3VyY2UgY29kZSBib2R5ICh0ZXh0KVxuZnVuY3Rpb24gZ2V0SW5saW5lU2NyaXB0RnJvbUNhbGxlclNvdXJjZShjYWxsZXJGblNvdXJjZSwgZWxpZ2libGVTY3JpcHRzKSB7XG4gIHZhciBpLCBpbmxpbmVTY3JpcHRUZXh0LFxuICAgICAgc2NyaXB0ID0gbnVsbCxcbiAgICAgIGNhbGxlclNvdXJjZVRleHQgPSBub3JtYWxpemVXaGl0ZXNwYWNlKGNhbGxlckZuU291cmNlKTtcblxuICBlbGlnaWJsZVNjcmlwdHMgPSBlbGlnaWJsZVNjcmlwdHMgfHwgc2NyaXB0cztcblxuICBpZiAoY2FsbGVyRm5Tb3VyY2UgJiYgY2FsbGVyU291cmNlVGV4dCkge1xuICAgIGZvciAoaSA9IGVsaWdpYmxlU2NyaXB0cy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAvLyBPbmx5IGxvb2sgYXQgaW5saW5lIHNjcmlwdHNcbiAgICAgIGlmICghZWxpZ2libGVTY3JpcHRzW2ldLmhhc0F0dHJpYnV0ZShcInNyY1wiKSkge1xuICAgICAgICBpbmxpbmVTY3JpcHRUZXh0ID0gbm9ybWFsaXplV2hpdGVzcGFjZShlbGlnaWJsZVNjcmlwdHNbaV0udGV4dCk7XG4gICAgICAgIGlmIChpbmxpbmVTY3JpcHRUZXh0LmluZGV4T2YoY2FsbGVyU291cmNlVGV4dCkgIT09IC0xKSB7XG4gICAgICAgICAgLy8gSWYgbW9yZSB0aGFuIG9uZSBtYXRjaCBpcyBmb3VuZCwgZG9uJ3QgcmV0dXJuIGFueVxuICAgICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuLy8gSWYgdGhlcmUgaXMgb25seSBhIHNpbmdsZSBpbmxpbmUgc2NyaXB0IG9uIHRoZSBwYWdlLCByZXR1cm4gaXQ7IG90aGVyd2lzZSBgbnVsbGBcbmZ1bmN0aW9uIGdldFNvbGVJbmxpbmVTY3JpcHQoZWxpZ2libGVTY3JpcHRzKSB7XG4gIHZhciBpLCBsZW4sXG4gICAgICBzY3JpcHQgPSBudWxsO1xuICBlbGlnaWJsZVNjcmlwdHMgPSBlbGlnaWJsZVNjcmlwdHMgfHwgc2NyaXB0cztcbiAgZm9yIChpID0gMCwgbGVuID0gZWxpZ2libGVTY3JpcHRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlbGlnaWJsZVNjcmlwdHNbaV0uaGFzQXR0cmlidXRlKFwic3JjXCIpKSB7XG4gICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NyaXB0O1xufVxuXG4vLyBHZXQgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgc2NyaXB0IFVSTCBmcm9tIGFuIEVycm9yIHN0YWNrIHRyYWNlXG5mdW5jdGlvbiBnZXRTY3JpcHRVcmxGcm9tU3RhY2soc3RhY2ssIHNraXBTdGFja0RlcHRoKSB7XG4gIHZhciBtYXRjaGVzLCByZW1haW5pbmdTdGFjayxcbiAgICAgIHVybCA9IG51bGwsXG4gICAgICBpZ25vcmVNZXNzYWdlID0gdHlwZW9mIHNraXBTdGFja0RlcHRoID09PSBcIm51bWJlclwiO1xuICBza2lwU3RhY2tEZXB0aCA9IGlnbm9yZU1lc3NhZ2UgPyBNYXRoLnJvdW5kKHNraXBTdGFja0RlcHRoKSA6IDA7XG4gIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIgJiYgc3RhY2spIHtcbiAgICBpZiAoaWdub3JlTWVzc2FnZSkge1xuICAgICAgbWF0Y2hlcyA9IHN0YWNrLm1hdGNoKC8oZGF0YTp0ZXh0XFwvamF2YXNjcmlwdCg/OjtbXixdKyk/LC4rP3woPzp8YmxvYjopKD86aHR0cFtzXT98ZmlsZSk6XFwvXFwvW1xcL10/Lis/XFwvW146XFwpXSo/KSg/OjpcXGQrKSg/OjpcXGQrKT8vKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtYXRjaGVzID0gc3RhY2subWF0Y2goL14oPzp8W146QF0qQHwuK1xcKUAoPz1kYXRhOnRleHRcXC9qYXZhc2NyaXB0fGJsb2J8aHR0cFtzXT98ZmlsZSl8Lis/XFxzKyg/OiBhdCB8QCkoPzpbXjpcXChdKyApKltcXChdPykoZGF0YTp0ZXh0XFwvamF2YXNjcmlwdCg/OjtbXixdKyk/LC4rP3woPzp8YmxvYjopKD86aHR0cFtzXT98ZmlsZSk6XFwvXFwvW1xcL10/Lis/XFwvW146XFwpXSo/KSg/OjpcXGQrKSg/OjpcXGQrKT8vKTtcblxuICAgICAgaWYgKCEobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSkge1xuICAgICAgICBtYXRjaGVzID0gc3RhY2subWF0Y2goL1xcKUAoZGF0YTp0ZXh0XFwvamF2YXNjcmlwdCg/OjtbXixdKyk/LC4rP3woPzp8YmxvYjopKD86aHR0cFtzXT98ZmlsZSk6XFwvXFwvW1xcL10/Lis/XFwvW146XFwpXSo/KSg/OjpcXGQrKSg/OjpcXGQrKT8vKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgICBpZiAoc2tpcFN0YWNrRGVwdGggPiAwKSB7XG4gICAgICAgIHJlbWFpbmluZ1N0YWNrID0gc3RhY2suc2xpY2Uoc3RhY2suaW5kZXhPZihtYXRjaGVzWzBdKSArIG1hdGNoZXNbMF0ubGVuZ3RoKTtcbiAgICAgICAgdXJsID0gZ2V0U2NyaXB0VXJsRnJvbVN0YWNrKHJlbWFpbmluZ1N0YWNrLCAoc2tpcFN0YWNrRGVwdGggLSAxKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXJsID0gbWF0Y2hlc1sxXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBIYW5kbGUgbW9yZSBlZGdlIGNhc2VzIVxuICAgIC8vIEZpeGVzICMxXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvMVxuXG4gICAgLy8gPz8/XG5cbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG5cbi8vIEdldCB0aGUgZmFydGhlc3QgY3VycmVudGx5IGV4ZWN1dGluZyAoaS5lLiB5ZXMsIEVYRUNVVElORykgYHNjcmlwdGAgRE9NXG4vLyBlbGVtZW50IGZvciB0aGUgY2FsbGVyIGZ1bmN0aW9uLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgaXQgaXMgdGhhdCBgc2NyaXB0YFxuLy8gRE9NIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIGV2YWx1YXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoZSBmYXJ0aGVzdFxuLy8gY3VycmVudGx5IGV4ZWN1dGluZyBgc2NyaXB0YCBET00gZWxlbWVudCB3b3VsZCB0eXBpY2FsbHkgYmUgY29uc2lkZXJlZCB0aGVcbi8vIG9yaWdpbmF0b3Igb2YgdGhlIGN1cnJlbnQgZXhlY3V0aW9uIHN0YWNrLlxuZnVuY3Rpb24gX2ZhcnRoZXN0RXhlY3V0aW5nU2NyaXB0KCkge1xuICAvKmpzaGludCBub2FyZzpmYWxzZSAqL1xuXG4gIC8vIFRPRE86IEltcGxlbWVudCFcbiAgLy8gRml4ZXMgIzNcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvM1xuICByZXR1cm4gbnVsbDtcblxuLypcbiAgLy8gWWVzLCB0aGlzIElTIHBvc3NpYmxlLCBpLmUuIGlmIGEgc2NyaXB0IHJlbW92ZXMgb3RoZXIgc2NyaXB0cyAob3IgaXRzZWxmKVxuICBpZiAoc2NyaXB0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEd1YXJhbnRlZWQgYWNjdXJhdGUgaW4gSUUgNi0xMC5cbiAgLy8gTm90IGFjY3VyYXRlL3N1cHBvcnRlZCBpbiBhbnkgb3RoZXIgYnJvd3NlcnMuXG4gIGlmIChpc05vdE9wZXJhICYmIHN1cHBvcnRzU2NyaXB0UmVhZHlTdGF0ZSkge1xuICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgIGlmIChzY3JpcHRzW2ldLnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIikge1xuICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgc3RhY2ssXG4gICAgICBlID0gbmV3IEVycm9yKCk7XG4gIGlmIChoYXNTdGFja0JlZm9yZVRocm93aW5nKSB7XG4gICAgc3RhY2sgPSBlLnN0YWNrO1xuICB9XG4gIGlmICghc3RhY2sgJiYgaGFzU3RhY2tBZnRlclRocm93aW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIE5PVEU6IENhbm5vdCB1c2UgYGVyci5zb3VyY2VVUkxgIG9yIGBlcnIuZmlsZU5hbWVgIGFzIHRoZXkgd2lsbCBhbHdheXMgYmUgVEhJUyBzY3JpcHRcbiAgICAgIHN0YWNrID0gZXJyLnN0YWNrO1xuICAgIH1cbiAgfVxuICBpZiAoc3RhY2spIHtcbiAgICB2YXIgdXJsID0gZ2V0U2NyaXB0VXJsRnJvbVN0YWNrKHN0YWNrLCBza2lwU3RhY2tEZXB0aCk7XG4gICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdEZyb21VcmwodXJsLCBzY3JpcHRzICk7XG4gICAgaWYgKCFzY3JpcHQgJiYgcGFnZVVybCAmJiB1cmwgPT09IHBhZ2VVcmwpIHtcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3JyZWN0IGlubGluZSBzY3JpcHQgYnkgc2VhcmNoaW5nIHRocm91Z2hcbiAgICAgIC8vIGlubGluZSBzY3JpcHRzJyB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBjYWxsZXIgZnVuY3Rpb24ncyBzb3VyY2VcbiAgICAgIC8vIGNvZGUgdG8gYmUgcHJlc2VudC4gSWYgdGhlIGNhbGxlciBmdW5jdGlvbidzIHNvdXJjZSBjb2RlIGlzXG4gICAgICAvLyBub3QgYXZhaWxhYmxlLCBzZWUgaWYgdGhlcmUgaXMgb25seSBvbmUgaW5saW5lIHNjcmlwdCBlbGVtZW50XG4gICAgICAvLyBpbiB0aGUgRE9NIGFuZCByZXR1cm4gdGhhdCAoZXZlbiB0aG91Z2ggaXQgbWF5IGJlIHdyb25nKVxuXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQhXG4gICAgICAvLyBGaXhlcyAjNCBpbiBwYXJ0XG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0L2lzc3Vlcy80XG5cbiAgICAgIHZhciBjYWxsZXJGbiA9IF9mYXJ0aGVzdEV4ZWN1dGluZ1NjcmlwdC5jYWxsZXIgfHwgbnVsbCxcbiAgICAgICAgICBjYWxsZXJGblN0YWNrID0gW10sXG4gICAgICAgICAgY2FsbGVyRm5Tb3VyY2UgPSBudWxsO1xuXG4gICAgICB3aGlsZSAoY2FsbGVyRm4pIHtcbiAgICAgICAgY2FsbGVyRm5TdGFjay5wdXNoKGNhbGxlckZuKTtcbiAgICAgICAgY2FsbGVyRm4gPSBjYWxsZXJGbi5jYWxsZXIgfHwgbnVsbDtcbiAgICAgIH1cbiAgICAgIGNhbGxlckZuID0gY2FsbGVyRm5TdGFjay5zbGljZSgtMSlbMF07XG4gICAgICBjYWxsZXJGblNvdXJjZSA9IGNhbGxlckZuID8gKFwiXCIgKyBjYWxsZXJGbikgOiBudWxsO1xuXG5cbiAgICAgIGlmIChjYWxsZXJGblNvdXJjZSkge1xuICAgICAgICBzY3JpcHQgPSBnZXRJbmxpbmVTY3JpcHRGcm9tQ2FsbGVyU291cmNlKGNhbGxlckZuU291cmNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGEgbG9vc2UgYXNzdW1wdGlvbiB0aGF0IGNvdWxkIGJlIGluYWNjdXJhdGUhXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAgICAgLy8gIC0gSWYgdGhlIGlubGluZSBzY3JpcHQgdGhhdCBpbml0aWF0ZWQgdGhlIGNhbGwgd2FzIGFsc28gcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gICAgICAgIC8vICAtIElmIHRoZSBjYWxsIHdhcyBpbml0aWF0ZWQgYnkgYW4gZWxlbWVudCdzIGlubGluZSBldmVudCBoYW5kbGVyLFxuICAgICAgICAvLyAgICBlLmcuIGA8YSBvbmNsaWNrPVwiKGZ1bmN0aW9uKCkgeyBhbGVydChjdXJyZW50RXhlY3V0aW5nU2NyaXB0KCkpOyB9KClcIj5jbGljazwvYT5gXG4gICAgICAgIHNjcmlwdCA9IGdldFNvbGVJbmxpbmVTY3JpcHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxuXG4gIC8vIE5PVEU6IFRoaXMgaXMgYSBsb29zZSBhc3N1bXB0aW9uIHRoYXQgY291bGQgYmUgaW5hY2N1cmF0ZSFcbiAgLy9cbiAgLy8gSW5hY2N1cmFjaWVzOlxuICAvLyAgLSBJZiBhIHNjcmlwdCBpcyBjcmVhdGVkIGR5bmFtaWNhbGx5IGFuZCBhcHBlbmRlZCB0byBzb21lIHBvc2l0aW9uXG4gIC8vICAgIG90aGVyIHRoYW4gdGhlIHZlcnkgZW5kIG9mIHRoZSBkb2N1bWVudC5cbiAgLy8gIC0gSWYgbXVsdGlwbGUgc2NyaXB0cyBhcmUgY3JlYXRlZCBkeW5hbWljYWxseSBhbmQgYWxsIGFwcGVuZGVkIHRvIHRoZVxuICAvLyAgICBzYW1lIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQgKGFuZCBkbyBub3QgaGF2ZSB0aGVpciBgYXN5bmNgIGF0dHJpYnV0ZXNcbiAgLy8gICAgc2V0IHRvIGBmYWxzZWAsIGF0IGxlYXN0IGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBhc3luYyBzY3JpcHQgZXZhbHVhdGlvbi5cbiAgLy8gICAgb3RoZXIgdGhhbiB0aGUgdmVyeSBlbmQgb2YgdGhlIGRvY3VtZW50LlxuICAvLyAgLSBJZiBhbnkgc2NyaXB0cyBhcmUgYWRkZWQgd2l0aCB0aGUgYGFzeW5jYCBhdHRyaWJ1dGUgc2V0IHRvIGB0cnVlYCBpbiBhIGJyb3dzZXJcbiAgLy8gICAgdGhhdCBzdXBwb3J0cyBpdC5cbiAgLy8gIC0gTWF5IGdldCBjb25mdXNlZCBieSBgc2NyaXB0YCBlbGVtZW50cyB3aXRoaW4gYHN2Z2AgZWxlbWVudHNcbiAgcmV0dXJuIHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXSB8fCBudWxsO1xuKi9cbn1cblxuXG4vLyBHZXQgdGhlIG9yaWdpbmF0aW5nIGN1cnJlbnRseSBleGVjdXRpbmcgKGkuZS4geWVzLCBFWEVDVVRJTkcpIGBzY3JpcHRgIERPTVxuLy8gZWxlbWVudCBvciBhdHRyaWJ1dGUgbm9kZSAoZS5nLiBgb25jbGlja2ApIGZvciB0aGUgY2FsbGVyIGZ1bmN0aW9uLFxuLy8gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGl0IGlzIHRoYXQgYHNjcmlwdGAgRE9NIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nXG4vLyBldmFsdWF0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGUgb3JpZ2luYXRpbmcgY3VycmVudGx5IGV4ZWN1dGluZyBgc2NyaXB0YFxuLy8gRE9NIGVsZW1lbnQgW29yIGF0dHJpYnV0ZSBub2RlXSBpcyB0aGUgb3JpZ2luYXRvciBvZiB0aGUgY3VycmVudCBleGVjdXRpb24gc3RhY2suXG5mdW5jdGlvbiBfb3JpZ2luYXRpbmdFeGVjdXRpbmdTY3JpcHQoKSB7XG4gIC8vIFRPRE86IEltcGxlbWVudCFcbiAgLy8gRml4ZXMgIzJcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvMlxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gR2V0IHRoZSBuZWFyZXN0IGN1cnJlbnRseSBleGVjdXRpbmcgKGkuZS4geWVzLCBFWEVDVVRJTkcpIGBzY3JpcHRgIERPTVxuLy8gZWxlbWVudCBmb3IgdGhlIGNhbGxlciBmdW5jdGlvbiwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGl0IGlzIHRoYXQgYHNjcmlwdGBcbi8vIERPTSBlbGVtZW50IGlzIGN1cnJlbnRseSBiZWluZyBldmFsdWF0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuZnVuY3Rpb24gX25lYXJlc3RFeGVjdXRpbmdTY3JpcHQoKSB7XG4gIC8qanNoaW50IG5vYXJnOmZhbHNlICovXG5cbiAgLy8gWWVzLCB0aGlzIElTIHBvc3NpYmxlLCBpLmUuIGlmIGEgc2NyaXB0IHJlbW92ZXMgb3RoZXIgc2NyaXB0cyAob3IgaXRzZWxmKVxuICBpZiAoc2NyaXB0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBpLCBlLCBzdGFjaywgdXJsLCBzY3JpcHQsXG4gICAgICBlbGlnaWJsZVNjcmlwdHMgPSBbXSxcbiAgICAgIHNraXBTdGFja0RlcHRoID0gX25lYXJlc3RFeGVjdXRpbmdTY3JpcHQuc2tpcFN0YWNrRGVwdGggfHwgMSxcblxuICAgICAgLy8gVE9ETzogSW1wbGVtZW50IVxuICAgICAgLy8gRml4ZXMgIzQgaW4gcGFydFxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvNFxuICAgICAgY2FsbGVyRm5Tb3VyY2UgPSBudWxsOyAgLy8oXCJcIiArIChfbmVhcmVzdEV4ZWN1dGluZ1NjcmlwdC5jYWxsZXIgfHwgXCJcIikpIHx8IG51bGw7XG5cbiAgLy8gVGhpcyBwYXJ0IHdpbGwgb25seSBoZWxwIGluIElFIDYtMTAuXG4gIGZvciAoaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlzTm90T3BlcmEgJiYgc3VwcG9ydHNTY3JpcHRSZWFkeVN0YXRlKSB7XG4gICAgICBpZiAoc2NyaXB0UmVhZHlSZWdleC50ZXN0KHNjcmlwdHNbaV0ucmVhZHlTdGF0ZSkpIHtcbiAgICAgICAgZWxpZ2libGVTY3JpcHRzLnB1c2goc2NyaXB0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxpZ2libGVTY3JpcHRzLnB1c2goc2NyaXB0c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZSA9IG5ldyBFcnJvcigpO1xuICBpZiAoaGFzU3RhY2tCZWZvcmVUaHJvd2luZykge1xuICAgIHN0YWNrID0gZS5zdGFjaztcbiAgfVxuICBpZiAoIXN0YWNrICYmIGhhc1N0YWNrQWZ0ZXJUaHJvd2luZykge1xuICAgIHRyeSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBOT1RFOiBDYW5ub3QgdXNlIGBlcnIuc291cmNlVVJMYCBvciBgZXJyLmZpbGVOYW1lYCBhcyB0aGV5IHdpbGwgYWx3YXlzIGJlIFRISVMgc2NyaXB0XG4gICAgICBzdGFjayA9IGVyci5zdGFjaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhY2spIHtcbiAgICB1cmwgPSBnZXRTY3JpcHRVcmxGcm9tU3RhY2soc3RhY2ssIHNraXBTdGFja0RlcHRoKTtcbiAgICBzY3JpcHQgPSBnZXRTY3JpcHRGcm9tVXJsKHVybCwgZWxpZ2libGVTY3JpcHRzKTtcblxuICAgIGlmICghc2NyaXB0ICYmIHBhZ2VVcmwgJiYgdXJsID09PSBwYWdlVXJsKSB7XG4gICAgICAvLyBUcnkgdG8gZmluZCB0aGUgY29ycmVjdCBpbmxpbmUgc2NyaXB0IGJ5IHNlYXJjaGluZyB0aHJvdWdoXG4gICAgICAvLyBpbmxpbmUgc2NyaXB0cycgdGV4dCBjb250ZW50IGZvciB0aGUgY2FsbGVyIGZ1bmN0aW9uJ3Mgc291cmNlXG4gICAgICAvLyBjb2RlIHRvIGJlIHByZXNlbnQuXG4gICAgICBpZiAoY2FsbGVyRm5Tb3VyY2UpIHtcbiAgICAgICAgc2NyaXB0ID0gZ2V0SW5saW5lU2NyaXB0RnJvbUNhbGxlclNvdXJjZShjYWxsZXJGblNvdXJjZSwgZWxpZ2libGVTY3JpcHRzKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSBjYWxsZXIgZnVuY3Rpb24ncyBzb3VyY2UgY29kZSBpcyBub3QgYXZhaWxhYmxlLCBzZWUgaWZcbiAgICAgIC8vIHRoZXJlIGlzIG9ubHkgb25lIGlubGluZSBzY3JpcHQgZWxlbWVudCBpbiB0aGUgRE9NIGFuZCByZXR1cm5cbiAgICAgIC8vIHRoYXQgKGV2ZW4gdGhvdWdoIGl0IG1heSBiZSB3cm9uZykuLi5cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGEgbG9vc2UgYXNzdW1wdGlvbiB0aGF0IGNvdWxkIGJlIGluYWNjdXJhdGUhXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAgICAgLy8gIC0gSWYgdGhlIGlubGluZSBzY3JpcHQgdGhhdCBpbml0aWF0ZWQgdGhlIGNhbGwgd2FzIGFsc28gcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gICAgICAgIC8vICAtIElmIHRoZSBjYWxsIHdhcyBpbml0aWF0ZWQgYnkgYW4gZWxlbWVudCdzIGlubGluZSBldmVudCBoYW5kbGVyLFxuICAgICAgICAvLyAgICBlLmcuIGA8YSBvbmNsaWNrPVwiKGZ1bmN0aW9uKCkgeyBhbGVydChjdXJyZW50RXhlY3V0aW5nU2NyaXB0KCkpOyB9KClcIj5jbGljazwvYT5gXG4gICAgICAgIHNjcmlwdCA9IGdldFNvbGVJbmxpbmVTY3JpcHQoZWxpZ2libGVTY3JpcHRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBXZWxjb21lIHRvIHRoZSBJc2xhbmQgb2YgSW5hY2N1cmF0ZSBBc3N1bXB0aW9ucyFcbiAgLy8gTk9URTogQUxMIG9mIHRoZSBmb2xsb3dpbmcgYXJlIGxvb3NlIGFzc3VtcHRpb25zIHRoYXQgY291bGQgYmUgaW5hY2N1cmF0ZSFcbiAgLy9cblxuICBpZiAoIXNjcmlwdCkge1xuICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAvLyAgLSBJZiB0aGUgaW5saW5lIHNjcmlwdCB0aGF0IGluaXRpYXRlZCB0aGUgY2FsbCB3YXMgYWxzbyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAvLyAgLSBJZiB0aGUgY2FsbCB3YXMgaW5pdGlhdGVkIGJ5IGFuIGVsZW1lbnQncyBpbmxpbmUgZXZlbnQgaGFuZGxlcixcbiAgICAvLyAgICBlLmcuIGA8YSBvbmNsaWNrPVwiKGZ1bmN0aW9uKCkgeyBhbGVydChjdXJyZW50RXhlY3V0aW5nU2NyaXB0KCkpOyB9KClcIj5jbGljazwvYT5gXG4gICAgaWYgKGVsaWdpYmxlU2NyaXB0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNjcmlwdCA9IGVsaWdpYmxlU2NyaXB0c1swXTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNjcmlwdCkge1xuICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAvLyAgLSBJZiBzY3JpcHQgY3VycmVudGx5IGJlaW5nIHN5bmNocm9ub3VzbHkgZXZhbHVhdGVkIGJ5IHRoZSBwYXJzZXIgaXMgdGhlXG4gICAgLy8gICAgb3JpZ2luYXRvciBvZiB0aGlzIGNhbGwgc3RhY2sgYnV0IE5PVCB0aGUgc291cmNlIHNjcmlwdCBvZiB0aGUgY2FsbGVyL2ludm9jYXRpb25cbiAgICAvLyAgICBlLmcuXG4gICAgLy8gICAgYGBgaHRtbFxuICAgIC8vICAgIDxzY3JpcHQgaWQ9XCJhXCI+XG4gICAgLy8gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdENhbGxlckZuKCkge1xuICAgIC8vICAgICAgcmV0dXJuIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQubmVhcigpO1xuICAgIC8vICAgIH1cbiAgICAvLyAgICA8L3NjcmlwdD5cbiAgICAvLyAgICA8c2NyaXB0IGlkPVwiYlwiPlxuICAgIC8vICAgIC8vIFNob3VsZCBnZXQgYHNjcmlwdFtpZD1cImFcIl1gIGJ1dCB3aWxsIGdldCBgc2NyaXB0W2lkPVwiYlwiXWAgaW5zdGVhZFxuICAgIC8vICAgIGdldEN1cnJlbnRTY3JpcHRDYWxsZXJGbigpO1xuICAgIC8vICAgIDwvc2NyaXB0PlxuICAgIGlmIChoYXNOYXRpdmVDdXJyZW50U2NyaXB0QWNjZXNzb3IpIHtcbiAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzY3JpcHQpIHtcbiAgICAvLyBJbmFjY3VyYWNpZXM6XG4gICAgLy8gIC0gSWYgc2NyaXB0IGN1cnJlbnRseSBiZWluZyBzeW5jaHJvbm91c2x5IGV2YWx1YXRlZCBieSB0aGUgcGFyc2VyIGlzIHRoZVxuICAgIC8vICAgIG9yaWdpbmF0b3Igb2YgdGhpcyBjYWxsIHN0YWNrIGJ1dCBOT1QgdGhlIHNvdXJjZSBzY3JpcHQgb2YgdGhlIGNhbGxlci9pbnZvY2F0aW9uXG4gICAgLy8gICAgZS5nLlxuICAgIC8vICAgIGBgYGh0bWxcbiAgICAvLyAgICA8c2NyaXB0IGlkPVwiYVwiPlxuICAgIC8vICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRDYWxsZXJGbigpIHtcbiAgICAvLyAgICAgIHJldHVybiBjdXJyZW50RXhlY3V0aW5nU2NyaXB0Lm5lYXIoKTtcbiAgICAvLyAgICB9XG4gICAgLy8gICAgPC9zY3JpcHQ+XG4gICAgLy8gICAgPHNjcmlwdCBpZD1cImJcIj5cbiAgICAvLyAgICAvLyBTaG91bGQgZ2V0IGBzY3JpcHRbaWQ9XCJhXCJdYCBidXQgd2lsbCBnZXQgYHNjcmlwdFtpZD1cImJcIl1gIGluc3RlYWRcbiAgICAvLyAgICBnZXRDdXJyZW50U2NyaXB0Q2FsbGVyRm4oKTtcbiAgICAvLyAgICA8L3NjcmlwdD5cbiAgICBpZiAoaXNOb3RPcGVyYSAmJiBzdXBwb3J0c1NjcmlwdFJlYWR5U3RhdGUpIHtcbiAgICAgIGZvciAoaSA9IGVsaWdpYmxlU2NyaXB0cy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAgIGlmIChlbGlnaWJsZVNjcmlwdHNbaV0ucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiKSB7XG4gICAgICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzY3JpcHQpIHtcbiAgICAvLyBJbmFjY3VyYWNpZXM6XG4gICAgLy8gIC0gSWYgYSBzY3JpcHQgaXMgY3JlYXRlZCBkeW5hbWljYWxseSBhbmQgYXBwZW5kZWQgdG8gc29tZSBwb3NpdGlvblxuICAgIC8vICAgIG90aGVyIHRoYW4gdGhlIHZlcnkgZW5kIG9mIHRoZSBkb2N1bWVudC5cbiAgICAvLyAgLSBJZiBtdWx0aXBsZSBzY3JpcHRzIGFyZSBjcmVhdGVkIGR5bmFtaWNhbGx5IGFuZCBhbGwgYXBwZW5kZWQgdG8gdGhlXG4gICAgLy8gICAgc2FtZSBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50IChhbmQgZG8gbm90IGhhdmUgdGhlaXIgYGFzeW5jYCBhdHRyaWJ1dGVzXG4gICAgLy8gICAgc2V0IHRvIGBmYWxzZWAsIGF0IGxlYXN0IGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBhc3luYyBzY3JpcHQgZXZhbHVhdGlvbi5cbiAgICAvLyAgICBvdGhlciB0aGFuIHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZG9jdW1lbnQuXG4gICAgLy8gIC0gSWYgYW55IHNjcmlwdHMgYXJlIGFkZGVkIHdpdGggdGhlIGBhc3luY2AgYXR0cmlidXRlIHNldCB0byBgdHJ1ZWAgaW4gYSBicm93c2VyXG4gICAgLy8gICAgdGhhdCBzdXBwb3J0cyBpdC5cbiAgICAvLyAgLSBNYXkgZ2V0IGNvbmZ1c2VkIGJ5IGBzY3JpcHRgIGVsZW1lbnRzIHdpdGhpbiBgc3ZnYCBlbGVtZW50c1xuICAgIC8vICAtIElmIHNjcmlwdCBjdXJyZW50bHkgYmVpbmcgc3luY2hyb25vdXNseSBldmFsdWF0ZWQgYnkgdGhlIHBhcnNlciBpcyB0aGVcbiAgICAvLyAgICBvcmlnaW5hdG9yIG9mIHRoaXMgY2FsbCBzdGFjayBidXQgTk9UIHRoZSBzb3VyY2Ugc2NyaXB0IG9mIHRoZSBjYWxsZXIvaW52b2NhdGlvblxuICAgIC8vICAgIGUuZy5cbiAgICAvLyAgICBgYGBodG1sXG4gICAgLy8gICAgPHNjcmlwdCBpZD1cImFcIj5cbiAgICAvLyAgICBmdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0Q2FsbGVyRm4oKSB7XG4gICAgLy8gICAgICByZXR1cm4gY3VycmVudEV4ZWN1dGluZ1NjcmlwdC5uZWFyKCk7XG4gICAgLy8gICAgfVxuICAgIC8vICAgIDwvc2NyaXB0PlxuICAgIC8vICAgIDxzY3JpcHQgaWQ9XCJiXCI+XG4gICAgLy8gICAgLy8gU2hvdWxkIGdldCBgc2NyaXB0W2lkPVwiYVwiXWAgYnV0IHdpbGwgZ2V0IGBzY3JpcHRbaWQ9XCJiXCJdYCBpbnN0ZWFkXG4gICAgLy8gICAgZ2V0Q3VycmVudFNjcmlwdENhbGxlckZuKCk7XG4gICAgLy8gICAgPC9zY3JpcHQ+XG4gICAgLy8gICAgYGBgXG4gICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2VsaWdpYmxlU2NyaXB0cy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuLy8gRGVmYXVsdCBzdGFjayBkZXB0aCB0byBza2lwIG92ZXIgd2hlbiBhbmFseXppbmcgY2FsbCBzdGFjayBmcmFtZXNcbl9uZWFyZXN0RXhlY3V0aW5nU2NyaXB0LnNraXBTdGFja0RlcHRoID0gMTtcblxuXG5cbiAgICAvL1xuICAgIC8vIEV4cG9ydCB0aGUgQVBJXG4gICAgLy9cbiAgICB2YXIgY3VycmVudEV4ZWN1dGluZ1NjcmlwdCAgICA9IF9uZWFyZXN0RXhlY3V0aW5nU2NyaXB0OyAgICAgIC8vIGRlZmF1bHRcbiAgICBjdXJyZW50RXhlY3V0aW5nU2NyaXB0Lm5lYXIgICA9IF9uZWFyZXN0RXhlY3V0aW5nU2NyaXB0O1xuICAgIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQuZmFyICAgID0gX2ZhcnRoZXN0RXhlY3V0aW5nU2NyaXB0O1xuICAgIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQub3JpZ2luID0gX29yaWdpbmF0aW5nRXhlY3V0aW5nU2NyaXB0O1xuXG5cbiAgICAvLyBKdXN0IHJldHVybiBhIHZhbHVlIHRvIGRlZmluZSB0aGUgbW9kdWxlIGV4cG9ydC5cbiAgICAvLyBUaGlzIGV4YW1wbGUgcmV0dXJucyBhbiBvYmplY3QsIGJ1dCB0aGUgbW9kdWxlXG4gICAgLy8gY2FuIHJldHVybiBhIGZ1bmN0aW9uIGFzIHRoZSBleHBvcnRlZCB2YWx1ZS5cbiAgICByZXR1cm4gY3VycmVudEV4ZWN1dGluZ1NjcmlwdDtcbiAgfSlcbik7XG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIG8sdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyB1LHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBmLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGF9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgbCxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyB2LGh5ZHJhdGUgYXMgcCxyZW5kZXIgYXMgZCxfdW5tb3VudCBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgZyxGcmFnbWVudCBhcyB4fWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBFKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIHcobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9dmFyIEM9ZnVuY3Rpb24obil7dmFyIHQsZTtmdW5jdGlvbiByKHQpe3ZhciBlO3JldHVybihlPW4uY2FsbCh0aGlzLHQpfHx0aGlzKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxlfXJldHVybiBlPW4sKHQ9cikucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsdC5fX3Byb3RvX189ZSxyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gdyh0aGlzLnByb3BzLG4pfHx3KHRoaXMuc3RhdGUsdCl9LHJ9KGwpO2Z1bmN0aW9uIF8obix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjp3KHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sRSh7fSx0KSl9cmV0dXJuIHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci50PSEwLHJ9dmFyIEE9aC52bm9kZTtmdW5jdGlvbiBTKG4pe2Z1bmN0aW9uIHQodCl7dmFyIGU9RSh7fSx0KTtyZXR1cm4gZGVsZXRlIGUucmVmLG4oZSx0LnJlZil9cmV0dXJuIHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdC50PSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9aC52bm9kZT1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS50JiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLEEmJkEobil9O3ZhciBrPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4/dihuKS5tYXAodCk6bnVsbH0sRj17bWFwOmssZm9yRWFjaDprLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3YobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7aWYoMSE9PShuPXYobikpLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZHJlbi5vbmx5KCkgZXhwZWN0cyBvbmx5IG9uZSBjaGlsZC5cIik7cmV0dXJuIG5bMF19LHRvQXJyYXk6dn0sTj1oLl9fZTtmdW5jdGlvbiBSKG4pe3JldHVybiBuJiYoKG49RSh7fSxuKSkuX19jPW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChSKSksbn1mdW5jdGlvbiBNKG4pe3RoaXMuX191PTAsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Lm8mJnQubyhuKX1mdW5jdGlvbiBPKG4pe3ZhciB0LGUscjtmdW5jdGlvbiBvKG8pe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSxvKX1yZXR1cm4gby5kaXNwbGF5TmFtZT1cIkxhenlcIixvLnQ9ITAsb31mdW5jdGlvbiBqKCl7dGhpcy51PW51bGwsdGhpcy5pPW51bGx9aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsbz10O289by5fXzspaWYoKHI9by5fX2MpJiZyLmwpcmV0dXJuIHIubChuLHQuX19jKTtOKG4sdCxlKX0sKE0ucHJvdG90eXBlPW5ldyBsKS5sPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dGhpcyxyPVUoZS5fX3YpLG89ITEsdT1mdW5jdGlvbigpe298fChvPSEwLHI/cihpKTppKCkpfTt0Ll9fYz10LmNvbXBvbmVudFdpbGxVbm1vdW50LHQuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1KCksdC5fX2MmJnQuX19jKCl9O3ZhciBpPWZ1bmN0aW9uKCl7LS1lLl9fdXx8KGUuX192Ll9fa1swXT1lLnN0YXRlLm8sZS5zZXRTdGF0ZSh7bzplLl9fYj1udWxsfSkpfTtlLl9fdSsrfHxlLnNldFN0YXRlKHtvOmUuX19iPWUuX192Ll9fa1swXX0pLG4udGhlbih1LHUpfSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtyZXR1cm4gdGhpcy5fX2ImJih0aGlzLl9fdi5fX2tbMF09Uih0aGlzLl9fYiksdGhpcy5fX2I9bnVsbCksW3MobCxudWxsLHQubz9udWxsOm4uY2hpbGRyZW4pLHQubyYmbi5mYWxsYmFja119O3ZhciB6PWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLmkuZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLmkuc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19OyhqLnByb3RvdHlwZT1uZXcgbCkubz1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10LmkuZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24obyl7dmFyIHU9ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2gobykseih0LG4scikpOm8oKX07ZT9lKHUpOnUoKX19LGoucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLmk9bmV3IE1hcDt2YXIgdD12KG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5pLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxqLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9ai5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO24uaS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7eihuLGUsdCl9KX07dmFyIEw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7fXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnByb3BzLmNvbnRleHR9LHQucmVuZGVyPWZ1bmN0aW9uKG4pe3JldHVybiBuLmNoaWxkcmVufSxufSgpO2Z1bmN0aW9uIFAobil7dmFyIHQ9dGhpcyxlPW4uY29udGFpbmVyLHI9cyhMLHtjb250ZXh0OnQuY29udGV4dH0sbi52bm9kZSk7cmV0dXJuIHQucyYmdC5zIT09ZSYmKHQuaC5wYXJlbnROb2RlJiZ0LnMucmVtb3ZlQ2hpbGQodC5oKSxtKHQudiksdC5wPSExKSxuLnZub2RlP3QucD8oZS5fX2s9dC5fX2ssZChyLGUpLHQuX19rPWUuX19rKToodC5oPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLHAoXCJcIixlKSxlLmFwcGVuZENoaWxkKHQuaCksdC5wPSEwLHQucz1lLGQocixlLHQuaCksdC5fX2s9dGhpcy5oLl9fayk6dC5wJiYodC5oLnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LmgpLG0odC52KSksdC52PXIsdC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3QuaC5wYXJlbnROb2RlJiZ0LnMucmVtb3ZlQ2hpbGQodC5oKSxtKHQudil9LG51bGx9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKFAse3Zub2RlOm4sY29udGFpbmVyOnR9KX12YXIgRD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaHxob3JpenxtYXJrZXJ8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0fHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgpW0EtWl0vO2wucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307dmFyIFQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzO2Z1bmN0aW9uIFYobix0LGUpe2lmKG51bGw9PXQuX19rKWZvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7cmV0dXJuIFoobix0LGUpfWZ1bmN0aW9uIFoobix0LGUpe3JldHVybiBkKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH12YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIEkobix0KXtuW1wiVU5TQUZFX1wiK3RdJiYhblt0XSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sdCx7Y29uZmlndXJhYmxlOiExLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK3RdfSxzZXQ6ZnVuY3Rpb24obil7dGhpc1tcIlVOU0FGRV9cIit0XT1ufX0pfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1mdW5jdGlvbigpe30sbi5uYXRpdmVFdmVudD1ufTt2YXIgJD17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0scT1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7bi4kJHR5cGVvZj1UO3ZhciB0PW4udHlwZSxlPW4ucHJvcHM7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl7dmFyIHIsbyx1O2Zvcih1IGluIGUuZGVmYXVsdFZhbHVlJiYoZS52YWx1ZXx8MD09PWUudmFsdWV8fChlLnZhbHVlPWUuZGVmYXVsdFZhbHVlKSxkZWxldGUgZS5kZWZhdWx0VmFsdWUpLEFycmF5LmlzQXJyYXkoZS52YWx1ZSkmJmUubXVsdGlwbGUmJlwic2VsZWN0XCI9PT10JiYodihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pey0xIT1lLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSkmJihuLnByb3BzLnNlbGVjdGVkPSEwKX0pLGRlbGV0ZSBlLnZhbHVlKSxlKWlmKHI9RC50ZXN0KHUpKWJyZWFrO2lmKHIpZm9yKHUgaW4gbz1uLnByb3BzPXt9LGUpb1tELnRlc3QodSk/dS5yZXBsYWNlKC8oW0EtWjAtOV0pLyxcIi0kMVwiKS50b0xvd2VyQ2FzZSgpOnVdPWVbdV19KGUuY2xhc3N8fGUuY2xhc3NOYW1lKSYmKCQuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxlLmNsYXNzTmFtZSYmKGUuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY2xhc3NOYW1lXCIsJCkpLGZ1bmN0aW9uKHQpe3ZhciBlPW4udHlwZSxyPW4ucHJvcHM7aWYociYmXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBvPXt9O2Zvcih2YXIgdSBpbiByKS9eb24oQW5pfFRyYXxUb3UpLy50ZXN0KHUpJiYoclt1LnRvTG93ZXJDYXNlKCldPXJbdV0sZGVsZXRlIHJbdV0pLG9bdS50b0xvd2VyQ2FzZSgpXT11O2lmKG8ub25kb3VibGVjbGljayYmKHIub25kYmxjbGljaz1yW28ub25kb3VibGVjbGlja10sZGVsZXRlIHJbby5vbmRvdWJsZWNsaWNrXSksby5vbmJlZm9yZWlucHV0JiYoci5vbmJlZm9yZWlucHV0PXJbby5vbmJlZm9yZWlucHV0XSxkZWxldGUgcltvLm9uYmVmb3JlaW5wdXRdKSxvLm9uY2hhbmdlJiYoXCJ0ZXh0YXJlYVwiPT09ZXx8XCJpbnB1dFwiPT09ZS50b0xvd2VyQ2FzZSgpJiYhL15maWx8Y2hlfHJhL2kudGVzdChyLnR5cGUpKSl7dmFyIGk9by5vbmlucHV0fHxcIm9uaW5wdXRcIjtyW2ldfHwocltpXT1yW28ub25jaGFuZ2VdLGRlbGV0ZSByW28ub25jaGFuZ2VdKX19fSgpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJiF0Lm0mJnQucHJvdG90eXBlJiYoSSh0LnByb3RvdHlwZSxcImNvbXBvbmVudFdpbGxNb3VudFwiKSxJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiKSxJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiKSx0Lm09ITApLHEmJnEobil9O3ZhciBCPVwiMTYuOC4wXCI7ZnVuY3Rpb24gRyhuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gSihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1UfWZ1bmN0aW9uIEsobil7cmV0dXJuIEoobik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBRKG4pe3JldHVybiEhbi5fX2smJihkKG51bGwsbiksITApfWZ1bmN0aW9uIFgobil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgWT1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfTtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6byx1c2VJbXBlcmF0aXZlSGFuZGxlOnUsdXNlTWVtbzppLHVzZUNhbGxiYWNrOmYsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6YSx2ZXJzaW9uOlwiMTYuOC4wXCIsQ2hpbGRyZW46RixyZW5kZXI6VixoeWRyYXRlOlYsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpRLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0OmcsY3JlYXRlRmFjdG9yeTpHLGNsb25lRWxlbWVudDpLLGNyZWF0ZVJlZjpiLEZyYWdtZW50OngsaXNWYWxpZEVsZW1lbnQ6SixmaW5kRE9NTm9kZTpYLENvbXBvbmVudDpsLFB1cmVDb21wb25lbnQ6QyxtZW1vOl8sZm9yd2FyZFJlZjpTLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOlksU3VzcGVuc2U6TSxTdXNwZW5zZUxpc3Q6aixsYXp5Ok99O2V4cG9ydHtCIGFzIHZlcnNpb24sRiBhcyBDaGlsZHJlbixWIGFzIHJlbmRlcixaIGFzIGh5ZHJhdGUsUSBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLEcgYXMgY3JlYXRlRmFjdG9yeSxLIGFzIGNsb25lRWxlbWVudCxKIGFzIGlzVmFsaWRFbGVtZW50LFggYXMgZmluZERPTU5vZGUsQyBhcyBQdXJlQ29tcG9uZW50LF8gYXMgbWVtbyxTIGFzIGZvcndhcmRSZWYsWSBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxNIGFzIFN1c3BlbnNlLGogYXMgU3VzcGVuc2VMaXN0LE8gYXMgbGF6eX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwidmFyIG4sbCx1LHQsaSxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChuLGwsdSl7dmFyIHQsaT1hcmd1bWVudHMsbz17fTtmb3IodCBpbiBsKVwia2V5XCIhPT10JiZcInJlZlwiIT09dCYmKG9bdF09bFt0XSk7aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSx0PTM7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl1LnB1c2goaVt0XSk7aWYobnVsbCE9dSYmKG8uY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKHQgaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09b1t0XSYmKG9bdF09bi5kZWZhdWx0UHJvcHNbdF0pO3JldHVybiB2KG4sbyxsJiZsLmtleSxsJiZsLnJlZil9ZnVuY3Rpb24gdihsLHUsdCxpKXt2YXIgbz17dHlwZTpsLHByb3BzOnUsa2V5OnQscmVmOmksX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6bnVsbCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDB9O3JldHVybiBuLnZub2RlJiZuLnZub2RlKG8pLG99ZnVuY3Rpb24gcCgpe3JldHVybnt9fWZ1bmN0aW9uIHkobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gZChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBtKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9tKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP20obik6bnVsbH1mdW5jdGlvbiB3KG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gdyhuKX19ZnVuY3Rpb24gZyhsKXsoIWwuX19kJiYobC5fX2Q9ITApJiYxPT09dS5wdXNoKGwpfHxpIT09bi5kZWJvdW5jZVJlbmRlcmluZykmJigoaT1uLmRlYm91bmNlUmVuZGVyaW5nKXx8dCkoayl9ZnVuY3Rpb24gaygpe3ZhciBuLGwsdCxpLG8scixmO2Zvcih1LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbC5fX3YuX19iLW4uX192Ll9fYn0pO249dS5wb3AoKTspbi5fX2QmJih0PXZvaWQgMCxpPXZvaWQgMCxyPShvPShsPW4pLl9fdikuX19lLChmPWwuX19QKSYmKHQ9W10saT1UKGYsbyxzKHt9LG8pLGwuX19uLHZvaWQgMCE9PWYub3duZXJTVkdFbGVtZW50LG51bGwsdCxudWxsPT1yP20obyk6ciksJCh0LG8pLGkhPXImJncobykpKX1mdW5jdGlvbiBfKG4sbCx1LHQsaSxvLHIsYyxzKXt2YXIgaCx2LHAseSxkLHcsZyxrPXUmJnUuX19rfHxlLF89ay5sZW5ndGg7aWYoYz09ZiYmKGM9bnVsbCE9bz9vWzBdOl8/bSh1LDApOm51bGwpLGg9MCxsLl9faz1iKGwuX19rLGZ1bmN0aW9uKHUpe2lmKG51bGwhPXUpe2lmKHUuX189bCx1Ll9fYj1sLl9fYisxLG51bGw9PT0ocD1rW2hdKXx8cCYmdS5rZXk9PXAua2V5JiZ1LnR5cGU9PT1wLnR5cGUpa1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8Xzt2Kyspe2lmKChwPWtbdl0pJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSl7a1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWlmKHk9VChuLHUscD1wfHxmLHQsaSxvLHIsYyxzKSwodj11LnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCx1KSxnLnB1c2godix1Ll9fY3x8eSx1KSksbnVsbCE9eSl7aWYobnVsbD09dyYmKHc9eSksbnVsbCE9dS5fX2QpeT11Ll9fZCx1Ll9fZD1udWxsO2Vsc2UgaWYobz09cHx8eSE9Y3x8bnVsbD09eS5wYXJlbnROb2RlKXtuOmlmKG51bGw9PWN8fGMucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh5KTtlbHNle2ZvcihkPWMsdj0wOyhkPWQubmV4dFNpYmxpbmcpJiZ2PF87dis9MilpZihkPT15KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUoeSxjKX1cIm9wdGlvblwiPT1sLnR5cGUmJihuLnZhbHVlPVwiXCIpfWM9eS5uZXh0U2libGluZyxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGUmJihsLl9fZD15KX19cmV0dXJuIGgrKyx1fSksbC5fX2U9dyxudWxsIT1vJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsLnR5cGUpZm9yKGg9by5sZW5ndGg7aC0tOyludWxsIT1vW2hdJiZhKG9baF0pO2ZvcihoPV87aC0tOyludWxsIT1rW2hdJiZBKGtbaF0sa1toXSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKXooZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiBiKG4sbCx1KXtpZihudWxsPT11JiYodT1bXSksbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBuKWwmJnUucHVzaChsKG51bGwpKTtlbHNlIGlmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0KyspYihuW3RdLGwsdSk7ZWxzZSB1LnB1c2gobD9sKFwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj92KG51bGwsbixudWxsLG51bGwpOm51bGwhPW4uX19lfHxudWxsIT1uLl9fYz92KG4udHlwZSxuLnByb3BzLG4ua2V5LG51bGwpOm4pOm4pO3JldHVybiB1fWZ1bmN0aW9uIHgobixsLHUsdCxpKXt2YXIgbztmb3IobyBpbiB1KW8gaW4gbHx8UChuLG8sbnVsbCx1W29dLHQpO2ZvcihvIGluIGwpaSYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8UChuLG8sbFtvXSx1W29dLHQpfWZ1bmN0aW9uIEMobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1cIm51bWJlclwiPT10eXBlb2YgdSYmITE9PT1jLnRlc3QobCk/dStcInB4XCI6bnVsbD09dT9cIlwiOnV9ZnVuY3Rpb24gUChuLGwsdSx0LGkpe3ZhciBvLHIsZixlLGM7aWYoaT9cImNsYXNzTmFtZVwiPT09bCYmKGw9XCJjbGFzc1wiKTpcImNsYXNzXCI9PT1sJiYobD1cImNsYXNzTmFtZVwiKSxcImtleVwiPT09bHx8XCJjaGlsZHJlblwiPT09bCk7ZWxzZSBpZihcInN0eWxlXCI9PT1sKWlmKG89bi5zdHlsZSxcInN0cmluZ1wiPT10eXBlb2YgdSlvLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYoby5jc3NUZXh0PVwiXCIsdD1udWxsKSx0KWZvcihyIGluIHQpdSYmciBpbiB1fHxDKG8scixcIlwiKTtpZih1KWZvcihmIGluIHUpdCYmdVtmXT09PXRbZl18fEMobyxmLHVbZl0pfWVsc2VcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXT8oZT1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGM9bC50b0xvd2VyQ2FzZSgpLGw9KGMgaW4gbj9jOmwpLnNsaWNlKDIpLHU/KHR8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLE4sZSksKG4ubHx8KG4ubD17fSkpW2xdPXUpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLE4sZSkpOlwibGlzdFwiIT09bCYmXCJ0YWdOYW1lXCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidHlwZVwiIT09bCYmIWkmJmwgaW4gbj9uW2xdPW51bGw9PXU/XCJcIjp1OlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUmJlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJihsIT09KGw9bC5yZXBsYWNlKC9eeGxpbms6Py8sXCJcIikpP251bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSk6bi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCksdSk6bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfWZ1bmN0aW9uIE4obCl7dGhpcy5sW2wudHlwZV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIFQobCx1LHQsaSxvLHIsZixlLGMpe3ZhciBhLGgsdixwLG0sdyxnLGsseCxDLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7KGE9bi5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKGs9dS5wcm9wcyx4PShhPVAuY29udGV4dFR5cGUpJiZpW2EuX19jXSxDPWE/eD94LnByb3BzLnZhbHVlOmEuX186aSx0Ll9fYz9nPShoPXUuX19jPXQuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKGssQyk6KHUuX19jPWg9bmV3IGQoayxDKSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9RCkseCYmeC5zdWIoaCksaC5wcm9wcz1rLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9QyxoLl9fbj1pLHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPXMoe30saC5fX3MpKSxzKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGssaC5fX3MpKSkscD1oLnByb3BzLG09aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmshPT1wJiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhrLEMpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUoayxoLl9fcyxDKSl7Zm9yKGgucHJvcHM9ayxoLnN0YXRlPWguX19zLGguX19kPSExLGguX192PXUsdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYT0wO2E8dS5fX2subGVuZ3RoO2ErKyl1Ll9fa1thXSYmKHUuX19rW2FdLl9fPXUpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUoayxoLl9fcyxDKSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHAsbSx3KX0pfWguY29udGV4dD1DLGgucHJvcHM9ayxoLnN0YXRlPWguX19zLChhPW4uX19yKSYmYSh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPWwsYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSx1Ll9faz1iKG51bGwhPWEmJmEudHlwZT09eSYmbnVsbD09YS5rZXk/YS5wcm9wcy5jaGlsZHJlbjphKSxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9cyhzKHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwodz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHAsbSkpLF8obCx1LHQsaSxvLHIsZixlLGMpLGguYmFzZT11Ll9fZSxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxnJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT1udWxsfWVsc2UgdS5fX2U9aih0Ll9fZSx1LHQsaSxvLHIsZixjKTsoYT1uLmRpZmZlZCkmJmEodSl9Y2F0Y2gobCl7bi5fX2UobCx1LHQpfXJldHVybiB1Ll9fZX1mdW5jdGlvbiAkKGwsdSl7bi5fX2MmJm4uX19jKHUsbCksbC5zb21lKGZ1bmN0aW9uKHUpe3RyeXtsPXUuX19oLHUuX19oPVtdLGwuc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChsKXtuLl9fZShsLHUuX192KX19KX1mdW5jdGlvbiBqKG4sbCx1LHQsaSxvLHIsYyl7dmFyIHMsYSxoLHYscCx5PXUucHJvcHMsZD1sLnByb3BzO2lmKGk9XCJzdmdcIj09PWwudHlwZXx8aSxudWxsPT1uJiZudWxsIT1vKWZvcihzPTA7czxvLmxlbmd0aDtzKyspaWYobnVsbCE9KGE9b1tzXSkmJihudWxsPT09bC50eXBlPzM9PT1hLm5vZGVUeXBlOmEubG9jYWxOYW1lPT09bC50eXBlKSl7bj1hLG9bc109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09bC50eXBlKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTtuPWk/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixsLnR5cGUpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobC50eXBlKSxvPW51bGx9aWYobnVsbD09PWwudHlwZSludWxsIT1vJiYob1tvLmluZGV4T2YobildPW51bGwpLHkhPT1kJiZuLmRhdGEhPWQmJihuLmRhdGE9ZCk7ZWxzZSBpZihsIT09dSl7aWYobnVsbCE9byYmKG89ZS5zbGljZS5jYWxsKG4uY2hpbGROb2RlcykpLGg9KHk9dS5wcm9wc3x8ZikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZih5PT09Zilmb3IoeT17fSxwPTA7cDxuLmF0dHJpYnV0ZXMubGVuZ3RoO3ArKyl5W24uYXR0cmlidXRlc1twXS5uYW1lXT1uLmF0dHJpYnV0ZXNbcF0udmFsdWU7KHZ8fGgpJiYodiYmaCYmdi5fX2h0bWw9PWguX19odG1sfHwobi5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX14KG4sZCx5LGksYyksbC5fX2s9bC5wcm9wcy5jaGlsZHJlbix2fHxfKG4sbCx1LHQsXCJmb3JlaWduT2JqZWN0XCIhPT1sLnR5cGUmJmksbyxyLGYsYyksY3x8KFwidmFsdWVcImluIGQmJnZvaWQgMCE9PWQudmFsdWUmJmQudmFsdWUhPT1uLnZhbHVlJiYobi52YWx1ZT1udWxsPT1kLnZhbHVlP1wiXCI6ZC52YWx1ZSksXCJjaGVja2VkXCJpbiBkJiZ2b2lkIDAhPT1kLmNoZWNrZWQmJmQuY2hlY2tlZCE9PW4uY2hlY2tlZCYmKG4uY2hlY2tlZD1kLmNoZWNrZWQpKX1yZXR1cm4gbn1mdW5jdGlvbiB6KGwsdSx0KXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKHUpOmwuY3VycmVudD11fWNhdGNoKGwpe24uX19lKGwsdCl9fWZ1bmN0aW9uIEEobCx1LHQpe3ZhciBpLG8scjtpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwoaT1sLnJlZikmJihpLmN1cnJlbnQmJmkuY3VycmVudCE9PWwuX19lfHx6KGksbnVsbCx1KSksdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlfHwodD1udWxsIT0obz1sLl9fZSkpLGwuX19lPWwuX19kPW51bGwsbnVsbCE9KGk9bC5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobCl7bi5fX2UobCx1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPWwuX19rKWZvcihyPTA7cjxpLmxlbmd0aDtyKyspaVtyXSYmQShpW3JdLHUsdCk7bnVsbCE9byYmYShvKX1mdW5jdGlvbiBEKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEUobCx1LHQpe3ZhciBpLHIsYztuLl9fJiZuLl9fKGwsdSkscj0oaT10PT09byk/bnVsbDp0JiZ0Ll9fa3x8dS5fX2ssbD1oKHksbnVsbCxbbF0pLGM9W10sVCh1LChpP3U6dHx8dSkuX19rPWwscnx8ZixmLHZvaWQgMCE9PXUub3duZXJTVkdFbGVtZW50LHQmJiFpP1t0XTpyP251bGw6ZS5zbGljZS5jYWxsKHUuY2hpbGROb2RlcyksYyx0fHxmLGkpLCQoYyxsKX1mdW5jdGlvbiBIKG4sbCl7RShuLGwsbyl9ZnVuY3Rpb24gSShuLGwpe3JldHVybiBsPXMocyh7fSxuLnByb3BzKSxsKSxhcmd1bWVudHMubGVuZ3RoPjImJihsLmNoaWxkcmVuPWUuc2xpY2UuY2FsbChhcmd1bWVudHMsMikpLHYobi50eXBlLGwsbC5rZXl8fG4ua2V5LGwucmVmfHxuLnJlZil9ZnVuY3Rpb24gTChuKXt2YXIgbD17fSx1PXtfX2M6XCJfX2NDXCIrcisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHQsaT10aGlzO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHQ9W10sdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbFt1Ll9fY109aSxsfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihsKXtuLnZhbHVlIT09bC52YWx1ZSYmdC5zb21lKGZ1bmN0aW9uKG4pe24uY29udGV4dD1sLnZhbHVlLGcobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dC5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Quc3BsaWNlKHQuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LkNvbnN1bWVyLmNvbnRleHRUeXBlPXUsdX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKHUuY29uc3RydWN0b3ImJm51bGwhPXUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodD0hMCx1LnNldFN0YXRlKHUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHQ9ITAsdS5jb21wb25lbnREaWRDYXRjaChuKSksdClyZXR1cm4gZyh1Ll9fRT11KX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LGQucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT10aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHUsdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKHRoaXMuX19lPSExLGwmJnRoaXMuX19oLnB1c2gobCksZyh0aGlzKSl9LGQucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxnKHRoaXMpKX0sZC5wcm90b3R5cGUucmVuZGVyPXksdT1bXSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LG89ZixyPTA7ZXhwb3J0e0UgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSxoIGFzIGNyZWF0ZUVsZW1lbnQsaCx5IGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGwgYXMgaXNWYWxpZEVsZW1lbnQsZCBhcyBDb21wb25lbnQsSSBhcyBjbG9uZUVsZW1lbnQsTCBhcyBjcmVhdGVDb250ZXh0LGIgYXMgdG9DaGlsZEFycmF5LEEgYXMgX3VubW91bnQsbiBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixpPVtdLG89bi5fX3IsZj1uLmRpZmZlZCxjPW4uX19jLGU9bi51bm1vdW50O2Z1bmN0aW9uIGEodCl7bi5fX2gmJm4uX19oKHUpO3ZhciByPXUuX19IfHwodS5fX0g9e3Q6W10sdTpbXX0pO3JldHVybiB0Pj1yLnQubGVuZ3RoJiZyLnQucHVzaCh7fSksci50W3RdfWZ1bmN0aW9uIHYobil7cmV0dXJuIG0oRSxuKX1mdW5jdGlvbiBtKG4scixpKXt2YXIgbz1hKHQrKyk7cmV0dXJuIG8uX19jfHwoby5fX2M9dSxvLmk9W2k/aShyKTpFKHZvaWQgMCxyKSxmdW5jdGlvbih0KXt2YXIgdT1uKG8uaVswXSx0KTtvLmlbMF0hPT11JiYoby5pWzBdPXUsby5fX2Muc2V0U3RhdGUoe30pKX1dKSxvLml9ZnVuY3Rpb24gcChuLHIpe3ZhciBpPWEodCsrKTt4KGkubyxyKSYmKGkuaT1uLGkubz1yLHUuX19ILnUucHVzaChpKSl9ZnVuY3Rpb24gbChuLHIpe3ZhciBpPWEodCsrKTt4KGkubyxyKSYmKGkuaT1uLGkubz1yLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIGQobil7cmV0dXJuIHkoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIHMobix0LHUpe2woZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24geShuLHUpe3ZhciByPWEodCsrKTtyZXR1cm4geChyLm8sdSk/KHIubz11LHIudj1uLHIuaT1uKCkpOnIuaX1mdW5jdGlvbiBUKG4sdCl7cmV0dXJuIHkoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gdyhuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdO2lmKCFyKXJldHVybiBuLl9fO3ZhciBpPWEodCsrKTtyZXR1cm4gbnVsbD09aS5pJiYoaS5pPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlfWZ1bmN0aW9uIEEodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gRihuKXt2YXIgcj1hKHQrKyksaT12KCk7cmV0dXJuIHIuaT1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuaSYmci5pKG4pLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIF8oKXtpLnNvbWUoZnVuY3Rpb24obil7bi5fX1AmJihuLl9fSC51LmZvckVhY2goZyksbi5fX0gudS5mb3JFYWNoKHEpLG4uX19ILnU9W10pfSksaT1bXX1mdW5jdGlvbiBnKG4pe24ubSYmbi5tKCl9ZnVuY3Rpb24gcShuKXt2YXIgdD1uLmkoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYobi5tPXQpfWZ1bmN0aW9uIHgobix0KXtyZXR1cm4hbnx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gRShuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fW4uX19yPWZ1bmN0aW9uKG4pe28mJm8obiksdD0wLCh1PW4uX19jKS5fX0gmJih1Ll9fSC51LmZvckVhY2goZyksdS5fX0gudS5mb3JFYWNoKHEpLHUuX19ILnU9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtmJiZmKHQpO3ZhciB1PXQuX19jO2lmKHUpe3ZhciBvPXUuX19IO28mJm8udS5sZW5ndGgmJigxIT09aS5wdXNoKHUpJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoXykpfX0sbi5fX2M9ZnVuY3Rpb24obix0KXt0LnNvbWUoZnVuY3Rpb24obil7bi5fX2guZm9yRWFjaChnKSxuLl9faD1uLl9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uaXx8cShuKX0pfSksYyYmYyhuLHQpfSxuLnVubW91bnQ9ZnVuY3Rpb24obil7ZSYmZShuKTt2YXIgdD1uLl9fYztpZih0KXt2YXIgdT10Ll9fSDt1JiZ1LnQuZm9yRWFjaChmdW5jdGlvbihuKXtyZXR1cm4gbi5tJiZuLm0oKX0pfX07ZXhwb3J0e3YgYXMgdXNlU3RhdGUsbSBhcyB1c2VSZWR1Y2VyLHAgYXMgdXNlRWZmZWN0LGwgYXMgdXNlTGF5b3V0RWZmZWN0LGQgYXMgdXNlUmVmLHMgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSx5IGFzIHVzZU1lbW8sVCBhcyB1c2VDYWxsYmFjayx3IGFzIHVzZUNvbnRleHQsQSBhcyB1c2VEZWJ1Z1ZhbHVlLEYgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2hlY2tlZCwgb25Ub2dnbGUsIG5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWQgPSB0aGlzLnByb3BzLnJlcXVpcmVkIHx8IGZhbHNlXHJcbiAgICAgICAgY29uc3Qgb3B0T3V0ID0gdGhpcy5wcm9wcy5vcHRPdXQgfHwgZmFsc2VcclxuICAgICAgICBjb25zdCBwdXJwb3NlcyA9IHRoaXMucHJvcHMucHVycG9zZXMgfHwgW11cclxuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlKGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gYGFwcC1pdGVtLSR7bmFtZX1gXHJcbiAgICAgICAgY29uc3QgcHVycG9zZXNUZXh0ID0gcHVycG9zZXMubWFwKChwdXJwb3NlKSA9PiB0KFsncHVycG9zZXMnLCBwdXJwb3NlXSkpLmpvaW4oXCIsIFwiKVxyXG4gICAgICAgIGNvbnN0IG9wdE91dFRleHQgPSBvcHRPdXQgPyA8c3BhbiBjbGFzc05hbWU9XCJjbS1vcHQtb3V0XCIgdGl0bGU9e3QoWydhcHAnLCAnb3B0T3V0JywgJ2Rlc2NyaXB0aW9uJ10pfT57dChbJ2FwcCcsICdvcHRPdXQnLCAndGl0bGUnXSl9PC9zcGFuPiA6ICcnXHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRUZXh0ID0gcmVxdWlyZWQgPyA8c3BhbiBjbGFzc05hbWU9XCJjbS1yZXF1aXJlZFwiIHRpdGxlPXt0KFsnYXBwJywgJ3JlcXVpcmVkJywgJ2Rlc2NyaXB0aW9uJ10pfT57dChbJ2FwcCcsICdyZXF1aXJlZCcsICd0aXRsZSddKX08L3NwYW4+IDogJydcclxuXHJcbiAgICAgICAgbGV0IHB1cnBvc2VzQ29udGVudFxyXG4gICAgICAgIGlmIChwdXJwb3Nlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBwdXJwb3Nlc0NvbnRlbnQgPSA8cCBjbGFzc05hbWU9XCJwdXJwb3Nlc1wiPnt0KFsnYXBwJywgcHVycG9zZXMubGVuZ3RoID4gMSA/ICdwdXJwb3NlcycgOiAncHVycG9zZSddKX06IHtwdXJwb3Nlc1RleHR9PC9wPlxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPXtpZH0gY2xhc3NOYW1lPXtcImNtLWFwcC1pbnB1dFwiKyhyZXF1aXJlZCA/IFwiIHJlcXVpcmVkXCIgOiBcIlwiKX0gYXJpYS1kZXNjcmliZWRieT17YCR7aWR9LWRlc2NyaXB0aW9uYH0gZGlzYWJsZWQ9e3JlcXVpcmVkfSBjaGVja2VkPXtjaGVja2VkIHx8IHJlcXVpcmVkfSB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPVwiY20tYXBwLWxhYmVsXCIgey4uLihyZXF1aXJlZCA/IHt0YWJJbmRleDogXCIwXCJ9IDoge30pfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNtLWFwcC10aXRsZVwiPnt0aXRsZX08L3NwYW4+e3JlcXVpcmVkVGV4dH17b3B0T3V0VGV4dH1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kIGFjdGl2ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtgJHtpZH0tZGVzY3JpcHRpb25gfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNtLWFwcC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbiB8fCB0KFtuYW1lLCAnZGVzY3JpcHRpb24nXSl9PC9wPlxyXG4gICAgICAgICAgICAgICAge3B1cnBvc2VzQ29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnNlbnROb3RpY2UgZnJvbSAnLi9jb25zZW50LW5vdGljZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3c6IHByb3BzLnNob3cgPiAwIHx8ICFwcm9wcy5tYW5hZ2VyLmNvbmZpcm1lZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcclxuICAgICAgICAvLyBwcm9wcy5zaG93IGlzIGEgbnVtYmVyIHRoYXQgaXMgaW5jcmVtZW50ZWQgKHNvIHRoYXQgd2UgY2FuIGRldGVjdFxyXG4gICAgICAgIC8vIHJlcGVhdGVkIGNhbGxzIHRvIHRoZSBcInNob3dcIiBmdW5jdGlvbilcclxuICAgICAgICBpZiAocHJldlByb3BzLnNob3cgPT09IHRoaXMucHJvcHMuc2hvdylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgY29uc3Qgc2hvd1N0YXRlID0gdGhpcy5wcm9wcy5zaG93ID4gMCB8fCAhdGhpcy5wcm9wcy5tYW5hZ2VyLmNvbmZpcm1lZFxyXG4gICAgICAgIGlmIChzaG93U3RhdGUgIT09IHRoaXMuc3RhdGUuc2hvdylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogc2hvd1N0YXRlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2NvbmZpZywgdCwgbWFuYWdlciwgc3R5bGVQcmVmaXh9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHtzaG93fSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVQcmVmaXh9PlxyXG4gICAgICAgICAgICAgICAgPENvbnNlbnROb3RpY2UgdD17dH0gc2hvdz17c2hvd30gaGlkZT17aGlkZX0gY29uZmlnPXtjb25maWd9IG1hbmFnZXI9e21hbmFnZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcHBJdGVtIGZyb20gJy4vYXBwLWl0ZW0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgcHJvcHMubWFuYWdlci53YXRjaCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbnNlbnRzIDogcHJvcHMubWFuYWdlci5jb25zZW50c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIHRoaXMucHJvcHMubWFuYWdlci51bndhdGNoKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKG9iaiwgdHlwZSwgZGF0YSl7XHJcbiAgICAgICAgaWYgKG9iaiA9PT0gdGhpcy5wcm9wcy5tYW5hZ2VyICYmIHR5cGUgPT09ICdjb25zZW50cycpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbnNlbnRzIDogZGF0YX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2NvbmZpZywgdCwgbWFuYWdlcn0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qge2NvbnNlbnRzfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7YXBwc30gPSBjb25maWdcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gKGFwcHMsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcHMubWFwKChhcHApPT57XHJcbiAgICAgICAgICAgICAgICBpZiAgKCFhcHAucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnVwZGF0ZUNvbnNlbnQoYXBwLm5hbWUsIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlQWxsID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZShhcHBzLCB2YWx1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFwcEl0ZW1zID0gYXBwcy5tYXAoKGFwcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGVBcHAgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZShbYXBwXSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGNvbnNlbnRzW2FwcC5uYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17YXBwLm5hbWV9IGNsYXNzTmFtZT1cImNtLWFwcFwiPlxyXG4gICAgICAgICAgICAgICAgPEFwcEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkIHx8IGFwcC5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17dG9nZ2xlQXBwfVxyXG4gICAgICAgICAgICAgICAgICAgIHQ9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmFwcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xhYmxlQXBwcyA9IGFwcHMuZmlsdGVyKGFwcCA9PiAhYXBwLnJlcXVpcmVkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsRGlzYWJsZWQgPSB0b2dnbGFibGVBcHBzLmZpbHRlcihcclxuICAgICAgICAgICAgYXBwID0+IGNvbnNlbnRzW2FwcC5uYW1lXVxyXG4gICAgICAgICkubGVuZ3RoID09PSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImNtLWFwcHNcIj5cclxuICAgICAgICAgICAge2FwcEl0ZW1zfVxyXG4gICAgICAgICAgICB7dG9nZ2xhYmxlQXBwcy5sZW5ndGggPiAxICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjbS1hcHAgY20tdG9nZ2xlLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNhYmxlQWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoWydhcHAnLCdkaXNhYmxlQWxsJywndGl0bGUnXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KFsnYXBwJywgJ2Rpc2FibGVBbGwnLCAnZGVzY3JpcHRpb24nXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyFhbGxEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RvZ2dsZUFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdD17dH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q2xvc2V9IGZyb20gJy4vaWNvbnMnXHJcbmltcG9ydCBBcHBzIGZyb20gJy4vYXBwcydcclxuaW1wb3J0IHtsYW5ndWFnZX0gZnJvbSAndXRpbHMvaTE4bidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNlbnRNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VyfSA9IHByb3BzXHJcbiAgICAgICAgbWFuYWdlci5yZXN0b3JlU2F2ZWRDb25zZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2hpZGUsIGNvbmZpcm1pbmcsIHNhdmVBbmRIaWRlLCBhY2NlcHRBbmRIaWRlLCBkZWNsaW5lQW5kSGlkZSwgY29uZmlnLCBtYW5hZ2VyLCB0fSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBsYW5nID0gY29uZmlnLmxhbmcgfHwgbGFuZ3VhZ2UoKVxyXG5cclxuICAgICAgICBsZXQgY2xvc2VMaW5rXHJcbiAgICAgICAgaWYgKCFjb25maWcubXVzdENvbnNlbnQpIHtcclxuICAgICAgICAgICAgY2xvc2VMaW5rID0gPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoWydjbG9zZSddKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoaWRlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2xvc2UgdD17dH0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkZWNsaW5lQnV0dG9uXHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmhpZGVEZWNsaW5lQWxsICYmICEgbWFuYWdlci5jb25maXJtZWQpXHJcbiAgICAgICAgICAgIGRlY2xpbmVCdXR0b24gPSA8YnV0dG9uIGRpc2FibGVkPXtjb25maXJtaW5nfSBjbGFzc05hbWU9XCJjbS1idG4gY20tYnRuLWRlY2xpbmUgY20tYnRuLXJpZ2h0IGNtLWJ0bi1zbSBjbS1idG4tZGFuZ2VyIGNuLWRlY2xpbmVcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZGVjbGluZUFuZEhpZGV9Pnt0KFsnZGVjbGluZSddKX08L2J1dHRvbj5cclxuICAgICAgICBsZXQgYWNjZXB0QWxsQnV0dG9uXHJcbiAgICAgICAgY29uc3QgYWNjZXB0QnV0dG9uID1cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17Y29uZmlybWluZ30gY2xhc3NOYW1lPVwiY20tYnRuIGNtLWJ0bi1zdWNjZXNzIGNtLWJ0bi1pbmZvIGNtLWJ0bi1hY2NlcHRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2F2ZUFuZEhpZGV9Pnt0KFttYW5hZ2VyLmNvbmZpcm1lZCA/ICdzYXZlJyA6ICdhY2NlcHRTZWxlY3RlZCddKX08L2J1dHRvbj5cclxuICAgICAgICBpZiAoY29uZmlnLmFjY2VwdEFsbCAmJiAhbWFuYWdlci5jb25maXJtZWQpIHtcclxuICAgICAgICAgICAgYWNjZXB0QWxsQnV0dG9uID0gPGJ1dHRvbiBkaXNhYmxlZD17Y29uZmlybWluZ30gY2xhc3NOYW1lPVwiY20tYnRuIGNtLWJ0bi1zdWNjZXNzIGNtLWJ0bi1hY2NlcHQtYWxsXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2FjY2VwdEFuZEhpZGV9Pnt0KFsnYWNjZXB0QWxsJ10pfTwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHBVcmwgPSAoY29uZmlnLnByaXZhY3lQb2xpY3kgJiYgY29uZmlnLnByaXZhY3lQb2xpY3lbbGFuZ10pIHx8XHJcbiAgICAgICAgICAgIGNvbmZpZy5wcml2YWN5UG9saWN5LmRlZmF1bHQgfHxcclxuICAgICAgICAgICAgY29uZmlnLnByaXZhY3lQb2xpY3lcclxuXHJcbiAgICAgICAgY29uc3QgcHBMaW5rID0gPGEgb25DbGljaz17aGlkZX0gaHJlZj17cHBVcmx9Pnt0KFsnY29uc2VudE1vZGFsJywncHJpdmFjeVBvbGljeScsJ25hbWUnXSl9PC9hPlxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvb2tpZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWJnXCIgb25DbGljaz17aGlkZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjbG9zZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoWydjb25zZW50TW9kYWwnLCAndGl0bGUnXSl9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoWydjb25zZW50TW9kYWwnLCdkZXNjcmlwdGlvbiddKX0gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwcyB0PXt0fSBjb25maWc9e2NvbmZpZ30gbWFuYWdlcj17bWFuYWdlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWZvb3Rlci1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2NlcHRBbGxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2NlcHRCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZWNsaW5lQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNtLXBvd2VyZWQtYnlcIj57dChbJ2NvbnNlbnRNb2RhbCcsJ3ByaXZhY3lQb2xpY3knLCd0ZXh0J10sIHtwcml2YWN5UG9saWN5IDogcHBMaW5rfSl9IHwgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17Y29uZmlnLnBvd2VyZWRCeSB8fCAnaHR0cHM6Ly9rbGFyby5raXByb3RlY3QuY29tJ30gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPnt0KFsncG93ZXJlZEJ5J10pfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29uc2VudE1vZGFsIGZyb20gJy4vY29uc2VudC1tb2RhbCdcclxuaW1wb3J0IHtnZXRQdXJwb3Nlc30gZnJvbSAndXRpbHMvY29uZmlnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc2VudE5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlybWluZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZUJ1dHRvbkNsaWNrZWQgPSAoc2V0Q2hhbmdlZEFsbCwgY2hhbmdlZEFsbFZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge21vZGFsfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoc2V0Q2hhbmdlZEFsbClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYW5hZ2VyLmNoYW5nZUFsbChjaGFuZ2VkQWxsVmFsdWUpXHJcbiAgICAgICAgY29uc3QgY29uZmlybWVkID0gdGhpcy5wcm9wcy5tYW5hZ2VyLmNvbmZpcm1lZFxyXG4gICAgICAgIGNvbnN0IHNhdmVBbmRIaWRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25maXJtaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWFuYWdlci5zYXZlQW5kQXBwbHlDb25zZW50cygpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZXRDaGFuZ2VkQWxsICYmICFjb25maXJtZWQgJiYgKG1vZGFsIHx8IHRoaXMucHJvcHMuY29uZmlnLm11c3RDb25zZW50KSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmZpcm1pbmc6IHRydWV9KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNhdmVBbmRIaWRlLCAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNhdmVBbmRIaWRlKClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQW5kSGlkZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVCdXR0b25DbGlja2VkKGZhbHNlLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBhY2NlcHRBbmRIaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZUJ1dHRvbkNsaWNrZWQodHJ1ZSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBkZWNsaW5lQW5kSGlkZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVCdXR0b25DbGlja2VkKHRydWUsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjb25maWcsIHNob3csIG1hbmFnZXIsIHQsIGhpZGV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbW9kYWwsIGNvbmZpcm1pbmcgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgY29uc3QgcHVycG9zZXMgPSBnZXRQdXJwb3Nlcyhjb25maWcpXHJcbiAgICAgICAgY29uc3QgcHVycG9zZXNUZXh0ID0gcHVycG9zZXMubWFwKChwdXJwb3NlKSA9PiB0KFsncHVycG9zZXMnLCBwdXJwb3NlXSkpLmpvaW4oXCIsIFwiKVxyXG5cclxuICAgICAgICBsZXQgY2hhbmdlc1RleHRcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd01vZGFsID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsOiB0cnVlfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZXIuY29uZmlybWVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlKClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWw6IGZhbHNlfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYW5hZ2VyLmNoYW5nZWQpXHJcbiAgICAgICAgICAgIGNoYW5nZXNUZXh0ID0gPHAgY2xhc3NOYW1lPVwiY24tY2hhbmdlc1wiPnt0KFsnY29uc2VudE5vdGljZScsICdjaGFuZ2VEZXNjcmlwdGlvbiddKX08L3A+XHJcblxyXG4gICAgICAgIGlmICghc2hvdylcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz5cclxuXHJcbiAgICAgICAgY29uc3QgZGVjbGluZUJ1dHRvbiA9IGNvbmZpZy5oaWRlRGVjbGluZUFsbCA/XHJcbiAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbS1idG4gY20tYnRuLXNtIGNtLWJ0bi1kYW5nZXIgY24tZGVjbGluZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmRlY2xpbmVBbmRIaWRlfT57dChbJ2RlY2xpbmUnXSl9PC9idXR0b24+XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRBbGwgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNtLWJ0biBjbS1idG4tc20gY20tYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5hY2NlcHRBbmRIaWRlfT57dChbJ2FjY2VwdEFsbCddKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNtLWJ0biBjbS1idG4tc20gY20tYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zYXZlQW5kSGlkZX0+e3QoWydvayddKX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgY29uc3Qgbm90aWNlSXNWaXNpYmxlID1cclxuICAgICAgICAgICAgIWNvbmZpZy5tdXN0Q29uc2VudCAmJiAhbWFuYWdlci5jb25maXJtZWQgJiYgIWNvbmZpZy5ub05vdGljZVxyXG5cclxuICAgICAgICBpZiAobW9kYWwgfHwgbWFuYWdlci5jb25maXJtZWQgfHwgKCFtYW5hZ2VyLmNvbmZpcm1lZCAmJiBjb25maWcubXVzdENvbnNlbnQpKVxyXG4gICAgICAgICAgICByZXR1cm4gPENvbnNlbnRNb2RhbCB0PXt0fSBjb25maXJtaW5nPXtjb25maXJtaW5nfSBjb25maWc9e2NvbmZpZ30gaGlkZT17aGlkZU1vZGFsfSBkZWNsaW5lQW5kSGlkZT17dGhpcy5kZWNsaW5lQW5kSGlkZX0gc2F2ZUFuZEhpZGU9e3RoaXMuc2F2ZUFuZEhpZGV9IGFjY2VwdEFuZEhpZGU9e3RoaXMuYWNjZXB0QW5kSGlkZX0gbWFuYWdlcj17bWFuYWdlcn0gLz5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb29raWUtbW9kYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWJnXCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29va2llLW5vdGljZSAkeyFub3RpY2VJc1Zpc2libGUgPyAnY29va2llLW5vdGljZS1oaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNuLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KFsnY29uc2VudE5vdGljZScsICd0aXRsZSddKX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY24tYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dChbJ2NvbnNlbnROb3RpY2UnLCdkZXNjcmlwdGlvbiddKX0gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge2NoYW5nZXNUZXh0fVxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY24tb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB7YWNjZXB0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNtLWxpbmsgY20tbGVhcm4tbW9yZVwiIGhyZWY9XCIjXCIgb25DbGljaz17c2hvd01vZGFsfT57dChbJ2NvbnNlbnROb3RpY2UnLCAnbGVhcm5Nb3JlJ10pfS4uLjwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlID0gKHt0fSkgPT4ge1xyXG4gICAgcmV0dXJuIDxzdmcgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9e3QoWydjbG9zZSddKX0gd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld1BvcnQ9XCIwIDAgMTIgMTJcIiB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgPHRpdGxlPnt0KFsnY2xvc2UnXSl9PC90aXRsZT5cclxuICAgICAgICA8bGluZSB4MT1cIjFcIiB5MT1cIjExXCJcclxuICAgICAgICAgICAgeDI9XCIxMVwiIHkyPVwiMVwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiLz5cclxuICAgICAgICA8bGluZSB4MT1cIjFcIiB5MT1cIjFcIlxyXG4gICAgICAgICAgICB4Mj1cIjExXCIgeTI9XCIxMVwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiLz5cclxuICAgIDwvc3ZnPlxyXG59XHJcbiIsImltcG9ydCB7Z2V0Q29va2llcywgZGVsZXRlQ29va2llfSBmcm9tICd1dGlscy9jb29raWVzJ1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJ3N0b3JlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpe1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIC8vIHRoZSBjb25maWd1cmF0aW9uXHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmUgPSBuZXcgc3RvcmVzW3RoaXMuc3RvcmFnZU1ldGhvZF0odGhpcylcclxuXHJcbiAgICAgICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBjb29raWUtYmFzZWQgc3RvcmUgaWYgdGhlIHN0b3JlIGlzIHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICh0aGlzLnN0b3JlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZXNbJ2Nvb2tpZSddXHJcblxyXG4gICAgICAgIHRoaXMuY29uc2VudHMgPSB0aGlzLmRlZmF1bHRDb25zZW50cyAvLyB0aGUgY29uc2VudCBzdGF0ZXMgb2YgdGhlIGNvbmZpZ3VyZWQgYXBwc1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkID0gZmFsc2UgLy8gdHJ1ZSBpZiB0aGUgdXNlciBhY3RpdmVseSBjb25maXJtZWQgaGlzL2hlciBjb25zZW50XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2UgLy8gdHJ1ZSBpZiB0aGUgYXBwIGNvbmZpZyBjaGFuZ2VkIGNvbXBhcmVkIHRvIHRoZSBjb29raWVcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHt9IC8vIGtlZXAgdHJhY2sgb2YgdGhlIGNoYW5nZSAoZW5hYmxlZCwgZGlzYWJsZWQpIG9mIGluZGl2aWR1YWwgYXBwc1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZWRPbmNlID0ge30gLy9rZWVwIHRyYWNrIG9mIHdoaWNoIGFwcHMgaGF2ZSBiZWVuIGV4ZWN1dGVkIGF0IGxlYXN0IG9uY2VcclxuICAgICAgICB0aGlzLndhdGNoZXJzID0gbmV3IFNldChbXSlcclxuICAgICAgICB0aGlzLmxvYWRDb25zZW50cygpXHJcbiAgICAgICAgdGhpcy5hcHBseUNvbnNlbnRzKClcclxuICAgICAgICB0aGlzLnNhdmVkQ29uc2VudHMgPSB7Li4udGhpcy5jb25zZW50c31cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RvcmFnZU1ldGhvZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zdG9yYWdlTWV0aG9kIHx8ICdjb29raWUnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvb2tpZU5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29va2llTmFtZSB8fCAna2xhcm8nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvb2tpZURvbWFpbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb29raWVEb21haW4gfHwgdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvb2tpZUV4cGlyZXNBZnRlckRheXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29va2llRXhwaXJlc0FmdGVyRGF5cyB8fCAxMjBcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCh3YXRjaGVyKXtcclxuICAgICAgICBpZiAoIXRoaXMud2F0Y2hlcnMuaGFzKHdhdGNoZXIpKVxyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLmFkZCh3YXRjaGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHVud2F0Y2god2F0Y2hlcil7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuaGFzKHdhdGNoZXIpKVxyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLmRlbGV0ZSh3YXRjaGVyKVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShuYW1lLCBkYXRhKXtcclxuICAgICAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goKHdhdGNoZXIpID0+IHtcclxuICAgICAgICAgICAgd2F0Y2hlci51cGRhdGUodGhpcywgbmFtZSwgZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFwcChuYW1lKXtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0FwcHMgPSB0aGlzLmNvbmZpZy5hcHBzLmZpbHRlcihhcHA9PmFwcC5uYW1lID09PSBuYW1lKVxyXG4gICAgICAgIGlmIChtYXRjaGluZ0FwcHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoaW5nQXBwc1swXVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0Q29uc2VudChhcHApe1xyXG4gICAgICAgIGxldCBjb25zZW50ID0gYXBwLmRlZmF1bHRcclxuICAgICAgICBpZiAoY29uc2VudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjb25zZW50ID0gdGhpcy5jb25maWcuZGVmYXVsdFxyXG4gICAgICAgIGlmIChjb25zZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNvbnNlbnQgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBjb25zZW50XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlZmF1bHRDb25zZW50cygpe1xyXG4gICAgICAgIGNvbnN0IGNvbnNlbnRzID0ge31cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuY29uZmlnLmFwcHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29uZmlnLmFwcHNbaV1cclxuICAgICAgICAgICAgY29uc2VudHNbYXBwLm5hbWVdID0gdGhpcy5nZXREZWZhdWx0Q29uc2VudChhcHApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25zZW50c1xyXG4gICAgfVxyXG5cclxuICAgIC8vZG9uJ3QgZGVjbGluZSByZXF1aXJlZCBhcHBzXHJcbiAgICBjaGFuZ2VBbGwodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmFwcHMubWFwKChhcHApID0+IHtcclxuICAgICAgICAgICAgaWYoYXBwLnJlcXVpcmVkIHx8IHRoaXMuY29uZmlnLnJlcXVpcmVkIHx8IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnNlbnQoYXBwLm5hbWUsIHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnNlbnQoYXBwLm5hbWUsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb25zZW50KG5hbWUsIHZhbHVlKXtcclxuICAgICAgICB0aGlzLmNvbnNlbnRzW25hbWVdID0gdmFsdWVcclxuICAgICAgICB0aGlzLm5vdGlmeSgnY29uc2VudHMnLCB0aGlzLmNvbnNlbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVTYXZlZENvbnNlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5jb25zZW50cyA9IHsuLi50aGlzLnNhdmVkQ29uc2VudHN9XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoJ2NvbnNlbnRzJywgdGhpcy5jb25zZW50cylcclxuICAgIH1cclxuXHJcbiAgICByZXNldENvbnNlbnQoKXtcclxuICAgICAgICB0aGlzLmNvbnNlbnRzID0gdGhpcy5kZWZhdWx0Q29uc2VudHNcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcHBseUNvbnNlbnRzKClcclxuICAgICAgICB0aGlzLnN0b3JlLmRlbGV0ZSgpXHJcbiAgICAgICAgdGhpcy5ub3RpZnkoJ2NvbnNlbnRzJywgdGhpcy5jb25zZW50cylcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zZW50KG5hbWUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnNlbnRzW25hbWVdIHx8IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrQ29uc2VudHMoKXtcclxuICAgICAgICBsZXQgY29tcGxldGUgPSB0cnVlXHJcbiAgICAgICAgY29uc3QgYXBwcyA9IG5ldyBTZXQodGhpcy5jb25maWcuYXBwcy5tYXAoKGFwcCk9PntyZXR1cm4gYXBwLm5hbWV9KSlcclxuICAgICAgICBjb25zdCBjb25zZW50cyA9IG5ldyBTZXQoT2JqZWN0LmtleXModGhpcy5jb25zZW50cykpXHJcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmNvbnNlbnRzKSl7XHJcbiAgICAgICAgICAgIGlmICghYXBwcy5oYXMoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jb25zZW50c1trZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGNvbnN0IGFwcCBvZiB0aGlzLmNvbmZpZy5hcHBzKXtcclxuICAgICAgICAgICAgaWYgKCFjb25zZW50cy5oYXMoYXBwLm5hbWUpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc2VudHNbYXBwLm5hbWVdID0gdGhpcy5nZXREZWZhdWx0Q29uc2VudChhcHApXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maXJtZWQgPSBjb21wbGV0ZVxyXG4gICAgICAgIGlmICghY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ29uc2VudHMoKXtcclxuICAgICAgICBjb25zdCBjb25zZW50RGF0YSA9IHRoaXMuc3RvcmUuZ2V0KCk7XHJcbiAgICAgICAgaWYgKGNvbnNlbnREYXRhICE9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jb25zZW50cyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGNvbnNlbnREYXRhKSlcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tDb25zZW50cygpXHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCdjb25zZW50cycsIHRoaXMuY29uc2VudHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnNlbnRzXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFuZEFwcGx5Q29uc2VudHMoKXtcclxuICAgICAgICB0aGlzLnNhdmVDb25zZW50cygpXHJcbiAgICAgICAgdGhpcy5hcHBseUNvbnNlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ29uc2VudHMoKXtcclxuICAgICAgICBjb25zdCB2ID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMuY29uc2VudHMpKVxyXG4gICAgICAgIHRoaXMuc3RvcmUuc2V0KHYpO1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zYXZlZENvbnNlbnRzID0gey4uLnRoaXMuY29uc2VudHN9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlDb25zZW50cygpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5jb25maWcuYXBwcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gdGhpcy5jb25maWcuYXBwc1tpXVxyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2FwcC5uYW1lXVxyXG4gICAgICAgICAgICBjb25zdCBvcHRPdXQgPSAoYXBwLm9wdE91dCAhPT0gdW5kZWZpbmVkID8gYXBwLm9wdE91dCA6ICh0aGlzLmNvbmZpZy5vcHRPdXQgfHwgZmFsc2UpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IChhcHAucmVxdWlyZWQgIT09IHVuZGVmaW5lZCA/IGFwcC5yZXF1aXJlZCA6ICh0aGlzLmNvbmZpZy5yZXF1aXJlZCB8fCBmYWxzZSkpXHJcbiAgICAgICAgICAgIC8vb3B0IG91dCBhbmQgcmVxdWlyZWQgYXBwcyBhcmUgYWx3YXlzIHRyZWF0ZWQgYXMgY29uZmlybWVkXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHRoaXMuY29uZmlybWVkIHx8IG9wdE91dCB8fCByZXF1aXJlZFxyXG4gICAgICAgICAgICBjb25zdCBjb25zZW50ID0gdGhpcy5nZXRDb25zZW50KGFwcC5uYW1lKSAmJiBjb25maXJtZWRcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBjb25zZW50KVxyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcHBFbGVtZW50cyhhcHAsIGNvbnNlbnQpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXBwQ29va2llcyhhcHAsIGNvbnNlbnQpXHJcbiAgICAgICAgICAgIGlmIChhcHAuY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsYmFjayhjb25zZW50LCBhcHApXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzW2FwcC5uYW1lXSA9IGNvbnNlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQXBwRWxlbWVudHMoYXBwLCBjb25zZW50KXtcclxuXHJcbiAgICAgICAgLy8gd2UgbWFrZSBzdXJlIHdlIGV4ZWN1dGUgdGhpcyBhcHAgb25seSBvbmNlIGlmIHRoZSBvcHRpb24gaXMgc2V0XHJcbiAgICAgICAgaWYgKGNvbnNlbnQpe1xyXG4gICAgICAgICAgICBpZiAoYXBwLm9ubHlPbmNlICYmIHRoaXMuZXhlY3V0ZWRPbmNlW2FwcC5uYW1lXSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVkT25jZVthcHAubmFtZV0gPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1uYW1lPSdcIithcHAubmFtZStcIiddXCIpXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxlbGVtZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldXHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgY29uc3Qge2RhdGFzZXR9ID0gZWxlbWVudFxyXG4gICAgICAgICAgICBjb25zdCB7dHlwZX0gPSBkYXRhc2V0XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJzID0gWydocmVmJywgJ3NyYyddXHJcblxyXG4gICAgICAgICAgICAvL2lmIG5vIGNvbnNlbnQgd2FzIGdpdmVuIHdlIGRpc2FibGUgdGhpcyB0cmFja2VyXHJcbiAgICAgICAgICAgIC8vd2UgcmVtb3ZlIGFuZCBhZGQgaXQgYWdhaW4gdG8gdHJpZ2dlciBhIHJlLWV4ZWN1dGlvblxyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NDUklQVCcpe1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgY3JlYXRlIGEgbmV3IHNjcmlwdCBpbnN0ZWFkIG9mIHVwZGF0aW5nIHRoZSBub2RlIGluXHJcbiAgICAgICAgICAgICAgICAvLyBwbGFjZSwgYXMgdGhlIHNjcmlwdCB3b24ndCBzdGFydCBjb3JyZWN0bHkgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YXNldCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuZGF0YXNldFtrZXldID0gZGF0YXNldFtrZXldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnR5cGUgPSAndGV4dC9wbGFpbidcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHRcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQudGV4dCA9IGVsZW1lbnQudGV4dFxyXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzcyA9IGVsZW1lbnQuY2xhc3NcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGVsZW1lbnQuc3R5bGVcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuaWQgPSBlbGVtZW50LmlkXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm5hbWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuZGVmZXIgPSBlbGVtZW50LmRlZmVyXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFzeW5jID0gZWxlbWVudC5hc3luY1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb25zZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnR5cGUgPSB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQuc3JjICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3JjID0gZGF0YXNldC5zcmNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vd2UgcmVtb3ZlIHRoZSBvcmlnaW5hbCBlbGVtZW50IGFuZCBpbnNlcnQgYSBuZXcgb25lXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsbCBvdGhlciBlbGVtZW50cyAoaW1hZ2VzIGV0Yy4pIGFyZSBtb2RpZmllZCBpbiBwbGFjZS4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnNlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBhdHRyIG9mIGF0dHJzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZGF0YXNldFthdHRyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldFsnb3JpZ2luYWwnK2F0dHJdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0WydvcmlnaW5hbCcrYXR0cl0gPSBlbGVtZW50W2F0dHJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbYXR0cl0gPSBhdHRyVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQudGl0bGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IGRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldC5vcmlnaW5hbERpc3BsYXkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGF0YXNldC5vcmlnaW5hbERpc3BsYXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQudGl0bGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldC5oaWRlID09PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhc2V0Lm9yaWdpbmFsRGlzcGxheSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldC5vcmlnaW5hbERpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBhdHRyIG9mIGF0dHJzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZGF0YXNldFthdHRyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldFsnb3JpZ2luYWwnK2F0dHJdICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJdID0gZGF0YXNldFsnb3JpZ2luYWwnK2F0dHJdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBcHBDb29raWVzKGFwcCwgY29uc2VudCl7XHJcblxyXG4gICAgICAgIGlmIChjb25zZW50KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXNjYXBlUmVnZXhTdHIoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy1bXFxdL3t9KCkqKz8uXFxcXF4kfF0vZywgXCJcXFxcJCZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXBwLmNvb2tpZXMgIT09IHVuZGVmaW5lZCAmJiBhcHAuY29va2llcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgY29va2llcyA9IGdldENvb2tpZXMoKVxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPGFwcC5jb29raWVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvb2tpZVBhdHRlcm4gPSBhcHAuY29va2llc1tpXVxyXG4gICAgICAgICAgICAgICAgbGV0IGNvb2tpZVBhdGgsIGNvb2tpZURvbWFpblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvb2tpZVBhdHRlcm4gaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgICAgICAgICAgICAgW2Nvb2tpZVBhdHRlcm4sIGNvb2tpZVBhdGgsIGNvb2tpZURvbWFpbl0gPSBjb29raWVQYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIShjb29raWVQYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llUGF0dGVybiA9IG5ldyBSZWdFeHAoJ14nK2VzY2FwZVJlZ2V4U3RyKGNvb2tpZVBhdHRlcm4pKyckJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8Y29va2llcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjb29raWVQYXR0ZXJuLmV4ZWMoY29va2llLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkRlbGV0aW5nIGNvb2tpZTpcIiwgY29va2llLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1hdGNoZWQgcGF0dGVybjpcIiwgY29va2llUGF0dGVybixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGF0aDpcIiwgY29va2llUGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRG9tYWluOlwiLCBjb29raWVEb21haW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvb2tpZShjb29raWUubmFtZSwgY29va2llUGF0aCwgY29va2llRG9tYWluKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qIGdsb2JhbHMgbW9kdWxlLCByZXF1aXJlLCBWRVJTSU9OICovXHJcblxyXG5pbXBvcnQgJ3Njc3Mva2xhcm8uc2Nzcyc7XHJcblxyXG4vLyBXaGVuIHdlYnBhY2sncyBob3QgbG9hZGluZyBpcyBlbmFibGVkLCBlbmFibGUgUHJlYWN0J3Mgc3VwcG9ydCBmb3IgdGhlXHJcbi8vIFJlYWN0IERldiBUb29scyBicm93c2VyIGV4dGVuc2lvbi5cclxuaWYobW9kdWxlLmhvdCkgcmVxdWlyZSgncHJlYWN0L2RlYnVnJylcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFwcCBmcm9tICdjb21wb25lbnRzL2FwcC5qcydcclxuaW1wb3J0IENvbnNlbnRNYW5hZ2VyIGZyb20gJ2NvbnNlbnQtbWFuYWdlcidcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICd0cmFuc2xhdGlvbnMnXHJcbmltcG9ydCB7Y29udmVydFRvTWFwLCB1cGRhdGV9IGZyb20gJ3V0aWxzL21hcHMnXHJcbmltcG9ydCB7dCwgbGFuZ3VhZ2V9IGZyb20gJ3V0aWxzL2kxOG4nXHJcbmltcG9ydCBjdXJyZW50RXhlY3V0aW5nU2NyaXB0IGZyb20gJ2N1cnJlbnQtZXhlY3V0aW5nLXNjcmlwdCc7XHJcblxyXG5jb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0IHx8IGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQoKTtcclxuY29uc3Qgb3JpZ2luYWxPbkxvYWQgPSB3aW5kb3cub25sb2FkXHJcbmNvbnN0IGNvbnZlcnRlZFRyYW5zbGF0aW9ucyA9IGNvbnZlcnRUb01hcCh0cmFuc2xhdGlvbnMpXHJcbmNvbnN0IGNvbmZpZ05hbWUgPSBzY3JpcHQuZGF0YXNldC5jb25maWcgfHwgXCJrbGFyb0NvbmZpZ1wiXHJcbmNvbnN0IG5vQXV0b0xvYWQgPSBzY3JpcHQuZGF0YXNldC5ub0F1dG9Mb2FkID09PSBcInRydWVcIlxyXG5jb25zdCBzdHlsZVByZWZpeCA9IHNjcmlwdC5kYXRhc2V0LnN0eWxlUHJlZml4IHx8IFwia2xhcm9cIlxyXG5jb25zdCBjb25maWcgPSB3aW5kb3dbY29uZmlnTmFtZV1cclxuY29uc3QgbWFuYWdlcnMgPSB7fVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGluaXRpYWxpemVcclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBpZiAoIW5vQXV0b0xvYWQpXHJcbiAgICAgICAgcmVuZGVyS2xhcm8oY29uZmlnKVxyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50SUQoY29uZmlnKXtcclxuICAgIHJldHVybiBjb25maWcuZWxlbWVudElEIHx8ICdrbGFybydcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudChjb25maWcpe1xyXG4gICAgY29uc3QgaWQgPSBnZXRFbGVtZW50SUQoY29uZmlnKVxyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgIGlmIChlbGVtZW50ID09PSBudWxsKXtcclxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBlbGVtZW50LmlkID0gaWRcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGlvbnMoY29uZmlnKXtcclxuICAgIGNvbnN0IHRyYW5zID0gbmV3IE1hcChbXSlcclxuICAgIHVwZGF0ZSh0cmFucywgY29udmVydGVkVHJhbnNsYXRpb25zKVxyXG4gICAgdXBkYXRlKHRyYW5zLCBjb252ZXJ0VG9NYXAoY29uZmlnLnRyYW5zbGF0aW9ucyB8fCB7fSkpXHJcbiAgICByZXR1cm4gdHJhbnNcclxufVxyXG5cclxubGV0IGNudCA9IDFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJLbGFybyhjb25maWcsIHNob3cpe1xyXG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgLy8gd2UgYXJlIHVzaW5nIGEgY291bnQgaGVyZSBzbyB0aGF0IHdlJ3JlIGFibGUgdG8gcmVwZWF0ZWRseSBvcGVuIHRoZSBtb2RhbC4uLlxyXG4gICAgbGV0IHNob3dDbnQgPSAwXHJcbiAgICBpZiAoc2hvdylcclxuICAgICAgICBzaG93Q250ID0gY250KytcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZylcclxuICAgIGNvbnN0IHRyYW5zID0gZ2V0VHJhbnNsYXRpb25zKGNvbmZpZylcclxuICAgIGNvbnN0IG1hbmFnZXIgPSBnZXRNYW5hZ2VyKGNvbmZpZylcclxuICAgIGNvbnN0IGxhbmcgPSBjb25maWcubGFuZyB8fCBsYW5ndWFnZSgpXHJcbiAgICBjb25zdCB0dCA9ICguLi5hcmdzKSA9PiB7cmV0dXJuIHQodHJhbnMsIGxhbmcsIC4uLmFyZ3MpfVxyXG4gICAgY29uc3QgYXBwID0gcmVuZGVyKDxBcHAgdD17dHR9XHJcbiAgICAgICAgc3R5bGVQcmVmaXg9e3N0eWxlUHJlZml4fVxyXG4gICAgICAgIG1hbmFnZXI9e21hbmFnZXJ9XHJcbiAgICAgICAgY29uZmlnPXtjb25maWd9XHJcbiAgICAgICAgc2hvdz17c2hvd0NudH0gLz4sIGVsZW1lbnQpXHJcbiAgICByZXR1cm4gYXBwXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKGUpe1xyXG4gICAgaWYgKCFub0F1dG9Mb2FkKVxyXG4gICAgICAgIHJlbmRlcktsYXJvKGNvbmZpZylcclxuICAgIGlmIChvcmlnaW5hbE9uTG9hZCAhPT0gbnVsbCl7XHJcbiAgICAgICAgb3JpZ2luYWxPbkxvYWQoZSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hbmFnZXIoY29uZil7XHJcbiAgICBjb25mID0gY29uZiB8fCBjb25maWdcclxuICAgIGNvbnN0IG5hbWUgPSBnZXRFbGVtZW50SUQoY29uZilcclxuICAgIGlmIChtYW5hZ2Vyc1tuYW1lXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIG1hbmFnZXJzW25hbWVdID0gbmV3IENvbnNlbnRNYW5hZ2VyKGNvbmYpXHJcbiAgICByZXR1cm4gbWFuYWdlcnNbbmFtZV1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3coY29uZil7XHJcbiAgICBjb25mID0gY29uZiB8fCBjb25maWdcclxuICAgIHJlbmRlcktsYXJvKGNvbmYsIHRydWUpXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcnNpb24oKXtcclxuICAgIHJldHVybiBWRVJTSU9OXHJcbn1cclxuXHJcbmV4cG9ydCB7bGFuZ3VhZ2V9XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi9rbGFyby5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7Z2V0Q29va2llLCBzZXRDb29raWUsIGRlbGV0ZUNvb2tpZX0gZnJvbSAndXRpbHMvY29va2llcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5jb29raWVOYW1lID0gbWFuYWdlci5jb29raWVOYW1lXHJcbiAgICAgICAgdGhpcy5jb29raWVEb21haW4gPSBtYW5hZ2VyLmNvb2tpZURvbWFpblxyXG4gICAgICAgIHRoaXMuY29va2llRXhwaXJlc0FmdGVyRGF5cyA9IG1hbmFnZXIuY29va2llRXhwaXJlc0FmdGVyRGF5c1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICBjb25zdCBjb29raWUgPSBnZXRDb29raWUodGhpcy5jb29raWVOYW1lKTtcclxuICAgICAgICByZXR1cm4gY29va2llXHJcbiAgICAgICAgICAgID8gY29va2llLnZhbHVlXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gc2V0Q29va2llKHRoaXMuY29va2llTmFtZSwgdmFsdWUsIHRoaXMuY29va2llRXhwaXJlc0FmdGVyRGF5cywgdGhpcy5jb29raWVEb21haW4pXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGVDb29raWUodGhpcy5jb29raWVOYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLmtleSA9IG1hbmFnZXIuY29va2llTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZXMgPSB7XHJcbiAgICAnY29va2llJzogQ29va2llU3RvcmUsXHJcbiAgICAnbG9jYWxTdG9yYWdlJzogTG9jYWxTdG9yYWdlU3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVzXHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWFjacOzIHF1ZSByZWNvcGlsZW1cIixcImRlc2NyaXB0aW9uXCI6XCJBcXXDrSBwb2RldSB2ZXVyZSBpIHBlcnNvbmFsaXR6YXIgbGEgaW5mb3JtYWNpw7MgcXVlIHJlY29waWxlbSBzb2JyZSB2w7NzLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbMOtdGljYSBkZSBwcml2YWRlc2FcIixcInRleHRcIjpcIlBlciBhIG3DqXMgaW5mb3JtYWNpw7MsIGNvbnN1bHRldSBsYSBub3N0cmEge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkhpIGhhIGhhZ3V0IGNhbnZpcyBkZXMgZGUgbGEgdm9zdHJhIGRhcnJlcmEgdmlzaXRhLiBBY3R1YWxpdHpldSBlbCB2b3N0cmUgY29uc2VudGltZW50LlwiLFwiZGVzY3JpcHRpb25cIjpcIlJlY29waWxlbSBpIHByb2Nlc3NlbSBsYSB2b3N0cmEgaW5mb3JtYWNpw7MgcGVyc29uYWwgYW1iIGxlcyBzZWfDvGVudHMgZmluYWxpdGF0czoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiU2FiZXItbmUgbcOpc1wifSxcIm9rXCI6XCJBY2NlcHRhXCIsXCJzYXZlXCI6XCJEZXNhXCIsXCJkZWNsaW5lXCI6XCJSZWJ1dGphXCIsXCJjbG9zZVwiOlwiVGFuY2FcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiSGFiaWxpdGEvZGVzaGFiaWxpdGEgdG90ZXMgbGVzIGFwbGljYWNpb25zXCIsXCJkZXNjcmlwdGlvblwiOlwiVXNldSBhcXVlc3QgYm90w7MgcGVyIGEgaGFiaWxpdGFyIG8gZGVzaGFiaWxpdGFyIHRvdGVzIGxlcyBhcGxpY2FjaW9ucy5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiQXF1ZXN0YSBhcGxpY2FjacOzIGVzIGNhcnJlZ2EgcGVyIGRlZmVjdGUsIHBlcsOyIHBvZGV1IGRlc2FjdGl2YXItbGFcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIobmVjZXNzw6ByaWEpXCIsXCJkZXNjcmlwdGlvblwiOlwiQXF1ZXN0YSBhcGxpY2FjacOzIGVzIG5lY2Vzc2l0YSBzZW1wcmVcIn0sXCJwdXJwb3Nlc1wiOlwiRmluYWxpdGF0c1wiLFwicHVycG9zZVwiOlwiRmluYWxpdGF0XCJ9LFwicG93ZXJlZEJ5XCI6XCJGdW5jaW9uYSBhbWIgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiRGF0ZW5zY2h1dHplaW5zdGVsbHVuZ2VuXCIsXCJkZXNjcmlwdGlvblwiOlwiV2lyIG51dHplbiBDb29raWVzIGF1ZiB1bnNlcmVyIFdlYnNpdGUuIEVpbmlnZSB2b24gaWhuZW4gc2luZCBlc3NlbnppZWxsLCB3w6RocmVuZCBhbmRlcmUgdW5zIGhlbGZlbiwgZGllc2UgV2Vic2l0ZSB1bmQgSWhyZSBFcmZhaHJ1bmcgenUgdmVyYmVzc2Vybi5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJEYXRlbnNjaHV0emVya2zDpHJ1bmdcIixcInRleHRcIjpcIntwcml2YWN5UG9saWN5fVxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1widGl0bGVcIjpcIkRhdGVuc2NodXR6ZWluc3RlbGx1bmdlblwiLFwiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkVzIGdhYiDDhG5kZXJ1bmdlbiBzZWl0IElocmVtIGxldHp0ZW4gQmVzdWNoLCBiaXR0ZSBha3R1YWxpc2llcmVuIFNpZSBJaHJlIEF1c3dhaGwuXCIsXCJkZXNjcmlwdGlvblwiOlwiV2lyIG51dHplbiBDb29raWVzIGF1ZiB1bnNlcmVyIFdlYnNpdGUuIEVpbmlnZSB2b24gaWhuZW4gc2luZCBlc3NlbnppZWxsLCB3w6RocmVuZCBhbmRlcmUgdW5zIGhlbGZlbiwgZGllc2UgV2Vic2l0ZSB1bmQgSWhyZSBFcmZhaHJ1bmcgenUgdmVyYmVzc2Vybi5cXG5cIixcImxlYXJuTW9yZVwiOlwiTWVociBlcmZhaHJlblwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiU3BlaWNoZXJuXCIsXCJkZWNsaW5lXCI6XCJOdXIgZXNzZW50aWVsbGUgQ29va2llcyBha3plcHRpZXJlblwiLFwiY2xvc2VcIjpcIlNjaGxpZcOfZW5cIixcImFjY2VwdFNlbGVjdGVkXCI6XCJBdXN3YWhsIHNwZWljaGVyblwiLFwiYWNjZXB0QWxsXCI6XCJBbGxlbiB6dXN0aW1tZW5cIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiQWxsZSBBbndlbmR1bmdlbiBha3RpdmllcmVuL2RlYWt0aXZpZXJlblwiLFwiZGVzY3JpcHRpb25cIjpcIk51dHplbiBTaWUgZGllc2VuIFNjaGFsdGVyIHVtIGFsbGUgQXBwcyB6dSBha3RpdmllcmVuL2RlYWt0aXZpZXJlbi5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKE9wdC1PdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiRGllc2UgQW53ZW5kdW5nIHdpcmQgc3RhbmRhcmRtw6TDn2lnIGdlbGFkZW4gKFNpZSBrw7ZubmVuIGRpZXNlIGFiZXIgZGVha3RpdmllcmVuKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihpbW1lciBub3R3ZW5kaWcpXCIsXCJkZXNjcmlwdGlvblwiOlwiRGllc2UgQW53ZW5kdW5nIHdpcmQgaW1tZXIgYmVuw7Z0aWd0XCJ9LFwicHVycG9zZXNcIjpcIlp3ZWNrZVwiLFwicHVycG9zZVwiOlwiWndlY2tcIn0sXCJwb3dlcmVkQnlcIjpcIlJlYWxpc2llcnQgbWl0IEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIs6gzrvOt8+Bzr/Phs6/z4HOr861z4Igz4DOv8+FIM+Dz4XOu867zq3Os86/z4XOvM61XCIsXCJkZXNjcmlwdGlvblwiOlwizpXOtM+OIM68z4DOv8+BzrXOr8+CIM69zrEgzrTOtc65z4IgzrrOsc65IM69zrEgz4HPhc64zrzOr8+DzrXOuc+CIM+EzrnPgiDPgM67zrfPgc6/z4bOv8+Bzq/Otc+CIM+Azr/PhSDPg8+FzrvOu86tzrPOv8+FzrzOtSDPg8+HzrXPhM65zrrOrCDOvM61IM61z4POrc69zrFcXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCLOoM6/zrvOuc+EzrnOus6uIM6Rz4DOv8+Bz4HOrs+Ezr/PhVwiLFwidGV4dFwiOlwizpPOuc6xIM+AzrXPgc65z4PPg8+Mz4TOtc+BzrXPgiDPgM67zrfPgc6/z4bOv8+Bzq/Otc+CLCDPgM6xz4HOsc66zrHOu8+OIM60zrnOsc6yzqzPg8+EzrUgz4TOt869IHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCLOoM+BzrHOs868zrHPhM6/z4DOv865zq7OuM63zrrOsc69IM6xzrvOu86xzrPOrc+CIM68zrXPhM6sIM+EzrfOvSDPhM61zrvOtc+Fz4TOsc6vzrEgz4POsc+CIM61z4DOr8+DzrrOtc+Izrcgz4DOsc+BzrHOus6xzrvOv8+NzrzOtSDOsc69zrHOvc61z47Pg8+EzrUgz4TOt869IM+Dz4XOs866zrHPhM6szrjOtc+Dzrcgz4POsc+CXCIsXCJkZXNjcmlwdGlvblwiOlwizqPPhc6zzrrOtc69z4TPgc+Ozr3Ov8+FzrzOtSDOus6xzrkgzrXPgM61zr7Otc+BzrPOsc62z4zOvM6xz4PPhM61IM+EzrEgz4DPgc6/z4PPic+AzrnOus6sIM60zrXOtM6/zrzOrc69zrEgz4POsc+CIM6zzrnOsSDPhM6/z4XPgiDPgM6xz4HOsc66zqzPhM+JIM67z4zOs86/z4XPgjoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwizqDOtc+BzrnPg8+Dz4zPhM61z4HOsVwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwizpHPgM6/zrjOrs66zrXPhc+DzrdcIixcImRlY2xpbmVcIjpcIs6Rz4DPjM+Bz4HOuc+Az4TPiVwiLFwiY2xvc2VcIjpcIs6azrvOtc6vz4POuc68zr9cIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwizpPOuc6xIM+MzrvOtc+CIM+EzrnPgiDOtc+GzrHPgc68zr/Os86tz4JcIixcImRlc2NyaXB0aW9uXCI6XCLOp8+BzrfPg865zrzOv8+Azr/Or863z4POtSDOsc+Fz4TPjCDPhM6/zr0gzrTOuc6xzrrPjM+Az4TOtyDOs865zrEgzr3OsSDOtc69zrXPgc6zzr/PgM6/zrnOrs+DzrXOuc+CL86xz4DOtc69zrXPgc6zzr/PgM6/zrnOrs+DzrXOuc+CIM+MzrvOtc+CIM+EzrnPgiDOtc+GzrHPgc68zr/Os86tz4JcIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKM68zrcgzrHPgM6xzrnPhM6/z43OvM61zr3OvylcIixcImRlc2NyaXB0aW9uXCI6XCLOlc6vzr3Osc65IM+Az4HOv866zrHOuM6/z4HOuc+DzrzOrc69zr8gzr3OsSDPhs6/z4HPhM+Ozr3Otc+EzrHOuSwgzqzOu867zrEgzrzPgM6/z4HOtc6vIM69zrEgz4DOsc+BzrHOu863z4bOuM61zq9cIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIozrHPgM6xzrnPhM6/z43OvM61zr3OvylcIixcImRlc2NyaXB0aW9uXCI6XCLOlM61zr0gzrPOr869zrXPhM6xzrkgzr3OsSDOu861zrnPhM6/z4XPgc6zzq7Pg861zrkgz4PPic+Dz4TOrCDOtyDOtc+GzrHPgc68zr/Os86uIM+Hz4nPgc6vz4IgzrHPhc+Ez4xcIn0sXCJwdXJwb3Nlc1wiOlwizqPOus6/z4DOv86vXCIsXCJwdXJwb3NlXCI6XCLOo866zr/PgM+Mz4JcIn0sXCJwb3dlcmVkQnlcIjpcIs6lz4DOv8+Dz4TOt8+Bzq/Ots61z4TOsc65IM6xz4DPjCDPhM6/IEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWF0aW9uIHRoYXQgd2UgY29sbGVjdFwiLFwiZGVzY3JpcHRpb25cIjpcIkhlcmUgeW91IGNhbiBzZWUgYW5kIGN1c3RvbWl6ZSB0aGUgaW5mb3JtYXRpb24gdGhhdCB3ZSBjb2xsZWN0IGFib3V0IHlvdS5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwcml2YWN5IHBvbGljeVwiLFwidGV4dFwiOlwiVG8gbGVhcm4gbW9yZSwgcGxlYXNlIHJlYWQgb3VyIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcInRpdGxlXCI6XCJJbmZvcm1hdGlvbiB0aGF0IHdlIGNvbGxlY3RcIixcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJUaGVyZSB3ZXJlIGNoYW5nZXMgc2luY2UgeW91ciBsYXN0IHZpc2l0LCBwbGVhc2UgdXBkYXRlIHlvdXIgY29uc2VudC5cIixcImRlc2NyaXB0aW9uXCI6XCJXZSBjb2xsZWN0IGFuZCBwcm9jZXNzIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gZm9yIHRoZSBmb2xsb3dpbmcgcHVycG9zZXM6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkN1c3RvbWl6ZVwifSxcIm9rXCI6XCJBY2NlcHRcIixcInNhdmVcIjpcIlNhdmVcIixcImRlY2xpbmVcIjpcIkRlY2xpbmVcIixcImNsb3NlXCI6XCJDbG9zZVwiLFwiYWNjZXB0QWxsXCI6XCJBY2NlcHQgYWxsXCIsXCJhY2NlcHRTZWxlY3RlZFwiOlwiQWNjZXB0IHNlbGVjdGVkXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIlRvZ2dsZSBhbGwgYXBwc1wiLFwiZGVzY3JpcHRpb25cIjpcIlVzZSB0aGlzIHN3aXRjaCB0byBlbmFibGUvZGlzYWJsZSBhbGwgYXBwcy5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiVGhpcyBhcHAgaXMgbG9hZGVkIGJ5IGRlZmF1bHQgKGJ1dCB5b3UgY2FuIG9wdCBvdXQpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKGFsd2F5cyByZXF1aXJlZClcIixcImRlc2NyaXB0aW9uXCI6XCJUaGlzIGFwcGxpY2F0aW9uIGlzIGFsd2F5cyByZXF1aXJlZFwifSxcInB1cnBvc2VzXCI6XCJQdXJwb3Nlc1wiLFwicHVycG9zZVwiOlwiUHVycG9zZVwifSxcInBvd2VyZWRCeVwiOlwiUG93ZXJlZCBieSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hY2nDs24gcXVlIHJlY29waWxhbW9zXCIsXCJkZXNjcmlwdGlvblwiOlwiQXF1w60gcHVlZGUgdmVyIHkgcGVyc29uYWxpemFyIGxhIGluZm9ybWFjacOzbiBxdWUgcmVjb3BpbGFtb3Mgc29icmUgdXN0ZWQuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicG9sw610aWNhIGRlIHByaXZhY2lkYWRcIixcInRleHRcIjpcIlBhcmEgbcOhcyBpbmZvcm1hY2nDs24gY29uc3VsdGUgbnVlc3RyYSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiSGEgaGFiaWRvIGNhbWJpb3MgZGVzZGUgc3Ugw7psdGltYSB2aXNpdGEsIHBvciBmYXZvciwgYWN0dWFsaWNlIHN1IGNvbnNlbnRpbWllbnRvLlwiLFwiZGVzY3JpcHRpb25cIjpcIlJlY29waWxhbW9zIHkgcHJvY2VzYW1vcyBzdSBpbmZvcm1hY2nDs24gcGVyc29uYWwgY29uIGxvcyBzaWd1aWVudGVzIGZpbmVzOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJNw6FzIGluZm9ybWFjacOzblwifSxcIm9rXCI6XCJBY2VwdGFyXCIsXCJzYXZlXCI6XCJHdWFyZGFyXCIsXCJkZWNsaW5lXCI6XCJSZWNoYXphclwiLFwiY2xvc2VcIjpcIkNlcnJhclwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJIYWJpbGl0YXIvZGVzaGFiaWxpdGFyIHRvZGFzIGxhcyBhcGxpY2FjaW9uZXNcIixcImRlc2NyaXB0aW9uXCI6XCJVc2UgZXN0ZSBib3TDs24gcGFyYSBoYWJpbGl0YXIgbyBkZXNoYWJpbGl0YXIgdG9kYXMgbGFzIGFwbGljYWNpb25lcy5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiRXN0YSBhcGxpY2FjacOzbiBzZSBjYXJnYSBkZSBmb3JtYSBwcmVkZXRlcm1pbmFkYSAocGVybyBwdWVkZSBkZXNhY3RpdmFybGEpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKG5lY2VzYXJpYSlcIixcImRlc2NyaXB0aW9uXCI6XCJFc3RhIGFwbGljYWNpw7NuIHNlIG5lY2VzaXRhIHNpZW1wcmVcIn0sXCJwdXJwb3Nlc1wiOlwiRmluZXNcIixcInB1cnBvc2VcIjpcIkZpblwifSxcInBvd2VyZWRCeVwiOlwiUG93ZXJlZCBieSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJLZXLDpMOkbcOkbW1lIHRpZWRvdFwiLFwiZGVzY3JpcHRpb25cIjpcIlZvaXQgdGFya2FzdGVsbGEgamEgbXVva2F0YSBzaW51c3RhIGtlcsOkw6RtacOkbW1lIHRpZXRvamEuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwidGlldG9zdW9qYXNpdnVsdGFtbWVcIixcInRleHRcIjpcIlZvaXQgbHVrZWEgbGlzw6R0aWV0b2phIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJPbGVtbWUgdGVobmVldCBtdXV0b2tzaWEgZWh0b2loaW4gdmlpbWUgdmllcmFpbHVzaSBqw6Rsa2VlbiwgdGFya2lzdGEgZWhkb3QuXCIsXCJkZXNjcmlwdGlvblwiOlwiS2Vyw6TDpG1tZSBqYSBrw6RzaXR0ZWxlbW1lIGhlbmtpbMO2dGlldG9qYSBzZXVyYWF2aWluIHRhcmtvaXR1a3NpaW46IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkx1ZSBsaXPDpMOkXCJ9LFwib2tcIjpcIkh5dsOka3N5XCIsXCJzYXZlXCI6XCJUYWxsZW5uYVwiLFwiZGVjbGluZVwiOlwiSHlsa8Okw6RcIixcImNsb3NlXCI6XCJTdWxqZVwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJWYWxpdHNlIGthaWtraVwiLFwiZGVzY3JpcHRpb25cIjpcIkFrdGl2b2kga2Fpa2tpIHDDpMOkbGxlL3BvaXMuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihsYWRhdGFhbiBvbGV0dWtzZW5hKVwiLFwiZGVzY3JpcHRpb25cIjpcIkxhZGF0YWFuIG9sZXR1a3NlbmEgKG11dHRhIHZvaXQgb3R0YWEgc2VuIHBvaXMgcMOkw6RsdMOkKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIih2YWFkaXRhYW4pXCIsXCJkZXNjcmlwdGlvblwiOlwiU2l2dXN0byB2YWF0aWkgdMOkbcOkbiBhaW5hXCJ9LFwicHVycG9zZXNcIjpcIkvDpHl0dMO2dGFya29pdHVrc2V0XCIsXCJwdXJwb3NlXCI6XCJLw6R5dHTDtnRhcmtvaXR1c1wifSxcInBvd2VyZWRCeVwiOlwiUGFsdmVsdW4gdGFyam9hYSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJMZXMgaW5mb3JtYXRpb25zIHF1ZSBub3VzIGNvbGxlY3RvbnNcIixcImRlc2NyaXB0aW9uXCI6XCJJY2ksIHZvdXMgcG91dmV6IHZvaXIgZXQgcGVyc29ubmFsaXNlciBsZXMgaW5mb3JtYXRpb25zIHF1ZSBub3VzIGNvbGxlY3RvbnMgc3VyIHZvdXMuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicG9saXRpcXVlIGRlIGNvbmZpZGVudGlhbGl0w6lcIixcInRleHRcIjpcIlBvdXIgZW4gc2F2b2lyIHBsdXMsIG1lcmNpIGRlIGxpcmUgbm90cmUge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkRlcyBtb2RpZmljYXRpb25zIG9udCBldSBsaWV1IGRlcHVpcyB2b3RyZSBkZXJuacOocmUgdmlzaXRlLCBtZXJjaSBkZSBtZXR0cmUgw6Agam91ciB2b3RyZSBjb25zZW50ZW1lbnQuXCIsXCJkZXNjcmlwdGlvblwiOlwiTm91cyBjb2xsZWN0b25zIGV0IHRyYWl0b25zIHZvcyBpbmZvcm1hdGlvbnMgcGVyc29ubmVsbGVzIGRhbnMgbGUgYnV0IHN1aXZhbnQgOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJFbiBzYXZvaXIgcGx1c1wifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiU2F1dmVnYXJkZXJcIixcImRlY2xpbmVcIjpcIlJlZnVzZXJcIixcImNsb3NlXCI6XCJGZXJtZXJcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiQ2hhbmdlciB0b3V0ZXMgbGVzIG9wdGlvbnNcIixcImRlc2NyaXB0aW9uXCI6XCJVdGlsaXNlciBjZSBib3V0b24gcG91ciBhY3RpdmVyL2TDqXNhY3RpdmVyIHRvdXRlcyBsZXMgb3B0aW9uc1wifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob3B0LW91dClcIixcImRlc2NyaXB0aW9uXCI6XCJDZXR0ZSBhcHBsaWNhdGlvbiBlc3QgY2hhcmfDqWUgcGFyIGTDqWZhdXQgKG1haXMgdm91cyBwb3V2ZXogbGEgZMOpc2FjdGl2ZXIpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKHRvdWpvdXJzIHJlcXVpcylcIixcImRlc2NyaXB0aW9uXCI6XCJDZXR0ZSBhcHBsaWNhdGlvbiBlc3QgdG91am91cnMgcmVxdWlzZVwifSxcInB1cnBvc2VzXCI6XCJVdGlsaXNhdGlvbnNcIixcInB1cnBvc2VcIjpcIlV0aWxpc2F0aW9uXCJ9LFwicG93ZXJlZEJ5XCI6XCJQcm9wdWxzw6kgcGFyIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWFjaWplIGtvamUgcHJpa3VwbGphbW9cIixcImRlc2NyaXB0aW9uXCI6XCJPdmRqZSBtb8W+ZXRlIHZpZGpldGkgaSBwb2Rlc2l0aSBpbmZvcm1hY2lqZSBrb2plIHByaWt1cGxqYW1vIG8gVmFtYS5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwcmF2aWxhIHByaXZhdG5vc3RpXCIsXCJ0ZXh0XCI6XCJaYSB2acWhZSBpbmZvcm1hY2lqZSBwcm/EjWl0YWp0ZSBuYcWhYSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiRG/FoWxvIGplIGRvIHByb21qZW5hIG9kIFZhxaFlIHBvc2xqZWRuamVnIHBvc2plxIdpdmFuamEgd2ViIHN0cmFuaWNlLCBtb2xpbW8gVmFzIGRhIGHFvnVyaXJhdGUgc3ZvamEgb2RvYnJlbmphLlwiLFwiZGVzY3JpcHRpb25cIjpcIk1pIHByaWt1cGxqYW1vIGkgcHJvY2VzaXJhbW8gVmHFoWUgb3NvYm5lIHBvZGF0a2UgcmFkaSBzbGlqZWRlxIdlZzoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiU2F6bmFqdGUgdmnFoWVcIn0sXCJva1wiOlwiVSByZWR1XCIsXCJzYXZlXCI6XCJTcHJlbWlcIixcImRlY2xpbmVcIjpcIk9kYmlqXCIsXCJjbG9zZVwiOlwiWmF0dm9yaVwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJJem1laWplbmkgc3ZlXCIsXCJkZXNjcmlwdGlvblwiOlwiS29yaXN0aXRlIG92YWogcHJla2lkYcSNIGRhIG9tb2d1xIdpdGUvb25lbW9ndcSHaXRlIHN2ZSBhcGxpa2FjaWplIG9kamVkbm9tLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob25lbW9ndcSHaXRlKVwiLFwiZGVzY3JpcHRpb25cIjpcIk92YSBhcGxpa2FjaWphIGplIHXEjWl0YW5hIGF1dG9tYXRza2kgKGFsaSBqZSBtb8W+ZXRlIG9uZW1vZ3XEh2l0aSlcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIob2JhdmV6bmEpXCIsXCJkZXNjcmlwdGlvblwiOlwiT3ZhIGFwbGlrYWNpamEgamUgdXZpamVrIG9iYXZlem5hLlwifSxcInB1cnBvc2VzXCI6XCJTdnJoZVwiLFwicHVycG9zZVwiOlwiU3ZyaGFcIn0sXCJwb3dlcmVkQnlcIjpcIlBva3JlxIdlIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybcOhY2nDs2ssIGFtaWtldCBnecWxanTDvG5rXCIsXCJkZXNjcmlwdGlvblwiOlwiSXR0IGzDoXRoYXRvZCDDqXMgdGVzdHJlc3phYmhhdG9kIGF6IHLDs2xhZCBnecWxanTDtnR0IGluZm9ybcOhY2nDs2thdC5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJhZGF0dsOpZGVsbWkgaXLDoW55ZWx2ZWlua2V0XCIsXCJ0ZXh0XCI6XCJUb3bDoWJiaSBpbmZvcm3DoWNpw7PDqXJ0IGvDqXJqw7xrLCBvbHZhc3NkIGVsIGF6IHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJBeiB1dG9sc8OzIGzDoXRvZ2F0w6FzIMOzdGEgdsOhbHRvesOhc29rIHTDtnJ0w6ludGVrLCBrw6lyasO8aywgZnJpc3PDrXRzZCBhIGhvenrDoWrDoXJ1bMOhc29kYXQuXCIsXCJkZXNjcmlwdGlvblwiOlwiQXogc3plbcOpbHllcyBhZGF0YWlkYXQgw7Zzc3plZ3nFsWp0asO8ayDDqXMgZmVsZG9sZ296enVrIGF6IGFsw6FiYmkgY8OpbG9rcmE6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIlR1ZGogbWVnIHTDtmJiZXRcIn0sXCJva1wiOlwiRWxmb2dhZFwiLFwic2F2ZVwiOlwiU2F2ZVwiLFwiZGVjbGluZVwiOlwiTWVudMOpc1wiLFwiY2xvc2VcIjpcIkVsdmV0XCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIsOWc3N6ZXMgYXBwIMOhdGthcGNzb2zDoXNhXCIsXCJkZXNjcmlwdGlvblwiOlwiSGFzem7DoWxkIGV6dCBhIGthcGNzb2zDs3QgYXogw7Zzc3plcyBhbGthbG1hesOhcyBlbmdlZMOpbHllesOpc8OpaGV6L2xldGlsdMOhc8OhaG96LlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIobGVpcmF0a296w6FzKVwiLFwiZGVzY3JpcHRpb25cIjpcIkV6IGF6IGFsa2FsbWF6w6FzIGFsYXDDqXJ0ZWxtZXrDqXMgc3plcmludCBiZXTDtmx0w7Z0dCAoZGUga2kgbGVoZXQga2FwY3NvbG5pKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihtaW5kaWcga8O2dGVsZXrFkSlcIixcImRlc2NyaXB0aW9uXCI6XCJFeiBheiBhbGthbG1hesOhcyBtaW5kaWcga8O2dGVsZXrFkVwifSxcInB1cnBvc2VzXCI6XCJDw6lsb2tcIixcInB1cnBvc2VcIjpcIkPDqWxcIn0sXCJwb3dlcmVkQnlcIjpcIlBvd2VyZWQgYnkgS2xhcm8hXCJ9IiwiLy8gVG8gY3JlYXRlIGEgbmV3IHRyYW5zbGF0aW9uLCBhZGQgYSBZQU1MIGZpbGUgd2l0aCB0aGUgcmVxdWlyZWQgZW50cmllcyBhbmRcclxuLy8gbGluayBpdCBoZXJlIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBsYW5ndWFnZSBjb2RlLlxyXG5cclxuaW1wb3J0IGNhIGZyb20gJy4vY2EueW1sJ1xyXG5pbXBvcnQgZGUgZnJvbSAnLi9kZS55bWwnXHJcbmltcG9ydCBlbCBmcm9tICcuL2VsLnltbCdcclxuaW1wb3J0IGVuIGZyb20gJy4vZW4ueW1sJ1xyXG5pbXBvcnQgZXMgZnJvbSAnLi9lcy55bWwnXHJcbmltcG9ydCBmaSBmcm9tICcuL2ZpLnltbCdcclxuaW1wb3J0IGZyIGZyb20gJy4vZnIueW1sJ1xyXG5pbXBvcnQgaHUgZnJvbSAnLi9odS55bWwnXHJcbmltcG9ydCBociBmcm9tICcuL2hyLnltbCdcclxuaW1wb3J0IGl0IGZyb20gJy4vaXQueW1sJ1xyXG5pbXBvcnQgbmwgZnJvbSAnLi9ubC55bWwnXHJcbmltcG9ydCBubyBmcm9tICcuL25vLnltbCdcclxuaW1wb3J0IHJvIGZyb20gJy4vcm8ueW1sJ1xyXG5pbXBvcnQgc3IgZnJvbSAnLi9zci55bWwnXHJcbmltcG9ydCBzcl9jeXJsIGZyb20gJy4vc3JfY3lybC55bWwnXHJcbmltcG9ydCBzdiBmcm9tICcuL3N2LnltbCdcclxuaW1wb3J0IHRyIGZyb20gJy4vdHIueW1sJ1xyXG5pbXBvcnQgcGwgZnJvbSAnLi9wbC55bWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjYSxcclxuICAgIGRlLFxyXG4gICAgZWwsXHJcbiAgICBlbixcclxuICAgIGVzLFxyXG4gICAgZmksXHJcbiAgICBmcixcclxuICAgIGh1LFxyXG4gICAgaHIsXHJcbiAgICBpdCxcclxuICAgIG5sLFxyXG4gICAgbm8sXHJcbiAgICBybyxcclxuICAgIHNyLFxyXG4gICAgc3JfY3lybCxcclxuICAgIHN2LFxyXG4gICAgdHIsXHJcbiAgICBwbCxcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hemlvbmkgY2hlIHJhY2NvZ2xpYW1vXCIsXCJkZXNjcmlwdGlvblwiOlwiUXVpIHB1b2kgdmVkZXJlIGUgc2NlZ2xpZXJlIGxlIGluZm9ybWF6aW9uaSBjaGUgcmFjY29nbGlhbW8gc3UgZGkgdGUuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicG9saWN5IHByaXZhY3lcIixcInRleHRcIjpcIlBlciBzYXBlcm5lIGRpIHBpw7ksIGxlZ2dpIGxhIG5vc3RyYSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiQ2kgc29ubyBzdGF0aSBjYW1iaWFtZW50aSBkYWxsYSB0dWEgdWx0aW1hIHZpc2l0YSwgYWdnaW9ybmEgaWwgdHVvIGNvbnNlbnNvLlwiLFwiZGVzY3JpcHRpb25cIjpcIlJhY2NvZ2xpYW1vIGVkIGVsYWJvcmlhbW8gbGUgdm9zdHJlIGluZm9ybWF6aW9uaSBwZXJzb25hbGkgcGVyIGkgc2VndWVudGkgc2NvcGk6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIlNjb3ByaSBkaSBwacO5XCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCJTYWx2YVwiLFwiZGVjbGluZVwiOlwiUmlmaXV0YVwiLFwiY2xvc2VcIjpcIkNoaXVkaVwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJDYW1iaWEgcGVyIHR1dHRlIGxlIGFwcFwiLFwiZGVzY3JpcHRpb25cIjpcIlVzYSBxdWVzdG8gaW50ZXJydXR0b3JlIHBlciBhYmlsaXRhcmUvZGlzYWJpbGl0YXJlIHR1dHRlIGxlIGFwcC5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiUXVlc3QnYXBwbGljYXppb25lIMOoIGNhcmljYXRhIGRpIGRlZmF1bHQgKG1hIHB1b2kgZGlzYXR0aXZhcmxhKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihzZW1wcmUgcmljaGllc3RvKVwiLFwiZGVzY3JpcHRpb25cIjpcIlF1ZXN0J2FwcGxpY2F6aW9uZSDDqCBzZW1wcmUgcmljaGllc3RhXCJ9LFwicHVycG9zZXNcIjpcIlNjb3BpXCIsXCJwdXJwb3NlXCI6XCJTY29wb1wifSxcInBvd2VyZWRCeVwiOlwiUmVhbGl6emF0byBkYSBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hdGllIGRpZSB3ZSB2ZXJ6YW1lbGVuXCIsXCJkZXNjcmlwdGlvblwiOlwiSGllciBrdW50IHUgZGUgaW5mb3JtYXRpZSBiZWtpamtlbiBlbiBhYW5wYXNzZW4gZGllIHdlIG92ZXIgdSB2ZXJ6YW1lbGVuLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInByaXZhY3liZWxlaWRcIixcInRleHRcIjpcIkxlZXMgb25zIHByaXZhY3liZWxlaWQgdm9vciBtZWVyIGluZm9ybWF0aWUge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkVyIHdhcmVuIHdpanppZ2luZ2VuIHNpbmRzIHV3IGxhYXRzdGUgYmV6b2VrLCB3ZXJrIHV3IHZvb3JrZXVyZW4gYmlqLlwiLFwiZGVzY3JpcHRpb25cIjpcIldpaiB2ZXJ6YW1lbGVuIGVuIHZlcndlcmtlbiB1dyBwZXJzb29ubGlqa2UgZ2VnZXZlbnMgdm9vciBkZSB2b2xnZW5kZSBkb2VsZWluZGVuOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJMZWVzIG1lZXJcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIk9wc2xhYW5cIixcImRlY2xpbmVcIjpcIkFmd2lqemVuXCIsXCJjbG9zZVwiOlwiU2x1aXRlblwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJBbGxlIG9wdGllcyBpbi91aXQgc2NoYWtlbGVuXCIsXCJkZXNjcmlwdGlvblwiOlwiR2VicnVpayBkZXplIHNjaGFrZWxvcHRpZSBvbSBhbGxlIGFwcHMgaW4vdWl0IHRlIHNjaGFrZWxlbi5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKGFmbWVsZGVuKVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlemUgYXBwIGlzIHN0YW5kYWFyZCBnZWxhZGVuIChtYWFyIGplIGt1bnQgamUgYWZtZWxkZW4pXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKGFsdGlqZCB2ZXJwbGljaHQpXCIsXCJkZXNjcmlwdGlvblwiOlwiRGV6ZSBhcHBsaWNhdGllIGlzIGFsdGlqZCB2ZXJlaXN0XCJ9LFwicHVycG9zZXNcIjpcIkRvZWxlaW5kZW5cIixcInB1cnBvc2VcIjpcIkRvZWxlaW5kZVwifSxcInBvd2VyZWRCeVwiOlwiQWFuZ2VkcmV2ZW4gZG9vciBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hc2pvbiB2aSBzYW1sZXIgaW5uXCIsXCJkZXNjcmlwdGlvblwiOlwiSGVyIGthbiBkdSBzZSBvZyB2ZWxnZSBodmlsa2VuIGluZm9ybWFzam9uIHZpIHNhbWxlciBpbm4gb20gZGVnLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBlcnNvbnZlcm5lcmtsw6ZyaW5nXCIsXCJ0ZXh0XCI6XCJGb3Igw6UgbMOmcmUgbWVyLCB2ZW5ubGlnc3QgbGVzIHbDpXIge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkRldCBoYXIgc2tqZWRkIGVuZHJpbmdlciBzaWRlbiBkaXR0IHNpc3RlIGJlc8O4aywgdmVubmxpZ3N0IG9wcGRhdGVyIGRpdHQgc2FtdHlra2UuXCIsXCJkZXNjcmlwdGlvblwiOlwiVmkgc2FtbGVyIGlubiBvZyBwcm9zZXNzZXJlciBkaW4gcGVyc29ubGlnZSBpbmZvcm1hc2pvbiBhdiBmw7hsZ2VuZGUgw6Vyc2FrZXI6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkzDpnIgbWVyXCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCJPcHNsYWFuXCIsXCJkZWNsaW5lXCI6XCJBdnNsw6VcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiQnl0dCBhbGxlIGFwcGVyXCIsXCJkZXNjcmlwdGlvblwiOlwiQnJ1ayBkZW5uZSBmb3Igw6Ugc2tydSBhdi9ww6UgYWxsZSBhcHBlci5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiRGVubmUgYXBwZW4gZXIgbGFzdGV0IHNvbSBzdGFuZGFyZCAobWVuIGR1IGthbiBza3J1IGRldCBhdilcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoYWxsdGlkIHDDpWtyZXZkKVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlbm5lIGFwcGxpa2Fzam9uZW4gZXIgYWxsdGlkIHDDpWtyZXZkXCJ9LFwicHVycG9zZXNcIjpcIsOFcnNha2VyXCIsXCJwdXJwb3NlXCI6XCLDhXJzYWtcIn0sXCJwb3dlcmVkQnlcIjpcIkxhZ2V0IG1lZCBLbGFybyFcIn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImNvbnNlbnRNb2RhbFwiOntcInRpdGxlXCI6XCJJbmZvcm1hY2plLCBrdMOzcmUgemJpZXJhbXlcIixcImRlc2NyaXB0aW9uXCI6XCJUdXRhaiBtb8W8ZXN6IHpvYmFjennEhyBpIGRvc3Rvc293YcSHIGluZm9ybWFjamUsIGt0w7NyZSB6YmllcmFteSBvIFRvYmllLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbGl0eWthIHByeXdhdG5vxZtjaVwiLFwidGV4dFwiOlwiQWJ5IGRvd2llZHppZcSHIHNpxJkgd2nEmWNlaiwgcHJ6ZWN6eXRhaiBuYXN6xIUge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIk5hc3TEhXBpxYJ5IHptaWFueSBvZCBUd29qZWogb3N0YXRuaWVqIHdpenl0eSwgemFrdHVhbGl6dWogc3dvasSFIHpnb2TEmS5cIixcImRlc2NyaXB0aW9uXCI6XCJaYmllcmFteSBpIHByemV0d2FyemFteSBkYW5lIG9zb2Jvd2UgdyBuYXN0xJlwdWrEhWN5Y2ggY2VsYWNoOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJEb3dpZWR6IHNpxJkgd2nEmWNlalwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiWmFwaXN6XCIsXCJkZWNsaW5lXCI6XCJSZXp5Z25hY2phXCIsXCJjbG9zZVwiOlwiWmFta25palwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJQcnplxYLEhWN6IGRsYSB3c3p5c3RraWNoIGFwbGlrYWNqaVwiLFwiZGVzY3JpcHRpb25cIjpcIlXFvHlqIHByemXFgsSFY3puaWthLCBhYnkgd8WCxIVjennEhy93ecWCxIVjennEhyB3c3p5c3RraWUgYXBsaWthY2plLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIocmV6eWduYWNqYSlcIixcImRlc2NyaXB0aW9uXCI6XCJUYSBhcGxpa2FjamEgamVzdCBkb215xZtsbmllIMWCYWRvd2FuYSAoYWxlIG1vxbxlc3ogenJlenlnbm93YcSHKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIih6YXdzemUgd3ltYWdhbmUpXCIsXCJkZXNjcmlwdGlvblwiOlwiVGEgYWxpa2FjamEgamVzdCB6YXdzemUgd3ltYWdhbmFcIn0sXCJwdXJwb3Nlc1wiOlwiQ2VsZVwiLFwicHVycG9zZVwiOlwiQ2VsXCJ9LFwicG93ZXJlZEJ5XCI6XCJOYXDEmWR6YW55IHByemV6IEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWHIm2lpbGUgcGUgY2FyZSBsZSBjb2xlY3TEg21cIixcImRlc2NyaXB0aW9uXCI6XCJBaWNpIHB1dGXIm2kgdmVkZWEgyJlpIHBlcnNvbmFsaXphIGluZm9ybWHIm2lpbGUgcGUgY2FyZSBsZSBjb2xlY3TEg20gZGVzcHJlIGR2cy5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwb2xpdGljYSBwcml2YWN5XCIsXCJ0ZXh0XCI6XCJQZW50cnUgYSBhZmxhIG1haSBtdWx0ZSwgdsSDIHJ1Z8SDbSBzxIMgY2l0acibaSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiQXUgZXhpc3RhdCBtb2RpZmljxINyaSBkZSBsYSB1bHRpbWEgdml6aXTEgywgdsSDIHJ1Z8SDbSBzxIMgYWN0dWFsaXphyJtpIGNvbnNpbcibxINtw6JudHVsLlwiLFwiZGVzY3JpcHRpb25cIjpcIkNvbGVjdMSDbSDImWkgcHJvY2VzxINtIGluZm9ybWHIm2lpbGUgZHZzLiBwZXJzb25hbGUgw65uIHVybcSDdG9hcmVsZSBzY29wdXJpOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJBZmzEgyBtYWkgbXVsdGVcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIlNhbHZlYXrEg1wiLFwiZGVjbGluZVwiOlwiUmVudW7Im8SDXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkNvbXV0YcibaSDDrm50cmUgdG9hdGUgYXBsaWNhyJtpaWxlXCIsXCJkZXNjcmlwdGlvblwiOlwiVXRpbGl6YcibaSBhY2VzdCBzd2l0Y2ggcGVudHJ1IGEgYWN0aXZhL2RlemFjdGl2YSB0b2F0ZSBhcGxpY2HIm2lpbGUuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvcHQtb3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIkFjZWFzdMSDIGFwbGljYcibaWUgZXN0ZSDDrm5jxINyY2F0xIMgw65uIG1vZCBpbXBsaWNpdCAoZGFyIHB1dGXIm2kgcmVudW7Im2EpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKMOubnRvdGRlYXVuYSBuZWNlc2FyKVwiLFwiZGVzY3JpcHRpb25cIjpcIkFjZWFzdMSDIGFwbGljYcibaWUgZXN0ZSDDrm50b3RkZWF1bmEgbmVjZXNhcsSDXCJ9LFwicHVycG9zZXNcIjpcIlNjb3B1cmlcIixcInB1cnBvc2VcIjpcIlNjb3BcIn0sXCJwb3dlcmVkQnlcIjpcIlJlYWxpemF0IGRlIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWFjaWplIGtvamUgcHJpa3VwbGphbW9cIixcImRlc2NyaXB0aW9uXCI6XCJPdmRlIG1vxb5ldGUgdmlkZXRpIGkgcG9kZXNpdGkgaW5mb3JtYWNpamUga29qZSBwcmlrdXBsamFtbyBvIFZhbWEuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicG9saXRpa3UgcHJpdmF0bm9zdGlcIixcInRleHRcIjpcIlphIHZpxaFlIGluZm9ybWFjaWplIHByb8SNaXRhanRlIG5hxaF1IHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJEb8WhbG8gamUgZG8gcHJvbWVuYSBvZCBWYcWhZSBwb3NsZWRuamUgcG9zZXRlLCBtb2xpbW8gVmFzIGRhIGHFvnVyaXJhdGUgc3ZvamEgb2RvYnJlbmphLlwiLFwiZGVzY3JpcHRpb25cIjpcIk1pIHByaWt1cGxqYW1vIGkgcHJvY2VzaXJhbW8gVmHFoWUgbGnEjW5lIHBvZGF0a2UgcmFkaSBzbGVkZcSHZWc6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIlNhem5hanRlIHZpxaFlXCJ9LFwib2tcIjpcIlUgcmVkdVwiLFwic2F2ZVwiOlwiU2HEjXV2YWpcIixcImRlY2xpbmVcIjpcIk9kYmlqXCIsXCJjbG9zZVwiOlwiWmF0dm9yaVwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJJem1lbmkgc3ZlXCIsXCJkZXNjcmlwdGlvblwiOlwiS29yaXN0aXRlIG92YWogcHJla2lkYcSNIGRhIG9tb2d1xIdpdGUvb25lc3Bvc29iaXRlIHN2ZSBhcGxpa2FjaWplIG9kamVkbm9tLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob25lc3Bvc29iaXRlKVwiLFwiZGVzY3JpcHRpb25cIjpcIk92YSBhcGxpa2FjaWphIGplIHXEjWl0YW5hIGF1dG9tYXRza2kgKGFsaSBqZSBtb8W+ZXRlIG9uZXNwb3NvYml0aSlcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIobmVvcGhvZG5hKVwiLFwiZGVzY3JpcHRpb25cIjpcIk92YSBhcGxpa2FjaWphIGplIHV2ZWsgbmVvcGhvZG5hLlwifSxcInB1cnBvc2VzXCI6XCJTdnJoZVwiLFwicHVycG9zZVwiOlwiU3ZyaGFcIn0sXCJwb3dlcmVkQnlcIjpcIlBva3JlxIdlIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcItCY0L3RhNC+0YDQvNCw0YbQuNGY0LUg0LrQvtGY0LUg0L/RgNC40LrRg9C/0ZnQsNC80L5cIixcImRlc2NyaXB0aW9uXCI6XCLQntCy0LTQtSDQvNC+0LbQtdGC0LUg0LLQuNC00LXRgiDQuCDQv9C+0LTQtdGB0LjRgtC4INC40L3RhNC+0YDQvNCw0YbQuNGY0LUg0LrQvtGY0LUg0L/RgNC40LrRg9C/0ZnQsNC80L4g0L4g0JLQsNC80LAuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwi0L/QvtC70LjRgtC40LrRgyDQv9GA0LjQstCw0YLQvdC+0YHRgtC4XCIsXCJ0ZXh0XCI6XCLQl9CwINCy0LjRiNC1INC40L3RhNC+0YDQvNCw0YbQuNGY0LAg0L/RgNC+0YfQuNGC0LDRmNGC0LUg0L3QsNGI0YMge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcItCU0L7RiNC70L4g0ZjQtSDQtNC+INC/0YDQvtC80LXQvdCwINC+0LQg0JLQsNGI0LUg0L/QvtGB0LvQtdC00L3RmNC1INC/0L7RgdC10YLQtSwg0LzQvtC70LjQvNC+INCS0LDRgSDQtNCwINCw0LbRg9GA0LjRgNCw0YLQtSDRgdCy0L7RmNCwINC+0LTQvtCx0YDQtdGa0LAuXCIsXCJkZXNjcmlwdGlvblwiOlwi0JzQuCDQv9GA0LjQutGD0L/RmdCw0LzQviDQuCDQv9GA0L7RhtC10YHQuNGA0LDQvNC+INCS0LDRiNC1INC70LjRh9C90LUg0L/QvtC00LDRgtC60LUg0YDQsNC00Lgg0YHQu9C10LTQtdGb0LXQszoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwi0KHQsNC30L3QsNGY0YLQtSDQstC40YjQtVwifSxcIm9rXCI6XCLQoyDRgNC10LTRg1wiLFwic2F2ZVwiOlwi0KHQsNGH0YPQstCw0ZhcIixcImRlY2xpbmVcIjpcItCe0LTQsdC40ZhcIixcImNsb3NlXCI6XCLQl9Cw0YLQstC+0YDQuFwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCLQmNC30LzQtdC90Lgg0YHQstC1XCIsXCJkZXNjcmlwdGlvblwiOlwi0JrQvtGA0LjRgdGC0LjRgtC1INC+0LLQsNGYINC/0YDQtdC60LjQtNCw0Ycg0LTQsCDQvtC80L7Qs9GD0ZvQuNGC0LUv0L7QvdC10YHQv9C+0YHQvtCx0LjRgtC1INGB0LLQtSDQsNC/0LvQuNC60LDRhtC40ZjQtSDQvtC00ZjQtdC00L3QvtC8LlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIo0L7QvdC10YHQv9C+0YHQvtCx0LjRgtC1KVwiLFwiZGVzY3JpcHRpb25cIjpcItCe0LLQsCDQsNC/0LvQuNC60LDRhtC40ZjQsCDRmNC1INGD0YfQuNGC0LDQvdCwINCw0YPRgtC+0LzQsNGC0YHQutC4ICjQsNC70Lgg0ZjQtSDQvNC+0LbQtdGC0LUg0L7QvdC10YHQv9C+0YHQvtCx0LjRgtC4KVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIijQvdC10L7Qv9GF0L7QtNC90LApXCIsXCJkZXNjcmlwdGlvblwiOlwi0J7QstCwINCw0L/Qu9C40LrQsNGG0LjRmNCwINGY0LUg0YPQstC10Log0L3QtdC+0L/RhdC+0LTQvdCwLlwifSxcInB1cnBvc2VzXCI6XCLQodCy0YDRhdC1XCIsXCJwdXJwb3NlXCI6XCLQodCy0YDRhdCwXCJ9LFwicG93ZXJlZEJ5XCI6XCLQn9C+0LrRgNC10ZvQtSDQmtC70LDRgNC+IVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWF0aW9uIHNvbSB2aSBzYW1sYXJcIixcImRlc2NyaXB0aW9uXCI6XCJIw6RyIGthbiBkdSBzZSBvY2ggYW5wYXNzYSB2aWxrZW4gaW5mb3JtYXRpb24gdmkgc2FtbGFyIG9tIGRpZy5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJJbnRlZ3JpdGV0c3BvbGljeVwiLFwidGV4dFwiOlwiRsO2ciBhdHQgdmV0YSBtZXIsIGzDpHMgdsOlciB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiRGV0IGhhciBza2V0dCBmw7Zyw6RuZHJpbmdhciBzZWRhbiBkaXR0IHNlbmFzdGUgYmVzw7ZrLCB2YXIgZ29kIHVwcGRhdGVyYSBkaXR0IG1lZGdpdmFuZGUuXCIsXCJkZXNjcmlwdGlvblwiOlwiVmkgc2FtbGFyIG9jaCBiZWFyYmV0YXIgZGluIHBlcnNvbmxpZ2EgZGF0YSBpIGbDtmxqYW5kZSBzeWZ0ZW46IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkzDpHMgbWVyXCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCJTcGFyYVwiLFwiZGVjbGluZVwiOlwiQXZiw7ZqXCIsXCJjbG9zZVwiOlwiU3TDpG5nXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIsOEbmRyYSBmw7ZyIGFsbGEgYXBwYXJcIixcImRlc2NyaXB0aW9uXCI6XCJBbnbDpG5kIGRldHRhIHJlZ2xhZ2UgZsO2ciBhdHQgYWt0aXZlcmEvYXZha3RpdmVyYSBzYW10bGlnYSBhcHBhci5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKEF2YWt0aXZlcmEpXCIsXCJkZXNjcmlwdGlvblwiOlwiRGVuIGjDpHIgYXBwZW4gbGFkZGFzIHNvbSBzdGFuZGFyZGluc3TDpGxsbmluZyAobWVuIGR1IGthbiBhdmFrdGl2ZXJhIGRlbilcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoS3LDpHZzIGFsbHRpZClcIixcImRlc2NyaXB0aW9uXCI6XCJEZW4gaMOkciBhcHBsaWthdGlvbmVuIGtyw6R2cyBhbGx0aWRcIn0sXCJwdXJwb3Nlc1wiOlwiU3lmdGVuXCIsXCJwdXJwb3NlXCI6XCJTeWZ0ZVwifSxcInBvd2VyZWRCeVwiOlwiS8O2cnMgcMOlIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIlNha2xhZMSxxJ/EsW3EsXogYmlsZ2lsZXJcIixcImRlc2NyaXB0aW9uXCI6XCJIYWtrxLFuxLF6ZGEgdG9wbGFkxLHEn8SxbcSxeiBiaWxnaWxlcmkgYnVyYWRhIGfDtnJlYmlsaXIgdmUgw7Z6ZWxsZcWfdGlyZWJpbGlyc2luaXouXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwiR2l6bGlsaWsgUG9saXRpa2FzxLFcIixcInRleHRcIjpcIkRhaGEgZmF6bGFzxLEgacOnaW4gbMO8dGZlbiB7cHJpdmFjeVBvbGljeX0gc2F5ZmFtxLF6xLEgb2t1eXVuLlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIlNvbiB6aXlhcmV0aW5pemRlbiBidSB5YW5hIGRlxJ9pxZ9pa2xpa2xlciBvbGR1LCBsw7x0ZmVuIHNlw6dpbWluaXppIGfDvG5jZWxsZXlpbi5cIixcImRlc2NyaXB0aW9uXCI6XCJLacWfaXNlbCBiaWxnaWxlcmluaXppIGHFn2HEn8SxZGFraSBhbWHDp2xhcmxhIHNha2zEsXlvciB2ZSBpxZ9saXlvcnV6OiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJEYWhhIGZhemxhIGJpbGdpXCJ9LFwib2tcIjpcIlRhbWFtXCIsXCJzYXZlXCI6XCJLYXlkZXRcIixcImRlY2xpbmVcIjpcIlJlZGRldFwiLFwiY2xvc2VcIjpcIkthcGF0XCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIlTDvG0gdXlndWxhbWFsYXLEsSBhw6cva2FwYXRcIixcImRlc2NyaXB0aW9uXCI6XCJUb3BsdSBhw6dtYS9rYXBhbWEgacOnaW4gYnUgZMO8xJ9tZXlpIGt1bGxhbmFiaWxpcnNpbi5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKGlzdGXEn2UgYmHEn2zEsSlcIixcImRlc2NyaXB0aW9uXCI6XCJCdSB1eWd1bGFtYSB2YXJzYXnEsWxhbmRhIHnDvGtsZW5kaSAoYW5jYWsgaXB0YWwgZWRlYmlsaXJzaW4pXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKGhlciB6YW1hbiBnZXJla2xpKVwiLFwiZGVzY3JpcHRpb25cIjpcIkJ1IHV5Z3VsYW1hIGhlciB6YW1hbiBnZXJla2xpXCJ9LFwicHVycG9zZXNcIjpcIkFtYcOnbGFyXCIsXCJwdXJwb3NlXCI6XCJBbWHDp1wifSxcInBvd2VyZWRCeVwiOlwiS2xhcm8gdGFyYWbEsW5kYW4gZ2VsacWfdGlyaWxkaSFcIn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UHVycG9zZXMoY29uZmlnKXtcclxuICAgIGNvbnN0IHB1cnBvc2VzID0gbmV3IFNldChbXSlcclxuICAgIGZvcihsZXQgaT0wO2k8Y29uZmlnLmFwcHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgY29uc3QgYXBwUHVycG9zZXMgPSBjb25maWcuYXBwc1tpXS5wdXJwb3NlcyB8fCBbXVxyXG4gICAgICAgIGZvcihsZXQgaj0wO2o8YXBwUHVycG9zZXMubGVuZ3RoO2orKylcclxuICAgICAgICAgICAgcHVycG9zZXMuYWRkKGFwcFB1cnBvc2VzW2pdKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20ocHVycG9zZXMpXHJcbn1cclxuIiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWVzKCl7XHJcbiAgICBjb25zdCBjb29raWVTdHJpbmdzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKVxyXG4gICAgY29uc3QgY29va2llcyA9IFtdXHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ15cXFxccyooW149XSspXFxcXHMqPVxcXFxzKiguKj8pJCcpXHJcbiAgICBmb3IobGV0IGk9MDtpPGNvb2tpZVN0cmluZ3MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RyID0gY29va2llU3RyaW5nc1tpXVxyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhjb29raWVTdHIpXHJcbiAgICAgICAgaWYgKG1hdGNoID09PSBudWxsKVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIGNvb2tpZXMucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IG1hdGNoWzFdLFxyXG4gICAgICAgICAgICB2YWx1ZTogbWF0Y2hbMl0sXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBjb29raWVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xyXG4gICAgY29uc3QgY29va2llcyA9IGdldENvb2tpZXMoKVxyXG4gICAgZm9yKGxldCBpPTA7aTxjb29raWVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGlmIChjb29raWVzW2ldLm5hbWUgPT09IG5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBjb29raWVzW2ldXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5cclxuLy9odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDU3MzIyMy9zZXQtY29va2llLWFuZC1nZXQtY29va2llLXdpdGgtamF2YXNjcmlwdFxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKG5hbWUsIHZhbHVlLCBkYXlzLCBkb21haW4pIHtcclxuICAgIGxldCBleHBpcmVzID0gXCJcIlxyXG4gICAgaWYgKGRheXMpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzKjI0KjYwKjYwKjEwMDApKVxyXG4gICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKVxyXG4gICAgfVxyXG4gICAgaWYgKGRvbWFpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZXhwaXJlcyArPSAnOyBkb21haW49JyArIGRvbWFpblxyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb29raWUobmFtZSwgcGF0aCwgZG9tYWluKSB7XHJcbiAgICBsZXQgc3RyID0gbmFtZSsnPTsgTWF4LUFnZT0tOTk5OTk5OTk7J1xyXG4gICAgLy8gdHJ5IHRvIGRlbGV0ZSB0aGUgY29va2llIHdpdGhvdXQgYW55IHBhdGggYW5kIGRvbWFpblxyXG4gICAgZG9jdW1lbnQuY29va2llID0gc3RyXHJcbiAgICBzdHIgKz0gJyBwYXRoPScrKHBhdGggfHwgJy8nKSsnOydcclxuICAgIC8vIHRyeSB0byBkZWxldGUgdGhlIGNvb2tpZSB3aXRoIHBhdGhcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHN0clxyXG4gICAgaWYgKGRvbWFpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3RyICs9ICcgZG9tYWluPScrZG9tYWluKyc7J1xyXG4gICAgICAgIC8vIHRyeSB0byBkZWxldGUgdGhlIGNvb2tpZSB3aXRoIGRvbWFpbiBhbmQgcGF0aFxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHN0clxyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGZvcm1hdCA9IChzdHIsIC4uLnJlc3QpID0+IHtcclxuICAgIGNvbnN0IHQgPSB0eXBlb2YgcmVzdFswXTtcclxuICAgIGxldCBhcmdzXHJcbiAgICBpZiAocmVzdC5sZW5ndGggPT09IDApXHJcbiAgICAgICAgYXJncyA9IHt9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgYXJncyA9ICh0ID09PSBcInN0cmluZ1wiIHx8IHQgPT09IFwibnVtYmVyXCIpID9cclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocmVzdClcclxuICAgICAgICAgICAgOiByZXN0WzBdO1xyXG5cclxuICAgIGNvbnN0IHNwbGl0cyA9IFtdXHJcblxyXG4gICAgbGV0IHMgPSBzdHIudG9TdHJpbmcoKVxyXG4gICAgd2hpbGUocy5sZW5ndGggPiAwKXtcclxuICAgICAgICBjb25zdCBtID0gcy5tYXRjaCgvXFx7KD8hXFx7KShbXFx3XFxkXSspXFx9KD8hXFx9KS8pXHJcbiAgICAgICAgaWYgKG0gIT09IG51bGwpe1xyXG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gcy5zdWJzdHIoMCwgbS5pbmRleClcclxuICAgICAgICAgICAgcyA9IHMuc3Vic3RyKG0uaW5kZXgrbVswXS5sZW5ndGgpXHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUludChtWzFdKVxyXG4gICAgICAgICAgICBzcGxpdHMucHVzaChsZWZ0KVxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXHJcbiAgICAgICAgICAgIGlmIChuICE9IG4peyAvLyBub3QgYSBudW1iZXJcclxuICAgICAgICAgICAgICAgIHNwbGl0cy5wdXNoKGFyZ3NbbVsxXV0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIGEgbnVtYmVyZWQgYXJndW1lbnRcclxuICAgICAgICAgICAgICAgIHNwbGl0cy5wdXNoKGFyZ3Nbbl0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGxpdHMucHVzaChzKVxyXG4gICAgICAgICAgICBzID0gXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzcGxpdHNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhbmd1YWdlKCl7XHJcbiAgICBjb25zdCBsYW5nID0gKCh0eXBlb2Ygd2luZG93Lmxhbmd1YWdlID09PSBcInN0cmluZ1wiID8gd2luZG93Lmxhbmd1YWdlIDogbnVsbCkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgfHwgJ2VuJykudG9Mb3dlckNhc2UoKVxyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeKFtcXFxcd10rKS0oW1xcXFx3XSspJCcpXHJcbiAgICBjb25zdCByZXN1bHQgPSByZWdleC5leGVjKGxhbmcpXHJcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKXtcclxuICAgICAgICByZXR1cm4gbGFuZ1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFsxXVxyXG59XHJcblxyXG5mdW5jdGlvbiBoZ2V0KGQsIGtleSwgZGVmYXVsdFZhbHVlKXtcclxuICAgIGxldCBrbCA9IGtleVxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtsKSlcclxuICAgICAgICBrbCA9IFtrbF1cclxuICAgIGxldCBjdiA9IGRcclxuICAgIGZvcihsZXQgaT0wO2k8a2wubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgaWYgKGN2ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgICAgICBpZiAoY3YgaW5zdGFuY2VvZiBNYXApXHJcbiAgICAgICAgICAgIGN2ID0gY3YuZ2V0KGtsW2ldKVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgY3YgPSBjdltrbFtpXV1cclxuICAgIH1cclxuICAgIGlmIChjdiA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICAgIHJldHVybiBjdlxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdCh0cmFucywgbGFuZywga2V5LCAuLi5wYXJhbXMpe1xyXG4gICAgbGV0IGtsID0ga2V5XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2wpKVxyXG4gICAgICAgIGtsID0gW2tsXVxyXG4gICAgY29uc3QgdmFsdWUgPSBoZ2V0KHRyYW5zLCBbbGFuZywgLi4ua2xdKVxyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHJldHVybiBgW21pc3NpbmcgdHJhbnNsYXRpb246ICR7bGFuZ30vJHtrbC5qb2luKFwiL1wiKX1dYDtcclxuICAgIH1cclxuICAgIGlmIChwYXJhbXMubGVuZ3RoID4gMClcclxuICAgICAgICByZXR1cm4gZm9ybWF0KHZhbHVlLCAuLi5wYXJhbXMpXHJcbiAgICByZXR1cm4gdmFsdWVcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY29udmVydFRvTWFwKGQpe1xyXG4gICAgY29uc3QgZG0gPSBuZXcgTWFwKFtdKVxyXG4gICAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkKSl7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkW2tleV1cclxuICAgICAgICBpZiAoISh0eXBlb2Yoa2V5KSA9PT0gJ3N0cmluZycpKVxyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIGlmICh0eXBlb2YodmFsdWUpID09PSAnc3RyaW5nJyl7XHJcbiAgICAgICAgICAgIGRtLnNldChrZXksIHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBkbS5zZXQoa2V5LCBjb252ZXJ0VG9NYXAodmFsdWUpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkbVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKGQsIGVkLCBvdmVyd3JpdGUsIGNsb25lKXtcclxuXHJcbiAgICBjb25zdCBhc3NpZ24gPSAoZCwga2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE1hcCl7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoW10pXHJcbiAgICAgICAgICAgIC8vd2UgZGVlcC1jbG9uZSB0aGUgbWFwXHJcbiAgICAgICAgICAgIHVwZGF0ZShtYXAsIHZhbHVlLCB0cnVlLCBmYWxzZSlcclxuICAgICAgICAgICAgZC5zZXQoa2V5LCBtYXApXHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGQuc2V0KGtleSwgdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEoZWQgaW5zdGFuY2VvZiBNYXApIHx8ICEoZCBpbnN0YW5jZW9mIE1hcCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVycyBhcmUgbm90IG1hcHMhXCIpXHJcbiAgICBpZiAob3ZlcndyaXRlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgb3ZlcndyaXRlID0gdHJ1ZVxyXG4gICAgaWYgKGNsb25lID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgY2xvbmUgPSBmYWxzZVxyXG4gICAgaWYgKGNsb25lKVxyXG4gICAgICAgIGQgPSBuZXcgZC5jb25zdHJ1Y3RvcihkKVxyXG4gICAgZm9yKGNvbnN0IGtleSBvZiBlZC5rZXlzKCkpe1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZWQuZ2V0KGtleSlcclxuICAgICAgICBjb25zdCBkdmFsdWUgPSBkLmdldChrZXkpXHJcbiAgICAgICAgaWYgKCFkLmhhcyhrZXkpKXtcclxuICAgICAgICAgICAgYXNzaWduKGQsIGtleSwgdmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwICYmIGR2YWx1ZSBpbnN0YW5jZW9mIE1hcCl7XHJcbiAgICAgICAgICAgIGQuc2V0KGtleSwgdXBkYXRlKGR2YWx1ZSwgdmFsdWUsIG92ZXJ3cml0ZSwgY2xvbmUpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFvdmVyd3JpdGUpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICBhc3NpZ24oZCwga2V5LCB2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=