export function diagonalDifference(arr: number[][]): number {
  let sumDiagonalRight = 0;
  let sumDiagonalLeft = 0;
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    sumDiagonalRight += arr[i][arr.length - 1 - i];
    sumDiagonalLeft += arr[i][i];
  }
  diff = sumDiagonalRight - sumDiagonalLeft;
  return diff;
}
