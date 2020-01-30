/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
import store from '../store'
export default [
  {
    path: '*',
    meta: {
      name: '',
      requiresAuth: true
    },
    redirect: {
      path: { name: 'login' }
    }
  },
  // This  allows you to have pages apart of the app but no rendered inside the dash
  {
    path: '/login',
    meta: {
      name: 'login',
      requiresAuth: false
    },
    component: () =>
      import(/* webpackChunkName: "routes" */ `@/layouts/Public.vue`),
    // redirect if already signed in
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/')
      } else {
        next()
      }
    },
    children: [
      {
        path: '',
        component: () => import(`@/views/Login.vue`)
      }
    ]
  },
  {
    path: '/register',
    meta: {
      name: 'register',
      requiresAuth: false
    },
    component: () =>
      import(/* webpackChunkName: "routes" */ `@/layouts/Public.vue`),
    // redirect if already signed in
    beforeEnter: (to, from, next) => {
      if (store.getters.authorized) {
        next('/')
      } else {
        next()
      }
    },
    children: [
      {
        path: '',
        component: () => import(`@/views/Register.vue`)
      }
    ]
  },
  // add any extra routes that you want rendered in the dashboard as a child below. Change toolbar names here
  {
    path: '/',
    meta: {
      name: 'Secure Layout',
      requiresAuth: true
    },
    component: () => import(`@/layouts/Secure.vue`),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import(`@/views/Dashboard.vue`)
      },
      {
        path: 'user-profile',
        meta: {
          name: 'User Profile',
          requiresAuth: true
        },
        component: () => import(`@/views/UserProfile.vue`)
      },
      {
        path: 'table-list',
        meta: {
          name: 'Complex Tables test',
          requiresAuth: true
        },
        component: () => import(`@/views/TableList.vue`)
      },
      {
        path: 'typography',
        meta: {
          name: 'Typography',
          requiresAuth: true
        },
        component: () => import(`@/views/Typography.vue`)
      },
      {
        path: 'icons',
        meta: {
          name: 'Icons',
          requiresAuth: true
        },
        component: () => import(`@/views/Icons.vue`)
      },
      {
        path: 'maps',
        meta: {
          name: 'Maps',
          requiresAuth: true
        },
        component: () => import(`@/views/Maps.vue`)
      },
      {
        path: 'notifications',
        meta: {
          name: 'Notifications',
          requiresAuth: true
        },
        component: () => import(`@/views/Notifications.vue`)
      }
    ]
  }
]
