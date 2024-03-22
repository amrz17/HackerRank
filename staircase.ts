export function staircase(n: number): void {
  for (let row = 1; row <= n; row++) {
    let output = "";
    for (let col = 1; col <= n; col++) {
      if (col <= n - row) {
        output += " ";
      } else {
        output += "#";
      }
    }
    console.log(output);
  }
}
