describe("Using mock return values ", () => {
  test("Default return value mock function", () => {
    const myMock = jest.fn();
    let expected = undefined;
    let actual = myMock();
    expect(actual).toEqual(expected);
  });

  test("Mock functions can also be used to inject test values", () => {
    const myMock = jest.fn();
    myMock
      .mockReturnValueOnce("Hello-")
      .mockReturnValueOnce("World-")
      .mockReturnValue("Jest");
    expect(myMock()).toEqual("Hello-");
    expect(myMock()).toEqual("World-");
    expect(myMock()).toEqual("Jest");
    expect(myMock()).toEqual("Jest");
    expect(myMock()).toEqual("Jest");
  });
});
