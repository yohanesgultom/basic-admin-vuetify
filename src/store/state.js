// https://vuex.vuejs.org/en/state.html

export default {
  alertMessage: false,
  overlay: false,
  authStatus: '',
  token: localStorage.getItem('token') || '',
  user: {}
}
