const path = require("path");
const rootDir = require("../util/path");
const express = require("express");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    ProductCSS: true,
  });
  //   res.sendFile(path.join(rootDir, "views", "shop.html"));
  //   console.log(adminData.products);
});

module.exports = router;
