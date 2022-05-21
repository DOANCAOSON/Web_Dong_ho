export const getItemProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {

        case 'ADD_PRODUCTS_ITEM_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_PRODUCTS_ITEM_SUCCESS': return {
            loading: false,
            products: action.payload
        }
        case 'ADD_PRODUCTS_ITEM_FAILED': return {
            error: action.payload,
            loading: false,

        }
        default: return state
    }
}
