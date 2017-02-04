import { SilverdoePage } from './app.po';

describe('silverdoe App', function() {
  let page: SilverdoePage;

  beforeEach(() => {
    page = new SilverdoePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
