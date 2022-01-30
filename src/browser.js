// 是否微信小程序环境
export const isWeiXinMiniProgram = () => {
  let flag = false;
  try {
    if (wx && wx.request) {
      flag = true;
    }
  } catch (error) {}
  return flag;
};

// 是否支付宝小程序环境
export const isAliPayMiniProgram = () => {
  let flag = false;
  try {
    if (my && my.request) {
      flag = true;
    }
  } catch (error) {}
  return flag;
};

// 是否浏览器环境
export const isBrowser = () => {
  let flag = false;
  if (
    typeof XMLHttpRequest != "undefined" &&
    Object.prototype.toString.call(XMLHttpRequest) == "[object Function]"
  ) {
    flag = true;
  }
  return flag;
};

// 是否 Node 环境
export const isNode = () => {
  let flag = false;
  if (
    typeof process != "undefined" &&
    Object.prototype.toString.call(process) === "[object process]"
  ) {
    flag = true;
  }
  return flag;
};

// 是否微信浏览器环境
export const isWeiXinBrowser = () => {
  let flag = false;
  if (isBrowser()) {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes("micromessenger")) {
      flag = true;
    }
  }
  return flag;
};

// 是否移动端浏览器
export const isMobileBrowser = () => {
  let flag = false;
  if (isBrowser()) {
    const ua = window.navigator.userAgent;
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
      flag = true;
    }
  }
  return flag;
};

// 是否PC端浏览器
export const isPCBrowser = () => {
  let flag = false;
  if (isBrowser()) {
    const ua = window.navigator.userAgent;
    if (!/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(ua)) {
      flag = true;
    }
  }
  return flag;
};
