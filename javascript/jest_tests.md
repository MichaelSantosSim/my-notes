## Jest Docs
[Jest Expect](https://jestjs.io/docs/en/expect#resolves)
## Testing objects
``` js
expect(n).toBeNull();
expect(n).toBeDefined();
expect(n).not.toBeUndefined();
expect(n).not.toBeTruthy();
expect(n).toBeFalsy();
```
## Testing numbers
``` js
expect(number).toBeGreaterThan(1);
expect(number).toBeGreaterThanOrEqual(1.5);
expect(number).toBeLessThan(2);
expect(number).toBeLessThanOrEqual(1.5);
expect(number).toBe(1);
expect(number).toEqual(1);
```
## Testing strings
``` js
expect('Michael').toMatch(/el/); // regex
```
## Testing arrays
``` js
expect(shoppingList).toContain('milk');
expect(new Set(shoppingList)).toContain('milk');
```
## Testing exceptions
``` js
expect(compileAndroidCode).toThrow();
expect(compileAndroidCode).toThrow(Error);
expect(compileAndroidCode).toThrow('There is a error with you jest code');
expect(compileAndroidCode).toThrow(/jest/);  // regex
```

## Resolves / Rejects

``` js
test('resolves to lemon', () => {
  // make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
});

// or

test('resolves to lemon', async () => {
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
});

// rejects

test('rejects to octopus', () => {
  // make sure to add a return statement
  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
    'octopus',
  );
});

```