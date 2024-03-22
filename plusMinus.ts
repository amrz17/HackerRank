export function plusMinus(arr: number[]): void {
  let elementPost = 0;
  let elementNeg = 0;
  let elementZero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      elementPost++;
    } else if (arr[i] < 0) {
      elementNeg++;
    } else elementZero++;
  }

  elementPost /= arr.length;
  elementNeg /= arr.length;
  elementZero /= arr.length;

  console.log(elementPost.toFixed(6));
  console.log(elementNeg.toFixed(6));
  console.log(elementZero.toFixed(6));
}
