const fetchData = (callback) => {
  setTimeout(() => {
    callback(null, "peanut butter");
  }, 250);
};

test("the data is peanut butter", (done) => {
  const callback = (error, data) => {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  };

  fetchData(callback);
});
