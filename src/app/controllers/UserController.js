import User from '../models/User.js';

class UserController {
  async createUser(req, res) {
    const { name, age } = req.body;
    const newUser = new User({ name, age });
    await newUser.save();
    res.json(newUser);
  }

  async findAll(_, res) {
    const users = await User.find();
    res.json(users);
  }

  async findById(req, res) {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
  }

  async findByIdAndUpdate(req, res) {
    const item = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
      console.log('Usuario não encontrado!');
    }
    res.json(item);
  }
}

export default new UserController();
