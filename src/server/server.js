import express from "express";
import dotenv from "dotenv";
import webpack from "webpack";
import React from "react";
import helmet from "helmet";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import reducer from "../frontend/reducers";
import initialState from "../frontend/initialState";
import serverRoutes from "../frontend/routes/serverRoutes";
import { API_URL } from "../frontend/utils/swapiAPI";

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
} else {
  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        "default-src": ["'self'"],
        "script-src": [
          "'self'",
          "'sha256-IRRlnGRjBvhy3JX5EyofVm41Q0VVfi1/T4YKIT/qlSc='",
        ],
        "connect-src": ["'self'", `${API_URL}/`],
      },
    })
  );
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable("x-powered-by");
}

const setResponse = (html, preloadedState) => {
  const mainStyles = "assets/app.css";
  const mainBuild = "assets/app.js";
  return `
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
      <div id="root">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          "\\u003c"
        )}
      </script>
      <script src="${mainBuild}" type="text/javascript"></script>
    </body>
  </html>
  `;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>
  );
  res.send(setResponse(html, preloadedState));
};

app.get("*", renderApp);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server runing on port ${PORT} whit ${ENVIRONMENT} config`);
});
