import { Queue } from '../Queue'

describe('Queue', () => {
  it('空队列', () => {
    const queue = new Queue()
    expect(queue).not.toBeNull();
    expect(queue.items).not.toBeNull();
  })

  it('插入数据到队列中', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.toString()).toBe('1,2')
  })
})