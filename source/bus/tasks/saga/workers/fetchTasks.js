import { put, apply } from 'redux-saga/effects';
import { tasksActions } from '../../actions';
import { api } from '../../../../REST/api';
import { uiActions } from '../../../ui/actions';

export function* fetchTasks () {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.fetch);
        const { data: tasks, message } = yield apply(response, response.json);
        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(tasksActions.fillTasks(tasks));

    } catch (error) {
        yield put(uiActions.emitError(error, 'fetch tasks worker'));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
