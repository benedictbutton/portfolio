"user strict";
const path = require("path");
const bodyParser = require("body-parser");

const nconf = require("nconf");
nconf
  .argv()
  .env("__")
  .defaults({ NODE_ENV: "development" });

const NODE_ENV = nconf.get("NODE_ENV");
const isDev = NODE_ENV === "developement";

const port = process.env.PORT || process.argv[2] || 8080;
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

require("dotenv").config();

app.use("/api", require("./routes.js"));

if (isDev) {
  const webpack = require("webpack");
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpackConfig = require("./webpack.config.js");
  app.use(
    webpackMiddleware(webpack(webpackConfig), {
      publicPath: "/",
      status: { colors: true }
    })
  );
} else {
  app.use(express.static("dist"));
}

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "../../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log("Ready."));
