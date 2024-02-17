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
  }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement();
const s = new HtmlSelectElement([]);

e.click();
e.focus();

s.click();
s.focus();
