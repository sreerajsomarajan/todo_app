import { Test123Page } from './app.po';

describe('test-123 App', function() {
  let page: Test123Page;

  beforeEach(() => {
    page = new Test123Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
