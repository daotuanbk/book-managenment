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
    mongoConnectionString: 'mongodb://localhost:27017/project1',
    mongoConnectionToken: 'mongoConnectionToken',
  },
  nextjs: {
    apiUrl: 'http://localhost:3000/api',
    hostUrl: 'http://localhost:3000/',
    cookieDomain: 'localhost',
    corsOrigin: /.*\.localhost:3000$/,
  },
  customMail: {
      user: 'test@techkids.io',
      pass: 'pdbhlyhqghyfslhs'
  },
  automaticMail: {
      user: 'noreply@up-beat.io',
      pass: 'rpzztqjgdnqacanc',
      service: 'yandex',
      host: 'smtp.yandex.com',
      username: 'Up Beat <noreply@up-beat.io>'
  },
  kdcMail: {
      user: 'test@techkids.io',
      pass: 'sdflfhfxiqdxcttv',
      service: 'gmail',
      host: 'smtp.gmail.com',
      username: 'Techkids <test@techkids.io>'
  }
};

export default defaultConfig;