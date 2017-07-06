import { QuarkerPage } from './app.po';

describe('quarker App', () => {
  let page: QuarkerPage;

  beforeEach(() => {
    page = new QuarkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
