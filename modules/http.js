const http = require("http");

const port = 8080;

const sever = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.whiteHead(200, { "Content-Tyoe": "text/html" });
    res.end("<h1>home page</h1>");
  }
});
Server.listen(port, () => console.log(`Rodando na porta ${port}!`));
