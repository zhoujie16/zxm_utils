/**
 * 微信相关接口方法调用
 */
class WxJSHandler {
  constructor() {
    this.jssdk_url = "http://res.wx.qq.com/open/js/jweixin-1.6.0.js";
    this.jsApiList = [
      "checkJsApi",
      "chooseImage",
      "uploadImage",
      "previewImage",
      "closeWindow",
      "hideMenuItems",
      "updateAppMessageShareData",
      "updateTimelineShareData",
      "miniProgram",
    ];
    this.serveApiUrl = "";
    this.isLoadSdk = false;
    this.wx = {};
  }

  // 设置jssdk_url
  setJssdkUrl(url) {
    this.jssdk_url = url;
  }

  setJsApiList(list) {
    this.jsApiList = list;
  }

  setServeApiUrl(url) {
    this.serveApiUrl = url;
  }

  loadScript = (urls, appendee, callback) => {
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

    return new Promise((resolve, reject) => {
      Promise.all(array).then(() => {
        if (typeof callback === "function") {
          callback();
        }
        resolve();
      });
    });
  };

  init() {
    return new Promise(async (reslove) => {
      if (!this.serveApiUrl) {
        throw new Error("serveApiUrl undefind");
      }
      console.log("wx.init");
      if (!this.isLoadSdk) {
        await this.loadScript([this.jssdk_url]);
      }
      this.wx = window.wx;
      console.log("微信JSSDK 加载成功");
      let res_data = {};
      try {
        let res = await fetch(this.serveApiUrl);
        res_data = await res.json();
      } catch (error) {
        throw error;
      }
      let { appid, nonceStr, signature, timestamp } = res_data;
      this.wx.config({
        debug: false,
        appId: appid,
        timestamp: timestamp,
        nonceStr: nonceStr,
        signature: signature,
        jsApiList: this.jsApiList,
      });
      this.wx.ready(() => {
        console.log("wx.ready");
        reslove();
      });

      this.wx.error((res) => {
        console.log("wx.error", res);
        reject(res);
      });
    });
  }
}

export default new WxJSHandler();
