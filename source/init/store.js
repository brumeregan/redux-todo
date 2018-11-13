import { enhancedStore, sagaMiddleware } from './middleware/core';
import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);
