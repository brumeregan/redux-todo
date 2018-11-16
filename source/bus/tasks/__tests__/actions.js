import { types } from '../types';
import { tasksActions } from '../actions';

describe('tasksActions:', () => {
    test('tasksActions.fetchTasksAsync() returns type: types.FETCH_TASKS_ASYNC', () => {
        expect(tasksActions.fetchTasksAsync()).toEqual({
            type: types.FETCH_TASKS_ASYNC,
        });
    });

    test('createTaskAsync returns CREATE_TASK_ASYNC and payload', () => {
        expect(tasksActions.createTaskAsync(__.task)).toEqual({
            type: types.CREATE_TASK_ASYNC,
            payload: __.task
        });
    });

    test('removeTaskAsync returns REMOVE_TASK_ASYNC and payload', () => {
        expect(tasksActions.removeTaskAsync(__.task.id)).toEqual({
            type: types.REMOVE_TASK_ASYNC,
            payload: __.task.id
        });
    });
    test('completeTaskAsync returns COMPLETE_TASK_ASYNC and payload', () => {
        expect(tasksActions.completeTaskAsync(__.task)).toEqual({
            type: types.COMPLETE_TASK_ASYNC,
            payload: __.task
        });
    });
    test('incompleteTaskAsync returns COMPLETE_TASK_ASYNC and payload', () => {
        expect(tasksActions.incompleteTaskAsync(__.task)).toEqual({
            type: types.INCOMPLETE_TASK_ASYNC,
            payload: __.task
        });
    });
    test('favoriteTaskAsync returns FAVORITE_TASK_ASYNC and payload', () => {
        expect(tasksActions.favoriteTaskAsync(__.task)).toEqual({
            type: types.FAVORITE_TASK_ASYNC,
            payload: __.task
        });
    });
    test('unfavoriteTaskAsync returns UNFAVORITE_TASK_ASYNC and payload', () => {
        expect(tasksActions.unfavoriteTaskAsync(__.task)).toEqual({
            type: types.UNFAVORITE_TASK_ASYNC,
            payload: __.task
        });
    });

    test('updateMessageAsync returns UPDATE_MESSAGE_ASYNC and payload', () => {
        expect(tasksActions.updateMessageAsync(__.task)).toEqual({
            type: types.UPDATE_MESSAGE_ASYNC,
            payload: __.task
        });
    });

    test('completeAllTasksAsync returns COMPLETE_ALL_TASKS_ASYNC and payload', () => {
        expect(tasksActions.completeAllTasksAsync(__.tasks)).toEqual({
            type: types.COMPLETE_ALL_TASKS_ASYNC,
            payload: __.tasks
        });
    });

    test('tasksActions.createTask() returns type: types.CREATE_TASK and payload', () => {
        expect(tasksActions.createTask(__.task)).toEqual({
            type: types.CREATE_TASK,
            payload: __.task
        });
    });

    test('tasksActions.fillTasks() returns type: types.FILL_TASKS and payload', () => {
        expect(tasksActions.fillTasks(__.tasks)).toEqual({
            type: types.FILL_TASKS,
            payload: __.tasks,
        });
    });

    test('tasksActions.removeTask() returns type: REMOVE_TASK and payload', () => {
        expect(tasksActions.removeTask(__.task.id)).toEqual({
            type: types.REMOVE_TASK,
            payload: __.task.id,
        });
    });

    test('tasksActions.completeTask() returns type: COMPLETE_TASK and payload', () => {
        expect(tasksActions.completeTask(__.task)).toEqual({
            type: types.COMPLETE_TASK,
            payload: __.task,
        });
    });

    test('tasksActions.completeAllTasks() returns type: COMPLETE_ALL_TASKS and payload', () => {
        expect(tasksActions.completeAllTasks(__.tasks)).toEqual({
            type: types.COMPLETE_ALL_TASKS,
            payload: __.tasks
        });
    });
    test('tasksActions.incompleteTask() returns and payload', () => {
        expect(tasksActions.incompleteTask(__.task)).toEqual({
            type: types.INCOMPLETE_TASK,
            payload: __.task
        });
    });
    test('tasksActions.favoriteTask() returns FAVORITE_TASK and payload', () => {
        expect(tasksActions.favoriteTask(__.task)).toEqual({
            type: types.FAVORITE_TASK,
            payload: __.task
        });
    });

    test('tasksActions.unfavoriteTask() returns and payload', () => {
        expect(tasksActions.unfavoriteTask(__.task)).toEqual({
            type: types.UNFAVORITE_TASK,
            payload: __.task
        });
    });

    test('tasksActions.updateMessage() returns UPDATE_MESSAGE and payload', () => {
        expect(tasksActions.updateMessage(__.task)).toEqual({
            type: types.UPDATE_MESSAGE,
            payload: __.task
        });
    });
});
