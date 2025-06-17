import axios from 'axios';
import moment from 'moment-timezone';
import serverConfig from "../../server.config.json";
import { getAuthUser, hasAuthUser, redirectLogin, removeStorage } from "./auth";

/**
 * Create an Axios Client with defaults
 */
let axiosInstance = axios.create();

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Language'] = localStorage.getItem(`${ serverConfig.storagePrefix }.settings.locale`) || 'en-US';

export const client = axiosInstance;

/**
 * Request Wrapper with default success/error actions
 */
export const request = function (options) {

    if ( hasAuthUser() && getAuthUser() ) {
        const user = getAuthUser();
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${ user.token }`;
        axiosInstance.defaults.headers.common['Content-Timezone'] = moment.tz.guess();
    }

    const onSuccess = function (response) {
        return response;
    };

    const onError = function (error) {
        if ( error.response ) {
            if ( error.response.status === 401 ) {
                alert('Your session has expired. Please log in again.');
                setTimeout(() => {
                    window.location.href = "/login";
                    removeStorage('auth');
                }, 2000);

                return false;
            }
        } else {
            // Something else happened while setting up the request
            // triggered the error
            // console.error('Error Message:', error.message);
        }

        return Promise.reject(error.response || error.message);
    };

    return axiosInstance(options)
    .then(onSuccess)
    .catch(onError);
};
