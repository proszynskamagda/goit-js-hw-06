class StringBuilder {
  constructor(initialValue) {
    this._value = initialValue;
  }

  getValue() {
    return this._value;
  }

  padEnd(str) {
    this._value += str;
  }

  padStart(str) {
    this._value = str + this._value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}
