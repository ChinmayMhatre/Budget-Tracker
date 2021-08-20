import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'
const initialState = {
    transactions:[],
    error:null,
    loading:true
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=> {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    const deleteTransaction = async (id)=>{
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type:"DELETE_ITEM",
                id
            })
        } catch (error) {
            dispatch({
                type:"TRANSACTION_ERROR",
                error : error.response.data.error
            })
        }
    }
    const getTransaction = async ()=>{
        try {
            const response = await axios.get('/api/v1/transactions')
            dispatch({
                type:"GET_ITEM",
                transaction : response.data.data
            })
        } catch (error) {
            dispatch({
                type:"TRANSACTION_ERROR",
                error : error.response.data.error
            })
        }
        
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
            addTransaction,
            getTransaction,
            error:state.error,
            loading:state.loading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}