import BasePage from '../../base';
import DocumentLayout from './document_layout';

export default class DocumentFormLayout extends BasePage {
  constructor(selector, docType, layout) {
    super(selector);
    this._docType = docType;
    this._layout = layout;
  }

  set title(title) {
    return this.el.element('.input-element input').setValue(title);
  }

  get layout() {
    return new DocumentLayout(`nuxeo-${this._docType.toLowerCase()}-${this._layout}-layout`);
  }

  get errorMessages() {
    return this.el.elements('#error .error').value.map((errorElt) => errorElt.getText());
  }

  save() {
    this.el.waitForVisible('.actions #save');
    this.el.click('.actions #save');
  }
}
