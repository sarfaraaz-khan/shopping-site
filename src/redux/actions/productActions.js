import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data });
    } catch (err) {
        dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: err.message });
    }
};