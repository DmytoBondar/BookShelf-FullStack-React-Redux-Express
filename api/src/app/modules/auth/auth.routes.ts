import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.get('/', AuthController.getAllAuth);

export const AuthRoutes = router;