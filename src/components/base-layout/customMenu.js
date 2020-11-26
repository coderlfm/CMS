export default [
    {
      path: '/',
      name: '主页 ',
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
      name: '动态表格',
    },
  ];