import { put, apply } from 'redux-saga/effects';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST/api';

export function* createTask ({ payload: newTask }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.create, [newTask]);

        const { data: task, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.createTask(task));

    } catch (error) {
        yield put(uiActions.emitError(error, 'create task worker'));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
