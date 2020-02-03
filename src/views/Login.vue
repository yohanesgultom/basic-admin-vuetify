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
            :title="$t('login')"
            color="info"
          >
            <v-card-text>              
              <v-form ref="form">
                <v-text-field
                  ref="username"
                  v-model="username"
                  :rules="[() => !!username || $t('requiredMessage')]"
                  :label="$t('email')"
                  prepend-icon="mdi-account"
                  placeholder="user@email.com"
                  required
                />
                <v-text-field
                  ref="password"
                  v-model="password"
                  :rules="[() => !!password || $t('requiredMessage')]"
                  :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  :label="$t('password')"
                  prepend-icon="mdi-lock"
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
                @click="login">{{ $t('login') }}
              </v-btn>
              <v-btn
                align-center
                justify-center
                to="register">{{ $t('register') }}
              </v-btn>
            </v-card-actions>
          </material-card>
        </v-flex>
      </v-layout>

    </v-container>
  </v-content>
</template>

<script>
import { recaptcha } from '@/mixins/recaptcha.js'

export default {
  mixins: [recaptcha],
  data: function () {
    return {
      username: '',
      password: '',
      showPassword: false
    }
  },

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
  methods: {
    login: async function () {
      if (this.$refs.form.validate()) {
        this.$store.commit('update', { overlay: true })
        try {
          // get recaptcha token
          let recaptchaToken = await this.getRecaptchaToken('login')
          // attempt login to server
          let response = await this.$http.post('/auth/login', {
            email: this.username,
            password: this.password,
            g_recaptcha_response: recaptchaToken
          })
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
        } catch (err) {
          console.error(err)
          let errMsg = err.response.data || err
          this.$store.commit('update', {
            overlay: false,
            alertMessage: errMsg,
            authStatus: 'error',
            token: null,
            user: null
          })
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          this.recaptchaToken = null
        }
      }
    }
  },
  metaInfo () {
    return {
      title: this.$t('login') + ' | ' + this.$t('title')
    }
  }
}
</script>
