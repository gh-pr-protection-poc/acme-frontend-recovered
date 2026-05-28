export class AuthClient {
  constructor() {
    this.token = null;
    this.user = null;
  }

  async login(username, password) {
    this.token = 'stub-token-' + username;
    this.user = { name: username };
    return this.token;
  }

  async logout() {
    this.token = null;
    this.user = null;
  }

  isAuthenticated() {
    return this.token !== null;
  }
}
