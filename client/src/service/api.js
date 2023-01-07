import axios from 'axios';
import { SERVICE_URLS } from '../constants/config';
import {  getType } from '../utils/utils';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, 
    headers: {
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params
        } else if (config.TYPE.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '' : body,
            responseType: value.responseType,
            // headers: {
            //     authorization: getAccessToken(),
            // },
            TYPE: getType(value, body),
            // onUploadProgress: function(progressEvent) {
            //     if (showUploadProgress) {
            //         let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //         showUploadProgress(percentCompleted);
            //     }
            // // },
            // onDownloadProgress: function(progressEvent) {
            //     if (showDownloadProgress) {
            //         let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            //         showDownloadProgress(percentCompleted);
            //     }
            // }
        });
}

export { API };