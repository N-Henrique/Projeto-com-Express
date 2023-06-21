const path = require("path");

//Basename, panas o nome do arquivo atual para chamar no terminal
console.log(path.basename(__filename));

//Nome do diretório atual para chamar no terminal
console.log(path.dirname(__filename));

//Externção do arquivo
console.log(path.extname(__filename));

//Criar um objeto Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(__dirname); //diretorio do arquivo atual
console.log(path.join(__dirname, "test", "test.html"));
