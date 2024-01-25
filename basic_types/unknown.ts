let userInput2: unknown;
let userName: string;

userInput2 = 5;
userInput2 = 'Gunter';

//ERR
userName = userInput2;

// however:
if (typeof userInput2 === 'string') {
  userName = userInput2;
}

//better than any
