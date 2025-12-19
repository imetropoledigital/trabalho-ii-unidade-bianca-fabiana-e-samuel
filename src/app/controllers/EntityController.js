import mongoose from 'mongoose';

class EntityController {
    // Função para obter dinamicamente a coleção com base no nome da entidade
    async getCollection(entityName){
        return mongoose.model(entityName, new mongoose.Schema({}, { strict: false }), entityName);
    };

    newModel(entityName, data){
        return mongoose.model(entityName, new mongoose.Schema({}, { strict: false }));
    }

  createEntity = async (req, res) => {
    try {
      const { entityName } = req.params;
      const data = req.body;

      if (!entityName || !data) {
        res.status(400).json({ message: 'Nome da entidade e dados são obrigatórios' });
      }

        try {
            const newEntity = newModel(entityName, data)
            await newEntity.save();
            res.status(201).json({ message: 'Entidade criada com sucesso', newEntity });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao salvar entidade', error });
        }
    };

  getEntities = async (req, res) => {
    try {
      const { entityName } = req.params;
      const { query, fields } = req.query;

      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * req.query.limit;

      const parsedQuery = query ? JSON.parse(query) : {};
      const projection = fields ? fields.replaceAll(',', ' ') : '';

      const Model = await this.getCollection(entityName);
      const entities = await Model.find(parsedQuery, projection).skip(skip).limit(limit);

      res.status(200).json(entities);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Erro ao buscar entidades', error });
    }
  };

  findById = async (req, res) => {
    try {
      const { entityName, id } = req.params;

      const Model = await this.getCollection(entityName);
      const entity = await Model.findById(id);

      if (entity) {
        res.status(200).json(entity);
      } else {
        res.status(404).json({ error: 'Entidade não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  deleteByID = async (req, res) => {
    const { entityName, id } = req.params;

    try {
      const Model = await this.getCollection(entityName);
      const result = await Model.findByIdAndDelete(id);

      if (result) {
        res.status(200).json({ message: 'Entidade removida com sucesso' });
      } else {
        res.status(404).json({ message: 'Entidade não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  findByIdAndUpdate = async (req, res) => {
    try {
      const { id, entityName } = req.params;
      const data = req.body;

      const Model = await this.getCollection(entityName);
      const entity = await Model.findByIdAndUpdate(id, data, { new: true, runValidators: true });

      if (entity) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
export default new EntityController();
