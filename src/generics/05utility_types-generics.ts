// Utility types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial type
// it tells TS, that this is an object which in the
// end will be a Coursegoal. But initially, partial
// kind of wraps our own type and changes it to a
// type where all these properties are optional.

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // so at the and we should return back as CourseGoal
  return courseGoal as CourseGoal;
}

//
// Radonly utilty type, create a freezed tuple for examle, works for obj too
const namesToCollect: Readonly<string[]> = ['Max', 'Gunter'];
namesToCollect.push('Ildi');

//
// UNION VS. GENERICS
//
/*
 Union types can be great if you want
to have a function which you can
call with one of these types every time you call it.
Generic types are great if you want to
lock in a certain type.
Use the same type throughout the entire
class instance you create.
Use the same type throughout the entire function.
That's where you want the generic type.
You want union types when you are
flexible to have a different type
with every method call, with every function call.
Then, you can use union types.

Generic types lock in a type.
 */
