import express from 'express';
import { BookController } from './books.controller';
import auth from '../../middleware/auth';
import { ENUM_USER } from '../../../constants/users';

const router = express.Router();

router.get('/:id', BookController.getSingleBook);
router.post('/create-book',auth(ENUM_USER.USER), BookController.createBook);
router.get('/', BookController.getAllBooks);
router.patch('/:id',auth(ENUM_USER.USER), BookController.updateBook);
router.delete('/:id',auth(ENUM_USER.USER), BookController.deleteBook);

export const BookRouter = router;