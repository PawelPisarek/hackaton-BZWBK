import { BankitupPage } from './app.po';

describe('bankitup App', () => {
  let page: BankitupPage;

  beforeEach(() => {
    page = new BankitupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
