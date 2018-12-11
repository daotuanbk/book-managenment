import * as express from 'express';
import * as next from 'next';
import * as morgan from 'morgan';
import Authorize from './middlewares/authorize';
import booksManagenmentService from '../api/modules/website/book-managenment/service';
const setupNextjsRoutes = (server: express.Express, app: next.Server) => {
  const handle = app.getRequestHandler();

  server.get('/_next/*', (req, res) => {
    return handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    return handle(req, res);
  });
};

const setupPublicRoutes = (server: express.Express, app: next.Server) => {
  // Middleware
  server.use(morgan('short'));

  // Nextjs Pages
  server.get('/', async (req, res) => {

    app.render(req, res, '/', {
      ...req.query,
    });
  });

  server.get('/admin', async (_req, res) => {
    res.redirect('/admin/users');
  });

  server.get('/admin/login', async (req, res) => {
    app.render(req, res, '/admin/login', req.query);
  });

  server.get('/admin/users', Authorize(), async (req, res) => {
    app.render(req, res, '/admin/users', req.query);
  });

  server.get('/admin/roles', Authorize(), async (req, res) => {
    app.render(req, res, '/admin/roles', req.query);
  });

  server.get('/admin/book/managenment', Authorize(), async (req, res) => {
    const booksData = await booksManagenmentService.findBook({
      searchInput: '',
      pageNumber: 1,
      pageSize: 10,
      sortBy: 'title',
      asc: true
    });
    app.render(req, res, '/admin/book/managenment', {
      ...req.query,
      booksData,
    });

    server.get('/admin/book/create', Authorize(), async (req, res) => {
      //   const booksData = await booksManagenmentService.findBook({
      //     searchInput: '',
      //     pageNumber: 1,
      //     pageSize: 10,
      //     sortBy: 'title',
      //     asc: true
      // });

      app.render(req, res, '/admin/book/create', {
        ...req.query,
        // booksData,
      });
    })
    server.get('/admin/book/edit/:id', Authorize(), async (req, res) => {
      const actualPage = '/admin/book/edit';
      // const bookData = await booksManagenmentService.findBookById(req.params.id);
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams, Object.assign({
        id: req.params.id,
        slug: req.params.slug,
        name: req.params.name,
      }, req.query));
    })
    server.get('/admin/book/edit', (req, res) => {
      if (req.query.id) {
        res.redirect(`/admin/book/edit/${req.query.id}`);
      }
      res.redirect('/admin/book/edit');
    });
  });
};


const bootstrapNextjs = async (server: express.Express) => {
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });
  await app.prepare();

  setupNextjsRoutes(server, app);
  setupPublicRoutes(server, app);
};

export { bootstrapNextjs };