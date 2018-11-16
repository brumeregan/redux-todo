import { put, apply } from 'redux-saga/effects';
import { api } from '../../../REST/api';
import { expectSaga } from 'redux-saga-test-plan';
import { fetchTasks } from '../saga/workers';
import { tasksActions } from '../actions';
import { uiActions } from '../../ui/actions';

describe('fetchTasks', () => {

    test('should handle 200 response status:', async () => {
        await expectSaga(fetchTasks)
            .put(uiActions.startSpinning())
            .provide([[apply(api, api.tasks.fetch), __.fetchResponseSuccess]])
            .put(tasksActions.fillTasks(__.tasks))
            .put(uiActions.stopSpinning())
            .run();
    });

    test('should handle 400 response error', async () => {
       await expectSaga(fetchTasks)
           .put(uiActions.startSpinning())
           .provide([[apply(api, api.tasks.fetch), __.fetchResponseFail400]])
           .put(uiActions.emitError(__.error, 'fetch tasks worker'))
           .run();
    });
});