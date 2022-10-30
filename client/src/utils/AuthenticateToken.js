import jwt_decode from 'jwt-decode'


export const authenticateToken = () => {
  const localStorageToken = window.localStorage.getItem('token')

  // check if token exists in localStorage, if not, then return false, so that you can set loggedIn to false
  if(!localStorageToken) return false

  const decodedObject = jwt_decode(localStorageToken)

  if(Date.now() < decodedObject.exp * 1000) {
    // if the current time is less than the expiration time, the token has not expired yet, you should return true because then you can set loggedIn to true
    return true
  } else {
    // if the current time is greater than the expiration time, this token has expired, therefore, we must delete it
    window.localStorage.removeItem('token')

    // then we return false so that we can change loggedIn to false
    return false
  }

}