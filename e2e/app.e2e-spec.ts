import { BaranovichytoolsPage } from './app.po';

describe('baranovichytools App', () => {
  let page: BaranovichytoolsPage;

  beforeEach(() => {
    page = new BaranovichytoolsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
