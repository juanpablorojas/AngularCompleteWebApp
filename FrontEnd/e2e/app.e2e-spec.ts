import { CompleteWebbAppPage } from './app.po';

describe('complete-webb-app App', () => {
  let page: CompleteWebbAppPage;

  beforeEach(() => {
    page = new CompleteWebbAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
