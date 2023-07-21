import express from 'express';
import { WishController } from './wish.controller';
import auth from '../../middleware/auth';
import { ENUM_USER } from '../../../constants/users';

const router = express.Router();

router.get('/:id',auth(ENUM_USER.USER), WishController.getUserWish);
router.delete('/:id',auth(ENUM_USER.USER), WishController.deleteUserWish);
router.post('/create',auth(ENUM_USER.USER), WishController.createWish);

export const WishRoutes = router;