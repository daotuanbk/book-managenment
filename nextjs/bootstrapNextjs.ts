import * as express from 'express';
import * as next from 'next';
import * as morgan from 'morgan';
import Authorize from './middlewares/authorize';
import booksManagenmentService from '../api/modules/website/book-managenment/service';
import lentManagenmentService from '../api/modules/website/lent-managenment/service';

const setupNextjsRoutes = (server: express.Express, app: next.Server) => {
  const handle = app.getRequestHandler();

  server.get('/_next/*', (req, res) => {
    return handle(req, res);
  });

  server.get('/static/*', (req, res) => {
    return handle(req, res);
  });

  server.get('/error', async (req, res) => {
    app.render(req, res, '/error', {
      ...req.query,
    });
  });
};

const setupPublicRoutes = (server: express.Express, app: next.Server) => {
  // Middleware
  server.use(morgan('short'));

  // Nextjs Pages
  server.get('/', Authorize(''), async (req, res) => {

    const booksData = await booksManagenmentService.findBook({
      searchInput: '',
      pageNumber: 1,
      pageSize: 12,
      sortBy: 'title',
      asc: true
    });
    app.render(req, res, '/', {
      ...req.query,
      booksData,
    });
  });

  server.get('/book/:id', Authorize(''), async (req, res) => {
    const actualPage = '/book-detail';
    const bookData: any = await booksManagenmentService.findBookById(req.params.id);
    const queryParams = {...req.query, id: req.params.id, bookData };
    app.render(req, res, actualPage, queryParams, Object.assign({
      id: req.params.id,
      slug: req.params.slug,
      name: req.params.name,
    }));
  });

  server.get('/book', Authorize(''), (req, res) => {
    if (req.query.id) {
      res.redirect(`/book/${req.query.id}`);
    }
    res.redirect('/book');
  });

  server.get('/dashboard', Authorize(''), async (_req, res) => {
    res.redirect('/dashboard/users');
  });

  server.get('/login', async (req, res) => {
    app.render(req, res, '/login', req.query);
  });

  server.get('/dashboard/users', Authorize('Administrator'), async (req, res) => {
    app.render(req, res, '/dashboard/users', req.query);
  });

  server.get('/dashboard/roles', Authorize('Administrator'), async (req, res) => {
    app.render(req, res, '/dashboard/roles', req.query);
  });

  server.get('/dashboard/book/managenment', Authorize('Administrator'), async (req, res) => {
    const booksData = await booksManagenmentService.findBook({
      searchInput: '',
      pageNumber: 1,
      pageSize: 10,
      sortBy: 'title',
      asc: true
    });
    app.render(req, res, '/dashboard/book/managenment', {
      ...req.query,
      booksData,
    });

    server.get('/dashboard/lent/managenment', Authorize('Administrator'), async (req, res) => {
      const lentsData = await lentManagenmentService.findLent({
        searchInput: '',
        pageNumber: 1,
        pageSize: 10,
        sortBy: 'dateBorrow',
        asc: true
      });
      app.render(req, res, '/dashboard/lent/managenment', {
        ...req.query,
        lentsData,
      });
    });

    server.get('/dashboard/book/create', Authorize('Administrator'), async (req, res) => {
      //   const booksData = await booksManagenmentService.findBook({
      //     searchInput: '',
      //     pageNumber: 1,
      //     pageSize: 10,
      //     sortBy: 'title',
      //     asc: true
      // });

      app.render(req, res, '/dashboard/book/create', {
        ...req.query,
        // booksData,
      });
    });
    

    server.get('/dashboard/book/edit/:id', Authorize('Administrator'), async (req, res) => {
      const actualPage = '/dashboard/book/edit';
      const bookData: any = await booksManagenmentService.findBookById(req.params.id);
      // const queryParams = { id: req.params.id, bookData };
      app.render(req, res, actualPage, {
        ...req.query,
        id: req.params.id,
        bookData,
      }, Object.assign({
        id: req.params.id,
        slug: req.params.slug,
        name: req.params.name,
      }));
    });

    server.get('/dashboard/book/edit', Authorize('Administrator'), (req, res) => {
      if (req.query.id) {
        res.redirect(`/dashboard/book/edit/${req.query.id}`);
      }
      res.redirect('/dashboard/book/edit');
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