const baseUrl = 'https://small-project-api.herokuapp.com'

export default class AuthAdapter {
  static login (loginParams) {
    return fetch(`${baseUrl}/access-tokens`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }
  static signUp (signUpParams) {
    return fetch(`${baseUrl}/users`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(signUpParams)
    }).then(res => res.json())
  }
  static currentUser () {
    return fetch(`${baseUrl}/me`, {
      method: 'GET',
      headers: headers()
    }).then(res => res.json())
  }
}
function headers () {
  const JWT = localStorage.getItem('jwt')
  return {
    'content-type': 'application/json',
    'cookie': JWT ? `ACCESS_TOKEN=${JWT}` : ''
  }
}
