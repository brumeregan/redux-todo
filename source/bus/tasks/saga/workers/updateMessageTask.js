import { put, apply } from 'redux-saga/effects';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST/api';

export function* updateMessage ({ payload: updateMessage }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.update, [updateMessage]);

        const { data: task, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.updateMessage(updateMessage));

    } catch (error) {
        yield put(uiActions.emitError(error, 'update task worker'));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
