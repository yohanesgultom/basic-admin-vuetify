// https://vuex.vuejs.org/en/state.html

export default {
  overlay: false,
  authStatus: '',
  token: localStorage.getItem('token') || '',
  user: {}
}
