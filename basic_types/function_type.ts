function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

// cb has a return value void, however the callback has a return
// it's not a bug/mistake, TS ingores original return
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(3, 4));

let combineValues: (a: number, b: number) => number;

combineValues = add;

// ERR!
combineValues = printResult;

addAndHandle(10, 6, (res) => {
  console.log(res);
  return res;
});
