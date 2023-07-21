import express from 'express';
import { BookController } from './books.controller';
import auth from '../../middleware/auth';
import { ENUM_USER } from '../../../constants/users';

const router = express.Router();

router.get('/:id', BookController.getSingleBook);
router.post('/create-book', BookController.createBook);
router.get('/', BookController.getAllBooks);
router.patch('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

export const BookRouter = router;