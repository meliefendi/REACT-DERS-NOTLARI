

import axios from "axios";

export const fetchProductList = async({ pageParam = 0 }) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`);
    

    return data;
};

export const fetchProduct = async(product_id) => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`);
    

    return data;
}