export function setToken(username) {
    sessionStorage.setItem('username', JSON.stringify(username));
  }

 export function getToken() {
    const tokenString = sessionStorage.getItem('username');
    const userToken = JSON.parse(tokenString);
    return userToken?userToken:'';
  }

  export function deleteToken() {
    sessionStorage.removeItem('username')
  }