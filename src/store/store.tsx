import React from "react";
import { Context, storeContext } from "./store.consts";

export const Store: React.FC<{}> = ({ children }) => {
  return <Context.Provider value={storeContext}>{children}</Context.Provider>;
};
