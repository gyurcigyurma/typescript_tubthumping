// Function overloads

type CombinableType = string | number;
type Numerics = number | boolean;

type Universals = CombinableType & Numerics;

function add(a: CombinableType, b: CombinableType) {
  // type typeguard is here ˇˇˇ
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Gunter', 'happy');
// TS won't know if this spits out a string or not,
// but we do know as we passing strings to it so
// result.split('') will cause error,
// however we know it would work.

//here is a choice:
const result2 = add('Gunter', 'happy') as string;
result2.toLowerCase(); //working!
// but this is clumsy and ugly and not flexible

//do some function overloads:

function addTwoParams(a: number, b: number): number;
function addTwoParams(a: string, b: string): string;
function addTwoParams(a: CombinableType, b: CombinableType) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
// this tells TS how to handle propery return values:
const result3 = addTwoParams('Sanyi', 'Klara');
result3.toUpperCase();
