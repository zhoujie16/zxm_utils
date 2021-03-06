# 常用的前端 JavaScript 方法封装
##### 总结一些自己用的js方法，方便以后搜索和查看
##### 说不定大家也会用到
##### 欢迎评论区补充和留言

> 安装依赖

```shell
yarn add git+https://github.com/zhoujie16/zxm_utils.git
```

> 全部引入

```js
import * as ZxmUtils from "zxm-utils";
```

> 按需引入

```js
import { xxx, xxx } from "zxm-utils";
```
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## isWeiXinMiniProgram

判断是否微信小程序环境

### Examples

```javascript
let res = isWeiXinMiniProgram();
console.log(res); // true / false
```

## isAliPayMiniProgram

判断是否支付宝小程序环境

### Examples

```javascript
let res = isAliPayMiniProgram();
console.log(res); // true / false
```

## isBrowser

判断是否浏览器环境

### Examples

```javascript
let res = isBrowser();
console.log(res); // true / false
```

## isNode

判断是否 Node 环境

### Examples

```javascript
let res = isNode();
console.log(res); // true / false
```

## isWeiXinBrowser

判断是否微信浏览器环境

### Examples

```javascript
let res = isWeiXinBrowser();
console.log(res); // true / false
```

## isMobileBrowser

判断是否移动端浏览器

### Examples

```javascript
let res = isMobileBrowser();
console.log(res); // true / false
```

## isPCBrowser

判断是否PC端浏览器

### Examples

```javascript
let res = isPCBrowser();
console.log(res); // true / false
```

## loadScript

动态插入script/link标签

### Parameters

*   `urls`  
*   `appendee` **[Element][1]** 插入的父元素 默认body
*   `callback` **[Function][2]** 所有script onload回调 也可通过返回的promise执行回调
*   `url` **([Array][3] | [String][4])** script/link的url队列

### Examples

```javascript
loadScript(["xxx.css","xxx.js"]).then(()=>{
   console.log("loadScript Success")
})
```

## numAdd

加法运算，避免数据相加小数点后产生多位数和计算精度损失。

### Parameters

*   `num1`  
*   `num2`  

### Examples

```javascript
let res = numAdd(1, 2);
console.log(res);
```

## numSub

加法运算，避免数据相减小数点后产生多位数和计算精度损失。

### Parameters

*   `num1`  
*   `num2`  

### Examples

```javascript
let res = numSub(1, 2);
console.log(res);
```

## numMulti

乘法运算，避免数据相乘小数点后产生多位数和计算精度损失。

### Parameters

*   `num1`  
*   `num2`  

### Examples

```javascript
let res = numMulti(1, 2);
console.log(res);
```

## numDiv

除法运算，避免数据相除小数点后产生多位数和计算精度损失。

### Parameters

*   `num1`  
*   `num2`  

### Examples

```javascript
let res = numDiv(1, 2);
console.log(res);
```

## sleep

延迟函数

### Parameters

*   `time`  

### Examples

```javascript
await sleep(1000);
```

## getRandomColor

随机生成成颜色值

### Examples

```javascript
let res = getRandomColor();
console.log(res); // #ffffff
```

[1]: https://developer.mozilla.org/docs/Web/API/Element

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
