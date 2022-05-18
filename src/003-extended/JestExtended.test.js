expect.extend({
  toBeArray(expected) {
    const { matcherHint, printReceived } = this.utils;
    const passMessage =
      matcherHint(".not.toBeArray", "received", "") +
      "\n\n" +
      "Expected value to not be an array received:\n" +
      `  ${printReceived(expected)}`;
    const failMessage =
      matcherHint(".toBeArray", "received", "") +
      "\n\n" +
      "Expected value to be an array received:\n" +
      `  ${printReceived(expected)}`;
    const pass = Array.isArray(expected);
    return { pass, message: () => (pass ? passMessage : failMessage) };
  },
});

test('should be array', ()=> {
    expect([1,2,3,4,5]).toBeArray();
    expect([]).toBeArray();
    expect([1,2,3,4,5]).toBeArray();
})

test('not should be array', ()=> {
    expect(false).not.toBeArray();
})