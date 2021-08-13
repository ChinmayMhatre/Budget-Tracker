import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function IncomeExpense() {
    const {transactions} = useContext(GlobalContext)
    const income = transactions.reduce((acc,curr)=>{
        if(curr.amount >= 0){
            return acc+curr.amount
        }else{
            return acc
        }
    },0)
    const expense = transactions.reduce((acc,curr)=>{
        if(curr.amount <= 0){
            return acc+Math.abs(curr.amount)
        }else{
            return acc
        }
    },0)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+&#8377;{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-&#8377;{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
