import { IUser, userModel } from '../models/user'
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {ApiResponse, Payload} from '../common/interface';

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userExists: IUser | null = await userModel.findOne({ email: req.body.email });

        if (userExists) {
            res.status(400).json(<ApiResponse>{
                message: 'User already exists',
                success: false,
            });
            return;
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;

        await userModel.create(req.body);

        res.status(201).json(<ApiResponse>{
            message: 'User created successfully',
            success: true,
        });

    } catch (e) {
        res.status(500).json(<ApiResponse>{
            message: (e as Error).message,
            success: false,
        });
    }
};


export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const userExists: IUser | null = await userModel.findOne({ email: req.body.email });
        if (!userExists) {
            res.status(400).json(<ApiResponse>{
                message: 'User does not exist',
                success: false,
            });
            return;
        }
        const isValid = await bcrypt.compare(req.body.password, userExists.password);
        if (!isValid) {
            res.status(401).json(<ApiResponse>{
                message: "Invalid password",
                success: false
            });
            return;
        }
        const payload:Payload={ userId: userExists._id, firstName: userExists.firstName, lastName: userExists.lastName }
        const token = jwt.sign(
            payload,
            process.env.SECRET_KEY as string,
            { expiresIn: process.env.JWT_EXPIRE  as string }
        );
        res.status(200).json(<ApiResponse>{
            message: 'User logged in successfully',
            success: true,
            data: {
                token:token
            }
        });
    } catch (e) {
        res.status(500).json(<ApiResponse>{
            message: (e as Error).message,
            success: false,
        });
    }
};