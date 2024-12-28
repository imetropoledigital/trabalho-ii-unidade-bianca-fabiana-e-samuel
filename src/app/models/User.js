import mongo from 'mongoose';

const userSchema = new mongo.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: [1, 'Idade inválida'],
  },
});

const User = mongo.model('User', userSchema);

export default User;
