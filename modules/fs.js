const fs = require("fs");
const path = require("path");

//Criar uma pasta
//fs.mkdir(path.join(__dirname, "/test"), (error) => {
//  if (error) {
//    return console.log("Erro: ", error);
//  }
//  console.log("Pasta criada");
//});

//Criar um arquivo
fs.writeFile(
  // esse codigo é async os outros precisam dele para acontecer
  path.join(__dirname, "/test", "test.txt"),
  "Ola Universo!",
  (error) => {
    if (error) {
      return console.log("Deu erro: ", error);
    }
    console.log("arquivo criado");
  }
);

//adicione algo ou modificar um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Word again!",
  (error) => {
    if (error) {
      return console.log("Deu erro: ", error);
    }
    console.log("Arquivo Modificado");
  }
);

//Ler um arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Deu erro: ", error);
    }
    console.log(data);
  }
);
