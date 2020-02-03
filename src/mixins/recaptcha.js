/**
 * Google Recaptcha v3
 */

/* global grecaptcha */

const recaptchaSiteKey = process.env.VUE_APP_RECAPTCHA_SITE_KEY

export const recaptcha = {
  data () {
    return {
      recaptchaSiteKey: recaptchaSiteKey
    }
  },
  methods: {
    getRecaptchaToken: function (action) {
      return new Promise((resolve) => {
        grecaptcha.ready(() => {
          grecaptcha.execute(this.recaptchaSiteKey, { action: action })
            .then((token) => {
              console.log('token', token)
              resolve(token)
            })
        })
      })
    }
  },
  mounted () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`)
    document.head.appendChild(recaptchaScript)
  }
}
