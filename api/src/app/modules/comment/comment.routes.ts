import express from 'express';
import { CommentController } from './comment.controller';
import auth from '../../middleware/auth';
import { ENUM_USER } from '../../../constants/users';

const router = express.Router();

router.post('/create',CommentController.createComment);
router.get('/',CommentController.getAllComments);
router.get('/book-comments/:id',CommentController.getBookComments);

export const CommentRouter = router;