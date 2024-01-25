function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

printResult(add(3, 4));

let combineValues: (a: number, b: number) => number;

combineValues = add;

// ERR!
// @ts-ignore
combineValues = printResult;
