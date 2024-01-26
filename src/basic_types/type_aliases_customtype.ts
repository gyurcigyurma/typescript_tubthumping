type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine4(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
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

const combinedAges4 = combine4(30, 11, 'as-number');
console.log(combinedAges4);

const combinedStringAges4 = combine4('30', '11', 'as-number');
console.log(combinedStringAges4);

/* const combined = combine('Gunter', 'Anna');
console.log(combinedNames3); */
