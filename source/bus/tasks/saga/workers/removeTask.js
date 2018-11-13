import { put, apply } from 'redux-saga/effects';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST/api';

export function* removeTask ({ payload: taskId }) {
    try {
        yield put(uiActions.startSpinning());
        const response = yield apply(api, api.tasks.remove, [taskId]);

        if (response.status !== 204) {
            const data = yield apply(response, response.json);

            throw new Error(data.message);
        }

        yield put(tasksActions.removeTask(taskId));

    } catch (error) {
        yield put(uiActions.emitError(error, 'remove task worker'));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
