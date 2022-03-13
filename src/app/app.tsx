import React from "react";
import { useStoreContext } from "store";

export const App = () => {
  const storeContext = useStoreContext();
  const selected = storeContext.hooks.useSelected();
  const variants = storeContext.hooks.useVariants();

  return (
    <>
      <div>Result: ${selected}</div>
      <hr />
      <div>
        {variants.map(({ uid, caption }) => {
          return (
            <div>
              <button onClick={() => console.log(uid)}>{caption}</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
