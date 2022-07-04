import * as requester from './requester';
import * as userService from './userService';

const url = 'http://localhost:3030';
const baseUrl = `${url}/users`;

export const login = (email, password) =>
    requester.post(`${baseUrl}/login`, { email, password })
        .then(user => userService.saveUser(user));