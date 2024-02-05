type AddFn = (a: number, b: number) => number;

let addF: AddFn;

addF = (a: number, b: number): number => {
  return a + b;
};

///////////////////////////////////////////

interface AnotherAddFn {
  (a: number, b: number): number;
}

let addFnNew: AnotherAddFn;

addFnNew = function (a: number, b: number): number {
  return a + b;
};
