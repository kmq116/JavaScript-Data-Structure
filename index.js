var Stack = require("./stack/Stack");


// 十进制转二进制
function dec2bin(num) {
  const stack = new Stack();
  // 入栈
  while (num > 0) {
    let result = num % 2;
    num = Math.floor(num / 2);
    stack.push(result);
  }
  // 弹栈
  let binStr = "";
  while (!stack.isEmpty()) {
    binStr += stack.pop();
  }
  return binStr;
}
console.log(dec2bin(100));
