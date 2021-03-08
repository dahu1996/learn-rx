class Range {
  constructor(start, end, step = 1) {
    this.curr = start;
    this.start = start;
    this.end = end;
    this.step = step;
  }
  next() {
    let result;
    if (this.curr <= this.end) {
      result = { done: false, value: this.curr };
      this.curr = this.curr + this.step;
    } else {
      result = { done: true, value: this.end };
    }
    return result;
  }
  return() {
    console.log("================================");
    return { done: true };
  }
  [Symbol.iterator]() {
    return this;
  }
}

const range = new Range(2, 10);
console.log(range[Symbol.iterator]());
for (let i of range) {
  if (i > 5) break;
  console.log(i);
}
for (let i of range) {
  // if (i > 5) break;
  console.log(i);
}

