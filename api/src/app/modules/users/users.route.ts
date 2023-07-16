import express from 'express';
import { UserController } from './users.controller';

const router = express.Router();

router.get('/:id', UserController.getSingleUser);
router.post('/create-user', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.patch('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export const UserRouter = router;