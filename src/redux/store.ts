import { guestListReducer } from './reducers';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

const rootReducer = combineReducers({
    guestList: guestListReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;

export { store };