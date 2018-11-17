import { MAIN_URL, TOKEN } from './config';

export const api = {
    tasks: {
        fetch () {
            return fetch(`${MAIN_URL}`, {
                method:  'GET',
                headers: {
                    Authorization:  TOKEN,
                    'Content-Type': 'application/json',
                },
            });
        },
        create (message) {
            return fetch(`${MAIN_URL}`, {
                method:  'POST',
                headers: {
                    Authorization:  TOKEN,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });
        },
        remove (id) {
            return fetch(`${MAIN_URL}/${id}`, {
                method:  'DELETE',
                headers: {
                    Authorization: TOKEN,
                },
            });
        },
        update (task) {
            return fetch(`${MAIN_URL}`, {
                method:  'PUT',
                headers: {
                    'Content-type': 'application/json',
                    Authorization:  TOKEN,
                },
                body: JSON.stringify([task]),
            });
        },
        completeAll (tasks) {
            return fetch(`${MAIN_URL}`, {
                method:  'PUT',
                headers: {
                    'Content-type': 'application/json',
                    Authorization:  TOKEN,
                },
                body: JSON.stringify(tasks),
            });
        },
    },
};
