export default ({ markup, helmet, assets }) => (`
  <!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      <link href="/${assets['main.css']}" rel="stylesheet">
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${markup}</div>
      <script src="/static/js/bundle.js" async></script>
    </body>
  </html>
`);
