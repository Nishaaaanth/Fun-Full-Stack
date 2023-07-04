const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.static("../client"));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(PORT, () => {
    console.log("Server listening at port 3000");
});

app.get("/", (req, res) => {
    res.status(200).sendFile("./index.html");
})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    console.log(email + " and " + pass);
    
    res.json({ success: True, message: "successul"});
})

// app.all("*", (req, res) => {
//     res.status(200).send("<h1>Not a valid page</h1>");
// })

// app.get("/", (req, res) => {
//     res.sendFile(__dirname.replace("/server","") + "/client/index.html");
// });
//
// app.use(express.static(__dirname.replace("/server", "") + "/client"));
