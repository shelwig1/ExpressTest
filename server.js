const express = require("express");
const app = express();
const port = process.env.PORT

app.use(express.json())

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/test", (req, res) => res.send("Test route works, so what the fuck?"))

app.listen(port, () => console.log("Server ready on port 3000."));

module.exports = app;