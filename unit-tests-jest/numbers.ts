/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers: number[]): number[] {
  return numbers.filter((n) => n % 2===0);
}

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount: number): string {
  if (amount < 0) return `-$${(-amount).toFixed(2)}`;
  return `$${amount.toFixed(2)}`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
export function divideBy(numbers: number[], divisor: number): number[] {
  const dividedNumbers = numbers.map((num) => {
    if (divisor === Infinity || divisor === 0) return Infinity;
    if (num === 0) return 0;
    return num / divisor;
  });
  return dividedNumbers;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
export function multiplyBy(
  obj: Record<string, unknown>,
  multiplier: number
): Record<string, unknown> {
  Object.entries(obj).forEach(([key, value]) => {
    if (isNaN(Number(value))) {
      obj[key] = value;
    } else {
      obj[key] = Number(value) * multiplier;
    }
  });
  return obj;
}
