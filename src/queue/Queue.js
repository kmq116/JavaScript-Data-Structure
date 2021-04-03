// 队列 先进先出 可基于数组实现

export default class Queue {
  constructor() {
    this.items = [];
  }

  // 队列尾部添加元素
  enqueue(item) {
    this.items.push(item);
  }

  // 移除最前的元素
  dequeue() {
    return this.items.shift();
  }

  //   看第一个元素
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  // 判空
  isEmpty() {
    return this.items.length === 0;
  }
  // 队列长度
  size() {
    return this.items.length;
  }
}
/**
 *
 * @param {Array} nameList 人名数组
 * @param {Number} num 数到几进行淘汰
 */
export function passGame(nameList, num) {
  const queue = new Queue();

  // 数据加入队列
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  //   队列数据大于1 一直循环
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      // 出队列的再进入
      queue.enqueue(queue.dequeue());
    }
    // 否则 直接出
    queue.dequeue();
  }
  // 剩下一个人返回
  return queue.front();
}
