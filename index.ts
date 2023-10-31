// hashvum e massivi arjeqneri qanak@
function arrSum(arr: any[]): number {
  let sum = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      sum += arrSum(item);
    } else if (typeof item === 'number') {
      sum += item;
    }
  }

  return sum;
}

const arr: any[] = [1, 2, 3, [1, 2], [1, [1, 2,[2]]]];
const result: number = arrSum(arr);
console.log(`arjeqneri qanak: ${result}`);