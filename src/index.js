import * as browserUtils from "./browser";
import * as loadUtils from "./load";
import * as mathUtils from "./math";
import * as randomUtils from "./random";
import * as otherUtils from "./other";
import * as cryptoUtils from "./crypto";
import WxUtils from "./weixin";

const ZxmUtils = {
  ...browserUtils,
  ...loadUtils,
  ...mathUtils,
  ...randomUtils,
  ...otherUtils,
  ...cryptoUtils,
  WxUtils,
};

export default ZxmUtils;
