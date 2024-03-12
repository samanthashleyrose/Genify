import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      // Check if token expiration time is within the next 2 hours
      const expirationTime = decoded.exp * 1000;
      const twoHoursFromNow = Date.now() + 2 * 60 * 60 * 1000;
      if (expirationTime < twoHoursFromNow) {
        localStorage.removeItem('id_token');
        window.location.assign('/Login');
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/Home');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/Login');
  }
}

export default new AuthService();