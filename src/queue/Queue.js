// 队列 先进先出 可基于数组实现

export class Queue {
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
  // 转为字符串
  toString(callback) {
    return this.items.toString(callback);
  }
}

class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

export class PriorityQueue extends Queue {
  enqueue(element, priority) {
    //   创建元素
    const queueElement = new QueueElement(element, priority);

    // 为空直接插入
    if (this.isEmpty()) this.items.push(queueElement);
    else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        //   判断优先级
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      // 如果优先级不足 插入到最后
      if (!added) {
        this.items.push(queueElement);
      }
    }
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
