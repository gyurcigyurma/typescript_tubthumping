function extractAndConvert(obj: object, key: string) {
  return obj[key];
}

// you see, TS shows an error for us, because at the end we don't know if obj object really have the given key string inside it
// so do some generics

// prettier-ignore
function extractAndConvert2 <T extends object, U extends keyof T>(obj: T, key: U) {
      return obj[key];
  }

extractAndConvert2({ baki: 4 }, 'baki');
