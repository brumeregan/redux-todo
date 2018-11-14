import { put, apply } from 'redux-saga/effects';
import { tasksActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST/api';

export function* completeAllTask ({ payload: completedTask }) {
    try {
        yield put(uiActions.startSpinning());

        const response = yield apply(api, api.tasks.completeAll, [completedTask]);

        const { data: tasks, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(tasksActions.completeAllTasks(tasks));

    } catch (error) {
        yield put(uiActions.emitError(error, 'complete all tasks worker'));
    } finally {
        yield put(uiActions.stopSpinning());
    }
}
