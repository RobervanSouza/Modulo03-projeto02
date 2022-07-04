const mongoose = require('mongoose'); // import mongoose do mongoose.

const conectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/convites-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb conectado com sucesso!!!'))
    .catch((error) =>
      console.log(`error ao conectar com MongoDb, erro: ${error}`),
    );
};

module.exports = conectDatabase;
