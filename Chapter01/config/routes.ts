export default [
  {
    path: '/',
    redirect: '/app/login',
  },
  {
    path: '/app',
    component: '@/layouts/Header',
    routes: [
      {
        exact: false,
        path: '/app/login',
        component: '@/pages/Login',
      },
      {
        path: '/app/home',
        component: '@/pages/Home',
      },
    ],
  },
];
