export const PAGES = {
  home: {
    name: 'home',
    path: '/'
  },
  add: {
    name: 'add',
    path: '/add'
  },
  edit: {
    name: 'edit',
    path: '/edit/:id',
    call: id => `/edit/${id}`
  },
  page404: {
    name: 'page404',
    path: '/page404'
  }
};
