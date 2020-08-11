export default function recursiveBinarySearch(
    list: number[],
    value: number,
    start = 0,
    end = list.length - 1
): number | null {
    const middleIdx = Math.floor((start + end) / 2);

    if (list[middleIdx] === value) {
        return middleIdx;
    }

    if (start === end) {
        return null;
    }

    if (list[middleIdx] > value) {
        return recursiveBinarySearch(list, value, start, middleIdx);
    }

    return recursiveBinarySearch(list, value, middleIdx + 1, end);
}
