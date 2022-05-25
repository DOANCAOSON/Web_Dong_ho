import axios from "axios";
export const addProductItemActions = (id) => async dispatch => {
    dispatch({ type: "ADD_PRODUCTS_ITEM_REQUEST" });

    try {
        const response = await axios.get(`/products/${id}`);
        dispatch({ type: "ADD_PRODUCTS_ITEM_SUCCESS", payload: response.data });

    } catch (error) {
        dispatch({ type: "ADD_PRODUCTS_ITEM_FAILED", payload: error });
    }
};
