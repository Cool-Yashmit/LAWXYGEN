import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", function (req, res) {
    res.json({
        ok: true,
        app: "LAWXYGEN",
        runtime: "Cloudflare Workers + Express"
    });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });
