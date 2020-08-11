import recursiveBinarySearch from '../src/recursiveBinarySearch';
import { arraySample } from '../src/samples';

test('Simple 1 to 10 array, should return index equal to number', () => {
    const idx = 8;
    expect(recursiveBinarySearch(arraySample, idx)).toEqual(idx);
});

test('Not found case, should return null', () => {
    expect(recursiveBinarySearch(arraySample, 100)).toBeNull();
});

test('Array with negative numbers', () => {
    expect(
        recursiveBinarySearch(
            arraySample.map((i) => i - 5),
            -3
        )
    ).toEqual(2);
});
