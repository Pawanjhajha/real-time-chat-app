import express from 'express';
import { createnewChat } from '../controllers/chatController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router=express.Router()
router.post('/create',authMiddleware,createnewChat)

export default router;