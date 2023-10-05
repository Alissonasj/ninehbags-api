const express = require("express");
const server = express();
const products = require("./products.json");

server.get("/products", (req, resp) => {
    return resp.json(products);
});

server.listen(3000, () => {
    console.log("Server is on");
});
