//узнаем число подмассивов
function arraysCount(arr: any[]): number {
  let count = 0;
  let index = 0;

  while (index < arr.length) {
    if (Array.isArray(arr[index])) {
      count++; 
      count += arraysCount(arr[index]);
    }
    index++;
  }

  return count;
}

const arr: any[] = [1, 2, 3, [1, 2], [1, [1, 2]]];
const result: number = arraysCount(arr);
console.log(`qanak: ${result}`);
