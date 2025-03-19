import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://realtime-chat-app-backend-psi.vercel.app/api",
    withCredentials: true, 
})   