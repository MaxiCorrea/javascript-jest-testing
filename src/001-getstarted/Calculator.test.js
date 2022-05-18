import { Calculator } from "./Calculator";

test("adds 1 + 2 to equals 3", () => {
  expect(new Calculator(1, 2).sum()).toBe(3);
});

test("subtracts 1 - 2 to equals -1", () => {
  expect(new Calculator(1, 2).subtract()).toBe(-1);
});

test("multiply 2 * 2 to equals 4", () => {
  expect(new Calculator(2, 2).multiply()).toBe(4);
});

test("divide 9 / 2 to equals 3", () => {
  expect(new Calculator(9, 3).divide()).toBe(3);
});
