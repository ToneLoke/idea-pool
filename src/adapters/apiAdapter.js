const baseURL = 'https://small-project-api.herokuapp.com'

const headers = () => {
  const JWT = localStorage.getItem('jwt')
  return {
    'Content-Type': 'application/json',
    'x-access-token': JWT
  }
}

class API {
  static request (url, method, data) {
    const promise = new Promise((resolve, reject) => {
      if (!(typeof url === 'string') || !(typeof url === 'string')) return reject(new Error('url and method must be type string'))
      let params = {
        method: method,
        headers: headers()
      }
      if (data) params = {...params, body: JSON.stringify(data)}
      return fetch(`${baseURL}/${url}`, params)
              .then(res => res.json())
              .then(s => {
                if (s.reason) return reject(s)
                return resolve(s)
              })
              .catch(e => reject(e))
    })
    return promise
  }
}

export class Auth extends API {
  static login (params) {
    return super.request('access-tokens', 'POST', params)
  }
  static signUp (params) {
    return super.request('users', 'POST', params)
  }
  static user () {
    return super.request('me', 'GET')
  }
  static refresh (params) {
    return super.request('access-tokens/refresh', 'POST', params)
  }
}

export class Ideas extends API {
  static get URL () {
    return 'ideas'
  }
  static get () {
    return super.request(Ideas.URL, 'GET')
  }
  static create (params) {
    return super.request(Ideas.URL, 'POST', params)
  }
  static delete (id) {
    return super.request(`${Ideas.URL}/${id}`, 'DELETE')
  }
  static update (id, params) {
    return super.request(`${Ideas.URL}/${id}`, 'PUT', params)
  }

}
