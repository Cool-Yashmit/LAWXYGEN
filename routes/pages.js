const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/login", function (req, res) {
    res.render("login", {
        title: "Login | LAWXYGEN"
    });
});

module.exports = router;
