/**
 * 随机生成成颜色值
 * @example
 * let res = getRandomColor();
 * console.log(res); // #ffffff
 */
export const getRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? "0" + color : color;
    rgb.push(color);
  }
  return "#" + rgb.join("");
};
