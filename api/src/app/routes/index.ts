import { BookRouter } from "../modules/books/books.routes";
import express from 'express';
import { UserRouter } from "../modules/users/users.route";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { CommentRouter } from "../modules/comment/comment.routes";

const router = express.Router();

const moduleRoutes = [
    {
        path: '/book',
        route: BookRouter
    },
    {
        path: '/user',
        route: UserRouter
    },
    {
        path: '/auth',
        route: AuthRoutes
    }, 
    {
        path: '/comment',
        route: CommentRouter
    }, 
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;