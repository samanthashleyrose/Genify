import decode from 'jwt-decode';

class AuthService {

    loggedIn() {
      const token = this.getToken();
      return token && !this.isTokenExpired(token) ? true : false;
    }
  
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          localStorage.removeItem('id_token');
          return true;
        } else 
        return false;
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