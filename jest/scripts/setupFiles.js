/* Setup files module.
**
** This module will be executed before each test.
**
** This module contains a code to configure or set up the
** testing environment before each test. Since every test
** runs in its own environment, these scripts will be
** executed in the testing environment immediately before
** executing the test code itself.
**
** This module excutes before setupFramework module.
**
*/

import { LocalStorage, fetch } from './mocks/localStorage';

global.localStorage = new LocalStorage();

global.__ENV__ = global.__PROD__ = process.env.NODE_ENV;

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const task = {
    message: 'MESSAGE',
    id: 'TASK_ID',
    completed: false,
    favorite: true,
};

const tasks = [
    task
];

const updatedTask = {
    message: 'UPDATED MESSAGE',
    id: 'TASK_ID',
    completed: false,
    favorite: true,
};

const completedTasks = [
    {
        message: 'MESSAGE',
        id: 'TASK_ID',
        completed: true,
        favorite: true,
    }
];

const responseDataSuccess = {
    data:    tasks,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

global.__ = {
    updatedTask,
    task,
    completedTasks,
    tasks,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    fetchResponseSuccess204
};

global.fetch = fetch;
