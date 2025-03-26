import express from 'express';
import {  login, signUp,  } from '../controllers/authController';
const router=express.Router()

router.post('/singUp',signUp);
router.post('/login',login)

export default router;