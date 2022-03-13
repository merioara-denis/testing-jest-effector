import React from "react";
import { Context } from "./store.consts";

export const useStoreContext = () => React.useContext(Context);
