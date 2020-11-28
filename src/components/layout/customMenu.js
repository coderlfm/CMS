export default [
  {
    path: '/',
    name: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        exact: true,
      },
      {
        path: '/profile',
        name: 'profile',
        exact: true,
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
  },
  {
    path: '/cms',
    name: '/cms',
    children: [
      {
        path: '/cms/table',
        name: '/cms/table',
        exact: true,
      },
      {
        path: '/cms/date',
        key: '/cms/date',
        name: '日期搜索示例',
        exact: true,
      },
    ]
  },
];