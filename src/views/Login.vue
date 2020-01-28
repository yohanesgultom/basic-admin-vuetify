<template>
  <v-content>
    <v-container
      fill-height
      fluid>
      <v-layout
        align-center
        justify-center>
        <v-flex
          xs12
          sm8
          md4>
          <material-card
            color="info"
            :title="$t('Common.login')"
          >
            <v-card-text>
              <v-form >
                <v-text-field
                  ref="username"
                  v-model="username"
                  :rules="[() => !!username || 'This field is required']"
                  prepend-icon="mdi-account"
                  label="Login"
                  placeholder="username"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || 'This field is required']"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-icon="mdi-lock"
                  label="Password"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="login"
                  @click:append="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                align-center
                justify-center
                color="info"
                @click="login">{{ $t('Common.login') }}
              </v-btn>
            </v-card-actions>
            <v-snackbar
              v-model="snackbar"
              :color="color"
              :top='true'
            >
              {{ errorMessages }}
              <v-btn
                dark
                flat
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
          </material-card>
        </v-flex>
      </v-layout>
      
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: function () {
    return {
      username: '',
      password: '',
      errorMessages: 'Incorrect login info',
      snackbar: false,
      color: 'general',
      showPassword: false
    }
  },

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
  methods: {
    login: function () {      
      let username = this.username
      let password = this.password
      if (username && password) {
        this.$store.commit('update', { overlay: true })
        this.$http.post('/auth/login', { email: username, password: password })
          .then(response => {
            const token = response.data.access_token
            const user = response.data.email
            // console.log(response)
            // storing jwt in localStorage. https cookie is safer place to store
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
            // mutation to change state properties to the values passed along
            this.$store.commit('update', { 
              overlay: false, 
              authStatus: 'success', 
              token: token, 
              user: user 
            })
            this.$router.push('/')
          })
          .catch(err => {
            console.error(err)
            this.$store.commit('update', { 
              overlay: false,
              authStatus: 'error', 
              token: null, 
              user: null 
            })
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            this.snackbar = true
          })
      }
    }
  },
  metaInfo () {
    return {
      title: this.$t('Common.login') + ' | ' + this.$t('Common.title')
    }
  }
}
</script>
