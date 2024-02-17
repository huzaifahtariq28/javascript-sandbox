class HtmlElement {
  constructor() {
    this.click = () => {
      console.log('Clicked');
    };
  }
  focus() {
    console.log('Focused');
  }
}

class HtmlSelectElement {
  constructor(items = []) {
    this.items = items;

    this.addItem = (item) => {
      this.items.push(item);
    };

    this.removeItem = (item) => {
      this.items.splice(this.items.indexOf(item), 1);
    };

    this.render = () => {
      return `
            <select ${this.items
              .map(
                (item) => `
                <option ${item}</option>`
              )
              .join('')}
            </select>`;
    };
  }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

class HtmlImageElement {
  constructor(src) {
    this.src = src;

    this.render = () => {
      return `<img src="${this.src}" />`;
    };
  }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
