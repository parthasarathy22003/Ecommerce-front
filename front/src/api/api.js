import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecommerce-back-8jl4.onrender.com/',
});

export default api;