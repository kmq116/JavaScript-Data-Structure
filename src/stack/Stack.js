// 基于 Array 封装栈结构
export default class Stack {
  constructor() {
    this.items = [];
  }
  // 入栈
  push(element) {
    this.items.push(element);
  }
  // 栈顶
  pop() {
    return this.items.pop();
  }
  // 栈顶
  peek() {
    if (this.isEmpty()) return null;
    return this.items[items.length - 1];
  }
  // 判空
  isEmpty() {
    return this.items.length <= 0;
  }
}

// 十进制转二进制  实践
export function dec2bin(num) {
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
