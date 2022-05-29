let inMemoryDataBase = undefined;
let inMemoryFootDataBase = {};

const isCity = (city) => {
  return inMemoryDataBase.includes(city);
};

const initializeCityDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      inMemoryDataBase = ["Vienna", "San Juan"];
      resolve();
    }, 100);
  });
};

const clearCityDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      inMemoryDataBase = [];
      resolve();
    }, 100);
  });
};

const isValidCityFoodPair = (key , value) => {
    return inMemoryFootDataBase.hasOwnProperty(key) &&
                inMemoryFootDataBase[key] === value;
}

const initializeFoodDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      inMemoryFootDataBase["Vienna"] = "Wiener Schnitzel";
      inMemoryFootDataBase["San Juan"] = "Mofongo";
      resolve();
    }, 100);
  });
};

// Applies to all tests in this file
beforeEach(() => {
  return initializeCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});

describe("matching cities to foods", () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeFoodDatabase();
  });

  test("Vienna <3 veal", () => {
    expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true);
  });

  test("San Juan <3 plantains", () => {
    expect(isValidCityFoodPair("San Juan", "Mofongo")).toBe(true);
  });
});
