//Cria um servidor
const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    //enviar HTLM
    res.writeHead(200, { "Content-Tyoe": "text/html" });
    res.end("<h1>home page</h1>");
  }
  //Pegar a URL da request
  if (req.url === "/users") {
    const users = [
      {
        name: "Henrique",
        email: "Henrique@email",
      },
      {
        name: "jessica",
        email: "jessica@email",
      },
    ];
    //enviar JSON
    res.writeHead(200, { "Content-Type": "applicarion/json" });
    res.end(JSON.stringify(users));
  }
});
server.listen(port, () => console.log(`Rodando na porta ${port}!`));
