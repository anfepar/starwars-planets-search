import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
dotenv.config();

const { ENVIRONMENT, PORT } = process.env;
const app = express();

if (ENVIRONMENT === "development") {
  const webpackConfig = require("../../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = {
    serverSideRender: true,
    publicPath,
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get("*", (req, res) => {
  const mainStyles = "assets/app.css";
  const mainBuild = "assets/app.js";
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Starwars planet searcher" . />
      <!-- <meta
        property="og:image"
        content=""
      /> -->
      <meta name="og:title" content="Starwars planet Searcher" />
      <link rel="stylesheet" href="${mainStyles}" type="text/css">
      <title>Starwars planet searcher</title>
      <base href="/" />
    </head>
    <body>
      <div id="root"></div>
      <script src="${mainBuild}" type="text/javascript"></script>
    </body>
  </html>
  `);
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server runing on port ${PORT} whit ${ENVIRONMENT} config`);
});
