import axios from "axios";
export const createProductItemActions = (postItem) => async dispatch => {
    dispatch({ type: "CREATE_PRODUCTS_ITEM_REQUEST" });
    console.log(postItem);

    try {
        const response = await axios.post("/products/post", postItem);
        console.log(response)
        dispatch({ type: "CREATE_PRODUCTS_ITEM_SUCCESS", payload: response.data });
        window.location.href = '/'

    } catch (error) {
        dispatch({ type: "CREATE_PRODUCTS_ITEM_FAILED", payload: error });

    }
};
