import React from "react";
import createSitemap from "../utils/createSitemap";

const sitemapXml = createSitemap();

export default class Sitemap extends React.Component {
    static getInitialProps ({res}) {
        res.setHeader('Content-Type', 'text/xml');
        res.write(sitemapXml)
        res.end()
    }
}