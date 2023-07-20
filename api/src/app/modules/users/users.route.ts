import express from 'express';
import { UserController } from './users.controller';
import auth from '../../middleware/auth';
import { ENUM_USER } from '../../../constants/users';

const router = express.Router();

router.get('/:id', auth(ENUM_USER.USER), UserController.getSingleUser);
router.post('/create-user', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.patch('/:id', auth(ENUM_USER.USER), UserController.updateUser);
router.delete('/:id', auth(ENUM_USER.USER), UserController.deleteUser);

export const UserRouter = router;