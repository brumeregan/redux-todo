import { takeEvery, all, call } from 'redux-saga/effects';
import {
    completeTask,
    createTask,
    fetchTasks,
    removeTask,
    incompleteTask,
    favoriteTask,
    unfavoriteTask,
    updateMessage,
    completeAllTask
} from './workers';
import { types } from '../types';

function* watchFetchTasks () {
    yield takeEvery(types.FETCH_TASKS_ASYNC, fetchTasks);
}

function* watchCreateTask () {
    yield takeEvery(types.CREATE_TASK_ASYNC, createTask);
}

function* watchRemoveTask () {
    yield takeEvery(types.REMOVE_TASK_ASYNC, removeTask);
}

function* watchCompleteTask () {
    yield takeEvery(types.COMPLETE_TASK_ASYNC, completeTask);
}

function* watchIncompleteTask () {
    yield takeEvery(types.INCOMPLETE_TASK_ASYNC, incompleteTask);
}

function* watchFavoriteTask () {
    yield takeEvery(types.FAVORITE_TASK_ASYNC, favoriteTask);
}

function* watchUnfavoriteTask () {
    yield takeEvery(types.UNFAVORITE_TASK_ASYNC, unfavoriteTask);
}

function* watchUpdateMessage () {
    yield takeEvery(types.UPDATE_MESSAGE_ASYNC, updateMessage);
}

function* watchCompleteAllTasks () {
    yield takeEvery(types.COMPLETE_ALL_TASKS_ASYNC, completeAllTask);
}

export function* watchTasks () {
    yield all([
        call(watchFetchTasks),
        call(watchCreateTask),
        call(watchRemoveTask),
        call(watchCompleteTask),
        call(watchIncompleteTask),
        call(watchFavoriteTask),
        call(watchUnfavoriteTask),
        call(watchUpdateMessage),
        call(watchCompleteAllTasks)
    ]);
}
