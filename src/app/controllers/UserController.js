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
    try {
      const { query, fields, limit, skip } = req.query;
      const parsedQuery = query ? JSON.parse(query) : {};
      const projection = fields ? fields.replaceAll(',', ' ') : '';
      const users = await User.find(parsedQuery, projection).skip(skip).limit(limit);
      res.send(users);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async findById(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findById(id, { name: true, age: true, _id: true });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async findByIdAndUpdate(req, res) {
    const id = req.params.id;
    const data = req.body;

    try {
      const user = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
      if (user) {
        res.status(204).end();
      } else {
        res.status(404).send({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}

export default new UserController();
