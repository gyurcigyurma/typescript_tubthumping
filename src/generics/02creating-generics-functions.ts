function mergeObjects(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

console.log(mergeObjects({ name: 'Gunter' }, { age: 2 }));

//working right? yes! what's the problem? try to store it and access a property

const mergedObj = mergeObjects({ name: 'Gunter' }, { age: 2 }) as {
  name: string;
  age: number;
};
mergedObj.age; // hoops; Property age does not exist on type object, one solution can be: const mergedObj = mergeObjects({ name: 'Gunter' }, { age: 2 }) as {name: string, age:number}

// here comes generics:
function mergeObj<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = mergeObj({ name: 'Gunter' }, { age: 244 });
console.log(mergedObj2.age);

//you also tell TS which types should fill in

function mergeAny<T, U>(objA: T, objB: U) {
  Object.assign(objA, objB); //shows error because of new Object.assign
}
const mergedObj3 = mergeObj<string, number>(
  { name: 'Gunter', hobbies: ['Soccer'] },
  { age: 244 }
); //fails as we passing different types

//you can also specify exact shape for generics, this will work, but redudant and TS can infer types as well
const mergedObj4 = mergeObj<
  { name: string; hobbies: string[] },
  { age: number }
>({ name: 'Gunter', hobbies: ['Soccer'] }, { age: 244 }); //fails as we passing different types

function mergeAny2<T extends object, U extends object>(objA: T, objB: U) {
  //T, U extend object is a fix as Object.assign specification changed,
  // these are type constraints, without this, we can pass a param (ie. 34 as number) and we won't get any error
  Object.assign(objA, objB);
}

const mergedObj5 = mergeAny2(
  { name: 'Max', hobbies: ['Cycling'] },
  { age: 30 }
);

console.log(mergedObj5);

////////////////////
// This example shows that we have no interest in which type of data we are getting here.
// We don't want to lock the params to a string or an array.  We can also avoid to create
// a lot of function overloads, and we can avoid using very long union types. Still can
// happen that forget types which have a length property or if we create our own object
// with length property then a (string | Array) type restrict us from using it.
// Generics is like a bit old school JS, so a bit unspecified about types of data, but
// still more specific than any -s.

type Lengthy = {
  length: number;
};

function countAndDescibe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got' + element.length + ' elements';
  }

  return [element, descriptionText];
}

console.log(countAndDescibe('Hello John'));
console.log(countAndDescibe(['Sports', 'Cooking']));
console.log(countAndDescibe(10)); //ERR as numbers dont have length
