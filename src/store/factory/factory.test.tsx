import { factory } from "./factory";

describe("testing", () => {
  it("Тестирование изменение значения в store", () => {
    const storeContext = factory();

    /** Текущее значение */
    const beforeChange = storeContext.store.getState().selected;
    // TODO: Надо удалить консоль
    console.log("beforeChange", beforeChange);

    storeContext.store.updates.watch(() => {
      // получение
      /** Новое значение */
      const afterChange = storeContext.store.getState().selected;
      // TODO: Надо удалить консоль
      console.log("afterChange", afterChange);

      // Выполнение теста на сравнение значений до и после
      expect(beforeChange).not.toBe(afterChange);
    });

    storeContext.actions.setSelected(2);
  });
});
