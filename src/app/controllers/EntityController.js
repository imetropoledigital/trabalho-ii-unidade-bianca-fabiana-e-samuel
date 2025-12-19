import mongoose from 'mongoose';

class EntityController {
    // Função para obter dinamicamente a coleção com base no nome da entidade
    async getCollection(entityName){
        return mongoose.model(entityName, new mongoose.Schema({}, { strict: false }), entityName);
    };

    newModel(entityName, data){
        return mongoose.model(entityName, new mongoose.Schema({}, { strict: false }));
    }

    // Criar nova entidade na coleção especificada
    async createEntity (req, res){
        const { entityName, data } = req.body;

        if (!entityName || !data) {
            return res.status(400).json({ message: 'Nome da entidade e dados são obrigatórios' });
        }

        try {
            const newEntity = newModel(entityName, data)
            await newEntity.save();
            res.status(201).json({ message: 'Entidade criada com sucesso', newEntity });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao salvar entidade', error });
        }
    };

    // Obter todas as entidades de uma coleção específica
    async getEntities (req, res){
        const { entityName } = req.params;

        try {
            const Model = getCollection(entityName);
            const entities = await Model.find({});
            res.status(200).json(entities);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar entidades', error });
        }
    };

    async findById(req, res) {
        try {
          const { entityName, id } = req.params;
          const Model = getCollection(entityName);
          const entity = await Model.findById(id);
          if (entity) {
            res.status(200).send(entity);
          } else {
            res.status(404).send({ error: 'Entidade não encontrada' });
          }
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
      }

    // Deletar entidade por ID
    async deleteByID (req, res){
        const { entityName, id } = req.params;

        try {
            const Model = getCollection(entityName);
            const result = await Model.findByIdAndDelete(id);
            if (result) {
                res.status(200).json({ message: 'Entidade removida com sucesso' });
            }else{
                return res.status(404).json({ message: 'Entidade não encontrada' });
            }
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    };

    async findByIdAndUpdate(req, res) {
        const id = req.params.id;
        const data = req.body;
    
        try {
          const Model = getCollection(entityName);
          const entity = await Model.findByIdAndUpdate(id, data, { new: true, runValidators: true });
          if (entity) {
            res.status(204).end();
          } else {
            res.status(404).send({ error: 'Usuário não encontrado' });
          }
        } catch (error) {
          res.status(500).send({ error: error.message });
        }
    }
}
export default new EntityController();