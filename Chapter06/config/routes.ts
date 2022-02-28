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
    path: '/reports',
    name: 'reports',
    icon: 'BarChartOutlined',
    component: '@/pages/Reports',
  },
  {
    path: '/opportunities',
    name: 'opportunities',
    icon: 'AccountBook',
    component: '@/pages/Opportunities',
  },
  {
    path: '/opportunity/:id',
    component: '@/pages/OpportunityDetail',
  },
  {
    path: '/customers',
    name: 'customers',
    icon: 'user',
    component: '@/pages/Customers',
  },
  {
    path: '/workflow',
    name: 'workflow',
    access: 'canAdmin',
    icon: 'DeploymentUnitOutlined',
    component: '@/pages/Workflow',
  },
  {
    component: '@/pages/404',
  },
];
