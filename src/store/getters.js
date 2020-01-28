// https://vuex.vuejs.org/en/getters.html

export default {
  authorized: state => !!state.token,
  authstatus: state => state.authStatus
}
