import { combineForms } from 'react-redux-form';

// TODO: update task, filter
export const formReducer = combineForms({
    newTask: {
        message: '',
    },
}, 'forms');
