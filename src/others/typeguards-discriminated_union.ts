type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  // type typeguard is here ˇˇˇ
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

/////////////////////////

//@ts-nocheck
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type UnknowEmployee = Employee | Admin;

const em1: UnknowEmployee = {
  name: 'Bela',
  privileges: ['read'],
  startDate: new Date(),
};

function printEmployeeInformation(emp: UnknowEmployee) {
  console.log('Name: ', emp.name);

  // property check typeguard is here ˇˇˇ
  if ('priviliges' in emp) {
    console.log('Priviliges: ' + emp.priviliges);
  }
  if ('startDate' in emp) {
    console.log('Start date: ' + emp.startDate);
  }
}
printEmployeeInformation(em1);

//////////////////

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  loadCargo(amount: number) {
    console.log('Loading cargo... ', amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(2334);
  }

  // OR for classes:

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(214);
  }
}

useVehicle(v1);
useVehicle(v2);

//////////////////////////
///DISCRIMINATED UNIONS //
//////////////////////////

interface Bird {
  type: 'bird'; //literal type for discriminating unions
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAninal(animal: Animal) {
  // old tipical typeguard
  if ('flyingSpeed' in animal) {
    console.log('Moving with speed: ', animal.flyingSpeed);
  }

  let speed;

  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }

  console.log('Moving at speed ', speed);
}

moveAninal({ type: 'bird', flyingSpeed: 23 });
