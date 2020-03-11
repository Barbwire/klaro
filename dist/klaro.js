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
      }, acceptAllButton, declineButton), react__WEBPACK_IMPORTED_MODULE_11__["default"].createElement("p", {
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

module.exports = {"consentModal":{"title":"Datenschutzeinstellungen","description":"Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.\n","privacyPolicy":{"name":"Datenschutzerklärung","text":"{privacyPolicy}\n"}},"consentNotice":{"title":"Datenschutzeinstellungen","changeDescription":"Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Auswahl.","description":"Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.\n","learnMore":"Mehr erfahren"},"ok":"OK","save":"Speichern","decline":"Nur essentielle Cookies akzeptieren","close":"Schließen","acceptAll":"Alle akzeptieren","app":{"disableAll":{"title":"Alle Anwendungen aktivieren/deaktivieren","description":"Nutzen Sie diesen Schalter um alle Apps zu aktivieren/deaktivieren."},"optOut":{"title":"(Opt-Out)","description":"Diese Anwendung wird standardmäßig geladen (Sie können diese aber deaktivieren)"},"required":{"title":"(immer notwendig)","description":"Diese Anwendung wird immer benötigt"},"purposes":"Zwecke","purpose":"Zweck"},"poweredBy":"Realisiert mit Klaro!"}

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

module.exports = {"consentModal":{"title":"Information that we collect","description":"Here you can see and customize the information that we collect about you.\n","privacyPolicy":{"name":"privacy policy","text":"To learn more, please read our {privacyPolicy}.\n"}},"consentNotice":{"changeDescription":"There were changes since your last visit, please update your consent.","description":"We collect and process your personal information for the following purposes: {purposes}.\n","learnMore":"Customize"},"ok":"Accept","save":"Save","decline":"Decline","close":"Close","acceptAll":"Accept all","acceptSelected":"Accept selected","app":{"disableAll":{"title":"Toggle all apps","description":"Use this switch to enable/disable all apps."},"optOut":{"title":"(opt-out)","description":"This app is loaded by default (but you can opt out)"},"required":{"title":"(always required)","description":"This application is always required"},"purposes":"Purposes","purpose":"Purpose"},"poweredBy":"Powered by Klaro!"}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbGFyby93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8va2xhcm8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYW4tb2JqZWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS13ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb20taXRlcmFibGVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZyZWV6aW5nLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtb2JqZWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuam9pbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnNsaWNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmFzc2lnbi5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5jcmVhdGUuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWludC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLml0ZXJhdG9yLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9jdXJyZW50LWV4ZWN1dGluZy1zY3JpcHQvZGlzdC9jdXJyZW50RXhlY3V0aW5nU2NyaXB0LmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy9wcmVhY3QvY29tcGF0L2Rpc3QvY29tcGF0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2Rpc3QvcHJlYWN0Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uLi9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwid2VicGFjazovL2tsYXJvLy4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9hcHAtaXRlbS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL2NvbXBvbmVudHMvYXBwLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9hcHBzLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9jb25zZW50LW1vZGFsLmpzIiwid2VicGFjazovL2tsYXJvLy4vY29tcG9uZW50cy9jb25zZW50LW5vdGljZS5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL2NvbXBvbmVudHMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi9jb25zZW50LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi9rbGFyby5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3N0b3Jlcy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9jYS55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvZGUueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2VsLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9lbi55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvZXMueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2ZpLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9mci55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvaHIueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL2h1LnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9pdC55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvbmwueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL25vLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9wbC55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvcm8ueW1sIiwid2VicGFjazovL2tsYXJvLy4vdHJhbnNsYXRpb25zL3NyLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9zcl9jeXJsLnltbCIsIndlYnBhY2s6Ly9rbGFyby8uL3RyYW5zbGF0aW9ucy9zdi55bWwiLCJ3ZWJwYWNrOi8va2xhcm8vLi90cmFuc2xhdGlvbnMvdHIueW1sIiwid2VicGFjazovL2tsYXJvLy4vdXRpbHMvY29uZmlnLmpzIiwid2VicGFjazovL2tsYXJvLy4vdXRpbHMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9rbGFyby8uL3V0aWxzL2kxOG4uanMiLCJ3ZWJwYWNrOi8va2xhcm8vLi91dGlscy9tYXBzLmpzIl0sIm5hbWVzIjpbIkFwcEl0ZW0iLCJwcm9wcyIsImNoZWNrZWQiLCJvblRvZ2dsZSIsIm5hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidCIsInJlcXVpcmVkIiwib3B0T3V0IiwicHVycG9zZXMiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsInB1cnBvc2VzVGV4dCIsIm1hcCIsInB1cnBvc2UiLCJqb2luIiwib3B0T3V0VGV4dCIsInJlcXVpcmVkVGV4dCIsInB1cnBvc2VzQ29udGVudCIsImxlbmd0aCIsInRhYkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJBcHAiLCJzdGF0ZSIsInNob3ciLCJtYW5hZ2VyIiwiY29uZmlybWVkIiwicHJldlByb3BzIiwic2hvd1N0YXRlIiwic2V0U3RhdGUiLCJjb25maWciLCJzdHlsZVByZWZpeCIsImhpZGUiLCJBcHBzIiwid2F0Y2giLCJjb25zZW50cyIsInVud2F0Y2giLCJvYmoiLCJ0eXBlIiwiZGF0YSIsImFwcHMiLCJ0b2dnbGUiLCJ2YWx1ZSIsImFwcCIsInVwZGF0ZUNvbnNlbnQiLCJ0b2dnbGVBbGwiLCJhcHBJdGVtcyIsInRvZ2dsZUFwcCIsInRvZ2dsYWJsZUFwcHMiLCJmaWx0ZXIiLCJhbGxEaXNhYmxlZCIsIkNvbnNlbnRNb2RhbCIsInJlc3RvcmVTYXZlZENvbnNlbnRzIiwiY29uZmlybWluZyIsInNhdmVBbmRIaWRlIiwiYWNjZXB0QW5kSGlkZSIsImRlY2xpbmVBbmRIaWRlIiwibGFuZyIsImxhbmd1YWdlIiwiY2xvc2VMaW5rIiwibXVzdENvbnNlbnQiLCJkZWNsaW5lQnV0dG9uIiwiaGlkZURlY2xpbmVBbGwiLCJhY2NlcHRBbGxCdXR0b24iLCJhY2NlcHRCdXR0b24iLCJhY2NlcHRBbGwiLCJwcFVybCIsInByaXZhY3lQb2xpY3kiLCJwcExpbmsiLCJwb3dlcmVkQnkiLCJDb25zZW50Tm90aWNlIiwic2V0Q2hhbmdlZEFsbCIsImNoYW5nZWRBbGxWYWx1ZSIsIm1vZGFsIiwiY2hhbmdlQWxsIiwic2F2ZUFuZEFwcGx5Q29uc2VudHMiLCJzZXRUaW1lb3V0IiwiZXhlY3V0ZUJ1dHRvbkNsaWNrZWQiLCJnZXRQdXJwb3NlcyIsImNoYW5nZXNUZXh0Iiwic2hvd01vZGFsIiwicHJldmVudERlZmF1bHQiLCJoaWRlTW9kYWwiLCJjaGFuZ2VkIiwibm90aWNlSXNWaXNpYmxlIiwibm9Ob3RpY2UiLCJDbG9zZSIsIkNvbnNlbnRNYW5hZ2VyIiwic3RvcmUiLCJzdG9yZXMiLCJzdG9yYWdlTWV0aG9kIiwidW5kZWZpbmVkIiwiZGVmYXVsdENvbnNlbnRzIiwic3RhdGVzIiwiZXhlY3V0ZWRPbmNlIiwid2F0Y2hlcnMiLCJTZXQiLCJsb2FkQ29uc2VudHMiLCJhcHBseUNvbnNlbnRzIiwic2F2ZWRDb25zZW50cyIsIndhdGNoZXIiLCJoYXMiLCJhZGQiLCJmb3JFYWNoIiwidXBkYXRlIiwibWF0Y2hpbmdBcHBzIiwiY29uc2VudCIsIm5vdGlmeSIsImNvbXBsZXRlIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImdldERlZmF1bHRDb25zZW50IiwiY29uc2VudERhdGEiLCJnZXQiLCJKU09OIiwicGFyc2UiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfY2hlY2tDb25zZW50cyIsInNhdmVDb25zZW50cyIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnkiLCJzZXQiLCJpIiwiZ2V0Q29uc2VudCIsInVwZGF0ZUFwcEVsZW1lbnRzIiwidXBkYXRlQXBwQ29va2llcyIsImNhbGxiYWNrIiwib25seU9uY2UiLCJlbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJwYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiZGF0YXNldCIsImF0dHJzIiwidGFnTmFtZSIsIm5ld0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwidGV4dCIsInN0eWxlIiwiY3NzVGV4dCIsImRlZmVyIiwiYXN5bmMiLCJzcmMiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsImF0dHIiLCJhdHRyVmFsdWUiLCJvcmlnaW5hbERpc3BsYXkiLCJkaXNwbGF5IiwicmVtb3ZlQXR0cmlidXRlIiwiZXNjYXBlUmVnZXhTdHIiLCJzdHIiLCJyZXBsYWNlIiwiY29va2llcyIsImdldENvb2tpZXMiLCJjb29raWVQYXR0ZXJuIiwiY29va2llUGF0aCIsImNvb2tpZURvbWFpbiIsIkFycmF5IiwiUmVnRXhwIiwiaiIsImNvb2tpZSIsIm1hdGNoIiwiZXhlYyIsImNvbnNvbGUiLCJkZWJ1ZyIsImRlbGV0ZUNvb2tpZSIsImNvb2tpZU5hbWUiLCJjb29raWVFeHBpcmVzQWZ0ZXJEYXlzIiwibW9kdWxlIiwicmVxdWlyZSIsInNjcmlwdCIsImN1cnJlbnRTY3JpcHQiLCJjdXJyZW50RXhlY3V0aW5nU2NyaXB0Iiwib3JpZ2luYWxPbkxvYWQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJjb252ZXJ0ZWRUcmFuc2xhdGlvbnMiLCJjb252ZXJ0VG9NYXAiLCJ0cmFuc2xhdGlvbnMiLCJjb25maWdOYW1lIiwibm9BdXRvTG9hZCIsIm1hbmFnZXJzIiwiaW5pdGlhbGl6ZSIsImdldEVsZW1lbnRJRCIsImVsZW1lbnRJRCIsImdldEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdldFRyYW5zbGF0aW9ucyIsInRyYW5zIiwiTWFwIiwiY250IiwicmVuZGVyS2xhcm8iLCJzaG93Q250IiwiZ2V0TWFuYWdlciIsInR0IiwiYXJncyIsInJlbmRlciIsImNvbmYiLCJ2ZXJzaW9uIiwiVkVSU0lPTiIsIkNvb2tpZVN0b3JlIiwiZ2V0Q29va2llIiwic2V0Q29va2llIiwiTG9jYWxTdG9yYWdlU3RvcmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJjYSIsImRlIiwiZWwiLCJlbiIsImVzIiwiZmkiLCJmciIsImh1IiwiaHIiLCJpdCIsIm5sIiwibm8iLCJybyIsInNyIiwic3JfY3lybCIsInN2IiwidHIiLCJwbCIsImFwcFB1cnBvc2VzIiwiZnJvbSIsImNvb2tpZVN0cmluZ3MiLCJzcGxpdCIsInJlZ2V4IiwiY29va2llU3RyIiwicHVzaCIsImRheXMiLCJkb21haW4iLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwicGF0aCIsImZvcm1hdCIsInJlc3QiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJzcGxpdHMiLCJzIiwidG9TdHJpbmciLCJtIiwibGVmdCIsInN1YnN0ciIsImluZGV4IiwibiIsInBhcnNlSW50IiwiZG9jdW1lbnRFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJyZXN1bHQiLCJoZ2V0IiwiZCIsImRlZmF1bHRWYWx1ZSIsImtsIiwiaXNBcnJheSIsImN2IiwicGFyYW1zIiwiZG0iLCJlZCIsIm92ZXJ3cml0ZSIsImNsb25lIiwiYXNzaWduIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsImR2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQ0FBaUMsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxpQ0FBaUMsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpQ0FBaUMsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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b250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtsYXJvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtsYXJvXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCAnICsgKG5hbWUgPyBuYW1lICsgJyAnIDogJycpICsgJ2ludm9jYXRpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAoIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIKSA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcblxudmFyIHB1c2ggPSBbXS5wdXNoO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgZm9yRWFjaCwgbWFwLCBmaWx0ZXIsIHNvbWUsIGV2ZXJ5LCBmaW5kLCBmaW5kSW5kZXggfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCwgc3BlY2lmaWNDcmVhdGUpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgY3JlYXRlID0gc3BlY2lmaWNDcmVhdGUgfHwgYXJyYXlTcGVjaWVzQ3JlYXRlO1xuICAgIHZhciB0YXJnZXQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7ICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogdGFyZ2V0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4gIGZvckVhY2g6IGNyZWF0ZU1ldGhvZCgwKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgZmlsdGVyOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuc29tZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zb21lXG4gIHNvbWU6IGNyZWF0ZU1ldGhvZCgzKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5ldmVyeWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZFxuICBmaW5kOiBjcmVhdGVNZXRob2QoNSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRJbmRleFxuICBmaW5kSW5kZXg6IGNyZWF0ZU1ldGhvZCg2KVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHRoaXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzdcbiAgcmV0dXJuIFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBhcnJheS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgIGNvbnN0cnVjdG9yW1NQRUNJRVNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZm9vOiAxIH07XG4gICAgfTtcbiAgICByZXR1cm4gYXJyYXlbTUVUSE9EX05BTUVdKEJvb2xlYW4pLmZvbyAhPT0gMTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY2FjaGUgPSB7fTtcblxudmFyIHRocm93ZXIgPSBmdW5jdGlvbiAoaXQpIHsgdGhyb3cgaXQ7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBvcHRpb25zKSB7XG4gIGlmIChoYXMoY2FjaGUsIE1FVEhPRF9OQU1FKSkgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXTtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHZhciBBQ0NFU1NPUlMgPSBoYXMob3B0aW9ucywgJ0FDQ0VTU09SUycpID8gb3B0aW9ucy5BQ0NFU1NPUlMgOiBmYWxzZTtcbiAgdmFyIGFyZ3VtZW50MCA9IGhhcyhvcHRpb25zLCAwKSA/IG9wdGlvbnNbMF0gOiB0aHJvd2VyO1xuICB2YXIgYXJndW1lbnQxID0gaGFzKG9wdGlvbnMsIDEpID8gb3B0aW9uc1sxXSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdID0gISFtZXRob2QgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQUNDRVNTT1JTICYmICFERVNDUklQVE9SUykgcmV0dXJuIHRydWU7XG4gICAgdmFyIE8gPSB7IGxlbmd0aDogLTEgfTtcblxuICAgIGlmIChBQ0NFU1NPUlMpIGRlZmluZVByb3BlcnR5KE8sIDEsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiB0aHJvd2VyIH0pO1xuICAgIGVsc2UgT1sxXSA9IDE7XG5cbiAgICBtZXRob2QuY2FsbChPLCBhcmd1bWVudDAsIGFyZ3VtZW50MSk7XG4gIH0pO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbi8vIGBBcnJheVNwZWNpZXNDcmVhdGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXlzcGVjaWVzY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbEFycmF5LCBsZW5ndGgpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsQXJyYXkpKSB7XG4gICAgQyA9IG9yaWdpbmFsQXJyYXkuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGVsc2UgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCA9PT0gMCA/IDAgOiBsZW5ndGgpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lLWFsbCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXNwZWNpZXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtbWV0YWRhdGEnKS5mYXN0S2V5O1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3I7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIENPTlNUUlVDVE9SX05BTUUpO1xuICAgICAgc2V0SW50ZXJuYWxTdGF0ZSh0aGF0LCB7XG4gICAgICAgIHR5cGU6IENPTlNUUlVDVE9SX05BTUUsXG4gICAgICAgIGluZGV4OiBjcmVhdGUobnVsbCksXG4gICAgICAgIGZpcnN0OiB1bmRlZmluZWQsXG4gICAgICAgIGxhc3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfSk7XG4gICAgICBpZiAoIURFU0NSSVBUT1JTKSB0aGF0LnNpemUgPSAwO1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgaXRlcmF0ZShpdGVyYWJsZSwgdGhhdFtBRERFUl0sIHRoYXQsIElTX01BUCk7XG4gICAgfSk7XG5cbiAgICB2YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG5cbiAgICB2YXIgZGVmaW5lID0gZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgdmFyIHByZXZpb3VzLCBpbmRleDtcbiAgICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGVudHJ5LnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5sYXN0ID0gZW50cnkgPSB7XG4gICAgICAgICAgaW5kZXg6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLFxuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBwcmV2aW91czogcHJldmlvdXMgPSBzdGF0ZS5sYXN0LFxuICAgICAgICAgIG5leHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICByZW1vdmVkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICBpZiAoIXN0YXRlLmZpcnN0KSBzdGF0ZS5maXJzdCA9IGVudHJ5O1xuICAgICAgICBpZiAocHJldmlvdXMpIHByZXZpb3VzLm5leHQgPSBlbnRyeTtcbiAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplKys7XG4gICAgICAgIGVsc2UgdGhhdC5zaXplKys7XG4gICAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgICBpZiAoaW5kZXggIT09ICdGJykgc3RhdGUuaW5kZXhbaW5kZXhdID0gZW50cnk7XG4gICAgICB9IHJldHVybiB0aGF0O1xuICAgIH07XG5cbiAgICB2YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgLy8gZmFzdCBjYXNlXG4gICAgICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gICAgICB2YXIgZW50cnk7XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgcmV0dXJuIHN0YXRlLmluZGV4W2luZGV4XTtcbiAgICAgIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICAgICAgZm9yIChlbnRyeSA9IHN0YXRlLmZpcnN0OyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uZXh0KSB7XG4gICAgICAgIGlmIChlbnRyeS5rZXkgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAgIHZhciBkYXRhID0gc3RhdGUuaW5kZXg7XG4gICAgICAgIHZhciBlbnRyeSA9IHN0YXRlLmZpcnN0O1xuICAgICAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICBpZiAoZW50cnkucHJldmlvdXMpIGVudHJ5LnByZXZpb3VzID0gZW50cnkucHJldmlvdXMubmV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pbmRleF07XG4gICAgICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmZpcnN0ID0gc3RhdGUubGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplID0gMDtcbiAgICAgICAgZWxzZSB0aGF0LnNpemUgPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5leHQ7XG4gICAgICAgICAgdmFyIHByZXYgPSBlbnRyeS5wcmV2aW91cztcbiAgICAgICAgICBkZWxldGUgc3RhdGUuaW5kZXhbZW50cnkuaW5kZXhdO1xuICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgIGlmIChwcmV2KSBwcmV2Lm5leHQgPSBuZXh0O1xuICAgICAgICAgIGlmIChuZXh0KSBuZXh0LnByZXZpb3VzID0gcHJldjtcbiAgICAgICAgICBpZiAoc3RhdGUuZmlyc3QgPT0gZW50cnkpIHN0YXRlLmZpcnN0ID0gbmV4dDtcbiAgICAgICAgICBpZiAoc3RhdGUubGFzdCA9PSBlbnRyeSkgc3RhdGUubGFzdCA9IHByZXY7XG4gICAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplLS07XG4gICAgICAgICAgZWxzZSB0aGF0LnNpemUtLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICAgICAgICB2YXIgYm91bmRGdW5jdGlvbiA9IGJpbmQoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubmV4dCA6IHN0YXRlLmZpcnN0KSB7XG4gICAgICAgICAgYm91bmRGdW5jdGlvbihlbnRyeS52YWx1ZSwgZW50cnkua2V5LCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucmVtb3ZlZCkgZW50cnkgPSBlbnRyeS5wcmV2aW91cztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgSVNfTUFQID8ge1xuICAgICAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52YWx1ZTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IDoge1xuICAgICAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZGVmaW5lKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBDT05TVFJVQ1RPUl9OQU1FLCBJU19NQVApIHtcbiAgICB2YXIgSVRFUkFUT1JfTkFNRSA9IENPTlNUUlVDVE9SX05BTUUgKyAnIEl0ZXJhdG9yJztcbiAgICB2YXIgZ2V0SW50ZXJuYWxDb2xsZWN0aW9uU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuICAgIHZhciBnZXRJbnRlcm5hbEl0ZXJhdG9yU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKElURVJBVE9SX05BTUUpO1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICBkZWZpbmVJdGVyYXRvcihDLCBDT05TVFJVQ1RPUl9OQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgICAgICB0eXBlOiBJVEVSQVRPUl9OQU1FLFxuICAgICAgICB0YXJnZXQ6IGl0ZXJhdGVkLFxuICAgICAgICBzdGF0ZTogZ2V0SW50ZXJuYWxDb2xsZWN0aW9uU3RhdGUoaXRlcmF0ZWQpLFxuICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICBsYXN0OiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsSXRlcmF0b3JTdGF0ZSh0aGlzKTtcbiAgICAgIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgICAgIHZhciBlbnRyeSA9IHN0YXRlLmxhc3Q7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yZW1vdmVkKSBlbnRyeSA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghc3RhdGUudGFyZ2V0IHx8ICEoc3RhdGUubGFzdCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uZXh0IDogc3RhdGUuc3RhdGUuZmlyc3QpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogZW50cnkua2V5LCBkb25lOiBmYWxzZSB9O1xuICAgICAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiBlbnRyeS52YWx1ZSwgZG9uZTogZmFsc2UgfTtcbiAgICAgIHJldHVybiB7IHZhbHVlOiBbZW50cnkua2V5LCBlbnRyeS52YWx1ZV0sIGRvbmU6IGZhbHNlIH07XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKENPTlNUUlVDVE9SX05BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSwgd3JhcHBlciwgY29tbW9uKSB7XG4gIHZhciBJU19NQVAgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ01hcCcpICE9PSAtMTtcbiAgdmFyIElTX1dFQUsgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ1dlYWsnKSAhPT0gLTE7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBOYXRpdmVDb25zdHJ1Y3RvciA9IGdsb2JhbFtDT05TVFJVQ1RPUl9OQU1FXTtcbiAgdmFyIE5hdGl2ZVByb3RvdHlwZSA9IE5hdGl2ZUNvbnN0cnVjdG9yICYmIE5hdGl2ZUNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgdmFyIENvbnN0cnVjdG9yID0gTmF0aXZlQ29uc3RydWN0b3I7XG4gIHZhciBleHBvcnRlZCA9IHt9O1xuXG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIG5hdGl2ZU1ldGhvZCA9IE5hdGl2ZVByb3RvdHlwZVtLRVldO1xuICAgIHJlZGVmaW5lKE5hdGl2ZVByb3RvdHlwZSwgS0VZLFxuICAgICAgS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgICAgIG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIHZhbHVlID09PSAwID8gMCA6IHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IDogS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogbmF0aXZlTWV0aG9kLmNhbGwodGhpcywga2V5ID09PSAwID8gMCA6IGtleSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IHVuZGVmaW5lZCA6IG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyBmYWxzZSA6IG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIG5hdGl2ZU1ldGhvZC5jYWxsKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICBpZiAoaXNGb3JjZWQoQ09OU1RSVUNUT1JfTkFNRSwgdHlwZW9mIE5hdGl2ZUNvbnN0cnVjdG9yICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IE5hdGl2ZVByb3RvdHlwZS5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQ29uc3RydWN0b3IgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZS5SRVFVSVJFRCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoaXNGb3JjZWQoQ09OU1RSVUNUT1JfTkFNRSwgdHJ1ZSkpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZTtcbiAgICAvLyBWOCB+IENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIHZhciBBQ0NFUFRfSVRFUkFCTEVTID0gY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkgeyBuZXcgTmF0aXZlQ29uc3RydWN0b3IoaXRlcmFibGUpOyB9KTtcbiAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICB2YXIgQlVHR1lfWkVSTyA9ICFJU19XRUFLICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFY4IH4gQ2hyb21pdW0gNDItIGZhaWxzIG9ubHkgd2l0aCA1KyBlbGVtZW50c1xuICAgICAgdmFyICRpbnN0YW5jZSA9IG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuXG4gICAgaWYgKCFBQ0NFUFRfSVRFUkFCTEVTKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKGR1bW15LCBpdGVyYWJsZSkge1xuICAgICAgICBhbkluc3RhbmNlKGR1bW15LCBDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZUNvbnN0cnVjdG9yKCksIGR1bW15LCBDb25zdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB0aGF0LCBJU19NQVApO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gTmF0aXZlUHJvdG90eXBlO1xuICAgICAgTmF0aXZlUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgaWYgKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pIHtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuXG4gICAgaWYgKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpIGZpeE1ldGhvZChBRERFUik7XG5cbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIE5hdGl2ZVByb3RvdHlwZS5jbGVhcikgZGVsZXRlIE5hdGl2ZVByb3RvdHlwZS5jbGVhcjtcbiAgfVxuXG4gIGV4cG9ydGVkW0NPTlNUUlVDVE9SX05BTUVdID0gQ29uc3RydWN0b3I7XG4gICQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogQ29uc3RydWN0b3IgIT0gTmF0aXZlQ29uc3RydWN0b3IgfSwgZXhwb3J0ZWQpO1xuXG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlJykuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICBJdGVyYXRvckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yQ29uc3RydWN0b3IsIFRPX1NUUklOR19UQUcsIGZhbHNlLCB0cnVlKTtcbiAgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgcmV0dXJuIEl0ZXJhdG9yQ29uc3RydWN0b3I7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5S2V5ID0gdG9QcmltaXRpdmUoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC13cmFwcGVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgdmFyIFN5bWJvbCA9IHBhdGguU3ltYm9sIHx8IChwYXRoLlN5bWJvbCA9IHt9KTtcbiAgaWYgKCFoYXMoU3ltYm9sLCBOQU1FKSkgZGVmaW5lUHJvcGVydHkoU3ltYm9sLCBOQU1FLCB7XG4gICAgdmFsdWU6IHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUuZihOQU1FKVxuICB9KTtcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAodXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIG1vdmVkIHRvIGVudHJ5IHBvaW50c1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5yZWdleHAuZXhlYycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBJRSA8PSAxMSByZXBsYWNlcyAkMCB3aXRoIHRoZSB3aG9sZSBtYXRjaCwgYXMgaWYgaXQgd2FzICQmXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDI0NjY2L2dldHRpbmctaWUtdG8tcmVwbGFjZS1hLXJlZ2V4LXdpdGgtdGhlLWxpdGVyYWwtc3RyaW5nLTBcbnZhciBSRVBMQUNFX0tFRVBTXyQwID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdhJy5yZXBsYWNlKC8uLywgJyQwJykgPT09ICckMCc7XG59KSgpO1xuXG52YXIgUkVQTEFDRSA9IHdlbGxLbm93blN5bWJvbCgncmVwbGFjZScpO1xuLy8gU2FmYXJpIDw9IDEzLjAuMyg/KSBzdWJzdGl0dXRlcyBudGggY2FwdHVyZSB3aGVyZSBuPm0gd2l0aCBhbiBlbXB0eSBzdHJpbmdcbnZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICgvLi9bUkVQTEFDRV0pIHtcbiAgICByZXR1cm4gLy4vW1JFUExBQ0VdKCdhJywgJyQwJykgPT09ICcnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjLCBzaGFtKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIShcbiAgICAgIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTICYmXG4gICAgICBSRVBMQUNFX0tFRVBTXyQwICYmXG4gICAgICAhUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICApKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0sIHtcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDA6IFJFUExBQ0VfS0VFUFNfJDAsXG4gICAgICBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTogUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICB9KTtcbiAgICB2YXIgc3RyaW5nTWV0aG9kID0gbWV0aG9kc1swXTtcbiAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHNoYW0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIHBhdGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcGF0aCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09ICdmdW5jdGlvbicgPyB2YXJpYWJsZSA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihwYXRoW25hbWVzcGFjZV0pIHx8IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSlcbiAgICA6IHBhdGhbbmFtZXNwYWNlXSAmJiBwYXRoW25hbWVzcGFjZV1bbWV0aG9kXSB8fCBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsInZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignZG9jdW1lbnQnLCAnZG9jdW1lbnRFbGVtZW50Jyk7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgcmV0dXJuICFPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PSAnU3RyaW5nJyA/IHNwbGl0LmNhbGwoaXQsICcnKSA6IE9iamVjdChpdCk7XG59IDogT2JqZWN0O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24udG9TdHJpbmc7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAodHlwZW9mIHN0b3JlLmluc3BlY3RTb3VyY2UgIT0gJ2Z1bmN0aW9uJykge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsInZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBGUkVFWklORyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mcmVlemluZycpO1xuXG52YXIgTUVUQURBVEEgPSB1aWQoJ21ldGEnKTtcbnZhciBpZCA9IDA7XG5cbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgc2V0TWV0YWRhdGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgZGVmaW5lUHJvcGVydHkoaXQsIE1FVEFEQVRBLCB7IHZhbHVlOiB7XG4gICAgb2JqZWN0SUQ6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHdlYWtEYXRhOiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcblxudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gYSBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBREFUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YWRhdGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFEQVRBXS5vYmplY3RJRDtcbn07XG5cbnZhciBnZXRXZWFrRGF0YSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBREFUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YWRhdGEoaXQpO1xuICAvLyByZXR1cm4gdGhlIHN0b3JlIG9mIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFEQVRBXS53ZWFrRGF0YTtcbn07XG5cbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWklORyAmJiBtZXRhLlJFUVVJUkVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQURBVEEpKSBzZXRNZXRhZGF0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJFUVVJUkVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2Vha0RhdGE6IGdldFdlYWtEYXRhLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cbmhpZGRlbktleXNbTUVUQURBVEFdID0gdHJ1ZTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IG5ldyBXZWFrTWFwKCk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvdHlwZVtJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcblxudmFyIFJlc3VsdCA9IGZ1bmN0aW9uIChzdG9wcGVkLCByZXN1bHQpIHtcbiAgdGhpcy5zdG9wcGVkID0gc3RvcHBlZDtcbiAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG59O1xuXG52YXIgaXRlcmF0ZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBmbiwgdGhhdCwgQVNfRU5UUklFUywgSVNfSVRFUkFUT1IpIHtcbiAgdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kKGZuLCB0aGF0LCBBU19FTlRSSUVTID8gMiA6IDEpO1xuICB2YXIgaXRlcmF0b3IsIGl0ZXJGbiwgaW5kZXgsIGxlbmd0aCwgcmVzdWx0LCBuZXh0LCBzdGVwO1xuXG4gIGlmIChJU19JVEVSQVRPUikge1xuICAgIGl0ZXJhdG9yID0gaXRlcmFibGU7XG4gIH0gZWxzZSB7XG4gICAgaXRlckZuID0gZ2V0SXRlcmF0b3JNZXRob2QoaXRlcmFibGUpO1xuICAgIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcignVGFyZ2V0IGlzIG5vdCBpdGVyYWJsZScpO1xuICAgIC8vIG9wdGltaXNhdGlvbiBmb3IgYXJyYXkgaXRlcmF0b3JzXG4gICAgaWYgKGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyRm4pKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgcmVzdWx0ID0gQVNfRU5UUklFU1xuICAgICAgICAgID8gYm91bmRGdW5jdGlvbihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSlcbiAgICAgICAgICA6IGJvdW5kRnVuY3Rpb24oaXRlcmFibGVbaW5kZXhdKTtcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gICAgICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbiAgICB9XG4gICAgaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7XG4gIH1cblxuICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgd2hpbGUgKCEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmUpIHtcbiAgICByZXN1bHQgPSBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBib3VuZEZ1bmN0aW9uLCBzdGVwLnZhbHVlLCBBU19FTlRSSUVTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnb2JqZWN0JyAmJiByZXN1bHQgJiYgcmVzdWx0IGluc3RhbmNlb2YgUmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9IHJldHVybiBuZXcgUmVzdWx0KGZhbHNlKTtcbn07XG5cbml0ZXJhdGUuc3RvcCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgcmV0dXJuIG5ldyBSZXN1bHQodHJ1ZSwgcmVzdWx0KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuaWYgKFtdLmtleXMpIHtcbiAgYXJyYXlJdGVyYXRvciA9IFtdLmtleXMoKTtcbiAgLy8gU2FmYXJpIDggaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gIGlmICghKCduZXh0JyBpbiBhcnJheUl0ZXJhdG9yKSkgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IHRydWU7XG4gIGVsc2Uge1xuICAgIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGdldFByb3RvdHlwZU9mKGFycmF5SXRlcmF0b3IpKTtcbiAgICBpZiAoUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKSBJdGVyYXRvclByb3RvdHlwZSA9IFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxufVxuXG5pZiAoSXRlcmF0b3JQcm90b3R5cGUgPT0gdW5kZWZpbmVkKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuaWYgKCFJU19QVVJFICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEl0ZXJhdG9yUHJvdG90eXBlOiBJdGVyYXRvclByb3RvdHlwZSxcbiAgQlVHR1lfU0FGQVJJX0lURVJBVE9SUzogQlVHR1lfU0FGQVJJX0lURVJBVE9SU1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbnZhciBuYXRpdmVBc3NpZ24gPSBPYmplY3QuYXNzaWduO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9ICFuYXRpdmVBc3NpZ24gfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBzaG91bGQgaGF2ZSBjb3JyZWN0IG9yZGVyIG9mIG9wZXJhdGlvbnMgKEVkZ2UgYnVnKVxuICBpZiAoREVTQ1JJUFRPUlMgJiYgbmF0aXZlQXNzaWduKHsgYjogMSB9LCBuYXRpdmVBc3NpZ24oZGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtzeW1ib2xdID0gNztcbiAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICByZXR1cm4gbmF0aXZlQXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cyhuYXRpdmVBc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xuICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IEluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IG9iamVjdEtleXMoUykuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhTKSkgOiBvYmplY3RLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogbmF0aXZlQXNzaWduO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG5cbnZhciBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG5cbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XSdcbiAgICA/IGdldFdpbmRvd05hbWVzKGl0KVxuICAgIDogbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoaXQpKTtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlcicpO1xuXG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICFuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IHt9LnRvU3RyaW5nIDogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgb3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIG9wdGlvbnMpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0pO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL2NsYXNzb2YtcmF3Jyk7XG52YXIgcmVnZXhwRXhlYyA9IHJlcXVpcmUoJy4vcmVnZXhwLWV4ZWMnKTtcblxuLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUiwgUykge1xuICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHJlc3VsdCA9IGV4ZWMuY2FsbChSLCBTKTtcbiAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAoY2xhc3NvZihSKSAhPT0gJ1JlZ0V4cCcpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCNleGVjIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgcmVjZWl2ZXInKTtcbiAgfVxuXG4gIHJldHVybiByZWdleHBFeGVjLmNhbGwoUiwgUyk7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVnZXhwRmxhZ3MgPSByZXF1aXJlKCcuL3JlZ2V4cC1mbGFncycpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuL3JlZ2V4cC1zdGlja3ktaGVscGVycycpO1xuXG52YXIgbmF0aXZlRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbi8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4vLyB3aGljaCBsb2FkcyB0aGlzIGZpbGUgYmVmb3JlIHBhdGNoaW5nIHRoZSBtZXRob2QuXG52YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxudmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxudmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciByZTEgPSAvYS87XG4gIHZhciByZTIgPSAvYiovZztcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgcmV0dXJuIHJlMS5sYXN0SW5kZXggIT09IDAgfHwgcmUyLmxhc3RJbmRleCAhPT0gMDtcbn0pKCk7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZIHx8IHN0aWNreUhlbHBlcnMuQlJPS0VOX0NBUkVUO1xuXG4vLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG52YXIgTlBDR19JTkNMVURFRCA9IC8oKT8/Ly5leGVjKCcnKVsxXSAhPT0gdW5kZWZpbmVkO1xuXG52YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRCB8fCBVTlNVUFBPUlRFRF9ZO1xuXG5pZiAoUEFUQ0gpIHtcbiAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgIHZhciByZSA9IHRoaXM7XG4gICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcbiAgICB2YXIgc3RpY2t5ID0gVU5TVVBQT1JURURfWSAmJiByZS5zdGlja3k7XG4gICAgdmFyIGZsYWdzID0gcmVnZXhwRmxhZ3MuY2FsbChyZSk7XG4gICAgdmFyIHNvdXJjZSA9IHJlLnNvdXJjZTtcbiAgICB2YXIgY2hhcnNBZGRlZCA9IDA7XG4gICAgdmFyIHN0ckNvcHkgPSBzdHI7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBmbGFncyA9IGZsYWdzLnJlcGxhY2UoJ3knLCAnJyk7XG4gICAgICBpZiAoZmxhZ3MuaW5kZXhPZignZycpID09PSAtMSkge1xuICAgICAgICBmbGFncyArPSAnZyc7XG4gICAgICB9XG5cbiAgICAgIHN0ckNvcHkgPSBTdHJpbmcoc3RyKS5zbGljZShyZS5sYXN0SW5kZXgpO1xuICAgICAgLy8gU3VwcG9ydCBhbmNob3JlZCBzdGlja3kgYmVoYXZpb3IuXG4gICAgICBpZiAocmUubGFzdEluZGV4ID4gMCAmJiAoIXJlLm11bHRpbGluZSB8fCByZS5tdWx0aWxpbmUgJiYgc3RyW3JlLmxhc3RJbmRleCAtIDFdICE9PSAnXFxuJykpIHtcbiAgICAgICAgc291cmNlID0gJyg/OiAnICsgc291cmNlICsgJyknO1xuICAgICAgICBzdHJDb3B5ID0gJyAnICsgc3RyQ29weTtcbiAgICAgICAgY2hhcnNBZGRlZCsrO1xuICAgICAgfVxuICAgICAgLy8gXig/ICsgcnggKyApIGlzIG5lZWRlZCwgaW4gY29tYmluYXRpb24gd2l0aCBzb21lIHN0ciBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXig/OicgKyBzb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICB9XG5cbiAgICBpZiAoTlBDR19JTkNMVURFRCkge1xuICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyBzb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICB9XG4gICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmUubGFzdEluZGV4O1xuXG4gICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwoc3RpY2t5ID8gcmVDb3B5IDogcmUsIHN0ckNvcHkpO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIG1hdGNoLmlucHV0ID0gbWF0Y2guaW5wdXQuc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoY2hhcnNBZGRlZCk7XG4gICAgICAgIG1hdGNoLmluZGV4ID0gcmUubGFzdEluZGV4O1xuICAgICAgICByZS5sYXN0SW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgfSBlbHNlIHJlLmxhc3RJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgIHJlLmxhc3RJbmRleCA9IHJlLmdsb2JhbCA/IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoIDogbGFzdEluZGV4O1xuICAgIH1cbiAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYFxuICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICBuYXRpdmVSZXBsYWNlLmNhbGwobWF0Y2hbMF0sIHJlQ29weSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXRjaGVkRXhlYztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3IsXG4vLyBzbyB3ZSB1c2UgYW4gaW50ZXJtZWRpYXRlIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUkUocywgZikge1xuICByZXR1cm4gUmVnRXhwKHMsIGYpO1xufVxuXG5leHBvcnRzLlVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciByZSA9IFJFKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbmV4cG9ydHMuQlJPS0VOX0NBUkVUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gUkUoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTlNUUlVDVE9SX05BTUUpIHtcbiAgdmFyIENvbnN0cnVjdG9yID0gZ2V0QnVpbHRJbihDT05TVFJVQ1RPUl9OQU1FKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgQ29uc3RydWN0b3IgJiYgIUNvbnN0cnVjdG9yW1NQRUNJRVNdKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFNQRUNJRVMsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICAgIH0pO1xuICB9XG59O1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQykge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KGl0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwidmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNi40JyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDIwIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYFNwZWNpZXNDb25zdHJ1Y3RvcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zcGVjaWVzY29uc3RydWN0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGRlZmF1bHRDb25zdHJ1Y3Rvcikge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBkZWZhdWx0Q29uc3RydWN0b3IgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCIvLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwidmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgVG9JbnRlZ2VyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxuZXhwb3J0cy5mID0gd2VsbEtub3duU3ltYm9sO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhcyhXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICBlbHNlIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxuLy8gYEFycmF5LmlzQXJyYXlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuaXNhcnJheVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGlzQXJyYXk6IGlzQXJyYXlcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcblxudmFyIEFSUkFZX0lURVJBVE9SID0gJ0FycmF5IEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKEFSUkFZX0lURVJBVE9SKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5lbnRyaWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmtleXNcbi8vIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS52YWx1ZXNcbi8vIGBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZWFycmF5aXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lSXRlcmF0b3IoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBBUlJBWV9JVEVSQVRPUixcbiAgICB0YXJnZXQ6IHRvSW5kZXhlZE9iamVjdChpdGVyYXRlZCksIC8vIHRhcmdldFxuICAgIGluZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICAgIGtpbmQ6IGtpbmQgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICB9KTtcbi8vIGAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lYXJyYXlpdGVyYXRvcnByb3RvdHlwZSUubmV4dFxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgdGFyZ2V0ID0gc3RhdGUudGFyZ2V0O1xuICB2YXIga2luZCA9IHN0YXRlLmtpbmQ7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4Kys7XG4gIGlmICghdGFyZ2V0IHx8IGluZGV4ID49IHRhcmdldC5sZW5ndGgpIHtcbiAgICBzdGF0ZS50YXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHsgdmFsdWU6IGluZGV4LCBkb25lOiBmYWxzZSB9O1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHsgdmFsdWU6IHRhcmdldFtpbmRleF0sIGRvbmU6IGZhbHNlIH07XG4gIHJldHVybiB7IHZhbHVlOiBbaW5kZXgsIHRhcmdldFtpbmRleF1dLCBkb25lOiBmYWxzZSB9O1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyVcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVtYXBwZWRhcmd1bWVudHNvYmplY3Rcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUpvaW4gPSBbXS5qb2luO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9IE9iamVjdDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnam9pbicsICcsJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuam9pbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRVMzX1NUUklOR1MgfHwgIVNUUklDVF9NRVRIT0QgfSwge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcikge1xuICAgIHJldHVybiBuYXRpdmVKb2luLmNhbGwodG9JbmRleGVkT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuLy8gRkY0OS0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnc2xpY2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdzbGljZScsIHsgQUNDRVNTT1JTOiB0cnVlLCAwOiAwLCAxOiAyIH0pO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xudmFyIG5hdGl2ZVNsaWNlID0gW10uc2xpY2U7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc2xpY2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnNsaWNlXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBzbGljZTogZnVuY3Rpb24gc2xpY2Uoc3RhcnQsIGVuZCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGsgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbmd0aCk7XG4gICAgdmFyIGZpbiA9IHRvQWJzb2x1dGVJbmRleChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IGVuZCwgbGVuZ3RoKTtcbiAgICAvLyBpbmxpbmUgYEFycmF5U3BlY2llc0NyZWF0ZWAgZm9yIHVzYWdlIG5hdGl2ZSBgQXJyYXkjc2xpY2VgIHdoZXJlIGl0J3MgcG9zc2libGVcbiAgICB2YXIgQ29uc3RydWN0b3IsIHJlc3VsdCwgbjtcbiAgICBpZiAoaXNBcnJheShPKSkge1xuICAgICAgQ29uc3RydWN0b3IgPSBPLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgQ29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IGlzQXJyYXkoQ29uc3RydWN0b3IucHJvdG90eXBlKSkpIHtcbiAgICAgICAgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KENvbnN0cnVjdG9yKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yW1NQRUNJRVNdO1xuICAgICAgICBpZiAoQ29uc3RydWN0b3IgPT09IG51bGwpIENvbnN0cnVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKENvbnN0cnVjdG9yID09PSBBcnJheSB8fCBDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVTbGljZS5jYWxsKE8sIGssIGZpbik7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdCA9IG5ldyAoQ29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQ29uc3RydWN0b3IpKG1heChmaW4gLSBrLCAwKSk7XG4gICAgZm9yIChuID0gMDsgayA8IGZpbjsgaysrLCBuKyspIGlmIChrIGluIE8pIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgbiwgT1trXSk7XG4gICAgcmVzdWx0Lmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxudmFyIERhdGVQcm90b3R5cGUgPSBEYXRlLnByb3RvdHlwZTtcbnZhciBJTlZBTElEX0RBVEUgPSAnSW52YWxpZCBEYXRlJztcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyIG5hdGl2ZURhdGVUb1N0cmluZyA9IERhdGVQcm90b3R5cGVbVE9fU1RSSU5HXTtcbnZhciBnZXRUaW1lID0gRGF0ZVByb3RvdHlwZS5nZXRUaW1lO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZGF0ZS5wcm90b3R5cGUudG9zdHJpbmdcbmlmIChuZXcgRGF0ZShOYU4pICsgJycgIT0gSU5WQUxJRF9EQVRFKSB7XG4gIHJlZGVmaW5lKERhdGVQcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIHZhbHVlID0gZ2V0VGltZS5jYWxsKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gbmF0aXZlRGF0ZVRvU3RyaW5nLmNhbGwodGhpcykgOiBJTlZBTElEX0RBVEU7XG4gIH0pO1xufVxuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjb2xsZWN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvbGxlY3Rpb24nKTtcbnZhciBjb2xsZWN0aW9uU3Ryb25nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIGBNYXBgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1tYXAtb2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2xsZWN0aW9uKCdNYXAnLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gaW5pdCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIGNvbGxlY3Rpb25TdHJvbmcpO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1hc3NpZ24nKTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmFzc2lnbiAhPT0gYXNzaWduIH0sIHtcbiAgYXNzaWduOiBhc3NpZ25cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgY3JlYXRlOiBjcmVhdGVcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydGllczogZGVmaW5lUHJvcGVydGllc1xufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcigxKTsgfSk7XG52YXIgRk9SQ0VEID0gIURFU0NSSVBUT1JTIHx8IEZBSUxTX09OX1BSSU1JVElWRVM7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCwgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JbmRleGVkT2JqZWN0KGl0KSwga2V5KTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlR2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVHZXRQcm90b3R5cGVPZigxKTsgfSk7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTLCBzaGFtOiAhQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSIH0sIHtcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUtleXMoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX1BSSU1JVElWRVMgfSwge1xuICBrZXlzOiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXModG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICBzZXRQcm90b3R5cGVPZjogc2V0UHJvdG90eXBlT2Zcbn0pO1xuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcnKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKCFUT19TVFJJTkdfVEFHX1NVUFBPUlQpIHtcbiAgcmVkZWZpbmUoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbiQoeyBnbG9iYWw6IHRydWUsIGZvcmNlZDogcGFyc2VJbnQgIT0gcGFyc2VJbnRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlSW50OiBwYXJzZUludEltcGxlbWVudGF0aW9uXG59KTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciBpbmhlcml0SWZSZXF1aXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcmVnZXhwJyk7XG52YXIgZ2V0RmxhZ3MgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzJyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpLnNldDtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBNQVRDSCA9IHdlbGxLbm93blN5bWJvbCgnbWF0Y2gnKTtcbnZhciBOYXRpdmVSZWdFeHAgPSBnbG9iYWwuUmVnRXhwO1xudmFyIFJlZ0V4cFByb3RvdHlwZSA9IE5hdGl2ZVJlZ0V4cC5wcm90b3R5cGU7XG52YXIgcmUxID0gL2EvZztcbnZhciByZTIgPSAvYS9nO1xuXG4vLyBcIm5ld1wiIHNob3VsZCBjcmVhdGUgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z1xudmFyIENPUlJFQ1RfTkVXID0gbmV3IE5hdGl2ZVJlZ0V4cChyZTEpICE9PSByZTE7XG5cbnZhciBVTlNVUFBPUlRFRF9ZID0gc3RpY2t5SGVscGVycy5VTlNVUFBPUlRFRF9ZO1xuXG52YXIgRk9SQ0VEID0gREVTQ1JJUFRPUlMgJiYgaXNGb3JjZWQoJ1JlZ0V4cCcsICghQ09SUkVDVF9ORVcgfHwgVU5TVVBQT1JURURfWSB8fCBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJlMltNQVRDSF0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuIE5hdGl2ZVJlZ0V4cChyZTEpICE9IHJlMSB8fCBOYXRpdmVSZWdFeHAocmUyKSA9PSByZTIgfHwgTmF0aXZlUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpO1xuXG4vLyBgUmVnRXhwYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLWNvbnN0cnVjdG9yXG5pZiAoRk9SQ0VEKSB7XG4gIHZhciBSZWdFeHBXcmFwcGVyID0gZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSB7XG4gICAgdmFyIHRoaXNJc1JlZ0V4cCA9IHRoaXMgaW5zdGFuY2VvZiBSZWdFeHBXcmFwcGVyO1xuICAgIHZhciBwYXR0ZXJuSXNSZWdFeHAgPSBpc1JlZ0V4cChwYXR0ZXJuKTtcbiAgICB2YXIgZmxhZ3NBcmVVbmRlZmluZWQgPSBmbGFncyA9PT0gdW5kZWZpbmVkO1xuICAgIHZhciBzdGlja3k7XG5cbiAgICBpZiAoIXRoaXNJc1JlZ0V4cCAmJiBwYXR0ZXJuSXNSZWdFeHAgJiYgcGF0dGVybi5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwV3JhcHBlciAmJiBmbGFnc0FyZVVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHBhdHRlcm47XG4gICAgfVxuXG4gICAgaWYgKENPUlJFQ1RfTkVXKSB7XG4gICAgICBpZiAocGF0dGVybklzUmVnRXhwICYmICFmbGFnc0FyZVVuZGVmaW5lZCkgcGF0dGVybiA9IHBhdHRlcm4uc291cmNlO1xuICAgIH0gZWxzZSBpZiAocGF0dGVybiBpbnN0YW5jZW9mIFJlZ0V4cFdyYXBwZXIpIHtcbiAgICAgIGlmIChmbGFnc0FyZVVuZGVmaW5lZCkgZmxhZ3MgPSBnZXRGbGFncy5jYWxsKHBhdHRlcm4pO1xuICAgICAgcGF0dGVybiA9IHBhdHRlcm4uc291cmNlO1xuICAgIH1cblxuICAgIGlmIChVTlNVUFBPUlRFRF9ZKSB7XG4gICAgICBzdGlja3kgPSAhIWZsYWdzICYmIGZsYWdzLmluZGV4T2YoJ3knKSA+IC0xO1xuICAgICAgaWYgKHN0aWNreSkgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKC95L2csICcnKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gaW5oZXJpdElmUmVxdWlyZWQoXG4gICAgICBDT1JSRUNUX05FVyA/IG5ldyBOYXRpdmVSZWdFeHAocGF0dGVybiwgZmxhZ3MpIDogTmF0aXZlUmVnRXhwKHBhdHRlcm4sIGZsYWdzKSxcbiAgICAgIHRoaXNJc1JlZ0V4cCA/IHRoaXMgOiBSZWdFeHBQcm90b3R5cGUsXG4gICAgICBSZWdFeHBXcmFwcGVyXG4gICAgKTtcblxuICAgIGlmIChVTlNVUFBPUlRFRF9ZICYmIHN0aWNreSkgc2V0SW50ZXJuYWxTdGF0ZShyZXN1bHQsIHsgc3RpY2t5OiBzdGlja3kgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICB2YXIgcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAga2V5IGluIFJlZ0V4cFdyYXBwZXIgfHwgZGVmaW5lUHJvcGVydHkoUmVnRXhwV3JhcHBlciwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE5hdGl2ZVJlZ0V4cFtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAoaXQpIHsgTmF0aXZlUmVnRXhwW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9O1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlUmVnRXhwKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgd2hpbGUgKGtleXMubGVuZ3RoID4gaW5kZXgpIHByb3h5KGtleXNbaW5kZXgrK10pO1xuICBSZWdFeHBQcm90b3R5cGUuY29uc3RydWN0b3IgPSBSZWdFeHBXcmFwcGVyO1xuICBSZWdFeHBXcmFwcGVyLnByb3RvdHlwZSA9IFJlZ0V4cFByb3RvdHlwZTtcbiAgcmVkZWZpbmUoZ2xvYmFsLCAnUmVnRXhwJywgUmVnRXhwV3JhcHBlcik7XG59XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAtQEBzcGVjaWVzXG5zZXRTcGVjaWVzKCdSZWdFeHAnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcblxuJCh7IHRhcmdldDogJ1JlZ0V4cCcsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IC8uLy5leGVjICE9PSBleGVjIH0sIHtcbiAgZXhlYzogZXhlY1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGZsYWdzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1mbGFncycpO1xuXG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBSZWdFeHBQcm90b3R5cGUgPSBSZWdFeHAucHJvdG90eXBlO1xudmFyIG5hdGl2ZVRvU3RyaW5nID0gUmVnRXhwUHJvdG90eXBlW1RPX1NUUklOR107XG5cbnZhciBOT1RfR0VORVJJQyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZVRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbnZhciBJTkNPUlJFQ1RfTkFNRSA9IG5hdGl2ZVRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HO1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoTk9UX0dFTkVSSUMgfHwgSU5DT1JSRUNUX05BTUUpIHtcbiAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBwID0gU3RyaW5nKFIuc291cmNlKTtcbiAgICB2YXIgcmYgPSBSLmZsYWdzO1xuICAgIHZhciBmID0gU3RyaW5nKHJmID09PSB1bmRlZmluZWQgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCAmJiAhKCdmbGFncycgaW4gUmVnRXhwUHJvdG90eXBlKSA/IGZsYWdzLmNhbGwoUikgOiByZik7XG4gICAgcmV0dXJuICcvJyArIHAgKyAnLycgKyBmO1xuICB9LCB7IHVuc2FmZTogdHJ1ZSB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjb2xsZWN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvbGxlY3Rpb24nKTtcbnZhciBjb2xsZWN0aW9uU3Ryb25nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIGBTZXRgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zZXQtb2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2xsZWN0aW9uKCdTZXQnLCBmdW5jdGlvbiAoaW5pdCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gaW5pdCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIGNvbGxlY3Rpb25TdHJvbmcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcblxudmFyIFNUUklOR19JVEVSQVRPUiA9ICdTdHJpbmcgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS1AQGl0ZXJhdG9yXG5kZWZpbmVJdGVyYXRvcihTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogU1RSSU5HX0lURVJBVE9SLFxuICAgIHN0cmluZzogU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICBpbmRleDogMFxuICB9KTtcbi8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJXN0cmluZ2l0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgc3RyaW5nID0gc3RhdGUuc3RyaW5nO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9IGNoYXJBdChzdHJpbmcsIGluZGV4KTtcbiAgc3RhdGUuaW5kZXggKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChNQVRDSCwgbmF0aXZlTWF0Y2gsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLm1hdGNoXG4gICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgbWF0Y2hlciA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgcmV0dXJuIG1hdGNoZXIgIT09IHVuZGVmaW5lZCA/IG1hdGNoZXIuY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJidgXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJidgXXxcXGRcXGQ/KS9nO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoUkVQTEFDRSwgbmF0aXZlUmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlLCByZWFzb24pIHtcbiAgdmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gcmVhc29uLlJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFO1xuICB2YXIgUkVQTEFDRV9LRUVQU18kMCA9IHJlYXNvbi5SRVBMQUNFX0tFRVBTXyQwO1xuICB2YXIgVU5TQUZFX1NVQlNUSVRVVEUgPSBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA/ICckJyA6ICckMCc7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnJlcGxhY2VcbiAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciByZXBsYWNlciA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgICAgcmV0dXJuIHJlcGxhY2VyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyByZXBsYWNlci5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIDogbmF0aXZlUmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgIGZ1bmN0aW9uIChyZWdleHAsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICAoIVJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFICYmIFJFUExBQ0VfS0VFUFNfJDApIHx8XG4gICAgICAgICh0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnc3RyaW5nJyAmJiByZXBsYWNlVmFsdWUuaW5kZXhPZihVTlNBRkVfU1VCU1RJVFVURSkgPT09IC0xKVxuICAgICAgKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlUmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmICghZnVuY3Rpb25hbFJlcGxhY2UpIHJlcGxhY2VWYWx1ZSA9IFN0cmluZyhyZXBsYWNlVmFsdWUpO1xuXG4gICAgICB2YXIgZ2xvYmFsID0gcnguZ2xvYmFsO1xuICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWdFeHBFeGVjKHJ4LCBTKTtcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG5cbiAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgIGlmICghZ2xvYmFsKSBicmVhaztcblxuICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHRvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFjY3VtdWxhdGVkUmVzdWx0ID0gJyc7XG4gICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgICAgIHZhciBtYXRjaGVkID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IG1heChtaW4odG9JbnRlZ2VyKHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgIHZhciBjYXB0dXJlcyA9IFtdO1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgLy8gYnV0IGZvciBzb21lIHJlYXNvbiBgbmF0aXZlU2xpY2UuY2FsbChyZXN1bHQsIDEsIHJlc3VsdC5sZW5ndGgpYCAoY2FsbGVkIGluXG4gICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIGNhcHR1cmVzLnB1c2gobWF5YmVUb1N0cmluZyhyZXN1bHRbal0pKTtcbiAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICB2YXIgcmVwbGFjZXJBcmdzID0gW21hdGNoZWRdLmNvbmNhdChjYXB0dXJlcywgcG9zaXRpb24sIFMpO1xuICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uID49IG5leHRTb3VyY2VQb3NpdGlvbikge1xuICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgfVxuICBdO1xuXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxuICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgIHZhciBtID0gY2FwdHVyZXMubGVuZ3RoO1xuICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZWRDYXB0dXJlcyA9IHRvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICAgIH1cbiAgICByZXR1cm4gbmF0aXZlUmVwbGFjZS5jYWxsKHJlcGxhY2VtZW50LCBzeW1ib2xzLCBmdW5jdGlvbiAobWF0Y2gsIGNoKSB7XG4gICAgICB2YXIgY2FwdHVyZTtcbiAgICAgIHN3aXRjaCAoY2guY2hhckF0KDApKSB7XG4gICAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgIGNhc2UgJ2AnOiByZXR1cm4gc3RyLnNsaWNlKDAsIHBvc2l0aW9uKTtcbiAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0ci5zbGljZSh0YWlsUG9zKTtcbiAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgY2FwdHVyZSA9IG5hbWVkQ2FwdHVyZXNbY2guc2xpY2UoMSwgLTEpXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICAgIHZhciBuID0gK2NoO1xuICAgICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICB2YXIgZiA9IGZsb29yKG4gLyAxMCk7XG4gICAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhcHR1cmUgPT09IHVuZGVmaW5lZCA/ICcnIDogY2FwdHVyZTtcbiAgICB9KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXJlZ2V4cCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjYWxsUmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgYXJyYXlQdXNoID0gW10ucHVzaDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbnZhciBTVVBQT1JUU19ZID0gIWZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuICFSZWdFeHAoTUFYX1VJTlQzMiwgJ3knKTsgfSk7XG5cbi8vIEBAc3BsaXQgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgaWYgKFxuICAgICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT0gNCB8fFxuICAgICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT0gMiB8fFxuICAgICcuJy5zcGxpdCgvKC4/KSguPykvKS5sZW5ndGggIT0gNCB8fFxuICAgICcuJy5zcGxpdCgvKCkoKS8pLmxlbmd0aCA+IDEgfHxcbiAgICAnJy5zcGxpdCgvLj8vKS5sZW5ndGhcbiAgKSB7XG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgICAgdmFyIGxpbSA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQpIHJldHVybiBbc3RyaW5nXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbSk7XG4gICAgICB9XG4gICAgICB2YXIgb3V0cHV0ID0gW107XG4gICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICB2YXIgbWF0Y2gsIGxhc3RJbmRleCwgbGFzdExlbmd0aDtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHJlZ2V4cEV4ZWMuY2FsbChzZXBhcmF0b3JDb3B5LCBzdHJpbmcpKSB7XG4gICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHkubGFzdEluZGV4O1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIGlmIChtYXRjaC5sZW5ndGggPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nLmxlbmd0aCkgYXJyYXlQdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgICAgbGFzdExhc3RJbmRleCA9IGxhc3RJbmRleDtcbiAgICAgICAgICBpZiAob3V0cHV0Lmxlbmd0aCA+PSBsaW0pIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleCA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHkubGFzdEluZGV4Kys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXQubGVuZ3RoID4gbGltID8gb3V0cHV0LnNsaWNlKDAsIGxpbSkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJy5zcGxpdCh1bmRlZmluZWQsIDApLmxlbmd0aCkge1xuICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBuYXRpdmVTcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH0gZWxzZSBpbnRlcm5hbFNwbGl0ID0gbmF0aXZlU3BsaXQ7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zcGxpdGAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBzcGxpdHRlci5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJlZ2V4cCwgdGhpcywgbGltaXQsIGludGVybmFsU3BsaXQgIT09IG5hdGl2ZVNwbGl0KTtcbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QocmVnZXhwKTtcbiAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoU1VQUE9SVFNfWSA/ICd5JyA6ICdnJyk7XG5cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhTVVBQT1JUU19ZID8gcnggOiAnXig/OicgKyByeC5zb3VyY2UgKyAnKScsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBTVVBQT1JUU19ZID8gcSA6IDA7XG4gICAgICAgIHZhciB6ID0gY2FsbFJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSB6Lmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgIHJldHVybiBBO1xuICAgIH1cbiAgXTtcbn0sICFTVVBQT1JUU19ZKTtcbiIsIi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25cbid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xuXG52YXIgTmF0aXZlU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcblxuaWYgKERFU0NSSVBUT1JTICYmIHR5cGVvZiBOYXRpdmVTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAoISgnZGVzY3JpcHRpb24nIGluIE5hdGl2ZVN5bWJvbC5wcm90b3R5cGUpIHx8XG4gIC8vIFNhZmFyaSAxMiBidWdcbiAgTmF0aXZlU3ltYm9sKCkuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZFxuKSkge1xuICB2YXIgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlID0ge307XG4gIC8vIHdyYXAgU3ltYm9sIGNvbnN0cnVjdG9yIGZvciBjb3JyZWN0IHdvcmsgd2l0aCB1bmRlZmluZWQgZGVzY3JpcHRpb25cbiAgdmFyIFN5bWJvbFdyYXBwZXIgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgcmVzdWx0ID0gdGhpcyBpbnN0YW5jZW9mIFN5bWJvbFdyYXBwZXJcbiAgICAgID8gbmV3IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbilcbiAgICAgIC8vIGluIEVkZ2UgMTMsIFN0cmluZyhTeW1ib2wodW5kZWZpbmVkKSkgPT09ICdTeW1ib2wodW5kZWZpbmVkKSdcbiAgICAgIDogZGVzY3JpcHRpb24gPT09IHVuZGVmaW5lZCA/IE5hdGl2ZVN5bWJvbCgpIDogTmF0aXZlU3ltYm9sKGRlc2NyaXB0aW9uKTtcbiAgICBpZiAoZGVzY3JpcHRpb24gPT09ICcnKSBFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmVbcmVzdWx0XSA9IHRydWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhTeW1ib2xXcmFwcGVyLCBOYXRpdmVTeW1ib2wpO1xuICB2YXIgc3ltYm9sUHJvdG90eXBlID0gU3ltYm9sV3JhcHBlci5wcm90b3R5cGUgPSBOYXRpdmVTeW1ib2wucHJvdG90eXBlO1xuICBzeW1ib2xQcm90b3R5cGUuY29uc3RydWN0b3IgPSBTeW1ib2xXcmFwcGVyO1xuXG4gIHZhciBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIG5hdGl2ZSA9IFN0cmluZyhOYXRpdmVTeW1ib2woJ3Rlc3QnKSkgPT0gJ1N5bWJvbCh0ZXN0KSc7XG4gIHZhciByZWdleHAgPSAvXlN5bWJvbFxcKCguKilcXClbXildKyQvO1xuICBkZWZpbmVQcm9wZXJ0eShzeW1ib2xQcm90b3R5cGUsICdkZXNjcmlwdGlvbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHZhciBzeW1ib2wgPSBpc09iamVjdCh0aGlzKSA/IHRoaXMudmFsdWVPZigpIDogdGhpcztcbiAgICAgIHZhciBzdHJpbmcgPSBzeW1ib2xUb1N0cmluZy5jYWxsKHN5bWJvbCk7XG4gICAgICBpZiAoaGFzKEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSwgc3ltYm9sKSkgcmV0dXJuICcnO1xuICAgICAgdmFyIGRlc2MgPSBuYXRpdmUgPyBzdHJpbmcuc2xpY2UoNywgLTEpIDogc3RyaW5nLnJlcGxhY2UocmVnZXhwLCAnJDEnKTtcbiAgICAgIHJldHVybiBkZXNjID09PSAnJyA/IHVuZGVmaW5lZCA6IGRlc2M7XG4gICAgfVxuICB9KTtcblxuICAkKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgIFN5bWJvbDogU3ltYm9sV3JhcHBlclxuICB9KTtcbn1cbiIsInZhciBkZWZpbmVXZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLXdlbGwta25vd24tc3ltYm9sJyk7XG5cbi8vIGBTeW1ib2wuaXRlcmF0b3JgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zeW1ib2wuaXRlcmF0b3JcbmRlZmluZVdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgbmF0aXZlT2JqZWN0Q3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy1leHRlcm5hbCcpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHdyYXBwZWRXZWxsS25vd25TeW1ib2xNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wtd3JhcHBlZCcpO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xuXG52YXIgSElEREVOID0gc2hhcmVkS2V5KCdoaWRkZW4nKTtcbnZhciBTWU1CT0wgPSAnU3ltYm9sJztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTWU1CT0wpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRzdHJpbmdpZnkgPSBnZXRCdWlsdEluKCdKU09OJywgJ3N0cmluZ2lmeScpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmY7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90b3R5cGVTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3RyaW5nLXRvLXN5bWJvbC1yZWdpc3RyeScpO1xudmFyIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC10by1zdHJpbmctcmVnaXN0cnknKTtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIFVTRV9TRVRURVIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0Q3JlYXRlKG5hdGl2ZURlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIHZhciBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgUCk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKSBkZWxldGUgT2JqZWN0UHJvdG90eXBlW1BdO1xuICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgJiYgTyAhPT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlLCBQLCBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKTtcbiAgfVxufSA6IG5hdGl2ZURlZmluZVByb3BlcnR5O1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcsIGRlc2NyaXB0aW9uKSB7XG4gIHZhciBzeW1ib2wgPSBBbGxTeW1ib2xzW3RhZ10gPSBuYXRpdmVPYmplY3RDcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc2V0SW50ZXJuYWxTdGF0ZShzeW1ib2wsIHtcbiAgICB0eXBlOiBTWU1CT0wsXG4gICAgdGFnOiB0YWcsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gIH0pO1xuICBpZiAoIURFU0NSSVBUT1JTKSBzeW1ib2wuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHN5bWJvbDtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoaXQpIGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGlmIChPID09PSBPYmplY3RQcm90b3R5cGUpICRkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQLCBBdHRyaWJ1dGVzKTtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghQXR0cmlidXRlcy5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhPLCBISURERU4pKSBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBISURERU4sIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB7fSkpO1xuICAgICAgT1tISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKE8sIEhJRERFTikgJiYgT1tISURERU5dW2tleV0pIE9bSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBBdHRyaWJ1dGVzID0gbmF0aXZlT2JqZWN0Q3JlYXRlKEF0dHJpYnV0ZXMsIHsgZW51bWVyYWJsZTogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjcmlwdG9yKE8sIGtleSwgQXR0cmlidXRlcyk7XG4gIH0gcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIGtleSwgQXR0cmlidXRlcyk7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMocHJvcGVydGllcykuY29uY2F0KCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcGVydGllcykpO1xuICAkZm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFERVNDUklQVE9SUyB8fCAkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChwcm9wZXJ0aWVzLCBrZXkpKSAkZGVmaW5lUHJvcGVydHkoTywga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIE87XG59O1xuXG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyBuYXRpdmVPYmplY3RDcmVhdGUoTykgOiAkZGVmaW5lUHJvcGVydGllcyhuYXRpdmVPYmplY3RDcmVhdGUoTyksIFByb3BlcnRpZXMpO1xufTtcblxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIFAgPSB0b1ByaW1pdGl2ZShWLCB0cnVlKTtcbiAgdmFyIGVudW1lcmFibGUgPSBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRoaXMsIFApO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBQKSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFApKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbnVtZXJhYmxlIHx8ICFoYXModGhpcywgUCkgfHwgIWhhcyhBbGxTeW1ib2xzLCBQKSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1bUF0gPyBlbnVtZXJhYmxlIDogdHJ1ZTtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgdmFyIGl0ID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgZGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbiAgaWYgKGRlc2NyaXB0b3IgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkge1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKGhpZGRlbktleXMsIGtleSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTykge1xuICB2YXIgSVNfT0JKRUNUX1BST1RPVFlQRSA9IE8gPT09IE9iamVjdFByb3RvdHlwZTtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhJU19PQkpFQ1RfUFJPVE9UWVBFID8gT2JqZWN0UHJvdG90eXBlU3ltYm9scyA6IHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgKCFJU19PQkpFQ1RfUFJPVE9UWVBFIHx8IGhhcyhPYmplY3RQcm90b3R5cGUsIGtleSkpKSB7XG4gICAgICByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBgU3ltYm9sYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLWNvbnN0cnVjdG9yXG5pZiAoIU5BVElWRV9TWU1CT0wpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIWFyZ3VtZW50cy5sZW5ndGggfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlKSBzZXR0ZXIuY2FsbChPYmplY3RQcm90b3R5cGVTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2NyaXB0b3IodGhpcywgdGFnLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBVU0VfU0VUVEVSKSBzZXRTeW1ib2xEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiBzZXR0ZXIgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnLCBkZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS50YWc7XG4gIH0pO1xuXG4gIHJlZGVmaW5lKCRTeW1ib2wsICd3aXRob3V0U2V0dGVyJywgZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHdyYXAodWlkKGRlc2NyaXB0aW9uKSwgZGVzY3JpcHRpb24pO1xuICB9KTtcblxuICBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gJGRlZmluZVByb3BlcnR5O1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdlbGxLbm93blN5bWJvbChuYW1lKSwgbmFtZSk7XG4gIH07XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtU3ltYm9sLWRlc2NyaXB0aW9uXG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIUlTX1BVUkUpIHtcbiAgICAgIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSwgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIU5BVElWRV9TWU1CT0wgfSwge1xuICBTeW1ib2w6ICRTeW1ib2xcbn0pO1xuXG4kZm9yRWFjaChvYmplY3RLZXlzKFdlbGxLbm93blN5bWJvbHNTdG9yZSksIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlZmluZVdlbGxLbm93blN5bWJvbChuYW1lKTtcbn0pO1xuXG4kKHsgdGFyZ2V0OiBTWU1CT0wsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgU3ltYm9sLmZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5mb3JcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGtleSk7XG4gICAgaWYgKGhhcyhTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5LCBzdHJpbmcpKSByZXR1cm4gU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddO1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKHN0cmluZyk7XG4gICAgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddID0gc3ltYm9sO1xuICAgIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltYm9sXSA9IHN0cmluZztcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9LFxuICAvLyBgU3ltYm9sLmtleUZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5rZXlmb3JcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2wnKTtcbiAgICBpZiAoaGFzKFN5bWJvbFRvU3RyaW5nUmVnaXN0cnksIHN5bSkpIHJldHVybiBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bV07XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSBmYWxzZTsgfVxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICAvLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvclxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5c3ltYm9sc1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBmYWlscyhmdW5jdGlvbiAoKSB7IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKDEpOyB9KSB9LCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZCBiZWhhdmlvciB3aXRoIHN5bWJvbHNcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG5pZiAoJHN0cmluZ2lmeSkge1xuICB2YXIgRk9SQ0VEX0pTT05fU1RSSU5HSUZZID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKCk7XG4gICAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT0gJ1tudWxsXSdcbiAgICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgICAgfHwgJHN0cmluZ2lmeSh7IGE6IHN5bWJvbCB9KSAhPSAne30nXG4gICAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgICAgfHwgJHN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT0gJ3t9JztcbiAgfSk7XG5cbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRF9KU09OX1NUUklOR0lGWSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQsIHJlcGxhY2VyLCBzcGFjZSkge1xuICAgICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgICAgdmFyIGluZGV4ID0gMTtcbiAgICAgIHZhciAkcmVwbGFjZXI7XG4gICAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGluZGV4KSBhcmdzLnB1c2goYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcbiAgICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICAgIHJldHVybiAkc3RyaW5naWZ5LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuaWYgKCEkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbn1cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCBTWU1CT0wpO1xuXG5oaWRkZW5LZXlzW0hJRERFTl0gPSB0cnVlO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBBcnJheUl0ZXJhdG9yTWV0aG9kcyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvck1ldGhvZHMudmFsdWVzO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gIT09IEFycmF5VmFsdWVzKSB0cnkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdID0gQXJyYXlWYWx1ZXM7XG4gICAgfVxuICAgIGlmICghQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIENPTExFQ1RJT05fTkFNRSk7XG4gICAgfVxuICAgIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkgZm9yICh2YXIgTUVUSE9EX05BTUUgaW4gQXJyYXlJdGVyYXRvck1ldGhvZHMpIHtcbiAgICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdICE9PSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pIHRyeSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBNRVRIT0RfTkFNRSwgQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdID0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiIsIi8qIVxuICogY3VycmVudEV4ZWN1dGluZ1NjcmlwdFxuICogR2V0IHRoZSBjdXJyZW50bHkgZXhlY3V0aW5nIHNjcmlwdCwgcmVnYXJkbGVzcyBvZiBpdHMgc291cmNlL3RyaWdnZXIvc3luY2hyb25pY2l0eS4gU2ltaWxhciB0byBIVE1MNSdzIGBkb2N1bWVudC5jdXJyZW50U2NyaXB0YCBidXQgYXJndWFibHkgbXVjaCBtb3JlIHVzZWZ1bCFcbiAqIENvcHlyaWdodCAoYykgMjAxNSBKYW1lcyBNLiBHcmVlbmVcbiAqIExpY2Vuc2VkIE1JVFxuICogaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0XG4gKiB2MC4xLjNcbiAqL1xuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcbiAgICAvLyBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgYG1vZHVsZS5leHBvcnRzYCxcbiAgICAvLyBsaWtlIE5vZGUuanMuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMhXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChgcm9vdGAgaXMgYHdpbmRvd2ApXG4gICAgcm9vdC5jdXJyZW50RXhlY3V0aW5nU2NyaXB0ID0gZmFjdG9yeSgpO1xuICB9XG59KFxuICAvLyBDdXJyZW50IGNvbnRleHQvc2NvcGVcbiAgdGhpcyB8fCB3aW5kb3csXG5cbiAgLy8gRmFjdG9yeSBmdW5jdGlvbiB0byByZXR1cm4gdGhlIGV4cG9ydFxuICBmdW5jdGlvbigpIHtcblxudmFyIHNjcmlwdFJlYWR5UmVnZXggPSAvXihpbnRlcmFjdGl2ZXxsb2FkZWR8Y29tcGxldGUpJC87XG5cbi8vIFRoaXMgcGFnZSdzIFVSTCAobWludXMgcXVlcnkgc3RyaW5nIGFuZCBmcmFnbWVudCBpZGVudGlmZXIgaGFzaCwgaWYgYW55KVxudmFyIGZ1bGxQYWdlVXJsID0gISF3aW5kb3cubG9jYXRpb24gPyB3aW5kb3cubG9jYXRpb24uaHJlZiA6IG51bGw7XG52YXIgcGFnZVVybCA9IGZ1bGxQYWdlVXJsID8gZnVsbFBhZ2VVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpIHx8IG51bGwgOiBudWxsO1xuXG4vLyBMaXZlIE5vZGVMaXN0IGNvbGxlY3Rpb25cbnZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cbi8vIENoZWNrIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoZSBgcmVhZHlTdGF0ZWAgcHJvcGVydHkgb24gYHNjcmlwdGAgZWxlbWVudHNcbnZhciBzdXBwb3J0c1NjcmlwdFJlYWR5U3RhdGUgPSBcInJlYWR5U3RhdGVcIiBpbiAoc2NyaXB0c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKTtcblxuLy8gTG91c3kgYnJvd3NlciBkZXRlY3Rpb24gZm9yIFtub3RdIE9wZXJhXG52YXIgaXNOb3RPcGVyYSA9ICF3aW5kb3cub3BlcmEgfHwgd2luZG93Lm9wZXJhLnRvU3RyaW5nKCkgIT09IFwiW29iamVjdCBPcGVyYV1cIjtcblxuLy8gRGV0ZWN0IGlmIGBkb2N1bWVudC5jdXJyZW50U2NyaXB0YCBpcyBzdXBwb3J0ZWRcbnZhciBoYXNOYXRpdmVDdXJyZW50U2NyaXB0QWNjZXNzb3IgPSBcImN1cnJlbnRTY3JpcHRcIiBpbiBkb2N1bWVudDtcblxudmFyIG9yaWdpbmFsU3RhY2tEZXB0aENvbmZpZztcbi8vIERldGVjdCBpZiB0aGUgVjggRXJyb3IgU3RhY2sgVHJhY2UgQVBJIGlzIHN1cHBvcnRlZFxuaWYgKFwic3RhY2tUcmFjZUxpbWl0XCIgaW4gRXJyb3IgJiYgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICE9PSBJbmZpbml0eSkge1xuICBvcmlnaW5hbFN0YWNrRGVwdGhDb25maWcgPSBFcnJvci5zdGFja1RyYWNlTGltaXQ7XG4gIEVycm9yLnN0YWNrVHJhY2VMaW1pdCA9IEluZmluaXR5O1xufVxuXG5cbi8vIEluIHNvbWUgYnJvd3NlcnMgKGUuZy4gQ2hyb21lKSwgeW91IGNhbiBnZXQgdGhlIGN1cnJlbnQgc3RhY2sgZnJvbSBhbiBFcnJvclxuLy8gb2JqZWN0IGluc3RhbmNlIHdpdGhvdXQgbmVlZGluZyB0byB0aHJvdyBpdC4gQXZvaWRpbmcgYW4gdW5uZWNlc3Nhcnlcbi8vIHVzZSBvZiBgdGhyb3dgIHNhdmVzIHRpbWUgYW5kIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N0YWNrQmVmb3JlVGhyb3dpbmcgPSBmYWxzZSxcbiAgICBoYXNTdGFja0FmdGVyVGhyb3dpbmcgPSBmYWxzZTtcbihmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG4gICAgaGFzU3RhY2tCZWZvcmVUaHJvd2luZyA9IHR5cGVvZiBlcnIuc3RhY2sgPT09IFwic3RyaW5nXCIgJiYgISFlcnIuc3RhY2s7XG4gICAgdGhyb3cgZXJyO1xuICB9XG4gIGNhdGNoICh0aHJvd25FcnIpIHtcbiAgICBoYXNTdGFja0FmdGVyVGhyb3dpbmcgPSB0eXBlb2YgdGhyb3duRXJyLnN0YWNrID09PSBcInN0cmluZ1wiICYmICEhdGhyb3duRXJyLnN0YWNrO1xuICB9XG59KSgpO1xuXG5cbi8vIE5vcm1hbGl6ZSB3aGl0ZXNwYWNlIHdpdGhpbiBhIHN0cmluZ1xuZnVuY3Rpb24gbm9ybWFsaXplV2hpdGVzcGFjZShzdHIpIHtcbiAgcmV0dXJuIHN0ciA/IHN0ci5yZXBsYWNlKC9eXFxzKyR8XFxzKyQvZywgXCJcIikucmVwbGFjZSgvXFxzXFxzKy9nLCBcIiBcIikgOiBcIlwiO1xufVxuXG4vLyBHZXQgc2NyaXB0IG9iamVjdCBiYXNlZCBvbiB0aGUgYHNyY2AgVVJMXG5mdW5jdGlvbiBnZXRTY3JpcHRGcm9tVXJsKHVybCwgZWxpZ2libGVTY3JpcHRzKSB7XG4gIHZhciBpLFxuICAgICAgc2NyaXB0ID0gbnVsbDtcblxuICBlbGlnaWJsZVNjcmlwdHMgPSBlbGlnaWJsZVNjcmlwdHMgfHwgc2NyaXB0cztcblxuICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIiAmJiB1cmwpIHtcbiAgICBmb3IgKGkgPSBlbGlnaWJsZVNjcmlwdHMubGVuZ3RoOyBpLS07ICkge1xuICAgICAgaWYgKGVsaWdpYmxlU2NyaXB0c1tpXS5zcmMgPT09IHVybCkge1xuICAgICAgICAvLyBOT1RFOiBDb3VsZCBjaGVjayBpZiB0aGUgc2FtZSBzY3JpcHQgVVJMIGlzIHVzZWQgYnkgbW9yZSB0aGFuIG9uZSBgc2NyaXB0YCBlbGVtZW50XG4gICAgICAgIC8vIGhlcmUuLi4gYnV0IGxldCdzIG5vdC4gVGhhdCB3b3VsZCB5aWVsZCBsZXNzIHVzZWZ1bCByZXN1bHRzIGluIFwibG9vc2VcIiBkZXRlY3Rpb24uIDspXG4gICAgICAgIHNjcmlwdCA9IGVsaWdpYmxlU2NyaXB0c1tpXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBzY3JpcHQ7XG59XG5cbi8vIEdldCBzY3JpcHQgb2JqZWN0IGJhc2VkIG9uIHRoZSBjYWxsZXIgZnVuY3Rpb24ncyBzb3VyY2UgY29kZSBib2R5ICh0ZXh0KVxuZnVuY3Rpb24gZ2V0SW5saW5lU2NyaXB0RnJvbUNhbGxlclNvdXJjZShjYWxsZXJGblNvdXJjZSwgZWxpZ2libGVTY3JpcHRzKSB7XG4gIHZhciBpLCBpbmxpbmVTY3JpcHRUZXh0LFxuICAgICAgc2NyaXB0ID0gbnVsbCxcbiAgICAgIGNhbGxlclNvdXJjZVRleHQgPSBub3JtYWxpemVXaGl0ZXNwYWNlKGNhbGxlckZuU291cmNlKTtcblxuICBlbGlnaWJsZVNjcmlwdHMgPSBlbGlnaWJsZVNjcmlwdHMgfHwgc2NyaXB0cztcblxuICBpZiAoY2FsbGVyRm5Tb3VyY2UgJiYgY2FsbGVyU291cmNlVGV4dCkge1xuICAgIGZvciAoaSA9IGVsaWdpYmxlU2NyaXB0cy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAvLyBPbmx5IGxvb2sgYXQgaW5saW5lIHNjcmlwdHNcbiAgICAgIGlmICghZWxpZ2libGVTY3JpcHRzW2ldLmhhc0F0dHJpYnV0ZShcInNyY1wiKSkge1xuICAgICAgICBpbmxpbmVTY3JpcHRUZXh0ID0gbm9ybWFsaXplV2hpdGVzcGFjZShlbGlnaWJsZVNjcmlwdHNbaV0udGV4dCk7XG4gICAgICAgIGlmIChpbmxpbmVTY3JpcHRUZXh0LmluZGV4T2YoY2FsbGVyU291cmNlVGV4dCkgIT09IC0xKSB7XG4gICAgICAgICAgLy8gSWYgbW9yZSB0aGFuIG9uZSBtYXRjaCBpcyBmb3VuZCwgZG9uJ3QgcmV0dXJuIGFueVxuICAgICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuLy8gSWYgdGhlcmUgaXMgb25seSBhIHNpbmdsZSBpbmxpbmUgc2NyaXB0IG9uIHRoZSBwYWdlLCByZXR1cm4gaXQ7IG90aGVyd2lzZSBgbnVsbGBcbmZ1bmN0aW9uIGdldFNvbGVJbmxpbmVTY3JpcHQoZWxpZ2libGVTY3JpcHRzKSB7XG4gIHZhciBpLCBsZW4sXG4gICAgICBzY3JpcHQgPSBudWxsO1xuICBlbGlnaWJsZVNjcmlwdHMgPSBlbGlnaWJsZVNjcmlwdHMgfHwgc2NyaXB0cztcbiAgZm9yIChpID0gMCwgbGVuID0gZWxpZ2libGVTY3JpcHRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFlbGlnaWJsZVNjcmlwdHNbaV0uaGFzQXR0cmlidXRlKFwic3JjXCIpKSB7XG4gICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc2NyaXB0O1xufVxuXG4vLyBHZXQgdGhlIGN1cnJlbnRseSBleGVjdXRpbmcgc2NyaXB0IFVSTCBmcm9tIGFuIEVycm9yIHN0YWNrIHRyYWNlXG5mdW5jdGlvbiBnZXRTY3JpcHRVcmxGcm9tU3RhY2soc3RhY2ssIHNraXBTdGFja0RlcHRoKSB7XG4gIHZhciBtYXRjaGVzLCByZW1haW5pbmdTdGFjayxcbiAgICAgIHVybCA9IG51bGwsXG4gICAgICBpZ25vcmVNZXNzYWdlID0gdHlwZW9mIHNraXBTdGFja0RlcHRoID09PSBcIm51bWJlclwiO1xuICBza2lwU3RhY2tEZXB0aCA9IGlnbm9yZU1lc3NhZ2UgPyBNYXRoLnJvdW5kKHNraXBTdGFja0RlcHRoKSA6IDA7XG4gIGlmICh0eXBlb2Ygc3RhY2sgPT09IFwic3RyaW5nXCIgJiYgc3RhY2spIHtcbiAgICBpZiAoaWdub3JlTWVzc2FnZSkge1xuICAgICAgbWF0Y2hlcyA9IHN0YWNrLm1hdGNoKC8oZGF0YTp0ZXh0XFwvamF2YXNjcmlwdCg/OjtbXixdKyk/LC4rP3woPzp8YmxvYjopKD86aHR0cFtzXT98ZmlsZSk6XFwvXFwvW1xcL10/Lis/XFwvW146XFwpXSo/KSg/OjpcXGQrKSg/OjpcXGQrKT8vKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBtYXRjaGVzID0gc3RhY2subWF0Y2goL14oPzp8W146QF0qQHwuK1xcKUAoPz1kYXRhOnRleHRcXC9qYXZhc2NyaXB0fGJsb2J8aHR0cFtzXT98ZmlsZSl8Lis/XFxzKyg/OiBhdCB8QCkoPzpbXjpcXChdKyApKltcXChdPykoZGF0YTp0ZXh0XFwvamF2YXNjcmlwdCg/OjtbXixdKyk/LC4rP3woPzp8YmxvYjopKD86aHR0cFtzXT98ZmlsZSk6XFwvXFwvW1xcL10/Lis/XFwvW146XFwpXSo/KSg/OjpcXGQrKSg/OjpcXGQrKT8vKTtcblxuICAgICAgaWYgKCEobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSkge1xuICAgICAgICBtYXRjaGVzID0gc3RhY2subWF0Y2goL1xcKUAoZGF0YTp0ZXh0XFwvamF2YXNjcmlwdCg/OjtbXixdKyk/LC4rP3woPzp8YmxvYjopKD86aHR0cFtzXT98ZmlsZSk6XFwvXFwvW1xcL10/Lis/XFwvW146XFwpXSo/KSg/OjpcXGQrKSg/OjpcXGQrKT8vKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB7XG4gICAgICBpZiAoc2tpcFN0YWNrRGVwdGggPiAwKSB7XG4gICAgICAgIHJlbWFpbmluZ1N0YWNrID0gc3RhY2suc2xpY2Uoc3RhY2suaW5kZXhPZihtYXRjaGVzWzBdKSArIG1hdGNoZXNbMF0ubGVuZ3RoKTtcbiAgICAgICAgdXJsID0gZ2V0U2NyaXB0VXJsRnJvbVN0YWNrKHJlbWFpbmluZ1N0YWNrLCAoc2tpcFN0YWNrRGVwdGggLSAxKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdXJsID0gbWF0Y2hlc1sxXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUT0RPOiBIYW5kbGUgbW9yZSBlZGdlIGNhc2VzIVxuICAgIC8vIEZpeGVzICMxXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvMVxuXG4gICAgLy8gPz8/XG5cbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG5cbi8vIEdldCB0aGUgZmFydGhlc3QgY3VycmVudGx5IGV4ZWN1dGluZyAoaS5lLiB5ZXMsIEVYRUNVVElORykgYHNjcmlwdGAgRE9NXG4vLyBlbGVtZW50IGZvciB0aGUgY2FsbGVyIGZ1bmN0aW9uLCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgaXQgaXMgdGhhdCBgc2NyaXB0YFxuLy8gRE9NIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIGV2YWx1YXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuIFRoZSBmYXJ0aGVzdFxuLy8gY3VycmVudGx5IGV4ZWN1dGluZyBgc2NyaXB0YCBET00gZWxlbWVudCB3b3VsZCB0eXBpY2FsbHkgYmUgY29uc2lkZXJlZCB0aGVcbi8vIG9yaWdpbmF0b3Igb2YgdGhlIGN1cnJlbnQgZXhlY3V0aW9uIHN0YWNrLlxuZnVuY3Rpb24gX2ZhcnRoZXN0RXhlY3V0aW5nU2NyaXB0KCkge1xuICAvKmpzaGludCBub2FyZzpmYWxzZSAqL1xuXG4gIC8vIFRPRE86IEltcGxlbWVudCFcbiAgLy8gRml4ZXMgIzNcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvM1xuICByZXR1cm4gbnVsbDtcblxuLypcbiAgLy8gWWVzLCB0aGlzIElTIHBvc3NpYmxlLCBpLmUuIGlmIGEgc2NyaXB0IHJlbW92ZXMgb3RoZXIgc2NyaXB0cyAob3IgaXRzZWxmKVxuICBpZiAoc2NyaXB0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEd1YXJhbnRlZWQgYWNjdXJhdGUgaW4gSUUgNi0xMC5cbiAgLy8gTm90IGFjY3VyYXRlL3N1cHBvcnRlZCBpbiBhbnkgb3RoZXIgYnJvd3NlcnMuXG4gIGlmIChpc05vdE9wZXJhICYmIHN1cHBvcnRzU2NyaXB0UmVhZHlTdGF0ZSkge1xuICAgIGZvciAodmFyIGkgPSBzY3JpcHRzLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgIGlmIChzY3JpcHRzW2ldLnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIikge1xuICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgc3RhY2ssXG4gICAgICBlID0gbmV3IEVycm9yKCk7XG4gIGlmIChoYXNTdGFja0JlZm9yZVRocm93aW5nKSB7XG4gICAgc3RhY2sgPSBlLnN0YWNrO1xuICB9XG4gIGlmICghc3RhY2sgJiYgaGFzU3RhY2tBZnRlclRocm93aW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIE5PVEU6IENhbm5vdCB1c2UgYGVyci5zb3VyY2VVUkxgIG9yIGBlcnIuZmlsZU5hbWVgIGFzIHRoZXkgd2lsbCBhbHdheXMgYmUgVEhJUyBzY3JpcHRcbiAgICAgIHN0YWNrID0gZXJyLnN0YWNrO1xuICAgIH1cbiAgfVxuICBpZiAoc3RhY2spIHtcbiAgICB2YXIgdXJsID0gZ2V0U2NyaXB0VXJsRnJvbVN0YWNrKHN0YWNrLCBza2lwU3RhY2tEZXB0aCk7XG4gICAgdmFyIHNjcmlwdCA9IGdldFNjcmlwdEZyb21VcmwodXJsLCBzY3JpcHRzICk7XG4gICAgaWYgKCFzY3JpcHQgJiYgcGFnZVVybCAmJiB1cmwgPT09IHBhZ2VVcmwpIHtcbiAgICAgIC8vIFRyeSB0byBmaW5kIHRoZSBjb3JyZWN0IGlubGluZSBzY3JpcHQgYnkgc2VhcmNoaW5nIHRocm91Z2hcbiAgICAgIC8vIGlubGluZSBzY3JpcHRzJyB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBjYWxsZXIgZnVuY3Rpb24ncyBzb3VyY2VcbiAgICAgIC8vIGNvZGUgdG8gYmUgcHJlc2VudC4gSWYgdGhlIGNhbGxlciBmdW5jdGlvbidzIHNvdXJjZSBjb2RlIGlzXG4gICAgICAvLyBub3QgYXZhaWxhYmxlLCBzZWUgaWYgdGhlcmUgaXMgb25seSBvbmUgaW5saW5lIHNjcmlwdCBlbGVtZW50XG4gICAgICAvLyBpbiB0aGUgRE9NIGFuZCByZXR1cm4gdGhhdCAoZXZlbiB0aG91Z2ggaXQgbWF5IGJlIHdyb25nKVxuXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQhXG4gICAgICAvLyBGaXhlcyAjNCBpbiBwYXJ0XG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0phbWVzTUdyZWVuZS9jdXJyZW50RXhlY3V0aW5nU2NyaXB0L2lzc3Vlcy80XG5cbiAgICAgIHZhciBjYWxsZXJGbiA9IF9mYXJ0aGVzdEV4ZWN1dGluZ1NjcmlwdC5jYWxsZXIgfHwgbnVsbCxcbiAgICAgICAgICBjYWxsZXJGblN0YWNrID0gW10sXG4gICAgICAgICAgY2FsbGVyRm5Tb3VyY2UgPSBudWxsO1xuXG4gICAgICB3aGlsZSAoY2FsbGVyRm4pIHtcbiAgICAgICAgY2FsbGVyRm5TdGFjay5wdXNoKGNhbGxlckZuKTtcbiAgICAgICAgY2FsbGVyRm4gPSBjYWxsZXJGbi5jYWxsZXIgfHwgbnVsbDtcbiAgICAgIH1cbiAgICAgIGNhbGxlckZuID0gY2FsbGVyRm5TdGFjay5zbGljZSgtMSlbMF07XG4gICAgICBjYWxsZXJGblNvdXJjZSA9IGNhbGxlckZuID8gKFwiXCIgKyBjYWxsZXJGbikgOiBudWxsO1xuXG5cbiAgICAgIGlmIChjYWxsZXJGblNvdXJjZSkge1xuICAgICAgICBzY3JpcHQgPSBnZXRJbmxpbmVTY3JpcHRGcm9tQ2FsbGVyU291cmNlKGNhbGxlckZuU291cmNlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGEgbG9vc2UgYXNzdW1wdGlvbiB0aGF0IGNvdWxkIGJlIGluYWNjdXJhdGUhXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAgICAgLy8gIC0gSWYgdGhlIGlubGluZSBzY3JpcHQgdGhhdCBpbml0aWF0ZWQgdGhlIGNhbGwgd2FzIGFsc28gcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gICAgICAgIC8vICAtIElmIHRoZSBjYWxsIHdhcyBpbml0aWF0ZWQgYnkgYW4gZWxlbWVudCdzIGlubGluZSBldmVudCBoYW5kbGVyLFxuICAgICAgICAvLyAgICBlLmcuIGA8YSBvbmNsaWNrPVwiKGZ1bmN0aW9uKCkgeyBhbGVydChjdXJyZW50RXhlY3V0aW5nU2NyaXB0KCkpOyB9KClcIj5jbGljazwvYT5gXG4gICAgICAgIHNjcmlwdCA9IGdldFNvbGVJbmxpbmVTY3JpcHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjcmlwdDtcbiAgfVxuXG4gIC8vIE5PVEU6IFRoaXMgaXMgYSBsb29zZSBhc3N1bXB0aW9uIHRoYXQgY291bGQgYmUgaW5hY2N1cmF0ZSFcbiAgLy9cbiAgLy8gSW5hY2N1cmFjaWVzOlxuICAvLyAgLSBJZiBhIHNjcmlwdCBpcyBjcmVhdGVkIGR5bmFtaWNhbGx5IGFuZCBhcHBlbmRlZCB0byBzb21lIHBvc2l0aW9uXG4gIC8vICAgIG90aGVyIHRoYW4gdGhlIHZlcnkgZW5kIG9mIHRoZSBkb2N1bWVudC5cbiAgLy8gIC0gSWYgbXVsdGlwbGUgc2NyaXB0cyBhcmUgY3JlYXRlZCBkeW5hbWljYWxseSBhbmQgYWxsIGFwcGVuZGVkIHRvIHRoZVxuICAvLyAgICBzYW1lIHBvc2l0aW9uIHdpdGhpbiB0aGUgZG9jdW1lbnQgKGFuZCBkbyBub3QgaGF2ZSB0aGVpciBgYXN5bmNgIGF0dHJpYnV0ZXNcbiAgLy8gICAgc2V0IHRvIGBmYWxzZWAsIGF0IGxlYXN0IGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBhc3luYyBzY3JpcHQgZXZhbHVhdGlvbi5cbiAgLy8gICAgb3RoZXIgdGhhbiB0aGUgdmVyeSBlbmQgb2YgdGhlIGRvY3VtZW50LlxuICAvLyAgLSBJZiBhbnkgc2NyaXB0cyBhcmUgYWRkZWQgd2l0aCB0aGUgYGFzeW5jYCBhdHRyaWJ1dGUgc2V0IHRvIGB0cnVlYCBpbiBhIGJyb3dzZXJcbiAgLy8gICAgdGhhdCBzdXBwb3J0cyBpdC5cbiAgLy8gIC0gTWF5IGdldCBjb25mdXNlZCBieSBgc2NyaXB0YCBlbGVtZW50cyB3aXRoaW4gYHN2Z2AgZWxlbWVudHNcbiAgcmV0dXJuIHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXSB8fCBudWxsO1xuKi9cbn1cblxuXG4vLyBHZXQgdGhlIG9yaWdpbmF0aW5nIGN1cnJlbnRseSBleGVjdXRpbmcgKGkuZS4geWVzLCBFWEVDVVRJTkcpIGBzY3JpcHRgIERPTVxuLy8gZWxlbWVudCBvciBhdHRyaWJ1dGUgbm9kZSAoZS5nLiBgb25jbGlja2ApIGZvciB0aGUgY2FsbGVyIGZ1bmN0aW9uLFxuLy8gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGl0IGlzIHRoYXQgYHNjcmlwdGAgRE9NIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nXG4vLyBldmFsdWF0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lLiBUaGUgb3JpZ2luYXRpbmcgY3VycmVudGx5IGV4ZWN1dGluZyBgc2NyaXB0YFxuLy8gRE9NIGVsZW1lbnQgW29yIGF0dHJpYnV0ZSBub2RlXSBpcyB0aGUgb3JpZ2luYXRvciBvZiB0aGUgY3VycmVudCBleGVjdXRpb24gc3RhY2suXG5mdW5jdGlvbiBfb3JpZ2luYXRpbmdFeGVjdXRpbmdTY3JpcHQoKSB7XG4gIC8vIFRPRE86IEltcGxlbWVudCFcbiAgLy8gRml4ZXMgIzJcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvMlxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gR2V0IHRoZSBuZWFyZXN0IGN1cnJlbnRseSBleGVjdXRpbmcgKGkuZS4geWVzLCBFWEVDVVRJTkcpIGBzY3JpcHRgIERPTVxuLy8gZWxlbWVudCBmb3IgdGhlIGNhbGxlciBmdW5jdGlvbiwgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIGl0IGlzIHRoYXQgYHNjcmlwdGBcbi8vIERPTSBlbGVtZW50IGlzIGN1cnJlbnRseSBiZWluZyBldmFsdWF0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuZnVuY3Rpb24gX25lYXJlc3RFeGVjdXRpbmdTY3JpcHQoKSB7XG4gIC8qanNoaW50IG5vYXJnOmZhbHNlICovXG5cbiAgLy8gWWVzLCB0aGlzIElTIHBvc3NpYmxlLCBpLmUuIGlmIGEgc2NyaXB0IHJlbW92ZXMgb3RoZXIgc2NyaXB0cyAob3IgaXRzZWxmKVxuICBpZiAoc2NyaXB0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBpLCBlLCBzdGFjaywgdXJsLCBzY3JpcHQsXG4gICAgICBlbGlnaWJsZVNjcmlwdHMgPSBbXSxcbiAgICAgIHNraXBTdGFja0RlcHRoID0gX25lYXJlc3RFeGVjdXRpbmdTY3JpcHQuc2tpcFN0YWNrRGVwdGggfHwgMSxcblxuICAgICAgLy8gVE9ETzogSW1wbGVtZW50IVxuICAgICAgLy8gRml4ZXMgIzQgaW4gcGFydFxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvY3VycmVudEV4ZWN1dGluZ1NjcmlwdC9pc3N1ZXMvNFxuICAgICAgY2FsbGVyRm5Tb3VyY2UgPSBudWxsOyAgLy8oXCJcIiArIChfbmVhcmVzdEV4ZWN1dGluZ1NjcmlwdC5jYWxsZXIgfHwgXCJcIikpIHx8IG51bGw7XG5cbiAgLy8gVGhpcyBwYXJ0IHdpbGwgb25seSBoZWxwIGluIElFIDYtMTAuXG4gIGZvciAoaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGlzTm90T3BlcmEgJiYgc3VwcG9ydHNTY3JpcHRSZWFkeVN0YXRlKSB7XG4gICAgICBpZiAoc2NyaXB0UmVhZHlSZWdleC50ZXN0KHNjcmlwdHNbaV0ucmVhZHlTdGF0ZSkpIHtcbiAgICAgICAgZWxpZ2libGVTY3JpcHRzLnB1c2goc2NyaXB0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZWxpZ2libGVTY3JpcHRzLnB1c2goc2NyaXB0c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgZSA9IG5ldyBFcnJvcigpO1xuICBpZiAoaGFzU3RhY2tCZWZvcmVUaHJvd2luZykge1xuICAgIHN0YWNrID0gZS5zdGFjaztcbiAgfVxuICBpZiAoIXN0YWNrICYmIGhhc1N0YWNrQWZ0ZXJUaHJvd2luZykge1xuICAgIHRyeSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBOT1RFOiBDYW5ub3QgdXNlIGBlcnIuc291cmNlVVJMYCBvciBgZXJyLmZpbGVOYW1lYCBhcyB0aGV5IHdpbGwgYWx3YXlzIGJlIFRISVMgc2NyaXB0XG4gICAgICBzdGFjayA9IGVyci5zdGFjaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhY2spIHtcbiAgICB1cmwgPSBnZXRTY3JpcHRVcmxGcm9tU3RhY2soc3RhY2ssIHNraXBTdGFja0RlcHRoKTtcbiAgICBzY3JpcHQgPSBnZXRTY3JpcHRGcm9tVXJsKHVybCwgZWxpZ2libGVTY3JpcHRzKTtcblxuICAgIGlmICghc2NyaXB0ICYmIHBhZ2VVcmwgJiYgdXJsID09PSBwYWdlVXJsKSB7XG4gICAgICAvLyBUcnkgdG8gZmluZCB0aGUgY29ycmVjdCBpbmxpbmUgc2NyaXB0IGJ5IHNlYXJjaGluZyB0aHJvdWdoXG4gICAgICAvLyBpbmxpbmUgc2NyaXB0cycgdGV4dCBjb250ZW50IGZvciB0aGUgY2FsbGVyIGZ1bmN0aW9uJ3Mgc291cmNlXG4gICAgICAvLyBjb2RlIHRvIGJlIHByZXNlbnQuXG4gICAgICBpZiAoY2FsbGVyRm5Tb3VyY2UpIHtcbiAgICAgICAgc2NyaXB0ID0gZ2V0SW5saW5lU2NyaXB0RnJvbUNhbGxlclNvdXJjZShjYWxsZXJGblNvdXJjZSwgZWxpZ2libGVTY3JpcHRzKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoZSBjYWxsZXIgZnVuY3Rpb24ncyBzb3VyY2UgY29kZSBpcyBub3QgYXZhaWxhYmxlLCBzZWUgaWZcbiAgICAgIC8vIHRoZXJlIGlzIG9ubHkgb25lIGlubGluZSBzY3JpcHQgZWxlbWVudCBpbiB0aGUgRE9NIGFuZCByZXR1cm5cbiAgICAgIC8vIHRoYXQgKGV2ZW4gdGhvdWdoIGl0IG1heSBiZSB3cm9uZykuLi5cbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGEgbG9vc2UgYXNzdW1wdGlvbiB0aGF0IGNvdWxkIGJlIGluYWNjdXJhdGUhXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAgICAgLy8gIC0gSWYgdGhlIGlubGluZSBzY3JpcHQgdGhhdCBpbml0aWF0ZWQgdGhlIGNhbGwgd2FzIGFsc28gcmVtb3ZlZCBmcm9tIHRoZSBET00uXG4gICAgICAgIC8vICAtIElmIHRoZSBjYWxsIHdhcyBpbml0aWF0ZWQgYnkgYW4gZWxlbWVudCdzIGlubGluZSBldmVudCBoYW5kbGVyLFxuICAgICAgICAvLyAgICBlLmcuIGA8YSBvbmNsaWNrPVwiKGZ1bmN0aW9uKCkgeyBhbGVydChjdXJyZW50RXhlY3V0aW5nU2NyaXB0KCkpOyB9KClcIj5jbGljazwvYT5gXG4gICAgICAgIHNjcmlwdCA9IGdldFNvbGVJbmxpbmVTY3JpcHQoZWxpZ2libGVTY3JpcHRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1xuICAvLyBXZWxjb21lIHRvIHRoZSBJc2xhbmQgb2YgSW5hY2N1cmF0ZSBBc3N1bXB0aW9ucyFcbiAgLy8gTk9URTogQUxMIG9mIHRoZSBmb2xsb3dpbmcgYXJlIGxvb3NlIGFzc3VtcHRpb25zIHRoYXQgY291bGQgYmUgaW5hY2N1cmF0ZSFcbiAgLy9cblxuICBpZiAoIXNjcmlwdCkge1xuICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAvLyAgLSBJZiB0aGUgaW5saW5lIHNjcmlwdCB0aGF0IGluaXRpYXRlZCB0aGUgY2FsbCB3YXMgYWxzbyByZW1vdmVkIGZyb20gdGhlIERPTS5cbiAgICAvLyAgLSBJZiB0aGUgY2FsbCB3YXMgaW5pdGlhdGVkIGJ5IGFuIGVsZW1lbnQncyBpbmxpbmUgZXZlbnQgaGFuZGxlcixcbiAgICAvLyAgICBlLmcuIGA8YSBvbmNsaWNrPVwiKGZ1bmN0aW9uKCkgeyBhbGVydChjdXJyZW50RXhlY3V0aW5nU2NyaXB0KCkpOyB9KClcIj5jbGljazwvYT5gXG4gICAgaWYgKGVsaWdpYmxlU2NyaXB0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHNjcmlwdCA9IGVsaWdpYmxlU2NyaXB0c1swXTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXNjcmlwdCkge1xuICAgIC8vIEluYWNjdXJhY2llczpcbiAgICAvLyAgLSBJZiBzY3JpcHQgY3VycmVudGx5IGJlaW5nIHN5bmNocm9ub3VzbHkgZXZhbHVhdGVkIGJ5IHRoZSBwYXJzZXIgaXMgdGhlXG4gICAgLy8gICAgb3JpZ2luYXRvciBvZiB0aGlzIGNhbGwgc3RhY2sgYnV0IE5PVCB0aGUgc291cmNlIHNjcmlwdCBvZiB0aGUgY2FsbGVyL2ludm9jYXRpb25cbiAgICAvLyAgICBlLmcuXG4gICAgLy8gICAgYGBgaHRtbFxuICAgIC8vICAgIDxzY3JpcHQgaWQ9XCJhXCI+XG4gICAgLy8gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdENhbGxlckZuKCkge1xuICAgIC8vICAgICAgcmV0dXJuIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQubmVhcigpO1xuICAgIC8vICAgIH1cbiAgICAvLyAgICA8L3NjcmlwdD5cbiAgICAvLyAgICA8c2NyaXB0IGlkPVwiYlwiPlxuICAgIC8vICAgIC8vIFNob3VsZCBnZXQgYHNjcmlwdFtpZD1cImFcIl1gIGJ1dCB3aWxsIGdldCBgc2NyaXB0W2lkPVwiYlwiXWAgaW5zdGVhZFxuICAgIC8vICAgIGdldEN1cnJlbnRTY3JpcHRDYWxsZXJGbigpO1xuICAgIC8vICAgIDwvc2NyaXB0PlxuICAgIGlmIChoYXNOYXRpdmVDdXJyZW50U2NyaXB0QWNjZXNzb3IpIHtcbiAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzY3JpcHQpIHtcbiAgICAvLyBJbmFjY3VyYWNpZXM6XG4gICAgLy8gIC0gSWYgc2NyaXB0IGN1cnJlbnRseSBiZWluZyBzeW5jaHJvbm91c2x5IGV2YWx1YXRlZCBieSB0aGUgcGFyc2VyIGlzIHRoZVxuICAgIC8vICAgIG9yaWdpbmF0b3Igb2YgdGhpcyBjYWxsIHN0YWNrIGJ1dCBOT1QgdGhlIHNvdXJjZSBzY3JpcHQgb2YgdGhlIGNhbGxlci9pbnZvY2F0aW9uXG4gICAgLy8gICAgZS5nLlxuICAgIC8vICAgIGBgYGh0bWxcbiAgICAvLyAgICA8c2NyaXB0IGlkPVwiYVwiPlxuICAgIC8vICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRDYWxsZXJGbigpIHtcbiAgICAvLyAgICAgIHJldHVybiBjdXJyZW50RXhlY3V0aW5nU2NyaXB0Lm5lYXIoKTtcbiAgICAvLyAgICB9XG4gICAgLy8gICAgPC9zY3JpcHQ+XG4gICAgLy8gICAgPHNjcmlwdCBpZD1cImJcIj5cbiAgICAvLyAgICAvLyBTaG91bGQgZ2V0IGBzY3JpcHRbaWQ9XCJhXCJdYCBidXQgd2lsbCBnZXQgYHNjcmlwdFtpZD1cImJcIl1gIGluc3RlYWRcbiAgICAvLyAgICBnZXRDdXJyZW50U2NyaXB0Q2FsbGVyRm4oKTtcbiAgICAvLyAgICA8L3NjcmlwdD5cbiAgICBpZiAoaXNOb3RPcGVyYSAmJiBzdXBwb3J0c1NjcmlwdFJlYWR5U3RhdGUpIHtcbiAgICAgIGZvciAoaSA9IGVsaWdpYmxlU2NyaXB0cy5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAgIGlmIChlbGlnaWJsZVNjcmlwdHNbaV0ucmVhZHlTdGF0ZSA9PT0gXCJpbnRlcmFjdGl2ZVwiKSB7XG4gICAgICAgICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzY3JpcHQpIHtcbiAgICAvLyBJbmFjY3VyYWNpZXM6XG4gICAgLy8gIC0gSWYgYSBzY3JpcHQgaXMgY3JlYXRlZCBkeW5hbWljYWxseSBhbmQgYXBwZW5kZWQgdG8gc29tZSBwb3NpdGlvblxuICAgIC8vICAgIG90aGVyIHRoYW4gdGhlIHZlcnkgZW5kIG9mIHRoZSBkb2N1bWVudC5cbiAgICAvLyAgLSBJZiBtdWx0aXBsZSBzY3JpcHRzIGFyZSBjcmVhdGVkIGR5bmFtaWNhbGx5IGFuZCBhbGwgYXBwZW5kZWQgdG8gdGhlXG4gICAgLy8gICAgc2FtZSBwb3NpdGlvbiB3aXRoaW4gdGhlIGRvY3VtZW50IChhbmQgZG8gbm90IGhhdmUgdGhlaXIgYGFzeW5jYCBhdHRyaWJ1dGVzXG4gICAgLy8gICAgc2V0IHRvIGBmYWxzZWAsIGF0IGxlYXN0IGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBhc3luYyBzY3JpcHQgZXZhbHVhdGlvbi5cbiAgICAvLyAgICBvdGhlciB0aGFuIHRoZSB2ZXJ5IGVuZCBvZiB0aGUgZG9jdW1lbnQuXG4gICAgLy8gIC0gSWYgYW55IHNjcmlwdHMgYXJlIGFkZGVkIHdpdGggdGhlIGBhc3luY2AgYXR0cmlidXRlIHNldCB0byBgdHJ1ZWAgaW4gYSBicm93c2VyXG4gICAgLy8gICAgdGhhdCBzdXBwb3J0cyBpdC5cbiAgICAvLyAgLSBNYXkgZ2V0IGNvbmZ1c2VkIGJ5IGBzY3JpcHRgIGVsZW1lbnRzIHdpdGhpbiBgc3ZnYCBlbGVtZW50c1xuICAgIC8vICAtIElmIHNjcmlwdCBjdXJyZW50bHkgYmVpbmcgc3luY2hyb25vdXNseSBldmFsdWF0ZWQgYnkgdGhlIHBhcnNlciBpcyB0aGVcbiAgICAvLyAgICBvcmlnaW5hdG9yIG9mIHRoaXMgY2FsbCBzdGFjayBidXQgTk9UIHRoZSBzb3VyY2Ugc2NyaXB0IG9mIHRoZSBjYWxsZXIvaW52b2NhdGlvblxuICAgIC8vICAgIGUuZy5cbiAgICAvLyAgICBgYGBodG1sXG4gICAgLy8gICAgPHNjcmlwdCBpZD1cImFcIj5cbiAgICAvLyAgICBmdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0Q2FsbGVyRm4oKSB7XG4gICAgLy8gICAgICByZXR1cm4gY3VycmVudEV4ZWN1dGluZ1NjcmlwdC5uZWFyKCk7XG4gICAgLy8gICAgfVxuICAgIC8vICAgIDwvc2NyaXB0PlxuICAgIC8vICAgIDxzY3JpcHQgaWQ9XCJiXCI+XG4gICAgLy8gICAgLy8gU2hvdWxkIGdldCBgc2NyaXB0W2lkPVwiYVwiXWAgYnV0IHdpbGwgZ2V0IGBzY3JpcHRbaWQ9XCJiXCJdYCBpbnN0ZWFkXG4gICAgLy8gICAgZ2V0Q3VycmVudFNjcmlwdENhbGxlckZuKCk7XG4gICAgLy8gICAgPC9zY3JpcHQ+XG4gICAgLy8gICAgYGBgXG4gICAgc2NyaXB0ID0gZWxpZ2libGVTY3JpcHRzW2VsaWdpYmxlU2NyaXB0cy5sZW5ndGggLSAxXSB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHNjcmlwdDtcbn1cblxuLy8gRGVmYXVsdCBzdGFjayBkZXB0aCB0byBza2lwIG92ZXIgd2hlbiBhbmFseXppbmcgY2FsbCBzdGFjayBmcmFtZXNcbl9uZWFyZXN0RXhlY3V0aW5nU2NyaXB0LnNraXBTdGFja0RlcHRoID0gMTtcblxuXG5cbiAgICAvL1xuICAgIC8vIEV4cG9ydCB0aGUgQVBJXG4gICAgLy9cbiAgICB2YXIgY3VycmVudEV4ZWN1dGluZ1NjcmlwdCAgICA9IF9uZWFyZXN0RXhlY3V0aW5nU2NyaXB0OyAgICAgIC8vIGRlZmF1bHRcbiAgICBjdXJyZW50RXhlY3V0aW5nU2NyaXB0Lm5lYXIgICA9IF9uZWFyZXN0RXhlY3V0aW5nU2NyaXB0O1xuICAgIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQuZmFyICAgID0gX2ZhcnRoZXN0RXhlY3V0aW5nU2NyaXB0O1xuICAgIGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQub3JpZ2luID0gX29yaWdpbmF0aW5nRXhlY3V0aW5nU2NyaXB0O1xuXG5cbiAgICAvLyBKdXN0IHJldHVybiBhIHZhbHVlIHRvIGRlZmluZSB0aGUgbW9kdWxlIGV4cG9ydC5cbiAgICAvLyBUaGlzIGV4YW1wbGUgcmV0dXJucyBhbiBvYmplY3QsIGJ1dCB0aGUgbW9kdWxlXG4gICAgLy8gY2FuIHJldHVybiBhIGZ1bmN0aW9uIGFzIHRoZSBleHBvcnRlZCB2YWx1ZS5cbiAgICByZXR1cm4gY3VycmVudEV4ZWN1dGluZ1NjcmlwdDtcbiAgfSlcbik7XG4iLCJpbXBvcnR7dXNlU3RhdGUgYXMgbix1c2VSZWR1Y2VyIGFzIHQsdXNlRWZmZWN0IGFzIGUsdXNlTGF5b3V0RWZmZWN0IGFzIHIsdXNlUmVmIGFzIG8sdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyB1LHVzZU1lbW8gYXMgaSx1c2VDYWxsYmFjayBhcyBmLHVzZUNvbnRleHQgYXMgYyx1c2VEZWJ1Z1ZhbHVlIGFzIGF9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2ltcG9ydHtDb21wb25lbnQgYXMgbCxjcmVhdGVFbGVtZW50IGFzIHMsb3B0aW9ucyBhcyBoLHRvQ2hpbGRBcnJheSBhcyB2LGh5ZHJhdGUgYXMgcCxyZW5kZXIgYXMgZCxfdW5tb3VudCBhcyBtLGNsb25lRWxlbWVudCBhcyB5LGNyZWF0ZVJlZiBhcyBiLGNyZWF0ZUNvbnRleHQgYXMgZyxGcmFnbWVudCBhcyB4fWZyb21cInByZWFjdFwiO2V4cG9ydHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlUmVmLEZyYWdtZW50LENvbXBvbmVudH1mcm9tXCJwcmVhY3RcIjtmdW5jdGlvbiBFKG4sdCl7Zm9yKHZhciBlIGluIHQpbltlXT10W2VdO3JldHVybiBufWZ1bmN0aW9uIHcobix0KXtmb3IodmFyIGUgaW4gbilpZihcIl9fc291cmNlXCIhPT1lJiYhKGUgaW4gdCkpcmV0dXJuITA7Zm9yKHZhciByIGluIHQpaWYoXCJfX3NvdXJjZVwiIT09ciYmbltyXSE9PXRbcl0pcmV0dXJuITA7cmV0dXJuITF9dmFyIEM9ZnVuY3Rpb24obil7dmFyIHQsZTtmdW5jdGlvbiByKHQpe3ZhciBlO3JldHVybihlPW4uY2FsbCh0aGlzLHQpfHx0aGlzKS5pc1B1cmVSZWFjdENvbXBvbmVudD0hMCxlfXJldHVybiBlPW4sKHQ9cikucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsdC5fX3Byb3RvX189ZSxyLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obix0KXtyZXR1cm4gdyh0aGlzLnByb3BzLG4pfHx3KHRoaXMuc3RhdGUsdCl9LHJ9KGwpO2Z1bmN0aW9uIF8obix0KXtmdW5jdGlvbiBlKG4pe3ZhciBlPXRoaXMucHJvcHMucmVmLHI9ZT09bi5yZWY7cmV0dXJuIXImJmUmJihlLmNhbGw/ZShudWxsKTplLmN1cnJlbnQ9bnVsbCksdD8hdCh0aGlzLnByb3BzLG4pfHwhcjp3KHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gcih0KXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZSxzKG4sRSh7fSx0KSl9cmV0dXJuIHIucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsci5kaXNwbGF5TmFtZT1cIk1lbW8oXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsci50PSEwLHJ9dmFyIEE9aC52bm9kZTtmdW5jdGlvbiBTKG4pe2Z1bmN0aW9uIHQodCl7dmFyIGU9RSh7fSx0KTtyZXR1cm4gZGVsZXRlIGUucmVmLG4oZSx0LnJlZil9cmV0dXJuIHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdC50PSEwLHQuZGlzcGxheU5hbWU9XCJGb3J3YXJkUmVmKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHR9aC52bm9kZT1mdW5jdGlvbihuKXtuLnR5cGUmJm4udHlwZS50JiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLEEmJkEobil9O3ZhciBrPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4/dihuKS5tYXAodCk6bnVsbH0sRj17bWFwOmssZm9yRWFjaDprLGNvdW50OmZ1bmN0aW9uKG4pe3JldHVybiBuP3YobikubGVuZ3RoOjB9LG9ubHk6ZnVuY3Rpb24obil7aWYoMSE9PShuPXYobikpLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJDaGlsZHJlbi5vbmx5KCkgZXhwZWN0cyBvbmx5IG9uZSBjaGlsZC5cIik7cmV0dXJuIG5bMF19LHRvQXJyYXk6dn0sTj1oLl9fZTtmdW5jdGlvbiBSKG4pe3JldHVybiBuJiYoKG49RSh7fSxuKSkuX19jPW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChSKSksbn1mdW5jdGlvbiBNKG4pe3RoaXMuX191PTAsdGhpcy5fX2I9bnVsbH1mdW5jdGlvbiBVKG4pe3ZhciB0PW4uX18uX19jO3JldHVybiB0JiZ0Lm8mJnQubyhuKX1mdW5jdGlvbiBPKG4pe3ZhciB0LGUscjtmdW5jdGlvbiBvKG8pe2lmKHR8fCh0PW4oKSkudGhlbihmdW5jdGlvbihuKXtlPW4uZGVmYXVsdHx8bn0sZnVuY3Rpb24obil7cj1ufSkscil0aHJvdyByO2lmKCFlKXRocm93IHQ7cmV0dXJuIHMoZSxvKX1yZXR1cm4gby5kaXNwbGF5TmFtZT1cIkxhenlcIixvLnQ9ITAsb31mdW5jdGlvbiBqKCl7dGhpcy51PW51bGwsdGhpcy5pPW51bGx9aC5fX2U9ZnVuY3Rpb24obix0LGUpe2lmKG4udGhlbilmb3IodmFyIHIsbz10O289by5fXzspaWYoKHI9by5fX2MpJiZyLmwpcmV0dXJuIHIubChuLHQuX19jKTtOKG4sdCxlKX0sKE0ucHJvdG90eXBlPW5ldyBsKS5sPWZ1bmN0aW9uKG4sdCl7dmFyIGU9dGhpcyxyPVUoZS5fX3YpLG89ITEsdT1mdW5jdGlvbigpe298fChvPSEwLHI/cihpKTppKCkpfTt0Ll9fYz10LmNvbXBvbmVudFdpbGxVbm1vdW50LHQuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1KCksdC5fX2MmJnQuX19jKCl9O3ZhciBpPWZ1bmN0aW9uKCl7LS1lLl9fdXx8KGUuX192Ll9fa1swXT1lLnN0YXRlLm8sZS5zZXRTdGF0ZSh7bzplLl9fYj1udWxsfSkpfTtlLl9fdSsrfHxlLnNldFN0YXRlKHtvOmUuX19iPWUuX192Ll9fa1swXX0pLG4udGhlbih1LHUpfSxNLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obix0KXtyZXR1cm4gdGhpcy5fX2ImJih0aGlzLl9fdi5fX2tbMF09Uih0aGlzLl9fYiksdGhpcy5fX2I9bnVsbCksW3MobCxudWxsLHQubz9udWxsOm4uY2hpbGRyZW4pLHQubyYmbi5mYWxsYmFja119O3ZhciB6PWZ1bmN0aW9uKG4sdCxlKXtpZigrK2VbMV09PT1lWzBdJiZuLmkuZGVsZXRlKHQpLG4ucHJvcHMucmV2ZWFsT3JkZXImJihcInRcIiE9PW4ucHJvcHMucmV2ZWFsT3JkZXJbMF18fCFuLmkuc2l6ZSkpZm9yKGU9bi51O2U7KXtmb3IoO2UubGVuZ3RoPjM7KWUucG9wKCkoKTtpZihlWzFdPGVbMF0pYnJlYWs7bi51PWU9ZVsyXX19OyhqLnByb3RvdHlwZT1uZXcgbCkubz1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9VSh0Ll9fdikscj10LmkuZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24obyl7dmFyIHU9ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2gobykseih0LG4scikpOm8oKX07ZT9lKHUpOnUoKX19LGoucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLnU9bnVsbCx0aGlzLmk9bmV3IE1hcDt2YXIgdD12KG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5pLnNldCh0W2VdLHRoaXMudT1bMSwwLHRoaXMudV0pO3JldHVybiBuLmNoaWxkcmVufSxqLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9ai5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO24uaS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7eihuLGUsdCl9KX07dmFyIEw9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKCl7fXZhciB0PW4ucHJvdG90eXBlO3JldHVybiB0LmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnByb3BzLmNvbnRleHR9LHQucmVuZGVyPWZ1bmN0aW9uKG4pe3JldHVybiBuLmNoaWxkcmVufSxufSgpO2Z1bmN0aW9uIFAobil7dmFyIHQ9dGhpcyxlPW4uY29udGFpbmVyLHI9cyhMLHtjb250ZXh0OnQuY29udGV4dH0sbi52bm9kZSk7cmV0dXJuIHQucyYmdC5zIT09ZSYmKHQuaC5wYXJlbnROb2RlJiZ0LnMucmVtb3ZlQ2hpbGQodC5oKSxtKHQudiksdC5wPSExKSxuLnZub2RlP3QucD8oZS5fX2s9dC5fX2ssZChyLGUpLHQuX19rPWUuX19rKToodC5oPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpLHAoXCJcIixlKSxlLmFwcGVuZENoaWxkKHQuaCksdC5wPSEwLHQucz1lLGQocixlLHQuaCksdC5fX2s9dGhpcy5oLl9fayk6dC5wJiYodC5oLnBhcmVudE5vZGUmJnQucy5yZW1vdmVDaGlsZCh0LmgpLG0odC52KSksdC52PXIsdC5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3QuaC5wYXJlbnROb2RlJiZ0LnMucmVtb3ZlQ2hpbGQodC5oKSxtKHQudil9LG51bGx9ZnVuY3Rpb24gVyhuLHQpe3JldHVybiBzKFAse3Zub2RlOm4sY29udGFpbmVyOnR9KX12YXIgRD0vXig/OmFjY2VudHxhbGlnbm1lbnR8YXJhYmljfGJhc2VsaW5lfGNhcHxjbGlwfGNvbG9yfGZpbGx8Zmxvb2R8Zm9udHxnbHlwaHxob3JpenxtYXJrZXJ8b3ZlcmxpbmV8cGFpbnR8c3RvcHxzdHJpa2V0aHJvdWdofHN0cm9rZXx0ZXh0fHVuZGVybGluZXx1bmljb2RlfHVuaXRzfHZ8dmVjdG9yfHZlcnR8d29yZHx3cml0aW5nfHgpW0EtWl0vO2wucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307dmFyIFQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzO2Z1bmN0aW9uIFYobix0LGUpe2lmKG51bGw9PXQuX19rKWZvcig7dC5maXJzdENoaWxkOyl0LnJlbW92ZUNoaWxkKHQuZmlyc3RDaGlsZCk7cmV0dXJuIFoobix0LGUpfWZ1bmN0aW9uIFoobix0LGUpe3JldHVybiBkKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH12YXIgSD1oLmV2ZW50O2Z1bmN0aW9uIEkobix0KXtuW1wiVU5TQUZFX1wiK3RdJiYhblt0XSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sdCx7Y29uZmlndXJhYmxlOiExLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzW1wiVU5TQUZFX1wiK3RdfSxzZXQ6ZnVuY3Rpb24obil7dGhpc1tcIlVOU0FGRV9cIit0XT1ufX0pfWguZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIEgmJihuPUgobikpLG4ucGVyc2lzdD1mdW5jdGlvbigpe30sbi5uYXRpdmVFdmVudD1ufTt2YXIgJD17Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0scT1oLnZub2RlO2gudm5vZGU9ZnVuY3Rpb24obil7bi4kJHR5cGVvZj1UO3ZhciB0PW4udHlwZSxlPW4ucHJvcHM7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl7dmFyIHIsbyx1O2Zvcih1IGluIGUuZGVmYXVsdFZhbHVlJiYoZS52YWx1ZXx8MD09PWUudmFsdWV8fChlLnZhbHVlPWUuZGVmYXVsdFZhbHVlKSxkZWxldGUgZS5kZWZhdWx0VmFsdWUpLEFycmF5LmlzQXJyYXkoZS52YWx1ZSkmJmUubXVsdGlwbGUmJlwic2VsZWN0XCI9PT10JiYodihlLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pey0xIT1lLnZhbHVlLmluZGV4T2Yobi5wcm9wcy52YWx1ZSkmJihuLnByb3BzLnNlbGVjdGVkPSEwKX0pLGRlbGV0ZSBlLnZhbHVlKSxlKWlmKHI9RC50ZXN0KHUpKWJyZWFrO2lmKHIpZm9yKHUgaW4gbz1uLnByb3BzPXt9LGUpb1tELnRlc3QodSk/dS5yZXBsYWNlKC8oW0EtWjAtOV0pLyxcIi0kMVwiKS50b0xvd2VyQ2FzZSgpOnVdPWVbdV19KGUuY2xhc3N8fGUuY2xhc3NOYW1lKSYmKCQuZW51bWVyYWJsZT1cImNsYXNzTmFtZVwiaW4gZSxlLmNsYXNzTmFtZSYmKGUuY2xhc3M9ZS5jbGFzc05hbWUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiY2xhc3NOYW1lXCIsJCkpLGZ1bmN0aW9uKHQpe3ZhciBlPW4udHlwZSxyPW4ucHJvcHM7aWYociYmXCJzdHJpbmdcIj09dHlwZW9mIGUpe3ZhciBvPXt9O2Zvcih2YXIgdSBpbiByKS9eb24oQW5pfFRyYXxUb3UpLy50ZXN0KHUpJiYoclt1LnRvTG93ZXJDYXNlKCldPXJbdV0sZGVsZXRlIHJbdV0pLG9bdS50b0xvd2VyQ2FzZSgpXT11O2lmKG8ub25kb3VibGVjbGljayYmKHIub25kYmxjbGljaz1yW28ub25kb3VibGVjbGlja10sZGVsZXRlIHJbby5vbmRvdWJsZWNsaWNrXSksby5vbmJlZm9yZWlucHV0JiYoci5vbmJlZm9yZWlucHV0PXJbby5vbmJlZm9yZWlucHV0XSxkZWxldGUgcltvLm9uYmVmb3JlaW5wdXRdKSxvLm9uY2hhbmdlJiYoXCJ0ZXh0YXJlYVwiPT09ZXx8XCJpbnB1dFwiPT09ZS50b0xvd2VyQ2FzZSgpJiYhL15maWx8Y2hlfHJhL2kudGVzdChyLnR5cGUpKSl7dmFyIGk9by5vbmlucHV0fHxcIm9uaW5wdXRcIjtyW2ldfHwocltpXT1yW28ub25jaGFuZ2VdLGRlbGV0ZSByW28ub25jaGFuZ2VdKX19fSgpLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJiF0Lm0mJnQucHJvdG90eXBlJiYoSSh0LnByb3RvdHlwZSxcImNvbXBvbmVudFdpbGxNb3VudFwiKSxJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiKSxJKHQucHJvdG90eXBlLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiKSx0Lm09ITApLHEmJnEobil9O3ZhciBCPVwiMTYuOC4wXCI7ZnVuY3Rpb24gRyhuKXtyZXR1cm4gcy5iaW5kKG51bGwsbil9ZnVuY3Rpb24gSihuKXtyZXR1cm4hIW4mJm4uJCR0eXBlb2Y9PT1UfWZ1bmN0aW9uIEsobil7cmV0dXJuIEoobik/eS5hcHBseShudWxsLGFyZ3VtZW50cyk6bn1mdW5jdGlvbiBRKG4pe3JldHVybiEhbi5fX2smJihkKG51bGwsbiksITApfWZ1bmN0aW9uIFgobil7cmV0dXJuIG4mJihuLmJhc2V8fDE9PT1uLm5vZGVUeXBlJiZuKXx8bnVsbH12YXIgWT1mdW5jdGlvbihuLHQpe3JldHVybiBuKHQpfTtleHBvcnQgZGVmYXVsdHt1c2VTdGF0ZTpuLHVzZVJlZHVjZXI6dCx1c2VFZmZlY3Q6ZSx1c2VMYXlvdXRFZmZlY3Q6cix1c2VSZWY6byx1c2VJbXBlcmF0aXZlSGFuZGxlOnUsdXNlTWVtbzppLHVzZUNhbGxiYWNrOmYsdXNlQ29udGV4dDpjLHVzZURlYnVnVmFsdWU6YSx2ZXJzaW9uOlwiMTYuOC4wXCIsQ2hpbGRyZW46RixyZW5kZXI6VixoeWRyYXRlOlYsdW5tb3VudENvbXBvbmVudEF0Tm9kZTpRLGNyZWF0ZVBvcnRhbDpXLGNyZWF0ZUVsZW1lbnQ6cyxjcmVhdGVDb250ZXh0OmcsY3JlYXRlRmFjdG9yeTpHLGNsb25lRWxlbWVudDpLLGNyZWF0ZVJlZjpiLEZyYWdtZW50OngsaXNWYWxpZEVsZW1lbnQ6SixmaW5kRE9NTm9kZTpYLENvbXBvbmVudDpsLFB1cmVDb21wb25lbnQ6QyxtZW1vOl8sZm9yd2FyZFJlZjpTLHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOlksU3VzcGVuc2U6TSxTdXNwZW5zZUxpc3Q6aixsYXp5Ok99O2V4cG9ydHtCIGFzIHZlcnNpb24sRiBhcyBDaGlsZHJlbixWIGFzIHJlbmRlcixaIGFzIGh5ZHJhdGUsUSBhcyB1bm1vdW50Q29tcG9uZW50QXROb2RlLFcgYXMgY3JlYXRlUG9ydGFsLEcgYXMgY3JlYXRlRmFjdG9yeSxLIGFzIGNsb25lRWxlbWVudCxKIGFzIGlzVmFsaWRFbGVtZW50LFggYXMgZmluZERPTU5vZGUsQyBhcyBQdXJlQ29tcG9uZW50LF8gYXMgbWVtbyxTIGFzIGZvcndhcmRSZWYsWSBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyxNIGFzIFN1c3BlbnNlLGogYXMgU3VzcGVuc2VMaXN0LE8gYXMgbGF6eX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwidmFyIG4sbCx1LHQsaSxvLHIsZj17fSxlPVtdLGM9L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmQvaTtmdW5jdGlvbiBzKG4sbCl7Zm9yKHZhciB1IGluIGwpblt1XT1sW3VdO3JldHVybiBufWZ1bmN0aW9uIGEobil7dmFyIGw9bi5wYXJlbnROb2RlO2wmJmwucmVtb3ZlQ2hpbGQobil9ZnVuY3Rpb24gaChuLGwsdSl7dmFyIHQsaT1hcmd1bWVudHMsbz17fTtmb3IodCBpbiBsKVwia2V5XCIhPT10JiZcInJlZlwiIT09dCYmKG9bdF09bFt0XSk7aWYoYXJndW1lbnRzLmxlbmd0aD4zKWZvcih1PVt1XSx0PTM7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl1LnB1c2goaVt0XSk7aWYobnVsbCE9dSYmKG8uY2hpbGRyZW49dSksXCJmdW5jdGlvblwiPT10eXBlb2YgbiYmbnVsbCE9bi5kZWZhdWx0UHJvcHMpZm9yKHQgaW4gbi5kZWZhdWx0UHJvcHMpdm9pZCAwPT09b1t0XSYmKG9bdF09bi5kZWZhdWx0UHJvcHNbdF0pO3JldHVybiB2KG4sbyxsJiZsLmtleSxsJiZsLnJlZil9ZnVuY3Rpb24gdihsLHUsdCxpKXt2YXIgbz17dHlwZTpsLHByb3BzOnUsa2V5OnQscmVmOmksX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6bnVsbCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDB9O3JldHVybiBuLnZub2RlJiZuLnZub2RlKG8pLG99ZnVuY3Rpb24gcCgpe3JldHVybnt9fWZ1bmN0aW9uIHkobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gZChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBtKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9tKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP20obik6bnVsbH1mdW5jdGlvbiB3KG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gdyhuKX19ZnVuY3Rpb24gZyhsKXsoIWwuX19kJiYobC5fX2Q9ITApJiYxPT09dS5wdXNoKGwpfHxpIT09bi5kZWJvdW5jZVJlbmRlcmluZykmJigoaT1uLmRlYm91bmNlUmVuZGVyaW5nKXx8dCkoayl9ZnVuY3Rpb24gaygpe3ZhciBuLGwsdCxpLG8scixmO2Zvcih1LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbC5fX3YuX19iLW4uX192Ll9fYn0pO249dS5wb3AoKTspbi5fX2QmJih0PXZvaWQgMCxpPXZvaWQgMCxyPShvPShsPW4pLl9fdikuX19lLChmPWwuX19QKSYmKHQ9W10saT1UKGYsbyxzKHt9LG8pLGwuX19uLHZvaWQgMCE9PWYub3duZXJTVkdFbGVtZW50LG51bGwsdCxudWxsPT1yP20obyk6ciksJCh0LG8pLGkhPXImJncobykpKX1mdW5jdGlvbiBfKG4sbCx1LHQsaSxvLHIsYyxzKXt2YXIgaCx2LHAseSxkLHcsZyxrPXUmJnUuX19rfHxlLF89ay5sZW5ndGg7aWYoYz09ZiYmKGM9bnVsbCE9bz9vWzBdOl8/bSh1LDApOm51bGwpLGg9MCxsLl9faz1iKGwuX19rLGZ1bmN0aW9uKHUpe2lmKG51bGwhPXUpe2lmKHUuX189bCx1Ll9fYj1sLl9fYisxLG51bGw9PT0ocD1rW2hdKXx8cCYmdS5rZXk9PXAua2V5JiZ1LnR5cGU9PT1wLnR5cGUpa1toXT12b2lkIDA7ZWxzZSBmb3Iodj0wO3Y8Xzt2Kyspe2lmKChwPWtbdl0pJiZ1LmtleT09cC5rZXkmJnUudHlwZT09PXAudHlwZSl7a1t2XT12b2lkIDA7YnJlYWt9cD1udWxsfWlmKHk9VChuLHUscD1wfHxmLHQsaSxvLHIsYyxzKSwodj11LnJlZikmJnAucmVmIT12JiYoZ3x8KGc9W10pLHAucmVmJiZnLnB1c2gocC5yZWYsbnVsbCx1KSxnLnB1c2godix1Ll9fY3x8eSx1KSksbnVsbCE9eSl7aWYobnVsbD09dyYmKHc9eSksbnVsbCE9dS5fX2QpeT11Ll9fZCx1Ll9fZD1udWxsO2Vsc2UgaWYobz09cHx8eSE9Y3x8bnVsbD09eS5wYXJlbnROb2RlKXtuOmlmKG51bGw9PWN8fGMucGFyZW50Tm9kZSE9PW4pbi5hcHBlbmRDaGlsZCh5KTtlbHNle2ZvcihkPWMsdj0wOyhkPWQubmV4dFNpYmxpbmcpJiZ2PF87dis9MilpZihkPT15KWJyZWFrIG47bi5pbnNlcnRCZWZvcmUoeSxjKX1cIm9wdGlvblwiPT1sLnR5cGUmJihuLnZhbHVlPVwiXCIpfWM9eS5uZXh0U2libGluZyxcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLnR5cGUmJihsLl9fZD15KX19cmV0dXJuIGgrKyx1fSksbC5fX2U9dyxudWxsIT1vJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsLnR5cGUpZm9yKGg9by5sZW5ndGg7aC0tOyludWxsIT1vW2hdJiZhKG9baF0pO2ZvcihoPV87aC0tOyludWxsIT1rW2hdJiZBKGtbaF0sa1toXSk7aWYoZylmb3IoaD0wO2g8Zy5sZW5ndGg7aCsrKXooZ1toXSxnWysraF0sZ1srK2hdKX1mdW5jdGlvbiBiKG4sbCx1KXtpZihudWxsPT11JiYodT1bXSksbnVsbD09bnx8XCJib29sZWFuXCI9PXR5cGVvZiBuKWwmJnUucHVzaChsKG51bGwpKTtlbHNlIGlmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0KyspYihuW3RdLGwsdSk7ZWxzZSB1LnB1c2gobD9sKFwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj92KG51bGwsbixudWxsLG51bGwpOm51bGwhPW4uX19lfHxudWxsIT1uLl9fYz92KG4udHlwZSxuLnByb3BzLG4ua2V5LG51bGwpOm4pOm4pO3JldHVybiB1fWZ1bmN0aW9uIHgobixsLHUsdCxpKXt2YXIgbztmb3IobyBpbiB1KW8gaW4gbHx8UChuLG8sbnVsbCx1W29dLHQpO2ZvcihvIGluIGwpaSYmXCJmdW5jdGlvblwiIT10eXBlb2YgbFtvXXx8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8UChuLG8sbFtvXSx1W29dLHQpfWZ1bmN0aW9uIEMobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1cIm51bWJlclwiPT10eXBlb2YgdSYmITE9PT1jLnRlc3QobCk/dStcInB4XCI6bnVsbD09dT9cIlwiOnV9ZnVuY3Rpb24gUChuLGwsdSx0LGkpe3ZhciBvLHIsZixlLGM7aWYoaT9cImNsYXNzTmFtZVwiPT09bCYmKGw9XCJjbGFzc1wiKTpcImNsYXNzXCI9PT1sJiYobD1cImNsYXNzTmFtZVwiKSxcImtleVwiPT09bHx8XCJjaGlsZHJlblwiPT09bCk7ZWxzZSBpZihcInN0eWxlXCI9PT1sKWlmKG89bi5zdHlsZSxcInN0cmluZ1wiPT10eXBlb2YgdSlvLmNzc1RleHQ9dTtlbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0JiYoby5jc3NUZXh0PVwiXCIsdD1udWxsKSx0KWZvcihyIGluIHQpdSYmciBpbiB1fHxDKG8scixcIlwiKTtpZih1KWZvcihmIGluIHUpdCYmdVtmXT09PXRbZl18fEMobyxmLHVbZl0pfWVsc2VcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXT8oZT1sIT09KGw9bC5yZXBsYWNlKC9DYXB0dXJlJC8sXCJcIikpLGM9bC50b0xvd2VyQ2FzZSgpLGw9KGMgaW4gbj9jOmwpLnNsaWNlKDIpLHU/KHR8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLE4sZSksKG4ubHx8KG4ubD17fSkpW2xdPXUpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLE4sZSkpOlwibGlzdFwiIT09bCYmXCJ0YWdOYW1lXCIhPT1sJiZcImZvcm1cIiE9PWwmJlwidHlwZVwiIT09bCYmIWkmJmwgaW4gbj9uW2xdPW51bGw9PXU/XCJcIjp1OlwiZnVuY3Rpb25cIiE9dHlwZW9mIHUmJlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIiE9PWwmJihsIT09KGw9bC5yZXBsYWNlKC9eeGxpbms6Py8sXCJcIikpP251bGw9PXV8fCExPT09dT9uLnJlbW92ZUF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLGwudG9Mb3dlckNhc2UoKSk6bi5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixsLnRvTG93ZXJDYXNlKCksdSk6bnVsbD09dXx8ITE9PT11P24ucmVtb3ZlQXR0cmlidXRlKGwpOm4uc2V0QXR0cmlidXRlKGwsdSkpfWZ1bmN0aW9uIE4obCl7dGhpcy5sW2wudHlwZV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIFQobCx1LHQsaSxvLHIsZixlLGMpe3ZhciBhLGgsdixwLG0sdyxnLGsseCxDLFA9dS50eXBlO2lmKHZvaWQgMCE9PXUuY29uc3RydWN0b3IpcmV0dXJuIG51bGw7KGE9bi5fX2IpJiZhKHUpO3RyeXtuOmlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFApe2lmKGs9dS5wcm9wcyx4PShhPVAuY29udGV4dFR5cGUpJiZpW2EuX19jXSxDPWE/eD94LnByb3BzLnZhbHVlOmEuX186aSx0Ll9fYz9nPShoPXUuX19jPXQuX19jKS5fXz1oLl9fRTooXCJwcm90b3R5cGVcImluIFAmJlAucHJvdG90eXBlLnJlbmRlcj91Ll9fYz1oPW5ldyBQKGssQyk6KHUuX19jPWg9bmV3IGQoayxDKSxoLmNvbnN0cnVjdG9yPVAsaC5yZW5kZXI9RCkseCYmeC5zdWIoaCksaC5wcm9wcz1rLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9QyxoLl9fbj1pLHY9aC5fX2Q9ITAsaC5fX2g9W10pLG51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksbnVsbCE9UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPXMoe30saC5fX3MpKSxzKGguX19zLFAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGssaC5fX3MpKSkscD1oLnByb3BzLG09aC5zdGF0ZSx2KW51bGw9PVAuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1oLmNvbXBvbmVudFdpbGxNb3VudCYmaC5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1oLmNvbXBvbmVudERpZE1vdW50JiZoLl9faC5wdXNoKGguY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmshPT1wJiZudWxsIT1oLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhrLEMpLCFoLl9fZSYmbnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUoayxoLl9fcyxDKSl7Zm9yKGgucHJvcHM9ayxoLnN0YXRlPWguX19zLGguX19kPSExLGguX192PXUsdS5fX2U9dC5fX2UsdS5fX2s9dC5fX2ssaC5fX2gubGVuZ3RoJiZmLnB1c2goaCksYT0wO2E8dS5fX2subGVuZ3RoO2ErKyl1Ll9fa1thXSYmKHUuX19rW2FdLl9fPXUpO2JyZWFrIG59bnVsbCE9aC5jb21wb25lbnRXaWxsVXBkYXRlJiZoLmNvbXBvbmVudFdpbGxVcGRhdGUoayxoLl9fcyxDKSxudWxsIT1oLmNvbXBvbmVudERpZFVwZGF0ZSYmaC5fX2gucHVzaChmdW5jdGlvbigpe2guY29tcG9uZW50RGlkVXBkYXRlKHAsbSx3KX0pfWguY29udGV4dD1DLGgucHJvcHM9ayxoLnN0YXRlPWguX19zLChhPW4uX19yKSYmYSh1KSxoLl9fZD0hMSxoLl9fdj11LGguX19QPWwsYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSx1Ll9faz1iKG51bGwhPWEmJmEudHlwZT09eSYmbnVsbD09YS5rZXk/YS5wcm9wcy5jaGlsZHJlbjphKSxudWxsIT1oLmdldENoaWxkQ29udGV4dCYmKGk9cyhzKHt9LGkpLGguZ2V0Q2hpbGRDb250ZXh0KCkpKSx2fHxudWxsPT1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwodz1oLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHAsbSkpLF8obCx1LHQsaSxvLHIsZixlLGMpLGguYmFzZT11Ll9fZSxoLl9faC5sZW5ndGgmJmYucHVzaChoKSxnJiYoaC5fX0U9aC5fXz1udWxsKSxoLl9fZT1udWxsfWVsc2UgdS5fX2U9aih0Ll9fZSx1LHQsaSxvLHIsZixjKTsoYT1uLmRpZmZlZCkmJmEodSl9Y2F0Y2gobCl7bi5fX2UobCx1LHQpfXJldHVybiB1Ll9fZX1mdW5jdGlvbiAkKGwsdSl7bi5fX2MmJm4uX19jKHUsbCksbC5zb21lKGZ1bmN0aW9uKHUpe3RyeXtsPXUuX19oLHUuX19oPVtdLGwuc29tZShmdW5jdGlvbihuKXtuLmNhbGwodSl9KX1jYXRjaChsKXtuLl9fZShsLHUuX192KX19KX1mdW5jdGlvbiBqKG4sbCx1LHQsaSxvLHIsYyl7dmFyIHMsYSxoLHYscCx5PXUucHJvcHMsZD1sLnByb3BzO2lmKGk9XCJzdmdcIj09PWwudHlwZXx8aSxudWxsPT1uJiZudWxsIT1vKWZvcihzPTA7czxvLmxlbmd0aDtzKyspaWYobnVsbCE9KGE9b1tzXSkmJihudWxsPT09bC50eXBlPzM9PT1hLm5vZGVUeXBlOmEubG9jYWxOYW1lPT09bC50eXBlKSl7bj1hLG9bc109bnVsbDticmVha31pZihudWxsPT1uKXtpZihudWxsPT09bC50eXBlKXJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkKTtuPWk/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixsLnR5cGUpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobC50eXBlKSxvPW51bGx9aWYobnVsbD09PWwudHlwZSludWxsIT1vJiYob1tvLmluZGV4T2YobildPW51bGwpLHkhPT1kJiZuLmRhdGEhPWQmJihuLmRhdGE9ZCk7ZWxzZSBpZihsIT09dSl7aWYobnVsbCE9byYmKG89ZS5zbGljZS5jYWxsKG4uY2hpbGROb2RlcykpLGg9KHk9dS5wcm9wc3x8ZikuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsdj1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZih5PT09Zilmb3IoeT17fSxwPTA7cDxuLmF0dHJpYnV0ZXMubGVuZ3RoO3ArKyl5W24uYXR0cmlidXRlc1twXS5uYW1lXT1uLmF0dHJpYnV0ZXNbcF0udmFsdWU7KHZ8fGgpJiYodiYmaCYmdi5fX2h0bWw9PWguX19odG1sfHwobi5pbm5lckhUTUw9diYmdi5fX2h0bWx8fFwiXCIpKX14KG4sZCx5LGksYyksbC5fX2s9bC5wcm9wcy5jaGlsZHJlbix2fHxfKG4sbCx1LHQsXCJmb3JlaWduT2JqZWN0XCIhPT1sLnR5cGUmJmksbyxyLGYsYyksY3x8KFwidmFsdWVcImluIGQmJnZvaWQgMCE9PWQudmFsdWUmJmQudmFsdWUhPT1uLnZhbHVlJiYobi52YWx1ZT1udWxsPT1kLnZhbHVlP1wiXCI6ZC52YWx1ZSksXCJjaGVja2VkXCJpbiBkJiZ2b2lkIDAhPT1kLmNoZWNrZWQmJmQuY2hlY2tlZCE9PW4uY2hlY2tlZCYmKG4uY2hlY2tlZD1kLmNoZWNrZWQpKX1yZXR1cm4gbn1mdW5jdGlvbiB6KGwsdSx0KXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKHUpOmwuY3VycmVudD11fWNhdGNoKGwpe24uX19lKGwsdCl9fWZ1bmN0aW9uIEEobCx1LHQpe3ZhciBpLG8scjtpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwoaT1sLnJlZikmJihpLmN1cnJlbnQmJmkuY3VycmVudCE9PWwuX19lfHx6KGksbnVsbCx1KSksdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlfHwodD1udWxsIT0obz1sLl9fZSkpLGwuX19lPWwuX19kPW51bGwsbnVsbCE9KGk9bC5fX2MpKXtpZihpLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtpLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2gobCl7bi5fX2UobCx1KX1pLmJhc2U9aS5fX1A9bnVsbH1pZihpPWwuX19rKWZvcihyPTA7cjxpLmxlbmd0aDtyKyspaVtyXSYmQShpW3JdLHUsdCk7bnVsbCE9byYmYShvKX1mdW5jdGlvbiBEKG4sbCx1KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihuLHUpfWZ1bmN0aW9uIEUobCx1LHQpe3ZhciBpLHIsYztuLl9fJiZuLl9fKGwsdSkscj0oaT10PT09byk/bnVsbDp0JiZ0Ll9fa3x8dS5fX2ssbD1oKHksbnVsbCxbbF0pLGM9W10sVCh1LChpP3U6dHx8dSkuX19rPWwscnx8ZixmLHZvaWQgMCE9PXUub3duZXJTVkdFbGVtZW50LHQmJiFpP1t0XTpyP251bGw6ZS5zbGljZS5jYWxsKHUuY2hpbGROb2RlcyksYyx0fHxmLGkpLCQoYyxsKX1mdW5jdGlvbiBIKG4sbCl7RShuLGwsbyl9ZnVuY3Rpb24gSShuLGwpe3JldHVybiBsPXMocyh7fSxuLnByb3BzKSxsKSxhcmd1bWVudHMubGVuZ3RoPjImJihsLmNoaWxkcmVuPWUuc2xpY2UuY2FsbChhcmd1bWVudHMsMikpLHYobi50eXBlLGwsbC5rZXl8fG4ua2V5LGwucmVmfHxuLnJlZil9ZnVuY3Rpb24gTChuKXt2YXIgbD17fSx1PXtfX2M6XCJfX2NDXCIrcisrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHQsaT10aGlzO3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dHx8KHQ9W10sdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gbFt1Ll9fY109aSxsfSx0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihsKXtuLnZhbHVlIT09bC52YWx1ZSYmdC5zb21lKGZ1bmN0aW9uKG4pe24uY29udGV4dD1sLnZhbHVlLGcobil9KX0sdGhpcy5zdWI9ZnVuY3Rpb24obil7dC5wdXNoKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3Quc3BsaWNlKHQuaW5kZXhPZihuKSwxKSxsJiZsLmNhbGwobil9fSksbi5jaGlsZHJlbn19O3JldHVybiB1LkNvbnN1bWVyLmNvbnRleHRUeXBlPXUsdX1uPXtfX2U6ZnVuY3Rpb24obixsKXtmb3IodmFyIHUsdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKHUuY29uc3RydWN0b3ImJm51bGwhPXUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yJiYodD0hMCx1LnNldFN0YXRlKHUuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKG4pKSksbnVsbCE9dS5jb21wb25lbnREaWRDYXRjaCYmKHQ9ITAsdS5jb21wb25lbnREaWRDYXRjaChuKSksdClyZXR1cm4gZyh1Ll9fRT11KX1jYXRjaChsKXtuPWx9dGhyb3cgbn19LGw9ZnVuY3Rpb24obil7cmV0dXJuIG51bGwhPW4mJnZvaWQgMD09PW4uY29uc3RydWN0b3J9LGQucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKG4sbCl7dmFyIHU7dT10aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9cyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHUsdGhpcy5wcm9wcykpLG4mJnModSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKHRoaXMuX19lPSExLGwmJnRoaXMuX19oLnB1c2gobCksZyh0aGlzKSl9LGQucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxnKHRoaXMpKX0sZC5wcm90b3R5cGUucmVuZGVyPXksdT1bXSx0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LG89ZixyPTA7ZXhwb3J0e0UgYXMgcmVuZGVyLEggYXMgaHlkcmF0ZSxoIGFzIGNyZWF0ZUVsZW1lbnQsaCx5IGFzIEZyYWdtZW50LHAgYXMgY3JlYXRlUmVmLGwgYXMgaXNWYWxpZEVsZW1lbnQsZCBhcyBDb21wb25lbnQsSSBhcyBjbG9uZUVsZW1lbnQsTCBhcyBjcmVhdGVDb250ZXh0LGIgYXMgdG9DaGlsZEFycmF5LEEgYXMgX3VubW91bnQsbiBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnR7b3B0aW9ucyBhcyBufWZyb21cInByZWFjdFwiO3ZhciB0LHUscixpPVtdLG89bi5fX3IsZj1uLmRpZmZlZCxjPW4uX19jLGU9bi51bm1vdW50O2Z1bmN0aW9uIGEodCl7bi5fX2gmJm4uX19oKHUpO3ZhciByPXUuX19IfHwodS5fX0g9e3Q6W10sdTpbXX0pO3JldHVybiB0Pj1yLnQubGVuZ3RoJiZyLnQucHVzaCh7fSksci50W3RdfWZ1bmN0aW9uIHYobil7cmV0dXJuIG0oRSxuKX1mdW5jdGlvbiBtKG4scixpKXt2YXIgbz1hKHQrKyk7cmV0dXJuIG8uX19jfHwoby5fX2M9dSxvLmk9W2k/aShyKTpFKHZvaWQgMCxyKSxmdW5jdGlvbih0KXt2YXIgdT1uKG8uaVswXSx0KTtvLmlbMF0hPT11JiYoby5pWzBdPXUsby5fX2Muc2V0U3RhdGUoe30pKX1dKSxvLml9ZnVuY3Rpb24gcChuLHIpe3ZhciBpPWEodCsrKTt4KGkubyxyKSYmKGkuaT1uLGkubz1yLHUuX19ILnUucHVzaChpKSl9ZnVuY3Rpb24gbChuLHIpe3ZhciBpPWEodCsrKTt4KGkubyxyKSYmKGkuaT1uLGkubz1yLHUuX19oLnB1c2goaSkpfWZ1bmN0aW9uIGQobil7cmV0dXJuIHkoZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpufX0sW10pfWZ1bmN0aW9uIHMobix0LHUpe2woZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odCgpKTpuJiYobi5jdXJyZW50PXQoKSl9LG51bGw9PXU/dTp1LmNvbmNhdChuKSl9ZnVuY3Rpb24geShuLHUpe3ZhciByPWEodCsrKTtyZXR1cm4geChyLm8sdSk/KHIubz11LHIudj1uLHIuaT1uKCkpOnIuaX1mdW5jdGlvbiBUKG4sdCl7cmV0dXJuIHkoZnVuY3Rpb24oKXtyZXR1cm4gbn0sdCl9ZnVuY3Rpb24gdyhuKXt2YXIgcj11LmNvbnRleHRbbi5fX2NdO2lmKCFyKXJldHVybiBuLl9fO3ZhciBpPWEodCsrKTtyZXR1cm4gbnVsbD09aS5pJiYoaS5pPSEwLHIuc3ViKHUpKSxyLnByb3BzLnZhbHVlfWZ1bmN0aW9uIEEodCx1KXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZSh1P3UodCk6dCl9ZnVuY3Rpb24gRihuKXt2YXIgcj1hKHQrKyksaT12KCk7cmV0dXJuIHIuaT1uLHUuY29tcG9uZW50RGlkQ2F0Y2h8fCh1LmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4pe3IuaSYmci5pKG4pLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIF8oKXtpLnNvbWUoZnVuY3Rpb24obil7bi5fX1AmJihuLl9fSC51LmZvckVhY2goZyksbi5fX0gudS5mb3JFYWNoKHEpLG4uX19ILnU9W10pfSksaT1bXX1mdW5jdGlvbiBnKG4pe24ubSYmbi5tKCl9ZnVuY3Rpb24gcShuKXt2YXIgdD1uLmkoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYobi5tPXQpfWZ1bmN0aW9uIHgobix0KXtyZXR1cm4hbnx8dC5zb21lKGZ1bmN0aW9uKHQsdSl7cmV0dXJuIHQhPT1uW3VdfSl9ZnVuY3Rpb24gRShuLHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dChuKTp0fW4uX19yPWZ1bmN0aW9uKG4pe28mJm8obiksdD0wLCh1PW4uX19jKS5fX0gmJih1Ll9fSC51LmZvckVhY2goZyksdS5fX0gudS5mb3JFYWNoKHEpLHUuX19ILnU9W10pfSxuLmRpZmZlZD1mdW5jdGlvbih0KXtmJiZmKHQpO3ZhciB1PXQuX19jO2lmKHUpe3ZhciBvPXUuX19IO28mJm8udS5sZW5ndGgmJigxIT09aS5wdXNoKHUpJiZyPT09bi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fCgocj1uLnJlcXVlc3RBbmltYXRpb25GcmFtZSl8fGZ1bmN0aW9uKG4pe3ZhciB0LHU9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQociksY2FuY2VsQW5pbWF0aW9uRnJhbWUodCksc2V0VGltZW91dChuKX0scj1zZXRUaW1lb3V0KHUsMTAwKTtcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYodD1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSkpfSkoXykpfX0sbi5fX2M9ZnVuY3Rpb24obix0KXt0LnNvbWUoZnVuY3Rpb24obil7bi5fX2guZm9yRWFjaChnKSxuLl9faD1uLl9faC5maWx0ZXIoZnVuY3Rpb24obil7cmV0dXJuIW4uaXx8cShuKX0pfSksYyYmYyhuLHQpfSxuLnVubW91bnQ9ZnVuY3Rpb24obil7ZSYmZShuKTt2YXIgdD1uLl9fYztpZih0KXt2YXIgdT10Ll9fSDt1JiZ1LnQuZm9yRWFjaChmdW5jdGlvbihuKXtyZXR1cm4gbi5tJiZuLm0oKX0pfX07ZXhwb3J0e3YgYXMgdXNlU3RhdGUsbSBhcyB1c2VSZWR1Y2VyLHAgYXMgdXNlRWZmZWN0LGwgYXMgdXNlTGF5b3V0RWZmZWN0LGQgYXMgdXNlUmVmLHMgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSx5IGFzIHVzZU1lbW8sVCBhcyB1c2VDYWxsYmFjayx3IGFzIHVzZUNvbnRleHQsQSBhcyB1c2VEZWJ1Z1ZhbHVlLEYgYXMgdXNlRXJyb3JCb3VuZGFyeX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob29rcy5tb2R1bGUuanMubWFwXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7Y2hlY2tlZCwgb25Ub2dnbGUsIG5hbWUsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWQgPSB0aGlzLnByb3BzLnJlcXVpcmVkIHx8IGZhbHNlXHJcbiAgICAgICAgY29uc3Qgb3B0T3V0ID0gdGhpcy5wcm9wcy5vcHRPdXQgfHwgZmFsc2VcclxuICAgICAgICBjb25zdCBwdXJwb3NlcyA9IHRoaXMucHJvcHMucHVycG9zZXMgfHwgW11cclxuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIG9uVG9nZ2xlKGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gYGFwcC1pdGVtLSR7bmFtZX1gXHJcbiAgICAgICAgY29uc3QgcHVycG9zZXNUZXh0ID0gcHVycG9zZXMubWFwKChwdXJwb3NlKSA9PiB0KFsncHVycG9zZXMnLCBwdXJwb3NlXSkpLmpvaW4oXCIsIFwiKVxyXG4gICAgICAgIGNvbnN0IG9wdE91dFRleHQgPSBvcHRPdXQgPyA8c3BhbiBjbGFzc05hbWU9XCJjbS1vcHQtb3V0XCIgdGl0bGU9e3QoWydhcHAnLCAnb3B0T3V0JywgJ2Rlc2NyaXB0aW9uJ10pfT57dChbJ2FwcCcsICdvcHRPdXQnLCAndGl0bGUnXSl9PC9zcGFuPiA6ICcnXHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRUZXh0ID0gcmVxdWlyZWQgPyA8c3BhbiBjbGFzc05hbWU9XCJjbS1yZXF1aXJlZFwiIHRpdGxlPXt0KFsnYXBwJywgJ3JlcXVpcmVkJywgJ2Rlc2NyaXB0aW9uJ10pfT57dChbJ2FwcCcsICdyZXF1aXJlZCcsICd0aXRsZSddKX08L3NwYW4+IDogJydcclxuXHJcbiAgICAgICAgbGV0IHB1cnBvc2VzQ29udGVudFxyXG4gICAgICAgIGlmIChwdXJwb3Nlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBwdXJwb3Nlc0NvbnRlbnQgPSA8cCBjbGFzc05hbWU9XCJwdXJwb3Nlc1wiPnt0KFsnYXBwJywgcHVycG9zZXMubGVuZ3RoID4gMSA/ICdwdXJwb3NlcycgOiAncHVycG9zZSddKX06IHtwdXJwb3Nlc1RleHR9PC9wPlxyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGlucHV0IGlkPXtpZH0gY2xhc3NOYW1lPXtcImNtLWFwcC1pbnB1dFwiKyhyZXF1aXJlZCA/IFwiIHJlcXVpcmVkXCIgOiBcIlwiKX0gYXJpYS1kZXNjcmliZWRieT17YCR7aWR9LWRlc2NyaXB0aW9uYH0gZGlzYWJsZWQ9e3JlcXVpcmVkfSBjaGVja2VkPXtjaGVja2VkIHx8IHJlcXVpcmVkfSB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0gY2xhc3NOYW1lPVwiY20tYXBwLWxhYmVsXCIgey4uLihyZXF1aXJlZCA/IHt0YWJJbmRleDogXCIwXCJ9IDoge30pfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNtLWFwcC10aXRsZVwiPnt0aXRsZX08L3NwYW4+e3JlcXVpcmVkVGV4dH17b3B0T3V0VGV4dH1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kIGFjdGl2ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPXtgJHtpZH0tZGVzY3JpcHRpb25gfT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNtLWFwcC1kZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbiB8fCB0KFtuYW1lLCAnZGVzY3JpcHRpb24nXSl9PC9wPlxyXG4gICAgICAgICAgICAgICAge3B1cnBvc2VzQ29udGVudH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnNlbnROb3RpY2UgZnJvbSAnLi9jb25zZW50LW5vdGljZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3c6IHByb3BzLnNob3cgPiAwIHx8ICFwcm9wcy5tYW5hZ2VyLmNvbmZpcm1lZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXtcclxuICAgICAgICAvLyBwcm9wcy5zaG93IGlzIGEgbnVtYmVyIHRoYXQgaXMgaW5jcmVtZW50ZWQgKHNvIHRoYXQgd2UgY2FuIGRldGVjdFxyXG4gICAgICAgIC8vIHJlcGVhdGVkIGNhbGxzIHRvIHRoZSBcInNob3dcIiBmdW5jdGlvbilcclxuICAgICAgICBpZiAocHJldlByb3BzLnNob3cgPT09IHRoaXMucHJvcHMuc2hvdylcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgY29uc3Qgc2hvd1N0YXRlID0gdGhpcy5wcm9wcy5zaG93ID4gMCB8fCAhdGhpcy5wcm9wcy5tYW5hZ2VyLmNvbmZpcm1lZFxyXG4gICAgICAgIGlmIChzaG93U3RhdGUgIT09IHRoaXMuc3RhdGUuc2hvdylcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogc2hvd1N0YXRlfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2NvbmZpZywgdCwgbWFuYWdlciwgc3R5bGVQcmVmaXh9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHtzaG93fSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVQcmVmaXh9PlxyXG4gICAgICAgICAgICAgICAgPENvbnNlbnROb3RpY2UgdD17dH0gc2hvdz17c2hvd30gaGlkZT17aGlkZX0gY29uZmlnPXtjb25maWd9IG1hbmFnZXI9e21hbmFnZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcHBJdGVtIGZyb20gJy4vYXBwLWl0ZW0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgcHJvcHMubWFuYWdlci53YXRjaCh0aGlzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNvbnNlbnRzIDogcHJvcHMubWFuYWdlci5jb25zZW50c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIHRoaXMucHJvcHMubWFuYWdlci51bndhdGNoKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKG9iaiwgdHlwZSwgZGF0YSl7XHJcbiAgICAgICAgaWYgKG9iaiA9PT0gdGhpcy5wcm9wcy5tYW5hZ2VyICYmIHR5cGUgPT09ICdjb25zZW50cycpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbnNlbnRzIDogZGF0YX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2NvbmZpZywgdCwgbWFuYWdlcn0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3Qge2NvbnNlbnRzfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBjb25zdCB7YXBwc30gPSBjb25maWdcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlID0gKGFwcHMsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcHMubWFwKChhcHApPT57XHJcbiAgICAgICAgICAgICAgICBpZiAgKCFhcHAucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLnVwZGF0ZUNvbnNlbnQoYXBwLm5hbWUsIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlQWxsID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZShhcHBzLCB2YWx1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFwcEl0ZW1zID0gYXBwcy5tYXAoKGFwcCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2dnbGVBcHAgPSAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZShbYXBwXSwgdmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGNvbnNlbnRzW2FwcC5uYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gPGxpIGtleT17YXBwLm5hbWV9IGNsYXNzTmFtZT1cImNtLWFwcFwiPlxyXG4gICAgICAgICAgICAgICAgPEFwcEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkIHx8IGFwcC5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17dG9nZ2xlQXBwfVxyXG4gICAgICAgICAgICAgICAgICAgIHQ9e3R9XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmFwcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgdG9nZ2xhYmxlQXBwcyA9IGFwcHMuZmlsdGVyKGFwcCA9PiAhYXBwLnJlcXVpcmVkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWxsRGlzYWJsZWQgPSB0b2dnbGFibGVBcHBzLmZpbHRlcihcclxuICAgICAgICAgICAgYXBwID0+IGNvbnNlbnRzW2FwcC5uYW1lXVxyXG4gICAgICAgICkubGVuZ3RoID09PSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gPHVsIGNsYXNzTmFtZT1cImNtLWFwcHNcIj5cclxuICAgICAgICAgICAge2FwcEl0ZW1zfVxyXG4gICAgICAgICAgICB7dG9nZ2xhYmxlQXBwcy5sZW5ndGggPiAxICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjbS1hcHAgY20tdG9nZ2xlLWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcHBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkaXNhYmxlQWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3QoWydhcHAnLCdkaXNhYmxlQWxsJywndGl0bGUnXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0KFsnYXBwJywgJ2Rpc2FibGVBbGwnLCAnZGVzY3JpcHRpb24nXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyFhbGxEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RvZ2dsZUFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdD17dH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q2xvc2V9IGZyb20gJy4vaWNvbnMnXHJcbmltcG9ydCBBcHBzIGZyb20gJy4vYXBwcydcclxuaW1wb3J0IHtsYW5ndWFnZX0gZnJvbSAndXRpbHMvaTE4bidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNlbnRNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIGNvbnN0IHttYW5hZ2VyfSA9IHByb3BzXHJcbiAgICAgICAgbWFuYWdlci5yZXN0b3JlU2F2ZWRDb25zZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2hpZGUsIGNvbmZpcm1pbmcsIHNhdmVBbmRIaWRlLCBhY2NlcHRBbmRIaWRlLCBkZWNsaW5lQW5kSGlkZSwgY29uZmlnLCBtYW5hZ2VyLCB0fSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCBsYW5nID0gY29uZmlnLmxhbmcgfHwgbGFuZ3VhZ2UoKVxyXG5cclxuICAgICAgICBsZXQgY2xvc2VMaW5rXHJcbiAgICAgICAgaWYgKCFjb25maWcubXVzdENvbnNlbnQpIHtcclxuICAgICAgICAgICAgY2xvc2VMaW5rID0gPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3QoWydjbG9zZSddKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoaWRlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2xvc2UgdD17dH0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkZWNsaW5lQnV0dG9uXHJcblxyXG4gICAgICAgIGlmICghY29uZmlnLmhpZGVEZWNsaW5lQWxsICYmICEgbWFuYWdlci5jb25maXJtZWQpXHJcbiAgICAgICAgICAgIGRlY2xpbmVCdXR0b24gPSA8YnV0dG9uIGRpc2FibGVkPXtjb25maXJtaW5nfSBjbGFzc05hbWU9XCJjbS1idG4gY20tYnRuLWRlY2xpbmUgY20tYnRuLXJpZ2h0IGNtLWJ0bi1zbSBjbS1idG4tZGFuZ2VyIGNuLWRlY2xpbmVcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZGVjbGluZUFuZEhpZGV9Pnt0KFsnZGVjbGluZSddKX08L2J1dHRvbj5cclxuICAgICAgICBsZXQgYWNjZXB0QWxsQnV0dG9uXHJcbiAgICAgICAgY29uc3QgYWNjZXB0QnV0dG9uID1cclxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17Y29uZmlybWluZ30gY2xhc3NOYW1lPVwiY20tYnRuIGNtLWJ0bi1zdWNjZXNzIGNtLWJ0bi1pbmZvIGNtLWJ0bi1hY2NlcHRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2F2ZUFuZEhpZGV9Pnt0KFttYW5hZ2VyLmNvbmZpcm1lZCA/ICdzYXZlJyA6ICdhY2NlcHRTZWxlY3RlZCddKX08L2J1dHRvbj5cclxuICAgICAgICBpZiAoY29uZmlnLmFjY2VwdEFsbCAmJiAhbWFuYWdlci5jb25maXJtZWQpIHtcclxuICAgICAgICAgICAgYWNjZXB0QWxsQnV0dG9uID0gPGJ1dHRvbiBkaXNhYmxlZD17Y29uZmlybWluZ30gY2xhc3NOYW1lPVwiY20tYnRuIGNtLWJ0bi1zdWNjZXNzIGNtLWJ0bi1hY2NlcHQtYWxsXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2FjY2VwdEFuZEhpZGV9Pnt0KFsnYWNjZXB0QWxsJ10pfTwvYnV0dG9uPlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHBVcmwgPSAoY29uZmlnLnByaXZhY3lQb2xpY3kgJiYgY29uZmlnLnByaXZhY3lQb2xpY3lbbGFuZ10pIHx8XHJcbiAgICAgICAgICAgIGNvbmZpZy5wcml2YWN5UG9saWN5LmRlZmF1bHQgfHxcclxuICAgICAgICAgICAgY29uZmlnLnByaXZhY3lQb2xpY3lcclxuXHJcbiAgICAgICAgY29uc3QgcHBMaW5rID0gPGEgb25DbGljaz17aGlkZX0gaHJlZj17cHBVcmx9Pnt0KFsnY29uc2VudE1vZGFsJywncHJpdmFjeVBvbGljeScsJ25hbWUnXSl9PC9hPlxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvb2tpZS1tb2RhbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWJnXCIgb25DbGljaz17aGlkZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLW1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjbG9zZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e3QoWydjb25zZW50TW9kYWwnLCAndGl0bGUnXSl9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3QoWydjb25zZW50TW9kYWwnLCdkZXNjcmlwdGlvbiddKX0gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QXBwcyB0PXt0fSBjb25maWc9e2NvbmZpZ30gbWFuYWdlcj17bWFuYWdlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWZvb3Rlci1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthY2NlcHRBbGxCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkZWNsaW5lQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNtLXBvd2VyZWQtYnlcIj57dChbJ2NvbnNlbnRNb2RhbCcsJ3ByaXZhY3lQb2xpY3knLCd0ZXh0J10sIHtwcml2YWN5UG9saWN5IDogcHBMaW5rfSl9IHwgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17Y29uZmlnLnBvd2VyZWRCeSB8fCAnaHR0cHM6Ly9rbGFyby5raXByb3RlY3QuY29tJ30gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPnt0KFsncG93ZXJlZEJ5J10pfTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29uc2VudE1vZGFsIGZyb20gJy4vY29uc2VudC1tb2RhbCdcclxuaW1wb3J0IHtnZXRQdXJwb3Nlc30gZnJvbSAndXRpbHMvY29uZmlnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc2VudE5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vZGFsOiBmYWxzZSxcclxuICAgICAgICAgICAgY29uZmlybWluZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZUJ1dHRvbkNsaWNrZWQgPSAoc2V0Q2hhbmdlZEFsbCwgY2hhbmdlZEFsbFZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge21vZGFsfSA9IHRoaXMuc3RhdGVcclxuICAgICAgICBpZiAoc2V0Q2hhbmdlZEFsbClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYW5hZ2VyLmNoYW5nZUFsbChjaGFuZ2VkQWxsVmFsdWUpXHJcbiAgICAgICAgY29uc3QgY29uZmlybWVkID0gdGhpcy5wcm9wcy5tYW5hZ2VyLmNvbmZpcm1lZFxyXG4gICAgICAgIGNvbnN0IHNhdmVBbmRIaWRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25maXJtaW5nOiBmYWxzZX0pXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWFuYWdlci5zYXZlQW5kQXBwbHlDb25zZW50cygpXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlkZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZXRDaGFuZ2VkQWxsICYmICFjb25maXJtZWQgJiYgKG1vZGFsIHx8IHRoaXMucHJvcHMuY29uZmlnLm11c3RDb25zZW50KSl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvbmZpcm1pbmc6IHRydWV9KVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHNhdmVBbmRIaWRlLCAxMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNhdmVBbmRIaWRlKClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQW5kSGlkZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVCdXR0b25DbGlja2VkKGZhbHNlLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBhY2NlcHRBbmRIaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZUJ1dHRvbkNsaWNrZWQodHJ1ZSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBkZWNsaW5lQW5kSGlkZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmV4ZWN1dGVCdXR0b25DbGlja2VkKHRydWUsIGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtjb25maWcsIHNob3csIG1hbmFnZXIsIHQsIGhpZGV9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgbW9kYWwsIGNvbmZpcm1pbmcgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgY29uc3QgcHVycG9zZXMgPSBnZXRQdXJwb3Nlcyhjb25maWcpXHJcbiAgICAgICAgY29uc3QgcHVycG9zZXNUZXh0ID0gcHVycG9zZXMubWFwKChwdXJwb3NlKSA9PiB0KFsncHVycG9zZXMnLCBwdXJwb3NlXSkpLmpvaW4oXCIsIFwiKVxyXG5cclxuICAgICAgICBsZXQgY2hhbmdlc1RleHRcclxuXHJcbiAgICAgICAgY29uc3Qgc2hvd01vZGFsID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsOiB0cnVlfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hbmFnZXIuY29uZmlybWVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oaWRlKClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWw6IGZhbHNlfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYW5hZ2VyLmNoYW5nZWQpXHJcbiAgICAgICAgICAgIGNoYW5nZXNUZXh0ID0gPHAgY2xhc3NOYW1lPVwiY24tY2hhbmdlc1wiPnt0KFsnY29uc2VudE5vdGljZScsICdjaGFuZ2VEZXNjcmlwdGlvbiddKX08L3A+XHJcblxyXG4gICAgICAgIGlmICghc2hvdylcclxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgLz5cclxuXHJcbiAgICAgICAgY29uc3QgZGVjbGluZUJ1dHRvbiA9IGNvbmZpZy5oaWRlRGVjbGluZUFsbCA/XHJcbiAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbS1idG4gY20tYnRuLXNtIGNtLWJ0bi1kYW5nZXIgY24tZGVjbGluZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmRlY2xpbmVBbmRIaWRlfT57dChbJ2RlY2xpbmUnXSl9PC9idXR0b24+XHJcblxyXG4gICAgICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IGNvbmZpZy5hY2NlcHRBbGwgP1xyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNtLWJ0biBjbS1idG4tc20gY20tYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5hY2NlcHRBbmRIaWRlfT57dChbJ2FjY2VwdEFsbCddKX08L2J1dHRvbj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNtLWJ0biBjbS1idG4tc20gY20tYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zYXZlQW5kSGlkZX0+e3QoWydvayddKX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgY29uc3Qgbm90aWNlSXNWaXNpYmxlID1cclxuICAgICAgICAgICAgIWNvbmZpZy5tdXN0Q29uc2VudCAmJiAhbWFuYWdlci5jb25maXJtZWQgJiYgIWNvbmZpZy5ub05vdGljZVxyXG5cclxuICAgICAgICBpZiAobW9kYWwgfHwgbWFuYWdlci5jb25maXJtZWQgfHwgKCFtYW5hZ2VyLmNvbmZpcm1lZCAmJiBjb25maWcubXVzdENvbnNlbnQpKVxyXG4gICAgICAgICAgICByZXR1cm4gPENvbnNlbnRNb2RhbCB0PXt0fSBjb25maXJtaW5nPXtjb25maXJtaW5nfSBjb25maWc9e2NvbmZpZ30gaGlkZT17aGlkZU1vZGFsfSBkZWNsaW5lQW5kSGlkZT17dGhpcy5kZWNsaW5lQW5kSGlkZX0gc2F2ZUFuZEhpZGU9e3RoaXMuc2F2ZUFuZEhpZGV9IGFjY2VwdEFuZEhpZGU9e3RoaXMuYWNjZXB0QW5kSGlkZX0gbWFuYWdlcj17bWFuYWdlcn0gLz5cclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb29raWUtbW9kYWxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNtLWJnXCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29va2llLW5vdGljZSAkeyFub3RpY2VJc1Zpc2libGUgPyAnY29va2llLW5vdGljZS1oaWRkZW4nIDogJyd9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNuLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0KFsnY29uc2VudE5vdGljZScsICd0aXRsZSddKX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY24tYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dChbJ2NvbnNlbnROb3RpY2UnLCdkZXNjcmlwdGlvbiddKX0gJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAge2NoYW5nZXNUZXh0fVxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY24tb2tcIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVjbGluZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICB7YWNjZXB0QnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNtLWxpbmsgY20tbGVhcm4tbW9yZVwiIGhyZWY9XCIjXCIgb25DbGljaz17c2hvd01vZGFsfT57dChbJ2NvbnNlbnROb3RpY2UnLCAnbGVhcm5Nb3JlJ10pfS4uLjwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENsb3NlID0gKHt0fSkgPT4ge1xyXG4gICAgcmV0dXJuIDxzdmcgcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9e3QoWydjbG9zZSddKX0gd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld1BvcnQ9XCIwIDAgMTIgMTJcIiB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgPHRpdGxlPnt0KFsnY2xvc2UnXSl9PC90aXRsZT5cclxuICAgICAgICA8bGluZSB4MT1cIjFcIiB5MT1cIjExXCJcclxuICAgICAgICAgICAgeDI9XCIxMVwiIHkyPVwiMVwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiLz5cclxuICAgICAgICA8bGluZSB4MT1cIjFcIiB5MT1cIjFcIlxyXG4gICAgICAgICAgICB4Mj1cIjExXCIgeTI9XCIxMVwiXHJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMVwiLz5cclxuICAgIDwvc3ZnPlxyXG59XHJcbiIsImltcG9ydCB7Z2V0Q29va2llcywgZGVsZXRlQ29va2llfSBmcm9tICd1dGlscy9jb29raWVzJ1xyXG5pbXBvcnQgc3RvcmVzIGZyb20gJ3N0b3JlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpe1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIC8vIHRoZSBjb25maWd1cmF0aW9uXHJcblxyXG4gICAgICAgIHRoaXMuc3RvcmUgPSBuZXcgc3RvcmVzW3RoaXMuc3RvcmFnZU1ldGhvZF0odGhpcylcclxuXHJcbiAgICAgICAgLy8gd2UgZmFsbCBiYWNrIHRvIHRoZSBjb29raWUtYmFzZWQgc3RvcmUgaWYgdGhlIHN0b3JlIGlzIHVuZGVmaW5lZFxyXG4gICAgICAgIGlmICh0aGlzLnN0b3JlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZXNbJ2Nvb2tpZSddXHJcblxyXG4gICAgICAgIHRoaXMuY29uc2VudHMgPSB0aGlzLmRlZmF1bHRDb25zZW50cyAvLyB0aGUgY29uc2VudCBzdGF0ZXMgb2YgdGhlIGNvbmZpZ3VyZWQgYXBwc1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkID0gZmFsc2UgLy8gdHJ1ZSBpZiB0aGUgdXNlciBhY3RpdmVseSBjb25maXJtZWQgaGlzL2hlciBjb25zZW50XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2UgLy8gdHJ1ZSBpZiB0aGUgYXBwIGNvbmZpZyBjaGFuZ2VkIGNvbXBhcmVkIHRvIHRoZSBjb29raWVcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHt9IC8vIGtlZXAgdHJhY2sgb2YgdGhlIGNoYW5nZSAoZW5hYmxlZCwgZGlzYWJsZWQpIG9mIGluZGl2aWR1YWwgYXBwc1xyXG4gICAgICAgIHRoaXMuZXhlY3V0ZWRPbmNlID0ge30gLy9rZWVwIHRyYWNrIG9mIHdoaWNoIGFwcHMgaGF2ZSBiZWVuIGV4ZWN1dGVkIGF0IGxlYXN0IG9uY2VcclxuICAgICAgICB0aGlzLndhdGNoZXJzID0gbmV3IFNldChbXSlcclxuICAgICAgICB0aGlzLmxvYWRDb25zZW50cygpXHJcbiAgICAgICAgdGhpcy5hcHBseUNvbnNlbnRzKClcclxuICAgICAgICB0aGlzLnNhdmVkQ29uc2VudHMgPSB7Li4udGhpcy5jb25zZW50c31cclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RvcmFnZU1ldGhvZCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zdG9yYWdlTWV0aG9kIHx8ICdjb29raWUnXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvb2tpZU5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29va2llTmFtZSB8fCAna2xhcm8nXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvb2tpZURvbWFpbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5jb29raWVEb21haW4gfHwgdW5kZWZpbmVkXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvb2tpZUV4cGlyZXNBZnRlckRheXMoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY29va2llRXhwaXJlc0FmdGVyRGF5cyB8fCAxMjBcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCh3YXRjaGVyKXtcclxuICAgICAgICBpZiAoIXRoaXMud2F0Y2hlcnMuaGFzKHdhdGNoZXIpKVxyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLmFkZCh3YXRjaGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHVud2F0Y2god2F0Y2hlcil7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcnMuaGFzKHdhdGNoZXIpKVxyXG4gICAgICAgICAgICB0aGlzLndhdGNoZXJzLmRlbGV0ZSh3YXRjaGVyKVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShuYW1lLCBkYXRhKXtcclxuICAgICAgICB0aGlzLndhdGNoZXJzLmZvckVhY2goKHdhdGNoZXIpID0+IHtcclxuICAgICAgICAgICAgd2F0Y2hlci51cGRhdGUodGhpcywgbmFtZSwgZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFwcChuYW1lKXtcclxuICAgICAgICBjb25zdCBtYXRjaGluZ0FwcHMgPSB0aGlzLmNvbmZpZy5hcHBzLmZpbHRlcihhcHA9PmFwcC5uYW1lID09PSBuYW1lKVxyXG4gICAgICAgIGlmIChtYXRjaGluZ0FwcHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoaW5nQXBwc1swXVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0Q29uc2VudChhcHApe1xyXG4gICAgICAgIGxldCBjb25zZW50ID0gYXBwLmRlZmF1bHRcclxuICAgICAgICBpZiAoY29uc2VudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjb25zZW50ID0gdGhpcy5jb25maWcuZGVmYXVsdFxyXG4gICAgICAgIGlmIChjb25zZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGNvbnNlbnQgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiBjb25zZW50XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGRlZmF1bHRDb25zZW50cygpe1xyXG4gICAgICAgIGNvbnN0IGNvbnNlbnRzID0ge31cclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuY29uZmlnLmFwcHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29uZmlnLmFwcHNbaV1cclxuICAgICAgICAgICAgY29uc2VudHNbYXBwLm5hbWVdID0gdGhpcy5nZXREZWZhdWx0Q29uc2VudChhcHApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb25zZW50c1xyXG4gICAgfVxyXG5cclxuICAgIC8vZG9uJ3QgZGVjbGluZSByZXF1aXJlZCBhcHBzXHJcbiAgICBjaGFuZ2VBbGwodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuY29uZmlnLmFwcHMubWFwKChhcHApID0+IHtcclxuICAgICAgICAgICAgaWYoYXBwLnJlcXVpcmVkIHx8IHRoaXMuY29uZmlnLnJlcXVpcmVkIHx8IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnNlbnQoYXBwLm5hbWUsIHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnNlbnQoYXBwLm5hbWUsIGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb25zZW50KG5hbWUsIHZhbHVlKXtcclxuICAgICAgICB0aGlzLmNvbnNlbnRzW25hbWVdID0gdmFsdWVcclxuICAgICAgICB0aGlzLm5vdGlmeSgnY29uc2VudHMnLCB0aGlzLmNvbnNlbnRzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3RvcmVTYXZlZENvbnNlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5jb25zZW50cyA9IHsuLi50aGlzLnNhdmVkQ29uc2VudHN9XHJcbiAgICAgICAgdGhpcy5ub3RpZnkoJ2NvbnNlbnRzJywgdGhpcy5jb25zZW50cylcclxuICAgIH1cclxuXHJcbiAgICByZXNldENvbnNlbnQoKXtcclxuICAgICAgICB0aGlzLmNvbnNlbnRzID0gdGhpcy5kZWZhdWx0Q29uc2VudHNcclxuICAgICAgICB0aGlzLmNvbmZpcm1lZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5hcHBseUNvbnNlbnRzKClcclxuICAgICAgICB0aGlzLnN0b3JlLmRlbGV0ZSgpXHJcbiAgICAgICAgdGhpcy5ub3RpZnkoJ2NvbnNlbnRzJywgdGhpcy5jb25zZW50cylcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb25zZW50KG5hbWUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnNlbnRzW25hbWVdIHx8IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgX2NoZWNrQ29uc2VudHMoKXtcclxuICAgICAgICBsZXQgY29tcGxldGUgPSB0cnVlXHJcbiAgICAgICAgY29uc3QgYXBwcyA9IG5ldyBTZXQodGhpcy5jb25maWcuYXBwcy5tYXAoKGFwcCk9PntyZXR1cm4gYXBwLm5hbWV9KSlcclxuICAgICAgICBjb25zdCBjb25zZW50cyA9IG5ldyBTZXQoT2JqZWN0LmtleXModGhpcy5jb25zZW50cykpXHJcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmNvbnNlbnRzKSl7XHJcbiAgICAgICAgICAgIGlmICghYXBwcy5oYXMoa2V5KSl7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jb25zZW50c1trZXldXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGNvbnN0IGFwcCBvZiB0aGlzLmNvbmZpZy5hcHBzKXtcclxuICAgICAgICAgICAgaWYgKCFjb25zZW50cy5oYXMoYXBwLm5hbWUpKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc2VudHNbYXBwLm5hbWVdID0gdGhpcy5nZXREZWZhdWx0Q29uc2VudChhcHApXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maXJtZWQgPSBjb21wbGV0ZVxyXG4gICAgICAgIGlmICghY29tcGxldGUpXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ29uc2VudHMoKXtcclxuICAgICAgICBjb25zdCBjb25zZW50RGF0YSA9IHRoaXMuc3RvcmUuZ2V0KCk7XHJcbiAgICAgICAgaWYgKGNvbnNlbnREYXRhICE9PSBudWxsKXtcclxuICAgICAgICAgICAgdGhpcy5jb25zZW50cyA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KGNvbnNlbnREYXRhKSlcclxuICAgICAgICAgICAgdGhpcy5fY2hlY2tDb25zZW50cygpXHJcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KCdjb25zZW50cycsIHRoaXMuY29uc2VudHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnNlbnRzXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUFuZEFwcGx5Q29uc2VudHMoKXtcclxuICAgICAgICB0aGlzLnNhdmVDb25zZW50cygpXHJcbiAgICAgICAgdGhpcy5hcHBseUNvbnNlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ29uc2VudHMoKXtcclxuICAgICAgICBjb25zdCB2ID0gZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHRoaXMuY29uc2VudHMpKVxyXG4gICAgICAgIHRoaXMuc3RvcmUuc2V0KHYpO1xyXG4gICAgICAgIHRoaXMuY29uZmlybWVkID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5zYXZlZENvbnNlbnRzID0gey4uLnRoaXMuY29uc2VudHN9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlDb25zZW50cygpe1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5jb25maWcuYXBwcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gdGhpcy5jb25maWcuYXBwc1tpXVxyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGVzW2FwcC5uYW1lXVxyXG4gICAgICAgICAgICBjb25zdCBvcHRPdXQgPSAoYXBwLm9wdE91dCAhPT0gdW5kZWZpbmVkID8gYXBwLm9wdE91dCA6ICh0aGlzLmNvbmZpZy5vcHRPdXQgfHwgZmFsc2UpKVxyXG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IChhcHAucmVxdWlyZWQgIT09IHVuZGVmaW5lZCA/IGFwcC5yZXF1aXJlZCA6ICh0aGlzLmNvbmZpZy5yZXF1aXJlZCB8fCBmYWxzZSkpXHJcbiAgICAgICAgICAgIC8vb3B0IG91dCBhbmQgcmVxdWlyZWQgYXBwcyBhcmUgYWx3YXlzIHRyZWF0ZWQgYXMgY29uZmlybWVkXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHRoaXMuY29uZmlybWVkIHx8IG9wdE91dCB8fCByZXF1aXJlZFxyXG4gICAgICAgICAgICBjb25zdCBjb25zZW50ID0gdGhpcy5nZXRDb25zZW50KGFwcC5uYW1lKSAmJiBjb25maXJtZWRcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBjb25zZW50KVxyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBcHBFbGVtZW50cyhhcHAsIGNvbnNlbnQpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXBwQ29va2llcyhhcHAsIGNvbnNlbnQpXHJcbiAgICAgICAgICAgIGlmIChhcHAuY2FsbGJhY2sgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsYmFjayhjb25zZW50LCBhcHApXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzW2FwcC5uYW1lXSA9IGNvbnNlbnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQXBwRWxlbWVudHMoYXBwLCBjb25zZW50KXtcclxuXHJcbiAgICAgICAgLy8gd2UgbWFrZSBzdXJlIHdlIGV4ZWN1dGUgdGhpcyBhcHAgb25seSBvbmNlIGlmIHRoZSBvcHRpb24gaXMgc2V0XHJcbiAgICAgICAgaWYgKGNvbnNlbnQpe1xyXG4gICAgICAgICAgICBpZiAoYXBwLm9ubHlPbmNlICYmIHRoaXMuZXhlY3V0ZWRPbmNlW2FwcC5uYW1lXSlcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB0aGlzLmV4ZWN1dGVkT25jZVthcHAubmFtZV0gPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1uYW1lPSdcIithcHAubmFtZStcIiddXCIpXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxlbGVtZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldXHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgY29uc3Qge2RhdGFzZXR9ID0gZWxlbWVudFxyXG4gICAgICAgICAgICBjb25zdCB7dHlwZX0gPSBkYXRhc2V0XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJzID0gWydocmVmJywgJ3NyYyddXHJcblxyXG4gICAgICAgICAgICAvL2lmIG5vIGNvbnNlbnQgd2FzIGdpdmVuIHdlIGRpc2FibGUgdGhpcyB0cmFja2VyXHJcbiAgICAgICAgICAgIC8vd2UgcmVtb3ZlIGFuZCBhZGQgaXQgYWdhaW4gdG8gdHJpZ2dlciBhIHJlLWV4ZWN1dGlvblxyXG5cclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ1NDUklQVCcpe1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgY3JlYXRlIGEgbmV3IHNjcmlwdCBpbnN0ZWFkIG9mIHVwZGF0aW5nIHRoZSBub2RlIGluXHJcbiAgICAgICAgICAgICAgICAvLyBwbGFjZSwgYXMgdGhlIHNjcmlwdCB3b24ndCBzdGFydCBjb3JyZWN0bHkgb3RoZXJ3aXNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YXNldCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuZGF0YXNldFtrZXldID0gZGF0YXNldFtrZXldXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnR5cGUgPSAndGV4dC9wbGFpbidcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuaW5uZXJUZXh0ID0gZWxlbWVudC5pbm5lclRleHRcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQudGV4dCA9IGVsZW1lbnQudGV4dFxyXG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5jbGFzcyA9IGVsZW1lbnQuY2xhc3NcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGVsZW1lbnQuc3R5bGVcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuaWQgPSBlbGVtZW50LmlkXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm5hbWUgPSBlbGVtZW50Lm5hbWVcclxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuZGVmZXIgPSBlbGVtZW50LmRlZmVyXHJcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFzeW5jID0gZWxlbWVudC5hc3luY1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb25zZW50KXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnR5cGUgPSB0eXBlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQuc3JjICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3JjID0gZGF0YXNldC5zcmNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vd2UgcmVtb3ZlIHRoZSBvcmlnaW5hbCBlbGVtZW50IGFuZCBpbnNlcnQgYSBuZXcgb25lXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0VsZW1lbnQsIGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsbCBvdGhlciBlbGVtZW50cyAoaW1hZ2VzIGV0Yy4pIGFyZSBtb2RpZmllZCBpbiBwbGFjZS4uLlxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnNlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBhdHRyIG9mIGF0dHJzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZGF0YXNldFthdHRyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldFsnb3JpZ2luYWwnK2F0dHJdID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc2V0WydvcmlnaW5hbCcrYXR0cl0gPSBlbGVtZW50W2F0dHJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbYXR0cl0gPSBhdHRyVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQudGl0bGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50aXRsZSA9IGRhdGFzZXQudGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldC5vcmlnaW5hbERpc3BsYXkgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGF0YXNldC5vcmlnaW5hbERpc3BsYXlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXQudGl0bGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldC5oaWRlID09PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhc2V0Lm9yaWdpbmFsRGlzcGxheSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldC5vcmlnaW5hbERpc3BsYXkgPSBlbGVtZW50LnN0eWxlLmRpc3BsYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBhdHRyIG9mIGF0dHJzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0clZhbHVlID0gZGF0YXNldFthdHRyXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0clZhbHVlID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNldFsnb3JpZ2luYWwnK2F0dHJdICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50W2F0dHJdID0gZGF0YXNldFsnb3JpZ2luYWwnK2F0dHJdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBcHBDb29raWVzKGFwcCwgY29uc2VudCl7XHJcblxyXG4gICAgICAgIGlmIChjb25zZW50KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZXNjYXBlUmVnZXhTdHIoc3RyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvWy1bXFxdL3t9KCkqKz8uXFxcXF4kfF0vZywgXCJcXFxcJCZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXBwLmNvb2tpZXMgIT09IHVuZGVmaW5lZCAmJiBhcHAuY29va2llcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgY29uc3QgY29va2llcyA9IGdldENvb2tpZXMoKVxyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDtpPGFwcC5jb29raWVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvb2tpZVBhdHRlcm4gPSBhcHAuY29va2llc1tpXVxyXG4gICAgICAgICAgICAgICAgbGV0IGNvb2tpZVBhdGgsIGNvb2tpZURvbWFpblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvb2tpZVBhdHRlcm4gaW5zdGFuY2VvZiBBcnJheSl7XHJcbiAgICAgICAgICAgICAgICAgICAgW2Nvb2tpZVBhdHRlcm4sIGNvb2tpZVBhdGgsIGNvb2tpZURvbWFpbl0gPSBjb29raWVQYXR0ZXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIShjb29raWVQYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llUGF0dGVybiA9IG5ldyBSZWdFeHAoJ14nK2VzY2FwZVJlZ2V4U3RyKGNvb2tpZVBhdHRlcm4pKyckJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8Y29va2llcy5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2pdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjb29raWVQYXR0ZXJuLmV4ZWMoY29va2llLm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkRlbGV0aW5nIGNvb2tpZTpcIiwgY29va2llLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1hdGNoZWQgcGF0dGVybjpcIiwgY29va2llUGF0dGVybixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGF0aDpcIiwgY29va2llUGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRG9tYWluOlwiLCBjb29raWVEb21haW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUNvb2tpZShjb29raWUubmFtZSwgY29va2llUGF0aCwgY29va2llRG9tYWluKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8qIGdsb2JhbHMgbW9kdWxlLCByZXF1aXJlLCBWRVJTSU9OICovXHJcblxyXG4vLyBXaGVuIHdlYnBhY2sncyBob3QgbG9hZGluZyBpcyBlbmFibGVkLCBlbmFibGUgUHJlYWN0J3Mgc3VwcG9ydCBmb3IgdGhlXHJcbi8vIFJlYWN0IERldiBUb29scyBicm93c2VyIGV4dGVuc2lvbi5cclxuaWYobW9kdWxlLmhvdCkgcmVxdWlyZSgncHJlYWN0L2RlYnVnJylcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFwcCBmcm9tICdjb21wb25lbnRzL2FwcC5qcydcclxuaW1wb3J0IENvbnNlbnRNYW5hZ2VyIGZyb20gJ2NvbnNlbnQtbWFuYWdlcidcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICd0cmFuc2xhdGlvbnMnXHJcbmltcG9ydCB7Y29udmVydFRvTWFwLCB1cGRhdGV9IGZyb20gJ3V0aWxzL21hcHMnXHJcbmltcG9ydCB7dCwgbGFuZ3VhZ2V9IGZyb20gJ3V0aWxzL2kxOG4nXHJcbmltcG9ydCBjdXJyZW50RXhlY3V0aW5nU2NyaXB0IGZyb20gJ2N1cnJlbnQtZXhlY3V0aW5nLXNjcmlwdCc7XHJcblxyXG5jb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0IHx8IGN1cnJlbnRFeGVjdXRpbmdTY3JpcHQoKTtcclxuY29uc3Qgb3JpZ2luYWxPbkxvYWQgPSB3aW5kb3cub25sb2FkXHJcbmNvbnN0IGNvbnZlcnRlZFRyYW5zbGF0aW9ucyA9IGNvbnZlcnRUb01hcCh0cmFuc2xhdGlvbnMpXHJcbmNvbnN0IGNvbmZpZ05hbWUgPSBzY3JpcHQuZGF0YXNldC5jb25maWcgfHwgXCJrbGFyb0NvbmZpZ1wiXHJcbmNvbnN0IG5vQXV0b0xvYWQgPSBzY3JpcHQuZGF0YXNldC5ub0F1dG9Mb2FkID09PSBcInRydWVcIlxyXG5jb25zdCBzdHlsZVByZWZpeCA9IHNjcmlwdC5kYXRhc2V0LnN0eWxlUHJlZml4IHx8IFwia2xhcm9cIlxyXG5jb25zdCBjb25maWcgPSB3aW5kb3dbY29uZmlnTmFtZV1cclxuY29uc3QgbWFuYWdlcnMgPSB7fVxyXG5cclxud2luZG93Lm9ubG9hZCA9IGluaXRpYWxpemVcclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgICBpZiAoIW5vQXV0b0xvYWQpXHJcbiAgICAgICAgcmVuZGVyS2xhcm8oY29uZmlnKVxyXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50SUQoY29uZmlnKXtcclxuICAgIHJldHVybiBjb25maWcuZWxlbWVudElEIHx8ICdrbGFybydcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudChjb25maWcpe1xyXG4gICAgY29uc3QgaWQgPSBnZXRFbGVtZW50SUQoY29uZmlnKVxyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgIGlmIChlbGVtZW50ID09PSBudWxsKXtcclxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBlbGVtZW50LmlkID0gaWRcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2xhdGlvbnMoY29uZmlnKXtcclxuICAgIGNvbnN0IHRyYW5zID0gbmV3IE1hcChbXSlcclxuICAgIHVwZGF0ZSh0cmFucywgY29udmVydGVkVHJhbnNsYXRpb25zKVxyXG4gICAgdXBkYXRlKHRyYW5zLCBjb252ZXJ0VG9NYXAoY29uZmlnLnRyYW5zbGF0aW9ucyB8fCB7fSkpXHJcbiAgICByZXR1cm4gdHJhbnNcclxufVxyXG5cclxubGV0IGNudCA9IDFcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJLbGFybyhjb25maWcsIHNob3cpe1xyXG4gICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgLy8gd2UgYXJlIHVzaW5nIGEgY291bnQgaGVyZSBzbyB0aGF0IHdlJ3JlIGFibGUgdG8gcmVwZWF0ZWRseSBvcGVuIHRoZSBtb2RhbC4uLlxyXG4gICAgbGV0IHNob3dDbnQgPSAwXHJcbiAgICBpZiAoc2hvdylcclxuICAgICAgICBzaG93Q250ID0gY250KytcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZylcclxuICAgIGNvbnN0IHRyYW5zID0gZ2V0VHJhbnNsYXRpb25zKGNvbmZpZylcclxuICAgIGNvbnN0IG1hbmFnZXIgPSBnZXRNYW5hZ2VyKGNvbmZpZylcclxuICAgIGNvbnN0IGxhbmcgPSBjb25maWcubGFuZyB8fCBsYW5ndWFnZSgpXHJcbiAgICBjb25zdCB0dCA9ICguLi5hcmdzKSA9PiB7cmV0dXJuIHQodHJhbnMsIGxhbmcsIC4uLmFyZ3MpfVxyXG4gICAgY29uc3QgYXBwID0gcmVuZGVyKDxBcHAgdD17dHR9XHJcbiAgICAgICAgc3R5bGVQcmVmaXg9e3N0eWxlUHJlZml4fVxyXG4gICAgICAgIG1hbmFnZXI9e21hbmFnZXJ9XHJcbiAgICAgICAgY29uZmlnPXtjb25maWd9XHJcbiAgICAgICAgc2hvdz17c2hvd0NudH0gLz4sIGVsZW1lbnQpXHJcbiAgICByZXR1cm4gYXBwXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKGUpe1xyXG4gICAgaWYgKCFub0F1dG9Mb2FkKVxyXG4gICAgICAgIHJlbmRlcktsYXJvKGNvbmZpZylcclxuICAgIGlmIChvcmlnaW5hbE9uTG9hZCAhPT0gbnVsbCl7XHJcbiAgICAgICAgb3JpZ2luYWxPbkxvYWQoZSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hbmFnZXIoY29uZil7XHJcbiAgICBjb25mID0gY29uZiB8fCBjb25maWdcclxuICAgIGNvbnN0IG5hbWUgPSBnZXRFbGVtZW50SUQoY29uZilcclxuICAgIGlmIChtYW5hZ2Vyc1tuYW1lXSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIG1hbmFnZXJzW25hbWVdID0gbmV3IENvbnNlbnRNYW5hZ2VyKGNvbmYpXHJcbiAgICByZXR1cm4gbWFuYWdlcnNbbmFtZV1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3coY29uZil7XHJcbiAgICBjb25mID0gY29uZiB8fCBjb25maWdcclxuICAgIHJlbmRlcktsYXJvKGNvbmYsIHRydWUpXHJcbiAgICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlcnNpb24oKXtcclxuICAgIHJldHVybiBWRVJTSU9OXHJcbn1cclxuXHJcbmV4cG9ydCB7bGFuZ3VhZ2V9XHJcbiIsImltcG9ydCB7Z2V0Q29va2llLCBzZXRDb29raWUsIGRlbGV0ZUNvb2tpZX0gZnJvbSAndXRpbHMvY29va2llcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDb29raWVTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5jb29raWVOYW1lID0gbWFuYWdlci5jb29raWVOYW1lXHJcbiAgICAgICAgdGhpcy5jb29raWVEb21haW4gPSBtYW5hZ2VyLmNvb2tpZURvbWFpblxyXG4gICAgICAgIHRoaXMuY29va2llRXhwaXJlc0FmdGVyRGF5cyA9IG1hbmFnZXIuY29va2llRXhwaXJlc0FmdGVyRGF5c1xyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICBjb25zdCBjb29raWUgPSBnZXRDb29raWUodGhpcy5jb29raWVOYW1lKTtcclxuICAgICAgICByZXR1cm4gY29va2llXHJcbiAgICAgICAgICAgID8gY29va2llLnZhbHVlXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gc2V0Q29va2llKHRoaXMuY29va2llTmFtZSwgdmFsdWUsIHRoaXMuY29va2llRXhwaXJlc0FmdGVyRGF5cywgdGhpcy5jb29raWVEb21haW4pXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlKCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGVDb29raWUodGhpcy5jb29raWVOYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZVN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLmtleSA9IG1hbmFnZXIuY29va2llTmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZXMgPSB7XHJcbiAgICAnY29va2llJzogQ29va2llU3RvcmUsXHJcbiAgICAnbG9jYWxTdG9yYWdlJzogTG9jYWxTdG9yYWdlU3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVzXHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWFjacOzIHF1ZSByZWNvcGlsZW1cIixcImRlc2NyaXB0aW9uXCI6XCJBcXXDrSBwb2RldSB2ZXVyZSBpIHBlcnNvbmFsaXR6YXIgbGEgaW5mb3JtYWNpw7MgcXVlIHJlY29waWxlbSBzb2JyZSB2w7NzLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbMOtdGljYSBkZSBwcml2YWRlc2FcIixcInRleHRcIjpcIlBlciBhIG3DqXMgaW5mb3JtYWNpw7MsIGNvbnN1bHRldSBsYSBub3N0cmEge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkhpIGhhIGhhZ3V0IGNhbnZpcyBkZXMgZGUgbGEgdm9zdHJhIGRhcnJlcmEgdmlzaXRhLiBBY3R1YWxpdHpldSBlbCB2b3N0cmUgY29uc2VudGltZW50LlwiLFwiZGVzY3JpcHRpb25cIjpcIlJlY29waWxlbSBpIHByb2Nlc3NlbSBsYSB2b3N0cmEgaW5mb3JtYWNpw7MgcGVyc29uYWwgYW1iIGxlcyBzZWfDvGVudHMgZmluYWxpdGF0czoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiU2FiZXItbmUgbcOpc1wifSxcIm9rXCI6XCJBY2NlcHRhXCIsXCJzYXZlXCI6XCJEZXNhXCIsXCJkZWNsaW5lXCI6XCJSZWJ1dGphXCIsXCJjbG9zZVwiOlwiVGFuY2FcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiSGFiaWxpdGEvZGVzaGFiaWxpdGEgdG90ZXMgbGVzIGFwbGljYWNpb25zXCIsXCJkZXNjcmlwdGlvblwiOlwiVXNldSBhcXVlc3QgYm90w7MgcGVyIGEgaGFiaWxpdGFyIG8gZGVzaGFiaWxpdGFyIHRvdGVzIGxlcyBhcGxpY2FjaW9ucy5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiQXF1ZXN0YSBhcGxpY2FjacOzIGVzIGNhcnJlZ2EgcGVyIGRlZmVjdGUsIHBlcsOyIHBvZGV1IGRlc2FjdGl2YXItbGFcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIobmVjZXNzw6ByaWEpXCIsXCJkZXNjcmlwdGlvblwiOlwiQXF1ZXN0YSBhcGxpY2FjacOzIGVzIG5lY2Vzc2l0YSBzZW1wcmVcIn0sXCJwdXJwb3Nlc1wiOlwiRmluYWxpdGF0c1wiLFwicHVycG9zZVwiOlwiRmluYWxpdGF0XCJ9LFwicG93ZXJlZEJ5XCI6XCJGdW5jaW9uYSBhbWIgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiRGF0ZW5zY2h1dHplaW5zdGVsbHVuZ2VuXCIsXCJkZXNjcmlwdGlvblwiOlwiV2lyIG51dHplbiBDb29raWVzIGF1ZiB1bnNlcmVyIFdlYnNpdGUuIEVpbmlnZSB2b24gaWhuZW4gc2luZCBlc3NlbnppZWxsLCB3w6RocmVuZCBhbmRlcmUgdW5zIGhlbGZlbiwgZGllc2UgV2Vic2l0ZSB1bmQgSWhyZSBFcmZhaHJ1bmcgenUgdmVyYmVzc2Vybi5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJEYXRlbnNjaHV0emVya2zDpHJ1bmdcIixcInRleHRcIjpcIntwcml2YWN5UG9saWN5fVxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1widGl0bGVcIjpcIkRhdGVuc2NodXR6ZWluc3RlbGx1bmdlblwiLFwiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkVzIGdhYiDDhG5kZXJ1bmdlbiBzZWl0IElocmVtIGxldHp0ZW4gQmVzdWNoLCBiaXR0ZSBha3R1YWxpc2llcmVuIFNpZSBJaHJlIEF1c3dhaGwuXCIsXCJkZXNjcmlwdGlvblwiOlwiV2lyIG51dHplbiBDb29raWVzIGF1ZiB1bnNlcmVyIFdlYnNpdGUuIEVpbmlnZSB2b24gaWhuZW4gc2luZCBlc3NlbnppZWxsLCB3w6RocmVuZCBhbmRlcmUgdW5zIGhlbGZlbiwgZGllc2UgV2Vic2l0ZSB1bmQgSWhyZSBFcmZhaHJ1bmcgenUgdmVyYmVzc2Vybi5cXG5cIixcImxlYXJuTW9yZVwiOlwiTWVociBlcmZhaHJlblwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiU3BlaWNoZXJuXCIsXCJkZWNsaW5lXCI6XCJOdXIgZXNzZW50aWVsbGUgQ29va2llcyBha3plcHRpZXJlblwiLFwiY2xvc2VcIjpcIlNjaGxpZcOfZW5cIixcImFjY2VwdEFsbFwiOlwiQWxsZSBha3plcHRpZXJlblwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJBbGxlIEFud2VuZHVuZ2VuIGFrdGl2aWVyZW4vZGVha3RpdmllcmVuXCIsXCJkZXNjcmlwdGlvblwiOlwiTnV0emVuIFNpZSBkaWVzZW4gU2NoYWx0ZXIgdW0gYWxsZSBBcHBzIHp1IGFrdGl2aWVyZW4vZGVha3RpdmllcmVuLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIoT3B0LU91dClcIixcImRlc2NyaXB0aW9uXCI6XCJEaWVzZSBBbndlbmR1bmcgd2lyZCBzdGFuZGFyZG3DpMOfaWcgZ2VsYWRlbiAoU2llIGvDtm5uZW4gZGllc2UgYWJlciBkZWFrdGl2aWVyZW4pXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKGltbWVyIG5vdHdlbmRpZylcIixcImRlc2NyaXB0aW9uXCI6XCJEaWVzZSBBbndlbmR1bmcgd2lyZCBpbW1lciBiZW7DtnRpZ3RcIn0sXCJwdXJwb3Nlc1wiOlwiWndlY2tlXCIsXCJwdXJwb3NlXCI6XCJad2Vja1wifSxcInBvd2VyZWRCeVwiOlwiUmVhbGlzaWVydCBtaXQgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwizqDOu863z4HOv8+Gzr/Pgc6vzrXPgiDPgM6/z4Ugz4PPhc67zrvOrc6zzr/Phc68zrVcIixcImRlc2NyaXB0aW9uXCI6XCLOlc60z44gzrzPgM6/z4HOtc6vz4Igzr3OsSDOtM61zrnPgiDOus6xzrkgzr3OsSDPgc+FzrjOvM6vz4POtc65z4Igz4TOuc+CIM+AzrvOt8+Bzr/Phs6/z4HOr861z4Igz4DOv8+FIM+Dz4XOu867zq3Os86/z4XOvM61IM+Dz4fOtc+EzrnOus6sIM68zrUgzrXPg86tzr3OsVxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcIs6gzr/Ou865z4TOuc66zq4gzpHPgM6/z4HPgc6uz4TOv8+FXCIsXCJ0ZXh0XCI6XCLOk865zrEgz4DOtc+BzrnPg8+Dz4zPhM61z4HOtc+CIM+AzrvOt8+Bzr/Phs6/z4HOr861z4IsIM+AzrHPgc6xzrrOsc67z44gzrTOuc6xzrLOrM+Dz4TOtSDPhM63zr0ge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIs6gz4HOsc6zzrzOsc+Ezr/PgM6/zrnOrs64zrfOus6xzr0gzrHOu867zrHOs86tz4IgzrzOtc+Ezqwgz4TOt869IM+EzrXOu861z4XPhM6xzq/OsSDPg86xz4IgzrXPgM6vz4POus61z4jOtyDPgM6xz4HOsc66zrHOu86/z43OvM61IM6xzr3Osc69zrXPjs+Dz4TOtSDPhM63zr0gz4PPhc6zzrrOsc+EzqzOuM61z4POtyDPg86xz4JcIixcImRlc2NyaXB0aW9uXCI6XCLOo8+FzrPOus61zr3PhM+Bz47Ovc6/z4XOvM61IM66zrHOuSDOtc+AzrXOvs61z4HOs86xzrbPjM68zrHPg8+EzrUgz4TOsSDPgM+Bzr/Pg8+Jz4DOuc66zqwgzrTOtc60zr/OvM6tzr3OsSDPg86xz4IgzrPOuc6xIM+Ezr/Phc+CIM+AzrHPgc6xzrrOrM+Ez4kgzrvPjM6zzr/Phc+COiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCLOoM61z4HOuc+Dz4PPjM+EzrXPgc6xXCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCLOkc+Azr/OuM6uzrrOtc+Fz4POt1wiLFwiZGVjbGluZVwiOlwizpHPgM+Mz4HPgc65z4DPhM+JXCIsXCJjbG9zZVwiOlwizprOu861zq/Pg865zrzOv1wiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCLOk865zrEgz4zOu861z4Igz4TOuc+CIM61z4bOsc+BzrzOv86zzq3PglwiLFwiZGVzY3JpcHRpb25cIjpcIs6nz4HOt8+DzrnOvM6/z4DOv86vzrfPg861IM6xz4XPhM+MIM+Ezr/OvSDOtM65zrHOus+Mz4DPhM63IM6zzrnOsSDOvc6xIM61zr3Otc+BzrPOv8+Azr/Ouc6uz4POtc65z4IvzrHPgM61zr3Otc+BzrPOv8+Azr/Ouc6uz4POtc65z4Igz4zOu861z4Igz4TOuc+CIM61z4bOsc+BzrzOv86zzq3PglwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIozrzOtyDOsc+AzrHOuc+Ezr/Pjc68zrXOvc6/KVwiLFwiZGVzY3JpcHRpb25cIjpcIs6Vzq/Ovc6xzrkgz4DPgc6/zrrOsc64zr/Pgc65z4POvM6tzr3OvyDOvc6xIM+Gzr/Pgc+Ez47Ovc61z4TOsc65LCDOrM67zrvOsSDOvM+Azr/Pgc61zq8gzr3OsSDPgM6xz4HOsc67zrfPhs64zrXOr1wifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIijOsc+AzrHOuc+Ezr/Pjc68zrXOvc6/KVwiLFwiZGVzY3JpcHRpb25cIjpcIs6UzrXOvSDOs86vzr3Otc+EzrHOuSDOvc6xIM67zrXOuc+Ezr/Phc+BzrPOrs+DzrXOuSDPg8+Jz4PPhM6sIM63IM61z4bOsc+BzrzOv86zzq4gz4fPic+Bzq/PgiDOsc+Fz4TPjFwifSxcInB1cnBvc2VzXCI6XCLOo866zr/PgM6/zq9cIixcInB1cnBvc2VcIjpcIs6jzrrOv8+Az4zPglwifSxcInBvd2VyZWRCeVwiOlwizqXPgM6/z4PPhM63z4HOr862zrXPhM6xzrkgzrHPgM+MIM+Ezr8gS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYXRpb24gdGhhdCB3ZSBjb2xsZWN0XCIsXCJkZXNjcmlwdGlvblwiOlwiSGVyZSB5b3UgY2FuIHNlZSBhbmQgY3VzdG9taXplIHRoZSBpbmZvcm1hdGlvbiB0aGF0IHdlIGNvbGxlY3QgYWJvdXQgeW91LlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInByaXZhY3kgcG9saWN5XCIsXCJ0ZXh0XCI6XCJUbyBsZWFybiBtb3JlLCBwbGVhc2UgcmVhZCBvdXIge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIlRoZXJlIHdlcmUgY2hhbmdlcyBzaW5jZSB5b3VyIGxhc3QgdmlzaXQsIHBsZWFzZSB1cGRhdGUgeW91ciBjb25zZW50LlwiLFwiZGVzY3JpcHRpb25cIjpcIldlIGNvbGxlY3QgYW5kIHByb2Nlc3MgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBmb3IgdGhlIGZvbGxvd2luZyBwdXJwb3Nlczoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiQ3VzdG9taXplXCJ9LFwib2tcIjpcIkFjY2VwdFwiLFwic2F2ZVwiOlwiU2F2ZVwiLFwiZGVjbGluZVwiOlwiRGVjbGluZVwiLFwiY2xvc2VcIjpcIkNsb3NlXCIsXCJhY2NlcHRBbGxcIjpcIkFjY2VwdCBhbGxcIixcImFjY2VwdFNlbGVjdGVkXCI6XCJBY2NlcHQgc2VsZWN0ZWRcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiVG9nZ2xlIGFsbCBhcHBzXCIsXCJkZXNjcmlwdGlvblwiOlwiVXNlIHRoaXMgc3dpdGNoIHRvIGVuYWJsZS9kaXNhYmxlIGFsbCBhcHBzLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob3B0LW91dClcIixcImRlc2NyaXB0aW9uXCI6XCJUaGlzIGFwcCBpcyBsb2FkZWQgYnkgZGVmYXVsdCAoYnV0IHlvdSBjYW4gb3B0IG91dClcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoYWx3YXlzIHJlcXVpcmVkKVwiLFwiZGVzY3JpcHRpb25cIjpcIlRoaXMgYXBwbGljYXRpb24gaXMgYWx3YXlzIHJlcXVpcmVkXCJ9LFwicHVycG9zZXNcIjpcIlB1cnBvc2VzXCIsXCJwdXJwb3NlXCI6XCJQdXJwb3NlXCJ9LFwicG93ZXJlZEJ5XCI6XCJQb3dlcmVkIGJ5IEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWFjacOzbiBxdWUgcmVjb3BpbGFtb3NcIixcImRlc2NyaXB0aW9uXCI6XCJBcXXDrSBwdWVkZSB2ZXIgeSBwZXJzb25hbGl6YXIgbGEgaW5mb3JtYWNpw7NuIHF1ZSByZWNvcGlsYW1vcyBzb2JyZSB1c3RlZC5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwb2zDrXRpY2EgZGUgcHJpdmFjaWRhZFwiLFwidGV4dFwiOlwiUGFyYSBtw6FzIGluZm9ybWFjacOzbiBjb25zdWx0ZSBudWVzdHJhIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJIYSBoYWJpZG8gY2FtYmlvcyBkZXNkZSBzdSDDumx0aW1hIHZpc2l0YSwgcG9yIGZhdm9yLCBhY3R1YWxpY2Ugc3UgY29uc2VudGltaWVudG8uXCIsXCJkZXNjcmlwdGlvblwiOlwiUmVjb3BpbGFtb3MgeSBwcm9jZXNhbW9zIHN1IGluZm9ybWFjacOzbiBwZXJzb25hbCBjb24gbG9zIHNpZ3VpZW50ZXMgZmluZXM6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIk3DoXMgaW5mb3JtYWNpw7NuXCJ9LFwib2tcIjpcIkFjZXB0YXJcIixcInNhdmVcIjpcIkd1YXJkYXJcIixcImRlY2xpbmVcIjpcIlJlY2hhemFyXCIsXCJjbG9zZVwiOlwiQ2VycmFyXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkhhYmlsaXRhci9kZXNoYWJpbGl0YXIgdG9kYXMgbGFzIGFwbGljYWNpb25lc1wiLFwiZGVzY3JpcHRpb25cIjpcIlVzZSBlc3RlIGJvdMOzbiBwYXJhIGhhYmlsaXRhciBvIGRlc2hhYmlsaXRhciB0b2RhcyBsYXMgYXBsaWNhY2lvbmVzLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob3B0LW91dClcIixcImRlc2NyaXB0aW9uXCI6XCJFc3RhIGFwbGljYWNpw7NuIHNlIGNhcmdhIGRlIGZvcm1hIHByZWRldGVybWluYWRhIChwZXJvIHB1ZWRlIGRlc2FjdGl2YXJsYSlcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIobmVjZXNhcmlhKVwiLFwiZGVzY3JpcHRpb25cIjpcIkVzdGEgYXBsaWNhY2nDs24gc2UgbmVjZXNpdGEgc2llbXByZVwifSxcInB1cnBvc2VzXCI6XCJGaW5lc1wiLFwicHVycG9zZVwiOlwiRmluXCJ9LFwicG93ZXJlZEJ5XCI6XCJQb3dlcmVkIGJ5IEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIktlcsOkw6Rtw6RtbWUgdGllZG90XCIsXCJkZXNjcmlwdGlvblwiOlwiVm9pdCB0YXJrYXN0ZWxsYSBqYSBtdW9rYXRhIHNpbnVzdGEga2Vyw6TDpG1pw6RtbWUgdGlldG9qYS5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJ0aWV0b3N1b2phc2l2dWx0YW1tZVwiLFwidGV4dFwiOlwiVm9pdCBsdWtlYSBsaXPDpHRpZXRvamEge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIk9sZW1tZSB0ZWhuZWV0IG11dXRva3NpYSBlaHRvaWhpbiB2aWltZSB2aWVyYWlsdXNpIGrDpGxrZWVuLCB0YXJraXN0YSBlaGRvdC5cIixcImRlc2NyaXB0aW9uXCI6XCJLZXLDpMOkbW1lIGphIGvDpHNpdHRlbGVtbWUgaGVua2lsw7Z0aWV0b2phIHNldXJhYXZpaW4gdGFya29pdHVrc2lpbjoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiTHVlIGxpc8Okw6RcIn0sXCJva1wiOlwiSHl2w6Rrc3lcIixcInNhdmVcIjpcIlRhbGxlbm5hXCIsXCJkZWNsaW5lXCI6XCJIeWxrw6TDpFwiLFwiY2xvc2VcIjpcIlN1bGplXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIlZhbGl0c2Uga2Fpa2tpXCIsXCJkZXNjcmlwdGlvblwiOlwiQWt0aXZvaSBrYWlra2kgcMOkw6RsbGUvcG9pcy5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKGxhZGF0YWFuIG9sZXR1a3NlbmEpXCIsXCJkZXNjcmlwdGlvblwiOlwiTGFkYXRhYW4gb2xldHVrc2VuYSAobXV0dGEgdm9pdCBvdHRhYSBzZW4gcG9pcyBww6TDpGx0w6QpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKHZhYWRpdGFhbilcIixcImRlc2NyaXB0aW9uXCI6XCJTaXZ1c3RvIHZhYXRpaSB0w6Rtw6RuIGFpbmFcIn0sXCJwdXJwb3Nlc1wiOlwiS8OkeXR0w7Z0YXJrb2l0dWtzZXRcIixcInB1cnBvc2VcIjpcIkvDpHl0dMO2dGFya29pdHVzXCJ9LFwicG93ZXJlZEJ5XCI6XCJQYWx2ZWx1biB0YXJqb2FhIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkxlcyBpbmZvcm1hdGlvbnMgcXVlIG5vdXMgY29sbGVjdG9uc1wiLFwiZGVzY3JpcHRpb25cIjpcIkljaSwgdm91cyBwb3V2ZXogdm9pciBldCBwZXJzb25uYWxpc2VyIGxlcyBpbmZvcm1hdGlvbnMgcXVlIG5vdXMgY29sbGVjdG9ucyBzdXIgdm91cy5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwb2xpdGlxdWUgZGUgY29uZmlkZW50aWFsaXTDqVwiLFwidGV4dFwiOlwiUG91ciBlbiBzYXZvaXIgcGx1cywgbWVyY2kgZGUgbGlyZSBub3RyZSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiRGVzIG1vZGlmaWNhdGlvbnMgb250IGV1IGxpZXUgZGVwdWlzIHZvdHJlIGRlcm5pw6hyZSB2aXNpdGUsIG1lcmNpIGRlIG1ldHRyZSDDoCBqb3VyIHZvdHJlIGNvbnNlbnRlbWVudC5cIixcImRlc2NyaXB0aW9uXCI6XCJOb3VzIGNvbGxlY3RvbnMgZXQgdHJhaXRvbnMgdm9zIGluZm9ybWF0aW9ucyBwZXJzb25uZWxsZXMgZGFucyBsZSBidXQgc3VpdmFudCA6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkVuIHNhdm9pciBwbHVzXCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCJTYXV2ZWdhcmRlclwiLFwiZGVjbGluZVwiOlwiUmVmdXNlclwiLFwiY2xvc2VcIjpcIkZlcm1lclwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJDaGFuZ2VyIHRvdXRlcyBsZXMgb3B0aW9uc1wiLFwiZGVzY3JpcHRpb25cIjpcIlV0aWxpc2VyIGNlIGJvdXRvbiBwb3VyIGFjdGl2ZXIvZMOpc2FjdGl2ZXIgdG91dGVzIGxlcyBvcHRpb25zXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvcHQtb3V0KVwiLFwiZGVzY3JpcHRpb25cIjpcIkNldHRlIGFwcGxpY2F0aW9uIGVzdCBjaGFyZ8OpZSBwYXIgZMOpZmF1dCAobWFpcyB2b3VzIHBvdXZleiBsYSBkw6lzYWN0aXZlcilcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIodG91am91cnMgcmVxdWlzKVwiLFwiZGVzY3JpcHRpb25cIjpcIkNldHRlIGFwcGxpY2F0aW9uIGVzdCB0b3Vqb3VycyByZXF1aXNlXCJ9LFwicHVycG9zZXNcIjpcIlV0aWxpc2F0aW9uc1wiLFwicHVycG9zZVwiOlwiVXRpbGlzYXRpb25cIn0sXCJwb3dlcmVkQnlcIjpcIlByb3B1bHPDqSBwYXIgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYWNpamUga29qZSBwcmlrdXBsamFtb1wiLFwiZGVzY3JpcHRpb25cIjpcIk92ZGplIG1vxb5ldGUgdmlkamV0aSBpIHBvZGVzaXRpIGluZm9ybWFjaWplIGtvamUgcHJpa3VwbGphbW8gbyBWYW1hLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInByYXZpbGEgcHJpdmF0bm9zdGlcIixcInRleHRcIjpcIlphIHZpxaFlIGluZm9ybWFjaWplIHByb8SNaXRhanRlIG5hxaFhIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJEb8WhbG8gamUgZG8gcHJvbWplbmEgb2QgVmHFoWUgcG9zbGplZG5qZWcgcG9zamXEh2l2YW5qYSB3ZWIgc3RyYW5pY2UsIG1vbGltbyBWYXMgZGEgYcW+dXJpcmF0ZSBzdm9qYSBvZG9icmVuamEuXCIsXCJkZXNjcmlwdGlvblwiOlwiTWkgcHJpa3VwbGphbW8gaSBwcm9jZXNpcmFtbyBWYcWhZSBvc29ibmUgcG9kYXRrZSByYWRpIHNsaWplZGXEh2VnOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCJTYXpuYWp0ZSB2acWhZVwifSxcIm9rXCI6XCJVIHJlZHVcIixcInNhdmVcIjpcIlNwcmVtaVwiLFwiZGVjbGluZVwiOlwiT2RiaWpcIixcImNsb3NlXCI6XCJaYXR2b3JpXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkl6bWVpamVuaSBzdmVcIixcImRlc2NyaXB0aW9uXCI6XCJLb3Jpc3RpdGUgb3ZhaiBwcmVraWRhxI0gZGEgb21vZ3XEh2l0ZS9vbmVtb2d1xIdpdGUgc3ZlIGFwbGlrYWNpamUgb2RqZWRub20uXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvbmVtb2d1xIdpdGUpXCIsXCJkZXNjcmlwdGlvblwiOlwiT3ZhIGFwbGlrYWNpamEgamUgdcSNaXRhbmEgYXV0b21hdHNraSAoYWxpIGplIG1vxb5ldGUgb25lbW9ndcSHaXRpKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihvYmF2ZXpuYSlcIixcImRlc2NyaXB0aW9uXCI6XCJPdmEgYXBsaWthY2lqYSBqZSB1dmlqZWsgb2JhdmV6bmEuXCJ9LFwicHVycG9zZXNcIjpcIlN2cmhlXCIsXCJwdXJwb3NlXCI6XCJTdnJoYVwifSxcInBvd2VyZWRCeVwiOlwiUG9rcmXEh2UgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3Jtw6FjacOzaywgYW1pa2V0IGd5xbFqdMO8bmtcIixcImRlc2NyaXB0aW9uXCI6XCJJdHQgbMOhdGhhdG9kIMOpcyB0ZXN0cmVzemFiaGF0b2QgYXogcsOzbGFkIGd5xbFqdMO2dHQgaW5mb3Jtw6FjacOza2F0LlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcImFkYXR2w6lkZWxtaSBpcsOhbnllbHZlaW5rZXRcIixcInRleHRcIjpcIlRvdsOhYmJpIGluZm9ybcOhY2nDs8OpcnQga8OpcmrDvGssIG9sdmFzc2QgZWwgYXoge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkF6IHV0b2xzw7MgbMOhdG9nYXTDoXMgw7N0YSB2w6FsdG96w6Fzb2sgdMO2cnTDqW50ZWssIGvDqXJqw7xrLCBmcmlzc8OtdHNkIGEgaG96esOhasOhcnVsw6Fzb2RhdC5cIixcImRlc2NyaXB0aW9uXCI6XCJBeiBzemVtw6lseWVzIGFkYXRhaWRhdCDDtnNzemVnecWxanRqw7xrIMOpcyBmZWxkb2xnb3p6dWsgYXogYWzDoWJiaSBjw6lsb2tyYToge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiVHVkaiBtZWcgdMO2YmJldFwifSxcIm9rXCI6XCJFbGZvZ2FkXCIsXCJzYXZlXCI6XCJTYXZlXCIsXCJkZWNsaW5lXCI6XCJNZW50w6lzXCIsXCJjbG9zZVwiOlwiRWx2ZXRcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiw5Zzc3plcyBhcHAgw6F0a2FwY3NvbMOhc2FcIixcImRlc2NyaXB0aW9uXCI6XCJIYXN6bsOhbGQgZXp0IGEga2FwY3NvbMOzdCBheiDDtnNzemVzIGFsa2FsbWF6w6FzIGVuZ2Vkw6lseWV6w6lzw6loZXovbGV0aWx0w6Fzw6Fob3ouXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihsZWlyYXRrb3rDoXMpXCIsXCJkZXNjcmlwdGlvblwiOlwiRXogYXogYWxrYWxtYXrDoXMgYWxhcMOpcnRlbG1lesOpcyBzemVyaW50IGJldMO2bHTDtnR0IChkZSBraSBsZWhldCBrYXBjc29sbmkpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKG1pbmRpZyBrw7Z0ZWxlesWRKVwiLFwiZGVzY3JpcHRpb25cIjpcIkV6IGF6IGFsa2FsbWF6w6FzIG1pbmRpZyBrw7Z0ZWxlesWRXCJ9LFwicHVycG9zZXNcIjpcIkPDqWxva1wiLFwicHVycG9zZVwiOlwiQ8OpbFwifSxcInBvd2VyZWRCeVwiOlwiUG93ZXJlZCBieSBLbGFybyFcIn0iLCIvLyBUbyBjcmVhdGUgYSBuZXcgdHJhbnNsYXRpb24sIGFkZCBhIFlBTUwgZmlsZSB3aXRoIHRoZSByZXF1aXJlZCBlbnRyaWVzIGFuZFxyXG4vLyBsaW5rIGl0IGhlcmUgdXNpbmcgdGhlIGFwcHJvcHJpYXRlIGxhbmd1YWdlIGNvZGUuXHJcblxyXG5pbXBvcnQgY2EgZnJvbSAnLi9jYS55bWwnXHJcbmltcG9ydCBkZSBmcm9tICcuL2RlLnltbCdcclxuaW1wb3J0IGVsIGZyb20gJy4vZWwueW1sJ1xyXG5pbXBvcnQgZW4gZnJvbSAnLi9lbi55bWwnXHJcbmltcG9ydCBlcyBmcm9tICcuL2VzLnltbCdcclxuaW1wb3J0IGZpIGZyb20gJy4vZmkueW1sJ1xyXG5pbXBvcnQgZnIgZnJvbSAnLi9mci55bWwnXHJcbmltcG9ydCBodSBmcm9tICcuL2h1LnltbCdcclxuaW1wb3J0IGhyIGZyb20gJy4vaHIueW1sJ1xyXG5pbXBvcnQgaXQgZnJvbSAnLi9pdC55bWwnXHJcbmltcG9ydCBubCBmcm9tICcuL25sLnltbCdcclxuaW1wb3J0IG5vIGZyb20gJy4vbm8ueW1sJ1xyXG5pbXBvcnQgcm8gZnJvbSAnLi9yby55bWwnXHJcbmltcG9ydCBzciBmcm9tICcuL3NyLnltbCdcclxuaW1wb3J0IHNyX2N5cmwgZnJvbSAnLi9zcl9jeXJsLnltbCdcclxuaW1wb3J0IHN2IGZyb20gJy4vc3YueW1sJ1xyXG5pbXBvcnQgdHIgZnJvbSAnLi90ci55bWwnXHJcbmltcG9ydCBwbCBmcm9tICcuL3BsLnltbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNhLFxyXG4gICAgZGUsXHJcbiAgICBlbCxcclxuICAgIGVuLFxyXG4gICAgZXMsXHJcbiAgICBmaSxcclxuICAgIGZyLFxyXG4gICAgaHUsXHJcbiAgICBocixcclxuICAgIGl0LFxyXG4gICAgbmwsXHJcbiAgICBubyxcclxuICAgIHJvLFxyXG4gICAgc3IsXHJcbiAgICBzcl9jeXJsLFxyXG4gICAgc3YsXHJcbiAgICB0cixcclxuICAgIHBsLFxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWF6aW9uaSBjaGUgcmFjY29nbGlhbW9cIixcImRlc2NyaXB0aW9uXCI6XCJRdWkgcHVvaSB2ZWRlcmUgZSBzY2VnbGllcmUgbGUgaW5mb3JtYXppb25pIGNoZSByYWNjb2dsaWFtbyBzdSBkaSB0ZS5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwb2xpY3kgcHJpdmFjeVwiLFwidGV4dFwiOlwiUGVyIHNhcGVybmUgZGkgcGnDuSwgbGVnZ2kgbGEgbm9zdHJhIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJDaSBzb25vIHN0YXRpIGNhbWJpYW1lbnRpIGRhbGxhIHR1YSB1bHRpbWEgdmlzaXRhLCBhZ2dpb3JuYSBpbCB0dW8gY29uc2Vuc28uXCIsXCJkZXNjcmlwdGlvblwiOlwiUmFjY29nbGlhbW8gZWQgZWxhYm9yaWFtbyBsZSB2b3N0cmUgaW5mb3JtYXppb25pIHBlcnNvbmFsaSBwZXIgaSBzZWd1ZW50aSBzY29waToge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiU2NvcHJpIGRpIHBpw7lcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIlNhbHZhXCIsXCJkZWNsaW5lXCI6XCJSaWZpdXRhXCIsXCJjbG9zZVwiOlwiQ2hpdWRpXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkNhbWJpYSBwZXIgdHV0dGUgbGUgYXBwXCIsXCJkZXNjcmlwdGlvblwiOlwiVXNhIHF1ZXN0byBpbnRlcnJ1dHRvcmUgcGVyIGFiaWxpdGFyZS9kaXNhYmlsaXRhcmUgdHV0dGUgbGUgYXBwLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob3B0LW91dClcIixcImRlc2NyaXB0aW9uXCI6XCJRdWVzdCdhcHBsaWNhemlvbmUgw6ggY2FyaWNhdGEgZGkgZGVmYXVsdCAobWEgcHVvaSBkaXNhdHRpdmFybGEpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKHNlbXByZSByaWNoaWVzdG8pXCIsXCJkZXNjcmlwdGlvblwiOlwiUXVlc3QnYXBwbGljYXppb25lIMOoIHNlbXByZSByaWNoaWVzdGFcIn0sXCJwdXJwb3Nlc1wiOlwiU2NvcGlcIixcInB1cnBvc2VcIjpcIlNjb3BvXCJ9LFwicG93ZXJlZEJ5XCI6XCJSZWFsaXp6YXRvIGRhIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWF0aWUgZGllIHdlIHZlcnphbWVsZW5cIixcImRlc2NyaXB0aW9uXCI6XCJIaWVyIGt1bnQgdSBkZSBpbmZvcm1hdGllIGJla2lqa2VuIGVuIGFhbnBhc3NlbiBkaWUgd2Ugb3ZlciB1IHZlcnphbWVsZW4uXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicHJpdmFjeWJlbGVpZFwiLFwidGV4dFwiOlwiTGVlcyBvbnMgcHJpdmFjeWJlbGVpZCB2b29yIG1lZXIgaW5mb3JtYXRpZSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiRXIgd2FyZW4gd2lqemlnaW5nZW4gc2luZHMgdXcgbGFhdHN0ZSBiZXpvZWssIHdlcmsgdXcgdm9vcmtldXJlbiBiaWouXCIsXCJkZXNjcmlwdGlvblwiOlwiV2lqIHZlcnphbWVsZW4gZW4gdmVyd2Vya2VuIHV3IHBlcnNvb25saWprZSBnZWdldmVucyB2b29yIGRlIHZvbGdlbmRlIGRvZWxlaW5kZW46IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkxlZXMgbWVlclwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiT3BzbGFhblwiLFwiZGVjbGluZVwiOlwiQWZ3aWp6ZW5cIixcImNsb3NlXCI6XCJTbHVpdGVuXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkFsbGUgb3B0aWVzIGluL3VpdCBzY2hha2VsZW5cIixcImRlc2NyaXB0aW9uXCI6XCJHZWJydWlrIGRlemUgc2NoYWtlbG9wdGllIG9tIGFsbGUgYXBwcyBpbi91aXQgdGUgc2NoYWtlbGVuLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIoYWZtZWxkZW4pXCIsXCJkZXNjcmlwdGlvblwiOlwiRGV6ZSBhcHAgaXMgc3RhbmRhYXJkIGdlbGFkZW4gKG1hYXIgamUga3VudCBqZSBhZm1lbGRlbilcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoYWx0aWpkIHZlcnBsaWNodClcIixcImRlc2NyaXB0aW9uXCI6XCJEZXplIGFwcGxpY2F0aWUgaXMgYWx0aWpkIHZlcmVpc3RcIn0sXCJwdXJwb3Nlc1wiOlwiRG9lbGVpbmRlblwiLFwicHVycG9zZVwiOlwiRG9lbGVpbmRlXCJ9LFwicG93ZXJlZEJ5XCI6XCJBYW5nZWRyZXZlbiBkb29yIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWFzam9uIHZpIHNhbWxlciBpbm5cIixcImRlc2NyaXB0aW9uXCI6XCJIZXIga2FuIGR1IHNlIG9nIHZlbGdlIGh2aWxrZW4gaW5mb3JtYXNqb24gdmkgc2FtbGVyIGlubiBvbSBkZWcuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicGVyc29udmVybmVya2zDpnJpbmdcIixcInRleHRcIjpcIkZvciDDpSBsw6ZyZSBtZXIsIHZlbm5saWdzdCBsZXMgdsOlciB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiRGV0IGhhciBza2plZGQgZW5kcmluZ2VyIHNpZGVuIGRpdHQgc2lzdGUgYmVzw7hrLCB2ZW5ubGlnc3Qgb3BwZGF0ZXIgZGl0dCBzYW10eWtrZS5cIixcImRlc2NyaXB0aW9uXCI6XCJWaSBzYW1sZXIgaW5uIG9nIHByb3Nlc3NlcmVyIGRpbiBwZXJzb25saWdlIGluZm9ybWFzam9uIGF2IGbDuGxnZW5kZSDDpXJzYWtlcjoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiTMOmciBtZXJcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIk9wc2xhYW5cIixcImRlY2xpbmVcIjpcIkF2c2zDpVwiLFwiYXBwXCI6e1wiZGlzYWJsZUFsbFwiOntcInRpdGxlXCI6XCJCeXR0IGFsbGUgYXBwZXJcIixcImRlc2NyaXB0aW9uXCI6XCJCcnVrIGRlbm5lIGZvciDDpSBza3J1IGF2L3DDpSBhbGxlIGFwcGVyLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIob3B0LW91dClcIixcImRlc2NyaXB0aW9uXCI6XCJEZW5uZSBhcHBlbiBlciBsYXN0ZXQgc29tIHN0YW5kYXJkIChtZW4gZHUga2FuIHNrcnUgZGV0IGF2KVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihhbGx0aWQgcMOla3JldmQpXCIsXCJkZXNjcmlwdGlvblwiOlwiRGVubmUgYXBwbGlrYXNqb25lbiBlciBhbGx0aWQgcMOla3JldmRcIn0sXCJwdXJwb3Nlc1wiOlwiw4Vyc2FrZXJcIixcInB1cnBvc2VcIjpcIsOFcnNha1wifSxcInBvd2VyZWRCeVwiOlwiTGFnZXQgbWVkIEtsYXJvIVwifSIsIm1vZHVsZS5leHBvcnRzID0ge1wiY29uc2VudE1vZGFsXCI6e1widGl0bGVcIjpcIkluZm9ybWFjamUsIGt0w7NyZSB6YmllcmFteVwiLFwiZGVzY3JpcHRpb25cIjpcIlR1dGFqIG1vxbxlc3ogem9iYWN6ecSHIGkgZG9zdG9zb3dhxIcgaW5mb3JtYWNqZSwga3TDs3JlIHpiaWVyYW15IG8gVG9iaWUuXFxuXCIsXCJwcml2YWN5UG9saWN5XCI6e1wibmFtZVwiOlwicG9saXR5a2EgcHJ5d2F0bm/Fm2NpXCIsXCJ0ZXh0XCI6XCJBYnkgZG93aWVkemllxIcgc2nEmSB3acSZY2VqLCBwcnplY3p5dGFqIG5hc3rEhSB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiTmFzdMSFcGnFgnkgem1pYW55IG9kIFR3b2plaiBvc3RhdG5pZWogd2l6eXR5LCB6YWt0dWFsaXp1aiBzd29qxIUgemdvZMSZLlwiLFwiZGVzY3JpcHRpb25cIjpcIlpiaWVyYW15IGkgcHJ6ZXR3YXJ6YW15IGRhbmUgb3NvYm93ZSB3IG5hc3TEmXB1asSFY3ljaCBjZWxhY2g6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkRvd2llZHogc2nEmSB3acSZY2VqXCJ9LFwib2tcIjpcIk9LXCIsXCJzYXZlXCI6XCJaYXBpc3pcIixcImRlY2xpbmVcIjpcIlJlenlnbmFjamFcIixcImNsb3NlXCI6XCJaYW1rbmlqXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIlByemXFgsSFY3ogZGxhIHdzenlzdGtpY2ggYXBsaWthY2ppXCIsXCJkZXNjcmlwdGlvblwiOlwiVcW8eWogcHJ6ZcWCxIVjem5pa2EsIGFieSB3xYLEhWN6ecSHL3d5xYLEhWN6ecSHIHdzenlzdGtpZSBhcGxpa2FjamUuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihyZXp5Z25hY2phKVwiLFwiZGVzY3JpcHRpb25cIjpcIlRhIGFwbGlrYWNqYSBqZXN0IGRvbXnFm2xuaWUgxYJhZG93YW5hIChhbGUgbW/FvGVzeiB6cmV6eWdub3dhxIcpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKHphd3N6ZSB3eW1hZ2FuZSlcIixcImRlc2NyaXB0aW9uXCI6XCJUYSBhbGlrYWNqYSBqZXN0IHphd3N6ZSB3eW1hZ2FuYVwifSxcInB1cnBvc2VzXCI6XCJDZWxlXCIsXCJwdXJwb3NlXCI6XCJDZWxcIn0sXCJwb3dlcmVkQnlcIjpcIk5hcMSZZHphbnkgcHJ6ZXogS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYcibaWlsZSBwZSBjYXJlIGxlIGNvbGVjdMSDbVwiLFwiZGVzY3JpcHRpb25cIjpcIkFpY2kgcHV0ZcibaSB2ZWRlYSDImWkgcGVyc29uYWxpemEgaW5mb3JtYcibaWlsZSBwZSBjYXJlIGxlIGNvbGVjdMSDbSBkZXNwcmUgZHZzLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcInBvbGl0aWNhIHByaXZhY3lcIixcInRleHRcIjpcIlBlbnRydSBhIGFmbGEgbWFpIG11bHRlLCB2xIMgcnVnxINtIHPEgyBjaXRpyJtpIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJBdSBleGlzdGF0IG1vZGlmaWPEg3JpIGRlIGxhIHVsdGltYSB2aXppdMSDLCB2xIMgcnVnxINtIHPEgyBhY3R1YWxpemHIm2kgY29uc2ltyJvEg23Dom50dWwuXCIsXCJkZXNjcmlwdGlvblwiOlwiQ29sZWN0xINtIMiZaSBwcm9jZXPEg20gaW5mb3JtYcibaWlsZSBkdnMuIHBlcnNvbmFsZSDDrm4gdXJtxIN0b2FyZWxlIHNjb3B1cmk6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkFmbMSDIG1haSBtdWx0ZVwifSxcIm9rXCI6XCJPS1wiLFwic2F2ZVwiOlwiU2FsdmVhesSDXCIsXCJkZWNsaW5lXCI6XCJSZW51bsibxINcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiQ29tdXRhyJtpIMOubnRyZSB0b2F0ZSBhcGxpY2HIm2lpbGVcIixcImRlc2NyaXB0aW9uXCI6XCJVdGlsaXphyJtpIGFjZXN0IHN3aXRjaCBwZW50cnUgYSBhY3RpdmEvZGV6YWN0aXZhIHRvYXRlIGFwbGljYcibaWlsZS5cIn0sXCJvcHRPdXRcIjp7XCJ0aXRsZVwiOlwiKG9wdC1vdXQpXCIsXCJkZXNjcmlwdGlvblwiOlwiQWNlYXN0xIMgYXBsaWNhyJtpZSBlc3RlIMOubmPEg3JjYXTEgyDDrm4gbW9kIGltcGxpY2l0IChkYXIgcHV0ZcibaSByZW51bsibYSlcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIow65udG90ZGVhdW5hIG5lY2VzYXIpXCIsXCJkZXNjcmlwdGlvblwiOlwiQWNlYXN0xIMgYXBsaWNhyJtpZSBlc3RlIMOubnRvdGRlYXVuYSBuZWNlc2FyxINcIn0sXCJwdXJwb3Nlc1wiOlwiU2NvcHVyaVwiLFwicHVycG9zZVwiOlwiU2NvcFwifSxcInBvd2VyZWRCeVwiOlwiUmVhbGl6YXQgZGUgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYWNpamUga29qZSBwcmlrdXBsamFtb1wiLFwiZGVzY3JpcHRpb25cIjpcIk92ZGUgbW/FvmV0ZSB2aWRldGkgaSBwb2Rlc2l0aSBpbmZvcm1hY2lqZSBrb2plIHByaWt1cGxqYW1vIG8gVmFtYS5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJwb2xpdGlrdSBwcml2YXRub3N0aVwiLFwidGV4dFwiOlwiWmEgdmnFoWUgaW5mb3JtYWNpamUgcHJvxI1pdGFqdGUgbmHFoXUge3ByaXZhY3lQb2xpY3l9LlxcblwifX0sXCJjb25zZW50Tm90aWNlXCI6e1wiY2hhbmdlRGVzY3JpcHRpb25cIjpcIkRvxaFsbyBqZSBkbyBwcm9tZW5hIG9kIFZhxaFlIHBvc2xlZG5qZSBwb3NldGUsIG1vbGltbyBWYXMgZGEgYcW+dXJpcmF0ZSBzdm9qYSBvZG9icmVuamEuXCIsXCJkZXNjcmlwdGlvblwiOlwiTWkgcHJpa3VwbGphbW8gaSBwcm9jZXNpcmFtbyBWYcWhZSBsacSNbmUgcG9kYXRrZSByYWRpIHNsZWRlxIdlZzoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiU2F6bmFqdGUgdmnFoWVcIn0sXCJva1wiOlwiVSByZWR1XCIsXCJzYXZlXCI6XCJTYcSNdXZhalwiLFwiZGVjbGluZVwiOlwiT2RiaWpcIixcImNsb3NlXCI6XCJaYXR2b3JpXCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcIkl6bWVuaSBzdmVcIixcImRlc2NyaXB0aW9uXCI6XCJLb3Jpc3RpdGUgb3ZhaiBwcmVraWRhxI0gZGEgb21vZ3XEh2l0ZS9vbmVzcG9zb2JpdGUgc3ZlIGFwbGlrYWNpamUgb2RqZWRub20uXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIihvbmVzcG9zb2JpdGUpXCIsXCJkZXNjcmlwdGlvblwiOlwiT3ZhIGFwbGlrYWNpamEgamUgdcSNaXRhbmEgYXV0b21hdHNraSAoYWxpIGplIG1vxb5ldGUgb25lc3Bvc29iaXRpKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihuZW9waG9kbmEpXCIsXCJkZXNjcmlwdGlvblwiOlwiT3ZhIGFwbGlrYWNpamEgamUgdXZlayBuZW9waG9kbmEuXCJ9LFwicHVycG9zZXNcIjpcIlN2cmhlXCIsXCJwdXJwb3NlXCI6XCJTdnJoYVwifSxcInBvd2VyZWRCeVwiOlwiUG9rcmXEh2UgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwi0JjQvdGE0L7RgNC80LDRhtC40ZjQtSDQutC+0ZjQtSDQv9GA0LjQutGD0L/RmdCw0LzQvlwiLFwiZGVzY3JpcHRpb25cIjpcItCe0LLQtNC1INC80L7QttC10YLQtSDQstC40LTQtdGCINC4INC/0L7QtNC10YHQuNGC0Lgg0LjQvdGE0L7RgNC80LDRhtC40ZjQtSDQutC+0ZjQtSDQv9GA0LjQutGD0L/RmdCw0LzQviDQviDQktCw0LzQsC5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCLQv9C+0LvQuNGC0LjQutGDINC/0YDQuNCy0LDRgtC90L7RgdGC0LhcIixcInRleHRcIjpcItCX0LAg0LLQuNGI0LUg0LjQvdGE0L7RgNC80LDRhtC40ZjQsCDQv9GA0L7Rh9C40YLQsNGY0YLQtSDQvdCw0YjRgyB7cHJpdmFjeVBvbGljeX0uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwi0JTQvtGI0LvQviDRmNC1INC00L4g0L/RgNC+0LzQtdC90LAg0L7QtCDQktCw0YjQtSDQv9C+0YHQu9C10LTQvdGY0LUg0L/QvtGB0LXRgtC1LCDQvNC+0LvQuNC80L4g0JLQsNGBINC00LAg0LDQttGD0YDQuNGA0LDRgtC1INGB0LLQvtGY0LAg0L7QtNC+0LHRgNC10ZrQsC5cIixcImRlc2NyaXB0aW9uXCI6XCLQnNC4INC/0YDQuNC60YPQv9GZ0LDQvNC+INC4INC/0YDQvtGG0LXRgdC40YDQsNC80L4g0JLQsNGI0LUg0LvQuNGH0L3QtSDQv9C+0LTQsNGC0LrQtSDRgNCw0LTQuCDRgdC70LXQtNC10ZvQtdCzOiB7cHVycG9zZXN9LlxcblwiLFwibGVhcm5Nb3JlXCI6XCLQodCw0LfQvdCw0ZjRgtC1INCy0LjRiNC1XCJ9LFwib2tcIjpcItCjINGA0LXQtNGDXCIsXCJzYXZlXCI6XCLQodCw0YfRg9Cy0LDRmFwiLFwiZGVjbGluZVwiOlwi0J7QtNCx0LjRmFwiLFwiY2xvc2VcIjpcItCX0LDRgtCy0L7RgNC4XCIsXCJhcHBcIjp7XCJkaXNhYmxlQWxsXCI6e1widGl0bGVcIjpcItCY0LfQvNC10L3QuCDRgdCy0LVcIixcImRlc2NyaXB0aW9uXCI6XCLQmtC+0YDQuNGB0YLQuNGC0LUg0L7QstCw0Zgg0L/RgNC10LrQuNC00LDRhyDQtNCwINC+0LzQvtCz0YPRm9C40YLQtS/QvtC90LXRgdC/0L7RgdC+0LHQuNGC0LUg0YHQstC1INCw0L/Qu9C40LrQsNGG0LjRmNC1INC+0LTRmNC10LTQvdC+0LwuXCJ9LFwib3B0T3V0XCI6e1widGl0bGVcIjpcIijQvtC90LXRgdC/0L7RgdC+0LHQuNGC0LUpXCIsXCJkZXNjcmlwdGlvblwiOlwi0J7QstCwINCw0L/Qu9C40LrQsNGG0LjRmNCwINGY0LUg0YPRh9C40YLQsNC90LAg0LDRg9GC0L7QvNCw0YLRgdC60LggKNCw0LvQuCDRmNC1INC80L7QttC10YLQtSDQvtC90LXRgdC/0L7RgdC+0LHQuNGC0LgpXCJ9LFwicmVxdWlyZWRcIjp7XCJ0aXRsZVwiOlwiKNC90LXQvtC/0YXQvtC00L3QsClcIixcImRlc2NyaXB0aW9uXCI6XCLQntCy0LAg0LDQv9C70LjQutCw0YbQuNGY0LAg0ZjQtSDRg9Cy0LXQuiDQvdC10L7Qv9GF0L7QtNC90LAuXCJ9LFwicHVycG9zZXNcIjpcItCh0LLRgNGF0LVcIixcInB1cnBvc2VcIjpcItCh0LLRgNGF0LBcIn0sXCJwb3dlcmVkQnlcIjpcItCf0L7QutGA0LXRm9C1INCa0LvQsNGA0L4hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiSW5mb3JtYXRpb24gc29tIHZpIHNhbWxhclwiLFwiZGVzY3JpcHRpb25cIjpcIkjDpHIga2FuIGR1IHNlIG9jaCBhbnBhc3NhIHZpbGtlbiBpbmZvcm1hdGlvbiB2aSBzYW1sYXIgb20gZGlnLlxcblwiLFwicHJpdmFjeVBvbGljeVwiOntcIm5hbWVcIjpcIkludGVncml0ZXRzcG9saWN5XCIsXCJ0ZXh0XCI6XCJGw7ZyIGF0dCB2ZXRhIG1lciwgbMOkcyB2w6VyIHtwcml2YWN5UG9saWN5fS5cXG5cIn19LFwiY29uc2VudE5vdGljZVwiOntcImNoYW5nZURlc2NyaXB0aW9uXCI6XCJEZXQgaGFyIHNrZXR0IGbDtnLDpG5kcmluZ2FyIHNlZGFuIGRpdHQgc2VuYXN0ZSBiZXPDtmssIHZhciBnb2QgdXBwZGF0ZXJhIGRpdHQgbWVkZ2l2YW5kZS5cIixcImRlc2NyaXB0aW9uXCI6XCJWaSBzYW1sYXIgb2NoIGJlYXJiZXRhciBkaW4gcGVyc29ubGlnYSBkYXRhIGkgZsO2bGphbmRlIHN5ZnRlbjoge3B1cnBvc2VzfS5cXG5cIixcImxlYXJuTW9yZVwiOlwiTMOkcyBtZXJcIn0sXCJva1wiOlwiT0tcIixcInNhdmVcIjpcIlNwYXJhXCIsXCJkZWNsaW5lXCI6XCJBdmLDtmpcIixcImNsb3NlXCI6XCJTdMOkbmdcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiw4RuZHJhIGbDtnIgYWxsYSBhcHBhclwiLFwiZGVzY3JpcHRpb25cIjpcIkFudsOkbmQgZGV0dGEgcmVnbGFnZSBmw7ZyIGF0dCBha3RpdmVyYS9hdmFrdGl2ZXJhIHNhbXRsaWdhIGFwcGFyLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIoQXZha3RpdmVyYSlcIixcImRlc2NyaXB0aW9uXCI6XCJEZW4gaMOkciBhcHBlbiBsYWRkYXMgc29tIHN0YW5kYXJkaW5zdMOkbGxuaW5nIChtZW4gZHUga2FuIGF2YWt0aXZlcmEgZGVuKVwifSxcInJlcXVpcmVkXCI6e1widGl0bGVcIjpcIihLcsOkdnMgYWxsdGlkKVwiLFwiZGVzY3JpcHRpb25cIjpcIkRlbiBow6RyIGFwcGxpa2F0aW9uZW4ga3LDpHZzIGFsbHRpZFwifSxcInB1cnBvc2VzXCI6XCJTeWZ0ZW5cIixcInB1cnBvc2VcIjpcIlN5ZnRlXCJ9LFwicG93ZXJlZEJ5XCI6XCJLw7ZycyBww6UgS2xhcm8hXCJ9IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJjb25zZW50TW9kYWxcIjp7XCJ0aXRsZVwiOlwiU2FrbGFkxLHEn8SxbcSxeiBiaWxnaWxlclwiLFwiZGVzY3JpcHRpb25cIjpcIkhha2vEsW7EsXpkYSB0b3BsYWTEscSfxLFtxLF6IGJpbGdpbGVyaSBidXJhZGEgZ8O2cmViaWxpciB2ZSDDtnplbGxlxZ90aXJlYmlsaXJzaW5pei5cXG5cIixcInByaXZhY3lQb2xpY3lcIjp7XCJuYW1lXCI6XCJHaXpsaWxpayBQb2xpdGlrYXPEsVwiLFwidGV4dFwiOlwiRGFoYSBmYXpsYXPEsSBpw6dpbiBsw7x0ZmVuIHtwcml2YWN5UG9saWN5fSBzYXlmYW3EsXrEsSBva3V5dW4uXFxuXCJ9fSxcImNvbnNlbnROb3RpY2VcIjp7XCJjaGFuZ2VEZXNjcmlwdGlvblwiOlwiU29uIHppeWFyZXRpbml6ZGVuIGJ1IHlhbmEgZGXEn2nFn2lrbGlrbGVyIG9sZHUsIGzDvHRmZW4gc2XDp2ltaW5pemkgZ8O8bmNlbGxleWluLlwiLFwiZGVzY3JpcHRpb25cIjpcIktpxZ9pc2VsIGJpbGdpbGVyaW5pemkgYcWfYcSfxLFkYWtpIGFtYcOnbGFybGEgc2FrbMSxeW9yIHZlIGnFn2xpeW9ydXo6IHtwdXJwb3Nlc30uXFxuXCIsXCJsZWFybk1vcmVcIjpcIkRhaGEgZmF6bGEgYmlsZ2lcIn0sXCJva1wiOlwiVGFtYW1cIixcInNhdmVcIjpcIktheWRldFwiLFwiZGVjbGluZVwiOlwiUmVkZGV0XCIsXCJjbG9zZVwiOlwiS2FwYXRcIixcImFwcFwiOntcImRpc2FibGVBbGxcIjp7XCJ0aXRsZVwiOlwiVMO8bSB1eWd1bGFtYWxhcsSxIGHDpy9rYXBhdFwiLFwiZGVzY3JpcHRpb25cIjpcIlRvcGx1IGHDp21hL2thcGFtYSBpw6dpbiBidSBkw7zEn21leWkga3VsbGFuYWJpbGlyc2luLlwifSxcIm9wdE91dFwiOntcInRpdGxlXCI6XCIoaXN0ZcSfZSBiYcSfbMSxKVwiLFwiZGVzY3JpcHRpb25cIjpcIkJ1IHV5Z3VsYW1hIHZhcnNhecSxbGFuZGEgecO8a2xlbmRpIChhbmNhayBpcHRhbCBlZGViaWxpcnNpbilcIn0sXCJyZXF1aXJlZFwiOntcInRpdGxlXCI6XCIoaGVyIHphbWFuIGdlcmVrbGkpXCIsXCJkZXNjcmlwdGlvblwiOlwiQnUgdXlndWxhbWEgaGVyIHphbWFuIGdlcmVrbGlcIn0sXCJwdXJwb3Nlc1wiOlwiQW1hw6dsYXJcIixcInB1cnBvc2VcIjpcIkFtYcOnXCJ9LFwicG93ZXJlZEJ5XCI6XCJLbGFybyB0YXJhZsSxbmRhbiBnZWxpxZ90aXJpbGRpIVwifSIsImV4cG9ydCBmdW5jdGlvbiBnZXRQdXJwb3Nlcyhjb25maWcpe1xyXG4gICAgY29uc3QgcHVycG9zZXMgPSBuZXcgU2V0KFtdKVxyXG4gICAgZm9yKGxldCBpPTA7aTxjb25maWcuYXBwcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBjb25zdCBhcHBQdXJwb3NlcyA9IGNvbmZpZy5hcHBzW2ldLnB1cnBvc2VzIHx8IFtdXHJcbiAgICAgICAgZm9yKGxldCBqPTA7ajxhcHBQdXJwb3Nlcy5sZW5ndGg7aisrKVxyXG4gICAgICAgICAgICBwdXJwb3Nlcy5hZGQoYXBwUHVycG9zZXNbal0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwdXJwb3NlcylcclxufVxyXG4iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZXMoKXtcclxuICAgIGNvbnN0IGNvb2tpZVN0cmluZ3MgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpXHJcbiAgICBjb25zdCBjb29raWVzID0gW11cclxuICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXlxcXFxzKihbXj1dKylcXFxccyo9XFxcXHMqKC4qPykkJylcclxuICAgIGZvcihsZXQgaT0wO2k8Y29va2llU3RyaW5ncy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBjb25zdCBjb29raWVTdHIgPSBjb29raWVTdHJpbmdzW2ldXHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSByZWdleC5leGVjKGNvb2tpZVN0cilcclxuICAgICAgICBpZiAobWF0Y2ggPT09IG51bGwpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgY29va2llcy5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogbWF0Y2hbMV0sXHJcbiAgICAgICAgICAgIHZhbHVlOiBtYXRjaFsyXSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvb2tpZXNcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XHJcbiAgICBjb25zdCBjb29raWVzID0gZ2V0Q29va2llcygpXHJcbiAgICBmb3IobGV0IGk9MDtpPGNvb2tpZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgaWYgKGNvb2tpZXNbaV0ubmFtZSA9PT0gbmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIGNvb2tpZXNbaV1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuXHJcblxyXG4vL2h0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0NTczMjIzL3NldC1jb29raWUtYW5kLWdldC1jb29raWUtd2l0aC1qYXZhc2NyaXB0XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIGRheXMsIGRvbWFpbikge1xyXG4gICAgbGV0IGV4cGlyZXMgPSBcIlwiXHJcbiAgICBpZiAoZGF5cykge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMqMjQqNjAqNjAqMTAwMCkpXHJcbiAgICAgICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpXHJcbiAgICB9XHJcbiAgICBpZiAoZG9tYWluICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBleHBpcmVzICs9ICc7IGRvbWFpbj0nICsgZG9tYWluXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNvb2tpZShuYW1lLCBwYXRoLCBkb21haW4pIHtcclxuICAgIGxldCBzdHIgPSBuYW1lKyc9OyBNYXgtQWdlPS05OTk5OTk5OTsnXHJcbiAgICAvLyB0cnkgdG8gZGVsZXRlIHRoZSBjb29raWUgd2l0aG91dCBhbnkgcGF0aCBhbmQgZG9tYWluXHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBzdHJcclxuICAgIHN0ciArPSAnIHBhdGg9JysocGF0aCB8fCAnLycpKyc7J1xyXG4gICAgLy8gdHJ5IHRvIGRlbGV0ZSB0aGUgY29va2llIHdpdGggcGF0aFxyXG4gICAgZG9jdW1lbnQuY29va2llID0gc3RyXHJcbiAgICBpZiAoZG9tYWluICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdHIgKz0gJyBkb21haW49Jytkb21haW4rJzsnXHJcbiAgICAgICAgLy8gdHJ5IHRvIGRlbGV0ZSB0aGUgY29va2llIHdpdGggZG9tYWluIGFuZCBwYXRoXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gc3RyXHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgZm9ybWF0ID0gKHN0ciwgLi4ucmVzdCkgPT4ge1xyXG4gICAgY29uc3QgdCA9IHR5cGVvZiByZXN0WzBdO1xyXG4gICAgbGV0IGFyZ3NcclxuICAgIGlmIChyZXN0Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICBhcmdzID0ge31cclxuICAgIGVsc2VcclxuICAgICAgICBhcmdzID0gKHQgPT09IFwic3RyaW5nXCIgfHwgdCA9PT0gXCJudW1iZXJcIikgP1xyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyZXN0KVxyXG4gICAgICAgICAgICA6IHJlc3RbMF07XHJcblxyXG4gICAgY29uc3Qgc3BsaXRzID0gW11cclxuXHJcbiAgICBsZXQgcyA9IHN0ci50b1N0cmluZygpXHJcbiAgICB3aGlsZShzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9cXHsoPyFcXHspKFtcXHdcXGRdKylcXH0oPyFcXH0pLylcclxuICAgICAgICBpZiAobSAhPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBzLnN1YnN0cigwLCBtLmluZGV4KVxyXG4gICAgICAgICAgICBzID0gcy5zdWJzdHIobS5pbmRleCttWzBdLmxlbmd0aClcclxuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KG1bMV0pXHJcbiAgICAgICAgICAgIHNwbGl0cy5wdXNoKGxlZnQpXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcclxuICAgICAgICAgICAgaWYgKG4gIT0gbil7IC8vIG5vdCBhIG51bWJlclxyXG4gICAgICAgICAgICAgICAgc3BsaXRzLnB1c2goYXJnc1ttWzFdXSlcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gYSBudW1iZXJlZCBhcmd1bWVudFxyXG4gICAgICAgICAgICAgICAgc3BsaXRzLnB1c2goYXJnc1tuXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwbGl0cy5wdXNoKHMpXHJcbiAgICAgICAgICAgIHMgPSBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNwbGl0c1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGFuZ3VhZ2UoKXtcclxuICAgIGNvbnN0IGxhbmcgPSAoKHR5cGVvZiB3aW5kb3cubGFuZ3VhZ2UgPT09IFwic3RyaW5nXCIgPyB3aW5kb3cubGFuZ3VhZ2UgOiBudWxsKSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyB8fCAnZW4nKS50b0xvd2VyQ2FzZSgpXHJcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14oW1xcXFx3XSspLShbXFxcXHddKykkJylcclxuICAgIGNvbnN0IHJlc3VsdCA9IHJlZ2V4LmV4ZWMobGFuZylcclxuICAgIGlmIChyZXN1bHQgPT09IG51bGwpe1xyXG4gICAgICAgIHJldHVybiBsYW5nXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0WzFdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhnZXQoZCwga2V5LCBkZWZhdWx0VmFsdWUpe1xyXG4gICAgbGV0IGtsID0ga2V5XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2wpKVxyXG4gICAgICAgIGtsID0gW2tsXVxyXG4gICAgbGV0IGN2ID0gZFxyXG4gICAgZm9yKGxldCBpPTA7aTxrbC5sZW5ndGg7aSsrKXtcclxuICAgICAgICBpZiAoY3YgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgIGlmIChjdiBpbnN0YW5jZW9mIE1hcClcclxuICAgICAgICAgICAgY3YgPSBjdi5nZXQoa2xbaV0pXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBjdiA9IGN2W2tsW2ldXVxyXG4gICAgfVxyXG4gICAgaWYgKGN2ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gICAgcmV0dXJuIGN2XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0KHRyYW5zLCBsYW5nLCBrZXksIC4uLnBhcmFtcyl7XHJcbiAgICBsZXQga2wgPSBrZXlcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShrbCkpXHJcbiAgICAgICAga2wgPSBba2xdXHJcbiAgICBjb25zdCB2YWx1ZSA9IGhnZXQodHJhbnMsIFtsYW5nLCAuLi5rbF0pXHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgcmV0dXJuIGBbbWlzc2luZyB0cmFuc2xhdGlvbjogJHtsYW5nfS8ke2tsLmpvaW4oXCIvXCIpfV1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtcy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHJldHVybiBmb3JtYXQodmFsdWUsIC4uLnBhcmFtcylcclxuICAgIHJldHVybiB2YWx1ZVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9NYXAoZCl7XHJcbiAgICBjb25zdCBkbSA9IG5ldyBNYXAoW10pXHJcbiAgICBmb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGQpKXtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGRba2V5XVxyXG4gICAgICAgIGlmICghKHR5cGVvZihrZXkpID09PSAnc3RyaW5nJykpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgaWYgKHR5cGVvZih2YWx1ZSkgPT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgZG0uc2V0KGtleSwgdmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGRtLnNldChrZXksIGNvbnZlcnRUb01hcCh2YWx1ZSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRtXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoZCwgZWQsIG92ZXJ3cml0ZSwgY2xvbmUpe1xyXG5cclxuICAgIGNvbnN0IGFzc2lnbiA9IChkLCBrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTWFwKXtcclxuICAgICAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcChbXSlcclxuICAgICAgICAgICAgLy93ZSBkZWVwLWNsb25lIHRoZSBtYXBcclxuICAgICAgICAgICAgdXBkYXRlKG1hcCwgdmFsdWUsIHRydWUsIGZhbHNlKVxyXG4gICAgICAgICAgICBkLnNldChrZXksIG1hcClcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgZC5zZXQoa2V5LCB2YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShlZCBpbnN0YW5jZW9mIE1hcCkgfHwgIShkIGluc3RhbmNlb2YgTWFwKSlcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJhbWV0ZXJzIGFyZSBub3QgbWFwcyFcIilcclxuICAgIGlmIChvdmVyd3JpdGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBvdmVyd3JpdGUgPSB0cnVlXHJcbiAgICBpZiAoY2xvbmUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICBjbG9uZSA9IGZhbHNlXHJcbiAgICBpZiAoY2xvbmUpXHJcbiAgICAgICAgZCA9IG5ldyBkLmNvbnN0cnVjdG9yKGQpXHJcbiAgICBmb3IoY29uc3Qga2V5IG9mIGVkLmtleXMoKSl7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlZC5nZXQoa2V5KVxyXG4gICAgICAgIGNvbnN0IGR2YWx1ZSA9IGQuZ2V0KGtleSlcclxuICAgICAgICBpZiAoIWQuaGFzKGtleSkpe1xyXG4gICAgICAgICAgICBhc3NpZ24oZCwga2V5LCB2YWx1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBNYXAgJiYgZHZhbHVlIGluc3RhbmNlb2YgTWFwKXtcclxuICAgICAgICAgICAgZC5zZXQoa2V5LCB1cGRhdGUoZHZhbHVlLCB2YWx1ZSwgb3ZlcndyaXRlLCBjbG9uZSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIW92ZXJ3cml0ZSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIGFzc2lnbihkLCBrZXksIHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==