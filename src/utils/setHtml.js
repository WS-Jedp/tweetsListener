module.exports = function(html, build) {
  // <link rel="stylesheet" href="${mainStyles}" type="text/css">
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Platzi Video</title>
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="${mainBuild}" type="text/javascript"></script>
    </body>
  </html>`
}