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
    name: 'cms',
    children: [
      {
        path: '/cms/table',
        name: 'table',
        exact: true,
      },
      {
        path: '/cms/date',
        name: '日期搜索',
        exact: true,
      },
      {
        path: '/cms/number',
        name: '数字搜索',
        exact: true,
      },
      {
        path: '/cms/select',
        name: '选择搜索',
        exact: true,
      },
    ]
  },
];