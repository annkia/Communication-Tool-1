import api from './api'

export default {
  getPosts() {
    return new Promise((resolve, reject) => {
      api.get('/post')
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },

  getOnePost(postId) {
    return new Promise((resolve, reject) => {
      api.get(`/post/${postId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
    })
  },

  createPost(data) {
    return new Promise((resolve, reject) => {
      api.post('/post', data)
        .then((res) => {
          console.log('poszło post', res)
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  },

  updataPost(postId, data) {
    return new Promise((resolve, reject) => {
      api.put(`/post/${postId}`, data)
        .then((res) => {
          console.log('poszło put', res)
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  },

  deletePost(postId, data) {
    return new Promise((resolve, reject) => {
      api.delete(`/post/${postId}`)
        .then((res) => {
          console.log('usuniety', res)
          resolve(res)
        })
        .catch((err) => reject(err))
    })
  }

}
api.interceptors.request.use((config) => {
  if (sessionStorage.userId)
    config.headers = {
      'X-ZUMO-AUTH': sessionStorage.userId
    }
  return config
})