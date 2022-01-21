class Button {
  _width;
  _height;
  _text;
  constructor(wigth = '100px', height = '50px', text = 'Hello') {
    this._height = height;
    this._text = text;
    this._width = wigth;
  }
  showBtn() {
    document.writeln(
      `<button style="height:${this._height};width:${this._width}">${this._text}</button>`
    );
  }
}

class BootstrapButton extends Button {
  _color;
  constructor(color) {
    super(color);
    this._color = color;
  }

  showBtn() {
    document.writeln(
      `<button style="height:${this._height};width:${this._width};background-color:${this._color}">${this._text}</button>`
    );
  }
}

let btn = new Button('200px', '150px', 'This`s button');
btn.showBtn();

let BootstrBtn = new BootstrapButton('red');
BootstrBtn.showBtn();
