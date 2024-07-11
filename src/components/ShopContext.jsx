import React from "react";
import { Allproducts } from "../Data/db";

import { createContext } from "react";

export const ShopContet = createContext(null);
const ShopContextProvider = (props) => {
  const ContextValue = { Allproducts };
  return (
    <ShopContet.Provider value={ContextValue}>
      {props.children}
    </ShopContet.Provider>
  );
};

export default ShopContextProvider;
