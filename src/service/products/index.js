

import axios from "../axios";

const productAPI = {
    getProduct: async function(){
        return axios.get("/products");
    }
}

export default productAPI;

