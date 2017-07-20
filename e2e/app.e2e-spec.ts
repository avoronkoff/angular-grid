import { AppGridPage } from './app.po';

describe('app-grid App', () => {
  let page: AppGridPage;

  beforeEach(() => {
    page = new AppGridPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
