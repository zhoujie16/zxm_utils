/**
 * 动态插入script/link标签
 * @param {Array | String} url script/link的url队列
 * @param {Element} appendee 插入的父元素 默认body
 * @param {Function} callback 所有script onload回调 也可通过返回的promise执行回调
 */
export const loadScript = (urls, appendee, callback) => {
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
