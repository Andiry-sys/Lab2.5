class GeometricFigure {
  _name;
  _width;
  _height;
  constructor(name = '', width = 0, height = 0) {
    this._name = name;
    this._height = height;
    this._width = width;
  }
  get GetName() {
    return this._name;
  }

  Info() {
    console.log(
      `\nName:${this._name}\nWidth: ${this._width}\nHeight: ${this._height} `
    );
  }
  FigureArea() {
    console.log(`Square: ${this._width * this._height}`);
  }
  PerimeterFigure() {
    console.log(
      `Perimetr: ${(Number(this._width) + Number(this._height)) * 2}`
    );
  }
}

class Square extends GeometricFigure {}
console.log(`First`);
let sqr = new Square('Square', 30, 30);
sqr.Info();
console.log(sqr.GetName);
sqr.FigureArea();
sqr.PerimeterFigure();

class Rectangle extends GeometricFigure {}
let rect = new Rectangle('Rectangle', 40, 30);
rect.Info();
console.log(rect.GetName);
rect.FigureArea();
rect.PerimeterFigure();

class Triangle extends GeometricFigure {
  _length;
  constructor(name, lenght = 0, width = 0, height = 0) {
    super(name, lenght, width, height);
    this._name = name;
    this._length = lenght;
    this._width = width;
    this._height = height;
  }
  Info() {
    console.log(
      `\nName: ${this._name}\nLength: ${this._length}\nWidth: ${this._width}\nHeight: ${this._height} `
    );
  }
  FigureArea() {
    console.log(`Square: ${(this._width * this._height) / 0.5}`);
  }
  PerimeterFigure() {
    console.log(
      `Perimetr: ${
        Number(this._width) + Number(this._height) + Number(this._length)
      }`
    );
  }
}
let tria = new Triangle('Triangle', 10, 15, 15);
tria.Info();
console.log(tria.GetName);
tria.FigureArea();
tria.PerimeterFigure();

let _array = [sqr, rect, tria];
console.log(`\nSecond`);
for (let i = 0; i < _array.length; i++) {
  console.log(
    `${_array[i].Info()} ${_array[i].PerimeterFigure()}\n${_array[
      i
    ].FigureArea()}`
  );
}
