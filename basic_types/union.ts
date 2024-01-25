function combine_(input1: number | string, input2: number | string) {
  let result;
  // runtime check because of unions
  if (typeof input1 == 'number' && typeof input2 == 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges_ = combine_(30, 11);
console.log(combinedAges_);

const combinedNames_ = combine_('Gunter', 'Anna');
console.log(combinedNames_);
