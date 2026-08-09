const express = require("express");
const path = require("path");
const pagesRouter = require("./routes/pages");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", pagesRouter);

app.use(function (req, res) {
    res.status(404).render("404", {
        title: "Page Not Found | LAWXYGEN"
    });
});

app.listen(PORT, function () {
    console.log(`LAWXYGEN running on http://localhost:${PORT}`);
});
