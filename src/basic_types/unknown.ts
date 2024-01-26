let userInput2: unknown;
let userName6: string;

userInput2 = 5;
userInput2 = 'Gunter';

//ERR
// @ts-ignore
userName6 = userInput2;

// however:
if (typeof userInput2 === 'string') {
  userName6 = userInput2;
}

//better than any
