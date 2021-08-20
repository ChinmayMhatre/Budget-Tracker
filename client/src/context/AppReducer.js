export default (state,action)=>{
    switch (action.type) {
        case "DELETE_ITEM":
            return{
                ...state,
                transactions : state.transactions.filter(
                    transaction => transaction._id !== action.id
                )
            }
        case "GET_ITEM":
            return{
                ...state,
                loading:false,
                transactions : action.transaction
            }
        case "TRANSACTION_ERROR":
            return{
            ...state,
                loading:false,
                error : action.error
            }
        
        case "ADD_ITEM":
            return{
                ...state,
                transactions : [...state.transactions,action.transaction]
            }
        
        default:
            return state
    }
}