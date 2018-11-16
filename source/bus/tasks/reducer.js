import { types } from './types';
import { fromJS, List } from 'immutable';

const initialState = List();

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_TASKS:
            return fromJS(action.payload);
        case types.CREATE_TASK:
            return state.push(fromJS(action.payload));
        case types.REMOVE_TASK:
            return state.filter((task) => task.get('id') !== action.payload);
        case types.COMPLETE_TASK:
            return state.updateIn([state.findIndex((task) => task.get('id') === action.payload.id)], (task) => {
                return task.set('completed', true);
            });
        case types.INCOMPLETE_TASK:
            return state.updateIn([state.findIndex((task) => task.get('id') === action.payload.id)], (task) => {
                return task.set('completed', false);
            });
        case types.FAVORITE_TASK:
            return state.updateIn([state.findIndex((task) => task.get('id') === action.payload.id)], (task) => {
                return task.set('favorite', true);
            });
        case types.UNFAVORITE_TASK:
            return state.updateIn([state.findIndex((task) => task.get('id') === action.payload.id)], (task) => {
                return task.set('favorite', false);
            });
        case types.UPDATE_MESSAGE:
            return state.updateIn([state.findIndex((task) => task.get('id') === action.payload.id)], (task) => {
                return task.set('message', action.payload.message);
            });
        case types.COMPLETE_ALL_TASKS:
            return state.map((task) => {
                const modifiedTask = action.payload.find((item) => item.id === task.get('id'));
                if (modifiedTask) {
                    return task.merge(modifiedTask);
                }
                return task;
            });

        default:
            return state;
    }
};
