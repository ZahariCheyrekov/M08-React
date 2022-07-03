const baseUrl = 'http://localhost:3030/jsonstore/todos';

export const getTodos = () => fetch(baseUrl).then(res => res.json()).then(result => console.log(result));