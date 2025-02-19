import mongoose from 'mongoose'
import User from '../models/user.models.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_EXPIRE, JWT_SECRET } from '../config/env.js'


export const signUP =  async(req,res,next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const {name,email,password} = req.body;
        // check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }

        //HASH Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // Ceate new user
        const newUsers = await User.create([{name,email,password:hashedPassword}],{session});
        const token = jwt.sign({userId:newUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRE});

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success:true,
            message:'User created successfully',
            data:{
                token,
                user: newUsers[0]

            }
        },)
        
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}

export const signIn = async(req,res,next) => {
    try {
        const {email,password} =  req.body;
        const user = await User.findOne({email});

        if(!user){
            const error = new Error('user not found');
            error.statusCode = 404;
            throw error;
        }

        const isPasswordMatch = await bcrypt.compare(password,user.password);

        if(!isPasswordMatch){
            const error = new Error('Invalid password');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRE});
        
        res.status(200).json({
            success:true,
            message:'User logged in successfully',
            data:{
                token,
                user
            }
        })

    } catch (error) {
        next(error);

    }
}

export const signOut = (req,res,next) => {
    
}
