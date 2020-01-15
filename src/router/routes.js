import Login from '@/views/Login'

export const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      requiresAuth: false
    },
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register')
  },
  {
    path: '/location',
    name: 'location',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/Location')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/Profile')
  },
  {
    path: '/match',
    name: 'match',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/Match')
  },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/ChatHome')
  },
  {
    path: '/chat/:id',
    name: 'messages',
    meta: {
      requiresAuth: true
    },
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '@/views/Chat')
  }
]
