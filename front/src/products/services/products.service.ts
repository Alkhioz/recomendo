import axios, { AxiosInstance } from "axios";

class ProductsService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
        });
    }

    async getAll(
        token: string
    ) {
        return this.axiosInstance.get(
            '/api/products/v1/1.0.0/getall',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
    }

}

const baseURL = import.meta.env.VITE_API_BASE_URL ?? '';
const productsService = new ProductsService(baseURL);

export default productsService;