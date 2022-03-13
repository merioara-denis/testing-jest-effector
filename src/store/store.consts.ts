import React from "react";
import { factoryStore } from "./factory";

export const { storeContext } = factoryStore();

export const Context = React.createContext(storeContext);
