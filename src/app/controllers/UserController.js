import User from '../models/User.js';

class UserController {
    async createUser(req, res){
        const {name, age} = req.body;
        const newUser = new User({name, age})
        await newUser.save();
        res.json(newUser);
        console.log(newUSer);
    }
    async findAll(req, res){
        const users = await User.find();
        res.json(users);
    }
    async findById(req, res){
        const id = req.params.id;
        const user = await User.findById(id);
        res.json(user);
    }
}

export default new UserController()