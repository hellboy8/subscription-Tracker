import Subscription from '../models/subscription.models.js';

export const createSubscription = async (req, res, next) => {
   try{
     const subscription = await Subscription.create({
        ...req.body,
        user: req.user._id,
    });
    res.status(201).json({success: true, data: subscription});
}
    catch(error){
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        // check if the user is the same as the one in the token 
        if(req.user._id.toString() !== req.params.id){
            const error = new Error('You are not owner of this account');
            error.statusCode = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({user: req.params.id});
        res.status(200).json({success: true, data: subscriptions});


    }
     catch (error) {
        next(error);
    }
}