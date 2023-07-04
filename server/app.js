const http = require("http");
const { readFileSync } = require("fs");
const path = require("path");

function getContentType(file) {
    let extname = path.extname(file);

    switch (extname) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/js";
        default:
            return "text/html";
    }
}

const htmlHome = readFileSync("../client/index.html");
const cssHome = readFileSync("../client/style.css");
const jsHome = readFileSync("../client/script.js");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(htmlHome);
        res.end();
    }
    else if (req.url == "/style.css") {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(cssHome);
        res.end();
    }
    else if (req.url == "/script.js") {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(jsHome);
        res.end();
    }
    else {
        res.writeHead(404)
        res.end("not a valid path");
    }
});

server.listen("3000");
