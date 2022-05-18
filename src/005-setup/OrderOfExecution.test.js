beforeAll(() => {});
afterAll(() => {});
beforeEach(() => {});
afterEach(() => {});
test("", () => {});
describe("Scoped / Nested block", () => {
  beforeAll(() =>  {});
  afterAll(() =>  {});
  beforeEach(() =>  {});
  afterEach(() =>  {});
  test("", () =>  {});
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll

describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2

describe('outer', () => {
    //console.log('describe outer-a');
    describe('describe inner 1', () => {
      //console.log('describe inner 1');
      test('test 1', () => {
        //console.log('test for describe inner 1');
        expect(true).toEqual(true);
      });
    });
  
    //console.log('describe outer-b');
    test('test 1', () => {
      //console.log('test for describe outer');
      expect(true).toEqual(true);
    });
  
    describe('describe inner 2', () => {
      //console.log('describe inner 2');
      test('test for describe inner 2', () => {
        //console.log('test for describe inner 2');
        expect(false).toEqual(false);
      });
    });
    //console.log('describe outer-c');
  });
  
  // describe outer-a
  // describe inner 1
  // describe outer-b
  // describe inner 2
  // describe outer-c
  // test for describe inner 1
  // test for describe outer
  // test for describe inner 2