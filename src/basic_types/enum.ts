enum Dogs {
  BULLDOG,
  HUSKY = 5,
  POODLE,
}

const myDog: {
  name: string;
  age: number;
  type: Dogs;
} = {
  name: 'Huki',
  age: 3,
  type: Dogs.BULLDOG,
};
