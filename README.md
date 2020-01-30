# Basic Admin Vuetify

Basic admin web application build on top of [Vuetify Material Dashboard](https://github.com/creativetimofficial/vuetify-material-dashboard) from creative-tim.com. 

Demo: https://yohanesgultom.github.io/basic-admin-vuetify/ (login: `user@email.com/secret`)

Features:
1. Separate layouts for public (eg. Login) and secure (eg. Dashboard) views
2. Global overlay and snackbar
3. Internationalization with `vue-18n`
4. REST API integration with [Basic API Laravel](https://basic-api-laravel.herokuapp.com/)
5. CRUD Data Table

## Getting Started

Steps for local development:

- Install Nodejs from [Nodejs Official Page](https://nodejs.org/en/)
- Open your terminal
- Navigate to the project
- Copy `.env` to `.env.local` and adjust according to your environment setting
- Run `npm install` or `yarn install` if you use [Yarn](https://yarnpkg.com/en/)
- Run `npm run dev` or `yarn serve` to start a local development server
- A new tab will be opened in your browser
- Run `npm run lint` to run linting

Additional steps for production:

- Copy `.env` to `.env.production`
- Edit `.env.production` and `vue.config.js` according to your production environment 
- Run `npm run build` to build your app for production
- Deploy content of `dist/` to your production server
