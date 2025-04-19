import express from 'express';
import { allUser, me } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
const router=express.Router()

router.get('/me',authMiddleware,me)
router.get('/all-users',authMiddleware,allUser)
export default router;