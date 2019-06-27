const { createServer } = require("http");
const express = require("express");
const next = require("next");
const { join } = require("path");
const { parse } = require("url");
const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const createSitemap = require("./utils/createSitemap");
let SITEMAP = null;

app.prepare().then(() => {
  const server = express();

  server.get('/sitemap.xml', async (req, res) => {
    if (!SITEMAP){
      SITEMAP = await createSitemap();
    }

    res.set('Content-Type', 'text/xml')
    res.send(SITEMAP)
  })

  server.post('/createSitemap', async (req, res, next) => {
    SITEMAP = await createSitemap();
    res.status(200).send(SITEMAP)
  })

  server.get('*', (req, res) => handler(req, res, req.url));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
  });
  // createServer((req, res) => {
  //   const parsedUrl = parse(req.url, true)
  //   const { pathname } = parsedUrl

  //   if (pathname === '/sw.js' || pathname.startsWith('/precache-manifest.')){
  //     const filePath = join(__dirname, '.next', pathname)
  //     app.serveStatic(req, res, filePath)
  //   }
  //   else {
  //     handler(req, res, parsedUrl)
  //   }
  // }).listen(port, err => {
  //   if (err) throw err;
  //   console.log(`> Ready on http://localhost:${port}`);
  // });
});
