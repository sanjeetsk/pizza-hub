import { fetchProducts, productsError, productsFetched } from "../slices/productSlice";
import { pizzaMenu } from "../../components/Items/MenuData";

export const getProducts = async(dispatch) => {
    dispatch(fetchProducts());
    // const url = "";
    try{
        // const response = await axios.get(url);
        // const data = response.data;
        dispatch(productsFetched(pizzaMenu));
    }
    catch(e){
        dispatch(productsError(e.message));
    }
}