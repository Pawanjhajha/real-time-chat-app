import express from 'express';
import { me } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router=express.Router()

router.get('/me',authMiddleware,me)
export default router;