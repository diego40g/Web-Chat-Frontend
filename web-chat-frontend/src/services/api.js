import axios from "axios";

export default axios.create({
    baseURL: `${process.env.BACKEND_HOST}+':'${process.env.BACKEND_PORT}`,
    headers: {
        'Accept': 'application/json'
    }
})