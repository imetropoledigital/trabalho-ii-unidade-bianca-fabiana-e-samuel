import mongo from 'mongoose';

const userSchema = new mongo.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
})

const User = mongo.model("User", userSchema);
export default User;