(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global['js-utils'] = {})));
}(this, (function (exports) { 'use strict';

  function setItem (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
  }

  // 这里默认从json转换了
  function getItem (key) {
    var item = window.localStorage.getItem(key);
    if (_isJSON(item)) {
      item = JSON.parse(item);
    }
    return item
  }

  function removeItem (key) {
    var item = window.localStorage.getItem(key);
    if (item) {
      window.localStorage.removeItem(key);
      return true
    } else {
      return false
    }
  }

  function clear () {
    return window.localStorage.clear()
  }

  function getLength () {
    return window.localStorage.length
  }

  // 判断是否是JSON，大概判断而已
  function _isJSON (item) {
    return /(\[|\{).*(\]|\})/.test(item)
  }

  var storage = {
    setItem,
    getItem,
    removeItem,
    clear,
    getLength
  };

  var index = {
    storage
  };

  exports.storage = storage;
  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
