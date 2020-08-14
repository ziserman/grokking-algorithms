import getRandomInt from './utils/getRandomInt';

export default function quickSort(arr: number[]): number[] {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = getRandomInt(0, arr.length - 1);
    const greater = [];
    const less = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === pivot) {
            continue;
        }
        if (arr[pivot] < arr[i]) {
            greater.push(arr[i]);
            continue;
        }

        if (arr[pivot] >= arr[i]) {
            less.push(arr[i]);
        }
    }

    return quickSort(less).concat(arr[pivot], quickSort(greater));
}
