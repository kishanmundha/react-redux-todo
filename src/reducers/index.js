import { createStore, combineReducers, compose } from 'redux';
import TodoReducer from './TodoReducer';

// Enable redux dev tool
const middleware = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// fetch persistState from sessionStorage
// As demo we just want to persist on session storage and clear once browser close
const persistState = !sessionStorage.getItem('todoappredux') ? undefined : JSON.parse(sessionStorage.getItem('todoappredux'));

// Create redux store
const store = createStore(
  combineReducers({
    todo: TodoReducer,
  }),
  persistState,
  middleware
);

// Listen store change and keep change on sessionStorage
store.subscribe(() => {
  sessionStorage.setItem('todoappredux', JSON.stringify(store.getState()));
});

export default store;
