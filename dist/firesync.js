(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.firesync = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":19}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":20}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":21}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":22}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":23}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":24}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":25}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":26}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":27}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":28}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":29}],12:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],13:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":5}],14:[function(require,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    desc = parent = getter = undefined;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":6}],15:[function(require,module,exports){
"use strict";

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":4}],16:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],17:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
};

exports.__esModule = true;
},{}],18:[function(require,module,exports){
"use strict";

var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];

var _isIterable = require("babel-runtime/core-js/is-iterable")["default"];

exports["default"] = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (_isIterable(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/is-iterable":2}],19:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
require('../modules/core.iter-helpers');
module.exports = require('../modules/$').core.getIterator;
},{"../modules/$":47,"../modules/core.iter-helpers":60,"../modules/es6.string.iterator":67,"../modules/web.dom.iterable":71}],20:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
require('../modules/core.iter-helpers');
module.exports = require('../modules/$').core.isIterable;
},{"../modules/$":47,"../modules/core.iter-helpers":60,"../modules/es6.string.iterator":67,"../modules/web.dom.iterable":71}],21:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/$').core.Map;
},{"../modules/$":47,"../modules/es6.map":62,"../modules/es6.object.to-string":64,"../modules/es6.string.iterator":67,"../modules/es7.map.to-json":69,"../modules/web.dom.iterable":71}],22:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":47}],23:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":47}],24:[function(require,module,exports){
var $ = require('../../modules/$');
require('../../modules/es6.object.statics-accept-primitives');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":47,"../../modules/es6.object.statics-accept-primitives":63}],25:[function(require,module,exports){
require('../../modules/es6.object.statics-accept-primitives');
module.exports = require('../../modules/$').core.Object.keys;
},{"../../modules/$":47,"../../modules/es6.object.statics-accept-primitives":63}],26:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$').core.Promise;
},{"../modules/$":47,"../modules/es6.object.to-string":64,"../modules/es6.promise":65,"../modules/es6.string.iterator":67,"../modules/web.dom.iterable":71}],27:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/$').core.Set;
},{"../modules/$":47,"../modules/es6.object.to-string":64,"../modules/es6.set":66,"../modules/es6.string.iterator":67,"../modules/es7.set.to-json":70,"../modules/web.dom.iterable":71}],28:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$').core.Symbol;
},{"../../modules/$":47,"../../modules/es6.symbol":68}],29:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":59,"../../modules/es6.string.iterator":67,"../../modules/web.dom.iterable":71}],30:[function(require,module,exports){
var $ = require('./$');
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
assert.def = $.assertDefined;
assert.fn = function(it){
  if(!$.isFunction(it))throw TypeError(it + ' is not a function!');
  return it;
};
assert.obj = function(it){
  if(!$.isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
assert.inst = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
module.exports = assert;
},{"./$":47}],31:[function(require,module,exports){
var $        = require('./$')
  , TAG      = require('./$.wks')('toStringTag')
  , toString = {}.toString;
function cof(it){
  return toString.call(it).slice(8, -1);
}
cof.classof = function(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : cof(O);
};
cof.set = function(it, tag, stat){
  if(it && !$.has(it = stat ? it : it.prototype, TAG))$.hide(it, TAG, tag);
};
module.exports = cof;
},{"./$":47,"./$.wks":59}],32:[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , safe     = require('./$.uid').safe
  , assert   = require('./$.assert')
  , forOf    = require('./$.for-of')
  , step     = require('./$.iter').step
  , $has     = $.has
  , set      = $.set
  , isObject = $.isObject
  , hide     = $.hide
  , isExtensible = Object.isExtensible || isObject
  , ID       = safe('id')
  , O1       = safe('O1')
  , LAST     = safe('last')
  , FIRST    = safe('first')
  , ITER     = safe('iter')
  , SIZE     = $.DESC ? safe('size') : 'size'
  , id       = 0;

function fastKey(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
}

function getEntry(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that[O1][index];
  // frozen object case
  for(entry = that[FIRST]; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
}

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      assert.inst(that, C, NAME);
      set(that, O1, $.create(null));
      set(that, SIZE, 0);
      set(that, LAST, undefined);
      set(that, FIRST, undefined);
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    require('./$.mix')(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that[FIRST] = that[LAST] = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that[O1][entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that[FIRST] == entry)that[FIRST] = next;
          if(that[LAST] == entry)that[LAST] = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments[1], 3)
          , entry;
        while(entry = entry ? entry.n : this[FIRST]){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if($.DESC)$.setDesc(C.prototype, 'size', {
      get: function(){
        return assert.def(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that[LAST] = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that[LAST],          // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that[FIRST])that[FIRST] = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that[O1][index] = entry;
    } return that;
  },
  getEntry: getEntry,
  // add .keys, .values, .entries, [@@iterator]
  // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
  setIter: function(C, NAME, IS_MAP){
    require('./$.iter-define')(C, NAME, function(iterated, kind){
      set(this, ITER, {o: iterated, k: kind});
    }, function(){
      var iter  = this[ITER]
        , kind  = iter.k
        , entry = iter.l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
        // or finish the iteration
        iter.o = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
  }
};
},{"./$":47,"./$.assert":30,"./$.ctx":35,"./$.for-of":39,"./$.iter":46,"./$.iter-define":44,"./$.mix":49,"./$.uid":57}],33:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $def  = require('./$.def')
  , forOf = require('./$.for-of');
module.exports = function(NAME){
  $def($def.P, NAME, {
    toJSON: function toJSON(){
      var arr = [];
      forOf(this, false, arr.push, arr);
      return arr;
    }
  });
};
},{"./$.def":36,"./$.for-of":39}],34:[function(require,module,exports){
'use strict';
var $     = require('./$')
  , $def  = require('./$.def')
  , $iter = require('./$.iter')
  , BUGGY = $iter.BUGGY
  , forOf = require('./$.for-of')
  , assertInstance = require('./$.assert').inst
  , INTERNAL = require('./$.uid').safe('internal');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = $.g[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!$.DESC || !$.isFunction(C) || !(IS_WEAK || !BUGGY && proto.forEach && proto.entries)){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    require('./$.mix')(C.prototype, methods);
  } else {
    C = wrapper(function(target, iterable){
      assertInstance(target, C, NAME);
      target[INTERNAL] = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
      var chain = KEY == 'add' || KEY == 'set';
      if(KEY in proto)$.hide(C.prototype, KEY, function(a, b){
        var result = this[INTERNAL][KEY](a === 0 ? 0 : a, b);
        return chain ? this : result;
      });
    });
    if('size' in proto)$.setDesc(C.prototype, 'size', {
      get: function(){
        return this[INTERNAL].size;
      }
    });
  }

  require('./$.cof').set(C, NAME);

  O[NAME] = C;
  $def($def.G + $def.W + $def.F, O);
  require('./$.species')(C);

  if(!IS_WEAK)common.setIter(C, NAME, IS_MAP);

  return C;
};
},{"./$":47,"./$.assert":30,"./$.cof":31,"./$.def":36,"./$.for-of":39,"./$.iter":46,"./$.mix":49,"./$.species":54,"./$.uid":57}],35:[function(require,module,exports){
// Optional / simple context binding
var assertFunction = require('./$.assert').fn;
module.exports = function(fn, that, length){
  assertFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  } return function(/* ...args */){
      return fn.apply(that, arguments);
    };
};
},{"./$.assert":30}],36:[function(require,module,exports){
var $          = require('./$')
  , global     = $.g
  , core       = $.core
  , isFunction = $.isFunction;
function ctx(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
}
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
function $def(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {}).prototype
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && !isFunction(target[key]))exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp.prototype = C.prototype;
    }(out);
    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
  }
}
module.exports = $def;
},{"./$":47}],37:[function(require,module,exports){
var $        = require('./$')
  , document = $.g.document
  , isObject = $.isObject
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$":47}],38:[function(require,module,exports){
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getDesc    = $.getDesc
    , getSymbols = $.getSymbols;
  if(getSymbols)$.each.call(getSymbols(it), function(key){
    if(getDesc(it, key).enumerable)keys.push(key);
  });
  return keys;
};
},{"./$":47}],39:[function(require,module,exports){
var ctx  = require('./$.ctx')
  , get  = require('./$.iter').get
  , call = require('./$.iter-call');
module.exports = function(iterable, entries, fn, that){
  var iterator = get(iterable)
    , f        = ctx(fn, that, entries ? 2 : 1)
    , step;
  while(!(step = iterator.next()).done){
    if(call(iterator, f, step.value, entries) === false){
      return call.close(iterator);
    }
  }
};
},{"./$.ctx":35,"./$.iter":46,"./$.iter-call":43}],40:[function(require,module,exports){
module.exports = function($){
  $.FW   = false;
  $.path = $.core;
  return $;
};
},{}],41:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var $ = require('./$')
  , toString = {}.toString
  , getNames = $.getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

function getWindowNames(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
}

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames($.toObject(it));
};
},{"./$":47}],42:[function(require,module,exports){
// Fast apply
// http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
  } return              fn.apply(that, args);
};
},{}],43:[function(require,module,exports){
var assertObject = require('./$.assert').obj;
function close(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)assertObject(ret.call(iterator));
}
function call(iterator, fn, value, entries){
  try {
    return entries ? fn(assertObject(value)[0], value[1]) : fn(value);
  } catch(e){
    close(iterator);
    throw e;
  }
}
call.close = close;
module.exports = call;
},{"./$.assert":30}],44:[function(require,module,exports){
var $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , $               = require('./$')
  , cof             = require('./$.cof')
  , $iter           = require('./$.iter')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values'
  , Iterators       = $iter.Iterators;
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  $iter.create(Constructor, NAME, next);
  function createMethod(kind){
    function $$(that){
      return new Constructor(that, kind);
    }
    switch(kind){
      case KEYS: return function keys(){ return $$(this); };
      case VALUES: return function values(){ return $$(this); };
    } return function entries(){ return $$(this); };
  }
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = $.getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    cof.set(IteratorPrototype, TAG, true);
    // FF fix
    if($.FW && $.has(proto, FF_ITERATOR))$iter.set(IteratorPrototype, $.that);
  }
  // Define iterator
  if($.FW || FORCE)$iter.set(proto, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = $.that;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * $iter.BUGGY, NAME, methods);
  }
};
},{"./$":47,"./$.cof":31,"./$.def":36,"./$.iter":46,"./$.redef":50,"./$.wks":59}],45:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":59}],46:[function(require,module,exports){
'use strict';
var $                 = require('./$')
  , cof               = require('./$.cof')
  , classof           = cof.classof
  , assert            = require('./$.assert')
  , assertObject      = assert.obj
  , SYMBOL_ITERATOR   = require('./$.wks')('iterator')
  , FF_ITERATOR       = '@@iterator'
  , Iterators         = require('./$.shared')('iterators')
  , IteratorPrototype = {};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, $.that);
function setIterator(O, value){
  $.hide(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  if(FF_ITERATOR in [])$.hide(O, FF_ITERATOR, value);
}

module.exports = {
  // Safari has buggy iterators w/o `next`
  BUGGY: 'keys' in [] && !('next' in [].keys()),
  Iterators: Iterators,
  step: function(done, value){
    return {value: value, done: !!done};
  },
  is: function(it){
    var O      = Object(it)
      , Symbol = $.g.Symbol;
    return (Symbol && Symbol.iterator || FF_ITERATOR) in O
      || SYMBOL_ITERATOR in O
      || $.has(Iterators, classof(O));
  },
  get: function(it){
    var Symbol = $.g.Symbol
      , getIter;
    if(it != undefined){
      getIter = it[Symbol && Symbol.iterator || FF_ITERATOR]
        || it[SYMBOL_ITERATOR]
        || Iterators[classof(it)];
    }
    assert($.isFunction(getIter), it, ' is not iterable!');
    return assertObject(getIter.call(it));
  },
  set: setIterator,
  create: function(Constructor, NAME, next, proto){
    Constructor.prototype = $.create(proto || IteratorPrototype, {next: $.desc(1, next)});
    cof.set(Constructor, NAME + ' Iterator');
  }
};
},{"./$":47,"./$.assert":30,"./$.cof":31,"./$.shared":53,"./$.wks":59}],47:[function(require,module,exports){
'use strict';
var global = typeof self != 'undefined' ? self : Function('return this')()
  , core   = {}
  , defineProperty = Object.defineProperty
  , hasOwnProperty = {}.hasOwnProperty
  , ceil  = Math.ceil
  , floor = Math.floor
  , max   = Math.max
  , min   = Math.min;
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
  try {
    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
  } catch(e){ /* empty */ }
}();
var hide = createDefiner(1);
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
}
function desc(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return $.setDesc(object, key, desc(bitmap, value));
  } : simpleSet;
}

function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
function assertDefined(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
}

var $ = module.exports = require('./$.fw')({
  g: global,
  core: core,
  html: global.document && document.documentElement,
  // http://jsperf.com/core-js-isobject
  isObject:   isObject,
  isFunction: isFunction,
  that: function(){
    return this;
  },
  // 7.1.4 ToInteger
  toInteger: toInteger,
  // 7.1.15 ToLength
  toLength: function(it){
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  },
  toIndex: function(index, length){
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  },
  has: function(it, key){
    return hasOwnProperty.call(it, key);
  },
  create:     Object.create,
  getProto:   Object.getPrototypeOf,
  DESC:       DESC,
  desc:       desc,
  getDesc:    Object.getOwnPropertyDescriptor,
  setDesc:    defineProperty,
  setDescs:   Object.defineProperties,
  getKeys:    Object.keys,
  getNames:   Object.getOwnPropertyNames,
  getSymbols: Object.getOwnPropertySymbols,
  assertDefined: assertDefined,
  // Dummy, fix for not array-like ES3 string in es5 module
  ES5Object: Object,
  toObject: function(it){
    return $.ES5Object(assertDefined(it));
  },
  hide: hide,
  def: createDefiner(0),
  set: global.Symbol ? simpleSet : hide,
  each: [].forEach
});
/* eslint-disable no-undef */
if(typeof __e != 'undefined')__e = core;
if(typeof __g != 'undefined')__g = global;
},{"./$.fw":40}],48:[function(require,module,exports){
var $ = require('./$');
module.exports = function(object, el){
  var O      = $.toObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":47}],49:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":50}],50:[function(require,module,exports){
module.exports = require('./$').hide;
},{"./$":47}],51:[function(require,module,exports){
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],52:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var $      = require('./$')
  , assert = require('./$.assert');
function check(O, proto){
  assert.obj(O);
  assert(proto === null || $.isObject(proto), proto, ": can't set as prototype!");
}
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
    ? function(buggy, set){
        try {
          set = require('./$.ctx')(Function.call, $.getDesc(Object.prototype, '__proto__').set, 2);
          set({}, []);
        } catch(e){ buggy = true; }
        return function setPrototypeOf(O, proto){
          check(O, proto);
          if(buggy)O.__proto__ = proto;
          else set(O, proto);
          return O;
        };
      }()
    : undefined),
  check: check
};
},{"./$":47,"./$.assert":30,"./$.ctx":35}],53:[function(require,module,exports){
var $      = require('./$')
  , SHARED = '__core-js_shared__'
  , store  = $.g[SHARED] || ($.g[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$":47}],54:[function(require,module,exports){
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if($.DESC && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: $.that
  });
};
},{"./$":47,"./$.wks":59}],55:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var $ = require('./$');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String($.assertDefined(that))
      , i = $.toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$":47}],56:[function(require,module,exports){
'use strict';
var $      = require('./$')
  , ctx    = require('./$.ctx')
  , cof    = require('./$.cof')
  , invoke = require('./$.invoke')
  , cel    = require('./$.dom-create')
  , global             = $.g
  , isFunction         = $.isFunction
  , html               = $.html
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
function run(){
  var id = +this;
  if($.has(queue, id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
}
function listner(event){
  run.call(event.data);
}
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!isFunction(setTask) || !isFunction(clearTask)){
  setTask = function(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(isFunction(fn) ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(cof(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Modern browsers, skip implementation for WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is object
  } else if(global.addEventListener && isFunction(global.postMessage) && !global.importScripts){
    defer = function(id){
      global.postMessage(id, '*');
    };
    global.addEventListener('message', listner, false);
  // WebWorkers
  } else if(isFunction(MessageChannel)){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$":47,"./$.cof":31,"./$.ctx":35,"./$.dom-create":37,"./$.invoke":42}],57:[function(require,module,exports){
var sid = 0;
function uid(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++sid + Math.random()).toString(36));
}
uid.safe = require('./$').g.Symbol || uid;
module.exports = uid;
},{"./$":47}],58:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],59:[function(require,module,exports){
var global = require('./$').g
  , store  = require('./$.shared')('wks');
module.exports = function(name){
  return store[name] || (store[name] =
    global.Symbol && global.Symbol[name] || require('./$.uid').safe('Symbol.' + name));
};
},{"./$":47,"./$.shared":53,"./$.uid":57}],60:[function(require,module,exports){
var core  = require('./$').core
  , $iter = require('./$.iter');
core.isIterable  = $iter.is;
core.getIterator = $iter.get;
},{"./$":47,"./$.iter":46}],61:[function(require,module,exports){
var $          = require('./$')
  , setUnscope = require('./$.unscope')
  , ITER       = require('./$.uid').safe('iter')
  , $iter      = require('./$.iter')
  , step       = $iter.step
  , Iterators  = $iter.Iterators;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  $.set(this, ITER, {o: $.toObject(iterated), i: 0, k: kind});
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , kind  = iter.k
    , index = iter.i++;
  if(!O || index >= O.length){
    iter.o = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$":47,"./$.iter":46,"./$.iter-define":44,"./$.uid":57,"./$.unscope":58}],62:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', function(get){
  return function Map(){ return get(this, arguments[0]); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":34,"./$.collection-strong":32}],63:[function(require,module,exports){
var $        = require('./$')
  , $def     = require('./$.def')
  , isObject = $.isObject
  , toObject = $.toObject;
$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
, function(KEY, ID){
  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
    , forced = 0
    , method = {};
  method[KEY] = ID == 0 ? function freeze(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 1 ? function seal(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 2 ? function preventExtensions(it){
    return isObject(it) ? fn(it) : it;
  } : ID == 3 ? function isFrozen(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 4 ? function isSealed(it){
    return isObject(it) ? fn(it) : true;
  } : ID == 5 ? function isExtensible(it){
    return isObject(it) ? fn(it) : false;
  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
    return fn(toObject(it), key);
  } : ID == 7 ? function getPrototypeOf(it){
    return fn(Object($.assertDefined(it)));
  } : ID == 8 ? function keys(it){
    return fn(toObject(it));
  } : require('./$.get-names').get;
  try {
    fn('z');
  } catch(e){
    forced = 1;
  }
  $def($def.S + $def.F * forced, 'Object', method);
});
},{"./$":47,"./$.def":36,"./$.get-names":41}],64:[function(require,module,exports){
'use strict';
// 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , tmp = {};
tmp[require('./$.wks')('toStringTag')] = 'z';
if(require('./$').FW && cof(tmp) != 'z'){
  require('./$.redef')(Object.prototype, 'toString', function toString(){
    return '[object ' + cof.classof(this) + ']';
  }, true);
}
},{"./$":47,"./$.cof":31,"./$.redef":50,"./$.wks":59}],65:[function(require,module,exports){
'use strict';
var $        = require('./$')
  , ctx      = require('./$.ctx')
  , cof      = require('./$.cof')
  , $def     = require('./$.def')
  , assert   = require('./$.assert')
  , forOf    = require('./$.for-of')
  , setProto = require('./$.set-proto').set
  , same     = require('./$.same')
  , species  = require('./$.species')
  , SPECIES  = require('./$.wks')('species')
  , RECORD   = require('./$.uid').safe('record')
  , PROMISE  = 'Promise'
  , global   = $.g
  , process  = global.process
  , isNode   = cof(process) == 'process'
  , asap     = process && process.nextTick || require('./$.task').set
  , P        = global[PROMISE]
  , isFunction     = $.isFunction
  , isObject       = $.isObject
  , assertFunction = assert.fn
  , assertObject   = assert.obj
  , Wrapper;

function testResolve(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
}

var useNative = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = isFunction(P) && isFunction(P.resolve) && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && $.DESC){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
function isPromise(it){
  return isObject(it) && (useNative ? cof.classof(it) == 'Promise' : RECORD in it);
}
function sameConstructor(a, b){
  // library wrapper special case
  if(!$.FW && a === P && b === Wrapper)return true;
  return same(a, b);
}
function getConstructor(C){
  var S = assertObject(C)[SPECIES];
  return S != undefined ? S : C;
}
function isThenable(it){
  var then;
  if(isObject(it))then = it.then;
  return isFunction(then) ? then : false;
}
function notify(record){
  var chain = record.c;
  // strange IE + webpack dev server bug - use .call(global)
  if(chain.length)asap.call(global, function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    function run(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    }
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
  });
}
function isUnhandled(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
}
function $reject(value){
  var record = this
    , promise;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  setTimeout(function(){
    // strange IE + webpack dev server bug - use .call(global)
    asap.call(global, function(){
      if(isUnhandled(promise = record.p)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(global.console && console.error){
          console.error('Unhandled promise rejection', value);
        }
      }
      record.a = undefined;
    });
  }, 1);
  notify(record);
}
function $resolve(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      // strange IE + webpack dev server bug - use .call(global)
      asap.call(global, function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
}

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    assertFunction(executor);
    var record = {
      p: assert.inst(this, P, PROMISE),       // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false                                // <- handled rejection
    };
    $.hide(this, RECORD, record);
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.mix')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = assertObject(assertObject(this).constructor)[SPECIES];
      var react = {
        ok:   isFunction(onFulfilled) ? onFulfilled : true,
        fail: isFunction(onRejected)  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = assertFunction(res);
        react.rej = assertFunction(rej);
      });
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      if(record.s)notify(record);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
cof.set(P, PROMISE);
species(P);
species(Wrapper = $.core[PROMISE]);

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new (getConstructor(this))(function(res, rej){ rej(r); });
  }
});
$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isPromise(x) && sameConstructor(x.constructor, this)
      ? x : new this(function(res){ res(x); });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":47,"./$.assert":30,"./$.cof":31,"./$.ctx":35,"./$.def":36,"./$.for-of":39,"./$.iter-detect":45,"./$.mix":49,"./$.same":51,"./$.set-proto":52,"./$.species":54,"./$.task":56,"./$.uid":57,"./$.wks":59}],66:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments[0]); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":34,"./$.collection-strong":32}],67:[function(require,module,exports){
var set   = require('./$').set
  , $at   = require('./$.string-at')(true)
  , ITER  = require('./$.uid').safe('iter')
  , $iter = require('./$.iter')
  , step  = $iter.step;

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  set(this, ITER, {o: String(iterated), i: 0});
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var iter  = this[ITER]
    , O     = iter.o
    , index = iter.i
    , point;
  if(index >= O.length)return step(1);
  point = $at(O, index);
  iter.i += point.length;
  return step(0, point);
});
},{"./$":47,"./$.iter":46,"./$.iter-define":44,"./$.string-at":55,"./$.uid":57}],68:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $        = require('./$')
  , setTag   = require('./$.cof').set
  , uid      = require('./$.uid')
  , shared   = require('./$.shared')
  , $def     = require('./$.def')
  , $redef   = require('./$.redef')
  , keyOf    = require('./$.keyof')
  , enumKeys = require('./$.enum-keys')
  , assertObject = require('./$.assert').obj
  , ObjectProto = Object.prototype
  , DESC     = $.DESC
  , has      = $.has
  , $create  = $.create
  , getDesc  = $.getDesc
  , setDesc  = $.setDesc
  , desc     = $.desc
  , $names   = require('./$.get-names')
  , getNames = $names.get
  , toObject = $.toObject
  , $Symbol  = $.g.Symbol
  , setter   = false
  , TAG      = uid('tag')
  , HIDDEN   = uid('hidden')
  , _propertyIsEnumerable = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols = shared('symbols')
  , useNative = $.isFunction($Symbol);

var setSymbolDesc = DESC ? function(){ // fallback for old Android
  try {
    return $create(setDesc({}, HIDDEN, {
      get: function(){
        return setDesc(this, HIDDEN, {value: false})[HIDDEN];
      }
    }))[HIDDEN] || setDesc;
  } catch(e){
    return function(it, key, D){
      var protoDesc = getDesc(ObjectProto, key);
      if(protoDesc)delete ObjectProto[key];
      setDesc(it, key, D);
      if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
    };
  }
}() : setDesc;

function wrap(tag){
  var sym = AllSymbols[tag] = $.set($create($Symbol.prototype), TAG, tag);
  DESC && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, desc(1, value));
    }
  });
  return sym;
}

function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, desc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = $create(D, {enumerable: desc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
}
function defineProperties(it, P){
  assertObject(it);
  var keys = enumKeys(P = toObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)defineProperty(it, key = keys[i++], P[key]);
  return it;
}
function create(it, P){
  return P === undefined ? $create(it) : defineProperties($create(it), P);
}
function propertyIsEnumerable(key){
  var E = _propertyIsEnumerable.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
}
function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
}
function getOwnPropertyNames(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
}
function getOwnPropertySymbols(it){
  var names  = getNames(toObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
}

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments[0]));
  };
  $redef($Symbol.prototype, 'toString', function(){
    return this[TAG];
  });

  $.create     = create;
  $.setDesc    = defineProperty;
  $.getDesc    = getOwnPropertyDescriptor;
  $.setDescs   = defineProperties;
  $.getNames   = $names.get = getOwnPropertyNames;
  $.getSymbols = getOwnPropertySymbols;

  if($.DESC && $.FW)$redef(ObjectProto, 'propertyIsEnumerable', propertyIsEnumerable, true);
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = require('./$.wks')(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  }
);

setter = true;

$def($def.G + $def.W, {Symbol: $Symbol});

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: getOwnPropertySymbols
});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag($.g.JSON, 'JSON', true);
},{"./$":47,"./$.assert":30,"./$.cof":31,"./$.def":36,"./$.enum-keys":38,"./$.get-names":41,"./$.keyof":48,"./$.redef":50,"./$.shared":53,"./$.uid":57,"./$.wks":59}],69:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
require('./$.collection-to-json')('Map');
},{"./$.collection-to-json":33}],70:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
require('./$.collection-to-json')('Set');
},{"./$.collection-to-json":33}],71:[function(require,module,exports){
require('./es6.array.iterator');
var $           = require('./$')
  , Iterators   = require('./$.iter').Iterators
  , ITERATOR    = require('./$.wks')('iterator')
  , ArrayValues = Iterators.Array
  , NL          = $.g.NodeList
  , HTC         = $.g.HTMLCollection
  , NLProto     = NL && NL.prototype
  , HTCProto    = HTC && HTC.prototype;
if($.FW){
  if(NL && !(ITERATOR in NLProto))$.hide(NLProto, ITERATOR, ArrayValues);
  if(HTC && !(ITERATOR in HTCProto))$.hide(HTCProto, ITERATOR, ArrayValues);
}
Iterators.NodeList = Iterators.HTMLCollection = ArrayValues;
},{"./$":47,"./$.iter":46,"./$.wks":59,"./es6.array.iterator":61}],72:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  delete g.regeneratorRuntime;
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./runtime":73}],73:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      var enqueueResult =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(function () {
        return invoke(method, arg);
      }) : new _Promise(function (resolve) {
        resolve(invoke(method, arg));
      });

      // Avoid propagating enqueueResult failures to Promises returned by
      // later invocations of the iterator.
      previousPromise = enqueueResult["catch"](function (ignored) {});

      return enqueueResult;
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":75,"babel-runtime/core-js/object/create":4,"babel-runtime/core-js/promise":8,"babel-runtime/core-js/symbol":10,"babel-runtime/core-js/symbol/iterator":11}],74:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],75:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],76:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

/**
 * Remember mixins? Until facebook and various react utilities figure out a new solution this will
 * make mixins work how they used to, by adding mixin methods directly to your react component.
 *
 * @param {function/array} mixins A reference to your mixin class
 * @param {object} context A reference to the react component class. Usually just "this".
 * @param {object} options An object of optional settings".
 * @returns undefined
 *
 * use it like this in your constructor:
 * mixins([mixin1, mixin2], this, {options});
 */

var Mixins = (function () {
    function Mixins() {
        _classCallCheck(this, Mixins);
    }

    _createClass(Mixins, [{
        key: 'init',
        value: function init(mixins, context, options) {
            this.mixins = mixins;
            this.context = context;

            this.opt = {
                warn: true,
                mergeDuplicates: true
            };

            this.contextMethods = Object.getOwnPropertyNames(this.context.constructor.prototype);
            this.reactMethods = ['componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

            if (options) {
                this.opt.warn = options.warn !== undefined ? options.warn : this.opt.warn;
                this.opt.mergeDuplicates = options.mergeDuplicates !== undefined ? options.mergeDuplicates : this.opt.mergeDuplicates;
            }

            if (this.mixins.constructor === Array) {
                mixins.map(function (mixin) {
                    this.grabMethods(mixin);
                }, this);
            } else if (typeof mixins === 'function' || typeof mixins === 'object') {
                this.grabMethods(mixins);
            } else {
                throw 'mixins expects a function, an array, or an object. Please and thank you';
            }
        }
    }, {
        key: 'addNewMethod',

        /**
         * If the method doesn't already exist on the react component, simply add this to it.
         *
         * @param {string} mm The name of a single mixin method
         * @param {function} currentMixin A reference to the mixin you are adding to the react component
         */
        value: function addNewMethod(mm, currentMixin) {
            if (this.mixins.prototype) {
                this.context.constructor.prototype[mm] = this.mixins.prototype[mm];
            } else {
                this.context.constructor.prototype[mm] = typeof currentMixin === 'object' ? currentMixin[mm] : currentMixin.prototype[mm];
            }
            this.contextMethods = Object.getOwnPropertyNames(this.context.constructor.prototype);
        }
    }, {
        key: 'extendMethod',

        /**
         * If there is already a method on your react component that matches the mixin method create a new function that
         * calls both methods so they can live in harmony.
         *
         * @param {string} mm The name of a single mixin method
         * @param {string} cm The name of the matched react method to extend
         * @param {function} currentMixin A reference to the mixin being added to the react method.
         */
        value: function extendMethod(mm, cm, currentMixin) {
            var orig = this.context[cm];
            var newMethod = typeof currentMixin === 'object' ? currentMixin[mm] : currentMixin.prototype[mm];
            this.context[mm] = function () {
                newMethod.call(this, arguments);
                orig.call(this, arguments);
            };
        }
    }, {
        key: 'grabMethods',

        /**
         * Takes a mixin method and sends it along the pipe
         * @param {function} mixin A single method from your mixin
         *
         */
        value: function grabMethods(mixin) {
            var _this = this;

            var currentMixin = mixin;
            var mixinMethods = typeof mixin === 'object' ? Object.getOwnPropertyNames(mixin) : Object.getOwnPropertyNames(mixin.prototype);

            mixinMethods.map(function (method) {
                if (method !== 'constructor' && method !== 'render') {
                    _this.checkForMatch(method, currentMixin);
                }
            }, this);
        }
    }, {
        key: 'checkForMatch',

        /**
         * Checks the react component to see if the method we want to add is already there.
         * If it is a duplicate and a React lifecycle method it silently extends the React method.
         * If it is a duplicate and not a React lifecycle method it warns you before extending the React method.
         *
         * @param {string} mm the mixin method to check against the react methods
         * @param {function} currentMixin A reference to the mixin being added to the React Component.
         */
        value: function checkForMatch(mm, currentMixin) {
            var _this2 = this;

            this.contextMethods.map(function (ctxMethod) {
                if (mm === ctxMethod) {
                    if (_this2.reactMethods.indexOf(mm) > -1) {
                        _this2.extendMethod(mm, ctxMethod, currentMixin);
                    } else {
                        if (_this2.opt.warn) {
                            console.warn(mm + ' method already exists within the ' + _this2.context.constructor.name + ' component.');
                        }
                        if (_this2.opt.mergeDuplicates) {
                            _this2.extendMethod(mm, ctxMethod, currentMixin);
                        }
                    }
                }
            });
            this.addNewMethod(mm, currentMixin);
        }
    }]);

    return Mixins;
})();

var mix = new Mixins();

module.exports = mix.init.bind(mix);

},{}],77:[function(require,module,exports){
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(undefined) {

  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {

      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);
      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this.newListener = conf.newListener);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    }
  }

  function EventEmitter(conf) {
    this._events = {};
    this.newListener = false;
    configure.call(this, conf);
  }

  //
  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i) {
    if (!tree) {
      return [];
    }
    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
        typeLength = type.length, currentType = type[i], nextType = type[i+1];
    if (i === typeLength && tree._listeners) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //
      if (typeof tree._listeners === 'function') {
        handlers && handlers.push(tree._listeners);
        return [tree];
      } else {
        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
          handlers && handlers.push(tree._listeners[leaf]);
        }
        return [tree];
      }
    }

    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
      //
      // If the event emitted is '*' at this part
      // or there is a concrete match at this patch
      //
      if (currentType === '*') {
        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
          }
        }
        return listeners;
      } else if(currentType === '**') {
        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
        if(endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
        }

        for (branch in tree) {
          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
            if(branch === '*' || branch === '**') {
              if(tree[branch]._listeners && !endReached) {
                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
              }
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            } else if(branch === nextType) {
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
            } else {
              // No match on this one, shift into the tree but not in the type array.
              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
            }
          }
        }
        return listeners;
      }

      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
    }

    xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i+1);
    }

    xxTree = tree['**'];
    if(xxTree) {
      if(i < typeLength) {
        if(xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength);
        }

        // Build arrays of matching next branches and others.
        for(branch in xxTree) {
          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
            if(branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i+2);
            } else if(branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i+1);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
            }
          }
        }
      } else if(xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength);
      } else if(xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener) {

    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    for(var i = 0, len = type.length; i+1 < len; i++) {
      if(type[i] === '**' && type[i+1] === '**') {
        return;
      }
    }

    var tree = this.listenerTree;
    var name = type.shift();

    while (name) {

      if (!tree[name]) {
        tree[name] = {};
      }

      tree = tree[name];

      if (type.length === 0) {

        if (!tree._listeners) {
          tree._listeners = listener;
        }
        else if(typeof tree._listeners === 'function') {
          tree._listeners = [tree._listeners, listener];
        }
        else if (isArray(tree._listeners)) {

          tree._listeners.push(listener);

          if (!tree._listeners.warned) {

            var m = defaultMaxListeners;

            if (typeof this._events.maxListeners !== 'undefined') {
              m = this._events.maxListeners;
            }

            if (m > 0 && tree._listeners.length > m) {

              tree._listeners.warned = true;
              console.error('(node) warning: possible EventEmitter memory ' +
                            'leak detected. %d listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit.',
                            tree._listeners.length);
              console.trace();
            }
          }
        }
        return true;
      }
      name = type.shift();
    }
    return true;
  }

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    this._events || init.call(this);
    this._events.maxListeners = n;
    if (!this._conf) this._conf = {};
    this._conf.maxListeners = n;
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn) {
    this.many(event, 1, fn);
    return this;
  };

  EventEmitter.prototype.many = function(event, ttl, fn) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      fn.apply(this, arguments);
    }

    listener._origin = fn;

    this.on(event, listener);

    return self;
  };

  EventEmitter.prototype.emit = function() {

    this._events || init.call(this);

    var type = arguments[0];

    if (type === 'newListener' && !this.newListener) {
      if (!this._events.newListener) { return false; }
    }

    // Loop through the *_all* functions and invoke them.
    if (this._all) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        this._all[i].apply(this, args);
      }
    }

    // If there is no 'error' event listener then throw.
    if (type === 'error') {

      if (!this._all &&
        !this._events.error &&
        !(this.wildcard && this.listenerTree.error)) {

        if (arguments[1] instanceof Error) {
          throw arguments[1]; // Unhandled 'error' event
        } else {
          throw new Error("Uncaught, unspecified 'error' event.");
        }
        return false;
      }
    }

    var handler;

    if(this.wildcard) {
      handler = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    }
    else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      if (arguments.length === 1) {
        handler.call(this);
      }
      else if (arguments.length > 1)
        switch (arguments.length) {
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
          // slower
          default:
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      return true;
    }
    else if (handler) {
      var l = arguments.length;
      var args = new Array(l - 1);
      for (var i = 1; i < l; i++) args[i - 1] = arguments[i];

      var listeners = handler.slice();
      for (var i = 0, l = listeners.length; i < l; i++) {
        this.event = type;
        listeners[i].apply(this, args);
      }
      return (listeners.length > 0) || !!this._all;
    }
    else {
      return !!this._all;
    }

  };

  EventEmitter.prototype.on = function(type, listener) {

    if (typeof type === 'function') {
      this.onAny(type);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    this.emit('newListener', type, listener);

    if(this.wildcard) {
      growListenerTree.call(this, type, listener);
      return this;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    }
    else if(typeof this._events[type] === 'function') {
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];
    }
    else if (isArray(this._events[type])) {
      // If we've already got an array, just append.
      this._events[type].push(listener);

      // Check for listener leak
      if (!this._events[type].warned) {

        var m = defaultMaxListeners;

        if (typeof this._events.maxListeners !== 'undefined') {
          m = this._events.maxListeners;
        }

        if (m > 0 && this._events[type].length > m) {

          this._events[type].warned = true;
          console.error('(node) warning: possible EventEmitter memory ' +
                        'leak detected. %d listeners added. ' +
                        'Use emitter.setMaxListeners() to increase limit.',
                        this._events[type].length);
          console.trace();
        }
      }
    }
    return this;
  };

  EventEmitter.prototype.onAny = function(fn) {

    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if(!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    this._all.push(fn);
    return this;
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
    }
    else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          return this;
        }
      }
    } else {
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function(type) {
    if (arguments.length === 0) {
      !this._events || init.call(this);
      return this;
    }

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);

      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
        var leaf = leafs[iLeaf];
        leaf._listeners = null;
      }
    }
    else {
      if (!this._events[type]) return this;
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function(type) {
    if(this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers;
    }

    this._events || init.call(this);

    if (!this._events[type]) this._events[type] = [];
    if (!isArray(this._events[type])) {
      this._events[type] = [this._events[type]];
    }
    return this._events[type];
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  if (typeof define === 'function' && define.amd) {
     // AMD. Register as an anonymous module.
    define(function() {
      return EventEmitter;
    });
  } else if (typeof exports === 'object') {
    // CommonJS
    exports.EventEmitter2 = EventEmitter;
  }
  else {
    // Browser global.
    window.EventEmitter2 = EventEmitter;
  }
}();

},{}],78:[function(require,module,exports){
(function (global){
/**
 * @license
 * lodash 3.10.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern -d -o ./index.js`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '3.10.0';

  /** Used to compose bitmasks for wrapper metadata. */
  var BIND_FLAG = 1,
      BIND_KEY_FLAG = 2,
      CURRY_BOUND_FLAG = 4,
      CURRY_FLAG = 8,
      CURRY_RIGHT_FLAG = 16,
      PARTIAL_FLAG = 32,
      PARTIAL_RIGHT_FLAG = 64,
      ARY_FLAG = 128,
      REARG_FLAG = 256;

  /** Used as default options for `_.trunc`. */
  var DEFAULT_TRUNC_LENGTH = 30,
      DEFAULT_TRUNC_OMISSION = '...';

  /** Used to detect when a function becomes hot. */
  var HOT_COUNT = 150,
      HOT_SPAN = 16;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used to indicate the type of lazy iteratees. */
  var LAZY_FILTER_FLAG = 1,
      LAZY_MAP_FLAG = 2;

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match empty string literals in compiled template source. */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /** Used to match HTML entities and HTML characters. */
  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
      reUnescapedHtml = /[&<>"'`]/g,
      reHasEscapedHtml = RegExp(reEscapedHtml.source),
      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g,
      reEvaluate = /<%([\s\S]+?)%>/g,
      reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

  /**
   * Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns)
   * and those outlined by [`EscapeRegExpPattern`](http://ecma-international.org/ecma-262/6.0/#sec-escaperegexppattern).
   */
  var reRegExpChars = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
      reHasRegExpChars = RegExp(reRegExpChars.source);

  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect hexadecimal string values. */
  var reHasHexPrefix = /^0[xX]/;

  /** Used to detect host constructors (Safari > 5). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^\d+$/;

  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

  /** Used to ensure capturing order of template delimiters. */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals. */
  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

  /** Used to match words to create compound words. */
  var reWords = (function() {
    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
  }());

  /** Used to assign default `context` object properties. */
  var contextProps = [
    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'isFinite',
    'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap'
  ];

  /** Used to make template sourceURLs easier to identify. */
  var templateCounter = -1;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
  cloneableTags[dateTag] = cloneableTags[float32Tag] =
  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[stringTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[mapTag] = cloneableTags[setTag] =
  cloneableTags[weakMapTag] = false;

  /** Used to map latin-1 supplementary letters to basic latin letters. */
  var deburredLetters = {
    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
    '\xc7': 'C',  '\xe7': 'c',
    '\xd0': 'D',  '\xf0': 'd',
    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
    '\xd1': 'N',  '\xf1': 'n',
    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
    '\xc6': 'Ae', '\xe6': 'ae',
    '\xde': 'Th', '\xfe': 'th',
    '\xdf': 'ss'
  };

  /** Used to map characters to HTML entities. */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;'
  };

  /** Used to map HTML entities to characters. */
  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&#96;': '`'
  };

  /** Used to determine if values are of the language type `Object`. */
  var objectTypes = {
    'function': true,
    'object': true
  };

  /** Used to escape characters for inclusion in compiled regexes. */
  var regexpEscapes = {
    '0': 'x30', '1': 'x31', '2': 'x32', '3': 'x33', '4': 'x34',
    '5': 'x35', '6': 'x36', '7': 'x37', '8': 'x38', '9': 'x39',
    'A': 'x41', 'B': 'x42', 'C': 'x43', 'D': 'x44', 'E': 'x45', 'F': 'x46',
    'a': 'x61', 'b': 'x62', 'c': 'x63', 'd': 'x64', 'e': 'x65', 'f': 'x66',
    'n': 'x6e', 'r': 'x72', 't': 'x74', 'u': 'x75', 'v': 'x76', 'x': 'x78'
  };

  /** Used to escape characters for inclusion in compiled string literals. */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Detect free variable `exports`. */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

  /** Detect free variable `self`. */
  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

  /** Detect free variable `window`. */
  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /**
   * Used as a reference to the global object.
   *
   * The `this` value is used if it's the global object to avoid Greasemonkey's
   * restricted `window` object, otherwise the `window` object is used.
   */
  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `compareAscending` which compares values and
   * sorts them in ascending order without guaranteeing a stable sort.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {number} Returns the sort order indicator for `value`.
   */
  function baseCompareAscending(value, other) {
    if (value !== other) {
      var valIsNull = value === null,
          valIsUndef = value === undefined,
          valIsReflexive = value === value;

      var othIsNull = other === null,
          othIsUndef = other === undefined,
          othIsReflexive = other === other;

      if ((value > other && !othIsNull) || !valIsReflexive ||
          (valIsNull && !othIsUndef && othIsReflexive) ||
          (valIsUndef && othIsReflexive)) {
        return 1;
      }
      if ((value < other && !valIsNull) || !othIsReflexive ||
          (othIsNull && !valIsUndef && valIsReflexive) ||
          (othIsUndef && valIsReflexive)) {
        return -1;
      }
    }
    return 0;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for callback shorthands and `this` binding.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {Function} predicate The function invoked per iteration.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromRight) {
    var length = array.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without support for binary searches.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
      return indexOfNaN(array, fromIndex);
    }
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isFunction` without support for environments
   * with incorrect `typeof` results.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
   */
  function baseIsFunction(value) {
    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
    return typeof value == 'function' || false;
  }

  /**
   * Converts `value` to a string if it's not one. An empty string is returned
   * for `null` or `undefined` values.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    return value == null ? '' : (value + '');
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the first character not found in `chars`.
   */
  function charsLeftIndex(string, chars) {
    var index = -1,
        length = string.length;

    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last character
   * of `string` that is not found in `chars`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @param {string} chars The characters to find.
   * @returns {number} Returns the index of the last character not found in `chars`.
   */
  function charsRightIndex(string, chars) {
    var index = string.length;

    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
    return index;
  }

  /**
   * Used by `_.sortBy` to compare transformed elements of a collection and stable
   * sort them in ascending order.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareAscending(object, other) {
    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
  }

  /**
   * Used by `_.sortByOrder` to compare multiple properties of a value to another
   * and stable sort them.
   *
   * If `orders` is unspecified, all valuess are sorted in ascending order. Otherwise,
   * a value is sorted in ascending order if its corresponding order is "asc", and
   * descending if "desc".
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {boolean[]} orders The order to sort by for each property.
   * @returns {number} Returns the sort order indicator for `object`.
   */
  function compareMultiple(object, other, orders) {
    var index = -1,
        objCriteria = object.criteria,
        othCriteria = other.criteria,
        length = objCriteria.length,
        ordersLength = orders.length;

    while (++index < length) {
      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
      if (result) {
        if (index >= ordersLength) {
          return result;
        }
        var order = orders[index];
        return result * ((order === 'asc' || order === true) ? 1 : -1);
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
  }

  /**
   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
   *
   * @private
   * @param {string} letter The matched letter to deburr.
   * @returns {string} Returns the deburred letter.
   */
  function deburrLetter(letter) {
    return deburredLetters[letter];
  }

  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeHtmlChar(chr) {
    return htmlEscapes[chr];
  }

  /**
   * Used by `_.escapeRegExp` to escape characters for inclusion in compiled regexes.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @param {string} leadingChar The capture group for a leading character.
   * @param {string} whitespaceChar The capture group for a whitespace character.
   * @returns {string} Returns the escaped character.
   */
  function escapeRegExpChar(chr, leadingChar, whitespaceChar) {
    if (leadingChar) {
      chr = regexpEscapes[chr];
    } else if (whitespaceChar) {
      chr = stringEscapes[chr];
    }
    return '\\' + chr;
  }

  /**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(chr) {
    return '\\' + stringEscapes[chr];
  }

  /**
   * Gets the index at which the first occurrence of `NaN` is found in `array`.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
   */
  function indexOfNaN(array, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 0 : -1);

    while ((fromRight ? index-- : ++index < length)) {
      var other = array[index];
      if (other !== other) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Checks if `value` is object-like.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
   * character code is whitespace.
   *
   * @private
   * @param {number} charCode The character code to inspect.
   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
   */
  function isSpace(charCode) {
    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
  }

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      if (array[index] === placeholder) {
        array[index] = PLACEHOLDER;
        result[++resIndex] = index;
      }
    }
    return result;
  }

  /**
   * An implementation of `_.uniq` optimized for sorted arrays without support
   * for callback shorthands and `this` binding.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} [iteratee] The function invoked per iteration.
   * @returns {Array} Returns the new duplicate-value-free array.
   */
  function sortedUniq(array, iteratee) {
    var seen,
        index = -1,
        length = array.length,
        resIndex = -1,
        result = [];

    while (++index < length) {
      var value = array[index],
          computed = iteratee ? iteratee(value, index, array) : value;

      if (!index || seen !== computed) {
        seen = computed;
        result[++resIndex] = value;
      }
    }
    return result;
  }

  /**
   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the first non-whitespace character.
   */
  function trimmedLeftIndex(string) {
    var index = -1,
        length = string.length;

    while (++index < length && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /**
   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedRightIndex(string) {
    var index = string.length;

    while (index-- && isSpace(string.charCodeAt(index))) {}
    return index;
  }

  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  function unescapeHtmlChar(chr) {
    return htmlUnescapes[chr];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new pristine `lodash` function using the given `context` object.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns a new `lodash` function.
   * @example
   *
   * _.mixin({ 'foo': _.constant('foo') });
   *
   * var lodash = _.runInContext();
   * lodash.mixin({ 'bar': lodash.constant('bar') });
   *
   * _.isFunction(_.foo);
   * // => true
   * _.isFunction(_.bar);
   * // => false
   *
   * lodash.isFunction(lodash.foo);
   * // => false
   * lodash.isFunction(lodash.bar);
   * // => true
   *
   * // using `context` to mock `Date#getTime` use in `_.now`
   * var mock = _.runInContext({
   *   'Date': function() {
   *     return { 'getTime': getTimeMock };
   *   }
   * });
   *
   * // or creating a suped-up `defer` in Node.js
   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
   */
  function runInContext(context) {
    // Avoid issues with some ES3 environments that attempt to use values, named
    // after built-in constructors like `Object`, for the creation of literals.
    // ES5 clears this up by stating that literals must use built-in constructors.
    // See https://es5.github.io/#x11.1.5 for more details.
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

    /** Native constructor references. */
    var Array = context.Array,
        Date = context.Date,
        Error = context.Error,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /** Used for native method references. */
    var arrayProto = Array.prototype,
        objectProto = Object.prototype,
        stringProto = String.prototype;

    /** Used to resolve the decompiled source of functions. */
    var fnToString = Function.prototype.toString;

    /** Used to check objects for own properties. */
    var hasOwnProperty = objectProto.hasOwnProperty;

    /** Used to generate unique IDs. */
    var idCounter = 0;

    /**
     * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objToString = objectProto.toString;

    /** Used to restore the original `_` reference in `_.noConflict`. */
    var oldDash = root._;

    /** Used to detect if a method is native. */
    var reIsNative = RegExp('^' +
      fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
    );

    /** Native method references. */
    var ArrayBuffer = context.ArrayBuffer,
        clearTimeout = context.clearTimeout,
        parseFloat = context.parseFloat,
        pow = Math.pow,
        propertyIsEnumerable = objectProto.propertyIsEnumerable,
        Set = getNative(context, 'Set'),
        setTimeout = context.setTimeout,
        splice = arrayProto.splice,
        Uint8Array = context.Uint8Array,
        WeakMap = getNative(context, 'WeakMap');

    /* Native method references for those with the same name as other `lodash` methods. */
    var nativeCeil = Math.ceil,
        nativeCreate = getNative(Object, 'create'),
        nativeFloor = Math.floor,
        nativeIsArray = getNative(Array, 'isArray'),
        nativeIsFinite = context.isFinite,
        nativeKeys = getNative(Object, 'keys'),
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeNow = getNative(Date, 'now'),
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;

    /** Used as references for `-Infinity` and `Infinity`. */
    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

    /** Used as references for the maximum length and index of an array. */
    var MAX_ARRAY_LENGTH = 4294967295,
        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

    /**
     * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
     * of an array-like value.
     */
    var MAX_SAFE_INTEGER = 9007199254740991;

    /** Used to store function metadata. */
    var metaMap = WeakMap && new WeakMap;

    /** Used to lookup unminified function names. */
    var realNames = {};

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
     * Methods that operate on and return arrays, collections, and functions can
     * be chained together. Methods that retrieve a single value or may return a
     * primitive value will automatically end the chain returning the unwrapped
     * value. Explicit chaining may be enabled using `_.chain`. The execution of
     * chained methods is lazy, that is, execution is deferred until `_#value`
     * is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
     * fusion is an optimization strategy which merge iteratee calls; this can help
     * to avoid the creation of intermediate data structures and greatly reduce the
     * number of iteratee executions.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
     * `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
     * and `where`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defaultsDeep`,
     * `defer`, `delay`, `difference`, `drop`, `dropRight`, `dropRightWhile`,
     * `dropWhile`, `fill`, `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`,
     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
     * `invoke`, `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`,
     * `matchesProperty`, `memoize`, `merge`, `method`, `methodOf`, `mixin`,
     * `modArgs`, `negate`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
     * `partition`, `pick`, `plant`, `pluck`, `property`, `propertyOf`, `pull`,
     * `pullAt`, `push`, `range`, `rearg`, `reject`, `remove`, `rest`, `restParam`,
     * `reverse`, `set`, `shuffle`, `slice`, `sort`, `sortBy`, `sortByAll`,
     * `sortByOrder`, `splice`, `spread`, `take`, `takeRight`, `takeRightWhile`,
     * `takeWhile`, `tap`, `throttle`, `thru`, `times`, `toArray`, `toPlainObject`,
     * `transform`, `union`, `uniq`, `unshift`, `unzip`, `unzipWith`, `values`,
     * `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clone`, `cloneDeep`,
     * `deburr`, `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`,
     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`,
     * `floor`, `get`, `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`,
     * `inRange`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
     * `isEmpty`, `isEqual`, `isError`, `isFinite` `isFunction`, `isMatch`,
     * `isNative`, `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`,
     * `isRegExp`, `isString`, `isUndefined`, `isTypedArray`, `join`, `kebabCase`,
     * `last`, `lastIndexOf`, `lt`, `lte`, `max`, `min`, `noConflict`, `noop`,
     * `now`, `pad`, `padLeft`, `padRight`, `parseInt`, `pop`, `random`, `reduce`,
     * `reduceRight`, `repeat`, `result`, `round`, `runInContext`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedLastIndex`, `startCase`,
     * `startsWith`, `sum`, `template`, `trim`, `trimLeft`, `trimRight`, `trunc`,
     * `unescape`, `uniqueId`, `value`, and `words`
     *
     * The wrapper method `sample` will return a wrapped value when `n` is provided,
     * otherwise an unwrapped value is returned.
     *
     * @name _
     * @constructor
     * @category Chain
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // returns an unwrapped value
     * wrapped.reduce(function(total, n) {
     *   return total + n;
     * });
     * // => 6
     *
     * // returns a wrapped value
     * var squares = wrapped.map(function(n) {
     *   return n * n;
     * });
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }

    /**
     * The function whose prototype all chaining wrappers inherit from.
     *
     * @private
     */
    function baseLodash() {
      // No operation performed.
    }

    /**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
     */
    function LodashWrapper(value, chainAll, actions) {
      this.__wrapped__ = value;
      this.__actions__ = actions || [];
      this.__chain__ = !!chainAll;
    }

    /**
     * An object environment feature flags.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    var support = lodash.support = {};

    /**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB). Change the following template settings to use
     * alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'escape': reEscape,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'evaluate': reEvaluate,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type string
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type Object
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type Function
         */
        '_': lodash
      }
    };

    /*------------------------------------------------------------------------*/

    /**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @param {*} value The value to wrap.
     */
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = POSITIVE_INFINITY;
      this.__views__ = [];
    }

    /**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
    function lazyClone() {
      var result = new LazyWrapper(this.__wrapped__);
      result.__actions__ = arrayCopy(this.__actions__);
      result.__dir__ = this.__dir__;
      result.__filtered__ = this.__filtered__;
      result.__iteratees__ = arrayCopy(this.__iteratees__);
      result.__takeCount__ = this.__takeCount__;
      result.__views__ = arrayCopy(this.__views__);
      return result;
    }

    /**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
    function lazyReverse() {
      if (this.__filtered__) {
        var result = new LazyWrapper(this);
        result.__dir__ = -1;
        result.__filtered__ = true;
      } else {
        result = this.clone();
        result.__dir__ *= -1;
      }
      return result;
    }

    /**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
    function lazyValue() {
      var array = this.__wrapped__.value(),
          dir = this.__dir__,
          isArr = isArray(array),
          isRight = dir < 0,
          arrLength = isArr ? array.length : 0,
          view = getView(0, arrLength, this.__views__),
          start = view.start,
          end = view.end,
          length = end - start,
          index = isRight ? end : (start - 1),
          iteratees = this.__iteratees__,
          iterLength = iteratees.length,
          resIndex = 0,
          takeCount = nativeMin(length, this.__takeCount__);

      if (!isArr || arrLength < LARGE_ARRAY_SIZE || (arrLength == length && takeCount == length)) {
        return baseWrapperValue((isRight && isArr) ? array.reverse() : array, this.__actions__);
      }
      var result = [];

      outer:
      while (length-- && resIndex < takeCount) {
        index += dir;

        var iterIndex = -1,
            value = array[index];

        while (++iterIndex < iterLength) {
          var data = iteratees[iterIndex],
              iteratee = data.iteratee,
              type = data.type,
              computed = iteratee(value);

          if (type == LAZY_MAP_FLAG) {
            value = computed;
          } else if (!computed) {
            if (type == LAZY_FILTER_FLAG) {
              continue outer;
            } else {
              break outer;
            }
          }
        }
        result[resIndex++] = value;
      }
      return result;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a cache object to store key/value pairs.
     *
     * @private
     * @static
     * @name Cache
     * @memberOf _.memoize
     */
    function MapCache() {
      this.__data__ = {};
    }

    /**
     * Removes `key` and its value from the cache.
     *
     * @private
     * @name delete
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
     */
    function mapDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }

    /**
     * Gets the cached value for `key`.
     *
     * @private
     * @name get
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the cached value.
     */
    function mapGet(key) {
      return key == '__proto__' ? undefined : this.__data__[key];
    }

    /**
     * Checks if a cached value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
    function mapHas(key) {
      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
    }

    /**
     * Sets `value` to `key` of the cache.
     *
     * @private
     * @name set
     * @memberOf _.memoize.Cache
     * @param {string} key The key of the value to cache.
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache object.
     */
    function mapSet(key, value) {
      if (key != '__proto__') {
        this.__data__[key] = value;
      }
      return this;
    }

    /*------------------------------------------------------------------------*/

    /**
     *
     * Creates a cache object to store unique values.
     *
     * @private
     * @param {Array} [values] The values to cache.
     */
    function SetCache(values) {
      var length = values ? values.length : 0;

      this.data = { 'hash': nativeCreate(null), 'set': new Set };
      while (length--) {
        this.push(values[length]);
      }
    }

    /**
     * Checks if `value` is in `cache` mimicking the return signature of
     * `_.indexOf` by returning `0` if the value is found, else `-1`.
     *
     * @private
     * @param {Object} cache The cache to search.
     * @param {*} value The value to search for.
     * @returns {number} Returns `0` if `value` is found, else `-1`.
     */
    function cacheIndexOf(cache, value) {
      var data = cache.data,
          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

      return result ? 0 : -1;
    }

    /**
     * Adds `value` to the cache.
     *
     * @private
     * @name push
     * @memberOf SetCache
     * @param {*} value The value to cache.
     */
    function cachePush(value) {
      var data = this.data;
      if (typeof value == 'string' || isObject(value)) {
        data.set.add(value);
      } else {
        data.hash[value] = true;
      }
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a new array joining `array` with `other`.
     *
     * @private
     * @param {Array} array The array to join.
     * @param {Array} other The other array to join.
     * @returns {Array} Returns the new concatenated array.
     */
    function arrayConcat(array, other) {
      var index = -1,
          length = array.length,
          othIndex = -1,
          othLength = other.length,
          result = Array(length + othLength);

      while (++index < length) {
        result[index] = array[index];
      }
      while (++othIndex < othLength) {
        result[index++] = other[othIndex];
      }
      return result;
    }

    /**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
    function arrayCopy(source, array) {
      var index = -1,
          length = source.length;

      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.forEach` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEach(array, iteratee) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * A specialized version of `_.forEachRight` for arrays without support for
     * callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns `array`.
     */
    function arrayEachRight(array, iteratee) {
      var length = array.length;

      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }

    /**
     * A specialized version of `_.every` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     */
    function arrayEvery(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }

    /**
     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
     * with one argument: (value).
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {*} Returns the extremum value.
     */
    function arrayExtremum(array, iteratee, comparator, exValue) {
      var index = -1,
          length = array.length,
          computed = exValue,
          result = computed;

      while (++index < length) {
        var value = array[index],
            current = +iteratee(value);

        if (comparator(current, computed)) {
          computed = current;
          result = value;
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.filter` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function arrayFilter(array, predicate) {
      var index = -1,
          length = array.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.map` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function arrayMap(array, iteratee) {
      var index = -1,
          length = array.length,
          result = Array(length);

      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }

    /**
     * Appends the elements of `values` to `array`.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to append.
     * @returns {Array} Returns `array`.
     */
    function arrayPush(array, values) {
      var index = -1,
          length = values.length,
          offset = array.length;

      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }

    /**
     * A specialized version of `_.reduce` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initFromArray] Specify using the first element of `array`
     *  as the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduce(array, iteratee, accumulator, initFromArray) {
      var index = -1,
          length = array.length;

      if (initFromArray && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }

    /**
     * A specialized version of `_.reduceRight` for arrays without support for
     * callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {boolean} [initFromArray] Specify using the last element of `array`
     *  as the initial value.
     * @returns {*} Returns the accumulated value.
     */
    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
      var length = array.length;
      if (initFromArray && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }

    /**
     * A specialized version of `_.some` for arrays without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function arraySome(array, predicate) {
      var index = -1,
          length = array.length;

      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }

    /**
     * A specialized version of `_.sum` for arrays without support for callback
     * shorthands and `this` binding..
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */
    function arraySum(array, iteratee) {
      var length = array.length,
          result = 0;

      while (length--) {
        result += +iteratee(array[length]) || 0;
      }
      return result;
    }

    /**
     * Used by `_.defaults` to customize its `_.assign` use.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function assignDefaults(objectValue, sourceValue) {
      return objectValue === undefined ? sourceValue : objectValue;
    }

    /**
     * Used by `_.template` to customize its `_.assign` use.
     *
     * **Note:** This function is like `assignDefaults` except that it ignores
     * inherited property values when checking if a property is `undefined`.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @param {string} key The key associated with the object and source values.
     * @param {Object} object The destination object.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function assignOwnDefaults(objectValue, sourceValue, key, object) {
      return (objectValue === undefined || !hasOwnProperty.call(object, key))
        ? sourceValue
        : objectValue;
    }

    /**
     * A specialized version of `_.assign` for customizing assigned values without
     * support for argument juggling, multiple sources, and `this` binding `customizer`
     * functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Object} Returns `object`.
     */
    function assignWith(object, source, customizer) {
      var index = -1,
          props = keys(source),
          length = props.length;

      while (++index < length) {
        var key = props[index],
            value = object[key],
            result = customizer(value, source[key], key, object, source);

        if ((result === result ? (result !== value) : (value === value)) ||
            (value === undefined && !(key in object))) {
          object[key] = result;
        }
      }
      return object;
    }

    /**
     * The base implementation of `_.assign` without support for argument juggling,
     * multiple sources, and `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
    function baseAssign(object, source) {
      return source == null
        ? object
        : baseCopy(source, keys(source), object);
    }

    /**
     * The base implementation of `_.at` without support for string collections
     * and individual key arguments.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {number[]|string[]} props The property names or indexes of elements to pick.
     * @returns {Array} Returns the new array of picked elements.
     */
    function baseAt(collection, props) {
      var index = -1,
          isNil = collection == null,
          isArr = !isNil && isArrayLike(collection),
          length = isArr ? collection.length : 0,
          propsLength = props.length,
          result = Array(propsLength);

      while(++index < propsLength) {
        var key = props[index];
        if (isArr) {
          result[index] = isIndex(key, length) ? collection[key] : undefined;
        } else {
          result[index] = isNil ? undefined : collection[key];
        }
      }
      return result;
    }

    /**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property names to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @returns {Object} Returns `object`.
     */
    function baseCopy(source, props, object) {
      object || (object = {});

      var index = -1,
          length = props.length;

      while (++index < length) {
        var key = props[index];
        object[key] = source[key];
      }
      return object;
    }

    /**
     * The base implementation of `_.callback` which supports specifying the
     * number of arguments to provide to `func`.
     *
     * @private
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {number} [argCount] The number of arguments to provide to `func`.
     * @returns {Function} Returns the callback.
     */
    function baseCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (type == 'function') {
        return thisArg === undefined
          ? func
          : bindCallback(func, thisArg, argCount);
      }
      if (func == null) {
        return identity;
      }
      if (type == 'object') {
        return baseMatches(func);
      }
      return thisArg === undefined
        ? property(func)
        : baseMatchesProperty(func, thisArg);
    }

    /**
     * The base implementation of `_.clone` without support for argument juggling
     * and `this` binding `customizer` functions.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The object `value` belongs to.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates clones with source counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object) : customizer(value);
      }
      if (result !== undefined) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return arrayCopy(value, result);
        }
      } else {
        var tag = objToString.call(value),
            isFunc = tag == funcTag;

        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return baseAssign(result, value);
          }
        } else {
          return cloneableTags[tag]
            ? initCloneByTag(value, tag, isDeep)
            : (object ? value : {});
        }
      }
      // Check for circular references and return its corresponding clone.
      stackA || (stackA = []);
      stackB || (stackB = []);

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == value) {
          return stackB[length];
        }
      }
      // Add the source value to the stack of traversed objects and associate it with its clone.
      stackA.push(value);
      stackB.push(result);

      // Recursively populate clone (susceptible to call stack limits).
      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
      });
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    var baseCreate = (function() {
      function object() {}
      return function(prototype) {
        if (isObject(prototype)) {
          object.prototype = prototype;
          var result = new object;
          object.prototype = undefined;
        }
        return result || {};
      };
    }());

    /**
     * The base implementation of `_.delay` and `_.defer` which accepts an index
     * of where to slice the arguments to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Object} args The arguments provide to `func`.
     * @returns {number} Returns the timer id.
     */
    function baseDelay(func, wait, args) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * The base implementation of `_.difference` which accepts a single array
     * of values to exclude.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     */
    function baseDifference(array, values) {
      var length = array ? array.length : 0,
          result = [];

      if (!length) {
        return result;
      }
      var index = -1,
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
          valuesLength = values.length;

      if (cache) {
        indexOf = cacheIndexOf;
        isCommon = false;
        values = cache;
      }
      outer:
      while (++index < length) {
        var value = array[index];

        if (isCommon && value === value) {
          var valuesIndex = valuesLength;
          while (valuesIndex--) {
            if (values[valuesIndex] === value) {
              continue outer;
            }
          }
          result.push(value);
        }
        else if (indexOf(values, value, 0) < 0) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.forEach` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object|string} Returns `collection`.
     */
    var baseEach = createBaseEach(baseForOwn);

    /**
     * The base implementation of `_.forEachRight` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object|string} Returns `collection`.
     */
    var baseEachRight = createBaseEach(baseForOwnRight, true);

    /**
     * The base implementation of `_.every` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection) {
        result = !!predicate(value, index, collection);
        return result;
      });
      return result;
    }

    /**
     * Gets the extremum value of `collection` invoking `iteratee` for each value
     * in `collection` to generate the criterion by which the value is ranked.
     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {*} Returns the extremum value.
     */
    function baseExtremum(collection, iteratee, comparator, exValue) {
      var computed = exValue,
          result = computed;

      baseEach(collection, function(value, index, collection) {
        var current = +iteratee(value, index, collection);
        if (comparator(current, computed) || (current === exValue && current === result)) {
          computed = current;
          result = value;
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
    function baseFill(array, value, start, end) {
      var length = array.length;

      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : (end >>> 0);
      start >>>= 0;

      while (start < length) {
        array[start++] = value;
      }
      return array;
    }

    /**
     * The base implementation of `_.filter` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
    function baseFilter(collection, predicate) {
      var result = [];
      baseEach(collection, function(value, index, collection) {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
     * without support for callback shorthands and `this` binding, which iterates
     * over `collection` using the provided `eachFunc`.
     *
     * @private
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function} predicate The function invoked per iteration.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @param {boolean} [retKey] Specify returning the key of the found element
     *  instead of the element itself.
     * @returns {*} Returns the found element or its key, else `undefined`.
     */
    function baseFind(collection, predicate, eachFunc, retKey) {
      var result;
      eachFunc(collection, function(value, key, collection) {
        if (predicate(value, key, collection)) {
          result = retKey ? key : value;
          return false;
        }
      });
      return result;
    }

    /**
     * The base implementation of `_.flatten` with added support for restricting
     * flattening and specifying the start index.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
    function baseFlatten(array, isDeep, isStrict, result) {
      result || (result = []);

      var index = -1,
          length = array.length;

      while (++index < length) {
        var value = array[index];
        if (isObjectLike(value) && isArrayLike(value) &&
            (isStrict || isArray(value) || isArguments(value))) {
          if (isDeep) {
            // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, isDeep, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }

    /**
     * The base implementation of `baseForIn` and `baseForOwn` which iterates
     * over `object` properties returned by `keysFunc` invoking `iteratee` for
     * each property. Iteratee functions may exit iteration early by explicitly
     * returning `false`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseFor = createBaseFor();

    /**
     * This function is like `baseFor` except that it iterates over properties
     * in the opposite order.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {Function} keysFunc The function to get the keys of `object`.
     * @returns {Object} Returns `object`.
     */
    var baseForRight = createBaseFor(true);

    /**
     * The base implementation of `_.forIn` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForIn(object, iteratee) {
      return baseFor(object, iteratee, keysIn);
    }

    /**
     * The base implementation of `_.forOwn` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwn(object, iteratee) {
      return baseFor(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.forOwnRight` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
    function baseForOwnRight(object, iteratee) {
      return baseForRight(object, iteratee, keys);
    }

    /**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from those provided.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the new array of filtered property names.
     */
    function baseFunctions(object, props) {
      var index = -1,
          length = props.length,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var key = props[index];
        if (isFunction(object[key])) {
          result[++resIndex] = key;
        }
      }
      return result;
    }

    /**
     * The base implementation of `get` without support for string paths
     * and default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path of the property to get.
     * @param {string} [pathKey] The key representation of path.
     * @returns {*} Returns the resolved value.
     */
    function baseGet(object, path, pathKey) {
      if (object == null) {
        return;
      }
      if (pathKey !== undefined && pathKey in toObject(object)) {
        path = [pathKey];
      }
      var index = 0,
          length = path.length;

      while (object != null && index < length) {
        object = object[path[index++]];
      }
      return (index && index == length) ? object : undefined;
    }

    /**
     * The base implementation of `_.isEqual` without support for `this` binding
     * `customizer` functions.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize comparing values.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
    }

    /**
     * A specialized version of `baseIsEqual` for arrays and objects which performs
     * deep comparisons and tracks traversed objects enabling objects with circular
     * references to be compared.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing objects.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objIsArr = isArray(object),
          othIsArr = isArray(other),
          objTag = arrayTag,
          othTag = arrayTag;

      if (!objIsArr) {
        objTag = objToString.call(object);
        if (objTag == argsTag) {
          objTag = objectTag;
        } else if (objTag != objectTag) {
          objIsArr = isTypedArray(object);
        }
      }
      if (!othIsArr) {
        othTag = objToString.call(other);
        if (othTag == argsTag) {
          othTag = objectTag;
        } else if (othTag != objectTag) {
          othIsArr = isTypedArray(other);
        }
      }
      var objIsObj = objTag == objectTag,
          othIsObj = othTag == objectTag,
          isSameTag = objTag == othTag;

      if (isSameTag && !(objIsArr || objIsObj)) {
        return equalByTag(object, other, objTag);
      }
      if (!isLoose) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

        if (objIsWrapped || othIsWrapped) {
          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
        }
      }
      if (!isSameTag) {
        return false;
      }
      // Assume cyclic values are equal.
      // For more information on detecting circular references see https://es5.github.io/#JO.
      stackA || (stackA = []);
      stackB || (stackB = []);

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == object) {
          return stackB[length] == other;
        }
      }
      // Add `object` and `other` to the stack of traversed objects.
      stackA.push(object);
      stackB.push(other);

      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

      stackA.pop();
      stackB.pop();

      return result;
    }

    /**
     * The base implementation of `_.isMatch` without support for callback
     * shorthands and `this` binding.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} matchData The propery names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparing objects.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
    function baseIsMatch(object, matchData, customizer) {
      var index = matchData.length,
          length = index,
          noCustomizer = !customizer;

      if (object == null) {
        return !length;
      }
      object = toObject(object);
      while (index--) {
        var data = matchData[index];
        if ((noCustomizer && data[2])
              ? data[1] !== object[data[0]]
              : !(data[0] in object)
            ) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0],
            objValue = object[key],
            srcValue = data[1];

        if (noCustomizer && data[2]) {
          if (objValue === undefined && !(key in object)) {
            return false;
          }
        } else {
          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
            return false;
          }
        }
      }
      return true;
    }

    /**
     * The base implementation of `_.map` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
    function baseMap(collection, iteratee) {
      var index = -1,
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
      });
      return result;
    }

    /**
     * The base implementation of `_.matches` which does not clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     */
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        var key = matchData[0][0],
            value = matchData[0][1];

        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === value && (value !== undefined || (key in toObject(object)));
        };
      }
      return function(object) {
        return baseIsMatch(object, matchData);
      };
    }

    /**
     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to compare.
     * @returns {Function} Returns the new function.
     */
    function baseMatchesProperty(path, srcValue) {
      var isArr = isArray(path),
          isCommon = isKey(path) && isStrictComparable(srcValue),
          pathKey = (path + '');

      path = toPath(path);
      return function(object) {
        if (object == null) {
          return false;
        }
        var key = pathKey;
        object = toObject(object);
        if ((isArr || !isCommon) && !(key in object)) {
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          if (object == null) {
            return false;
          }
          key = last(path);
          object = toObject(object);
        }
        return object[key] === srcValue
          ? (srcValue !== undefined || (key in object))
          : baseIsEqual(srcValue, object[key], undefined, true);
      };
    }

    /**
     * The base implementation of `_.merge` without support for argument juggling,
     * multiple sources, and `this` binding `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     * @returns {Object} Returns `object`.
     */
    function baseMerge(object, source, customizer, stackA, stackB) {
      if (!isObject(object)) {
        return object;
      }
      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
          props = isSrcArr ? undefined : keys(source);

      arrayEach(props || source, function(srcValue, key) {
        if (props) {
          key = srcValue;
          srcValue = source[key];
        }
        if (isObjectLike(srcValue)) {
          stackA || (stackA = []);
          stackB || (stackB = []);
          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
        }
        else {
          var value = object[key],
              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
              isCommon = result === undefined;

          if (isCommon) {
            result = srcValue;
          }
          if ((result !== undefined || (isSrcArr && !(key in object))) &&
              (isCommon || (result === result ? (result !== value) : (value === value)))) {
            object[key] = result;
          }
        }
      });
      return object;
    }

    /**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
      var length = stackA.length,
          srcValue = source[key];

      while (length--) {
        if (stackA[length] == srcValue) {
          object[key] = stackB[length];
          return;
        }
      }
      var value = object[key],
          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
          isCommon = result === undefined;

      if (isCommon) {
        result = srcValue;
        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
          result = isArray(value)
            ? value
            : (isArrayLike(value) ? arrayCopy(value) : []);
        }
        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          result = isArguments(value)
            ? toPlainObject(value)
            : (isPlainObject(value) ? value : {});
        }
        else {
          isCommon = false;
        }
      }
      // Add the source value to the stack of traversed objects and associate
      // it with its merged value.
      stackA.push(srcValue);
      stackB.push(result);

      if (isCommon) {
        // Recursively merge objects and arrays (susceptible to call stack limits).
        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
      } else if (result === result ? (result !== value) : (value === value)) {
        object[key] = result;
      }
    }

    /**
     * The base implementation of `_.property` without support for deep paths.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @returns {Function} Returns the new function.
     */
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined : object[key];
      };
    }

    /**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     */
    function basePropertyDeep(path) {
      var pathKey = (path + '');
      path = toPath(path);
      return function(object) {
        return baseGet(object, path, pathKey);
      };
    }

    /**
     * The base implementation of `_.pullAt` without support for individual
     * index arguments and capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
    function basePullAt(array, indexes) {
      var length = array ? indexes.length : 0;
      while (length--) {
        var index = indexes[length];
        if (index != previous && isIndex(index)) {
          var previous = index;
          splice.call(array, index, 1);
        }
      }
      return array;
    }

    /**
     * The base implementation of `_.random` without support for argument juggling
     * and returning floating-point numbers.
     *
     * @private
     * @param {number} min The minimum possible value.
     * @param {number} max The maximum possible value.
     * @returns {number} Returns the random number.
     */
    function baseRandom(min, max) {
      return min + nativeFloor(nativeRandom() * (max - min + 1));
    }

    /**
     * The base implementation of `_.reduce` and `_.reduceRight` without support
     * for callback shorthands and `this` binding, which iterates over `collection`
     * using the provided `eachFunc`.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {*} accumulator The initial value.
     * @param {boolean} initFromCollection Specify using the first or last element
     *  of `collection` as the initial value.
     * @param {Function} eachFunc The function to iterate over `collection`.
     * @returns {*} Returns the accumulated value.
     */
    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
      eachFunc(collection, function(value, index, collection) {
        accumulator = initFromCollection
          ? (initFromCollection = false, value)
          : iteratee(accumulator, value, index, collection);
      });
      return accumulator;
    }

    /**
     * The base implementation of `setData` without support for hot loop detection.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };

    /**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseSlice(array, start, end) {
      var index = -1,
          length = array.length;

      start = start == null ? 0 : (+start || 0);
      if (start < 0) {
        start = -start > length ? 0 : (length + start);
      }
      end = (end === undefined || end > length) ? length : (+end || 0);
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : ((end - start) >>> 0);
      start >>>= 0;

      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }

    /**
     * The base implementation of `_.some` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
    function baseSome(collection, predicate) {
      var result;

      baseEach(collection, function(value, index, collection) {
        result = predicate(value, index, collection);
        return !result;
      });
      return !!result;
    }

    /**
     * The base implementation of `_.sortBy` which uses `comparer` to define
     * the sort order of `array` and replaces criteria objects with their
     * corresponding values.
     *
     * @private
     * @param {Array} array The array to sort.
     * @param {Function} comparer The function to define sort order.
     * @returns {Array} Returns `array`.
     */
    function baseSortBy(array, comparer) {
      var length = array.length;

      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }

    /**
     * The base implementation of `_.sortByOrder` without param guards.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {boolean[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
    function baseSortByOrder(collection, iteratees, orders) {
      var callback = getCallback(),
          index = -1;

      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

      var result = baseMap(collection, function(value) {
        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
        return { 'criteria': criteria, 'index': ++index, 'value': value };
      });

      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }

    /**
     * The base implementation of `_.sum` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {number} Returns the sum.
     */
    function baseSum(collection, iteratee) {
      var result = 0;
      baseEach(collection, function(value, index, collection) {
        result += +iteratee(value, index, collection) || 0;
      });
      return result;
    }

    /**
     * The base implementation of `_.uniq` without support for callback shorthands
     * and `this` binding.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The function invoked per iteration.
     * @returns {Array} Returns the new duplicate-value-free array.
     */
    function baseUniq(array, iteratee) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array.length,
          isCommon = indexOf == baseIndexOf,
          isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
          seen = isLarge ? createCache() : null,
          result = [];

      if (seen) {
        indexOf = cacheIndexOf;
        isCommon = false;
      } else {
        isLarge = false;
        seen = iteratee ? [] : result;
      }
      outer:
      while (++index < length) {
        var value = array[index],
            computed = iteratee ? iteratee(value, index, array) : value;

        if (isCommon && value === value) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        }
        else if (indexOf(seen, computed, 0) < 0) {
          if (iteratee || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.values` and `_.valuesIn` which creates an
     * array of `object` property values corresponding to the property names
     * of `props`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} props The property names to get values for.
     * @returns {Object} Returns the array of property values.
     */
    function baseValues(object, props) {
      var index = -1,
          length = props.length,
          result = Array(length);

      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }

    /**
     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
     * and `_.takeWhile` without support for callback shorthands and `this` binding.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
    function baseWhile(array, predicate, isDrop, fromRight) {
      var length = array.length,
          index = fromRight ? length : -1;

      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
      return isDrop
        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
    }

    /**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to peform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
    function baseWrapperValue(value, actions) {
      var result = value;
      if (result instanceof LazyWrapper) {
        result = result.value();
      }
      var index = -1,
          length = actions.length;

      while (++index < length) {
        var action = actions[index];
        result = action.func.apply(action.thisArg, arrayPush([result], action.args));
      }
      return result;
    }

    /**
     * Performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function binaryIndex(array, value, retHighest) {
      var low = 0,
          high = array ? array.length : low;

      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
        while (low < high) {
          var mid = (low + high) >>> 1,
              computed = array[mid];

          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return high;
      }
      return binaryIndexBy(array, value, identity, retHighest);
    }

    /**
     * This function is like `binaryIndex` except that it invokes `iteratee` for
     * `value` and each element of `array` to compute their sort ranking. The
     * iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The function invoked per iteration.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
    function binaryIndexBy(array, value, iteratee, retHighest) {
      value = iteratee(value);

      var low = 0,
          high = array ? array.length : 0,
          valIsNaN = value !== value,
          valIsNull = value === null,
          valIsUndef = value === undefined;

      while (low < high) {
        var mid = nativeFloor((low + high) / 2),
            computed = iteratee(array[mid]),
            isDef = computed !== undefined,
            isReflexive = computed === computed;

        if (valIsNaN) {
          var setLow = isReflexive || retHighest;
        } else if (valIsNull) {
          setLow = isReflexive && isDef && (retHighest || computed != null);
        } else if (valIsUndef) {
          setLow = isReflexive && (retHighest || isDef);
        } else if (computed == null) {
          setLow = false;
        } else {
          setLow = retHighest ? (computed <= value) : (computed < value);
        }
        if (setLow) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
      return nativeMin(high, MAX_ARRAY_INDEX);
    }

    /**
     * A specialized version of `baseCallback` which only supports `this` binding
     * and specifying the number of arguments to provide to `func`.
     *
     * @private
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {number} [argCount] The number of arguments to provide to `func`.
     * @returns {Function} Returns the callback.
     */
    function bindCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      if (thisArg === undefined) {
        return func;
      }
      switch (argCount) {
        case 1: return function(value) {
          return func.call(thisArg, value);
        };
        case 3: return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
        case 4: return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
        case 5: return function(value, other, key, object, source) {
          return func.call(thisArg, value, other, key, object, source);
        };
      }
      return function() {
        return func.apply(thisArg, arguments);
      };
    }

    /**
     * Creates a clone of the given array buffer.
     *
     * @private
     * @param {ArrayBuffer} buffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
    function bufferClone(buffer) {
      var result = new ArrayBuffer(buffer.byteLength),
          view = new Uint8Array(result);

      view.set(new Uint8Array(buffer));
      return result;
    }

    /**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array|Object} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgs(args, partials, holders) {
      var holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          leftIndex = -1,
          leftLength = partials.length,
          result = Array(leftLength + argsLength);

      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
      while (argsLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }

    /**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array|Object} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @returns {Array} Returns the new array of composed arguments.
     */
    function composeArgsRight(args, partials, holders) {
      var holdersIndex = -1,
          holdersLength = holders.length,
          argsIndex = -1,
          argsLength = nativeMax(args.length - holdersLength, 0),
          rightIndex = -1,
          rightLength = partials.length,
          result = Array(argsLength + rightLength);

      while (++argsIndex < argsLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
      return result;
    }

    /**
     * Creates a `_.countBy`, `_.groupBy`, `_.indexBy`, or `_.partition` function.
     *
     * @private
     * @param {Function} setter The function to set keys and values of the accumulator object.
     * @param {Function} [initializer] The function to initialize the accumulator object.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter, initializer) {
      return function(collection, iteratee, thisArg) {
        var result = initializer ? initializer() : {};
        iteratee = getCallback(iteratee, thisArg, 3);

        if (isArray(collection)) {
          var index = -1,
              length = collection.length;

          while (++index < length) {
            var value = collection[index];
            setter(result, value, iteratee(value, index, collection), collection);
          }
        } else {
          baseEach(collection, function(value, key, collection) {
            setter(result, value, iteratee(value, key, collection), collection);
          });
        }
        return result;
      };
    }

    /**
     * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
    function createAssigner(assigner) {
      return restParam(function(object, sources) {
        var index = -1,
            length = object == null ? 0 : sources.length,
            customizer = length > 2 ? sources[length - 2] : undefined,
            guard = length > 2 ? sources[2] : undefined,
            thisArg = length > 1 ? sources[length - 1] : undefined;

        if (typeof customizer == 'function') {
          customizer = bindCallback(customizer, thisArg, 5);
          length -= 2;
        } else {
          customizer = typeof thisArg == 'function' ? thisArg : undefined;
          length -= (customizer ? 1 : 0);
        }
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? undefined : customizer;
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, customizer);
          }
        }
        return object;
      });
    }

    /**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        var length = collection ? getLength(collection) : 0;
        if (!isLength(length)) {
          return eachFunc(collection, iteratee);
        }
        var index = fromRight ? length : -1,
            iterable = toObject(collection);

        while ((fromRight ? index-- : ++index < length)) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }

    /**
     * Creates a base function for `_.forIn` or `_.forInRight`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var iterable = toObject(object),
            props = keysFunc(object),
            length = props.length,
            index = fromRight ? length : -1;

        while ((fromRight ? index-- : ++index < length)) {
          var key = props[index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }

    /**
     * Creates a function that wraps `func` and invokes it with the `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to bind.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new bound function.
     */
    function createBindWrapper(func, thisArg) {
      var Ctor = createCtorWrapper(func);

      function wrapper() {
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(thisArg, arguments);
      }
      return wrapper;
    }

    /**
     * Creates a `Set` cache object to optimize linear searches of large arrays.
     *
     * @private
     * @param {Array} [values] The values to cache.
     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
     */
    function createCache(values) {
      return (nativeCreate && Set) ? new SetCache(values) : null;
    }

    /**
     * Creates a function that produces compound words out of the words in a
     * given string.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
    function createCompounder(callback) {
      return function(string) {
        var index = -1,
            array = words(deburr(string)),
            length = array.length,
            result = '';

        while (++index < length) {
          result = callback(result, array[index], index);
        }
        return result;
      };
    }

    /**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
    function createCtorWrapper(Ctor) {
      return function() {
        // Use a `switch` statement to work with class constructors.
        // See http://ecma-international.org/ecma-262/6.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch (args.length) {
          case 0: return new Ctor;
          case 1: return new Ctor(args[0]);
          case 2: return new Ctor(args[0], args[1]);
          case 3: return new Ctor(args[0], args[1], args[2]);
          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype),
            result = Ctor.apply(thisBinding, args);

        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
      };
    }

    /**
     * Creates a `_.curry` or `_.curryRight` function.
     *
     * @private
     * @param {boolean} flag The curry bit flag.
     * @returns {Function} Returns the new curry function.
     */
    function createCurry(flag) {
      function curryFunc(func, arity, guard) {
        if (guard && isIterateeCall(func, arity, guard)) {
          arity = undefined;
        }
        var result = createWrapper(func, flag, undefined, undefined, undefined, undefined, undefined, arity);
        result.placeholder = curryFunc.placeholder;
        return result;
      }
      return curryFunc;
    }

    /**
     * Creates a `_.defaults` or `_.defaultsDeep` function.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @param {Function} customizer The function to customize assigned values.
     * @returns {Function} Returns the new defaults function.
     */
    function createDefaults(assigner, customizer) {
      return restParam(function(args) {
        var object = args[0];
        if (object == null) {
          return object;
        }
        args.push(customizer);
        return assigner.apply(undefined, args);
      });
    }

    /**
     * Creates a `_.max` or `_.min` function.
     *
     * @private
     * @param {Function} comparator The function used to compare values.
     * @param {*} exValue The initial extremum value.
     * @returns {Function} Returns the new extremum function.
     */
    function createExtremum(comparator, exValue) {
      return function(collection, iteratee, thisArg) {
        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
          iteratee = undefined;
        }
        iteratee = getCallback(iteratee, thisArg, 3);
        if (iteratee.length == 1) {
          collection = isArray(collection) ? collection : toIterable(collection);
          var result = arrayExtremum(collection, iteratee, comparator, exValue);
          if (!(collection.length && result === exValue)) {
            return result;
          }
        }
        return baseExtremum(collection, iteratee, comparator, exValue);
      };
    }

    /**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new find function.
     */
    function createFind(eachFunc, fromRight) {
      return function(collection, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        if (isArray(collection)) {
          var index = baseFindIndex(collection, predicate, fromRight);
          return index > -1 ? collection[index] : undefined;
        }
        return baseFind(collection, predicate, eachFunc);
      };
    }

    /**
     * Creates a `_.findIndex` or `_.findLastIndex` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new find function.
     */
    function createFindIndex(fromRight) {
      return function(array, predicate, thisArg) {
        if (!(array && array.length)) {
          return -1;
        }
        predicate = getCallback(predicate, thisArg, 3);
        return baseFindIndex(array, predicate, fromRight);
      };
    }

    /**
     * Creates a `_.findKey` or `_.findLastKey` function.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new find function.
     */
    function createFindKey(objectFunc) {
      return function(object, predicate, thisArg) {
        predicate = getCallback(predicate, thisArg, 3);
        return baseFind(object, predicate, objectFunc, true);
      };
    }

    /**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
    function createFlow(fromRight) {
      return function() {
        var wrapper,
            length = arguments.length,
            index = fromRight ? length : -1,
            leftIndex = 0,
            funcs = Array(length);

        while ((fromRight ? index-- : ++index < length)) {
          var func = funcs[leftIndex++] = arguments[index];
          if (typeof func != 'function') {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
            wrapper = new LodashWrapper([], true);
          }
        }
        index = wrapper ? -1 : length;
        while (++index < length) {
          func = funcs[index];

          var funcName = getFuncName(func),
              data = funcName == 'wrapper' ? getData(func) : undefined;

          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
          } else {
            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
          }
        }
        return function() {
          var args = arguments,
              value = args[0];

          if (wrapper && args.length == 1 && isArray(value) && value.length >= LARGE_ARRAY_SIZE) {
            return wrapper.plant(value).value();
          }
          var index = 0,
              result = length ? funcs[index].apply(this, args) : value;

          while (++index < length) {
            result = funcs[index].call(this, result);
          }
          return result;
        };
      };
    }

    /**
     * Creates a function for `_.forEach` or `_.forEachRight`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over an array.
     * @param {Function} eachFunc The function to iterate over a collection.
     * @returns {Function} Returns the new each function.
     */
    function createForEach(arrayFunc, eachFunc) {
      return function(collection, iteratee, thisArg) {
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
          ? arrayFunc(collection, iteratee)
          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
      };
    }

    /**
     * Creates a function for `_.forIn` or `_.forInRight`.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new each function.
     */
    function createForIn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee, keysIn);
      };
    }

    /**
     * Creates a function for `_.forOwn` or `_.forOwnRight`.
     *
     * @private
     * @param {Function} objectFunc The function to iterate over an object.
     * @returns {Function} Returns the new each function.
     */
    function createForOwn(objectFunc) {
      return function(object, iteratee, thisArg) {
        if (typeof iteratee != 'function' || thisArg !== undefined) {
          iteratee = bindCallback(iteratee, thisArg, 3);
        }
        return objectFunc(object, iteratee);
      };
    }

    /**
     * Creates a function for `_.mapKeys` or `_.mapValues`.
     *
     * @private
     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
     * @returns {Function} Returns the new map function.
     */
    function createObjectMapper(isMapKeys) {
      return function(object, iteratee, thisArg) {
        var result = {};
        iteratee = getCallback(iteratee, thisArg, 3);

        baseForOwn(object, function(value, key, object) {
          var mapped = iteratee(value, key, object);
          key = isMapKeys ? mapped : key;
          value = isMapKeys ? value : mapped;
          result[key] = value;
        });
        return result;
      };
    }

    /**
     * Creates a function for `_.padLeft` or `_.padRight`.
     *
     * @private
     * @param {boolean} [fromRight] Specify padding from the right.
     * @returns {Function} Returns the new pad function.
     */
    function createPadDir(fromRight) {
      return function(string, length, chars) {
        string = baseToString(string);
        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
      };
    }

    /**
     * Creates a `_.partial` or `_.partialRight` function.
     *
     * @private
     * @param {boolean} flag The partial bit flag.
     * @returns {Function} Returns the new partial function.
     */
    function createPartial(flag) {
      var partialFunc = restParam(function(func, partials) {
        var holders = replaceHolders(partials, partialFunc.placeholder);
        return createWrapper(func, flag, undefined, partials, holders);
      });
      return partialFunc;
    }

    /**
     * Creates a function for `_.reduce` or `_.reduceRight`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over an array.
     * @param {Function} eachFunc The function to iterate over a collection.
     * @returns {Function} Returns the new each function.
     */
    function createReduce(arrayFunc, eachFunc) {
      return function(collection, iteratee, accumulator, thisArg) {
        var initFromArray = arguments.length < 3;
        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
      };
    }

    /**
     * Creates a function that wraps `func` and invokes it with optional `this`
     * binding of, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & ARY_FLAG,
          isBind = bitmask & BIND_FLAG,
          isBindKey = bitmask & BIND_KEY_FLAG,
          isCurry = bitmask & CURRY_FLAG,
          isCurryBound = bitmask & CURRY_BOUND_FLAG,
          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
          Ctor = isBindKey ? undefined : createCtorWrapper(func);

      function wrapper() {
        // Avoid `arguments` object use disqualifying optimizations by
        // converting it to an array before providing it to other functions.
        var length = arguments.length,
            index = length,
            args = Array(length);

        while (index--) {
          args[index] = arguments[index];
        }
        if (partials) {
          args = composeArgs(args, partials, holders);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight);
        }
        if (isCurry || isCurryRight) {
          var placeholder = wrapper.placeholder,
              argsHolders = replaceHolders(args, placeholder);

          length -= argsHolders.length;
          if (length < arity) {
            var newArgPos = argPos ? arrayCopy(argPos) : undefined,
                newArity = nativeMax(arity - length, 0),
                newsHolders = isCurry ? argsHolders : undefined,
                newHoldersRight = isCurry ? undefined : argsHolders,
                newPartials = isCurry ? args : undefined,
                newPartialsRight = isCurry ? undefined : args;

            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

            if (!isCurryBound) {
              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
            }
            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
                result = createHybridWrapper.apply(undefined, newData);

            if (isLaziable(func)) {
              setData(result, newData);
            }
            result.placeholder = placeholder;
            return result;
          }
        }
        var thisBinding = isBind ? thisArg : this,
            fn = isBindKey ? thisBinding[func] : func;

        if (argPos) {
          args = reorder(args, argPos);
        }
        if (isAry && ary < args.length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtorWrapper(func);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }

    /**
     * Creates the padding required for `string` based on the given `length`.
     * The `chars` string is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {string} string The string to create padding for.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the pad for `string`.
     */
    function createPadding(string, length, chars) {
      var strLength = string.length;
      length = +length;

      if (strLength >= length || !nativeIsFinite(length)) {
        return '';
      }
      var padLength = length - strLength;
      chars = chars == null ? ' ' : (chars + '');
      return repeat(chars, nativeCeil(padLength / chars.length)).slice(0, padLength);
    }

    /**
     * Creates a function that wraps `func` and invokes it with the optional `this`
     * binding of `thisArg` and the `partials` prepended to those provided to
     * the wrapper.
     *
     * @private
     * @param {Function} func The function to partially apply arguments to.
     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to the new function.
     * @returns {Function} Returns the new bound function.
     */
    function createPartialWrapper(func, bitmask, thisArg, partials) {
      var isBind = bitmask & BIND_FLAG,
          Ctor = createCtorWrapper(func);

      function wrapper() {
        // Avoid `arguments` object use disqualifying optimizations by
        // converting it to an array before providing it `func`.
        var argsIndex = -1,
            argsLength = arguments.length,
            leftIndex = -1,
            leftLength = partials.length,
            args = Array(leftLength + argsLength);

        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, args);
      }
      return wrapper;
    }

    /**
     * Creates a `_.ceil`, `_.floor`, or `_.round` function.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
    function createRound(methodName) {
      var func = Math[methodName];
      return function(number, precision) {
        precision = precision === undefined ? 0 : (+precision || 0);
        if (precision) {
          precision = pow(10, precision);
          return func(number * precision) / precision;
        }
        return func(number);
      };
    }

    /**
     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
     *
     * @private
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {Function} Returns the new index function.
     */
    function createSortedIndex(retHighest) {
      return function(array, value, iteratee, thisArg) {
        var callback = getCallback(iteratee);
        return (iteratee == null && callback === baseCallback)
          ? binaryIndex(array, value, retHighest)
          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
      };
    }

    /**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of flags.
     *  The bitmask may be composed of the following flags:
     *     1 - `_.bind`
     *     2 - `_.bindKey`
     *     4 - `_.curry` or `_.curryRight` of a bound function
     *     8 - `_.curry`
     *    16 - `_.curryRight`
     *    32 - `_.partial`
     *    64 - `_.partialRight`
     *   128 - `_.rearg`
     *   256 - `_.ary`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & BIND_KEY_FLAG;
      if (!isBindKey && typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
      }
      length -= (holders ? holders.length : 0);
      if (bitmask & PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials,
            holdersRight = holders;

        partials = holders = undefined;
      }
      var data = isBindKey ? undefined : getData(func),
          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

      if (data) {
        mergeData(newData, data);
        bitmask = newData[1];
        arity = newData[9];
      }
      newData[9] = arity == null
        ? (isBindKey ? 0 : func.length)
        : (nativeMax(arity - length, 0) || 0);

      if (bitmask == BIND_FLAG) {
        var result = createBindWrapper(newData[0], newData[2]);
      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
        result = createPartialWrapper.apply(undefined, newData);
      } else {
        result = createHybridWrapper.apply(undefined, newData);
      }
      var setter = data ? baseSetData : setData;
      return setter(result, newData);
    }

    /**
     * A specialized version of `baseIsEqualDeep` for arrays with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Array} array The array to compare.
     * @param {Array} other The other array to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing arrays.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
     */
    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var index = -1,
          arrLength = array.length,
          othLength = other.length;

      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
        return false;
      }
      // Ignore non-index properties.
      while (++index < arrLength) {
        var arrValue = array[index],
            othValue = other[index],
            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

        if (result !== undefined) {
          if (result) {
            continue;
          }
          return false;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (isLoose) {
          if (!arraySome(other, function(othValue) {
                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
              })) {
            return false;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
          return false;
        }
      }
      return true;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for comparing objects of
     * the same `toStringTag`.
     *
     * **Note:** This function only supports comparing values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {string} tag The `toStringTag` of the objects to compare.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalByTag(object, other, tag) {
      switch (tag) {
        case boolTag:
        case dateTag:
          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
          return +object == +other;

        case errorTag:
          return object.name == other.name && object.message == other.message;

        case numberTag:
          // Treat `NaN` vs. `NaN` as equal.
          return (object != +object)
            ? other != +other
            : object == +other;

        case regexpTag:
        case stringTag:
          // Coerce regexes to strings and treat strings primitives and string
          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
          return object == (other + '');
      }
      return false;
    }

    /**
     * A specialized version of `baseIsEqualDeep` for objects with support for
     * partial deep comparisons.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {Function} equalFunc The function to determine equivalents of values.
     * @param {Function} [customizer] The function to customize comparing values.
     * @param {boolean} [isLoose] Specify performing partial comparisons.
     * @param {Array} [stackA] Tracks traversed `value` objects.
     * @param {Array} [stackB] Tracks traversed `other` objects.
     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
     */
    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
      var objProps = keys(object),
          objLength = objProps.length,
          othProps = keys(other),
          othLength = othProps.length;

      if (objLength != othLength && !isLoose) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var skipCtor = isLoose;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key],
            othValue = other[key],
            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

        // Recursively compare objects (susceptible to call stack limits).
        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
          return false;
        }
        skipCtor || (skipCtor = key == 'constructor');
      }
      if (!skipCtor) {
        var objCtor = object.constructor,
            othCtor = other.constructor;

        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ('constructor' in object && 'constructor' in other) &&
            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
          return false;
        }
      }
      return true;
    }

    /**
     * Gets the appropriate "callback" function. If the `_.callback` method is
     * customized this function returns the custom method, otherwise it returns
     * the `baseCallback` function. If arguments are provided the chosen function
     * is invoked with them and its result is returned.
     *
     * @private
     * @returns {Function} Returns the chosen function or its result.
     */
    function getCallback(func, thisArg, argCount) {
      var result = lodash.callback || callback;
      result = result === callback ? baseCallback : result;
      return argCount ? result(func, thisArg, argCount) : result;
    }

    /**
     * Gets metadata for `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {*} Returns the metadata for `func`.
     */
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };

    /**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
    function getFuncName(func) {
      var result = func.name,
          array = realNames[result],
          length = array ? array.length : 0;

      while (length--) {
        var data = array[length],
            otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }

    /**
     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
     * customized this function returns the custom method, otherwise it returns
     * the `baseIndexOf` function. If arguments are provided the chosen function
     * is invoked with them and its result is returned.
     *
     * @private
     * @returns {Function|number} Returns the chosen function or its result.
     */
    function getIndexOf(collection, target, fromIndex) {
      var result = lodash.indexOf || indexOf;
      result = result === indexOf ? baseIndexOf : result;
      return collection ? result(collection, target, fromIndex) : result;
    }

    /**
     * Gets the "length" property value of `object`.
     *
     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
     * that affects Safari on at least iOS 8.1-8.3 ARM64.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {*} Returns the "length" value.
     */
    var getLength = baseProperty('length');

    /**
     * Gets the propery names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
    function getMatchData(object) {
      var result = pairs(object),
          length = result.length;

      while (length--) {
        result[length][2] = isStrictComparable(result[length][1]);
      }
      return result;
    }

    /**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
    function getNative(object, key) {
      var value = object == null ? undefined : object[key];
      return isNative(value) ? value : undefined;
    }

    /**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
    function getView(start, end, transforms) {
      var index = -1,
          length = transforms.length;

      while (++index < length) {
        var data = transforms[index],
            size = data.size;

        switch (data.type) {
          case 'drop':      start += size; break;
          case 'dropRight': end -= size; break;
          case 'take':      end = nativeMin(end, start + size); break;
          case 'takeRight': start = nativeMax(start, end - size); break;
        }
      }
      return { 'start': start, 'end': end };
    }

    /**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
    function initCloneArray(array) {
      var length = array.length,
          result = new array.constructor(length);

      // Add array properties assigned by `RegExp#exec`.
      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }

    /**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneObject(object) {
      var Ctor = object.constructor;
      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
        Ctor = Object;
      }
      return new Ctor;
    }

    /**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return bufferClone(object);

        case boolTag:
        case dateTag:
          return new Ctor(+object);

        case float32Tag: case float64Tag:
        case int8Tag: case int16Tag: case int32Tag:
        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
          var buffer = object.buffer;
          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

        case numberTag:
        case stringTag:
          return new Ctor(object);

        case regexpTag:
          var result = new Ctor(object.source, reFlags.exec(object));
          result.lastIndex = object.lastIndex;
      }
      return result;
    }

    /**
     * Invokes the method at `path` on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
    function invokePath(object, path, args) {
      if (object != null && !isKey(path, object)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        path = last(path);
      }
      var func = object == null ? object : object[path];
      return func == null ? undefined : func.apply(object, args);
    }

    /**
     * Checks if `value` is array-like.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
     */
    function isArrayLike(value) {
      return value != null && isLength(getLength(value));
    }

    /**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
    function isIndex(value, length) {
      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return value > -1 && value % 1 == 0 && value < length;
    }

    /**
     * Checks if the provided arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
     */
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)) {
        var other = object[index];
        return value === value ? (value === other) : (other !== other);
      }
      return false;
    }

    /**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
    function isKey(value, object) {
      var type = typeof value;
      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
        return true;
      }
      if (isArray(value)) {
        return false;
      }
      var result = !reIsDeepProp.test(value);
      return result || (object != null && value in toObject(object));
    }

    /**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
     */
    function isLaziable(func) {
      var funcName = getFuncName(func);
      if (!(funcName in LazyWrapper.prototype)) {
        return false;
      }
      var other = lodash[funcName];
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     */
    function isLength(value) {
      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }

    /**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }

    /**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers required to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
     * augment function arguments, making the order in which they are executed important,
     * preventing the merging of metadata. However, we make an exception for a safe
     * common case where curried functions have `_.ary` and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
    function mergeData(data, source) {
      var bitmask = data[1],
          srcBitmask = source[1],
          newBitmask = bitmask | srcBitmask,
          isCommon = newBitmask < ARY_FLAG;

      var isCombo =
        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

      // Exit early if metadata can't be merged.
      if (!(isCommon || isCombo)) {
        return data;
      }
      // Use source `thisArg` if available.
      if (srcBitmask & BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
      }
      // Compose partial arguments.
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
      }
      // Compose partial right arguments.
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
      }
      // Use source `argPos` if available.
      value = source[7];
      if (value) {
        data[7] = arrayCopy(value);
      }
      // Use source `ary` if it's smaller.
      if (srcBitmask & ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      // Use source `arity` if one is not provided.
      if (data[9] == null) {
        data[9] = source[9];
      }
      // Use source `func` and merge bitmasks.
      data[0] = source[0];
      data[1] = newBitmask;

      return data;
    }

    /**
     * Used by `_.defaultsDeep` to customize its `_.merge` use.
     *
     * @private
     * @param {*} objectValue The destination object property value.
     * @param {*} sourceValue The source object property value.
     * @returns {*} Returns the value to assign to the destination object.
     */
    function mergeDefaults(objectValue, sourceValue) {
      return objectValue === undefined ? sourceValue : merge(objectValue, sourceValue, mergeDefaults);
    }

    /**
     * A specialized version of `_.pick` which picks `object` properties specified
     * by `props`.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} props The property names to pick.
     * @returns {Object} Returns the new object.
     */
    function pickByArray(object, props) {
      object = toObject(object);

      var index = -1,
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index];
        if (key in object) {
          result[key] = object[key];
        }
      }
      return result;
    }

    /**
     * A specialized version of `_.pick` which picks `object` properties `predicate`
     * returns truthy for.
     *
     * @private
     * @param {Object} object The source object.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Object} Returns the new object.
     */
    function pickByCallback(object, predicate) {
      var result = {};
      baseForIn(object, function(value, key, object) {
        if (predicate(value, key, object)) {
          result[key] = value;
        }
      });
      return result;
    }

    /**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
    function reorder(array, indexes) {
      var arrLength = array.length,
          length = nativeMin(indexes.length, arrLength),
          oldArray = arrayCopy(array);

      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
      }
      return array;
    }

    /**
     * Sets metadata for `func`.
     *
     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
     * period of time, it will trip its breaker and transition to an identity function
     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
     * for more details.
     *
     * @private
     * @param {Function} func The function to associate metadata with.
     * @param {*} data The metadata.
     * @returns {Function} Returns `func`.
     */
    var setData = (function() {
      var count = 0,
          lastCalled = 0;

      return function(key, value) {
        var stamp = now(),
            remaining = HOT_SPAN - (stamp - lastCalled);

        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return key;
          }
        } else {
          count = 0;
        }
        return baseSetData(key, value);
      };
    }());

    /**
     * A fallback implementation of `Object.keys` which creates an array of the
     * own enumerable property names of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
    function shimKeys(object) {
      var props = keysIn(object),
          propsLength = props.length,
          length = propsLength && object.length;

      var allowIndexes = !!length && isLength(length) &&
        (isArray(object) || isArguments(object));

      var index = -1,
          result = [];

      while (++index < propsLength) {
        var key = props[index];
        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * Converts `value` to an array-like object if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Array|Object} Returns the array-like object.
     */
    function toIterable(value) {
      if (value == null) {
        return [];
      }
      if (!isArrayLike(value)) {
        return values(value);
      }
      return isObject(value) ? value : Object(value);
    }

    /**
     * Converts `value` to an object if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Object} Returns the object.
     */
    function toObject(value) {
      return isObject(value) ? value : Object(value);
    }

    /**
     * Converts `value` to property path array if it's not one.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {Array} Returns the property path array.
     */
    function toPath(value) {
      if (isArray(value)) {
        return value;
      }
      var result = [];
      baseToString(value).replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
      });
      return result;
    }

    /**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
    function wrapperClone(wrapper) {
      return wrapper instanceof LazyWrapper
        ? wrapper.clone()
        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements split into groups the length of `size`.
     * If `collection` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the new array containing chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
    function chunk(array, size, guard) {
      if (guard ? isIterateeCall(array, size, guard) : size == null) {
        size = 1;
      } else {
        size = nativeMax(nativeFloor(size) || 1, 1);
      }
      var index = 0,
          length = array ? array.length : 0,
          resIndex = -1,
          result = Array(nativeCeil(length / size));

      while (index < length) {
        result[++resIndex] = baseSlice(array, index, (index += size));
      }
      return result;
    }

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          resIndex = -1,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result[++resIndex] = value;
        }
      }
      return result;
    }

    /**
     * Creates an array of unique `array` values not included in the other
     * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {...Array} [values] The arrays of values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.difference([1, 2, 3], [4, 2]);
     * // => [1, 3]
     */
    var difference = restParam(function(array, values) {
      return (isObjectLike(array) && isArrayLike(array))
        ? baseDifference(array, baseFlatten(values, false, true))
        : [];
    });

    /**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function drop(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
    function dropRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that match the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
     * // => [1]
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
     * // => ['barney', 'fred']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
     * // => ['barney']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function dropRightWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
        : [];
    }

    /**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
     * // => [3]
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
     * // => ['fred', 'pebbles']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.dropWhile(users, 'active', false), 'user');
     * // => ['pebbles']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.dropWhile(users, 'active'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function dropWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
        : [];
    }

    /**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8], '*', 1, 2);
     * // => [4, '*', 8]
     */
    function fill(array, value, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
        start = 0;
        end = length;
      }
      return baseFill(array, value, start, end);
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(chr) {
     *   return chr.user == 'barney';
     * });
     * // => 0
     *
     * // using the `_.matches` callback shorthand
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findIndex(users, 'active', false);
     * // => 0
     *
     * // using the `_.property` callback shorthand
     * _.findIndex(users, 'active');
     * // => 2
     */
    var findIndex = createFindIndex();

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(chr) {
     *   return chr.user == 'pebbles';
     * });
     * // => 2
     *
     * // using the `_.matches` callback shorthand
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findLastIndex(users, 'active', false);
     * // => 2
     *
     * // using the `_.property` callback shorthand
     * _.findLastIndex(users, 'active');
     * // => 0
     */
    var findLastIndex = createFindIndex(true);

    /**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @alias head
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.first([1, 2, 3]);
     * // => 1
     *
     * _.first([]);
     * // => undefined
     */
    function first(array) {
      return array ? array[0] : undefined;
    }

    /**
     * Flattens a nested array. If `isDeep` is `true` the array is recursively
     * flattened, otherwise it is only flattened a single level.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {boolean} [isDeep] Specify a deep flatten.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, 3, [4]]]);
     * // => [1, 2, 3, [4]]
     *
     * // using `isDeep`
     * _.flatten([1, [2, 3, [4]]], true);
     * // => [1, 2, 3, 4]
     */
    function flatten(array, isDeep, guard) {
      var length = array ? array.length : 0;
      if (guard && isIterateeCall(array, isDeep, guard)) {
        isDeep = false;
      }
      return length ? baseFlatten(array, isDeep) : [];
    }

    /**
     * Recursively flattens a nested array.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to recursively flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, 3, [4]]]);
     * // => [1, 2, 3, 4]
     */
    function flattenDeep(array) {
      var length = array ? array.length : 0;
      return length ? baseFlatten(array, true) : [];
    }

    /**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
     * performs a faster binary search.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
     *  to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // using `fromIndex`
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     *
     * // performing a binary search
     * _.indexOf([1, 1, 2, 2], 2, true);
     * // => 2
     */
    function indexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      if (typeof fromIndex == 'number') {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
      } else if (fromIndex) {
        var index = binaryIndex(array, value);
        if (index < length &&
            (value === value ? (value === array[index]) : (array[index] !== array[index]))) {
          return index;
        }
        return -1;
      }
      return baseIndexOf(array, value, fromIndex || 0);
    }

    /**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
    function initial(array) {
      return dropRight(array, 1);
    }

    /**
     * Creates an array of unique values that are included in all of the provided
     * arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of shared values.
     * @example
     * _.intersection([1, 2], [4, 2], [2, 1]);
     * // => [2]
     */
    var intersection = restParam(function(arrays) {
      var othLength = arrays.length,
          othIndex = othLength,
          caches = Array(length),
          indexOf = getIndexOf(),
          isCommon = indexOf == baseIndexOf,
          result = [];

      while (othIndex--) {
        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
      }
      var array = arrays[0],
          index = -1,
          length = array ? array.length : 0,
          seen = caches[0];

      outer:
      while (++index < length) {
        value = array[index];
        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
          var othIndex = othLength;
          while (--othIndex) {
            var cache = caches[othIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
              continue outer;
            }
          }
          if (seen) {
            seen.push(value);
          }
          result.push(value);
        }
      }
      return result;
    });

    /**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
    function last(array) {
      var length = array ? array.length : 0;
      return length ? array[length - 1] : undefined;
    }

    /**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
     *  or `true` to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // using `fromIndex`
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     *
     * // performing a binary search
     * _.lastIndexOf([1, 1, 2, 2], 2, true);
     * // => 3
     */
    function lastIndexOf(array, value, fromIndex) {
      var length = array ? array.length : 0;
      if (!length) {
        return -1;
      }
      var index = length;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
      } else if (fromIndex) {
        index = binaryIndex(array, value, true) - 1;
        var other = array[index];
        if (value === value ? (value === other) : (other !== other)) {
          return index;
        }
        return -1;
      }
      if (value !== value) {
        return indexOfNaN(array, index, true);
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * Removes all provided values from `array` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * **Note:** Unlike `_.without`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...*} [values] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3, 1, 2, 3];
     *
     * _.pull(array, 2, 3);
     * console.log(array);
     * // => [1, 1]
     */
    function pull() {
      var args = arguments,
          array = args[0];

      if (!(array && array.length)) {
        return array;
      }
      var index = 0,
          indexOf = getIndexOf(),
          length = args.length;

      while (++index < length) {
        var fromIndex = 0,
            value = args[index];

        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
          splice.call(array, fromIndex, 1);
        }
      }
      return array;
    }

    /**
     * Removes elements from `array` corresponding to the given indexes and returns
     * an array of the removed elements. Indexes may be specified as an array of
     * indexes or as individual arguments.
     *
     * **Note:** Unlike `_.at`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
     *  specified as individual indexes or arrays of indexes.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [5, 10, 15, 20];
     * var evens = _.pullAt(array, 1, 3);
     *
     * console.log(array);
     * // => [5, 15]
     *
     * console.log(evens);
     * // => [10, 20]
     */
    var pullAt = restParam(function(array, indexes) {
      indexes = baseFlatten(indexes);

      var result = baseAt(array, indexes);
      basePullAt(array, indexes.sort(baseCompareAscending));
      return result;
    });

    /**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is bound to
     * `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
    function remove(array, predicate, thisArg) {
      var result = [];
      if (!(array && array.length)) {
        return result;
      }
      var index = -1,
          indexes = [],
          length = array.length;

      predicate = getCallback(predicate, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result.push(value);
          indexes.push(index);
        }
      }
      basePullAt(array, indexes);
      return result;
    }

    /**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @alias tail
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.rest([1, 2, 3]);
     * // => [2, 3]
     */
    function rest(array) {
      return drop(array, 1);
    }

    /**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of `Array#slice` to support node
     * lists in IE < 9 and to ensure dense arrays are returned.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
    function slice(array, start, end) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
        start = 0;
        end = length;
      }
      return baseSlice(array, start, end);
    }

    /**
     * Uses a binary search to determine the lowest index at which `value` should
     * be inserted into `array` in order to maintain its sort order. If an iteratee
     * function is provided it is invoked for `value` and each element of `array`
     * to compute their sort ranking. The iteratee is bound to `thisArg` and
     * invoked with one argument; (value).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     *
     * _.sortedIndex([4, 4, 5, 5], 5);
     * // => 2
     *
     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
     *
     * // using an iteratee function
     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
     *   return this.data[word];
     * }, dict);
     * // => 1
     *
     * // using the `_.property` callback shorthand
     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
     * // => 1
     */
    var sortedIndex = createSortedIndex();

    /**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 4, 5, 5], 5);
     * // => 4
     */
    var sortedLastIndex = createSortedIndex(true);

    /**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
    function take(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      return baseSlice(array, 0, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
    function takeRight(array, n, guard) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (guard ? isIterateeCall(array, n, guard) : n == null) {
        n = 1;
      }
      n = length - (+n || 0);
      return baseSlice(array, n < 0 ? 0 : n);
    }

    /**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
     * and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRightWhile([1, 2, 3], function(n) {
     *   return n > 1;
     * });
     * // => [2, 3]
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
     * // => ['pebbles']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
     * // => ['fred', 'pebbles']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
     * // => []
     */
    function takeRightWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
        : [];
    }

    /**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is bound to
     * `thisArg` and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeWhile([1, 2, 3], function(n) {
     *   return n < 3;
     * });
     * // => [1, 2]
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false},
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.takeWhile(users, 'active', false), 'user');
     * // => ['barney', 'fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.takeWhile(users, 'active'), 'user');
     * // => []
     */
    function takeWhile(array, predicate, thisArg) {
      return (array && array.length)
        ? baseWhile(array, getCallback(predicate, thisArg, 3))
        : [];
    }

    /**
     * Creates an array of unique values, in order, from all of the provided arrays
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of combined values.
     * @example
     *
     * _.union([1, 2], [4, 2], [2, 1]);
     * // => [1, 2, 4]
     */
    var union = restParam(function(arrays) {
      return baseUniq(baseFlatten(arrays, false, true));
    });

    /**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurence of each element
     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
     * for sorted arrays. If an iteratee function is provided it is invoked for
     * each element in the array to generate the criterion by which uniqueness
     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, array).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias unique
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {boolean} [isSorted] Specify the array is sorted.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new duplicate-value-free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     *
     * // using `isSorted`
     * _.uniq([1, 1, 2], true);
     * // => [1, 2]
     *
     * // using an iteratee function
     * _.uniq([1, 2.5, 1.5, 2], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => [1, 2.5]
     *
     * // using the `_.property` callback shorthand
     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniq(array, isSorted, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      if (isSorted != null && typeof isSorted != 'boolean') {
        thisArg = iteratee;
        iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
        isSorted = false;
      }
      var callback = getCallback();
      if (!(iteratee == null && callback === baseCallback)) {
        iteratee = callback(iteratee, thisArg, 3);
      }
      return (isSorted && getIndexOf() == baseIndexOf)
        ? sortedUniq(array, iteratee)
        : baseUniq(array, iteratee);
    }

    /**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     *
     * _.unzip(zipped);
     * // => [['fred', 'barney'], [30, 40], [true, false]]
     */
    function unzip(array) {
      if (!(array && array.length)) {
        return [];
      }
      var index = -1,
          length = 0;

      array = arrayFilter(array, function(group) {
        if (isArrayLike(group)) {
          length = nativeMax(group.length, length);
          return true;
        }
      });
      var result = Array(length);
      while (++index < length) {
        result[index] = arrayMap(array, baseProperty(index));
      }
      return result;
    }

    /**
     * This method is like `_.unzip` except that it accepts an iteratee to specify
     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
     * and invoked with four arguments: (accumulator, value, index, group).
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee] The function to combine regrouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
    function unzipWith(array, iteratee, thisArg) {
      var length = array ? array.length : 0;
      if (!length) {
        return [];
      }
      var result = unzip(array);
      if (iteratee == null) {
        return result;
      }
      iteratee = bindCallback(iteratee, thisArg, 4);
      return arrayMap(result, function(group) {
        return arrayReduce(group, iteratee, undefined, true);
      });
    }

    /**
     * Creates an array excluding all provided values using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {Array} array The array to filter.
     * @param {...*} [values] The values to exclude.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.without([1, 2, 1, 3], 1, 2);
     * // => [3]
     */
    var without = restParam(function(array, values) {
      return isArrayLike(array)
        ? baseDifference(array, values)
        : [];
    });

    /**
     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
     * of the provided arrays.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to inspect.
     * @returns {Array} Returns the new array of values.
     * @example
     *
     * _.xor([1, 2], [4, 2]);
     * // => [1, 4]
     */
    function xor() {
      var index = -1,
          length = arguments.length;

      while (++index < length) {
        var array = arguments[index];
        if (isArrayLike(array)) {
          var result = result
            ? arrayPush(baseDifference(result, array), baseDifference(array, result))
            : array;
        }
      }
      return result ? baseUniq(result) : [];
    }

    /**
     * Creates an array of grouped elements, the first of which contains the first
     * elements of the given arrays, the second of which contains the second elements
     * of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     */
    var zip = restParam(unzip);

    /**
     * The inverse of `_.pairs`; this method returns an object composed from arrays
     * of property names and values. Provide either a single two dimensional array,
     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
     * and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @alias object
     * @category Array
     * @param {Array} props The property names.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject([['fred', 30], ['barney', 40]]);
     * // => { 'fred': 30, 'barney': 40 }
     *
     * _.zipObject(['fred', 'barney'], [30, 40]);
     * // => { 'fred': 30, 'barney': 40 }
     */
    function zipObject(props, values) {
      var index = -1,
          length = props ? props.length : 0,
          result = {};

      if (length && !values && !isArray(props[0])) {
        values = [];
      }
      while (++index < length) {
        var key = props[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }

    /**
     * This method is like `_.zip` except that it accepts an iteratee to specify
     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
     * and invoked with four arguments: (accumulator, value, index, group).
     *
     * @static
     * @memberOf _
     * @category Array
     * @param {...Array} [arrays] The arrays to process.
     * @param {Function} [iteratee] The function to combine grouped values.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new array of grouped elements.
     * @example
     *
     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
     * // => [111, 222]
     */
    var zipWith = restParam(function(arrays) {
      var length = arrays.length,
          iteratee = length > 2 ? arrays[length - 2] : undefined,
          thisArg = length > 1 ? arrays[length - 1] : undefined;

      if (length > 2 && typeof iteratee == 'function') {
        length -= 2;
      } else {
        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
        thisArg = undefined;
      }
      arrays.length = length;
      return unzipWith(arrays, iteratee, thisArg);
    });

    /*------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object that wraps `value` with explicit method
     * chaining enabled.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _.chain(users)
     *   .sortBy('age')
     *   .map(function(chr) {
     *     return chr.user + ' is ' + chr.age;
     *   })
     *   .first()
     *   .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      var result = lodash(value);
      result.__chain__ = true;
      return result;
    }

    /**
     * This method invokes `interceptor` and returns `value`. The interceptor is
     * bound to `thisArg` and invoked with one argument; (value). The purpose of
     * this method is to "tap into" a method chain in order to perform operations
     * on intermediate results within the chain.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @param {*} [thisArg] The `this` binding of `interceptor`.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
    function tap(value, interceptor, thisArg) {
      interceptor.call(thisArg, value);
      return value;
    }

    /**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     *
     * @static
     * @memberOf _
     * @category Chain
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @param {*} [thisArg] The `this` binding of `interceptor`.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
    function thru(value, interceptor, thisArg) {
      return interceptor.call(thisArg, value);
    }

    /**
     * Enables explicit method chaining on the wrapper object.
     *
     * @name chain
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // without explicit chaining
     * _(users).first();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // with explicit chaining
     * _(users).chain()
     *   .first()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
    function wrapperChain() {
      return chain(this);
    }

    /**
     * Executes the chained sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
    function wrapperCommit() {
      return new LodashWrapper(this.value(), this.__chain__);
    }

    /**
     * Creates a new array joining a wrapped array with any additional arrays
     * and/or values.
     *
     * @name concat
     * @memberOf _
     * @category Chain
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var wrapped = _(array).concat(2, [3], [[4]]);
     *
     * console.log(wrapped.value());
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    var wrapperConcat = restParam(function(values) {
      values = baseFlatten(values);
      return this.thru(function(array) {
        return arrayConcat(isArray(array) ? array : [toObject(array)], values);
      });
    });

    /**
     * Creates a clone of the chained sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).map(function(value) {
     *   return Math.pow(value, 2);
     * });
     *
     * var other = [3, 4];
     * var otherWrapped = wrapped.plant(other);
     *
     * otherWrapped.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
    function wrapperPlant(value) {
      var result,
          parent = this;

      while (parent instanceof baseLodash) {
        var clone = wrapperClone(parent);
        if (result) {
          previous.__wrapped__ = clone;
        } else {
          result = clone;
        }
        var previous = clone;
        parent = parent.__wrapped__;
      }
      previous.__wrapped__ = value;
      return result;
    }

    /**
     * Reverses the wrapped array so the first element becomes the last, the
     * second element becomes the second to last, and so on.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @category Chain
     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
    function wrapperReverse() {
      var value = this.__wrapped__;

      var interceptor = function(value) {
        return (wrapped && wrapped.__dir__ < 0) ? value : value.reverse();
      };
      if (value instanceof LazyWrapper) {
        var wrapped = value;
        if (this.__actions__.length) {
          wrapped = new LazyWrapper(this);
        }
        wrapped = wrapped.reverse();
        wrapped.__actions__.push({ 'func': thru, 'args': [interceptor], 'thisArg': undefined });
        return new LodashWrapper(wrapped, this.__chain__);
      }
      return this.thru(interceptor);
    }

    /**
     * Produces the result of coercing the unwrapped value to a string.
     *
     * @name toString
     * @memberOf _
     * @category Chain
     * @returns {string} Returns the coerced string value.
     * @example
     *
     * _([1, 2, 3]).toString();
     * // => '1,2,3'
     */
    function wrapperToString() {
      return (this.value() + '');
    }

    /**
     * Executes the chained sequence to extract the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @alias run, toJSON, valueOf
     * @category Chain
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
    function wrapperValue() {
      return baseWrapperValue(this.__wrapped__, this.__actions__);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates an array of elements corresponding to the given keys, or indexes,
     * of `collection`. Keys may be specified as individual arguments or as arrays
     * of keys.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(number|number[]|string|string[])} [props] The property names
     *  or indexes of elements to pick, specified individually or in arrays.
     * @returns {Array} Returns the new array of picked elements.
     * @example
     *
     * _.at(['a', 'b', 'c'], [0, 2]);
     * // => ['a', 'c']
     *
     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
     * // => ['barney', 'pebbles']
     */
    var at = restParam(function(collection, props) {
      return baseAt(collection, baseFlatten(props));
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is the number of times the key was returned by `iteratee`.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy([4.3, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
    });

    /**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * The predicate is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias all
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'active': false },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.every(users, 'active', false);
     * // => true
     *
     * // using the `_.property` callback shorthand
     * _.every(users, 'active');
     * // => false
     */
    function every(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayEvery : baseEvery;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = undefined;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }

    /**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
     * invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias select
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * _.filter([4, 5, 6], function(n) {
     *   return n % 2 == 0;
     * });
     * // => [4, 6]
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.filter(users, 'active', false), 'user');
     * // => ['fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.filter(users, 'active'), 'user');
     * // => ['barney']
     */
    function filter(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, predicate);
    }

    /**
     * Iterates over elements of `collection`, returning the first element
     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
     * invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias detect
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': true },
     *   { 'user': 'fred',    'age': 40, 'active': false },
     *   { 'user': 'pebbles', 'age': 1,  'active': true }
     * ];
     *
     * _.result(_.find(users, function(chr) {
     *   return chr.age < 40;
     * }), 'user');
     * // => 'barney'
     *
     * // using the `_.matches` callback shorthand
     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
     * // => 'pebbles'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.result(_.find(users, 'active', false), 'user');
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.result(_.find(users, 'active'), 'user');
     * // => 'barney'
     */
    var find = createFind(baseEach);

    /**
     * This method is like `_.find` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(n) {
     *   return n % 2 == 1;
     * });
     * // => 3
     */
    var findLast = createFind(baseEachRight, true);

    /**
     * Performs a deep comparison between each element in `collection` and the
     * source object, returning the first element that has equivalent property
     * values.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Object} source The object of property values to match.
     * @returns {*} Returns the matched element, else `undefined`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
     * // => 'barney'
     *
     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
     * // => 'fred'
     */
    function findWhere(collection, source) {
      return find(collection, baseMatches(source));
    }

    /**
     * Iterates over elements of `collection` invoking `iteratee` for each element.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early
     * by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length" property
     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
     * may be used for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEach(function(n) {
     *   console.log(n);
     * }).value();
     * // => logs each value from left to right and returns the array
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
     *   console.log(n, key);
     * });
     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
     */
    var forEach = createForEach(arrayEach, baseEach);

    /**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias eachRight
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2]).forEachRight(function(n) {
     *   console.log(n);
     * }).value();
     * // => logs each value from right to left and returns the array
     */
    var forEachRight = createForEach(arrayEachRight, baseEachRight);

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is an array of the elements responsible for generating the key.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return Math.floor(n);
     * });
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * _.groupBy([4.2, 6.1, 6.4], function(n) {
     *   return this.floor(n);
     * }, Math);
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * // using the `_.property` callback shorthand
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        result[key] = [value];
      }
    });

    /**
     * Checks if `value` is in `collection` using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
     * from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @alias contains, include
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {*} target The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
     * // => true
     *
     * _.includes('pebbles', 'eb');
     * // => true
     */
    function includes(collection, target, fromIndex, guard) {
      var length = collection ? getLength(collection) : 0;
      if (!isLength(length)) {
        collection = values(collection);
        length = collection.length;
      }
      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
        fromIndex = 0;
      } else {
        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
      }
      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
        ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
        : (!!length && getIndexOf(collection, target, fromIndex) > -1);
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through `iteratee`. The corresponding value
     * of each key is the last element responsible for generating the key. The
     * iteratee function is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var keyData = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.indexBy(keyData, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keyData, function(object) {
     *   return String.fromCharCode(object.code);
     * });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keyData, function(object) {
     *   return this.fromCharCode(object.code);
     * }, String);
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     */
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });

    /**
     * Invokes the method at `path` of each element in `collection`, returning
     * an array of the results of each invoked method. Any additional arguments
     * are provided to each invoked method. If `methodName` is a function it is
     * invoked for, and `this` bound to, each element in `collection`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|Function|string} path The path of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invoke([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    var invoke = restParam(function(collection, path, args) {
      var index = -1,
          isFunc = typeof path == 'function',
          isProp = isKey(path),
          result = isArrayLike(collection) ? Array(collection.length) : [];

      baseEach(collection, function(value) {
        var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
      });
      return result;
    });

    /**
     * Creates an array of values by running each element in `collection` through
     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
     * `sum`, `uniq`, and `words`
     *
     * @static
     * @memberOf _
     * @alias collect
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function timesThree(n) {
     *   return n * 3;
     * }
     *
     * _.map([1, 2], timesThree);
     * // => [3, 6]
     *
     * _.map({ 'a': 1, 'b': 2 }, timesThree);
     * // => [3, 6] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // using the `_.property` callback shorthand
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
    function map(collection, iteratee, thisArg) {
      var func = isArray(collection) ? arrayMap : baseMap;
      iteratee = getCallback(iteratee, thisArg, 3);
      return func(collection, iteratee);
    }

    /**
     * Creates an array of elements split into two groups, the first of which
     * contains elements `predicate` returns truthy for, while the second of which
     * contains elements `predicate` returns falsey for. The predicate is bound
     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the array of grouped elements.
     * @example
     *
     * _.partition([1, 2, 3], function(n) {
     *   return n % 2;
     * });
     * // => [[1, 3], [2]]
     *
     * _.partition([1.2, 2.3, 3.4], function(n) {
     *   return this.floor(n) % 2;
     * }, Math);
     * // => [[1.2, 3.4], [2.3]]
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36, 'active': false },
     *   { 'user': 'fred',    'age': 40, 'active': true },
     *   { 'user': 'pebbles', 'age': 1,  'active': false }
     * ];
     *
     * var mapper = function(array) {
     *   return _.pluck(array, 'user');
     * };
     *
     * // using the `_.matches` callback shorthand
     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
     * // => [['pebbles'], ['barney', 'fred']]
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.map(_.partition(users, 'active', false), mapper);
     * // => [['barney', 'pebbles'], ['fred']]
     *
     * // using the `_.property` callback shorthand
     * _.map(_.partition(users, 'active'), mapper);
     * // => [['fred'], ['barney', 'pebbles']]
     */
    var partition = createAggregator(function(result, value, key) {
      result[key ? 0 : 1].push(value);
    }, function() { return [[], []]; });

    /**
     * Gets the property value of `path` from all elements in `collection`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|string} path The path of the property to pluck.
     * @returns {Array} Returns the property values.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.pluck(users, 'user');
     * // => ['barney', 'fred']
     *
     * var userIndex = _.indexBy(users, 'user');
     * _.pluck(userIndex, 'age');
     * // => [36, 40] (iteration order is not guaranteed)
     */
    function pluck(collection, path) {
      return map(collection, property(path));
    }

    /**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` through `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not provided the first element of `collection` is used as the initial
     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
     * and `sortByOrder`
     *
     * @static
     * @memberOf _
     * @alias foldl, inject
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.reduce([1, 2], function(total, n) {
     *   return total + n;
     * });
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     *   return result;
     * }, {});
     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
     */
    var reduce = createReduce(arrayReduce, baseEach);

    /**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias foldr
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

    /**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * _.reject([1, 2, 3, 4], function(n) {
     *   return n % 2 == 0;
     * });
     * // => [1, 3]
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
     * // => ['barney']
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.pluck(_.reject(users, 'active', false), 'user');
     * // => ['fred']
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.reject(users, 'active'), 'user');
     * // => ['barney']
     */
    function reject(collection, predicate, thisArg) {
      var func = isArray(collection) ? arrayFilter : baseFilter;
      predicate = getCallback(predicate, thisArg, 3);
      return func(collection, function(value, index, collection) {
        return !predicate(value, index, collection);
      });
    }

    /**
     * Gets a random element or `n` random elements from a collection.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to sample.
     * @param {number} [n] The number of elements to sample.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {*} Returns the random sample(s).
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     *
     * _.sample([1, 2, 3, 4], 2);
     * // => [3, 1]
     */
    function sample(collection, n, guard) {
      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
        collection = toIterable(collection);
        var length = collection.length;
        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
      }
      var index = -1,
          result = toArray(collection),
          length = result.length,
          lastIndex = length - 1;

      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
      while (++index < n) {
        var rand = baseRandom(index, lastIndex),
            value = result[rand];

        result[rand] = result[index];
        result[index] = value;
      }
      result.length = n;
      return result;
    }

    /**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
    function shuffle(collection) {
      return sample(collection, POSITIVE_INFINITY);
    }

    /**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable properties for objects.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the size of `collection`.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      var length = collection ? getLength(collection) : 0;
      return isLength(length) ? length : keys(collection).length;
    }

    /**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * The function returns as soon as it finds a passing value and does not iterate
     * over the entire collection. The predicate is bound to `thisArg` and invoked
     * with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @alias any
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // using the `_.matches` callback shorthand
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.some(users, 'active', false);
     * // => true
     *
     * // using the `_.property` callback shorthand
     * _.some(users, 'active');
     * // => true
     */
    function some(collection, predicate, thisArg) {
      var func = isArray(collection) ? arraySome : baseSome;
      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
        predicate = undefined;
      }
      if (typeof predicate != 'function' || thisArg !== undefined) {
        predicate = getCallback(predicate, thisArg, 3);
      }
      return func(collection, predicate);
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through `iteratee`. This method performs
     * a stable sort, that is, it preserves the original sort order of equal elements.
     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
     * (value, index|key, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * _.sortBy([1, 2, 3], function(n) {
     *   return Math.sin(n);
     * });
     * // => [3, 1, 2]
     *
     * _.sortBy([1, 2, 3], function(n) {
     *   return this.sin(n);
     * }, Math);
     * // => [3, 1, 2]
     *
     * var users = [
     *   { 'user': 'fred' },
     *   { 'user': 'pebbles' },
     *   { 'user': 'barney' }
     * ];
     *
     * // using the `_.property` callback shorthand
     * _.pluck(_.sortBy(users, 'user'), 'user');
     * // => ['barney', 'fred', 'pebbles']
     */
    function sortBy(collection, iteratee, thisArg) {
      if (collection == null) {
        return [];
      }
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
      }
      var index = -1;
      iteratee = getCallback(iteratee, thisArg, 3);

      var result = baseMap(collection, function(value, key, collection) {
        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
      });
      return baseSortBy(result, compareAscending);
    }

    /**
     * This method is like `_.sortBy` except that it can sort by multiple iteratees
     * or property names.
     *
     * If a property name is provided for an iteratee the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If an object is provided for an iteratee the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
     *  The iteratees to sort by, specified as individual values or arrays of values.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 34 }
     * ];
     *
     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
     *
     * _.map(_.sortByAll(users, 'user', function(chr) {
     *   return Math.floor(chr.age / 10);
     * }), _.values);
     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    var sortByAll = restParam(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var guard = iteratees[2];
      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
        iteratees.length = 1;
      }
      return baseSortByOrder(collection, baseFlatten(iteratees), []);
    });

    /**
     * This method is like `_.sortByAll` except that it allows specifying the
     * sort orders of the iteratees to sort by. If `orders` is unspecified, all
     * values are sorted in ascending order. Otherwise, a value is sorted in
     * ascending order if its corresponding order is "asc", and descending if "desc".
     *
     * If a property name is provided for an iteratee the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If an object is provided for an iteratee the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {boolean[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 42 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // sort by `user` in ascending order and by `age` in descending order
     * _.map(_.sortByOrder(users, ['user', 'age'], ['asc', 'desc']), _.values);
     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
     */
    function sortByOrder(collection, iteratees, orders, guard) {
      if (collection == null) {
        return [];
      }
      if (guard && isIterateeCall(iteratees, orders, guard)) {
        orders = undefined;
      }
      if (!isArray(iteratees)) {
        iteratees = iteratees == null ? [] : [iteratees];
      }
      if (!isArray(orders)) {
        orders = orders == null ? [] : [orders];
      }
      return baseSortByOrder(collection, iteratees, orders);
    }

    /**
     * Performs a deep comparison between each element in `collection` and the
     * source object, returning an array of all elements that have equivalent
     * property values.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Collection
     * @param {Array|Object|string} collection The collection to search.
     * @param {Object} source The object of property values to match.
     * @returns {Array} Returns the new filtered array.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
     * // => ['barney']
     *
     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
     * // => ['fred']
     */
    function where(collection, source) {
      return filter(collection, baseMatches(source));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Gets the number of milliseconds that have elapsed since the Unix epoch
     * (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @category Date
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => logs the number of milliseconds it took for the deferred function to be invoked
     */
    var now = nativeNow || function() {
      return new Date().getTime();
    };

    /*------------------------------------------------------------------------*/

    /**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it is called `n` or more times.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => logs 'done saving!' after the two async saves have completed
     */
    function after(n, func) {
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      n = nativeIsFinite(n = +n) ? n : 0;
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that accepts up to `n` arguments ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
    function ary(func, n, guard) {
      if (guard && isIterateeCall(func, n, guard)) {
        n = undefined;
      }
      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
      return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
    }

    /**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it is called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery('#add').on('click', _.before(5, addContactToList));
     * // => allows adding up to 4 contacts to the list
     */
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        if (typeof n == 'function') {
          var temp = n;
          n = func;
          func = temp;
        } else {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
      }
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and prepends any additional `_.bind` arguments to those provided to the
     * bound function.
     *
     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for partially applied arguments.
     *
     * **Note:** Unlike native `Function#bind` this method does not set the "length"
     * property of bound functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to bind.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var greet = function(greeting, punctuation) {
     *   return greeting + ' ' + this.user + punctuation;
     * };
     *
     * var object = { 'user': 'fred' };
     *
     * var bound = _.bind(greet, object, 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * // using placeholders
     * var bound = _.bind(greet, object, _, '!');
     * bound('hi');
     * // => 'hi fred!'
     */
    var bind = restParam(function(func, thisArg, partials) {
      var bitmask = BIND_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bind.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(func, bitmask, thisArg, partials, holders);
    });

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method. Method names may be specified as individual arguments or as arrays
     * of method names. If no method names are provided all enumerable function
     * properties, own and inherited, of `object` are bound.
     *
     * **Note:** This method does not set the "length" property of bound functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...(string|string[])} [methodNames] The object method names to bind,
     *  specified as individual method names or arrays of method names.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'onClick': function() {
     *     console.log('clicked ' + this.label);
     *   }
     * };
     *
     * _.bindAll(view);
     * jQuery('#docs').on('click', view.onClick);
     * // => logs 'clicked docs' when the element is clicked
     */
    var bindAll = restParam(function(object, methodNames) {
      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

      var index = -1,
          length = methodNames.length;

      while (++index < length) {
        var key = methodNames[index];
        object[key] = createWrapper(object[key], BIND_FLAG, object);
      }
      return object;
    });

    /**
     * Creates a function that invokes the method at `object[key]` and prepends
     * any additional `_.bindKey` arguments to those provided to the bound function.
     *
     * This method differs from `_.bind` by allowing bound functions to reference
     * methods that may be redefined or don't yet exist.
     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
     * for more details.
     *
     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Object} object The object the method belongs to.
     * @param {string} key The key of the method.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'user': 'fred',
     *   'greet': function(greeting, punctuation) {
     *     return greeting + ' ' + this.user + punctuation;
     *   }
     * };
     *
     * var bound = _.bindKey(object, 'greet', 'hi');
     * bound('!');
     * // => 'hi fred!'
     *
     * object.greet = function(greeting, punctuation) {
     *   return greeting + 'ya ' + this.user + punctuation;
     * };
     *
     * bound('!');
     * // => 'hiya fred!'
     *
     * // using placeholders
     * var bound = _.bindKey(object, 'greet', _, '!');
     * bound('hi');
     * // => 'hiya fred!'
     */
    var bindKey = restParam(function(object, key, partials) {
      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
      if (partials.length) {
        var holders = replaceHolders(partials, bindKey.placeholder);
        bitmask |= PARTIAL_FLAG;
      }
      return createWrapper(key, bitmask, object, partials, holders);
    });

    /**
     * Creates a function that accepts one or more arguments of `func` that when
     * called either invokes `func` returning its result, if all `func` arguments
     * have been provided, or returns a function that accepts one or more of the
     * remaining `func` arguments, and so on. The arity of `func` may be specified
     * if `func.length` is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method does not set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // using placeholders
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
    var curry = createCurry(CURRY_FLAG);

    /**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method does not set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // using placeholders
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
    var curryRight = createCurry(CURRY_RIGHT_FLAG);

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed invocations. Provide an options object to indicate that `func`
     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
     * Subsequent calls to the debounced function return the result of the last
     * `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
     * on the trailing edge of the timeout only if the the debounced function is
     * invoked more than once during the `wait` timeout.
     *
     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=false] Specify invoking on the leading
     *  edge of the timeout.
     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
     *  delayed before it is invoked.
     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
     *  edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // avoid costly calculations while the window size is in flux
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // ensure `batchLog` is invoked once after 1 second of debounced calls
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }));
     *
     * // cancel a debounced call
     * var todoChanges = _.debounce(batchLog, 1000);
     * Object.observe(models.todo, todoChanges);
     *
     * Object.observe(models, function(changes) {
     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
     *     todoChanges.cancel();
     *   }
     * }, ['delete']);
     *
     * // ...at some point `models.todo` is changed
     * models.todo.completed = true;
     *
     * // ...before 1 second has passed `models.todo` is deleted
     * // which cancels the debounced `todoChanges` call
     * delete models.todo;
     */
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = wait < 0 ? 0 : (+wait || 0);
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = !!options.leading;
        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function cancel() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        if (maxTimeoutId) {
          clearTimeout(maxTimeoutId);
        }
        lastCalled = 0;
        maxTimeoutId = timeoutId = trailingCall = undefined;
      }

      function complete(isCalled, id) {
        if (id) {
          clearTimeout(id);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (isCalled) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = undefined;
          }
        }
      }

      function delayed() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0 || remaining > wait) {
          complete(trailingCall, maxTimeoutId);
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      }

      function maxDelayed() {
        complete(trailing, timeoutId);
      }

      function debounced() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);

        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0 || remaining > maxWait;

          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          }
          else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        }
        else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = undefined;
        }
        return result;
      }
      debounced.cancel = cancel;
      return debounced;
    }

    /**
     * Defers invoking the `func` until the current call stack has cleared. Any
     * additional arguments are provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to defer.
     * @param {...*} [args] The arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) {
     *   console.log(text);
     * }, 'deferred');
     * // logs 'deferred' after one or more milliseconds
     */
    var defer = restParam(function(func, args) {
      return baseDelay(func, 1, args);
    });

    /**
     * Invokes `func` after `wait` milliseconds. Any additional arguments are
     * provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {...*} [args] The arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) {
     *   console.log(text);
     * }, 1000, 'later');
     * // => logs 'later' after one second
     */
    var delay = restParam(function(func, wait, args) {
      return baseDelay(func, wait, args);
    });

    /**
     * Creates a function that returns the result of invoking the provided
     * functions with the `this` binding of the created function, where each
     * successive invocation is supplied the return value of the previous.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {...Function} [funcs] Functions to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flow(_.add, square);
     * addSquare(1, 2);
     * // => 9
     */
    var flow = createFlow();

    /**
     * This method is like `_.flow` except that it creates a function that
     * invokes the provided functions from right to left.
     *
     * @static
     * @memberOf _
     * @alias backflow, compose
     * @category Function
     * @param {...Function} [funcs] Functions to invoke.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var addSquare = _.flowRight(square, _.add);
     * addSquare(1, 2);
     * // => 9
     */
    var flowRight = createFlow(true);

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is coerced to a string and used as the
     * cache key. The `func` is invoked with the `this` binding of the memoized
     * function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoizing function.
     * @example
     *
     * var upperCase = _.memoize(function(string) {
     *   return string.toUpperCase();
     * });
     *
     * upperCase('fred');
     * // => 'FRED'
     *
     * // modifying the result cache
     * upperCase.cache.set('fred', 'BARNEY');
     * upperCase('fred');
     * // => 'BARNEY'
     *
     * // replacing `_.memoize.Cache`
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'barney' };
     * var identity = _.memoize(_.identity);
     *
     * identity(object);
     * // => { 'user': 'fred' }
     * identity(other);
     * // => { 'user': 'fred' }
     *
     * _.memoize.Cache = WeakMap;
     * var identity = _.memoize(_.identity);
     *
     * identity(object);
     * // => { 'user': 'fred' }
     * identity(other);
     * // => { 'user': 'barney' }
     */
    function memoize(func, resolver) {
      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments,
            key = resolver ? resolver.apply(this, args) : args[0],
            cache = memoized.cache;

        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
      };
      memoized.cache = new memoize.Cache;
      return memoized;
    }

    /**
     * Creates a function that runs each argument through a corresponding
     * transform function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms] The functions to transform
     * arguments, specified as individual functions or arrays of functions.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var modded = _.modArgs(function(x, y) {
     *   return [x, y];
     * }, square, doubled);
     *
     * modded(1, 2);
     * // => [1, 4]
     *
     * modded(5, 10);
     * // => [25, 20]
     */
    var modArgs = restParam(function(func, transforms) {
      transforms = baseFlatten(transforms);
      if (typeof func != 'function' || !arrayEvery(transforms, baseIsFunction)) {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = transforms.length;
      return restParam(function(args) {
        var index = nativeMin(args.length, length);
        while (index--) {
          args[index] = transforms[index](args[index]);
        }
        return func.apply(this, args);
      });
    });

    /**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
    function negate(predicate) {
      if (typeof predicate != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function() {
        return !predicate.apply(this, arguments);
      };
    }

    /**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first call. The `func` is invoked
     * with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` invokes `createApplication` once
     */
    function once(func) {
      return before(2, func);
    }

    /**
     * Creates a function that invokes `func` with `partial` arguments prepended
     * to those provided to the new function. This method is like `_.bind` except
     * it does **not** alter the `this` binding.
     *
     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method does not set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
     *
     * var sayHelloTo = _.partial(greet, 'hello');
     * sayHelloTo('fred');
     * // => 'hello fred'
     *
     * // using placeholders
     * var greetFred = _.partial(greet, _, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     */
    var partial = createPartial(PARTIAL_FLAG);

    /**
     * This method is like `_.partial` except that partially applied arguments
     * are appended to those provided to the new function.
     *
     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for partially applied arguments.
     *
     * **Note:** This method does not set the "length" property of partially
     * applied functions.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [partials] The arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) {
     *   return greeting + ' ' + name;
     * };
     *
     * var greetFred = _.partialRight(greet, 'fred');
     * greetFred('hi');
     * // => 'hi fred'
     *
     * // using placeholders
     * var sayHelloTo = _.partialRight(greet, 'hello', _);
     * sayHelloTo('fred');
     * // => 'hello fred'
     */
    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

    /**
     * Creates a function that invokes `func` with arguments arranged according
     * to the specified indexes where the argument value at the first index is
     * provided as the first argument, the argument value at the second index is
     * provided as the second argument, and so on.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to rearrange arguments for.
     * @param {...(number|number[])} indexes The arranged argument indexes,
     *  specified as individual indexes or arrays of indexes.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var rearged = _.rearg(function(a, b, c) {
     *   return [a, b, c];
     * }, 2, 0, 1);
     *
     * rearged('b', 'c', 'a')
     * // => ['a', 'b', 'c']
     *
     * var map = _.rearg(_.map, [1, 0]);
     * map(function(n) {
     *   return n * 3;
     * }, [1, 2, 3]);
     * // => [3, 6, 9]
     */
    var rearg = restParam(function(func, indexes) {
      return createWrapper(func, REARG_FLAG, undefined, undefined, undefined, baseFlatten(indexes));
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as an array.
     *
     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.restParam(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
    function restParam(func, start) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
      return function() {
        var args = arguments,
            index = -1,
            length = nativeMax(args.length - start, 0),
            rest = Array(length);

        while (++index < length) {
          rest[index] = args[start + index];
        }
        switch (start) {
          case 0: return func.call(this, rest);
          case 1: return func.call(this, args[0], rest);
          case 2: return func.call(this, args[0], args[1], rest);
        }
        var otherArgs = Array(start + 1);
        index = -1;
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = rest;
        return func.apply(this, otherArgs);
      };
    }

    /**
     * Creates a function that invokes `func` with the `this` binding of the created
     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
     *
     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * // with a Promise
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
    function spread(func) {
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      return function(array) {
        return func.apply(this, array);
      };
    }

    /**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed invocations. Provide an options object to indicate
     * that `func` should be invoked on the leading and/or trailing edge of the
     * `wait` timeout. Subsequent calls to the throttled function return the
     * result of the last `func` call.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
     * on the trailing edge of the timeout only if the the throttled function is
     * invoked more than once during the `wait` timeout.
     *
     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=true] Specify invoking on the leading
     *  edge of the timeout.
     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
     *  edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // avoid excessively updating the position while scrolling
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
     *
     * // cancel a trailing throttled call
     * jQuery(window).on('popstate', throttled.cancel);
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
    }

    /**
     * Creates a function that provides `value` to the wrapper function as its
     * first argument. Any additional arguments provided to the function are
     * appended to those provided to the wrapper function. The wrapper is invoked
     * with the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} wrapper The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
    function wrap(value, wrapper) {
      wrapper = wrapper == null ? identity : wrapper;
      return createWrapper(wrapper, PARTIAL_FLAG, undefined, [value], []);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
     * otherwise they are assigned by reference. If `customizer` is provided it is
     * invoked to produce the cloned values. If `customizer` returns `undefined`
     * cloning is handled by the method instead. The `customizer` is bound to
     * `thisArg` and invoked with two argument; (value [, index|key, object]).
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
     * The enumerable properties of `arguments` objects and objects created by
     * constructors other than `Object` are cloned to plain `Object` objects. An
     * empty object is returned for uncloneable values such as functions, DOM nodes,
     * Maps, Sets, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {*} Returns the cloned value.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * var shallow = _.clone(users);
     * shallow[0] === users[0];
     * // => true
     *
     * var deep = _.clone(users, true);
     * deep[0] === users[0];
     * // => false
     *
     * // using a customizer callback
     * var el = _.clone(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * });
     *
     * el === document.body
     * // => false
     * el.nodeName
     * // => BODY
     * el.childNodes.length;
     * // => 0
     */
    function clone(value, isDeep, customizer, thisArg) {
      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
        isDeep = false;
      }
      else if (typeof isDeep == 'function') {
        thisArg = customizer;
        customizer = isDeep;
        isDeep = false;
      }
      return typeof customizer == 'function'
        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
        : baseClone(value, isDeep);
    }

    /**
     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
     * to produce the cloned values. If `customizer` returns `undefined` cloning
     * is handled by the method instead. The `customizer` is bound to `thisArg`
     * and invoked with two argument; (value [, index|key, object]).
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
     * The enumerable properties of `arguments` objects and objects created by
     * constructors other than `Object` are cloned to plain `Object` objects. An
     * empty object is returned for uncloneable values such as functions, DOM nodes,
     * Maps, Sets, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to deep clone.
     * @param {Function} [customizer] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {*} Returns the deep cloned value.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * var deep = _.cloneDeep(users);
     * deep[0] === users[0];
     * // => false
     *
     * // using a customizer callback
     * var el = _.cloneDeep(document.body, function(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * });
     *
     * el === document.body
     * // => false
     * el.nodeName
     * // => BODY
     * el.childNodes.length;
     * // => 20
     */
    function cloneDeep(value, customizer, thisArg) {
      return typeof customizer == 'function'
        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
        : baseClone(value, true);
    }

    /**
     * Checks if `value` is greater than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
     * @example
     *
     * _.gt(3, 1);
     * // => true
     *
     * _.gt(3, 3);
     * // => false
     *
     * _.gt(1, 3);
     * // => false
     */
    function gt(value, other) {
      return value > other;
    }

    /**
     * Checks if `value` is greater than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
     * @example
     *
     * _.gte(3, 1);
     * // => true
     *
     * _.gte(3, 3);
     * // => true
     *
     * _.gte(1, 3);
     * // => false
     */
    function gte(value, other) {
      return value >= other;
    }

    /**
     * Checks if `value` is classified as an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArguments(function() { return arguments; }());
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      return isObjectLike(value) && isArrayLike(value) &&
        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
    }

    /**
     * Checks if `value` is classified as an `Array` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isArray([1, 2, 3]);
     * // => true
     *
     * _.isArray(function() { return arguments; }());
     * // => false
     */
    var isArray = nativeIsArray || function(value) {
      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
    };

    /**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
    }

    /**
     * Checks if `value` is classified as a `Date` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     *
     * _.isDate('Mon April 23 2012');
     * // => false
     */
    function isDate(value) {
      return isObjectLike(value) && objToString.call(value) == dateTag;
    }

    /**
     * Checks if `value` is a DOM element.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
    function isElement(value) {
      return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
    }

    /**
     * Checks if `value` is empty. A value is considered empty unless it is an
     * `arguments` object, array, string, or jQuery-like collection with a length
     * greater than `0` or an object with own enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {Array|Object|string} value The value to inspect.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
    function isEmpty(value) {
      if (value == null) {
        return true;
      }
      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
          (isObjectLike(value) && isFunction(value.splice)))) {
        return !value.length;
      }
      return !keys(value).length;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent. If `customizer` is provided it is invoked to compare values.
     * If `customizer` returns `undefined` comparisons are handled by the method
     * instead. The `customizer` is bound to `thisArg` and invoked with three
     * arguments: (value, other [, index|key]).
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. Functions and DOM nodes
     * are **not** supported. Provide a customizer function to extend support
     * for comparing other values.
     *
     * @static
     * @memberOf _
     * @alias eq
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @param {Function} [customizer] The function to customize value comparisons.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var other = { 'user': 'fred' };
     *
     * object == other;
     * // => false
     *
     * _.isEqual(object, other);
     * // => true
     *
     * // using a customizer callback
     * var array = ['hello', 'goodbye'];
     * var other = ['hi', 'goodbye'];
     *
     * _.isEqual(array, other, function(value, other) {
     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
     *     return true;
     *   }
     * });
     * // => true
     */
    function isEqual(value, other, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      var result = customizer ? customizer(value, other) : undefined;
      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
    }

    /**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
    function isError(value) {
      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
    }

    /**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on [`Number.isFinite`](http://ecma-international.org/ecma-262/6.0/#sec-number.isfinite).
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(10);
     * // => true
     *
     * _.isFinite('10');
     * // => false
     *
     * _.isFinite(true);
     * // => false
     *
     * _.isFinite(Object(10));
     * // => false
     *
     * _.isFinite(Infinity);
     * // => false
     */
    function isFinite(value) {
      return typeof value == 'number' && nativeIsFinite(value);
    }

    /**
     * Checks if `value` is classified as a `Function` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     *
     * _.isFunction(/abc/);
     * // => false
     */
    function isFunction(value) {
      // The use of `Object#toString` avoids issues with the `typeof` operator
      // in older versions of Chrome and Safari which return 'function' for regexes
      // and Safari 8 equivalents which return 'object' for typed array constructors.
      return isObject(value) && objToString.call(value) == funcTag;
    }

    /**
     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(1);
     * // => false
     */
    function isObject(value) {
      // Avoid a V8 JIT bug in Chrome 19-20.
      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Performs a deep comparison between `object` and `source` to determine if
     * `object` contains equivalent property values. If `customizer` is provided
     * it is invoked to compare values. If `customizer` returns `undefined`
     * comparisons are handled by the method instead. The `customizer` is bound
     * to `thisArg` and invoked with three arguments: (value, other, index|key).
     *
     * **Note:** This method supports comparing properties of arrays, booleans,
     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
     * and DOM nodes are **not** supported. Provide a customizer function to extend
     * support for comparing other values.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize value comparisons.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.isMatch(object, { 'age': 40 });
     * // => true
     *
     * _.isMatch(object, { 'age': 36 });
     * // => false
     *
     * // using a customizer callback
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatch(object, source, function(value, other) {
     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
     * });
     * // => true
     */
    function isMatch(object, source, customizer, thisArg) {
      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
      return baseIsMatch(object, getMatchData(source), customizer);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
     * which returns `true` for `undefined` and other non-numeric values.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // An `NaN` primitive is the only value that is not equal to itself.
      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is a native function.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
    function isNative(value) {
      if (value == null) {
        return false;
      }
      if (isFunction(value)) {
        return reIsNative.test(fnToString.call(value));
      }
      return isObjectLike(value) && reIsHostCtor.test(value);
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
     * as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isNumber(8.4);
     * // => true
     *
     * _.isNumber(NaN);
     * // => true
     *
     * _.isNumber('8.4');
     * // => false
     */
    function isNumber(value) {
      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
    }

    /**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * **Note:** This method assumes objects created by the `Object` constructor
     * have no inherited enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
    function isPlainObject(value) {
      var Ctor;

      // Exit early for non `Object` objects.
      if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
          (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
        return false;
      }
      // IE < 9 iterates inherited properties before own properties. If the first
      // iterated property is an object's own property then there are no inherited
      // enumerable properties.
      var result;
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      baseForIn(value, function(subValue, key) {
        result = key;
      });
      return result === undefined || hasOwnProperty.call(value, result);
    }

    /**
     * Checks if `value` is classified as a `RegExp` object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isRegExp(/abc/);
     * // => true
     *
     * _.isRegExp('/abc/');
     * // => false
     */
    function isRegExp(value) {
      return isObject(value) && objToString.call(value) == regexpTag;
    }

    /**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
    function isString(value) {
      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
    }

    /**
     * Checks if `value` is classified as a typed array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
     * @example
     *
     * _.isTypedArray(new Uint8Array);
     * // => true
     *
     * _.isTypedArray([]);
     * // => false
     */
    function isTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
    }

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
    function isUndefined(value) {
      return value === undefined;
    }

    /**
     * Checks if `value` is less than `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
     * @example
     *
     * _.lt(1, 3);
     * // => true
     *
     * _.lt(3, 3);
     * // => false
     *
     * _.lt(3, 1);
     * // => false
     */
    function lt(value, other) {
      return value < other;
    }

    /**
     * Checks if `value` is less than or equal to `other`.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
     * @example
     *
     * _.lte(1, 3);
     * // => true
     *
     * _.lte(3, 3);
     * // => true
     *
     * _.lte(3, 1);
     * // => false
     */
    function lte(value, other) {
      return value <= other;
    }

    /**
     * Converts `value` to an array.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * (function() {
     *   return _.toArray(arguments).slice(1);
     * }(1, 2, 3));
     * // => [2, 3]
     */
    function toArray(value) {
      var length = value ? getLength(value) : 0;
      if (!isLength(length)) {
        return values(value);
      }
      if (!length) {
        return [];
      }
      return arrayCopy(value);
    }

    /**
     * Converts `value` to a plain object flattening inherited enumerable
     * properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
    function toPlainObject(value) {
      return baseCopy(value, keysIn(value));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Recursively merges own enumerable properties of the source object(s), that
     * don't resolve to `undefined` into the destination object. Subsequent sources
     * overwrite property assignments of previous sources. If `customizer` is
     * provided it is invoked to produce the merged values of the destination and
     * source properties. If `customizer` returns `undefined` merging is handled
     * by the method instead. The `customizer` is bound to `thisArg` and invoked
     * with five arguments: (objectValue, sourceValue, key, object, source).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var users = {
     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
     * };
     *
     * var ages = {
     *   'data': [{ 'age': 36 }, { 'age': 40 }]
     * };
     *
     * _.merge(users, ages);
     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
     *
     * // using a customizer callback
     * var object = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
     *
     * var other = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
     *
     * _.merge(object, other, function(a, b) {
     *   if (_.isArray(a)) {
     *     return a.concat(b);
     *   }
     * });
     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
     */
    var merge = createAssigner(baseMerge);

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object. Subsequent sources overwrite property assignments of previous sources.
     * If `customizer` is provided it is invoked to produce the assigned values.
     * The `customizer` is bound to `thisArg` and invoked with five arguments:
     * (objectValue, sourceValue, key, object, source).
     *
     * **Note:** This method mutates `object` and is based on
     * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
     *
     * @static
     * @memberOf _
     * @alias extend
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {*} [thisArg] The `this` binding of `customizer`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
     * // => { 'user': 'fred', 'age': 40 }
     *
     * // using a customizer callback
     * var defaults = _.partialRight(_.assign, function(value, other) {
     *   return _.isUndefined(value) ? other : value;
     * });
     *
     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
     * // => { 'user': 'barney', 'age': 36 }
     */
    var assign = createAssigner(function(object, source, customizer) {
      return customizer
        ? assignWith(object, source, customizer)
        : baseAssign(object, source);
    });

    /**
     * Creates an object that inherits from the given `prototype` object. If a
     * `properties` object is provided its own enumerable properties are assigned
     * to the created object.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties, guard) {
      var result = baseCreate(prototype);
      if (guard && isIterateeCall(prototype, properties, guard)) {
        properties = undefined;
      }
      return properties ? baseAssign(result, properties) : result;
    }

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object for all destination properties that resolve to `undefined`. Once a
     * property is set, additional values of the same property are ignored.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
     * // => { 'user': 'barney', 'age': 36 }
     */
    var defaults = createDefaults(assign, assignDefaults);

    /**
     * This method is like `_.defaults` except that it recursively assigns
     * default properties.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The destination object.
     * @param {...Object} [sources] The source objects.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.defaultsDeep({ 'user': { 'name': 'barney' } }, { 'user': { 'name': 'fred', 'age': 36 } });
     * // => { 'user': { 'name': 'barney', 'age': 36 } }
     *
     */
    var defaultsDeep = createDefaults(merge, mergeDefaults);

    /**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(chr) {
     *   return chr.age < 40;
     * });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // using the `_.matches` callback shorthand
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findKey(users, 'active', false);
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.findKey(users, 'active');
     * // => 'barney'
     */
    var findKey = createFindKey(baseForOwn);

    /**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * If a property name is provided for `predicate` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `predicate` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [predicate=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(chr) {
     *   return chr.age < 40;
     * });
     * // => returns `pebbles` assuming `_.findKey` returns `barney`
     *
     * // using the `_.matches` callback shorthand
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // using the `_.matchesProperty` callback shorthand
     * _.findLastKey(users, 'active', false);
     * // => 'fred'
     *
     * // using the `_.property` callback shorthand
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
    var findLastKey = createFindKey(baseForOwnRight);

    /**
     * Iterates over own and inherited enumerable properties of an object invoking
     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
     */
    var forIn = createForIn(baseFor);

    /**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
     */
    var forInRight = createForIn(baseForRight);

    /**
     * Iterates over own enumerable properties of an object invoking `iteratee`
     * for each property. The `iteratee` is bound to `thisArg` and invoked with
     * three arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'a' and 'b' (iteration order is not guaranteed)
     */
    var forOwn = createForOwn(baseForOwn);

    /**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
     */
    var forOwnRight = createForOwn(baseForOwnRight);

    /**
     * Creates an array of function property names from all enumerable properties,
     * own and inherited, of `object`.
     *
     * @static
     * @memberOf _
     * @alias methods
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the new array of property names.
     * @example
     *
     * _.functions(_);
     * // => ['after', 'ary', 'assign', ...]
     */
    function functions(object) {
      return baseFunctions(object, keysIn(object));
    }

    /**
     * Gets the property value at `path` of `object`. If the resolved value is
     * `undefined` the `defaultValue` is used in its place.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
    function get(object, path, defaultValue) {
      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
      return result === undefined ? defaultValue : result;
    }

    /**
     * Checks if `path` is a direct property.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': { 'c': 3 } } };
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b.c');
     * // => true
     *
     * _.has(object, ['a', 'b', 'c']);
     * // => true
     */
    function has(object, path) {
      if (object == null) {
        return false;
      }
      var result = hasOwnProperty.call(object, path);
      if (!result && !isKey(path)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        if (object == null) {
          return false;
        }
        path = last(path);
        result = hasOwnProperty.call(object, path);
      }
      return result || (isLength(object.length) && isIndex(path, object.length) &&
        (isArray(object) || isArguments(object)));
    }

    /**
     * Creates an object composed of the inverted keys and values of `object`.
     * If `object` contains duplicate values, subsequent values overwrite property
     * assignments of previous values unless `multiValue` is `true`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to invert.
     * @param {boolean} [multiValue] Allow multiple values per key.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Object} Returns the new inverted object.
     * @example
     *
     * var object = { 'a': 1, 'b': 2, 'c': 1 };
     *
     * _.invert(object);
     * // => { '1': 'c', '2': 'b' }
     *
     * // with `multiValue`
     * _.invert(object, true);
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
    function invert(object, multiValue, guard) {
      if (guard && isIterateeCall(object, multiValue, guard)) {
        multiValue = undefined;
      }
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index],
            value = object[key];

        if (multiValue) {
          if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
          } else {
            result[value] = [key];
          }
        }
        else {
          result[value] = key;
        }
      }
      return result;
    }

    /**
     * Creates an array of the own enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects. See the
     * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
     * for more details.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keys(new Foo);
     * // => ['a', 'b'] (iteration order is not guaranteed)
     *
     * _.keys('hi');
     * // => ['0', '1']
     */
    var keys = !nativeKeys ? shimKeys : function(object) {
      var Ctor = object == null ? undefined : object.constructor;
      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
          (typeof object != 'function' && isArrayLike(object))) {
        return shimKeys(object);
      }
      return isObject(object) ? nativeKeys(object) : [];
    };

    /**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
    function keysIn(object) {
      if (object == null) {
        return [];
      }
      if (!isObject(object)) {
        object = Object(object);
      }
      var length = object.length;
      length = (length && isLength(length) &&
        (isArray(object) || isArguments(object)) && length) || 0;

      var Ctor = object.constructor,
          index = -1,
          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
          result = Array(length),
          skipIndexes = length > 0;

      while (++index < length) {
        result[index] = (index + '');
      }
      for (var key in object) {
        if (!(skipIndexes && isIndex(key, length)) &&
            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }

    /**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * property of `object` through `iteratee`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the new mapped object.
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
    var mapKeys = createObjectMapper(true);

    /**
     * Creates an object with the same keys as `object` and values generated by
     * running each own enumerable property of `object` through `iteratee`. The
     * iteratee function is bound to `thisArg` and invoked with three arguments:
     * (value, key, object).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
     *  per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Object} Returns the new mapped object.
     * @example
     *
     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
     *   return n * 3;
     * });
     * // => { 'a': 3, 'b': 6 }
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * // using the `_.property` callback shorthand
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
    var mapValues = createObjectMapper();

    /**
     * The opposite of `_.pick`; this method creates an object composed of the
     * own and inherited enumerable properties of `object` that are not omitted.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {Function|...(string|string[])} [predicate] The function invoked per
     *  iteration or property names to omit, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.omit(object, 'age');
     * // => { 'user': 'fred' }
     *
     * _.omit(object, _.isNumber);
     * // => { 'user': 'fred' }
     */
    var omit = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      if (typeof props[0] != 'function') {
        var props = arrayMap(baseFlatten(props), String);
        return pickByArray(object, baseDifference(keysIn(object), props));
      }
      var predicate = bindCallback(props[0], props[1], 3);
      return pickByCallback(object, function(value, key, object) {
        return !predicate(value, key, object);
      });
    });

    /**
     * Creates a two dimensional array of the key-value pairs for `object`,
     * e.g. `[[key1, value1], [key2, value2]]`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the new array of key-value pairs.
     * @example
     *
     * _.pairs({ 'barney': 36, 'fred': 40 });
     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
     */
    function pairs(object) {
      object = toObject(object);

      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }

    /**
     * Creates an object composed of the picked `object` properties. Property
     * names may be specified as individual arguments or as arrays of property
     * names. If `predicate` is provided it is invoked for each property of `object`
     * picking the properties `predicate` returns truthy for. The predicate is
     * bound to `thisArg` and invoked with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The source object.
     * @param {Function|...(string|string[])} [predicate] The function invoked per
     *  iteration or property names to pick, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `predicate`.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'user': 'fred', 'age': 40 };
     *
     * _.pick(object, 'user');
     * // => { 'user': 'fred' }
     *
     * _.pick(object, _.isString);
     * // => { 'user': 'fred' }
     */
    var pick = restParam(function(object, props) {
      if (object == null) {
        return {};
      }
      return typeof props[0] == 'function'
        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
        : pickByArray(object, baseFlatten(props));
    });

    /**
     * This method is like `_.get` except that if the resolved value is a function
     * it is invoked with the `this` binding of its parent object and its result
     * is returned.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a.b.c', 'default');
     * // => 'default'
     *
     * _.result(object, 'a.b.c', _.constant('default'));
     * // => 'default'
     */
    function result(object, path, defaultValue) {
      var result = object == null ? undefined : object[path];
      if (result === undefined) {
        if (object != null && !isKey(path, object)) {
          path = toPath(path);
          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
          result = object == null ? undefined : object[last(path)];
        }
        result = result === undefined ? defaultValue : result;
      }
      return isFunction(result) ? result.call(object) : result;
    }

    /**
     * Sets the property value of `path` on `object`. If a portion of `path`
     * does not exist it is created.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to augment.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, 'x[0].y.z', 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
    function set(object, path, value) {
      if (object == null) {
        return object;
      }
      var pathKey = (path + '');
      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

      var index = -1,
          length = path.length,
          lastIndex = length - 1,
          nested = object;

      while (nested != null && ++index < length) {
        var key = path[index];
        if (isObject(nested)) {
          if (index == lastIndex) {
            nested[key] = value;
          } else if (nested[key] == null) {
            nested[key] = isIndex(path[index + 1]) ? [] : {};
          }
        }
        nested = nested[key];
      }
      return object;
    }

    /**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own enumerable
     * properties through `iteratee`, with each invocation potentially mutating
     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
     * with four arguments: (accumulator, value, key, object). Iteratee functions
     * may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * });
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
     *   result[key] = n * 3;
     * });
     * // => { 'a': 3, 'b': 6 }
     */
    function transform(object, iteratee, accumulator, thisArg) {
      var isArr = isArray(object) || isTypedArray(object);
      iteratee = getCallback(iteratee, thisArg, 4);

      if (accumulator == null) {
        if (isArr || isObject(object)) {
          var Ctor = object.constructor;
          if (isArr) {
            accumulator = isArray(object) ? new Ctor : [];
          } else {
            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
          }
        } else {
          accumulator = {};
        }
      }
      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
      });
      return accumulator;
    }

    /**
     * Creates an array of the own enumerable property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
    function values(object) {
      return baseValues(object, keys(object));
    }

    /**
     * Creates an array of the own and inherited enumerable property values
     * of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
    function valuesIn(object) {
      return baseValues(object, keysIn(object));
    }

    /*------------------------------------------------------------------------*/

    /**
     * Checks if `n` is between `start` and up to but not including, `end`. If
     * `end` is not specified it is set to `start` with `start` then set to `0`.
     *
     * @static
     * @memberOf _
     * @category Number
     * @param {number} n The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     */
    function inRange(value, start, end) {
      start = +start || 0;
      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      return value >= nativeMin(start, end) && value < nativeMax(start, end);
    }

    /**
     * Produces a random number between `min` and `max` (inclusive). If only one
     * argument is provided a number between `0` and the given number is returned.
     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
     * number is returned instead of an integer.
     *
     * @static
     * @memberOf _
     * @category Number
     * @param {number} [min=0] The minimum possible value.
     * @param {number} [max=1] The maximum possible value.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(min, max, floating) {
      if (floating && isIterateeCall(min, max, floating)) {
        max = floating = undefined;
      }
      var noMin = min == null,
          noMax = max == null;

      if (floating == null) {
        if (noMax && typeof min == 'boolean') {
          floating = min;
          min = 1;
        }
        else if (typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
        noMax = false;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
      }
      return baseRandom(min, max);
    }

    /*------------------------------------------------------------------------*/

    /**
     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the camel cased string.
     * @example
     *
     * _.camelCase('Foo Bar');
     * // => 'fooBar'
     *
     * _.camelCase('--foo-bar');
     * // => 'fooBar'
     *
     * _.camelCase('__foo_bar__');
     * // => 'fooBar'
     */
    var camelCase = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
    });

    /**
     * Capitalizes the first character of `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('fred');
     * // => 'Fred'
     */
    function capitalize(string) {
      string = baseToString(string);
      return string && (string.charAt(0).toUpperCase() + string.slice(1));
    }

    /**
     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
    function deburr(string) {
      string = baseToString(string);
      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
    }

    /**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to search.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search from.
     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
    function endsWith(string, target, position) {
      string = baseToString(string);
      target = (target + '');

      var length = string.length;
      position = position === undefined
        ? length
        : nativeMin(position < 0 ? 0 : (+position || 0), length);

      position -= target.length;
      return position >= 0 && string.indexOf(target, position) == position;
    }

    /**
     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
     * their corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional characters
     * use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value.
     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * Backticks are escaped because in Internet Explorer < 9, they can break out
     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
     * for more details.
     *
     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
     * to reduce XSS vectors.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
    function escape(string) {
      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
      string = baseToString(string);
      return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, escapeHtmlChar)
        : string;
    }

    /**
     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
     */
    function escapeRegExp(string) {
      string = baseToString(string);
      return (string && reHasRegExpChars.test(string))
        ? string.replace(reRegExpChars, escapeRegExpChar)
        : (string || '(?:)');
    }

    /**
     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the kebab cased string.
     * @example
     *
     * _.kebabCase('Foo Bar');
     * // => 'foo-bar'
     *
     * _.kebabCase('fooBar');
     * // => 'foo-bar'
     *
     * _.kebabCase('__foo_bar__');
     * // => 'foo-bar'
     */
    var kebabCase = createCompounder(function(result, word, index) {
      return result + (index ? '-' : '') + word.toLowerCase();
    });

    /**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
    function pad(string, length, chars) {
      string = baseToString(string);
      length = +length;

      var strLength = string.length;
      if (strLength >= length || !nativeIsFinite(length)) {
        return string;
      }
      var mid = (length - strLength) / 2,
          leftLength = nativeFloor(mid),
          rightLength = nativeCeil(mid);

      chars = createPadding('', rightLength, chars);
      return chars.slice(0, leftLength) + string + chars;
    }

    /**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padLeft('abc', 6);
     * // => '   abc'
     *
     * _.padLeft('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padLeft('abc', 3);
     * // => 'abc'
     */
    var padLeft = createPadDir();

    /**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padRight('abc', 6);
     * // => 'abc   '
     *
     * _.padRight('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padRight('abc', 3);
     * // => 'abc'
     */
    var padRight = createPadDir(true);

    /**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
     * in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
     * of `parseInt`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
    function parseInt(string, radix, guard) {
      // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
      // Chrome fails to trim leading <BOM> whitespace characters.
      // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
      if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
        radix = 0;
      } else if (radix) {
        radix = +radix;
      }
      string = trim(string);
      return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
    }

    /**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=0] The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
    function repeat(string, n) {
      var result = '';
      string = baseToString(string);
      n = +n;
      if (n < 1 || !string || !nativeIsFinite(n)) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        string += string;
      } while (n);

      return result;
    }

    /**
     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the snake cased string.
     * @example
     *
     * _.snakeCase('Foo Bar');
     * // => 'foo_bar'
     *
     * _.snakeCase('fooBar');
     * // => 'foo_bar'
     *
     * _.snakeCase('--foo-bar');
     * // => 'foo_bar'
     */
    var snakeCase = createCompounder(function(result, word, index) {
      return result + (index ? '_' : '') + word.toLowerCase();
    });

    /**
     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the start cased string.
     * @example
     *
     * _.startCase('--foo-bar');
     * // => 'Foo Bar'
     *
     * _.startCase('fooBar');
     * // => 'Foo Bar'
     *
     * _.startCase('__foo_bar__');
     * // => 'Foo Bar'
     */
    var startCase = createCompounder(function(result, word, index) {
      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
    });

    /**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to search.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
    function startsWith(string, target, position) {
      string = baseToString(string);
      position = position == null
        ? 0
        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

      return string.lastIndexOf(target, position) == position;
    }

    /**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is provided it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options] The options object.
     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
     * @param {Object} [options.imports] An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
     * @param {string} [options.variable] The data object variable name.
     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // using the "interpolate" delimiter to create a compiled template
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // using the HTML "escape" delimiter to escape data property values
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the internal `print` function in "evaluate" delimiters
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // using custom template delimiters
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // using backslashes to treat delimiters as plain text
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // using the `imports` option to import `jQuery` as `jq`
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the `sourceURL` option to specify a custom sourceURL for the template
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
     *
     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // using the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and a stack trace
     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(string, options, otherOptions) {
      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
      var settings = lodash.templateSettings;

      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
        options = otherOptions = undefined;
      }
      string = baseToString(string);
      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
          importsKeys = keys(imports),
          importsValues = baseValues(imports, importsKeys);

      var isEscaping,
          isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // Compile the regexp to match each delimiter.
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      // Use a sourceURL for easier debugging.
      var sourceURL = '//# sourceURL=' +
        ('sourceURL' in options
          ? options.sourceURL
          : ('lodash.templateSources[' + (++templateCounter) + ']')
        ) + '\n';

      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // Escape characters that can't be included in string literals.
        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // Replace delimiters with snippets.
        if (escapeValue) {
          isEscaping = true;
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // The JS engine embedded in Adobe products requires returning the `match`
        // string in order to produce the correct `offset` value.
        return match;
      });

      source += "';\n";

      // If `variable` is not specified wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain.
      var variable = options.variable;
      if (!variable) {
        source = 'with (obj) {\n' + source + '\n}\n';
      }
      // Cleanup code by stripping empty strings.
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // Frame code as the function body.
      source = 'function(' + (variable || 'obj') + ') {\n' +
        (variable
          ? ''
          : 'obj || (obj = {});\n'
        ) +
        "var __t, __p = ''" +
        (isEscaping
           ? ', __e = _.escape'
           : ''
        ) +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      var result = attempt(function() {
        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
      });

      // Provide the compiled function's source by its `toString` method or
      // the `source` property as a convenience for inlining compiled templates.
      result.source = source;
      if (isError(result)) {
        throw result;
      }
      return result;
    }

    /**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
    function trim(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
      }
      chars = (chars + '');
      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
    }

    /**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimLeft('  abc  ');
     * // => 'abc  '
     *
     * _.trimLeft('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
    function trimLeft(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(trimmedLeftIndex(string));
      }
      return string.slice(charsLeftIndex(string, (chars + '')));
    }

    /**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimRight('  abc  ');
     * // => '  abc'
     *
     * _.trimRight('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
    function trimRight(string, chars, guard) {
      var value = string;
      string = baseToString(string);
      if (!string) {
        return string;
      }
      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
        return string.slice(0, trimmedRightIndex(string) + 1);
      }
      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
    }

    /**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object|number} [options] The options object or maximum string length.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.trunc('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', 24);
     * // => 'hi-diddly-ho there, n...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.trunc('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
    function trunc(string, options, guard) {
      if (guard && isIterateeCall(string, options, guard)) {
        options = undefined;
      }
      var length = DEFAULT_TRUNC_LENGTH,
          omission = DEFAULT_TRUNC_OMISSION;

      if (options != null) {
        if (isObject(options)) {
          var separator = 'separator' in options ? options.separator : separator;
          length = 'length' in options ? (+options.length || 0) : length;
          omission = 'omission' in options ? baseToString(options.omission) : omission;
        } else {
          length = +options || 0;
        }
      }
      string = baseToString(string);
      if (length >= string.length) {
        return string;
      }
      var end = length - omission.length;
      if (end < 1) {
        return omission;
      }
      var result = string.slice(0, end);
      if (separator == null) {
        return result + omission;
      }
      if (isRegExp(separator)) {
        if (string.slice(end).search(separator)) {
          var match,
              newEnd,
              substring = string.slice(0, end);

          if (!separator.global) {
            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
          }
          separator.lastIndex = 0;
          while ((match = separator.exec(substring))) {
            newEnd = match.index;
          }
          result = result.slice(0, newEnd == null ? end : newEnd);
        }
      } else if (string.indexOf(separator, end) != end) {
        var index = result.lastIndexOf(separator);
        if (index > -1) {
          result = result.slice(0, index);
        }
      }
      return result + omission;
    }

    /**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
     * corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
     * entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
    function unescape(string) {
      string = baseToString(string);
      return (string && reHasEscapedHtml.test(string))
        ? string.replace(reEscapedHtml, unescapeHtmlChar)
        : string;
    }

    /**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
    function words(string, pattern, guard) {
      if (guard && isIterateeCall(string, pattern, guard)) {
        pattern = undefined;
      }
      string = baseToString(string);
      return string.match(pattern || reWords) || [];
    }

    /*------------------------------------------------------------------------*/

    /**
     * Attempts to invoke `func`, returning either the result or the caught error
     * object. Any additional arguments are provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Function} func The function to attempt.
     * @returns {*} Returns the `func` result or error object.
     * @example
     *
     * // avoid throwing errors for invalid selectors
     * var elements = _.attempt(function(selector) {
     *   return document.querySelectorAll(selector);
     * }, '>_>');
     *
     * if (_.isError(elements)) {
     *   elements = [];
     * }
     */
    var attempt = restParam(function(func, args) {
      try {
        return func.apply(undefined, args);
      } catch(e) {
        return isError(e) ? e : new Error(e);
      }
    });

    /**
     * Creates a function that invokes `func` with the `this` binding of `thisArg`
     * and arguments of the created function. If `func` is a property name the
     * created callback returns the property value for a given element. If `func`
     * is an object the created callback returns `true` for elements that contain
     * the equivalent object properties, otherwise it returns `false`.
     *
     * @static
     * @memberOf _
     * @alias iteratee
     * @category Utility
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // wrap to create custom callback shorthands
     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
     *   if (!match) {
     *     return callback(func, thisArg);
     *   }
     *   return function(object) {
     *     return match[2] == 'gt'
     *       ? object[match[1]] > match[3]
     *       : object[match[1]] < match[3];
     *   };
     * });
     *
     * _.filter(users, 'age__gt36');
     * // => [{ 'user': 'fred', 'age': 40 }]
     */
    function callback(func, thisArg, guard) {
      if (guard && isIterateeCall(func, thisArg, guard)) {
        thisArg = undefined;
      }
      return isObjectLike(func)
        ? matches(func)
        : baseCallback(func, thisArg);
    }

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var object = { 'user': 'fred' };
     * var getter = _.constant(object);
     *
     * getter() === object;
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Creates a function that performs a deep comparison between a given object
     * and `source`, returning `true` if the given object has equivalent property
     * values, else `false`.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties. For comparing a single
     * own or inherited property value see `_.matchesProperty`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
     */
    function matches(source) {
      return baseMatches(baseClone(source, true));
    }

    /**
     * Creates a function that compares the property value of `path` on a given
     * object to `value`.
     *
     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
     * numbers, `Object` objects, regexes, and strings. Objects are compared by
     * their own, not inherited, enumerable properties.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * _.find(users, _.matchesProperty('user', 'fred'));
     * // => { 'user': 'fred' }
     */
    function matchesProperty(path, srcValue) {
      return baseMatchesProperty(path, baseClone(srcValue, true));
    }

    /**
     * Creates a function that invokes the method at `path` on a given object.
     * Any additional arguments are provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the method to invoke.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': { 'c': _.constant(2) } } },
     *   { 'a': { 'b': { 'c': _.constant(1) } } }
     * ];
     *
     * _.map(objects, _.method('a.b.c'));
     * // => [2, 1]
     *
     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
     * // => [1, 2]
     */
    var method = restParam(function(path, args) {
      return function(object) {
        return invokePath(object, path, args);
      };
    });

    /**
     * The opposite of `_.method`; this method creates a function that invokes
     * the method at a given path on `object`. Any additional arguments are
     * provided to the invoked method.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} object The object to query.
     * @param {...*} [args] The arguments to invoke the method with.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var array = _.times(3, _.constant),
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
     * // => [2, 0]
     */
    var methodOf = restParam(function(object, args) {
      return function(path) {
        return invokePath(object, path, args);
      };
    });

    /**
     * Adds all own enumerable function properties of a source object to the
     * destination object. If `object` is a function then methods are added to
     * its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.chain=true] Specify whether the functions added
     *  are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
    function mixin(object, source, options) {
      if (options == null) {
        var isObj = isObject(source),
            props = isObj ? keys(source) : undefined,
            methodNames = (props && props.length) ? baseFunctions(source, props) : undefined;

        if (!(methodNames ? methodNames.length : isObj)) {
          methodNames = false;
          options = source;
          source = object;
          object = this;
        }
      }
      if (!methodNames) {
        methodNames = baseFunctions(source, keys(source));
      }
      var chain = true,
          index = -1,
          isFunc = isFunction(object),
          length = methodNames.length;

      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      while (++index < length) {
        var methodName = methodNames[index],
            func = source[methodName];

        object[methodName] = func;
        if (isFunc) {
          object.prototype[methodName] = (function(func) {
            return function() {
              var chainAll = this.__chain__;
              if (chain || chainAll) {
                var result = object(this.__wrapped__),
                    actions = result.__actions__ = arrayCopy(this.__actions__);

                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
                result.__chain__ = chainAll;
                return result;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }(func));
        }
      }
      return object;
    }

    /**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      root._ = oldDash;
      return this;
    }

    /**
     * A no-operation function that returns `undefined` regardless of the
     * arguments it receives.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @example
     *
     * var object = { 'user': 'fred' };
     *
     * _.noop(object) === undefined;
     * // => true
     */
    function noop() {
      // No operation performed.
    }

    /**
     * Creates a function that returns the property value at `path` on a
     * given object.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': { 'c': 2 } } },
     *   { 'a': { 'b': { 'c': 1 } } }
     * ];
     *
     * _.map(objects, _.property('a.b.c'));
     * // => [2, 1]
     *
     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
     * // => [1, 2]
     */
    function property(path) {
      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
    }

    /**
     * The opposite of `_.property`; this method creates a function that returns
     * the property value at a given path on `object`.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
    function propertyOf(object) {
      return function(path) {
        return baseGet(object, toPath(path), path + '');
      };
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to, but not including, `end`. If `end` is not specified it is
     * set to `start` with `start` then set to `0`. If `end` is less than `start`
     * a zero-length range is created unless a negative `step` is specified.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns the new array of numbers.
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    function range(start, end, step) {
      if (step && isIterateeCall(start, end, step)) {
        end = step = undefined;
      }
      start = +start || 0;
      step = step == null ? 1 : (+step || 0);

      if (end == null) {
        end = start;
        start = 0;
      } else {
        end = +end || 0;
      }
      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
      var index = -1,
          length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
          result = Array(length);

      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }

    /**
     * Invokes the iteratee function `n` times, returning an array of the results
     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
     * one argument; (index).
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
     * // => [3, 6, 4]
     *
     * _.times(3, function(n) {
     *   mage.castSpell(n);
     * });
     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
     *
     * _.times(3, function(n) {
     *   this.cast(n);
     * }, mage);
     * // => also invokes `mage.castSpell(n)` three times
     */
    function times(n, iteratee, thisArg) {
      n = nativeFloor(n);

      // Exit early to avoid a JSC JIT bug in Safari 8
      // where `Array(0)` is treated as `Array(1)`.
      if (n < 1 || !nativeIsFinite(n)) {
        return [];
      }
      var index = -1,
          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

      iteratee = bindCallback(iteratee, thisArg, 1);
      while (++index < n) {
        if (index < MAX_ARRAY_LENGTH) {
          result[index] = iteratee(index);
        } else {
          iteratee(index);
        }
      }
      return result;
    }

    /**
     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
     *
     * @static
     * @memberOf _
     * @category Utility
     * @param {string} [prefix] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return baseToString(prefix) + id;
    }

    /*------------------------------------------------------------------------*/

    /**
     * Adds two numbers.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} augend The first number to add.
     * @param {number} addend The second number to add.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.add(6, 4);
     * // => 10
     */
    function add(augend, addend) {
      return (+augend || 0) + (+addend || 0);
    }

    /**
     * Calculates `n` rounded up to `precision`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} n The number to round up.
     * @param {number} [precision=0] The precision to round up to.
     * @returns {number} Returns the rounded up number.
     * @example
     *
     * _.ceil(4.006);
     * // => 5
     *
     * _.ceil(6.004, 2);
     * // => 6.01
     *
     * _.ceil(6040, -2);
     * // => 6100
     */
    var ceil = createRound('ceil');

    /**
     * Calculates `n` rounded down to `precision`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} n The number to round down.
     * @param {number} [precision=0] The precision to round down to.
     * @returns {number} Returns the rounded down number.
     * @example
     *
     * _.floor(4.006);
     * // => 4
     *
     * _.floor(0.046, 2);
     * // => 0.04
     *
     * _.floor(4060, -2);
     * // => 4000
     */
    var floor = createRound('floor');

    /**
     * Gets the maximum value of `collection`. If `collection` is empty or falsey
     * `-Infinity` is returned. If an iteratee function is provided it is invoked
     * for each value in `collection` to generate the criterion by which the value
     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => -Infinity
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.max(users, function(chr) {
     *   return chr.age;
     * });
     * // => { 'user': 'fred', 'age': 40 }
     *
     * // using the `_.property` callback shorthand
     * _.max(users, 'age');
     * // => { 'user': 'fred', 'age': 40 }
     */
    var max = createExtremum(gt, NEGATIVE_INFINITY);

    /**
     * Gets the minimum value of `collection`. If `collection` is empty or falsey
     * `Infinity` is returned. If an iteratee function is provided it is invoked
     * for each value in `collection` to generate the criterion by which the value
     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
     * arguments: (value, index, collection).
     *
     * If a property name is provided for `iteratee` the created `_.property`
     * style callback returns the property value of the given element.
     *
     * If a value is also provided for `thisArg` the created `_.matchesProperty`
     * style callback returns `true` for elements that have a matching property
     * value, else `false`.
     *
     * If an object is provided for `iteratee` the created `_.matches` style
     * callback returns `true` for elements that have the properties of the given
     * object, else `false`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => Infinity
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * _.min(users, function(chr) {
     *   return chr.age;
     * });
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // using the `_.property` callback shorthand
     * _.min(users, 'age');
     * // => { 'user': 'barney', 'age': 36 }
     */
    var min = createExtremum(lt, POSITIVE_INFINITY);

    /**
     * Calculates `n` rounded to `precision`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {number} n The number to round.
     * @param {number} [precision=0] The precision to round to.
     * @returns {number} Returns the rounded number.
     * @example
     *
     * _.round(4.006);
     * // => 4
     *
     * _.round(4.006, 2);
     * // => 4.01
     *
     * _.round(4060, -2);
     * // => 4100
     */
    var round = createRound('round');

    /**
     * Gets the sum of the values in `collection`.
     *
     * @static
     * @memberOf _
     * @category Math
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
     * @param {*} [thisArg] The `this` binding of `iteratee`.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 6]);
     * // => 10
     *
     * _.sum({ 'a': 4, 'b': 6 });
     * // => 10
     *
     * var objects = [
     *   { 'n': 4 },
     *   { 'n': 6 }
     * ];
     *
     * _.sum(objects, function(object) {
     *   return object.n;
     * });
     * // => 10
     *
     * // using the `_.property` callback shorthand
     * _.sum(objects, 'n');
     * // => 10
     */
    function sum(collection, iteratee, thisArg) {
      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
        iteratee = undefined;
      }
      iteratee = getCallback(iteratee, thisArg, 3);
      return iteratee.length == 1
        ? arraySum(isArray(collection) ? collection : toIterable(collection), iteratee)
        : baseSum(collection, iteratee);
    }

    /*------------------------------------------------------------------------*/

    // Ensure wrappers are instances of `baseLodash`.
    lodash.prototype = baseLodash.prototype;

    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;

    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;

    // Add functions to the `Map` cache.
    MapCache.prototype['delete'] = mapDelete;
    MapCache.prototype.get = mapGet;
    MapCache.prototype.has = mapHas;
    MapCache.prototype.set = mapSet;

    // Add functions to the `Set` cache.
    SetCache.prototype.push = cachePush;

    // Assign cache to `_.memoize`.
    memoize.Cache = MapCache;

    // Add functions that return wrapped values when chaining.
    lodash.after = after;
    lodash.ary = ary;
    lodash.assign = assign;
    lodash.at = at;
    lodash.before = before;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.callback = callback;
    lodash.chain = chain;
    lodash.chunk = chunk;
    lodash.compact = compact;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.curry = curry;
    lodash.curryRight = curryRight;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defaultsDeep = defaultsDeep;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.drop = drop;
    lodash.dropRight = dropRight;
    lodash.dropRightWhile = dropRightWhile;
    lodash.dropWhile = dropWhile;
    lodash.fill = fill;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.flattenDeep = flattenDeep;
    lodash.flow = flow;
    lodash.flowRight = flowRight;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.keysIn = keysIn;
    lodash.map = map;
    lodash.mapKeys = mapKeys;
    lodash.mapValues = mapValues;
    lodash.matches = matches;
    lodash.matchesProperty = matchesProperty;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.method = method;
    lodash.methodOf = methodOf;
    lodash.mixin = mixin;
    lodash.modArgs = modArgs;
    lodash.negate = negate;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.partition = partition;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.propertyOf = propertyOf;
    lodash.pull = pull;
    lodash.pullAt = pullAt;
    lodash.range = range;
    lodash.rearg = rearg;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.restParam = restParam;
    lodash.set = set;
    lodash.shuffle = shuffle;
    lodash.slice = slice;
    lodash.sortBy = sortBy;
    lodash.sortByAll = sortByAll;
    lodash.sortByOrder = sortByOrder;
    lodash.spread = spread;
    lodash.take = take;
    lodash.takeRight = takeRight;
    lodash.takeRightWhile = takeRightWhile;
    lodash.takeWhile = takeWhile;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.thru = thru;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.toPlainObject = toPlainObject;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.unzip = unzip;
    lodash.unzipWith = unzipWith;
    lodash.values = values;
    lodash.valuesIn = valuesIn;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;
    lodash.zipWith = zipWith;

    // Add aliases.
    lodash.backflow = flowRight;
    lodash.collect = map;
    lodash.compose = flowRight;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.iteratee = callback;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;

    // Add functions to `lodash.prototype`.
    mixin(lodash, lodash);

    /*------------------------------------------------------------------------*/

    // Add functions that return unwrapped values when chaining.
    lodash.add = add;
    lodash.attempt = attempt;
    lodash.camelCase = camelCase;
    lodash.capitalize = capitalize;
    lodash.ceil = ceil;
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.deburr = deburr;
    lodash.endsWith = endsWith;
    lodash.escape = escape;
    lodash.escapeRegExp = escapeRegExp;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.findWhere = findWhere;
    lodash.first = first;
    lodash.floor = floor;
    lodash.get = get;
    lodash.gt = gt;
    lodash.gte = gte;
    lodash.has = has;
    lodash.identity = identity;
    lodash.includes = includes;
    lodash.indexOf = indexOf;
    lodash.inRange = inRange;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isError = isError;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isMatch = isMatch;
    lodash.isNaN = isNaN;
    lodash.isNative = isNative;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isTypedArray = isTypedArray;
    lodash.isUndefined = isUndefined;
    lodash.kebabCase = kebabCase;
    lodash.last = last;
    lodash.lastIndexOf = lastIndexOf;
    lodash.lt = lt;
    lodash.lte = lte;
    lodash.max = max;
    lodash.min = min;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.pad = pad;
    lodash.padLeft = padLeft;
    lodash.padRight = padRight;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.repeat = repeat;
    lodash.result = result;
    lodash.round = round;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.snakeCase = snakeCase;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.sortedLastIndex = sortedLastIndex;
    lodash.startCase = startCase;
    lodash.startsWith = startsWith;
    lodash.sum = sum;
    lodash.template = template;
    lodash.trim = trim;
    lodash.trimLeft = trimLeft;
    lodash.trimRight = trimRight;
    lodash.trunc = trunc;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;
    lodash.words = words;

    // Add aliases.
    lodash.all = every;
    lodash.any = some;
    lodash.contains = includes;
    lodash.eq = isEqual;
    lodash.detect = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.head = first;
    lodash.include = includes;
    lodash.inject = reduce;

    mixin(lodash, (function() {
      var source = {};
      baseForOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }()), false);

    /*------------------------------------------------------------------------*/

    // Add functions capable of returning wrapped and unwrapped values when chaining.
    lodash.sample = sample;

    lodash.prototype.sample = function(n) {
      if (!this.__chain__ && n == null) {
        return sample(this.value());
      }
      return this.thru(function(value) {
        return sample(value, n);
      });
    };

    /*------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type string
     */
    lodash.VERSION = VERSION;

    // Assign default placeholders.
    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
      lodash[methodName].placeholder = lodash;
    });

    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
    arrayEach(['drop', 'take'], function(methodName, index) {
      LazyWrapper.prototype[methodName] = function(n) {
        var filtered = this.__filtered__;
        if (filtered && !index) {
          return new LazyWrapper(this);
        }
        n = n == null ? 1 : nativeMax(nativeFloor(n) || 0, 0);

        var result = this.clone();
        if (filtered) {
          result.__takeCount__ = nativeMin(result.__takeCount__, n);
        } else {
          result.__views__.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
        }
        return result;
      };

      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
        return this.reverse()[methodName](n).reverse();
      };
    });

    // Add `LazyWrapper` methods that accept an `iteratee` value.
    arrayEach(['filter', 'map', 'takeWhile'], function(methodName, index) {
      var type = index + 1,
          isFilter = type != LAZY_MAP_FLAG;

      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
        var result = this.clone();
        result.__iteratees__.push({ 'iteratee': getCallback(iteratee, thisArg, 1), 'type': type });
        result.__filtered__ = result.__filtered__ || isFilter;
        return result;
      };
    });

    // Add `LazyWrapper` methods for `_.first` and `_.last`.
    arrayEach(['first', 'last'], function(methodName, index) {
      var takeName = 'take' + (index ? 'Right' : '');

      LazyWrapper.prototype[methodName] = function() {
        return this[takeName](1).value()[0];
      };
    });

    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
    arrayEach(['initial', 'rest'], function(methodName, index) {
      var dropName = 'drop' + (index ? '' : 'Right');

      LazyWrapper.prototype[methodName] = function() {
        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
      };
    });

    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
    arrayEach(['pluck', 'where'], function(methodName, index) {
      var operationName = index ? 'filter' : 'map',
          createCallback = index ? baseMatches : property;

      LazyWrapper.prototype[methodName] = function(value) {
        return this[operationName](createCallback(value));
      };
    });

    LazyWrapper.prototype.compact = function() {
      return this.filter(identity);
    };

    LazyWrapper.prototype.reject = function(predicate, thisArg) {
      predicate = getCallback(predicate, thisArg, 1);
      return this.filter(function(value) {
        return !predicate(value);
      });
    };

    LazyWrapper.prototype.slice = function(start, end) {
      start = start == null ? 0 : (+start || 0);

      var result = this;
      if (result.__filtered__ && (start > 0 || end < 0)) {
        return new LazyWrapper(result);
      }
      if (start < 0) {
        result = result.takeRight(-start);
      } else if (start) {
        result = result.drop(start);
      }
      if (end !== undefined) {
        end = (+end || 0);
        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
      }
      return result;
    };

    LazyWrapper.prototype.takeRightWhile = function(predicate, thisArg) {
      return this.reverse().takeWhile(predicate, thisArg).reverse();
    };

    LazyWrapper.prototype.toArray = function() {
      return this.take(POSITIVE_INFINITY);
    };

    // Add `LazyWrapper` methods to `lodash.prototype`.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
          retUnwrapped = /^(?:first|last)$/.test(methodName),
          lodashFunc = lodash[retUnwrapped ? ('take' + (methodName == 'last' ? 'Right' : '')) : methodName];

      if (!lodashFunc) {
        return;
      }
      lodash.prototype[methodName] = function() {
        var args = retUnwrapped ? [1] : arguments,
            chainAll = this.__chain__,
            value = this.__wrapped__,
            isHybrid = !!this.__actions__.length,
            isLazy = value instanceof LazyWrapper,
            iteratee = args[0],
            useLazy = isLazy || isArray(value);

        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
          // Avoid lazy use if the iteratee has a "length" value other than `1`.
          isLazy = useLazy = false;
        }
        var interceptor = function(value) {
          return (retUnwrapped && chainAll)
            ? lodashFunc(value, 1)[0]
            : lodashFunc.apply(undefined, arrayPush([value], args));
        };

        var action = { 'func': thru, 'args': [interceptor], 'thisArg': undefined },
            onlyLazy = isLazy && !isHybrid;

        if (retUnwrapped && !chainAll) {
          if (onlyLazy) {
            value = value.clone();
            value.__actions__.push(action);
            return func.call(value);
          }
          return lodashFunc.call(undefined, this.value())[0];
        }
        if (!retUnwrapped && useLazy) {
          value = onlyLazy ? value : new LazyWrapper(this);
          var result = func.apply(value, args);
          result.__actions__.push(action);
          return new LodashWrapper(result, chainAll);
        }
        return this.thru(interceptor);
      };
    });

    // Add `Array` and `String` methods to `lodash.prototype`.
    arrayEach(['join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

      lodash.prototype[methodName] = function() {
        var args = arguments;
        if (retUnwrapped && !this.__chain__) {
          return func.apply(this.value(), args);
        }
        return this[chainName](function(value) {
          return func.apply(value, args);
        });
      };
    });

    // Map minified function names to their real names.
    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
      var lodashFunc = lodash[methodName];
      if (lodashFunc) {
        var key = lodashFunc.name,
            names = realNames[key] || (realNames[key] = []);

        names.push({ 'name': methodName, 'func': lodashFunc });
      }
    });

    realNames[createHybridWrapper(undefined, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': undefined }];

    // Add functions to the lazy wrapper.
    LazyWrapper.prototype.clone = lazyClone;
    LazyWrapper.prototype.reverse = lazyReverse;
    LazyWrapper.prototype.value = lazyValue;

    // Add chaining functions to the `lodash` wrapper.
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.commit = wrapperCommit;
    lodash.prototype.concat = wrapperConcat;
    lodash.prototype.plant = wrapperPlant;
    lodash.prototype.reverse = wrapperReverse;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

    // Add function aliases to the `lodash` wrapper.
    lodash.prototype.collect = lodash.prototype.map;
    lodash.prototype.head = lodash.prototype.first;
    lodash.prototype.select = lodash.prototype.filter;
    lodash.prototype.tail = lodash.prototype.rest;

    return lodash;
  }

  /*--------------------------------------------------------------------------*/

  // Export lodash.
  var _ = runInContext();

  // Some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose lodash to the global object when an AMD loader is present to avoid
    // errors in cases where lodash is loaded by a script tag and not intended
    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
    // more details.
    root._ = _;

    // Define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module.
    define(function() {
      return _;
    });
  }
  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
  else if (freeExports && freeModule) {
    // Export for Node.js or RingoJS.
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    }
    // Export for Rhino with CommonJS support.
    else {
      freeExports._ = _;
    }
  }
  else {
    // Export for a browser or Rhino.
    root._ = _;
  }
}.call(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],79:[function(require,module,exports){
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;

module.exports = Queue;

function Queue(options) {
  if (!(this instanceof Queue))
    return new Queue(options);
  
  EventEmitter.call(this);
  options = options || {};
  this.concurrency = options.concurrency || Infinity;
  this.timeout = options.timeout || 0;
  this.pending = 0;
  this.session = 0;
  this.running = false;
  this.jobs = [];
}
inherits(Queue, EventEmitter);

var arrayMethods = [
  'push',
  'unshift',
  'splice',
  'pop',
  'shift',
  'slice',
  'reverse',
  'indexOf',
  'lastIndexOf'
];

for (var method in arrayMethods) (function(method) {
  Queue.prototype[method] = function() {
    return Array.prototype[method].apply(this.jobs, arguments);
  };
})(arrayMethods[method]);

Object.defineProperty(Queue.prototype, 'length', { get: function() {
  return this.pending + this.jobs.length;
}});

Queue.prototype.start = function(cb) {
  if (cb) {
    callOnErrorOrEnd.call(this, cb);
  }

  if (this.pending === this.concurrency) {
    return;
  }
  
  if (this.jobs.length === 0) {
    if (this.pending === 0) {
      done.call(this);
    }
    return;
  }
  
  var self = this;
  var job = this.jobs.shift();
  var once = true;
  var session = this.session;
  var timeoutId = null;
  var didTimeout = false;
  
  function next(err, result) {
    if (once && self.session === session) {
      once = false;
      self.pending--;
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      
      if (err) {
        self.emit('error', err, job);
      } else if (didTimeout === false) {
        self.emit('success', result, job);
      }
      
      if (self.session === session) {
        if (self.pending === 0 && self.jobs.length === 0) {
          done.call(self);
        } else if (self.running) {
          self.start();
        }
      }
    }
  }
  
  if (this.timeout) {
    timeoutId = setTimeout(function() {
      didTimeout = true;
      if (self.listeners('timeout').length > 0) {
        self.emit('timeout', next, job);
      } else {
        next();
      }
    }, this.timeout);
  }
  
  this.pending++;
  this.running = true;
  job(next);
  
  if (this.jobs.length > 0) {
    this.start();
  }
};

Queue.prototype.stop = function() {
  this.running = false;
};

Queue.prototype.end = function(err) {
  this.jobs.length = 0;
  this.pending = 0;
  done.call(this, err);
};

function callOnErrorOrEnd(cb) {
  var self = this;
  this.on('error', onerror);
  this.on('end', onend);

  function onerror(err) { self.end(err); }
  function onend(err) {
    self.removeListener('error', onerror);
    self.removeListener('end', onend);
    cb(err);
  }
}

function done(err) {
  this.session++;
  this.running = false;
  this.emit('end', err);
}

},{"events":74,"inherits":80}],80:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],81:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Ractive=e()}(this,function(){"use strict";function t(t){var e;if(t&&"boolean"!=typeof t)return"undefined"!=typeof window&&document&&t?t.nodeType?t:"string"==typeof t&&(e=document.getElementById(t),!e&&document.querySelector&&(e=document.querySelector(t)),e&&e.nodeType)?e:t[0]&&t[0].nodeType?t[0]:null:null}function e(t){return t&&"unknown"!=typeof t.parentNode&&t.parentNode&&t.parentNode.removeChild(t),t}function n(t){return null!=t&&t.toString?t:""}function i(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;e>i;i++)n[i-1]=arguments[i];for(var r,s;s=n.shift();)for(r in s)Oa.call(s,r)&&(t[r]=s[r]);return t}function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;e>i;i++)n[i-1]=arguments[i];return n.forEach(function(e){for(var n in e)!e.hasOwnProperty(n)||n in t||(t[n]=e[n])}),t}function s(t){return"[object Array]"===Pa.call(t)}function o(t){return Ta.test(Pa.call(t))}function a(t,e){return null===t&&null===e?!0:"object"==typeof t||"object"==typeof e?!1:t===e}function u(t){return!isNaN(parseFloat(t))&&isFinite(t)}function h(t){return t&&"[object Object]"===Pa.call(t)}function c(t,e){return t.replace(/%s/g,function(){return e.shift()})}function l(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;e>i;i++)n[i-1]=arguments[i];throw t=c(t,n),new Error(t)}function f(){Qb.DEBUG&&Aa.apply(null,arguments)}function d(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;e>i;i++)n[i-1]=arguments[i];t=c(t,n),Sa(t,n)}function p(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;e>i;i++)n[i-1]=arguments[i];t=c(t,n),Ra[t]||(Ra[t]=!0,Sa(t,n))}function m(){Qb.DEBUG&&d.apply(null,arguments)}function v(){Qb.DEBUG&&p.apply(null,arguments)}function g(t,e,n){var i=y(t,e,n);return i?i[t][n]:null}function y(t,e,n){for(;e;){if(n in e[t])return e;if(e.isolated)return null;e=e.parent}}function b(t){return function(){return t}}function w(t){var e,n,i,r,s,o;for(e=t.split("."),(n=Wa[e.length])||(n=x(e.length)),s=[],i=function(t,n){return t?"*":e[n]},r=n.length;r--;)o=n[r].map(i).join("."),s.hasOwnProperty(o)||(s.push(o),s[o]=!0);return s}function x(t){var e,n,i,r,s,o,a,u,h="";if(!Wa[t]){for(i=[];h.length<t;)h+=1;for(e=parseInt(h,2),r=function(t){return"1"===t},s=0;e>=s;s+=1){for(n=s.toString(2);n.length<t;)n="0"+n;for(u=[],a=n.length,o=0;a>o;o++)u.push(r(n[o]));i[s]=u}Wa[t]=i}return Wa[t]}function k(t,e,n,i){var r=t[e];if(!r||!r.equalsOrStartsWith(i)&&r.equalsOrStartsWith(n))return t[e]=r?r.replace(n,i):i,!0}function E(t){var e=t.slice(2);return"i"===t[1]&&u(e)?+e:e}function _(t){return null==t?t:(qa.hasOwnProperty(t)||(qa[t]=new $a(t)),qa[t])}function A(t,e){function n(e,n){var i,r,o;return n.isRoot?o=[].concat(Object.keys(t.viewmodel.data),Object.keys(t.viewmodel.mappings),Object.keys(t.viewmodel.computations)):(i=t.viewmodel.wrapped[n.str],r=i?i.get():t.viewmodel.get(n),o=r?Object.keys(r):null),o&&o.forEach(function(t){"_ractive"===t&&s(r)||e.push(n.join(t))}),e}var i,r,o;for(i=e.str.split("."),o=[Za];r=i.shift();)"*"===r?o=o.reduce(n,[]):o[0]===Za?o[0]=_(r):o=o.map(S(r));return o}function S(t){return function(e){return e.join(t)}}function C(t){return t?t.replace(za,".$1"):""}function O(t,e,n){if("string"!=typeof e||!u(n))throw new Error("Bad arguments");var i=void 0,r=void 0;if(/\*/.test(e))return r={},A(t,_(C(e))).forEach(function(e){var i=t.viewmodel.get(e);if(!u(i))throw new Error(Ka);r[e.str]=i+n}),t.set(r);if(i=t.get(e),!u(i))throw new Error(Ka);return t.set(e,+i+n)}function P(t,e){return Ha(this,t,void 0===e?1:+e)}function T(t){this.event=t,this.method="on"+t,this.deprecate=tu[t]}function F(t,e){var n=t.indexOf(e);-1===n&&t.push(e)}function R(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]==e)return!0;return!1}function j(t,e){var n;if(!s(t)||!s(e))return!1;if(t.length!==e.length)return!1;for(n=t.length;n--;)if(t[n]!==e[n])return!1;return!0}function N(t){return"string"==typeof t?[t]:void 0===t?[]:t}function D(t){return t[t.length-1]}function I(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function L(t){for(var e=[],n=t.length;n--;)e[n]=t[n];return e}function V(t){setTimeout(t,0)}function M(t,e){return function(){for(var n;n=t.shift();)n(e)}}function U(t,e,n,i){var r;if(e===t)throw new TypeError("A promise's fulfillment handler cannot return the same promise");if(e instanceof eu)e.then(n,i);else if(!e||"object"!=typeof e&&"function"!=typeof e)n(e);else{try{r=e.then}catch(s){return void i(s)}if("function"==typeof r){var o,a,u;a=function(e){o||(o=!0,U(t,e,n,i))},u=function(t){o||(o=!0,i(t))};try{r.call(e,a,u)}catch(s){if(!o)return i(s),void(o=!0)}}else n(e)}}function W(t,e,n){var i;return e=C(e),"~/"===e.substr(0,2)?(i=_(e.substring(2)),q(t,i.firstKey,n)):"."===e[0]?(i=z(au(n),e),i&&q(t,i.firstKey,n)):i=B(t,_(e),n),i}function z(t,e){var n;if(void 0!=t&&"string"!=typeof t&&(t=t.str),"."===e)return _(t);if(n=t?t.split("."):[],"../"===e.substr(0,3)){for(;"../"===e.substr(0,3);){if(!n.length)throw new Error('Could not resolve reference - too many "../" prefixes');n.pop(),e=e.substring(3)}return n.push(e),_(n.join("."))}return _(t?t+e.replace(/^\.\//,"."):e.replace(/^\.\/?/,""))}function B(t,e,n,i){var r,s,o,a,u;if(e.isRoot)return e;for(s=e.firstKey;n;)if(r=n.context,n=n.parent,r&&(a=!0,o=t.viewmodel.get(r),o&&("object"==typeof o||"function"==typeof o)&&s in o))return r.join(e.str);return $(t.viewmodel,s)?e:t.parent&&!t.isolated&&(a=!0,n=t.component.parentFragment,s=_(s),u=B(t.parent,s,n,!0))?(t.viewmodel.map(s,{origin:t.parent.viewmodel,keypath:u}),e):i||a?void 0:(t.viewmodel.set(e,void 0),e)}function q(t,e){var n;!t.parent||t.isolated||$(t.viewmodel,e)||(e=_(e),(n=B(t.parent,e,t.component.parentFragment,!0))&&t.viewmodel.map(e,{origin:t.parent.viewmodel,keypath:n}))}function $(t,e){return""===e||e in t.data||e in t.computations||e in t.mappings}function Q(t){t.teardown()}function Z(t){t.unbind()}function H(t){t.unrender()}function K(t){t.cancel()}function G(t){t.detach()}function Y(t){t.detachNodes()}function J(t){!t.ready||t.outros.length||t.outroChildren||(t.outrosComplete||(t.parent?t.parent.decrementOutros(t):t.detachNodes(),t.outrosComplete=!0),t.intros.length||t.totalChildren||("function"==typeof t.callback&&t.callback(),t.parent&&t.parent.decrementTotal()))}function X(){for(var t,e,n;cu.ractives.length;)e=cu.ractives.pop(),n=e.viewmodel.applyChanges(),n&&pu.fire(e,n);for(tt(),t=0;t<cu.views.length;t+=1)cu.views[t].update();for(cu.views.length=0,t=0;t<cu.tasks.length;t+=1)cu.tasks[t]();return cu.tasks.length=0,cu.ractives.length?X():void 0}function tt(){var t,e,n,i;for(t=du.length;t--;)e=du[t],e.keypath?du.splice(t,1):(n=uu(e.root,e.ref,e.parentFragment))&&((i||(i=[])).push({item:e,keypath:n}),du.splice(t,1));i&&i.forEach(et)}function et(t){t.item.resolve(t.keypath)}function nt(t,e,n){var i,r,s,o,a,u,h,c,l,f,d,p,m,v;if(i=new ou(function(t){return r=t}),"object"==typeof t){n=e||{},u=n.easing,h=n.duration,a=[],c=n.step,l=n.complete,(c||l)&&(d={},n.step=null,n.complete=null,f=function(t){return function(e,n){d[t]=n}});for(s in t)t.hasOwnProperty(s)&&((c||l)&&(p=f(s),n={easing:u,duration:h},c&&(n.step=p)),n.complete=l?p:Fa,a.push(it(this,s,t[s],n)));return v={easing:u,duration:h},c&&(v.step=function(t){return c(t,d)}),l&&i.then(function(t){return l(t,d)}),v.complete=r,m=it(this,null,null,v),a.push(m),i.stop=function(){for(var t;t=a.pop();)t.stop();m&&m.stop()},i}return n=n||{},n.complete&&i.then(n.complete),n.complete=r,o=it(this,t,e,n),i.stop=function(){return o.stop()},i}function it(t,e,n,i){var r,s,o,u;return e&&(e=_(C(e))),null!==e&&(u=t.viewmodel.get(e)),yu.abort(e,t),a(u,n)?(i.complete&&i.complete(i.to),ku):(i.easing&&(r="function"==typeof i.easing?i.easing:t.easing[i.easing],"function"!=typeof r&&(r=null)),s=void 0===i.duration?400:i.duration,o=new wu({keypath:e,from:u,to:n,root:t,duration:s,easing:r,interpolator:i.interpolator,step:i.step,complete:i.complete}),yu.add(o),t._animations.push(o),o)}function rt(){return this.detached?this.detached:(this.el&&I(this.el.__ractive_instances__,this),this.detached=this.fragment.detach(),_u.fire(this),this.detached)}function st(t){return this.el?this.fragment.find(t):null}function ot(t,e){var n;return n=this._isComponentQuery?!this.selector||t.name===this.selector:t.node?fa(t.node,this.selector):null,n?(this.push(t.node||t.instance),e||this._makeDirty(),!0):void 0}function at(t){var e;return(e=t.parentFragment)?e.owner:t.component&&(e=t.component.parentFragment)?e.owner:void 0}function ut(t){var e,n;for(e=[t],n=at(t);n;)e.push(n),n=at(n);return e}function ht(t,e,n,i){var r=[];return ka(r,{selector:{value:e},live:{value:n},_isComponentQuery:{value:i},_test:{value:Su}}),n?(ka(r,{cancel:{value:Cu},_root:{value:t},_sort:{value:Tu},_makeDirty:{value:Fu},_remove:{value:Ru},_dirty:{value:!1,writable:!0}}),r):r}function ct(t,e){var n,i;return this.el?(e=e||{},n=this._liveQueries,(i=n[t])?e&&e.live?i:i.slice():(i=ju(this,t,!!e.live,!1),i.live&&(n.push(t),n["_"+t]=i),this.fragment.findAll(t,i),i)):[]}function lt(t,e){var n,i;return e=e||{},n=this._liveComponentQueries,(i=n[t])?e&&e.live?i:i.slice():(i=ju(this,t,!!e.live,!0),i.live&&(n.push(t),n["_"+t]=i),this.fragment.findAllComponents(t,i),i)}function ft(t){return this.fragment.findComponent(t)}function dt(t){return this.container?this.container.component&&this.container.component.name===t?this.container:this.container.findContainer(t):null}function pt(t){return this.parent?this.parent.component&&this.parent.component.name===t?this.parent:this.parent.findParent(t):null}function mt(t,e){var n=void 0===arguments[2]?{}:arguments[2];if(e){n.event?n.event.name=e:n.event={name:e,_noArg:!0};var i=_(e).wildcardMatches();vt(t,i,n.event,n.args,!0)}}function vt(t,e,n,i){var r,s,o=void 0===arguments[4]?!1:arguments[4],a=!0;for(Uu.enqueue(t,n),s=e.length;s>=0;s--)r=t._subs[e[s]],r&&(a=gt(t,r,n,i)&&a);if(Uu.dequeue(t),t.parent&&a){if(o&&t.component){var u=t.component.name+"."+e[e.length-1];e=_(u).wildcardMatches(),n&&(n.component=t)}vt(t.parent,e,n,i)}}function gt(t,e,n,i){var r=null,s=!1;n&&!n._noArg&&(i=[n].concat(i)),e=e.slice();for(var o=0,a=e.length;a>o;o+=1)e[o].apply(t,i)===!1&&(s=!0);return n&&!n._noArg&&s&&(r=n.original)&&(r.preventDefault&&r.preventDefault(),r.stopPropagation&&r.stopPropagation()),!s}function yt(t){var e={args:Array.prototype.slice.call(arguments,1)};Wu(this,t,e)}function bt(t){var e;return t=_(C(t)),e=this.viewmodel.get(t,qu),void 0===e&&this.parent&&!this.isolated&&uu(this,t.str,this.component.parentFragment)&&(e=this.viewmodel.get(t)),e}function wt(e,n){if(!this.fragment.rendered)throw new Error("The API has changed - you must call `ractive.render(target[, anchor])` to render your Ractive instance. Once rendered you can use `ractive.insert()`.");if(e=t(e),n=t(n)||null,!e)throw new Error("You must specify a valid target to insert into");e.insertBefore(this.detach(),n),this.el=e,(e.__ractive_instances__||(e.__ractive_instances__=[])).push(this),this.detached=null,xt(this)}function xt(t){Qu.fire(t),t.findAllComponents("*").forEach(function(t){xt(t.instance)})}function kt(t,e,n){var i,r;return t=_(C(t)),i=this.viewmodel.get(t),s(i)&&s(e)?(r=mu.start(this,!0),this.viewmodel.merge(t,i,e,n),mu.end(),r):this.set(t,e,n&&n.complete)}function Et(t,e){var n,i;return n=A(t,e),i={},n.forEach(function(e){i[e.str]=t.get(e.str)}),i}function _t(t,e,n,i){var r,s,o;e=_(C(e)),i=i||ah,e.isPattern?(r=new sh(t,e,n,i),t.viewmodel.patternObservers.push(r),s=!0):r=new Gu(t,e,n,i),r.init(i.init),t.viewmodel.register(e,r,s?"patternObservers":"observers"),r.ready=!0;var a={cancel:function(){var n;o||(s?(n=t.viewmodel.patternObservers.indexOf(r),t.viewmodel.patternObservers.splice(n,1),t.viewmodel.unregister(e,r,"patternObservers")):t.viewmodel.unregister(e,r,"observers"),o=!0)}};return t._observers.push(a),a}function At(t,e,n){var i,r,s,o;if(h(t)){n=e,r=t,i=[];for(t in r)r.hasOwnProperty(t)&&(e=r[t],i.push(this.observe(t,e,n)));return{cancel:function(){for(;i.length;)i.pop().cancel()}}}if("function"==typeof t)return n=e,e=t,t="",oh(this,t,e,n);if(s=t.split(" "),1===s.length)return oh(this,t,e,n);for(i=[],o=s.length;o--;)t=s[o],t&&i.push(oh(this,t,e,n));return{cancel:function(){for(;i.length;)i.pop().cancel()}}}function St(t,e,n){var i=this.observe(t,function(){e.apply(this,arguments),i.cancel()},{init:!1,defer:n&&n.defer});return i}function Ct(t,e){var n,i=this;if(t)n=t.split(" ").map(ch).filter(lh),n.forEach(function(t){var n,r;(n=i._subs[t])&&(e?(r=n.indexOf(e),-1!==r&&n.splice(r,1)):i._subs[t]=[])});else for(t in this._subs)delete this._subs[t];return this}function Ot(t,e){var n,i,r,s=this;if("object"==typeof t){n=[];for(i in t)t.hasOwnProperty(i)&&n.push(this.on(i,t[i]));return{cancel:function(){for(var t;t=n.pop();)t.cancel()}}}return r=t.split(" ").map(ch).filter(lh),r.forEach(function(t){(s._subs[t]||(s._subs[t]=[])).push(e)}),{cancel:function(){return s.off(t,e)}}}function Pt(t,e){var n=this.on(t,function(){e.apply(this,arguments),n.cancel()});return n}function Tt(t,e,n){var i,r,s,o,a,u,h=[];if(i=Ft(t,e,n),!i)return null;for(r=t.length,a=i.length-2-i[1],s=Math.min(r,i[0]),o=s+i[1],u=0;s>u;u+=1)h.push(u);for(;o>u;u+=1)h.push(-1);for(;r>u;u+=1)h.push(u+a);return h.touchedFrom=0!==a?i[0]:t.length,h}function Ft(t,e,n){switch(e){case"splice":for(void 0!==n[0]&&n[0]<0&&(n[0]=t.length+Math.max(n[0],-t.length));n.length<2;)n.push(0);return n[1]=Math.min(n[1],t.length-n[0]),n;case"sort":case"reverse":return null;case"pop":return t.length?[t.length-1,1]:[0,0];case"push":return[t.length,0].concat(n);case"shift":return[0,t.length?1:0];case"unshift":return[0,0].concat(n)}}function Rt(e,n){var i,r,s,o=this;if(s=this.transitionsEnabled,this.noIntro&&(this.transitionsEnabled=!1),i=mu.start(this,!0),mu.scheduleTask(function(){return Ch.fire(o)},!0),this.fragment.rendered)throw new Error("You cannot call ractive.render() on an already rendered instance! Call ractive.unrender() first");if(e=t(e)||this.el,n=t(n)||this.anchor,this.el=e,this.anchor=n,!this.append&&e){var a=e.__ractive_instances__;a&&a.length&&jt(a),e.innerHTML=""}return this.cssId&&Ah.apply(),e&&((r=e.__ractive_instances__)?r.push(this):e.__ractive_instances__=[this],n?e.insertBefore(this.fragment.render(),n):e.appendChild(this.fragment.render())),mu.end(),this.transitionsEnabled=s,i.then(function(){return Oh.fire(o)})}function jt(t){t.splice(0,t.length).forEach(Q)}function Nt(t,e){for(var n=t.slice(),i=e.length;i--;)~n.indexOf(e[i])||n.push(e[i]);return n}function Dt(t,e){var n,i,r;return i='[data-ractive-css~="{'+e+'}"]',r=function(t){var e,n,r,s,o,a,u,h=[];for(e=[];n=Nh.exec(t);)e.push({str:n[0],base:n[1],modifiers:n[2]});for(s=e.map(Lt),u=e.length;u--;)a=s.slice(),r=e[u],a[u]=r.base+i+r.modifiers||"",o=s.slice(),o[u]=i+" "+o[u],h.push(a.join(" "),o.join(" "));return h.join(", ")},n=Ih.test(t)?t.replace(Ih,i):t.replace(jh,"").replace(Rh,function(t,e){var n,i;return Dh.test(e)?t:(n=e.split(",").map(It),i=n.map(r).join(", ")+" ",t.replace(e,i))})}function It(t){return t.trim?t.trim():t.replace(/^\s+/,"").replace(/\s+$/,"")}function Lt(t){return t.str}function Vt(t){t&&t.constructor!==Object&&("function"==typeof t||("object"!=typeof t?l("data option must be an object or a function, `"+t+"` is not valid"):m("If supplied, options.data should be a plain JavaScript object - using a non-POJO as the root object may work, but is discouraged")))}function Mt(t,e){Vt(e);var n="function"==typeof t,i="function"==typeof e;return e||n||(e={}),n||i?function(){var r=i?Ut(e,this):e,s=n?Ut(t,this):t;return Wt(r,s)}:Wt(e,t)}function Ut(t,e){var n=t.call(e);if(n)return"object"!=typeof n&&l("Data function must return an object"),n.constructor!==Object&&v("Data function returned something other than a plain JavaScript object. This might work, but is strongly discouraged"),n}function Wt(t,e){if(t&&e){for(var n in e)n in t||(t[n]=e[n]);return t}return t||e}function zt(t){var e,n,i;return t.matchString("=")?(e=t.pos,t.allowWhitespace(),(n=t.matchPattern(jc))?t.matchPattern(Nc)?(i=t.matchPattern(jc))?(t.allowWhitespace(),t.matchString("=")?[n,i]:(t.pos=e,null)):(t.pos=e,null):null:(t.pos=e,null)):null}function Bt(t){var e;return(e=t.matchPattern(Ic))?{t:pc,v:e}:null}function qt(t){var e,n;if(t.interpolate[t.inside]===!1)return null;for(n=0;n<t.tags.length;n+=1)if(e=$t(t,t.tags[n]))return e}function $t(t,e){var n,i,r,s;if(n=t.pos,t.matchString("\\"+e.open)){if(0===n||"\\"!==t.str[n-1])return e.open}else if(!t.matchString(e.open))return null;if(i=Rc(t))return t.matchString(e.close)?(e.open=i[0],e.close=i[1],t.sortMustacheTags(),Vc):null;if(t.allowWhitespace(),t.matchString("/")){t.pos-=1;var o=t.pos;Dc(t)?t.pos=o:(t.pos=o-e.close.length,t.error("Attempted to close a section that wasn't open"))}for(s=0;s<e.readers.length;s+=1)if(r=e.readers[s],i=r(t,e))return e.isStatic&&(i.s=!0),t.includeLinePositions&&(i.p=t.getLinePos(n)),i;return t.pos=n,null}function Qt(t){var e;return(e=t.matchPattern(zc))?{t:hc,v:e}:null}function Zt(t){var e=t.remaining();return"true"===e.substr(0,4)?(t.pos+=4,{t:dc,v:"true"}):"false"===e.substr(0,5)?(t.pos+=5,{t:dc,v:"false"}):null}function Ht(t){var e;return(e=Kc(t))?Jc.test(e.v)?e.v:'"'+e.v.replace(/"/g,'\\"')+'"':(e=Wc(t))?e.v:(e=t.matchPattern(Gc))?e:void 0}function Kt(t){var e,n,i;return e=t.pos,t.allowWhitespace(),n=Yc(t),null===n?(t.pos=e,null):(t.allowWhitespace(),t.matchString(":")?(t.allowWhitespace(),i=Ol(t),null===i?(t.pos=e,null):{t:vc,k:n,v:i}):(t.pos=e,null))}function Gt(t){var e,n,i,r;return e=t.pos,i=Xc(t),null===i?null:(n=[i],t.matchString(",")?(r=Gt(t),r?n.concat(r):(t.pos=e,null)):n)}function Yt(t){function e(t){i.push(t)}var n,i,r,s;return n=t.pos,t.allowWhitespace(),r=Ol(t),null===r?null:(i=[r],t.allowWhitespace(),t.matchString(",")&&(s=Yt(t),null===s&&t.error(Mc),s.forEach(e)),i)}function Jt(t){return Wc(t)||Bc(t)||Kc(t)||el(t)||il(t)||Dc(t)}function Xt(t){var e,n,i,r,s,o;return e=t.pos,i=t.matchPattern(/^@(?:keypath|index|key)/),i||(n=t.matchPattern(ol)||"",i=!n&&t.relaxedNames&&t.matchPattern(cl)||t.matchPattern(hl),i||"."!==n||(n="",i=".")),i?n||t.relaxedNames||!$c.test(i)?!n&&qc.test(i)?(r=qc.exec(i)[0],t.pos=e+r.length,{t:mc,v:r}):(s=(n||"")+C(i),t.matchString("(")&&(o=s.lastIndexOf("."),-1!==o?(s=s.substr(0,o),t.pos=e+s.length):t.pos-=1),{t:gc,n:s.replace(/^this\./,"./").replace(/^this$/,".")}):(t.pos=e,null):null}function te(t){var e,n;return e=t.pos,t.matchString("(")?(t.allowWhitespace(),n=Ol(t),n||t.error(Mc),t.allowWhitespace(),t.matchString(")")||t.error(Uc),{t:xc,x:n}):null}function ee(t){var e,n,i;if(e=t.pos,t.allowWhitespace(),t.matchString(".")){if(t.allowWhitespace(),n=t.matchPattern(Gc))return{t:yc,n:n};t.error("Expected a property name")}return t.matchString("[")?(t.allowWhitespace(),i=Ol(t),i||t.error(Mc),t.allowWhitespace(),t.matchString("]")||t.error("Expected ']'"),{t:yc,x:i}):null}function ne(t){var e,n,i,r;return(n=Sl(t))?(e=t.pos,t.allowWhitespace(),t.matchString("?")?(t.allowWhitespace(),i=Ol(t),i||t.error(Mc),t.allowWhitespace(),t.matchString(":")||t.error('Expected ":"'),t.allowWhitespace(),r=Ol(t),r||t.error(Mc),{t:kc,o:[n,i,r]}):(t.pos=e,n)):null}function ie(t){return Cl(t)}function re(t){function e(t){switch(t.t){case dc:case mc:case hc:case pc:return t.v;case cc:return JSON.stringify(String(t.v));case lc:return"["+(t.m?t.m.map(e).join(","):"")+"]";case fc:return"{"+(t.m?t.m.map(e).join(","):"")+"}";case vc:return t.k+":"+e(t.v);case wc:return("typeof"===t.s?"typeof ":t.s)+e(t.o);case Ec:return e(t.o[0])+("in"===t.s.substr(0,2)?" "+t.s+" ":t.s)+e(t.o[1]);case _c:return e(t.x)+"("+(t.o?t.o.map(e).join(","):"")+")";case xc:return"("+e(t.x)+")";case bc:return e(t.x)+e(t.r);case yc:return t.n?"."+t.n:"["+e(t.x)+"]";case kc:return e(t.o[0])+"?"+e(t.o[1])+":"+e(t.o[2]);case gc:return"_"+n.indexOf(t.n);default:throw new Error("Expected legal JavaScript")}}var n;return se(t,n=[]),{r:n,s:e(t)}}function se(t,e){var n,i;if(t.t===gc&&-1===e.indexOf(t.n)&&e.unshift(t.n),i=t.o||t.m)if(h(i))se(i,e);else for(n=i.length;n--;)se(i[n],e);t.x&&se(t.x,e),t.r&&se(t.r,e),t.v&&se(t.v,e)}function oe(t,e){var n;if(t){for(;t.t===xc&&t.x;)t=t.x;return t.t===gc?e.r=t.n:t.t===hc&&Fl.test(t.v)?e.r=t.v:(n=ae(t))?e.rx=n:e.x=Pl(t),e}}function ae(t){for(var e,n=[];t.t===bc&&t.r.t===yc;)e=t.r,n.unshift(e.x?e.x.t===gc?e.x:Pl(e.x):e.n),t=t.x;return t.t!==gc?null:{r:t.n,m:n}}function ue(t,e){var n,i=Ol(t);return i?(t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),n={t:Kh},Tl(i,n),n):null}function he(t,e){var n,i;return t.matchString("&")?(t.allowWhitespace(),(n=Ol(t))?(t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),i={t:Kh},Tl(n,i),i):null):null}function ce(t,e){var n,i,r,s,o;return n=t.pos,t.matchString(">")?(t.allowWhitespace(),i=t.pos,t.relaxedNames=!0,r=Ol(t),t.relaxedNames=!1,t.allowWhitespace(),s=Ol(t),t.allowWhitespace(),r?(o={t:tc},Tl(r,o),t.allowWhitespace(),s&&(o={t:Gh,n:Oc,f:[o]},Tl(s,o)),t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),o):null):null}function le(t,e){var n;return t.matchString("!")?(n=t.remaining().indexOf(e.close),-1!==n?(t.pos+=n+e.close.length,{t:ec}):void 0):null}function fe(t,e){var n,i,r;if(n=t.pos,i=Ol(t),!i)return null;for(r=0;r<e.length;r+=1)if(t.remaining().substr(0,e[r].length)===e[r])return i;return t.pos=n,sl(t)}function de(t,e){var n,i,r,s;n=t.pos;try{i=Il(t,[e.close])}catch(o){s=o}if(!i){if("!"===t.str.charAt(n))return t.pos=n,null;if(s)throw s}if(!t.matchString(e.close)&&(t.error("Expected closing delimiter '"+e.close+"' after reference"),!i)){if("!"===t.nextChar())return null;t.error("Expected expression or legal reference")}return r={t:Hh},Tl(i,r),r}function pe(t,e){var n,i,r;return t.matchPattern(Ml)?(n=t.pos,i=t.matchPattern(/^[a-zA-Z_$][a-zA-Z_$0-9\-]*/),t.allowWhitespace(),t.matchString(e.close)||t.error("expected legal partial name"),r={t:oc},i&&(r.n=i),r):null}function me(t,e){var n,i,r,s;return n=t.pos,t.matchString(e.open)?(t.allowWhitespace(),t.matchString("/")?(t.allowWhitespace(),i=t.remaining(),r=i.indexOf(e.close),-1!==r?(s={t:Jh,r:i.substr(0,r).split(" ")[0]},t.pos+=r,t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),s):(t.pos=n,null)):(t.pos=n,null)):null}function ve(t,e){var n=t.pos;return t.matchString(e.open)?t.matchPattern(zl)?(t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),{t:Tc}):(t.pos=n,null):null}function ge(t,e){var n,i=t.pos;return t.matchString(e.open)?t.matchPattern(ql)?(n=Ol(t),t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),{t:Fc,x:n}):(t.pos=i,null):null}function ye(t,e){var n,i,r,s,o,a,u,h,c,l,f,d;if(n=t.pos,t.matchString("^"))r={t:Gh,f:[],n:Sc};else{if(!t.matchString("#"))return null;r={t:Gh,f:[]},t.matchString("partial")&&(t.pos=n-t.standardDelimiters[0].length,t.error("Partial definitions can only be at the top level of the template, or immediately inside components")),(u=t.matchPattern(Kl))&&(d=u,r.n=$l[u])}if(t.allowWhitespace(),i=Ol(t),i||t.error("Expected expression"),f=t.matchPattern(Zl)){var p=void 0;r.i=(p=t.matchPattern(Hl))?f+","+p:f}t.allowWhitespace(),t.matchString(e.close)||t.error("Expected closing delimiter '"+e.close+"'"),t.sectionDepth+=1,o=r.f,c=[];do if(s=Ul(t,e))d&&s.r!==d&&t.error("Expected "+e.open+"/"+d+e.close),t.sectionDepth-=1,l=!0;else if(s=Bl(t,e))r.n===Sc&&t.error("{{else}} not allowed in {{#unless}}"),a&&t.error("illegal {{elseif...}} after {{else}}"),h||(h=be(i,r.n)),h.f.push({t:Gh,n:Ac,x:Pl(xe(c.concat(s.x))),f:o=[]}),c.push(we(s.x));else if(s=Wl(t,e))r.n===Sc&&t.error("{{else}} not allowed in {{#unless}}"),a&&t.error("there can only be one {{else}} block, at the end of a section"),a=!0,h?h.f.push({t:Gh,n:Ac,x:Pl(xe(c)),f:o=[]}):(h=be(i,r.n),o=h.f);else{if(s=t.read(td),!s)break;o.push(s)}while(!l);return h&&(r.n===Oc&&(r.n=Pc),r.l=h),Tl(i,r),r.f.length||delete r.f,r}function be(t,e){var n;return e===Oc?(n={t:Gh,n:Ac,f:[]},Tl(we(t),n)):(n={t:Gh,n:Sc,f:[]},Tl(t,n)),n}function we(t){return t.t===wc&&"!"===t.s?t.o:{t:wc,s:"!",o:ke(t)}}function xe(t){return 1===t.length?t[0]:{t:Ec,s:"&&",o:[ke(t[0]),ke(xe(t.slice(1)))]}}function ke(t){return{t:xc,x:t}}function Ee(t){var e,n,i,r,s;return e=t.pos,t.matchString(Yl)?(i=t.remaining(),r=i.indexOf(Jl),-1===r&&t.error("Illegal HTML - expected closing comment sequence ('-->')"),n=i.substr(0,r),t.pos+=r+3,s={t:ec,c:n},t.includeLinePositions&&(s.p=t.getLinePos(e)),s):null}function _e(t){return t.replace(kl,function(t,e){var n;return n="#"!==e[0]?wl[e]:"x"===e[1]?parseInt(e.substring(2),16):parseInt(e.substring(1),10),n?String.fromCharCode(Ae(n)):t})}function Ae(t){return t?10===t?32:128>t?t:159>=t?xl[t-128]:55296>t?t:57343>=t?65533:65535>=t?t:65533:65533}function Se(t){return t.replace(Al,"&amp;").replace(El,"&lt;").replace(_l,"&gt;")}function Ce(t){return"string"==typeof t}function Oe(t){return t.t===ec||t.t===nc}function Pe(t){return(t.t===Gh||t.t===Yh)&&t.f}function Te(t,e,n,i,r){var o,a,u,h,c,l,f,d;for(hf(t),o=t.length;o--;)a=t[o],a.exclude?t.splice(o,1):e&&a.t===ec&&t.splice(o,1);for(cf(t,i?pf:null,r?mf:null),o=t.length;o--;){if(a=t[o],a.f){var p=a.t===Xh&&df.test(a.e);c=n||p,!n&&p&&cf(a.f,vf,gf),c||(u=t[o-1],h=t[o+1],(!u||"string"==typeof u&&mf.test(u))&&(l=!0),(!h||"string"==typeof h&&pf.test(h))&&(f=!0)),Te(a.f,e,c,l,f)}if(a.l&&(Te(a.l.f,e,n,l,f),t.splice(o+1,0,a.l),delete a.l),a.a)for(d in a.a)a.a.hasOwnProperty(d)&&"string"!=typeof a.a[d]&&Te(a.a[d],e,n,l,f);if(a.m&&Te(a.m,e,n,l,f),a.v)for(d in a.v)a.v.hasOwnProperty(d)&&(s(a.v[d].n)&&Te(a.v[d].n,e,n,l,f),s(a.v[d].d)&&Te(a.v[d].d,e,n,l,f))}for(o=t.length;o--;)"string"==typeof t[o]&&("string"==typeof t[o+1]&&(t[o]=t[o]+t[o+1],t.splice(o+1,1)),n||(t[o]=t[o].replace(ff," ")),""===t[o]&&t.splice(o,1))}function Fe(t){var e,n;return e=t.pos,t.matchString("</")?(n=t.matchPattern(bf))?t.inside&&n!==t.inside?(t.pos=e,null):{t:rc,e:n}:(t.pos-=2,void t.error("Illegal closing tag")):null}function Re(t){var e,n,i;return t.allowWhitespace(),(n=t.matchPattern(kf))?(e={name:n},i=je(t),null!=i&&(e.value=i),e):null}function je(t){var e,n,i,r;return e=t.pos,/[=\/>\s]/.test(t.nextChar())||t.error("Expected `=`, `/`, `>` or whitespace"),t.allowWhitespace(),t.matchString("=")?(t.allowWhitespace(),n=t.pos,i=t.sectionDepth,r=Ie(t,"'")||Ie(t,'"')||De(t),null===r&&t.error("Expected valid attribute value"),t.sectionDepth!==i&&(t.pos=n,t.error("An attribute value must contain as many opening section tags as closing section tags")),r.length?1===r.length&&"string"==typeof r[0]?_e(r[0]):r:""):(t.pos=e,null)}function Ne(t){var e,n,i,r,s;return e=t.pos,(n=t.matchPattern(Ef))?(i=n,r=t.tags.map(function(t){return t.open}),-1!==(s=wf(i,r))&&(n=n.substr(0,s),t.pos=e+n.length),n):null}function De(t){var e,n;for(t.inAttribute=!0,e=[],n=Lc(t)||Ne(t);null!==n;)e.push(n),n=Lc(t)||Ne(t);return e.length?(t.inAttribute=!1,e):null}function Ie(t,e){var n,i,r;if(n=t.pos,!t.matchString(e))return null;for(t.inAttribute=e,i=[],r=Lc(t)||Le(t,e);null!==r;)i.push(r),r=Lc(t)||Le(t,e);return t.matchString(e)?(t.inAttribute=!1,i):(t.pos=n,null)}function Le(t,e){var n,i,r,s;return n=t.pos,r=t.remaining(),s=t.tags.map(function(t){return t.open}),s.push(e),i=wf(r,s),-1===i&&t.error("Quoted attribute value must have a closing quote"),i?(t.pos+=i,r.substr(0,i)):null}function Ve(t){var e,n,i;return t.allowWhitespace(),(e=Yc(t))?(i={key:e},t.allowWhitespace(),t.matchString(":")?(t.allowWhitespace(),(n=t.read())?(i.value=n.v,i):null):null):null}function Me(t,e){var n,i,r,s,o,a,u,h,c;if("string"==typeof t){if(i=Cf.exec(t)){var l=t.lastIndexOf(")");return Of.test(t)||e.error("Invalid input after method call expression '"+t.slice(l+1)+"'"),n={m:i[1]},s="["+t.slice(n.m.length+1,l)+"]",r=new _f(s),n.a=Pl(r.result[0]),n}if(-1===t.indexOf(":"))return t.trim();t=[t]}if(n={},u=[],h=[],t){for(;t.length;)if(o=t.shift(),"string"==typeof o){if(a=o.indexOf(":"),-1!==a){a&&u.push(o.substr(0,a)),o.length>a+1&&(h[0]=o.substring(a+1));break}u.push(o)}else u.push(o);h=h.concat(t)}return u.length?h.length||"string"!=typeof u?(n={n:1===u.length&&"string"==typeof u[0]?u[0]:u},1===h.length&&"string"==typeof h[0]?(c=Af("["+h[0]+"]"),n.a=c?c.value:h[0].trim()):n.d=h):n=u:n="",n}function Ue(t){var e,n,i,r,s,o,a,u,h,c,l,f,d,p,m,v;if(e=t.pos,t.inside||t.inAttribute)return null;if(!t.matchString("<"))return null;if("/"===t.nextChar())return null;if(n={},t.includeLinePositions&&(n.p=t.getLinePos(e)),t.matchString("!"))return n.t=uc,t.matchPattern(/^doctype/i)||t.error("Expected DOCTYPE declaration"),n.a=t.matchPattern(/^(.+?)>/),n;if(n.t=Xh,n.e=t.matchPattern(Tf),!n.e)return null;for(Ff.test(t.nextChar())||t.error("Illegal tag name"),s=function(e,i){var r=i.n||i;Nf.test(r)&&(t.pos-=r.length,t.error("Cannot use reserved event names (change, reset, teardown, update, construct, config, init, render, unrender, detach, insert)")),n.v[e]=i},t.allowWhitespace();o=Lc(t)||xf(t);)o.name?(i=Df[o.name])?n[i]=Sf(o.value,t):(r=jf.exec(o.name))?(n.v||(n.v={}),a=Sf(o.value,t),s(r[1],a)):t.sanitizeEventAttributes&&Rf.test(o.name)||(n.a||(n.a={}),n.a[o.name]=o.value||(""===o.value?"":0)):(n.m||(n.m=[]),n.m.push(o)),t.allowWhitespace();if(t.allowWhitespace(),t.matchString("/")&&(u=!0),!t.matchString(">"))return null;var g=n.e.toLowerCase(),y=t.preserveWhitespace;if(!u&&!bl.test(n.e)){t.elementStack.push(g),("script"===g||"style"===g)&&(t.inside=g),h=[],c=wa(null);do if(p=t.pos,m=t.remaining(),We(g,m))if(v=yf(t)){d=!0;var b=v.e.toLowerCase();if(b!==g&&(t.pos=p,!~t.elementStack.indexOf(b))){var w="Unexpected closing tag";bl.test(b)&&(w+=" (<"+b+"> is a void element - it cannot contain children)"),t.error(w)}}else(f=Ul(t,{open:t.standardDelimiters[0],close:t.standardDelimiters[1]}))?(d=!0,t.pos=p):(f=t.read(ed))?(c[f.n]&&(t.pos=p,t.error("Duplicate partial definition")),lf(f.f,t.stripComments,y,!y,!y),c[f.n]=f.f,l=!0):(f=t.read(td))?h.push(f):d=!0;else d=!0;while(!d);h.length&&(n.f=h),l&&(n.p=c),t.elementStack.pop()}return t.inside=null,t.sanitizeElements&&-1!==t.sanitizeElements.indexOf(g)?If:n}function We(t,e){var n,i;return n=/^<([a-zA-Z][a-zA-Z0-9]*)/.exec(e),i=Pf[t],n&&i?!~i.indexOf(n[1].toLowerCase()):!0}function ze(t){var e,n,i,r;return n=t.remaining(),r=t.inside?"</"+t.inside:"<",t.inside&&!t.interpolate[t.inside]?e=n.indexOf(r):(i=t.tags.map(function(t){return t.open}),i=i.concat(t.tags.map(function(t){return"\\"+t.open})),t.inAttribute===!0?i.push('"',"'","=","<",">","`"):i.push(t.inAttribute?t.inAttribute:r),e=wf(n,i)),e?(-1===e&&(e=n.length),t.pos+=e,t.inside?n.substr(0,e):_e(n.substr(0,e))):null}function Be(t){return t.replace(Wf,"\\$&")}function qe(t){var e=t.pos,n=t.standardDelimiters[0],i=t.standardDelimiters[1],r=void 0,s=void 0;if(!t.matchPattern(Bf)||!t.matchString(n))return t.pos=e,null;var o=t.matchPattern(qf);if(v("Inline partial comments are deprecated.\nUse this...\n  {{#partial "+o+"}} ... {{/partial}}\n\n...instead of this:\n  <!-- {{>"+o+"}} --> ... <!-- {{/"+o+"}} -->'"),!t.matchString(i)||!t.matchPattern($f))return t.pos=e,null;r=[];var a=new RegExp("^<!--\\s*"+Uf(n)+"\\s*\\/\\s*"+o+"\\s*"+Uf(i)+"\\s*-->");do t.matchPattern(a)?s=!0:(Lf=t.read(td),Lf||t.error("expected closing comment ('<!-- "+n+"/"+o+i+" -->')"),r.push(Lf));while(!s);return{t:ac,f:r,n:o}}function $e(t){var e,n,i,r,s;e=t.pos;var o=t.standardDelimiters;if(!t.matchString(o[0]))return null;if(!t.matchPattern(Zf))return t.pos=e,null;n=t.matchPattern(/^[a-zA-Z_$][a-zA-Z_$0-9\-]*/),n||t.error("expected legal partial name"),t.matchString(o[1])||t.error("Expected closing delimiter '"+o[1]+"'"),i=[];do(r=Ul(t,{open:t.standardDelimiters[0],close:t.standardDelimiters[1]}))?("partial"===!r.r&&t.error("Expected "+o[0]+"/partial"+o[1]),s=!0):(r=t.read(td),r||t.error("Expected "+o[0]+"/partial"+o[1]),i.push(r));while(!s);return{t:ac,n:n,f:i}}function Qe(t){for(var e=[],n=wa(null),i=!1,r=t.preserveWhitespace;t.pos<t.str.length;){var s=t.pos,o=void 0,a=void 0;(a=t.read(ed))?(n[a.n]&&(t.pos=s,t.error("Duplicated partial definition")),lf(a.f,t.stripComments,r,!r,!r),n[a.n]=a.f,i=!0):(o=t.read(td))?e.push(o):t.error("Unexpected template content");

}var u={v:oa,t:e};return i&&(u.p=n),u}function Ze(t,e){return new Xf(t,e||{}).result}function He(t){var e=wa(od);return e.parse=function(e,n){return Ke(e,n||t)},e}function Ke(t,e){if(!Kf)throw new Error("Missing Ractive.parse - cannot parse template. Either preparse or use the version that includes the parser");return Kf(t,e||this.options)}function Ge(t,e){var n;if(!Xo){if(e&&e.noThrow)return;throw new Error("Cannot retrieve template #"+t+" as Ractive is not running in a browser.")}if(Ye(t)&&(t=t.substring(1)),!(n=document.getElementById(t))){if(e&&e.noThrow)return;throw new Error("Could not find template element with id #"+t)}if("SCRIPT"!==n.tagName.toUpperCase()){if(e&&e.noThrow)return;throw new Error("Template element with id #"+t+", must be a <script> element")}return"textContent"in n?n.textContent:n.innerHTML}function Ye(t){return t&&"#"===t[0]}function Je(t){return!("string"==typeof t)}function Xe(t){return t.defaults&&(t=t.defaults),sd.reduce(function(e,n){return e[n]=t[n],e},{})}function tn(t){var e,n=t._config.template;if(n&&n.fn)return e=en(t,n.fn),e!==n.result?(n.result=e,e=rn(e,t)):void 0}function en(t,e){var n=nn(ad.getParseOptions(t));return e.call(t,n)}function nn(t){var e=wa(ad);return e.parse=function(e,n){return ad.parse(e,n||t)},e}function rn(t,e){if("string"==typeof t)"#"===t[0]&&(t=ad.fromId(t)),t=Kf(t,ad.getParseOptions(e));else{if(void 0==t)throw new Error("The template cannot be "+t+".");if("number"!=typeof t.v)throw new Error("The template parser was passed a non-string template, but the template doesn't have a version.  Make sure you're passing in the template you think you are.");if(t.v!==oa)throw new Error("Mismatched template version (expected "+oa+", got "+t.v+") Please ensure you are using the latest version of Ractive.js in your build process as well as in your app")}return t}function sn(t,e,n){if(e)for(var i in e)(n||!t.hasOwnProperty(i))&&(t[i]=e[i])}function on(t,e,n){if(!/_super/.test(n))return n;var i=function(){var t,r=an(i._parent,e),s="_super"in this,o=this._super;return this._super=r,t=n.apply(this,arguments),s?this._super=o:delete this._super,t};return i._parent=t,i._method=n,i}function an(t,e){var n,i;return e in t?(n=t[e],i="function"==typeof n?n:function(){return n}):i=Fa,i}function un(t,e,n){return"options."+t+" has been deprecated in favour of options."+e+"."+(n?" You cannot specify both options, please use options."+e+".":"")}function hn(t,e,n){if(e in t){if(n in t)throw new Error(un(e,n,!0));m(un(e,n)),t[n]=t[e]}}function cn(t){hn(t,"beforeInit","onconstruct"),hn(t,"init","onrender"),hn(t,"complete","oncomplete"),hn(t,"eventDefinitions","events"),s(t.adaptors)&&hn(t,"adaptors","adapt")}function ln(t,e,n,i){yd(i);for(var r in i)if(md.hasOwnProperty(r)){var s=i[r];"el"!==r&&"function"==typeof s?m(""+r+" is a Ractive option that does not expect a function and will be ignored","init"===t?n:null):n[r]=s}vd.forEach(function(r){r[t](e,n,i)}),Th[t](e,n,i),hd[t](e,n,i),Mh[t](e,n,i),fn(e.prototype,n,i)}function fn(t,e,n){for(var i in n)if(!pd[i]&&n.hasOwnProperty(i)){var r=n[i];"function"==typeof r&&(r=gd(t,i,r)),e[i]=r}}function dn(t){var e={};return t.forEach(function(t){return e[t]=!0}),e}function pn(){this.dirtyValue=this.dirtyArgs=!0,this.bound&&"function"==typeof this.owner.bubble&&this.owner.bubble()}function mn(){var t;return 1===this.items.length?this.items[0].detach():(t=document.createDocumentFragment(),this.items.forEach(function(e){var n=e.detach();n&&t.appendChild(n)}),t)}function vn(t){var e,n,i,r;if(this.items){for(n=this.items.length,e=0;n>e;e+=1)if(i=this.items[e],i.find&&(r=i.find(t)))return r;return null}}function gn(t,e){var n,i,r;if(this.items)for(i=this.items.length,n=0;i>n;n+=1)r=this.items[n],r.findAll&&r.findAll(t,e);return e}function yn(t,e){var n,i,r;if(this.items)for(i=this.items.length,n=0;i>n;n+=1)r=this.items[n],r.findAllComponents&&r.findAllComponents(t,e);return e}function bn(t){var e,n,i,r;if(this.items){for(e=this.items.length,n=0;e>n;n+=1)if(i=this.items[n],i.findComponent&&(r=i.findComponent(t)))return r;return null}}function wn(t){var e,n=t.index;return e=this.items[n+1]?this.items[n+1].firstNode():this.owner===this.root?this.owner.component?this.owner.component.findNextNode():null:this.owner.findNextNode(this)}function xn(){return this.items&&this.items[0]?this.items[0].firstNode():null}function kn(t,e,n,i){return i=i||0,t.map(function(t){var r,s,o;return t.text?t.text:t.fragments?t.fragments.map(function(t){return kn(t.items,e,n,i)}).join(""):(r=n+"-"+i++,o=t.keypath&&(s=t.root.viewmodel.wrapped[t.keypath.str])?s.value:t.getValue(),e[r]=o,"${"+r+"}")}).join("")}function En(){var t,e,n,i;return this.dirtyArgs&&(e=Od(this.items,t={},this.root._guid),n=Af("["+e+"]",t),i=n?n.value:[this.toString()],this.argsList=i,this.dirtyArgs=!1),this.argsList}function _n(){var t=this;do if(t.pElement)return t.pElement.node;while(t=t.parent);return this.root.detached||this.root.el}function An(){var t,e,n,i;return this.dirtyValue&&(e=Od(this.items,t={},this.root._guid),n=Af(e,t),i=n?n.value:this.toString(),this.value=i,this.dirtyValue=!1),this.value}function Sn(){this.registered&&this.root.viewmodel.unregister(this.keypath,this),this.resolver&&this.resolver.unbind()}function Cn(){return this.value}function On(t,e){for(var n,i=0;i<e.prop.length;i++)if(void 0!==(n=t[e.prop[i]]))return n}function Pn(t,e){var n,i,r,s,o,a={},u=!1;for(e||(a.refs=n={});t;){if((o=t.owner)&&(i=o.indexRefs)){if(e&&(r=o.getIndexRef(e)))return a.ref={fragment:t,ref:r},a;if(!e)for(s in i)r=i[s],n[r.n]||(u=!0,n[r.n]={fragment:t,ref:r})}!t.parent&&t.owner&&t.owner.component&&t.owner.component.parentFragment&&!t.owner.component.instance.isolated?(a.componentBoundary=!0,t=t.owner.component.parentFragment):t=t.parent}return u?a:void 0}function Tn(t,e,n){var i;return"@"===e.charAt(0)?new Wd(t,e,n):(i=qd(t.parentFragment,e))?new Bd(t,i,n):new Vd(t,e,n)}function Fn(t,e){var n,i;if(Hd[t])return Hd[t];for(i=[];e--;)i[e]="_"+e;return n=new Function(i.join(","),"return("+t+")"),Hd[t]=n,n}function Rn(t){return t.call()}function jn(t,e){return t.replace(/_([0-9]+)/g,function(t,n){var i,r;return+n>=e.length?"_"+n:(i=e[n],void 0===i?"undefined":i.isSpecial?(r=i.value,"number"==typeof r?r:'"'+r+'"'):i.str)})}function Nn(t){return _("${"+t.replace(/[\.\[\]]/g,"-").replace(/\*/,"#MUL#")+"}")}function Dn(t){return void 0!==t&&"@"!==t[0]}function In(t,e){var n,i,r;if(t.__ractive_nowrap)return t;if(i="__ractive_"+e._guid,n=t[i])return n;if(/this/.test(t.toString())){xa(t,i,{value:Kd.call(t,e),configurable:!0});for(r in t)t.hasOwnProperty(r)&&(t[i][r]=t[r]);return e._boundFunctions.push({fn:t,prop:i}),t[i]}return xa(t,"__ractive_nowrap",{value:t}),t.__ractive_nowrap}function Ln(t){return t.value}function Vn(t){return void 0!=t}function Mn(t){t.forceResolution()}function Un(t,e){function n(e){t.resolve(e)}function i(e){var n=t.keypath;e!=n&&(t.resolve(e),void 0!==n&&t.fragments&&t.fragments.forEach(function(t){t.rebind(n,e)}))}var r,s,o;s=e.parentFragment,o=e.template,t.root=s.root,t.parentFragment=s,t.pElement=s.pElement,t.template=e.template,t.index=e.index||0,t.isStatic=e.template.s,t.type=e.template.t,t.registered=!1,(r=o.r)&&(t.resolver=Qd(t,r,n)),e.template.x&&(t.resolver=new Gd(t,s,e.template.x,i)),e.template.rx&&(t.resolver=new tp(t,e.template.rx,i)),t.template.n!==Sc||t.hasOwnProperty("value")||t.setValue(void 0)}function Wn(t){var e,n,i;return t&&t.isSpecial?(this.keypath=t,void this.setValue(t.value)):(this.registered&&(this.root.viewmodel.unregister(this.keypath,this),this.registered=!1,e=!0),this.keypath=t,void 0!=t&&(n=this.root.viewmodel.get(t),this.root.viewmodel.register(t,this),this.registered=!0),this.setValue(n),void(e&&(i=this.twowayBinding)&&i.rebound()))}function zn(t,e){this.fragments&&this.fragments.forEach(function(n){return n.rebind(t,e)}),this.resolver&&this.resolver.rebind(t,e)}function Bn(){this.parentFragment.bubble()}function qn(){var t;return 1===this.fragments.length?this.fragments[0].detach():(t=document.createDocumentFragment(),this.fragments.forEach(function(e){t.appendChild(e.detach())}),t)}function $n(t){var e,n,i;for(n=this.fragments.length,e=0;n>e;e+=1)if(i=this.fragments[e].find(t))return i;return null}function Qn(t,e){var n,i;for(i=this.fragments.length,n=0;i>n;n+=1)this.fragments[n].findAll(t,e)}function Zn(t,e){var n,i;for(i=this.fragments.length,n=0;i>n;n+=1)this.fragments[n].findAllComponents(t,e)}function Hn(t){var e,n,i;for(n=this.fragments.length,e=0;n>e;e+=1)if(i=this.fragments[e].findComponent(t))return i;return null}function Kn(t){return this.fragments[t.index+1]?this.fragments[t.index+1].firstNode():this.parentFragment.findNextNode(this)}function Gn(){var t,e,n;if(t=this.fragments.length)for(e=0;t>e;e+=1)if(n=this.fragments[e].firstNode())return n;return this.parentFragment.findNextNode(this)}function Yn(t){var e,n,i,r,s,o,a,u=this;if(!this.shuffling&&!this.unbound&&this.currentSubtype===Cc){if(this.shuffling=!0,mu.scheduleTask(function(){return u.shuffling=!1}),e=this.parentFragment,s=[],t.forEach(function(t,e){var i,r,o,a,h;return t===e?void(s[t]=u.fragments[e]):(i=u.fragments[e],void 0===n&&(n=e),-1===t?(u.fragmentsToUnrender.push(i),void i.unbind()):(r=t-e,o=u.keypath.join(e),a=u.keypath.join(t),i.index=t,(h=i.registeredIndexRefs)&&h.forEach(Jn),i.rebind(o,a),void(s[t]=i)))}),r=this.root.viewmodel.get(this.keypath).length,void 0===n){if(this.length===r)return;n=this.length}for(this.length=this.fragments.length=r,this.rendered&&mu.addView(this),o={template:this.template.f,root:this.root,owner:this},i=n;r>i;i+=1)a=s[i],a||this.fragmentsToCreate.push(i),this.fragments[i]=a}}function Jn(t){t.rebind("","")}function Xn(){var t=this;return this.docFrag=document.createDocumentFragment(),this.fragments.forEach(function(e){return t.docFrag.appendChild(e.render())}),this.renderedFragments=this.fragments.slice(),this.fragmentsToRender=[],this.rendered=!0,this.docFrag}function ti(t){var e,n,i=this;this.updating||(this.updating=!0,this.keypath&&(e=this.root.viewmodel.wrapped[this.keypath.str])&&(t=e.get()),this.fragmentsToCreate.length?(n={template:this.template.f||[],root:this.root,pElement:this.pElement,owner:this},this.fragmentsToCreate.forEach(function(t){var e;n.context=i.keypath.join(t),n.index=t,e=new yb(n),i.fragmentsToRender.push(i.fragments[t]=e)}),this.fragmentsToCreate.length=0):ni(this,t)&&(this.bubble(),this.rendered&&mu.addView(this)),this.value=t,this.updating=!1)}function ei(t,e,n){if(e===Cc&&t.indexRefs&&t.indexRefs[0]){var i=t.indexRefs[0];(n&&"i"===i.t||!n&&"k"===i.t)&&(n||(t.length=0,t.fragmentsToUnrender=t.fragments.slice(0),t.fragmentsToUnrender.forEach(function(t){return t.unbind()}))),i.t=n?"k":"i"}t.currentSubtype=e}function ni(t,e){var n={template:t.template.f||[],root:t.root,pElement:t.parentFragment.pElement,owner:t};if(t.hasContext=!0,t.subtype)switch(t.subtype){case Ac:return t.hasContext=!1,ai(t,e,!1,n);case Sc:return t.hasContext=!1,ai(t,e,!0,n);case Oc:return oi(t,n);case Pc:return si(t,e,n);case Cc:if(h(e))return ei(t,t.subtype,!0),ri(t,e,n)}return t.ordered=!!o(e),t.ordered?(ei(t,Cc,!1),ii(t,e,n)):h(e)||"function"==typeof e?t.template.i?(ei(t,Cc,!0),ri(t,e,n)):(ei(t,Oc,!1),oi(t,n)):(ei(t,Ac,!1),t.hasContext=!1,ai(t,e,!1,n))}function ii(t,e,n){var i,r,s;if(r=e.length,r===t.length)return!1;if(r<t.length)t.fragmentsToUnrender=t.fragments.splice(r,t.length-r),t.fragmentsToUnrender.forEach(Z);else if(r>t.length)for(i=t.length;r>i;i+=1)n.context=t.keypath.join(i),n.index=i,s=new yb(n),t.fragmentsToRender.push(t.fragments[i]=s);return t.length=r,!0}function ri(t,e,n){var i,r,s,o,a,u;for(s=t.hasKey||(t.hasKey={}),r=t.fragments.length;r--;)o=t.fragments[r],o.key in e||(a=!0,o.unbind(),t.fragmentsToUnrender.push(o),t.fragments.splice(r,1),s[o.key]=!1);for(r=t.fragments.length;r--;)o=t.fragments[r],o.index!==r&&(o.index=r,(u=o.registeredIndexRefs)&&u.forEach(ci));r=t.fragments.length;for(i in e)s[i]||(a=!0,n.context=t.keypath.join(i),n.key=i,n.index=r++,o=new yb(n),t.fragmentsToRender.push(o),t.fragments.push(o),s[i]=!0);return t.length=t.fragments.length,a}function si(t,e,n){return e?oi(t,n):ui(t)}function oi(t,e){var n;return t.length?void 0:(e.context=t.keypath,e.index=0,n=new yb(e),t.fragmentsToRender.push(t.fragments[0]=n),t.length=1,!0)}function ai(t,e,n,i){var r,s,a,u,c;if(s=o(e)&&0===e.length,a=!1,!o(e)&&h(e)){a=!0;for(c in e){a=!1;break}}return r=n?s||a||!e:e&&!s&&!a,r?t.length?t.length>1?(t.fragmentsToUnrender=t.fragments.splice(1),t.fragmentsToUnrender.forEach(Z),!0):void 0:(i.index=0,u=new yb(i),t.fragmentsToRender.push(t.fragments[0]=u),t.length=1,!0):ui(t)}function ui(t){return t.length?(t.fragmentsToUnrender=t.fragments.splice(0,t.fragments.length).filter(hi),t.fragmentsToUnrender.forEach(Z),t.length=t.fragmentsToRender.length=0,!0):void 0}function hi(t){return t.rendered}function ci(t){t.rebind("","")}function li(t){var e,n,i;for(e="",n=0,i=this.length,n=0;i>n;n+=1)e+=this.fragments[n].toString(t);return e}function fi(){var t=this;this.fragments.forEach(Z),this.fragmentsToRender.forEach(function(e){return I(t.fragments,e)}),this.fragmentsToRender=[],Dd.call(this),this.length=0,this.unbound=!0}function di(t){this.fragments.forEach(t?pi:mi),this.renderedFragments=[],this.rendered=!1}function pi(t){t.unrender(!0)}function mi(t){t.unrender(!1)}function vi(){var t,e,n,i,r,s,o;for(n=this.renderedFragments;t=this.fragmentsToUnrender.pop();)t.unrender(!0),n.splice(n.indexOf(t),1);for(;t=this.fragmentsToRender.shift();)t.render();for(this.rendered&&(r=this.parentFragment.getNode()),o=this.fragments.length,s=0;o>s;s+=1)t=this.fragments[s],e=n.indexOf(t,s),e!==s?(this.docFrag.appendChild(t.detach()),-1!==e&&n.splice(e,1),n.splice(s,0,t)):this.docFrag.childNodes.length&&(i=t.firstNode(),r.insertBefore(this.docFrag,i));this.rendered&&this.docFrag.childNodes.length&&(i=this.parentFragment.findNextNode(this),r.insertBefore(this.docFrag,i)),this.renderedFragments=this.fragments.slice()}function gi(){var t,e;if(this.docFrag){for(t=this.nodes.length,e=0;t>e;e+=1)this.docFrag.appendChild(this.nodes[e]);return this.docFrag}}function yi(t){var e,n,i,r;for(n=this.nodes.length,e=0;n>e;e+=1)if(i=this.nodes[e],1===i.nodeType){if(fa(i,t))return i;if(r=i.querySelector(t))return r}return null}function bi(t,e){var n,i,r,s,o,a;for(i=this.nodes.length,n=0;i>n;n+=1)if(r=this.nodes[n],1===r.nodeType&&(fa(r,t)&&e.push(r),s=r.querySelectorAll(t)))for(o=s.length,a=0;o>a;a+=1)e.push(s[a])}function wi(){return this.rendered&&this.nodes[0]?this.nodes[0]:this.parentFragment.findNextNode(this)}function xi(t){return Fp[t]||(Fp[t]=la(t))}function ki(t){var e,n,i;t&&"select"===t.name&&t.binding&&(e=L(t.node.options).filter(Ei),t.getAttribute("multiple")?i=e.map(function(t){return t.value}):(n=e[0])&&(i=n.value),void 0!==i&&t.binding.setValue(i),t.bubble())}function Ei(t){return t.selected}function _i(){if(this.rendered)throw new Error("Attempted to render an item that was already rendered");return this.docFrag=document.createDocumentFragment(),this.nodes=Rp(this.value,this.parentFragment.getNode(),this.docFrag),jp(this.pElement),this.rendered=!0,this.docFrag}function Ai(t){var e;(e=this.root.viewmodel.wrapped[this.keypath.str])&&(t=e.get()),t!==this.value&&(this.value=t,this.parentFragment.bubble(),this.rendered&&mu.addView(this))}function Si(){return void 0!=this.value?_e(""+this.value):""}function Ci(t){this.rendered&&t&&(this.nodes.forEach(e),this.rendered=!1)}function Oi(){var t,e;if(this.rendered){for(;this.nodes&&this.nodes.length;)t=this.nodes.pop(),t.parentNode.removeChild(t);e=this.parentFragment.getNode(),this.nodes=Rp(this.value,e,this.docFrag),e.insertBefore(this.docFrag,this.parentFragment.findNextNode(this)),jp(this.pElement)}}function Pi(){var t,e=this.node;return e?((t=e.parentNode)&&t.removeChild(e),e):void 0}function Ti(){return null}function Fi(){return this.node}function Ri(t){return this.attributes&&this.attributes[t]?this.attributes[t].value:void 0}function ji(){var t=this.useProperty||!this.rendered?this.fragment.getValue():this.fragment.toString();a(t,this.value)||("id"===this.name&&this.value&&delete this.root.nodes[this.value],this.value=t,"value"===this.name&&this.node&&(this.node._ractive.value=t),this.rendered&&mu.addView(this))}function Ni(t){var e=t.fragment.items;if(1===e.length)return e[0].type===Hh?e[0]:void 0}function Di(t){return this.type=ic,this.element=t.element,this.root=t.root,sm(this,t.name),this.isBoolean=yl.test(this.name),t.value&&"string"!=typeof t.value?(this.parentFragment=this.element.parentFragment,this.fragment=new yb({template:t.value,root:this.root,owner:this}),this.value=this.fragment.getValue(),this.interpolator=om(this),this.isBindable=!!this.interpolator&&!this.interpolator.isStatic,void(this.ready=!0)):void(this.value=this.isBoolean?!0:t.value||"")}function Ii(t,e){this.fragment&&this.fragment.rebind(t,e)}function Li(t){var e;this.node=t,t.namespaceURI&&t.namespaceURI!==ia.html||(e=cm[this.name]||this.name,void 0!==t[e]&&(this.propertyName=e),(this.isBoolean||this.isTwoway)&&(this.useProperty=!0),"value"===e&&(t._ractive.value=this.value)),this.rendered=!0,this.update()}function Vi(){var t=this,e=t.name,n=t.namespacePrefix,i=t.value,r=t.interpolator,s=t.fragment;if(("value"!==e||"select"!==this.element.name&&"textarea"!==this.element.name)&&("value"!==e||void 0===this.element.getAttribute("contenteditable"))){if("name"===e&&"input"===this.element.name&&r)return"name={{"+(r.keypath.str||r.ref)+"}}";if(this.isBoolean)return i?e:"";if(s){if(1===s.items.length&&null==s.items[0].value)return"";i=s.toString()}return n&&(e=n+":"+e),i?e+'="'+Mi(i)+'"':e}}function Mi(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ui(){this.fragment&&this.fragment.unbind(),"id"===this.name&&delete this.root.nodes[this.value]}function Wi(){var t,e,n,i,r=this.value;if(!this.locked)for(this.node._ractive.value=r,t=this.node.options,i=t.length;i--;)if(e=t[i],n=e._ractive?e._ractive.value:e.value,n==r){e.selected=!0;break}}function zi(){var t,e,n,i,r=this.value;for(s(r)||(r=[r]),t=this.node.options,e=t.length;e--;)n=t[e],i=n._ractive?n._ractive.value:n.value,n.selected=R(r,i)}function Bi(){var t=this,e=t.node,n=t.value;e.checked=n==e._ractive.value}function qi(){var t,e,n,i,r=this.node;if(t=r.checked,r.value=this.element.getAttribute("value"),r.checked=this.element.getAttribute("value")===this.element.getAttribute("name"),t&&!r.checked&&this.element.binding&&(n=this.element.binding.siblings,i=n.length)){for(;i--;){if(e=n[i],!e.element.node)return;if(e.element.node.checked)return mu.addRactive(e.root),e.handleChange()}this.root.viewmodel.set(e.keypath,void 0)}}function $i(){var t,e,n=this,i=n.element,r=n.node,o=n.value,a=i.binding;if(t=i.getAttribute("value"),s(o)){for(e=o.length;e--;)if(t==o[e])return void(a.isChecked=r.checked=!0);a.isChecked=r.checked=!1}else a.isChecked=r.checked=o==t}function Qi(){this.node.className=n(this.value)}function Zi(){var t=this,e=t.node,n=t.value;this.root.nodes[n]=e,e.id=n}function Hi(){var t,e;t=this.node,e=this.value,void 0===e&&(e=""),t.style.setAttribute("cssText",e)}function Ki(){var t=this.value;void 0===t&&(t=""),this.locked||(this.node.innerHTML=t)}function Gi(){var t=this,e=t.node,n=t.value;e._ractive.value=n,this.locked||(e.value=void 0==n?"":n)}function Yi(){this.locked||(this.node[this.propertyName]=this.value)}function Ji(){var t=this,e=t.node,n=t.namespace,i=t.name,r=t.value,s=t.fragment;n?e.setAttributeNS(n,i,(s||r).toString()):this.isBoolean?r?e.setAttribute(i,""):e.removeAttribute(i):null==r?e.removeAttribute(i):e.setAttribute(i,(s||r).toString())}function Xi(){var t,e,n=this,i=n.name,r=n.element,s=n.node;"id"===i?e=bm:"value"===i?"select"===r.name&&"value"===i?e=r.getAttribute("multiple")?pm:dm:"textarea"===r.name?e=km:null!=r.getAttribute("contenteditable")?e=xm:"input"===r.name&&(t=r.getAttribute("type"),e="file"===t?Fa:"radio"===t&&r.binding&&"name"===r.binding.name?vm:km):this.isTwoway&&"name"===i?"radio"===s.type?e=mm:"checkbox"===s.type&&(e=gm):"style"===i&&s.style.setAttribute?e=wm:"class"!==i||s.namespaceURI&&s.namespaceURI!==ia.html?this.useProperty&&(e=Em):e=ym,e||(e=_m),this.update=e,this.update()}function tr(t,e){var n=e?"svg":"div";return Cm.innerHTML="<"+n+" "+t+"></"+n+">",L(Cm.childNodes[0].attributes)}function er(t,e){for(var n=t.length;n--;)if(t[n].name===e.name)return!1;return!0}function nr(t){for(;t=t.parent;)if("form"===t.name)return t}function ir(){this._ractive.binding.handleChange()}function rr(){var t;Im.call(this),t=this._ractive.root.viewmodel.get(this._ractive.binding.keypath),this.value=void 0==t?"":t}function sr(){var t=this._ractive.binding,e=this;t._timeout&&clearTimeout(t._timeout),t._timeout=setTimeout(function(){t.rendered&&Im.call(e),t._timeout=void 0},t.element.lazy)}function or(t,e,n){var i=t+e+n;return Wm[i]||(Wm[i]=[])}function ar(t){return t.isChecked}function ur(t){return t.element.getAttribute("value")}function hr(t){var e,n,i,r,s,o=t.attributes;return t.binding&&(t.binding.teardown(),t.binding=null),(t.getAttribute("contenteditable")||o.contenteditable&&cr(o.contenteditable))&&cr(o.value)?n=Mm:"input"===t.name?(e=t.getAttribute("type"),"radio"===e||"checkbox"===e?(i=cr(o.name),r=cr(o.checked),i&&r&&m("A radio input can have two-way binding on its name attribute, or its checked attribute - not both",{ractive:t.root}),i?n="radio"===e?$m:Zm:r&&(n="radio"===e?Bm:Km)):"file"===e&&cr(o.value)?n=ev:cr(o.value)&&(n="number"===e||"range"===e?nv:Lm)):"select"===t.name&&cr(o.value)?n=t.getAttribute("multiple")?Xm:Ym:"textarea"===t.name&&cr(o.value)&&(n=Lm),n&&(s=new n(t))&&s.keypath?s:void 0}function cr(t){return t&&t.isBindable}function lr(){var t=this.getAction();t&&!this.hasListener?this.listen():!t&&this.hasListener&&this.unrender()}function fr(t){Wu(this.root,this.getAction(),{event:t})}function dr(){return this.action.toString().trim()}function pr(t,e,n){var i,r,s,o=this;this.element=t,this.root=t.root,this.parentFragment=t.parentFragment,this.name=e,-1!==e.indexOf("*")&&(l('Only component proxy-events may contain "*" wildcards, <%s on-%s="..."/> is not valid',t.name,e),this.invalid=!0),n.m?(r=n.a.r,this.method=n.m,this.keypaths=[],this.fn=Zd(n.a.s,r.length),this.parentFragment=t.parentFragment,s=this.root,this.refResolvers=[],r.forEach(function(t,e){var n=void 0;(n=uv.exec(t))?o.keypaths[e]={eventObject:!0,refinements:n[1]?n[1].split("."):[]}:o.refResolvers.push(Qd(o,t,function(t){return o.resolve(e,t)}))}),this.fire=mr):(i=n.n||n,"string"!=typeof i&&(i=new yb({template:i,root:this.root,owner:this})),this.action=i,n.d?(this.dynamicParams=new yb({template:n.d,root:this.root,owner:this.element}),this.fire=gr):n.a&&(this.params=n.a,this.fire=vr))}function mr(t){var e,n,i;if(e=this.root,"function"!=typeof e[this.method])throw new Error('Attempted to call a non-existent method ("'+this.method+'")');n=this.keypaths.map(function(n){var i,r,s;if(void 0===n)return void 0;if(n.eventObject){if(i=t,r=n.refinements.length)for(s=0;r>s;s+=1)i=i[n.refinements[s]]}else i=e.viewmodel.get(n);return i}),Uu.enqueue(e,t),i=this.fn.apply(null,n),e[this.method].apply(e,i),Uu.dequeue(e)}function vr(t){Wu(this.root,this.getAction(),{event:t,args:this.params})}function gr(t){var e=this.dynamicParams.getArgsList();"string"==typeof e&&(e=e.substr(1,e.length-2)),Wu(this.root,this.getAction(),{event:t,args:e})}function yr(t){var e,n,i,r={};e=this._ractive,n=e.events[t.type],(i=qd(n.element.parentFragment))&&(r=qd.resolve(i)),n.fire({node:this,original:t,index:r,keypath:e.keypath.str,context:e.root.viewmodel.get(e.keypath)})}function br(){var t,e=this.name;if(!this.invalid){if(t=g("events",this.root,e))this.custom=t(this.node,wr(e));else{if(!("on"+e in this.node||window&&"on"+e in window||ta))return void(fv[e]||v(Da(e,"event"),{node:this.node}));this.node.addEventListener(e,hv,!1)}this.hasListener=!0}}function wr(t){return lv[t]||(lv[t]=function(e){var n=e.node._ractive;e.index=n.index,e.keypath=n.keypath.str,e.context=n.root.viewmodel.get(n.keypath),n.events[t].fire(e)}),lv[t]}function xr(t,e){function n(n){n&&n.rebind(t,e)}var i;return this.method?(i=this.element.parentFragment,void this.refResolvers.forEach(n)):("string"!=typeof this.action&&n(this.action),void(this.dynamicParams&&n(this.dynamicParams)))}function kr(){this.node=this.element.node,this.node._ractive.events[this.name]=this,(this.method||this.getAction())&&this.listen()}function Er(t,e){this.keypaths[t]=e}function _r(){return this.method?void this.refResolvers.forEach(Z):("string"!=typeof this.action&&this.action.unbind(),void(this.dynamicParams&&this.dynamicParams.unbind()))}function Ar(){this.custom?this.custom.teardown():this.node.removeEventListener(this.name,hv,!1),this.hasListener=!1}function Sr(){var t=this;this.dirty||(this.dirty=!0,mu.scheduleTask(function(){Cr(t),t.dirty=!1})),this.parentFragment.bubble()}function Cr(t){var e,n,i,r,s;e=t.node,e&&(r=L(e.options),n=t.getAttribute("value"),i=t.getAttribute("multiple"),void 0!==n?(r.forEach(function(t){var e,r;e=t._ractive?t._ractive.value:t.value,r=i?Or(n,e):n==e,r&&(s=!0),t.selected=r}),s||(r[0]&&(r[0].selected=!0),t.binding&&t.binding.forceUpdate())):t.binding&&t.binding.forceUpdate())}function Or(t,e){for(var n=t.length;n--;)if(t[n]==e)return!0}function Pr(t,e){t.select=Fr(t.parent),t.select&&(t.select.options.push(t),e.a||(e.a={}),void 0!==e.a.value||e.a.hasOwnProperty("disabled")||(e.a.value=e.f),"selected"in e.a&&void 0!==t.select.getAttribute("value")&&delete e.a.selected)}function Tr(t){t.select&&I(t.select.options,t)}function Fr(t){if(t)do if("select"===t.name)return t;while(t=t.parent)}function Rr(t){var e,n,i,r,s,o,a;this.type=Xh,e=this.parentFragment=t.parentFragment,n=this.template=t.template,this.parent=t.pElement||e.pElement,this.root=i=e.root,this.index=t.index,this.key=t.key,this.name=rm(n.e),"option"===this.name&&Pr(this,n),"select"===this.name&&(this.options=[],this.bubble=Sr),"form"===this.name&&(this.formBindings=[]),a=nm(this,n),this.attributes=Pm(this,n.a),this.conditionalAttributes=Rm(this,n.m),n.f&&(this.fragment=new yb({template:n.f,root:i,owner:this,pElement:this,cssIds:null})),o=i.twoway,a.twoway===!1?o=!1:a.twoway===!0&&(o=!0),this.twoway=o,this.lazy=a.lazy,o&&(r=iv(this,n.a))&&(this.binding=r,s=this.root._twowayBindings[r.keypath.str]||(this.root._twowayBindings[r.keypath.str]=[]),s.push(r)),n.v&&(this.eventHandlers=wv(this,n.v)),n.o&&(this.decorator=new Av(this,n.o)),this.intro=n.t0||n.t1,this.outro=n.t0||n.t2}function jr(t,e){function n(n){n.rebind(t,e)}var i,r,s,o;if(this.attributes&&this.attributes.forEach(n),this.conditionalAttributes&&this.conditionalAttributes.forEach(n),this.eventHandlers&&this.eventHandlers.forEach(n),this.decorator&&n(this.decorator),this.fragment&&n(this.fragment),s=this.liveQueries)for(o=this.root,i=s.length;i--;)s[i]._makeDirty();this.node&&(r=this.node._ractive)&&k(r,"keypath",t,e)}function Nr(t){var e;(t.attributes.width||t.attributes.height)&&t.node.addEventListener("load",e=function(){var n=t.getAttribute("width"),i=t.getAttribute("height");void 0!==n&&t.node.setAttribute("width",n),void 0!==i&&t.node.setAttribute("height",i),t.node.removeEventListener("load",e,!1)},!1)}function Dr(t){t.node.addEventListener("reset",Lr,!1)}function Ir(t){t.node.removeEventListener("reset",Lr,!1)}function Lr(){var t=this._ractive.proxy;mu.start(),t.formBindings.forEach(Vr),mu.end()}function Vr(t){t.root.viewmodel.set(t.keypath,t.resetValue)}function Mr(t,e,n){var i,r,s;this.element=t,this.root=i=t.root,this.isIntro=n,r=e.n||e,("string"==typeof r||(s=new yb({template:r,root:i,owner:t}),r=s.toString(),s.unbind(),""!==r))&&(this.name=r,e.a?this.params=e.a:e.d&&(s=new yb({template:e.d,root:i,owner:t}),this.params=s.getArgsList(),s.unbind()),this._fn=g("transitions",i,r),this._fn||v(Da(r,"transition"),{ractive:this.root}))}function Ur(t){return t}function Wr(){eg.hidden=document[Yv]}function zr(){eg.hidden=!0}function Br(){eg.hidden=!1}function qr(){var t,e,n,i=this;return t=this.node=this.element.node,e=t.getAttribute("style"),this.complete=function(r){n||(!r&&i.isIntro&&$r(t,e),t._ractive.transition=null,i._manager.remove(i),n=!0)},this._fn?void this._fn.apply(this.root,[this].concat(this.params)):void this.complete()}function $r(t,e){e?t.setAttribute("style",e):(t.getAttribute("style"),t.removeAttribute("style"))}function Qr(){var t,e,n,i=this,r=this.root;return t=Zr(this),e=this.node=la(this.name,t),this.parentFragment.cssIds&&this.node.setAttribute("data-ractive-css",this.parentFragment.cssIds.map(function(t){return"{"+t+"}"}).join(" ")),xa(this.node,"_ractive",{value:{proxy:this,keypath:au(this.parentFragment),events:wa(null),root:r}}),this.attributes.forEach(function(t){return t.render(e)}),this.conditionalAttributes.forEach(function(t){return t.render(e)}),this.fragment&&("script"===this.name?(this.bubble=fg,this.node.text=this.fragment.toString(!1),this.fragment.unrender=Fa):"style"===this.name?(this.bubble=lg,this.bubble(),this.fragment.unrender=Fa):this.binding&&this.getAttribute("contenteditable")?this.fragment.unrender=Fa:this.node.appendChild(this.fragment.render())),this.binding&&(this.binding.render(),this.node._ractive.binding=this.binding),this.eventHandlers&&this.eventHandlers.forEach(function(t){return t.render()}),"option"===this.name&&Hr(this),"img"===this.name?Nr(this):"form"===this.name?Dr(this):"input"===this.name||"textarea"===this.name?this.node.defaultValue=this.node.value:"option"===this.name&&(this.node.defaultSelected=this.node.selected),this.decorator&&this.decorator.fn&&mu.scheduleTask(function(){i.decorator.torndown||i.decorator.init()},!0),r.transitionsEnabled&&this.intro&&(n=new dg(this,this.intro,!0),mu.registerTransition(n),mu.scheduleTask(function(){return n.start()},!0),this.transition=n),this.node.autofocus&&mu.scheduleTask(function(){return i.node.focus()},!0),Kr(this),this.node}function Zr(t){var e,n,i;return e=(n=t.getAttribute("xmlns"))?n:"svg"===t.name?ia.svg:(i=t.parent)?"foreignObject"===i.name?ia.html:i.node.namespaceURI:t.root.el.namespaceURI}function Hr(t){var e,n,i;if(t.select&&(n=t.select.getAttribute("value"),void 0!==n))if(e=t.getAttribute("value"),t.select.node.multiple&&s(n)){for(i=n.length;i--;)if(e==n[i]){t.node.selected=!0;break}}else t.node.selected=e==n}function Kr(t){var e,n,i,r,s;e=t.root;do for(n=e._liveQueries,i=n.length;i--;)r=n[i],s=n["_"+r],s._test(t)&&(t.liveQueries||(t.liveQueries=[])).push(s);while(e=e.parent)}function Gr(t){var e,n,i;if(e=t.getAttribute("value"),void 0===e||!t.select)return!1;if(n=t.select.getAttribute("value"),n==e)return!0;if(t.select.getAttribute("multiple")&&s(n))for(i=n.length;i--;)if(n[i]==e)return!0}function Yr(t){var e,n,i,r;return e=t.attributes,n=e.type,i=e.value,r=e.name,n&&"radio"===n.value&&i&&r.interpolator&&i.value===r.interpolator.value?!0:void 0}function Jr(t){var e=t.toString();return e?" "+e:""}function Xr(){this.fragment&&this.fragment.unbind(),this.binding&&this.binding.unbind(),this.eventHandlers&&this.eventHandlers.forEach(Z),"option"===this.name&&Tr(this),this.attributes.forEach(Z),this.conditionalAttributes.forEach(Z)}function ts(t){var e,n,i;(i=this.transition)&&i.complete(),"option"===this.name?this.detach():t&&mu.detachWhenReady(this),this.fragment&&this.fragment.unrender(!1),(e=this.binding)&&(this.binding.unrender(),this.node._ractive.binding=null,n=this.root._twowayBindings[e.keypath.str],n.splice(n.indexOf(e),1)),this.eventHandlers&&this.eventHandlers.forEach(H),this.decorator&&mu.registerDecorator(this.decorator),this.root.transitionsEnabled&&this.outro&&(i=new dg(this,this.outro,!1),mu.registerTransition(i),mu.scheduleTask(function(){return i.start()})),this.liveQueries&&es(this),"form"===this.name&&Ir(this)}function es(t){var e,n,i;for(i=t.liveQueries.length;i--;)e=t.liveQueries[i],n=e.selector,e._remove(t.node)}function ns(t,e){var n=xg.exec(e)[0];return null===t||n.length<t.length?n:t}function is(t,e,n){var i;if(i=rs(t,e,n||{}))return i;if(i=ad.fromId(e,{noThrow:!0})){i=kg(i);var r=ad.parse(i,ad.getParseOptions(t));return t.partials[e]=r.t;

}}function rs(t,e,n){var i=void 0,r=as(e,n.owner);if(r)return r;var s=y("partials",t,e);if(s){if(r=s.partials[e],"function"==typeof r&&(i=r.bind(s),i.isOwner=s.partials.hasOwnProperty(e),r=i.call(t,ad)),!r&&""!==r)return void m(Na,e,"partial","partial",{ractive:t});if(!ad.isParsed(r)){var o=ad.parse(r,ad.getParseOptions(s));o.p&&m("Partials ({{>%s}}) cannot contain nested inline partials",e,{ractive:t});var a=i?s:ss(s,e);a.partials[e]=r=o.t}return i&&(r._fn=i),r.v?r.t:r}}function ss(t,e){return t.partials.hasOwnProperty(e)?t:os(t.constructor,e)}function os(t,e){return t?t.partials.hasOwnProperty(e)?t:os(t._Parent,e):void 0}function as(t,e){if(e){if(e.template&&e.template.p&&e.template.p[t])return e.template.p[t];if(e.parentFragment&&e.parentFragment.owner)return as(t,e.parentFragment.owner)}}function us(t,e){var n,i=y("components",t,e);if(i&&(n=i.components[e],!n._Parent)){var r=n.bind(i);if(r.isOwner=i.components.hasOwnProperty(e),n=r(),!n)return void m(Na,e,"component","component",{ractive:t});"string"==typeof n&&(n=us(t,n)),n._fn=r,i.components[e]=n}return n}function hs(){var t=this.instance.fragment.detach();return jg.fire(this.instance),t}function cs(t){return this.instance.fragment.find(t)}function ls(t,e){return this.instance.fragment.findAll(t,e)}function fs(t,e){e._test(this,!0),this.instance.fragment&&this.instance.fragment.findAllComponents(t,e)}function ds(t){return t&&t!==this.name?this.instance.fragment?this.instance.fragment.findComponent(t):null:this.instance}function ps(){return this.parentFragment.findNextNode(this)}function ms(){return this.rendered?this.instance.fragment.firstNode():null}function vs(t,e,n){function i(t){var n,i;t.value=e,t.updating||(i=t.ractive,n=t.keypath,t.updating=!0,mu.start(i),i.viewmodel.mark(n),mu.end(),t.updating=!1)}var r,s,o,a,u,h;if(r=t.obj,s=t.prop,n&&!n.configurable){if("length"===s)return;throw new Error('Cannot use magic mode with property "'+s+'" - object is not configurable')}n&&(o=n.get,a=n.set),u=o||function(){return e},h=function(t){a&&a(t),e=o?o():t,h._ractiveWrappers.forEach(i)},h._ractiveWrappers=[t],Object.defineProperty(r,s,{get:u,set:h,enumerable:!0,configurable:!0})}function gs(t,e){var n,i,r,s;if(this.adaptors)for(n=this.adaptors.length,i=0;n>i;i+=1)if(r=this.adaptors[i],r.filter(e,t,this.ractive))return s=this.wrapped[t]=r.wrap(this.ractive,e,t,bs(t)),void(s.value=e)}function ys(t,e){var n,i={};if(!e)return t;e+=".";for(n in t)t.hasOwnProperty(n)&&(i[e+n]=t[n]);return i}function bs(t){var e;return iy[t]||(e=t?t+".":"",iy[t]=function(n,i){var r;return"string"==typeof n?(r={},r[e+n]=i,r):"object"==typeof n?e?ys(n,t):n:void 0}),iy[t]}function ws(t){var e,n,i=[Za];for(e=t.length;e--;)for(n=t[e].parent;n&&!n.isRoot;)-1===t.indexOf(n)&&F(i,n),n=n.parent;return i}function xs(t,e,n){var i;Es(t,e),n||(i=e.wildcardMatches(),i.forEach(function(n){ks(t,n,e)}))}function ks(t,e,n){var i,r,s;e=e.str||e,i=t.depsMap.patternObservers,r=i&&i[e],r&&r.forEach(function(e){s=n.join(e.lastKey),Es(t,s),ks(t,e,s)})}function Es(t,e){t.patternObservers.forEach(function(t){t.regex.test(e.str)&&t.update(e)})}function _s(){function t(t){var i=t.key;t.viewmodel===o?(o.clearCache(i.str),t.invalidate(),n.push(i),e(i)):t.viewmodel.mark(i)}function e(n){var i,r;o.noCascade.hasOwnProperty(n.str)||((r=o.deps.computed[n.str])&&r.forEach(t),(i=o.depsMap.computed[n.str])&&i.forEach(e))}var n,i,r,s=this,o=this,a={};return n=this.changes,n.length?(n.slice().forEach(e),i=ry(n),i.forEach(function(e){var i;-1===n.indexOf(e)&&(i=o.deps.computed[e.str])&&i.forEach(t)}),this.changes=[],this.patternObservers.length&&(i.forEach(function(t){return sy(s,t,!0)}),n.forEach(function(t){return sy(s,t)})),this.deps.observers&&(i.forEach(function(t){return As(s,null,t,"observers")}),Cs(this,n,"observers")),this.deps["default"]&&(r=[],i.forEach(function(t){return As(s,r,t,"default")}),r.length&&Ss(this,r,n),Cs(this,n,"default")),n.forEach(function(t){a[t.str]=s.get(t)}),this.implicitChanges={},this.noCascade={},a):void 0}function As(t,e,n,i){var r,s;(r=Os(t,n,i))&&(s=t.get(n),r.forEach(function(t){e&&t.refineValue?e.push(t):t.setValue(s)}))}function Ss(t,e,n){e.forEach(function(e){for(var i=!1,r=0,s=n.length,o=[];s>r;){var a=n[r];if(a===e.keypath){i=!0;break}a.slice(0,e.keypath.length)===e.keypath&&o.push(a),r++}i&&e.setValue(t.get(e.keypath)),o.length&&e.refineValue(o)})}function Cs(t,e,n){function i(t){t.forEach(r),t.forEach(s)}function r(e){var i=Os(t,e,n);i&&a.push({keypath:e,deps:i})}function s(e){var r;(r=t.depsMap[n][e.str])&&i(r)}function o(e){var n=t.get(e.keypath);e.deps.forEach(function(t){return t.setValue(n)})}var a=[];i(e),a.forEach(o)}function Os(t,e,n){var i=t.deps[n];return i?i[e.str]:null}function Ps(){this.captureGroups.push([])}function Ts(t,e){var n,i;if(e||(i=this.wrapped[t])&&i.teardown()!==!1&&(this.wrapped[t]=null),this.cache[t]=void 0,n=this.cacheMap[t])for(;n.length;)this.clearCache(n.pop())}function Fs(t,e){var n=e.firstKey;return!(n in t.data||n in t.computations||n in t.mappings)}function Rs(t,e){var n=new fy(t,e);return this.ready&&n.init(this),this.computations[t.str]=n}function js(t,e){var n,i,r,s,o,a=this.cache,u=t.str;if(e=e||vy,e.capture&&(s=D(this.captureGroups))&&(~s.indexOf(t)||s.push(t)),Oa.call(this.mappings,t.firstKey))return this.mappings[t.firstKey].get(t,e);if(t.isSpecial)return t.value;if(void 0===a[u]?((i=this.computations[u])&&!i.bypass?(n=i.get(),this.adapt(u,n)):(r=this.wrapped[u])?n=r.value:t.isRoot?(this.adapt("",this.data),n=this.data):n=Ns(this,t),a[u]=n):n=a[u],!e.noUnwrap&&(r=this.wrapped[u])&&(n=r.get()),t.isRoot&&e.fullRootGet)for(o in this.mappings)n[o]=this.mappings[o].getValue();return n===py?void 0:n}function Ns(t,e){var n,i,r,s;return n=t.get(e.parent),(s=t.wrapped[e.parent.str])&&(n=s.get()),null!==n&&void 0!==n?((i=t.cacheMap[e.parent.str])?-1===i.indexOf(e.str)&&i.push(e.str):t.cacheMap[e.parent.str]=[e.str],"object"!=typeof n||e.lastKey in n?(r=n[e.lastKey],t.adapt(e.str,r,!1),t.cache[e.str]=r,r):t.cache[e.str]=py):void 0}function Ds(){var t;for(t in this.computations)this.computations[t].init(this)}function Is(t,e){var n=this.mappings[t.str]=new by(t,e);return n.initViewmodel(this),n}function Ls(t,e){var n,i=t.str;e&&(e.implicit&&(this.implicitChanges[i]=!0),e.noCascade&&(this.noCascade[i]=!0)),(n=this.computations[i])&&n.invalidate(),-1===this.changes.indexOf(t)&&this.changes.push(t);var r=e?e.keepExistingWrapper:!1;this.clearCache(i,r),this.ready&&this.onchange()}function Vs(t,e,n,i){var r,s,o,a;if(this.mark(t),i&&i.compare){o=Us(i.compare);try{r=e.map(o),s=n.map(o)}catch(u){m('merge(): "%s" comparison failed. Falling back to identity checking',t),r=e,s=n}}else r=e,s=n;a=xy(r,s),this.smartUpdate(t,n,a,e.length!==n.length)}function Ms(t){return JSON.stringify(t)}function Us(t){if(t===!0)return Ms;if("string"==typeof t)return Ey[t]||(Ey[t]=function(e){return e[t]}),Ey[t];if("function"==typeof t)return t;throw new Error("The `compare` option must be a function, or a string representing an identifying field (or `true` to use JSON.stringify)")}function Ws(t,e){var n,i,r,s=void 0===arguments[2]?"default":arguments[2];e.isStatic||((n=this.mappings[t.firstKey])?n.register(t,e,s):(i=this.deps[s]||(this.deps[s]={}),r=i[t.str]||(i[t.str]=[]),r.push(e),this.depsMap[s]||(this.depsMap[s]={}),t.isRoot||zs(this,t,s)))}function zs(t,e,n){for(var i,r,s;!e.isRoot;)i=t.depsMap[n],r=i[e.parent.str]||(i[e.parent.str]=[]),s=e.str,void 0===r["_"+s]&&(r["_"+s]=0,r.push(e)),r["_"+s]+=1,e=e.parent}function Bs(){return this.captureGroups.pop()}function qs(t){this.data=t,this.clearCache("")}function $s(t,e){var n,i,r,s,o=void 0===arguments[2]?{}:arguments[2];if(!o.noMapping&&(n=this.mappings[t.firstKey]))return n.set(t,e);if(i=this.computations[t.str]){if(i.setting)return;i.set(e),e=i.get()}a(this.cache[t.str],e)||(r=this.wrapped[t.str],r&&r.reset&&(s=r.reset(e)!==!1,s&&(e=r.get())),i||s||Qs(this,t,e),o.silent?this.clearCache(t.str):this.mark(t))}function Qs(t,e,n){var i,r,s,o;s=function(){i.set?i.set(e.lastKey,n):(r=i.get(),o())},o=function(){r||(r=Yg(e.lastKey),t.set(e.parent,r,{silent:!0})),r[e.lastKey]=n},i=t.wrapped[e.parent.str],i?s():(r=t.get(e.parent),(i=t.wrapped[e.parent.str])?s():o())}function Zs(t,e,n){var i,r,s,o=this;if(r=n.length,n.forEach(function(e,n){-1===e&&o.mark(t.join(n),Ty)}),this.set(t,e,{silent:!0}),(i=this.deps["default"][t.str])&&i.filter(Hs).forEach(function(t){return t.shuffle(n,e)}),r!==e.length){for(this.mark(t.join("length"),Py),s=n.touchedFrom;s<e.length;s+=1)this.mark(t.join(s));for(s=e.length;r>s;s+=1)this.mark(t.join(s),Ty)}}function Hs(t){return"function"==typeof t.shuffle}function Ks(){var t,e=this;for(Object.keys(this.cache).forEach(function(t){return e.clearCache(t)});t=this.unresolvedImplicitDependencies.pop();)t.teardown()}function Gs(t,e){var n,i,r,s=void 0===arguments[2]?"default":arguments[2];if(!e.isStatic){if(n=this.mappings[t.firstKey])return n.unregister(t,e,s);if(i=this.deps[s][t.str],r=i.indexOf(e),-1===r)throw new Error("Attempted to remove a dependant that was no longer registered! This should not happen. If you are seeing this bug in development please raise an issue at https://github.com/RactiveJS/Ractive/issues - thanks");i.splice(r,1),t.isRoot||Ys(this,t,s)}}function Ys(t,e,n){for(var i,r;!e.isRoot;)i=t.depsMap[n],r=i[e.parent.str],r["_"+e.str]-=1,r["_"+e.str]||(I(r,e),r["_"+e.str]=void 0),e=e.parent}function Js(t){this.hook=new nu(t),this.inProcess={},this.queue={}}function Xs(t,e){return t[e._guid]||(t[e._guid]=[])}function to(t,e){var n=Xs(t.queue,e);for(t.hook.fire(e);n.length;)to(t,n.shift());delete t.queue[e._guid]}function eo(t,e){var n,i={};for(n in e)i[n]=no(t,n,e[n]);return i}function no(t,e,n){var i,r;return"function"==typeof n&&(i=ro(n,t)),"string"==typeof n&&(i=io(t,n)),"object"==typeof n&&("string"==typeof n.get?i=io(t,n.get):"function"==typeof n.get?i=ro(n.get,t):l("`%s` computation must have a `get()` method",e),"function"==typeof n.set&&(r=ro(n.set,t))),{getter:i,setter:r}}function io(t,e){var n,i,r;return n="return ("+e.replace(Ly,function(t,e){return i=!0,'__ractive.get("'+e+'")'})+");",i&&(n="var __ractive = this; "+n),r=new Function(n),i?r.bind(t):r}function ro(t,e){return/this/.test(t.toString())?t.bind(e):t}function so(e){var n,r,s=void 0===arguments[1]?{}:arguments[1],o=void 0===arguments[2]?{}:arguments[2];if(Qb.DEBUG&&Ca(),uo(e,o),xa(e,"data",{get:ho}),Vy.fire(e,s),zy.forEach(function(t){e[t]=i(wa(e.constructor[t]||null),s[t])}),r=new Ny({adapt:oo(e,e.adapt,s),data:Wh.init(e.constructor,e,s),computed:Iy(e,i(wa(e.constructor.prototype.computed),s.computed)),mappings:o.mappings,ractive:e,onchange:function(){return mu.addRactive(e)}}),e.viewmodel=r,r.init(),bd.init(e.constructor,e,s),My.fire(e),Uy.begin(e),e.template){var a=void 0;(o.cssIds||e.cssId)&&(a=o.cssIds?o.cssIds.slice():[],e.cssId&&a.push(e.cssId)),e.fragment=new yb({template:e.template,root:e,owner:e,cssIds:a})}if(Uy.end(e),n=t(e.el)){var u=e.render(n,e.append);Qb.DEBUG_PROMISES&&u["catch"](function(t){throw v("Promise debugging is enabled, to help solve errors that happen asynchronously. Some browsers will log unhandled promise rejections, in which case you can safely disable promise debugging:\n  Ractive.DEBUG_PROMISES = false;"),m("An error happened during rendering",{ractive:e}),t.stack&&f(t.stack),t})}}function oo(t,e,n){function i(e){return"string"==typeof e&&(e=g("adaptors",t,e),e||l(Da(e,"adaptor"))),e}var r,s,o;if(e=e.map(i),r=N(n.adapt).map(i),r=ao(e,r),s="magic"in n?n.magic:t.magic,o="modifyArrays"in n?n.modifyArrays:t.modifyArrays,s){if(!na)throw new Error("Getters and setters (magic mode) are not supported in this browser");o&&r.push(ey),r.push(ty)}return o&&r.push(Kg),r}function ao(t,e){for(var n=t.slice(),i=e.length;i--;)~n.indexOf(e[i])||n.push(e[i]);return n}function uo(t,e){t._guid="r-"+Wy++,t._subs=wa(null),t._config={},t._twowayBindings=wa(null),t._animations=[],t.nodes={},t._liveQueries=[],t._liveComponentQueries=[],t._boundFunctions=[],t._observers=[],e.component?(t.parent=e.parent,t.container=e.container||null,t.root=t.parent.root,t.component=e.component,e.component.instance=t,t._inlinePartials=e.inlinePartials):(t.root=t,t.parent=t.container=null)}function ho(){throw new Error("Using `ractive.data` is no longer supported - you must use the `ractive.get()` API instead")}function co(t,e,n){this.parentFragment=t.parentFragment,this.callback=n,this.fragment=new yb({template:e,root:t.root,owner:this}),this.update()}function lo(t,e,n){var i;return e.r?i=Qd(t,e.r,n):e.x?i=new Gd(t,t.parentFragment,e.x,n):e.rx&&(i=new tp(t,e.rx,n)),i}function fo(t){return 1===t.length&&t[0].t===Hh}function po(t,e){var n;for(n in e)e.hasOwnProperty(n)&&mo(t.instance,t.root,n,e[n])}function mo(t,e,n,i){"string"!=typeof i&&l("Components currently only support simple events - you cannot include arguments. Sorry!"),t.on(n,function(){var t,n;return arguments.length&&arguments[0]&&arguments[0].node&&(t=Array.prototype.shift.call(arguments)),n=Array.prototype.slice.call(arguments),Wu(e,i,{event:t,args:n}),!1})}function vo(t,e){var n,i;if(!e)throw new Error('Component "'+this.name+'" not found');n=this.parentFragment=t.parentFragment,i=n.root,this.root=i,this.type=sc,this.name=t.template.e,this.index=t.index,this.indexRefBindings={},this.yielders={},this.resolvers=[],$y(this,e,t.template.a,t.template.f,t.template.p),Qy(this,t.template.v),(t.template.t0||t.template.t1||t.template.t2||t.template.o)&&m('The "intro", "outro" and "decorator" directives have no effect on components',{ractive:this.instance}),Zy(this)}function go(t,e){function n(n){n.rebind(t,e)}var i;this.resolvers.forEach(n);for(var r in this.yielders)this.yielders[r][0]&&n(this.yielders[r][0]);(i=this.root._liveComponentQueries["_"+this.name])&&i._makeDirty()}function yo(){var t=this.instance;return t.render(this.parentFragment.getNode()),this.rendered=!0,t.fragment.detach()}function bo(){return this.instance.fragment.toString()}function wo(){var t=this.instance;this.resolvers.forEach(Z),xo(this),t._observers.forEach(K),t.fragment.unbind(),t.viewmodel.teardown(),t.fragment.rendered&&t.el.__ractive_instances__&&I(t.el.__ractive_instances__,t),Xy.fire(t)}function xo(t){var e,n;e=t.root;do(n=e._liveComponentQueries["_"+t.name])&&n._remove(t);while(e=e.parent)}function ko(t){this.shouldDestroy=t,this.instance.unrender()}function Eo(t){var e=this;this.owner=t.owner,this.parent=this.owner.parentFragment,this.root=t.root,this.pElement=t.pElement,this.context=t.context,this.index=t.index,this.key=t.key,this.registeredIndexRefs=[],this.cssIds="cssIds"in t?t.cssIds:this.parent?this.parent.cssIds:null,this.items=t.template.map(function(n,i){return _o({parentFragment:e,pElement:t.pElement,template:n,index:i})}),this.value=this.argsList=null,this.dirtyArgs=this.dirtyValue=!0,this.bound=!0}function _o(t){if("string"==typeof t.template)return new Nd(t);switch(t.template.t){case oc:return new ob(t);case Hh:return new op(t);case Gh:return new Sp(t);case Kh:return new qp(t);case Xh:var e=void 0;return(e=Fg(t.parentFragment.root,t.template.e))?new nb(t,e):new bg(t);case tc:return new Tg(t);case ec:return new rb(t);case uc:return new ub(t);default:throw new Error("Something very strange happened. Please file an issue at https://github.com/ractivejs/ractive/issues. Thanks!")}}function Ao(t,e){(!this.owner||this.owner.hasContext)&&k(this,"context",t,e),this.items.forEach(function(n){n.rebind&&n.rebind(t,e)})}function So(){var t;return 1===this.items.length?t=this.items[0].render():(t=document.createDocumentFragment(),this.items.forEach(function(e){t.appendChild(e.render())})),this.rendered=!0,t}function Co(t){return this.items?this.items.map(t?Po:Oo).join(""):""}function Oo(t){return t.toString()}function Po(t){return t.toString(!0)}function To(){this.bound&&(this.items.forEach(Fo),this.bound=!1)}function Fo(t){t.unbind&&t.unbind()}function Ro(t){if(!this.rendered)throw new Error("Attempted to unrender a fragment that was not rendered");this.items.forEach(function(e){return e.unrender(t)}),this.rendered=!1}function jo(t){var e,n,i,r,s;if(t=t||{},"object"!=typeof t)throw new Error("The reset method takes either no arguments, or an object containing new data");for((n=this.viewmodel.wrapped[""])&&n.reset?n.reset(t)===!1&&this.viewmodel.reset(t):this.viewmodel.reset(t),i=bd.reset(this),r=i.length;r--;)if(wb.indexOf(i[r])>-1){s=!0;break}if(s){var o=void 0;this.viewmodel.mark(Za),(o=this.component)&&(o.shouldDestroy=!0),this.unrender(),o&&(o.shouldDestroy=!1),this.fragment.template!==this.template&&(this.fragment.unbind(),this.fragment=new yb({template:this.template,root:this,owner:this})),e=this.render(this.el,this.anchor)}else e=mu.start(this,!0),this.viewmodel.mark(Za),mu.end();return xb.fire(this,t),e}function No(t){var e,n;hd.init(null,this,{template:t}),e=this.transitionsEnabled,this.transitionsEnabled=!1,(n=this.component)&&(n.shouldDestroy=!0),this.unrender(),n&&(n.shouldDestroy=!1),this.fragment.unbind(),this.fragment=new yb({template:this.template,root:this,owner:this}),this.render(this.el,this.anchor),this.transitionsEnabled=e}function Do(t,e){var n,i;if(i=mu.start(this,!0),h(t)){n=t;for(t in n)n.hasOwnProperty(t)&&(e=n[t],Io(this,t,e))}else Io(this,t,e);return mu.end(),i}function Io(t,e,n){e=_(C(e)),e.isPattern?A(t,e).forEach(function(e){t.viewmodel.set(e,n)}):t.viewmodel.set(e,n)}function Lo(t,e){return Ha(this,t,void 0===e?-1:-e)}function Vo(){var t;return this.fragment.unbind(),this.viewmodel.teardown(),this._observers.forEach(K),this.fragment.rendered&&this.el.__ractive_instances__&&I(this.el.__ractive_instances__,this),this.shouldDestroy=!0,t=this.fragment.rendered?this.unrender():ou.resolve(),Fb.fire(this),this._boundFunctions.forEach(Mo),t}function Mo(t){delete t.fn[t.prop]}function Uo(t){var e=this;if("string"!=typeof t)throw new TypeError(ja);var n=void 0;return/\*/.test(t)?(n={},A(this,_(C(t))).forEach(function(t){n[t.str]=!e.viewmodel.get(t)}),this.set(n)):this.set(t,!this.get(t))}function Wo(){return this.fragment.toString(!0)}function zo(){var t,e;if(!this.fragment.rendered)return m("ractive.unrender() was called on a Ractive instance that was not rendered"),ou.resolve();for(t=mu.start(this,!0),e=!this.component||this.component.shouldDestroy||this.shouldDestroy;this._animations[0];)this._animations[0].stop();return this.fragment.unrender(e),I(this.el.__ractive_instances__,this),Db.fire(this),mu.end(),t}function Bo(t){var e;return t=_(t)||Za,e=mu.start(this,!0),this.viewmodel.mark(t),mu.end(),Vb.fire(this,t),e}function qo(t,e){var n,i,r;if("string"!=typeof t||e){r=[];for(i in this._twowayBindings)(!t||_(i).equalsOrStartsWith(t))&&r.push.apply(r,this._twowayBindings[i])}else r=this._twowayBindings[t];return n=$o(this,r),this.set(n)}function $o(t,e){var n={},i=[];return e.forEach(function(t){var e,r;if(!t.radioName||t.element.node.checked){if(t.checkboxName)return void(i[t.keypath.str]||t.changed()||(i.push(t.keypath),i[t.keypath.str]=t));e=t.attribute.value,r=t.getValue(),j(e,r)||a(e,r)||(n[t.keypath.str]=r)}}),i.length&&i.forEach(function(t){var e,r,s;e=i[t.str],r=e.attribute.value,s=e.getValue(),j(r,s)||(n[t.str]=s)}),n}function Qo(t,e){return"function"==typeof e&&/_super/.test(t)}function Zo(t){for(var e={};t;)Ho(t,e),Go(t,e),t=t._Parent!==Qb?t._Parent:!1;return e}function Ho(t,e){vd.forEach(function(n){Ko(n.useDefaults?t.prototype:t,e,n.name)})}function Ko(t,e,n){var i,r=Object.keys(t[n]);r.length&&((i=e[n])||(i=e[n]={}),r.filter(function(t){return!(t in i)}).forEach(function(e){return i[e]=t[n][e]}))}function Go(t,e){Object.keys(t.prototype).forEach(function(n){if("computed"!==n){var i=t.prototype[n];if(n in e){if("function"==typeof e[n]&&"function"==typeof i&&e[n]._method){var r=void 0,s=i._method;s&&(i=i._method),r=Wb(e[n]._method,i),s&&(r._method=r),e[n]=r}}else e[n]=i._method?i._method:i}})}function Yo(){for(var t=arguments.length,e=Array(t),n=0;t>n;n++)e[n]=arguments[n];return e.length?e.reduce(Jo,this):Jo(this)}function Jo(t){var e,n,r=void 0===arguments[1]?{}:arguments[1];return r.prototype instanceof Qb&&(r=zb(r)),e=function(t){return this instanceof e?void By(this,t):new e(t)},n=wa(t.prototype),n.constructor=e,ka(e,{defaults:{value:n},extend:{value:Yo,writable:!0,configurable:!0},_Parent:{value:t}}),bd.extend(t,n,r),Wh.extend(t,n,r),r.computed&&(n.computed=i(wa(t.prototype.computed),r.computed)),e.prototype=n,e}var Xo,ta,ea,na,ia,ra,sa,oa=3,aa={el:void 0,append:!1,template:{v:oa,t:[]},preserveWhitespace:!1,sanitize:!1,stripComments:!0,delimiters:["{{","}}"],tripleDelimiters:["{{{","}}}"],interpolate:!1,data:{},computed:{},magic:!1,modifyArrays:!0,adapt:[],isolated:!1,twoway:!0,lazy:!1,noIntro:!1,transitionsEnabled:!0,complete:void 0,css:null,noCssTransform:!1},ua=aa,ha={linear:function(t){return t},easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}};Xo="object"==typeof document,ta="undefined"!=typeof navigator&&/jsDom/.test(navigator.appName),ea="undefined"!=typeof console&&"function"==typeof console.warn&&"function"==typeof console.warn.apply;try{Object.defineProperty({},"test",{value:0}),na=!0}catch(ca){na=!1}ia={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ra="undefined"==typeof document?!1:document&&document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),sa=["o","ms","moz","webkit"];var la,fa,da,pa,ma,va,ga,ya,ba;if(la=ra?function(t,e){return e&&e!==ia.html?document.createElementNS(e,t):document.createElement(t)}:function(t,e){if(e&&e!==ia.html)throw"This browser does not support namespaces other than http://www.w3.org/1999/xhtml. The most likely cause of this error is that you're trying to render SVG in an older browser. See http://docs.ractivejs.org/latest/svg-and-older-browsers for more information";return document.createElement(t)},Xo){for(da=la("div"),pa=["matches","matchesSelector"],ba=function(t){return function(e,n){return e[t](n)}},ga=pa.length;ga--&&!fa;)if(ma=pa[ga],da[ma])fa=ba(ma);else for(ya=sa.length;ya--;)if(va=sa[ga]+ma.substr(0,1).toUpperCase()+ma.substring(1),da[va]){fa=ba(va);break}fa||(fa=function(t,e){var n,i,r;for(i=t.parentNode,i||(da.innerHTML="",i=da,t=t.cloneNode(),da.appendChild(t)),n=i.querySelectorAll(e),r=n.length;r--;)if(n[r]===t)return!0;return!1})}else fa=null;var wa,xa,ka,Ea=null;try{Object.defineProperty({},"test",{value:0}),Xo&&Object.defineProperty(document.createElement("div"),"test",{value:0}),xa=Object.defineProperty}catch(_a){xa=function(t,e,n){t[e]=n.value}}try{try{Object.defineProperties({},{test:{value:0}})}catch(_a){throw _a}Xo&&Object.defineProperties(la("div"),{test:{value:0}}),ka=Object.defineProperties}catch(_a){ka=function(t,e){var n;for(n in e)e.hasOwnProperty(n)&&xa(t,n,e[n])}}try{Object.create(null),wa=Object.create}catch(_a){wa=function(){var t=function(){};return function(e,n){var i;return null===e?{}:(t.prototype=e,i=new t,n&&Object.defineProperties(i,n),i)}}()}var Aa,Sa,Ca,Oa=Object.prototype.hasOwnProperty,Pa=Object.prototype.toString,Ta=/^\[object (?:Array|FileList)\]$/,Fa=function(){},Ra={};ea?!function(){var t=["%cRactive.js %c0.7.3 %cin debug mode, %cmore...","color: rgb(114, 157, 52); font-weight: normal;","color: rgb(85, 85, 85); font-weight: normal;","color: rgb(85, 85, 85); font-weight: normal;","color: rgb(82, 140, 224); font-weight: normal; text-decoration: underline;"],e="You're running Ractive 0.7.3 in debug mode - messages will be printed to the console to help you fix problems and optimise your application.\n\nTo disable debug mode, add this line at the start of your app:\n  Ractive.DEBUG = false;\n\nTo disable debug mode when your app is minified, add this snippet:\n  Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});\n\nGet help and support:\n  http://docs.ractivejs.org\n  http://stackoverflow.com/questions/tagged/ractivejs\n  http://groups.google.com/forum/#!forum/ractive-js\n  http://twitter.com/ractivejs\n\nFound a bug? Raise an issue:\n  https://github.com/ractivejs/ractive/issues\n\n";Ca=function(){var n=!!console.groupCollapsed;console[n?"groupCollapsed":"log"].apply(console,t),console.log(e),n&&console.groupEnd(t),Ca=Fa},Sa=function(t,e){if(Ca(),"object"==typeof e[e.length-1]){var n=e.pop(),i=n?n.ractive:null;if(i){var r=void 0;i.component&&(r=i.component.name)&&(t="<"+r+"> "+t);var s=void 0;(s=n.node||i.fragment&&i.fragment.rendered&&i.find("*"))&&e.push(s)}}console.warn.apply(console,["%cRactive.js: %c"+t,"color: rgb(114, 157, 52);","color: rgb(85, 85, 85);"].concat(e))},Aa=function(){console.log.apply(console,arguments)}}():Sa=Aa=Ca=Fa;var ja="Bad arguments",Na='A function was specified for "%s" %s, but no %s was returned',Da=function(t,e){return'Missing "'+t+'" '+e+" plugin. You may need to download a plugin via http://docs.ractivejs.org/latest/plugins#"+e+"s"},Ia=function(t,e,n,i){if(t===e)return b(e);if(i){var r=g("interpolators",n,i);if(r)return r(t,e)||b(e);l(Da(i,"interpolator"))}return Ma.number(t,e)||Ma.array(t,e)||Ma.object(t,e)||b(e)},La=Ia,Va={number:function(t,e){var n;return u(t)&&u(e)?(t=+t,e=+e,n=e-t,n?function(e){return t+e*n}:function(){return t}):null},array:function(t,e){var n,i,r,o;if(!s(t)||!s(e))return null;for(n=[],i=[],o=r=Math.min(t.length,e.length);o--;)i[o]=La(t[o],e[o]);for(o=r;o<t.length;o+=1)n[o]=t[o];for(o=r;o<e.length;o+=1)n[o]=e[o];return function(t){for(var e=r;e--;)n[e]=i[e](t);return n}},object:function(t,e){var n,i,r,s,o;if(!h(t)||!h(e))return null;n=[],s={},r={};for(o in t)Oa.call(t,o)&&(Oa.call(e,o)?(n.push(o),r[o]=La(t[o],e[o])):s[o]=t[o]);for(o in e)Oa.call(e,o)&&!Oa.call(t,o)&&(s[o]=e[o]);return i=n.length,function(t){for(var e,o=i;o--;)e=n[o],s[e]=r[e](t);return s}}},Ma=Va,Ua=w,Wa={},za=/\[\s*(\*|[0-9]|[1-9][0-9]+)\s*\]/g,Ba=/\*/,qa={},$a=function(t){var e=t.split(".");this.str=t,"@"===t[0]&&(this.isSpecial=!0,this.value=E(t)),this.firstKey=e[0],this.lastKey=e.pop(),this.isPattern=Ba.test(t),this.parent=""===t?null:_(e.join(".")),this.isRoot=!t};$a.prototype={equalsOrStartsWith:function(t){return t===this||this.startsWith(t)},join:function(t){return _(this.isRoot?String(t):this.str+"."+t)},replace:function(t,e){return this===t?e:this.startsWith(t)?null===e?e:_(this.str.replace(t.str+".",e.str+".")):void 0},startsWith:function(t){return t?t&&this.str.substr(0,t.str.length+1)===t.str+".":!1},toString:function(){throw new Error("Bad coercion")},valueOf:function(){throw new Error("Bad coercion")},wildcardMatches:function(){return this._wildcardMatches||(this._wildcardMatches=Ua(this.str))}};var Qa,Za=_(""),Ha=O,Ka="Cannot add to a non-numeric value",Ga=P;"undefined"==typeof window?Qa=null:(!function(t,e,n){var i,r;if(!n.requestAnimationFrame){for(i=0;i<t.length&&!n.requestAnimationFrame;++i)n.requestAnimationFrame=n[t[i]+"RequestAnimationFrame"];n.requestAnimationFrame||(r=n.setTimeout,n.requestAnimationFrame=function(t){var n,i,s;return n=Date.now(),i=Math.max(0,16-(n-e)),s=r(function(){t(n+i)},i),e=n+i,s})}}(sa,0,window),Qa=window.requestAnimationFrame);var Ya,Ja=Qa;Ya="undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?function(){return window.performance.now()}:function(){return Date.now()};var Xa=Ya,tu={construct:{deprecated:"beforeInit",replacement:"onconstruct"},render:{deprecated:"init",message:'The "init" method has been deprecated and will likely be removed in a future release. You can either use the "oninit" method which will fire only once prior to, and regardless of, any eventual ractive instance being rendered, or if you need to access the rendered DOM, use "onrender" instead. See http://docs.ractivejs.org/latest/migrating for more information.'},complete:{deprecated:"complete",replacement:"oncomplete"}};T.prototype.fire=function(t,e){function n(n){return t[n]?(e?t[n](e):t[n](),!0):void 0}n(this.method),!t[this.method]&&this.deprecate&&n(this.deprecate.deprecated)&&(this.deprecate.message?m(this.deprecate.message):m('The method "%s" has been deprecated in favor of "%s" and will likely be removed in a future release. See http://docs.ractivejs.org/latest/migrating for more information.',this.deprecate.deprecated,this.deprecate.replacement)),e?t.fire(this.event,e):t.fire(this.event)};var eu,nu=T,iu={},ru={},su={};"function"==typeof Promise?eu=Promise:(eu=function(t){var e,n,i,r,s,o,a=[],u=[],h=iu;i=function(t){return function(i){h===iu&&(e=i,h=t,n=M(h===ru?a:u,e),V(n))}},r=i(ru),s=i(su);try{t(r,s)}catch(c){s(c)}return o={then:function(t,e){var i=new eu(function(r,s){var o=function(t,e,n){e.push("function"==typeof t?function(e){var n;try{n=t(e),U(i,n,r,s)}catch(o){s(o)}}:n)};o(t,a,r),o(e,u,s),h!==iu&&V(n)});return i}},o["catch"]=function(t){return this.then(null,t)},o},eu.all=function(t){return new eu(function(e,n){var i,r,s,o=[];if(!t.length)return void e(o);for(s=function(t,r){t&&"function"==typeof t.then?t.then(function(t){o[r]=t,--i||e(o)},n):(o[r]=t,--i||e(o))},i=r=t.length;r--;)s(t[r],r)})},eu.resolve=function(t){return new eu(function(e){e(t)})},eu.reject=function(t){return new eu(function(e,n){n(t)})});var ou=eu,au=function(t){do if(void 0!==t.context)return t.context;while(t=t.parent);return Za},uu=W,hu=function(t,e){this.callback=t,this.parent=e,this.intros=[],this.outros=[],this.children=[],this.totalChildren=this.outroChildren=0,this.detachQueue=[],this.decoratorQueue=[],this.outrosComplete=!1,e&&e.addChild(this)};hu.prototype={addChild:function(t){this.children.push(t),this.totalChildren+=1,this.outroChildren+=1},decrementOutros:function(){this.outroChildren-=1,J(this)},decrementTotal:function(){this.totalChildren-=1,J(this)},add:function(t){var e=t.isIntro?this.intros:this.outros;e.push(t)},addDecorator:function(t){this.decoratorQueue.push(t)},remove:function(t){var e=t.isIntro?this.intros:this.outros;I(e,t),J(this)},init:function(){this.ready=!0,J(this)},detachNodes:function(){this.decoratorQueue.forEach(Q),this.detachQueue.forEach(G),this.children.forEach(Y)}};var cu,lu,fu=hu,du=[],pu=new nu("change");lu={start:function(t,e){var n,i;return e&&(n=new ou(function(t){return i=t})),cu={previousBatch:cu,transitionManager:new fu(i,cu&&cu.transitionManager),views:[],tasks:[],ractives:[],instance:t},t&&cu.ractives.push(t),n},end:function(){X(),cu.transitionManager.init(),!cu.previousBatch&&cu.instance&&(cu.instance.viewmodel.changes=[]),cu=cu.previousBatch},addRactive:function(t){cu&&F(cu.ractives,t)},registerTransition:function(t){t._manager=cu.transitionManager,cu.transitionManager.add(t)},registerDecorator:function(t){cu.transitionManager.addDecorator(t)},addView:function(t){cu.views.push(t)},addUnresolved:function(t){du.push(t)},removeUnresolved:function(t){I(du,t)},detachWhenReady:function(t){cu.transitionManager.detachQueue.push(t)},scheduleTask:function(t,e){var n;if(cu){for(n=cu;e&&n.previousBatch;)n=n.previousBatch;n.tasks.push(t)}else t()}};var mu=lu,vu=[],gu={tick:function(){var t,e,n;for(n=Xa(),mu.start(),t=0;t<vu.length;t+=1)e=vu[t],e.tick(n)||vu.splice(t--,1);mu.end(),vu.length?Ja(gu.tick):gu.running=!1},add:function(t){vu.push(t),gu.running||(gu.running=!0,Ja(gu.tick))},abort:function(t,e){for(var n,i=vu.length;i--;)n=vu[i],n.root===e&&n.keypath===t&&n.stop()}},yu=gu,bu=function(t){var e;this.startTime=Date.now();for(e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);this.interpolator=La(this.from,this.to,this.root,this.interpolator),this.running=!0,this.tick()};bu.prototype={tick:function(){var t,e,n,i,r,s;return s=this.keypath,this.running?(i=Date.now(),t=i-this.startTime,t>=this.duration?(null!==s&&(mu.start(this.root),this.root.viewmodel.set(s,this.to),mu.end()),this.step&&this.step(1,this.to),this.complete(this.to),r=this.root._animations.indexOf(this),-1===r&&m("Animation was not found"),this.root._animations.splice(r,1),this.running=!1,!1):(e=this.easing?this.easing(t/this.duration):t/this.duration,
null!==s&&(n=this.interpolator(e),mu.start(this.root),this.root.viewmodel.set(s,n),mu.end()),this.step&&this.step(e,n),!0)):!1},stop:function(){var t;this.running=!1,t=this.root._animations.indexOf(this),-1===t&&m("Animation was not found"),this.root._animations.splice(t,1)}};var wu=bu,xu=nt,ku={stop:Fa},Eu=rt,_u=new nu("detach"),Au=st,Su=ot,Cu=function(){var t,e,n;t=this._root[this._isComponentQuery?"liveComponentQueries":"liveQueries"],e=this.selector,n=t.indexOf(e),-1!==n&&(t.splice(n,1),t[e]=null)},Ou=function(t,e){var n,i,r,s,o,a,u,h,c,l;for(n=ut(t.component||t._ractive.proxy),i=ut(e.component||e._ractive.proxy),r=D(n),s=D(i);r&&r===s;)n.pop(),i.pop(),o=r,r=D(n),s=D(i);if(r=r.component||r,s=s.component||s,c=r.parentFragment,l=s.parentFragment,c===l)return a=c.items.indexOf(r),u=l.items.indexOf(s),a-u||n.length-i.length;if(h=o.fragments)return a=h.indexOf(c),u=h.indexOf(l),a-u||n.length-i.length;throw new Error("An unexpected condition was met while comparing the position of two components. Please file an issue at https://github.com/RactiveJS/Ractive/issues - thanks!")},Pu=function(t,e){var n;return t.compareDocumentPosition?(n=t.compareDocumentPosition(e),2&n?1:-1):Ou(t,e)},Tu=function(){this.sort(this._isComponentQuery?Ou:Pu),this._dirty=!1},Fu=function(){var t=this;this._dirty||(this._dirty=!0,mu.scheduleTask(function(){t._sort()}))},Ru=function(t){var e=this.indexOf(this._isComponentQuery?t.instance:t);-1!==e&&this.splice(e,1)},ju=ht,Nu=ct,Du=lt,Iu=ft,Lu=dt,Vu=pt,Mu={enqueue:function(t,e){t.event&&(t._eventQueue=t._eventQueue||[],t._eventQueue.push(t.event)),t.event=e},dequeue:function(t){t._eventQueue&&t._eventQueue.length?t.event=t._eventQueue.pop():delete t.event}},Uu=Mu,Wu=mt,zu=yt,Bu=bt,qu={capture:!0,noUnwrap:!0,fullRootGet:!0},$u=wt,Qu=new nu("insert"),Zu=kt,Hu=function(t,e,n,i){this.root=t,this.keypath=e,this.callback=n,this.defer=i.defer,this.context=i&&i.context?i.context:t};Hu.prototype={init:function(t){this.value=this.root.get(this.keypath.str),t!==!1?this.update():this.oldValue=this.value},setValue:function(t){var e=this;a(t,this.value)||(this.value=t,this.defer&&this.ready?mu.scheduleTask(function(){return e.update()}):this.update())},update:function(){this.updating||(this.updating=!0,this.callback.call(this.context,this.value,this.oldValue,this.keypath.str),this.oldValue=this.value,this.updating=!1)}};var Ku,Gu=Hu,Yu=Et,Ju=Array.prototype.slice;Ku=function(t,e,n,i){this.root=t,this.callback=n,this.defer=i.defer,this.keypath=e,this.regex=new RegExp("^"+e.str.replace(/\./g,"\\.").replace(/\*/g,"([^\\.]+)")+"$"),this.values={},this.defer&&(this.proxies=[]),this.context=i&&i.context?i.context:t},Ku.prototype={init:function(t){var e,n;if(e=Yu(this.root,this.keypath),t!==!1)for(n in e)e.hasOwnProperty(n)&&this.update(_(n));else this.values=e},update:function(t){var e,n=this;if(t.isPattern){e=Yu(this.root,t);for(t in e)e.hasOwnProperty(t)&&this.update(_(t))}else if(!this.root.viewmodel.implicitChanges[t.str])return this.defer&&this.ready?void mu.scheduleTask(function(){return n.getProxy(t).update()}):void this.reallyUpdate(t)},reallyUpdate:function(t){var e,n,i,r;return e=t.str,n=this.root.viewmodel.get(t),this.updating?void(this.values[e]=n):(this.updating=!0,a(n,this.values[e])&&this.ready||(i=Ju.call(this.regex.exec(e),1),r=[n,this.values[e],e].concat(i),this.values[e]=n,this.callback.apply(this.context,r)),void(this.updating=!1))},getProxy:function(t){var e=this;return this.proxies[t.str]||(this.proxies[t.str]={update:function(){return e.reallyUpdate(t)}}),this.proxies[t.str]}};var Xu,th,eh,nh,ih,rh,sh=Ku,oh=_t,ah={},uh=At,hh=St,ch=function(t){return t.trim()},lh=function(t){return""!==t},fh=Ct,dh=Ot,ph=Pt,mh=Tt,vh=Array.prototype,gh=function(t){return function(e){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;n>r;r++)i[r-1]=arguments[r];var o,a,u,h,c=[];if(e=_(C(e)),o=this.viewmodel.get(e),a=o.length,!s(o))throw new Error("Called ractive."+t+"('"+e.str+"'), but '"+e.str+"' does not refer to an array");return c=mh(o,t,i),h=vh[t].apply(o,i),u=mu.start(this,!0).then(function(){return h}),c?this.viewmodel.smartUpdate(e,o,c):this.viewmodel.mark(e),mu.end(),u}},yh=gh("pop"),bh=gh("push"),wh="/* Ractive.js component styles */\n",xh=[],kh=!1;Xo?(eh=document.createElement("style"),eh.type="text/css",nh=document.getElementsByTagName("head")[0],rh=!1,ih=eh.styleSheet,th=function(){var t=wh+xh.map(function(t){return"\n/* {"+t.id+"} */\n"+t.styles}).join("\n");ih?ih.cssText=t:eh.innerHTML=t,rh||(nh.appendChild(eh),rh=!0)},Xu={add:function(t){xh.push(t),kh=!0},apply:function(){kh&&(th(),kh=!1)}}):Xu={add:Fa,apply:Fa};var Eh,_h,Ah=Xu,Sh=Rt,Ch=new nu("render"),Oh=new nu("complete"),Ph={extend:function(t,e,n){e.adapt=Nt(e.adapt,N(n.adapt))},init:function(){}},Th=Ph,Fh=Dt,Rh=/(?:^|\})?\s*([^\{\}]+)\s*\{/g,jh=/\/\*.*?\*\//g,Nh=/((?:(?:\[[^\]+]\])|(?:[^\s\+\>\~:]))+)((?::[^\s\+\>\~\(]+(?:\([^\)]+\))?)?\s*[\s\+\>\~]?)\s*/g,Dh=/^@media/,Ih=/\[data-ractive-css~="\{[a-z0-9-]+\}"]/g,Lh=1,Vh={name:"css",extend:function(t,e,n){if(n.css){var i=Lh++,r=n.noCssTransform?n.css:Fh(n.css,i);e.cssId=i,Ah.add({id:i,styles:r})}},init:function(){}},Mh=Vh,Uh={name:"data",extend:function(t,e,n){var i=void 0,r=void 0;if(n.data&&h(n.data))for(i in n.data)r=n.data[i],r&&"object"==typeof r&&(h(r)||s(r))&&m("Passing a `data` option with object and array properties to Ractive.extend() is discouraged, as mutating them is likely to cause bugs. Consider using a data function instead:\n\n  // this...\n  data: function () {\n    return {\n      myObject: {}\n    };\n  })\n\n  // instead of this:\n  data: {\n    myObject: {}\n  }");e.data=Mt(e.data,n.data)},init:function(t,e,n){var i=Mt(t.prototype.data,n.data);return"function"==typeof i&&(i=i.call(e)),i||{}},reset:function(t){var e=this.init(t.constructor,t,t.viewmodel);return t.viewmodel.reset(e),!0}},Wh=Uh,zh=/^\s+/;_h=function(t){this.name="ParseError",this.message=t;try{throw new Error(t)}catch(e){this.stack=e.stack}},_h.prototype=Error.prototype,Eh=function(t,e){var n,i,r=0;for(this.str=t,this.options=e||{},this.pos=0,this.lines=this.str.split("\n"),this.lineEnds=this.lines.map(function(t){var e=r+t.length+1;return r=e,e},0),this.init&&this.init(t,e),n=[];this.pos<this.str.length&&(i=this.read());)n.push(i);this.leftover=this.remaining(),this.result=this.postProcess?this.postProcess(n,e):n},Eh.prototype={read:function(t){var e,n,i,r;for(t||(t=this.converters),e=this.pos,i=t.length,n=0;i>n;n+=1)if(this.pos=e,r=t[n](this))return r;return null},getLinePos:function(t){for(var e,n=0,i=0;t>=this.lineEnds[n];)i=this.lineEnds[n],n+=1;return e=t-i,[n+1,e+1,t]},error:function(t){var e=this.getLinePos(this.pos),n=e[0],i=e[1],r=this.lines[e[0]-1],s=0,o=r.replace(/\t/g,function(t,n){return n<e[1]&&(s+=1),"  "})+"\n"+new Array(e[1]+s).join(" ")+"^----",a=new _h(""+t+" at line "+n+" character "+i+":\n"+o);throw a.line=e[0],a.character=e[1],a.shortMessage=t,a},matchString:function(t){return this.str.substr(this.pos,t.length)===t?(this.pos+=t.length,t):void 0},matchPattern:function(t){var e;return(e=t.exec(this.remaining()))?(this.pos+=e[0].length,e[1]||e[0]):void 0},allowWhitespace:function(){this.matchPattern(zh)},remaining:function(){return this.str.substring(this.pos)},nextChar:function(){return this.str.charAt(this.pos)}},Eh.extend=function(t){var e,n,i=this;e=function(t,e){Eh.call(this,t,e)},e.prototype=wa(i.prototype);for(n in t)Oa.call(t,n)&&(e.prototype[n]=t[n]);return e.extend=Eh.extend,e};var Bh,qh,$h,Qh=Eh,Zh=1,Hh=2,Kh=3,Gh=4,Yh=5,Jh=6,Xh=7,tc=8,ec=9,nc=10,ic=13,rc=14,sc=15,oc=16,ac=17,uc=18,hc=20,cc=21,lc=22,fc=23,dc=24,pc=25,mc=26,vc=27,gc=30,yc=31,bc=32,wc=33,xc=34,kc=35,Ec=36,_c=40,Ac=50,Sc=51,Cc=52,Oc=53,Pc=54,Tc=60,Fc=61,Rc=zt,jc=/^[^\s=]+/,Nc=/^\s+/,Dc=Bt,Ic=/^(\/(?:[^\n\r\u2028\u2029\/\\[]|\\.|\[(?:[^\n\r\u2028\u2029\]\\]|\\.)*])+\/(?:([gimuy])(?![a-z]*\2))*(?![a-zA-Z_$0-9]))/,Lc=qt,Vc={t:nc,exclude:!0},Mc="Expected a JavaScript expression",Uc="Expected closing paren",Wc=Qt,zc=/^(?:[+-]?)0*(?:(?:(?:[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,Bc=Zt;Bh=/^(?=.)[^"'\\]+?(?:(?!.)|(?=["'\\]))/,qh=/^\\(?:['"\\bfnrt]|0(?![0-9])|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|(?=.)[^ux0-9])/,$h=/^\\(?:\r\n|[\u000A\u000D\u2028\u2029])/;var qc,$c,Qc=function(t){return function(e){var n,i,r,s;for(n=e.pos,i='"',r=!1;!r;)s=e.matchPattern(Bh)||e.matchPattern(qh)||e.matchString(t),s?i+='"'===s?'\\"':"\\'"===s?"'":s:(s=e.matchPattern($h),s?i+="\\u"+("000"+s.charCodeAt(1).toString(16)).slice(-4):r=!0);return i+='"',JSON.parse(i)}},Zc=Qc('"'),Hc=Qc("'"),Kc=function(t){var e,n;return e=t.pos,t.matchString('"')?(n=Hc(t),t.matchString('"')?{t:cc,v:n}:(t.pos=e,null)):t.matchString("'")?(n=Zc(t),t.matchString("'")?{t:cc,v:n}:(t.pos=e,null)):null},Gc=/^[a-zA-Z_$][a-zA-Z_$0-9]*/,Yc=Ht,Jc=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/,Xc=Kt,tl=Gt,el=function(t){var e,n;return e=t.pos,t.allowWhitespace(),t.matchString("{")?(n=tl(t),t.allowWhitespace(),t.matchString("}")?{t:fc,m:n}:(t.pos=e,null)):(t.pos=e,null)},nl=Yt,il=function(t){var e,n;return e=t.pos,t.allowWhitespace(),t.matchString("[")?(n=nl(t),t.matchString("]")?{t:lc,m:n}:(t.pos=e,null)):(t.pos=e,null)},rl=Jt,sl=Xt,ol=/^(?:~\/|(?:\.\.\/)+|\.\/(?:\.\.\/)*|\.)/;qc=/^(?:Array|console|Date|RegExp|decodeURIComponent|decodeURI|encodeURIComponent|encodeURI|isFinite|isNaN|parseFloat|parseInt|JSON|Math|NaN|undefined|null)\b/,$c=/^(?:break|case|catch|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|switch|throw|try|typeof|var|void|while|with)$/;var al,ul,hl=/^[a-zA-Z$_0-9]+(?:(?:\.[a-zA-Z$_0-9]+)|(?:\[[0-9]+\]))*/,cl=/^[a-zA-Z_$][-a-zA-Z_$0-9]*/,ll=te,fl=function(t){return rl(t)||sl(t)||ll(t)},dl=ee,pl=function(t){var e,n,i,r;if(n=fl(t),!n)return null;for(;n;)if(e=t.pos,i=dl(t))n={t:bc,x:n,r:i};else{if(!t.matchString("("))break;t.allowWhitespace(),r=nl(t),t.allowWhitespace(),t.matchString(")")||t.error(Uc),n={t:_c,x:n},r&&(n.o=r)}return n};ul=function(t,e){return function(n){var i;return(i=e(n))?i:n.matchString(t)?(n.allowWhitespace(),i=Ol(n),i||n.error(Mc),{s:t,o:i,t:wc}):null}},function(){var t,e,n,i,r;for(i="! ~ + - typeof".split(" "),r=pl,t=0,e=i.length;e>t;t+=1)n=ul(i[t],r),r=n;al=r}();var ml,vl,gl=al;vl=function(t,e){return function(n){var i,r,s;if(r=e(n),!r)return null;for(;;){if(i=n.pos,n.allowWhitespace(),!n.matchString(t))return n.pos=i,r;if("in"===t&&/[a-zA-Z_$0-9]/.test(n.remaining().charAt(0)))return n.pos=i,r;if(n.allowWhitespace(),s=e(n),!s)return n.pos=i,r;r={t:Ec,s:t,o:[r,s]}}}},function(){var t,e,n,i,r;for(i="* / % + - << >> >>> < <= > >= in instanceof == != === !== & ^ | && ||".split(" "),r=gl,t=0,e=i.length;e>t;t+=1)n=vl(i[t],r),r=n;ml=r}();var yl,bl,wl,xl,kl,El,_l,Al,Sl=ml,Cl=ne,Ol=ie,Pl=re,Tl=oe,Fl=/^[0-9][1-9]*$/,Rl=ue,jl=he,Nl=ce,Dl=le,Il=fe,Ll=de,Vl=pe,Ml=/^yield\s*/,Ul=me,Wl=ve,zl=/^\s*else\s*/,Bl=ge,ql=/^\s*elseif\s+/,$l={each:Cc,"if":Ac,"if-with":Pc,"with":Oc,unless:Sc},Ql=ye,Zl=/^\s*:\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,Hl=/^\s*,\s*([a-zA-Z_$][a-zA-Z_$0-9]*)/,Kl=new RegExp("^("+Object.keys($l).join("|")+")\\b"),Gl=Ee,Yl="<!--",Jl="-->";yl=/^(allowFullscreen|async|autofocus|autoplay|checked|compact|controls|declare|default|defaultChecked|defaultMuted|defaultSelected|defer|disabled|enabled|formNoValidate|hidden|indeterminate|inert|isMap|itemScope|loop|multiple|muted|noHref|noResize|noShade|noValidate|noWrap|open|pauseOnExit|readOnly|required|reversed|scoped|seamless|selected|sortable|translate|trueSpeed|typeMustMatch|visible)$/i,bl=/^(?:area|base|br|col|command|doctype|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,wl={quot:34,amp:38,apos:39,lt:60,gt:62,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,copy:169,ordf:170,laquo:171,not:172,shy:173,reg:174,macr:175,deg:176,plusmn:177,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,sup1:185,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,Agrave:192,Aacute:193,Acirc:194,Atilde:195,Auml:196,Aring:197,AElig:198,Ccedil:199,Egrave:200,Eacute:201,Ecirc:202,Euml:203,Igrave:204,Iacute:205,Icirc:206,Iuml:207,ETH:208,Ntilde:209,Ograve:210,Oacute:211,Ocirc:212,Otilde:213,Ouml:214,times:215,Oslash:216,Ugrave:217,Uacute:218,Ucirc:219,Uuml:220,Yacute:221,THORN:222,szlig:223,agrave:224,aacute:225,acirc:226,atilde:227,auml:228,aring:229,aelig:230,ccedil:231,egrave:232,eacute:233,ecirc:234,euml:235,igrave:236,iacute:237,icirc:238,iuml:239,eth:240,ntilde:241,ograve:242,oacute:243,ocirc:244,otilde:245,ouml:246,divide:247,oslash:248,ugrave:249,uacute:250,ucirc:251,uuml:252,yacute:253,thorn:254,yuml:255,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,"int":8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},xl=[8364,129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,157,382,376],kl=new RegExp("&(#?(?:x[\\w\\d]+|\\d+|"+Object.keys(wl).join("|")+"));?","g"),El=/</g,_l=/>/g,Al=/&/g;var Xl,tf,ef,nf,rf,sf,of,af=/^\s*\r?\n/,uf=/\r?\n\s*$/,hf=function(t){var e,n,i,r,s;for(e=1;e<t.length;e+=1)n=t[e],i=t[e-1],r=t[e-2],Ce(n)&&Oe(i)&&Ce(r)&&uf.test(r)&&af.test(n)&&(t[e-2]=r.replace(uf,"\n"),t[e]=n.replace(af,"")),Pe(n)&&Ce(i)&&uf.test(i)&&Ce(n.f[0])&&af.test(n.f[0])&&(t[e-1]=i.replace(uf,"\n"),n.f[0]=n.f[0].replace(af,"")),Ce(n)&&Pe(i)&&(s=D(i.f),Ce(s)&&uf.test(s)&&af.test(n)&&(i.f[i.f.length-1]=s.replace(uf,"\n"),t[e]=n.replace(af,"")));return t},cf=function(t,e,n){var i;e&&(i=t[0],"string"==typeof i&&(i=i.replace(e,""),i?t[0]=i:t.shift())),n&&(i=D(t),"string"==typeof i&&(i=i.replace(n,""),i?t[t.length-1]=i:t.pop()))},lf=Te,ff=/[ \t\f\r\n]+/g,df=/^(?:pre|script|style|textarea)$/i,pf=/^[ \t\f\r\n]+/,mf=/[ \t\f\r\n]+$/,vf=/^(?:\r\n|\r|\n)/,gf=/(?:\r\n|\r|\n)$/,yf=Fe,bf=/^([a-zA-Z]{1,}:?[a-zA-Z0-9\-]*)\s*\>/,wf=function(t,e){var n,i,r;for(n=e.length;n--;){if(i=t.indexOf(e[n]),!i)return 0;-1!==i&&(!r||r>i)&&(r=i)}return r||-1},xf=Re,kf=/^[^\s"'>\/=]+/,Ef=/^[^\s"'=<>`]+/;tf={"true":!0,"false":!1,undefined:void 0,"null":null},ef=new RegExp("^(?:"+Object.keys(tf).join("|")+")"),nf=/^(?:[+-]?)(?:(?:(?:0|[1-9]\d*)?\.\d+)|(?:(?:0|[1-9]\d*)\.)|(?:0|[1-9]\d*))(?:[eE][+-]?\d+)?/,rf=/\$\{([^\}]+)\}/g,sf=/^\$\{([^\}]+)\}/,of=/^\s*$/,Xl=Qh.extend({init:function(t,e){this.values=e.values,this.allowWhitespace()},postProcess:function(t){return 1===t.length&&of.test(this.leftover)?{value:t[0].v}:null},converters:[function(t){var e;return t.values?(e=t.matchPattern(sf),e&&t.values.hasOwnProperty(e)?{v:t.values[e]}:void 0):null},function(t){var e;return(e=t.matchPattern(ef))?{v:tf[e]}:void 0},function(t){var e;return(e=t.matchPattern(nf))?{v:+e}:void 0},function(t){var e,n=Kc(t);return n&&(e=t.values)?{v:n.v.replace(rf,function(t,n){return n in e?e[n]:n})}:n},function(t){var e,n;if(!t.matchString("{"))return null;if(e={},t.allowWhitespace(),t.matchString("}"))return{v:e};for(;n=Ve(t);){if(e[n.key]=n.value,t.allowWhitespace(),t.matchString("}"))return{v:e};if(!t.matchString(","))return null}return null},function(t){var e,n;if(!t.matchString("["))return null;if(e=[],t.allowWhitespace(),t.matchString("]"))return{v:e};for(;n=t.read();){if(e.push(n.v),t.allowWhitespace(),t.matchString("]"))return{v:e};if(!t.matchString(","))return null;t.allowWhitespace()}return null}]});var _f,Af=function(t,e){var n=new Xl(t,{values:e});return n.result},Sf=Me,Cf=/^([a-zA-Z_$][a-zA-Z_$0-9]*)\(/,Of=/\)\s*$/;_f=Qh.extend({converters:[Ol]});var Pf,Tf=/^[a-zA-Z]{1,}:?[a-zA-Z0-9\-]*/,Ff=/^[\s\n\/>]/,Rf=/^on/,jf=/^on-([a-zA-Z\\*\\.$_][a-zA-Z\\*\\.$_0-9\-]+)$/,Nf=/^(?:change|reset|teardown|update|construct|config|init|render|unrender|detach|insert)$/,Df={"intro-outro":"t0",intro:"t1",outro:"t2",decorator:"o"},If={exclude:!0};Pf={li:["li"],dt:["dt","dd"],dd:["dt","dd"],p:"address article aside blockquote div dl fieldset footer form h1 h2 h3 h4 h5 h6 header hgroup hr main menu nav ol p pre section table ul".split(" "),rt:["rt","rp"],rp:["rt","rp"],optgroup:["optgroup"],option:["option","optgroup"],thead:["tbody","tfoot"],tbody:["tbody","tfoot"],tfoot:["tbody"],tr:["tr","tbody"],td:["td","th","tr"],th:["td","th","tr"]};var Lf,Vf=Ue,Mf=ze,Uf=Be,Wf=/[-\/\\^$*+?.()|[\]{}]/g,zf=qe,Bf=/^<!--\s*/,qf=/s*>\s*([a-zA-Z_$][-a-zA-Z_$0-9]*)\s*/,$f=/\s*-->/,Qf=$e,Zf=/^#\s*partial\s+/,Hf=Qe,Kf=Ze,Gf=[Nl,jl,Ql,Vl,Ll,Dl],Yf=[Rl],Jf=[jl,Ql,Ll],Xf=void 0,td=[Lc,Gl,Vf,Mf],ed=[zf,Qf];Xf=Qh.extend({init:function(t,e){var n=e.tripleDelimiters||["{{{","}}}"],i=e.staticDelimiters||["[[","]]"],r=e.staticTripleDelimiters||["[[[","]]]"];this.standardDelimiters=e.delimiters||["{{","}}"],this.tags=[{isStatic:!1,isTriple:!1,open:this.standardDelimiters[0],close:this.standardDelimiters[1],readers:Gf},{isStatic:!1,isTriple:!0,open:n[0],close:n[1],readers:Yf},{isStatic:!0,isTriple:!1,open:i[0],close:i[1],readers:Jf},{isStatic:!0,isTriple:!0,open:r[0],close:r[1],readers:Yf}],this.sortMustacheTags(),this.sectionDepth=0,this.elementStack=[],this.interpolate={script:!e.interpolate||e.interpolate.script!==!1,style:!e.interpolate||e.interpolate.style!==!1},e.sanitize===!0&&(e.sanitize={elements:"applet base basefont body frame frameset head html isindex link meta noframes noscript object param script style title".split(" "),eventAttributes:!0}),this.stripComments=e.stripComments!==!1,this.preserveWhitespace=e.preserveWhitespace,this.sanitizeElements=e.sanitize&&e.sanitize.elements,this.sanitizeEventAttributes=e.sanitize&&e.sanitize.eventAttributes,this.includeLinePositions=e.includeLinePositions},postProcess:function(t){return t.length?(this.sectionDepth>0&&this.error("A section was left open"),lf(t[0].t,this.stripComments,this.preserveWhitespace,!this.preserveWhitespace,!this.preserveWhitespace),t[0]):{t:[],v:oa}},converters:[Hf],sortMustacheTags:function(){this.tags.sort(function(t,e){return e.open.length-t.open.length})}});var nd,id,rd,sd=["preserveWhitespace","sanitize","stripComments","delimiters","tripleDelimiters","interpolate"],od={fromId:Ge,isHashedId:Ye,isParsed:Je,getParseOptions:Xe,createHelper:He,parse:Ke},ad=od,ud={name:"template",extend:function(t,e,n){var i;"template"in n&&(i=n.template,e.template="function"==typeof i?i:rn(i,e))},init:function(t,e,n){var i,r;i="template"in n?n.template:t.prototype.template,"function"==typeof i&&(r=i,i=en(e,r),e._config.template={fn:r,result:i}),i=rn(i,e),e.template=i.t,i.p&&sn(e.partials,i.p)},reset:function(t){var e,n=tn(t);return n?(e=rn(n,t),t.template=e.t,sn(t.partials,e.p,!0),!0):void 0}},hd=ud;nd=["adaptors","components","computed","decorators","easing","events","interpolators","partials","transitions"],id=function(t,e){this.name=t,this.useDefaults=e},id.prototype={constructor:id,extend:function(t,e,n){this.configure(this.useDefaults?t.defaults:t,this.useDefaults?e:e.constructor,n)},init:function(){},configure:function(t,e,n){var i,r=this.name,s=n[r];i=wa(t[r]);for(var o in s)i[o]=s[o];e[r]=i},reset:function(t){var e=t[this.name],n=!1;return Object.keys(e).forEach(function(t){var i=e[t];i._fn&&(i._fn.isOwner?e[t]=i._fn:delete e[t],n=!0)}),n}},rd=nd.map(function(t){return new id(t,"computed"===t)});var cd,ld,fd,dd,pd,md,vd=rd,gd=on,yd=cn;dd={adapt:Th,css:Mh,data:Wh,template:hd},fd=Object.keys(ua),md=dn(fd.filter(function(t){return!dd[t]})),pd=dn(fd.concat(vd.map(function(t){return t.name}))),ld=[].concat(fd.filter(function(t){return!vd[t]&&!dd[t]}),vd,dd.data,dd.template,dd.css),cd={extend:function(t,e,n){return ln("extend",t,e,n)},init:function(t,e,n){return ln("init",t,e,n)},reset:function(t){return ld.filter(function(e){return e.reset&&e.reset(t)}).map(function(t){return t.name})},order:ld};var bd=cd,wd=pn,xd=mn,kd=vn,Ed=gn,_d=yn,Ad=bn,Sd=wn,Cd=xn,Od=kn,Pd=En,Td=_n,Fd=An,Rd=function(){return e(this.node)},jd=function(t){this.type=Zh,this.text=t.template};jd.prototype={detach:Rd,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createTextNode(this.text)),this.node},toString:function(t){return t?Se(this.text):this.text},unrender:function(t){return t?this.detach():void 0}};var Nd=jd,Dd=Sn,Id=Cn,Ld=function(t,e,n){var i;this.ref=e,this.resolved=!1,this.root=t.root,this.parentFragment=t.parentFragment,this.callback=n,i=uu(t.root,e,t.parentFragment),void 0!=i?this.resolve(i):mu.addUnresolved(this)};Ld.prototype={resolve:function(t){this.keypath&&!t&&mu.addUnresolved(this),this.resolved=!0,this.keypath=t,this.callback(t)},forceResolution:function(){this.resolve(_(this.ref))},rebind:function(t,e){var n;void 0!=this.keypath&&(n=this.keypath.replace(t,e),void 0!==n&&this.resolve(n))},unbind:function(){this.resolved||mu.removeUnresolved(this)}};var Vd=Ld,Md=function(t,e,n){this.parentFragment=t.parentFragment,this.ref=e,this.callback=n,this.rebind()},Ud={"@keypath":{prefix:"c",prop:["context"]},"@index":{prefix:"i",prop:["index"]},"@key":{prefix:"k",prop:["key","index"]}};Md.prototype={rebind:function(){var t,e=this.ref,n=this.parentFragment,i=Ud[e];if(!i)throw new Error('Unknown special reference "'+e+'" - valid references are @index, @key and @keypath');if(this.cached)return this.callback(_("@"+i.prefix+On(this.cached,i)));if(-1!==i.prop.indexOf("index")||-1!==i.prop.indexOf("key"))for(;n;){if(n.owner.currentSubtype===Cc&&void 0!==(t=On(n,i)))return this.cached=n,n.registerIndexRef(this),this.callback(_("@"+i.prefix+t));n=!n.parent&&n.owner&&n.owner.component&&n.owner.component.parentFragment&&!n.owner.component.instance.isolated?n.owner.component.parentFragment:n.parent}else for(;n;){if(void 0!==(t=On(n,i)))return this.callback(_("@"+i.prefix+t.str));n=n.parent}},unbind:function(){this.cached&&this.cached.unregisterIndexRef(this)}};var Wd=Md,zd=function(t,e,n){this.parentFragment=t.parentFragment,this.ref=e,this.callback=n,e.ref.fragment.registerIndexRef(this),this.rebind()};zd.prototype={rebind:function(){var t,e=this.ref.ref;t="k"===e.ref.t?"k"+e.fragment.key:"i"+e.fragment.index,void 0!==t&&this.callback(_("@"+t))},unbind:function(){this.ref.ref.fragment.unregisterIndexRef(this)}};var Bd=zd,qd=Pn;Pn.resolve=function(t){var e,n,i={};for(e in t.refs)n=t.refs[e],i[n.ref.n]="k"===n.ref.t?n.fragment.key:n.fragment.index;return i};var $d,Qd=Tn,Zd=Fn,Hd={},Kd=Function.prototype.bind;$d=function(t,e,n,i){var r,s=this;r=t.root,this.root=r,this.parentFragment=e,this.callback=i,this.owner=t,this.str=n.s,this.keypaths=[],this.pending=n.r.length,this.refResolvers=n.r.map(function(t,e){return Qd(s,t,function(t){s.resolve(e,t)})}),this.ready=!0,this.bubble()},$d.prototype={bubble:function(){this.ready&&(this.uniqueString=jn(this.str,this.keypaths),this.keypath=Nn(this.uniqueString),this.createEvaluator(),this.callback(this.keypath))},unbind:function(){for(var t;t=this.refResolvers.pop();)t.unbind()},resolve:function(t,e){this.keypaths[t]=e,this.bubble()},createEvaluator:function(){var t,e,n,i,r,s=this;i=this.keypath,t=this.root.viewmodel.computations[i.str],t?this.root.viewmodel.mark(i):(r=Zd(this.str,this.refResolvers.length),e=this.keypaths.map(function(t){var e;return"undefined"===t?function(){return void 0}:t.isSpecial?(e=t.value,function(){return e}):function(){var e=s.root.viewmodel.get(t,{noUnwrap:!0,fullRootGet:!0});return"function"==typeof e&&(e=In(e,s.root)),e}}),n={deps:this.keypaths.filter(Dn),getter:function(){var t=e.map(Rn);return r.apply(null,t)}},t=this.root.viewmodel.compute(i,n))},rebind:function(t,e){this.refResolvers.forEach(function(n){return n.rebind(t,e)})}};var Gd=$d,Yd=function(t,e,n){var i=this;this.resolver=e,this.root=e.root,this.parentFragment=n,this.viewmodel=e.root.viewmodel,"string"==typeof t?this.value=t:t.t===gc?this.refResolver=Qd(this,t.n,function(t){i.resolve(t)}):new Gd(e,n,t,function(t){i.resolve(t)})};Yd.prototype={resolve:function(t){this.keypath&&this.viewmodel.unregister(this.keypath,this),this.keypath=t,this.value=this.viewmodel.get(t),this.bind(),this.resolver.bubble()},bind:function(){this.viewmodel.register(this.keypath,this)},rebind:function(t,e){this.refResolver&&this.refResolver.rebind(t,e)},setValue:function(t){this.value=t,this.resolver.bubble()},unbind:function(){this.keypath&&this.viewmodel.unregister(this.keypath,this),this.refResolver&&this.refResolver.unbind()},forceResolution:function(){this.refResolver&&this.refResolver.forceResolution()}};var Jd=Yd,Xd=function(t,e,n){var i,r,s,o,a=this;this.parentFragment=o=t.parentFragment,this.root=i=t.root,this.mustache=t,this.ref=r=e.r,this.callback=n,this.unresolved=[],(s=uu(i,r,o))?this.base=s:this.baseResolver=new Vd(this,r,function(t){a.base=t,a.baseResolver=null,a.bubble()}),this.members=e.m.map(function(t){return new Jd(t,a,o)}),this.ready=!0,this.bubble()};Xd.prototype={getKeypath:function(){var t=this.members.map(Ln);return!t.every(Vn)||this.baseResolver?null:this.base.join(t.join("."))},bubble:function(){this.ready&&!this.baseResolver&&this.callback(this.getKeypath())},unbind:function(){this.members.forEach(Z)},rebind:function(t,e){var n;if(this.base){var i=this.base.replace(t,e);i&&i!==this.base&&(this.base=i,n=!0)}this.members.forEach(function(i){i.rebind(t,e)&&(n=!0)}),n&&this.bubble()},forceResolution:function(){this.baseResolver&&(this.base=_(this.ref),this.baseResolver.unbind(),this.baseResolver=null),this.members.forEach(Mn),this.bubble()}};var tp=Xd,ep=Un,np=Wn,ip=zn,rp={getValue:Id,init:ep,resolve:np,rebind:ip},sp=function(t){this.type=Hh,rp.init(this,t)};sp.prototype={update:function(){this.node.data=void 0==this.value?"":this.value},resolve:rp.resolve,rebind:rp.rebind,detach:Rd,unbind:Dd,render:function(){return this.node||(this.node=document.createTextNode(n(this.value))),this.node},unrender:function(t){t&&e(this.node)},getValue:rp.getValue,setValue:function(t){var e;this.keypath&&(e=this.root.viewmodel.wrapped[this.keypath.str])&&(t=e.get()),a(t,this.value)||(this.value=t,this.parentFragment.bubble(),this.node&&mu.addView(this))},firstNode:function(){return this.node},toString:function(t){var e=""+n(this.value);return t?Se(e):e}};var op=sp,ap=Bn,up=qn,hp=$n,cp=Qn,lp=Zn,fp=Hn,dp=Kn,pp=Gn,mp=Yn,vp=function(t,e){rp.rebind.call(this,t,e)},gp=Xn,yp=ti,bp=li,wp=fi,xp=di,kp=vi,Ep=function(t){this.type=Gh,this.subtype=this.currentSubtype=t.template.n,this.inverted=this.subtype===Sc,this.pElement=t.pElement,this.fragments=[],this.fragmentsToCreate=[],this.fragmentsToRender=[],this.fragmentsToUnrender=[],t.template.i&&(this.indexRefs=t.template.i.split(",").map(function(t,e){return{n:t,t:0===e?"k":"i"}})),this.renderedFragments=[],this.length=0,rp.init(this,t)};Ep.prototype={bubble:ap,detach:up,find:hp,findAll:cp,findAllComponents:lp,findComponent:fp,findNextNode:dp,firstNode:pp,getIndexRef:function(t){if(this.indexRefs)for(var e=this.indexRefs.length;e--;){var n=this.indexRefs[e];if(n.n===t)return n}},getValue:rp.getValue,shuffle:mp,rebind:vp,render:gp,resolve:rp.resolve,setValue:yp,toString:bp,unbind:wp,unrender:xp,update:kp};var _p,Ap,Sp=Ep,Cp=gi,Op=yi,Pp=bi,Tp=wi,Fp={};try{la("table").innerHTML="foo"}catch(_a){_p=!0,Ap={TABLE:['<table class="x">',"</table>"],THEAD:['<table><thead class="x">',"</thead></table>"],TBODY:['<table><tbody class="x">',"</tbody></table>"],TR:['<table><tr class="x">',"</tr></table>"],SELECT:['<select class="x">',"</select>"]}}var Rp=function(t,e,n){var i,r,s,o,a,u=[];if(null!=t&&""!==t){for(_p&&(r=Ap[e.tagName])?(i=xi("DIV"),i.innerHTML=r[0]+t+r[1],i=i.querySelector(".x"),"SELECT"===i.tagName&&(s=i.options[i.selectedIndex])):e.namespaceURI===ia.svg?(i=xi("DIV"),i.innerHTML='<svg class="x">'+t+"</svg>",i=i.querySelector(".x")):(i=xi(e.tagName),i.innerHTML=t,"SELECT"===i.tagName&&(s=i.options[i.selectedIndex]));o=i.firstChild;)u.push(o),n.appendChild(o);if("SELECT"===e.tagName)for(a=u.length;a--;)u[a]!==s&&(u[a].selected=!1)}return u},jp=ki,Np=_i,Dp=Ai,Ip=Si,Lp=Ci,Vp=Oi,Mp=function(t){this.type=Kh,rp.init(this,t)};Mp.prototype={detach:Cp,find:Op,findAll:Pp,firstNode:Tp,getValue:rp.getValue,rebind:rp.rebind,render:Np,resolve:rp.resolve,setValue:Dp,toString:Ip,unbind:Dd,unrender:Lp,update:Vp};var Up,Wp,zp,Bp,qp=Mp,$p=function(){this.parentFragment.bubble()},Qp=Pi,Zp=function(t){return this.node?fa(this.node,t)?this.node:this.fragment&&this.fragment.find?this.fragment.find(t):void 0:null},Hp=function(t,e){e._test(this,!0)&&e.live&&(this.liveQueries||(this.liveQueries=[])).push(e),this.fragment&&this.fragment.findAll(t,e)},Kp=function(t,e){this.fragment&&this.fragment.findAllComponents(t,e)},Gp=function(t){return this.fragment?this.fragment.findComponent(t):void 0},Yp=Ti,Jp=Fi,Xp=Ri,tm=/^true|on|yes|1$/i,em=/^[0-9]+$/,nm=function(t,e){var n,i,r;return r=e.a||{},i={},n=r.twoway,void 0!==n&&(i.twoway=0===n||tm.test(n)),n=r.lazy,void 0!==n&&(i.lazy=0!==n&&em.test(n)?parseInt(n):0===n||tm.test(n)),i},im=ji;Up="altGlyph altGlyphDef altGlyphItem animateColor animateMotion animateTransform clipPath feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence foreignObject glyphRef linearGradient radialGradient textPath vkern".split(" "),Wp="attributeName attributeType baseFrequency baseProfile calcMode clipPathUnits contentScriptType contentStyleType diffuseConstant edgeMode externalResourcesRequired filterRes filterUnits glyphRef gradientTransform gradientUnits kernelMatrix kernelUnitLength keyPoints keySplines keyTimes lengthAdjust limitingConeAngle markerHeight markerUnits markerWidth maskContentUnits maskUnits numOctaves pathLength patternContentUnits patternTransform patternUnits pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits refX refY repeatCount repeatDur requiredExtensions requiredFeatures specularConstant specularExponent spreadMethod startOffset stdDeviation stitchTiles surfaceScale systemLanguage tableValues targetX targetY textLength viewBox viewTarget xChannelSelector yChannelSelector zoomAndPan".split(" "),zp=function(t){for(var e={},n=t.length;n--;)e[t[n].toLowerCase()]=t[n];return e},Bp=zp(Up.concat(Wp));var rm=function(t){var e=t.toLowerCase();return Bp[e]||e},sm=function(t,e){var n,i;if(n=e.indexOf(":"),-1===n||(i=e.substr(0,n),"xmlns"===i))t.name=t.element.namespace!==ia.html?rm(e):e;else if(e=e.substring(n+1),t.name=rm(e),t.namespace=ia[i.toLowerCase()],t.namespacePrefix=i,!t.namespace)throw'Unknown namespace ("'+i+'")'},om=Ni,am=Di,um=Ii,hm=Li,cm={"accept-charset":"acceptCharset",accesskey:"accessKey",bgcolor:"bgColor","class":"className",codebase:"codeBase",colspan:"colSpan",contenteditable:"contentEditable",datetime:"dateTime",dirname:"dirName","for":"htmlFor","http-equiv":"httpEquiv",ismap:"isMap",maxlength:"maxLength",
novalidate:"noValidate",pubdate:"pubDate",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",usemap:"useMap"},lm=Vi,fm=Ui,dm=Wi,pm=zi,mm=Bi,vm=qi,gm=$i,ym=Qi,bm=Zi,wm=Hi,xm=Ki,km=Gi,Em=Yi,_m=Ji,Am=Xi,Sm=function(t){this.init(t)};Sm.prototype={bubble:im,init:am,rebind:um,render:hm,toString:lm,unbind:fm,update:Am};var Cm,Om=Sm,Pm=function(t,e){var n,i,r=[];for(n in e)"twoway"!==n&&"lazy"!==n&&e.hasOwnProperty(n)&&(i=new Om({element:t,name:n,value:e[n],root:t.root}),r[n]=i,"value"!==n&&r.push(i));return(i=r.value)&&r.push(i),r};"undefined"!=typeof document&&(Cm=la("div"));var Tm=function(t,e){this.element=t,this.root=t.root,this.parentFragment=t.parentFragment,this.attributes=[],this.fragment=new yb({root:t.root,owner:this,template:[e]})};Tm.prototype={bubble:function(){this.node&&this.update(),this.element.bubble()},rebind:function(t,e){this.fragment.rebind(t,e)},render:function(t){this.node=t,this.isSvg=t.namespaceURI===ia.svg,this.update()},unbind:function(){this.fragment.unbind()},update:function(){var t,e,n=this;t=this.fragment.toString(),e=tr(t,this.isSvg),this.attributes.filter(function(t){return er(e,t)}).forEach(function(t){n.node.removeAttribute(t.name)}),e.forEach(function(t){n.node.setAttribute(t.name,t.value)}),this.attributes=e},toString:function(){return this.fragment.toString()}};var Fm=Tm,Rm=function(t,e){return e?e.map(function(e){return new Fm(t,e)}):[]},jm=function(t){var e,n,i,r;if(this.element=t,this.root=t.root,this.attribute=t.attributes[this.name||"value"],e=this.attribute.interpolator,e.twowayBinding=this,n=e.keypath){if("}"===n.str.slice(-1))return v("Two-way binding does not work with expressions (`%s` on <%s>)",e.resolver.uniqueString,t.name,{ractive:this.root}),!1;if(n.isSpecial)return v("Two-way binding does not work with %s",e.resolver.ref,{ractive:this.root}),!1}else{var s=e.template.r?"'"+e.template.r+"' reference":"expression";m("The %s being used for two-way binding is ambiguous, and may cause unexpected results. Consider initialising your data to eliminate the ambiguity",s,{ractive:this.root}),e.resolver.forceResolution(),n=e.keypath}this.attribute.isTwoway=!0,this.keypath=n,i=this.root.viewmodel.get(n),void 0===i&&this.getInitialValue&&(i=this.getInitialValue(),void 0!==i&&this.root.viewmodel.set(n,i)),(r=nr(t))&&(this.resetValue=i,r.formBindings.push(this))};jm.prototype={handleChange:function(){var t=this;mu.start(this.root),this.attribute.locked=!0,this.root.viewmodel.set(this.keypath,this.getValue()),mu.scheduleTask(function(){return t.attribute.locked=!1}),mu.end()},rebound:function(){var t,e,n;e=this.keypath,n=this.attribute.interpolator.keypath,e!==n&&(I(this.root._twowayBindings[e.str],this),this.keypath=n,t=this.root._twowayBindings[n.str]||(this.root._twowayBindings[n.str]=[]),t.push(this))},unbind:function(){}},jm.extend=function(t){var e,n=this;return e=function(t){jm.call(this,t),this.init&&this.init()},e.prototype=wa(n.prototype),i(e.prototype,t),e.extend=jm.extend,e};var Nm,Dm=jm,Im=ir;Nm=Dm.extend({getInitialValue:function(){return""},getValue:function(){return this.element.node.value},render:function(){var t,e=this.element.node,n=!1;this.rendered=!0,t=this.root.lazy,this.element.lazy===!0?t=!0:this.element.lazy===!1?t=!1:u(this.element.lazy)?(t=!1,n=+this.element.lazy):u(t||"")&&(n=+t,t=!1,this.element.lazy=n),this.handler=n?sr:Im,e.addEventListener("change",Im,!1),t||(e.addEventListener("input",this.handler,!1),e.attachEvent&&e.addEventListener("keyup",this.handler,!1)),e.addEventListener("blur",rr,!1)},unrender:function(){var t=this.element.node;this.rendered=!1,t.removeEventListener("change",Im,!1),t.removeEventListener("input",this.handler,!1),t.removeEventListener("keyup",this.handler,!1),t.removeEventListener("blur",rr,!1)}});var Lm=Nm,Vm=Lm.extend({getInitialValue:function(){return this.element.fragment?this.element.fragment.toString():""},getValue:function(){return this.element.node.innerHTML}}),Mm=Vm,Um=or,Wm={},zm=Dm.extend({name:"checked",init:function(){this.siblings=Um(this.root._guid,"radio",this.element.getAttribute("name")),this.siblings.push(this)},render:function(){var t=this.element.node;t.addEventListener("change",Im,!1),t.attachEvent&&t.addEventListener("click",Im,!1)},unrender:function(){var t=this.element.node;t.removeEventListener("change",Im,!1),t.removeEventListener("click",Im,!1)},handleChange:function(){mu.start(this.root),this.siblings.forEach(function(t){t.root.viewmodel.set(t.keypath,t.getValue())}),mu.end()},getValue:function(){return this.element.node.checked},unbind:function(){I(this.siblings,this)}}),Bm=zm,qm=Dm.extend({name:"name",init:function(){this.siblings=Um(this.root._guid,"radioname",this.keypath.str),this.siblings.push(this),this.radioName=!0},getInitialValue:function(){return this.element.getAttribute("checked")?this.element.getAttribute("value"):void 0},render:function(){var t=this.element.node;t.name="{{"+this.keypath.str+"}}",t.checked=this.root.viewmodel.get(this.keypath)==this.element.getAttribute("value"),t.addEventListener("change",Im,!1),t.attachEvent&&t.addEventListener("click",Im,!1)},unrender:function(){var t=this.element.node;t.removeEventListener("change",Im,!1),t.removeEventListener("click",Im,!1)},getValue:function(){var t=this.element.node;return t._ractive?t._ractive.value:t.value},handleChange:function(){this.element.node.checked&&Dm.prototype.handleChange.call(this)},rebound:function(t,e){var n;Dm.prototype.rebound.call(this,t,e),(n=this.element.node)&&(n.name="{{"+this.keypath.str+"}}")},unbind:function(){I(this.siblings,this)}}),$m=qm,Qm=Dm.extend({name:"name",getInitialValue:function(){return this.noInitialValue=!0,[]},init:function(){var t,e;this.checkboxName=!0,this.siblings=Um(this.root._guid,"checkboxes",this.keypath.str),this.siblings.push(this),this.noInitialValue&&(this.siblings.noInitialValue=!0),this.siblings.noInitialValue&&this.element.getAttribute("checked")&&(t=this.root.viewmodel.get(this.keypath),e=this.element.getAttribute("value"),t.push(e))},unbind:function(){I(this.siblings,this)},render:function(){var t,e,n=this.element.node;t=this.root.viewmodel.get(this.keypath),e=this.element.getAttribute("value"),this.isChecked=s(t)?R(t,e):t==e,n.name="{{"+this.keypath.str+"}}",n.checked=this.isChecked,n.addEventListener("change",Im,!1),n.attachEvent&&n.addEventListener("click",Im,!1)},unrender:function(){var t=this.element.node;t.removeEventListener("change",Im,!1),t.removeEventListener("click",Im,!1)},changed:function(){var t=!!this.isChecked;return this.isChecked=this.element.node.checked,this.isChecked===t},handleChange:function(){this.isChecked=this.element.node.checked,Dm.prototype.handleChange.call(this)},getValue:function(){return this.siblings.filter(ar).map(ur)}}),Zm=Qm,Hm=Dm.extend({name:"checked",render:function(){var t=this.element.node;t.addEventListener("change",Im,!1),t.attachEvent&&t.addEventListener("click",Im,!1)},unrender:function(){var t=this.element.node;t.removeEventListener("change",Im,!1),t.removeEventListener("click",Im,!1)},getValue:function(){return this.element.node.checked}}),Km=Hm,Gm=Dm.extend({getInitialValue:function(){var t,e,n,i,r=this.element.options;if(void 0===this.element.getAttribute("value")&&(e=t=r.length,t)){for(;e--;)if(r[e].getAttribute("selected")){n=r[e].getAttribute("value"),i=!0;break}if(!i)for(;++e<t;)if(!r[e].getAttribute("disabled")){n=r[e].getAttribute("value");break}return void 0!==n&&(this.element.attributes.value.value=n),n}},render:function(){this.element.node.addEventListener("change",Im,!1)},unrender:function(){this.element.node.removeEventListener("change",Im,!1)},setValue:function(t){this.root.viewmodel.set(this.keypath,t)},getValue:function(){var t,e,n,i,r;for(t=this.element.node.options,n=t.length,e=0;n>e;e+=1)if(i=t[e],t[e].selected)return r=i._ractive?i._ractive.value:i.value},forceUpdate:function(){var t=this,e=this.getValue();void 0!==e&&(this.attribute.locked=!0,mu.scheduleTask(function(){return t.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,e))}}),Ym=Gm,Jm=Ym.extend({getInitialValue:function(){return this.element.options.filter(function(t){return t.getAttribute("selected")}).map(function(t){return t.getAttribute("value")})},render:function(){var t;this.element.node.addEventListener("change",Im,!1),t=this.root.viewmodel.get(this.keypath),void 0===t&&this.handleChange()},unrender:function(){this.element.node.removeEventListener("change",Im,!1)},setValue:function(){throw new Error("TODO not implemented yet")},getValue:function(){var t,e,n,i,r,s;for(t=[],e=this.element.node.options,i=e.length,n=0;i>n;n+=1)r=e[n],r.selected&&(s=r._ractive?r._ractive.value:r.value,t.push(s));return t},handleChange:function(){var t,e,n;return t=this.attribute,e=t.value,n=this.getValue(),void 0!==e&&j(n,e)||Ym.prototype.handleChange.call(this),this},forceUpdate:function(){var t=this,e=this.getValue();void 0!==e&&(this.attribute.locked=!0,mu.scheduleTask(function(){return t.attribute.locked=!1}),this.root.viewmodel.set(this.keypath,e))},updateModel:function(){void 0!==this.attribute.value&&this.attribute.value.length||this.root.viewmodel.set(this.keypath,this.initialValue)}}),Xm=Jm,tv=Dm.extend({render:function(){this.element.node.addEventListener("change",Im,!1)},unrender:function(){this.element.node.removeEventListener("change",Im,!1)},getValue:function(){return this.element.node.files}}),ev=tv,nv=Lm.extend({getInitialValue:function(){return void 0},getValue:function(){var t=parseFloat(this.element.node.value);return isNaN(t)?void 0:t}}),iv=hr,rv=lr,sv=fr,ov=dr,av=pr,uv=/^event(?:\.(.+))?/,hv=yr,cv=br,lv={},fv={touchstart:!0,touchmove:!0,touchend:!0,touchcancel:!0,touchleave:!0},dv=xr,pv=kr,mv=Er,vv=_r,gv=Ar,yv=function(t,e,n){this.init(t,e,n)};yv.prototype={bubble:rv,fire:sv,getAction:ov,init:av,listen:cv,rebind:dv,render:pv,resolve:mv,unbind:vv,unrender:gv};var bv=yv,wv=function(t,e){var n,i,r,s,o=[];for(i in e)if(e.hasOwnProperty(i))for(r=i.split("-"),n=r.length;n--;)s=new bv(t,r[n],e[i]),o.push(s);return o},xv=function(t,e){var n,i,r,s=this;this.element=t,this.root=n=t.root,i=e.n||e,("string"==typeof i||(r=new yb({template:i,root:n,owner:t}),i=r.toString(),r.unbind(),""!==i))&&(e.a?this.params=e.a:e.d&&(this.fragment=new yb({template:e.d,root:n,owner:t}),this.params=this.fragment.getArgsList(),this.fragment.bubble=function(){this.dirtyArgs=this.dirtyValue=!0,s.params=this.getArgsList(),s.ready&&s.update()}),this.fn=g("decorators",n,i),this.fn||l(Da(i,"decorator")))};xv.prototype={init:function(){var t,e,n;if(t=this.element.node,this.params?(n=[t].concat(this.params),e=this.fn.apply(this.root,n)):e=this.fn.call(this.root,t),!e||!e.teardown)throw new Error("Decorator definition must return an object with a teardown method");this.actual=e,this.ready=!0},update:function(){this.actual.update?this.actual.update.apply(this.root,this.params):(this.actual.teardown(!0),this.init())},rebind:function(t,e){this.fragment&&this.fragment.rebind(t,e)},teardown:function(t){this.torndown=!0,this.ready&&this.actual.teardown(),!t&&this.fragment&&this.fragment.unbind()}};var kv,Ev,_v,Av=xv,Sv=Rr,Cv=jr,Ov=Mr,Pv=function(t){return t.replace(/-([a-zA-Z])/g,function(t,e){return e.toUpperCase()})};Xo?(Ev={},_v=la("div").style,kv=function(t){var e,n,i;if(t=Pv(t),!Ev[t])if(void 0!==_v[t])Ev[t]=t;else for(i=t.charAt(0).toUpperCase()+t.substring(1),e=sa.length;e--;)if(n=sa[e],void 0!==_v[n+i]){Ev[t]=n+i;break}return Ev[t]}):kv=null;var Tv,Fv,Rv=kv;Xo?(Fv=window.getComputedStyle||Ea.getComputedStyle,Tv=function(t){var e,n,i,r,o;if(e=Fv(this.node),"string"==typeof t)return o=e[Rv(t)],"0px"===o&&(o=0),o;if(!s(t))throw new Error("Transition$getStyle must be passed a string, or an array of strings representing CSS properties");for(n={},i=t.length;i--;)r=t[i],o=e[Rv(r)],"0px"===o&&(o=0),n[r]=o;return n}):Tv=null;var jv=Tv,Nv=function(t,e){var n;if("string"==typeof t)this.node.style[Rv(t)]=e;else for(n in t)t.hasOwnProperty(n)&&(this.node.style[Rv(n)]=t[n]);return this},Dv=function(t){var e;this.duration=t.duration,this.step=t.step,this.complete=t.complete,"string"==typeof t.easing?(e=t.root.easing[t.easing],e||(v(Da(t.easing,"easing")),e=Ur)):e="function"==typeof t.easing?t.easing:Ur,this.easing=e,this.start=Xa(),this.end=this.start+this.duration,this.running=!0,yu.add(this)};Dv.prototype={tick:function(t){var e,n;return this.running?t>this.end?(this.step&&this.step(1),this.complete&&this.complete(1),!1):(e=t-this.start,n=this.easing(e/this.duration),this.step&&this.step(n),!0):!1},stop:function(){this.abort&&this.abort(),this.running=!1}};var Iv,Lv,Vv,Mv,Uv,Wv,zv,Bv,qv=Dv,$v=new RegExp("^-(?:"+sa.join("|")+")-"),Qv=function(t){return t.replace($v,"")},Zv=new RegExp("^(?:"+sa.join("|")+")([A-Z])"),Hv=function(t){var e;return t?(Zv.test(t)&&(t="-"+t),e=t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})):""},Kv={},Gv={};Xo?(Lv=la("div").style,function(){void 0!==Lv.transition?(Vv="transition",Mv="transitionend",Uv=!0):void 0!==Lv.webkitTransition?(Vv="webkitTransition",Mv="webkitTransitionEnd",Uv=!0):Uv=!1}(),Vv&&(Wv=Vv+"Duration",zv=Vv+"Property",Bv=Vv+"TimingFunction"),Iv=function(t,e,n,i,r){setTimeout(function(){var s,o,a,u,h;u=function(){o&&a&&(t.root.fire(t.name+":end",t.node,t.isIntro),r())},s=(t.node.namespaceURI||"")+t.node.tagName,t.node.style[zv]=i.map(Rv).map(Hv).join(","),t.node.style[Bv]=Hv(n.easing||"linear"),t.node.style[Wv]=n.duration/1e3+"s",h=function(e){var n;n=i.indexOf(Pv(Qv(e.propertyName))),-1!==n&&i.splice(n,1),i.length||(t.node.removeEventListener(Mv,h,!1),a=!0,u())},t.node.addEventListener(Mv,h,!1),setTimeout(function(){for(var r,c,l,f,d,p=i.length,v=[];p--;)f=i[p],r=s+f,Uv&&!Gv[r]&&(t.node.style[Rv(f)]=e[f],Kv[r]||(c=t.getStyle(f),Kv[r]=t.getStyle(f)!=e[f],Gv[r]=!Kv[r],Gv[r]&&(t.node.style[Rv(f)]=c))),(!Uv||Gv[r])&&(void 0===c&&(c=t.getStyle(f)),l=i.indexOf(f),-1===l?m("Something very strange happened with transitions. Please raise an issue at https://github.com/ractivejs/ractive/issues - thanks!",{node:t.node}):i.splice(l,1),d=/[^\d]*$/.exec(e[f])[0],v.push({name:Rv(f),interpolator:La(parseFloat(c),parseFloat(e[f])),suffix:d}));v.length?new qv({root:t.root,duration:n.duration,easing:Pv(n.easing||""),step:function(e){var n,i;for(i=v.length;i--;)n=v[i],t.node.style[n.name]=n.interpolator(e)+n.suffix},complete:function(){o=!0,u()}}):o=!0,i.length||(t.node.removeEventListener(Mv,h,!1),a=!0,u())},0)},n.delay||0)}):Iv=null;var Yv,Jv,Xv,tg,eg,ng=Iv;if("undefined"!=typeof document){if(Yv="hidden",eg={},Yv in document)Xv="";else for(tg=sa.length;tg--;)Jv=sa[tg],Yv=Jv+"Hidden",Yv in document&&(Xv=Jv);void 0!==Xv?(document.addEventListener(Xv+"visibilitychange",Wr),Wr()):("onfocusout"in document?(document.addEventListener("focusout",zr),document.addEventListener("focusin",Br)):(window.addEventListener("pagehide",zr),window.addEventListener("blur",zr),window.addEventListener("pageshow",Br),window.addEventListener("focus",Br)),eg.hidden=!1)}var ig,rg,sg,og=eg;Xo?(rg=window.getComputedStyle||Ea.getComputedStyle,ig=function(t,e,n){var i,r=this;if(4===arguments.length)throw new Error("t.animateStyle() returns a promise - use .then() instead of passing a callback");if(og.hidden)return this.setStyle(t,e),sg||(sg=ou.resolve());"string"==typeof t?(i={},i[t]=e):(i=t,n=e),n||(v('The "%s" transition does not supply an options object to `t.animateStyle()`. This will break in a future version of Ractive. For more info see https://github.com/RactiveJS/Ractive/issues/340',this.name),n=this);var s=new ou(function(t){var e,s,o,a,u,h,c;if(!n.duration)return r.setStyle(i),void t();for(e=Object.keys(i),s=[],o=rg(r.node),u={},h=e.length;h--;)c=e[h],a=o[Rv(c)],"0px"===a&&(a=0),a!=i[c]&&(s.push(c),r.node.style[Rv(c)]=a);return s.length?void ng(r,i,n,s,t):void t()});return s}):ig=null;var ag=ig,ug=function(t,e){return"number"==typeof t?t={duration:t}:"string"==typeof t?t="slow"===t?{duration:600}:"fast"===t?{duration:200}:{duration:400}:t||(t={}),r({},t,e)},hg=qr,cg=function(t,e,n){this.init(t,e,n)};cg.prototype={init:Ov,start:hg,getStyle:jv,setStyle:Nv,animateStyle:ag,processParams:ug};var lg,fg,dg=cg,pg=Qr;lg=function(){var t=this.node,e=this.fragment.toString(!1);if(window&&window.appearsToBeIELessEqual8&&(t.type="text/css"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}},fg=function(){this.node.type&&"text/javascript"!==this.node.type||m("Script tag was updated. This does not cause the code to be re-evaluated!",{ractive:this.root}),this.node.text=this.fragment.toString(!1)};var mg=function(){var t,e;return this.template.y?"<!DOCTYPE"+this.template.dd+">":(t="<"+this.template.e,t+=this.attributes.map(Jr).join("")+this.conditionalAttributes.map(Jr).join(""),"option"===this.name&&Gr(this)&&(t+=" selected"),"input"===this.name&&Yr(this)&&(t+=" checked"),t+=">","textarea"===this.name&&void 0!==this.getAttribute("value")?t+=Se(this.getAttribute("value")):void 0!==this.getAttribute("contenteditable")&&(t+=this.getAttribute("value")||""),this.fragment&&(e="script"!==this.name&&"style"!==this.name,t+=this.fragment.toString(e)),bl.test(this.template.e)||(t+="</"+this.template.e+">"),t)},vg=Xr,gg=ts,yg=function(t){this.init(t)};yg.prototype={bubble:$p,detach:Qp,find:Zp,findAll:Hp,findAllComponents:Kp,findComponent:Gp,findNextNode:Yp,firstNode:Jp,getAttribute:Xp,init:Sv,rebind:Cv,render:pg,toString:mg,unbind:vg,unrender:gg};var bg=yg,wg=/^\s*$/,xg=/^\s*/,kg=function(t){var e,n,i,r;return e=t.split("\n"),n=e[0],void 0!==n&&wg.test(n)&&e.shift(),i=D(e),void 0!==i&&wg.test(i)&&e.pop(),r=e.reduce(ns,null),r&&(t=e.map(function(t){return t.replace(r,"")}).join("\n")),t},Eg=is,_g=function(t,e){var n;return e?n=t.split("\n").map(function(t,n){return n?e+t:t}).join("\n"):t},Ag='Could not find template for partial "%s"',Sg=function(t){var e,n;e=this.parentFragment=t.parentFragment,this.root=e.root,this.type=tc,this.index=t.index,this.name=t.template.r,this.rendered=!1,this.fragment=this.fragmentToRender=this.fragmentToUnrender=null,rp.init(this,t),this.keypath||((n=Eg(this.root,this.name,e))?(Dd.call(this),this.isNamed=!0,this.setTemplate(n)):v(Ag,this.name))};Sg.prototype={bubble:function(){this.parentFragment.bubble()},detach:function(){return this.fragment.detach()},find:function(t){return this.fragment.find(t)},findAll:function(t,e){return this.fragment.findAll(t,e)},findComponent:function(t){return this.fragment.findComponent(t)},findAllComponents:function(t,e){return this.fragment.findAllComponents(t,e)},firstNode:function(){return this.fragment.firstNode()},findNextNode:function(){return this.parentFragment.findNextNode(this)},getPartialName:function(){return this.isNamed&&this.name?this.name:void 0===this.value?this.name:this.value},getValue:function(){return this.fragment.getValue()},rebind:function(t,e){this.isNamed||ip.call(this,t,e),this.fragment&&this.fragment.rebind(t,e)},render:function(){return this.docFrag=document.createDocumentFragment(),this.update(),this.rendered=!0,this.docFrag},resolve:rp.resolve,setValue:function(t){var e;(void 0===t||t!==this.value)&&(void 0!==t&&(e=Eg(this.root,""+t,this.parentFragment)),!e&&this.name&&(e=Eg(this.root,this.name,this.parentFragment))&&(Dd.call(this),this.isNamed=!0),e||v(Ag,this.name,{ractive:this.root}),this.value=t,this.setTemplate(e||[]),this.bubble(),this.rendered&&mu.addView(this))},setTemplate:function(t){this.fragment&&(this.fragment.unbind(),this.rendered&&(this.fragmentToUnrender=this.fragment)),this.fragment=new yb({template:t,root:this.root,owner:this,pElement:this.parentFragment.pElement}),this.fragmentToRender=this.fragment},toString:function(t){var e,n,i,r;return e=this.fragment.toString(t),n=this.parentFragment.items[this.index-1],n&&n.type===Zh?(i=n.text.split("\n").pop(),(r=/^\s+$/.exec(i))?_g(e,r[0]):e):e},unbind:function(){this.isNamed||Dd.call(this),this.fragment&&this.fragment.unbind()},unrender:function(t){this.rendered&&(this.fragment&&this.fragment.unrender(t),this.rendered=!1)},update:function(){var t,e;this.fragmentToUnrender&&(this.fragmentToUnrender.unrender(!0),this.fragmentToUnrender=null),this.fragmentToRender&&(this.docFrag.appendChild(this.fragmentToRender.render()),this.fragmentToRender=null),this.rendered&&(t=this.parentFragment.getNode(),e=this.parentFragment.findNextNode(this),t.insertBefore(this.docFrag,e))}};var Cg,Og,Pg,Tg=Sg,Fg=us,Rg=hs,jg=new nu("detach"),Ng=cs,Dg=ls,Ig=fs,Lg=ds,Vg=ps,Mg=ms,Ug=function(t,e,n,i){var r=t.root,s=t.keypath;i?r.viewmodel.smartUpdate(s,e,i):r.viewmodel.mark(s)},Wg=[],zg=["pop","push","reverse","shift","sort","splice","unshift"];zg.forEach(function(t){var e=function(){for(var e=arguments.length,n=Array(e),i=0;e>i;i++)n[i]=arguments[i];var r,s,o,a;for(r=mh(this,t,n),s=Array.prototype[t].apply(this,arguments),mu.start(),this._ractive.setting=!0,a=this._ractive.wrappers.length;a--;)o=this._ractive.wrappers[a],mu.addRactive(o.root),Ug(o,this,t,r);return mu.end(),this._ractive.setting=!1,s};xa(Wg,t,{value:e})}),Cg={},Cg.__proto__?(Og=function(t){t.__proto__=Wg},Pg=function(t){t.__proto__=Array.prototype}):(Og=function(t){var e,n;for(e=zg.length;e--;)n=zg[e],xa(t,n,{value:Wg[n],configurable:!0})},Pg=function(t){var e;for(e=zg.length;e--;)delete t[zg[e]]}),Og.unpatch=Pg;var Bg,qg,$g,Qg=Og;Bg={filter:function(t){return s(t)&&(!t._ractive||!t._ractive.setting)},wrap:function(t,e,n){return new qg(t,e,n)}},qg=function(t,e,n){this.root=t,this.value=e,this.keypath=_(n),e._ractive||(xa(e,"_ractive",{value:{wrappers:[],instances:[],setting:!1},configurable:!0}),Qg(e)),e._ractive.instances[t._guid]||(e._ractive.instances[t._guid]=0,e._ractive.instances.push(t)),e._ractive.instances[t._guid]+=1,e._ractive.wrappers.push(this)},qg.prototype={get:function(){return this.value},teardown:function(){var t,e,n,i,r;if(t=this.value,e=t._ractive,n=e.wrappers,i=e.instances,e.setting)return!1;if(r=n.indexOf(this),-1===r)throw new Error($g);if(n.splice(r,1),n.length){if(i[this.root._guid]-=1,!i[this.root._guid]){if(r=i.indexOf(this.root),-1===r)throw new Error($g);i.splice(r,1)}}else delete t._ractive,Qg.unpatch(this.value)}},$g="Something went wrong in a rather interesting way";var Zg,Hg,Kg=Bg,Gg=/^\s*[0-9]+\s*$/,Yg=function(t){return Gg.test(t)?[]:{}};try{Object.defineProperty({},"test",{value:0}),Zg={filter:function(t,e,n){var i,r;return e?(e=_(e),(i=n.viewmodel.wrapped[e.parent.str])&&!i.magic?!1:(r=n.viewmodel.get(e.parent),s(r)&&/^[0-9]+$/.test(e.lastKey)?!1:r&&("object"==typeof r||"function"==typeof r))):!1},wrap:function(t,e,n){return new Hg(t,e,n)}},Hg=function(t,e,n){var i,r,s;return n=_(n),this.magic=!0,this.ractive=t,this.keypath=n,this.value=e,this.prop=n.lastKey,i=n.parent,this.obj=i.isRoot?t.viewmodel.data:t.viewmodel.get(i),r=this.originalDescriptor=Object.getOwnPropertyDescriptor(this.obj,this.prop),r&&r.set&&(s=r.set._ractiveWrappers)?void(-1===s.indexOf(this)&&s.push(this)):void vs(this,e,r)},Hg.prototype={get:function(){return this.value},reset:function(t){return this.updating?void 0:(this.updating=!0,this.obj[this.prop]=t,mu.addRactive(this.ractive),this.ractive.viewmodel.mark(this.keypath,{keepExistingWrapper:!0}),this.updating=!1,!0)},set:function(t,e){this.updating||(this.obj[this.prop]||(this.updating=!0,this.obj[this.prop]=Yg(t),this.updating=!1),this.obj[this.prop][t]=e)},teardown:function(){var t,e,n,i,r;return this.updating?!1:(t=Object.getOwnPropertyDescriptor(this.obj,this.prop),e=t&&t.set,void(e&&(i=e._ractiveWrappers,r=i.indexOf(this),-1!==r&&i.splice(r,1),i.length||(n=this.obj[this.prop],Object.defineProperty(this.obj,this.prop,this.originalDescriptor||{writable:!0,enumerable:!0,configurable:!0}),this.obj[this.prop]=n))))}}}catch(_a){Zg=!1}var Jg,Xg,ty=Zg;ty&&(Jg={filter:function(t,e,n){return ty.filter(t,e,n)&&Kg.filter(t)},wrap:function(t,e,n){return new Xg(t,e,n)}},Xg=function(t,e,n){this.value=e,this.magic=!0,this.magicWrapper=ty.wrap(t,e,n),this.arrayWrapper=Kg.wrap(t,e,n)},Xg.prototype={get:function(){return this.value},teardown:function(){this.arrayWrapper.teardown(),this.magicWrapper.teardown()},reset:function(t){return this.magicWrapper.reset(t)}});var ey=Jg,ny=gs,iy={},ry=ws,sy=xs,oy=_s,ay=Ps,uy=Ts,hy=function(t,e){this.computation=t,this.viewmodel=t.viewmodel,this.ref=e,this.root=this.viewmodel.ractive,this.parentFragment=this.root.component&&this.root.component.parentFragment};hy.prototype={resolve:function(t){this.computation.softDeps.push(t),this.computation.unresolvedDeps[t.str]=null,this.viewmodel.register(t,this.computation,"computed")}};var cy=hy,ly=function(t,e){this.key=t,this.getter=e.getter,this.setter=e.setter,this.hardDeps=e.deps||[],this.softDeps=[],this.unresolvedDeps={},this.depValues={},this._dirty=this._firstRun=!0};ly.prototype={constructor:ly,init:function(t){var e,n=this;this.viewmodel=t,this.bypass=!0,e=t.get(this.key),t.clearCache(this.key.str),this.bypass=!1,this.setter&&void 0!==e&&this.set(e),this.hardDeps&&this.hardDeps.forEach(function(e){return t.register(e,n,"computed")})},invalidate:function(){this._dirty=!0},get:function(){var t,e,n=this,i=!1;if(this.getting){var r="The "+this.key.str+" computation indirectly called itself. This probably indicates a bug in the computation. It is commonly caused by `array.sort(...)` - if that's the case, clone the array first with `array.slice().sort(...)`";return p(r),this.value}if(this.getting=!0,this._dirty){if(this._firstRun||!this.hardDeps.length&&!this.softDeps.length?i=!0:[this.hardDeps,this.softDeps].forEach(function(t){var e,r,s;if(!i)for(s=t.length;s--;)if(e=t[s],r=n.viewmodel.get(e),!a(r,n.depValues[e.str]))return n.depValues[e.str]=r,void(i=!0)}),i){this.viewmodel.capture();try{this.value=this.getter()}catch(s){m('Failed to compute "%s"',this.key.str),f(s.stack||s),this.value=void 0}t=this.viewmodel.release(),e=this.updateDependencies(t),e&&[this.hardDeps,this.softDeps].forEach(function(t){t.forEach(function(t){n.depValues[t.str]=n.viewmodel.get(t)})})}this._dirty=!1}return this.getting=this._firstRun=!1,this.value},set:function(t){if(this.setting)return void(this.value=t);if(!this.setter)throw new Error("Computed properties without setters are read-only. (This may change in a future version of Ractive!)");this.setter(t)},updateDependencies:function(t){var e,n,i,r,s;for(n=this.softDeps,e=n.length;e--;)i=n[e],-1===t.indexOf(i)&&(r=!0,this.viewmodel.unregister(i,this,"computed"));for(e=t.length;e--;)i=t[e],-1!==n.indexOf(i)||this.hardDeps&&-1!==this.hardDeps.indexOf(i)||(r=!0,Fs(this.viewmodel,i)&&!this.unresolvedDeps[i.str]?(s=new cy(this,i.str),t.splice(e,1),this.unresolvedDeps[i.str]=s,mu.addUnresolved(s)):this.viewmodel.register(i,this,"computed"));return r&&(this.softDeps=t.slice()),r}};var fy=ly,dy=Rs,py={FAILED_LOOKUP:!0},my=js,vy={},gy=Ds,yy=Is,by=function(t,e){this.localKey=t,this.keypath=e.keypath,this.origin=e.origin,this.deps=[],this.unresolved=[],this.resolved=!1};by.prototype={forceResolution:function(){this.keypath=this.localKey,this.setup()},get:function(t,e){return this.resolved?this.origin.get(this.map(t),e):void 0},getValue:function(){return this.keypath?this.origin.get(this.keypath):void 0},initViewmodel:function(t){this.local=t,this.setup()},map:function(t){return void 0===typeof this.keypath?this.localKey:t.replace(this.localKey,this.keypath)},register:function(t,e,n){this.deps.push({keypath:t,dep:e,group:n}),this.resolved&&this.origin.register(this.map(t),e,n)},resolve:function(t){void 0!==this.keypath&&this.unbind(!0),this.keypath=t,this.setup()},set:function(t,e){this.resolved||this.forceResolution(),this.origin.set(this.map(t),e)},setup:function(){var t=this;void 0!==this.keypath&&(this.resolved=!0,this.deps.length&&(this.deps.forEach(function(e){var n=t.map(e.keypath);if(t.origin.register(n,e.dep,e.group),e.dep.setValue)e.dep.setValue(t.origin.get(n));else{if(!e.dep.invalidate)throw new Error("An unexpected error occurred. Please raise an issue at https://github.com/ractivejs/ractive/issues - thanks!");e.dep.invalidate()}}),this.origin.mark(this.keypath)))},setValue:function(t){if(!this.keypath)throw new Error("Mapping does not have keypath, cannot set value. Please raise an issue at https://github.com/ractivejs/ractive/issues - thanks!");this.origin.set(this.keypath,t)},unbind:function(t){var e=this;t||delete this.local.mappings[this.localKey],this.resolved&&(this.deps.forEach(function(t){e.origin.unregister(e.map(t.keypath),t.dep,t.group)}),this.tracker&&this.origin.unregister(this.keypath,this.tracker))},unregister:function(t,e,n){var i,r;if(this.resolved){for(i=this.deps,r=i.length;r--;)if(i[r].dep===e){i.splice(r,1);break}this.origin.unregister(this.map(t),e,n)}}};var wy=Ls,xy=function(t,e){var n,i,r,s;return n={},i=0,r=t.map(function(t,r){var o,a,u;a=i,u=e.length;do{if(o=e.indexOf(t,a),-1===o)return s=!0,-1;a=o+1}while(n[o]&&u>a);return o===i&&(i+=1),o!==r&&(s=!0),n[o]=!0,o})},ky=Vs,Ey={},_y=Ws,Ay=Bs,Sy=qs,Cy=$s,Oy=Zs,Py={implicit:!0},Ty={noCascade:!0},Fy=Ks,Ry=Gs,jy=function(t){var e,n,i=t.adapt,r=t.data,s=t.ractive,o=t.computed,a=t.mappings;this.ractive=s,this.adaptors=i,this.onchange=t.onchange,this.cache={},this.cacheMap=wa(null),this.deps={computed:wa(null),"default":wa(null)},this.depsMap={computed:wa(null),"default":wa(null)},this.patternObservers=[],this.specials=wa(null),this.wrapped=wa(null),this.computations=wa(null),this.captureGroups=[],this.unresolvedImplicitDependencies=[],this.changes=[],this.implicitChanges={},this.noCascade={},this.data=r,this.mappings=wa(null);for(e in a)this.map(_(e),a[e]);if(r)for(e in r)(n=this.mappings[e])&&void 0===n.getValue()&&n.setValue(r[e]);for(e in o)a&&e in a&&l("Cannot map to a computed property ('%s')",e),this.compute(_(e),o[e]);this.ready=!0};jy.prototype={adapt:ny,applyChanges:oy,capture:ay,clearCache:uy,compute:dy,get:my,init:gy,map:yy,mark:wy,merge:ky,register:_y,release:Ay,reset:Sy,set:Cy,smartUpdate:Oy,teardown:Fy,unregister:Ry};var Ny=jy;Js.prototype={constructor:Js,begin:function(t){this.inProcess[t._guid]=!0},end:function(t){var e=t.parent;e&&this.inProcess[e._guid]?Xs(this.queue,e).push(t):to(this,t),delete this.inProcess[t._guid]}};var Dy=Js,Iy=eo,Ly=/\$\{([^\}]+)\}/g,Vy=new nu("construct"),My=new nu("config"),Uy=new Dy("init"),Wy=0,zy=["adaptors","components","decorators","easing","events","interpolators","partials","transitions"],By=so,qy=co;co.prototype={bubble:function(){this.dirty||(this.dirty=!0,mu.addView(this))},update:function(){this.callback(this.fragment.getValue()),this.dirty=!1},rebind:function(t,e){this.fragment.rebind(t,e)},unbind:function(){this.fragment.unbind()}};var $y=function(t,e,n,r,o){var a,u,h,c,l,f,d={},p={},v={},g=[];for(u=t.parentFragment,h=t.root,o=o||{},i(d,o),o.content=r||[],d[""]=o.content,e.defaults.el&&m("The <%s/> component has a default `el` property; it has been disregarded",t.name),c=u;c;){if(c.owner.type===oc){l=c.owner.container;break}c=c.parent}return n&&Object.keys(n).forEach(function(e){var i,r,o=n[e];if("string"==typeof o)i=Af(o),p[e]=i?i.value:o;else if(0===o)p[e]=!0;else{if(!s(o))throw new Error("erm wut");fo(o)?(v[e]={origin:t.root.viewmodel,keypath:void 0},r=lo(t,o[0],function(t){t.isSpecial?f?a.set(e,t.value):(p[e]=t.value,delete v[e]):f?a.viewmodel.mappings[e].resolve(t):v[e].keypath=t})):r=new qy(t,o,function(t){f?a.set(e,t):p[e]=t}),g.push(r)}}),a=wa(e.prototype),By(a,{el:null,append:!0,data:p,partials:o,magic:h.magic||e.defaults.magic,modifyArrays:h.modifyArrays,adapt:h.adapt},{parent:h,component:t,container:l,mappings:v,inlinePartials:d,cssIds:u.cssIds}),f=!0,t.resolvers=g,a},Qy=po,Zy=function(t){var e,n;for(e=t.root;e;)(n=e._liveComponentQueries["_"+t.name])&&n.push(t.instance),e=e.parent},Hy=vo,Ky=go,Gy=yo,Yy=bo,Jy=wo,Xy=new nu("teardown"),tb=ko,eb=function(t,e){this.init(t,e)};eb.prototype={detach:Rg,find:Ng,findAll:Dg,findAllComponents:Ig,findComponent:Lg,findNextNode:Vg,firstNode:Mg,init:Hy,rebind:Ky,render:Gy,toString:Yy,unbind:Jy,unrender:tb};var nb=eb,ib=function(t){this.type=ec,this.value=t.template.c};ib.prototype={detach:Rd,firstNode:function(){return this.node},render:function(){return this.node||(this.node=document.createComment(this.value)),
this.node},toString:function(){return"<!--"+this.value+"-->"},unrender:function(t){t&&this.node.parentNode.removeChild(this.node)}};var rb=ib,sb=function(t){var e,n;this.type=oc,this.container=e=t.parentFragment.root,this.component=n=e.component,this.container=e,this.containerFragment=t.parentFragment,this.parentFragment=n.parentFragment;var i=this.name=t.template.n||"",r=e._inlinePartials[i];r||(m('Could not find template for partial "'+i+'"',{ractive:t.root}),r=[]),this.fragment=new yb({owner:this,root:e.parent,template:r,pElement:this.containerFragment.pElement}),s(n.yielders[i])?n.yielders[i].push(this):n.yielders[i]=[this],mu.scheduleTask(function(){if(n.yielders[i].length>1)throw new Error("A component template can only have one {{yield"+(i?" "+i:"")+"}} declaration at a time")})};sb.prototype={detach:function(){return this.fragment.detach()},find:function(t){return this.fragment.find(t)},findAll:function(t,e){return this.fragment.findAll(t,e)},findComponent:function(t){return this.fragment.findComponent(t)},findAllComponents:function(t,e){return this.fragment.findAllComponents(t,e)},findNextNode:function(){return this.containerFragment.findNextNode(this)},firstNode:function(){return this.fragment.firstNode()},getValue:function(t){return this.fragment.getValue(t)},render:function(){return this.fragment.render()},unbind:function(){this.fragment.unbind()},unrender:function(t){this.fragment.unrender(t),I(this.component.yielders[this.name],this)},rebind:function(t,e){this.fragment.rebind(t,e)},toString:function(){return this.fragment.toString()}};var ob=sb,ab=function(t){this.declaration=t.template.a};ab.prototype={init:Fa,render:Fa,unrender:Fa,teardown:Fa,toString:function(){return"<!DOCTYPE"+this.declaration+">"}};var ub=ab,hb=Eo,cb=Ao,lb=So,fb=Co,db=To,pb=Ro,mb=function(t){this.init(t)};mb.prototype={bubble:wd,detach:xd,find:kd,findAll:Ed,findAllComponents:_d,findComponent:Ad,findNextNode:Sd,firstNode:Cd,getArgsList:Pd,getNode:Td,getValue:Fd,init:hb,rebind:cb,registerIndexRef:function(t){var e=this.registeredIndexRefs;-1===e.indexOf(t)&&e.push(t)},render:lb,toString:fb,unbind:db,unregisterIndexRef:function(t){var e=this.registeredIndexRefs;e.splice(e.indexOf(t),1)},unrender:pb};var vb,gb,yb=mb,bb=jo,wb=["template","partials","components","decorators","events"],xb=new nu("reset"),kb=function(t,e){function n(e,i,r){r&&r.partials[t]||e.forEach(function(e){e.type===tc&&e.getPartialName()===t&&i.push(e),e.fragment&&n(e.fragment.items,i,r),s(e.fragments)?n(e.fragments,i,r):s(e.items)?n(e.items,i,r):e.type===sc&&e.instance&&n(e.instance.fragment.items,i,e.instance),e.type===Xh&&(s(e.attributes)&&n(e.attributes,i,r),s(e.conditionalAttributes)&&n(e.conditionalAttributes,i,r))})}var i,r=[];return n(this.fragment.items,r),this.partials[t]=e,i=mu.start(this,!0),r.forEach(function(e){e.value=void 0,e.setValue(t)}),mu.end(),i},Eb=No,_b=gh("reverse"),Ab=Do,Sb=gh("shift"),Cb=gh("sort"),Ob=gh("splice"),Pb=Lo,Tb=Vo,Fb=new nu("teardown"),Rb=Uo,jb=Wo,Nb=zo,Db=new nu("unrender"),Ib=gh("unshift"),Lb=Bo,Vb=new nu("update"),Mb=qo,Ub={add:Ga,animate:xu,detach:Eu,find:Au,findAll:Nu,findAllComponents:Du,findComponent:Iu,findContainer:Lu,findParent:Vu,fire:zu,get:Bu,insert:$u,merge:Zu,observe:uh,observeOnce:hh,off:fh,on:dh,once:ph,pop:yh,push:bh,render:Sh,reset:bb,resetPartial:kb,resetTemplate:Eb,reverse:_b,set:Ab,shift:Sb,sort:Cb,splice:Ob,subtract:Pb,teardown:Tb,toggle:Rb,toHTML:jb,toHtml:jb,unrender:Nb,unshift:Ib,update:Lb,updateModel:Mb},Wb=function(t,e,n){return n||Qo(t,e)?function(){var n,i="_super"in this,r=this._super;return this._super=e,n=t.apply(this,arguments),i&&(this._super=r),n}:t},zb=Zo,Bb=Yo,qb=function(t){var e,n,i={};return t&&(e=t._ractive)?(i.ractive=e.root,i.keypath=e.keypath.str,i.index={},(n=qd(e.proxy.parentFragment))&&(i.index=qd.resolve(n)),i):i};vb=function(t){return this instanceof vb?void By(this,t):new vb(t)},gb={DEBUG:{writable:!0,value:!0},DEBUG_PROMISES:{writable:!0,value:!0},extend:{value:Bb},getNodeInfo:{value:qb},parse:{value:Kf},Promise:{value:ou},svg:{value:ra},magic:{value:na},VERSION:{value:"0.7.3"},adaptors:{writable:!0,value:{}},components:{writable:!0,value:{}},decorators:{writable:!0,value:{}},easing:{writable:!0,value:ha},events:{writable:!0,value:{}},interpolators:{writable:!0,value:Ma},partials:{writable:!0,value:{}},transitions:{writable:!0,value:{}}},ka(vb,gb),vb.prototype=i(Ub,ua),vb.prototype.constructor=vb,vb.defaults=vb.prototype;var $b="function";if(typeof Date.now!==$b||typeof String.prototype.trim!==$b||typeof Object.keys!==$b||typeof Array.prototype.indexOf!==$b||typeof Array.prototype.forEach!==$b||typeof Array.prototype.map!==$b||typeof Array.prototype.filter!==$b||"undefined"!=typeof window&&typeof window.addEventListener!==$b)throw new Error("It looks like you're attempting to use Ractive.js in an older browser. You'll need to use one of the 'legacy builds' in order to continue - see http://docs.ractivejs.org/latest/legacy-builds for more information.");var Qb=vb;return Qb});


},{}],82:[function(require,module,exports){
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var constants = {};

constants.BINDING_TYPE = { FIREBASE: 'FIREBASE', DOM: 'DOM' };
constants.BINDING_TARGET = _lodash2['default'].extend({ ANY: 'ANY' }, constants.BINDING_TYPE);
constants.CHANGE_ORIGIN = { LOCAL: 'LOCAL', FOREIGN: 'FOREIGN' };
constants.FIREBASE_EVENT = {
    CHILD_ADDED: 'child_added',
    CHILD_REMOVED: 'child_removed',
    CHILD_CHANGED: 'child_changed'
};

constants.CHANGE_TYPE = { ADD: 'add', DELETE: 'delete', UPDATE: 'update' }; //Object.observe

exports['default'] = constants;
module.exports = exports['default'];

},{"babel-runtime/helpers/interop-require-default":16,"lodash":78}],83:[function(require,module,exports){
'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _firesyncObjectJs = require('./firesyncObject.js');

var _firesyncArrayJs = require('./firesyncArray.js');

/**
 * @class firesync
 * @classdesc The entry point of firesync.
 * @global
 */

/**
 * Creates a {@link FiresyncObject} or {@link FiresyncArray} from the specified ref depending on the underlying value.
 * The returned object is guaranteed to be loaded.
 * @memberof firesync
 * @param {FirebaseRef} ref from a specified ref
 * @returns {Promise}
 * @example firesync.create(ref).then(function(firesyncObj) {}); //if ref's underlying value is array a FiresyncArray is returned
 * otherwise a FiresyncObject
 */
function create(ref) {
    return new _Promise(function (resolve) {
        ref.once('value', function (snap) {
            var val = snap.val();

            var obj = null;

            if (Array.isArray(val)) {
                obj = new _firesyncArrayJs.FiresyncArray(ref);
            } else {
                obj = new _firesyncObjectJs.FiresyncObject(ref);
            }

            obj.once('loaded', function () {
                resolve(obj);
            });
        });
    });
}

/**
 * Returns a non-synchronized array or an object of {@link FiresyncObject} or {@link FiresyncArray} objects.
 * The objects are guaranteed to be loaded.
 * @memberof firesync
 * @param {FirebaseRef} ref from a specified ref
 * @returns {Promise}
 * @example firesync.map(ref).then(function(objOrArr){});
 */
function map(ref) {
    return new _Promise(function (resolve) {
        ref.once('value', function (snap) {
            var val = snap.val();

            if (val) {
                var promises = _Object$keys(val).map(function (k) {
                    var v = val[k];
                    var childRef = ref.child(k);

                    return new _Promise(function (r) {
                        create(childRef).then(function (item) {
                            r({
                                item: item,
                                key: k
                            });
                        });
                    });
                });

                return _Promise.all(promises).then(function (items) {
                    var isArray = Array.isArray(val);
                    var result = isArray ? [] : {};

                    items.forEach(function (i) {
                        var item = i.item;
                        var key = i.key;

                        if (isArray) {
                            result.push(item);
                        } else {
                            result[key] = item;
                        }
                    });

                    return resolve(result);
                });
            }

            return resolve([]);
        });
    });
}

exports.FiresyncObject = _firesyncObjectJs.FiresyncObject;
exports.FiresyncArray = _firesyncArrayJs.FiresyncArray;
exports.create = create;
exports.map = map;

},{"./firesyncArray.js":84,"./firesyncObject.js":87,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":8}],84:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _firesyncBaseJs = require('./firesyncBase.js');

var _firesyncObjectJs = require('./firesyncObject.js');

var _constantsJs = require('./constants.js');

var constants = _interopRequireWildcard(_constantsJs);

var _es6Mixins = require('es6-mixins');

var _es6Mixins2 = _interopRequireDefault(_es6Mixins);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * @class FiresyncArray
 * @classdesc An array which keeps its values synchronized with the remote.
 * One should use the {@link FiresyncArray} methods to manipulate the values.
 * @protected
 * @extends FiresyncBase
 * @example new firesync.FiresyncArray(ref);
 * @memberof firesync
 */

var FiresyncArray = (function (_FiresyncBase) {
    function FiresyncArray(ref) {
        _classCallCheck(this, FiresyncArray);

        _get(Object.getPrototypeOf(FiresyncArray.prototype), 'constructor', this).call(this, ref);

        this.$$.indeces = new _Map();
        this.$$.keys = new _Map();
    }

    _inherits(FiresyncArray, _FiresyncBase);

    _createClass(FiresyncArray, [{
        key: 'key',
        value: function key(index) {
            if (typeof index !== 'number') {
                index = this.indexOf(index);
            }

            return this.$$.keys.get(index + 1);
        }
    }, {
        key: 'update',
        value: function update(value, identifier) {
            var index = this._getIndex(identifier);
            var key = this.key(index);
            var val = this[index];

            if (typeof val === 'number' || typeof val === 'string') {
                val = this[index] = value;
            } else {
                _lodash2['default'].extend(val, value);
            }

            _get(Object.getPrototypeOf(FiresyncArray.prototype), '_fireChanged', this).call(this, [{
                name: 'value',
                object: val,
                type: constants.CHANGE_TYPE.UPDATE
            }]);

            return _get(Object.getPrototypeOf(FiresyncArray.prototype), '_updateBindings', this).call(this, {
                property: key,
                value: val,
                type: constants.CHANGE_TYPE.UPDATE
            }, constants.CHANGE_ORIGIN.LOCAL, constants.BINDING_TARGET.FIREBASE);
        }
    }, {
        key: 'add',
        value: function add(value) {
            var key = arguments.length <= 1 || arguments[1] === undefined ? this.$$.ref.push().key() : arguments[1];
            var index = arguments.length <= 2 || arguments[2] === undefined ? this.$$.indeces.size + 1 : arguments[2];

            this.splice(index, 0, value);
            this.$$.indeces.set(key, index);
            this.$$.keys.set(index, key);

            _get(Object.getPrototypeOf(FiresyncArray.prototype), '_fireChanged', this).call(this, [{
                name: 'length',
                object: value,
                type: constants.CHANGE_TYPE.ADD
            }]);

            return _get(Object.getPrototypeOf(FiresyncArray.prototype), '_updateBindings', this).call(this, {
                property: key,
                value: value,
                type: constants.CHANGE_TYPE.ADD
            }, constants.CHANGE_ORIGIN.LOCAL, constants.BINDING_TARGET.FIREBASE);
        }
    }, {
        key: 'remove',
        value: function remove(identifier) {
            //number

            var index = this._getIndex(identifier);
            var key = this.key(index);
            var oldValue = this.splice(index, 1);
            this.$$.indeces['delete'](key);
            this.$$.keys['delete'](index);

            _get(Object.getPrototypeOf(FiresyncArray.prototype), '_fireChanged', this).call(this, [{
                name: 'length',
                object: null,
                type: constants.CHANGE_TYPE.DELETE,
                oldValue: oldValue
            }]);

            return _get(Object.getPrototypeOf(FiresyncArray.prototype), '_updateBindings', this).call(this, {
                property: key,
                type: constants.CHANGE_TYPE.DELETE
            }, constants.CHANGE_ORIGIN.LOCAL, constants.BINDING_TARGET.FIREBASE);
        }
    }, {
        key: '_getIndex',
        value: function _getIndex(identifier) {
            var index = identifier;

            if (typeof identifier === 'string') {
                index = this.$$.indeces.get(identifier);
            }

            if (typeof identifier === 'object' || index === undefined) {
                index = this.indexOf(identifier);
            }

            return index;
        }
    }, {
        key: '_attachBindings',
        value: function _attachBindings(firebaseBinding) {
            var _this = this;

            firebaseBinding.updateLocal(function (property, value, type, additionalData) {
                return new _Promise(function (resolve) {
                    var prevChild = additionalData.prevChild;
                    var child = prevChild || property;
                    var index = _this.$$.indeces.get(child) || 0;

                    switch (type) {
                        case constants.CHANGE_TYPE.UPDATE:
                            {
                                _this[index] = value;
                                _this.$$.indeces.set(property, index);
                                _this.$$.keys.set(index, property);
                                break;
                            }
                        case constants.CHANGE_TYPE.ADD:
                            {
                                _this.add(value, ++index, property);
                                break;
                            }
                        case constants.CHANGE_TYPE.DELETE:
                            {
                                _this.remove(index);
                                break;
                            }
                        default:
                            break;
                    }

                    resolve();
                });
            });
        }
    }]);

    return FiresyncArray;
})(_firesyncBaseJs.FiresyncBase);

(0, _es6Mixins2['default'])(Array, FiresyncArray.prototype, { warn: false });

exports.FiresyncArray = FiresyncArray;

},{"./constants.js":82,"./firesyncBase.js":85,"./firesyncObject.js":87,"babel-runtime/core-js/map":3,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/interop-require-default":16,"babel-runtime/helpers/interop-require-wildcard":17,"es6-mixins":76,"lodash":78}],85:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _Set = require('babel-runtime/core-js/set')['default'];

var _Map = require('babel-runtime/core-js/map')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _eventemitter2 = require('eventemitter2');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _queue = require('queue');

var _queue2 = _interopRequireDefault(_queue);

var _ractiveRactiveMin = require('ractive/ractive.min');

var _ractiveRactiveMin2 = _interopRequireDefault(_ractiveRactiveMin);

var _firesyncBindingJs = require('./firesyncBinding.js');

var _constantsJs = require('./constants.js');

var constants = _interopRequireWildcard(_constantsJs);

/**
 * FirebaseRef object
 * @external FirebaseRef
 * @see {@link https://www.firebase.com/docs/web/api/firebase/child.html}
 */

/**
 * @class FiresyncBase
 * @classdesc Base class for all Firesync objects. Any change made to this object will
 * affect the remote data and any change made on the remote data will affect this object.
 * Cannot be accessed directly
 * @private
 * @fires FiresyncBase#loaded
 * @fires FiresyncBase#changed
 * @fires FiresyncBase#synced
 * @param {FirebaseRef} Ref The ref to which to attach the object to.
 */

var FiresyncBase = (function (_EventEmitter2) {
    function FiresyncBase(ref) {
        _classCallCheck(this, FiresyncBase);

        _get(Object.getPrototypeOf(FiresyncBase.prototype), 'constructor', this).call(this);

        this.iterator = this; //for mustache templates iteration

        this.$$ = {};
        this.$$.ref = ref;
        this.$$.loaded = false;
        this.$$.bindings = [];

        this.$$.FILTERED_PROPERTIES = new _Set(['$$', '_events', 'newListener', 'event']);

        var firebaseBinding = this._attach();
        this._attachBindings(firebaseBinding);
    }

    _inherits(FiresyncBase, _EventEmitter2);

    _createClass(FiresyncBase, [{
        key: 'loaded',

        /**
         * Indicates whether the object has loaded its data from Firebase.
         * @returns {boolean}
         */
        value: function loaded() {
            return this.$$.loaded;
        }
    }, {
        key: 'ref',

        /**
         * Returns the ref set in the constructor
         * @returns {FirebaseRef}
         */
        value: function ref() {
            return this.$$.ref;
        }
    }, {
        key: 'detach',

        /**
         * Detaches from the subscribed events to the {@link FirebaseRef}
         */
        value: function detach() {
            this.$$.bindings.forEach(function (binding) {
                return binding.detach();
            });
            this.$$.bindings = [];
        }
    }, {
        key: 'bindTo',
        value: function bindTo(settings) {
            var _this = this;

            _lodash2['default'].extend(settings, {
                data: this
            });

            var ractive = new _ractiveRactiveMin2['default'](settings);
            var reactiveListeners = new _Map();

            var binding = new _firesyncBindingJs.FiresyncBinding(constants.BINDING_TYPE.DOM, { ractive: ractive, settings: settings }, this);
            binding.updateLocal(function (property, value) {
                return new _Promise(function (resolve) {
                    _this[property] = value;
                    resolve();
                });
            });

            binding.updateForeign(function (property, value) {
                return new _Promise(function (resolve) {
                    ractive.set(property, value);
                    resolve();
                });
            });

            binding.detach(function () {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _getIterator(reactiveListeners.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var observer = _step.value;

                        observer.cancel();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });

            var applyObserve = function applyObserve(value, key) {
                var initialObserve = true;
                var observer = ractive.observe(key, function (newValue) {
                    if (initialObserve) {
                        return initialObserve = false;
                    }

                    binding.updateLocal(key, newValue);
                });

                if (!reactiveListeners.get(key)) {
                    reactiveListeners.set(key, observer);
                }
            };

            _lodash2['default'].each(settings.data, applyObserve);
            this._addBinding(binding);
            return this;
        }
    }, {
        key: 'set',

        /**
         * Applies a value to the object.
         * @param {object} val
         * @example firebaseObject.set({value: 1});
         */
        value: function set(val) {
            return this._setLocal(val);
        }
    }, {
        key: 'setRemote',
        value: function setRemote(val) {
            return this._setRemote(val);
        }
    }, {
        key: 'update',
        value: function update(val) {
            return this._updateLocal(val);
        }
    }, {
        key: 'updateRemote',
        value: function updateRemote(val) {
            return this._updateRemote(val);
        }
    }, {
        key: '_addBinding',
        value: function _addBinding(binding) {
            this.$$.bindings.push(binding);
            return binding;
        }
    }, {
        key: '_attachBindings',
        value: function _attachBindings(binding) {
            throw new Error('_attachBindings not implemented');
        }
    }, {
        key: '_attach',
        value: function _attach() {
            var _this2 = this;

            this.$$.ref.once('value', function () {
                _this2.$$.loaded = true;
                _this2._fireLoaded();
            });

            var firebaseBinding = new _firesyncBindingJs.FiresyncBinding(constants.BINDING_TYPE.FIREBASE, { ref: this.$$.ref }, this);
            var handlersMap = new _Map();

            firebaseBinding.updateForeign(function (property, value, type) {
                return new _Promise(function (resolve) {
                    var updateVal = {};
                    switch (type) {
                        case constants.CHANGE_TYPE.UPDATE:
                        case constants.CHANGE_TYPE.ADD:
                            {
                                updateVal[property] = value;
                                break;
                            }
                        case constants.CHANGE_TYPE.DELETE:
                            {
                                updateVal[property] = null;
                                break;
                            }
                        default:
                            break;
                    }

                    _this2._updateRemote(updateVal, resolve);
                });
            });

            firebaseBinding.detach(function () {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = _getIterator(handlersMap.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _step2$value = _slicedToArray(_step2.value, 2);

                        var event = _step2$value[0];
                        var handler = _step2$value[1];

                        _this2.$$.ref.off(event, handler);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                            _iterator2['return']();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            });

            [constants.FIREBASE_EVENT.CHILD_ADDED, constants.FIREBASE_EVENT.CHILD_REMOVED, constants.FIREBASE_EVENT.CHILD_CHANGED].forEach(function (event) {
                var handler = function handler(snap, prevChild) {
                    var property = snap.key();
                    var value = snap.val();
                    var type = undefined;

                    switch (event) {
                        case constants.FIREBASE_EVENT.CHILD_ADDED:
                            {
                                type = constants.CHANGE_TYPE.ADD;
                                break;
                            }
                        case constants.FIREBASE_EVENT.CHILD_REMOVED:
                            {
                                type = constants.CHANGE_TYPE.DELETE;
                                break;
                            }
                        case constants.FIREBASE_EVENT.CHILD_CHANGED:
                            {
                                type = constants.CHANGE_TYPE.UPDATE;
                                break;
                            }
                        default:
                            break;
                    }

                    _this2._updateBindings({ property: property, value: value, type: type, prevChild: prevChild }, constants.CHANGE_ORIGIN.FOREIGN);
                };

                handlersMap.set(event, handler);
                _this2.$$.ref.on(event, handler);
            });

            return this._addBinding(firebaseBinding);
        }
    }, {
        key: '_updateBindings',
        value: function _updateBindings(changes, origin) {
            var _this3 = this;

            var target = arguments.length <= 2 || arguments[2] === undefined ? constants.BINDING_TARGET.ANY : arguments[2];

            return new _Promise(function (resolve) {
                var bindingQueue = (0, _queue2['default'])();

                _this3.$$.bindings.forEach(function (binding) {
                    var queuedBinding = function queuedBinding(cb) {
                        if (binding.inProgress && binding.origin !== origin) {
                            return cb();
                        }

                        var bindingResolvedPromises = [];

                        if (binding.type === target || target === constants.BINDING_TARGET.ANY) {
                            binding.begin(origin);
                            changes = Array.isArray(changes) ? changes : [changes];
                            changes.forEach(function (change) {
                                var property = change.property;
                                var value = change.value;
                                var type = change.type;
                                var additionalData = {};

                                additionalData.prevChild = change.prevChild;
                                additionalData.origin = origin;
                                additionalData.target = target;

                                if (origin === constants.CHANGE_ORIGIN.LOCAL) {
                                    bindingResolvedPromises.push(binding.updateForeign(property, value, type, additionalData));
                                } else {
                                    bindingResolvedPromises.push(binding.updateLocal(property, value, type, additionalData));
                                }
                            });
                        }

                        _Promise.all(bindingResolvedPromises).then(function () {
                            binding.end();
                            cb();
                        });
                    };

                    bindingQueue.push(queuedBinding);
                });

                bindingQueue.start(function () {
                    resolve();
                });
            });
        }
    }, {
        key: '_fireChanged',

        /**
         * Fired the local object changes, regardless whether it is a result of direct local change
         * or remote change.
         * @event FiresyncBase#changed
         * @example firesyncObject.on('changed', function(){});
         */
        value: function _fireChanged(args) {
            this.emit('changed', args);
        }
    }, {
        key: '_fireLoaded',

        /**
         * Fired when the initial value of the object is loaded from the remote.
         * @event FiresyncBase#loaded
         * @example firesyncObject.on('loaded', function(){});
         */
        value: function _fireLoaded() {
            var _this4 = this;

            var emited = this.emit('loaded');
            if (!emited) {
                (function () {
                    var newListenerCb = function newListenerCb(ev) {
                        if (ev === 'loaded') {
                            _this4.off('newListener', newListenerCb);
                            setTimeout(function () {
                                _this4.emit('loaded');
                            }, 20);
                        }
                    };

                    _this4.on('newListener', newListenerCb);
                })();
            }
        }
    }, {
        key: '_fireSynced',

        /**
         * Fired when the local object's value is sucesfully set to the remote.
         * @param {Error} err Synchronization error
         * @event FiresyncBase#synced
         * @example firesyncObject.on('synced', function(err){});
         */
        value: function _fireSynced(err) {
            this.emit('synced', err);
        }
    }, {
        key: '_enumerate',
        value: _regeneratorRuntime.mark(function _enumerate() {
            var obj = arguments.length <= 0 || arguments[0] === undefined ? this : arguments[0];
            var i;
            return _regeneratorRuntime.wrap(function _enumerate$(context$2$0) {
                while (1) switch (context$2$0.prev = context$2$0.next) {
                    case 0:
                        context$2$0.t0 = _regeneratorRuntime.keys(obj);

                    case 1:
                        if ((context$2$0.t1 = context$2$0.t0()).done) {
                            context$2$0.next = 8;
                            break;
                        }

                        i = context$2$0.t1.value;

                        if (!(obj.hasOwnProperty(i) && !this.$$.FILTERED_PROPERTIES.has(i))) {
                            context$2$0.next = 6;
                            break;
                        }

                        context$2$0.next = 6;
                        return i;

                    case 6:
                        context$2$0.next = 1;
                        break;

                    case 8:
                    case 'end':
                        return context$2$0.stop();
                }
            }, _enumerate, this);
        })
    }, {
        key: '_setRemoteCore',
        value: function _setRemoteCore() {
            var _this5 = this;

            return new _Promise(function (resolve) {
                _this5._setRemote(function (err) {
                    _this5._fireSynced(err);
                    resolve();
                });
            });
        }
    }, {
        key: '_setRemote',
        value: function _setRemote(cb, val) {
            this.$$.ref.set(val, cb);
        }
    }, {
        key: '_updateRemote',
        value: function _updateRemote(val, cb) {
            var _this6 = this;

            this.$$.ref.update(val, function (err) {
                _this6._fireSynced(err);
                cb();
            });
        }
    }, {
        key: '_updateLocal',
        value: function _updateLocal(obj) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = _getIterator(this._enumerate(obj)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var i = _step3.value;

                    this[i] = obj[i];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }, {
        key: '_setLocal',
        value: function _setLocal(obj) {
            this._clear();
            this._updateLocal(obj);
        }
    }, {
        key: '_clear',
        value: function _clear() {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = _getIterator(this._enumerate()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var i = _step4.value;

                    delete this[i];
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                        _iterator4['return']();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    }]);

    return FiresyncBase;
})(_eventemitter2.EventEmitter2);

exports.FiresyncBase = FiresyncBase;

},{"./constants.js":82,"./firesyncBinding.js":86,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/map":3,"babel-runtime/core-js/promise":8,"babel-runtime/core-js/set":9,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/interop-require-default":16,"babel-runtime/helpers/interop-require-wildcard":17,"babel-runtime/helpers/sliced-to-array":18,"babel-runtime/regenerator":72,"eventemitter2":77,"lodash":78,"queue":79,"ractive/ractive.min":81}],86:[function(require,module,exports){
'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _constantsJs = require('./constants.js');

var constants = _interopRequireWildcard(_constantsJs);

var FiresyncBinding = (function () {
    function FiresyncBinding(type, data, context) {
        _classCallCheck(this, FiresyncBinding);

        this.type = type;
        this.data = data;
        this._updateForeign = null;
        this._detach = null;

        this._updateLocal = (function (property, value, type) {
            var _this = this;

            return new _Promise(function (resolve) {
                switch (type) {
                    case constants.CHANGE_TYPE.UPDATE:
                    case constants.CHANGE_TYPE.ADD:
                        {
                            _this[property] = value;
                            break;
                        }
                    case constants.CHANGE_TYPE.DELETE:
                        {
                            delete _this[property];
                            break;
                        }
                    default:
                        break;
                }
            });
        }).bind(context);

        this.inProgress = false;
        this.origin = null;
    }

    _createClass(FiresyncBinding, [{
        key: 'updateLocal',
        value: function updateLocal(cb) {
            if (FiresyncBinding._isOnlyCallback(arguments)) {
                return this._updateLocal = cb;
            }

            this._updateLocal.apply(null, arguments);
        }
    }, {
        key: 'updateForeign',
        value: function updateForeign(cb) {
            if (FiresyncBinding._isOnlyCallback(arguments)) {
                return this._updateForeign = cb;
            }

            this._updateForeign.apply(null, arguments);
        }
    }, {
        key: 'detach',
        value: function detach(cb) {
            if (FiresyncBinding._isOnlyCallback(arguments)) {
                return this._detach = cb;
            }

            this._detach.apply(null, arguments);
        }
    }, {
        key: 'begin',
        value: function begin(origin) {
            this.inProgress = true;
            this.origin = origin;
        }
    }, {
        key: 'end',
        value: function end() {
            this.inProgress = false;
            this.origin = null;
        }
    }], [{
        key: '_isOnlyCallback',
        value: function _isOnlyCallback(args) {
            return args.length === 1 && typeof args[0] === 'function';
        }
    }]);

    return FiresyncBinding;
})();

exports.FiresyncBinding = FiresyncBinding;

},{"./constants.js":82,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-wildcard":17}],87:[function(require,module,exports){
'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _firesyncBaseJs = require('./firesyncBase.js');

var _constantsJs = require('./constants.js');

var constants = _interopRequireWildcard(_constantsJs);

/**
 * @class FiresyncObject
 * @classdesc An object which keeps its values synchronized with the remote.
 * @protected
 * @extends FiresyncBase
 * @memberof firesync
 */

var FiresyncObject = (function (_FiresyncBase) {
    function FiresyncObject(ref) {
        _classCallCheck(this, FiresyncObject);

        _get(Object.getPrototypeOf(FiresyncObject.prototype), 'constructor', this).call(this, ref);
    }

    _inherits(FiresyncObject, _FiresyncBase);

    _createClass(FiresyncObject, [{
        key: '_attachBindings',
        value: function _attachBindings(firebaseBinding) {
            var _this = this;

            Object.observe(this, function (args) {
                var filteredArgs = args.filter(function (arg) {
                    var result = _this.$$.FILTERED_PROPERTIES.has(arg.name);
                    return !result;
                });

                if (filteredArgs.length) {
                    _this._fireChanged(args);
                    var updateArgs = filteredArgs.map(function (arg) {
                        return {
                            property: arg.name,
                            value: _this[arg.name],
                            type: arg.type,
                            oldValue: arg.oldValue
                        };
                    });

                    _this._updateBindings(updateArgs, constants.CHANGE_ORIGIN.LOCAL);
                }
            });
        }
    }]);

    return FiresyncObject;
})(_firesyncBaseJs.FiresyncBase);

exports.FiresyncObject = FiresyncObject;

},{"./constants.js":82,"./firesyncBase.js":85,"babel-runtime/helpers/class-call-check":12,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/interop-require-wildcard":17}]},{},[83])(83)
});
//# sourceMappingURL=firesync.js.map
