import {types} from "mobx-state-tree";

export const CounterStore = types.model({
  count: types.number,
}).actions(self => ({
  increment() {
    self.count++;
  },
  decrement() {
    self.count--;
  }
}))
.views(self => ({
  displayCount(){
    return `Count is ${self.count}`;
  },
  greaterThanFive(){
    return self.count > 5 ? "Count is greater than 5" : "Count is less than 5"
  }
}));