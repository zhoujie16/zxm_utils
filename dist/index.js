(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ZxmUtils = factory());
})(this, (function () { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  /**
   * 判断是否微信小程序环境
   * @example
   * let res = isWeiXinMiniProgram();
   * console.log(res); // true / false
   */
  var isWeiXinMiniProgram = function isWeiXinMiniProgram() {
    var flag = false;

    try {
      if (wx && wx.request) {
        flag = true;
      }
    } catch (error) {}

    return flag;
  };
  /**
   * 判断是否支付宝小程序环境
   * @example
   * let res = isAliPayMiniProgram();
   * console.log(res); // true / false
   */

  var isAliPayMiniProgram = function isAliPayMiniProgram() {
    var flag = false;

    try {
      if (my && my.request) {
        flag = true;
      }
    } catch (error) {}

    return flag;
  };
  /**
   * 判断是否浏览器环境
   * @example
   * let res = isBrowser();
   * console.log(res); // true / false
   */

  var isBrowser = function isBrowser() {
    var flag = false;

    if (typeof XMLHttpRequest != "undefined" && Object.prototype.toString.call(XMLHttpRequest) == "[object Function]") {
      flag = true;
    }

    return flag;
  };
  /**
   * 判断是否 Node 环境
   * @example
   * let res = isNode();
   * console.log(res); // true / false
   */

  var isNode = function isNode() {
    var flag = false;

    if (typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") {
      flag = true;
    }

    return flag;
  };
  /**
   * 判断是否微信浏览器环境
   * @example
   * let res = isWeiXinBrowser();
   * console.log(res); // true / false
   */

  var isWeiXinBrowser = function isWeiXinBrowser() {
    var flag = false;

    if (isBrowser()) {
      var ua = window.navigator.userAgent.toLowerCase();

      if (ua.includes("micromessenger")) {
        flag = true;
      }
    }

    return flag;
  };
  /**
   * 判断是否移动端浏览器
   * @example
   * let res = isMobileBrowser();
   * console.log(res); // true / false
   */

  var isMobileBrowser = function isMobileBrowser() {
    var flag = false;

    if (isBrowser()) {
      var ua = window.navigator.userAgent;

      if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
        flag = true;
      }
    }

    return flag;
  };
  /**
   * 判断是否PC端浏览器
   * @example
   * let res = isPCBrowser();
   * console.log(res); // true / false
   */

  var isPCBrowser = function isPCBrowser() {
    var flag = false;

    if (isBrowser()) {
      var ua = window.navigator.userAgent;

      if (!/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
        flag = true;
      }
    }

    return flag;
  };

  var browserUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isWeiXinMiniProgram: isWeiXinMiniProgram,
    isAliPayMiniProgram: isAliPayMiniProgram,
    isBrowser: isBrowser,
    isNode: isNode,
    isWeiXinBrowser: isWeiXinBrowser,
    isMobileBrowser: isMobileBrowser,
    isPCBrowser: isPCBrowser
  });

  /**
   * 动态插入script/link标签
   * @param {Array | String} url script/link的url队列
   * @param {Element} appendee 插入的父元素 默认body
   * @param {Function} callback 所有script onload回调 也可通过返回的promise执行回调
   * @example
   * loadScript(["xxx.css","xxx.js"]).then(()=>{
   *    console.log("loadScript Success")
   * })
   */
  var loadScript = function loadScript(urls, appendee, callback) {
    urls = Array.isArray(urls) ? urls : [urls];
    var array = urls.map(function (src) {
      var cssReg = /\w*.css$/;
      var script;

      if (cssReg.test(src)) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = src;
        script = link;
      } else {
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
      }

      var bodyElement = document.getElementsByTagName("body")[0];
      var currentAppendee = appendee || bodyElement;
      currentAppendee.appendChild(script);
      return new Promise(function (resolve) {
        script.onload = function () {
          resolve();
        };
      });
    });
    return new Promise(function (resolve) {
      Promise.all(array).then(function () {
        if (typeof callback === "function") {
          callback();
        }

        resolve();
      });
    });
  };

  var loadUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    loadScript: loadScript
  });

  /**
   * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
   * @example
   * let res = numAdd(1, 2);
   * console.log(res);
   */
  var numAdd = function numAdd(num1, num2) {
    var baseNum, baseNum1, baseNum2;

    try {
      baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
      baseNum1 = 0;
    }

    try {
      baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
      baseNum2 = 0;
    }

    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
  };
  /**
   * 加法运算，避免数据相减小数点后产生多位数和计算精度损失。
   * @example
   * let res = numSub(1, 2);
   * console.log(res);
   */

  var numSub = function numSub(num1, num2) {
    var baseNum, baseNum1, baseNum2;
    var precision; // 精度

    try {
      baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
      baseNum1 = 0;
    }

    try {
      baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
      baseNum2 = 0;
    }

    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    precision = baseNum1 >= baseNum2 ? baseNum1 : baseNum2;
    return ((num1 * baseNum - num2 * baseNum) / baseNum).toFixed(precision);
  };
  /**
   * 乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。
   * @example
   * let res = numMulti(1, 2);
   * console.log(res);
   */

  var numMulti = function numMulti(num1, num2) {
    var baseNum = 0;

    try {
      baseNum += num1.toString().split(".")[1].length;
    } catch (e) {
      console.error("numMulti error");
    }

    try {
      baseNum += num2.toString().split(".")[1].length;
    } catch (e) {
      console.error("numMulti error");
    }

    return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
  };
  /**
   * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
   * @example
   * let res = numDiv(1, 2);
   * console.log(res);
   */

  var numDiv = function numDiv(num1, num2) {
    var baseNum1 = 0,
        baseNum2 = 0;
    var baseNum3, baseNum4;

    try {
      baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
      baseNum1 = 0;
    }

    try {
      baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
      baseNum2 = 0;
    }

    baseNum3 = Number(num1.toString().replace(".", ""));
    baseNum4 = Number(num2.toString().replace(".", ""));
    return baseNum3 / baseNum4 * Math.pow(10, baseNum2 - baseNum1);
  };

  var mathUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    numAdd: numAdd,
    numSub: numSub,
    numMulti: numMulti,
    numDiv: numDiv
  });

  /**
   * 随机生成成颜色值
   * @example
   * let res = getRandomColor();
   * console.log(res); // #ffffff
   */
  var getRandomColor = function getRandomColor() {
    var rgb = [];

    for (var i = 0; i < 3; ++i) {
      var color = Math.floor(Math.random() * 256).toString(16);
      color = color.length == 1 ? "0" + color : color;
      rgb.push(color);
    }

    return "#" + rgb.join("");
  };

  var randomUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getRandomColor: getRandomColor
  });

  /**
   * 延迟函数
   * @example
   * await sleep(1000);
   */
  var sleep = function sleep(time) {
    return new Promise(function (r) {
      return setTimeout(r, time);
    });
  };

  var otherUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sleep: sleep
  });

  var cryptoUtils = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  /**
   * 微信相关接口方法调用
   */
  var WxJSHandler = /*#__PURE__*/function () {
    function WxJSHandler() {
      _classCallCheck(this, WxJSHandler);

      _defineProperty(this, "loadScript", function (urls, appendee, callback) {
        urls = Array.isArray(urls) ? urls : [urls];
        var array = urls.map(function (src) {
          var cssReg = /\w*.css$/;
          var script;

          if (cssReg.test(src)) {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = src;
            script = link;
          } else {
            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = src;
          }

          var bodyElement = document.getElementsByTagName("body")[0];
          var currentAppendee = appendee || bodyElement;
          currentAppendee.appendChild(script);
          return new Promise(function (resolve) {
            script.onload = function () {
              resolve();
            };
          });
        });
        return new Promise(function (resolve, reject) {
          Promise.all(array).then(function () {
            if (typeof callback === "function") {
              callback();
            }

            resolve();
          });
        });
      });

      this.jssdk_url = "http://res.wx.qq.com/open/js/jweixin-1.6.0.js";
      this.jsApiList = ["checkJsApi", "chooseImage", "uploadImage", "previewImage", "closeWindow", "hideMenuItems", "updateAppMessageShareData", "updateTimelineShareData", "miniProgram"];
      this.serveApiUrl = "";
      this.isLoadSdk = false;
      this.wx = {};
    } // 设置jssdk_url


    _createClass(WxJSHandler, [{
      key: "setJssdkUrl",
      value: function setJssdkUrl(url) {
        this.jssdk_url = url;
      }
    }, {
      key: "setJsApiList",
      value: function setJsApiList(list) {
        this.jsApiList = list;
      }
    }, {
      key: "setServeApiUrl",
      value: function setServeApiUrl(url) {
        this.serveApiUrl = url;
      }
    }, {
      key: "init",
      value: function init() {
        var _this = this;

        return new Promise( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(reslove) {
            var res_data, res, _res_data, appid, nonceStr, signature, timestamp;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (_this.serveApiUrl) {
                      _context.next = 2;
                      break;
                    }

                    throw new Error("serveApiUrl undefind");

                  case 2:
                    console.log("wx.init");

                    if (_this.isLoadSdk) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 6;
                    return _this.loadScript([_this.jssdk_url]);

                  case 6:
                    _this.wx = window.wx;
                    console.log("微信JSSDK 加载成功");
                    res_data = {};
                    _context.prev = 9;
                    _context.next = 12;
                    return fetch(_this.serveApiUrl);

                  case 12:
                    res = _context.sent;
                    _context.next = 15;
                    return res.json();

                  case 15:
                    res_data = _context.sent;
                    _context.next = 21;
                    break;

                  case 18:
                    _context.prev = 18;
                    _context.t0 = _context["catch"](9);
                    throw _context.t0;

                  case 21:
                    _res_data = res_data, appid = _res_data.appid, nonceStr = _res_data.nonceStr, signature = _res_data.signature, timestamp = _res_data.timestamp;

                    _this.wx.config({
                      debug: false,
                      appId: appid,
                      timestamp: timestamp,
                      nonceStr: nonceStr,
                      signature: signature,
                      jsApiList: _this.jsApiList
                    });

                    _this.wx.ready(function () {
                      console.log("wx.ready");
                      reslove();
                    });

                    _this.wx.error(function (res) {
                      console.log("wx.error", res);
                      reject(res);
                    });

                  case 25:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[9, 18]]);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    }]);

    return WxJSHandler;
  }();

  var WxUtils = new WxJSHandler();

  var ZxmUtils = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, browserUtils), loadUtils), mathUtils), randomUtils), otherUtils), cryptoUtils), {}, {
    WxUtils: WxUtils
  });

  return ZxmUtils;

}));
