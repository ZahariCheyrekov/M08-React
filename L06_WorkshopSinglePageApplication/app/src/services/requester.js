import * as userService from './userService';

export const request = (method, url, data) => {
    let options = {
        method,
        headers: {}
    };

    const token = userService.getAccessToken();

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';

        if (method !== 'GET') {
            options.body = JSON.stringify(data);
        }
    }

    return fetch(url, options)
        .then(res => res.json());
}

export const get = request.bind(null, 'GET');
export const put = request.bind(null, 'PUT');
export const post = request.bind(null, 'POST');
export const del = request.bind(null, 'DELETE');