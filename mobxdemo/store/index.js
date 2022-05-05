import { createContext, useContext } from "react";
import {CountStore} from './countStore';

export class RootStore {
  countStore: CountStore;

  constructor() {
    this.countStore = new CountStore();
  }
}

export const rootStore = new RootStore();
const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);