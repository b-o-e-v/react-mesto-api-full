class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  // Обработка ответа сервера
  _getStatus(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Error! : ${res.status}`)
    }
  }

  getServerData() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()])
  }

  // Обновить аватар
  updateAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._getStatus)
  }

  // Запросить информацию о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._getStatus)
  }

  // Обновить информацию о пользователе
  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getStatus)
  }

  // Запросить карточки
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getStatus)
  }

  // Загрузить карточку на сервер
  addCard(card) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then(this._getStatus)
  }

  // Удалить карточку
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getStatus)
  }

  // Лайк карточки
  likeCard(id, like) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this._headers,
    }).then(this._getStatus)
  }
}

export const api = new Api({
  url: 'https://api.mesto.boev.nomoredomains.club',
  headers: {
    'Authorization': localStorage.getItem('jwt'),
    'Content-Type': 'application/json'
  },
})
