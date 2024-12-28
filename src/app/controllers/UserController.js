import User from '../models/User.js';

class UserController {
  async createUser(req, res) {
    const { name, age } = req.body;

    try {
      const newUser = new User({ name, age });
      await newUser.save();
      res.status(201).end();
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async findAll(req, res) {
    const { query, fields, limit, skip } = req.query;
    const parsedQuery = query ? JSON.parse(query) : {};
    const projection = fields ? fields.replaceAll(',', ' ') : '';
    const users = await User.find(parsedQuery, projection).skip(skip).limit(limit);
    res.send(users);
  }

  async findById(req, res) {
    const id = req.params.id;
    const user = await User.findById(id, { name: true, age: true, _id: true });
    res.send(user);
  }

  async findByIdAndUpdate(req, res) {
    const id = req.params.id;
    const data = req.body;

    try {
      const item = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
      if (!item) {
        res.status(404).send({ error: 'Usuário não encontrado' });
      }
      res.status(204).end();
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}

export default new UserController();
