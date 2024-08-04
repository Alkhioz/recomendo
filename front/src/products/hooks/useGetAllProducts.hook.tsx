import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import productsService from "../services/products.service";
import { product } from "../domain/product.entity";

export const useGetAllProducts = () : {
    data: product[],
    loading: boolean,
    error: boolean,
} => {
    const { getAccessTokenSilently } = useAuth0();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const init = async () => {
        try {
            setError(false);
            setLoading(true);
            const token = await getAccessTokenSilently();
            const response = await productsService.getAll(token);
            setData(response?.data ?? []);
            setLoading(false);

        } catch (e) {
            setLoading(false);
            setError(true);
        }

    }
    useEffect(() => {
        init();
    }, []);

    return {
        data,
        loading,
        error,
    }
}