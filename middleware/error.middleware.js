const errormiddleware = (err,req,res,next) => {
    try {
        let error = {...err};

        error.message = err.message;
        console.error(err);

        // Mongooose bad objectID
        if(err.name === 'Casterror'){
            const message = 'Resource not found ';
            error= new Error(message,404);

        }

        //Mongoose duplicate error
        if(err.code === 11000){
            const message = 'Duplicate feild value entered';
            error = new Error(message,400);
        }

        // Mongoose validation error
        if(err.name === 'ValidationError'){
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message,400);
        }
        

        res.status(error.statusCode || 500).json({sucess:false,error:error.message || 'Server Error'});

    } catch (error) {
        next(error);
    }
};

export default errormiddleware;

