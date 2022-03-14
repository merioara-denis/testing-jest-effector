import { renderHook, act } from "@testing-library/react-hooks";
import { factory } from "./factory";

describe("testing", () => {
  it("Тестирование изменение значения в store", () => {
    const storeContext = factory();

    const getSelectedState = () => {
      return renderHook<
        unknown,
        ReturnType<typeof storeContext.hooks.useSelected>
      >(() => storeContext.hooks.useSelected()).result.current;
    };

    /** Текущее значение */
    const beforeChangeOnState = storeContext.store.getState().selected;
    const beforeChangeOnHook = getSelectedState();
    expect(beforeChangeOnState).toBe(beforeChangeOnHook);

    // Изменение состояния
    act(() => {
      storeContext.actions.setSelected(2);
    });

    // Новое значение
    const afterChangeOnState = storeContext.store.getState().selected;
    const afterChangeOnHook = getSelectedState();

    expect(afterChangeOnState).toBe(afterChangeOnHook);
    expect(beforeChangeOnHook).not.toBe(afterChangeOnHook);
  });
});
