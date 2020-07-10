export default function binarySearch(list: number[], value: number): number | null {
    let firstIdx = 0;
    let lastIdx = list.length - 1;

    while (firstIdx <= lastIdx) {
        const middleIdx = Math.round((firstIdx + lastIdx) / 2);
        const guess = list[middleIdx];

        if (guess === value) {
            return middleIdx;
        }

        if (guess > value) {
            lastIdx = middleIdx - 1;
        }

        if (guess < value) {
            firstIdx = middleIdx + 1;
        }
    }

    return null;
}
