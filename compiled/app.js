function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(3, 4));
var combineValues;
combineValues = add;
// ERR!
combineValues = printResult;
