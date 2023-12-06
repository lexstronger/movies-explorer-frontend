class MainApi {
  constructor({basePath, headers}) {
    this._basePath = basePath;
    this._headers = headers;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson)    
  }

  setAuthHeaders(token) {
    this._headers = {...this._headers, authorization: `Bearer ${token}`};
  }

  checkToken(token) {
    return this._request(
      `${this._basePath}/users/me`, 
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        }
      }
    )
  }

  register({name, email, password}) {
    return this._request(
      `${this._basePath}/signup`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({ name, email, password }),
      }
    )
  }

  authorize({email, password}) {
    return this._request(
      `${this._basePath}/signin`,
      {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({ email, password }),
      }
    )
  }

  getCurrentUser() {
    return this._request(
      `${this._basePath}/users/me`, {
        headers: this._headers,
      }
    )
  }

  editUserInfo({name, email}) {
    return this._request(
      `${this._basePath}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({ name, email })
      }
    )
  }

  getSavedMovies() {
    return this._request(
      `${this._basePath}/movies`, {
        headers: this._headers,
      }
    )
  }

  addNewMovie(movie) {
    return this._request(
      `${this._basePath}/movies`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(movie)
      }
    )
  }

  deleteMovie(id) {
    return this._request(
      `${this._basePath}/movies/${id}`, {
        method: "DELETE",
        headers: this._headers,
      }
    )
  }
}

const mainApi = new MainApi({
  basePath: 'https://api.lexstronger.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
    authorization: ''
  }
});

export default mainApi;