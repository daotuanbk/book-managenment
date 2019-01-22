"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const next = require("next");
const morgan = require("morgan");
const authorize_1 = require("./middlewares/authorize");
const service_1 = require("../api/modules/website/book-managenment/service");
const service_2 = require("../api/modules/website/lent-managenment/service");
const setupNextjsRoutes = (server, app) => {
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
const setupPublicRoutes = (server, app) => {
    // Middleware
    server.use(morgan('short'));
    // Nextjs Pages
    server.get('/', authorize_1.default(''), async (req, res) => {
        const booksData = await service_1.default.findActiveBook({
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
    server.get('/lent-history/:id', authorize_1.default(''), async (req, res) => {
        const lentsData = await service_2.default.findLentByUserId({
            userId: req.params.id,
            pageNumber: 1,
            pageSize: 10,
            sortBy: 'dateBorrow',
            asc: true
        });
        app.render(req, res, '/lent-history', {
            ...req.query,
            lentsData,
        });
    });
    server.get('/dashboard/book/edit/:id', authorize_1.default('Administrator'), async (req, res) => {
        const actualPage = '/dashboard/book/edit';
        const bookData = await service_1.default.findBookById(req.params.id);
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
    server.get('/book/:id', authorize_1.default(''), async (req, res) => {
        const actualPage = '/book-detail';
        const bookData = await service_1.default.findBookById(req.params.id);
        const queryParams = { ...req.query, id: req.params.id, bookData };
        app.render(req, res, actualPage, queryParams, Object.assign({
            id: req.params.id,
            slug: req.params.slug,
            name: req.params.name,
        }));
    });
    server.get('/book', authorize_1.default(''), (req, res) => {
        if (req.query.id) {
            res.redirect(`/book/${req.query.id}`);
        }
        res.redirect('/book');
    });
    server.get('/dashboard', authorize_1.default(''), async (_req, res) => {
        res.redirect('/dashboard/users');
    });
    server.get('/login', async (req, res) => {
        app.render(req, res, '/login', req.query);
    });
    server.get('/dashboard/users', authorize_1.default('Administrator'), async (req, res) => {
        app.render(req, res, '/dashboard/users', req.query);
    });
    server.get('/dashboard/roles', authorize_1.default('Administrator'), async (req, res) => {
        app.render(req, res, '/dashboard/roles', req.query);
    });
    server.get('/dashboard/book/managenment', authorize_1.default('Administrator'), async (req, res) => {
        const booksData = await service_1.default.findBook({
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
        server.get('/dashboard/lent/managenment', authorize_1.default('Administrator'), async (req, res) => {
            const lentsData = await service_2.default.findLent({
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
        server.get('/dashboard/book/create', authorize_1.default('Administrator'), async (req, res) => {
            //   const booksData = await booksManagenmentService.findBook({
            //     searchInput: '',
            //     pageNumber: 1,
            //     pageSize: 10,
            //     sortBy: 'title',
            //     asc: true
            // });
            app.render(req, res, '/dashboard/book/create', {
                ...req.query,
            });
        });
        server.get('/dashboard/book/edit', authorize_1.default('Administrator'), (req, res) => {
            if (req.query.id) {
                res.redirect(`/dashboard/book/edit/${req.query.id}`);
            }
            res.redirect('/dashboard/book/edit');
        });
    });
};
const bootstrapNextjs = async (server) => {
    const dev = process.env.NODE_ENV !== 'production';
    const app = next({ dev });
    await app.prepare();
    setupNextjsRoutes(server, app);
    setupPublicRoutes(server, app);
};
exports.bootstrapNextjs = bootstrapNextjs;
//# sourceMappingURL=bootstrapNextjs.js.map