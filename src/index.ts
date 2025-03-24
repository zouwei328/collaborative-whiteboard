const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
    res.send("Hello, World!");
    console.log("Received request");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});