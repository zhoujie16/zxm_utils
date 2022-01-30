'use strict';

/**
 * 判断是否微信小程序环境
 * @example
 * let res = isWeiXinMiniProgram();
 * console.log(res); // true / false
 */
const isWeiXinMiniProgram = () => {
  let flag = false;
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
const isAliPayMiniProgram = () => {
  let flag = false;
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
const isBrowser = () => {
  let flag = false;
  if (
    typeof XMLHttpRequest != "undefined" &&
    Object.prototype.toString.call(XMLHttpRequest) == "[object Function]"
  ) {
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
const isNode = () => {
  let flag = false;
  if (
    typeof process != "undefined" &&
    Object.prototype.toString.call(process) === "[object process]"
  ) {
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
const isWeiXinBrowser = () => {
  let flag = false;
  if (isBrowser()) {
    const ua = window.navigator.userAgent.toLowerCase();
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
const isMobileBrowser = () => {
  let flag = false;
  if (isBrowser()) {
    const ua = window.navigator.userAgent;
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
const isPCBrowser = () => {
  let flag = false;
  if (isBrowser()) {
    const ua = window.navigator.userAgent;
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
const loadScript = (urls, appendee, callback) => {
  urls = Array.isArray(urls) ? urls : [urls];
  const array = urls.map((src) => {
    const cssReg = /\w*.css$/;
    let script;
    if (cssReg.test(src)) {
      const link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = src;
      script = link;
    } else {
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
    }
    const bodyElement = document.getElementsByTagName("body")[0];
    const currentAppendee = appendee || bodyElement;
    currentAppendee.appendChild(script);
    return new Promise((resolve) => {
      script.onload = () => {
        resolve();
      };
    });
  });

  return new Promise((resolve) => {
    Promise.all(array).then(() => {
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
const numAdd = (num1, num2) => {
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
const numSub = (num1, num2) => {
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
const numMulti = (num1, num2) => {
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
  return (
    (Number(num1.toString().replace(".", "")) *
      Number(num2.toString().replace(".", ""))) /
    Math.pow(10, baseNum)
  );
};

/**
 * 除法运算，避免数据相除小数点后产生多位数和计算精度损失。
 * @example
 * let res = numDiv(1, 2);
 * console.log(res);
 */
const numDiv = (num1, num2) => {
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
  return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
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
const getRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
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
const sleep = (time) => {
  return new Promise((r) => setTimeout(r, time));
};

var otherUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sleep: sleep
});

var cryptoUtils = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const zxmUtils = {
  ...browserUtils,
  ...loadUtils,
  ...mathUtils,
  ...randomUtils,
  ...otherUtils,
  ...cryptoUtils,
};

module.exports = zxmUtils;
