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
            :title="$t('registration')"
            color="success"
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
                />
                <v-text-field
                  ref="passwordConfirmation"
                  v-model="passwordConfirmation"
                  :rules="[() => !!passwordConfirmation || $t('requiredMessage'), () => passwordConfirmation === password || $t('invalidConfirmationMessage')]"
                  :append-icon="showPasswordConfirmation ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPasswordConfirmation ? 'text' : 'password'"
                  :label="$t('passwordConfirmation')"
                  prepend-icon="mdi-lock"
                  placeholder="*********"
                  counter
                  required
                  @keydown.enter="register"
                  @click:append="showPasswordConfirmation = !showPasswordConfirmation"
                />
              </v-form>
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                align-center
                justify-center
                color="success"
                @click="register">{{ $t('register') }}
              </v-btn>
              <v-btn
                align-center
                justify-center
                to="login">{{ $t('login') }}
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
      passwordConfirmation: '',
      color: 'general',
      showPassword: false,
      showPasswordConfirmation: false
    }
  },

  // Sends action to Vuex that will log you in and redirect to the dash otherwise, error
  methods: {
    register: async function () {
      if (this.$refs.form.validate()) {
        this.$store.commit('update', { overlay: true })
        try {
          let recaptchaToken = await this.getRecaptchaToken('register')
          await this.$http.post('/auth/register', {
            email: this.username,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
            g_recaptcha_response: recaptchaToken
          })
          this.$store.commit('update', {
            overlay: false,
            alertMessage: this.$t('registrationSuccess')
          })
        } catch (err) {
          let errMsg = err.response.data || err
          console.error(err.response)
          this.$store.commit('update', {
            overlay: false,
            alertMessage: errMsg
          })
        }
      }
    }
  },
  metaInfo () {
    return {
      title: this.$t('registration') + ' | ' + this.$t('title')
    }
  }
}
</script>
