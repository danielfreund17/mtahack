import { browser, element, by } from 'protractor';

export class MtahackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('components-root h1')).getText();
  }
}
