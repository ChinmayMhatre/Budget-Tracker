export default (state,action)=>{
    switch (action.type) {
        case "DELETE_ITEM":
            return{
                ...state,
                transactions : state.transactions.filter(
                    transaction => transaction.id !== action.id
                )
            }
        case "ADD_ITEM":
            return{
                ...state,
                transactions : [...state.transactions,action.transaction]
            }
        default:
            return state
            break;
    }
}