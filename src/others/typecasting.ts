const userInput = <HTMLInputElement>document.getElementById('user-input')!;
//OR
const userInput2 = document.getElementById('user-input')! as HTMLInputElement;

console.log(userInput);

userInput.value = 'Some text by me';
