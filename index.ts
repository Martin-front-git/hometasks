const arr: number[] = [
  51, 7, 34, 65, 78, 83, 5, 9, 1, 3, 4, 56, 78, 12, 32, 56, 45, 12, 112, 778,
  96, 56, 45, 12, 85, 112, 32, 552
];

// quick sort
function QuickSort(List: number[]): number[] {
  if (List.length <= 1) {
    return List;
  }

  const pivot = List[List.length - 1];
  const leftList: number[] = [];
  const rightList: number[] = [];

  for (let i = 0; i < List.length - 1; i++) {
    if (List[i] < pivot) {
      leftList.push(List[i]);
    } else {
      rightList.push(List[i]);
    }
  }

  return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
}
const sortedArr = QuickSort(arr);
console.log(sortedArr);

//=============================//
// Binary Search
interface SearchResult {
  index: number | boolean;
  iterations: number;
}

const search = (nums: number[], target: number): SearchResult => {
  let left = 0;
  let right = nums.length - 1;
  let mid: number;
  let iterations = 0;

  while (left <= right) {
    mid = Math.round((right - left) / 2 + left);

    iterations++;

    if (target === nums[mid]) {
      return { index: mid, iterations };
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return { index: false, iterations };
};

const target: number = 83;

const result: SearchResult = search(sortedArr, target);

if (result.index !== false) {
  console.log(`Элемент ${target} найден в позиции ${result.index}. Количество итераций: ${result.iterations}.`);
} else {
  console.log(`Элемент ${target} не найден. Количество итераций: ${result.iterations}.`);
}
