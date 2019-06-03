"user strict";
const path = require("path");

const nconf = require("nconf");
nconf
  .argv()
  .env("__")
  .defaults({ NODE_ENV: "development" });

const NODE_ENV = nconf.get("NODE_ENV");
const isDev = NODE_ENV === "developement";
// nconf
//   .defaults({ conf: path.join(__dirname, `${NODE_ENV}.config.json`) })
//   .file(nconf.get("conf"));

const port = process.env.PORT || process.argv[2] || 8080;
const express = require("express");
const morgan = require("morgan");

const app = express();

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

app.use(morgan("dev"));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "dist/index.html"), function(err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });

app.get("/api/documentDownload", function(req, res) {
  console.log("test");
  res.download(path.join(__dirname, "OnlineResume.pdf"), function(err) {
    console.log(err);
  });
});

app.listen(port, () => console.log("Ready."));
