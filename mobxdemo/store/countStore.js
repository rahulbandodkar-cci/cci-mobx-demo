import { makeAutoObservable } from "mobx";

export class CountStore {
  count = 0;

  constructor(arg) {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
    return this.count;
  }

  decrement = () => {
    this.count--;
    return this.count;
  }

}