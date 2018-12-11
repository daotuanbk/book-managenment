const sidebarItems = [
  {
    key: 'authentication',
    title: 'Authentication',
    permissions: [],
    icon: 'user',
    items: [
      {
        key: '/admin/users',
        path: '/admin/users',
        title: 'Users',
        permissions: [],
      },
      {
        key: '/admin/roles',
        path: '/admin/roles',
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
        key: '/admin/book/managenment',
        path: '/admin/book/managenment',
        title: 'Books Managenment',
        permissions: [],
      },
    ],
  },
];

export default sidebarItems;