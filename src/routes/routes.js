import Router from 'express';
import UserController from '../app/controllers/UserController.js';

const router = Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/users/:id', UserController.findById);
router.put('/users/:id', UserController.findByIdAndUpdate);

export default router;
