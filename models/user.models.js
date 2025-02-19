import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:2,
        maxlenght:50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match:[/\S+@\S+\.\S+/,'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true,'User password required'],
        minlength: 6
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;