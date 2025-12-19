import Router from 'express';
import EntityController from '../app/controllers/EntityController.js';

const router = Router();

router.post('/:entityName', EntityController.createEntity);
router.get('/:entityName', EntityController.getEntities);
router.get('/:entityName/:id', EntityController.findById);
router.put('/:entityName/:id', EntityController.findByIdAndUpdate);

export default router;
