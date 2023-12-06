class MoviesApi {
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
    return fetch(url, options).then(this._getJson);
  }

  getMovies() {
    return this._request(
      `${this._basePath}/beatfilm-movies`, {
        headers: this._headers,
      }
    )
  }
}

const moviesApi = new MoviesApi({
  basePath: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default moviesApi;

