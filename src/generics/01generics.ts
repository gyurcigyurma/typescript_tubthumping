const names = ['Max', 'Gunter'];
const namez: Array<string> = []; // this exactly same as: const namez: string[] = [] but here Array is a type as well
names[0].split(' '); //working like a charm as TS knows array contains strings

const promize: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('Done');
  }, 2000);
});

promize.then((data) => {
  data.split('');
});
