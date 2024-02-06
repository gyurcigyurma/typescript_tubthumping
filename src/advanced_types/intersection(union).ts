//@ts-nocheck

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin | Employee;
type ElevatedEmployee2 = Admin & Employee;

const em1: ElevatedEmployee = {
  name: 'Bela',
  privileges: ['read'],
  startDate: new Date(),
};

const em2: ElevatedEmployee2 = {
  name: 'Bela',
  privileges: ['read'],
  startDate: new Date(),
};

//////////////////////////

type Combinables = string | number;
type Numeric = number | boolean;

type Universal = Combinables & Numeric;

const example: Universal = 34;

///////////////////////////

/*
  In TypeScript, & and | are called intersection and union types, respectively. 
  They're used to combine multiple types.
  Intersection Type (&): 
  An intersection type A & B is the combination of A and B. It means an object of this type will
  have all members of A and B. Intersection types are used to add together existing types to get a single type that has all the features required.
  
  Union Type (|): 
  A union type A | B is either A or B. An object of this type will have all the members of either A or B.
  Union types are used to express that a value can be one of several types.
  
  Here are examples:
*/

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection Type
type ElevatedEmployee = Admin & Employee;

let emp: ElevatedEmployee;

emp = {
  name: 'John',
  privileges: ['create-server'],
  startDate: new Date(),
};

console.log(emp);

// Union Type
type ElevatedEmployee2 = Admin | Employee;

let emp2: ElevatedEmployee2;

emp2 = {
  name: 'Alex',
  privileges: ['create-server'],
};

emp2 = {
  name: 'Alex',
  startDate: new Date(),
};

console.log(emp2);

/* 
  In the intersection type (ElevatedEmployee), emp requires properties of both Admin and Employee.
  
  In the union type (ElevatedEmployee2), emp2 could be either Admin or Employee, 
  and we can reassign it to a different shape if needed.
  However, Typescript will only allow you to access fields that are common between Admin and Employee.
  In this case, you'll only have access to the name property.
  */

/*
   
  In TypeScript, | (Union types) states that a value can be any of the types that are being "united".
  For instance, with Admin | Employee, your type ElevatedEmployee2 could be an Admin, an Employee, 
  or an object that includes all fields from BOTH types.
  
  This is because TypeScript’s type system is structural, not nominal: it's concerned only with the shape
  that values have, not what they're named.
  
  So, this object:

  {
    name: 'Bela',
    privileges: ['read'],
    startDate: new Date(),
  };

  is perfectly valid, because it fits the shape of both an Admin type and an Employee type.
  name & privileges fields meet the Admin shape, and name & startDate fields meet the Employee shape.
  
  Union types provide a way to handle different types with some common overlapping area.
  It doesn't limit you only to the exact types used in the union. It's more like saying
  "this could be an Admin, or an Employee, or anything else that has at least a name property".
  */
