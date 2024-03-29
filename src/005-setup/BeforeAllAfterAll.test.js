let inMemoryDataBase = undefined;

const isCity = (city) => {
  return inMemoryDataBase.includes(city);
};

const initializeCityDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      inMemoryDataBase = ["Vienna", "San Juan"];
      resolve();
    }, 2000);
  });
};

const clearCityDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      inMemoryDataBase = [];
      resolve();
    }, 2000);
  });
};

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
