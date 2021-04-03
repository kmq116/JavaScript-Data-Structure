// 栈 十进制转二进制
import { dec2bin } from "./stack/Stack";
// 击鼓传花
import { passGame, PriorityQueue } from "./queue/Queue";
// console.log(dec2bin(100));
// console.log(passGame(["mkng", "hong", "hua"], 3));

const queue = new PriorityQueue();

queue.enqueue("aaa", 100);
queue.enqueue("bbb", 200);
queue.enqueue("ccc", 50);
queue.enqueue("ddd", 150);
queue.enqueue("eee", 120);
queue.enqueue("fff", 110);
console.log(queue.dequeue());
queue.items.forEach(item => {
  console.log(item.element, item.priority);
})
