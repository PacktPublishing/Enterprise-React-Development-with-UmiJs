export default [
  {
    path: '/login',
    component: '@/pages/Login',
    layout: false,
  },
  {
    path: '/',
    name: 'home',
    icon: 'home',
    component: '@/pages/Home',
  },
  {
    path: '/customers',
    name: 'customers',
    icon: 'user',
    component: '@/pages/Customers',
  },
  {
    path: '/opportunities',
    name: 'opportunities',
    icon: 'AccountBook',
    component: '@/pages/Opportunities',
  },
  {
    path: '/reports',
    name: 'reports',
    icon: 'BarChartOutlined',
    component: '@/pages/Reports',
  },
];
