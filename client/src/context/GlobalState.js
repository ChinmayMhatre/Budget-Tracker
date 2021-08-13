import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
    transactions:[
                    {id:1,text:"Salary", amount : 3000},
                    {id:2,text:"Books", amount : -500}
                ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=> {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    const deleteTransaction = (id)=>{
        dispatch({
            type:"DELETE_ITEM",
            id
        })
    }
    const addTransaction = (transaction)=>{
        dispatch({
            type:"ADD_ITEM",
            transaction
        })
    }
    
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}