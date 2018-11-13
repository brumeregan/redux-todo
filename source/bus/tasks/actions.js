import { types } from './types';

export const tasksActions = {
    fillTasks: (tasks) => {
        return {
            type:    types.FILL_TASKS,
            payload: tasks,
        };
    },
    createTask: (task) => {
        return {
            type:    types.CREATE_TASK,
            payload: task,
        };
    },
    removeTask: (taskId) => {
        return {
            type:    types.REMOVE_TASK,
            payload: taskId,
        };
    },
    completeTask: (task) => {
        return {
            type: types.COMPLETE_TASK,
            payload: task
        };
    },
    incompleteTask: (task) => {
        return {
            type: types.INCOMPLETE_TASK,
            payload: task
        };
    },
    favoriteTask: (task) => {
        return {
            type: types.FAVORITE_TASK,
            payload: task
        };
    },
    unfavoriteTask: (task) => {
        return {
            type: types.UNFAVORITE_TASK,
            payload: task
        };
    },
    updateMessage: (task) => {
        return {
            type: types.UPDATE_MESSAGE,
            payload: task
        };
    },
    fetchTasksAsync: () => {
        return {
            type: types.FETCH_TASKS_ASYNC,
        };
    },
    createTaskAsync: (newTask) => {
        return {
            type:    types.CREATE_TASK_ASYNC,
            payload: newTask,
        };
    },
    removeTaskAsync: (taskId) => {
        return {
            type:    types.REMOVE_TASK_ASYNC,
            payload: taskId,
        };
    },
    completeTaskAsync: (task) => {
        return {
            type: types.COMPLETE_TASK_ASYNC,
            payload: task,
        };
    },
    incompleteTaskAsync: (task) => {
        return {
            type: types.INCOMPLETE_TASK_ASYNC,
            payload: task,
        };
    },
    favoriteTaskAsync: (task) => {
        return {
            type: types.FAVORITE_TASK_ASYNC,
            payload: task
        };
    },
    unfavoriteTaskAsync: (task) => {
        return {
            type: types.UNFAVORITE_TASK_ASYNC,
            payload: task
        };
    },
    updateMessageAsync: (task) => {
        return {
            type: types.UPDATE_MESSAGE_ASYNC,
            payload: task
        };
    },
};
