import selectionSort from '../src/selectionSort';

test('Sort array with positive numbers', () => {
    expect(selectionSort([200, 3, 50, 77, 1])).toEqual([1, 3, 50, 77, 200]);
});

test('Sort array with negative numbers and zero', () => {
    expect(selectionSort([-1, 200, 4005, -75211, 0, 6720])).toEqual([-75211, -1, 0, 200, 4005, 6720]);
});

test('Sort array with same numbers', () => {
    expect(selectionSort([-1, 2, 3, -3, 2, 5])).toEqual([-3, -1, 2, 2, 3, 5]);
});
