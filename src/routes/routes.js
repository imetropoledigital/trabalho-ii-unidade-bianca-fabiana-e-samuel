import Router from 'express';
import EntityController from '../app/controllers/EntityController.js';

const router = Router();

router.post('/entities', EntityController.createEntity);
router.get('/entities/users', EntityController.getEntities);
router.get('/entities/users/:id', EntityController.findById);
router.put('/entities/users/:id', EntityController.findByIdAndUpdate);

export default router;
