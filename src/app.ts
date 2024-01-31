const userName = 'Gunter';

console.log(userName);

function add33(a: number, b: number) {
  return a + b;
}

const printOut: (a: number | string) => void = (output) => console.log(output);

printOut(34);

const fn = async () => {};
