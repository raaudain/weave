// Directions
// 1. Complete the task in weave/queue.js
// 2. Implement the "weave" function.  Weave receives twqo queues as arguments and combines the contents of each into a new, third queue.
// The third queue should contain the *alterating* cont of the two queues.
// The function should handle queues of diffrent lengths without inserting "undefined" into the new one.
// *Do not* access the array inside of any queue, only use the "add", "remove", and "peek" functions.
// Example:
// const queueOne = new Queue();
// queueOne.add(1);


// Implement a "peek" method in this Queue class.
// Peek should return the last element (the next one to be returned) from the queue *without* removing it.
class Queue{
  constructor(){
    this.data = [];
  }

  add(record){
    this.data.unshift(record);
  }

  remove(){
    return this.data.pop();
  }

  peek(){
    return this.data[this.data.length - 1];
  }
}

// Merge two queues together and return
function weave(sourceOne, sourceTwo){
  const qq =  new Queue();

  while (sourceOne.peek() || sourceTwo.peek()){
    if (sourceOne.peek()){
      // Add the first element to be removed from queue 1 to the new merged queue
      qq.add(sourceOne.remove());
    }

    if (sourceTwo.peek()){
      qq.add(sourceTwo.remove());
    }
  }

  return qq;
}

const q1 = new Queue();
const q2 = new Queue();

q1.add("Hello");
q1.add("Ugly");

q2.add(1);
q2.add(2);
q2.add(3);

weave(q1, q2);
