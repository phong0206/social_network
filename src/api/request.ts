import axios from "axios";
import { Config } from "~/config";

const request = axios.create({
    baseURL: Config.API_URL,
    timeout: 8000,
    headers: { Accept: "*/*" },
});

request.interceptors.request.use(
    async (config) => {
        // Do something before API is sent
        const token = localStorage.getItem("access_token");
        if (token && config.headers !== undefined) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request error here
        console.error("API request error", error);
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        // Handle successful response
        return response;
    },
    (error) => {
        // Handle response error here
        console.error("API response error", error);
        if (error?.response) {
            const { status, data } = error.response;
            let errorMessage

            // Handle different response statuses here
            switch (status) {
                case 500:
                    console.error("System error");
                    break;
                case 401:
                    console.error("Unauthorized error");
                    break;
                case 400:
                    console.error(`Error 400: ${data.message}`);
                    break;
                default:
                    console.error(`Error: ${data.message}`);
            }
        } else if (error?.code === "ECONNABORTED" || error?.message === "Network Error") {
            console.error("A network error occurred");
        }

        return Promise.reject(error);
    }
);

export default request;