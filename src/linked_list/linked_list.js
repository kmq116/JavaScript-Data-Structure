class Node {
  constructor(element) {
    this.element = element
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  // 尾部追加一个元素
  append(element) {
    const newNode = new Node(element)

    // 为空
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode

    }
  }
  // 中间位置插入元素
  insert(position, element) {
    // 越界情况
    if (position < 0 || position > this.length) return

    const newNode = new Node(element)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = head
      let previous = null
      while (index++ < position) {
        // 记录上一个值
        previous = current
        current = current.next
      }

      previous.next = newNode
      newNode.next = current

    }

  }


  get(position) {
    // 越界
    if (position < 0 || position > this.length - 1) return
    // 查找该位置元素
    let index = 0
    let current = this.head
    while (index++ < position) {
      current = current.next
    }

    return current.element
  }
  // 查找元素索引值
  indexOf(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.element = element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  // 删除元素
  removeAt(position) {
    if (position < 0 || position > this.length) return
    let index = 0
    let current = this.head
    let previous = null
    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }

    return current.next
  }

  // 更新对应下标的元素
  update(position, element) {
    const result = this.removeAt(position)
    this.insert(position, element)
    return result
  }

  // 删除元素
  remove(element) {
    const index = this.indexOf(element)
    if (index === -1) return
    const result = this.removeAt(index)
    return result
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

}