function o() {
  console.log("这是一个测试方法！！");
}
function t() {
  o(), console.log("这是test1");
}
export {
  t as test1
};
