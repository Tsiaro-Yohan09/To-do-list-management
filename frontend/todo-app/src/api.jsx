import axios from "axios"

//const VITE_API_URL = "http://127.0.0.1:8000/api/"
const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
})

export default api;