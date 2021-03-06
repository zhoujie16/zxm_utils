/**
 * 加法运算，避免数据相加小数点后产生多位数和计算精度损失。
 * @example
 * let res = numAdd(1, 2);
 * console.log(res);
 */
export const numAdd = (num1, num2) => {
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
export const numSub = (num1, num2) => {
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
export const numMulti = (num1, num2) => {
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
export const numDiv = (num1, num2) => {
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
