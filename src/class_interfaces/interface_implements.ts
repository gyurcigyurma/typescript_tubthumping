interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Gunterke',
  age: 34,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi');

////////////////////////
///////////////////////

interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class AdvancedPerson implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(phrase + ' ' + this.name);
  }
}

let user2: AdvancedPerson;

user2 = {
  name: 'Gunterke',
  age: 34,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name + ` I'm an AdvancedPerson`);
  },
};

user2.greet('Heyy');
