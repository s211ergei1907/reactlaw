import axios from 'axios';

export const Api = new axios.create({
    // baseURL: 'https://localhost:8080',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

Api.interceptors.request.use(
    function (config) {
        // Здесь можете сделать что-нибудь с перед отправкой запроса
        return config;
    },
    function (error) {
        // Сделайте что-нибудь с ошибкой запроса
        return Promise.reject(error);
    }
);

Api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.error('Some troubles with response');
        return Promise.reject(error);
    }
);
