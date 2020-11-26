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
      path: '/table',
      name: 'table',
    },
  ];