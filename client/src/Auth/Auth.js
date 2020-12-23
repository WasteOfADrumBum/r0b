// src/Auth/Auth.js
import auth0 from "auth0-js";

// https://manage.auth0.com/dashboard/us/joshua-m-small/applications/S5p7O86jBMB9rDbXGyh1CR2GsegY3Zen/settings

export default class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated with auth0's credentials
      // domain: "joshua-m-small.us.auth0.com",
      // audience: "https://joshua-m-small.us.auth0.com/userinfo",
      // clientID: "S5p7O86jBMB9rDbXGyh1CR2GsegY3Zen",
      // redirectUri: "https://localhost:3000/callback",
      domain: "lively-sea-4801.us.auth0.com", // heroku auth0 domain
      // audience: "lively-sea-4801.us.auth0.com/userinfo", //heroku autho0
      clientID: "SIoLckvTfswa2c1he0cCpU1I0Hhf8I0t", // heroku auth0
      // redirectUri: "https://jms-r0b.herokuapp.com/callback", // heroku callback
      redirectUri: window.location.href,
      responseType: "token id_token",
      scope: "openid profile",

      // the following three lines MUST be updated
      //   domain: '<YOUR_AUTH0_DOMAIN>',
      //   audience: 'https://<YOUR_AUTH0_DOMAIN>/userinfo',
      //   clientID: '<YOUR_AUTH0_CLIENT_ID>',
      //   redirectUri: 'http://localhost:3000/callback',
      //   responseType: 'id_token',
      //   scope: 'openid profile'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.setSession = this.setSession.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        console.log(authResult);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    });
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    // clear id token and expiration
    this.idToken = null;
    this.expiresAt = null;
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
  }
}
