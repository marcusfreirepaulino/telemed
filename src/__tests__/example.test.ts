describe('Example Test Suite', () => {
  test('should pass basic test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should work with async', async () => {
    const result = await Promise.resolve('test');
    expect(result).toBe('test');
  });
});
