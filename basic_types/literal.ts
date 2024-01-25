function combine3(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  // runtime check because of unions
  if (
    (typeof input1 == 'number' && typeof input2 == 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;

  /*   if (resultConversion === 'as-number') {
      return +result;
    } else {
      return result.toString();
    } */
}

const combinedAges = combine3(30, 11, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine3('30', '11', 'as-number');
console.log(combinedStringAges);

/* const combined = combine('Gunter', 'Anna');
  console.log(combinedNames3); */
