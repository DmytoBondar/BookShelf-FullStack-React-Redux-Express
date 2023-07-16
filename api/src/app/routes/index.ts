import { BookRouter } from "../modules/books/books.routes";
import express from 'express';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/book',
        route: BookRouter
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;