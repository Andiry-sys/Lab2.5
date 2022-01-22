class ExtentedArray extends Array {
  _array;
  constructor(array = []) {
    super(array);
    this._array = [...array];
  }

  GetString(separator) {
    let str = '';
    for (let i = 0; i < _array.length; i++) {
      str += _array[i] + separator;
    }
    str = str.slice(0, -1);
    console.log(`${str}`);
  }
}

let _array = [1, 2, 4, 3];

let arr = new ExtentedArray(_array);
console.log(`First`);
arr.GetString('/');
