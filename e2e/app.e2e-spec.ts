import { MtahackPage } from './app.po';

describe('mtahack App', function() {
  let page: MtahackPage;

  beforeEach(() => {
    page = new MtahackPage();
  });

  it('should display message saying components works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('components works!');
  });
});
