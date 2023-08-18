// import and create instance of express
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

// create get route
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});

// start express server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});