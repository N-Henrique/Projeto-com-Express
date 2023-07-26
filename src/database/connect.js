const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.egjmhwi.mongodb.net/database?retryWrites=true&w=majority`
    );
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.error("Erro de conexão com o banco de dados: ", error);
  }
};

module.exports = connectToDatabase;
