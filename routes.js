const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add('blog', '/articles/:slug');
routes.add('/sitemap.xml', 'sitemap.xml');