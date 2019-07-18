const axios = require("axios");

const getPosts = () =>
  new Promise((resolve, reject) => {
    axios.get("https://api.werick.tk/api/v1/blogs-active").then(res => {
      resolve(res.data.blogs);
    });
  });

const BASE_URL = process.env.PRODUCTION_URL || "https://werick.codes";

const createSitemap = async () => {
  let xml = "";
  xml += '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  // Add pages/index.js file to sitemap
  xml += "<url>";
  xml += `<loc>${BASE_URL}/</loc>`;
  xml += "</url>";
  // Add pages/about.js file to sitemap
  xml += "<url>";
  xml += `<loc>${BASE_URL}/about</loc>`;
  xml += "</url>";
  // Add pages/contact.js file to sitemap
  xml += "<url>";
  xml += `<loc>${BASE_URL}/contact</loc>`;
  xml += "</url>";
  // Add pages/privacy.js file to sitemap
  xml += "<url>";
  xml += `<loc>${BASE_URL}/privacy</loc>`;
  xml += "</url>";
  // Add pages/search.js file to sitemap
  xml += "<url>";
  xml += `<loc>${BASE_URL}/search</loc>`;
  xml += "</url>";

  await getPosts().then(_newData => {
    _newData.map(_post => {
      xml += "<url>";
      xml += `<loc>${BASE_URL}/articles/${_post.slug}</loc>`;
      xml += `<lastmod>${_post.updatedAt}</lastmod>`;
      xml += `<changefreq>always</changefreq>`;
      xml += `<priority>0.5</priority>`;
      xml += "</url>";
    });
  });

  xml += "</urlset>";

  console.log(`Wrote Sitemap`);
  return xml;
};

module.exports = createSitemap;
