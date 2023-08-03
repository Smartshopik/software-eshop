import { AxiosRequestConfig, AxiosInstance } from "axios";


/**
 * ----------------------------------------
 * Ajax class is for formating requests and
 * responses made by certain axios instance
 * ----------------------------------------
 */
class Axios {
    axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios
    }

    async get(path: string, config?: AxiosRequestConfig) {
        try {
            const response = await this.axios.get(path, config);

            return await {
                error: false,
                status: response.status,
                data: response.data
            }

        } catch(e) {
            return {
                error: e.message,
                status: e.response.status,
                data: e.response.data
            }
        }
    }

    async post(path: string, data?:any, config?: AxiosRequestConfig) {
        try {
            const response = await this.axios.post(path, data, config);

            return await {
                error: false,
                status: response.status,
                data: response.data
            }
        } catch(e) {
            return {
                error: e.message,
                status: e.response.status,
                data: e.response.data
            }

        }
    }
}

export default Axios