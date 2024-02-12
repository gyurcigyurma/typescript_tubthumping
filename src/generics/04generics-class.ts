class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeitem(item: T) {
    //if for fixing for issue #1 or  use  class DataStorage<T extends string | number | boolean> {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  [];
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Gunter');
textStorage.addItem('Anna');
textStorage.removeitem('Gunter');
console.log(textStorage.getItems());

const numStorage = new DataStorage<number | string>();

//so far so good
// but issues comes with non primitives, issue #1

const objStorage = new DataStorage<object>();
objStorage.addItem({ name: 'Max' });
objStorage.addItem({ name: 'Anna' });
objStorage.removeitem({ name: 'Max' });
console.log(objStorage.getItems()); //only Anna should display, but you will se it's Max

//or

/*
 const objStorage = new DataStorage<object>();
const maxObj = { name: 'Max' };
objStorage.addItem({ name: 'Anna' });
objStorage.removeitem(maxObj);
console.log(objStorage.getItems()); //only Anna should display, but you will se it's Max 
*/
