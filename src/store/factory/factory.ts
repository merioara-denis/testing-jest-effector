import { createStore, createEvent } from "effector";
import { useStoreMap } from "effector-react";

interface InitialState {
  selected: number;
  readonly variants: {
    uid: number;
    caption: string;
  }[];
}

export const initialState: InitialState = {
  selected: 1,
  variants: [...new Array(5)].fill((_: any, index: number) => {
    return {
      uid: index,
      caption: `item ${index}`,
    };
  }),
};

export const factory = () => {
  const setSelected = createEvent<number>();

  const store = createStore(initialState).on(setSelected, (state, selected) => {
    console.log("setSelected", selected);
    return { ...state, selected };
  });

  return {
    store,
    actions: {
      setSelected: (selected: number) => setSelected(selected),
    },
    hooks: {
      useSelected: () => useStoreMap(store, (state) => state.selected),
      useVariants: () => useStoreMap(store, (state) => state.variants),
    },
  };
};

export const factoryStore = () => {
  const { store, ...storeContext } = factory();
  return { storeContext };
};
