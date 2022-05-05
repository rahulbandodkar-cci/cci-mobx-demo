import {Instance, types} from "mobx-state-tree";
import {createContext, useContext} from "react";
import {CounterStore} from './counterStore';

export const RootStore = types.model({
  countStore: CounterStore,
});

let _store: any = null;

export function initializeStore() {
  _store = RootStore.create({
    countStore: { count: 0 },
  });
  return _store;
}

type RootInstance = Instance<typeof RootStore>;
const RootStoreContext = createContext<null | RootInstance>(null);
export const Provider = RootStoreContext.Provider;

export function useStore(): Instance<typeof RootStore> {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}