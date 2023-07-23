export default [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: '@/layouts/index',
    meta: {
      title: '工作台',
    },
    routes: [
      { exact: true, path: '/dashboard', component: '@/pages/dashboard/index' },
    ],
  },
  {
    path: '/project',
    name: 'project',
    component: '@/layouts/index',
    meta: {
      title: '项目',
    },
    routes: [
      { exact: true, path: '/project', component: '@/pages/project/index' },
    ],
  },
  {
    path: '/vue',
    microApp: 'vue',
  },
];
