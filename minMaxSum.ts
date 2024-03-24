export function miniMaxSum(arr: number[]): void {
  const totalSum: number = arr.reduce((acc, cur) => acc + cur, 0);
  const minNumber: number = Math.min(...arr);
  const maxNumber: number = Math.max(...arr);
  const minSum: number = totalSum - maxNumber;
  const maxSum: number = totalSum - minNumber;
  console.log(minSum, maxSum);
}
