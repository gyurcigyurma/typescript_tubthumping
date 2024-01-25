let userInput3: unknown;
let userName2: string;

userInput3 = 5;
userInput3 = 'Gunter';

if (typeof userInput3 === 'string') {
  userName2 = userInput3;
}

//never produces value, never logs undefined if you try to
// console.log the result of generateError
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

generateError('an error occured', 330);
