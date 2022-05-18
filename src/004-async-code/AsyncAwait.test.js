const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("peanut butter");
    }, 250);
  });
};

test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test.skip("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toBe("peanut butter");
});

test.skip("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});

test.skip("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData().catch((e) => expect(e).toMatch("error"));
});

test("the data is peanut butter", () => {
  return expect(fetchData()).resolves.toBe("peanut butter");
});

test.skip("the fetch fails with an error", () => {
  return expect(fetchData()).rejects.toMatch("error");
});
