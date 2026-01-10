import { evenNumbers, toDollars,divideBy,multiplyBy } from "./numbers";

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('returns empty array for an empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
  it('returns array without negative numbers', () => {
    const numbers = [1, -4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([-4, 10, 0]);
  });
  it('returns array without infinity', () => {
    const numbers = [1, 4, 5, 10, 0, Infinity];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('returns array without floating point numbers', () => {
    const numbers = [1, 4, 5, 10, 0, 4.4, 6.3];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns a number formatted in dollars in cents', () => {
    const amount = 10;
    const result = toDollars(amount);
    expect(result).toEqual('$10.00');
  });
  it('returns a negative number formatted in dollars in cents', () => {
    const amount = -10;
    const result = toDollars(amount);
    expect(result).toEqual('-$10.00');
  });
  it('returns a floating point number formatted in dollars in cents', () => {
    const amount = 10.44;
    const result = toDollars(amount);
    expect(result).toEqual('$10.44');
  });
  it('returns a $0.00 given 0', () => {
    const amount = 0;
    const result = toDollars(amount);
    expect(result).toEqual('$0.00');
  });
});

describe('divideBy', () => {
  it('returns a new array where every entry is divided by divisor', () => {
    const numbers = [1, 4, 5, 10, 0];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.5, 2, 2.5, 5, 0]);
  });
  it('returns a new array where returned entries are negative for a negative divisor', () => {
    const numbers = [1, 4, 5, 10, 0];
    const divisor = -2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([-0.5, -2, -2.5, -5, 0]);
  });
  it('returns a new array where returned entries are negative if entry is negative', () => {
    const numbers = [1, -4, 5, 10, 0];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0.5, -2, 2.5, 5, 0]);
  });
  it('returns infinity for each entry if divisor is infinity', () => {
    const numbers = [1, 4, 5, 10, 0];
    const divisor = Infinity;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([Infinity, Infinity, Infinity, Infinity, Infinity]);
  });
  it('returns infinity for each entry if divisor is 0', () => {
    const numbers = [1, 4, 5, 10, 0];
    const divisor = 0;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([Infinity, Infinity, Infinity, Infinity, Infinity]);
  });
  it('returns infinity if entry is infinity', () => {
    const numbers = [Infinity, 0, 4, 10];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([Infinity, 0, 2, 5]);
  });
  it('returns empty array for an empty array', () => {
    const numbers: number[] = [];
    const divisor = Infinity;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });
});

describe('multiplyBy', () => {
  it('returns the object where each value is multiplied by the multiplier if the value is a number', () => {
    const obj = { one: 1, two: 2, three: 'three' };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ one: 2, two: 4, three: 'three' });
  });
  it('returns the object where each value is multiplied by the multiplier', () => {
    const obj = { one: 1, two: 2, three: 3 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ one: 2, two: 4, three: 6 });
  });
  it('returns the object where each number value is negative for negative multiplier', () => {
    const obj = { one: 1, two: 2, three: 'three' };
    const multiplier = -2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ one: -2, two: -4, three: 'three' });
  });
  it('returns the object where each number value is 0 for 0 multiplier', () => {
    const obj = { one: 1, two: 2, three: 'three' };
    const multiplier = 0;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ one: 0, two: 0, three: 'three' });
  });
  it('returns the object where each number value is Infinity for Infinity multiplier', () => {
    const obj = { one: 1, two: 2, three: 'three' };
    const multiplier = Infinity;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ one: Infinity, two: Infinity, three: 'three' });
  });
  it('returns the modified object', () => {
    const obj = { one: 1, two: 2, three: 'three' };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ one: 2, two: 4, three: 'three' });
    expect(result).toBe(obj);
  });
});
