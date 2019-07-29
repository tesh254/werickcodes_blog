const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add('blog', '/articles/:slug');
routes.add('stack', '/stack/:stack')
routes.add('/sitemap.xml', 'sitemap.xml');