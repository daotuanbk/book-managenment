const sidebarItems = [
  {
    key: 'authentication',
    title: 'Authentication',
    permissions: [],
    icon: 'user',
    items: [
      {
        key: '/dashboard/users',
        path: '/dashboard/users',
        title: 'Users',
        permissions: [],
      },
      {
        key: '/dashboard/roles',
        path: '/dashboard/roles',
        title: 'Roles',
        permissions: [],
      },
    ],
  },
  {
    key: 'website',
    title: 'Website',
    permissions: [],
    icon: 'book',
    items: [
      {
        key: '/dashboard/book/managenment',
        path: '/dashboard/book/managenment',
        title: 'Books Managenment',
        permissions: [],
      },
      {
        key: '/dashboard/lent/managenment',
        path: '/dashboard/lent/managenment',
        title: 'Lents Managenment',
        permissions: [],
      },
    ],
  },
];

export default sidebarItems;