import mongo from 'mongoose';

const connectDB = async () => {
  mongo
    .connect('mongodb://127.0.0.1:27017/dbnosql-mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Conexão com MongoDB bem-sucedida!'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
};

export default connectDB;
