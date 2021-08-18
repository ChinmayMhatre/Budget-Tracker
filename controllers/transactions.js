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
        return res.status(500).json({
            success:false,
            error:"add failed"
        })
    }
}


//* @desc Delete transactions
//* @route DELETE /api/v1/transactions
//* @access public 
exports.deleteTransactions = async (req,res,next) =>{
    res.send("Delete transactions")
}


