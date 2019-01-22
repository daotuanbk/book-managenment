const defaultConfig = {
  app: {
    defaultPageSize: 10,
    maxPageSize: 50,
    pageSizeOptions: [10, 20, 50],
  },
  auth: {
    expiresIn: 60 * 60,
    secret: 'Ba2THViaoHd8Nn7tNNoRfWxrbi4u1oDefkQtdk01FzqY11Pr8dlM7fkkQnZJWKP',
    googleOauth: {},
    facebookOauth: {},
  },
  database: {
    mongoConnectionString: 'mongodb://admin:bigbang123@ds227045.mlab.com:27045/project1',
    mongoConnectionToken: 'mongoConnectionToken',
  },
  nextjs: {
    apiUrl: 'http://localhost:80/api',
    hostUrl: 'http://localhost:80/',
    cookieDomain: 'localhost',
    corsOrigin: /.*\.localhost:80$/,
  },
};

export default defaultConfig;