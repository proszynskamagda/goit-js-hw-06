class Storage {
  constructor(initialItems) {
    this._items = initialItems;
  }

  getItems() {
    return this._items;
  }

  addItem(newItem) {
    this._items.push(newItem);
  }

  removeItem(itemToRemove) {
    this._items = this._items.filter((item) => item !== itemToRemove);
  }
}
