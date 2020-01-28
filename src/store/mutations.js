// https://vuex.vuejs.org/en/mutations.html

export default {
  update (state, payload) {
    state = Object.assign(state, payload)
  }
}
