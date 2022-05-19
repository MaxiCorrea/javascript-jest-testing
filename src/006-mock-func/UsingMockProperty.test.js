describe("Using mock property examples", () => {

  test("detecting quantity of instances", () => {
    const myMock1 = jest.fn();
    const a = new myMock1();
    myMock1.mock.instances;
  });

  test("Using contexts", () => {
    const myMock2 = jest.fn();
    const b = {};
    const bound = myMock2.bind(b);
    bound();
    myMock2.mock.contexts;
  });

  test("The function was called exactly once", ()=> {
    const mockFunc = jest.fn(()=> {});
    mockFunc();
    expect(mockFunc.mock.calls.length).toBe(1);
  });

  test("The first arg of the first call to the function was 'first arg'" , ()=> {
    const mockFunc = jest.fn((x)=> { return x });
    mockFunc("first args");
    let callNumber = 0;
    let firstArg = 0;
    expect(mockFunc.mock.calls[callNumber][firstArg]).toBe("first args")
  });

  test("The second arg of the first call to the function was 'second arg'",()=> {
    const mockFunc = jest.fn((x , y)=> { return x + y });
    mockFunc("first arg","second arg");
    let callNumber = 0;
    let secondArg = 1;
    expect(mockFunc.mock.calls[callNumber][secondArg]).toBe("second arg")
  });

  test("The return value of the first call to the function was 'return value'" , ()=> {
    const mockFunc = jest.fn((x)=> { return x === 0 ? 'return value' : 'return' });
    mockFunc(0);
    let callNumber = 0;
    expect(mockFunc.mock.results[callNumber].value).toBe("return value");
  })

  test("This function was instantiated exactly twice" , ()=> {
    const mockFunc = jest.fn();
    let instance1 = new mockFunc();
    let instance2 = new mockFunc();
    expect(mockFunc.mock.instances.length).toBe(2);
  })

  test("The first argument of the last call to the function was 'test'" , ()=> {
    const mockFunc = jest.fn((x) => {});
    const args = "test";
    for (let idx = 0 ; idx < args.length ; ++idx) 
      mockFunc(args.substring(0, idx + 1));
    let firstArg = 0;
    expect(mockFunc.mock.lastCall[firstArg]).toBe('test');
  })

});
