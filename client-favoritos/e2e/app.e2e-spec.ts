import { ClientFavoritosPage } from './app.po';

describe('client-favoritos App', () => {
  let page: ClientFavoritosPage;

  beforeEach(() => {
    page = new ClientFavoritosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
