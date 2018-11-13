import { put, apply } from 'redux-saga/effects';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST/api';

export function* completeTask ({ payload: completedTask }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.update, [completedTask]);

        const { data: task, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.completeTask(completedTask));

    } catch (error) {
        yield put(uiActions.emitError(error, 'complete task worker'));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
