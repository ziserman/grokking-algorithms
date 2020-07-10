import binarySearch from '../src/binarySearch';

const arraySample = Array.from(Array(10).keys());

test('Simple 1 to 10 array, should return index equal to number', () => {
    const idx = 8;
    expect(binarySearch(arraySample, idx)).toEqual(idx);
});

test('Not found case, should return null', () => {
    expect(binarySearch(arraySample, 100)).toBeNull();
});

test('Array with negative numbers', () => {
    expect(
        binarySearch(
            arraySample.map((i) => i - 5),
            -3
        )
    ).toEqual(2);
});
