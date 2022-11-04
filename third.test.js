test('test with never-ending timeout 3', async () => {
  new Promise((r) => {
    setTimeout(r, 1500_000);
  }).then(() => console.log('leaky promise'));

  await new Promise((r) => setTimeout(r, 200));

  expect(2 + 2).toEqual(4);
});
