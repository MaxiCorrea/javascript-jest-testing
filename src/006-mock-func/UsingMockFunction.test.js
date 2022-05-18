const forEach = (items, callback) => {
  for (let idx = 0; idx < items.length; idx++) {
    callback(items[idx]);
  }
};

describe("testing with mock callback using jest.fn", () => {
  test("The mock function is called twice", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test("The first argument of the first call to the function was 10", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([10, 1], mockCallback);
    let callNumber = 0;
    let numArgument = 0;
    expect(mockCallback.mock.calls[callNumber][numArgument]).toBe(10);
  });

  test("The first argument of the second call to the function was 100", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 100], mockCallback);
    let callNumber = 1;
    let numArgument = 0;
    expect(mockCallback.mock.calls[callNumber][numArgument]).toBe(100);
  });

  test("The return value of the first call to the function was 52", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([10, 100], mockCallback);
    let callNumber = 0;
    expect(mockCallback.mock.results[callNumber].value).toBe(52);
  });

});
