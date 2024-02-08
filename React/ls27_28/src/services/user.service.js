
const url = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => {
    return fetch(url);
}