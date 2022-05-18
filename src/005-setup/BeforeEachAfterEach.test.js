let inMemoryDataBase = undefined;

const isCity = (city) => {
  return inMemoryDataBase.includes(city);
};

const initializeCityDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      inMemoryDataBase = ["Vienna", "San Juan"];
      resolve();
    }, 1000);
  });
};

const clearCityDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      inMemoryDataBase = [];
      resolve();
    }, 1000);
  });
};

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
