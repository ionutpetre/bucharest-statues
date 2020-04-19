"use strict";

const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cache = require("cache-control"),
  cookieParser = require("cookie-parser"),
  cors = require("cors");

const statueApi = require("./statue.route");
const app = express();

app.set("host", process.env.IP || "0.0.0.0");
app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "./../client"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(
  cache({
    "/api/**": false,
    "/**": 500,
  })
);

app.use("/api/statues", statueApi);

app.listen(app.get("port"), app.get("host"), () => {
  console.log(`Server started on http://${app.get("host")}:${app.get("port")}`);
});
