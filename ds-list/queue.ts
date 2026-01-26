export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */
  enqueue(value: T, priority: number): void {
    // Not implemented
    const newNode: Node<T> = { data: value, priority };

    // Find correct index to insert
    let inserted = false;
    for (let i = 0; i < this.nodes.length; i++) {
      if (priority > this.nodes[i].priority) {
        this.nodes.splice(i, 0, newNode); // insert before
        inserted = true;
        break;
      }
    }

    // If not inserted, push to the end (lowest priority)
    if (!inserted) {
      this.nodes.push(newNode);
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    const node = this.nodes.shift(); // removes first item
    return node?.data;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    return this.nodes[0]?.data;
  }
}
