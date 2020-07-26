function findSmallest(list: number[]): number {
    let result = list[0];
    let resultIndex = 0;

    for (let i = 0; i < list.length; i++) {
        if (list[i] < result) {
            result = list[i];
            resultIndex = i;
        }
    }
    return resultIndex;
}

export default function selectionSort(list: number[]): number[] {
    const originalList = list.slice();
    const sortedList = [];

    for (let i = 0; i < list.length; i++) {
        const smallest = findSmallest(originalList);
        sortedList.push(originalList[smallest]);
        originalList.splice(smallest, 1);
    }

    return sortedList;
}
