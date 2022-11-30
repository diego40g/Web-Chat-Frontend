import axios from "axios";

export default axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}`,
    headers: {
        'Accept': 'application/json',
    }
})