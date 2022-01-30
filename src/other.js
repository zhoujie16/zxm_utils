/**
 * 延迟函数
 * @example
 * await sleep(1000);
 */
export const sleep = (time) => {
  return new Promise((r) => setTimeout(r, time));
};
