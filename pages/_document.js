import Document, { Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="application-name" content="Werick Codes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Werick Codes" />
          <meta
            name="description"
            content="Get started with coding the easy way"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon.ico"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/static/styles/prism.css" />
          <link rel="stylesheet" href="/static/styles/scroll.css" />
          <script
            rel="preload"
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-136029758-1"
          />
          <script
            rel="preload"
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          />
          <script
            rel="preload"
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/prism.js"
          />
          <script rel="preload" src="/static/js/prism.js" />
          <script
            rel="preload"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
        function gtag() {
        dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-136029758-1');`
            }}
          />
          <script
            rel="preload"
            dangerouslySetInnerHTML={{
              __html: `(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
                var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
                f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
                var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
                _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
                
                var ml_account = ml('accounts', '1581226', 'j9n2q6d9d6', 'load');`
            }}
          />
          {/* <script
            src="//a.mailmunch.co/app/v1/site.js"
            id="mailmunch-script"
            data-mailmunch-site-id="664868"
            async="async"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/scripts/prism.js" />
        </body>
      </html>
    );
  }
}
