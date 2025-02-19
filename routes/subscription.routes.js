import { Router } from "express";
import { getUserSubscriptions,createSubscription } from "../controller/subscription.controller.js";
import auhtorize from '../middleware/auth.middleware.js';
import errormiddleware from "../middleware/error.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res) => {
    res.send({title:'GET all subscriptions'});
})


subscriptionRouter.post('/', auhtorize, errormiddleware, createSubscription)

subscriptionRouter.put('/',(req,res) => {
    res.send({title:'update subscriptions'});
})

subscriptionRouter.delete('/',(req,res) => {
    res.send({title:'delete subscriptions'});
})

subscriptionRouter.get('/:id', auhtorize, getUserSubscriptions)

subscriptionRouter.put('/:id/cancel',(req,res) => {
    res.send({title:'CANCEL subscriptions'});
})

subscriptionRouter.get('/upcoming-renewals',(req,res) => {
    res.send({title:'GET upcoming renewals'});
})

export default subscriptionRouter;