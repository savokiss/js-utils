'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function setItem(key, value) {
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}

// 这里默认从json转换了
function getItem(key) {
  var item = window.localStorage.getItem(key);
  if (_isJSON(item)) {
    item = JSON.parse(item);
  }
  return item;
}

function removeItem(key) {
  var item = window.localStorage.getItem(key);
  if (item) {
    window.localStorage.removeItem(key);
    return true;
  } else {
    return false;
  }
}

function clear() {
  return window.localStorage.clear();
}

function getLength() {
  return window.localStorage.length;
}

// 判断是否是JSON，大概判断而已
function _isJSON(item) {
  return (/(\[|\{).*(\]|\})/.test(item)
  );
}

var storage = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear,
  getLength: getLength
};

/**
 * 二维矩阵工具类
 */
var Matrix = function () {
  function Matrix(data, rows, cols) {
    classCallCheck(this, Matrix);
    this.data = [];
    this.rows = 0;
    this.cols = 0;
    this.model = [[]];

    this.data = data;
    this.rows = rows;
    this.cols = cols;
    this.model = this._init(data, rows, cols);
  }

  /**
   * 根据数组和行列生成二维矩阵
   * @param { Array } array
   * @param { number } rows - 最大行数
   * @param { number } cols - 列数
   */


  createClass(Matrix, [{
    key: "_init",
    value: function _init(array, rows, cols) {
      var matrix = []; // 二维数组
      for (var i = 0; i < rows; i++) {
        var row = [];
        for (var j = 0; j < cols; j++) {
          var index = i * cols + j;
          if (index < array.length) {
            row.push(array[index]);
          }
        }
        if (row.length > 0) {
          matrix.push(row);
        }
      }
      return matrix;
    }

    /**
     * 获取指定列
     * @param { number } index
     */

  }, {
    key: "getCol",
    value: function getCol(index) {
      var col = [];
      for (var i = 0; i < this.model.length; i++) {
        if (this.model[i] && this.model[i][index]) {
          col.push(this.model[i][index]);
        }
      }
      return col;
    }

    /**
     * 获取指定行
     * @param { number } index
     */

  }, {
    key: "getRow",
    value: function getRow(index) {
      return this.model[index];
    }
  }, {
    key: "getRowCount",
    value: function getRowCount() {
      return this.model.length;
    }
  }]);
  return Matrix;
}();

// backoff polling
// using setTimeout insteadof setInterval
// inspired by https://blog.github.com/2009-07-30-smart-js-polling/
function poller(callback) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
  var multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
(function startPoller() {
    setTimeout(function () {
      callback.call(this, startPoller);
    }, wait);
    wait = wait * multiplier;
  })();
}

var index = {
  storage: storage,
  Matrix: Matrix,
  poller: poller
};

module.exports = index;
