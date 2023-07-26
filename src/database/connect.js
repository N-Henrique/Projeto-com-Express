const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.egjmhwi.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro de conexão com o banco de dados: ", error);
      }

      return console.log("Conectado ao banco de dados");
    }
  );
};

module.exports = connectToDatabase;
