import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Balance() {
    const {transactions} = useContext(GlobalContext)
    const balance = transactions.reduce((acc,current)=>{
        return acc+current.amount
    },0) 
    return (
        <>
            <h4>Your Balance</h4>
            <h1>&#8377;{balance}</h1>
        </>
    )
}

export default Balance
