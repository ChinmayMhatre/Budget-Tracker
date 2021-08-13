import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? "-" : "+"
    const color = sign == "+" ? "plus" : "minus"

    return (
        <li className={color}>
            {transaction.text} <span>{sign}&#8377;{Math.abs(transaction.amount)}</span>
            <button onClick={()=>{deleteTransaction(transaction.id)}} className="delete-btn">x</button>
        </li> 
    )
}

export default Transaction
