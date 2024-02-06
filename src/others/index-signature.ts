const userInput = <HTMLInputElement>document.getElementById('user-input')!;
//OR
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi by me';
}

// In your ErrorContainer interface, the
// [prop: string]: string;
// index signature signifies that any additional
// property name (a string in this case) that's
// not defined explicitly in the interface (like 'id')
// will have a value of type string.

// Key takeaway: index signature types must have the same value type.
// If you want different type then this can work:

/* interface ErrorContainer {
  id: number;
  [prop: string]: string | number;
}

const errorBag: ErrorContainer = {
  id: 34,
  email: 'Not a valid email address',
}; */

/* So this is not valid:

interface ErrorContainer {
  id: number;
  [prop: string]: string;
} 

*/

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email address',
  userName: 'Gunter',
};
