import { Router } from "express";
import { getUser, getUsers } from "../controller/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get('/',getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/',(req,res) => {
    res.send("create new users");
})

userRouter.put('/id',(req,res) => {
    res.send("update users");
})

userRouter.delete('/id',(req,res) => {
    res.send("delete users");
})

export default userRouter;