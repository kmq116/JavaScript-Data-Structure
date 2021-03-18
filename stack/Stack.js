// 基于 Array 封装栈结构
module.exports = class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[items.length - 1];
  }

  isEmpty() {
    return this.items.length <= 0;
  }
};
