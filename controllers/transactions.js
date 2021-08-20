const Transaction = require('../models/Transaction')

//* @desc Get all transactions
//* @route GET /api/v1/transactions
//* @access public 
exports.getTransactions = async (req,res,next) =>{
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            error:'server error'
        })
    }
}

//* @desc Add transactions
//* @route POST /api/v1/transactions
//* @access public 
exports.addTransactions = async (req,res,next) =>{
    try {
        const {text,amount} = req.body
        const transaction = await Transaction.create(req.body)
        return  res.status(201).json({
            success:true,
            data:transaction
        })
    } catch (error) {
        if(error.name === "ValidationError"){
        const messages = Object.values(error.errors).map(val =>val.message);
        
            return res.status(400).json({
                success:false,
                error:messages
            })
        }else{
            return res.status(500).json({
                success:false,
                error:"add failed"
            })
        }

    }
}


//* @desc Delete transactions
//* @route DELETE /api/v1/transactions
//* @access public 
exports.deleteTransactions = async (req,res,next) =>{

    try {
        const transaction = Transaction.findById(req.params.id)

        if(!transaction){
            return res.status(404).json({
                success:false,
                error:"Transaction not found"
            })
        }
    
        await transaction.remove()
    
        res.status(200).json({
            success:true,
            data:{}
        })    
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"remove failed"
        })
    }
    
}


